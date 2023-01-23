import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { AuthGuardianServiceService } from './auth-guardian-service.service';
import { RolGuardGuard } from './rol-guard.guard';
import { JwtGuardGuard } from './jwt-guard.guard';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users', canActivate: [AuthGuardianServiceService],
    component: UsersComponent,
    children: [
      { 
        path: ':id', 
        component: UserComponent }
    ]
  },
  
  {
    path: 'servers',  canActivate: [AuthGuardianServiceService],
    component: ServersComponent,
    children: [
      { path: ':id/edit', canActivate:[RolGuardGuard], component: EditServerComponent },
      { path: ':id', component: ServerComponent}
    ]
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
