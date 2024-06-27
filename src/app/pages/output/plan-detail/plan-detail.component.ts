import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PlanDetailService } from './services/plan-detail.service';
import { LoadingSpinnerDialogService } from '@layout/services';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@layout/models/title.model';
import { PlanOutputDetail } from './model/plan-output-detail.model';
import { OutputDetail } from '../../common/models/output-detail.model';
import { OutputDetailNumberService } from '../../common/services/output-detail-number.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit, OnDestroy {
  public planOutput!: OutputDetail;
  public pagePlanOutputDetail: PlanOutputDetail[] = [];
  public titlePlan!: Title;


  private selectedRecordId!: Observable<number | null>;
  private subscription!: Subscription;

  constructor(
    private ouputDetailNumberService: OutputDetailNumberService,
    private planDetailService: PlanDetailService,
    private loadingDialog: LoadingSpinnerDialogService,
  ) { }
  public initialTitle() {
    this.titlePlan = {
      header: '出庫',
      parent: '出庫一覧',
      children: '出庫予定入力',
      service: '0',
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initialTitle();
    // this.loadingDialog.showSpinner(true);
    this.selectedRecordId = this.ouputDetailNumberService.getSelectedRecordId();
    this.subscription = this.selectedRecordId.subscribe((id) => {
      if (id !== null) {
        this.getPlanOutput(id);
        this.getPagePlanOutputDetail(id);
      }
    });
    // this.loadingDialog.showSpinner(false);
  }

  public getPlanOutput(id: any) {
    // this.loadingDialog.showSpinner(true);
    this.planDetailService.getPlanOutput(id).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        // (res as HttpErrorResponse).status === 400
        console.error('HTTP Error:', res.status, res.message);
        return;
      } else {
        console.log(res.data);
        this.planOutput = this.formatDate(res.data);
      }
    })
  }
  public getPagePlanOutputDetail(id: any) {
    // this.loadingDialog.showSpinner(true);
    this.planDetailService.getPlanOutputDetail(id).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        // (res as HttpErrorResponse).status === 400
        console.error('HTTP Error:', res.status, res.message);
        return;
      } else {
        // console.log(res.content);
        this.pagePlanOutputDetail = res.content;
        this.pagePlanOutputDetail.forEach((detail) => {
          if (detail.datetimeMngFrom !== null) {
            detail.datetimeMngFrom = detail.datetimeMngFrom.replace(/\//g, '-');
          }
          if (detail.datetimeMngTo !== null) {
            detail.datetimeMngTo = detail.datetimeMngTo.replace(/\//g, '-');
          }
        })
      }
    })
  }

  // function thay thế kí tự / thành - trong Date
  public formatDate(jsonData: any): any {
    // Parse JSON thành một đối tượng JavaScript
    const obj = JSON.parse(JSON.stringify(jsonData));
    // Duyệt qua các cặp key:value trong đối tượng
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        // Kiểm tra giá trị (value) của key
        if (key.includes('Date') && value !== null) {
          // Thay thế '/' -> '-'
          obj[key] = value.replace(/\//g, '-');
        }
      }
    }
    return obj as any;
  }
}
