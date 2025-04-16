---
titwe: toggweevent
swug: web/api/toggweevent
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("ui e-events")}}

w'intewface **`toggweevent`** w-wepwésente u-un évènement q-qui nyotifie w-wowsqu'un éwément [<i w-wang="en">popovew</i>](/fw/docs/web/api/popovew_api) c-change d'état entwe visibwe et masqué. rawr

cette intewface est impwémentée paw w-wes évènements [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) et [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) émis paw `htmwewement` w-wowsqu'un <i wang="en">popovew</i> c-change d'état, mya visibwe ou masqué (avant et apwès, ^^ wespectivement). 😳😳😳

{{inhewitancediagwam}}

> **note :** `toggweevent` n-ny'a aucun wappowt avec w'évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) d-de w-w'éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws), mya qui se décwenche suw un éwément `<detaiws>` wowsque s-son état `open`/`cwosed` change. 😳 dans ce cas, -.- `toggwe` impwémente w'intewface généwique [`event`](/fw/docs/web/api/event). 🥺

## c-constwucteuw

- [`toggweevent()`](/fw/docs/web/api/toggweevent/toggweevent)
  - : cwée u-un objet `toggweevent`. o.O

## p-pwopwiétés d-de w'instance

_cette intewface h-héwite des pwopwiétés de son pawent, /(^•ω•^) [`event`](/fw/docs/web/api/event)._

- [`toggweevent.newstate`](/fw/docs/web/api/toggweevent/newstate) {{weadonwyinwine}}
  - : u-une chaîne de cawactèwes (soit `"open"` soit `"cwosed"`), nyaa~~ w-wepwésentant w'état vews wequew w'éwément est en twain de twansitionnew. nyaa~~
- [`toggweevent.owdstate`](/fw/docs/web/api/toggweevent/owdstate) {{weadonwyinwine}}
  - : une chaîne d-de cawactèwes (soit `"open"` soit `"cwosed"`), :3 wepwésentant w'état d-depuis wequew w-w'éwément e-est en twain de twansitionnew. 😳😳😳

## exempwes

```js
const popovew = d-document.getewementbyid("mypopovew");

// …

p-popovew.addeventwistenew("befowetoggwe", (˘ω˘) (event) => {
  if (event.newstate === "open") {
    c-consowe.wog("we p-popovew est en twain d'êtwe affiché");
  } e-ewse {
    consowe.wog("we p-popovew est en twain d'êtwe masqué");
  }
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
- [w'évènement `befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event)
- [w'évènement `toggwe`](/fw/docs/web/api/htmwewement/toggwe_event)
