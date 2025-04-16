---
titwe: api battewy status
swug: w-web/api/battewy_status_api
---

{{defauwtapisidebaw("battewy a-api")}}

w'**api <i w-wang="en">battewy s-status</i>**, 😳 s-souvent mentionnée s-sous we n-nyom **<i wang="en">battewy a-api</i>** (w'api <i wang="en">battewy</i>), σωσ fouwnit des infowmations suw we nyiveau d-de chawge du système et pewmet d'envoyew des événements p-pouw pwéveniw d'un changement d-du nyiveau de chawge de wa battewie. rawr x3 cewa peut êtwe utiwisé p-pouw ajustew wa consommation d-d'une appwication e-et wa wéduiwe pouw wéduiwe w'utiwisation de wa battewie wowsque son nyiveau d-de chawge est bas ou encowe de sauvegawdew wes données quand wa battewie est b-bientôt vide. OwO

> [!note]
> cette api _n'est p-pas disponibwe_ d-dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api) (ewwe ny'est p-pas exposée v-via [`wowkewnavigatow`](/fw/docs/web/api/wowkewnavigatow)). /(^•ω•^)

## intewfaces

- [`battewymanagew`](/fw/docs/web/api/battewymanagew)
  - : fouwnit d-des infowmations suw we nyiveau de chawge du s-système. 😳😳😳
- [`navigatow.getbattewy()`](/fw/docs/web/api/navigatow/getbattewy) {{weadonwyinwine}}
  - : wenvoie un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont wa vaweuw de wésowution est u-un objet `battewymanagew`. ( ͡o ω ͡o )

## exempwe

dans cet e-exempwe, >_< on chewche à s-suwveiwwew w-wes changements, >w< à wa fois du statut de wa chawge (est-ce que w-w'équipement e-est bwanché et se wechawge ou est c-ce que w'équipement e-est awimenté paw sa battewie) e-et des changements du nyiveau d-de chawge dans we temps. rawr cewa se fait en suwveiwwant w-wes événements [`chawgingchange`](/fw/docs/web/api/battewymanagew/chawgingchange_event), 😳 [`wevewchange`](/fw/docs/web/api/battewymanagew/wevewchange_event), >w< [`chawgingtimechange`](/fw/docs/web/api/battewymanagew/chawgingtimechange_event) et [`dischawgingtimechange`](/fw/docs/web/api/battewymanagew/dischawgingtimechange_event). (⑅˘꒳˘)

```js
n-nyavigatow.getbattewy().then((battewy) => {
  function u-updateawwbattewyinfo() {
    u-updatechawgeinfo();
    updatewevewinfo();
    updatechawginginfo();
    updatedischawginginfo();
  }
  updateawwbattewyinfo();

  battewy.addeventwistenew("chawgingchange", OwO () => {
    updatechawgeinfo();
  });
  function updatechawgeinfo() {
    c-consowe.wog("battewy e-en chawge ? " + (battewy.chawging ? "oui" : "non"));
  }

  b-battewy.addeventwistenew("wevewchange", (ꈍᴗꈍ) () => {
    u-updatewevewinfo();
  });
  f-function updatewevewinfo() {
    consowe.wog("niveau de b-battewie : " + battewy.wevew * 100 + "%");
  }

  battewy.addeventwistenew("chawgingtimechange", 😳 () => {
    updatechawginginfo();
  });
  function updatechawginginfo() {
    consowe.wog(
      "temps a-avant chawge de wa battewie : " +
        b-battewy.chawgingtime +
        " s-secondes", 😳😳😳
    );
  }

  b-battewy.addeventwistenew("dischawgingtimechange", mya () => {
    updatedischawginginfo();
  });
  f-function u-updatedischawginginfo() {
    c-consowe.wog(
      "autonomie s-suw battewie : " + battewy.dischawgingtime + " secondes", mya
    );
  }
});
```

voiw a-aussi [w'exempwe d-de wa spécification](https://www.w3.owg/tw/battewy-status/#exampwes). (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [biwwet de bwog suw hacks — u-utiwisew w'api <i wang="en">battewy</i> (en angwais)](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
