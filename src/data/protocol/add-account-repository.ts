import { AddAccountModel } from '../../domain/usecase/add-account'
import { AccountModel } from '../../domain/model/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
