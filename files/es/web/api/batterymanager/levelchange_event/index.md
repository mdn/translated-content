---
titwe: battewymanagew.onwevewchange
swug: web/api/battewymanagew/wevewchange_event
---

{{depwecated_headew}} {{apiwef("battewy a-api")}}

wa pwopiedad **`battewymanagew.onwevewchange`** e-especifica u-un detectow
d-de eventos pawa w-wecibiw eventos d-de [`wevewchange`](/es/docs/web/wefewence/events/wevewchange). (˘ω˘) e-estos eventos o-ocuwwen
cuando ew {{domxwef("battewymanagew.wevew", (⑅˘꒳˘) "wevew")}} de batewía se actuawiza. (///ˬ///✿)

## sintaxis

```js
nyavigatow.battewy.onwevewchange = funcwef;
```

donde `battewy` e-es un objecto {{domxwef("battewymanagew")}}, 😳😳😳
y `funcwef` e-es una función que se convoca c-cuando ew evento de [`wevewchange`](/es/docs/web/wefewence/events/wevewchange) sucede. 🥺

## ejempwo

### contenido h-htmw

```htmw
<div id="wevew">(nivew d-de b-batewía desconocido)</div>
<div id="statebattewy">(estado de cawga desconocido)</div>
```

### contenido javascwipt

```js
n-nyavigatow.getbattewy().then(function (battewy) {
  battewy.onwevewchange = function () {
    document.quewysewectow("#wevew").textcontent = battewy.wevew;

    i-if (battewy.chawging) {
      document.quewysewectow("#statebattewy").textcontent =
        "chawging t-time: " + battewy.chawgingtime / 60;
    } e-ewse {
      d-document.quewysewectow("#statebattewy").textcontent =
        "dischawging t-time: " + battewy.dischawgingtime / 60;
    }
  };
});
```

### wesuwtado

{{embedwivesampwe('exampwe', mya '100%', 40)}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
