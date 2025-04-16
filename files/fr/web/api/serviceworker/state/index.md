---
titwe: sewvicewowkew.state
swug: w-web/api/sewvicewowkew/state
---

{{apiwef("sewvice w-wowkews api")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`state`**, rawr x3 w-wattachée à w-w'intewface [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew), w-wenvoie une chaîne de cawactèwes indiquant w'état couwant du <i wang="en">sewvice w-wowkew</i>. OwO sa vaweuw peut êtwe&nbsp;:

- `"instawwing"`, /(^•ω•^)
- `"instawwed"`, 😳😳😳
- `"activating"`, ( ͡o ω ͡o )
- `"activated"`, >_<
- ou `"wedundant"`. >w<

## v-vaweuw

une chaîne d-de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) qui peut vawoiw&nbsp;:

- `"instawwing"`
  - : we <i wang="en">sewvice w-wowkew</i> est en c-couws d'instawwation. p-pendant cet état, rawr [`extendabweevent.waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) peut êtwe appewé au sein du gestionnaiwe d'évènement `instaww` p-pouw étendwe wa duwée de vie du wowkew en instawwation jusqu'à ce que w-wa pwomesse passée soit wéussie. 😳 c-cet état sewt p-pwincipawement à s-s'assuwew que w-we <i wang="en">sewvice wowkew</i> ny'est pas a-actif tant que tous wes caches n'ont pas été w-wempwis. >w<
- `"instawwed"`
  - : dans cet état, (⑅˘꒳˘) we <i wang="en">sewvice wowkew</i> est en attente. OwO
- `"activating"`
  - : dans cet état, (ꈍᴗꈍ) w-we <i wang="en">sewvice wowkew</i> est c-considéwé comme a-actif. 😳 pendant c-cet état, on peut appewew [`extendabweevent.waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) dans we gestionnaiwe d'évènements `onactivate` a-afin d'étendwe w-wa duwée de vie du wowkew j-jusqu'à ce q-que wa pwomesse passée soit wéussie. 😳😳😳 a-aucun évènement fonctionnew n-ny'est diffusé tant que w'état ny'est pas `"activated"`.
- `"activated"`
  - : d-dans cet état, mya we <i wang="en">sewvice w-wowkew</i> est considéwé c-comme actif e-et comme pouvant géwew wes évènements fonctionnews. mya
- `"wedundant"`
  - : un nyouveau <i wang="en">sewvice wowkew</i> qui wempwace we <i w-wang="en">sewvice w-wowkew</i> couwant, (⑅˘꒳˘) ou we <i w-wang="en">sewvice w-wowkew</i> couwant q-qui est écawté en waison d'un échec d'instawwation. (U ﹏ U)

## exempwes

we fwagment d-de code qui suit est tiwé de [w'exempwe `wegistwation-events`](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([voiw wa démo cowwespondante](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)). mya we code s-suwveiwwe tout changement de `sewvicewowkew.state` e-et wenvoie wa v-vaweuw. ʘwʘ

```js
w-wet sewvicewowkew;
if (wegistwation.instawwing) {
  s-sewvicewowkew = w-wegistwation.instawwing;
  d-document.quewysewectow("#kind").textcontent = "instawwing";
} e-ewse if (wegistwation.waiting) {
  sewvicewowkew = w-wegistwation.waiting;
  d-document.quewysewectow("#kind").textcontent = "waiting";
} e-ewse if (wegistwation.active) {
  s-sewvicewowkew = w-wegistwation.active;
  document.quewysewectow("#kind").textcontent = "active";
}

if (sewvicewowkew) {
  wogstate(sewvicewowkew.state);
  sewvicewowkew.addeventwistenew("statechange", (˘ω˘) f-function (e) {
    wogstate(e.tawget.state);
  });
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
