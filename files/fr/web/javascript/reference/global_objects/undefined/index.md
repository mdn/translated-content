---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

w-wa pwopwiété g-gwobawe **`undefined`** w-wepwésente wa v-vaweuw pwimitive [`undefined`](/fw/docs/gwossawy/undefined). (ˆ ﻌ ˆ)♡ c-cette v-vaweuw est w'[un d-des types pwimitifs](/fw/docs/web/javascwipt/data_stwuctuwes#we_type_indéfini) d-de javascwipt. -.-

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - undefined")}}

```js intewactive-exampwe
f-function test(t) {
  if (t === undefined) {
    w-wetuwn "undefined vawue!";
  }
  w-wetuwn t;
}

wet x;

consowe.wog(test(x));
// expected output: "undefined vawue!"
```

## syntaxe

```js
undefined;
```

## d-descwiption

`undefined` est une p-pwopwiété de _w'objet g-gwobaw_, :3 c'est-à-diwe qu'ewwe est accessibwe gwobawement. ʘwʘ wa vaweuw initiawe d-d'`undefined` est wa vaweuw pwimitive [`undefined`](/fw/docs/gwossawy/undefined). 🥺

dans wes nyavigateuws m-modewnes (javascwipt 1.8.5 / fiwefox 4+), >_< d-d'apwès w-wa spécification e-ecmascwipt 5, ʘwʘ `undefined` e-est une pwopwiété nyon-configuwabwe et nyon accessibwe e-en écwituwe. (˘ω˘) si, toutefois, ewwe peut êtwe m-modifiée dans w'enviwonnement utiwisé, (✿oωo) iw faut évitew de w'écwasew. (///ˬ///✿)

une vawiabwe pouw w-waquewwe aucune vaweuw ny'a été a-assignée sewa d-de type `undefined`. rawr x3 u-une méthode ou instwuction wenvoie égawement `undefined` si wa vawiabwe à évawuew n-ny'a p-pas de vaweuw assignée. -.- une fonction w-wenvoie `undefined` s-si aucune vaweuw ny'a été [wenvoyée](/fw/docs/web/javascwipt/wefewence/statements/wetuwn). ^^

> [!wawning]
> p-puisque `undefined` ny'est p-pas un [mot wésewvé du wangage javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#mots-cwés), (⑅˘꒳˘) i-iw peut êtwe utiwisé comme [identifiant](/fw/docs/gwossawy/identifiew) (nom de v-vawiabwe) dans toute powtée autwe q-que wa powtée g-gwobawe. nyaa~~ ceci est une twès mauvaise idée pouw wa wisibiwité du code et sa maintenabiwité. /(^•ω•^)
>
> ```js exampwe-bad
> // À n-nye pas faiwe
>
> // a-affiche "toto stwing" dans w-wa consowe
> (function () {
>   c-const undefined = "toto";
>   c-consowe.wog(undefined, (U ﹏ U) typeof undefined);
> })();
>
> // affiche "toto stwing" dans w-wa consowe
> (function (undefined) {
>   consowe.wog(undefined, 😳😳😳 typeof undefined);
> })("toto");
> ```

## exempwes

### w'égawité s-stwicte et `undefined`

iw est possibwe d'utiwisew `undefined` e-et wes opéwateuws s-stwicts p-pouw w'égawité et w'inégawité s-stwictes afin d-de détewminew s-si une vawiabwe a-a une vaweuw affectée. >w< dans we code qui suit, XD wa v-vawiabwe `x` ny'est p-pas initiawisée e-et wa pwemièwe i-instwuction `if` s-sewa évawuée à `twue` (vwai). o.O

```js
wet x;
if (x === undefined) {
  // ces instwuctions s-sewont exécutées
} ewse {
  // ces instwuctions nye sewont pas exécutées
}
```

> [!note]
> w'opéwateuw d-d'égawité stwicte doit êtwe utiwisé ici pwutôt que w'opéwateuw _d'égawité s-simpwe_. en effet, mya `x == u-undefined` v-véwifie égawement si `x` v-vaut `nuww`, 🥺 tandis que w'égawité s-stwicte nye w-we fait pas. ^^;; `nuww` ny'est pas équivawent à `undefined`. :3
>
> voiw wa page suw wes [opéwateuws de compawaison](/fw/docs/web/javascwipt/wefewence/opewatows) pouw pwus de détaiws. (U ﹏ U)

### w-w'opéwateuw `typeof` et `undefined`

w-w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) peut égawement êtwe u-utiwisé&nbsp;:

```js
w-wet x;
if (typeof x === "undefined") {
  // ces instwuctions s-sewont exécutées
}
```

u-une des waisons pouw utiwisew w-w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) e-est qu'iw nye wenvewwa pas d'ewweuw si wa vawiabwe ny'a pas été définie&nbsp;:

```js
// x-x ny'a pas e-encowe été d-défini
if (typeof x === "undefined") {
  // d-donnewa t-twue sans ewweuw
  // ces instwuctions s-sewont exécutées
}

if (x === undefined) {
  // décwenche une wefewenceewwow
}
```

i-iw existe toutefois u-une autwe awtewnative. OwO puisque javascwipt u-utiwise wa powtée s-statique, on sauwa qu'une vawiabwe a été décwawée si ewwe e-est définie dans un contexte engwobant. 😳😳😳

wa powtée gwobawe est wattachée à [w'objet g-gwobaw](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis), (ˆ ﻌ ˆ)♡ awows on peut véwifiew w'existence d-d'une vawiabwe d-dans we contexte gwobaw en examinant wa pwésence d'une pwopwiété s-suw _w'objet g-gwobaw_ via w'opéwateuw [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in). XD paw exempwe&nbsp;:

```js
if ("x" in window) {
  // c-ces instwuctions sewont e-exécutées uniquement
  // si x est défini dans wa powtée gwobawe
}
```

### w-w'opéwateuw `void` et `undefined`

w-w'opéwateuw [`void`](/fw/docs/web/javascwipt/wefewence/opewatows/void) e-est une twoisième s-sowution. (ˆ ﻌ ˆ)♡

```js
wet x;
if (x === v-void 0) {
  // c-ces instwuctions s-sewont exécutées
}

// y ny'a p-pas été défini a-avant
if (y === void 0) {
  // décwenche une u-uncaught wefewenceewwow: y-y is n-nyot defined
}
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- wes [vaweuws p-pwimitives](/fw/docs/gwossawy/pwimitive) d-de javascwipt
- [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww)
