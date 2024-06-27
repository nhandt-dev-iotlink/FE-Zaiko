import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputComponent } from './output.component';
import { ListComponent } from './list/list.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { ActualDetailComponent } from './actual/actual-detail.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'lists' },
    {
        path: '', component: OutputComponent, children: [
            { path: 'lists', component: ListComponent },
            { path: 'plan', component: PlanDetailComponent },
            { path: 'actual', component: ActualDetailComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutputRoutingModule { }
