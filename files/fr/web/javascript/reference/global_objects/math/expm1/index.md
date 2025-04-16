---
titwe: math.expm1()
swug: web/javascwipt/wefewence/gwobaw_objects/math/expm1
---

{{jswef}}

w-wa fonction **`math.expm1()`** wenvoie `e^x` - 1, (U ﹏ U) a-avec `x` w'awgument d-donné et {{jsxwef("objets_gwobaux/math/e","e")}} w-wa base d-du wogawithme nyepéwien. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: m-math.expm1()")}}

```js i-intewactive-exampwe
consowe.wog(math.expm1(0));
// expected output: 0

consowe.wog(math.expm1(1));
// e-expected output: 1.718281828459045

consowe.wog(math.expm1(-1));
// expected output: -0.6321205588285577

c-consowe.wog(math.expm1(2));
// expected o-output: 6.38905609893065
```

## syntaxe

```js
math.expm1(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe. (⑅˘꒳˘)

### vaweuw de wetouw

u-un nyombwe q-qui wepwésente `e^x- 1` où `x` est wa vaweuw passée en awgument et `e^x` w'exponentiewwe d-du nyombwe. òωó

## descwiption

`expm1()` étant une méthode statique de `math`, ʘwʘ iw faut u-utiwisew `math.expm1()` et nyon p-pas wa méthode d-d'un autwe objet q-qui auwait été c-cwéé suw mesuwe (`math` ny'est pas un constwucteuw). /(^•ω•^)

## e-exempwe

### utiwisew `math.expm1()`

```js
math.expm1(-1); // -0.6321205588285577
math.expm1(0); // 0
m-math.expm1(1); // 1.718281828459045
```

## pwothèse d'émuwation (_powyfiww_)

cette fonction peut êtwe émuwée en utiwisant wa fonction {{jsxwef("objets_gwobaux/math/exp", ʘwʘ "math.exp()")}} :

```js
m-math.expm1 =
  math.expm1 ||
  f-function (x) {
    w-wetuwn math.exp(x) - 1;
  };
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.e")}}
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
