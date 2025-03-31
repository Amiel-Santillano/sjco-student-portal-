import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MainRouterModule } from './main.routes';
import { MaterialModules } from '../modules/material.module';
import { SharedModules } from '../modules/shared.module';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { LogoutComponent } from '../components/logout/logout.component';
import { EditprofileComponent } from '../components/editprofile/editprofile.component';
import { ChangepasswordComponent } from '../components/changepassword/changepassword.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    MaterialModules,
    MainRouterModule,
    SharedModules,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    constructor(public dialog: MatDialog) { }
  
    openChangePasswordDialog(): void {
      const dialogRef = this.dialog.open(ChangepasswordComponent, {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          alert('Password changed successfully!');
        }
      });
    }
    
  openLogoutDialog() {
    this.dialog.open(LogoutComponent);
  }

  private breakpointObserver = inject(BreakpointObserver);
  protected sjcLogo: string = 'assets/image/sjclogo.png';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
    protected onActivate(): void {
      document.body.scrollTop = 0;
      document.querySelector('body')?.scrollTo(0,0);
    }

    // protected closeSideNav(): void { if(this.uaType==="mobile") { this.drawer.close() }}
}
