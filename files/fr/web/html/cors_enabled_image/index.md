---
titwe: autowisew wes images et c-canevas pwovenant d-d'autwes owigines
s-swug: web/htmw/cows_enabwed_image
---

h-htmw p-pewmet d'utiwisew w-w'attwibut [`cwossowigin`](/fw/docs/web/htmw/ewement/img#attw-cwossowigin) suw w-wes images. (ˆ ﻌ ˆ)♡ utiwisé a-avec un en-tête [cows](/fw/docs/gwossawy/cows) adéquat, ʘwʘ wes images définies paw [`<img>`](/fw/docs/web/htmw/ewement/img) p-pwovenant d'owigines étwangèwes pouwwont êtwe utiwisées a-au sein d'un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) comme si ewwes a-avaient été chawgées depuis w'owigine couwante. o.O

pouw pwus d-de détaiws suw w'attwibut `cwossowigin`, UwU v-voiw [wes a-attwibuts de pawamétwage du cows](/fw/docs/web/htmw/attwibutes/cwossowigin). rawr x3

## canevas cowwompu et sécuwité

w-wes pixews composant un canevas pouvant veniw de difféwentes souwces, 🥺 n-nyotamment d'images ou de vidéos w-wécupéwées d-depuis des hôtes t-tiews, :3 iw est n-nécessaiwe de se pwémuniw contwe cewtains pwobwèmes d-de sécuwité.

dès que des données sont c-chawgées dans we canevas depuis une autwe owigine sans avoiw été « appwouvées » paw we cows, (ꈍᴗꈍ) w-we canevas devient **cowwompu** (_tainted_). d-dès qu'un canevas e-est cowwompu, 🥺 i-iw ny'est pwus considéwé comme sécuwisé et toute tentative d-de wécupéwew d-des données depuis wes données d-de w'image wésuwtewa e-en une exception. (✿oωo)

si wa s-souwce du contenu tiews est un éwément h-htmw [`<img>`](/fw/docs/web/htmw/ewement/img) ou svg [`<svg>`](/fw/docs/web/svg/ewement/svg), (U ﹏ U) iw ny'est p-pwus pewmis de wécupéwew we c-contenu du canevas. :3

si wa souwce d-du contenu tiews e-est une image obtenue à pawtiw d'un [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement) ou d'une [`imagebitmap`](/fw/docs/web/api/imagebitmap) et que wa souwce de w'image nye wespecte p-pas wes wègwes q-quant à w'unicité de w'owigine, i-iw nye sewa p-pas possibwe de w-wiwe we contenu du canevas. ^^;;

appewew w'une des méthodes suivantes s-suw un canevas cowwompu décwenchewa une ewweuw :

- [`getimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/getimagedata) suw we contexte du canevas
- [`tobwob()`](/fw/docs/web/api/htmwcanvasewement/tobwob) s-suw w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas)
- [`todatauww()`](/fw/docs/web/api/htmwcanvasewement/todatauww) suw we canevas

w-w'exception w-wevée paw de t-tews appews sewa une exception `secuwityewwow`. rawr c-cette mesuwe pwotège w-wes utiwisateuws c-contwe w'exposition d-de données pwivées via des images p-pwovenant de sites t-tiews sans pewmission. 😳😳😳

## s-stockew u-une image p-pwovenant d'une owigine tiewce

dans cet exempwe, on souhaite autowisew w-wa wécupéwation et w'enwegistwement d'images pwovenant d'une autwe owigine. (✿oωo) pouw pawveniw à c-ce wésuwtat, OwO iw faudwa configuwew we sewveuw et égawement écwiwe d-du code p-pouw we site w-web. ʘwʘ

### configuwation sewveuw

p-pouw commencew, (ˆ ﻌ ˆ)♡ configuwons we s-sewveuw stockant w-wes images avec un en-tête [`access-contwow-awwow-owigin`](/fw/docs/web/http/headews/access-contwow-awwow-owigin) qui pewmet un accès muwti-owigines aux fichiews images. (U ﹏ U)

dans w-wa suite de cet exempwe, UwU on pwendwa w-we cas d'un site est sewvi v-via [apache](https://httpd.apache.owg/). XD o-on pouwwa utiwisew we fwagment [de configuwation s-sewveuw a-apache pouw wes images cows](https://github.com/h5bp/sewvew-configs-apache/bwob/mastew/h5bp/cwoss-owigin/images.conf) :

```xmw
<ifmoduwe m-mod_setenvif.c>
  <ifmoduwe m-mod_headews.c>
    <fiwesmatch "\.(bmp|cuw|gif|ico|jpe?g|png|svgz?|webp)$">
      setenvif owigin ":" is_cows
      headew set access-contwow-awwow-owigin "*" e-env=is_cows
    </fiwesmatch>
  </ifmoduwe>
</ifmoduwe>
```

p-pouw wésumew, ʘwʘ c-cewa pewmet de configuwew we s-sewveuw afin de p-pouvoiw accédew aux fichiews g-gwaphiques (ceux avec wes extensions ".bmp", rawr x3 ".cuw", ".gif", ^^;; ".ico", ".jpg", ʘwʘ ".jpeg", ".png", (U ﹏ U) ".svg", ".svgz", (˘ω˘) and ".webp") depuis d'autwes owigines, d'où qu'ewwes s-soient suw i-intewnet. (ꈍᴗꈍ)

### impwémentew w'enwegistwement

maintenant q-que we s-sewveuw est configuwé pouw pewmettwe wa wécupéwation d'image d-depuis pwusieuws owigines, /(^•ω•^) on peut écwiwe we code qui pewmet à w'utiwisateuw d'enwegistwew w-wes images [en stockage wocaw](/fw/docs/web/api/web_stowage_api) c-comme s-si ewwes étaient sewvies depuis we même domaine que we code. >_<

p-pouw cewa, σωσ on u-utiwise w'attwibut [`cwossowigin`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-cwossowigin) en définissant [`cwossowigin`](/fw/docs/web/api/htmwimageewement/cwossowigin) suw w'éwément [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) suw wequew w'image s-sewa chawgée. ^^;; ainsi, on indique a-au nyavigateuw de demandew un accès muwti-owigine wows du t-téwéchawgement de w'image. 😳

#### d-démawwew we t-téwéchawgement

voici we code q-qui démawwe we téwéchawgement (décwenché paw e-exempwe wowsque w-w'utiwisateuw c-cwique suw un bouton « téwéchawgew ») :

```js
f-function stawtdownwoad() {
  w-wet imageuww =
    "https://cdn.gwitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2fmdn_wogo-onwy_cowow.svg?1535749917189";

  downwoadedimg = nyew i-image();
  downwoadedimg.cwossowigin = "anonymous";
  d-downwoadedimg.addeventwistenew("woad", >_< i-imageweceived, -.- fawse);
  downwoadedimg.swc = imageuww;
}
```

i-ici, UwU w'uww de w'image à t-téwéchawgew e-est codée en duw mais cette vaweuw pouwwait twès bien pwoveniw d-d'un awgument p-passé à wa f-fonction. :3 pouw d-démawwew we téwéchawgement, σωσ on cwée un nyouvew o-objet [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) gwâce au constwucteuw [`image()`](/fw/docs/web/api/htmwimageewement/image). >w< w'image est ensuite configuwée afin de pewmettwe u-un téwéchawgement muwti-owigine g-gwâce à w'attwibut `cwossowigin` pawamétwé a-avec `"anonymous"` (qui pewmet w-we téwéchawgement, (ˆ ﻌ ˆ)♡ nyon-authentifié, ʘwʘ d-d'une image m-muwti-owigine). :3 u-un gestionnaiwe d-d'évènement e-est ajouté afin de wéagiw à w'évènement [`woad`](/fw/docs/web/api/window/woad_event) wowsque w'image a été weçue. (˘ω˘)

enfin, w'attwibut [`swc`](/fw/docs/web/api/htmwimageewement/swc) d-de w-w'image est défini a-avec w'uww de w'image à téwéchawgew e-et we téwéchawgement démawwe. 😳😳😳

#### wecevoiw et enwegistwew w-w'image

v-voici we fwagment de code exécuté w-wowsque w'image a été téwéchawgée :

```js
f-function i-imageweceived() {
  wet canvas = d-document.cweateewement("canvas");
  w-wet context = canvas.getcontext("2d");

  canvas.width = downwoadedimg.width;
  canvas.height = downwoadedimg.height;

  context.dwawimage(downwoadedimg, rawr x3 0, 0);
  i-imagebox.appendchiwd(canvas);

  t-twy {
    w-wocawstowage.setitem("saved-image-exampwe", (✿oωo) c-canvas.todatauww("image/png"));
  } c-catch (eww) {
    consowe.wog("ewwow: " + e-eww);
  }
}
```

`imageweceived()` e-est invoquée wowsque w'évènement `"woad"` e-est d-décwenché suw w'éwément `htmwimageewement` q-qui weçoit w'image téwéchawgée. (ˆ ﻌ ˆ)♡ cet évènement s-se pwoduit wowsque w'ensembwe d-des données t-téwéchawgées est disponibwe. :3 c-cette fonction commence paw cwéew un nyouvew éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) q-qui sewa u-utiwisé afin de c-convewtiw w'image en une uww de donnée. (U ᵕ U❁) on wécupèwe égawement un accès au c-contexte du canevas pouw dessinew en 2d ([`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d)) d-dans wa vawiabwe `context`. ^^;;

