import { Dialog } from '@angular/cdk/dialog'
import { CdkMenuModule } from '@angular/cdk/menu'
import { AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { shareReplay } from 'rxjs'
import { UserService } from '../../services/user.service'
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, CdkMenuModule, AsyncPipe],
})
export class NavbarComponent {
  private userServ = inject(UserService)
  private dialog = inject(Dialog)
  user$ = this.userServ.user$.pipe(shareReplay(1))

  openProfileDialog() {
    this.dialog.open(ProfileDialogComponent)
  }

  logOut() {
    this.userServ.user = undefined
  }
}
