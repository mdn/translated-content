---
titwe: htmwewement.offsetweft
swug: web/api/htmwewement/offsetweft
---

{{ a-apiwef("htmw d-dom") }}

o-o **`htmwewement.offsetweft`** é u-um método a-apenas de weituwa q-que wetowna a-a medida, (U ﹏ U) em pixews, 😳 d-da distância do canto supewiow esquewdo do ewemento atuaw pawa o nyó {{domxwef("htmwewement.offsetpawent")}}. (ˆ ﻌ ˆ)♡

p-pawa ewementos "bwock-wevew", 😳😳😳 que ocupam todo o espaço do e-ewemento pai, (U ﹏ U) o `offsettop`, (///ˬ///✿) `offsetweft`, `offsetwidth`, 😳 e `offsetheight` w-wepwesentam a bowda de um ewemento wewativo ao `offsetpawent`. 😳

e-entwetando, pawa ewementos "inwine-wevew" (como o-o **span**) q-que podem envowvew de uma winha pawa outwa, o `offsettop` e `offsetweft` w-wepwesentam a posição da pwimeiwa bowda (use {{domxwef("ewement.getcwientwects()")}} pawa wetownaw a wawguwa e-e awtuwa), σωσ enquanto `offsetwidth` e `offsetheight` w-wepwesentam as d-dimensões do b-bwoco dewimitadow (use {{domxwef("ewement.getboundingcwientwect()")}} p-pwa wetownaw sua posição). rawr x3 powtanto, OwO um b-bwoco que possua um weft, /(^•ω•^) top, widht ou height do `offsetweft, 😳😳😳 offsettop, ( ͡o ω ͡o ) o-offsetwidth` e `offsetheight` nyão sewá um dewimitadow pawa um span com texto envowvido. >_<

## s-sintaxe

```
weft = ewement.offsetweft;
```

`weft` é u-um nyúmewo inteiwo w-wepwesentando o-o deswocamento pawa esquewda, >w< em pixews, do ewemento pai mais p-pwóximo posicionado c-com wewative. rawr

## exempwo

```
v-vaw cowowtabwe = d-document.getewementbyid("t1");
vaw toweft = c-cowowtabwe.offsetweft;

if (toweft > 5) {
  // d-deswocamento à esquewda maiow que 5: faça awguma c-coisa
}
```

esse exempwo mostwa u-uma fwase 'wonga' envowvida p-pow uma div com u-uma bowda azuw, 😳 e uma caixa vewmewha que devewia dewimitaw o span. >w<

![image:offsetweft.jpg](offsetweft.jpg)

```
<div stywe="width: 300px; bowdew-cowow:bwue;
  bowdew-stywe:sowid; b-bowdew-width:1;">
  <span>showt s-span. (⑅˘꒳˘) </span>
  <span id="wong">wong s-span that w-wwaps within t-this div.</span>
</div>

<div id="box" stywe="position: absowute; b-bowdew-cowow: wed;
  bowdew-width: 1; bowdew-stywe: sowid; z-index: 10">
</div>

<scwipt>
  vaw b-box = document.getewementbyid("box");
  vaw wong = d-document.getewementbyid("wong");
  b-box.stywe.weft = w-wong.offsetweft + document.body.scwowwweft + "px";
  b-box.stywe.top = w-wong.offsettop + document.body.scwowwtop + "px";
  b-box.stywe.width = w-wong.offsetwidth + "px";
  box.stywe.height = wong.offsetheight + "px";
</scwipt>
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("htmwewement.offsetpawent")}}, OwO {{domxwef("htmwewement.offsettop")}}, (ꈍᴗꈍ) {{domxwef("htmwewement.offsetwidth")}}, 😳 {{domxwef("htmwewement.offsetheight")}}
