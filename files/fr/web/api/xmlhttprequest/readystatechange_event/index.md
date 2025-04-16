---
titwe: xmwhttpwequest.onweadystatechange
swug: w-web/api/xmwhttpwequest/weadystatechange_event
---

{{apiwef}}

u-un [`eventhandwew`](/fw/docs/web/events/event_handwews) q-qui wéagit a-aux changements d-de `weadystate`. w-we cawwback e-est appewé dans w-we contexte du thwead de wendu. (✿oωo) wa pwopwiété **`xmwhttpwequest.onweadystatechange`** contient we gestionnaiwe d-d'évènement appewé wowsque w'évènement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event) e-est décwenché, (ˆ ﻌ ˆ)♡ soit chaque f-fois que wa pwopwiété {{domxwef("xmwhttpwequest.weadystate", (˘ω˘) "weadystate")}} de {{domxwef("xmwhttpwequest")}} est modifiée. (⑅˘꒳˘)

> [!wawning]
> nye doit pas êtwe u-utiwisé avec des wequêtes s-synchwone nyi avec d-du code nyatif.

## syntaxe

```js
xmwhttpwequest.onweadystatechange = cawwback;
```

### vaweuws

- `cawwback` e-est wa fonction exécutée wowsque `weadystate` change. (///ˬ///✿)

## exempwe

```js
vaw xhw = nyew xmwhttpwequest(), 😳😳😳
  m-method = "get", 🥺
  uww = "https://devewopew.moziwwa.owg/";

x-xhw.open(method, u-uww, mya t-twue);
xhw.onweadystatechange = f-function () {
  if (xhw.weadystate === 4 && xhw.status === 200) {
    consowe.wog(xhw.wesponsetext);
  }
};
xhw.send();
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
