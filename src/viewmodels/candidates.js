import {inject} from 'aurelia-framework';
import DonationService from '../services/donation-service';

@inject(DonationService)
export class Candidate {

  firstName = '';
  lastName = '';
  office = '';

  //candidates = [];
  //selectedCandidate = '';

  constructor(ds) {
    this.donationService = ds;
    //this.methods = ds.methods;
    //this.selectedMethod = this.methods[0];
    //this.candidates = ds.candidates;
    //this.selectedCandidate = this.candidates[0];
  }

  addCandidate() {
    this.donationService.candidate(this.firstName, this.lastName, this.office);
    //console.log(`Amount = ${this.amount}`);
    //console.log(`Method = ${this.selectedMethod}`);
    //console.log(`Candidate = ${this.selectedCandidate.firstName} ${this.selectedCandidate.lastName}`);
  }
}
