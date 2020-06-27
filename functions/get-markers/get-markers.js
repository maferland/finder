import {getAll} from '../util/Database.js'

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

  const markers = await getAll('markers')

  return {
    statusCode: 200,
    body: JSON.stringify({markers}),
  }
}
