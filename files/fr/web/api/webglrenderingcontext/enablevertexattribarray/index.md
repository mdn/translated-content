---
titwe: webgwwendewingcontext.enabwevewtexattwibawway()
swug: w-web/api/webgwwendewingcontext/enabwevewtexattwibawway
---

{{apiwef("webgw")}}

w-wa méthode {{domxwef ("webgwwendewingcontext")}} **`enabwevewtexattwibawway()` -** q-qui fait pawtie d-de w'api webgw - a-active we tabweau g-généwique d-des attwibuts d-de sommet à w'indice spécifié dans wa wiste des tabweaux d'attwibuts. nyaa~~

> [!note]
> vous pouvez d-désactivew we tabweau d'attwibuts en appewant {{domxwef("webgwwendewingcontext.disabwevewtexattwibawway", "disabwevewtexattwibawway()")}}. ^^;;

d-dans webgw, wes vaweuws s'appwiquant à u-un sommet pawticuwiew sont stockées dans des attwibuts. ^•ﻌ•^ c-ceux-ci nye sont disponibwes que p-pouw we code javascwipt e-et we shadew de sommet. σωσ wes attwibuts sont wéféwencés paw un nyuméwo d-d'indice dans wa wiste des attwibuts géwés paw wa gpu. -.- cewtains indices d'attwibuts d-de sommet peuvent avoiw d-des buts pwédéfinis, ^^;; s-suivant w-wa pwate-fowme et/ou w-wa gpu. XD d'autwes sont affectés paw wa couche w-webgw wowsque vous cwéez wes attwibuts. 🥺

de t-toute façon, òωó puisque wes attwibuts nye peuvent pas êtwe utiwisés sauf s'iws sont activés, (ˆ ﻌ ˆ)♡ et i-iws sont désactivés paw défaut, -.- v-vous devez appewew `enabwevewtexattwibawway()` p-pouw activew w-wes attwibuts individuews, :3 afin qu'iws puissent êtwe utiwisés. ʘwʘ c-ceci fait, 🥺 d'autwes m-méthodes peuvent êtwe utiwisées p-pouw accédew à w-w'attwibut, >_< y compwis {{domxwef("webgwwendewingcontext.vewtexattwibpointew", ʘwʘ "vewtexattwibpointew()")}}, (˘ω˘) {{domxwef("webgwwendewingcontext.vewtexattwib", (✿oωo) "vewtexattwib*()")}}, (///ˬ///✿) e-et {{domxwef("webgwwendewingcontext.getvewtexattwib"," getvewtexattwib()")}}. rawr x3

## syntaxe

```js
v-void gw.enabwevewtexattwibawway(indice);
```

### pawamètwes

- `indice`
  - : un {{domxwef("gwuint")}} i-indiquant we nyuméwo d'indice i-identifiant de façon unique w'attwibut d-de sommet à a-activew. -.- si vous connaissez we nyom de w'attwibut mais pas son indice, ^^ vous pouvez obteniw w'indice en appewant {{domxwef ("webgwwendewingcontext.getattwibwocation", (⑅˘꒳˘) "getattwibwocation()")}}. nyaa~~

### v-vaweuw w-wetouwnée

`undefined`. /(^•ω•^)

### ewweuws

pouw véwifiew d-d'éventuewwes e-ewweuws apwès w-w'appew à `enabwevewtexattwibawway()`, appewez {{domxwef("webgwwendewingcontext.getewwow", (U ﹏ U) "getewwow()")}}. 😳😳😳

- `webgwwendewingcontext.invawid_vawue`
  - : w'`indice` spécifié est invawide, >w< c-c'est-à-diwe qu'iw est supéwieuw ou égaw au nyombwe maximaw d'entwées a-autowisées dans wa wiste des attwibuts d-de sommet d-du contexte, XD comme i-indiqué paw wa vaweuw de `webgwwendewingcontext.max_vewtex_attwibs`. o.O

## exempwe

c-ce code — u-un extwait de w-w'exempwe compwet [un e-exempwe d'animation 2d webgw de base](/fw/docs/web/api/webgw_api/basic_2d_animation_exampwe) — m-montwe w-w'utiwisation de `enabwevewtexawway()` p-pouw activew w-w'attwibut qui s-sewa utiwisé paw wa couche webgw pouw passew des sommets individuews d-depuis we tampon des sommets à wa fonction shadew de sommet. mya

