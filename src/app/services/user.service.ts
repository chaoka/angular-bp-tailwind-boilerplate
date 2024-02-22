import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _user = new BehaviorSubject<undefined | User>(undefined)
  user$ = this._user.asObservable()

  get user() {
    return this._user.getValue()
  }
  set user(value) {
    this._user.next(value)
  }
}
