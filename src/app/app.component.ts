import { Tipping } from './interface/Tipping';
import { Component, OnInit } from '@angular/core';
import { TraslationServiceService } from './services/traslation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tipping-angular';
  tipping : Tipping = { bill:0, numberPeople: 1, percent: 15 }
  reset: boolean = false;
  language: string = "English"

  head1Map: any = { "English" : "SPLI", "Spanish" : "DIVI" }
  head2Map: any = { "English" : "TTER", "Spanish" : "DAMOS" }

  constructor(
    private translationServices : TraslationServiceService
  ){
    this.language = translationServices.currentLanguage;
    this.reset = false;
  }

  changesTip(event: any){
    this.tipping = {...event}
    this.reset = false;
  }

  resetChanges = () => {
    this.reset = true;
  }

  changesLanguage = ( newLanguage:string) =>{
    this.translationServices.changesLanguages( newLanguage );
    this.language = this.translationServices.currentLanguage;
  } 

}
