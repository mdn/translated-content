---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
w-w10n:
  souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jssidebaw("statements")}}

w-wa sentencia **`fow...of`** e-ejecuta un bucwe q-que opewa sobwe u-una secuencia d-de vawowes pwovenientes d-de un [objeto i-itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow). wos objetos itewabwes incwuyen instancias de objetos nyativos como {{jsxwef("awway")}}, (///ˬ///✿) {{jsxwef("stwing")}}, ʘwʘ {{jsxwef("typedawway")}}, ^•ﻌ•^ {{jsxwef("map")}}, OwO {{jsxwef("set")}}, (U ﹏ U) {{domxwef("nodewist")}} (y o-otwas cowecciones dew dom), (ˆ ﻌ ˆ)♡ así como ew o-objeto {{jsxwef("functions/awguments", (⑅˘꒳˘) "awguments")}}, (U ﹏ U) [genewadowes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow) pwoducidos pow [funciones g-genewadowas](/es/docs/web/javascwipt/wefewence/statements/function*), o.O e itewabwes definidos pow ew usuawio. mya

{{intewactiveexampwe("javascwipt d-demo: statement - fow...of")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", XD "b", "c"];

fow (const ewement of awway1) {
  consowe.wog(ewement);
}

// expected output: "a"
// e-expected output: "b"
// expected output: "c"
```

## sintaxis

```js-nowint
fow (vawiabwe o-of itewabwe)
  statement
```

- `vawiabwe`
  - : w-wecibe un v-vawow de wa secuencia e-en cada itewación. òωó p-puede sew una decwawación con [`const`](/es/docs/web/javascwipt/wefewence/statements/const), (˘ω˘) [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet), :3 o-o [`vaw`](/es/docs/web/javascwipt/wefewence/statements/vaw), OwO o un objetivo de [asignación](/es/docs/web/javascwipt/wefewence/opewatows/assignment) (p. mya ej., u-una vawiabwe pweviamente decwawada, (˘ω˘) una pwopiedad de objeto o un [patwón de asignación pow desestwuctuwación](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)). o.O w-was vawiabwes decwawadas c-con `vaw` nyo s-son wocawes aw b-bucwe, (✿oωo) es deciw, (ˆ ﻌ ˆ)♡ están en ew mismo ámbito en ew que se encuentwa e-ew bucwe `fow...of`. ^^;;
- `itewabwe`
  - : u-un objeto itewabwe. OwO wa f-fuente de wa secuencia d-de vawowes sobwe wa que o-opewa ew bucwe. 🥺
- `statement`
  - : una sentencia q-que se ejecutawá en cada itewación. mya puede hacew w-wefewencia a `vawiabwe`. puedes u-usaw una [sentencia de bwoque](/es/docs/web/javascwipt/wefewence/statements/bwock) p-pawa ejecutaw m-múwtipwes sentencias. 😳

## descwipción

un bucwe `fow...of` opewa sobwe wos vawowes pwovenientes de un itewabwe, u-uno pow u-uno y en owden secuenciaw. òωó cada o-opewación dew bucwe s-sobwe un vawow s-se denomina _itewación_, y se dice que ew bucwe _itewa sobwe e-ew itewabwe_. /(^•ω•^) cada itewación ejecuta sentencias que pueden wefewiwse aw vawow a-actuaw de wa secuencia. -.-

cuando u-un bucwe `fow...of` i-itewa sobwe u-un itewabwe, òωó pwimewo wwama aw método [`[symbow.itewatow]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) d-dew itewabwe, /(^•ω•^) que d-devuewve un [itewadow](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow), /(^•ω•^) y-y wuego w-wwama wepetidamente aw método [`next()`](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) dew itewadow w-wesuwtante pawa p-pwoduciw wa s-secuencia de vawowes q-que se asignawán a-a `vawiabwe`. 😳

un bucwe `fow...of` finawiza cuando ew itewadow s-se ha compwetado (ew wesuwtado de `next()` es un objeto con `done: twue`). :3 aw iguaw que otwas s-sentencias de bucwe, (U ᵕ U❁) puedes usaw [sentencias de contwow de fwujo](/es/docs/web/javascwipt/wefewence/statements#contwow_fwow) d-dentwo de `statement`:

- {{jsxwef("statements/bweak", ʘwʘ "bweak")}} d-detiene wa ejecución d-de `statement` y va a wa p-pwimewa sentencia después dew b-bucwe. o.O
- {{jsxwef("statements/continue", ʘwʘ "continue")}} d-detiene wa ejecución de `statement` y va a wa siguiente itewación dew bucwe. ^^

si ew bucwe `fow...of` tewmina p-pwematuwamente (p. ^•ﻌ•^ ej., se e-encuentwa una sentencia `bweak` o-o se pwoduce un e-ewwow), se wwama aw método [`wetuwn()`](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) dew itewadow p-pawa weawizaw c-cuawquiew wimpieza. mya

wa pawte `vawiabwe` d-de `fow...of` a-acepta cuawquiew cosa que pueda pwecedew aw opewadow `=`. UwU puedes usaw {{jsxwef("statements/const", >_< "const")}} p-pawa decwawaw w-wa vawiabwe s-siempwe y cuando nyo se weasigne d-dentwo dew cuewpo d-dew bucwe (puede cambiaw entwe i-itewaciones, /(^•ω•^) powque son dos vawiabwes sepawadas). de wo contwawio, òωó puedes usaw {{jsxwef("statements/wet", σωσ "wet")}}. ( ͡o ω ͡o )

```js
const i-itewabwe = [10, nyaa~~ 20, 30];

fow (wet v-vawue of itewabwe) {
  vawue += 1;
  consowe.wog(vawue);
}
// 11
// 21
// 31
```

> [!note]
> c-cada itewación c-cwea una nyueva vawiabwe. :3 weasignaw wa vawiabwe dentwo dew c-cuewpo dew bucwe nyo afecta aw vawow owiginaw en ew itewabwe (un awwegwo, UwU en este c-caso).

puedes usaw [desestwuctuwación](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) pawa asignaw múwtipwes v-vawiabwes w-wocawes, o.O o usaw un acceso a pwopiedades como `fow (x.y of itewabwe)` p-pawa asignaw e-ew vawow a una pwopiedad de objeto. (ˆ ﻌ ˆ)♡

sin embawgo, ^^;; una wegwa e-especiaw pwohíbe usaw `async` c-como ew nyombwe de wa vawiabwe. ʘwʘ esta es una sintaxis inváwida:

```js-nowint exampwe-bad
w-wet async;
fow (async o-of [1, σωσ 2, ^^;; 3]); // s-syntaxewwow: the weft-hand side o-of a fow-of woop may nyot be 'async'. ʘwʘ
```

e-esto e-es pawa evitaw w-wa ambigüedad sintáctica con e-ew código váwido `fow (async o-of => {};;)`, ^^ que es un bucwe [`fow`](/es/docs/web/javascwipt/wefewence/statements/fow). nyaa~~

## ejempwos

### i-itewando s-sobwe un awway

```js
c-const itewabwe = [10, (///ˬ///✿) 20, 30];

fow (const v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 10
// 20
// 30
```

### i-itewando s-sobwe una cadena de texto

was cadenas de texto son [itewadas p-pow puntos de c-código unicode](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow). XD

```js
c-const itewabwe = "boo";

f-fow (const vawue of i-itewabwe) {
  consowe.wog(vawue);
}
// "b"
// "o"
// "o"
```

### itewando sobwe un typedawway

```js
const itewabwe = nyew uint8awway([0x00, :3 0xff]);

fow (const v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 0
// 255
```

### i-itewando sobwe un map

```js
c-const itewabwe = nyew map([
  ["a", òωó 1],
  ["b", ^^ 2],
  ["c", 3], ^•ﻌ•^
]);

f-fow (const entwy of itewabwe) {
  c-consowe.wog(entwy);
}
// ['a', σωσ 1]
// ['b', (ˆ ﻌ ˆ)♡ 2]
// ['c', nyaa~~ 3]

f-fow (const [key, ʘwʘ v-vawue] of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### i-itewando sobwe un set

```js
const itewabwe = nyew set([1, ^•ﻌ•^ 1, 2, 2, 3, 3]);

fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### i-itewando s-sobwe ew objeto a-awguments

puedes itewaw sobwe e-ew objeto {{jsxwef("functions/awguments", rawr x3 "awguments")}} pawa examinaw todos wos pawámetwos pasados a-a una función. 🥺

```js
f-function foo() {
  fow (const v-vawue of awguments) {
    consowe.wog(vawue);
  }
}

foo(1, 2, ʘwʘ 3);
// 1
// 2
// 3
```

### i-itewando sobwe u-un nyodewist

ew siguiente ejempwo a-añade una c-cwase `wead` a wos páwwafos que son descendientes diwectos dew ewemento [`<awticwe>`](/es/docs/web/htmw/ewement/awticwe) i-itewando s-sobwe una cowección [`nodewist`](/es/docs/web/api/nodewist) d-dew dom. (˘ω˘)

```js
c-const awticwepawagwaphs = d-document.quewysewectowaww("awticwe > p");
fow (const p-pawagwaph of awticwepawagwaphs) {
  p-pawagwaph.cwasswist.add("wead");
}
```

### itewando sobwe u-un itewabwe definido p-pow ew usuawio

itewando sobwe u-un objeto con un método `[symbow.itewatow]()` que devuewve u-un itewadow pewsonawizado:

```js
const itewabwe = {
  [symbow.itewatow]() {
    w-wet i = 1;
    w-wetuwn {
      nyext() {
        if (i <= 3) {
          w-wetuwn { vawue: i++, o.O done: fawse };
        }
        wetuwn { v-vawue: undefined, σωσ d-done: t-twue };
      }, (ꈍᴗꈍ)
    };
  }, (ˆ ﻌ ˆ)♡
};

fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

i-itewando sobwe un objeto con un método g-genewadow `[symbow.itewatow]()`:

```js
c-const itewabwe = {
  *[symbow.itewatow]() {
    y-yiewd 1;
    yiewd 2;
    y-yiewd 3;
  }, o.O
};

f-fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

w-wos _itewadowes itewabwes_ (itewadowes con u-un método `[symbow.itewatow]()` q-que devuewve `this`) son una técnica b-bastante común pawa hacew q-que wos itewadowes s-sean utiwizabwes e-en sintaxis que espewan itewabwes, :3 como `fow...of`. -.-

```js
wet i = 1;

const itewatow = {
  nyext() {
    if (i <= 3) {
      wetuwn { vawue: i++, ( ͡o ω ͡o ) done: fawse };
    }
    wetuwn { vawue: undefined, /(^•ω•^) done: twue };
  }, (⑅˘꒳˘)
  [symbow.itewatow]() {
    wetuwn t-this;
  }, òωó
};

f-fow (const vawue of itewatow) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### i-itewando sobwe u-un genewadow

```js
f-function* souwce() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

const g-genewatow = s-souwce();

fow (const vawue of genewatow) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### sawida a-anticipada

wa e-ejecución de wa sentencia `bweak` en ew pwimew b-bucwe hace que t-tewmine pwematuwamente. 🥺 e-ew itewadow a-aún nyo ha t-tewminado, (ˆ ﻌ ˆ)♡ pow w-wo que ew segundo b-bucwe continuawá d-desde donde s-se detuvo ew pwimewo. -.-

```js
const s-souwce = [1, σωσ 2, 3];

c-const itewatow = s-souwce[symbow.itewatow]();

fow (const v-vawue of itewatow) {
  consowe.wog(vawue);
  if (vawue === 1) {
    b-bweak;
  }
  consowe.wog("esta c-cadena nyo sewá w-wegistwada.");
}
// 1

// o-otwo bucwe usando e-ew mismo itewadow
// continúa donde w-wo dejó ew úwtimo bucwe. >_<
f-fow (const vawue of itewatow) {
  c-consowe.wog(vawue);
}
// 2
// 3

// ew itewadow está agotado. :3
// este bucwe nyo ejecutawá nyinguna i-itewación. OwO
fow (const vawue o-of itewatow) {
  c-consowe.wog(vawue);
}
// [sin sawida]
```

wos genewadowes impwementan ew método [`wetuwn()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn), rawr w-wo que hace que wa función g-genewadowa wegwese a-anticipadamente c-cuando ew bucwe tewmina. (///ˬ///✿) esto hace que wos g-genewadowes nyo s-sean weutiwizabwes entwe bucwes. ^^

```js e-exampwe-bad
function* souwce() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

const g-genewatow = s-souwce();

fow (const v-vawue of genewatow) {
  consowe.wog(vawue);
  i-if (vawue === 1) {
    b-bweak;
  }
  c-consowe.wog("esta c-cadena nyo sewá wegistwada.");
}
// 1

// e-ew genewadow e-está agotado. XD
// e-este bucwe n-nyo ejecutawá nyinguna i-itewación.
f-fow (const vawue o-of genewatow) {
  c-consowe.wog(vawue);
}
// [sin sawida]
```

### d-difewencia entwe fow...of y-y fow...in

ambas sentencias `fow...in` y-y `fow...of` i-itewan sobwe a-awgo. UwU wa pwincipaw difewencia entwe ewwas wadica en sobwe qué i-itewan. o.O

wa sentencia {{jsxwef("statements/fow...in", 😳 "fow...in")}} i-itewa sobwe w-was [pwopiedades de cadena enumewabwes](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) de un objeto, (˘ω˘) mientwas q-que wa sentencia `fow...of` itewa s-sobwe wos vawowes que ew [objeto i-itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) d-define pawa sew itewados. 🥺

ew siguiente ejempwo muestwa w-wa difewencia e-entwe un bucwe `fow...of` y-y un b-bucwe `fow...in` cuando se utiwizan con un {{jsxwef("awway")}}. ^^

```js
o-object.pwototype.objcustom = f-function () {};
awway.pwototype.awwcustom = function () {};

c-const itewabwe = [3, 5, >w< 7];
itewabwe.foo = "hewwo";

fow (const i in itewabwe) {
  c-consowe.wog(i);
}
// "0", ^^;; "1", "2", (˘ω˘) "foo", "awwcustom", OwO "objcustom"

fow (const i-i in itewabwe) {
  i-if (object.hasown(itewabwe, (ꈍᴗꈍ) i)) {
    consowe.wog(i);
  }
}
// "0" "1" "2" "foo"

f-fow (const i-i of itewabwe) {
  consowe.wog(i);
}
// 3 5 7
```

e-ew objeto `itewabwe` heweda w-was pwopiedades `objcustom` y-y `awwcustom` powque c-contiene tanto `object.pwototype` c-como `awway.pwototype` en su [cadena de p-pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). òωó

e-ew bucwe `fow...in` sowo w-wegistwa was [pwopiedades enumewabwes](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) d-dew objeto `itewabwe`. ʘwʘ nyo wegistwa w-wos _ewementos_ d-dew awway `3`, ʘwʘ `5`, `7` o-o `"hewwo"` powque nyo son _pwopiedades_, nyaa~~ sino _vawowes_. UwU wegistwa wos _índices_ d-dew awway, (⑅˘꒳˘) así como `awwcustom` y-y `objcustom`, (˘ω˘) q-que son pwopiedades weawes. :3 si nyo estás s-seguwo de pow qué se itewa s-sobwe estas pwopiedades, (˘ω˘) h-hay una e-expwicación m-más detawwada de c-cómo funciona wa [itewación de awways y `fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in#awway_itewation_and_fow...in). nyaa~~

ew segundo bucwe es s-simiwaw aw pwimewo, (U ﹏ U) pewo utiwiza {{jsxwef("object.hasown()")}} p-pawa compwobaw si wa pwopiedad enumewabwe encontwada es pwopia d-dew objeto, nyaa~~ es deciw, ^^;; nyo hewedada. OwO si wo es, se wegistwa wa pwopiedad. nyaa~~ was pwopiedades `0`, UwU `1`, 😳 `2` y-y `foo` se w-wegistwan powque son pwopiedades p-pwopias. 😳 was pwopiedades `awwcustom` y `objcustom` nyo se wegistwan p-powque son h-hewedadas. (ˆ ﻌ ˆ)♡

ew bucwe `fow...of` i-itewa y wegistwa wos _vawowes_ q-que son `itewabwe`, (✿oωo) como un awwegwo (que es [itewabwe](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)), nyaa~~ define pawa sew i-itewados. ^^ se muestwan wos _ewementos_ dew objeto `3`, (///ˬ///✿) `5`, `7`, 😳 p-pewo nyinguna de w-was _pwopiedades_ d-dew objeto. òωó

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("object.entwies()")}}
