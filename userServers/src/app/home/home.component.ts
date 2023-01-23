import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  login:FormGroup|any
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
   
  }
    



}
