import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faHouse=faHouse;
  faFileInvoiceDollar = faFileInvoiceDollar ;
  faUser=faUser;
  faHandHoldingUsd=faHandHoldingUsd;
  faLandmark=faLandmark;
  faBook=faBook;
  faFacebookF=faFacebookF;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faGoogle=faGoogle;
  faGithub=faGithub;

  signUp(data:object):void{
    console.warn(data)
  }
}
