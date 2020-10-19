exports.handler =  async event => {
  const subject = event.queryStringParameter.name || "world"

  return {
    statusCode:200,
    body : `Hello ${subject}`
  }
}