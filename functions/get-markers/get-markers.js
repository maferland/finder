exports.handler = async (event, context) => {
  const claims = context.clientContext && context.clientContext.user

  if (!claims) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        data: 'NOT ALLOWED'
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ markers: [] })
  }
}
