import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ]
  user!: User;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
              private userService: UserService,
              private _snackBar: MatSnackBar) { }

  name = new FormControl('', [Validators.required]);


  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    if(this.name.value != '') {
      this.user.name = this.name.value! ;

      this.userService.addUser(this.user).then( (user: any) => {
        this.dialogRef.close(user);
      })

    }
    else {
      this._snackBar.open('You can\'t register a contact without providing a name', 'close', {
        duration: 5000,
      });
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
