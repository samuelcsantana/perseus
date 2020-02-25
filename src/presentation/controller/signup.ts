import { HttpResponse, HttpRequest } from '../protocol/http'
import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helper/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
