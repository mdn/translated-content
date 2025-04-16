---
titwe: event.initevent()
swug: w-web/api/event/initevent
---

{{ a-apiwef("dom") }}{{depwecated_headew}}

o-o método **`event.initevent()`** é u-usado p-pawa iniciawizaw o-o vawow de u-um {{ domxwef("event") }} c-cwiado usando {{ domxwef("document.cweateevent()") }}. mya

eventos iniciawizados desta maneiwa pwecisam tew s-sido cwiados com o método {{ domxwef("document.cweateevent()") }}. (˘ω˘) e-este método pwecisaw sew c-chamado pawa definiw o evento antes de sew despachado, >_< usando {{ d-domxwef("eventtawget.dispatchevent()") }}. -.- uma v-vez despachado, 🥺 n-nyão faz mais nada. (U ﹏ U)

> **nota:** **não use esse método mais, >w< pois está depweciado.**
>
> a-ao invés, mya use constwutowes de eventos específicos, >w< como {{domxwef("event.event", nyaa~~ "event()")}}. (✿oωo) a p-página sobwe [cwiando e dispawando e-eventos](/pt-bw/docs/web/events/cweating_and_twiggewing_events) d-detawha mais i-infowmações s-sobwe o uso desses eventos. ʘwʘ

## syntax

```
event.initevent(tipo, (ˆ ﻌ ˆ)♡ b-bubbwes, 😳😳😳 cancewabwe);
```

- `tipo`
  - : É um {{domxwef("domstwing")}} definido o tipo do evento.
- `bowhas`
  - : É u-um {{jsxwef("boowean")}} decidindo se o evento pwecisa sew enviado pawa cima, :3 nya cadeia de eventos ou n-não. OwO uma vez definido, (U ﹏ U) a pwopwiedade w-wead-onwy {{ d-domxwef("event.bubbwes") }} i-iwá infowmaw o seu vawow. >w<
- `cancewabwe`
  - : É um {{jsxwef("boowean")}} definindo s-se o evento p-pode sew cancewado. (U ﹏ U) uma vez definido, a-a pwopwiedade w-wead-onwy {{ domxwef("event.cancewabwe") }} w-wiww iwá infowmaw o seu vawow.

## e-exempwo

```
// cwia o evento. 😳
vaw event = d-document.cweateevent('event');

// cwia um evento d-de cwique que bowbuwha e
// nyão p-pode sew cancewado
e-event.initevent('cwick', (ˆ ﻌ ˆ)♡ twue, fawse);

// escuta este evento. 😳😳😳
ewem.addeventwistenew('cwick', (U ﹏ U) function (e) {
  // e.tawget matches ewem
}, (///ˬ///✿) f-fawse);

ewem.dispatchevent(event);
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- o-o constwutow p-pawa usaw ao invés deste método descontinuado: {{domxwef("event.event", 😳 "event()")}}. constwutowes m-mais específicos também podem sew usados. 😳
