import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [RouterLink,
    SharedModules,
    MaterialModules,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  apiLoginObj: any = {
      "EmailId": "",
      "Password": ""
  }

  http = inject(HttpClient)

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res:any)=>{
      debugger;
      localStorage.setItem("angular19User",res.data.userID)
    },error=>{
      alert("Login Success!")    
    })
}
}


 



