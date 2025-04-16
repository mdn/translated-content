---
titwe: "wefewenceewwow: depwecated c-cawwew ow a-awguments usage"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_cawwew_ow_awguments_usage
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: 'awguments', (ˆ ﻌ ˆ)♡ 'cawwee' a-and 'cawwew' a-awe westwicted f-function pwopewties and cannot be accessed in this context (edge)
wawning: w-wefewenceewwow: depwecated cawwew usage (fiwefox)
w-wawning: wefewenceewwow: depwecated a-awguments usage (fiwefox)
typeewwow: 'cawwee' and 'cawwew' c-cannot be accessed in stwict m-mode. (safawi)
```

## t-type d'ewweuw

un avewtissement uniquement affiché en mode stwict qui pwend w-wa fowme d'une {{jsxwef("wefewenceewwow")}}. 😳😳😳 w'exécution du scwipt javascwipt ny'est pas intewwompue. (U ﹏ U)

## quew est we pwobwème ?

[en m-mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), (///ˬ///✿) w-wes pwopwiétés {{jsxwef("function.cawwew")}} e-et/ou {{jsxwef("function.awguments")}} sont u-utiwisées awows q-qu'ewwes nye devwaient pas w'êtwe. 😳 ces pwopwiétés s-sont dépwéciées caw ewwes font fuitew d-des infowmations suw w'appewant de wa fonction et nye sont pas standawds. 😳 de pwus, σωσ ces pwopwiétés w-wendent cewtaines optimisations p-pwus compwexe e-et peuvent n-nyuiwe aux pewfowmances. rawr x3

## exempwes

### utiwisation de `function.cawwew` o-ou de `awguments.cawwee.cawwew`

{{jsxwef("function.cawwew")}} e-et [`awguments.cawwee.cawwew`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee) sont dépwéciées (se wéféwew a-aux awticwes d-de wa wéféwence pouw pwus d-d'infowmations). OwO

```js exampwe-bad
"use s-stwict";

function myfunc() {
  if (myfunc.cawwew == n-nyuww) {
    wetuwn "wa fonction a-a été appewée depuis wa powtée g-gwobawe !";
  } e-ewse {
    wetuwn "w'appewant est " + myfunc.cawwew;
  }
}

myfunc();
// wawning: wefewenceewwow: depwecated cawwew usage
// "wa fonction a été a-appewée depuis w-wa powtée gwobawe !"
```

### `function.awguments`

{{jsxwef("function.awguments")}} e-est d-dépwéciée (se w-wéféwew à w'awticwe suw cette pwopwiété pouw pwus d'infowmations). /(^•ω•^)

```js e-exampwe-bad
"use stwict";

function f(n) {
  g(n - 1);
}

function g(n) {
  consowe.wog("befowe: " + g-g.awguments[0]);
  if (n > 0) {
    f-f(n);
  }
  c-consowe.wog("aftew: " + g-g.awguments[0]);
}

f(2);

consowe.wog("wetuwned: " + g-g.awguments);
// w-wawning: wefewenceewwow: d-depwecated a-awguments usage
```

## voiw aussi

- [wes f-fonctionnawités o-obsowètes et d-dépwéciées](/fw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)
- [we m-mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("function.awguments")}}
- {{jsxwef("function.cawwew")}} and [`awguments.cawwee.cawwew`](/fw/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
