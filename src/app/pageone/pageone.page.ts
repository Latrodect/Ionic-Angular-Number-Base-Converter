import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import {PickerOptions} from '@ionic/core' ;
declare var TranslateFunc;

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.page.html',
  styleUrls: ['./pageone.page.scss'],
})
export class PageonePage implements OnInit {
  framework = '';
  selected = ['',''];
  userInput = '';
  x ='';
  y ='';
  constructor(private pickerCtrl:PickerController) { }
  async showAdvancedPicker(){
    let opts: PickerOptions = {
      cssClass:"academy-picker",
      buttons : [
        {
          text : 'Cancel',
          role : 'cancel'
        },
        {
          text : 'Done'
        }
      ],
      columns : [
        {
          name : 'From',
          options : [
            {text : 'Ace', value :"1"},
            {text : 'Binary' ,value :"2"} ,
            {text : 'Triple', value :"3"},
            {text : 'Quadruple' ,value :"4"} ,
            {text : 'quintet', value :"5"},
            {text : 'Senary' ,value :"6"} ,
            {text : 'Seven', value :"7"},
            {text : 'Octal' ,value :"8"} ,
            {text : 'Nines', value :"9"},
            {text : 'Decimal' ,value :"10"} ,
            {text : 'Penalty', value :"11"},
            {text : 'Duodecimal' ,value :"12"} ,
            {text : 'Thirteen', value :"13"},
            {text : 'Fourteen' ,value :"14"} ,
            {text : 'The Biasing', value :"15"},
            {text : 'Hexadecimal' ,value :"16"} 
          ]
        },
        {
          name : 'To',
          options : [
            {text : 'Ace', value :"1"},
            {text : 'Binary' ,value :"2"} ,
            {text : 'Triple', value :"3"},
            {text : 'Quadruple' ,value :"4"} ,
            {text : 'quintet', value :"5"},
            {text : 'Senary' ,value :"6"} ,
            {text : 'Seven', value :"7"},
            {text : 'Octal' ,value :"8"} ,
            {text : 'Nines', value :"9"},
            {text : 'Decimal' ,value :"10"} ,
            {text : 'Penalty', value :"11"},
            {text : 'Duodecimal' ,value :"12"} ,
            {text : 'Thirteen', value :"13"},
            {text : 'Fourteen' ,value :"14"} ,
            {text : 'The Biasing', value :"15"},
            {text : 'Hexadecimal' ,value :"16"} 
          ]
        },
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data =>{
      console.log('data', data);
      let From = await picker.getColumn('From');
      let To = await picker.getColumn('To');
      this.selected = [
        From.options[From.selectedIndex].text,
        To.options[To.selectedIndex].text,
        this.x = From.options[From.selectedIndex].value,
        this.y = To.options[To.selectedIndex].value
      ];
    });
  }
  async showBasicPicker(){
    let opts: PickerOptions = {
      buttons : [
        {
          text : 'Cancel',
          role : 'cancel'
        },
        {
          text : 'Done'
        }
      ],
      columns : [
        {
        name : 'framework',
        options : [
          {text : 'Angular', value :"A"},
          {text : 'İonic' ,value :"B"} ,
          {text : 'Berçin' ,value : "C"}
        ]
      }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data =>{
      let col = await picker.getColumn('framework');
      console.log('col:', col);
      this.framework = col.options[col.selectedIndex].text;
    });
  }
  Calculater(){
    TranslateFunc(this.userInput,this.x,this.y)
  }
  ngOnInit() {
  }
 
}
