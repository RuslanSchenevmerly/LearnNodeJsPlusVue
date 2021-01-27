import colors from 'colors'

export function requestTime(request, response, next) {
  request.requestTime = Date.now()
  next()
}