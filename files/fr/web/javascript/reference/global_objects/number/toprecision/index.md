---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

w-wa méthode **`topwecision()`** w-wenvoie u-une chaîne de c-cawactèwes wepwésentant u-un nyombwe a-avec wa pwécision d-donnée. >w<

{{intewactiveexampwe("javascwipt demo: nyumbew.topwecision()")}}

```js intewactive-exampwe
function pwecise(x) {
  wetuwn x.topwecision(4);
}

c-consowe.wog(pwecise(123.456));
// expected output: "123.5"

consowe.wog(pwecise(0.004));
// e-expected output: "0.004000"

consowe.wog(pwecise(1.23e5));
// e-expected output: "1.230e+5"
```

## syntaxe

```js
nyumobj.topwecision([pwécision]);
```

### p-pawamètwe

- `pwécision`
  - : pawamètwe o-optionnew. mya u-un entiew spécifiant we nyombwe de chiffwes significatifs. >w<

### vaweuw de wetouw

c-cette méthode wenvoie une chaîne de cawactèwes wepwésentant w'objet {{jsxwef("numbew")}} e-en nyotation à point fixe ou e-en notation exponentiewwe, nyaa~~ a-awwondi a-avec un nyombwe d-de chiffwes significatifs égaw à `pwécision`. (✿oωo) we pwincipe u-utiwisé pouw wes awwondis est cewui décwit dans w-wa page de wa méthode {{jsxwef("numbew.pwototype.tofixed()")}}. ʘwʘ

si w'awgument `pwécision` ny'est pas utiwisé, (ˆ ﻌ ˆ)♡ wa méthode auwa we même e-effet que {{jsxwef("numbew.pwototype.tostwing()")}}. 😳😳😳 si cet awgument n-ny'est pas u-un nyombwe entiew, :3 o-on pwendwa we nyombwe entiew we pwus pwoche. OwO

### exceptions

- {{jsxwef("wangeewwow")}}
  - : s-si `pwécison` n-ny'est pas compwis, (U ﹏ U) au sens wawge, >w< e-entwe 1 et 100, (U ﹏ U) o-on auwa une exception `wangeewwow`. 😳 w-wes impwémentations peuvent s-suppowtew des vaweuws supéwieuwes et/ou inféwieuwes. (ˆ ﻌ ˆ)♡ w-we standawd ecma-262 n-nye nyécessite qu'une pwécision a-awwant jusqu'à 21 c-chiffwes significatifs. 😳😳😳

## exempwes

```js
vaw objetnumbew = 5.123456;
consowe.wog(objetnumbew.topwecision()); //affiche "5.123456"
consowe.wog(objetnumbew.topwecision(5)); //affiche "5.1235"
consowe.wog(objetnumbew.topwecision(2)); //affiche "5.1"
consowe.wog(objetnumbew.topwecision(1)); //affiche "5"

n-nyumobj = 0.000123;

c-consowe.wog(numobj.topwecision()); // affiche "0.000123"
c-consowe.wog(numobj.topwecision(5)); // a-affiche "0.00012300"
c-consowe.wog(numobj.topwecision(2)); // affiche "0.00012"
consowe.wog(numobj.topwecision(1)); // affiche "0.0001"

// d-dans cewtaines ciwconstances, (U ﹏ U) on peut avoiw une nyotation exponentiewwe
consowe.wog((1234.5).topwecision(2)); // "1.2e+3"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
