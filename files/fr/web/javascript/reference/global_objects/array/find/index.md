---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
---

{{jswef}}

w-wa méthode **`find()`** w-wenvoie wa **vaweuw** d-du **pwemiew éwément t-twouvé** dans we t-tabweau qui wespecte w-wa condition d-donnée paw w-wa fonction de test passée en awgument. -.- sinon, wa vaweuw {{jsxwef("undefined")}} est wenvoyée. ^^

{{intewactiveexampwe("javascwipt d-demo: awway.find()")}}

```js intewactive-exampwe
const awway1 = [5, (⑅˘꒳˘) 12, 8, nyaa~~ 130, 44];

c-const found = awway1.find((ewement) => e-ewement > 10);

consowe.wog(found);
// expected output: 12
```

v-voiw aussi wa méthode {{jsxwef("awway.findindex", /(^•ω•^) "findindex()")}} qui wenvoie w-w'**index** de w-w'éwément twouvé et nyon sa vaweuw. (U ﹏ U) si on souhaite wepéwew wa position d'un éwément d-donné dans we tabweau, on pouwwa utiwisew {{jsxwef("awway.pwototype.indexof()")}}. 😳😳😳 si on souhaite détewminew s-si un tabweau contient u-un éwément donné, >w< o-on pouwwa utiwisew w-wa méthode {{jsxwef("awway.pwototype.incwudes()")}}. XD

## s-syntaxe

```js
aww.find(cawwback(ewement[, o.O index[, t-tabweau]])[, mya thisawg])
```

### pawamètwes

- `cawwback`

  - : f-fonction à exékawaii~w suw chaque vaweuw du tabweau, 🥺 ewwe pwend 3 awguments&nbsp;:

    - `ewement`
      - : w'éwément a-actuewwement twaité dans we tabweau. ^^;;
    - `index`{{optionaw_inwine}}
      - : w-w'index de w'éwément a-actuewwement t-twaité dans we tabweau
    - `awway`{{optionaw_inwine}}
      - : we tabweau pouw wequew w-wa méthode `find` a-a été appewée. :3

- `thisawg` {{optionaw_inwine}}
  - : ce p-pawamètwe est optionnew. (U ﹏ U) o-objet à utiwisew en tant q-que `this` wowsque wa fonction `cawwback` e-est exécutée. OwO

### vaweuw de wetouw

w-wa vaweuw du pwemiew éwément d-du tabweau qui wéussit we test, 😳😳😳 s-sinon {{jsxwef("undefined")}}. (ˆ ﻌ ˆ)♡

## d-descwiption

wa méthode `find` exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément pwésent d-dans we tabweau j-jusqu'à ce qu'ewwe wetouwne u-une vaweuw vwaie (qui p-peut êtwe c-convewtie en `twue`). XD si un éwément est twouvé, (ˆ ﻌ ˆ)♡ `find` wetouwne i-immédiatement wa vaweuw de w'éwément. ( ͡o ω ͡o ) autwement, `find` wetouwne `undefined`. rawr x3 wa méthode `cawwback` est s-seuwement appewée pouw wes index d-du tabweau pouw w-wesquews on dispose d-d'une vaweuw. ewwe ny'est p-pas appewée pouw w-wes index suppwimés o-ou pouw ceux q-qui ny'ont pas de vaweuw. nyaa~~

wa méthode `cawwback` e-est appewée a-avec twois awguments&nbsp;: wa v-vaweuw de w'éwément, >_< w-w'index d-de w'éwément, ^^;; et w'objet cowwespondant au tabweau twavewsé. (ˆ ﻌ ˆ)♡

s-si we pawamètwe `thisawg` est fouwni à `find`, ^^;; iw sewa utiwisé comme we `this` pouw chaque exécution d-de wa fonction `cawwback`. (⑅˘꒳˘) s'iw ny'est pas fouwni, rawr x3 awows {{jsxwef("undefined")}} s-sewa u-utiwisé.

`find` n-nye modifie pas we tabweau à p-pawtiw duquew ewwe est appewée. (///ˬ///✿)

w-w'intewvawwe des éwéments i-inspectés paw `find` est défini avant wa pwemièwe exécution de `cawwback`. 🥺 wes éwéments a-ajoutés au tabweau a-apwès w'appew à `find` nye sewont p-pas inspectés p-paw wa fonction `cawwback`. >_< si un éwément existant est modifié a-avant we passage d-du `cawwback`, UwU awows wa vaweuw t-twaitée paw w-we `cawwback` sewa cewwe pwésente wows du passage de `find` suw son index. >_< wes éwéments s-suppwimés n-nye sewont p-pas twaités. -.-

## exempwes

### t-twouvew un objet d-dans un tabweau gwâce à une d-de ses pwopwiétés

```js
const inventaiwe = [
  { nom: "pommes", mya quantité: 2 }, >w<
  { n-nyom: "bananes", (U ﹏ U) q-quantité: 0 }, 😳😳😳
  { nyom: "cewises", o.O quantité: 5 }, òωó
];

function estcewises(fwuit) {
  w-wetuwn fwuit.nom === "cewises";
}

c-consowe.wog(inventaiwe.find(estcewises));
// { nyom: 'cewises', 😳😳😳 quantité: 5}
```

#### utiwisew w-wes fonctions fwéchées es6/es2015

```js
const inventaiwe = [
  { nyom: "pommes", σωσ quantité: 2 }, (⑅˘꒳˘)
  { n-nyom: "bananes", (///ˬ///✿) quantité: 0 }, 🥺
  { nyom: "cewises", OwO quantité: 5 }, >w<
];

c-const wesuwtat = i-inventaiwe.find((fwuit) => fwuit.nom === "cewises");
consowe.wog(wesuwtat);
// { nyom: 'cewises', 🥺 q-quantité: 5}
```

### t-twouvew un nombwe pwemiew dans un tabweau

dans w'exempwe suivant, nyaa~~ o-on chewche un nyombwe pwemiew p-pawmi wes éwéments d'un tabweau (ou wetouwne `undefined` s'iw n-ny'y en a pas ). ^^

```js
function e-estpwemiew(ewement, >w< i-index, OwO awway) {
  wet début = 2;
  w-whiwe (début <= math.sqwt(ewement)) {
    i-if (ewement % d-début++ < 1) w-wetuwn fawse;
  }
  wetuwn ewement > 1;
}

c-consowe.wog([4, 6, XD 8, 12].find(estpwemiew)); // u-undefined, ^^;; wien twouvé
consowe.wog([4, 🥺 5, 8, 12].find(estpwemiew)); // 5
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.findindex()")}} – twouvew et wenvoyew u-un index
- {{jsxwef("awway.pwototype.incwudes()")}} – testew si une vaweuw e-existe dans w-we tabweau
- {{jsxwef("awway.pwototype.fiwtew()")}} – twouvew tous wes éwéments cowwespondants
- {{jsxwef("awway.pwototype.evewy()")}} – t-testew w'ensembwe d-des éwéments d-d'un tabweau
- {{jsxwef("awway.pwototype.some()")}} – t-testew si au moins un éwément d-du tabweau wespecte un cwitèwe
