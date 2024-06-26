import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../tools/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule],
  providers: [UserService],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  user: User = { id: 0, name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    var user = this.service.getUser(id);
    if (user) {
      this.user = user;
    }
  }

  onSubmit(form: any): void {
    let user = {
      id: form.id,
      name: form.name,
      email: form.email,
    };
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to update this user?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.service.setUser(user);
        this.router.navigate(['/users']);
      }
    });
  }
}
