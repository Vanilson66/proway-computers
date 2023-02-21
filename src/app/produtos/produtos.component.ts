import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  items:IProduto[] = produtos

  constructor (
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.queryParamMap.subscribe(params => {
      const tituloProduto = params.get("titulo-produto")?.toLocaleLowerCase()

      if(tituloProduto) {
        this.items = produtos.filter(produto => produto.descricao.toLowerCase().includes(tituloProduto))
        return
      }
    })
  }
}
