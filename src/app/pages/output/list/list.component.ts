import { Component, OnInit, } from '@angular/core';
import { IconService } from '@core/services/icon/icon.service';
import { OuputSearch } from './model/output-list.model';
import { Title } from '@layout/models/title.model';
import { OutputDetailNumberService } from '../../common/services/output-detail-number.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public formSearchOutput!: OuputSearch;
  public popupSearchForm!: string;
  public titleList!: Title;

  handleDataSearch(data: OuputSearch) {
    this.formSearchOutput = data;
  }
  showSearchForm(even: any) {
    this.popupSearchForm = even;
  }

  constructor(
    private icon: IconService,
    private ouputDetailNumberService: OutputDetailNumberService,
  ) { }

  ngOnInit(): void {
    this.ouputDetailNumberService.removeSelectedRecordId();
    this.icon.init();
    this.initialTitle();
  }
  public initialTitle() {
    this.titleList = {
      header: '出庫',
      parent: '出庫一覧',
      children: '0',
      service: '0',
    }
  }

}
