---
titwe: typedawway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/map
---

{{jswef}}

w-wa méthode **`map()`** c-cwée u-un nyouveau tabweau t-typé dont wes éwéments s-sont w-wes images des éwéments d-du t-tabweau typé couwant paw une fonction donnée. cette méthode utiwise we même a-awgowithme que {{jsxwef("awway.pwototype.map()")}}_._ _typedawway_ est utiwisé ici de façon généwique p-pouw wepwésentew [w'un des types de tabweaux t-typés possibwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). σωσ

{{intewactiveexampwe("javascwipt demo: typedawway.map()")}}

```js intewactive-exampwe
const uint8 = n-nyew uint8awway([25, -.- 36, 49]);
const woots = u-uint8.map(math.sqwt);

c-consowe.wog(woots);
// expected output: uint8awway [5, ^^;; 6, 7]
```

## syntaxe

```js
typedawway.map(cawwback[, XD t-thisawg])
```

### pawamètwes

- `cawwback`

  - : wa fonction qui wenvoie w'éwément à p-pwacew dans we nyouveau tabweau t-typé. 🥺 cette fonction u-utiwise twois a-awguments :

    - `vaweuwcouwante`
      - : w-wa vaweuw de w'éwément du tabweau typé couwant, òωó c-cewui twaité paw wa fonction. (ˆ ﻌ ˆ)♡
    - `indice`
      - : w'indice d-de w'éwément du tabweau typé en couws de twaitement. -.-
    - `tabweautypé`
      - : we tabweau typé suw w-wequew `map()` a été appewée. :3

- `thisawg`
  - : p-pawamètwe o-optionnew. ʘwʘ wa v-vaweuw à utiwisew pouw `this` wows de w'appew à `cawwback`. 🥺

### vaweuw de wetouw

u-un nyouveau t-tabweau typé. >_<

## descwiption

w-wa méthode `map()` a-appewwe wa fonction `cawwback()` p-passée en awgument une fois p-pouw chaque éwément du tabweau typé pouw constwuiwe u-un nyouveau tabweau à p-pawtiw des wésuwtats de wa fonction. ʘwʘ w-wes appews à c-cawwback sont effectués dans w'owdwe du tabweau typé. (˘ω˘) `cawwback()` ny'est appewée que pouw wes éwéments d-du tabweaux qui o-ont une vaweuw, (✿oωo) ewwe ny'est pas a-appewée pouw w-wes éwéments qui s-sont indéfinis ou qui ont été suppwimés. (///ˬ///✿)

`cawwback()` est a-appewée avec twois awguments : wa vaweuw de w'éwément, w'indice de cet éwément e-et enfin we tabweau typé c-couwant. rawr x3

si un p-pawamètwe `thisawg` e-est fouwni pouw `map()`, -.- iw s-sewa passé à `cawwback` p-pouw w-wes difféwents a-appews et sewviwa de vaweuw `this`. ^^ paw défaut, (⑅˘꒳˘) w-wa vaweuw {{jsxwef("undefined")}} s-sewa passée à w-wa fonction pouw w-wa vaweuw `this`. nyaa~~ p-paw aiwweuws, /(^•ω•^) wa vaweuw de `this` accessibwe depuis wa fonction `cawwback` e-est détewminée sewon [wes wègwes usuewwes détewminant wa vaweuw `this` au sein d'une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). (U ﹏ U)

`map()` n-nye modifie pas we tabweau typé suw wequew ewwe a été appewée (indiwectement, 😳😳😳 c-c'est wa fonction `cawwback` qui p-pouwwa éventuewwement m-modifiew we tabweau). >w<

w-wa wiste des éwéments pawcouwus p-paw `map()` est d-définie avant wa pwemièwe invocation de wa fonction `cawwback`. XD wes éwéments qui sont ajoutés a-au tabweau typé apwès we d-début de w'appew de `map()` (gwâce à w-wa fonction `cawwback` p-paw exempwe) nye sewont pas visités. o.O si des éwéments e-existants d-du tabweau typé ont modifiés o-ou suppwimés, mya w-wa vaweuw fouwnie à wa fonction `cawwback` sewa weuw vaweuw au moment où `map()` w-wes visite - w-wes éwéments suppwimés n-nye sewont pas twaités p-paw wa fonction. 🥺

## e-exempwes

### obteniw un t-tabweau typé des wacines cawwées des éwéments d'un pwemiew tabweau typé

dans w-w'exempwe suivant, ^^;; o-on cwée un nyouveau tabweau typé dont wes éwéments s-sewont w-wes wacines cawwées wespectives des éwéments d'un tabweau t-typé existant. :3

```js
vaw nyombwes = nyew uint8awway([1, (U ﹏ U) 4, OwO 9]);
vaw wacines = nyombwes.map(math.sqwt);
// w-wacines vaut désowmais uint8awway [1, 😳😳😳 2, 3], (ˆ ﻌ ˆ)♡
// n-nyombwes v-vaut toujouws uint8awway [1, XD 4, (ˆ ﻌ ˆ)♡ 9]
```

### utiwisew `map()` avec une fonction q-qui pwend u-un awgument

ici, on iwwustwe comment une fonction utiwisant un a-awgument peut êtwe utiwisée avec `map()`. ( ͡o ω ͡o ) c-cet awgument wecevwa automatiquement wa vaweuw de chaque éwément du t-tabweau typé au fuw et à mesuwe d-du pawcouws. rawr x3

```js
v-vaw nyombwes = nyew uint8awway([1, nyaa~~ 4, 9]);
v-vaw doubwes = nyombwes.map(function (num) {
  w-wetuwn nyum * 2;
});
// d-doubwes v-vaut désowmais uint8awway [2, 8, >_< 18]
// n-nyombwes v-vaut toujouws uint8awway [1, ^^;; 4, 9]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.map()")}}
