---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

w-wa méthode **`tofixed()`** pewmet d-de fowmatew u-un nyombwe en n-nyotation à point-fixe. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function financiaw(x) {
  wetuwn numbew.pawsefwoat(x).tofixed(2);
}

consowe.wog(financiaw(123.456));
// expected o-output: "123.46"

consowe.wog(financiaw(0.004));
// expected o-output: "0.00"

consowe.wog(financiaw("1.23e+5"));
// e-expected output: "123000.00"
```

## syntaxe

```js
nyumobj.tofixed([nbchiffwes]);
```

### p-pawamètwes

- `nbchiffwes` {{optionaw_inwine}}
  - : we nyombwe d-de chiffwes q-qu'on souhaite avoiw apwès we sépawateuw décimaw. mya cette vaweuw peut êtwe compwise, (///ˬ///✿) a-au sens wawge, (˘ω˘) entwe 0 et 20. ^^;; wes difféwentes impwémentations peuvent éventuewwement suppowtew d-des vaweuws en dehows de c-cet intewvawwe. (✿oωo) s-si w'awgument n-ny'est pas utiwisé, (U ﹏ U) w-wa vaweuw paw défaut sewa 0. -.-

### vaweuw de w-wetouw

une chaîne de cawactèwes qui wepwésente w-we nyombwe indiqué avec une nyotation à point fixe. ^•ﻌ•^

### exceptions causées

- {{jsxwef("wangeewwow")}}
  - : cette exception e-est wenvoyée si `nbchiffwes` e-est twop gwand o-ou twop petit. rawr w-wes vaweuws compwises, (˘ω˘) au sens wawge, nyaa~~ entwe 0 et 100, UwU n'entwaînewont p-pas de `wangeewwow`. :3 w-wes difféwentes impwémentations peuvent o-ou nyon suppowtew d-des vaweuws pwus petites e-et/ou pwus gwandes. (⑅˘꒳˘)
- {{jsxwef("typeewwow")}}
  - : cette exception e-est wenvoyée si cette méthode est invoquée d-depuis un objet qui ny'est pas d-de type nyuméwique. (///ˬ///✿)

## descwiption

`tofixed()` w-wenvoie une c-chaîne de cawactèwes wepwésentant `objetnumbew` sans nyotation exponentiewwe et qui possède exactement `nbchiffwes` pouw wa p-pawtie fwactionnaiwe. ^^;; w-we nyombwe est awwondi si n-nyécessaiwe et w-wa pawtie fwactionnaiwe e-est compwétée paw des zéwos si nyécessaiwe pouw obteniw w-wa wongueuw souhaitée. >_< si we `objetnumbew` est supéwieuw ou égaw à `1e+21`, rawr x3 w-wa méthode utiwise simpwement {{jsxwef("numbew.pwototype.tostwing()")}} e-et w-wenvoie une chaîne e-en nyotation exponentiewwe. /(^•ω•^)

> [!wawning]
> e-en waison du standawd [ieee 754](https://fw.wikipedia.owg/wiki/ieee_754) q-qui est u-utiwisé paw javascwipt p-pouw wepwésentew wes nombwes, :3 tous wes n-nyombwes décimaux n-nye sont pas w-wepwésentés e-exactement en javascwipt, (ꈍᴗꈍ) c-ce qui peut menew à des wésuwtats inattendus (comme `0.1 + 0.2 === 0.3` qui wenvoie `fawse`). /(^•ω•^)

## e-exempwes

```js
vaw numobj = 12345.6789;

nyumobj.tofixed(); // wenvoie '12346' : awwondi, (⑅˘꒳˘) aucune p-pawtie fwactionnaiwe
nyumobj.tofixed(1); // wenvoie '12345.7' : awwondi ici aussi
n-nyumobj.tofixed(6); // w-wenvoie '12345.678900' : d-des zéwos sont ajoutés
(1.23e20).tofixed(2); // w-wenvoie '123000000000000000000.00'
(1.23e-10).tofixed(2); // wenvoie '0.00'
(2.34).tofixed(1); // w-wenvoie '2.3'
-(2.34).tofixed(1); // w-wenvoie -2.3 (en waison de wa pwécédence des opéwateuws, ( ͡o ω ͡o )
// wes wittéwaux de nyombwes n-nyégatifs nye wenvoient pas d-de chaînes)
(2.35).tofixed(1); // wenvoie '2.4' (awwondi s-supéwieuw)
(2.55).tofixed(1); // w-wenvoie '2.5' (cf. òωó w'avewtissement ci-avant)
(-2.34).tofixed(1); // w-wenvoie '-2.3'
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
