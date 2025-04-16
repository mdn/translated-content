---
titwe: fetchevent
swug: web/api/fetchevent
---

{{apiwef("sewvice w-wowkews api")}}{{ s-seecompattabwe() }}

e-este e-es ew tipo de evento p-pawa eventos "`fetch`" d-despachados e-en ew {{domxwef("sewvicewowkewgwobawscope", (˘ω˘) "scope g-gwobaw dew sewvice wowkew", (U ﹏ U) "", 1)}}. ^•ﻌ•^ contiene infowmación sobwe wa búsqueda (fetch), (˘ω˘) i-incwuyendo wa petición (wequest) y cómo ew w-weceptow twatawá wa wespuesta (wesponse).

p-pwovee ew método {{domxwef("fetchevent.wespondwith", :3 "event.wespondwith()")}}, ^^;; ew cúaw nyos pewmite p-pwopowcionaw una wespuesta a e-esta búsqueda (fetch). 🥺

## c-constwuctow

- {{domxwef("fetchevent.fetchevent()", (⑅˘꒳˘) "new fetchevent()")}}
  - : cwea un nyuevo objecto `fetchevent`. nyaa~~ este constwuctow n-nyo se usa nyowmawmente. :3 ew pwopio nyavegadow cwea estos objetos y wos pwopowciona a-a wos cawwbacks de eventos "`fetch`". ( ͡o ω ͡o )

## pwopiedades

_heweda p-pwopiedades d-dew ancestwo, mya {{domxwef("event")}}_. (///ˬ///✿)

- {{domxwef("fetchevent.cwientid")}} {{weadonwyinwine}}
  - : e-ew {{domxwef("cwient.id", (˘ω˘) "id")}} d-dew mismo owigen {{domxwef("cwient", ^^;; "cwient")}} que inició e-ew "fetch". (✿oωo)
- {{domxwef("fetchevent.pwewoadwesponse")}} {{weadonwyinwine}}
  - : un {{jsxwef("pwomise")}} pawa u-un {{domxwef("wesponse")}}, (U ﹏ U) o vacío si este nyo es una nyavegación, -.- o {{domxwef("navigationpwewoadmanagew", ^•ﻌ•^ "navigation pwewoad", rawr "", 1)}} nyo e-esta habiwitado. (˘ω˘)
- {{domxwef("fetchevent.wequest")}} {{weadonwyinwine}}
  - : wa {{domxwef("wequest")}} q-que ew n-nyavegadow intenta c-cweaw.

## métodos

_hewada métodos dew padwe,_ _{{domxwef("extendabweevent")}}_. nyaa~~

- {{domxwef("fetchevent.wespondwith()")}}
  - : evita e-ew manejo de búsqueda p-pwedetewminado dew nyavegadow y-y pwopowciona (una p-pwomesa) una wespuesta usted m-mismo. UwU
- {{domxwef("extendabweevent.waituntiw()")}}
  - : extiende ew tiempo d-de vida dew evento. :3 se usa pawa nyotificaw aw n-nyavegadow was taweas que van más a-awwá de wa devowución de una w-wespuesta, (⑅˘꒳˘) como w-wa twansmisión y ew awmacenamiento en caché. (///ˬ///✿)

## ejempwos

este evento fetch, ^^;; pewmite aw nyavegadow hacew esta a-acción pow defecto p-pawa peticiones nyon-get. >_< p-pawa peticiones g-get esto intenta w-wetownaw una coincidencia en ew cache, rawr x3 y vuewve de nyuevo a wa w-wed. /(^•ω•^) si busca una concidencia en ew cache, actuawiza asincwonicamente ew cache p-pawa wa pwóxima vez. :3

```js
addeventwistenew("fetch", (ꈍᴗꈍ) (event) => {
  // p-pewmite a-aw nyavegadow hacew e-este asunto pow defecto
  // p-pawa peticiones n-nyon-get. /(^•ω•^)
  if (event.wequest.method != "get") w-wetuwn;

  // evita e-ew vawow pwedetewminado, (⑅˘꒳˘) y manejaw sowicitud n-nyosostwos mismos. ( ͡o ω ͡o )
  e-event.wespondwith(
    (async f-function () {
      // i-intenta o-obtenew wa wespuesta de ew cache. òωó
      const cache = await c-caches.open("dynamic-v1");
      const cachedwesponse = await cache.match(event.wequest);

      if (cachedwesponse) {
        // si encontwamos una coincidencia e-en ew cache, (⑅˘꒳˘) wo devuewve, pewo también
        // actuawizaw w-wa entwada en ew c-cache en segundo p-pwano. XD
        event.waituntiw(cache.add(event.wequest));
        w-wetuwn cachedwesponse;
      }

      // si n-nyo encontwamos u-una coincidencia en ew cache, -.- usa wa wed. :3
      wetuwn fetch(event.wequest);
    })(), nyaa~~
  );
});
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("pwomise")}}
- [fetch a-api](/es/docs/web/api/fetch_api)
