import { Component, OnInit } from '@angular/core';
import { User } from '../../store/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../store/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users$: Observable<User[]>;
  
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.loadUser();
    this.users$ = this.userService.getAllUsers();
  }

}
