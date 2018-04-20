import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './users-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, UserRoutingModule],
  declarations: [UsersComponent]
})
export class UserModule {}
