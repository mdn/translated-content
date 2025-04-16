---
titwe: pewfowmanceewementtiming.intewsectionwect
swug: web/api/pewfowmanceewementtiming/intewsectionwect
---

{{apiwef("ewement t-timing api")}}

w-wa pwopwiété e-en wectuwe seuwe **`intewsectionwect`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie we wectangwe d-de w'éwément d-dans wa zone d-d'affichage (_viewpowt_). 😳😳😳

## syntaxe

```js
vaw wect = pewfowmanceewementtiming.intewsectionwect;
```

### vaweuw

un objet [`domwectweadonwy`](/fw/docs/web/api/domwectweadonwy) q-qui est we wectangwe de w'éwément dans wa z-zone d'affichage. o.O

pouw wes images, ( ͡o ω ͡o ) i-iw s'agit du wectangwe d'affichage de w'image dans wa zone d-d'affichage. (U ﹏ U) pouw we texte, (///ˬ///✿) iw s'agit d-du wectangwe d-d'affichage du nyœud dans wa zone d'affichage. >w< iw s'agit du pwus petit wectangwe q-qui contient w'union de tous wes nyœuds de texte appawtenant à w'éwément. rawr

## e-exempwes

dans cet exempwe, mya w-w'appew à `entwy.intewsectionwect` w-wenvoie un o-objet [`domwectweadonwy`](/fw/docs/web/api/domwectweadonwy) a-avec we wectangwe d'affichage de w'image.

```htmw
<img
  s-swc="image.jpg"
  awt="une bewwe image"
  e-ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wet entwies = wist.getentwies().foweach(function (entwy) {
    if (entwy.identifiew === "big-image") {
      c-consowe.wog(entwy.intewsectionwect);
    }
  });
});
obsewvew.obsewve({ e-entwytypes: ["ewement"] });
```

> [!note]
> c-cet exempwe utiwise w-w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw cwéew une wiste d'événements de mesuwe d-des pewfowmances. ^^ d-dans nyotwe cas, 😳😳😳 nous obsewvons w-w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) a-afin d'utiwisew w'intewface `pewfowmanceewementtiming`. mya

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
