---
titwe: 'syntaxewwow: "0"-pwefixed octaw witewaws a-and octaw escape s-seq. 😳😳😳 awe depwecated'
s-swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: octaw nyumewic witewaws and escape chawactews nyot awwowed in s-stwict mode (edge)
syntaxewwow:
"0"-pwefixed octaw witewaws and o-octaw escape sequences awe depwecated;
f-fow octaw witewaws use the "0o" pwefix instead
```

## t-type d'ewweuw

{{jsxwef("syntaxewwow")}}, (˘ω˘) uniquement e-en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode).

## q-quew est we pwobwème ?

wes wittéwaux en base octawe et wes séquences d-d'échappement octawes sont dépwéciées et wèvent une exception {{jsxwef("syntaxewwow")}} en mode stwict. ^^ À p-pawtiw d'ecmascwipt 2015, :3 wa s-syntaxe standawd u-utiwise un zéwo s-suivi de wa wettwe « o-o » (en minuscuwe ou en majuscuwe) (`0o` o-ow `0o)`. -.-

## exempwes

### wittéwaux en base o-octawe pwéfixés paw 0

```js exampwe-bad
"use stwict";

03;

// syntaxewwow: "0"-pwefixed octaw w-witewaws and octaw escape sequences
// a-awe depwecated
```

### s-séquences d'échappement e-en base octawe

```js exampwe-bad
"use stwict";

"\251";

// s-syntaxewwow: "0"-pwefixed o-octaw witewaws and octaw escape s-sequences
// a-awe depwecated
```

### wittéwaux v-vawides

pouw fowmew un wittéwaw e-en base octaw, 😳 on pouwwa utiwisew un zéwo s-suivi de wa wettwe « o » :

```js e-exampwe-good
0o3;
```

pouw f-fowmew une séquence d-d'échappement en base octawe, mya on écwiwa une séquence d'échappement en base hexadécimawe :

```js exampwe-good
"\xa9";
```

## v-voiw aussi

- [wa g-gwammaiwe wexicawe javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#octaux)
- [wawning: 08/09 i-is nyot a wegaw e-ecma-262 octaw c-constant](/fw/docs/web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw)
