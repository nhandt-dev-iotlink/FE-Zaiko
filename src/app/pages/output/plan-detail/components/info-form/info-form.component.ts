import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { createFormGroup } from 'src/app/pages/config/form-group.config';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { LoadingSpinnerDialogService } from '@layout/services';
import { RepositoryService } from 'src/app/pages/common/services/repository.service';
import { Repository } from 'src/app/pages/common/models/repository.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseService } from 'src/app/pages/common/services/course.service';
import { RouteService } from 'src/app/pages/common/services/route.service';
import { Course } from 'src/app/pages/common/models/course.model';
import { RouteEntity } from 'src/app/pages/common/models/route-entity.model';
import { OutputDetail } from 'src/app/pages/common/models/output-detail.model';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit, OnChanges {
  @Input() planOutput!: OutputDetail;
  @Input() outputStatus: string = "";
  @Output() setIsCloseParent: EventEmitter<string> = new EventEmitter<string>();

  protected contentIsClose: string = "クローズ";
  protected isClose: string = "";

  public infoForm: FormGroup = new FormGroup({});
  public listRepo: Repository[] = [];
  public listCourse: Course[] = [];
  public listRoute: RouteEntity[] = [];
  protected newShippingDest: boolean = false;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loadingDialog: LoadingSpinnerDialogService,
    private repoService: RepositoryService,
    private courseService: CourseService,
    private routeService: RouteService,

  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['planOutput'] && changes['planOutput'].currentValue) {
      this.patchValueToInfoForm();
      this.loadingDialog.showSpinner(false);
    }
  }

  ngOnInit(): void {
    this.getListRepository();
    this.getListCourse();
    this.getListRoute();
    this.initialForm();
    this.loadingDialog.showSpinner(false);
  }

  public navigateToOutput() {
    this.router.navigate(['/output']);
  }

  public initialForm(): void {
    this.infoForm = createFormGroup("infoFormPlanDetail");
  }

  public patchValueToInfoForm(): void {
    this.infoForm.patchValue({
      inventoryOutputId: this.planOutput.inventoryOutputId,
      isClosed: this.planOutput.isClosed,
      outputStatus: this.planOutput.outputStatus,
      orderDate: this.planOutput.orderDate,
      planOutputDate: this.planOutput.planOutputDate,
      planWorkingDate: this.planOutput.planWorkingDate,
      planDeliveryDate: this.planOutput.planDeliverDate,
      createSlipType: this.planOutput.createSlipType,
      slipNo: this.planOutput.slipNo,
      planSupplierSlipNo: this.planOutput.planSupplierSlipNo,
      planCustomerDeliveryDestinationId: this.planOutput.planCustomerDeliveryDestinationId,
      planCustomerId: this.planOutput.planCustomerId,
      planRepositoryId: this.planOutput.planRepositoryId,
      destinationCode: this.planOutput.destinationCode,
      departmentName: this.planOutput.departmentName,
      phoneNumber: this.planOutput.phoneNumber,
      faxNumber: this.planOutput.faxNumber,
      postCode: this.planOutput.postCode,
      address1: this.planOutput.address1,
      address2: this.planOutput.address2,
      address3: this.planOutput.address3,
      address4: this.planOutput.address4,
      customerCode: this.planOutput.customerCode,
      customerName: this.planOutput.customerName,
      routeCode: this.planOutput.routeCode,
      routeName: this.planOutput.routeName,
      courseCode: this.planOutput.routeCode.concat(this.planOutput.courseCode),
      courseName: this.planOutput.courseName,
      repositoryCode: this.planOutput.repositoryCode,
      repositoryName: this.planOutput.repositoryName,
      slipNote: this.planOutput.slipNote,
    })
    // this.outputStatus = this.getValueContentOutputStatus(this.planOutput.outputStatus);
    this.contentIsClose = this.getValueIsClose(this.planOutput.isClosed);
  }

  public getListRepository() {
    this.repoService.getListRepo().subscribe(res => {
      if ((res as HttpErrorResponse).status === 204) {
        console.log("Error: List Repository is Empty!");
        return;
      } else {
        this.listRepo = JSON.parse(JSON.stringify(res)).data;
        return;
      }
    })
  }
  public getListCourse() {
    this.courseService.getListCourse().subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: List Course is Empty!");
        return;
      }
      else {
        this.listCourse = res.data;
        return;
      }
    })
  }
  public getListRoute() {
    this.routeService.getListRoute().subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: List Route is Empty!");
        return;
      } else {
        this.listRoute = res.data;
        return;
      }
    })
  }

  // public getValueContentOutputStatus(status: string = '0'): string {
  //   let value = '未出庫';
  //   switch (status) {
  //     case '1':
  //       value = '出庫残';
  //       break;
  //     case '2':
  //       value = '出庫済';
  //       break;
  //     default:
  //       break;
  //   }
  //   return value;
  // }
  public getCollorContentOutputStatus(status: string = '未出庫'): string {
    let value = 'conten-not-yet ';
    switch (status) {
      case '出庫残':
        value = 'conten-remain ';
        break;
      case '出庫済':
        value = 'conten-done ';
        break;
      default:
        break;
    }
    return value;
  }
  public getValueIsClose(isClose: string = '0'): string {
    let value = "クローズ";
    return (isClose === '0' ? value : value.concat("解除"));
  }
  public setIsClose() {
    this.isClose = this.infoForm.get('isClosed')!.value === '0' ? '1' : '0';
    this.infoForm.get('isClosed')!.setValue(this.isClose)
    this.contentIsClose = this.isClose === '1' ? 'クローズ解除' : 'クローズ';
    this.setIsCloseParent.emit(this.isClose);
  }
  public setNewShippingDest() {
    this.newShippingDest = this.newShippingDest ? false : true;
  }
}
