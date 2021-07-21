import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var alertify: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  


  }

  pez(){
    var txt = $("#pezz").val();
    if(txt == ""){
      alertify.error("Introduzca el nombre de un pez");
      return false;
    }else{
       alertify.success(txt);
       return false;
    }
    
  }

}



