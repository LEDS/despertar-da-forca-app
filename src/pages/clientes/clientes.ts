import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientesOld = [
  {
    "id": 33,
    "nome": "Maria",
    "data_nasc": "1989-08-30T03:00:00.000Z",
    "cpf": "123.456.789-90",
    "cidade": "Serra",
    "estado": "ES",
    "produtos": " blusa,  Camisa,  Tenis,  Salto alto"
  },
  {
    "id": 34,
    "nome": "João",
    "data_nasc": "1993-05-07T03:00:00.000Z",
    "cpf": "122.256.739-70",
    "cidade": "São Paulo",
    "estado": "SP",
    "produtos": " Bermuda,  blusa,  Sapato Social"
  },
  {
    "id": 35,
    "nome": "Lucas",
    "data_nasc": "1999-03-30T03:00:00.000Z",
    "cpf": "143.476.739-40",
    "cidade": "Vitória",
    "estado": "ES",
    "produtos": " Toalha,  Pão,  Presunto"
  },
  {
    "id": 36,
    "nome": "Magno",
    "data_nasc": "1989-08-29T03:00:00.000Z",
    "cpf": "153.656.549-10",
    "cidade": "Cariacica",
    "estado": "ES",
    "produtos": " Camisa,  Tenis,  Presunto"
  },
  {
    "id": 37,
    "nome": "Helen",
    "data_nasc": "2000-01-30T02:00:00.000Z",
    "cpf": "323.876.369-40",
    "cidade": "Vila Velha",
    "estado": "ES",
    "produtos": " Mussarela,  Presunto"
  },
  {
    "id": 38,
    "nome": "Marcos",
    "data_nasc": "1992-03-20T03:00:00.000Z",
    "cpf": "623.386.459-60",
    "cidade": "Rio de Janeiro",
    "estado": "RJ",
    "produtos": " Meia,  Sabonete,  Pão"
  },
  {
    "id": 39,
    "nome": "Obadias",
    "data_nasc": "1996-12-13T02:00:00.000Z",
    "cpf": "325.469.946-30",
    "cidade": "Serra",
    "estado": "ES",
    "produtos": " Condicionador,  Jogo de cama"
  },
  {
    "id": 40,
    "nome": "Maria Lúcia",
    "data_nasc": "2002-09-06T03:00:00.000Z",
    "cpf": "893.564.673-20",
    "cidade": "Recife",
    "estado": "PE",
    "produtos": " Shampoo,  Camisa"
  }
  ];

  clientes = [];
  clientesbackup = [];
  clientepesquisa: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiClientes: ClientesProvider,
    public loadCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    const loader = this.loadCtrl.create({
      content: "aguarde",
      duration: 2000
    });

    loader.present();

    this.apiClientes.getClientes().subscribe((clientes: []) => {
      console.log(clientes);
      this.clientes = clientes
      this.clientesbackup = clientes;
      loader.dismiss();
    });
  }

  openCliente(cliente) {
    const params = {
      cliente: cliente
    };

    this.navCtrl.push('ClientePage', params);
  }

  onInput(event) {
    const searchstring = event.target.value;

    this.clientes = this.clientesbackup.filter((cliente) => {
      return cliente.nome.includes(searchstring);
    });
  }

}
