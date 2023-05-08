import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { AboutComponent } from './admin/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    AdminComponent,
    TeamsComponent,
    ProjectsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
