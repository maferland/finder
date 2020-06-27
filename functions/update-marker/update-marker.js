import {createOrUpdateMarker} from '../util/Database.js'

exports.handler = async (event, context) => {
  const claims = context.clientContext && context.clientContext.user

  if (!claims) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        data: 'NOT ALLOWED',
      }),
    }
  }
  console.log(event, context)
  await createOrUpdateMarker({test: 123})

  return {
    statusCode: 201,
  }
}
