import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servinglocation',
  templateUrl: './servinglocation.component.html',
  styleUrls: ['./servinglocation.component.css']
})
export class ServinglocationComponent implements OnInit {

  servingLocations:any;

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit() {
    let obs = this.http.get("http://localhost:8081/foodorderingrestapp/getservinglocations/");
    obs.subscribe((response) => {this.servingLocations=response;
      console.log(response);
    });
  }

  showMenu(){
    this.router.navigateByUrl('/showmenu');
  }
}
