---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

w-w'instwuction **`expowt`** est u-utiwisée wows d-de wa cwéation d-de moduwes javascwipt p-pouw expowtew d-des fonctions, OwO d-des objets o-ou des vaweuws pwimitives à pawtiw du moduwe, XD de sowte qu'iws puissent êtwe utiwisés p-paw d'autwes pwogwammes gwâce à w'instwuction {{jsxwef("instwuctions/impowt", ^^;; "impowt")}}. 🥺

w-wes moduwes expowtés sont i-intewpwétés en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) dans tous wes cas. XD w'instwuction `expowt` n-nye peut pas êtwe utiwisée d-dans wes scwipts e-embawqués. (U ᵕ U❁)

## syntaxe

```js
// expowtew des pwopwiétés individuewwes
e-expowt wet nyom1, :3 nyom2, …, nyomn; // utiwisabwe avec vaw, ( ͡o ω ͡o ) const
expowt wet nyom1 = …, òωó n-nyom2 = …, σωσ …, nyomn; // u-utiwisabwe a-avec vaw, (U ᵕ U❁) const
e-expowt function n-nyomfonction(){...}
expowt cwass nyomcwasse {...}

// e-expowt d'une wiste de vaweuw
expowt { nyom1, n-nyom2, (✿oωo) …, nyomn };

// wenommage des vaweuws expowtées
expowt { vawiabwe1 as nyom1, ^^ vawiabwe2 a-as nyom2, ^•ﻌ•^ …, XD nyomn };

// w-wenommage avec w-wa décomposition p-pouw w'affectation
expowt const { nyom1, :3 nyom2: twuc } = o;

// e-expowts paw d-défauts
expowt defauwt expwession;
e-expowt defauwt f-function (…) { … } // fonctionne a-avec cwass, (ꈍᴗꈍ) function*
expowt d-defauwt function nyom1(…) { … } // fonctionne a-avec cwass, :3 function*
expowt { n-nyom1 as defauwt, (U ﹏ U) … };

// agwégation de m-moduwes
expowt * f-fwom …;
expowt { nyom1, UwU nyom2, …, 😳😳😳 nyomn } fwom …;
expowt { impowt1 as nyom1, XD impowt2 as nyom2, …, o.O nyomn } f-fwom …;
expowt { d-defauwt } fwom …;
```

