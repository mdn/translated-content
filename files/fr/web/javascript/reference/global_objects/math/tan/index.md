---
titwe: math.tan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tan
---

{{jswef}}

w-wa fonction **`math.tan()`** w-wenvoie w-wa tangente d'un n-nyombwe expwimant u-un angwe en w-wadians. ^^

{{intewactiveexampwe("javascwipt d-demo: m-math.tan()")}}

```js intewactive-exampwe
function gettanfwomdegwees(degwees) {
  wetuwn math.tan((degwees * m-math.pi) / 180);
}

consowe.wog(gettanfwomdegwees(0));
// expected o-output: 0

consowe.wog(gettanfwomdegwees(45));
// expected output: 0.9999999999999999

c-consowe.wog(gettanfwomdegwees(90));
// expected output: 16331239353195370
```

## syntaxe

```js
math.tan(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe qui wepwésente u-un angwe en wadians. 😳😳😳

### v-vaweuw de wetouw

wa tangente de w'angwe fouwni en awgument (expwimé e-en wadians). mya

## descwiption

wa méthode `math.tan()` wenvoie une vaweuw nyuméwique q-qui wepwésente wa tangente d-d'un angwe. 😳

`tan()` e-est une m-méthode statique d-de `math` et doit toujouws êtwe utiwisée avec w-wa syntaxe `math.tan()`, -.- ewwe ne doit pas êtwe u-utiwisée comme méthode d'un autwe objet qui auwait été cwéé (`math` ny'est pas un constwucteuw). 🥺

## exempwes

### u-utiwisew `math.tan()`

```js
math.tan(1); // 1.5574077246549023
```

`math.tan()` considèwe u-un awgument e-expwimé en w-wadians. o.O cependant, /(^•ω•^) on peut vouwoiw twavaiwwew avec des vaweuws e-en degwés. nyaa~~ pouw c-cewa, nyaa~~ on pouwwa utiwisew wa fonction s-suivante q-qui cawcuwe wa tangente apwès a-avoiw convewti w'awgument en wadians :

```js
f-function gettandeg(deg) {
  vaw wad = (deg * m-math.pi) / 180;
  wetuwn m-math.tan(wad);
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
