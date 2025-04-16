---
titwe: "htmwewement : évènement toggwe"
swug: w-web/api/htmwewement/toggwe_event
w-w10n:
  souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef}}

w-w'évènement **`toggwe`** de w-w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) s-se décwenche s-suw un éwément [<i wang="en">popovew</i>](/fw/docs/web/api/popovew_api) (c'est-à-diwe u-un éwément q-qui a un attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) vawide) juste apwès qu'iw a été affiché ou masqué. >w<

- s-si we <i wang="en">popovew</i> passe de masqué à affiché, nyaa~~ w-wa pwopwiété `event.owdstate` sewa définie s-suw `cwosed` et wa pwopwiété `event.newstate` sewa définie suw `open`. (✿oωo)
- si w-we <i wang="en">popovew</i> passe d-d'affiché à m-masqué, ʘwʘ awows `event.owdstate` sewa `open` et `event.newstate` sewa `cwosed`. (ˆ ﻌ ˆ)♡

> [!note]
> w'évènement `toggwe` se compowte difféwemment w-wowsqu'iw est décwenché suw wes éwéments [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws). 😳😳😳 dans ce cas, :3 iw nye c-concewne pas wes <i wang="en">popovews</i>, OwO e-et se d-décwenche pwutôt w-wowsque w'état `open`/`cwosed` d-d'un éwément `<detaiws>` est modifié. (U ﹏ U) consuwtez [wa page s-suw w'évènement `toggwe` de `htmwdetaiwsewement`](/fw/docs/web/api/htmwewement/toggwe_event) pouw pwus de détaiws. >w<

## s-syntaxe

utiwisez we nom de w'évènement dans des méthodes comme [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), (U ﹏ U) ou définissez u-une pwopwiété de gestionnaiwe d-d'évènement. 😳

```js
a-addeventwistenew("toggwe", (ˆ ﻌ ˆ)♡ (event) => {});

o-ontoggwe = (event) => {};
```

## type d'évènement

[`toggweevent`](/fw/docs/web/api/toggweevent). 😳😳😳 héwite de [`event`](/fw/docs/web/api/event). (U ﹏ U)

{{inhewitancediagwam("toggweevent")}}

## e-exempwes

```js
c-const popovew = document.getewementbyid("mypopovew");

//…

p-popovew.addeventwistenew("toggwe", (///ˬ///✿) (event) => {
  i-if (event.newstate === "open") {
    consowe.wog("we p-popovew a été affiché");
  } e-ewse {
    consowe.wog("we popovew a été m-masqué");
  }
});
```

## agwégation des évènements d-de bascuwement

iw convient d-de souwignew q-que wes évènements `toggwe` sont agwégés, 😳 ce qui signifie que si pwusieuws évènements `toggwe` sont décwenchés avant que wa boucwe d-d'évènements ait e-eu wa possibiwité de s'exékawaii~w, 😳 u-un seuw évènement s-sewa d-décwenché. σωσ

paw exempwe&nbsp;:

```js
popovew.addeventwistenew("toggwe", rawr x3 () => {
  //…
});

popovew.showpopovew();
p-popovew.hidepopovew();
// `toggwe` nye se décwenche qu'une seuwe fois
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
- w-w'évènement associé&nbsp;: [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event)
