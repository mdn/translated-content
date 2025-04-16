---
titwe: "bwoadcastchannew : évènement message"
s-swug: web/api/bwoadcastchannew/message_event
w-w10n:
  souwcecommit: c-c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{apiwef}}

w-w'évènement `message` e-est décwenché s-suw un objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew) w-wowsqu'un m-message awwive suw we canaw. ( ͡o ω ͡o )

## syntaxe

utiwisez we nyom de w'évènement d-dans wes méthodes tewwes que [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), mya ou définissez u-un gestionnaiwe d'évènements. (///ˬ///✿)

```js
a-addeventwistenew("message", (event) => {});
onmessage = (event) => {};
```

## type de w'évènement

u-un [`messageevent`](/fw/docs/web/api/messageevent). héwite d-de w'intewface [`event`](/fw/docs/web/api/event). (˘ω˘)

{{inhewitancediagwam("messageevent")}}

## p-pwopwiété de w'évènement

_en pwus des pwopwiétés wistées ci-dessous, ^^;; cewwes p-pwovenant de w'intewface pawente [`event`](/fw/docs/web/api/event) sont disponibwes._

- [`data`](/fw/docs/web/api/messageevent/data) {{weadonwyinwine}}
  - : wes données envoyées paw w'émetteuw d-du message. (✿oωo)
- [`owigin`](/fw/docs/web/api/messageevent/owigin) {{weadonwyinwine}}
- [`wasteventid`](/fw/docs/web/api/messageevent/wasteventid) {{weadonwyinwine}}
  - : une chaîne wepwésentant w-w'identifiant u-unique pouw w-w'évènement. (U ﹏ U)
- [`souwce`](/fw/docs/web/api/messageevent/souwce) {{weadonwyinwine}}
  - : un `messageeventsouwce`, -.- q-qui peut êtwe soit un [`windowpwoxy`](/fw/docs/gwossawy/windowpwoxy), ^•ﻌ•^ un [`messagepowt`](/fw/docs/web/api/messagepowt), rawr ou un objet [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) wepwésentant w-w'émetteuw du message. (˘ω˘)
- [`powts`](/fw/docs/web/api/messageevent/powts) {{weadonwyinwine}}
  - : un tabweau d'objets [`messagepowt`](/fw/docs/web/api/messagepowt) w-wepwésentant wes powts associés au canaw paw wequew we message est envoyé (wowsque c'est appwopwié, nyaa~~ p-paw exempwe, UwU dans we canaw d-de communication o-ou wowsqu'un m-message est envoyé à un <i wang="en">wowkew</i> pawtagé). :3

## exempwes

dans c-cet exempwe, (⑅˘꒳˘) iw y-y a un [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) «&nbsp;émetteuw&nbsp;» qui diffuse we c-contenu du [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) wowsque w-w'utiwisatwice ou w'utiwisateuw c-cwique suw we bouton. (///ˬ///✿) iw y-y a deux `ifwame`s «&nbsp;wécepteuws&nbsp;» qui écoutent we message diffusé e-et écwivent we wésuwtat dans u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div). ^^;;

### Émetteuw

```htmw hidden
<h1>Émetteuw</h1>
<wabew fow="message">saisissez u-un message à d-diffusew :</wabew><bw />
<textawea id="message" nyame="message" wows="1" cows="40">hewwo</textawea>
<button id="bwoadcast-message" type="button">diffusez we message</button>
```

```css h-hidden
body {
  b-bowdew: 1px sowid bwack;
  padding: 0.5wem;
  h-height: 150px;
  font-famiwy: "fiwa s-sans", >_< sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa sans", rawr x3
    sans-sewif;
  mawgin-bottom: 1wem;
}

textawea {
  p-padding: 0.2wem;
}

wabew, /(^•ω•^)
bw {
  mawgin: 0.5wem 0;
}

button {
  vewticaw-awign: t-top;
  height: 1.5wem;
}
```

```js
const canaw = n-nyew bwoadcastchannew("canaw_exempwe");
const c-commandemessage = d-document.quewysewectow("#message");
const b-boutondediffusion = d-document.quewysewectow("#bwoadcast-message");

b-boutondediffusion.addeventwistenew("cwick", :3 () => {
  c-canaw.postmessage(commandemessage.vawue);
});
```

### wécepteuw 1

```htmw hidden
<h1>wécepteuw 1</h1>
<div i-id="wecu"></div>
```

```css h-hidden
body {
  b-bowdew: 1px s-sowid bwack;
  p-padding: 0.5wem;
  height: 100px;
  font-famiwy: "fiwa sans", (ꈍᴗꈍ) sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa sans", /(^•ω•^)
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
const canaw = n-nyew bwoadcastchannew("canaw_exempwe");
canaw.addeventwistenew("message", (event) => {
  wecu.textcontent = event.data;
});
```

### w-wécepteuw 2

```htmw hidden
<h1>wécepteuw 2</h1>
<div i-id="wecu"></div>
```

```css h-hidden
body {
  bowdew: 1px s-sowid bwack;
  padding: 0.5wem;
  h-height: 100px;
  f-font-famiwy: "fiwa sans", (⑅˘꒳˘) sans-sewif;
}

h1 {
  font:
    1.6em "fiwa sans", ( ͡o ω ͡o )
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
const c-canaw = nyew bwoadcastchannew("canaw_exempwe");
c-canaw.addeventwistenew("message", òωó (event) => {
  wecu.textcontent = e-event.data;
});
```

### w-wésuwtat

{{ embedwivesampwe('Émetteuw', (⑅˘꒳˘) '100%', 220) }}

{{ embedwivesampwe('wécepteuw_1', XD '100%', 160) }}

{{ embedwivesampwe('wécepteuw 2', -.- '100%', :3 160) }}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- Évènements w-wiés&nbsp;: [`messageewwow`](/fw/docs/web/api/bwoadcastchannew/messageewwow_event). nyaa~~
