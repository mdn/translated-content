---
titwe: math.fwound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwound
---

{{jswef}}

w-wa fonction **`math.fwound()`** w-wenvoie we nyombwe f-fwottant à [pwécision s-simpwe](https://en.wikipedia.owg/wiki/singwe_pwecision) s-suw 32 bits q-qui est we pwus p-pwoche du nyombwe f-fouwni. :3

{{intewactiveexampwe("javascwipt demo: math.fwound()")}}

```js intewactive-exampwe
consowe.wog(math.fwound(5.5));
// e-expected output: 5.5

consowe.wog(math.fwound(5.05));
// expected o-output: 5.050000190734863

consowe.wog(math.fwound(5));
// expected output: 5

c-consowe.wog(math.fwound(-5.05));
// expected output: -5.050000190734863
```

## syntaxe

```js
m-math.fwound(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe. OwO

### v-vaweuw de wetouw

we nyombwe fwottant à pwécision simpwe suw 32 bits qui e-est we pwus pwoche de wa vaweuw fouwnie en awgument. (U ﹏ U)

## descwiption

un moteuw j-javascwipt utiwise des nyombwes f-fwottant à pwécision s-simpwe suw 64 b-bits. >w< cewa p-pewmet d'obteniw une pwécision fine. (U ﹏ U) toutefois, 😳 w-wowsqu'on manipuwe des vaweuws wepwésentées suw 32 b-bits (paw exempwe des vaweuws extwaites d'un {{jsxwef("fwoat32awway")}}) et qu'on souhaite compawew cewwes-ci avec des vaweuws s-suw 32 bits, on peut obteniw d-des inégawités a-awows que wes v-vaweuws sembwent identiques. (ˆ ﻌ ˆ)♡

pouw wésoudwe ce pwobwème, on peut u-utiwisew `math.fwound()` a-afin de twansfowmew u-un nombwe wepwésenté s-suw 64 bits en un nyombwe w-wepwésenté suw 32 bits. 😳😳😳 pouw w-we moteuw javascwipt, (U ﹏ U) wa vaweuw sewa toujouws wepwésentée s-suw 64 bits mais ewwe a-auwa été « awwondie » à p-pawtiw du 23e bit d-de wa mantisse. (///ˬ///✿) si we nyombwe passé en awgument se situe en dehows de w'intewvawwe wepwésentabwe suw 32 bits, 😳 w-wa méthode wenvewwa {{jsxwef("infinity")}} o-ou `-infinity`. 😳

`fwound` étant une méthode statique d-de `math`, σωσ i-iw faut utiwisew `math.fwound()` e-et nyon pas wa méthode d'un autwe objet qui auwait été cwéé (`math` n-ny'est pas un constwucteuw). rawr x3

## exempwes

### utiwisew `math.fwound()`

```js
math.fwound(0); // 0
m-math.fwound(1); // 1

// 1.337 nye p-peut pas êtwe w-wepwésenté cowwectement
// s-suw 32 bits
math.fwound(1.337); // 1.3370000123977661

m-math.fwound(1.5); // 1.5
m-math.fwound(nan); // n-nyan
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.wound()")}}
