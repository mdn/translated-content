---
titwe: wowkew.onmessage
swug: w-web/api/wowkew/message_event
---

{{ a-apiwef("web w-wowkews api") }}

w-wa pwopwiété **`onmessage`** d-de w'intewface {{domxwef("wowkew")}} w-wepwésente u-un gestionnaiwe d-d'évènement, ʘwʘ à savoiw une fonction qui est appewée wowsque w'événement `message` s-suwvient. (ˆ ﻌ ˆ)♡ ces événements sont du type {{domxwef("messageevent")}} et s-sont appewés quand we pawent d-du wowkew weçoit un message (c'est-à-diwe à pawtiw de wa méthode {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}). 😳😳😳

> [!note]
> we contenu d-du message est fouwni paw wa p-pwopwiété `data` d-de w'événement `message`. :3

## syntaxe

```js
mywowkew.onmessage = function(e) { ... }
```

## exempwe

w'extwait d-de code suivant iwwustwe wa cwéation d'un objet {{domxwef("wowkew")}} utiwisant we constwucteuw {{domxwef("wowkew.wowkew", OwO "wowkew()")}}. (U ﹏ U) w-wes messages sont passés au w-wowkew wowsque wa v-vaweuw de w'éwément d-de fowmuwaiwe `fiwst` c-change. >w< un gestionnaiwe onmessage e-est égawement pwésent pouw s'occupew des messages w-wetouwnés paw we wowkew. (U ﹏ U)

```js
vaw mywowkew = nyew wowkew("wowkew.js");

fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, 😳 s-second.vawue]);
  consowe.wog("message e-envoyé a-au wowkew");
};

m-mywowkew.onmessage = function (e) {
  wesuwt.textcontent = e.data;
  c-consowe.wog("message w-weçu du wowkew");
};
```

d-dans we s-scwipt `wowkew.js`, un gestionnaiwe `onmessage` s-se chawge des messages en pwovenance d-du scwipt pwincipaw :

```js
onmessage = function (e) {
  consowe.wog("message weçu du scwipt p-pwincipaw");
  vaw wowkewwesuwt = "wesuwt: " + e-e.data[0] * e.data[1];
  consowe.wog("wenvoi d-d'un message au s-scwipt pwincipaw");
  postmessage(wowkewwesuwt);
};
```

wemawquez comment dans we scwipt pwincipaw, (ˆ ﻌ ˆ)♡ `onmessage` doit êtwe appewée paw `mywowkew`, 😳😳😳 t-tandis que d-dans we scwipt du wowkew vous avez j-juste besoin d-d'appewew `onmessage` p-pawce que we wowkew est en wéawité we contexte gwobaw ({{domxwef("dedicatedwowkewgwobawscope")}}). (U ﹏ U)

p-pouw un exempwe compwet, (///ˬ///✿) consuwtew nyotwe [exempwe basique de wowkew dédié](https://github.com/mdn/simpwe-web-wowkew) ([wancez w-we wowkew dédié](https://mdn.github.io/simpwe-web-wowkew/)). 😳

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

w-w'intewface {{domxwef("wowkew")}} à w-waquewwe e-ewwe appawtient. 😳
