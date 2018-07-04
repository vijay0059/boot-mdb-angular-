import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images:any[]=[];

  constructor() { }

  ngOnInit() {
    this.images=["https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg","https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg","https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"]
  }

  popup(){
    jQuery('#exampleModal').model('show')
  }

}
