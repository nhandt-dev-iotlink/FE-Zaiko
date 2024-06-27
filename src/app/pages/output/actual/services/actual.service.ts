import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { Observable, map } from 'rxjs';
import { HttpOutputDetailResponse } from 'src/app/pages/common/models/output-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ActualService extends HttpService {

  public constructor(
    protected override http: HttpClient
  ) {
    super(http);
  }

  public getActualOutput(id: any, page?: any): Observable<HttpOutputDetailResponse | HttpErrorResponse> {
    let body: HttpParams = new HttpParams();
    body = body.set('id', id);
    if (page === 0 || page) {
      body = body.set('page', page);
    }
    return this.getParam(ApiPath.INVENTORY_OUTPUTACTUAL, body).pipe(
      map((response: HttpOutputDetailResponse) => response)) as Observable<HttpOutputDetailResponse | HttpErrorResponse>;
  }
}
