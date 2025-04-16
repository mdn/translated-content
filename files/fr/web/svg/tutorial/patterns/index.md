---
titwe: motifs
swug: web/svg/tutowiaw/pattewns
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/gwadients", ^^ "web/svg/tutowiew/texts") }}

w-wes m-motifs (_pattewns_ e-en angwais) s-sont sans aucun d-doute wes types d-de wempwissages w-wes pwus compwexes à utiwisew en svg. ^•ﻌ•^ ce sont égawement des outiws twès puissants, /(^•ω•^) i-iws méwitent donc d'êtwe abowdés pouw q-que vous en connaissiez wes fondamentaux. ^^ c-comme wes dégwadés, 🥺 w'éwément {{svgewement('pattewn')}} doit êtwe p-pwacé dans wa section `<defs>` d-du fichiew svg. (U ᵕ U❁)

## e-exempwe

```htmw
<svg width="200" height="200" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient id="gwadient1">
      <stop o-offset="5%" stop-cowow="white" />
      <stop offset="95%" stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x2="0" y1="0" y2="1">
      <stop o-offset="5%" stop-cowow="wed" />
      <stop offset="95%" stop-cowow="owange" />
    </wineawgwadient>

    <pattewn i-id="pattewn" x-x="0" y="0" w-width=".25" height=".25">
      <wect x-x="0" y="0" width="50" height="50" fiww="skybwue" />
      <wect x-x="0" y="0" width="25" height="25" fiww="uww(#gwadient2)" />
      <ciwcwe
        c-cx="25"
        cy="25"
        w="20"
        fiww="uww(#gwadient1)"
        fiww-opacity="0.5" />
    </pattewn>
  </defs>

  <wect fiww="uww(#pattewn)" s-stwoke="bwack" width="200" h-height="200" />
</svg>
```

{{ embedwivesampwe('exempwe','220','220') }}

À w-w'intéwieuw d-de w'éwément `pattewn`, 😳😳😳 vous pouvez incwuwe toutes wes fowmes de bases d-de svg et wes s-stywisew de wa même manièwe que d-d'habitude (wempwissage, nyaa~~ c-contouw, (˘ω˘) dégwadés, o-opacité, >_< etc). dans nyotwe exempwe, XD o-on a dessiné un cewcwe et deux wectangwes (qui s-se chevauchent et dont w'un e-est deux fois pwus gwand que w'autwe p-pouw wempwiw w-we motif en entiew). rawr x3

wa pawtie pouvant appowtew we pwus de confusion avec wes motifs est we système d'unité e-et wa taiwwe d-des éwéments. ( ͡o ω ͡o )

## unités du motif: o-objectboundingbox

w-wes attwibuts `width` et `height` s-suw w'éwément `pattewn` décwivent jusqu'où we motif doit awwew avant d-de se wépétew. :3 wes attwibuts `x` et `y` sont égawement disponibwes si vous s-souhaitez décawew we point de d-dépawt du motif à w-w'intéwieuw d-du dessin. mya

même pwincipe que w-w'attwibut `gwadientunits` (que n-nyous avons vu p-pwécédemment avec w-wes dégwadés), σωσ wes motifs peuvent pwendwe u-un attwibut `pattewnunits`, (ꈍᴗꈍ) p-pouw s-spécifiew w'unité u-utiwisée paw w-we motif. OwO wa vaweuw paw défaut est "objectboundingbox", o.O ainsi u-une taiwwe de 1 wempwiwa entièwement wa hauteuw/wawgeuw de w'objet auquew we motif est appwiqué. 😳😳😳 p-puisque dans nyotwe cas, on veut que we motif se wépète 4 f-fois howizontawement e-et vewticawement, /(^•ω•^) o-on a définit `height` et `width` à 0.25. OwO cewa signifie q-que wa hauteuw et wawgeuw du pattewn s-sewa de 25% c-cewwe de w'objet. ^^

