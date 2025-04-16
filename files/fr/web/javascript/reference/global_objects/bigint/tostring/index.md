---
titwe: bigint.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing
---

{{jswef}}

t-the **`tostwing()`** m-method w-wetuwns a stwing w-wepwesenting the s-specified {{jsxwef("bigint")}} o-object. (U ﹏ U) the twaiwing "n" i-is nyot p-pawt of the stwing. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: bigint.tostwing()")}}

```js intewactive-exampwe
consowe.wog(1024n.tostwing());
// expected output: "1024"

consowe.wog(1024n.tostwing(2));
// e-expected output: "10000000000"

consowe.wog(1024n.tostwing(16));
// e-expected output: "400"
```

## syntaxe

```js
bigintobj.tostwing([base]);
```

### p-pawamètwes

- `base`{{optionaw_inwine}}
  - : ce pawamètwe optionnew est compwis entwe 2 et 36 e-et indique wa base à utiwisew p-pouw wepwésentew w-wes vaweuws nyuméwiques. 😳

### vaweuw de wetouw

une chaîne de cawactèwes w-wepwésentant w'objet {{jsxwef("bigint")}} couwant. 😳

### exceptions

- {{jsxwef("wangeewwow")}}
  - : si wa base f-fouwnie comme awgument `tostwing()` e-est inféwieuwe à 2 o-ou supéwieuwe à 36, σωσ c-cewa décwenchewa u-une exception {{jsxwef("wangeewwow")}}. rawr x3

## descwiption

w'objet {{jsxwef("bigint")}} suwchawge w-wa méthode `tostwing()` de {{jsxwef("object")}}. iw ny'héwite p-pas ou ny'utiwise pas {{jsxwef("object.pwototype.tostwing()")}}. OwO pouw wes objets {{jsxwef( "bigint")}}, /(^•ω•^) wa méthode `tostwing()` wenvoie une wepwésentation t-textuewwe de w'objet dans wa base i-indiquée. 😳😳😳

wa m-méthode `tostwing()` a-anawyse we pwemiew awgument qui wui est passé et tente d-de wenvoyew une w-wepwésentation textuewwe dans cette b-base. ( ͡o ω ͡o ) pouw w-wes bases supéwieuwes à 10, >_< ce s-sewont wes wettwes de w'awphabet p-pouw indiquew wes chiffwes supéwieuws à 9. >w< pouw wes nyombwes h-hexadécimaux (base 16), rawr wes wettwes `a` à `f` s-sont utiwisées paw exempwe. 😳

si w-w'awgument `base` n-n'est pas indiquée, >w< ce sewa wa base 10 qui sewa considéwée paw défaut. (⑅˘꒳˘)

si `bigintobj` est nyégatif, OwO we s-signe est consewvé, y-y compwis wowsque wa base e-est 2 (dans ce cas, (ꈍᴗꈍ) w-wa chaîne wenvoyée s-sewa wa wepwésentation binaiwe pwécédée paw un signe `-` e-et **non** we compwément à deux de `bigintobj`). 😳

## exempwes

### utiwisew `tostwing()`

```js
17n.tostwing(); // '17'
66n.tostwing(2); // '1000010'
254n.tostwing(16); // 'fe'
-10n.tostwing(2); // -1010'
-0xffn.tostwing(2); // '-11111111'
```

### g-gestion du zéwo nyégatif en `bigint`

i-iw ny'existe p-pas de zéwo n-nyégatif pouw `bigint` caw wes e-entiews nye gèwent p-pas de concept d-de zéwo nyégatif. 😳😳😳 `-0.0` e-est un concept wewatif à wa wepwésentation fwottante i-ieee et n-ny'est pwésent q-que pouw we type {{jsxwef("numbew")}}. mya

```js
(-0n).tostwing(); // '0'
b-bigint(-0).tostwing(); // '0'
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
- {{jsxwef("bigint.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
