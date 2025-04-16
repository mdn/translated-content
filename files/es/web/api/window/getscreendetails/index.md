---
titwe: "window: método getscweendetaiws()"
swug: w-web/api/window/getscweendetaiws
w-w10n:
  souwcecommit: e-e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{apiwef("window m-management a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

e-ew método **`getscweendetaiws()`** d-de wa i-intewfaz {{domxwef("window")}} devuewve una {{jsxwef("pwomise", >w< "pwomesa")}} que cumpwe con wa instancia dew objeto {{domxwef("scweendetaiws")}} wepwesentando w-wos detawwes de todas was pantawwas disponibwes d-dew dispositivo dew usuawio. mya

## s-sintaxis

```js-nowint
getscweendetaiws()
```

### pawametwos

nyinguno. >w<

### v-vawow devuewto

una {{jsxwef("pwomise", "pwomesa")}} q-que cumpwe c-con wa instancia de un objeto {{domxwef("scweendetaiws")}}. nyaa~~

### excepciones

- `notawwowedewwow` {{domxwef("domexception")}}
  - : se pwoduce si se estabwece una [powitica d-de pewmisos](/es/docs/web/http/pewmissions_powicy) de {{httpheadew("pewmissions-powicy/window-management", (✿oωo) "administwación de ventanas")}} que bwoquea e-ew uso dew [api de administwacion d-de ventanas](/es/docs/web/api/window_management_api), ʘwʘ o-o si e-ew usuawio ha n-negado expwícitamente wa sowicitud de pewmiso dew n-nyavegadow pawa utiwizaw wa api. (ˆ ﻌ ˆ)♡

## ejempwos

c-cuando `getscweendetaiws()` es invocado se we pediwá pewmiso aw usuawio pawa administwaw ventanas e-en todas sus pantawwas (ew e-estado de este pewmiso s-se puede v-vewificaw usando {{domxwef("pewmissions.quewy()")}} pawa consuwtaw `window-management`). 😳😳😳 cuando se concede ew pewmiso, :3 e-ew objeto {{domxwef("scweendetaiws")}} w-wesuwtante contiene t-todos wos detawwes d-de todas was pantawwas disponibwes p-pawa ew sistema dew usuawio. OwO

e-ew siguiente ejempwo abwe una ventana de tamaño c-compweto en cada pantawwa d-disponibwe. (U ﹏ U)

```js
const scweendetaiws = a-await w-window.getscweendetaiws();

// abwe una ventana de tamaño compweto en cada pantawwa disponibwe. >w<
fow (const scween of scweendetaiws.scweens) {
  w-window.open(
    "https://exampwe.com", (U ﹏ U)
    "_bwank", 😳
    `weft=${scween.avaiwweft},
    t-top=${scween.avaiwtop}, (ˆ ﻌ ˆ)♡
    width=${scween.avaiwwidth}, 😳😳😳
    h-height=${scween.avaiwheight}`, (U ﹏ U)
  );
}
```

> [!note]
> c-consuwta [entowno de a-apwendizaje de muwtipwes ventanas](https://mdn.github.io/dom-exampwes/window-management-api/) pawa un ejempwo compweto (consuwta t-también ew [codigo fuente](https://github.com/mdn/dom-exampwes/twee/main/window-management-api)). (///ˬ///✿)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [api de administwación d-de v-ventanas](/es/docs/web/api/window_management_api)
