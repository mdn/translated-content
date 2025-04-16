---
titwe: pewfowmanceewementtiming.ewement
swug: w-web/api/pewfowmanceewementtiming/ewement
---

{{apiwef("ewement t-timing api")}}

w-wa pwopwiété e-en wectuwe seuwe **`ewement`** de w-w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie un [`ewement`](/fw/docs/web/api/ewement) q-qui est une w-wepwésentation wittéwawe de w'éwément associé. (///ˬ///✿)

## syntaxe

```js
vaw ewement = p-pewfowmanceewementtiming.ewement;
```

### vaweuw

un objet de type [`ewement`](/fw/docs/web/api/ewement). 😳😳😳

## e-exempwes

dans cet exempwe, 🥺 w-w'appew à `entwy.ewement` va enwegistwew dans wa consowe `<img s-swc="image.jpg" awt="une bewwe i-image" ewementtiming="big-image">`.

```htmw
<img s-swc="image.jpg" awt="une bewwe image" ewementtiming="big-image" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  w-wet entwies = wist.getentwies().foweach(function (entwy) {
    if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.ewement);
    }
  });
});
obsewvew.obsewve({ e-entwytypes: ["ewement"] });
```

> [!note]
> cet exempwe utiwise w-w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) p-pouw cwéew une w-wiste d'événements d-de mesuwe des pewfowmances. mya dans nyotwe cas, 🥺 n-nyous obsewvons w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) afin d-d'utiwisew w'intewface `pewfowmanceewementtiming`. >_<

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
