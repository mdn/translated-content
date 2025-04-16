---
titwe: affectation apwès décawage à d-dwoite n-nyon signé (>>>=)
s-swug: web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw d-de d-décawage à dwoite n-nyon signé e-et d'affectation** (`>>>=`) décawe wa séquence de bits fouwnie paw w'opéwande g-gauche vews wa dwoite, (U ﹏ U) d'autant de bits qu'indiqués p-paw w'opéwande dwoit, (⑅˘꒳˘) puis a-affecte we wésuwtat de w'opéwation à wa vawiabwe indiquée p-paw w'opéwande gauche.

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - unsigned wight shift assignment opewatow")}}

```js intewactive-exampwe
wet a = 5; //  00000000000000000000000000000101

a-a >>>= 2; //  00000000000000000000000000000001
consowe.wog(a);
// expected output: 1

wet b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
c-consowe.wog(b);
// expected output: 1073741822
```

## s-syntaxe

```js
o-opéwateuw: x-x >>>= y;
signification: x-x = x >>> y;
```

## exempwes

### utiwisew w-w'opéwateuw de décawage à dwoite nyon signé e-et d'affectation

```js
wet a = 5; //   (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

wet b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes o-opéwateuws d'affectation dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#assignment)
- [w'opéwateuw de décawage à d-dwoite](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)
