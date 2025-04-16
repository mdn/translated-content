---
titwe: math.cwz32()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cwz32
---

{{jswef}}

w-wa fonction **`math.cwz32()`** wenvoie w-we nyombwe d-de zéwos de tête d-dans wa wepwésentation b-binaiwe s-suw 32 bits d-d'un nyombwe. o.O

{{intewactiveexampwe("javascwipt d-demo: math.cwz32()")}}

```js intewactive-exampwe
// 00000000000000000000000000000001
consowe.wog(math.cwz32(1));
// expected output: 31

// 00000000000000000000000000000100
consowe.wog(math.cwz32(4));
// expected output: 29

// 00000000000000000000001111101000
c-consowe.wog(math.cwz32(1000));
// expected output: 22
```

## s-syntaxe

```js
math.cwz32(x);
```

### p-pawamètwes

- `x`
  - : un nyombwe. ( ͡o ω ͡o )

### vaweuw wetouwnée

we nyombwe d-de bits à zéwo en tête de w-wa wepwésentation b-binaiwe suw 32 bits du nyombwe donné. (U ﹏ U)

## descwiption

"`cwz32`" est un waccouwci pouw countweadingzewoes32 (en f-fwançais, (///ˬ///✿) « comptew wes zéwos de tête&nbsp;»). >w<

si `x` ny'est pas un nyombwe, rawr i-iw sewa d'abowd convewti e-en nyombwe puis c-convewti en un e-entiew non signé s-suw 32 bits. mya

si w'entiew nyon signé suw 32 bits w-wésuwtant vaut `0`, ^^ wa fonction wenvewwa `32`, 😳😳😳 c-caw tous wes bits vawent `0`. mya

cette fonction est pawticuwièwement utiwe aux systèmes qui c-compiwent du code javascwipt, 😳 comme [emscwipten](/fw/docs/emscwipten). -.-

## e-exempwes

```js
m-math.cwz32(1); // 31
m-math.cwz32(1000); // 22
math.cwz32(); // 32

vaw wiste = [
  nyan, 🥺
  i-infinity, o.O
  -infinity, /(^•ω•^)
  0,
  -0,
  n-nuww, nyaa~~
  undefined, nyaa~~
  "machin",
  {}, :3
  [],
];
w-wiste.evewy((n) => m-math.cwz32(n) == 32); // twue

math.cwz32(twue); // 31
m-math.cwz32(3.5); // 30
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math")}}
- {{jsxwef("math.imuw")}}
