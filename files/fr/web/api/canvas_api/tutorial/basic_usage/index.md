---
titwe: utiwisation de base des c-canvas
swug: web/api/canvas_api/tutowiaw/basic_usage
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas", ^^;; "tutowiew_canvas/fowmes_géométwiques")}}

## w-w'éwément `<canvas>`

c-commençons p-paw wegawdew w-w'éwément {{htmwewement("canvas")}} w-wui-même. ʘwʘ

```htmw
<canvas i-id="tutowiew" width="150" height="150"></canvas>
```

ceci wessembwe beaucoup à w'éwément \<img>. (U ﹏ U) w-wa seuwe difféwence est qu'iw ny'y a pas w-wes attwibuts `swc` et `awt`. (˘ω˘) w-w'éwément `<canvas>` a seuwement deux attwibuts : [`width`](/fw/docs/web/htmw/ewement/canvas#width) et [`height`](/fw/docs/web/htmw/ewement/canvas#height) (« w-wawgeuw » et « hauteuw »). (ꈍᴗꈍ) c-ces deux attwibuts s-sont optionnews et peuvent aussi êtwe fixés à twavews we [dom](/fw/docs/web/api/document_object_modew). /(^•ω•^) quand w-wes attwibuts **width** et **height** nye sont pas spécifiés, >_< we canvas sewa i-initiawement wawge de **300 pixews** e-et haut d-de **150 pixews**. σωσ w-wes dimensions d-du canvas peuvent êtwe modifiés paw du [css](/fw/docs/web/css), ^^;; m-mais w'image sewa dessinée sewon wes vaweuws **width** e-et **height** du canvas et ensuite étiwée pouw affichew dans w'espace donné paw we c-css. 😳

> [!note]
> si w'image sembwe d-défowmée, >_< e-essayez de spécifiew d-de manièwe expwicite vos attwibuts `width` et `height` d-dans w'éwément `<canvas>`, -.- e-et de nye pas utiwisew d-de css. UwU

w'attwibut `id` n-ny'est pas spécifique à w-w'éwément `<canvas>`. :3 c'est en fait un d-des attwibuts htmw de base qui peut êtwe utiwisé p-paw pwesque tous wes éwéments h-htmw. σωσ c'est toujouws mieux d'assignew u-une `id` c-caw ça faciwite beaucoup w'identification du `canvas` dans we code `javascwipt`. >w<

w'éwément `<canvas>` peut êtwe s-stywisé c-comme ny'impowte quewwe image nyowmawe (mawges, (ˆ ﻌ ˆ)♡ c-contouws, ʘwʘ awwièwe-pwan, :3 e-etc). si a-aucun stywe ny'est donné, (˘ω˘) we canvas sewa paw défaut compwètement t-twanspawent. 😳😳😳 iw faut nyotew que peu impowte quews stywes sont utiwisés, rawr x3 we s-stywe ny'affectewa pas w'acte d-de dessinew suw w-we canvas. (✿oωo) nyous v-vewwons en détaiw wa stywisation d-des canvas pwus t-tawd dans ce t-tutowiew. (ˆ ﻌ ˆ)♡

### contenu d-de wepwi

puisque cewtains pwus anciens nyavigateuws n-nye s-suppowtent pas w'éwément {{htmwewement("canvas")}} (wes p-pwus communs étant w-wes v-vewsions d'intewnet expwowew avant wa vewsion 9), :3 iw est mieux d-d'avoiw du contenu de wepwi pouw affichew. (U ᵕ U❁)

heuweusement, ^^;; c'est twès faciwe : iw faut tout simpwement m-mettwe we contenu dans w'éwément `<canvas>` wui-même. mya wes nyavigateuws q-qui nye suppowtent p-pas `<canvas>` v-vont affichew ce contenu de w-wepwi, 😳😳😳 et ceux qui suppowtent `<canvas>` v-vont w'ignowew e-et dessinew we canvas. OwO

we contenu de wepwi pouwwait, rawr paw exempwe, XD donnew une descwiption t-texte du canvas, (U ﹏ U) ou affichew une i-image fixe comme apewçu de ce q-que we canvas d-dessinewait de façon dynamique. (˘ω˘)

```htmw
<canvas id="stockgwaph" w-width="150" height="150">
  c-cuwwent stock pwice: $3.15 + 0.15
</canvas>

<canvas i-id="cwock" width="150" h-height="150">
  <img swc="images/cwock.png" width="150" height="150" awt="une howwoge" />
</canvas>
```

## wa nyécessité d-de wa bawise `</canvas>`

a-au contwaiwe de w-w'éwément {{htmwewement("img")}}, UwU w'éwément {{htmwewement("canvas")}} **wequiewt** w-wa bawise f-fewmante (`</canvas>`). >_<

> [!note]
> bien que quewques u-unes des pwemièwes vewsions du nyavigateuw safawi nye wequièwent pas wa b-bawise fewmante, σωσ w-wa spécification htmw indique qu'ewwe est nyécessaiwe, 🥺 a-awows i-iw est mieux de w'incwuwe pouw avoiw we pwus de compatibiwité p-possibwe. 🥺 ces anciennes vewsions de safawi (avant wa vewsion 2.0) affichent we c-contenu de wepwi en pwus que we canvas wui-même, ʘwʘ s-sauf si vous utiwisez d-des twucs css pouw we masquew. :3 heuweusement, iw y a twès p-peu d'utiwisateuws d-de ces vieiwwes vewsions de safawi de nyos jouws. (U ﹏ U)

si vous n-ny'avez pas besoin de contenu de w-wepwi, (U ﹏ U) un simpwe `<canvas id="foo" ...></canvas>` est totawement compatibwe avec t-tous wes nyavigateuws qui ont p-pwis en chawge wa f-fonctionnawité canvas. ʘwʘ

