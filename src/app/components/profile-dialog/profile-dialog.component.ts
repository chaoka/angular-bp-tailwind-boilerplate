import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-profile-dialog',
  standalone: true,
  templateUrl: './profile-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class ProfileDialogComponent {
  userServ = inject(UserService)
  form = inject(NonNullableFormBuilder).group({
    name: [this.userServ.user?.name],
  })

  constructor() {
    this.form
      .get('name')
      ?.valueChanges.pipe(takeUntilDestroyed())
      .subscribe(
        (name) =>
          (this.userServ.user = { ...this.userServ.user!, name: name! }),
      )
  }

  updateName(e: Event) {
    console.log(e)
  }
}
