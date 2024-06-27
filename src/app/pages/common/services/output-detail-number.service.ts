import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputDetailNumberService {

  // Lưu giá trị inventoryOutputId của record

  private recordId = new BehaviorSubject<number | null>(null);

  constructor() {
    // Kiểm tra xem có giá trị đã lưu trữ trong SessionStorage không
    const savedValue = sessionStorage.getItem('myBehaviorSubjectValue');
    if (savedValue) {
      this.recordId.next(Number(savedValue));
    }
  }

  setSelectedRecordId(id: number) {
    this.recordId.next(id);
    // Lưu trữ giá trị mới vào SessionStorage
    sessionStorage.setItem('myBehaviorSubjectValue', JSON.stringify(id));
  }
  removeSelectedRecordId() {
    this.recordId.next(null);
    sessionStorage.removeItem('myBehaviorSubjectValue');
  }

  getSelectedRecordId() {
    return this.recordId.asObservable();
  }
}
