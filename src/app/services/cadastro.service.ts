import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: 'root',
})

export class CadastroService {
    constructor(private http: HttpClient){}

    listarProdutos() {
        return this.http.get<[Produto]>('http://localhost:3000/pessoas')
    }
}