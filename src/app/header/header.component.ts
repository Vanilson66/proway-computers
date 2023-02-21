import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  content:string = ""

  constructor (
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const valorPesquisa = params.get('titulo-produto')
      
      valorPesquisa? 
        this.content = valorPesquisa 
          : 
        this.content = ""
    })
  }
}
