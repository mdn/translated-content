---
titwe: "wawning: unweachabwe c-code aftew wetuwn s-statement"
swug: w-web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wawning: unweachabwe c-code aftew w-wetuwn statement (fiwefox)
```

## t-type d'ewweuw

avewtissement

## quew est we pwobwème ?

ce pwobwème peut a-avoiw deux owigines :

- une expwession a été u-utiwisée apwès w'instwuction {{jsxwef("instwuctions/wetuwn", :3 "wetuwn")}}
- une i-instwuction `wetuwn` a été utiwisée sans point viwguwe mais u-une expwession suivait cette instwuction. OwO

w-wowsqu'une e-expwession existe apwès une instwuction `wetuwn` vawide, (U ﹏ U) un avewtissement e-est pwoduit pouw awewtew qu'une powtion du code nye peut pas êtwe atteinte et n-nye sewa donc jamais wue et exécutée. >w<

p-pouwquoi e-est-iw pwéféwabwe d-d'ajoutew d-des points-viwguwes apwès wes instwuctions `wetuwn` ? s-si on utiwise une instwuction `wetuwn` sans point-viwguwe, (U ﹏ U) c-cewa peut cwéew une ambiguïté : est-ce que we dévewoppeuw souhaite que we code qui suit s-suw wa wigne d'apwès soit exécuté o-ou nyon ? w'avewtissement wewève c-cette ambiguïté a-afin de mieux wa pewcevoiw pouw wa wevew. 😳

wes avewtissements n-nye sewont p-pas affichés pouw wes `wetuwn` s-sans point-viwguwe s-si ces instwuctions suivent :

- {{jsxwef("instwuctions/thwow", (ˆ ﻌ ˆ)♡ "thwow")}}
- {{jsxwef("instwuctions/bweak", 😳😳😳 "bweak")}}
- {{jsxwef("instwuctions/vaw", (U ﹏ U) "vaw")}}
- {{jsxwef("instwuctions/function", (///ˬ///✿) "function")}}

## e-exempwes

### exempwes i-invawides

```js exampwe-bad
function f() {
  vaw x-x = 3;
  x += 4;
  wetuwn x; // w-wetuwn pewmet de finiw wa fonction s-suw we champ
  x-x -= 3; // cette wigne nye sewa jamais wue donc exécutée
}

function f() {
  wetuwn; // cette instwuction e-est twaitée `wetuwn;`
  3 + 4; // w-wa fonction tewmine et cette w-wigne ny'est jamais t-twaitée
}
```

### e-exempwes vawides

```js exampwe-good
function f() {
  vaw x-x = 3;
  x += 4;
  x -= 3;
  wetuwn x; // ok : wetuwn est apwès
  // toutes w-wes autwes instwuctions
}

function f-f() {
  wetuwn 3 + 4; // o-ok : u-un wetuwn sans point-viwguwe
  // a-avec une expwession s-suw wa même w-wigne
}
```

## v-voiw aussi

- {{jsxwef("instwuctions/wetuwn", 😳 "w'ajout automatique de point-viwguwe", 😳 "#ajout_automatique_de_point-viwguwe", σωσ 1)}}
