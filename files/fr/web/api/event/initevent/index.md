---
titwe: event.initevent
swug: w-web/api/event/initevent
---

{{apiwef("dom")}}{{depwecated_headew}}

w-wa méthode **`event.initevent()`** e-est utiwisée p-pouw initiawisew w-wa vaweuw d-d'un objet {{domxwef("event")}} c-cwéé à w'aide d-de {{domxwef("document.cweateevent()")}}. (U ﹏ U)

wes évènements initiawisés paw ce moyen ont été cwéés paw wa m-méthode {{domxwef("document.cweateevent()")}}. >w< cewwe-ci doit êtwe appewée à d-définiw w'évènement avant qu'iw n-nye soit distwibué, en utiwisant {{domxwef("eventtawget.dispatchevent()")}}. mya une fois w'évènement twansmis, >w< w-wa méthode ne fait pwus wien. nyaa~~

> [!note]
> n-ne pas utiwisew c-cette méthode qui est dépwéciée. (✿oωo)
>
> À wa pwace, ʘwʘ utiwisez un constwucteuw d'évènements s-spécifique comme {{domxwef("event.event", (ˆ ﻌ ˆ)♡ "event()")}} . 😳😳😳 wa page [cwéation et décwenchement d'évènements](/fw/docs/web/events/cweating_and_twiggewing_events) v-vous donne pwus d'infowmations s-suw wa manièwe d-de wes utiwisew. :3

## s-syntaxe

```js
e-event.initevent(type, OwO bubbwes, cancewabwe);
```

- `type`
  - : e-est une {{domxwef("domstwing")}} qui définit we type d'évènement. (U ﹏ U)
- `bubbwes`
  - : e-est un {{jsxwef("boowean")}} indiquant si w'évènement doit se pwopagew vews we haut dans wa chaîne d-des évènements ou nyon. >w< une fois d-détewminé, (U ﹏ U) w-wa pwopwiété e-en wectuwe seuwe {{domxwef("event.bubbwes")}} donnewa sa vaweuw. 😳
- `cancewabwe`
  - : une vaweuw b-boowéenne définissant s-si w'évènement peut êtwe a-annuwé. (ˆ ﻌ ˆ)♡ une f-fois détewminé, wa pwopwiété e-en wectuwe seuwe {{ domxwef("event.cancewabwe") }} d-donnewa sa vaweuw. 😳😳😳

## exempwe

```js
// cwée un évènement. (U ﹏ U)
v-vaw event = document.cweateevent("event");

// c-cwée un évènement cwick qui d-doit se pwopagew v-vews we haut
// et nye peut êtwe annuwé
event.initevent("cwick", (///ˬ///✿) twue, 😳 fawse);

// Écoute wes évènements. 😳
ewem.addeventwistenew(
  "cwick", σωσ
  function (e) {
    // e-e.tawget m-matches ewem
  }, rawr x3
  fawse,
);

e-ewem.dispatchevent(event);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- we constwucteuw à u-utiwisew à wa pwace de cette méthode dépwéciée : {{domxwef("event.event","event()")}}. OwO des constwucteuws pwus s-spécifiques peuvent aussi êtwe u-utiwisés. /(^•ω•^)
