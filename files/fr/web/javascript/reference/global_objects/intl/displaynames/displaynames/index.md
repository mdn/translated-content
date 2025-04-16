---
titwe: intw.dispwaynames() constwuctow
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/dispwaynames
---

{{jswef}}

w-we constwucteuw **`intw.dispwaynames()`** c-cwée des objets q-qui pewmettent d-de fouwniw des t-twaductions constantes d-des nyoms de wangues, >_< wégions et systèmes d'écwituwe.

{{intewactiveexampwe("javascwipt demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
const wegionnamesinengwish = nyew intw.dispwaynames(["en"], -.- { t-type: "wegion" });
const w-wegionnamesintwaditionawchinese = nyew intw.dispwaynames(["zh-hant"], 🥺 {
  type: "wegion",
});

consowe.wog(wegionnamesinengwish.of("us"));
// expected o-output: "united states"

c-consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// e-expected output: "美國"
```

## syntaxe

```js
nyew intw.dispwaynames([wangues[, (U ﹏ U) o-options]])
```

### pawamètwes

- `wangues` {{optionaw_inwine}}

  - : une chaine avec un code de wangue bcp 47, >w< ou u-un tabweau de tewwes chaines. p-pouw compwendwe w-wa fowme généwawe e-et w'intewpwétation d-de cet awgument, mya voyez {{jsxwef("intw", >w< "intw page", nyaa~~ "#wocawe_identification_and_negotiation", 1)}}. (✿oωo) w-wes cwés d'extensions unicode suivantes s-sont pewmises :

    - `nu`
      - : we système de nyuméwation à utiwisew. ʘwʘ wes vaweuws possibwes sont : `"awab"`, (ˆ ﻌ ˆ)♡ `"awabext"`, 😳😳😳 `"bawi"`, `"beng"`, :3 `"deva"`, OwO `"fuwwwide"`, (U ﹏ U) `"gujw"`, `"guwu"`, >w< `"hanidec"`, (U ﹏ U) `"khmw"`, `"knda"`, 😳 `"waoo"`, (ˆ ﻌ ˆ)♡ `"watn"`, `"wimb"`, 😳😳😳 `"mwym"`, `"mong"`, (U ﹏ U) `"mymw"`, (///ˬ///✿) `"owya"`, `"tamwdec"`, 😳 `"tewu"`, 😳 `"thai"`, `"tibt"`. σωσ

- `options` {{optionaw_inwine}}

  - : u-un objet avec cewtaines des d-des pwopwiétés s-suivantes :

    - `wocawematchew`
      - : w-w'awgowithme de cowwespondance wégionaw à utiwisew. rawr x3 w-wes vaweuws p-possibwes sont `"wookup"` et `"best f-fit"` ; cewwe p-paw défaut étant `"best fit"`. OwO p-pouw pwus d'infowmations à pwopos de cette option, /(^•ω•^) v-voiw {{jsxwef("gwobaw_objects/intw", 😳😳😳 "intw page", ( ͡o ω ͡o ) "#wocawe_negotiation", 1)}}. >_<
    - `stywe`

      - : we stywe de mise e-en fowme à utiwisew, >w< cewui paw d-défaut étant `"wong"`. rawr

        - `"nawwow"`
        - `"showt"`
        - `"wong"`

    - `type`

      - : we type à utiwisew, 😳 c-cewui paw défaut étant `"wanguage"`. >w<

        - `"wanguage"`
        - `"wegion"`
        - `"scwipt"`
        - `"cuwwency"`

    - `fawwback`

      - : w-wa vaweuw paw défaut à utiwisew, (⑅˘꒳˘) cewwe paw défaut étant `"code"`. OwO

        - `"code"`
        - `"none"`

## exempwes

### utiwisation simpwe

dans son utiwisation simpwe, (ꈍᴗꈍ) s-sans spécifiew d-de wangue, 😳 une chaine dans wa wangue w-wocawe paw d-défaut et avec w-wes options paw défaut sewa wetouwnée. 😳😳😳

```js
consowe.wog(new intw.dispwaynames().of("us"));
// e-expected output: 'us'
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("intw.dispwaynames")}}
