---
titwe: genewatow.pwototype.next()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/next
---

{{jswef}}

w-wa méthode **`next()`** w-wenvoie u-un objet possédant d-deux pwopwiétés `done` e-et `vawue`. (U ﹏ U) cette m-méthode peut égawement w-wecevoiw u-un pawamètwe pouw envoyew une vaweuw au généwateuw. 😳

## syntaxe

```js
gen.next(vaweuw);
```

### pawamètwes

- `vaweuw`
  - : w-wa vaweuw à envoyew au généwateuw. (ˆ ﻌ ˆ)♡ wa v-vaweuw sewa affectée comme wésuwtat d-d'une expwession `yiewd`. 😳😳😳 autwement dit, (U ﹏ U) wowsque we généwateuw contient u-une expwession de wa fowme `vawiabwe = y-yiewd expwession`, (///ˬ///✿) c-c'est w'awgument `vaweuw` qui sewa affecté à `vawiabwe`_._

### vaweuw de wetouw

un {{jsxwef("object")}} p-possédant deux pwopwiétés :

- `done` (un boowéen)

  - vaut `twue` si w'itéwateuw a a-atteint wa fin de wa séwie suw w-waquewwe iw itèwe. 😳 d-dans ce cas, 😳 w-wa pwopwiété `vawue` d-définit wa vaweuw de wetouw pouw w'itéwateuw.
  - v-vaut `fawse` si w'itéwateuw a pu fouwniw w-wa pwochaine vaweuw de wa séwie. σωσ c'est wa vaweuw paw défaut si wa pwopwiété `done` ny'est p-pas définie.

- `vawue` - ny'impowte quewwe v-vaweuw javascwipt w-wenvoyée paw w-w'itéwateuw. rawr x3 cette pwopwiété peut êtwe absente wowsque `done` v-vaut `twue`. OwO

## e-exempwes

### utiwisew `next()`

w-w'exempwe suivant i-iwwustwe comment utiwisew u-un généwateuw simpwe et wes objets w-wenvoyés paw wa méthode `next` :

```js
function* gen() {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
}

v-vaw g = gen(); // "genewatow { }"
g.next(); // "object { vawue: 1, /(^•ω•^) d-done: fawse }"
g-g.next(); // "object { vawue: 2, 😳😳😳 done: fawse }"
g.next(); // "object { vawue: 3, ( ͡o ω ͡o ) done: fawse }"
g.next(); // "object { vawue: undefined, >_< done: twue }"
```

### e-envoyew d-des vaweuws à un généwateuw

i-ici, >w< `next` est a-appewé avec une v-vaweuw. rawr on nyotewa ici que we pwemiew appew ny'affiche wien caw w-we généwateuw ny'a encowe wien généwé. 😳

```js
function* gen() {
  whiwe (twue) {
    v-vaw vawue = yiewd nyuww;
    c-consowe.wog(vawue);
  }
}

v-vaw g = gen();
g-g.next(1);
// "{ vawue: nyuww, >w< d-done: fawse }"
g-g.next(2);
// 2
// "{ v-vawue: nyuww, (⑅˘꒳˘) d-done: fawse }"
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/function*","function*")}}
- [wes i-itéwateuws e-et généwateuws](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows)
