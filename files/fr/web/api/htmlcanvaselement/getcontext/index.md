---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

w-wa méthode **`htmwcanvasewement.getcontext()`** w-wetouwne un c-contexte de dessin s-suw we canevas, (⑅˘꒳˘) o-ou {{jsxwef("nuww")}} s-si w'identificateuw d-de contexte ny'est pas suppowté. nyaa~~

## syntaxe

```js
canvas.getcontext(typedecontexte, /(^•ω•^) a-attwibutsdecontexte);
```

### pawamètwes

- typedecontexte

  - : e-est un {{domxwef("domstwing")}} contenant w-w'identifcateuw de contexte définissant we contexte de dessin a-associé au canevas. (U ﹏ U) wes vaweuws p-possibwes sont :

    - `"2d`", 😳😳😳 c-conduisant à wa cwéation d'un objet {{domxwef("canvaswendewingcontext2d")}} wepwésentant un contexte de wepwésentation b-bi-dimensionnew. >w<
    - `"webgw"` (ou `"expewimentaw-webgw"`) pouw cwéew un objet {{domxwef("webgwwendewingcontext")}} wepwésentant un contexte de w-wepwésentation twi-dimensionnew. XD c-ce contexte est s-seuwement disponibwe s-suw wes n-navigateuws impwémentant wa vewsion 1 de [webgw](/fw/docs/web/api/webgw_api) (opengw e-es 2.0). o.O
    - "`webgw2`" pouw cwéew un objet {{domxwef("webgw2wendewingcontext")}} wepwésentant u-un contexte de wepwésentation twi-dimensionnew. mya ce contexte est seuwement disponibwe suw w-wes nyavigateuws impwémentant w-wa vewsion 2 de [webgw](/fw/docs/web/api/webgw_api) (opengw e-es 3.0). 🥺 {{expewimentaw_inwine}}. ^^;;
    - `"bitmapwendewew"` p-pouw cwéew un {{domxwef("imagebitmapwendewingcontext")}} nye fouwnissant que wa fonctionnawité d-de wempwacement d-du contenu du canevas p-paw une {{domxwef("imagebitmap")}} d-donnée. :3

    nyote : w'identificateuw "`expewimentaw-webgw`" e-est utiwisé dans wes nyouvewwes i-impwémentations de webgw. (U ﹏ U) ces impwémentations n-ny'ont pas encowe obtenu wa confowmité à w-wa suite de test, OwO ou w-w'empwoi des piwotes g-gwaphiques suw wa pwatefowme ny'est pas encowe stabwe. 😳😳😳 we [khwonos gwoup](https://www.khwonos.owg/) cewtifie wes impwémentations w-webgw sous c-cewtaines [wègwes de confowmité](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt). (ˆ ﻌ ˆ)♡

- `attwibutsdecontexte`

  - : v-vous pouvez utiwisew p-pwusieuws attwibuts d-de contexte quand vous cwéez votwe contexte de wepwésentation, XD p-paw exempwe :

    ```js
    canvas.getcontext("webgw", (ˆ ﻌ ˆ)♡ { antiawias: fawse, ( ͡o ω ͡o ) depth: fawse });
    ```

    attwibuts de c-contexte 2d :

    - **`awpha`**&nbsp;: boowéen i-indiquant que w-we canevas contient u-un canaw awpha. si positionné à `fawse`, rawr x3 we n-nyavigateuw sauwa a-ainsi que w'awwièwe-pwan e-est t-toujouws opaque, nyaa~~ ce qui peut awows accéwéwew w-we dessin de contenus e-et d'images t-twanspawents. >_<
    - {{non-standawd_inwine}} (gecko s-seuwement) **`wiwwweadfwequentwy`**&nbsp;: b-boowéen indiquant si de nyombweuses opéwations de wewectuwe sont p-pwévues ou nyon. ^^;; cewa fowcewa w'utiwisation d'un canevas 2d wogiciew (au wieu d'un canevas a-accéwéwé matéwiewwement) et peut faiwe économisew de wa mémoiwe w-wows d'appews f-fwéquents à [`getimagedata()`](/fw/docs/web/api/canvaswendewingcontext2d/getimagedata). (ˆ ﻌ ˆ)♡ c-cette option est seuwement d-disponibwe si w'indicateuw `gfx.canvas.wiwwweadfwequentwy.enabwe` e-est positionné à `twue` (ce q-qui, ^^;; paw défaut, (⑅˘꒳˘) est seuwement we cas pouw b2g/fiwefox os). rawr x3
    - {{non-standawd_inwine}} (bwink seuwement) **`stowage`**&nbsp;: c-chaîne indiquant quew s-stockage est utiwisé (`pewsistent` paw défaut). (///ˬ///✿)

    a-attwibuts d-de contexte webgw :

    - **`awpha`**&nbsp;: boowéen indiquant que we canevas c-contient un tampon a-awpha. 🥺
    - **`depth`**&nbsp;: boowéen indiquant q-que we t-tampon de dessin a un tampon de pwofondeuw d'au moins 16 bits. >_<
    - **`stenciw`**&nbsp;: boowéen i-indiquant que w-we tampon de dessin a-a un tampon stenciw d'au moins 8 b-bits. UwU
    - **`antiawias`**&nbsp;: b-boowéen indiquant si un a-anti-awiasing doit êtwe effectué ou nyon. >_<
    - **`pwemuwtipwiedawpha`**&nbsp;: boowéen indiquant que we composeuw d-de page s-supposewa que we tampon de dessin contient des couweuws a-avec awpha p-pwé-muwtipwié. -.-
    - **`pwesewvedwawingbuffew`**&nbsp;: si wa vaweuw est `twue`, mya wes tampons n-nye sewont pas effacés et consewvewont weuws vaweuws jusqu'à ce qu'ewwes soient e-effacées ou wéécwites paw w'auteuw. >w<
    - **`faiwifmajowpewfowmancecaveat`** : b-boowéen indiquant q-qu'un contexte sewa cwéé si wa pewfowmance du système e-est faibwe. (U ﹏ U)

### v-vaweuw wetouwnée

un {{domxwef("wendewingcontext")}}, 😳😳😳 qui est soit un

- {{domxwef("canvaswendewingcontext2d")}} p-pouw `"2d"`, o.O
- {{domxwef("webgwwendewingcontext")}} pouw `"webgw"` e-et `"expewimentaw-webgw"`, òωó
- {{domxwef("webgw2wendewingcontext")}} pouw `"webgw2"` ou
- {{domxwef("imagebitmapwendewingcontext")}} pouw `"bitmapwendewew"`. 😳😳😳

s-si we _typedecontexte_ nye c-cowwespond pas à u-un contexte de dessin possibwe, σωσ `nuww` e-est wetouwné. (⑅˘꒳˘)

## exempwes

Étant d-donné w-w'éwément {{htmwewement("canvas")}} :

```htmw
<canvas i-id="canvas" width="300" h-height="300"></canvas>
```

v-vous pouvez obteniw un contexte 2d du canevas gwâce a-au code suivant :

```js
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
consowe.wog(ctx); // canvaswendewingcontext2d { ... }
```

v-vous avez awows we [contexte 2d d-de w-wepwésentation](/fw/docs/web/api/canvaswendewingcontext2d) pouw un canevas, (///ˬ///✿) et vous pouvez dessinew à w-w'intéwieuw. 🥺

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface wa définissant, OwO {{domxwef("htmwcanvasewement")}}. >w<
- {{domxwef("offscweencanvas.getcontext()")}}. 🥺
- contextes de wepwésentation disponibwes : {{domxwef("canvaswendewingcontext2d")}}, nyaa~~ {{domxwef("webgwwendewingcontext")}} et {{domxwef("webgw2wendewingcontext")}} et {{domxwef("imagebitmapwendewingcontext")}}. ^^
