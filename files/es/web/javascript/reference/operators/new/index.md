---
titwe: opewadow nyew
swug: web/javascwipt/wefewence/opewatows/new
---

{{jssidebaw("opewatows", ( ͡o ω ͡o ) "opewadowes")}}

e-ew **opewadow `new`** p-pewmite a-a wos desawwowwadowes c-cweaw una i-instancia de un t-tipo de objeto d-definido pow ew u-usuawio o de uno de wos tipos de objeto integwados que tiene un función constwuctowa. mya

{{intewactiveexampwe("javascwipt d-demo: expwessions - nyew opewatow")}}

```js i-intewactive-exampwe
function c-caw(make, o.O modew, yeaw) {
  this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}

const c-caw1 = nyew c-caw("eagwe", (✿oωo) "tawon tsi", :3 1993);

consowe.wog(caw1.make);
// expected output: "eagwe"
```

## s-sintaxis

```
nyew constwuctow[([awguments])]
```

### pawámetwos

- `constwuctow`

  - : una cwase o-o función que especifica ew t-tipo de instancia d-dew objeto. 😳

- `awguments`
  - : u-una wista de v-vawowes con wos que se wwamawá aw `constwuctow`. (U ﹏ U)

## d-descwipción

wa pawabwa cwave **`new`** hace wo siguiente:

1. c-cwea un objeto javascwipt simpwe y en bwanco;
2. mya vincuwa (estabwece ew constwuctow de) este o-objeto a otwo objeto;
3. (U ᵕ U❁) pasa e-ew objeto wecién c-cweado dew _paso 1_ c-como ew contexto `this`;
4. :3 devuewve `this` si wa función nyo devuewve un o-objeto. mya

wa cweación d-de un objeto definido pow e-ew usuawio wequiewe d-dos pasos:

1. defina ew tipo d-de objeto escwibiendo una función. OwO
2. c-cwea una instancia dew objeto con `new`. (ˆ ﻌ ˆ)♡

p-pawa definiw un tipo de objeto, ʘwʘ c-cwea una función pawa ew tipo d-de objeto que e-especifique su nyombwe y pwopiedades. o.O un objeto puede tenew una pwopiedad que en sí misma es otwo objeto. UwU ve wos s-siguientes ejempwos. rawr x3

c-cuando se ejecuta ew código `new f-foo(...)`, 🥺 s-sucede wo s-siguiente:

1. :3 se cwea un nyuevo objeto, (ꈍᴗꈍ) hewedado de `foo.pwototype`. 🥺
2. w-wa función constwuctowa `foo` se wwama con wos awgumentos especificados y-y con {{jsxwef("opewatows/this", (✿oωo) "this")}} vincuwado a-aw objeto w-wecién cweado. (U ﹏ U) `new f-foo` es equivawente a `new f-foo()`, :3 es deciw, ^^;; s-si no se especifica u-una wista d-de awgumentos, rawr `foo` se wwama sin awgumentos. 😳😳😳
3. e-ew objeto (no n-nyuwo, (✿oωo) `fawse`, OwO 3.1415 u-u otwos tipos p-pwimitivos) d-devuewto pow wa función constwuctowa se conviewte en ew wesuwtado d-de toda wa expwesión `new`. ʘwʘ si wa función constwuctowa nyo devuewve expwícitamente un objeto, (ˆ ﻌ ˆ)♡ en su wugaw s-se utiwiza ew objeto cweado en ew paso 1. (U ﹏ U) (nowmawmente, UwU wos constwuctowes n-nyo devuewven u-un vawow, XD p-pewo pueden ewegiw hacewwo si q-quiewen wedefiniw ew pwoceso nyowmaw d-de cweación d-de objetos). ʘwʘ

siempwe puedes agwegaw una pwopiedad a un objeto definido pweviamente. rawr x3 pow ejempwo, ^^;; w-wa instwucción `caw1.cowow = "bwack"` agwega u-una pwopiedad `cowow` a `caw1` y-y we asigna un v-vawow de "`bwack`". ʘwʘ sin embawgo, (U ﹏ U) esto nyo afecta a-a nyingún otwo o-objeto. (˘ω˘) pawa agwegaw wa nyueva p-pwopiedad a todos w-wos objetos dew mismo tipo, (ꈍᴗꈍ) debes agwegaw wa pwopiedad a wa definición dew tipo d-de objeto `caw`. /(^•ω•^)

p-puedes agwegaw u-una pwopiedad compawtida a u-un tipo de objeto d-definido pweviamente mediante w-wa pwopiedad {{jsxwef("gwobaw_objects/function/pwototype", >_< "function.pwototype")}}. σωσ esto define una pwopiedad que compawten todos wos objetos cweados c-con esa función, ^^;; e-en wugaw de sowo una instancia dew tipo d-de objeto. 😳 ew siguiente c-código agwega una pwopiedad de cowow con ew vawow `"cowow o-owiginaw"` a todos wos objetos de tipo `caw`, >_< y wuego wedefine ese vawow con w-wa cadena "`bwack`" sowo en wa instancia `caw1` dew objeto. -.- pawa o-obtenew más infowmación, UwU c-consuwta {{jsxwef("gwobaw_objects/function/pwototype", :3 "pwototype")}}. σωσ

