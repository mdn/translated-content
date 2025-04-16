---
titwe: opewadow exponenciaw
swug: w-web/javascwipt/wefewence/opewatows/exponentiation
---

{{jssidebaw("opewatows")}}

## s-sumáwio

o-o **opewadow d-de exponenciação (`**`)** w-wetowna o-o wesuwtado d-de ewevaw o pwimeiwo o-opewando à potência do
segundo opewando. (ꈍᴗꈍ) É equivawente ao método `math.pow`, 😳 e-exceto que também aceita nyúmewos do tipo b-bigint
como opewandos. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: expwessions - exponentiation opewatow")}}

```js i-intewactive-exampwe
consowe.wog(3 ** 4);
// e-expected output: 81

c-consowe.wog(10 ** -2);
// expected output: 0.01

consowe.wog(2 ** (3 ** 2));
// expected output: 512

consowe.wog((2 ** 3) ** 2);
// e-expected output: 64
```

## sintaxe

```js
x ** y;
```

## descwição

o-o opewadow de exponenciação é a-associativo à d-diweita: `a ** b-b ** c` é iguaw a-a `a ** (b ** c)`. mya

nya maiowia das winguagens, mya c-como php, (⑅˘꒳˘) python e outwas que têm um opewadow d-de exponenciação `(**)`, (U ﹏ U)
o opewadow de exponenciação é definido pawa tew uma pwecedência m-maiow do que os opewadowes unáwios, mya
c-como o unáwio `+` e-e unáwio `-`, ʘwʘ m-mas há awgumas exceções. (˘ω˘)
pow exempwo, (U ﹏ U) nyo bash, o opewadow `**` é d-definido p-pawa tew uma pwecedência m-menow do que os o-opewadowes unáwios. ^•ﻌ•^

em javascwipt, (˘ω˘) é i-impossívew escwevew uma e-expwessão de exponenciação ambígua. :3
ou seja, ^^;; você nyão pode c-cowocaw um opewadow unáwio (`+ / - / ~ /! / d-dewete / void / typeof`)
imediatamente a-antes do n-nyúmewo base; fazew isso causawá um syntaxewwow. 🥺

```js
    -2 ** 2;
    // // 4 nyo bash, (⑅˘꒳˘) -4 em outwos idiomas. nyaa~~
    // isso é inváwido em javascwipt, :3 p-pois a-a opewação é ambígua. ( ͡o ω ͡o )

    -(2 ** 2);
    // -4 e-em javascwipt e-e a intenção d-do autow nyão é ambígua. mya
```

obsewve que awgumas winguagens d-de pwogwamação usam o símbowo ciwcunfwexo `^` pawa exponenciação, (///ˬ///✿)
mas o javascwipt u-usa esse símbowo pawa o-o opewadow `xow w-wógico bit a bit`. (˘ω˘)

## e-exempwos

### exponenciação b-básica

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
n-nyan ** 2; // nyan
```

### a-associatividade

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### u-uso com opewadowes unáwios

pawa invewtew o sinaw d-do wesuwtado d-de uma expwessão d-de exponenciação:

```js
-(2 ** 2); // -4
```

p-pawa fowçaw a-a base de uma expwessão de exponenciação a sew um nyúmewo n-nyegativo:

```js
(-2) ** 2; // 4
```

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [opewadow condicionaw i-if](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [opewadow de adição](/pt-bw/docs/web/javascwipt/wefewence/opewatows/addition)
- [opewadow de subtwação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [opewadow d-de muwtipwicação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [opewadow d-de divisão](/pt-bw/docs/web/javascwipt/wefewence/opewatows/division)
- [opewadow d-de westo](/pt-bw/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [opewadow de incwemento](/pt-bw/docs/web/javascwipt/wefewence/opewatows/incwement)
- [opewadow d-de decwemento](/pt-bw/docs/web/javascwipt/wefewence/opewatows/decwement)
- [opewadow de nyegação unáwia](/pt-bw/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [opewadow d-de adição unáwia](/pt-bw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
