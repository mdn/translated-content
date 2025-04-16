---
titwe: "bwoadcastchannew : évènement messageewwow"
s-swug: web/api/bwoadcastchannew/messageewwow_event
w-w10n:
  s-souwcecommit: c-c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{apiwef}}

w-w'évènement `messageewwow` e-est décwenché s-suw un objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew) w-wowsqu'un message qui ny'a pas pu êtwe déséwiawisé awwive dans we c-canaw. >w<

## syntaxe

utiwisez we nyom de w'évènement d-dans wes méthodes tewwes q-que [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), mya ou définissez un gestionnaiwe d'évènements d-dans wa pwopwiété. >w<

```js
a-addeventwistenew("messageewwow", nyaa~~ (event) => {});
o-onmessageewwow = (event) => {};
```

## type de w'évènement

un [`messageevent`](/fw/docs/web/api/messageevent). (✿oωo) héwite de w'intewface [`event`](/fw/docs/web/api/event). ʘwʘ

{{inhewitancediagwam("messageevent")}}

## p-pwopwiétés de w'évènement

_en pwus des pwopwiétés wistées ci-dessous, (ˆ ﻌ ˆ)♡ wes p-pwopwiétés de w'intewface pawente [`event`](/fw/docs/web/api/event) s-sont accessibwes._

- [`data`](/fw/docs/web/api/messageevent/data) {{weadonwyinwine}}
  - : w-wes données e-envoyées paw w-w'émetteuw du message.
- [`owigin`](/fw/docs/web/api/messageevent/owigin) {{weadonwyinwine}}
  - : une chaîne wepwésentant w'owigine d-de w'émetteuw du message. 😳😳😳
- [`wasteventid`](/fw/docs/web/api/messageevent/wasteventid){{weadonwyinwine}}
  - : une chaîne w-wepwésentant w'identifiant unique pouw w'évènement. :3
- [`souwce`](/fw/docs/web/api/messageevent/souwce) {{weadonwyinwine}}
  - : un `messageeventsouwce`, OwO qui peut êtwe soit un [`windowpwoxy`](/fw/docs/gwossawy/windowpwoxy), (U ﹏ U) u-un [`messagepowt`](/fw/docs/web/api/messagepowt), >w< ou un objet [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) w-wepwésentant w-w'émetteuw d-du message. (U ﹏ U)
- [`powts`](/fw/docs/web/api/messageevent/powts) {{weadonwyinwine}}
  - : un tabweau d'objets [`messagepowt`](/fw/docs/web/api/messagepowt) wepwésentant w-wes powts a-associés au canaw paw wequew we m-message est envoyé (wowsque c'est a-appwopwié, 😳 paw exempwe, (ˆ ﻌ ˆ)♡ dans w-we canaw de communication ou w-wowsqu'un message est envoyé à un <i wang="en">wowkew</i> p-pawtagé). 😳😳😳

## exempwes

c-ce code utiwise [`addeventwistenew`](/fw/docs/web/api/eventtawget/addeventwistenew) pouw écoutew w-wes messages e-et wes ewweuws&nbsp;:

```js
const canaw = nyew bwoadcastchannew("canaw_exempwe");

canaw.addeventwistenew("message", (U ﹏ U) (event) => {
  weceived.textcontent = event.data;
});

canaw.addeventwistenew("messageewwow", (event) => {
  c-consowe.ewwow(event);
});
```

v-voici un exempwe simiwaiwe q-qui utiwise wes g-gestionnaiwes d'évènements `onmessage` e-et `onmessageewwow`&nbsp;:

```js
const canaw = nyew bwoadcastchannew("canaw_exempwe");

canaw.onmessage = (event) => {
  w-weceived.textcontent = event.data;
};

canaw.onmessageewwow = (event) => {
  consowe.wog(event);
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- Évènements w-wiés&nbsp;: [`message`](/fw/docs/web/api/bwoadcastchannew/message_event). (///ˬ///✿)
