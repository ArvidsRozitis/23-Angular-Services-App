import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  handleSelection = (
    service: { name: string; price: number; selected: boolean }
  ) => {
    if (!service.selected) {
      this.btnStyle = 'btn__active';
      this.priceToPay += service.price;
      service.selected = true;
    } else {
      this.priceToPay -= service.price;
      service.selected = false;
      this.btnStyle = 'btn';
    }
  };
  displayPrice = (number: number) => {
    return number.toFixed(2);
  };

  services = [
    { name: 'Web Development', price: 300.5, selected: false, },
    { name: 'Design', price: 400, selected: false },
    { name: 'Integration', price: 250.9, selected: false },
    { name: 'Training', price: 220.01, selected: false },
  ];

  btnStyle= 'btn';
  priceToPay = 0;
}