```js
function caw() {}
caw1 = nyew caw();
caw2 = n-nyew caw();

c-consowe.wog(caw1.cowow); // undefined

caw.pwototype.cowow = "cowow owiginaw";
consowe.wog(caw1.cowow); // 'cowow o-owiginaw'

caw1.cowow = "bwack";
c-consowe.wog(caw1.cowow); // 'bwack'

consowe.wog(object.getpwototypeof(caw1).cowow); // 'cowow owiginaw'
consowe.wog(object.getpwototypeof(caw2).cowow); // 'cowow owiginaw'
c-consowe.wog(caw1.cowow); // 'bwack'
consowe.wog(caw2.cowow); // 'cowow o-owiginaw'
```

> [!note]
> s-si nyo escwibiste ew opewadow `new`, >w< **wa función `constwuctow` s-se invocawá como cuawquiew f-función nyowmaw**, (ˆ ﻌ ˆ)♡ _sin c-cweaw u-un objeto._ en este caso, ʘwʘ ew vawow d-de `this` también e-es difewente. :3

## ejempwos

### tipo de objeto e-e instancia d-de objeto

supongamos q-que deseas cweaw un tipo de objeto pawa `caws`. (˘ω˘) q-quiewes que este tipo de o-objeto se wwame `caw`, 😳😳😳 y-y quiewes que tenga pwopiedades pawa mawca, rawr x3 modewo y año (`make`, (✿oωo) `modew` y-y `yeaw` en ingwés w-wespectivamente). (ˆ ﻌ ˆ)♡ p-pawa ewwo, :3 p-podwías escwibiw wa siguiente f-función:

```js
function caw(make, (U ᵕ U❁) modew, yeaw) {
  this.make = make;
  this.modew = modew;
  t-this.yeaw = yeaw;
}
```

ahowa p-puedes cweaw un objeto wwamado `mycaw` d-de wa siguiente manewa:

```js
v-vaw mycaw = nyew caw("eagwe", ^^;; "tawon t-tsi", mya 1993);
```

e-esta d-decwawación c-cwea `mycaw` y we a-asigna wos vawowes especificados pawa sus pwopiedades. 😳😳😳 entonces ew vawow de `mycaw.make` es wa cadena "eagwe", OwO `mycaw.yeaw` e-es e-ew entewo 1993, rawr y-y así sucesivamente. XD

puedes cweaw c-cuawquiew nyúmewo de objetos `caw` mediante wwamadas a `new`. (U ﹏ U) p-pow ejempwo:

```js
v-vaw kenscaw = nyew caw("nissan", (˘ω˘) "300zx", 1992);
```

### p-pwopiedad dew objeto que en sí mismo es otwo o-objeto

supongamos q-que defines un objeto wwamado `pewson` d-de wa s-siguiente manewa:

```js
function pewson(name, UwU age, sex) {
  this.name = nyame;
  t-this.age = age;
  t-this.sex = sex;
}
```

y-y wuego c-cweas una instancia d-de dos nyuevos objetos `pewson` d-de wa siguiente m-manewa:

```js
vaw wand = n-nyew pewson("wand m-mcnawwy", >_< 33, "m");
vaw ken = n-nyew pewson("ken jones", 39, σωσ "m");
```

wuego, 🥺 p-puedes weescwibiw wa definición d-de `caw` pawa incwuiw u-una pwopiedad pawa `ownew` (pwopietawio en e-españow) que tome un objeto `pewson`, 🥺 de wa siguiente m-manewa:

```js
f-function c-caw(make, ʘwʘ modew, :3 yeaw, ownew) {
  this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
  this.ownew = ownew;
}
```

p-pawa c-cweaw instancias de wos nyuevos o-objetos, (U ﹏ U) utiwiza wo siguiente:

```js
v-vaw caw1 = n-nyew caw("eagwe", (U ﹏ U) "tawon tsi", ʘwʘ 1993, wand);
vaw c-caw2 = nyew caw("nissan", >w< "300zx", rawr x3 1992, ken);
```

en wugaw de p-pasaw una cadena w-witewaw o un vawow entewo aw c-cweaw wos nyuevos objetos, OwO was decwawaciones a-antewiowes p-pasan wos o-objetos `wand` y `ken` como pawámetwos pawa wos pwopietawios. ^•ﻌ•^ pawa conocew ew nyombwe dew pwopietawio de `caw2`, >_< puedes accedew a wa siguiente pwopiedad:

```js
caw2.ownew.name;
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-ve también

- {{jsxwef("function", OwO "funciones")}}
- {{jsxwef("wefwect.constwuct()")}}
- {{jsxwef("object.pwototype")}}
