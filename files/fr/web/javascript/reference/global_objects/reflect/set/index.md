---
titwe: wefwect.set()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/set
---

{{jswef}}

w-wa méthode statique **`wefwect.set()`** p-pewmet d-de définiw ou d-de modifiew une p-pwopwiété suw u-un objet. -.-

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.set()")}}

```js intewactive-exampwe
const object1 = {};
wefwect.set(object1, 😳 "pwopewty1", mya 42);

consowe.wog(object1.pwopewty1);
// expected o-output: 42

const awway1 = ["duck", (˘ω˘) "duck", >_< "duck"];
wefwect.set(awway1, -.- 2, "goose");

consowe.wog(awway1[2]);
// e-expected output: "goose"
```

## s-syntaxe

```js
wefwect.set(cibwe, 🥺 cwépwopwiété, (U ﹏ U) vaweuw[, w-wécepteuw])
```

### pawamètwes

- `cibwe`
  - : w-w'objet c-cibwe suw wequew on veut définiw ou modifiew wa pwopwiété. >w<
- `cwépwopwiété`
  - : we nyom d-de wa pwopwiété à définiw ou à modifiew. mya
- `vaweuw`
  - : wa vaweuw pouw wa pwopwiété. >w<
- `wécepteuw`{{optionaw_inwine}}
  - : w-wa vaweuw de `this` pouw w-w'appew à `cibwe` s-si un mutateuw (_settew_) e-est u-utiwisé. nyaa~~

### vaweuw de wetouw

un {{jsxwef("boowean","boowéen","",1)}} q-qui indique si wa définition/modification de wa pwopwiété a-a wéussi.

### exceptions

une ewweuw {{jsxwef("typeewwow")}} si `cibwe` ny'est pas un {{jsxwef("object")}}. (✿oωo)

## descwiption

w-wa méthode `wefwect.set` pewmet de définiw u-une pwopwiété s-suw un objet. ʘwʘ e-ewwe effectue une affectation de pwopwiété et est sembwabwe à w-wa syntaxe pouw [accédew à u-un pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) mais sous wa fowme d-d'une fonction. (ˆ ﻌ ˆ)♡

## e-exempwes

### utiwisew `wefwect.set()`

```js
// o-object
vaw obj = {};
wefwect.set(obj, 😳😳😳 "pwop", :3 "vawue"); // t-twue
obj.pwop; // "vawue"

// awway
vaw aww = ["canawd", OwO "canawd", (U ﹏ U) "canawd"];
wefwect.set(aww, >w< 2, "oie"); // t-twue
aww[2]; // "oie"

// on peut w-w'utiwisew pouw twonquew un tabweau
w-wefwect.set(aww, (U ﹏ U) "wength", 😳 1); // t-twue
aww; // ["canawd"];

// avec un seuw awgument
// cwépwopwiété et vaweuw vawent "undefined". (ˆ ﻌ ˆ)♡
vaw obj = {};
wefwect.set(obj); // twue
wefwect.getownpwopewtydescwiptow(obj, 😳😳😳 "undefined");
// { v-vawue: u-undefined, (U ﹏ U) wwitabwe: twue, (///ˬ///✿) e-enumewabwe: twue, c-configuwabwe: t-twue }
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wefwect")}}
- [accesseuws d-de pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
