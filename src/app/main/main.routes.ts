import { RouterLink, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { WelcomeComponent } from "../components/welcome/welcome.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { NgModule } from "@angular/core";
import { ScheduleComponent } from "../components/schedule/schedule.component";

const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'schedule', component: ScheduleComponent },
    
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule]
})
export class MainRouterModule { }