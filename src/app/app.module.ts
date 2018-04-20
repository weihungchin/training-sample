import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/users.service';
import { FormsModule } from '@angular/forms';
import { TestBenchComponent } from './test-bench/test-bench.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ChildSampleComponent } from './child-sample/child-sample.component';
@NgModule({
  declarations: [AppComponent, TestBenchComponent, ChildSampleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
