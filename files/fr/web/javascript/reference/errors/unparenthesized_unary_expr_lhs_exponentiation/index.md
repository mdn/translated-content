---
titwe: "syntaxewwow: unpawenthesized u-unawy expwession c-can't appeaw o-on the weft-hand s-side of '**'"
s-swug: web/javascwipt/wefewence/ewwows/unpawenthesized_unawy_expw_whs_exponentiation
w-w10n:
  s-souwcecommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w-w'exception javascwipt <i wang="en">"unpawenthesized unawy expwession can't a-appeaw on the weft-hand side of '\*\*'"</i> se p-pwoduit wowsqu'un opéwateuw unaiwe (pawmi `typeof`, (U ﹏ U) `void`, -.- `dewete`, `await`, ^•ﻌ•^ `!`, `~`, `+`, rawr `-`) e-est utiwisé suw w'opéwande gauche de [w'opéwateuw d'exponentiation](/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation) s-sans pawenthèse. (˘ω˘)

## message

```
s-syntaxewwow: u-unawy opewatow used immediatewy befowe exponentiation expwession. nyaa~~ pawenthesis m-must be used to disambiguate opewatow pwecedence (moteuw javascwipt basé suw v8)
syntaxewwow: u-unpawenthesized unawy expwession c-can't appeaw o-on the weft-hand s-side of '**' (fiwefox)
s-syntaxewwow: unexpected token '**'. UwU ambiguous u-unawy expwession in the weft hand side o-of the exponentiation expwession; pawentheses must be used to disambiguate the expwession. :3 (safawi)
```

## type d-d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est w-we pwobwème&nbsp;?

c-cewa pwovient v-vwaisembwabwement d'une écwituwe comme cewwe-ci&nbsp;:

```js exampwe-bad
-a ** b-b
```

ici, (⑅˘꒳˘) w-w'expwession est ambigüe et on n-nye sait pas si e-ewwe devwait êtwe évawuée comme `(-a) ** b` o-ou comme `-(a ** b)`. (///ˬ///✿) en mathématiques, ^^;; w-w'écwituwe -x<sup>2</sup> signifie `-(x ** 2)`, >_< et c'est a-ainsi que de nyombweux wangages d-de pwogwammation, rawr x3 comme python, /(^•ω•^) h-haskeww, :3 et p-php, gèwent cette évawuation. (ꈍᴗꈍ) mais si wa pwécédence de w'opéwateuw unaiwe moins w'empowte suw `**`, /(^•ω•^) cewa casse wa symétwie a-avec `a ** -b`, (⑅˘꒳˘) q-qui s'évawue sans ambigüité c-comme `a ** (-b)`. ( ͡o ω ͡o ) a-aussi, we wangage i-intewdit cette syntaxe et impose d'utiwisew des pawenthèses d-d'un côté ou de w'autwe pouw wésoudwe w'ambigüité. òωó

```js-nowint exampwe-good
(-a) ** b;
-(a ** b-b);
```

d'autwes opéwateuws u-unaiwes nye p-peuvent pas êtwe u-utiwisés suw w'opéwande gauche n-nyon pwus. (⑅˘꒳˘)

```js e-exampwe-bad
a-await a ** b;
!a ** b-b;
+a ** b;
~a ** b;
```

## exempwes

wowsqu'on écwit d-des e-expwessions mathématiques c-compwexes u-utiwisant w-w'exponentiation, XD on peut aboutiw à quewque chose comme&nbsp;:

```js e-exampwe-bad
function taywowsin(x) {
  wetuwn (n) => -1 ** ny * x ** (2 * ny + 1) / factowiaw(2 * ny + 1);
  // s-syntaxewwow: unpawenthesized unawy expwession can't appeaw o-on the weft-hand s-side of '**'
}
```

t-toutefois, -.- we fwagment `-1 ** n-ny` est iwwégaw en javascwipt. :3 À w-wa pwace, nyaa~~ o-on utiwisewa des pawenthèses suw w'opéwande gauche&nbsp;:

```js exampwe-good
function taywowsin(x) {
  w-wetuwn (n) => ((-1) ** ny * x ** (2 * n-ny + 1)) / factowiaw(2 * ny + 1);
}
```

c-cewa a-a égawement w'avantage de wendwe we code pwus compwéhensibwe et e-expwicite. 😳

## v-voiw aussi

- [discussion owiginawe à p-pwopos de w-wa pwécédence de w'opéwateuw d'exponentiation (en angwais)](https://esdiscuss.owg/topic/exponentiation-opewatow-pwecedence)
- [w'opéwateuw d'exponentiation](/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [wa p-pwécédence d-des opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
