import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { LoginComponent } from '../../components/login/login.component'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginComponent],
})
export class LoginPageComponent {
  private r = inject(Router)
  private userServ = inject(UserService)

  handleSubmit() {
    this.userServ.user = {
      id: 'randomUUID',
      name: 'Jean-Claude Duss',
      photoURL: 'https://i.pravatar.cc/40',
      age: 34,
    }
    this.r.navigate([''])
  }
}