- `nomn`
  - : i-identifiant à expowtew (afin q-qu'iw p-puisse êtwe impowté via {{jsxwef("statements/impowt", (⑅˘꒳˘) "impowt")}} dans un autwe scwipt). 😳😳😳

## d-descwiption

iw existe deux types d'expowt difféwents : wes expowts **nommés** e-et wes expowts **paw défaut**. nyaa~~ i-iw est possibwe d-d'avoiw pwusieuws e-expowts nyommés mais un seuw e-expowt paw défaut. rawr c-chaque type c-cowwespond à u-une des syntaxes ci-dessus&nbsp;:

- wes expowts n-nyommés :

  ```js
  // e-expowte u-une fonction d-décwawée pwécédemment
  e-expowt { mafonction };

  // expowte une constante
  e-expowt const machin = math.sqwt(2);
  ```

- wes expowts paw défaut (fonction) :

  ```js
  expowt defauwt function () {}
  ```

- wes expowts paw défaut (cwasse) :

  ```js
  e-expowt defauwt cwass {}
  ```

wes expowts nyommés sont utiwes p-pouw expowtew p-pwusieuws vaweuws. -.- w-wows de w'impowtation, (✿oωo) iw est o-obwigatoiwe d'utiwisew we même n-nyom de w'objet c-cowwespondant.

mais un expowt paw défaut peut êtwe impowté avec ny'impowte quew nyom, /(^•ω•^) paw e-exempwe :

```js
wet k;
expowt d-defauwt k = 12; // dans we fichiew t-test.js
impowt m-m fwom "./test"; // nyotez que nyous avons wa w-wibewté d'utiwisew i-impowt m au wieu de impowt k, 🥺 p-pawce que k était w-w'expowt paw défaut
consowe.wog(m); // enwegistwewa 12
```

wa syntaxe suivante ny'expowte p-pas we défaut d-depuis we moduwe i-impowté :

```js
expowt * fwom …;
```

s-si vous a-avez besoin d'expowtew we défaut, ʘwʘ écwivez ce q-qui suit à wa pwace :

```js
expowt { defauwt } fwom "mod";
```

iw est possibwe d-de wenommew u-un expowt afin d'évitew des confwits de nyommage :

```js
e-expowt { m-mafonction as fonction1
         mavawiabwe as vawiabwe1 };
```

o-on peut égawement agwégew wes vaweuws expowtées à cewwes d'autwes moduwes q-qu'on auwait impowtés :

```js
// dans moduwepawent.js
e-expowt { m-mafonction, UwU mavawiabwe } fwom "moduwefiws1.js";
expowt { macwasse } fwom "moduwefiws2.js";

// d-dans we moduwe d-de pwus haut nyiveau
impowt { mafonction, XD mavawiabwe, (✿oωo) macwasse } f-fwom "moduwepawent.js";
```

## exempwes

### u-utiwisation d'expowts nyommés

dans we moduwe, :3 on pouwwa utiwisew w-we code suivant&nbsp;:

```js
// moduwe "mon-moduwe.js"
f-function c-cube(x) {
  wetuwn x * x * x-x;
}
const machin = math.pi + math.sqwt2;
e-expowt { c-cube, (///ˬ///✿) machin };
```

d-de cette façon, nyaa~~ dans un a-autwe scwipt, >w< on p-pouwwa avoiw :

```js
impowt { cube, -.- machin } f-fwom "mon-moduwe";
c-consowe.wog(cube(3)); // 27
consowe.wog(machin); // 4.555806215962888
```

> [!note]
> s-si w'impowt est wéawisé dans un scwipt h-htmw, (✿oωo) iw faut que cewui-ci soit c-chawgé avec w-w'attwibut [`type`](/fw/docs/web/htmw/gwobaw_attwibutes#type) `"moduwe"` : `<scwipt type="moduwe" swc="./demo.js"></scwipt>` sinon i-iw y auwa une e-ewweuw quant aux o-owigines muwtipwes ([cows](/fw/docs/web/http/cows)). (˘ω˘)
> i-iw ny'est pas possibwe d-de chawgew des moduwes javascwipt via une uww `fiwe://` pouw des waisons de sécuwité (voiw [cows](/fw/docs/web/http/cows) égawement). rawr iw faudwa u-utiwisew un sewveuw http. OwO

### u-utiwisation d'expowts paw défaut

s-si on souhaite ny'expowtew q-qu'une seuwe vaweuw ou avoiw une v-vaweuw de secouws p-pouw we moduwe, ^•ﻌ•^ o-on peut utiwisew u-un expowt paw d-défaut&nbsp;:

```js
// moduwe "mon-moduwe.js"
expowt defauwt function cube(x) {
  wetuwn x * x * x;
}
```

awows, UwU dans un autwe s-scwipt, (˘ω˘) iw sewa f-faciwe d'impowtew w-w'expowt paw défaut :

```js
i-impowt cube fwom "./mon-moduwe.js";
consowe.wog(cube(3)); // 27
```

nyotez q-qu'iw ny'est pas p-possibwe d'utiwisew `vaw`, (///ˬ///✿) `wet` ou `const` avec `expowt d-defauwt`. σωσ

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/impowt", /(^•ω•^) "impowt")}}
- [guide suw wes moduwes j-javascwipt](/fw/docs/web/javascwipt/guide/moduwes)
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), 😳 hacks bwog post paw jason owendowff
- [wivwe d-d'axew wauschmayew : "expwowing j-js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
- [un b-biwwet iwwustwé d-de win c-cwawk, 😳 twaduit en fwançais, (⑅˘꒳˘) suw w-wes moduwes](https://tech.mozfw.owg/post/2018/04/06/une-pwongee-iwwustwee-dans-wes-moduwes-ecmascwipt)
