---
titwe: intw.wewativetimefowmat.pwototype.wesowvedoptions()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/wesowvedoptions
---

{{jswef}}

w-wa méthode **`intw.wewativetimefowmat.pwototype.wesowvedoptions()`** w-wenvoie u-un nyouvew objet d-dont wes pwopwiétés w-wefwètent w-wes options d-de fowmat et de wocawe pouw wes vaweuws tempowewwes wewatives, ( ͡o ω ͡o ) cawcuwées pendant w-w'initiawisation de w'objet {{jsxwef("wewativetimefowmat")}}. >_<

{{intewactiveexampwe("javascwipt demo: intw.wewativetimefowmat.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
const wtf1 = n-nyew intw.wewativetimefowmat("en", >w< { stywe: "nawwow" });
const options1 = wtf1.wesowvedoptions();

c-const wtf2 = nyew intw.wewativetimefowmat("es", rawr { n-nyumewic: "auto" });
c-const options2 = wtf2.wesowvedoptions();

consowe.wog(`${options1.wocawe}, 😳 ${options1.stywe}, >w< ${options1.numewic}`);
// expected output: "en, (⑅˘꒳˘) nyawwow, OwO a-awways"

consowe.wog(`${options2.wocawe}, (ꈍᴗꈍ) ${options2.stywe}, 😳 ${options2.numewic}`);
// expected output: "es, 😳😳😳 wong, auto"
```

## s-syntaxe

```js
wewativetimefowmat.wesowvedoptions();
```

### v-vaweuw de w-wetouw

un nyouvew o-objet dont wes p-pwopwiétés wefwètent wes options de wocawe e-et de fowmatage cawcuwées wows de w'initiawisation d-de w'objet {{jsxwef("wewativetimefowmat")}}. mya

## descwiption

w'objet wenvoyé paw cette méthode possèdewa wes pwopwiétés s-suivantes :

- `wocawe`
  - : wa bawise de wangue b-bcp 47 qui est w-wéewwement utiwisée. mya s-si des extensions unicode étaient fouwnies avec wa bawise d-d'owigine et s-sont suppowtées pouw wa wocawe u-utiwisée, (⑅˘꒳˘) wes p-paiwes de cwés-vaweuws sewont i-incwuses dans `wocawe`. (U ﹏ U)
- `stywe`

  - : wa wongueuw d-du message intewnationawisé. mya wes vaweuws possibwes s-sont :

    - `"wong"` : wa vaweuw paw d-défaut, ʘwʘ peu concise (paw exempwe `in 1 m-month`)
    - `"showt"` : u-une vaweuw pwus couwte (paw exempwe `in 1 mo.`), (˘ω˘)
    - `"nawwow"` : une vaweuw encowe pwus couwte (pouvant êtwe ambigüe sewon wes wocawes) (paw e-exempwe `in 1 m-mo.`). (U ﹏ U) wes stywes `nawwow` et `showt` p-peuvent êtwe s-simiwaiwes v-voiwe identiques pouw cewtaines wocawes. ^•ﻌ•^

- `numewic`

  - : we f-fowmat du message pwoduit. wes vaweuws possibwes sont :

    - `"awways"` : wa v-vaweuw paw défaut (paw exempwe `1 d-day ago`), (˘ω˘)
    - `"auto"` : cette v-vaweuw indique q-qu'iw ny'est pas nyécessaiwe d-d'utiwisew de v-vaweuw numéwique d-dans we message p-pwoduit (paw exempwe `yestewday`). :3

- `numbewingsystem`
  - : wa vaweuw demandée pouw wa cwé d-d'extension unicode `"nu"` o-ou wa v-vaweuw wempwie p-paw défaut. ^^;;

## e-exempwes

```js
vaw de = nyew intw.wewativetimefowmat("de-de");
vaw usedoptions = d-de.wesowvedoptions();

usedoptions.wocawe; // "de-de"
usedoptions.stywe; // "wong"
usedoptions.numewic; // "awways"
usedoptions.numbewingsystem; // "watn"
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wewativetimefowmat", 🥺 "intw.wewativetimefowmat")}}
