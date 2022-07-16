import { Injectable } from '@angular/core';

const LANGUAGES = [ "English", "Spanish"]

@Injectable({
  providedIn: 'root'
})

export class TraslationServiceService {

  private language: string = "English"

  get currentLanguage():string{
    return this.language;
  }

  changesLanguages( newLanguage : string ){
    this.language = (LANGUAGES.includes(newLanguage)) ? newLanguage : "English";
  }

}
