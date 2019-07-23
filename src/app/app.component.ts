import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  state$: Observable<object>;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.state$ = this.router.events.pipe(
    //   filter(e => e instanceof NavigationStart),
    //   map(() => {
    //     const currentNav = this.router.getCurrentNavigation();
    //     return currentNav.extras.state;
    //   })
    // );
  }

  go() {
    this.router.navigateByUrl('/details', { state: { hello: 'details' } });
  }
}
