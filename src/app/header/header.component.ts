import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  emailId: string;
  isEmailIdExist: boolean;
  modalName: string;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  checkExistanceOfEmailIdAndShowModal() {
    let obs = this.http.post<boolean>("http://localhost:8081/foodorderingrestapp/checkExistanceOfEmailId/", JSON.stringify({ "emailId": this.emailId }));
    obs.subscribe((response) => {
      this.isEmailIdExist = response;
      console.log(response);
    });

    if (this.isEmailIdExist)
      this.modalName = "passwordModal";
    else
      this.modalName = "signupModal";
  }
}
