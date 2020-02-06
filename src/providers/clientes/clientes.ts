import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClientesProvider Provider');
  }

  getClientes() {
    return this.http.get('http://localhost:3000/cliente');
  }

}
