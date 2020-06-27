/* bootstrap database in your FaunaDB account */
const faunadb = require('faunadb')
const chalk = require('chalk')
const insideNetlify = insideNetlifyBuildContext()
const q = faunadb.query

console.log(chalk.cyan('Creating your FaunaDB Database...\n'))

// 1. Check for required enviroment variables
if (!process.env.FAUNADB_SERVER_SECRET) {
  console.log(
    chalk.yellow(
      'Required FAUNADB_SERVER_SECRET enviroment variable not found.',
    ),
  )
  console.log(
    `Make sure you have created your Fauna databse with "netlify addons:create fauna"`,
  )
  console.log(`Then run "npm run bootstrap" to setup your database schema`)
  if (insideNetlify) {
    process.exit(1)
  }
}

// Has var. Do the thing
if (process.env.FAUNADB_SERVER_SECRET) {
  createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
    console.log('Fauna Database schema has been created')
  })
}

async function createClass(client, name) {
  console.log(`Start creation of class ${name};`)
  await client
    .query(q.Create(q.Ref('classes'), {name}))
    .then(() => console.log(`Class ${name} was created.`))
    .catch((err) => console.log(err.description))
}

async function createIndex(client, name) {
  console.log(`Start creation of index all_${name};`)
  await client
    .query(
      q.Create(q.Ref('indexes'), {
        name: `all_${name}`,
        source: q.Ref(`classes/${name}`),
      }),
    )
    .then(() => console.log(`Index all_${name} was created.`))
    .catch((err) => console.log(err.description))
}

/* idempotent operation */
async function createFaunaDB(key) {
  console.log('Create the fauna database schema!')
  const client = new faunadb.Client({
    secret: key,
  })

  /* Based on your requirements, change the schema here */

  await createClass(client, 'markers')
  await createClass(client, 'teams')
  await createClass(client, 'users')

  await createIndex(client, 'markers')
  await createIndex(client, 'teams')
  await createIndex(client, 'users')
}

/* util methods */

// Test if inside netlify build context
function insideNetlifyBuildContext() {
  if (process.env.DEPLOY_PRIME_URL) {
    return true
  }
  return false
}
