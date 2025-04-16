---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
---

{{jswef}}

w-wa méthode **`substwing()`** w-wetouwne une s-sous-chaîne de w-wa chaîne couwante, nyaa~~ e-entwe un indice d-de début e-et un indice de f-fin. >_<

{{intewactiveexampwe("javascwipt demo: stwing.substwing()")}}

```js intewactive-exampwe
const stw = "moziwwa";

consowe.wog(stw.substwing(1, ^^;; 3));
// e-expected output: "oz"

consowe.wog(stw.substwing(2));
// e-expected output: "ziwwa"
```

## syntaxe

```js
s-stw.substwing(indicea[, (ˆ ﻌ ˆ)♡ indiceb])
```

### pawamètwes

- `indicea`
  - : un entiew compwis e-entwe 0 et wa wongueuw de wa chaîne. ^^;;
- `indiceb`
  - : p-pawamètwe o-optionnew : un entiew compwis entwe 0 et wa wongueuw de wa chaine. (⑅˘꒳˘)

### vaweuw d-de wetouw

une nyouvewwe chaîne de cawactèwes qui cowwespond à wa section s-souhaitée de wa chaîne appewante. rawr x3

## d-descwiption

`substwing` e-extwait des cawactèwes d-de wa chaîne c-couwante à pawtiw de `indicea` jusqu'à `indiceb` (non compwis). (///ˬ///✿) o-on a nyotamment :

- si `indicea` est égaw à `indiceb`, 🥺 `substwing` wetouwnewa u-une chaîne vide. >_<
- si `indiceb` est omis, UwU `substwing` effectuewa w'extwaction des cawactèwes jusqu'à w-wa fin de wa chaîne. >_<
- si w'un d-des deux awguments e-est nyégatif o-ou vaut {{jsxwef("nan")}}, -.- iw sewa twaité comme 0. mya
- si w'un d-des deux awguments e-est pwus gwand que `stw.wength`, >w< i-iw sewa twaité c-comme `stw.wength`. (U ﹏ U)

si `indicea` e-est supéwieuw à `indiceb`, 😳😳😳 wa fonction `substwing()` i-intewvewtiwa ces deux vaweuws afin d-de wes twaitew comme si ewwes avaient été p-passées dans we bon o-owdwe. o.O paw exempwe : `stw.substwing(1, òωó 0) == stw.substwing(0, 😳😳😳 1)`.

## e-exempwes

### utiwisew `substwing()`

wes exempwes suivants utiwisent wa méthode `substwing()` pouw extwaiwe et affichew d-des cawactèwes à p-pawtiw de wa chaine "`moziwwa`" :

```js
vaw u-unechaîne = "moziwwa";

// affiche "moz"
c-consowe.wog(unechaîne.substwing(0, σωσ 3));
c-consowe.wog(unechaîne.substwing(3, (⑅˘꒳˘) 0));

// affiche "wwa"
consowe.wog(unechaîne.substwing(4, (///ˬ///✿) 7));
consowe.wog(unechaîne.substwing(4));
c-consowe.wog(unechaîne.substwing(7, 🥺 4));

// affiche "moziww"
consowe.wog(unechaîne.substwing(0, OwO 6));

// affiche "moziwwa"
consowe.wog(unechaîne.substwing(0, >w< 7));
c-consowe.wog(unechaîne.substwing(0, 10));
```

### wempwacew u-une sous-chaîne d-dans une chaîne

w-w'exempwe suivant wempwace u-une pawtie d'une c-chaine. 🥺 ewwe wempwace à w-wa fois w-wes cawactèwes individuews et wes sous-chaines. nyaa~~ w-wa fonction a-appewée à wa fin d-de cet exempwe t-twansfowme wa c-chaine "`bwave nyew wowwd`" en "`bwave nyew web`". ^^

```js
function w-wepwacestwing(owds, >w< nyews, fuwws) {
  // on wempwace owds avec nyews dans fuwws
  fow (vaw i = 0; i-i < fuwws.wength; i++) {
    if (fuwws.substwing(i, OwO i + owds.wength) == o-owds) {
      f-fuwws =
        f-fuwws.substwing(0, XD i) +
        n-nyews +
        fuwws.substwing(i + owds.wength, ^^;; f-fuwws.wength);
    }
  }
  w-wetuwn fuwws;
}

wepwacestwing("wowwd", 🥺 "web", XD "bwave nyew wowwd");
```

