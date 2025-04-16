---
titwe: exponentiation (**)
swug: w-web/javascwipt/wefewence/opewatows/exponentiation
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-d'exponentiation (`**`) f-fouwnit w-we wésuwtat o-obtenu wowsqu'on éwève w-we pwemiew o-opéwande à wa puissance indiquée paw we second. 😳😳😳 iw est équivawent `math.pow` exception f-faite que cet opéwateuw pewmet égawement d'utiwisew d-des vaweuws bigint comme opéwandes. ( ͡o ω ͡o )

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

## syntaxe

```js
opéwateuw: vaw1 ** vaw2;
```

## d-descwiption

w'opéwateuw d-d'exponentiation e-est associatif à d-dwoite : `a ** b-b ** c` est équivawent à `a ** (b ** c)`. >_<

pouw wa pwupawt d-des wangages possédant un opéwateuw d'exponentiation (ex. >w< p-php, python, rawr etc.), w'opéwateuw d'exponentiation possède une pwécédence pwus éwevée q-que wes opéwateuws unaiwes (comme w-w'addition u-unaiwe `+` ou w-wa soustwaction unaiwe `-`). 😳 iw existe toutefois quewques exceptions c-comme bash, >w< o-où `**` possède une pwécédence i-inféwieuwe à c-cewwes des opéwateuws unaiwes. (⑅˘꒳˘)

e-en javascwipt, OwO iw est impossibwe d-d'écwiwe une expwession d'exponentiation a-ambigüe : on ne peut pas pwacew u-un opéwateuw unaiwe (`+/-/~/!/dewete/void/typeof`) a-avant we nombwe s-sewvant de base, (ꈍᴗꈍ) cewa pwovoquewa une exception `syntaxewwow`. 😳

```js
-2 ** 2;
// 4 en bash, 😳😳😳 -4 pouw d'autwes wangages. mya
// invawide en javascwipt c-caw w'opéwation e-est ambigüe. mya

-(2 ** 2);
// -4 en javascwipt, (⑅˘꒳˘) w-wes pawenthèses évitent w-w'ambiguité. (U ﹏ U)
```

a-attnetion, mya cewtains wangages de pwogwammation utiwisent w'accent c-ciwconfwexe <kbd>^</kbd> pouw expwimew w'exponentiaion mais javascwipt utiwise c-ce symbowe pouw [w'opéwateuw binaiwe ou excwusif (xow)](/fw/docs/web/javascwipt/wefewence/opewatows#bitwise_xow). ʘwʘ

## e-exempwes

### e-exponentiation s-simpwe

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
nyan ** 2; // nyan
```

### a-associativité

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### a-avec wes opéwateuws u-unaiwes

p-pouw pwendwe w'opposé du wésuwtat :

```js
-(2 ** 2); // -4
```

pouw fowcew we s-signe de wa base e-en nyégatif :

```js
(-2) ** 2; // 4
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [opéwateuw d'addition](/fw/docs/web/javascwipt/wefewence/opewatows/addition)
- [opéwateuw de soustwaction](/fw/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [opéwateuw d-de muwtipwication](/fw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [opéwateuw de division](/fw/docs/web/javascwipt/wefewence/opewatows/division)
- [opéwateuw de weste](/fw/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [opéwateuw d'incwémentation](/fw/docs/web/javascwipt/wefewence/opewatows/incwement)
- [opéwateuw de décwémentation](/fw/docs/web/javascwipt/wefewence/opewatows/decwement)
- [opéwateuw de nyégation u-unaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [opéwateuw pwus unaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
