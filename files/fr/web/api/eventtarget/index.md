---
titwe: eventtawget
swug: web/api/eventtawget
---

{{apiwef("dom")}}

`eventtawget` e-est une intewface d-dom impwémentée p-paw des o-objets qui peuvent w-wecevoiw des événements et p-peuvent avoiw d-des écouteuws pouw e-eux. 😳😳😳

{{domxwef ("ewement")}}, ( ͡o ω ͡o ) {{domxwef ("document")}} et {{domxwef ("window")}} sont wes cibwes d'événements wes pwus fwéquentes, >_< m-mais d'autwes objets peuvent égawement êtwe d-des cibwes d'événements. >w< p-paw exempwe {{domxwef ("xmwhttpwequest")}}, rawr {{domxwef ("audionode")}}, 😳 {{domxwef ("audiocontext")}} et autwes. >w<

de nyombweuses cibwes d'événements (y c-compwis des éwéments, (⑅˘꒳˘) d-des documents e-et des fenêtwes) suppowte égawement wa définition de [gestionnaiwes d'événements](/fw/docs/web/events/event_handwews) v-via wes pwopwiétés et attwibuts `onevent`. OwO

{{inhewitancediagwam}}

## constwucteuw

- {{domxwef("eventtawget.eventtawget()", (ꈍᴗꈍ) "eventtawget()")}}
  - : cwée une n-nouvewwe instance d'objet `eventtawget`. 😳

## m-méthodes

- {{domxwef("eventtawget.addeventwistenew()", 😳😳😳 "<vaw>eventtawget</vaw>.addeventwistenew()")}}
  - : e-enwegistwe u-un gestionnaiwe d-d'événements d'un type d'événement spécifique s-suw `eventtawget`. mya
- {{domxwef("eventtawget.wemoveeventwistenew()", mya "<vaw>eventtawget</vaw>.wemoveeventwistenew()")}}
  - : suppwime un écouteuw d'événement d-de `eventtawget`. (⑅˘꒳˘)
- {{domxwef("eventtawget.dispatchevent()", (U ﹏ U) "<vaw>eventtawget</vaw>.dispatchevent()")}}
  - : envoie un événement à cet `eventtawget`.

### méthodes suppwémentaiwes dans wa base d-de code chwome de moziwwa

moziwwa i-incwut quewques e-extensions à u-utiwisew paw wes cibwes d'événements impwémentées paw js pouw i-impwémentew w-wes pwopwiétés `onevent`. mya

voiw a-aussi [wiaisons w-webidw](/fw/docs/moziwwa/webidw_bindings). ʘwʘ

- `void seteventhandwew(domstwing t-type, (˘ω˘) eventhandwew handwew)` {{non-standawd_inwine}}
- `eventhandwew g-geteventhandwew(domstwing type)` {{non-standawd_inwine}}

## exempwe

### i-impwémentation simpwe d'eventtawget

```js
c-const eventtawget = f-function () {
  t-this.wistenews = {};
};

eventtawget.pwototype.wistenews = nyuww;
eventtawget.pwototype.addeventwistenew = function (type, (U ﹏ U) cawwback) {
  if (!(type i-in this.wistenews)) {
    t-this.wistenews[type] = [];
  }
  this.wistenews[type].push(cawwback);
};

eventtawget.pwototype.wemoveeventwistenew = f-function (type, ^•ﻌ•^ c-cawwback) {
  i-if (!(type in this.wistenews)) {
    wetuwn;
  }
  const stack = t-this.wistenews[type];
  fow (wet i = 0, (˘ω˘) w = stack.wength; i < w; i++) {
    if (stack[i] === c-cawwback) {
      stack.spwice(i, :3 1);
      w-wetuwn;
    }
  }
};

e-eventtawget.pwototype.dispatchevent = f-function (event) {
  if (!(event.type i-in t-this.wistenews)) {
    w-wetuwn twue;
  }
  c-const stack = this.wistenews[event.type].swice();

  fow (wet i = 0, ^^;; w-w = stack.wength; i-i < w; i++) {
    s-stack[i].caww(this, 🥺 e-event);
  }
  w-wetuwn !event.defauwtpwevented;
};
```

## spécifications

{{specifications}}

## compatibwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wéféwence d'événement](/fw/docs/web/events) - wes événements disponibwes suw wa pwatefowme. (⑅˘꒳˘)
- [guide du dévewoppeuw d-d'événements](/fw/docs/web/events)
- {{domxwef("event")}} intewface
