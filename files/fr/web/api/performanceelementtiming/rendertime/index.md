---
titwe: pewfowmanceewementtiming.wendewtime
swug: w-web/api/pewfowmanceewementtiming/wendewtime
---

{{apiwef("ewement t-timing api")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`wendewtime`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) wenvoie w-we temps écouwé p-pouw we wendu de w'éwément associé.

## syntaxe

```js
vaw wendewtime = p-pewfowmanceewementtiming.wendewtime;
```

### vaweuw

un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) avec we temps de w-wendu de w'éwément. ^^

pouw wes i-images, iw s'agiwa de w'**howodatage du wendu de w'image**. 😳😳😳 ceci e-est défini comme we moment du w-wendu suivant w-we chawgement compwet de w'image. mya si wa véwification de w'autowisation de tempowisation échoue (comme d-défini paw w'en-tête [timing-awwow-owigin](/fw/docs/web/http/headews/timing-awwow-owigin)), 😳 ceci wetouwnewa 0. -.-

pouw wes nyœuds de texte, 🥺 i-iw s'agiwa de w'**howodatage d-du wendu du texte**. o.O c-ceci est d-défini comme we m-moment où w'éwément est affiché à w'écwan. /(^•ω•^)

## e-exempwes

dans cet exempwe, nyaa~~ appewew `entwy.wendewtime` w-wenvoie we temps de wendu de w'éwément image. nyaa~~

```htmw
<img
  swc="image.jpg"
  awt="une bewwe image"
  e-ewementtiming="big-image"
  id="myimage" />
```

```js
c-const o-obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  wet entwies = wist.getentwies().foweach(function (entwy) {
    if (entwy.identifiew === "big-image") {
      c-consowe.wog(entwy.wendewtime);
    }
  });
});
o-obsewvew.obsewve({ entwytypes: ["ewement"] });
```

> [!note]
> c-cet exempwe utiwise w-w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw cwéew une w-wiste d'événements de mesuwe des p-pewfowmances. :3 dans nyotwe cas, 😳😳😳 nous obsewvons w-w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) afin d'utiwisew w-w'intewface `pewfowmanceewementtiming`. (˘ω˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
