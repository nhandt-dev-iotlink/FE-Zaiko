import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { createFormGroup } from 'src/app/pages/config/form-group.config';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingSpinnerDialogService } from '@layout/services';
import { RepositoryService } from 'src/app/pages/common/services/repository.service';
import { CourseService } from 'src/app/pages/common/services/course.service';
import { RouteService } from 'src/app/pages/common/services/route.service';
import { Repository } from 'src/app/pages/common/models/repository.model';
import { Course } from 'src/app/pages/common/models/course.model';
import { RouteEntity } from 'src/app/pages/common/models/route-entity.model';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogOptionApiConfig } from 'src/app/pages/config/dialog-option-api.config';
import { DialogSeachApiComponent } from '@common/components/dialog-seach-api/dialog-search-api.component';
import { MatDialog } from '@angular/material/dialog';
import { Utils } from '@common/utils/utils';
import { ProductTypeService } from 'src/app/pages/common/services/product-type.service';
import { ProductType } from 'src/app/pages/common/models/product-type.model';
import { CustomerService } from 'src/app/pages/common/services/customer.service';
import { CustomerDestinationService } from 'src/app/pages/common/services/customer-destination.service';
import { ProductService } from 'src/app/pages/common/services/product.service';
import { Location } from 'src/app/pages/common/models/location.model';
import { PlanDetailService } from '../../services/plan-detail.service';
import { PlanOutputDetail, PlanOutputForm } from '../../model/plan-output-detail.model';
import { LocationService } from 'src/app/pages/common/services/location.service';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from '@core/services';
import { OutputDetail } from 'src/app/pages/common/models/output-detail.model';
import { OutputDetailNumberService } from 'src/app/pages/common/services/output-detail-number.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit, OnChanges {
  @Input() planOutput!: OutputDetail;
  @Input() pagePlanOutputDetail!: PlanOutputDetail[];


  protected outputStatus: string = "";
  protected contentIsClose: string = "";
  protected isClose: string = "";

  protected isPlanDetail: boolean = false;
  protected statusPlanDate: string = '';

  public utils = Utils;
  public listRepo: Repository[] = [];
  public listCourse: Course[] = [];
  public listRoute: RouteEntity[] = [];
  public listProductType: ProductType[] = [];
  public locationArray: Location[][] = [];
  protected newShippingDest: boolean = false;
  protected disabledCustomerOrCustomerDest: number = 0;
  protected slipNoDisabled: boolean = false;
  protected leadTimeCus: number = 0;
  public repository: Repository = {
    repositoryId: 1,
    repositoryCode: '',
    repositoryName: ''
  };
  public planOutputForm: FormGroup = new FormGroup({});
  protected statusForm: string = '';

  constructor(
    private planDetailService: PlanDetailService,
    private router: Router,
    private ouputDetailNumberService: OutputDetailNumberService,
    private fb: FormBuilder,
    private loadingDialog: LoadingSpinnerDialogService,
    private repoService: RepositoryService,
    private courseService: CourseService,
    private routeService: RouteService,
    private productTypeService: ProductTypeService,
    private customerService: CustomerService,
    private customerDestinationService: CustomerDestinationService,
    private productService: ProductService,
    private locationService: LocationService,
    private dialog: MatDialog,
    private dialogConfirmService: DialogConfirmService,
    private toast: ToastrService,
    private languageService: LanguageService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['planOutput'] && changes['planOutput'].currentValue || changes['pagePlanOutputDetail'] && changes['pagePlanOutputDetail'].currentValue) {
      this.patchValueToForm();
      if (this.planOutput) {
        this.isClose = this.planOutput.isClosed;
        this.outputStatus = this.getValueContentOutputStatus(this.planOutput.outputStatus);
        this.contentIsClose = this.getValueIsClose(this.planOutput.isClosed);
      }
      if (this.pagePlanOutputDetail) {
      }
    }
    this.setIsPlanDetail();
    this.setStatusPlanDate();
  }

  public navigateToOutput() {
    this.ouputDetailNumberService.removeSelectedRecordId();
    this.router.navigate(['/output']);
  }

  ngOnInit() {
    this.loadingDialog.showSpinner(true);
    this.getListProductType();
    this.getListRepository();
    this.getListRoute();
    this.initialForm();
    this.loadingDialog.showSpinner(false);
  }
  public patchValueToForm() {
    if (this.planOutput) {
      this.infoForm.patchValue(this.planOutput);
      console.log(this.planOutput);

    }
    if (this.pagePlanOutputDetail.length > 0) {
      for (let i = 0; i < this.pagePlanOutputDetail.length - 1; i++) {
        this.addDetailGroup();
      }
      this.detailForm.patchValue(this.pagePlanOutputDetail);
    }
  }

  public deleteInventoryOutput() {
    const id = this.infoForm.get('inventoryOutputId')?.value;
    this.planDetailService.deleteInventoryOutput(id).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        // (res as HttpErrorResponse).status === 400
        console.error('HTTP Error:', res.status, res.message);
        return;
      } else {
        console.log(res);
        this.toast.success(this.languageService.get('common.message.delete-success'));
        console.log(this.languageService.get('common.message.delete-success'));
      }
    });
  }

  public initialForm(): void {
    this.planOutputForm = this.fb.group({
      infoForm: createFormGroup("infoFormOutputDetail"),
      detailForm: this.fb.array([])
    });
    this.addDetailGroup();
    // this.planOutputForm.valueChanges.subscribe(value => {
    //   console.log((value));
    //   console.log(
    //     this.statusPlanDate
    //   );
    //   console.log(this.outputStatus);
    //   console.log(this.isClose);


    // console.log(JSON.stringify(this.previousValue));
    // console.log(JSON.stringify(value) === JSON.stringify(this.previousValue));
    // })

    // this.planOutputForm.statusChanges.subscribe((status) => {
    //   this.statusForm = status;
    //   if (status === 'INVALID') {
    //     console.log('Form is invalid');
    //   }
    // });

    const infoFormValue = this.infoForm;

    infoFormValue.get('isClosed')?.valueChanges.subscribe(value => {
      this.setIsPlanDetail();
      this.setStatusPlanDate();
    })

    infoFormValue.get('createSlipType')?.valueChanges.subscribe(value => {
      this.slipNoDisabled = !this.slipNoDisabled;
      if (value === '0') {
        infoFormValue.get('slipNo')?.setValue('');
      } else {
        infoFormValue.get('slipNo')?.setValue(null);
        infoFormValue.get('slipNo')?.setErrors({ required: true });
      }
    });

    infoFormValue.get('routeCode')?.valueChanges.subscribe(value => {
      this.getListCourseByRoute(value);
    });

    infoFormValue.get('planOutputDate')?.valueChanges.subscribe(value => {
      infoFormValue.get('planWorkingDate')?.setValue(value);
      this.setPlanDeliveryDate();
      // const newDate = new Date(value);
      // newDate.setDate(newDate.getDate() + this.leadTimeCus);
      // const nextDate = this.utils.convertDateFormat(newDate, 'YYYYMMDD').replace(/\//g, '-');
      // infoFormValue.get('planDeliveryDate')?.setValue(nextDate);
    });

    infoFormValue.get('slipNo')?.valueChanges.subscribe(value => {
      if (infoFormValue.get('inventoryOutputId')?.value === null && value !== '' && value !== null) {
        this.checkSlipNo(value);
      }
    });

    infoFormValue.get('destinationCode')?.valueChanges.subscribe(value => {

      if (value !== null && value !== '' && this.disabledCustomerOrCustomerDest === 0) {
        this.disabledCustomerOrCustomerDest = 1;
      } else if (value === '' || value === null && this.disabledCustomerOrCustomerDest === 2) {
        infoFormValue.get('customerCode')?.setValue(null);
        this.disabledCustomerOrCustomerDest = 0;
      }
      if (this.newShippingDest) {
        this.getCustomerDestinationByCodeNewShippingDest(value);
      } else {
        this.getCustomerDestinationByCode(value);
      }
    });

    infoFormValue.get('customerCode')?.valueChanges.subscribe(value => {
      if (value !== null && value !== '' && this.disabledCustomerOrCustomerDest === 0) {
        this.disabledCustomerOrCustomerDest = 2;
      } else if (value === '' || value === null && this.disabledCustomerOrCustomerDest === 1) {
        infoFormValue.get('destinationCode')?.setValue(null);
        this.disabledCustomerOrCustomerDest = 0;
      }
      if (this.newShippingDest) {
        this.getCustomerByCodeNewShippingDest(value);
      } else {
        this.getCustomerByCode(value);
      }
      this.setPlanDeliveryDate();
    });

    infoFormValue.get('planRepositoryId')?.valueChanges.subscribe(value => {
      this.getRepoById(value);
    })

    infoFormValue.get('phoneNumber')?.valueChanges.subscribe(value => {
      if (this.newShippingDest && value === '') {
        infoFormValue.get('phoneNumber')?.setErrors({ required: true })
      }
    })
    infoFormValue.get('postCode')?.valueChanges.subscribe(value => {
      if (this.newShippingDest && value === '') {
        infoFormValue.get('postCode')?.setErrors({ required: true })
      }
    })
    infoFormValue.get('address1')?.valueChanges.subscribe(value => {
      if (this.newShippingDest && value === '') {
        infoFormValue.get('address1')?.setErrors({ required: true })
      }
    })
  }



  get detailForm() {
    return this.planOutputForm.get('detailForm') as FormArray;
  }
  detailFormAtIndex(index: number) {
    return this.detailForm.at(index) as FormGroup;
  }
  get infoForm() {
    return this.planOutputForm.get('infoForm') as FormGroup
  }
  public createDetailGroup() {
    return createFormGroup("detailFormPlanDetail");
  }
  public addDetailGroup() {
    this.detailForm.push(this.createDetailGroup());
    this.setRepoDetailNewAdd(this.detailForm.length - 1);
  }
  public copyDetailGroup(index: number) {
    const detailForm = this.detailFormAtIndex(index);
    const copyForm = this.fb.group(detailForm.getRawValue());
    this.detailForm.insert(index + 1, copyForm);
    this.getLocationByRepo(index + 1, true);
    const detailFormCopy = this.detailFormAtIndex(index + 1);
    detailFormCopy.get('planDetailId')?.setValue(null);
    const productCode = detailFormCopy.get('productCode')?.value;
    if (productCode !== null) {
      this.getProductByCode(productCode, index + 1, true)
    } else {
      detailFormCopy.get('billingPackType')?.disable();
      this.changeBillingPackType(index + 1, detailForm.get('billingPackType')?.value);
    }
  }

  public removeDetailGroup(index: number) {
    this.detailFormAtIndex(index).get('delFlg')?.setValue('1');
    this.detailForm.removeAt(index);
    this.locationArray.splice(index, 1)
    this.toast.success(this.languageService.get('common.message.delete-success'));
    console.log(this.languageService.get('common.message.delete-success'));
    if (this.detailForm.length < 1) {
      this.addDetailGroup();
    }
  }

  public submitForm() {
    let planForm: PlanOutputForm;
    planForm = this.planOutputForm.getRawValue();
    planForm.infoForm.orderDate = planForm.infoForm.orderDate.replace(/-/g, '/');
    planForm.infoForm.planDeliverDate = planForm.infoForm.planDeliverDate.replace(/-/g, '/');
    planForm.infoForm.planOutputDate = planForm.infoForm.planOutputDate.replace(/-/g, '/');
    planForm.infoForm.planWorkingDate = planForm.infoForm.planWorkingDate.replace(/-/g, '/');
    planForm.detailForm.forEach((detail) => {
      if (detail.datetimeMngFrom !== null) {
        detail.datetimeMngFrom = detail.datetimeMngFrom.replace(/-/g, '/');
      }
      if (detail.datetimeMngTo !== null) {
        detail.datetimeMngTo = detail.datetimeMngTo.replace(/-/g, '/');
      }
    })
    if (planForm.infoForm.inventoryOutputId === null) {
      this.planDetailService.createPlanOutputDetail(planForm).subscribe(res => {
        console.log(res);
        if (res.meta.code === '201') {
          this.toast.success(this.languageService.get('common.message.save-success'));
        } else {
          this.toast.error(this.languageService.get('common.message.save-error'))
        }
      })
    } else {
      this.planDetailService.updatePlanOutputDetail(planForm).subscribe(res => {
        console.log(res);
        if (res.meta.code === '200') {
          this.toast.success(this.languageService.get('common.message.save-success'));
        } else {
          this.toast.error(this.languageService.get('common.message.save-error'))
        }
      })
    }
  }

  public popupRemoveDetail(index: number) {
    const mess = 'Are you sure to delete this record?';
    const dialogConfirm = this.dialogConfirmService.confirmCustomBntDialog(mess, 'delete', 'DELETE', 'CANCEL');
    dialogConfirm.afterClosed().subscribe(item => {
      if (item) {
        this.removeDetailGroup(index);
      }
    });
  }
  public popupRemoveInventoryOutput() {
    const slipNo = this.infoForm.get('slipNo')?.value;
    const mess = 'Are you sure to delete output no ' + slipNo + '?';
    const dialogConfirm = this.dialogConfirmService.confirmCustomBntDialog(mess, 'delete', 'DELETE', 'CANCEL');
    dialogConfirm.afterClosed().subscribe(item => {
      if (item) {
        this.deleteInventoryOutput();
      }
    });
  }

  public setPlanDeliveryDate() {
    const infoFormValue = this.infoForm;
    const planOutputDate = infoFormValue.get('planOutputDate')?.value;
    if (planOutputDate !== null) {
      const newDate = new Date(planOutputDate);
      newDate.setDate(newDate.getDate() + this.leadTimeCus);
      const nextDate = this.utils.convertDateFormat(newDate, 'YYYYMMDD').replace(/\//g, '-');
      infoFormValue.get('planDeliveryDate')?.setValue(nextDate);
    }
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

  public getListCourseByRoute(code: string) {
    this.courseService.getListCourseByRoute(code).subscribe(res => {
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
  public getListProductType() {
    this.productTypeService.getListProductType().subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: List Product Type is Empty!");
        return;
      } else {
        this.listProductType = res.data;
        return;
      }
    })
  }
  public checkSlipNo(slipNo: string) {
    this.planDetailService.checkSlipNo(slipNo).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Slip No error!");
        return;
      } else {
        let form = this.infoForm;
        if (res.meta.code === '200') {
          form.get('slipNo')?.setErrors({ duplicateSlipNo: true })
        }
      }
    })
  }
  public getCustomerByCode(code: string, index?: number) {
    this.customerService.getCustomerByCode(code).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Customer not fould!");
        return;
      } else {
        let form = this.infoForm;
        if (index || index === 0) {
          form = this.detailFormAtIndex(index);
        }
        if (this.disabledCustomerOrCustomerDest === 2 && !index && index !== 0) {
          form.get('destinationCode')?.setValue(code);
        }
        this.leadTimeCus = 0;
        if (res.meta.code === '200') {
          form.get('customerName')?.setValue(res.data.customerName);
          if (!index) {
            this.leadTimeCus = res.data.leadTime;
          }
        } else {
          form.get('customerName')?.setValue(null);
          form.get('customerCode')?.setErrors({ notFound: true });
        }
        this.setPlanDeliveryDate();
        return;
      }
    })
  }
  public getCustomerByCodeNewShippingDest(code: string) {
    this.customerService.getCustomerByCode(code).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Customer not fould!");
        return;
      } else {
        let form = this.infoForm;
        if (this.disabledCustomerOrCustomerDest === 2) {
          form.get('destinationCode')?.setValue(code);
        }
        this.leadTimeCus = 0;
        if (res.meta.code === '200') {
          form.get('customerCode')?.setErrors({ existing: true });
          form.get('customerName')?.disable();

        } else {
          form.get('customerName')?.enable();
          form.get('customerName')?.setValue(null);
          form.get('customerName')?.setErrors({ required: true });
        }
        this.setPlanDeliveryDate();
        return;
      }
    })
  }
  public getCustomerDestinationByCode(code: string) {
    this.customerDestinationService.getCustomerDestinationByCode(code).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Customer Destination not fould!");
        return;
      } else {
        const infoForm = this.infoForm;
        if (this.disabledCustomerOrCustomerDest === 1) {
          infoForm.get('customerCode')?.setValue(code);
        }
        if (res.meta.code === '200') {
          infoForm.get('departmentName')?.setValue(res.data.departmentName);
          infoForm.get('phoneNumber')?.setValue(res.data.phoneNumber);
          infoForm.get('faxNumber')?.setValue(res.data.faxNumber);
          infoForm.get('postCode')?.setValue(res.data.postCode);
          // infoForm.get('routeCode')?.setValue(res.data.routeCode);
          // infoForm.get('courseCode')?.setValue(res.data.courseCode);
          infoForm.get('address1')?.setValue(res.data.address1);
          infoForm.get('address2')?.setValue(res.data.address2);
          infoForm.get('address3')?.setValue(res.data.address3);
          infoForm.get('address4')?.setValue(res.data.address4);
        } else {
          infoForm.get('departmentName')?.setValue(null);
          infoForm.get('phoneNumber')?.setValue(null);
          infoForm.get('faxNumber')?.setValue(null);
          infoForm.get('postCode')?.setValue(null);
          infoForm.get('routeCode')?.setValue(null);
          infoForm.get('courseCode')?.setValue(null);
          infoForm.get('address1')?.setValue(null);
          infoForm.get('address2')?.setValue(null);
          infoForm.get('address3')?.setValue(null);
          infoForm.get('address4')?.setValue(null);
          if (code) {
            infoForm.get('destinationCode')?.setErrors({ notFound: true });
          } else {
            infoForm.get('destinationCode')?.setErrors({ required: true });
          }
        }
        return;
      }
    })
  }
  public getCustomerDestinationByCodeNewShippingDest(code: string) {
    this.customerDestinationService.getCustomerDestinationByCode(code).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Customer Destination not fould!");
        return;
      } else {
        const infoForm = this.infoForm;
        infoForm.get('departmentName')?.setValue(null);
        if (this.disabledCustomerOrCustomerDest === 1) {
          infoForm.get('customerCode')?.setValue(code);
        }
        if (res.meta.code === '200') {
          infoForm.get('destinationCode')?.setErrors({ existing: true });
          infoForm.get('departmentName')?.disable();
          infoForm.get('customerName')?.disable();
          infoForm.get('phoneNumber')?.disable();
          infoForm.get('faxNumber')?.disable();
          infoForm.get('postCode')?.disable();
          // infoForm.get('routeCode')?.disable();
          // infoForm.get('courseCode')?.disable();
          infoForm.get('address1')?.disable();
          infoForm.get('address2')?.disable();
          infoForm.get('address3')?.disable();
          infoForm.get('address4')?.disable();
        } else {
          infoForm.get('departmentName')?.enable();
          infoForm.get('phoneNumber')?.enable();
          infoForm.get('faxNumber')?.enable();
          infoForm.get('postCode')?.enable();
          // infoForm.get('routeCode')?.enable();
          // infoForm.get('courseCode')?.enable();
          infoForm.get('address1')?.enable();
          infoForm.get('address2')?.enable();
          infoForm.get('address3')?.enable();
          infoForm.get('address4')?.enable();
          infoForm.get('departmentName')?.setErrors({ required: true });
          infoForm.get('customerName')?.setErrors({ required: true });
          infoForm.get('phoneNumber')?.setErrors({ required: true });
          infoForm.get('faxNumber')?.setErrors({ required: true });
          infoForm.get('postCode')?.setErrors({ required: true });
          infoForm.get('address1')?.setErrors({ required: true });
        }
        return;
      }
    })
  }
  public getRepoById(id: number) {
    this.repoService.getRepoById(id).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: REPO not fould!");
        return;
      } else {
        if (res.meta.code === '200') {
          this.repository = res.data;
        } else {
          this.repository = new Repository;
        }
        this.setRepoDetail();
        return;
      }
    })
  }
  public getProductByCode(code: string, index: number, copy?: boolean) {
    this.productService.getProductByCode(code).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: Product not fould!");
        return;
      } else {

        const detailForm = this.detailFormAtIndex(index);
        // detailForm.get('billingPackType')?.setErrors({ required: true });
        detailForm.get('billingPackType')?.valueChanges.subscribe(value => {
          this.changeBillingPackType(index, value);
        })
        if (res.meta.code === '200') {
          if (!copy) {
            if (res.data.isPackCsInput === '0' && res.data.isPackBlInput === '0' && res.data.isPieceInput === '0') {
              detailForm.get('productCode')?.setErrors({ productPackingRequired: true });
              this.setErrorProductCodeDetailForm(index);
            } else {
              this.handleQuantityForBilling(index, res.data.isPackCsInput, res.data.isPackBlInput, res.data.isPieceInput);
            }
            detailForm.get('productName')?.setValue(res.data.name1);
            detailForm.get('standardInfo')?.setValue(res.data.standardInfo);
            detailForm.get('datetimeMngType')?.setValue(res.data.datetimeMngType);
            detailForm.get('packCsAmount')?.setValue(res.data.packCsAmount);
            detailForm.get('packBlAmount')?.setValue(res.data.packBlAmount);
            this.setItemFillProductNew(index);
          } else {
            this.handleQuantityForBilling(index, res.data.isPackCsInput, res.data.isPackBlInput, res.data.isPieceInput);
            this.changeBillingPackType(index, detailForm.get('billingPackType')?.value);
          }
          this.setDisabledDateAndNumberDetail(index, res.data.isDatetimeMng, res.data.isNumberMng);
        } else {
          detailForm.get('productCode')?.setErrors({ notFound: true });
          this.setErrorProductCodeDetailForm(index);
        }


        detailForm.get('csPlanQuantity')?.valueChanges.subscribe(value => {
          if ((value === '' || value === null) && detailForm.get('billingPackType')?.value === '1') {
            detailForm.get('csPlanQuantity')?.setErrors({ required: true });
          }
          this.changeTotalPlanQuantity(index);
        })
        detailForm.get('blPlanQuantity')?.valueChanges.subscribe(value => {
          if ((value === '' || value === null) && detailForm.get('billingPackType')?.value === '2') {
            detailForm.get('blPlanQuantity')?.setErrors({ required: true });
          }
          this.changeTotalPlanQuantity(index);
        })
        detailForm.get('psPlanQuantity')?.valueChanges.subscribe(value => {
          if ((value === '' || value === null) && detailForm.get('billingPackType')?.value === '3') {
            detailForm.get('psPlanQuantity')?.setErrors({ required: true });
          }
          this.changeTotalPlanQuantity(index);
        })
        return;
      }
    })
  }
  public setItemFillProductNew(index: number) {
    const detailForm = this.detailFormAtIndex(index);
    detailForm.get('billingPackType')?.setValue(null);
    detailForm.get('billingPackType')?.setErrors({ required: true });
    detailForm.get('csPlanQuantity')?.setValue(null);
    detailForm.get('blPlanQuantity')?.setValue(null);
    detailForm.get('psPlanQuantity')?.setValue(null);
    detailForm.get('totalPlanQuantity')?.setValue(0);
    detailForm.get('totalActualQuantity')?.setValue(0);
  }
  public setDisabledDateAndNumberDetail(index: number, isDatetimeMng: string, isNumberMng: string) {
    const detailForm = this.detailFormAtIndex(index);
    if (isDatetimeMng === '1') {
      detailForm.get('datetimeMngFrom')?.enable();
      detailForm.get('datetimeMngTo')?.enable();
    } else {
      detailForm.get('datetimeMngFrom')?.disable();
      detailForm.get('datetimeMngTo')?.disable();
      detailForm.get('datetimeMngFrom')?.setValue(null);
      detailForm.get('datetimeMngTo')?.setValue(null);
    }
    if (isNumberMng === '1') {
      detailForm.get('numberMngFrom')?.enable();
      detailForm.get('numberMngTo')?.enable();
    } else {
      detailForm.get('numberMngFrom')?.disable();
      detailForm.get('numberMngTo')?.disable();
      detailForm.get('numberMngFrom')?.setValue(null);
      detailForm.get('numberMngTo')?.setValue(null);
    }
  }

  public setErrorProductCodeDetailForm(index: number) {
    const detailForm = this.detailFormAtIndex(index);
    detailForm.get('productName')?.setValue(null);
    detailForm.get('standardInfo')?.setValue(null);
    detailForm.get('datetimeMngFrom')?.disable();
    detailForm.get('datetimeMngTo')?.disable();
    detailForm.get('datetimeMngFrom')?.setValue(null);
    detailForm.get('datetimeMngTo')?.setValue(null);
    detailForm.get('numberMngFrom')?.disable();
    detailForm.get('numberMngTo')?.disable();
    detailForm.get('numberMngFrom')?.setValue(null);
    detailForm.get('numberMngTo')?.setValue(null);
    detailForm.get('billingPackType')?.setValue(null);
    detailForm.get('billingPackType')?.disable();
    this.changeBillingPackType(index, '0')
  }

  public openPopUp(option: string, index?: number): void {
    let data: any;
    switch (true) {
      case option.includes('customerCode'):
        data = DialogOptionApiConfig.customerCode;
        break;
      case option.includes('destinationCode'):
        data = DialogOptionApiConfig.destinationCode;
        break;
      case option.includes('productCode'):
        data = DialogOptionApiConfig.productCode;
        break;
      case option.includes('productInventory'):
        data = DialogOptionApiConfig.productInventory;
        let productCode: string;
        let repositoryId: string | number;
        if (index || index === 0) {
          productCode = this.detailFormAtIndex(index).get('productCode')?.value;
          repositoryId = this.detailFormAtIndex(index).get('repositoryId')?.value;
          data.listParam[0] = {
            key: 'productCode', value: productCode
          };
          data.listParam[1] = {
            key: 'repositoryId', value: repositoryId
          };
        }
        break;
      default:
        console.log("Dialog fail");
        break;
    }
    if (option && data) {
      const popup = this.dialog.open(DialogSeachApiComponent, { data });
      popup.afterClosed().subscribe(item => {
        if (item) {
          if (this.planOutputForm) {
            if (index || index === 0) {
              const detailForm = this.detailFormAtIndex(index);
              detailForm.get(option)?.setValue(item[data.columReturn]);
              if (option.includes('productCode')) {
                this.getProductByCode(item[data.columReturn], index, false);
              }
              if (option.includes('customerCode')) {
                this.getCustomerByCode(item[data.columReturn], index);
              }
              if (option.includes('productInventory')) {
                console.log(item);
                this.fillValueByHelpIcon(item, index);
              }
            } else {
              const infoForm = this.infoForm;
              infoForm.get(option)?.setValue(item[data.columReturn]);
            }
          }
        }
      })
    }
  }

  public fillValueByHelpIcon(value: any, index: number) {
    const detailForm = this.detailFormAtIndex(index);
    detailForm.get('inventoryProductType')?.setValue(value?.inventoryProductType);
    detailForm.get('locationId')?.setValue(value?.locationId);
    detailForm.get('productOwnerId')?.setValue(value?.productOwnerId);
  }

  public getLocationByRepo(index: number, copy: boolean) {
    const detailForm = this.detailFormAtIndex(index);
    const idRepo = detailForm.get('repositoryId')?.value;
    console.log(this.detailFormAtIndex(index).get('locationId')?.value);
    if (!copy && !this.planOutputForm) {
      detailForm.get('locationId')?.setValue(null);
    }
    this.locationService.getListLocation(idRepo).subscribe(res => {
      if (res instanceof HttpErrorResponse) {
        console.log("Error: LOCATION not found!");
        return;
      } else {
        if (res.meta.code === '200') {
          let location: Location[] = res.data;
          this.locationArray.splice(index, (copy ? 0 : 1), location);
        }
        return;
      }
    })
    console.log(this.detailFormAtIndex(index).get('locationId')?.value);

  }

  public setNewShippingDest() {
    this.newShippingDest = !this.newShippingDest;
    const infoForm = this.infoForm;
    this.disabledCustomerOrCustomerDest = 0;
    infoForm.get('destinationCode')?.setValue(null);
    infoForm.get('customerCode')?.setValue(null);
    if (this.newShippingDest) {
      infoForm.get('checked')?.setValue('1');
    } else {
      infoForm.get('checked')?.setValue('0');
    }
  }

  // fill giá trị repo từ infoForm xuống new detail
  public setRepoDetailNewAdd(index: number) {
    this.detailFormAtIndex(index).get('repositoryId')?.setValue(this.repository.repositoryId);
    this.getLocationByRepo(index, false);
  }
  // fill giá trị repo từ infoForm xuống từng detail
  public setRepoDetail() {
    this.detailForm.controls.forEach((control, index) => {
      control.get('repositoryId')?.setValue(this.repository.repositoryId);
      this.getLocationByRepo(index, false);
    });
  }

  public onChangeProduct(i: number) {
    const detailForm = this.detailFormAtIndex(i);
    const productCode = detailForm.get('productCode')?.value;
    this.getProductByCode(productCode, i, false);
  }
  public onChangeCustomer(i: number) {
    const detailForm = this.detailFormAtIndex(i);
    const customerCode = detailForm.get('customerCode')?.value;
    this.getCustomerByCode(customerCode, i);
  }

  public getDatetimeMngType(value: string): string {
    let res = '';
    switch (value) {
      case '0':
        res = '入';
        break;
      case '1':
        res = '製';
        break;
      case '2':
        res = '賞';
        break;
      default:
        break;
    }
    return res;
  }

  public handleQuantityForBilling(index: number, isPackCsInput: string, isPackBlInput: string, isPieceInput: string) {
    const csRadio = document.getElementById('cs' + index) as HTMLInputElement;
    const blRadio = document.getElementById('bl' + index) as HTMLInputElement;
    const psRadio = document.getElementById('ps' + index) as HTMLInputElement;
    if (isPackCsInput === '1') {
      csRadio.disabled = false;
    } else {
      csRadio.disabled = true;
    }
    if (isPackBlInput === '1') {
      blRadio.disabled = false;
    } else {
      blRadio.disabled = true;
    }
    if (isPieceInput === '1') {
      psRadio.disabled = false;
    } else {
      psRadio.disabled = true;
    }
  }

  public changeBillingPackType(index: number, value: string) {
    const detailForm = this.detailFormAtIndex(index);
    const cs = detailForm.get('csPlanQuantity')?.value;
    const bl = detailForm.get('blPlanQuantity')?.value;
    const ps = detailForm.get('psPlanQuantity')?.value;
    switch (value) {
      case "1":
        detailForm.get('csPlanQuantity')?.enable();
        detailForm.get('blPlanQuantity')?.enable();
        detailForm.get('psPlanQuantity')?.enable();
        if (ps === '' || ps === null) {
          detailForm.get('csPlanQuantity')?.setErrors({ required: true });
        }
        break;
      case "2":
        detailForm.get('csPlanQuantity')?.setValue(null);
        detailForm.get('csPlanQuantity')?.disable();
        detailForm.get('blPlanQuantity')?.enable();
        detailForm.get('psPlanQuantity')?.enable();
        if (ps === '' || ps === null) {
          detailForm.get('blPlanQuantity')?.setErrors({ required: true });
        }
        break;
      case "3":
        detailForm.get('csPlanQuantity')?.setValue(null);
        detailForm.get('blPlanQuantity')?.setValue(null);
        detailForm.get('csPlanQuantity')?.disable();
        detailForm.get('blPlanQuantity')?.disable();
        detailForm.get('psPlanQuantity')?.enable();
        if (ps === '' || ps === null) {
          detailForm.get('psPlanQuantity')?.setErrors({ required: true });
        }
        break;
      default:
        detailForm.get('csPlanQuantity')?.setValue(null);
        detailForm.get('blPlanQuantity')?.setValue(null);
        detailForm.get('psPlanQuantity')?.setValue(null);
        detailForm.get('csPlanQuantity')?.disable();
        detailForm.get('blPlanQuantity')?.disable();
        detailForm.get('psPlanQuantity')?.disable();
        break;
    }
    console.log("billing123: ", detailForm.get('psPlanQuantity')?.errors, cs, bl, ps);
  }

  private changeTotalPlanQuantity(index: number) {
    const detailForm = this.detailFormAtIndex(index);

    const csQuantity = (detailForm.get('csPlanQuantity')?.value);
    const blQuantity = (detailForm.get('blPlanQuantity')?.value);
    const psQuantity = (detailForm.get('psPlanQuantity')?.value);
    const packCsAmount = (detailForm.get('packCsAmount')?.value);
    const packBlAmount = (detailForm.get('packBlAmount')?.value);

    const total = csQuantity * packCsAmount * packBlAmount + blQuantity * packBlAmount + psQuantity * 1;

    if (!isNaN(total)) {
      detailForm.get('totalPlanQuantity')?.setValue(total);
    } else {
      detailForm.get('totalPlanQuantity')?.setValue(0);
    }
  }

  public setIsPlanDetail() {
    if (this.planOutput) {
      if (this.outputStatus !== '未出庫' && this.planOutput.isClosed === '1') {
        this.isPlanDetail = true;
      }
    } else {
      this.isPlanDetail = false;
    }
  }
  public setStatusPlanDate() {
    if (this.planOutput) {
      if (this.outputStatus !== '出庫済' && this.isClose === '0') {
        this.statusPlanDate = '';
      } else {
        this.statusPlanDate = ' disabled';
      }
    } else {
      this.statusPlanDate = '';
    }
  }

  public getValueContentOutputStatus(status: string = '0'): string {
    let value = '未出庫';
    switch (status) {
      case '1':
        value = '出庫残';
        break;
      case '2':
        value = '出庫済';
        break;
      default:
        break;
    }
    return value;
  }
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
    this.infoForm.get('isClosed')!.setValue(this.isClose);
    this.contentIsClose = this.isClose === '1' ? 'クローズ解除' : 'クローズ';
  }
  logData(index: number, event: any) {
    console.log(this.detailFormAtIndex(index).get('locationId')?.value);
    console.log(this.locationArray[index]);
    console.log('Value: ', event.target.value);
  }
}
