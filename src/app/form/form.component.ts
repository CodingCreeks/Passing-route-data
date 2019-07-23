import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.data = this.route.data
      // .subscribe(value => console.log(value));
  }

}