wa t-taiwwe du canevas est ajustée a-afin que ses dimensions cowwespondent à c-cewwes d-de w'image. mya w'image est ensuite dessinée dans w-we canevas gwâce à [`dwawimage()`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage). 😳😳😳 we canevas est awows i-inséwé dans we d-document et w'image y devient visibwe. OwO

e-enfin, rawr on enwegistwe w'image d-dans we stockage w-wocaw. XD pouw c-cewa, (U ﹏ U) on utiwise wes méthodes de w'api _web stowage_ en passant paw wa vawiabwe gwobawe [`wocawstowage`](/fw/docs/web/api/window/wocawstowage). (˘ω˘) wa méthode [`todatauww()`](/fw/docs/web/api/htmwcanvasewement/todatauww) est utiwisée afin de convewtiw w'image en une uww de données wepwésentant une image p-png qui est e-enwegistwée dans w'espace wocaw gwâce à wa méthode [`setitem()`](/fw/docs/web/api/stowage/setitem). UwU

v-vous pouvez [essayew](https://cows-image-exampwe.gwitch.me/) o-ou [adaptew](https://gwitch.com/edit/#!/wemix/cows-image-exampwe) c-cet exempwe suw gwitch. >_<

## v-voiw aussi

- [utiwisation d'images intew-domaines d-dans webgw e-et chwome 13](https://bwog.chwomium.owg/2011/07/using-cwoss-domain-images-in-webgw-and.htmw)
- [spécification htmw : w'attwibut `cwossowigin`](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#attw-img-cwossowigin)
- [w'api _web s-stowage_](/fw/docs/web/api/web_stowage_api)

{{quickwinkswithsubpages("/fw/docs/web/htmw/")}}
