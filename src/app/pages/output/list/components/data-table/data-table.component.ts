import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OutputService } from './../../services/output-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OuputSearch, OutputList } from './../../model/output-list.model';
import { LanguageService } from '@core/services';
import { LoadingSpinnerDialogService } from '@layout/services/loading-spinner-dialog.service';
import { DataSearchModel } from '@core/models';
import { Router } from '@angular/router';
import { OutputDetailNumberService } from 'src/app/pages/common/services/output-detail-number.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() dataSearch!: OuputSearch;
  @Input() popupSearchForm!: string;

  public listOutput!: OutputList[];
  public response: DataSearchModel = new DataSearchModel;
  public showSearchForm: string = '0';



  constructor(
    private router: Router,
    private outputService: OutputService,
    private loadingDialog: LoadingSpinnerDialogService,
    private ouputDetailNumberService: OutputDetailNumberService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSearch'] && changes['dataSearch'].currentValue) {
      this.getListOutputSearch(this.dataSearch);
    }
    if (changes['popupSearchForm'] && changes['popupSearchForm'].currentValue) {
      this.showSearchForm = this.popupSearchForm;
    }
  }
  ngOnInit(): void {
  }

  public loadMore() {
    this.loadingDialog.showSpinner(true);
    this.dataSearch.page = this.response.currentPage + 1;
    this.outputService.getListOutputSearch(this.dataSearch).subscribe(res => {
      this.loadingDialog.showSpinner(false);
      if ((res as HttpErrorResponse).status === 400) {
        return;
      } else {
        this.response.currentPage = JSON.parse(JSON.stringify(res)).pageNumber;
        this.response.results = JSON.parse(JSON.stringify(res)).content;
        this.response.countRecords = JSON.parse(JSON.stringify(res)).content.length;
        this.listOutput = this.listOutput.concat(this.response.results);
      }
    })
  }

  public getListOutputSearch(dataSearch: OuputSearch) {
    this.loadingDialog.showSpinner(true);
    const page: number = 0;
    this.outputService.getListOutputSearch(this.dataSearch).subscribe(res => {
      this.loadingDialog.showSpinner(false);
      if ((res as HttpErrorResponse).status === 400) {
        return;
      } else {
        // console.log("ress:", res);
        this.response.currentPage = JSON.parse(JSON.stringify(res)).pageNumber;
        this.response.totalPage = JSON.parse(JSON.stringify(res)).totalPages;
        this.response.results = JSON.parse(JSON.stringify(res)).content;
        this.response.countRecords = JSON.parse(JSON.stringify(res)).content.length;
        this.response.totalRecords = JSON.parse(JSON.stringify(res)).totalElements;
        this.response.noRecordInPage = JSON.parse(JSON.stringify(res)).totalPages + 1;
        this.listOutput = this.response.results;
      }
    })
  }
  public navigateToPlan(value: any) {
    this.ouputDetailNumberService.setSelectedRecordId(value);
    this.router.navigate(['/output/plan']);
  }
  public navigateToActual(value: any) {
    this.ouputDetailNumberService.setSelectedRecordId(value);
    this.router.navigate(['/output/actual']);
  }

  public getCollorOutputStatus(status: string = '0'): string {
    let value = 'td-not-yet-color ';
    switch (status) {
      case '1':
        value = 'td-remain-color ';
        break;
      case '2':
        value = 'td-done-color ';
        break;
      default:
        break;
    }
    return value;
  }

  public getBorderOutputStatus(status: string = '0'): string {
    let value = ' td-conten-not-yet ';
    switch (status) {
      case '1':
        value = ' td-conten-remain';
        break;
      case '2':
        value = ' td-conten-done';
        break;
      default:
        break;
    }
    return value;
  }

  public getValueOutputStatus(status: string = '0'): string {
    let value = '未';
    switch (status) {
      case '1':
        value = '残';
        break;
      case '2':
        value = '済';
        break;
      default:
        break;
    }
    return value;
  }

  public getBatchStatus(status: string = ''): string {
    let value = '-';
    switch (status) {
      case '0':
        value = '未処理';
        break;
      case '1':
        value = '処理中';
        break;
      case '2':
        value = '処理済み';
        break;
      case '3':
        value = '\u00A0処理中\r\u00A0未あり';
        break;
      default:
        break;
    }
    return value;
  }
}
