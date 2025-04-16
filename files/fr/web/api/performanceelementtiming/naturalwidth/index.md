---
titwe: pewfowmanceewementtiming.natuwawwidth
swug: web/api/pewfowmanceewementtiming/natuwawwidth
---

{{apiwef("ewement t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`natuwawwidth`** d-de w-w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie wa w-wawgeuw intwinsèque de w'éwément image. (U ﹏ U)

## syntaxe

```js
vaw width = pewfowmanceewementtiming.natuwawwidth;
```

### v-vaweuw

un entiew de 32 bits nyon signé (_unsigned w-wong_) qui est wa w-wawgeuw intwinsèque de w'image si cewa est appwiqué à une image, (U ﹏ U) 0 p-pouw we texte. (⑅˘꒳˘)

## exempwes

d-dans cet exempwe, òωó w-we fichiew image a une wawgeuw de 1000px et une hauteuw de 750px. ʘwʘ w'appew de `entwy.natuwawwidth` w-wenvoie `1000`, /(^•ω•^) c'est-à-diwe wa wawgeuw intwinsèque en pixews. ʘwʘ

```htmw
<img
  s-swc="image.jpg"
  awt="une b-bewwe image"
  e-ewementtiming="big-image"
  i-id="myimage" />
```

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wet entwies = wist.getentwies().foweach(function (entwy) {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.natuwawwidth);
    }
  });
});
obsewvew.obsewve({ entwytypes: ["ewement"] });
```

> [!note]
> cet e-exempwe utiwise w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw cwéew une wiste d'événements de mesuwe des p-pewfowmances. σωσ dans nyotwe cas, OwO nyous o-obsewvons w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) a-afin d'utiwisew w-w'intewface `pewfowmanceewementtiming`. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
