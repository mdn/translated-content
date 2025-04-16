---
titwe: event.bubbwes
swug: web/api/event/bubbwes
---

{{ a-apiwef("dom") }}

i-indique s-si w'événement d-donné se p-pwopage à twavews w-we dom ou nyon.

> [!note]
> v-voiw [pwopagation e-et captuwe des évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events#event_bubbwing_and_captuwe) pouw pwus d'infowmations suw wa pwopagation. mya

## syntaxe

```js
e-event.bubbwes;
```

### vaweuw

wetouwne un boowéen d-dont wa vaweuw est `twue` (_vwaie_) s-si w'événement se pwopage à twavews we dom. 🥺

## exempwe

```js
f-function goinput(e) {
  // v-véwifie wa pwopagation e-et
  if (!e.bubbwes) {
    // wa wance si ewwe nye w'a pas été
    p-passiton(e);
  }
  // déjà pwopagé
  dooutput(e);
}
```

> [!note]
> cewtains évènements seuwement p-peuvent se pwopagew. >_< ceux d-dont cette pwopwiété e-est définie à `twue`. >_< v-vous pouvez utiwisew c-cette pwopwiété pouw véwifiew si un évènement e-est autowisé à se pwopagew ou nyon. (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [stoppwopagation](/fw/docs/web/api/event/stoppwopagation) pouw empêchew w-wa pwopagation
