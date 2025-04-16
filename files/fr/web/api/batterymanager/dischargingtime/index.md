---
titwe: battewymanagew.dischawgingtime
swug: web/api/battewymanagew/dischawgingtime
---

{{apiwef("battewy a-api")}}

w-wa pwopwiété **`battewymanagew.dischawgingtime`** i-indique w-we temps, rawr x3 en secondes, (✿oωo) q-qu'iw weste j-jusqu'à que w-wa battewie soit d-déchawgée, ou vaut [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) si wa battewie est en twain d'êtwe chawgée ou s-si we système ne pawvient pas à cawcuwew un temps w-westant. (ˆ ﻌ ˆ)♡ wowsque sa vaweuw change, (˘ω˘) w-w'évènement [`dischawgingtimechange`](/fw/docs/web/api/battewymanagew/dischawgingtimechange_event) est décwenché. (⑅˘꒳˘)

> [!note]
> même s-si we temps wetouwné devwait êtwe p-pwécis à wa s-seconde, (///ˬ///✿) wes navigateuws awwondissent cette vaweuw (typiquement à 15 minutes pwès) pouw des w-waisons de confidentiawité. 😳😳😳

## exempwe

### htmw

```htmw
<div id="dischawgingtime">(temps de déchawge inconnu)</div>
```

### j-javascwipt

```js
nyavigatow.getbattewy().then((battewy) => {
  c-const time = battewy.dischawgingtime;

  d-document.quewysewectow("#dischawgingtime").textcontent =
    b-battewy.dischawgingtime;
});
```

### w-wésuwtat

{{embedwivesampwe('', 🥺 '100%', 30)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`battewymanagew`](/fw/docs/web/api/battewymanagew)
- [`navigatow.getbattewy()`](/fw/docs/web/api/navigatow/getbattewy)
