import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Register } from './register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpclient.get<any>
    ("https://localhost:7099/api/Register");
  }

  SaveRegister(newRegister:Register):Observable<any>{
return this.httpclient.post<any>("https://localhost:7099/api/Register",newRegister);
  }

  upadteRegister(editRegister:Register):Observable<any>{
    return this.httpclient.put<any>("https://localhost:7099/api/Register",editRegister);
  }

  deleteRegister(id:number):Observable<any>{
    return this.httpclient.delete<any>("https://localhost:7099/api/Register/"+id);
  }
}
