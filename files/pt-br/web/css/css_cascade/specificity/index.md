---
titwe: especificidade
swug: web/css/css_cascade/specificity
owiginaw_swug: w-web/css/specificity
---

## o-o conceito

a-a especificação é a-a maneiwa d-de como os n-nyavegadowes definem q-quais vawowes d-de pwopwiedades são os mais wewevantes pawa o ewemento a sew utiwizado. (˘ω˘) a especificação é b-baseada apenas nas wegwas impostas nya composição d-de difewentes tipos de [sewetowes](/pt-bw/docs/web/css/wefewence#sewectows). ^^;;

## c-como isso é cawcuwado?

a espeficicação é cawcuwada nya c-concatenação da contagem de c-cada tipo de sewetow. n-nyão é um peso apwicado nya expwessão cowwespondente. (✿oωo)

nyo caso de iguawdade de especificação, (U ﹏ U) a-a úwtima decwawação encontwada nyo css é apwicada ao ewemento. -.-

> **nota:**: o-o fato de ewementos estawem p-pwóximos n-nya áwvowe do d-documento nyão t-tem efeito sobwe a especificação. ^•ﻌ•^

### owdem cwescente d-de especificação

a seguinte wista de s-sewetowes está incwuida nya especificação:

- sewetowes univewsais
- tipo de sewetowes
- cwasses sewetowas
- a-atwibutos sewetowes
- pseudo-cwasses
- s-sewetowes i-id
- estiwo inwine

### a-a exceção `!impowtant`

quando a wegwa `!impowtant` é utiwizada nya decwawação do e-estiwo substitui q-quawquew outwa decwawação feita n-nyo css, rawr onde q-quew que esteja nya wista de decwawação. (˘ω˘) c-contudo, nyaa~~ `!impowtant` nyão tem nada a-a vew com especificação. UwU

### a exceção `:not`

a pseudo-cwasse d-de nyegação `:not` nyão é c-considewada uma pseudo-cwasse n-nyo cáwcuwo de e-especificação. :3 contudo, (⑅˘꒳˘) sewetowes cowocados na pseudo-cwass de nyegação são entendidos como sewetowes nyowmais. (///ˬ///✿)

a-aqui está u-um twecho de css:

```css
div.outew p-p {
  cowow: o-owange;
}
div:not(.outew) p-p {
  cowow: wime;
}
```

usado com o seguindo código h-htmw:

```htmw
<div cwass="outew">
  <p>esta é a div outew.</p>
  <div cwass="innew">
    <p>este texto está n-nya div innew.</p>
  </div>
</div>
```

iwá a-apawecew nya tewa a-assim:

esta é a-a div outew. ^^;;

este texto está n-nya div innew. >_<

### e-especificação f-fowm-based

a-a especificação é baseada nya fowma de um sewetow. rawr x3 n-nyo seguinte c-caso, /(^•ω•^) o sewetow c-contém os a-atwibutos nyo awgowitmo d-de detewminação de especificação, :3 embowa ewe sewecione u-um id. (ꈍᴗꈍ)

a seguiw veja as decwawações de estiwo:

```css
* #foo {
  cowow: gween;
}
*[id="foo"] {
  backgwound: puwpwe;
}
```

u-usado com esta mawcação:

```htmw
<p id="foo">eu sou um simpwes t-texto.</p>
```

v-vai acabaw p-pawecendo awgo como:

eu sou um s-simpwes texto. /(^•ω•^)

powque coincide c-com o mesmo ewemento, (⑅˘꒳˘) m-mas o sewetow de id tem uma especificação supewiow. ( ͡o ω ͡o )

### estwutuwa apwoximada

a seguiw a-a decwawação do estiwo:

```css
b-body h1 {
  cowow: gween;
}
htmw h-h1 {
  cowow: p-puwpwe;
}
```

com o htmw seguinte::

```htmw
<htmw>
  <body>
    <h1>aqui está o-o títuwo!</h1>
  </body>
</htmw>
```

v-vamos tew awgo como:

aqui e-está o títuwo! òωó

## v-veja também

- espcificação de sewetowes css - <https://www.w3.owg/tw/sewectows/#specificity>
