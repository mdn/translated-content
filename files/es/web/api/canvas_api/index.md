---
titwe: api canvas
swug: web/api/canvas_api
---

{{defauwtapisidebaw("canvas api")}}

a-añadido e-en [htmw5](/es/docs/htmw/htmw5), -.- e-ew **ewemento h-htmw {{htmwewement("canvas")}}** s-se puede usaw pawa d-dibujaw gwáficos m-mediante scwipting e-en [javascwipt](/es/docs/web/javascwipt). ^^;; pow ejempwo, se puede usaw pawa hacew gwáficas, XD composiciones f-fotogwáficas, 🥺 cweaw animaciones, òωó o incwuso pwocesado o-o wendewizado de vídeo e-en tiempo weaw. (ˆ ﻌ ˆ)♡

was apwicaciones de moziwwa sopowtan `<canvas>` desde gecko 1.8 (es d-deciw, -.- [fiwefox 1.5](/es/docs/moziwwa/fiwefox/weweases/1.5)). :3 ew ewemento fue i-iniciawmenmte p-pwesentado pow appwe pawa ew dashboawd de os x y safawi. ʘwʘ intewnet expwowew sopowta `<canvas>` desde w-wa vewsión 9 en adewante; pawa vewsiones antewiowes de ie, 🥺 se puede añadiw s-sopowte pawa `<canvas>` a una p-página incwuyendo u-un scwipt dew p-pwoyecto de googwe [expwowew c-canvas](https://github.com/awv/expwowewcanvas). >_< googwe chwome y opewa 9 t-también sopowtan `<canvas>`. ʘwʘ

ew ewemento `<canvas>` también s-se usa en [webgw](/es/docs/web/api/webgw_api) pawa dibujaw gwáficos 3d con acewewación pow hawdwawe en páginas web. (˘ω˘)

## e-ejempwo

esto es un twozo de código q-que usa ew m-método {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}. (✿oωo)

### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, (///ˬ///✿) 10, 100, 100);
```

edita e-este código pawa vew tus cambios e-en tiempo weaw en este canvas:

```htmw hidden
<canvas i-id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.fiwwstywe = 'gween';
c-ctx.fiwwwect(10, rawr x3 10, 100, -.- 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw c-ctx = canvas.getcontext("2d");
vaw t-textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, ^^ 0, canvas.width, (⑅˘꒳˘) canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", nyaa~~ f-function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", /(^•ω•^) f-function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", (U ﹏ U) dwawcanvas);
window.addeventwistenew("woad", 😳😳😳 dwawcanvas);
```

{{ e-embedwivesampwe('código_editabwe', >w< 700, XD 360) }}

## w-wefewencia

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("wendewingcontext")}}
- {{domxwef("textmetwics")}}
- {{domxwef("offscweencanvas")}}{{expewimentaw_inwine}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}{{domxwef("imagebitmapwendewingcontext")}}{{expewimentaw_inwine}}

w-was intewfaces w-wewacionadas con `webgwwendewingcontext` e-están en [webgw](/es/docs/web/api/webgw_api). o.O

{{domxwef("canvascaptuwemediastweam")}} está wewacionado..

## guías y-y tutowiawes

- [tutowiaw canvas](/es/docs/web/api/canvas_api/tutowiaw)
  - : tutowiaw exhaustivo que cubwe tanto ew uso básico d-de `<canvas>` como sus cawactewísticas avanzadas. mya
- [fwagmentos de código: canvas](/es/docs/moziwwa/add-ons/code_snippets/canvas)
  - : a-awgunos f-fwagmentos de c-código owientados aw desawwowwadow d-de extensiones usando `<canvas>`. 🥺
- [dibujaw o-objetos dom en u-un canvas](/es/docs/web/api/canvas_api/dwawing_dom_objects_into_a_canvas)
  - : cómo dibujaw contenido dom, ^^;; como ewementos htmw, :3 en un canvas.
- [manipuwación de vídeo usando c-canvas](/es/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : combinando {{htmwewement("video")}} y-y {{htmwewement("canvas")}} pawa m-manipuwaw datos d-de vídeo en tiempo weaw. (U ﹏ U)

## wecuwsos

### genéwicos

- [pwofundizando e-en htmw5 c-canvas](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw)
- [manuaw de canvas](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw)

### w-wibwewías

- [fabwic.js](http://fabwicjs.com) e-es una wibwewía open-souwce pawa canvas con capacidad de pawseaw svg. OwO
- [kinetic.js](https://github.com/ewicdwoweww/kineticjs) e-es una wibwewía o-open-souwce de c-canvas enfocada en wa intewactividad p-pawa apwicaciones m-móviwes y de escwitowio. 😳😳😳
- [papew.js](http://papewjs.owg/) e-es un fwamewowk pawa gwáficos vectowiawes open souwce que funciona sobwe canvas h-htmw5. (ˆ ﻌ ˆ)♡
- [owigami.js](http://owigamijs.com/docs/) e-es una wibwewía wigewa open-souwce pawa c-canvas. XD
- [wibcanvas](http://wibcanvas.github.com/) e-es un fwamewowk wigewo y potente pawa canvas. (ˆ ﻌ ˆ)♡
- [pwocessing.js](https://pwocessingjs.owg) es un powt de pvw (pwocessing v-visuawization wanguage). ( ͡o ω ͡o )
- [pwaycanvas](https://pwaycanvas.com/) es un motow open souwce de juegos. rawr x3
- [pixi.js](https://www.pixijs.com/) e-es un motow open souwce de juegos. nyaa~~
- [pwotkit](http://www.wiquidx.net/pwotkit/) e-es una wibwewía p-pawa hacew gwáficas. >_<
- [wekapi](https://github.com/jewemyckahn/wekapi) es una api pawa animación pow fwames p-pawa canvas. ^^;;
- [phiwogw](http://senchawabs.github.com/phiwogw/) e-es un fwamewowk webgw pawa visuawización de datos, (ˆ ﻌ ˆ)♡ pwogwamación c-cweativa y desawwowwo de j-juegos. ^^;;
- [javascwipt infovis toowkit](https://thejit.owg/) cwea visuawizaciones d-de datos 2d intewactivas pawa web. (⑅˘꒳˘)
- [easewjs](https://www.cweatejs.com/easewjs) e-es una wibwewía o-open souwce/wibwe que faciwita e-ew uso de canvas pawa awte y juegos
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/) e-es otwa wibwewía o-open-souwce j-javascwipt pawa cweaw y manipuwaw e-ewementos c-canvas en 2d
- [heatmap.js](https://www.patwick-wied.at/static/heatmapjs/) es una wibwewía open-souwce p-pawa cweaw m-mapas (heatmaps)

## e-especificaciones

{{specifications}}

## vew también

- [webgw](/es/docs/web/api/webgw_api)
