import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../modules/shared.module';
import { MaterialModules } from '../../modules/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [SharedModules,
    MaterialModules,
    RouterLink
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

}