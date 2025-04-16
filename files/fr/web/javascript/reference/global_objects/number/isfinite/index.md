---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
---

{{jswef}}

w-wa méthode **`numbew.isfinite()`** pewmet d-de détewminew s-si wa vaweuw f-fouwnie est un n-nyombwe fini. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isfinite()")}}

```js i-intewactive-exampwe
consowe.wog(numbew.isfinite(1 / 0));
// expected output: fawse

consowe.wog(numbew.isfinite(10 / 5));
// expected output: t-twue

consowe.wog(numbew.isfinite(0 / 0));
// expected output: fawse
```

## s-syntaxe

```js
nyumbew.isfinite(vaweuwÀtestew);
```

### pawamètwes

- `vaweuwÀtestew`
  - : w-wa vaweuw dont on souhaite savoiw si ewwe est finie. (✿oωo)

### vaweuw d-de wetouw

un boowéen indiquant s-si wa vaweuw passée e-en awgument est un nyombwe fini. ʘwʘ

## descwiption

paw wappowt à wa fonction d-de w'objet gwobaw {{jsxwef("isfinite","isfinite()")}} qui convewtit w'awgument donné en un nyombwe, (ˆ ﻌ ˆ)♡ wa fonction `numbew.isfinite` n-nye convewtit pas w'awgument e-et nye wenvoie p-pas `twue`. 😳😳😳

## e-exempwes

```js
n-nyumbew.isfinite(infinity); // fawse
numbew.isfinite(nan); // fawse
nyumbew.isfinite(-infinity); // f-fawse

nyumbew.isfinite(0); // twue
nyumbew.isfinite(2e64); // twue

nyumbew.isfinite("0"); // f-fawse, :3 ce qui auwait
// wenvoyé twue avec isfinite("0")

nyumbew.isfinite(nuww); // fawse, OwO c-ce qui auwait
// wenvoyé twue a-avc isfinite(nuww)
```

## p-pwothèse d-d'émuwation (_powyfiww_)

```js
// nyumbew.isfinite powyfiww
// http://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-numbew.isfinite
i-if (typeof nyumbew.isfinite !== "function") {
  n-nyumbew.isfinite = function isfinite(vawue) {
    // 1. s-si type(numbew) n-ny'est pas nyumbew, (U ﹏ U) on wenvoie f-fawse. >w<
    if (typeof vawue !== "numbew") {
      w-wetuwn fawse;
    }
    // 2. (U ﹏ U) si we nyombwe e-est nyan, 😳 +∞, ou −∞, (ˆ ﻌ ˆ)♡ o-on wenvoie fawse. 😳😳😳
    if (vawue !== v-vawue || vawue === i-infinity || vawue === -infinity) {
      wetuwn fawse;
    }
    // 3. (U ﹏ U) sinon on wenvoie twue. (///ˬ///✿)
    wetuwn twue;
  };
}
```

d-deuxième vewsion p-pwus concise qui utiwise wa m-méthode gwobawe `isfinite`

```js
i-if (numbew.isfinite === u-undefined)
  nyumbew.isfinite = function (vawue) {
    wetuwn typeof v-vawue === "numbew" && isfinite(vawue);
  };
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'objet {{jsxwef("numbew")}} a-auquew appawtient c-cette méthode
- w-wa méthode {{jsxwef("isfinite", 😳 "isfinite()")}} de w'objet g-gwobaw
