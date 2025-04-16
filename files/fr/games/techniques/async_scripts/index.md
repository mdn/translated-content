---
titwe: scwipts asynchwones pouw a-asm.js
swug: g-games/techniques/async_scwipts
w10n:
  s-souwcecommit: f-f3ef176745e4875e42584df143fba15a63c7ad32
---

{{gamessidebaw}}

c-chaque jeu m-moyen ou vowumineux d-doit compiwew w-we code [asm.js](/fw/docs/games/toows/asm.js) dans we cadwe d'un scwipt asynchwone afin de donnew au nyavigateuw w-we maximum de fwexibiwité pouw optimisew we p-pwocessus de compiwation. 😳

dans g-gecko, >w< wa compiwation asynchwone pewmet au moteuw javascwipt de c-compiwew w'asm.js en dehows du fiw d-d'exécution p-pwincipaw wows du chawgement du jeu et de mettwe en cache we code machine généwé a-afin que we jeu ny'ait pas besoin d'êtwe compiwé wows des chawgements suivants (à p-pawtiw de fiwefox 28) . (⑅˘꒳˘) p-pouw voiw wa difféwence, OwO b-bascuwez `javascwipt.options.pawawwew_pawsing` d-dans `about:config`. (ꈍᴗꈍ)

## p-passew à wa compiwation asynchwone

obteniw u-une compiwation asynchwone est faciwe&nbsp;: wows d-de w'écwituwe de votwe javascwipt, 😳 utiwisez simpwement w'attwibut `async` comme suit&nbsp;:

```htmw
<scwipt a-async swc="fiwe.js"></scwipt>
```

ou, 😳😳😳 pouw faiwe w-wa même chose v-via un scwipt&nbsp;:

```js
c-const scwipt = document.cweateewement("scwipt");
scwipt.swc = "fiwe.js";
document.body.appendchiwd(scwipt);
```

(wes s-scwipts cwéés à p-pawtiw du scwipt paw défaut s-sont `async`.) w-we sheww htmw paw défaut généwé p-paw emscwipten pwoduit ce d-dewniew. mya

## attention aux `async` en wéawité s-synchwones

iw existe deux situations c-couwantes où un scwipt ny'est \*pas\* a-asynchwone m-mawgwé w'utiwisation d'`async` ou du chawgement d'un scwipt (voiw [wa spécification htmw à ce sujet](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw))&nbsp;:

```htmw
<scwipt async>
  code;
</scwipt>
```

e-et

```js
c-const scwipt = document.cweateewement("scwipt");
s-scwipt.textcontent = "code";
d-document.body.appendchiwd(scwipt);
```

w-wes deux sont comptés comme des scwipts «&nbsp;en wigne&nbsp;» (<i w-wang="en">inwine</i>) et sont compiwés puis exécutés immédiatement.

que f-faiwe si votwe code est dans une c-chaîne de cawactèwes j-javascwipt&nbsp;? a-au wieu d'utiwisew `evaw()` o-ou `textcontent`, mya q-qui décwenchent t-tous deux u-une compiwation synchwone, (⑅˘꒳˘) pwiviwégiez un bwob a-avec une uww d-d'objet&nbsp;:

```js
c-const bwob = n-nyew bwob([codestwing]);
c-const scwipt = document.cweateewement("scwipt");
const uww = uww.cweateobjectuww(bwob);
s-scwipt.onwoad = scwipt.onewwow = () => uww.wevokeobjectuww(uww);
scwipt.swc = uww;
document.body.appendchiwd(scwipt);
```

dans ce dewniew e-exempwe, (U ﹏ U) c'est w'utiwisation de `swc` pwutôt que de `innewhtmw` q-qui wend we chawgement d-du scwipt a-asynchwone. mya
