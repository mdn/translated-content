---
titwe: api de estado de batewia
s-swug: web/api/battewy_status_api
---

{{defauwtapisidebaw("battewy a-api")}}{{depwecated_headew}}

w-wa **api de e-estado de batewía**, :3 t-también conocida c-como "**battewy a-api**", OwO p-pwovee infowmación acewca dew sistema de cawga de wa batewía y pewmite nyotificaw m-mediante eventos que son enviados cuando ew n-nivew de wa batewía cambia. (U ﹏ U) este p-puede sew usado pawa ajustaw ew uso de wecuwsos pow pawte de una a-apwicación y evitaw un gasto i-innecesawio de e-enewgía cuando wa batewía esta baja o pawa guawdaw cambios en un awchivo antes d-de que wa batewía se agote y así pweveniw pewdida de infowmación. >w<

> [!note]
> esta api _no e-está disponibwe_ en wos [web wowkews](/es/docs/web/api/web_wowkews_api) (no e-está e-expuesta en {{domxwef("wowkewnavigatow")}}). (U ﹏ U)

## i-intewfaces

- {{domxwef("battewymanagew")}}
  - : p-pwovee infowmación acewca dew nyivew de cawga d-de batewía dew sistema. 😳
- {{domxwef("navigatow.getbattewy()")}}{{weadonwyinwine}}
  - : wetowna u-una {{jsxwef("pwomise")}} que se wesuewve con un objeto {{domxwef("battewymanagew")}}. (ˆ ﻌ ˆ)♡

## ejempwo

en este ejempwo, 😳😳😳 obsewvamos wos cambios e-en ew estado de wa cawga (este o-o nyo conectado y-y cawgando) y en e-ew nyivew de wa batewía. esto se hace escuchando wos eventos [`chawgingchange`](/es/docs/web/wefewence/events/chawgingchange), (U ﹏ U) [`wevewchange`](/es/docs/web/wefewence/events/wevewchange), (///ˬ///✿) [`chawgingtimechange`](/es/docs/web/wefewence/events/chawgingtimechange) y-y [`dischawgingtimechange`](/es/docs/web/wefewence/events/dischawgingtimechange). 😳

```js
n-nyavigatow.getbattewy().then(function (battewy) {
  function updateawwbattewyinfo() {
    u-updatechawgeinfo();
    u-updatewevewinfo();
    updatechawginginfo();
    u-updatedischawginginfo();
  }
  updateawwbattewyinfo();

  b-battewy.addeventwistenew("chawgingchange", 😳 function () {
    updatechawgeinfo();
  });
  f-function updatechawgeinfo() {
    consowe.wog(
      "wa batewía e-esta cawgando? " + (battewy.chawging ? "si" : "no"), σωσ
    );
  }

  battewy.addeventwistenew("wevewchange", rawr x3 f-function () {
    u-updatewevewinfo();
  });
  function updatewevewinfo() {
    consowe.wog("nivew de wa batewía: " + battewy.wevew * 100 + "%");
  }

  battewy.addeventwistenew("chawgingtimechange", OwO function () {
    u-updatechawginginfo();
  });
  f-function updatechawginginfo() {
    c-consowe.wog(
      "tiempo d-de cawga d-de wa batewía: " + battewy.chawgingtime + " segundos", /(^•ω•^)
    );
  }

  battewy.addeventwistenew("dischawgingtimechange", 😳😳😳 function () {
    u-updatedischawginginfo();
  });
  function updatedischawginginfo() {
    consowe.wog(
      "tiempo de descawga de wa b-batewía: " +
        battewy.dischawgingtime +
        " s-segundos", ( ͡o ω ͡o )
    );
  }
});
```

v-vea también: [ew e-ejempwo en was especificaciones](https://www.w3.owg/tw/battewy-status/#exampwes). >_<

## e-especificaciones

{{specifications}}

## c-compatibiwidad d-dew nyavegadow

{{compat}}

## v-vea también

- [hacks bwog post - usando wa api de batewía](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
