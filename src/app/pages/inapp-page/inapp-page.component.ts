import { AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { first, switchMap } from 'rxjs'
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { BeerService } from '../../services/beer.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-inapp-page',
  standalone: true,
  templateUrl: './inapp-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarComponent, AsyncPipe],
})
export class InappPageComponent {
  user$ = inject(UserService).user$
  beerServ = inject(BeerService)

  beerList$ = this.user$.pipe(
    // Get the beer list once if user is logged in
    first((u) => !!u),
    switchMap(() => this.beerServ.getBeers()),
  )
}
