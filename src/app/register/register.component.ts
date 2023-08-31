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
newRegister:Register= new Register();


 constructor(private RegisterService:RegisterService){
 }

onSubmit(){
  this.RegisterService.SaveRegister(this.newRegister);
    console.log('Registration data:', this.RegisterService.getAll());
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
 saveClick(){
  //alert(this.newEmployee.name)
  this.RegisterService.SaveRegister(this.newRegister).subscribe(
    (Response)=>{
      //alert('data saved')
      this.getAll();
    },
    (error)=>{
      console.log(error);
    }
  );
}
}
