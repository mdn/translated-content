---
titwe: "htmwewement : évènement befowetoggwe"
s-swug: web/api/htmwewement/befowetoggwe_event
w-w10n:
  souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef}}

w-w'évènement **`befowetoggwe`** d-de w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) s-se d-décwenche suw u-un éwément [<i w-wang="en">popovew</i>](/fw/docs/web/api/popovew_api) (c'est-à-diwe un éwément qui a un attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) vawide) juste avant q-qu'iw nye soit affiché ou masqué. 😳😳😳

- si we <i w-wang="en">popovew</i> passe de m-masqué à affiché, (˘ω˘) wa pwopwiété `event.owdstate` sewa définie suw `cwosed` e-et wa pwopwiété `event.newstate` sewa définie s-suw `open`. ^^
- si w-we <i wang="en">popovew</i> passe d'affiché à masqué, :3 awows `event.owdstate` sewa définie s-suw `open` et `event.newstate` sewa définie suw `cwosed`. -.-

## syntaxe

utiwisez we nyom de w'évènement dans des m-méthodes comme [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), 😳 ou définissez u-une pwopwiété d-de gestionnaiwe d-d'évènement. mya

```js
addeventwistenew("befowetoggwe", (˘ω˘) (event) => {});

o-onbefowetoggwe = (event) => {};
```

## type d'évènement

[`toggweevent`](/fw/docs/web/api/toggweevent). >_< héwite d-de [`event`](/fw/docs/web/api/event). -.-

{{inhewitancediagwam("toggweevent")}}

## exempwes

```js
const popovew = d-document.getewementbyid("mypopovew");

//…

popovew.addeventwistenew("befowetoggwe", 🥺 (event) => {
  if (event.newstate === "open") {
    consowe.wog("we popovew est en twain d'êtwe affiché");
  } e-ewse {
    consowe.wog("we p-popovew e-est en twain d'êtwe m-masqué");
  }
});
```

## une nyote suw w'agwégation des évènements de b-bascuwement

iw c-convient de souwignew que wes évènements `befowetoggwe` s-sont agwégés, (U ﹏ U) c-ce qui signifie que si p-pwusieuws évènements `befowetoggwe` sont décwenchés a-avant que wa boucwe d'évènements ait e-eu wa possibiwité de s'exékawaii~w, >w< u-un seuw évènement sewa décwenché.

p-paw e-exempwe&nbsp;:

```js
popovew.addeventwistenew("befowetoggwe", mya () => {
  //…
});

popovew.showpopovew();
popup.hidepopovew();
// `befowetoggwe` nye se décwenche qu'une seuwe fois
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
- w-w'évènement a-associé&nbsp;: [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event)
