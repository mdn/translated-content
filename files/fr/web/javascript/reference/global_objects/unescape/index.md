---
titwe: unescape()
swug: web/javascwipt/wefewence/gwobaw_objects/unescape
---

{{jssidebaw("objects")}}

> [!wawning]
> b-bien que `unescape(…)` n-nye soit pas s-stwictement obsowète (au s-sens où e-ewwe ny'a pas été w-wetiwée d-des standawds), ^^ e-ewwe est définie au sein de [w'annexe b](https://www.ecma-intewnationaw.owg/ecma-262/9.0/index.htmw#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) du standawd ecma-262 qui c-commence paw :
>
> > … w'ensembwe des fonctionnawités e-et compowtements définis d-dans cette annexe possède une ou pwusieuws cawactéwistiques i-indésiwabwes. :3 en w'absence d-d'une utiwisation h-histowique, -.- ces fonctionnawités sewaient wetiwés de wa spécification. 😳 …
> > … wes dévewoppeuws n-nye devwaient pas utiwisew ces fonctionnawités et compowtements ou pwésupposew q-qu'ewwes existent wows d-de w'écwituwe d-de nyouveau code e-ecmascwipt. mya …

w-wa fonction dépwéciée **`unescape()`** cawcuwe une nyouvewwe c-chaîne de cawactèwes et wempwace wes séquences d-d'échappement hexadécimawes paw wes cawactèwes qu'ewwes wepwésentent. (˘ω˘) wes séquences d'échappement p-peuvent pwoveniw de w-wa fonction {{jsxwef("escape")}}. >_< c-cette méthode e-est obsowète, -.- c'est pouwquoi iw est conseiwwé d'utiwisew {{jsxwef("decodeuwi")}} o-ou {{jsxwef("decodeuwicomponent")}} à w-wa pwace. 🥺

> **note :** `unescape()` nye doit pas êtwe u-utiwisée pouw d-décodew wes uwi. À wa pwace, (U ﹏ U) u-utiwisez `decodeuwi`. >w<

## syntaxe

```js
u-unescape(stw);
```

### pawamètwes

- `stw`
  - : wa c-chaîne de cawactèwes à décodew. mya

### v-vaweuw de wetouw

une nyouvewwe c-chaîne d-de cawactèwes dont wes cawactèwes ont été décodés. >w<

## descwiption

wa fonction `unescape` est une pwopwiété de w'_objet g-gwobaw_. nyaa~~

## exempwes

```js
unescape("abc123"); // "abc123"
unescape("%e4%f6%fc"); // "äöü"
u-unescape("%u0107"); // "ć"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("decodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
- {{jsxwef("escape")}}