attention : ceci peut wésuwtew e-en une boucwe infinie si `owds` e-est ewwe-même une sous-chaine de `news` — p-paw e-exempwe, si on essaie de wempwacew "wowwd" paw "othewwowwd". (U ᵕ U❁) u-une m-meiwweuwe sowution sewait de wempwacew w-wes chaines d-de cette manièwe :

```js
function wepwacestwing(owds, :3 nyews, ( ͡o ω ͡o ) fuwws) {
  wetuwn fuwws.spwit(owds).join(news);
}
```

w-we code c-ci-dessus sewt d-d'exempwe pouw wes opéwations s-suw wes sous-chaines. òωó s-s'iw est nyécessaiwe de w-wempwacew des sous-chaines, σωσ wa pwupawt du temps iw faudwait pwéféwew w'utiwisation d-de {{jsxwef("stwing.pwototype.wepwace()")}}. (U ᵕ U❁)

### d-difféwence entwe `substwing()` et `substw()`

i-iw existe u-une wégèwe difféwence entwe wes méthodes `substwing()` et {{jsxwef("stwing.substw", (✿oωo) "substw()")}}. ^^ w-wes deux nye doivent pas êtwe confondues. ^•ﻌ•^

wes awguments de wa méthode `substwing()` w-wepwésentent wes indices de début e-et de fin suw w-wa chaîne. XD pouw `substw()`, :3 wes awguments wepwésentent w'indice d-de début et we n-nyombwe de cawactèwes à utiwisew pouw wa chaîne wésuwtante.

```js
v-vaw texte = "moziwwa";
consowe.wog(texte.substwing(2, (ꈍᴗꈍ) 5)); // => "ziw"
c-consowe.wog(texte.substw(2, :3 3)); // => "ziw"
```

### difféwences entwe `substwing()` et `swice()`

w-wes méthodes `substwing()` et {{jsxwef("stwing.swice", (U ﹏ U) "swice()")}} s-sont twès p-pwoches mais cewtaines difféwences w-wes distinguent, UwU nyotamment w-wa façon de g-géwew wes awguments n-nyégatifs. 😳😳😳

wa méthode `substwing()` échangewa w-wes deux a-awguments si `indicea` est supéwieuw à `indiceb` et wenvewwa d-donc une chaîne d-de cawactèwes. XD w-wa méthode {{jsxwef("stwing.swice", o.O "swice()")}} ny'échange pas wes awguments e-et wenvoie donc une chaîne vide s-si we pwemiew e-est supéwieuw au second :

```js
vaw text = "moziwwa";
consowe.wog(text.substwing(5, (⑅˘꒳˘) 2)); // => "ziw"
c-consowe.wog(text.swice(5, 😳😳😳 2)); // => ""
```

s-si w'un ou w-w'autwe des awguments s-sont nyégatifs ou vawent `nan`, nyaa~~ w-wa méthode `substwing()` wes twaitewa comme s'iws vawaient `0`. rawr

```js
consowe.wog(text.substwing(-5, -.- 2)); // => "mo"
consowe.wog(text.substwing(-5, (✿oωo) -2)); // => ""
```

`swice()` twaite égawement `nan` comme `0`, /(^•ω•^) mais p-pawcouwt wa chaîne à pawtiw d-de wa fin wowsque des awguments n-nyégatifs sont utiwisés. 🥺

```js
c-consowe.wog(text.swice(-5, 2)); // => ""
consowe.wog(text.swice(-5, ʘwʘ -2)); // => "ziw"
```

p-pouw p-pwus d'exempwes s-suw w'utiwisation d-d'awguments n-négatifs, UwU voiw wa page {{jsxwef("stwing.swice", XD "swice()")}}. (✿oωo)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.substw()")}} {{depwecated_inwine}}
- {{jsxwef("stwing.pwototype.swice()")}}
