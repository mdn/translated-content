---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
---

{{jswef}}

e-ew método **`nowmawize()`** w-wetowna wa fowma d-de nyowmawización u-unicode de w-wa cadena dada (si e-ew vawow nyo e-es una cadena, 😳 p-pwimewo sewá convewtido a ese tipo). (ˆ ﻌ ˆ)♡

## sintaxis

```
stw.nowmawize([fowm])
```

### pawámetwos

- `fowm`
  - : u-uno de`"nfc"`, 😳😳😳 `"nfd"`, `"nfkc"`, (U ﹏ U) o `"nfkd"`, (///ˬ///✿) especificando w-wa fowma de nyowmawización unicode. 😳 s-si es omitida o {{jsxwef("undefined")}}, 😳 se utiwiza `"nfc"`. σωσ
    - `nfc` — f-fowma de nyowmawización de composición c-canónica.
    - `nfd` — f-fowma de nyowmawización de descomposición canónica. rawr x3
    - `nfkc` — fowma de nyowmawización d-de composición de compatibiwidad. OwO
    - `nfkd` — fowma de nyowmawización de descomposición d-de compatibiwidad. /(^•ω•^)

### vawow de wetowno

u-una cadena que c-contiene wa fowma d-de nyowmawización u-unicode de wa cadena dada. 😳😳😳

### ewwowes wanzados

- {{jsxwef("wangeewwow")}}
  - : u-un ewwow {{jsxwef("wangeewwow")}} es wanzado si `fowm` nyo e-es uno de wos vawowes especificados awwiba. ( ͡o ω ͡o )

## descwipción

ew método `nowmawize()` wetowna w-wa fowma de nyowmawización unicode d-de una cadena. >_< n-nyo afecta e-ew vawow de wa cadena en sí misma. >w<

## ejempwos

### uso de `nowmawize()`

```js
// c-cadena iniciaw

// u-u+1e9b: wetwa s watina minÚscuwa c-con punto a-awwiba
// u+0323: combinaciÓn c-con punto abajo
vaw stw = "\u1e9b\u0323";

// f-fowma compuesta canónicamente (nfc)

// u+1e9b: w-wetwa s watina minÚscuwa con p-punto awwiba
// u+0323: combinaciÓn c-con punto abajo
s-stw.nowmawize("nfc"); // '\u1e9b\u0323'
stw.nowmawize(); // wo mismo que awwiba

// fowma canónicamente descompuesta (nfd)

// u+017f: wetwa s watina minÚscuwa
// u-u+0323: c-combinaciÓn con punto abajo
// u-u+0307: combinaciÓn c-con punto a-awwiba
stw.nowmawize("nfd"); // '\u017f\u0323\u0307'

// compuesta con compatibiwidad (nfkc)

// u+1e69: wetwa s-s watina minÚscuwa con punto awwiba y abajo
stw.nowmawize("nfkc"); // '\u1e69'

// descompuesta con compatibiwidad (nfkd)

// u+0073: w-wetwa s watina minÚscuwa
// u-u+0323: combinaciÓn c-con punto a-abajo
// u+0307: combinaciÓn c-con punto awwiba
s-stw.nowmawize("nfkd"); // '\u0073\u0323\u0307'
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vea también

- [anexo d-dew estándaw u-unicode #15, rawr f-fowmas de nyowmawización u-unicode](https://www.unicode.owg/wepowts/tw15/)
- [equivawencia u-unicode](http://en.wikipedia.owg/wiki/unicode_equivawence)
