import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tipping } from '../interface/Tipping';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnChanges{
  
    @Output() onTipChanges : EventEmitter<Tipping> = new EventEmitter()
    @Input() reset: boolean = false;
    @Input() language: string = "English"

  tippingForm = new FormGroup({ 
    bill : new FormControl(0),
    numberPeople : new FormControl(1)
  });
  
  percentInput : string[] = [
    "5","10","15","20","25"
  ]
  percent : string = "5";

  billMap : any = { "English" : "Bill", "Spanish" : "Cuenta" }
  selectTipMap : any = { "English" : "Select Tip %", "Spanish" : "Seleccione el % de Propina" }
  numberPeopleMap: any = { "English" : "Number of People", "Spanish" : "Cantidad de Personas" }

  ngOnChanges(): void {
    this.resetChanges()
    this.changes()
  }

  changesPercent(newPercent: string){
    this.percent = newPercent;
    this.changes();
  }

  changes(){
    this.onTipChanges.emit({
      bill : (this.tippingForm.get("bill")?.value)?+this.tippingForm.get("bill")!.value! : 0,
      numberPeople: (this.tippingForm.get("numberPeople")?.value) ? +this.tippingForm.get("numberPeople")!.value! : 0,
      percent: +this.percent
    })
  }

  resetChanges(){
    this.tippingForm.get("bill")?.setValue(0);
    this.tippingForm.get("numberPeople")?.setValue(1);
    this.percent = "5";
  }



}
