import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utils } from '@common/utils/utils';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/pages/common/models/course.model';
import { OutputDetail } from 'src/app/pages/common/models/output-detail.model';
import { ProductType } from 'src/app/pages/common/models/product-type.model';
import { Repository } from 'src/app/pages/common/models/repository.model';
import { RouteEntity } from 'src/app/pages/common/models/route-entity.model';
import { OutputDetailNumberService } from 'src/app/pages/common/services/output-detail-number.service';
import { ActualService } from '../../services/actual.service';
import { LoadingSpinnerDialogService } from '@layout/services';
import { RepositoryService } from 'src/app/pages/common/services/repository.service';
import { CourseService } from 'src/app/pages/common/services/course.service';
import { RouteService } from 'src/app/pages/common/services/route.service';
import { ProductTypeService } from 'src/app/pages/common/services/product-type.service';
import { CustomerService } from 'src/app/pages/common/services/customer.service';
import { CustomerDestinationService } from 'src/app/pages/common/services/customer-destination.service';
import { ProductService } from 'src/app/pages/common/services/product.service';
import { LocationService } from 'src/app/pages/common/services/location.service';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from '@core/services';
import { createFormGroup } from 'src/app/pages/config/form-group.config';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {
  @Input() actualOutput!: OutputDetail;
  // @Input() pageActualOutputDetail: ActualOutputDetail[] = [];

  public utils = Utils;
  public actualOutputForm: FormGroup = new FormGroup({});
  public listRepo: Repository[] = [];
  public listCourse: Course[] = [];
  public listRoute: RouteEntity[] = [];
  public listProductType: ProductType[] = [];

  constructor(
    private router: Router,
    private ouputDetailNumberService: OutputDetailNumberService,
    private actualService: ActualService,
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

  ngOnInit(): void {
    this.initialForm();
    this.getListProductType();
    this.getListRepository();
    this.getListRoute();
    console.log(this.actualOutputForm.value);

  }


  public navigateToOutput() {
    this.ouputDetailNumberService.removeSelectedRecordId();
    this.router.navigate(['/output']);
  }

  public initialForm(): void {
    this.actualOutputForm = this.fb.group({
      infoForm: createFormGroup("infoFormOutputDetail"),
      detailForm: this.fb.array([]),
    });
    this.addDetailGroup();

    const infoFormValue = this.infoForm;
    infoFormValue.get('routeCode')?.valueChanges.subscribe(value => {
      this.getListCourseByRoute(value);
    });
  }
  get detailForm() {
    return this.actualOutputForm.get('detailForm') as FormArray;
  }
  detailFormAtIndex(index: number) {
    return this.detailForm.at(index) as FormGroup;
  }
  get infoForm() {
    return this.actualOutputForm.get('infoForm') as FormGroup
  }
  public createDetailGroup() {
    return createFormGroup("detailFormActualDetail");
  }
  public addDetailGroup() {
    this.detailForm.push(this.createDetailGroup());
  }

  public patchValueToForm() {
    if (this.actualOutput) {
      this.infoForm.patchValue(this.actualOutput);
      console.log(this.actualOutput);
    }
    // if (this.pagePlanOutputDetail.length > 0) {
    //   for (let i = 0; i < this.pagePlanOutputDetail.length - 1; i++) {
    //     this.addDetailGroup();
    //   }
    //   this.detailForm.patchValue(this.pagePlanOutputDetail);
    // }

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

}
