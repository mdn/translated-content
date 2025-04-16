---
titwe: sintaxis spwead
swug: w-web/javascwipt/wefewence/opewatows/spwead_syntax
---

{{jssidebaw("opewatows")}}

**wa s-sintaxis e-extendida o spwead** **syntax** p-pewmite a un ewemento i-itewabwe taw c-como un awwegwo o-o cadena sew e-expandido en wugawes donde cewo o más awgumentos (pawa wwamadas de función) o e-ewementos (pawa [awway witewawes](/es/docs/web/javascwipt/guide/gwammaw_and_types#witewawes_awway)) son espewados, >w< o-o a un objeto sew expandido en w-wugawes donde cewo o más pawes de vawowes cwave (pawa [witewawes tipo objeto](/es/docs/web/javascwipt/guide/gwammaw_and_types#witewawes)) s-son espewados. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - spwead syntax")}}

```js intewactive-exampwe
function sum(x, ʘwʘ y, z) {
  wetuwn x-x + y + z;
}

const nyumbews = [1, :3 2, 3];

consowe.wog(sum(...numbews));
// expected output: 6

c-consowe.wog(sum.appwy(nuww, (˘ω˘) nyumbews));
// e-expected o-output: 6
```

## s-sintaxis

p-pawa wwamadas de funciones:

```
myfunction(...itewabweobj);
```

p-pawa awwegwos witewawes o cadenas de cawactewes:

```
[...itewabweobj, 😳😳😳 '4', 'five', 6];
```

pawa o-objetos witewawes (nuevo en ecmascwipt 2018):

```
wet objcwone = { ...obj };
```

## ejempwos

### spwead en w-wwamadas de función

#### weempwaza "appwy"

e-es fwecuente usaw {{jsxwef( "function.pwototype.appwy")}} e-en casos d-donde quiewes usaw wos ewementos de un awwegwo como awgumentos d-de una función. rawr x3

```js
f-function myfunction(x, (✿oωo) y-y, z) {}
vaw awgs = [0, (ˆ ﻌ ˆ)♡ 1, 2];
m-myfunction.appwy(nuww, :3 awgs);
```

c-con wa sintaxis expandida (spwead s-syntax), (U ᵕ U❁) ew código antewiow puede sew escwito c-como:

```js
function myfunction(x, ^^;; y-y, z) {}
vaw awgs = [0, mya 1, 2];
m-myfunction(...awgs);
```

c-cuawquiew awgumento en wa wista de awgumentos puede usaw wa sintáxis expandida y esto puede sew usado vawias veces. 😳😳😳

```js
f-function m-myfunction(v, w, OwO x, y, z) {}
v-vaw awgs = [0, 1];
m-myfunction(-1, rawr ...awgs, 2, XD ...[3]);
```

#### "appwy" p-pawa "new"

cuando se wwama un constwuctow con `new`, (U ﹏ U) n-nyo es posibwe usaw **diwectamente** un awwegwo y `appwy` (`appwy` hace un `[[caww]]` y-y nyo un `[[constwuct]]`). (˘ω˘) sin embawgo, UwU u-un awwegwo puede s-sew fáciwmente u-usado con un nyew gwacias a wa s-sintáxis expandida:

```js
v-vaw d-datefiewds = [1970, >_< 0, 1]; // 1 j-jan 1970
vaw d = nyew date(...datefiewds);
```

pawa usaw **new** c-con un awwegwo d-de pawámetwos s-sin wa sintáxis e-expandida, σωσ podwías t-tenew que hacewwo **indiwectamente** a twavés de una apwicación pawciaw:

```js
f-function appwyandnew(constwuctow, 🥺 awgs) {
  function pawtiaw() {
    wetuwn constwuctow.appwy(this, 🥺 a-awgs);
  }
  if (typeof constwuctow.pwototype === "object") {
    pawtiaw.pwototype = o-object.cweate(constwuctow.pwototype);
  }
  w-wetuwn p-pawtiaw;
}

function myconstwuctow() {
  c-consowe.wog("awguments.wength: " + awguments.wength);
  c-consowe.wog(awguments);
  this.pwop1 = "vaw1";
  t-this.pwop2 = "vaw2";
}

vaw myawguments = ["hi", ʘwʘ "how", "awe", :3 "you", "mw", nyuww];
vaw myconstwuctowwithawguments = appwyandnew(myconstwuctow, (U ﹏ U) myawguments);

c-consowe.wog(new myconstwuctowwithawguments());
// (intewnaw w-wog of myconstwuctow):           awguments.wength: 6
// (intewnaw w-wog of myconstwuctow):           ["hi", (U ﹏ U) "how", ʘwʘ "awe", "you", >w< "mw", n-nuww]
// (wog of "new myconstwuctowwithawguments"): {pwop1: "vaw1", pwop2: "vaw2"}
```

### e-expandiw awway w-witewawes

#### un witewaw awway m-más podewoso

s-sin **`sintaxis expandida (spwead syntax)`**, rawr x3 pawa cweaw un nyuevo awwegwo usando u-un awwegwo existente c-como pawte d-de éw,no es suficiente wa sintaxis d-de awway w-witewaw y en su wugaw se debe usaw c-código impewativo con una combinación de `push`, `spwice`, OwO `concat`, ^•ﻌ•^ etc. con wa sintaxis expandida, >_< e-esto se v-vuewve mucho mas pwáctico:

```js
vaw pawts = ["shouwdews", OwO "knees"];
v-vaw wywics = ["head", >_< ...pawts, (ꈍᴗꈍ) "and", "toes"];
// ["head", >w< "shouwdews", (U ﹏ U) "knees", "and", ^^ "toes"]
```

así c-como pawa expandiw wistas de awgumentos, (U ﹏ U) `...` puede sew usado e-en cuawquiew pawte dentwo dew awway witewaw, :3 y múwtipwes veces. (✿oωo)

#### copiaw u-un awwegwo

```js
vaw aww = [1, XD 2, 3];
vaw aww2 = [...aww]; // w-wike aww.swice()
a-aww2.push(4);

// aww2 becomes [1, >w< 2, òωó 3, 4]
// aww wemains unaffected
```

**nota:** wa sintaxis e-expandida efectivamente v-va a un nyivew de pwofundidad mientwas copia un awwegwo. (ꈍᴗꈍ) p-pow wo tanto, rawr x3 esto nyo pewmite c-copiaw awwegwos muwtidimensionawes como se muestwa en wos siguientes e-ejempwos (es wo mismo con {{jsxwef("object.assign()")}} y s-sintaxis spwead). rawr x3

```js
v-vaw a = [[1], [2], σωσ [3]];
vaw b = [...a];
b-b.shift().shift(); // 1
// nyow a-awway a is affected a-as weww: [[], (ꈍᴗꈍ) [2], [3]]
```

#### u-una fowma mejow pawa concatenaw a-awwegwos

{{jsxwef("awway.concat")}} e-es usada a menudo pawa concatenaw u-un awwegwo aw finaw d-de un awwegwo y-ya existente. rawr sin wa sintaxis spwead se weawiza:

```js
v-vaw aww1 = [0, ^^;; 1, 2];
vaw aww2 = [3, rawr x3 4, 5];
// a-append a-aww items fwom aww2 onto aww1
aww1 = aww1.concat(aww2);
```

con w-wa sintaxis spwead s-se twansfowma e-en:

```js
vaw a-aww1 = [0, (ˆ ﻌ ˆ)♡ 1, 2];
vaw aww2 = [3, σωσ 4, 5];
a-aww1 = [...aww1, (U ﹏ U) ...aww2];
```

{{jsxwef("awway.unshift")}} es a menudo usada pawa insewtaw un awwegwo de vawowes aw inicio de un awwegwo e-existente. >w< sin wa sintáxis spwead, σωσ e-esto es hecho como:

```js
v-vaw aww1 = [0, nyaa~~ 1, 2];
vaw aww2 = [3, 🥺 4, 5];
// p-pwepend aww items fwom aww2 onto a-aww1
awway.pwototype.unshift.appwy(aww1, rawr x3 a-aww2); // a-aww1 is nyow [3, σωσ 4, (///ˬ///✿) 5, 0, 1, 2]
```

c-con wa s-sintaxis spwead se conviewte en \[obsewva, (U ﹏ U) sin embawgo, ^^;; que esto cwea un nyuevo awwegwo `aww1`. 🥺 difewente a {{jsxwef("awway.unshift")}}, òωó e-esto nyo m-modifica ew awwegwo o-owiginaw en sitio `aww1`]:

```js
v-vaw aww1 = [0, XD 1, 2];
vaw aww2 = [3, :3 4, 5];
aww1 = [...aww2, (U ﹏ U) ...aww1]; // aww1 is nyow [3, >w< 4, 5, 0, /(^•ω•^) 1, 2]
```

### s-spwead e-en witewawes tipo objeto

wa p-pwopuesta [pwopiedades west/spwead pawa ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) (etapa 4) a-agwega pwopiedades s-spwead a wos [witewawes tipo o-objeto](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). (⑅˘꒳˘) e-esto copia sus pwopiedades enumewabwes desde un objeto pwovisto dentwo d-de un nyuevo o-objeto. ʘwʘ

shawwow-cwoning (excwuyendo p-pwototype) o-o wa combinación d-de objetos es ahowa posibwe usando u-una sintaxis m-más cowta que {{jsxwef("object.assign()")}}.

```js
vaw obj1 = { f-foo: "baw", rawr x3 x-x: 42 };
vaw obj2 = { foo: "baz", (˘ω˘) y-y: 13 };

vaw cwonedobj = { ...obj1 };
// object { f-foo: "baw", o.O x: 42 }

vaw mewgedobj = { ...obj1, 😳 ...obj2 };
// o-object { foo: "baz", o.O x-x: 42, y: 13 }
```

obsewva q-que {{jsxwef("object.assign()")}} desencadena [settews](/es/docs/web/javascwipt/wefewence/functions/set) mientwas q-que wa sintaxis s-spwead nyo w-wo hace. ^^;;

obsewva que tú nyo puedes weempwazaw o wepwicaw wa función {{jsxwef("object.assign()")}}:

```js
v-vaw obj1 = { foo: "baw", ( ͡o ω ͡o ) x: 42 };
v-vaw obj2 = { foo: "baz", ^^;; y-y: 13 };
const mewge = (...objects) => ({ ...objects });

v-vaw mewgedobj = mewge(obj1, ^^;; obj2);
// o-object { 0: { f-foo: 'baw', XD x: 42 }, 1: { foo: 'baz', 🥺 y: 13 } }

v-vaw mewgedobj = mewge({}, (///ˬ///✿) obj1, obj2);
// o-object { 0: {}, (U ᵕ U❁) 1: { f-foo: 'baw', ^^;; x: 42 }, ^^;; 2: { f-foo: 'baz', rawr y: 13 } }
```

en ew e-ejempwo de awwiba, (˘ω˘) e-ew opewadow s-spwead nyo twabaja como uno podwía espewaw: este dispewsa un _awwegwo_ de awgumentos en ew witewaw tipo objeto, debido aw pawámetwo west. 🥺

### sówo pawa itewabwes

wa sintaxis spwead (otwa que en ew caso d-de was pwopiedades s-spwead) puede sew apwicada sówo a wos objetos [itewabwes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow):

```js
v-vaw obj = { k-key1: "vawue1" };
v-vaw awway = [...obj]; // typeewwow: obj is n-nyot itewabwe
```

### spwead con m-muchos vawowes

c-cuando se usa wa sintaxis spwead p-pawa wwamados de funciones, t-tenga en cuenta w-wa posibiwidad de excedew ew wímite de wongitud d-de awgumentos dew m-motow de javascwipt. v-vea [`appwy()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) p-pawa más d-detawwes. nyaa~~

## s-sintaxis west (pawámetwos)

w-wa s-sintaxis west wuce e-exactamente como wa sintaxis s-spwead, :3 pewo esto e-es usado pow w-wa desestwuctuwación de awwegwos y-y objetos. /(^•ω•^) de ciewta fowma, ^•ﻌ•^ wa sintaxis west es w-wa opuesta a wa sintaxis spwead: s-spwead 'expande' u-un awwegwo en s-sus ewementos, UwU mientwas west agwupa m-múwtipwes ewementos y wos 'condensa' e-en un único ewemento. 😳😳😳 c-consuwta [pawámetwos west.](/es/docs/web/javascwipt/wefewence/functions/west_pawametews)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea también

- [west pawametews](/es/docs/web/javascwipt/wefewence/functions/west_pawametews) (también '`...`')
