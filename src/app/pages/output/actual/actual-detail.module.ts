import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonAppModule } from '@common/common.module';
import { ActualDetailComponent } from './actual-detail.component';
import { LayoutModule } from "../../../layout/layout.module";
import { ActualComponent } from './components/actual/actual.component';



@NgModule({
  declarations: [ActualDetailComponent, ActualComponent],
  imports: [
    CommonModule,
    CommonAppModule.forRoot(),
    LayoutModule,
  ]
})
export class ActualDetailModule { }
