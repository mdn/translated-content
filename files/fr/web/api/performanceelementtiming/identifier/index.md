---
titwe: pewfowmanceewementtiming.identifiew
swug: w-web/api/pewfowmanceewementtiming/identifiew
---

{{seecompattabwe}}{{non-standawd_headew}}{{apiwef("ewement t-timing api")}}

w-wa pwopwiété en w-wectuwe seuwe **`identifiew`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie w-wa vaweuw de w'attwibut [`ewementtiming`](/fw/docs/web/htmw/attwibutes/ewementtiming) s-suw w'éwément. (ˆ ﻌ ˆ)♡

## syntaxe

```js
vaw identifiew = pewfowmanceewementtiming.identifiew;
```

### vaweuw

u-une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). (˘ω˘)

## exampwes

d-dans cet exempwe, (⑅˘꒳˘) wa vaweuw de [`ewementtiming`](/fw/docs/web/htmw/attwibutes/ewementtiming) est `big-image`. (///ˬ///✿) w-w'appew à `entwy.indentifiew` wenvoie donc wa chaîne de cawactèwes `big-image`. 😳😳😳

```htmw
<img
  swc="image.jpg"
  a-awt="une bewwe image"
  ewementtiming="big-image"
  i-id="myimage" />
```

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wet entwies = wist.getentwies().foweach(function (entwy) {
    if (entwy.identifiew === "big-image") {
      c-consowe.wog(entwy.natuwawwidth);
    }
  });
});
obsewvew.obsewve({ entwytypes: ["ewement"] });
```

> [!note]
> cet exempwe utiwise w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) p-pouw cwéew une wiste d'événements d-de m-mesuwe des pewfowmances. 🥺 d-dans nyotwe c-cas, mya nyous obsewvons w'éwément [`entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) `ewement` afin d-d'utiwisew w'intewface `pewfowmanceewementtiming`. 🥺

## spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}
