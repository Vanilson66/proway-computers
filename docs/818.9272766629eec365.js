"use strict";(self.webpackChunkstore_page=self.webpackChunkstore_page||[]).push([[818],{818:(P,p,n)=>{n.r(p),n.d(p,{ProdutosModule:()=>s});var d=n(895),a=n(736);const m=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg"},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",desconto:2e3,imagem:"./assets/monitor-1.jpg"},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg"},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg"},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg"},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg"},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg"},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg"},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg"},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg"},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg"},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png"},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg"},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg"},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg"}];var o=n(256);function u(c,e){if(1&c&&(o.TgZ(0,"a",2)(1,"div")(2,"span"),o._UZ(3,"img",3),o.TgZ(4,"h2",4),o._uU(5),o.qZA()(),o.TgZ(6,"span",5)(7,"p",6),o._uU(8),o.ALo(9,"currency"),o.qZA(),o.TgZ(10,"p",7),o._uU(11),o.qZA()()(),o.TgZ(12,"button",8),o._uU(13,"Comprar"),o.qZA()()),2&c){const t=e.$implicit;o.MGl("routerLink","/produtos/",t.id,""),o.xp6(3),o.Q6J("src",t.imagem,o.LSH),o.xp6(2),o.hij(" ",t.descricao," "),o.xp6(3),o.hij(" ",o.xi3(9,5,t.preco,"BRL")," "),o.xp6(3),o.hij(" ",t.descricaoPreco," ")}}class r{constructor(e){this.route=e,this.items=m}ngOnInit(){this.route.queryParamMap.subscribe(e=>{const t=e.get("titulo-produto")?.toLocaleLowerCase();t&&(this.items=m.filter(l=>l.descricao.toLowerCase().includes(t)))})}}r.\u0275fac=function(e){return new(e||r)(o.Y36(a.gz))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-produtos"]],decls:3,vars:1,consts:[[1,"product_item-list"],["class","product_item_link",3,"routerLink",4,"ngFor","ngForOf"],[1,"product_item_link",3,"routerLink"],["alt","",3,"src"],[1,"product_item_name"],[1,"title-price"],[1,"product_item_price"],[1,"product_item_price-status"],[1,"product_item_buy"]],template:function(e,t){1&e&&(o.TgZ(0,"section")(1,"div",0),o.YNc(2,u,14,8,"a",1),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",t.items))},dependencies:[d.sg,a.rH,d.H9],styles:["section[_ngcontent-%COMP%]{background-color:#fff}.product_item-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.product_item_link[_ngcontent-%COMP%]{background-color:#fff;color:#4b4b4b;width:250px;height:390px;text-align:center;padding:10px;margin:15px;text-decoration:none;box-shadow:2px 1px 15px #8a8a8a1c;display:flex;justify-content:space-around;flex-direction:column;align-items:center}.product_item_link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:90%}.product_item_link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.product_item_link[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.product_item_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:title-price{display:flex;padding:5px}.product_item_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.product_item_price-status[_ngcontent-%COMP%]{font-size:.7em}.product_item_link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1e90ff;color:#fff;width:90px;height:35px;border:none}"]});const g=[{path:"",component:r}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[a.Bz.forChild(g),a.Bz]});class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[d.ez,i]})}}]);