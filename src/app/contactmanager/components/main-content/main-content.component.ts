import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User | undefined;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      let id = params['id'];
      if(!id) id = 1;
      this.user = undefined;

      this.userService.users.subscribe(users => {
        if(users.length>0) return;
      })

      setTimeout(()=>{
        this.user=this.userService.getUserByID(id);
      }, 500)
    })
  }

}
