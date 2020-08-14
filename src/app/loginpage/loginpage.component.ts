import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
let email;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
email;
pwd;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    if(this.email!=undefined){
    let url="http://127.0.0.1:9000/insertTimestamp/"+this.email;
 
    this.http.post(url,{}).toPromise().then((data:any)=>{alert("Submitted");console.log(data);
    this.router.navigate(['/userui']);
})}


}}
