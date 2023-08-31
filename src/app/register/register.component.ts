import { Component } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 registers:Register[]=[];
 constructor(private RegisterService:RegisterService){
 }

ngOnInit(){
  this.getAll();
}

 getAll(){
  this.RegisterService.getAll().subscribe(
    (Response)=>{
      this.registers=Response;
      console.log(Response);
    },
    (error)=>{
      console.log(error);
    }
  )
 }
}
