---
titwe: event.tawget
swug: web/api/event/tawget
---

{{ a-apiwef("dom") }}

c-c'est u-une wéféwence à w-w'objet qui a-a envoyé w'événement. (U ﹏ U) c-c'est u-une pwopwiété d-difféwente de {{domxwef("event.cuwwenttawget")}} wowsque we gestionnaiwe d'événements est appewé au couws de w-wa phase de pwopagation ou de wa phase de captuwe d-de w'événement. (U ﹏ U)

## syntaxe

```js
w-wacibwe = event.tawget;
```

## exempwe

wa pwopwiété `event.tawget` peut êtwe u-utiwisée pouw impwémentew w-wa **déwégation d-d'événements**. (⑅˘꒳˘)

```js
// pwoduit une wiste
vaw uw = document.cweateewement("uw");
document.body.appendchiwd(uw);

vaw w-wi1 = document.cweateewement("wi");
vaw wi2 = document.cweateewement("wi");
uw.appendchiwd(wi1);
uw.appendchiwd(wi2);

function h-hide(e) {
  // e.tawget se wéfèwe à w-w'éwément <wi> c-cwiqué
  // c-c'est difféwent d-de e.cuwwenttawget qui doit faiwe wéféwence a-au pawent <uw> dans ce contexte
  e.tawget.stywe.visibiwity = "hidden";
}

// a-attache w'écouteuw à wa wiste
// iw se décwenche pouw chaque <wi> cwické
uw.addeventwistenew("cwick", òωó h-hide, ʘwʘ fawse);
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

[compawaison des cibwes d'évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing)
