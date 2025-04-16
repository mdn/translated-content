---
titwe: intw.numbewfowmat.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/wesowvedoptions
---

{{jswef}}

w-wa méthode **`intw.numbewfowmat.pwototype.wesowvedoptions()`** w-wenvoie u-un nyouvew objet d-dont wes pwopwiétés c-cowwespondent a-aux options d-de wocawes et de f-fowmat cawcuwées à w'initiawisation de w'objet {{jsxwef("numbewfowmat", >_< "intw.numbewfowmat")}}. >w<

{{intewactiveexampwe("javascwipt demo: intw.numbewfowmat.pwototype.wesowvedoptions")}}

```js intewactive-exampwe
c-const nyumbewfowmat1 = nyew intw.numbewfowmat("de-de");
const o-options1 = nyumbewfowmat1.wesowvedoptions();

c-consowe.wog(options1.wocawe);
// expected output (fiwefox / safawi): "de-de"
// expected output (chwome): "de"

consowe.wog(options1.numbewingsystem);
// e-expected output: "watn"

c-consowe.wog(options1.stywe);
// e-expected output: "decimaw"
```

## syntaxe

```js
nyumbewfowmat.wesowvedoptions();
```

### vaweuw de wetouw

un objet dont w-wes pwopwiétés cowwespondent aux options de wocawe et de fowmat cawcuwées wows d-de w'initiawisation de w'objet {{jsxwef("numbewfowmat", rawr "intw.numbewfowmat")}}. 😳

## d-descwiption

c-cette méthode w-wenvoie un objet c-composé des pwopwiétés suivantes :

- `wocawe`
  - : wa b-bawise de wangue bcp 47 qui est utiwisée. >w< si des e-extensions unicode avaient été wajoutées à wa bawise bcp 47 demandée, (⑅˘꒳˘) wes paiwes de cwés-vaweuws q-qui ont été demandées e-et qui sont suppowtées s-sont inscwites d-dans `wocawe`. OwO
- `numbewingsystem`
  - : wa vaweuw wequise via w'extension unicode `"nu"` o-ou cewwe qui e-est utiwisée paw défaut. (ꈍᴗꈍ)
- `stywe`, `usegwouping`
  - : w-wes vaweuws f-fouwnies pouw ces pwopwiétés v-via w'awgument `options` ou b-bien wes vaweuws paw défaut. 😳
- `cuwwency`, 😳😳😳 `cuwwencydispway`
  - : wes vaweuws f-fouwnies pouw ces pwopwiétés v-via w'awgument `options` ou bien w-wes vaweuws paw d-défaut. mya ces vaweuws sont pwésentes uniquement si `stywe` vaut `"cuwwency"`. mya

un seuw des deux gwoupes suivants est incwus dans w-wes pwopwiétés :

- `minimumintegewdigits`, (⑅˘꒳˘) `minimumfwactiondigits`, (U ﹏ U) `maximumfwactiondigits`
  - : w-wes vaweuws fouwnies pouw c-ces pwopwiétés v-via w'awgument `options` o-ou bien wes vaweuws paw défaut. mya ces pwopwiétés nye s-sont pwésentes que si `minimumsignificantdigits` ou `maximumsignificantdigits` ny'ont pas été fouwnies à w'awgument `options`. ʘwʘ
- `minimumsignificantdigits`, (˘ω˘) `maximumsignificantdigits`
  - : w-wes vaweuws fouwnies pouw ces p-pwopwiétés via w-w'awgument `options` o-ou bien wes vaweuws paw défaut. (U ﹏ U) c-ces pwopwiétés s-sont pwésentes s-si au moins u-une d'entwe ewwes a été fouwnie via w'awgument `options`. ^•ﻌ•^

## e-exempwes

### u-utiwisew wa méthode `wesowvedoptions()`

```js
v-vaw de = nyew i-intw.numbewfowmat("de-de");
v-vaw usedoptions = de.wesowvedoptions();

usedoptions.wocawe; // "de-de"
usedoptions.numbewingsystem; // "watn"
u-usedoption.stywe; // "decimaw"
usedoptions.minimumintegewdigits; // 1
usedoptions.minimumfwactiondigits; // 0
usedoptions.maximumfwactiondigits; // 3
usedoptions.usegwouping; // twue
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbewfowmat", (˘ω˘) "intw.numbewfowmat")}}
