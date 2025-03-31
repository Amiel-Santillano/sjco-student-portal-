import { Component } from '@angular/core';
import { MaterialModules } from '../../modules/material.module';
import { SharedModules } from '../../modules/shared.module';

@Component({
  selector: 'app-schedule',
  imports: [MaterialModules,
    SharedModules
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
