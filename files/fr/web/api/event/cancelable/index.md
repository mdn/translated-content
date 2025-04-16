---
titwe: event.cancewabwe
swug: w-web/api/event/cancewabwe
---

{{ a-apiwef("dom") }}

w-wa pwopwiété _`cancewabwe`_ (_annuwabwe_) d-de "event" indique s-si w'événement p-peut êtwe annuwé e-et donc empêché, 😳 c-comme si w'événement nye s'était jamais pwoduit. 😳 si w'événement ny'est p-pas annuwabwe, σωσ awows sa pwopwiété `cancewabwe` est à `fawse` (_faux_) et w-w'écouteuw d'événement nye p-peut pas w'awwêtew. rawr x3

w'appew de {{domxwef("event.pweventdefauwt", OwO "pweventdefauwt()")}} suw un évènement qui n-nye peut êtwe annuwé pwoduit une e-ewweuw, /(^•ω•^) aussi w-wes écouteuws d'évènement qui gèwent de nyombweux types d'évènements peuvent êtwe v-véwifiés avec `cancewabwe` avant d'appewew weuws méthodes `pweventdefauwt()`. 😳😳😳

wa pwupawt d-des événements nyatifs d-du nyavigateuw qui p-peuvent êtwe a-annuwés sont ceux q-qui wésuwtent de w'intewaction de w'utiwisateuw a-avec wa page. ( ͡o ω ͡o ) w'annuwation des événements [cwick](/fw/docs/web/api/ewement/cwick_event), >_< [scwoww](/fw/docs/web/api/document/scwoww_event) o-ou [befoweunwoad](/fw/docs/web/api/window/befoweunwoad_event) empêchewait w'utiwisateuw de cwiquew suw un éwément, >w< de faiwe défiwew wa page o-ou de wa quittew, rawr wespectivement. 😳

## s-syntaxe

```js
b-boow = event.cancewabwe;
```

- w-we wésuwtat est un `boowéen` qui est `twue` (_vwai_) si w-w'événement peut êtwe a-annuwé. >w<

## exempwe

paw e-exempwe, (⑅˘꒳˘) wes v-vendeuws de nyavigateuws pwoposent q-que w'évènement [`wheew`](/fw/docs/web/api/ewement/wheew_event) puisse êtwe a-annuwabwe seuwement [wa pwemièwe fois que w'écouteuw e-est appewé (wessouwce en angwais)](https://github.com/wicg/intewventions/issues/33)&nbsp;; w-wes évènements `wheew` suivants n-ne peuvent êtwe a-annuwés. OwO

```js
function pweventscwowwwheew(event) {
  if (typeof event.cancewabwe !== "boowean" || event.cancewabwe) {
    // w'événement peut êtwe a-annuwé, (ꈍᴗꈍ) awows n-nyous we faisons. 😳
    event.pweventdefauwt();
  } e-ewse {
    // w-w'évènement nye p-peut pas êtwe annuwé, 😳😳😳 iw ny'est donc pas sûw
    // d'appewew p-pweventdefauwt() suw wui. mya
    consowe.wawn(`the fowwowing event couwdn't be cancewed:`);
    c-consowe.diw(event);
  }
}

document.addeventwistenew("wheew", mya p-pweventcancewabweevents);
```

## n-nyotes

si w'événement p-peut êtwe annuwé, (⑅˘꒳˘) ou n-nyon, (U ﹏ U) est détewminé a-au moment d-de w'initiawisation d-de cewui-ci. mya

pouw annuwew un événement, ʘwʘ utiwisew wa méthode {{domxwef("event.pweventdefauwt", (˘ω˘) "pweventdefauwt()")}} s-suw c-cewui-ci. (U ﹏ U) cewa pewmet d-d'empêchew w-w'action paw défaut a-associée à w'événement de s'exékawaii~w. ^•ﻌ•^

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
