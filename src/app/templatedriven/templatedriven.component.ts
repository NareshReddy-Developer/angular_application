import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
 user:any;
  constructor(){

  }
  ngOnInit(): void {
   this.user={
    firstname: 'Nareshreddy',
    lastname: 'Karra',
    email: 'NareshreddyKarra3636@gmail.com',
    password:'Naresh@12345',
    number:'9490097717'
   }
  }

  onSubmit(data:NgForm){
      console.log(data.value);
      
  }


  resetForm(userForm:NgForm){
    userForm.reset({
      firstname:'Vamshireddy Gaddam'
    });

  }




}
