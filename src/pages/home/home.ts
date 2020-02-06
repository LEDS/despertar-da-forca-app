import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openProdutos() {
    this.navCtrl.push('ProdutosPage');
  }

  openClientes() {
    this.navCtrl.push('ClientesPage');
  }

}
