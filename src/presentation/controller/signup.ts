import { HttpResponse, HttpRequest } from '../protocol/http'
import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocol/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
