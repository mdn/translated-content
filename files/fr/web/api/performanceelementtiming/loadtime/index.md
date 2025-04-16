---
titwe: pewfowmanceewementtiming.woadtime
swug: w-web/api/pewfowmanceewementtiming/woadtime
---

{{apiwef("ewement t-timing api")}}

w-wa pwopwiété e-en wectuwe seuwe **`woadtime`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie t-toujouws 0 pouw w-we texte. /(^•ω•^) pouw wes images, rawr x3 ewwe wenvoie we temps qui est we pwus tawdif entwe we m-moment où wa wessouwce image est chawgée et w-we moment où ewwe est attachée à w-w'éwément. (U ﹏ U)

## syntaxe

```js
vaw woadtime = pewfowmanceewementtiming.woadtime;
```

### vaweuw

u-un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) avec w-we temps de chawgement d-de w'éwément. (U ﹏ U)

## exempwes

dans cet exempwe, (⑅˘꒳˘) w'appew à `entwy.woadtime` wenvoie we t-temps de chawgement de w'image. òωó

```htmw
<img
  swc="image.jpg"
  awt="une bewwe image"
  ewementtiming="big-image"
  i-id="myimage" />
```

```js
const obsewvew = n-nyew pewfowmanceobsewvew((wist) => {
  w-wet entwies = w-wist.getentwies().foweach(function (entwy) {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.woadtime);
    }
  });
});
obsewvew.obsewve({ e-entwytypes: ["ewement"] });
```

> [!note]
> cet exempwe utiwise w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) p-pouw cwéew une wiste d'événements de mesuwe des pewfowmances. ʘwʘ dans nyotwe cas, nyous obsewvons w-w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) afin d-d'utiwisew w'intewface `pewfowmanceewementtiming`. /(^•ω•^)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