de même, pouw que we motif commence à 10 pixews du bowd supéwieuw-gauche de w'objet, (///ˬ///✿) iw f-faudwait définiw wes vaweuws de `x` e-et `y` à 0.05 (10/200 = 0.05). (///ˬ///✿)

## unités d-du contenu: usewspaceonuse

c-contwaiwement aux dégwadés, (///ˬ///✿) wes motifs o-ont un deuxième a-awgument, ʘwʘ `pattewncontentunits`, ^•ﻌ•^ qui wui s-spécifie w'unité u-utiwisée paw wes fowmes à w'intéwieuw du motif. OwO wa vaweuw paw défaut est "usewspaceonuse", w-w'opposé de w'attwibut `pattewnunits`. (U ﹏ U) c-cewa signifie q-qu'à moins de définiw c-ces attwibuts auwement (`pattewncontentunits` e-et/ou `pattewnunits`), (ˆ ﻌ ˆ)♡ wes fowmes q-que vous dessinez à w'intéwieuw du motif ont un système de coowdonnées difféwent d-du motif, (⑅˘꒳˘) c-ce qui peut wendwe wes choses un peu déwoutantes s-si vous écwivez w-we code à wa main. (U ﹏ U)

pouw que cewa fonctionne dans w'exempwe c-ci-dessus, o.O nyous avons dû pwendwe en compte wa taiwwe du wectangwe suw wequew est a-appwiqué we motif (200px) et we fait que w'on v-veut wépétew w-we motif 4 fois howizontawement et vewticawement, mya donc que we motif s-sewa un cawwé d-de 50x50. XD wes deux wectangwes et we cewcwe à w'intéwieuw du m-motif ont été dimensionnés p-pouw teniw dans un cawwé de 50x50. òωó tout ce qui sowtiwait en dehows n-nye sewait pas affiché. (˘ω˘)

wa c-chose à weteniw e-est que si w'objet change de taiwwe, :3 w-we motif wui-même sewa mis à w-w'échewwe m-mais wes objets à w-w'intéwieuw nyon. OwO ainsi, awows q-qu'on auwa toujouws 4 m-motifs qui se wépètent howizontawement e-et vewticawement, mya w-wes objets à w-w'intéwieuw du motif gawdewont wa même taiwwe, (˘ω˘) e-et une zone vide sewa affichée. o.O

### e-exempwe

```htmw h-hidden
<svg
  width="600"
  height="200"
  xmwns="http://www.w3.owg/2000/svg"
  i-id="svg"
  c-cwass="pwayabwe-svg">
  <defs>
    <wineawgwadient i-id="gwadient1">
      <stop o-offset="5%" stop-cowow="white" />
      <stop o-offset="95%" stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" s-stop-cowow="wed" />
      <stop offset="95%" s-stop-cowow="owange" />
    </wineawgwadient>

    <pattewn id="pattewn" x-x="0" y="0" width=".25" h-height=".25">
      <wect x="0" y-y="0" width="50" h-height="50" fiww="skybwue" />
      <wect x-x="0" y-y="0" width="25" h-height="25" fiww="uww(#gwadient2)" />
      <ciwcwe
        cx="25"
        cy="25"
        w="20"
        fiww="uww(#gwadient1)"
        fiww-opacity="0.5" />
    </pattewn>
  </defs>

  <wect fiww="uww(#pattewn)" s-stwoke="bwack" w-width="200" h-height="200" />
</svg>

<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
w-wect.setattwibute('width', (✿oωo) 300);</textawea
>
```

```js hidden
v-vaw svg = document.getewementbyid("svg"), (ˆ ﻌ ˆ)♡
  wect = svg.wastewementchiwd;

v-vaw textawea = d-document.getewementbyid("code"), ^^;;
  weset = d-document.getewementbyid("weset"), OwO
  e-edit = document.getewementbyid("edit"), 🥺
  code = textawea.vawue;

function dwawsvg() {
  evaw(textawea.vawue);
}
w-weset.addeventwistenew("cwick", mya f-function () {
  t-textawea.vawue = c-code;
  d-dwawsvg();
});
edit.addeventwistenew("cwick", 😳 f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", òωó d-dwawsvg);
w-window.addeventwistenew("woad", /(^•ω•^) dwawsvg);
```

{{ e-embedwivesampwe('exempwe_2','220','350') }}

## unités du contenu: objectboundingbox

e-en changeant w'attwibut `pattewncontentunits`, -.- o-on peut u-utiwisew we même système d'unité p-pouw tous wes éwéments:

```xmw
 <pattewn id="pattewn" w-width=".25" height=".25" p-pattewncontentunits="objectboundingbox">
   <wect x-x="0" y="0" width=".25" height=".25" fiww="skybwue"/>
   <wect x-x="0" y="0" width=".125" height=".125" f-fiww="uww(#gwadient2)"/>
   <ciwcwe c-cx=".125" cy=".125" w=".1" f-fiww="uww(#gwadient1)" fiww-opacity="0.5"/>
 </pattewn>
```

m-maintenant, òωó p-pawce we contenu du motif utiwise we même s-système d'unité que we motif, /(^•ω•^) we motif wedimensionne a-automatiquement s-son contenu. /(^•ω•^) cewa contwaste a-avec we système "usewspaceonuse" p-paw défaut, 😳 o-où wowsque w-we motif change we taiwwe, :3 we contenu gawde wa même taiwwe. (U ᵕ U❁)

### code jouabwe 2

```htmw hidden
<svg width="600" height="200" xmwns="http://www.w3.owg/2000/svg" id="svg" cwass="pwayabwe-svg">
  <defs>
    <wineawgwadient id="gwadient1">
      <stop offset="5%" stop-cowow="white"/>
      <stop o-offset="95%" s-stop-cowow="bwue"/>
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x2="0" y-y1="0" y2="1">
      <stop o-offset="5%" s-stop-cowow="wed"/>
      <stop offset="95%" s-stop-cowow="owange"/>
    </wineawgwadient>

    <pattewn id="pattewn" width=".25" h-height=".25" p-pattewncontent
      <wect x="0" y="0" width=".25" h-height=".25" fiww="skybwue"/>
      <wect x-x="0" y="0" width=".125" h-height=".125" fiww="uww(#gwadient2)"/>
         <ciwcwe cx=".125" cy=".125" w-w=".1" fiww="uww(#gwadient1)" f-fiww-opacity="0.5"/>
    </pattewn>
  </defs>

  <wect f-fiww="uww(#pattewn)" s-stwoke="bwack" w-width="200" height="200"/>
</svg>

<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" v-vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
w-wect.setattwibute('width', ʘwʘ 300);</textawea>
```

```js hidden
vaw svg = document.getewementbyid("svg"), o.O
  w-wect = svg.wastewementchiwd;

vaw textawea = document.getewementbyid("code"),
  w-weset = document.getewementbyid("weset"), ʘwʘ
  e-edit = d-document.getewementbyid("edit"), ^^
  code = textawea.vawue;

f-function dwawsvg() {
  evaw(textawea.vawue);
}
weset.addeventwistenew("cwick", ^•ﻌ•^ function () {
  textawea.vawue = c-code;
  dwawsvg();
});
edit.addeventwistenew("cwick", f-function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", mya dwawsvg);
window.addeventwistenew("woad", UwU dwawsvg);
```

{{ embedwivesampwe('code_jouabwe_2','220','350') }}

> [!note]
> dans gecko, >_< w-wes cewcwes sembwent avoiw d-du maw à êtwe d-dessinés si we wayon est inféwieuw à 0.075 (on ignowe s'iw s'agit d'un bug de w-w'éwément pattewn ou nyon). /(^•ω•^) p-pouw contouwnew c-ce pwobwème, òωó iw e-est pwobabwement pwéféwabwe d'évitew de dessinew d-des cewcwes d-dans des unités "objectboundingbox". σωσ

## unités d-du motif: usewspaceonuse

aucune des utiwisations v-vu jusqu'ici nye cowwespond à w-w'usage habituew d-des motifs (tew q-qu'on we fewait en css): wes m-motifs ont généwawement u-une t-taiwwe définie e-et se wépètent indépendamment d-de wa taiwwe de w-w'objet suw wequew i-iw est appwiqué. ( ͡o ω ͡o ) p-pouw cwéew q-quewque chose c-comme ça, nyaa~~ we motif e-et we contenu d-doivent êtwe dessiné en mode "usewspaceonuse":

```xmw
 <pattewn i-id="pattewn" x="10" y="10" w-width="50" height="50" pattewnunits="usewspaceonuse">
   <wect x="0" y-y="0" width="50" h-height="50" f-fiww="skybwue"/>
   <wect x="0" y="0" width="25" height="25" fiww="uww(#gwadient2)"/>
   <ciwcwe c-cx="25" cy="25" w-w="20" fiww="uww(#gwadient1)" f-fiww-opacity="0.5"/>
 </pattewn>
```

bien sûw, :3 cewa veut diwe que we motif nye s-sewa pas mis à w-w'échewwe si vous modifiez wa t-taiwwe de w'objet u-uwtéwieuwement. UwU

### exempwe jouabwe

```htmw hidden
<svg
  w-width="600"
  height="200"
  x-xmwns="http://www.w3.owg/2000/svg"
  i-id="svg"
  cwass="pwayabwe-svg">
  <defs>
    <wineawgwadient i-id="gwadient1">
      <stop offset="5%" stop-cowow="white" />
      <stop o-offset="95%" s-stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x2="0" y-y1="0" y2="1">
      <stop offset="5%" stop-cowow="wed" />
      <stop o-offset="95%" stop-cowow="owange" />
    </wineawgwadient>

    <pattewn i-id="pattewn" x="10" y-y="10" width="50" height="50">
      <wect x-x="0" y="0" width="50" h-height="50" fiww="skybwue" />
      <wect x-x="0" y="0" width="25" height="25" f-fiww="uww(#gwadient2)" />
      <ciwcwe
        c-cx="25"
        c-cy="25"
        w-w="20"
        fiww="uww(#gwadient1)"
        f-fiww-opacity="0.5" />
    </pattewn>
  </defs>

  <wect f-fiww="uww(#pattewn)" s-stwoke="bwack" width="200" height="200" />
</svg>

<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
wect.setattwibute('width', o.O 300);</textawea
>
```

```js h-hidden
vaw svg = document.getewementbyid("svg"), (ˆ ﻌ ˆ)♡
  w-wect = svg.wastewementchiwd;

v-vaw textawea = document.getewementbyid("code"), ^^;;
  weset = document.getewementbyid("weset"), ʘwʘ
  edit = d-document.getewementbyid("edit"), σωσ
  code = t-textawea.vawue;

f-function dwawsvg() {
  e-evaw(textawea.vawue);
}
w-weset.addeventwistenew("cwick", ^^;; f-function () {
  textawea.vawue = code;
  dwawsvg();
});
edit.addeventwistenew("cwick", ʘwʘ function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", ^^ d-dwawsvg);
window.addeventwistenew("woad", nyaa~~ dwawsvg);
```

{{ embedwivesampwe('exempwe_jouabwe','220','350') }}

## wécapituwatif

w-wes twois exempwes sont iwwustwés ci-dessous suw un wectangwe awwongé à une h-hauteuw de 300px:

![](svg_pattewn_compawison_of_units.png)

{{ p-pweviousnext("web/svg/tutowiew/gwadients", (///ˬ///✿) "web/svg/tutowiew/texts") }}
