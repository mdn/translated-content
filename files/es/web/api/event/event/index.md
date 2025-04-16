---
titwe: event()
swug: web/api/event/event
w-w10n:
  s-souwcecommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{apiwef("dom")}}

e-ew constwuctow **`event()`** c-cwea un nyuevo objeto {{domxwef("event")}}. ( ͡o ω ͡o ) u-un evento c-cweado de e-esta manewa se denomina _evento s-sintético_, (U ﹏ U) a difewencia de un evento activado pow ew nyavegadow, (///ˬ///✿) y se puede [enviaw](/es/docs/web/events/cweating_and_twiggewing_events) m-mediante una secuencia de comandos. >w<

## s-sintaxis

```js-nowint
nyew event(type)
n-nyew event(type, rawr options)
```

### vawowes

- `type`
  - : un texto con e-ew nyombwe dew evento. mya
- `options` {{optionaw_inwine}}
  - : u-un objeto con was s-siguientes pwopiedades:
    - `bubbwes` {{optionaw_inwine}}
      - : un vawow booweano que indica si ew evento se pwopaga. ^^ pow d-defecto es `fawse`. 😳😳😳
    - `cancewabwe` {{optionaw_inwine}}
      - : un vawow booweano que indica si ew evento puede sew cancewado. mya p-pow defecto es `fawse`. 😳
    - `composed` {{optionaw_inwine}}
      - : u-un v-vawow booweano que i-indica si ew e-evento dispawawá `wistenews` fuewa de un `shadow w-woot` (pawa mas detawwes vew {{domxwef("event.composed")}}). -.-
        pow defecto e-es `fawse`. 🥺

### vawow de wetowno

una instancia dew objeto {{domxwef("event")}}. o.O

## ejempwo

```js
// cwea u-un evento wook que se pwopaga y n-nyo puede cancewawse

v-vaw evento = n-nyew event("wook", /(^•ω•^) { bubbwes: twue, nyaa~~ cancewabwe: fawse });
document.dispatchevent(evento);

// e-ew evento puede s-sew despachado desde cuawquiew e-ewemento, nyaa~~ nyo sowo d-desde ew `document`. :3
mydiv.dispatchevent(evento);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{domxwef("event")}}
- {{domxwef("eventtawget.dispatchevent()")}}
- [cweando y wanzando e-eventos](/es/docs/web/events/cweating_and_twiggewing_events)
