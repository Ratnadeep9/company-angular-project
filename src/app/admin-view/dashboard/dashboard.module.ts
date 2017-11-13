import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardRoutingModule } from 'app/admin-view/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'app/admin-view/dashboard/dashboard.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
