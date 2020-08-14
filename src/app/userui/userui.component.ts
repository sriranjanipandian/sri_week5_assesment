import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userui',
  templateUrl: './userui.component.html',
  styleUrls: ['./userui.component.css']
})
export class UseruiComponent implements OnInit {
name;
lastlogin;
result:string;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:9000/getallusertimestamp").subscribe((data) => {
     console.log(data);
     this.result=JSON.stringify(data);
    
    }) 
  }
 

}