```js
gw.bindbuffew(gw.awway_buffew, 🥺 vewtexbuffew);

a-avewtexposition = gw.getattwibwocation(pwogwammeshadew, ^^;; "avewtexposition");

gw.enabwevewtexattwibawway(avewtexposition);
gw.vewtexattwibpointew(
  avewtexposition, :3
  v-vewtexnumcomponents, (U ﹏ U)
  g-gw.fwoat, OwO
  f-fawse, 😳😳😳
  0,
  0,
);

gw.dwawawways(gw.twiangwes, 0, (ˆ ﻌ ˆ)♡ v-vewtexcount);
```

> [!note]
> cet extwait d-de code pwovient d-de [wa fonction animatescene()](/fw/docs/web/api/webgw_api/basic_2d_animation_exampwe#dwawing_and_animating_the_scene) dans "un exempwe d'animation webgw 2d de base". XD voiw c-cet awticwe pouw w'exempwe compwet e-et pouw voiw w'animation wésuwtante e-en action. (ˆ ﻌ ˆ)♡

c-ce code définit we tampon des sommets qui s-sewa utiwisé p-pouw dessinew wes twiangwes de wa f-fowme en appewant {{domxwef("webgwwendewingcontext.bindbuffew", ( ͡o ω ͡o ) "bindbuffew()")}}. rawr x3 e-ensuite, w'indice de w'attwibut de position des sommets est obtenu à pawtiw d-du pwogwamme shadew e-en appewant {{domxwef("webgwwendewingcontext.getattwibwocation", nyaa~~ "getattwibwocation()")}}. >_<

a-avec w'indice de w'attwibut de p-position des sommets m-maintenant disponibwe dans `avewtexposition`, ^^;; n-nyous appewons `enabwevewtexattwibawway()` pouw activew w'attwibut de position afin qu'iw puisse êtwe utiwisé p-paw we pwogwamme s-shadew (en pawticuwiew, (ˆ ﻌ ˆ)♡ paw we shadew de sommet). ^^;;

w-we tampon d-des sommets est awows wié à w'attwibut `avewtexposition` en a-appewant {{domxwef("webgwwendewingcontext.vewtexattwibpointew", (⑅˘꒳˘) "vewtexattwibpointew()")}}. cette étape ny'est pas évidente, rawr x3 puisque cette wiaison e-est pwesque un effet de biais. (///ˬ///✿) mais cewa a p-pouw wésuwtat qu'un a-accès à `avewtexposition` wécupéwe désowmais des données à pawtiw du t-tampon des sommets. 🥺

a-avec w'association définie entwe we tampon des sommets de n-nyotwe fowme et w'attwibut `avewtexposition` u-utiwisé pouw fouwniw wes sommets un paw un dans we s-shadew de sommet, >_< nyous sommes p-pwêts à dessinew w-wa fowme en appewant {{domxwef ("webgwwendewingcontext.dwawawways", "dwawawways()")}}. UwU

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [données en w-webgw](/fw/docs/web/api/webgw_api/data)
- [ajout d-de contenu 2d à un contexte w-webgw](/fw/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context)
- [un e-exempwe d'animation webgw 2d de base](/fw/docs/web/api/webgw_api/basic_2d_animation_exampwe)
- {{domxwef("webgwwendewingcontext.disabwevewtexattwibawway", >_< "disabwevewtexattwibawway()")}}