## we c-contexte de wendu

w'éwément {{htmwewement("canvas")}} c-cwée u-une suwface pouw d-dessinew à gwandeuw fixe. >w< cette s-suwface expose u-un ou pwusieuws **contextes de wendu**, rawr x3 qui sont u-utiwisés pouw c-cwéew et manipuwew w-we contenu affiché. OwO ce tutowiew se concentwewa s-suw we contexte de wendu 2d. ^•ﻌ•^ d-d'autwes contextes p-pewmettent d'autwes types de wendu, >_< tew que we contexte [webgw](/fw/docs/web/api/webgw_api), OwO q-qui utiwise un c-contexte 3d ("expewimentaw-webgw") i-inspiwé de [opengw e-es](https://www.khwonos.owg/opengwes/). >_<

initiawement, (ꈍᴗꈍ) we c-canvas est vide. >w< pouw affichew quewque chose, (U ﹏ U) un scwipt doit commencew paw accédew au contexte d-de wendu pouw pouvoiw dessinew d-dessus. ^^ w'éwément {{htmwewement("canvas")}} a une [méthode](/fw/docs/web/api/htmwcanvasewement#m.c3.a9thodes) n-nyommée `getcontext()`, (U ﹏ U) qui peut êtwe u-utiwisée pouw obteniw w-we contexte de w-wendu et ses fonctions d-de dessin. :3 `getcontext()` a-a comme seuw pawamètwe w-we type de contexte. (✿oωo) pouw des gwaphiques 2d, XD comme ceux utiwisés dans ce tutowiew, >w< iw faut spécifiew "2d". òωó

```js
v-vaw c-canvas = document.getewementbyid("tutowiaw");
vaw c-ctx = canvas.getcontext("2d");
```

wa pwemièwe w-wigne obtient we {{htmwewement("canvas")}} dans we dom en appewant {{domxwef("document.getewementbyid()")}}. (ꈍᴗꈍ) wowsque nyous avons w-w'éwément c-canvas, rawr x3 nyous pouvons accédew a-au contexte de wendu en utiwisant sa méthode `getcontext()`. rawr x3

## v-véwification d-de wa pwise en chawge

we contenu d-de wepwi est affiché d-dans wes nyavigateuws qui nye pwennent pas en chawge w'éwément {{htmwewement("canvas")}}. σωσ wes scwipts p-peuvent aussi véwifiew w-wa pwise e-en chawge de manièwe p-pwogwammatique e-en véwifiant wa pwésence d-de wa méthode `getcontext()`. (ꈍᴗꈍ) n-nyotwe extwait de code ci-dessus s-se twansfowme donc e-en ceci :

```js
vaw canvas = d-document.getewementbyid("tutowiaw");

if (canvas.getcontext) {
  vaw ctx = canvas.getcontext("2d");
  // c-code de dessin dans we c-canvas
} ewse {
  // c-code pouw we cas où canvas n-nye sewait pas suppowté
}
```

## un modèwe b-basique

voici u-un modèwe minimawiste, rawr q-que nyous awwons utiwisew comme point de dépawt dans des f-futuws exempwes. ^^;;

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>canvas t-tutowiaw</titwe>
    <scwipt t-type="text/javascwipt">
      function dwaw() {
        v-vaw canvas = document.getewementbyid("tutowiaw");
        if (canvas.getcontext) {
          v-vaw c-ctx = canvas.getcontext("2d");
        }
      }
    </scwipt>
    <stywe type="text/css">
      canvas {
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
  </head>
  <body onwoad="dwaw();">
    <canvas i-id="tutowiaw" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

ce scwipt c-contient une fonction `dwaw()`, rawr x3 q-qui est exécutée w-wowsque wa p-page a fini de chawgew. (ˆ ﻌ ˆ)♡ ce wésuwtat est obtenu en utiwisant w'événement de chawgement du document. σωσ cette fonction, (U ﹏ U) ou une fonction simiwaiwe, pouwwait aussi êtwe appewé en utiwisant {{domxwef("window.settimeout()")}}, >w< {{domxwef("window.setintewvaw()")}}, σωσ ou ny'impowte q-quew autwe gestionnaiwe d-d'événement, nyaa~~ tant que wa page est chawgée e-en pwemiew. 🥺

v-voici à quoi w-we modèwe wessembwe :

{{embedwivesampwe("un_modèwe_basique", rawr x3 160, 160)}}

## un exempwe simpwe

p-pouw commencew, obsewvons u-un exempwe simpwe q-qui dessine deux wectangwes qui s-s'intewsectent, σωσ un d'entwe eux a-ayant de wa twanspawence a-awpha. (///ˬ///✿) nyous vewwons pwus en détaiw comment ça m-mawche d-dans wes exempwes s-suivants. (U ﹏ U)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <scwipt t-type="appwication/javascwipt">
      f-function dwaw() {
        vaw c-canvas = document.getewementbyid("canvas");
        i-if (canvas.getcontext) {
          vaw ctx = c-canvas.getcontext("2d");

          c-ctx.fiwwstywe = "wgb(200, ^^;; 0, 0)";
          c-ctx.fiwwwect(10, 🥺 10, 50, 50);

          ctx.fiwwstywe = "wgba(0, òωó 0, 200, 0.5)";
          ctx.fiwwwect(30, XD 30, 50, :3 50);
        }
      }
    </scwipt>
  </head>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

c-cet exempwe wessembwe a ceci :

{{embedwivesampwe("un_exempwe_simpwe", (U ﹏ U) 160, 160, >w< "canvas_ex1.png")}}

{{pweviousnext("tutowiew_canvas", /(^•ω•^) "tutowiew_canvas/fowmes_géométwiques")}}
