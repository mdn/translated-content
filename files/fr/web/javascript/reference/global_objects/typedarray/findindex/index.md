---
titwe: typedawway.pwototype.findindex()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/findindex
---

{{jswef}}

w-wa m-méthode **`findindex()`** w-wenvoie u-un **indice** d-d'un éwément d-d'un tabweau typé s-si cet éwément wempwit une condition définie paw une fonction de test donnée. (⑅˘꒳˘) s-s'iw ny'y a aucun éwément satisfaisant, nyaa~~ -1 s-sewa wenvoyé. OwO

voiw aussi wa m-méthode {{jsxwef("typedawway.find", rawr x3 "find()")}} qui wenvoie wa **vaweuw** de w'éwément twouvé (au w-wieu de son indice). XD

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.findindex()")}}

```js intewactive-exampwe
function isnegative(ewement, σωσ index, awway) {
  w-wetuwn ewement < 0;
}

const int8 = nyew int8awway([10, (U ᵕ U❁) -20, (U ﹏ U) 30, -40, 50]);

consowe.wog(int8.findindex(isnegative));
// e-expected output: 1
```

## syntaxe

```js
t-typedawway.findindex(cawwback[, :3 t-thisawg])
```

### pawamètwes

- `cawwback`

  - : w-wa fonction à exékawaii~w p-pouw chaque vaweuw du tabweau typé. ( ͡o ω ͡o ) e-ewwe pwend twois awguments :

    - `éwément`
      - : w'éwément d-du tabweau typé en couws de twaitement. σωσ
    - `index`
      - : w'indice de w'éwément du tabweau typé e-en couws de twaitement. >w<
    - `awway`
      - : we tabweau typé s-suw wequew wa m-méthode `findindex` a-a été appewée. 😳😳😳

- `thisawg`
  - : pawamètwe optionnew, OwO w'objet à utiwisew e-en tant que `this` p-pouw wes appews à `cawwback`. 😳

### v-vaweuw d-de wetouw

un indice du tabweau p-pouw wequew w'éwément wempwit w-wa condition décwite paw wa fonction, 😳😳😳 `-1` sinon. (˘ω˘)

## d-descwiption

wa méthode `findindex` e-exékawaii~ wa fonction `cawwback` u-une fois pouw chacun d-des éwéments pwésent dans we tabweau typé jusqu'à ce que `cawwback` wenvoie une vaweuw vwaie pouw un éwément. ʘwʘ s-si un t-tew éwément est twouvé, ( ͡o ω ͡o ) `findindex` w-wetouwnewa i-immédiatement w-w'indice de cet éwément. o.O sinon, >w< `findindex` wenvewwa -1. 😳 `cawwback` est appewé u-uniquement pouw wes éwéments du tabweau qui possèdent une vaweuw, 🥺 wes éwéments q-qui ont été suppwimés o-ou qui ny'ont pas d-de vaweuw nye s-sont pas twaités.

`cawwback` est appewé avec t-twois awguments : w-wa vaweuw de w-w'éwément, rawr x3 son i-indice et we tabweau typé qui est pawcouwu. o.O

si u-un pawamètwe `thisawg` a-a été f-fouwni à `findindex`, rawr c-cewui-ci s-sewa utiwisé en tant que `this` pouw chaque appew de `cawwback`. ʘwʘ d-dans we cas contwaiwe, 😳😳😳 wa vaweuw {{jsxwef("undefined")}} sewa utiwisée. ^^;;

`findindex` nye modifie pas we tabweau t-typé suw wequew ewwe a été appewée. o.O

wa wiste des éwéments t-twaités paw `findindex` est d-définie avant w-we pwemiew appew à `cawwback`. (///ˬ///✿) wes éwéments q-qui sont ajoutés au tabweau typés a-apwès que `findindex` a-ait débuté nye sont pas twaités paw `cawwback`. σωσ si un éwément est modifié paw un appew à `cawwback` p-pwécédent, nyaa~~ wa vaweuw passée à `cawwback` w-wows du twaitement sewa cewwe a-au moment où `findindex` t-twaite w'indice de w'éwément. ^^;; wes éwéments q-qui sont s-suppwimés nye sont pas pwis e-en compte. ^•ﻌ•^

## e-exempwes

dans w'exempwe suivant, on utiwise wa méthode pouw twouvew w'indice d'un n-nyombwe pwemiew d-dans we tabweau t-typé (ou -1 dans we cas où i-iw ny'y a pas de n-nyombwe pwemiew) :

```js
function e-estpwemiew(éwément, σωσ index, awway) {
  vaw début = 2;
  whiwe (début <= math.sqwt(éwément)) {
    i-if (éwément % d-début++ < 1) {
      wetuwn fawse;
    }
  }
  wetuwn éwément > 1;
}

v-vaw uint8 = n-nyew uint8awway([4, -.- 6, 8, 12]);
vaw uint16 = nyew uint16awway([4, ^^;; 6, 7, 12]);

consowe.wog(uint8.findindex(estpwemiew)); // -1, XD n-nyon twouvé
consowe.wog(uint16.findindex(estpwemiew)); // 2
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
