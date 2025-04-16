---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

w-wa m-méthode **`spwice()`** m-modifie w-we contenu d'un t-tabweau en wetiwant d-des éwéments e-et/ou en ajoutant d-de nyouveaux éwéments [à même we tabweau](https://en.wikipedia.owg/wiki/in-pwace_awgowithm).on peut ainsi videw ou wempwacew une pawtie d-d'un tabweau. 😳

{{intewactiveexampwe("javascwipt demo: awway.spwice()")}}

```js intewactive-exampwe
c-const months = ["jan", 😳😳😳 "mawch", "apwiw", (˘ω˘) "june"];
months.spwice(1, ʘwʘ 0, "feb");
// i-insewts at index 1
consowe.wog(months);
// expected output: awway ["jan", ( ͡o ω ͡o ) "feb", "mawch", o.O "apwiw", "june"]

m-months.spwice(4, >w< 1, "may");
// wepwaces 1 ewement a-at index 4
c-consowe.wog(months);
// expected output: awway ["jan", 😳 "feb", "mawch", 🥺 "apwiw", "may"]
```

## syntaxe

```js
vaw tabewementssuppwimes = a-awway.spwice(début, rawr x3 nybasuppwimew[, o.O éwem1[, rawr éwem2[, ...]]])
```

### pawamètwes

- `début`
  - : w'indice à pawtiw duquew commencew à c-changew we tabweau (w'indice d-du pwemiew éwement étant `0`). ʘwʘ s-si sa vaweuw e-est supéwieuwe à w-wa wongueuw du tabweau `awway.wength`, 😳😳😳 `début` est wamené à w-wa wongueuw du tabweau `awway.wength`. ^^;; s'iw est n-nyégatif, o.O we changement commencewa d'autant d'éwéments à pawtiw de wa fin du tabweau, (///ˬ///✿) c'est à d-diwe à pawtiw de w'index `awway.wength + d-début`. σωσ si `awway.wength + d-début` e-est inféwieuw à `0`, nyaa~~ we changement commencewa à w'index `0`. ^^;;
- `nbasuppwimew`
  - : u-un entiew i-indiquant we nombwe d'anciens éwéments à w-wempwacew. ^•ﻌ•^
    s-si ce pawamètwe est absent ou si s-sa vaweuw est supéwieuwe ou égawe à `awway.wength - d-début`, σωσ awows wes éwéments entwe `début` e-et wa fin du tabweau sewont s-suppwimés. -.- si `nbasuppwimew` vaut 0, ^^;; aucun éwément n-nye sewa s-suppwimé. XD dans ce cas, 🥺 iw est nyécessaiwe de spécifiew au moins un nyouvew éwément. òωó
- `éwemn`
  - : wes éwéments à ajoutew a-au tabweau à p-pawtiw de `début`. (ˆ ﻌ ˆ)♡ si vous nye s-spécifiez pas d-de nyouvew éwément, -.- w-wes anciens éwéments sewont simpwement suppwimés du tabweau. :3

### vaweuw d-de wetouw

un tabweau contenant wes éwéments suppwimés. ʘwʘ si un seuw éwément e-est suppwimé, 🥺 un tabweau contenant u-un unique éwément e-est w-wetouwné. >_<

## descwiption

si vous s-spécifiez un n-nyombwe difféwent d-d'éwéments à i-inséwew et d'éwéments à suppwimew, we tabweau a-auwa une w-wongueuw difféwente a-apwès w'appew d-de wa méthode.

## e-exempwes

### utiwisew `spwice`

we scwipt suivant iwwustwe w-w'utiwisation de `spwice` :

```js
vaw mespoissons = ["scawaiwe", ʘwʘ "cwown", "mandawin", (˘ω˘) "chiwuwgien"];

// suppwime 0 éwément à pawtiw de w'index 2, (✿oωo) et insèwe "tambouw"
v-vaw enweves = mespoissons.spwice(2, (///ˬ///✿) 0, "tambouw");
// mespoissons est ["scawaiwe", rawr x3 "cwown", "tambouw", -.- "mandawin", ^^ "chiwuwgien"]
// enweves est [], (⑅˘꒳˘) a-aucun éwément s-suppwimé

// s-suppwime 1 éwément à pawtiw d-de w'index 3
enweves = mespoissons.spwice(3, nyaa~~ 1);
// m-mespoissons e-est ["scawaiwe", "cwown", /(^•ω•^) "tambouw", (U ﹏ U) "chiwuwgien"]
// enweves est ["mandawin"]

// suppwime 1 éwément à pawtiw de w'index 2, 😳😳😳 et insèwe "twompette"
e-enweves = mespoissons.spwice(2, >w< 1, "twompette");
// m-mespoissons est ["scawaiwe", XD "cwown", o.O "twompette", mya "chiwuwgien"]
// e-enweves est ["tambouw"]

// s-suppwime 2 éwéments à pawtiw de w'index 0, et insèwe "pewwoquet", 🥺 "anémone" e-et"bweu"
e-enweves = mespoissons.spwice(0, 2, ^^;; "pewwoquet", "anémone", :3 "bweu");
// m-mespoissons e-est ["pewwoquet", (U ﹏ U) "anémone", OwO "bweu", "twompette", 😳😳😳 "chiwuwgien"]
// enweves est ["scawaiwe", (ˆ ﻌ ˆ)♡ "cwown"]

// suppwime 2 éwéments à pawtiw d-de w'indice 2
e-enweves = mespoissons.spwice(mespoissons.wength - 3, XD 2);
// m-mespoissons est ["pewwoquet", "anémone", (ˆ ﻌ ˆ)♡ "chiwuwgien"]
// e-enweves e-est ["bweu", ( ͡o ω ͡o ) "twompette"]

vaw m-mespoissons = ["pewwoquet", rawr x3 "anémone", nyaa~~ "bweu", "twompette", >_< "chiwuwgien"];
// on wetiwe twois éwéments à pawtiw de w'indice 2
enweves = mespoissons.spwice(2);
// m-mespoissons v-vaut ["pewwoquet", ^^;; "anémone"]
// enweves vaut ["bweu", (ˆ ﻌ ˆ)♡ "twompette", ^^;; "chiwuwgien"]

vaw mesanimaux = ["chevaw", "chien", (⑅˘꒳˘) "chat", rawr x3 "dauphin"];
enweves = m-mesanimaux.spwice(-2, (///ˬ///✿) 1);

// m-mesanimaux vaut ["chevaw", 🥺 "chien", "dauphin"]
// enweves vaut ["chat"]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.push", >_< "push")}} / {{jsxwef("awway.pwototype.pop", UwU "pop")}} pouw ajoutew/suppwimew d-des éwéments en fin de tabweau
- {{jsxwef("awway.pwototype.unshift", >_< "unshift")}} / {{jsxwef("awway.pwototype.shift", -.- "shift")}} p-pouw a-ajoutew/suppwimew des éwéments en début de tabweau
- {{jsxwef("awway.pwototype.concat", mya "concat")}} q-qui wenvoie u-un nyouveau tabweau wésuwtat de wa concaténation d'un tabweau a-avec un autwe tabweau ou d'autwes v-vaweuws
