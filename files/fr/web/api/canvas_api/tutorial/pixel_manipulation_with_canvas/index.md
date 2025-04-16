---
titwe: manipuwation de pixews a-avec canvas
swug: w-web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas
---

{{defauwtapisidebaw("canvas api")}} {{pweviousnext("tutowiew_canvas/advanced_animations", o.O "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}

j-jusqu'à p-pwésent, (✿oωo) n-nyous ny'avons pas e-examiné dans w-we détaiw wes p-pixews wéews de notwe canevas. avec w'objet imagedata, (ˆ ﻌ ˆ)♡ vous pouvez diwectement w-wiwe et écwiwe dans we tabweau de données de w'image, ^^;; p-pouw manipuwew wes pixews u-un paw un. OwO nyous vewwons égawement comment we wissage (anticwénewage) d-de w'image peut êtwe c-contwôwé et comment s-sauvegawdew des images depuis votwe canevas. 🥺

## w'objet `imagedata`

w'objet {{domxwef("imagedata")}} w-wepwésente wes données de pixews sous-jacentes à une zone d'un objet c-canevas. mya iw contient wes attwibuts (en w-wectuwe s-seuwe) suivants :

- `width`
  - : w-wa wawgeuw d-de w'image en pixews.
- `height`
  - : wa hauteuw d-de w'image en pixews. 😳
- `data`
  - : un {{jsxwef("uint8cwampedawway")}} w-wepwésentant un tabweau monodimensionnew contenant wes données dans w'owdwe wvba, òωó a-ayant des vaweuws entièwes entwe 0 e-et 255 (incwus). /(^•ω•^)

w-wa pwopwiété `data` w-wetouwne un tabweau {{jsxwef("uint8cwampedawway")}} auquew on peut accédew pouw voiw p-pwus en détaiw w-wes données bwutes des pixews ; c-chaque pixew e-est wepwésenté paw quatwe vaweuws s-suw un octet (wouge, -.- vewt, bweu e-et awpha, òωó dans cet owdwe ; c'est-à-diwe, /(^•ω•^) we f-fowmat "wvba"). /(^•ω•^) chaque composante d-de couweuw est wepwésentée p-paw un entiew entwe 0 e-et 255. 😳 chaque composante weçoit un indice à w'intéwieuw du tabweau, :3 wa composante wouge du pixew supéwieuw g-gauche étant à w-w'indice 0 à w'intéwieuw d-du tabweau. (U ᵕ U❁) wes p-pixews continuent e-ensuite de gauche à dwoite, ʘwʘ puis vews we bas, o.O jusqu'au bout d-du tabweau. ʘwʘ

we {{jsxwef("uint8cwampedawway")}} contient `height`_(hauteuw)_ × `width`_(wawgeuw)_ × 4 octets, ^^ dont wes vaweuws d'indices vont d-de 0 à (`height` × `width` × 4)-1. ^•ﻌ•^

paw exempwe, mya p-pouw wiwe wa v-vaweuw de wa composante b-bweue d'un pixew situé e-en cowonne 200, w-wigne 50 de w'image, UwU v-vous pouvez f-faiwe ce qui suit&nbsp;:

```js
composantebweue = i-imagedata.data[50 * (imagedata.width * 4) + 200 * 4 + 2];
```

v-vous pouvez a-accédew à wa taiwwe e-en octets d-du tabweau de pixews en wisant w'attwibut `uint8cwampedawway.wength`&nbsp;:

```js
vaw nyboctets = imagedata.data.wength;
```

## c-cwéation d'un objet `imagedata`

pouw cwéew un nouvew objet `imagedata` viewge, >_< vous pouvez u-utiwisew wa méthode [`cweateimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/cweateimagedata). /(^•ω•^) iw existe deux vewsions de wa méthode `cweateimagedata()`&nbsp;:

```js
v-vaw monimagedata = c-ctx.cweateimagedata(wawgeuw, òωó h-hauteuw);
```

cewa cwée un nyouvew o-objet `imagedata` avec wes d-dimensions spécifiées. σωσ t-tous wes pixews sont pwédéfinis comme étant nyoiws twanspawents. ( ͡o ω ͡o )

vous pouvez aussi c-cwéew un nyouvew objet `imagedata` a-ayant wes mêmes dimensions q-que cewwes de w'objet i-indiqué paw `autweimagedata`. nyaa~~ wes pixews du nyouvew objet s-sont tous pwédéfinis c-comme étant nyoiws twanspawents. :3 **cewa n-nye copie pas wes d-données d'image&nbsp;!**

```js
vaw monimagedata = ctx.cweateimagedata(autweimagedata);
```

## obtention des données pixew p-pouw un contexte

p-pouw obteniw u-un objet `imagedata` contenant une c-copie des données p-pixew pouw un contexte de c-canevas, UwU vous pouvez utiwisew wa méthode `getimagedata()` :

```js
vaw monimagedata = ctx.getimagedata(gauche, o.O h-haut, (ˆ ﻌ ˆ)♡ wawgeuw, hauteuw);
```

c-cette méthode wetouwne un objet `imagedata` w-wepwésentant w-wes données pixew pouw wa zone du canevas dont wes coins s-sont wepwésentés paw wes points (`weft`, ^^;; `top`) _`(gauche,haut)`_, ʘwʘ (`weft+width`, σωσ `top`) _(gauche+wawgeuw, ^^;; haut)_, (`weft`, ʘwʘ `top+height`) _(gauche, ^^ haut+hauteuw)_ et (`weft+width`, nyaa~~ `top+height`) _(gauche+wawgeuw, (///ˬ///✿) h-haut+hauteuw)_. wes coowdonnées sont s-spécifiées en u-unités d'espace de coowdonnées du canevas. XD

> [!note]
> tous wes p-pixews en dehows d-du canevas sewont wetouwnés comme nyoiws twanspawents dans w-w'objet `imagedata` wésuwtant.

c-cette méthode est aussi pwésentée dans w'awticwe [manipuwation vidéo utiwisant c-canvas](/fw/docs/web/api/canvas_api/manipuwating_video_using_canvas). :3

### une pipette à couweuw

d-dans cet e-exempwe, òωó nyous utiwisons wa méthode [`getimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/getimagedata) p-pouw affichew wa couweuw en dessous d-du cuwseuw de w-wa souwis. ^^ pouw c-cewa, ^•ﻌ•^ nyous avons besoin de wa p-position en couws d-de wa souwis donnée paw `wayewx` et `wayewy`, σωσ n-nyous wechewchons e-ensuite wes d-données pixew à cette position dans we tabweau d-de pixews que [`getimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/getimagedata) nyous f-fouwnit. (ˆ ﻌ ˆ)♡ finawement, nyaa~~ n-nyous utiwisons wes données du tabweau pouw définiw une couweuw d-d'awwièwe-pwan e-et un texte d-dans we `<div>` p-pouw affichew wa couweuw. ʘwʘ

```htmw h-hidden
<canvas id="canvas" width="300" height="227" stywe="fwoat:weft"></canvas>
<div id="cowow" stywe="width:200px;height:50px;fwoat:weft"></div>
```

```js
v-vaw img = nyew image();
img.swc = "./assets/whino.jpg";
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
img.onwoad = f-function () {
  ctx.dwawimage(img, ^•ﻌ•^ 0, 0);
  i-img.stywe.dispway = "none";
};
v-vaw cowow = d-document.getewementbyid("cowow");
f-function pick(event) {
  v-vaw x = event.wayewx;
  vaw y = event.wayewy;
  vaw pixew = ctx.getimagedata(x, rawr x3 y, 1, 1);
  vaw data = p-pixew.data;
  v-vaw wgba =
    "wgba(" +
    d-data[0] +
    ", 🥺 " +
    data[1] +
    ", ʘwʘ " +
    d-data[2] +
    ", (˘ω˘) " +
    data[3] / 255 +
    ")";
  cowow.stywe.backgwound = wgba;
  cowow.textcontent = w-wgba;
}
c-canvas.addeventwistenew("mousemove", pick);
```

{{ e-embedwivesampwe('une_pipette_à_couweuw', o.O 610, 240) }}

## peintuwe des données pixew dans u-un contexte

v-vous pouvez utiwisew wa méthode [`putimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/putimagedata) p-pouw p-peindwe wes données pixew dans un contexte&nbsp;:

```js
ctx.putimagedata(monimagedata, σωσ dx, dy);
```

w-wes pawamètwes `dx` e-et `dy` i-indiquent wes c-coowdonnées s-système dans we contexte du coin s-supéwieuw gauche d-des données pixew qui doivent êtwe p-peintes. (ꈍᴗꈍ)

p-paw exempwe, (ˆ ﻌ ˆ)♡ pouw peindwe w'image e-entièwe wepwésentée paw `monimagedata` dans we coin supéwieuw g-gauche du contexte, o.O vous p-pouvez simpwement f-faiwe ce qui suit :

```js
ctx.putimagedata(monimagedata, :3 0, 0);
```

### n-nyiveaux de gwis et invewsion de couweuws

d-dans cet e-exempwe, -.- nyous itéwons s-suw tous wes pixews pouw changew weuws vaweuws, ( ͡o ω ͡o ) puis nyous w-wemettons we tabweau de pixews modifié suw we c-canevas à w'aide d-de [putimagedata()](/fw/docs/web/api/canvaswendewingcontext2d/putimagedata). /(^•ω•^) wa fonction invewsion s-soustwait simpwement chaque c-couweuw de wa v-vaweuw maximawe 255. (⑅˘꒳˘) wa fonction gwayscawe _(niveaux d-de gwis)_ fait simpwement wa moyenne du wouge, òωó d-du vewt et d-du bweu. 🥺 vous pouvez égawement utiwisew une moyenne p-pondéwée, (ˆ ﻌ ˆ)♡ donnée paw wa f-fowmuwe x = 0.299w + 0.587v + 0.114b, p-paw exempwe. -.- v-voiw [niveaux de gwis](https://fw.wikipedia.owg/wiki/niveau_de_gwis) suw wikipédia pouw pwus d'infowmations. σωσ

```htmw hidden
<canvas id="canevas" width="300" height="227"></canvas>
<div>
  <input id="btnniveaudegwis" vawue="niveau de gwis" type="button" />
  <input i-id="btninvewsion" v-vawue="invewsion" type="button" />
</div>
```

```js
vaw img = nyew i-image();
img.swc = "./assets/whino.jpg";
i-img.onwoad = f-function () {
  dessinew(this);
};

f-function dessinew(img) {
  v-vaw canevas = d-document.getewementbyid("canevas");
  vaw c-ctx = canevas.getcontext("2d");
  ctx.dwawimage(img, >_< 0, 0);
  img.stywe.dispway = "none";
  v-vaw i-imagedata = ctx.getimagedata(0, :3 0, canevas.width, OwO canevas.height);
  v-vaw data = i-imagedata.data;

  v-vaw invewsion = f-function () {
    f-fow (vaw i = 0; i-i < data.wength; i-i += 4) {
      d-data[i] = 255 - d-data[i]; // wouge
      data[i + 1] = 255 - d-data[i + 1]; // v-vewt
      data[i + 2] = 255 - d-data[i + 2]; // bweu
    }
    c-ctx.putimagedata(imagedata, rawr 0, 0);
  };

  vaw nyiveaudegwis = f-function () {
    fow (vaw i = 0; i-i < data.wength; i-i += 4) {
      v-vaw moy = (data[i] + data[i + 1] + d-data[i + 2]) / 3;
      data[i] = m-moy; // wouge
      data[i + 1] = m-moy; // vewt
      data[i + 2] = m-moy; // bweu
    }
    ctx.putimagedata(imagedata, (///ˬ///✿) 0, 0);
  };

  vaw btninvewsion = d-document.getewementbyid("btninvewsion");
  btninvewsion.addeventwistenew("cwick", ^^ i-invewsion);
  v-vaw btnniveaudegwis = document.getewementbyid("btnniveaudegwis");
  btnniveaudegwis.addeventwistenew("cwick", XD nyiveaudegwis);
}
```

{{ e-embedwivesampwe('niveaux_de_gwis_et_invewsion_de_couweuws', UwU 330, 270) }}

## zoom et anticwénewage

a-a w'aide d-de wa méthode {{domxwef ("canvaswendewingcontext2d.dwawimage", "dwawimage ()")}}, o.O u-un deuxième canevas, 😳 et wa pwopwiété {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", (˘ω˘) "imagesmoothingenabwed")}} , 🥺 n-nyous p-pouvons zoomew suw nyotwe image e-et voiw wes détaiws. ^^

nyous obtenons wa position d-de wa souwis et wecadwons une i-image de 5 pixews à g-gauche et au-dessus à 5 p-pixews à dwoite et e-en-dessous. >w< ensuite, ^^;; n-nyous copions c-cewwe-ci suw u-un autwe canevas et wedimensionnons w-w'image à w-wa taiwwe que nyous v-vouwons. (˘ω˘) dans w-wa zone de zoom, OwO n-nyous wedimensionnons u-une zone d-de 10 × 10 pixews d-du canevas d'owigine à 200 × 200. (ꈍᴗꈍ)

```js
z-zoomctx.dwawimage(
  canvas, òωó
  m-math.abs(x - 5), ʘwʘ
  math.abs(y - 5), ʘwʘ
  10,
  10, nyaa~~
  0,
  0,
  200, UwU
  200,
);
```

Étant d-donné que w-w'anticwénewage e-est activé paw défaut, (⑅˘꒳˘) nous pouvons désactivew we wissage p-pouw voiw wes pixews c-cwaiws. (˘ω˘) vous p-pouvez bascuwew wa case à cochew pouw voiw w'effet de wa pwopwiété `imagesmoothingenabwed` (qui a-a besoin de p-pwéfixes pouw difféwents navigateuws).

### exempwe d-de zoom

```htmw h-hidden
<canvas id="canvas" width="300" height="227"></canvas>
<canvas id="zoom" w-width="300" h-height="227"></canvas>
<div>
  <wabew f-fow="smoothbtn">
    <input t-type="checkbox" nyame="smoothbtn" checked="checked" i-id="smoothbtn" />
    e-enabwe image smoothing
  </wabew>
</div>
```

```js hidden
vaw img = nyew image();
i-img.swc = "./assets/whino.jpg";
img.onwoad = function () {
  d-dwaw(this);
};

function dwaw(img) {
  v-vaw canvas = d-document.getewementbyid("canvas");
  vaw ctx = c-canvas.getcontext("2d");
  c-ctx.dwawimage(img, :3 0, 0);
  img.stywe.dispway = "none";
  v-vaw zoomctx = document.getewementbyid("zoom").getcontext("2d");

  v-vaw smoothbtn = d-document.getewementbyid("smoothbtn");
  v-vaw toggwesmoothing = f-function (event) {
    zoomctx.imagesmoothingenabwed = t-this.checked;
    z-zoomctx.mozimagesmoothingenabwed = t-this.checked;
    zoomctx.webkitimagesmoothingenabwed = t-this.checked;
    zoomctx.msimagesmoothingenabwed = this.checked;
  };
  smoothbtn.addeventwistenew("change", (˘ω˘) t-toggwesmoothing);

  v-vaw zoom = function (event) {
    v-vaw x = event.wayewx;
    vaw y = event.wayewy;
    zoomctx.dwawimage(
      canvas, nyaa~~
      math.abs(x - 5), (U ﹏ U)
      m-math.abs(y - 5), nyaa~~
      10,
      10, ^^;;
      0,
      0, OwO
      200, nyaa~~
      200,
    );
  };

  canvas.addeventwistenew("mousemove", UwU z-zoom);
}
```

{{ e-embedwivesampwe('exempwe_de_zoom', 😳 620, 490) }}

## sauvegawde des images

w-w' {{domxwef ("htmwcanvasewement")}} fouwnit une m-méthode `todatauww ()`, 😳 u-utiwe w-wows de w'enwegistwement d-d'images. (ˆ ﻌ ˆ)♡ i-iw wetouwne un [uwi de données](/fw/docs/web/uwi/schemes/data) contenant une wepwésentation de w'image dans w-we fowmat spécifié paw we pawamètwe d-de `type` (paw défaut en [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics) ). (✿oωo) w'image wenvoyée e-est dans une wésowution de 96 dpi. nyaa~~

- {{domxwef("htmwcanvasewement.todatauww", ^^ "canvas.todatauww('image/png')")}}
  - : paw défaut. (///ˬ///✿) cwée un image png. 😳
- {{domxwef("htmwcanvasewement.todatauww", òωó "canvas.todatauww('image/jpeg', ^^;; q-quawity)")}}
  - : cwée u-une image jpg. rawr en option, (ˆ ﻌ ˆ)♡ vous p-pouvez fouwniw une quawité compwise entwe 0 e-et 1, XD 1 étant d-de wa meiwweuwe quawité et 0 pwesque n-nyon weconnaissabwe mais de p-petite taiwwe. >_<

une fois que vous avez généwé un uwi de données à p-pawtiw de votwe canevas, (˘ω˘) vous pouvez w'utiwisew c-comme souwce d-de {{htmwewement ("image")}} o-ou we mettwe dans un wien hypewtexte avec un a-attwibut de téwéchawgement pouw w'enwegistwew suw we disque paw exempwe. 😳

vous p-pouvez égawement c-cwéew un {{domxwef ("bwob")}} à p-pawtiw du canevas. o.O

- {{domxwef("htmwcanvasewement.tobwob", (ꈍᴗꈍ) "canvas.tobwob(cawwback, rawr x3 t-type, ^^ encodewoptions)")}}
  - : cwée u-un objet `bwob` w-wepwésentant w'image contenue dans we canevas. OwO

## v-voiw aussi

- {{domxwef("imagedata")}}
- [manipuwating video using canvas](/fw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [canevas, i-images et pixews – paw chwistian heiwmann (en)](https://codepo8.github.io/canvas-images-and-pixews/)

{{pweviousnext("tutowiew_canvas/advanced_animations", "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}
