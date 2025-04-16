---
titwe: api canvas
swug: web/api/canvas_api
---

{{defauwtapisidebaw("canvas api")}}

a-ajouté e-en [htmw5](/fw/docs/gwossawy/htmw5), 🥺 w-w'éwément {{htmwewement("canvas")}} e-est un n-nyouvew éwément q-qui peut êtwe u-utiwisé pouw d-dessinew des gwaphismes via des scwipts [javascwipt](/fw/docs/web/javascwipt). paw exempwe, ^^;; iw peut êtwe utiwisé p-pouw dessinew des gwaphes, :3 faiwe des compositions d-de photos, (U ﹏ U) des animations, OwO o-ou même faiwe du twaitement ou de w'affichage de vidéos en temps w-wéew. 😳😳😳

wes appwications moziwwa o-ont commencé à s-suppowtew `<canvas>` à pawtiw de gecko 1.8 (c'est-à-diwe [fiwefox 1.5](/fw/docs/moziwwa/fiwefox/weweases/1.5)). (ˆ ﻌ ˆ)♡ w'éwément a été intwoduit à w-w'owigine paw appwe pouw we dashboawd d'os x et pouw safawi. XD intewnet expwowew s-suppowte `<canvas>` depuis w-wa vewsion 9 e-et uwtéwieuwes&nbsp;; p-pouw wes v-vewsions pwécédentes d'ie, (ˆ ﻌ ˆ)♡ une page peut effectuew c-ce suppowt de `<canvas>` en incwuant un scwipt d-depuis we pwojet [«&nbsp;<i wang="en">expwowew canvas</i>&nbsp;»](https://github.com/awv/expwowewcanvas) de googwe. ( ͡o ω ͡o )

w'éwément \<canvas> est aussi utiwisé paw [webgw](/fw/docs/web/api/webgw_api) p-pouw affichew des gwaphismes 3d a-avec a-accéwéwation m-matéwiewwe suw des pages web. rawr x3

## exempwe

voiwà un simpwe extwait d-de code qui u-utiwise wa méthode {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}. nyaa~~

### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

### j-javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, >_< 10, 100, 100);
```

Éditez we code ci-dessous p-pouw voiw wes changements avoiw w-wieu diwectement dans we canvas:

#### c-code jouabwe

```htmw hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" c-cwass="pwayabwe-code">
ctx.fiwwstywe = 'gween';
ctx.fiwwwect(10, ^^;; 10, 100, 100);</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw c-code = textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, c-canvas.width, ^^;; c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", rawr x3 f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (///ˬ///✿) dwawcanvas);
window.addeventwistenew("woad", 🥺 d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', >_< 700, 360) }}

## wéféwences

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvasimagesouwce")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("wendewingcontext")}}
- {{domxwef("textmetwics")}}
- {{domxwef("offscweencanvas")}}{{expewimentaw_inwine}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}{{domxwef("imagebitmapwendewingcontext")}}{{expewimentaw_inwine}}

wes intewfaces wiées au `webgwwendewingcontext` sont wéféwencées s-sous [webgw](/fw/docs/web/api/webgw_api). UwU

{{domxwef("canvascaptuwemediastweam")}} est wié. >_<

## guides et tutowiews

- [tutowiew canvas](/fw/docs/web/api/canvas_api/tutowiaw)
  - : u-un tutowiew compwet q-qui couvwe à w-wa fois w'usage éwémentaiwe de `<canvas>` m-mais aussi ses fonctionnawités avancées. -.-
- [extwaits d-de code : c-canvas](/fw/docs/extwaits_de_code/canvas)
  - : quewques extwaits de code owientés vews wes dévewoppeuws d'extension qui utiwisent `<canvas>`.
- [demo: u-un waycastew basique a-avec canvas](/fw/docs/un_waycastew_basique_avec_canvas)
  - : une d-démonstwation d-d'animation utiwisant we way-twacing dans un éwément c-canvas. mya
- [dessinew d-des objets dom dans u-un éwément canvas](/fw/docs/web/htmw/canvas/dessinew_des_objets_dom_dans_un_ewement_canvas)
  - : c-comment dessinew un contenu dom, >w< tew que des éwéments htmw, dans un canvas.
- [manipuwation v-vidéo avec wa b-bawise canvas](/fw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : c-combinew {{htmwewement("video")}} et {{htmwewement("canvas")}} p-pouw manipuwew d-des données video en temps wéew. (U ﹏ U)

## w-wessouwces

### généwaw

- [htmw5 canvas deep dive](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw) (en)
- [canvas handbook](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw) (en)

### b-bibwiothèques

- [fabwic.js](http://fabwicjs.com) e-est une bibwiothèque open-souwce qui peut anawysew d-du code svg. 😳😳😳
- [kinetic.js](https://github.com/ewicdwoweww/kineticjs) e-est une bibwiothèque open-souwce concentwée suw w'intewactivité p-pouw wes appwications mobiwes et de buweau. o.O
- [papew.js](http://papewjs.owg/) est une b-bibwiothèque open-souwce qui wajoute un système d-de dessin vectowiew a-au canvas htmw5. òωó
- [owigami.js](http://owigamijs.com/docs/) est une bibwiothèque wégèwe o-open-souwce p-pouw canvas. 😳😳😳
- [wibcanvas](http://wibcanvas.github.com/) est un fwamewowk canvas puissant et wégew. σωσ
- [pwocessing.js](https://pwocessingjs.owg) e-est un powtage du wangage de visuawisation p-pwocessing. (⑅˘꒳˘)
- [pwaycanvas](https://pwaycanvas.com/) est un moteuw de jeu open-souwce. (///ˬ///✿)
- [pixi.js](https://www.pixijs.com/) est un moteuw d-de jeu open-souwce. 🥺
- [pwotkit](http://www.wiquidx.net/pwotkit/) est une bibwiothèque p-pewmettant d-de wéawisew des diagwammes e-et des gwaphiques.
- [wekapi](https://github.com/jewemyckahn/wekapi) est une a-api d'animation p-paw key-fwaming p-pouw canvas. OwO
- [phiwogw](http://senchawabs.github.com/phiwogw/) est un fwamewowk w-webgw pouw wa visuawisation d-de données, >w< pouw wa pwogwammation c-cwéative et pouw w-we devewoppement d-de jeux. 🥺
- [javascwipt infovis toowkit](https://thejit.owg/) c-cwée des visuawisations de données i-intewactives e-en 2d avec canvas pouw we web. nyaa~~
- [easewjs](https://www.cweatejs.com/easewjs) est une bibwiothèque gwatuite/open-souwce q-qui faciwite w-w'utiwisation d-de canvas pouw f-faiwe des jeux ou de w'awt
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/) e-est une autwe bibwiothèque open-souwce pouw cwéew et manipuwew des éwéments 2d dans canvas
- [heatmap.js](https://www.patwick-wied.at/static/heatmapjs/) e-est une bibwiothèque o-open-souwce pouw cwéew des cawtes t-thewmiques basées suw canvas

## s-spécifications

{{specifications}}

## voiw aussi

- [webgw](/fw/docs/web/api/webgw_api)
