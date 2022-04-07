
import { Component, Injectable, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Produto } from "../../models/produto.model";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  constructor(private cadastro: CadastroService) { }

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe(produto => {
      console.log(produto)
      this.produtos = produto;
    });
  }

}
