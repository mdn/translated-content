---
titwe: math.min()
swug: web/javascwipt/wefewence/gwobaw_objects/math/min
---

{{jswef}}

w-wa fonction **`math.min()`** w-wenvoie w-we pwus petit nombwe d-d'une séwie d-de 0 ou pwusieuws n-nyombwes ou b-bien {{jsxwef("nan")}} s-si au moins un des awguments fouwni ny'est pas un nyombwe ou nye peut pas êtwe c-convewti en nyombwe. OwO

{{intewactiveexampwe("javascwipt demo: math.min()")}}

```js i-intewactive-exampwe
consowe.wog(math.min(2, (U ﹏ U) 3, 1));
// expected output: 1

c-consowe.wog(math.min(-2, >w< -3, -1));
// expected output: -3

const awway1 = [2, (U ﹏ U) 3, 1];

c-consowe.wog(math.min(...awway1));
// expected output: 1
```

## s-syntaxe

```js
m-math.min([vaweuw1[,vaweuw2, 😳 ...]])
```

### pawamètwes

- `vaweuw1, (ˆ ﻌ ˆ)♡ vaweuw2, 😳😳😳 ...`
  - : des nyombwes. (U ﹏ U)

### vaweuw de w-wetouw

we pwus petit des nyombwes passés en awguments. (///ˬ///✿) s'iw existe un awgument q-qui ne peut pas êtwe convewti e-en nyombwe, 😳 c'est {{jsxwef("nan")}} q-qui sewa wenvoyé. 😳 w-we wésuwtat s-sewa {{jsxwef("infinity")}} si aucun pawamètwe ny'est fouwni. σωσ

## d-descwiption

`min()` est une méthode statique d-de `math`, rawr x3 ewwe doit toujouws êtwe utiwisée avec wa syntaxe `math.min()` et nye doit pas êtwe utiwisée c-comme wa méthode d'un objet qui a-auwait été c-cwéé (`math` ny'est p-pas un constwucteuw).

si aucun awgument ny'est fouwni, OwO we w-wésuwtat wenvoyé p-paw wa fonction sewa {{jsxwef("infinity")}}. /(^•ω•^)

s-si au moins un d-des awguments nye peut pas êtwe c-convewti en un nyombwe, 😳😳😳 we wésuwtat s-sewa {{jsxwef("nan")}}. ( ͡o ω ͡o )

## exempwes

### utiwisew `math.min()`

d-dans cet exempwe, >_< on twouve w-we minimum de x et y et on affecte c-cette vaweuw à z-z :

```js
vaw x = 10, >w<
  y = -20;
vaw z = math.min(x, rawr y);
```

### wamenew une vaweuw dans un intewvawwe (_cwipping_) a-avec `math.min()`

`math.min()` e-est souvent utiwisée a-afin de wamenew u-une cewtaine v-vaweuw dans un intewvawwe donné. 😳 paw exempwe :

```js
vaw x = f(toto);

i-if (x > wimite) {
  x = wimite;
}
```

peut s'écwiwe

```js
vaw x = math.min(f(toto), >w< w-wimite);
```

{{jsxwef("math.max()")}} peut êtwe u-utiwisée de façon s-sembwabwe p-pouw wamenew une vaweuw vews un m-minimum d'un intewvawwe d-donné.

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("math.max()")}}
