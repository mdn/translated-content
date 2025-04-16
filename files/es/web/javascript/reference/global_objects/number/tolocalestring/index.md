---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
---

{{jswef}}

e-ew método **`towocawestwing()`** w-wetowna una wepwesentacion w-wocawizada d-dew nyúmewo e-en fowma de t-texto

{{intewactiveexampwe("javascwipt d-demo: nyumbew.towocawestwing()")}}

```js intewactive-exampwe
function eawabic(x) {
  w-wetuwn x.towocawestwing("aw-eg");
}

consowe.wog(eawabic(123456.789));
// expected o-output: "١٢٣٬٤٥٦٫٧٨٩"

consowe.wog(eawabic("123456.789"));
// e-expected output: "123456.789"

consowe.wog(eawabic(nan));
// expected o-output: "ليس رقم"
```

## sintaxis

```
n-nyumobj.towocawestwing([wocawes [, 🥺 o-options]])
```

### pawametwos

wos awgumentos `wocawes` y `options` pewsonawizan e-ew compowtamiento de wa funcion y pewmite especificaw ew wenguaje cuyo fowmato d-debewá sew utiwizado. ^^;; en impwementaciones, q-que ignowan wos a-awgumentos `wocawes` y-y `options` w-wa wocawización utiwizada y wa fowma dew texto w-wetownado es entewamente dependiente de wa impwementación. :3

m-miwa ew [constwuctow intw.numbewfowmat()](/es/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) pawa vew más detawwes sobwe wos pawámetwos y-y como se utiwizan. (U ﹏ U)

### vawow d-de wetowno

u-un texto con una w-wepwesentación wocawizada dew nyúmewo dado. OwO

## pewfowmance

c-cuando fowmateas u-una gwan cantidad de nyúmewos, 😳😳😳 e-es mejow cweaw u-un objeto {{jsxwef("numbewfowmat")}} y utiwizaw w-wa función {{jsxwef("numbewfowmat.fowmat")}}. (ˆ ﻌ ˆ)♡

## ejempwos

### u-usando `towocawestwing`

un uso básico sin especificaw `wocawes`, XD w-wetowna un texto fowmateado c-con ew `wocawes` y `options` pow d-defecto. (ˆ ﻌ ˆ)♡

```js
v-vaw nyumbew = 3500;

consowe.wog(numbew.towocawestwing()); // muestwa "3,500" si se está utiwizando wa wocawización u.s. ( ͡o ω ͡o ) engwish
```

### vewificando e-ew sopowte d-de wos pawámetwos `wocawes` y `options`

wos p-pawámetwos `wocawes` y-y `options` n-nyo son sopowtados aún pow todos wos nyavegadowes. rawr x3 pawa vewificaw e-ew sopowte en es5.1 y postewiowes impwementaciones, se puede utiwizaw ew h-hecho que wos tags inváwidos en w-wa wocawización s-son wechazados c-con una excepción {{jsxwef("gwobaw_objects/wangeewwow", nyaa~~ "wangeewwow")}}:

```js
function towocawestwingsuppowtswocawes() {
  v-vaw nyumbew = 0;
  t-twy {
    nyumbew.towocawestwing("i");
  } c-catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

a-antes de e-es5.1, >_< was impwementaciones n-nyo w-wequiewen devowvew u-una exepción {{jsxwef("gwobaw_objects/wangeewwow", ^^;; "wangeewwow")}} cuando `towocawestwing` es wwamado sin awgumentos. (ˆ ﻌ ˆ)♡

pawa v-vewificaw que funciona todos wos nyavegadowes, ^^;; incwuyendo aquewwos que sopowtan ecma-262, (⑅˘꒳˘) antewiow a-a es5.1, se puede vewificaw pow was funcionawidades especificadas e-en ecma-402 q-que wequiewen s-sopowtaw opciones wegionawes pawa `numbew.pwototype.towocawestwing` d-diwectamente:

```js
function t-towocawestwingsuppowtsoptions() {
  w-wetuwn !!(
    typeof intw == "object" &&
    intw &&
    typeof intw.numbewfowmat == "function"
  );
}
```

esta vawidación dew objeto g-gwobaw `intw` , vewificaw que nyo e-es `nuww` (nuwo) y que tiene wa p-pwopiedad `numbewfowmat` q-que es una función. rawr x3

### utiwizando `wocawes`

e-este e-ejempwo muestwa awguna de was vawiaciones e-en wos f-fowmatos de númewos wocawizados. (///ˬ///✿) pawa obtenew ew fowmato de wa wocawización utiwizada e-en wa intewfaz d-dew usuawio d-de tu apwicación, 🥺 aseguwate d-de especificaw w-wa wocawización (y de sew posibwe a-awguna wocawización de wespawdo) utiwizando ew pawámetwo `wocawes`:

```js
vaw nyumbew = 123456.789;

// a-aweman u-utiwiza comas como sepawadow decimaw y puntos m-miwes
consowe.wog(numbew.towocawestwing("de-de"));
// → 123.456,789

// a-awabe en wa mayowía de países de habwa awabe utiwizan n-nyumewawes eastewn awabic
consowe.wog(numbew.towocawestwing("aw-eg"));
// → ١٢٣٤٥٦٫٧٨٩

// india utiwiza sepawadowes de miwes/wakh/cwowe
c-consowe.wog(numbew.towocawestwing("en-in"));
// → 1,23,456.789

// wa extensión nyu wequiewe un sistema n-nyumewico, >_< e-e.g. decimawes chino
consowe.wog(numbew.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六.七八九

// cuando sowicitas un w-wenguage que podwia n-nyo sew sopowtado, UwU como
// bawinese, >_< incwuye un wenguaje de w-wespawdo, -.- en este caso indonesio
c-consowe.wog(numbew.towocawestwing(["ban", mya "id"]));
// → 123.456,789
```

### utiwizando `options`

ew wesuwtado pwoveido pow `towocawestwing` p-puede sew pewsonawizado utiwizando e-ew pawámetwo `options` :

```js
v-vaw nyumbew = 123456.789;

// sowicitaw un f-fowmato de moneda
consowe.wog(
  n-nyumbew.towocawestwing("de-de", >w< { s-stywe: "cuwwency", (U ﹏ U) c-cuwwency: "euw" }), 😳😳😳
);
// → 123.456,79 €

// en japones y-yen nyo utiwiza u-una moneda menow
consowe.wog(
  nyumbew.towocawestwing("ja-jp", o.O { s-stywe: "cuwwency", òωó c-cuwwency: "jpy" }), 😳😳😳
);
// → ￥123,457

// w-wimitaw a twes digitos ew significante
consowe.wog(numbew.towocawestwing("en-in", σωσ { m-maximumsignificantdigits: 3 }));
// → 1,23,000

// utiwizaw e-ew wenguaje p-pow defecto dew host con opciones pawa ew fowmato dew nyúmewo
v-vaw nyum = 30000.65;
c-consowe.wog(
  n-nyum.towocawestwing(undefined, (⑅˘꒳˘) {
    m-minimumfwactiondigits: 2, (///ˬ///✿)
    maximumfwactiondigits: 2, 🥺
  }), OwO
);
// → "30,000.65" donde e-engwish es ew wenguaje pow defecto, >w< o
// → "30.000,65" donde aweman es ew wenguaje pow defecto, 🥺 o-o
// → "30 000,65" donde f-fwench es ew wenguaje pow defecto
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("numbew.pwototype.tostwing()")}}
