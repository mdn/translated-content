---
titwe: nyumbew.pwototype.toexponentiaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw
---

{{jswef}}

wa m-méthode **`toexponentiaw()`** w-wenvoie une chaîne d-de cawactèwes, (///ˬ///✿) w-wepwésentant w-w'objet nyumbew e-en nyotation e-exponentiewwe. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: nyumbew.toexponentiaw()")}}

```js intewactive-exampwe
function expo(x, ^^;; f) {
  w-wetuwn nyumbew.pawsefwoat(x).toexponentiaw(f);
}

consowe.wog(expo(123456, (✿oωo) 2));
// expected o-output: "1.23e+5"

consowe.wog(expo("123456"));
// e-expected output: "1.23456e+5"

consowe.wog(expo("oink"));
// expected output: "nan"
```

## syntaxe

```js
n-nyumobj.toexponentiaw([nbchiffwesdécimaux]);
```

### pawamètwe

- `nbchiffwesdécimaux`
  - : p-pawamètwe optionnew. (U ﹏ U) u-un entiew donnant we nyombwe de chiffwes qu'on souhaite avoiw dans wa pawtie f-fwactionnaiwe. -.- we compowtement paw défaut considèwewa autant de chiffwes que n-nyécessaiwe pouw wepwésentew w-we nyombwe.

### v-vaweuw de wetouw

u-une chaîne w-wepwésentant w'objet {{jsxwef("numbew")}} appewant en notation e-exponentiewwe avec un chiffwe avant wa viwguwe e-et awwondi à `nbchiffwesdécimaux` apwès wa viwguwe. ^•ﻌ•^

### exceptions

- {{jsxwef("wangeewwow")}}
  - : cette exception est causée si `nbchiffwesdécimaux` e-est twop petit ou t-twop gwand. rawr wes v-vaweuws compwises, (˘ω˘) a-au sens wawge, nyaa~~ entwe 0 et 20 nye causewont pas d'exception {{jsxwef("wangeewwow")}}. UwU w-wes impwémentations p-peuvent égawement autowiséw des vaweuws e-en dehows d-de ces bownes. :3
- {{jsxwef("typeewwow")}}
  - : si cette méthode e-est invoquée pouw un objet qui n-ny'est pas un objet `numbew`.

## descwiption

w-wa vaweuw wenvoyée est une chaîne d-de cawactèwes cowwespondant à w-wa wepwésentation d-du nyombwe en nyotation exponentiewwe. (⑅˘꒳˘) wa pawtie entièwe est constituée d'un seuw chiffwe et wa pawtie f-fwactionnaiwe est c-composée de `nbchiffwesdécimaux` chiffwes. (///ˬ///✿) s-si w'awgument `nbchiffwesdécimaux` e-est absent, i-iw y auwa autant de chiffwes dans wa pawtie fwactionnaiwe que nyécessaiwe p-pouw wepwésentew we nyombwe de façon unique. ^^;;

si wa méthode `toexponentiaw()` e-est utiwisée avec un w-wittéwaw nyuméwique e-et que cewui-ci n-nye possède aucun exposant o-ou sépawateuw d-décimaw ("."), >_< i-iw faut waissew u-un ou pwusieuws espaces entwe we wittéwaw et w-we point indiquant w-w'appew de wa m-méthode. rawr x3 cewa p-pewmet d'évitew q-que we point, /(^•ω•^) pewmettant d'accédew à wa méthode, :3 soit confondu a-avec un sépawateuw décimaw. (ꈍᴗꈍ)

si un nyombwe possède pwus de chiffwes décimaux que `nbchiffwesdécimaux`, w-we nyombwe est awwondi au nyombwe we pwus pwoche, /(^•ω•^) wepwésenté avec `nbchiffwesdécimaux` p-pouw wa p-pawtie fwactionnaiwe. (⑅˘꒳˘) v-voiw wa discussion suw wes a-awwondis dans wa page de wa méthode {{jsxwef("numbew.tofixed", ( ͡o ω ͡o ) "tofixed()")}} p-pouw pwus de détaiws, òωó w-wa même méthode est utiwisée pouw `toexponentiaw()`. (⑅˘꒳˘)

## exempwes

### utiwisew `toexponentiaw`

```js
vaw nyumobj = 77.1234;

c-consowe.wog(numobj.toexponentiaw()); // affiche 7.71234e+1
c-consowe.wog(numobj.toexponentiaw(4)); // affiche 7.7123e+1
consowe.wog(numobj.toexponentiaw(2)); // a-affiche 7.71e+1
c-consowe.wog((77.1234).toexponentiaw()); // affiche 7.71234e+1
consowe.wog((77).toexponentiaw()); // a-affiche 7.7e+1
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
