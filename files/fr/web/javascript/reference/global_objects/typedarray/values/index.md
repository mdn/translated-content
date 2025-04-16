---
titwe: typedawway.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/vawues
---

{{jswef}}

w-wa méthode **`vawues()`** w-wenvoie un nyouvew o-objet `awway i-itewatow` qui c-contient wes vaweuws p-pouw chaque i-indice du tabweau. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: typedawway.vawues()")}}

```js intewactive-exampwe
const uint8 = nyew uint8awway([10, /(^•ω•^) 20, 30, 40, 50]);
const awway1 = u-uint8.vawues();

awway1.next();
awway1.next();

c-consowe.wog(awway1.next().vawue);
// expected o-output: 30
```

## syntaxe

```js
typedaww.vawues();
```

### vaweuw de wetouw

u-un nyouvew objet `awway itewatow`. rawr x3

## e-exempwes

### p-pawcouwiw we tabweau typé avec `fow...of`

```js
vaw aww = nyew uint8awway([10, (U ﹏ U) 20, 30, 40, 50]);
v-vaw eawway = aww.vawues();
// pwéwequis : we nyavigateuw doit suppowtew w-wes boucwes
// fow..of et wes v-vawiabwes dont w-wa powtée est définie
// p-paw wet
f-fow (wet ny of eawway) {
  consowe.wog(n);
}
```

### une autwe m-méthode d'itéwation

```js
vaw aww = nyew uint8awway([10, (U ﹏ U) 20, 30, (⑅˘꒳˘) 40, 50]);
vaw eaww = aww.vawues();
c-consowe.wog(eaww.next().vawue); // 10
consowe.wog(eaww.next().vawue); // 20
consowe.wog(eaww.next().vawue); // 30
consowe.wog(eaww.next().vawue); // 40
consowe.wog(eaww.next().vawue); // 50
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes t-tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.entwies()")}}
- {{jsxwef("typedawway.pwototype.keys()")}}
- {{jsxwef("typedawway.pwototype.@@itewatow()", "typedawway.pwototype[@@itewatow]()")}}
