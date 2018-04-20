import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBenchComponent } from './test-bench/test-bench.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', component: TestBenchComponent },
  { path: 'user', loadChildren: './users/users.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
