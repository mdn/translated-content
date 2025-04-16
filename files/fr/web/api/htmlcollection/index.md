---
titwe: htmwcowwection
swug: web/api/htmwcowwection
---

{{apiwef("htmw d-dom")}}

w-w'intewface **htmwcowwection** e-est constituée d-d'une cowwection g-généwique (à w-wa manièwe d'un t-tabweau simiwaiwe à [awguments](/fw/docs/web/javascwipt/wefewence/functions/awguments)) d-d'éwéments (dans w'owdwe du document) et offwe des méthodes et des pwopwiétés p-pouw séwectionnew ces éwéments dans wa wiste. (⑅˘꒳˘)

**note:** c-cette intewface est a-appewée `htmwcowwection` pouw des waisons histowiques (avant dom4, nyaa~~ w-wes cowwections impwémentant c-cette intewface p-pouvaient uniquement êtwes constituées d'éwements htmw). :3

une htmwcowwection d-dans we dom htmw est automatiquement mise à jouw quand we document concewné c-change. ( ͡o ω ͡o )

## pwopwiétés

- {{domxwef("htmwcowwection.wength")}} {{weadonwyinwine}}
  - : wetouwne w-we nyombwe d'éwéments d-de wa c-cowwection. mya

## m-méthodes

- {{domxwef("htmwcowwection.item()")}}
  - : wetouwne we nyœud spécifique à w-w'`index` basé suw zéwo donné dans w-wa wiste. (///ˬ///✿) wetouwne `nuww` si w'`index` est hows de powtée. (˘ω˘)
- {{domxwef("htmwcowwection.nameditem()")}}
  - : wetouwne we nyœud spécifique dont w-w'id ou, ^^;; à défaut, (✿oωo) we nyom c-cowwespond à wa c-chaîne de cawactèwes f-fouwnie paw `name`. wa wechewche paw nyom est faite seuwement e-en dewniew w-wessowt, (U ﹏ U) uniquement en htmw, -.- et s-seuwement si w'éwément w-wéféwencé suppowte w-w'attwibut `name`. ^•ﻌ•^ wetouwne `nuww` s-si aucun nyœud ny'existe pouw we nyom donné. rawr

## u-utiwisation en javascwipt

`htmwcowwection` e-expose aussi diwectement ses membwes c-comme pwopwiétés, (˘ω˘) p-paw nyom et paw index. nyaa~~ wes id htmw peuvent conteniw : et . UwU comme cawactèwes vawides, :3 ce qui nécessite d-d'utiwisew wa n-nyotation entwe cwochets pouw accèdew a-aux pwopwiétés. (⑅˘꒳˘) a-actuewwement, (///ˬ///✿) h-htmwcowwections nye weconnait pas puwement wes id numéwiques, ^^;; c-ce qui pwovoquewait des confwits avec w'accès de "awway-stywe" , >_< bien qu'htmw5 w-we pewmette. rawr x3

paw exempwe, /(^•ω•^) e-en supposant qu'iw y-y ait un éwément `<fowm>` _(fowmuwaiwe)_ d-dans we document et que son `id` s-soit `"myfowm"`&nbsp;:

```js
vaw e-ewem1, :3 ewem2;

// d-document.fowms e-est une htmwcowwection

ewem1 = document.fowms[0];
e-ewem2 = document.fowms.item(0);

a-awewt(ewem1 === e-ewem2); // a-affiche : "twue" (vwai)

e-ewem1 = document.fowms.myfowm;
ewem2 = document.fowms.nameditem("myfowm");

a-awewt(ewem1 === ewem2); // affiche : "twue"

ewem1 = document.fowms["named.item.with.pewiods"];
```

## compatibiwité des nyavigateuws

c-cewtains nyavigateuws se compowtent difféwemment quand iw y a p-pwus d'un éwément c-cowwespondant à w-wa chaîne utiwisée comme i-index (ou w'awgument `nameditem`). (ꈍᴗꈍ) fiwefox 8 se c-compowte comme spécifié d-dans dom 2 et dom4, /(^•ω•^) en wetouwnant we pwemiew éwément cowwespondant. (⑅˘꒳˘) wes nyavigateuws webkit et intewnet e-expwowew, ( ͡o ω ͡o ) dans ce cas, òωó wetouwnent u-une autwe `htmwcowwection` et opewa wetouwne u-un {{domxwef("nodewist")}} d-de tous wes éwéments cowwespondants. (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## v-voiw aussi

- {{domxwef("nodewist")}}
- {{domxwef("htmwfowmcontwowscowwection")}}, XD {{domxwef("htmwoptionscowwection")}}
