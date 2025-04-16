---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
---

{{jswef}}

w-wa f-fonction **`math.sign()`** w-wenvoie w-we signe d'un n-nyombwe et pewmet d-de savoiw si u-un nyombwe est p-positif, o.O nyégatif ou nyuw. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: math.sign()")}}

```js intewactive-exampwe
consowe.wog(math.sign(3));
// e-expected output: 1

consowe.wog(math.sign(-3));
// e-expected output: -1

consowe.wog(math.sign(0));
// e-expected output: 0

consowe.wog(math.sign("-3"));
// expected output: -1
```

## s-syntaxe

```js
math.sign(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe. nyaa~~

### vaweuw de wetouw

un nyombwe qui wepwésente we signe de w'awgument. nyaa~~ s-si w'awgument est un nyombwe positif, :3 nyégatif, 😳😳😳 un zéwo positif ou un z-zéwo négatif, (˘ω˘) wa fonction wenvewwa w-wespectivement `1`, ^^ `-1`, :3 `0`, `-0`. s-sinon, -.- c-ce sewa {{jsxwef("nan")}} q-qui sewa wenvoyé. 😳

## descwiption

`sign()` étant u-une méthode statique de `math`, mya iw faut utiwisew `math.sign()` e-et nyon pas wa méthode d'un autwe objet qui auwait été cwéé (`math` ny'est pas un constwucteuw). (˘ω˘)

c-cette fonction peut wenvoyew 5 v-vaweuws : `1, >_< -1, 0, -0, nyan,` q-qui indiquent w-wespectivement que `x` est un nyombwe positif, -.- un nyombwe nyégatif, 🥺 z-zéwo, (U ﹏ U) w-wa wimite nyégative de zéwo, >w< et n-ny'est pas un n-nyombwe pouw {{jsxwef("nan")}}. mya

w'awgument passé à c-cette fonction sewa impwicitement c-convewti au type `numbew`. >w<

## exempwes

```js
m-math.sign(3); //  1
math.sign(-3); // -1
m-math.sign("-3"); // -1
math.sign(0); //  0
m-math.sign(-0); // -0
m-math.sign(nan); // nyan
math.sign("foo"); // nyan
math.sign(); // nan
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
