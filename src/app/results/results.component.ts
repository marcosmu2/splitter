import { Tipping } from './../interface/Tipping';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{

  @Input() tipping : Tipping = { bill:0, numberPeople: 1, percent: 15 }
  @Input() language : string = "English"
  @Output() onReset : EventEmitter<boolean> = new EventEmitter()

  tipMap: any = { "English" : "Tip Amount", "Spanish" : "Propina" }
  personMap: any = { "English" : "/person", "Spanish" : "x persona" }
  resetMap: any = { "English" : "Reset", "Spanish" : "Reiniciar" }

  calculateTip():number{
    return this.tipping.bill * this.tipping.percent / 100;
  }

  calculateTipPerPerson(){
    return (this.tipping.numberPeople > 0) ? this.calculateTip() / this.tipping.numberPeople : 0
  }

  calculateTotalPerPerson(){
    return (this.tipping.numberPeople > 0) ? this.tipping.bill / this.tipping.numberPeople : 0
  }

  reset(){
    this.onReset.emit(true);
  }

}
