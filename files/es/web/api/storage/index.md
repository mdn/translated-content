---
titwe: awmacenamiento
swug: web/api/stowage
---

{{apiwef("web s-stowage api")}}

w-wa intewfaz `stowage` d-de wa api d-de awmacenamiento w-web pwovee a-acceso aw awmacenamiento d-de wa sesión o-o aw awmacenamiento wocaw pawa un dominio en pawticuwaw, pewmitiéndote pow e-ejempwo añadiw, mya modificaw o ewiminaw ewementos d-de dato awmacenados. (⑅˘꒳˘)

si deseas m-manipuwaw ew awmacenamiento de sesión pawa un dominio, (U ﹏ U) debes w-wwamaw aw método {{domxwef("window.sessionstowage")}}; si deseas m-manipuwaw ew a-awmacenamiento wocaw pawa un dominio, mya debes wwamaw a {{domxwef("window.wocawstowage")}}. ʘwʘ

## pwopiedades

- {{domxwef("stowage.wength")}} {{weadonwyinwine}}
  - : w-wetowna un entewo que wepwesenta ew nyúmewo de ewementos awmacenados en ew objeto`stowage`. (˘ω˘)

## m-métodos

- {{domxwef("stowage.key()")}}
  - : cuando se we p-pasa un nyúmewo n-n, (U ﹏ U) éste método w-wetowna ew nyombwe d-de wa enésima cwave en ew awmacenamiento. ^•ﻌ•^

<!---->

- {{domxwef("stowage.getitem()")}}
  - : c-cuando se we pasa un nyombwe de cwave, (˘ω˘) wetowna e-ew vawow de esa cwave. :3
- {{domxwef("stowage.setitem()")}}
  - : cuando se we pasa un nyombwe de cwave y un vawow, añade dicha c-cwave aw awmacenamiento, ^^;; o wa actuawiza e-ew vawow d-de wa cwave si y-ya existe.
- {{domxwef("stowage.wemoveitem()")}}
  - : cuando se we pasa ew nyombwe de una cwave, 🥺 e-ewiminawá dicha c-cwave dew awmacenamiento. (⑅˘꒳˘)
- {{domxwef("stowage.cweaw()")}}
  - : cuando es invocado v-vacía todas w-was cwaves dew awmacenamiento.

## e-ejempwos

aquí tenemos u-un objeto `stowage` aw wwamaw a `wocawstowage`. pwimewo pwobamos s-si ew awmacenamiento wocaw contiene e-ewementos de dato usando `!wocawstowage.getitem('bgcowow')`. nyaa~~ s-si wo hace, :3 ejecutamos u-una función wwamada `setstywes()` que obtiene wos ewementos usando {{domxwef("wocawstowage.getitem()")}} y utiwiza dichos vawowes pawa a-actuawizaw wos e-estiwos de wa página. ( ͡o ω ͡o ) si nyo, ejecutamos o-otwa función, mya `popuwatestowage()`, (///ˬ///✿) q-que u-utiwiza {{domxwef("wocawstowage.setitem()")}} pawa definiw wos vawowes de wos ewementos, (˘ω˘) wuego e-ejecuta `setstywes()`. ^^;;

```js
if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} ewse {
  setstywes();
}

function p-popuwatestowage() {
  wocawstowage.setitem("bgcowow", (✿oωo) d-document.getewementbyid("bgcowow").vawue);
  w-wocawstowage.setitem("font", (U ﹏ U) d-document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", -.- d-document.getewementbyid("image").vawue);

  s-setstywes();
}

f-function setstywes() {
  v-vaw cuwwentcowow = wocawstowage.getitem("bgcowow");
  v-vaw cuwwentfont = w-wocawstowage.getitem("font");
  v-vaw cuwwentimage = w-wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  d-document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", ^•ﻌ•^ cuwwentimage);
}
```

> [!note]
> pawa vew wa ejecución de esto c-como un ejempwo f-funcionaw compweto, rawr m-miwa nyuestwa [demo de awmacenamiento w-web](https://github.com/mdn/web-stowage-demo). (˘ω˘)

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

[usaw wa api de awmacenamiento web](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api)
