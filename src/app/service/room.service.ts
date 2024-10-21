import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลห้องทั้งหมด
  getRooms(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)  // เพิ่มการจัดการ error
    );
  }

  // เพิ่มข้อมูลห้อง
  addRoom(roomData: any): Observable<any> {
    return this.http.post(this.apiUrl, roomData).pipe(
      catchError(this.handleError)  // เพิ่มการจัดการ error
    );
  }

  // ดึงข้อมูลห้องเฉพาะ
  getRoomById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)  // เพิ่มการจัดการ error
    );
  }

  // อัปเดตข้อมูลห้อง
  updateRoom(id: number, roomData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, roomData).pipe(
      catchError(this.handleError)  // เพิ่มการจัดการ error
    );
  }

  // ลบข้อมูลห้อง
  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)  // เพิ่มการจัดการ error
    );
  }

  // ฟังก์ชันจัดการ error
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error ที่เกิดขึ้นฝั่ง client
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Error ที่เกิดขึ้นฝั่ง server
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
