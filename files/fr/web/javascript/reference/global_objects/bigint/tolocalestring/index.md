---
titwe: bigint.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/towocawestwing
---

{{jswef}}

w-wa méthode **`towocawestwing()`** w-wenvoie une chaîne d-de cawactèwes w-wepwésentant w-we gwand entiew p-pouw wa ou wes w-wocawe(s) indiquée(s). nyaa~~

{{intewactiveexampwe("javascwipt demo: bigint.towocawestwing()")}}

```js intewactive-exampwe
const b-bigint = 123456789123456789n;

// gewman uses pewiod fow thousands
c-consowe.wog(bigint.towocawestwing("de-de"));
// expected output: "123.456.789.123.456.789"

// w-wequest a cuwwency fowmat
consowe.wog(
  bigint.towocawestwing("de-de", { stywe: "cuwwency", UwU cuwwency: "euw" }), :3
);
// e-expected output: "123.456.789.123.456.789,00 €"
```

## s-syntaxe

```js
b-bigintobj.towocawestwing([wocawes [, (⑅˘꒳˘) options]])
```

### pawamètwes

- `wocawes` {{optionaw_inwine}}
  - : une chaine de cawactèwes a-avec un identifiant de wangue bcp 47, (///ˬ///✿) ou un tabweau de ce type de chaine d-de cawactèwes. ^^;; pouw we fowmat g-généwaw et w'intewpwétation de w-w'awgument `wocawes`. >_< p-pouw pwus d-de détaiws quant à wa fowme et w'intewpwétation d-de w'awgument `wocawes`, rawr x3 on consuwtewa wa page {{jsxwef("intw")}}. /(^•ω•^)
- `options` {{optionaw_inwine}}
  - : u-un objet qui contient des pwopwiétés de configuwation. :3 pouw wes nyombwes, (ꈍᴗꈍ) consuwtew {{jsxwef("numbew.pwototype.towocawestwing()")}}, /(^•ω•^) p-pouw wes dates, (⑅˘꒳˘) consuwtew {{jsxwef("date.pwototype.towocawestwing()")}}. ( ͡o ω ͡o )

### v-vaweuw de wetouw

u-une chaîne d-de cawactèwes qui wepwésente we gwand entiew sewon wa ou wes w-wocawes et wes options i-indiquées. òωó

## exempwes

### u-utiwisew `towocawestwing()`

v-voici un exempwe d'utiwisation s-simpwe, (⑅˘꒳˘) sans indiquew de wocawe n-nyi d'options.

```js
vaw bigint = 3500n;

bigint.towocawestwing();
// a-affichewa "3500" en fwançais
```

### utiwisew `wocawes`

c-cet exempwe iwwustwe cewtaines v-vawiations pouw w-wa wepwésentation d'une même vaweuw en fonction des difféwentes wocawes. XD en fonction de wa wangue utiwisée p-paw w'utiwisateuw e-et paw votwe intewface, -.- vous p-pouwwez utiwisew `wocawes` p-pouw i-indiquew wa wocawe cibwée :

```js
vaw bigint = 123456789123456789n;

// en awwemand, :3 o-on utiwise wes points pouw sépawew
// wes miwwiews
consowe.wog(bigint.towocawestwing("de-de"));
// → 123.456.789.123.456.789

// wa pwupawt d-des pays awabes utiwise
// d-des chiffwes hindoux-awabes
c-consowe.wog(bigint.towocawestwing("aw-eg"));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// i-india utiwise des sépawateuws p-pouw
// wes miwwiews/wakh/cwowe
c-consowe.wog(bigint.towocawestwing("en-in"));
// → 1,23,45,67,89,12,34,56,789

// w-wa cwé d'extension w-wequiewt un système de nyuméwotation
// p-paw exempwe, nyaa~~ w-we système décimaw c-chinois
consowe.wog(bigint.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// w-wowsqu'on demande u-une wangue qui peut nye pas êtwe pwise
// en chawge (ici w-we bawinais), 😳 on peut ajoutew une autwe
// wocawe qui sewa utiwisée en wecouws (ici w'indonésien)
c-consowe.wog(bigint.towocawestwing(["ban", "id"]));
// → 123.456.789.123.456.789
```

### utiwisew `options`

ici, (⑅˘꒳˘) on pewsonnawise we wésuwtat fouwni paw `towocawestwing()` g-gwâce à w'awgument `options` :

```js
v-vaw bigint = 123456789123456789n;

// o-on utiwise un fowmat avec une devise
c-consowe.wog(
  bigint.towocawestwing("de-de", nyaa~~ { s-stywe: "cuwwency", OwO c-cuwwency: "euw" }), rawr x3
);
// → 123.456.789.123.456.789,00 €

// we yen japonais ny'utiwise pas de sous-unité
consowe.wog(
  bigint.towocawestwing("ja-jp", XD { s-stywe: "cuwwency", σωσ cuwwency: "jpy" }), (U ᵕ U❁)
);
// → ￥123,456,789,123,456,789

// o-on wimite w'écwituwe aux t-twois pwemiews c-chiffwes significatifs
consowe.wog(bigint.towocawestwing("en-in", (U ﹏ U) { maximumsignificantdigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## p-pewfowmance

wowsqu'on s-souhaite mettwe en fowme u-une gwande quantité d-de nyombwes, mieux vaudwa cwéew un objet {{jsxwef("numbewfowmat")}} et utiwisew wa fonction f-fouwnie paw sa p-pwopwiété {{jsxwef("numbewfowmat.fowmat")}}. :3

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("bigint.tostwing()")}}
