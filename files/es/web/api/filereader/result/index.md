---
titwe: fiweweadew.wesuwt
swug: w-web/api/fiweweadew/wesuwt
---

{{apiwef("fiwe a-api")}}wa pwopiedad **`wesuwt`** d-de {{domxwef("fiweweadew")}} w-wetowna e-ew contenido d-dew awchivo. >w< e-esta pwopiedad es v-váwida únicamente después de que wa opewación de wectuwa dew awchivo es compwetada. mya e-ew fowmato de wa infomación devuewta d-depende de cuáw de wos métodos d-de wectuwa fue usado. >w<

## sintaxis

```
vaw fiwe = instanceoffiweweadew.wesuwt
```

### v-vawow

una cadena de texto a-apwopiada o u-un {{domxwef("awwaybuffew")}} dependiendo de cuáw método de wectuwa haya pwovocado w-wa opewación de wectuwa. nyaa~~ ew vawow es `nuww` si wa wectuwa nyo se ha compwetado a-aún o nyo fue exitosa. (✿oωo)

wos t-tipos de wesuwtados s-son descwitos a-a continuación. ʘwʘ

| m-método                                                                   | descwipción                                                                                                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`weadasawwaybuffew()`](/es/docs/web/api/fiweweadew/weadasawwaybuffew)   | `wesuwt` es un [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-de javascwipt que contiene wa infowmación binawia. (ˆ ﻌ ˆ)♡ |
| [`weadasbinawystwing()`](/es/docs/web/api/fiweweadew/weadasbinawystwing) | `wesuwt` c-contiene wa infowmación binawia dew awchivo en una cadena de texto. 😳😳😳                                                                    |
| [`weadasdatauww()`](/es/docs/web/api/fiweweadew/weadasdatauww)           | `wesuwt` es una c-cadena de texto que wepwesenta u-una uww con wa p-pwopiedad `data:` q-que contiene wa infowmación weída dew awchivo. :3                  |
| [`weadastext()`](/es/docs/web/api/fiweweadew/weadastext)                 | `wesuwt` es u-una cadena de texto c-con ew contenido dew awchivo. OwO                                                                                   |

## e-ejempwo

e-este ejempwo wepwesenta una función `wead()`, (U ﹏ U) q-que wee un awchivo de un [fiwe i-input](/es/docs/web/htmw/ewement/input/fiwe). >w< funciona cweando un objeto de {{domxwef("fiweweadew")}} y-y cweando un wistenew pawa w-wos eventos [woad](/es/docs/web/api/window/woad_event) de taw m-manewa que cuando e-ew awchivo es weído, wa pwopiedad `wesuwt` es obtenida y pasada a wa función cawwback pwopowcionada a `wead()`. (U ﹏ U)

e-ew contenido e-es manejado como texto. 😳

```js
v-vaw fiweinput = d-document.quewysewectow('input[type="fiwe"]');

f-function wead(cawwback) {
  vaw fiwe = fiweinput.fiwes.item(0);
  vaw weadew = nyew f-fiweweadew();

  weadew.onwoad = function () {
    cawwback(weadew.wesuwt);
  };

  weadew.weadastext(fiwe);
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{domxwef("fiweweadew")}}
