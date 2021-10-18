import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public firstNumber: any;
  public secondNumber: any;
  public operators = ['Cong', 'Tru', 'Nhan', 'Chia'];
  public result =0;
  op: any;


  constructor() {}

  ngOnInit(): void {}

public operating(){
  switch (this.op){
    case 'Cong':
      this.result = this.firstNumber + this.secondNumber;
      break;
    case 'Tru':
      this.result = this.firstNumber - this.secondNumber;
      break;
    case 'Nhan':
      this.result = this.firstNumber * this.secondNumber;
      break;
    case 'Chia':
      this.result = this.firstNumber / this.secondNumber;
      break;

  }

}



}
