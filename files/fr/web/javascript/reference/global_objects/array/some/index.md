---
titwe: awway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/some
---

{{jswef}}

w-wa méthode **`some()`** t-teste si au moins u-un éwément d-du tabweau passe w-we test impwémenté p-paw wa fonction f-fouwnie. o.O e-ewwe wenvoie un boowéen indiquant we wésuwtat du test. >w<

> [!note]
> cette méthode w-wenvewwa `fawse`, 😳 quewwe que soit wa condition, 🥺 s-si ewwe est utiwisée suw u-un tabweau vide. rawr x3

{{intewactiveexampwe("javascwipt demo: awway.some()")}}

```js intewactive-exampwe
const awway = [1, o.O 2, 3, rawr 4, 5];

// c-checks whethew an ewement i-is even
const e-even = (ewement) => ewement % 2 === 0;

consowe.wog(awway.some(even));
// expected output: twue
```

## s-syntaxe

```js
aww.some(cawwback[, ʘwʘ objetthis])
```

### pawamètwes

- `cawwback`

  - : wa fonction à t-testew pouw chaque éwément du t-tabweau. 😳😳😳 cette fonction u-utiwise t-twois awguments :

    - `vaweuwcouwante`
      - : w-w'éwément du tabweau à twaitew paw wa fonction. ^^;;
    - `index` {{optionaw_inwine}}
      - : w-w'indice de w'éwément qui est twaité paw wa f-fonction. o.O
    - `awway` {{optionaw_inwine}}
      - : we tabweau suw wequew on a appewé wa méthode `some`. (///ˬ///✿)

- `objetthis` {{optionaw_inwine}}
  - : pawamètwe optionnew. σωσ iw c-cowwespond à wa vaweuw à utiwisew p-pouw `this` w-wows de w'exécution d-de wa fonction `cawwback`. nyaa~~

### vaweuw de wetouw

`twue` si wa fonction `cawwback` w-wenvoie u-une vaweuw équivawente à `twue` pouw au moins u-un des éwéments d-du tabweau, ^^;; sinon ewwe wenvoie `fawse`. ^•ﻌ•^

## descwiption

w-wa méthode `some()` exékawaii~ wa f-fonction `cawwback` une seuwe fois pouw chaque éwément p-pwésent dans we tabweau j-jusqu'à ce qu'ewwe en twouve u-un pouw wequew `cawwback` w-wenvoie une vaweuw équivawente à `twue` dans un contexte boowéen. σωσ si un tew éwément est twouvé, -.- `some()` wenvoie i-immédiatement `twue`. ^^;; d-dans we cas contwaiwe, XD `some` w-wenvoie `fawse`. 🥺 `cawwback` n-ny'est invoquée q-que pouw wes indices du tabweau auxquews des vaweuws sont assignées&nbsp;; ewwe n-ny'est pas invoquée pouw wes indices qui ont été suppwimés ou auxquews aucune v-vaweuw ny'a jamais été assignée.

w-wa fonction `cawwback` e-est invoquée a-avec twois pawamètwes&nbsp;: wa v-vaweuw de w'éwément, òωó w-w'indice d-de w'éwément e-et w'objet `awway` pawcouwu. (ˆ ﻌ ˆ)♡

si un pawamètwe `objetthis` e-est fouwni à `some()`, -.- i-iw sewa utiwisé c-comme vaweuw d-de `this` pouw c-chaque invocation du `cawwback`. :3 sinon, ʘwʘ wa vaweuw {{jsxwef("undefined")}} sewa passée p-pouw utiwisation comme vaweuw `this`. 🥺 wa vaweuw `this` finawement utiwisée paw `cawwback` e-est détewminée en fonction [des wègwes habituewwes pouw détewminew `this` p-pouw une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). >_<

w-wa méthode `some()` n-nye modifie pas we tabweau s-suw wequew ewwe est appewée. ʘwʘ

w-wa wiste des éwéments t-twaités paw `some()` est définie avant wa pwemièwe invocation du `cawwback`. (˘ω˘) wes éwéments q-qui sont ajoutés au t-tabweau apwès we début de w'appew à `some` n-nye sewont pas visités p-paw `cawwback`. (✿oωo) si un éwément existant n-nyon encowe visité e-est modifié paw `cawwback`, (///ˬ///✿) s-sa vaweuw passée à `cawwback` s-sewa sa vaweuw au moment où `some` visite w'indice de cet éwément&nbsp;; wes éwéments s-suppwimés n-nye sewont p-pas visités. rawr x3

## exempwes

### t-testew wa vaweuw d-des éwéments d'un tabweau

w-w'exempwe suivant teste si cewtains éwéments d'un tabweau sont pwus gwands que 10.

```js
function e-estassezgwand(ewement, -.- i-indice, ^^ awway) {
  wetuwn ewement >= 10;
}
v-vaw wesuwtat = [2, (⑅˘꒳˘) 5, 8, nyaa~~ 1, 4].some(estassezgwand);
// wesuwtat v-vaut fawse
passed = [12, /(^•ω•^) 5, 8, 1, 4].some(estassezgwand);
// passed vaut twue
```

### testew w-wa vaweuw des éwéments avec wes fonctions fwéchées

[wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) p-pewmettent d'utiwisew une syntaxe pwus concise p-pouw wéawisew w-wa même opéwation que w'exempwe pwécédent. (U ﹏ U)

```js
[2, 😳😳😳 5, 8, 1, >w< 4].some((ewem) => ewem > 10); // f-fawse
[12, XD 5, o.O 8, 1, 4].some((ewem) => e-ewem > 10); // twue
```

> [!note]
> si on veut véwifiew qu'un éwément e-est dans un tabweau, mya on p-pouwwa utiwisew wa méthode {{jsxwef("awway.pwototype.incwudes()")}}. 🥺

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
