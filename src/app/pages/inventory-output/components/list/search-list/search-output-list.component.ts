/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RepositoryModel } from '../../../models/repository.model';
import { OutputListService } from '../../../services/outputList.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSeachApiComponent } from '@common/components/dialog-seach-api/dialog-search-api.component';
import { DisplayFormInputModel } from '../../../models/output-list.model';
import { DialogOptionApi } from '@common/models/dialog-seach-api/dialog-search-api.model';
import { DialogConfig } from '@common/utils/dialog-config';

@Component({
  selector: 'app-search-output-list',
  templateUrl: './search-output-list.component.html',
  styleUrls: ['./search-output-list.component.scss']
})
export class SearchOutputListComponent implements OnInit{

  searchForm!: FormGroup;
  repositories: RepositoryModel[] = [];
  displayFormInput: DisplayFormInputModel = new DisplayFormInputModel();

  @Output() conditionsSearch = new EventEmitter<any>();

  public constructor(private fb: FormBuilder, 
      private outPutListService: OutputListService, 
      private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getDropdownsRepository();
    this.searchForm = this.fb.group({
      fromOrderDate: '',
      toOrderDate: '',
      fromPlanOutputDate: '',
      toPlanOutputDate: '',
      fromPlanWokingDate: '',
      toPlanWokingDate: '',
      fromPlanDeliveDate: '',
      toPlanDeliveDate: '',
      fromSlipNo: '',
      toSlipNo: '',
      fromCustomerId: '',
      toCustomerId: '',
      customerName: '',
      fromDeliverDestId: '',
      toDeliverDestId: '',
      dileveDestName: '',
      fromSupplierId: '',
      toSupplierId: '',
      supplierName: '',
      fromOwnerId: '',
      toOwnerId: '',
      ownerName: '',
      fromProductId: '',
      toProductId: '',
      productName: '',
      fromRepositoryId: '',
      toRepositoryId: '',
      batchNumber: '',
      deliveType: '1',
      deliveStatus: '1',
      isClosed: ''
    });
  }

  getConditionsSearch(){
    const conditions = this.searchForm.value;
    
    Object.keys(conditions).forEach(key => {
      if(key.toLowerCase().includes('Date'.toLowerCase())){
        conditions[key] = this.formatDate(conditions[key]);
      }
    });

    this.conditionsSearch.emit(conditions);
  }

  getDropdownsRepository(){
    this.outPutListService.getAllRepository().subscribe((results: any) => {
      this.repositories = results.data;
    });
  }

  openDialog(key: string): void{
    let data: DialogOptionApi;

    switch (true) {
      case key.includes('customerCode') :
        data = DialogConfig.customer;
        const customerDialog = this.dialog.open(DialogSeachApiComponent, { data });

        if(key.includes('From')){

          customerDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('fromCustomerId')?.setValue(result[data.columReturn]);
              this.displayFormInput.fromCustomerCode = result.customerCode;
              console.log('FormControllNameL ',this.searchForm.get('fromCustomerId'));
            }
          });
        }
        else{

          customerDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('toCustomerId')?.setValue(result[data.columReturn]);
              this.displayFormInput.toCustomerCode = result.customerCode;
            }
          });
        }

        break;

      case key.includes('destinationCode') :
        data = DialogConfig.deliveryDestination;
        const destinationDialog = this.dialog.open(DialogSeachApiComponent, { data });

        if(key.includes('From')){

          destinationDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('fromDeliverDestId')?.setValue(result[data.columReturn]);
              this.displayFormInput.fromDestinationCode = result.destinationCode;
            }
          });
        }
        else{

          destinationDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('toDeliverDestId')?.setValue(result[data.columReturn]);
              this.displayFormInput.toDestinationCode = result.destinationCode;
            }
          });
        }

        break;

      case key.includes('supplierCode') :
        data = DialogConfig.supplier;
        const supplierDialog = this.dialog.open(DialogSeachApiComponent, { data });

        if(key.includes('From')){

          supplierDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('fromSupplierId')?.setValue(result[data.columReturn]);
              this.displayFormInput.fromSupplierCode = result.supplierCode;
              console.log('FromSupplier result:',result);
            }
          });
        }
        else{

          supplierDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('toSupplierId')?.setValue(result[data.columReturn]);
              this.displayFormInput.toSupplierCode = result.supplierCode;
              console.log('ToSupplier result:',result);
            }
          });
        }

        break;

      case key.includes('ownerCode') :
        data = DialogConfig.owner;
        const ownerDialog = this.dialog.open(DialogSeachApiComponent, { data });

        if(key.includes('From')){

          ownerDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('fromOwnerId')?.setValue(result[data.columReturn]);
              this.displayFormInput.fromOwnerCode = result.customerCode;
            }
          });
        }
        else{

          ownerDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('toOwnerId')?.setValue(result[data.columReturn]);
              this.displayFormInput.toOwnerCode = result.customerCode;
            }
          });
        }


        break;

      case key.includes('productCode') :
        data = DialogConfig.product;
        const productDialog = this.dialog.open(DialogSeachApiComponent, { data });

        if(key.includes('From')){

          productDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('fromProductId')?.setValue(result[data.columReturn]);
              this.displayFormInput.fromProductCode = result.productCode;
              console.log('From Product: ',result);
            }
          });
        }
        else{

          productDialog.afterClosed().subscribe(result => {
            if(result !== undefined){

              this.searchForm.get('toProductId')?.setValue(result[data.columReturn]);
              this.displayFormInput.toProductCode = result.productCode;
              console.log('To Product: ',result);

            }
          });
        }

        break;

        default:
          console.error('Invalid data key');

          return;
    }


  }

  formatDate(date: string): string{
    if(!date){
      return '';
    }

    return date.replace(/-/g, '/');
  }

}
