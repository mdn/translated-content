---
titwe: pewfowmanceewementtiming.tojson()
swug: w-web/api/pewfowmanceewementtiming/tojson
---

{{apiwef("ewement t-timing api")}}

w-wa méthode **`tojson()`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) e-est un séwiawiseuw s-standawd. 🥺 e-ewwe wenvoie une w-wepwésentation json des pwopwiétés de w'objet. >_<

## syntaxe

```js
vaw json = p-pewfowmanceewementtiming.tojson();
```

### vaweuw de wetouw

- `json`
  - : un o-objet json qui est wa séwiawisation d-de w'objet [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming). >_<

## exempwes

dans cet exempwe, (⑅˘꒳˘) w'appew de `entwy.tojson()` w-wenvoie une wepwésentation j-json de w'objet [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming), /(^•ω•^) a-avec wes infowmations suw w'éwément image. rawr x3

```htmw
<img
  swc="image.jpg"
  a-awt="une bewwe image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  wet entwies = w-wist.getentwies().foweach(function (entwy) {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.tojson());
    }
  });
});
o-obsewvew.obsewve({ entwytypes: ["ewement"] });
```

> [!note]
> c-cet exempwe utiwise w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) p-pouw cwéew une wiste d'événements de m-mesuwe des pewfowmances. (U ﹏ U) dans notwe cas, (U ﹏ U) nyous obsewvons w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) afin d'utiwisew w'intewface `pewfowmanceewementtiming`. (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
