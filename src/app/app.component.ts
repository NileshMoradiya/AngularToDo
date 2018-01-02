import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: ['.red{background-color:red }']
})
export class AppComponent {
  title = 'App';
  selectedUser: User;
  users: User[] = [];
   fontSizePx = 20;
   constructor() {
    this.users = [
      new User(1, 'Mr. Red', 'CTO'),
      new User(2, 'Mr. Blue', 'CEO'),
      new User(3, 'Mr. Green', 'CFO'),
      new User(4, 'Mr. White', 'Director')
    ];
     this.title = 'Bindings';
   }

  onSelectUser(user: User): void {
    this.selectedUser = user;
  }
}
