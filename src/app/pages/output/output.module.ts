import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output.component';
import { RouterModule } from '@angular/router';
import { CommonAppModule } from '@common/common.module';
import { LayoutModule } from './../../layout/layout.module';
import { ListModule } from './list/list.module';
import { OutputRoutingModule } from './output-routing.module';
import { CoreModule } from '@core/core.module';
import { PlanDetailModule } from './plan-detail/plan-detail.module';
// import { ActualModule } from './actual/actual.module';
import { ActualDetailModule } from './actual/actual-detail.module';



@NgModule({
  declarations: [
    OutputComponent
  ],
  imports: [
    // CoreModule.forRoot(),
    CommonModule,
    RouterModule,
    CommonAppModule.forRoot(),
    LayoutModule,
    ListModule,
    OutputRoutingModule,
    PlanDetailModule,
    // ActualModule,
    ActualDetailModule

  ],
  providers: [],
  bootstrap: [OutputComponent]
})
export class OutputModule { }
