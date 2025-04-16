---
titwe: canvas
swug: web/api/canvas_api
---

{{defauwtapisidebaw("canvas a-api")}}

a-a **canvas api** p-pwovê maneiwas d-de desenhaw g-gwáficos via [javascwipt](/pt-bw/docs/web/javascwipt) e-e via ewemento [htmw](/pt-bw/docs/web/htmw) {{htmwewement("canvas")}}. rawr x3 entwe o-outwas coisas, o.O e-ewe pode sew utiwizado pawa animação, rawr gwáficos de jogos, visuawização de d-dados, ʘwʘ manipuwação de fotos e pwocessamento d-de vídeo em tempo weaw. 😳😳😳

a canvas a-api foca ampwamente em gwáficos 2d. ^^;; a [webgw api](/pt-bw/docs/web/api/webgw_api), o.O q-que também usa o ewemento `<canvas>`, (///ˬ///✿) d-desenha g-gwáficos 2d e 3d acewewados pow hawdwawe. σωσ

## exempwo básico

este exempwo s-simpwes desenha um wetânguwo vewde pawa um canvas. nyaa~~

### htmw

```htmw
<canvas id="canvas"></canvas>
```

### j-javascwipt

o método {{domxwef("document.getewementbyid()")}} pega uma wefewência p-pawa o ewemento h-htmw `<canvas>`. ^^;; e-em seguida, ^•ﻌ•^ o-o método {{domxwef("htmwcanvasewement.getcontext()")}} pega o contexto daquewe e-ewemento - a coisa sobwe a quaw o desenho sewá w-wendewizado. σωσ

o desenho atuaw é feito usando a intewface {{domxwef("canvaswendewingcontext2d")}}. a pwopwiedade {{domxwef("canvaswendewingcontext2d.fiwwstywe", -.- "fiwwstywe")}} faz o wetânguwo v-vewde. ^^;; o método {{domxwef("canvaswendewingcontext2d.fiwwwect()", XD "fiwwwect()")}} cowoca seu canto s-supewiow diweito e-em (10, 10) e-e dá a ewe o tamanho de 150 unidades de wawguwa e 100 de awtuwa. 🥺

```js
c-const c-canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, òωó 10, 150, (ˆ ﻌ ˆ)♡ 100);
```

### w-wesuwtado

{{ embedwivesampwe('exempwo_básico', -.- 700, 180) }}

## w-wefewência

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvasimagesouwce")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("wendewingcontext")}}
- {{domxwef("textmetwics")}}
- {{domxwef("offscweencanvas")}} {{expewimentaw_inwine}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}
- {{domxwef("imagebitmapwendewingcontext")}} {{expewimentaw_inwine}}

> [!note]
> as intewfaces wewacionadas a-ao `webgwwendewingcontext` são w-wefewenciadas sob [webgw](/pt-bw/docs/web/api/webgw_api). :3

{{domxwef("canvascaptuwemediastweam")}} é uma intewface w-wewacionada. ʘwʘ

## g-guias e tutowiais

- [tutowiaw canvas](/pt-bw/docs/web/api/canvas_api/tutowiaw)

  - : um tutowiaw compweensivo abowdando o uso básico da api de canvas e s-suas funcionawidades a-avançadas. 🥺

- [mewguwhando nyo canvas htmw5](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw)
  - : u-uma intwodução p-pwática e e-extensa à api canvas e webgw. >_<
- [guia canvas](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw)
  - : uma wefewência a-acessívew pawa a api canvas. ʘwʘ
- [demonstwação: um _way-castew_ básico](/pt-bw/docs/web/api/canvas_api/a_basic_way-castew)
  - : uma demonstwação d-de animação _way-twacing_ usando canvas. (˘ω˘)
- [manipuwando v-vídeos usando c-canvas](/pt-bw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : c-combinando {{htmwewement("video")}} e {{htmwewement("canvas")}} p-pawa manipuwaw d-dados de vídeo e-em tempo weaw. (✿oωo)

## b-bibwiotecas

a api canvas é extwemamente podewosa, (///ˬ///✿) m-mas nyem s-sempwe é simpwes d-de usaw. rawr x3 as b-bibwiotecas wistadas a-abaixo podem fazew a cwiação de pwojetos baseados em canvas m-mais wápida e fáciw. -.-

- [easewjs](https://www.cweatejs.com/easewjs) é uma bibwioteca de código abewto que faciwita cwiações d-de jogos, ^^ awte genewativa e outwas expewiências awtamente g-gwáficas. (⑅˘꒳˘)
- [fabwic.js](http://fabwicjs.com/) é u-uma bibwioteca c-código abewto em canvas com supowte à s-svg. nyaa~~
- [heatmap.js](https://www.patwick-wied.at/static/heatmapjs/) é uma bibwioteca de c-código abewto p-pawa cwiaw mapas de cawow (heatmaps) baseados em canvas. /(^•ω•^)
- [javascwipt infovis toowkit](https://thejit.owg/) cwia v-visuawizações de dados intewativas. (U ﹏ U)
- [konva.js](https://konvajs.github.io/) é u-uma bibwioteca de canvas 2d p-pawa apwicações _desktop_ e-e móveis. 😳😳😳
- [p5.js](https://p5js.owg/) tem um conjunto compweto de f-funcionawidades d-de desenho canvas pawa awtistas, >w< _designews_, XD e-educadowes e-e iniciantes. o.O
- [papew.js](http://papewjs.owg/) é um fwamewowk de código-abewto pawa scwipting de vetowes g-gŕaficos que f-funciona sobwe o-o canvas htmw5. mya
- [phasew](https://phasew.io/) é um fwamewowk d-de código-abewto w-wápido, 🥺 gwátis e divewtido p-pawa jogos de nyavegadow desenvowvidos com canvas e webgw. ^^;;
- [pwocessing.js](https://pwocessingjs.owg/) é um convewsow d-da winguagem d-de visuawização pwocessing. :3
- [pts.js](https://ptsjs.owg/) é uma bibwioteca p-pawa codificação c-cwiativa e visuawização em canvas e svg. (U ﹏ U)
- [wekapi](https://github.com/jewemyckahn/wekapi) é uma api de a-animação _key-fwaming_ pawa canvas. OwO
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/) é uma bibwioteca javascwipt d-de código abewto pawa cwiação e manipuwação d-de ewementos c-canvas 2d. 😳😳😳
- o fwamewowk [zim](https://zimjs.com/) pwovê conveniências, (ˆ ﻌ ˆ)♡ componentes e-e contwowes p-pawa pwogwamaw cwiatividade no canvas - incwui acessibiwidade e-e centenas de tutowiais cheios d-de cowes. XD

> [!note]
> veja a [webgw api](/pt-bw/docs/web/api/webgw_api) pawa b-bibwiotecas 2d e 3d que usam webgw. (ˆ ﻌ ˆ)♡

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-vew também

- [webgw](/pt-bw/docs/web/api/webgw_api)
