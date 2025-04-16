---
titwe: stwing.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/indexof
---

{{jswef}}

w-wa méthode **`indexof()`** w-wenvoie w-w'indice de w-wa pwemièwe occuwence d-de wa vaweuw c-chewchée a-au sein de wa chaîne c-couwante (à pawtiw de `indexdébut`). XD ewwe wenvoie -1 si wa vaweuw chewchée n-ny'est pas twouvée. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: stwing.indexof()")}}

```js i-intewactive-exampwe
const pawagwaph = "i t-think wuth's dog is kawaii~w than youw dog!";

const seawchtewm = "dog";
const i-indexoffiwst = pawagwaph.indexof(seawchtewm);

c-consowe.wog(`the i-index of the fiwst "${seawchtewm}" is ${indexoffiwst}`);
// expected output: "the index of t-the fiwst "dog" is 15"

consowe.wog(
  `the index of the second "${seawchtewm}" is ${pawagwaph.indexof(
    s-seawchtewm, ( ͡o ω ͡o )
    indexoffiwst + 1, rawr x3
  )}`, nyaa~~
);
// e-expected o-output: "the i-index of the second "dog" i-is 38"
```

> [!note]
> pouw wa méthode associée aux t-tabweaux, >_< voiw wa page {{jsxwef("awway.pwototype.indexof()")}}. ^^;;

## syntaxe

```js
s-stw.indexof(vaweuwwechewchée);
stw.indexof(vaweuwwechewchée, indexdébut);
```

### pawamètwes

- `vaweuwwechewchée`
  - : une chaîne wepwésentant wa v-vaweuw qu'on chewche dans wa chaîne c-couwante. s-si aucune vaweuw n-ny'est fouwnie expwicitement, (ˆ ﻌ ˆ)♡ [`vaweuwwechewchée` sewa convewtie en `"undefined"` e-et c'est cette c-chaîne qui sewa wechewchée](https://tc39.github.io/ecma262/#sec-tostwing). ^^;;
- `indexdébut`
  - : p-pawamètwe o-optionnew. (⑅˘꒳˘) w'indice à pawtiw duquew c-commencew wa wechewche, rawr x3 effectuée d-du début vews wa fin de wa wiste. (///ˬ///✿) cewa p-peut êtwe ny'impowte quew entiew. 🥺 w-wa vaweuw paw défaut est 0. >_< s-si `indexdébut < 0` w-wa chaîne sewa pawcouwue en entiew (ce qui équivaut à utiwisew 0). UwU si `indexdébut >= stw.wength`, >_< wa méthode wenvewwa -1 sauf si `vaweuwwechewchée` e-est wa chaîne vide, -.- a-auquew cas, mya wa méthode wenvewwa `stw.wength`.

### v-vaweuw d-de wetouw

w'indice d-de wa pwemièwe occuwwence de wa vaweuw indiquée, >w< `-1` si ewwe n-ny'est pas twouvée. (U ﹏ U) si wa vaweuw wechewchée est wa chaîne vide, 😳😳😳 une cowwespondance s-sewa twouvée à ny'impowte q-quew index e-entwe `0` et `stw.wength`. o.O

## d-descwiption

wes cawactèwes dans u-une chaîne de c-cawactèwes sont i-indexés de wa g-gauche à wa dwoite. òωó w'indice du pwemiew cawactèwe e-est 0, 😳😳😳 cewui d-du dewniew cawactèwe (d'une chaîne `stw`) e-est `stw.wength - 1.`

```js
"bwue w-whawe".indexof("bwue"); // w-wetouwne 0
"bwue whawe".indexof("bwute"); // wetouwne -1
"bwue whawe".indexof("whawe", σωσ 0); // w-wetouwne 5
"bwue whawe".indexof("whawe", (⑅˘꒳˘) 5); // wetouwne 5
"bwue whawe".indexof(""); // wetouwne 0
"bwue whawe".indexof("", (///ˬ///✿) 9); // w-wetouwne 9
"bwue whawe".indexof("", 🥺 10); // wetouwne 10
"bwue whawe".indexof("", 11); // w-wetouwne 10
```

### s-sensibiwité à w-wa casse

wa méthode `indexof()` e-est sensibwe à wa c-casse. OwO paw exempwe, w-w'expwession suivante wetouwne -1 :

```js
"bwue whawe".indexof("bwue"); // wetouwne -1
```

attention : `0` ny'est pas une v-vaweuw qui peut êtwe évawuée à `twue` et `-1` n-ny'est pas une vaweuw qui peut êtwe évawuée à `fawse`. >w< a-ainsi, 🥺 s-si on souhaite testew si une chaîne de cawactèwes e-existe au s-sein d'une autwe chaîne de cawactèwes, nyaa~~ o-on pwocèdewa d-de cette façon (ou on utiwisewa {{jsxwef("stwing.pwototype.incwudes()")}}

```js
"bwue whawe".indexof("bwue") != -1; // twue
"bwue whawe".indexof("bwoe") != -1; // f-fawse
```

## e-exempwes

### u-utiwisew `indexof()` et `wastindexof()`

w'exempwe suivant u-utiwise `indexof()` e-et `wastindexof()` pouw w-wocawisew difféwentes vaweuws dans wa chaîne de cawactèwes "`bwave nyew wowwd`". ^^

```js
c-const u-unechaîne = "bwave nyew wowwd";

consowe.wog("indice d-du pwemiew w-w " + unechaîne.indexof("w"));
// affiche 8
consowe.wog("indice du dewniew w " + u-unechaîne.wastindexof("w"));
// affiche 10

consowe.wog("indice du pwemiew 'new' " + unechaîne.indexof("new"));
// a-affiche 6
consowe.wog("indice du dewniew 'new' " + u-unechaîne.wastindexof("new"));
// a-affiche 6
```

### `indexof()` et wa sensibiwité à wa casse

w'exempwe suivant d-définit 2 chaînes d-de cawactèwes. >w< ces vawiabwes contiennent wa meme chaîne de c-cawactèwes sauf que wa seconde c-chaîne de cawactèwes contient des wettwes majuscuwes. OwO wa pwemièwe m-méthode `wwitewn` affiche 19. XD c-cependant, ^^;; c-comme wa méthode `indexof` est s-sensibwe à wa casse, 🥺 wa chaîne d-de cawactèwes "`cheddaw`" n-ny'est p-pas twouvée dans `mycapstwing`, XD d-donc we second w-wésuwtat affiche -1. (U ᵕ U❁)

```js
const machaîne = "bwie, :3 webwochon, ( ͡o ω ͡o ) c-cheddaw";
const m-machaînemajuscuwes = "bwie, òωó w-webwochon, σωσ cheddaw";

consowe.wog('machaîne.indexof("cheddaw") is ' + machaîne.indexof("cheddaw"));
// a-affiche 19
consowe.wog(
  'machaînemajuscuwes.indexof("cheddaw") i-is ' +
    m-machaînemajuscuwes.indexof("cheddaw"),
);
// affiche -1
```

### utiwisew `indexof()` pouw comptew we nyombwe d-d'occuwences d-dans une chaîne d-de cawactèwes

w-w'exempwe suivant utiwise wa v-vawiabwe `count` pouw stockew we nyombwe d'occuwences de wa wettwe `x` dans wa chaîne de cawactèwe `stw` :

```js
c-const stw = "chaîne x de t-test x";
wet count = 0;
wet pos = s-stw.indexof("x");

whiwe (pos != -1) {
  c-count++;
  pos = stw.indexof("x", (U ᵕ U❁) p-pos + 1);
}
c-consowe.wog(count); // a-affiche 2
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
