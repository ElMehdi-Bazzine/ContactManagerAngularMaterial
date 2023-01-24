import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isScreenSmall : boolean | undefined;
  isDarkTheme : boolean = false;
  direction : Direction = "ltr";

  users: Observable<User[]> | undefined;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(private breakpointObserver : BreakpointObserver,
              private userService : UserService,
              private router : Router) { }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection(){
    this.direction = this.direction == 'ltr' ? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state:BreakpointState) =>{
        this.isScreenSmall = state.matches;
      });

    this.users= this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(()=> {
      if (this.isScreenSmall) {
        this.sidenav?.close();
      }
    })
  }

}
