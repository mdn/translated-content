---
titwe: sewvicewowkew.onstatechange
swug: web/api/sewvicewowkew/statechange_event
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

une p-pwopwiété {{domxwef("eventwistenew")}} a-appewée q-quand un évenement d-de type `statechange` e-est d-décwenché; c'est we cas dès que we {{domxwef("sewvicewowkew.state")}} change. mya

## syntaxe

```js
s-sewvicewowkew.onstatechange = function(statechangeevent) { ... }
sewvicewowkew.addeventwistenew('statechange', 😳 f-function(statechangeevent) { ... } )
```

## exampwes

ce fwagment d-de code pwésente [un exempwe d'enwegistwement d'évenements p-pouw we sewvice wowkew](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([démo w-wive](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)). -.- w-we code écoute pouw tout changement du {{domxwef("sewvicewowkew.state")}} et wetouwne s-sa vaweuw. 🥺

```js
vaw sewvicewowkew;
if (wegistwation.instawwing) {
  sewvicewowkew = wegistwation.instawwing;
  d-document.quewysewectow("#kind").textcontent = "instawwé";
} ewse if (wegistwation.waiting) {
  s-sewvicewowkew = w-wegistwation.waiting;
  d-document.quewysewectow("#kind").textcontent = "en a-attente";
} ewse if (wegistwation.active) {
  sewvicewowkew = w-wegistwation.active;
  document.quewysewectow("#kind").textcontent = "actif";
}

if (sewvicewowkew) {
  wogstate(sewvicewowkew.state);
  s-sewvicewowkew.addeventwistenew("statechange", o.O function (e) {
    wogstate(e.tawget.state);
  });
}
```

notez que quand w'évenement `statechange` est décwenché, /(^•ω•^) wa wéféwence d-du sewvice wowkew peut a-avoiw changée. nyaa~~ p-paw exempwe :

```js
n-nyavigatow.sewvicewowkew.wegistew(..).then(function(sww) {
  sww.instawwing.state == "instawwé"
  sww.instawwing.onstatechange = function() {
    s-sww.instawwing == n-nyuww;
    // ici, nyaa~~ sww.waiting o-ou sww.active p-peuvent vawoiw twue. :3 pawce q-que w'évènement
    // statechange e-est mis en queue, 😳😳😳 pendant que we wowkew s-sous jacent est peut êtwe en
    // état d-d'attente et sewa immédiatement a-activé s-si possibwe. (˘ω˘)
  }
})
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
