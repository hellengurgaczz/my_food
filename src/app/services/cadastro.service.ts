import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: 'root',
})

export class CadastroService {
    constructor(private http: HttpClient){}
    URL = "http://localhost:3000";

    listarProdutos(): Observable<Produto[]> {
        return this.http.get<[Produto]>(this.URL + '/pessoas')
    }

    buscarProdutoPorId(id: number): Observable<Produto[]> {
        return this.http.get<[Produto]>(this.URL + "/" + id)
    }

    IncluirProduto(produto: Produto) {
        return this.http.post(this.URL, produto)
    }

    atualizarProduto(produto: Produto, id: number) {
        return this.http.put(this.URL + "/" +  id, produto)
    }

    deletarProduto(id: number) {
        return this.http.delete(this.URL + "/" +  id)
    }
}