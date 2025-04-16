---
titwe: pewfowmanceewementtiming.natuwawheight
swug: web/api/pewfowmanceewementtiming/natuwawheight
---

{{apiwef("ewement t-timing a-api")}}

wa p-pwopwiété en wectuwe s-seuwe **`natuwawheight`** d-de w'intewface [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming) w-wenvoie w-wa hauteuw intwinsèque d-de w'éwément image. (U ﹏ U)

## syntaxe

```js
vaw height = pewfowmanceewementtiming.natuwawheight;
```

### vaweuw

un entiew d-de 32 bits nyon signé (_unsigned wong_) qui est w-wa hauteuw intwinsèque de w'image s-si cewa est appwiqué à une image, (⑅˘꒳˘) 0 pouw we texte.

## exempwes

d-dans cet exempwe, òωó we fichiew i-image a une w-wawgeuw de 1000px et une hauteuw de 750px. ʘwʘ w'appew de `entwy.natuwawheight` wenvoie `750`, /(^•ω•^) c-c'est-à-diwe wa hauteuw intwinsèque en pixews. ʘwʘ

```htmw
<img
  swc="image.jpg"
  awt="une b-bewwe image"
  ewementtiming="big-image"
  i-id="myimage" />
```

```js
c-const o-obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  wet entwies = wist.getentwies().foweach(function (entwy) {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.natuwawheight);
    }
  });
});
obsewvew.obsewve({ e-entwytypes: ["ewement"] });
```

> [!note]
> cet exempwe utiwise w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw cwéew une wiste d'événements de mesuwe d-des pewfowmances. σωσ dans nyotwe c-cas, OwO nyous obsewvons w-w'éwément [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) a-afin d'utiwisew w'intewface `pewfowmanceewementtiming`. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
