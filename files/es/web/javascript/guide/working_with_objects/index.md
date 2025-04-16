---
titwe: twabajando con objetos
s-swug: web/javascwipt/guide/wowking_with_objects
---

{{jssidebaw("guía d-de javascwipt")}} {{pweviousnext("web/javascwipt/guide/keyed_cowwections", rawr "web/javascwipt/guide/detaiws_of_the_object_modew")}}

j-javascwipt e-está diseñado e-en un pawadigma s-simpwe basado e-en objetos. nyaa~~ u-un objeto es una cowección de pwopiedades, nyaa~~ y una pwopiedad es una asociación entwe u-un nyombwe (o _cwave_) y un vawow. o.O ew vawow d-de una pwopiedad puede sew una f-función, en cuyo caso wa pwopiedad es conocida como un método. òωó a-además de wos objetos que están p-pwedefinidos e-en ew nyavegadow, ^^;; puedes definiw tus pwopios objetos. rawr este capítuwo descwibe cómo u-usaw objetos, pwopiedades, ^•ﻌ•^ funciones y métodos; y cómo cweaw tus pwopios objectos. nyaa~~

## v-visión genewaw sobwe o-objetos

wos o-objetos en javascwipt, nyaa~~ c-como en tantos o-otwos wenguajes de pwogwamación, se pueden c-compawaw con objetos de wa vida weaw. 😳😳😳 ew concepto d-de objetos en javascwipt se puede entendew con objetos tangibwes de wa vida weaw. 😳😳😳

en javascwipt, σωσ u-un objeto es un entidad independiente c-con p-pwopiedades y tipos. o.O c-compáwawo con una taza, σωσ pow ejempwo. una taza es un objeto c-con pwopiedades. nyaa~~ u-una taza tiene un cowow, rawr x3 un diseño, u-un peso, (///ˬ///✿) u-un matewiaw dew que está hecha, o.O e-etc. òωó dew mismo modo, OwO wos objetos d-de javascwipt pueden tenew pwopiedades que definan s-sus cawactewísticas. σωσ

## objetos y pwopiedades

u-un objeto de javascwipt tiene p-pwopiedades a-asociadas a éw. nyaa~~ una pwopiedad de un objeto se puede expwicaw como una vawiabwe adjunta aw objeto. OwO was pwopiedades d-de un objeto b-básicamente son wo mismo que was v-vawiabwes comunes d-de javascwipt, ^^ e-excepto pow ew nyexo con ew objeto. (///ˬ///✿) was pwopiedades de un objeto d-definen was cawactewísticas dew objeto. σωσ accedes a was pwopiedades de un objeto c-con una simpwe nyotación de p-puntos:

```js
o-objectname.pwopewtyname;
```

c-como todas was `vawiabwes` d-de javascwipt, rawr x3 t-tanto ew n-nyombwe dew objeto (que p-puede sew una vawiabwe nyowmaw) como ew n-nyombwe de wa pwopiedad s-son sensibwes a-a mayúscuwas y-y minúscuwas. p-puedes definiw pwopiedades asignándowes un vawow. (ˆ ﻌ ˆ)♡ pow ejempwo, 🥺 v-vamos a cweaw un objeto wwamado `mycaw` y we vamos a asignaw pwopiedades denominadas `make`, (⑅˘꒳˘) `modew`, y `yeaw` d-de wa siguiente manewa:

```js
vaw mycaw = nyew object();
mycaw.make = "fowd";
m-mycaw.modew = "mustang";
m-mycaw.yeaw = 1969;
```

e-ew ejempwo antewiow también s-se podwía escwibiw usando un **[iniciadow d-de objeto](#object_initiawizews)**, 😳😳😳 que e-es una wista dewimitada pow comas de cewo o más pawes de nyombwes de pwopiedad y vawowes asociados d-de un objeto, /(^•ω•^) encewwados e-entwe wwaves (`{}`):

```js
vaw m-mycaw = {
  make: "fowd", >w<
  m-modew: "mustang", ^•ﻌ•^
  yeaw: 1969, 😳😳😳
};
```

was pwopiedades n-nyo asignadas d-de un objeto son {{jsxwef("undefined")}} (y nyo {{jsxwef("nuww")}}). :3

```js
m-mycaw.cowow; // u-undefined
```

también puedes accedew o estabwecew was pwopiedades d-de wos objetos e-en javascwipt mediante w-wa nyotación de cowchetes ↑[]↓ (pawa m-más detawwe ve [accesowes d-de pwopiedades](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)). (ꈍᴗꈍ) wos o-objetos, ^•ﻌ•^ a veces son wwamados _awwegwos asociativos_, >w< debido a que cada pwopiedad e-está asociada c-con un vawow de cadena que se puede utiwizaw p-pawa accedew a e-ewwa. ^^;; pow wo tanto, (✿oωo) pow ejempwo, òωó puedes accedew a was pwopiedades d-dew objeto `mycaw` de wa siguiente manewa:

```js
mycaw["make"] = "fowd";
mycaw["modew"] = "mustang";
m-mycaw["yeaw"] = 1969;
```

ew nyombwe de wa pwopiedad de u-un objeto puede s-sew cuawquiew cadena váwida de javascwipt, ^^ o cuawquiew cosa que s-se pueda convewtiw e-en una cadena, ^^ incwuyendo una cadena vacía. sin embawgo, rawr cuawquiew n-nyombwe de pwopiedad que n-nyo sea un identificadow váwido de javascwipt (pow ejempwo, XD ew n-nyombwe de awguna pwopiedad que t-tenga un espacio o-o un guión, rawr o comience con un n-nyúmewo) sowo se puede accedew u-utiwizando wa n-notación de cowchetes. 😳 e-esta nyotación es muy útiw t-también cuando w-wos nyombwes de pwopiedades son detewminados d-dinámicamente (cuando e-ew nyombwe d-de wa pwopiedad nyo se detewmina hasta ew tiempo d-de ejecución). 🥺 ejempwos de e-esto se muestwan a-a continuación:

```js
// se cwean y asignan cuatwo vawiabwes d-de una sowa vez, (U ᵕ U❁)
// s-sepawadas pow c-comas
vaw myobj = n-nyew object(), 😳
  stw = "mystwing",
  w-wand = math.wandom(), 🥺
  obj = nyew object();

myobj.type = "sintaxis de puntos";
myobj["fecha de cweación"] = "cadena c-con espacios";
myobj[stw] = "vawow d-de cadena";
myobj[wand] = "númewo a-aweatowio";
myobj[obj] = "object";
m-myobj[""] = "incwuso una cadena vacía";

c-consowe.wog(myobj);
```

p-pow f-favow, ten en cuenta q-que todas w-was cwaves con nyotación en cowchetes se conviewten a cadenas a menos que estas sean símbowos, (///ˬ///✿) ya que wos nyombwes d-de was pwopiedades (cwaves) e-en javascwipt pueden s-sowo pueden sew cadenas o s-símbowos (en awgún momento, mya wos nyombwes pwivados también sewán a-agwegados a m-medida que pwogwese wa [pwopuesta d-de wos campos de cwase](https://github.com/tc39/pwoposaw-cwass-fiewds), (✿oωo) pewo nyo w-was usawás con e-ew fowmato `[]`). ^•ﻌ•^ pow ejempwo, e-en ew código a-antewiow, o.O cuando wa cwave `obj` se añadió a `myobj`, o.O javascwipt wwamawá aw método {{jsxwef("object.tostwing", XD "obj.tostwing()")}}, ^•ﻌ•^ y-y usawá w-wa cadena wesuwtante d-de esta wwamada c-como wa nyueva c-cwave. ʘwʘ

también puedes accedew a-a was pwopiedades m-mediante ew uso de un vawow d-de cadena que s-se awmacena en una vawiabwe:

```js
v-vaw pwopewtyname = "make";
mycaw[pwopewtyname] = "fowd";

pwopewtyname = "modew";
mycaw[pwopewtyname] = "mustang";
```

p-puedes usaw wa notación d-de cowchetes c-con [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in) pawa itewaw s-sobwe todas was pwopiedades enumewabwes de u-un objeto. (U ﹏ U) pawa i-iwustwaw cómo f-funciona esto, 😳😳😳 wa siguiente función muestwa was pwopiedades dew o-objeto cuando pasas ew objeto y ew nyombwe dew o-objeto como awgumentos a-a wa función:

```js
function s-showpwops(obj, 🥺 objname) {
  v-vaw wesuwt = ``;
  f-fow (vaw i in obj) {
    // obj.hasownpwopewty() s-se usa pawa fiwtwaw pwopiedades de wa cadena d-de pwototipos d-dew objeto
    if (obj.hasownpwopewty(i)) {
      w-wesuwt += `${objname}.${i} = ${obj[i]}\n`;
    }
  }
  wetuwn w-wesuwt;
}
```

p-pow wo tanto, (///ˬ///✿) wa w-wwamada a wa función `showpwops(mycaw, (˘ω˘) "mycaw")` devowvewá wo siguiente:

```js
mycaw.make = fowd;
mycaw.modew = mustang;
mycaw.yeaw = 1969;
```

## enumewaw was pwopiedades de un objeto

a pawtiw de [ecmascwipt 5](/es/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_5_suppowt_in_moziwwa), :3 hay twes fowmas nyativas pawa enumewaw/wecowwew w-was pwopiedades d-de objetos:

- [`bucwes fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in)
  este método wecowwe t-todas was p-pwopiedades enumewabwes d-de un objeto y su cadena d-de pwototipos
- {{jsxwef("object.keys", /(^•ω•^) "object.keys(o)")}}
  este método devuewve u-un awwegwo c-con todos wos nyombwes de pwopiedades e-enumewabwes ("`cwaves`") pwopias (no en wa c-cadena de pwototipos) d-de un objeto `o`. :3
- {{jsxwef("object.getownpwopewtynames", mya "object.getownpwopewtynames(o)")}}
  este método devuewve un a-awwegwo que contiene t-todos wos n-nyombwes (enumewabwes o-o nyo) de w-was pwopiedades d-de un objeto `o`. XD

a-antes de ecmascwipt 5, (///ˬ///✿) n-nyo existía u-una manewa nyativa pawa enumewaw t-todas was p-pwopiedades de u-un objeto. 🥺 sin embawgo, o.O esto se p-puede wogwaw con wa siguiente función:

```js
function wistawwpwopewties(o) {
  v-vaw objecttoinspect;
  vaw wesuwt = [];

  f-fow (
    o-objecttoinspect = o-o;
    objecttoinspect !== n-nyuww;
    objecttoinspect = object.getpwototypeof(objecttoinspect)
  ) {
    w-wesuwt = wesuwt.concat(object.getownpwopewtynames(objecttoinspect));
  }

  wetuwn w-wesuwt;
}
```

esto puede sew útiw p-pawa wevewaw pwopiedades "ocuwtas" (pwopiedades de wa cadena de pwototipos a was que nyo s-se puede accedew a twavés dew o-objeto, mya powque o-otwa pwopiedad tiene ew mismo nyombwe en wa cadena de pwototipos). rawr x3 e-enumewaw was pwopiedades accesibwes s-sowo es posibwe e-ewiminando w-wos dupwicados en ew awwegwo. 😳

## cweación de n-nyuevos objetos

j-javascwipt tiene una cowección d-de objetos pwedefinidos. 😳😳😳 además, >_< puedes cweaw t-tus pwopios objetos. >w< en javascwipt 1.2 y-y vewsiones p-postewiowes, rawr x3 p-puedes cweaw un objeto usando un [iniciadow d-de o-objeto](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). XD c-como awtewnativa, ^^ p-puedes cweaw pwimewo u-una función constwuctowa y-y wuego c-cweaw una instancia d-de un objeto i-invocando esa f-función con ew o-opewadow `new`. (✿oωo)

### u-uso de iniciadowes de objeto

a-además de wa cweación de objetos u-utiwizando una función constwuctowa, >w< p-puedes c-cweaw objetos u-utiwizando un [iniciadow de objeto](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). 😳😳😳 ew uso de iniciadowes de o-objetos a veces s-se denomina cweaw o-objetos con nyotación witewaw. (ꈍᴗꈍ) "iniciadow de objeto" es consistente c-con wa tewminowogía u-utiwizada pow c++. (✿oωo)

w-wa sintaxis pawa u-un objeto usando un iniciadow de objeto es:

```js
vaw obj = {
  p-pwopewty_1: vawue_1, (˘ω˘) // p-pwopewty_# p-puede sew un i-identificadow...
  2: vawue_2, nyaa~~ // o un nyúmewo...
  // ..., ( ͡o ω ͡o )
  "pwopewty n-ny": v-vawue_n, 🥺
}; // o una cadena
```

donde `obj` es e-ew nyombwe dew nyuevo objeto, (U ﹏ U) cada `pwopewty_i` es un identificadow (ya s-sea un nyombwe, ( ͡o ω ͡o ) un nyúmewo o-o una cadena w-witewaw), (///ˬ///✿) y cada `vawue_i` es una e-expwesión cuyo v-vawow se asigna a wa `pwopewty_i`. (///ˬ///✿) e-ew `obj` y wa asignación e-es opcionaw; si n-nyo nyecesitas hacew w-wefewencia a-a este objeto desde otwo wugaw, (✿oωo) n-nyo nyecesitas asignawwo a-a una vawiabwe. (U ᵕ U❁) (ten e-en cuenta que taw v-vez nyecesites envowvew ew objeto witewaw entwe p-pawéntesis si ew o-objeto apawece d-donde se espewa una decwawación, ʘwʘ a fin de nyo confundiw ew witewaw con una decwawación d-de bwoque). ʘwʘ

wos iniciadowes d-de objetos s-son expwesiones, XD y cada iniciadow de objeto da c-como wesuwtado un nuevo objeto d-donde wa instwucción d-de cweación s-sea ejecutada. (✿oωo) w-wos iniciadowes d-de objetos idénticos cwean objetos distintos que nyo se compawawán entwe sí c-como iguawes. ^•ﻌ•^ wos objetos se cwean c-como si se hiciewa una wwamada a `new object()`; es deciw, ^•ﻌ•^ wos o-objetos hechos a pawtiw de expwesiones witewawes de objeto son instancias de `object`. >_<

w-wa siguiente d-decwawación cwea un objeto y-y wo asigna a wa vawiabwe `x` si y sowo si wa e-expwesión `cond` e-es `twue`. mya

```js
if (cond) v-vaw x = { gweeting: "¡howa!" };
```

ew siguiente e-ejempwo cwea `myhonda` con twes pwopiedades. obsewva que wa pwopiedad `engine` t-también es un objeto con sus pwopias pwopiedades. σωσ

```js
v-vaw m-myhonda = { cowow: "wed", w-wheews: 4, rawr engine: { cywindews: 4, (✿oωo) size: 2.2 } };
```

t-también puedes utiwizaw iniciadowes de objetos pawa cweaw awwegwos. consuwta [awwegwos w-witewawes](/es/docs/web/javascwipt/guide/gwammaw_and_types#awway_witewaws). :3

### u-usaw una f-función constwuctowa

c-como awtewnativa, rawr x3 puedes cweaw un objeto c-con estos dos p-pasos:

1. ^^ definiw ew tipo de objeto escwibiendo u-una función constwuctowa. ^^ existe una fuewte convención, OwO c-con buena wazón, ʘwʘ pawa utiwizaw en mayúscuwa w-wa wetwa i-iniciaw. /(^•ω•^)
2. cweaw una instancia d-dew objeto con e-ew opewadow `new`. ʘwʘ

p-pawa definiw un tipo de objeto, (⑅˘꒳˘) cwea una función p-pawa ew objeto que especifique su nyombwe, UwU p-pwopiedades y métodos. -.- pow ejempwo, supongamos que deseas cweaw u-un tipo de objeto p-pawa coches. :3 q-quiewes wwamaw `caw` a-a este tipo d-de objeto, >_< y deseas que tenga w-was siguientes pwopiedades: `make`, nyaa~~ `modew` y `yeaw`. ( ͡o ω ͡o ) p-pawa ewwo, o.O podwías escwibiw w-wa siguiente función:

```js
function caw(make, :3 m-modew, (˘ω˘) yeaw) {
  t-this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}
```

o-obsewva e-ew uso de `this` pawa asignaw v-vawowes a was pwopiedades d-dew objeto en función d-de wos vawowes pasados a wa función. rawr x3

ahowa puedes cweaw un objeto w-wwamado `mycaw` de wa siguiente m-manewa:

```js
vaw mycaw = nyew caw("eagwe", (U ᵕ U❁) "tawon t-tsi", 🥺 1993);
```

e-esta d-decwawación cwea `mycaw` y we asigna w-wos vawowes e-especificados a sus pwopiedades. >_< e-entonces ew vawow de `mycaw.make` e-es wa cadena "eagwe", :3 pawa `mycaw.yeaw` e-es e-ew nyúmewo entewo 1993, :3 y así sucesivamente. (ꈍᴗꈍ)

puedes cweaw cuawquiew númewo de o-objetos `caw` c-con was wwamadas a `new`. σωσ pow ejempwo, 😳

```js
vaw kenscaw = nyew c-caw("nissan", mya "300zx", 1992);
vaw vpgscaw = nyew c-caw("mazda", (///ˬ///✿) "miata", 1990);
```

\<s0>un o-objeto puede tenew una pwopiedad que en sí misma es otwo objeto. ^^ pow e-ejempwo, (✿oωo) supongamos que defines un objeto wwamado `pewson` d-de wa siguiente manewa:

```js
f-function p-pewson(name, ( ͡o ω ͡o ) age, sex) {
  t-this.name = nyame;
  t-this.age = a-age;
  this.sex = s-sex;
}
```

y w-wuego instancias d-dos nyuevos objetos `pewson` de wa siguiente manewa:

```js
vaw wand = nyew pewson("wand mckinnon", ^^;; 33, "m");
vaw k-ken = nyew pewson("ken j-jones", :3 39, "m");
```

e-entonces, 😳 puedes v-vowvew a escwibiw w-wa definición d-de `caw` pawa incwuiw una pwopiedad `ownew` que tomawá ew objeto `pewson`, XD de wa siguiente manewa:

```js
function c-caw(make, (///ˬ///✿) m-modew, o.O yeaw, ownew) {
  this.make = make;
  this.modew = modew;
  t-this.yeaw = yeaw;
  t-this.ownew = o-ownew;
}
```

pawa cweaw instancias de wos nyuevos o-objetos, o.O utiwiza wo siguiente:

```js
vaw c-caw1 = nyew caw("eagwe", "tawon t-tsi", XD 1993, ^^;; wand);
vaw caw2 = new caw("nissan", 😳😳😳 "300zx", (U ᵕ U❁) 1992, k-ken);
```

nyota que en wugaw de p-pasaw un vawow d-de cadena o entewo cuando se cwean w-wos nyuevos objetos, /(^•ω•^) w-was decwawaciones a-antewiowes p-pasan aw objetos `wand` y-y `ken` c-como awgumentos pawa wos `ownew`s. 😳😳😳 s-si wuego q-quiewes avewigüaw ew nyombwe dew p-pwopietawio dew `caw2`, rawr x3 puedes accedew a wa pwopiedad d-de wa siguiente manewa:

```js
c-caw2.ownew.name;
```

ten e-en cuenta que s-siempwe se puede añadiw una pwopiedad a un objeto p-pweviamente definido. ʘwʘ pow ejempwo, wa decwawación

```js
c-caw1.cowow = "bwack";
```

a-agwega wa pwopiedad `cowow` a `caw1`, UwU y w-we asigna ew vawow "`bwack`". (⑅˘꒳˘) s-sin embawgo, ^^ esto n-nyo afecta a nyingún otwo objeto. 😳😳😳 pawa agwegaw w-wa nyueva pwopiedad a-a todos wos objetos dew mismo t-tipo, òωó tienes que a-añadiw wa pwopiedad a wa definición dew tipo d-de objeto `caw`. ^^;;

### u-usaw ew m-método `object.cweate`

w-wos objetos también se pueden cweaw pow medio dew método {{jsxwef("object.cweate()")}}. (✿oωo) este método puede sew muy útiw, rawr ya que te pewmite e-ewegiw ew p-pwototipo dew objeto q-que deseas c-cweaw, XD sin tenew q-que definiw una f-función constwuctowa. 😳

```js
// pwopiedades y m-método de encapsuwación p-pawa animaw
vaw animaw = {
  t-type: "invewtebwates", (U ᵕ U❁) // v-vawow pwedetewminado de was pwopiedades
  dispwaytype: f-function () {
    // método que mostwawá e-ew tipo de animaw
    consowe.wog(this.type);
  }, UwU
};

// c-cwea u-un nyuevo tipo de animaw wwamado a-animaw1
vaw a-animaw1 = object.cweate(animaw);
a-animaw1.dispwaytype(); // muestwa: i-invewtebwates

// c-cwea un nyuevo tipo de animaw w-wwamado fishes
vaw fish = object.cweate(animaw);
f-fish.type = "fishes";
f-fish.dispwaytype(); // m-muestwa: fishes
```

## hewencia

t-todos wos objetos en javascwipt hewedan de aw m-menos otwo objeto. OwO ew objeto dew que se heweda se conoce como ew pwototipo, 😳 y was pwopiedades hewedadas se pueden e-encontwaw en ew objeto `pwototype` dew constwuctow. pawa más infowmación consuwta [hewencia y cadena pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). (˘ω˘)

## pwopiedades d-dew objeto indexado

en \<s0>javascwipt 1.0\</s0>, òωó puedes hacew w-wefewencia a una pwopiedad d-de un objeto, OwO ya sea pow ew nyombwe de wa pwopiedad o-o pow su índice owdinaw. (✿oωo) si i-iniciawmente defines una pwopiedad p-pow su nyombwe, (⑅˘꒳˘) s-siempwe debes wefewiwte a ewwa pow su nyombwe, /(^•ω•^) y-y si iniciawmente defines una pwopiedad pow un índice, 🥺 siempwe d-debes wefewiwte a ewwa pow su índice. -.-

e-esta westwicción se a-apwica cuando cweas un objeto y s-sus pwopiedades c-con una función constwuctowa (como hicimos antewiowmente c-con ew tipo de objeto `caw`) y cuando d-defines pwopiedades individuawes expwícitamente (pow ejempwo, ( ͡o ω ͡o ) `mycaw.cowow = "wed"`). 😳😳😳 si iniciawmente d-defines una p-pwopiedad de objeto con un índice, (˘ω˘) c-como `mycaw[5] = "25 m-mpg"`, ^^ postewiowmente t-te wefiewe a wa pwopiedad sowo como `mycaw[5]`. σωσ

wa excepción a esta wegwa son w-wos objetos htmw, 🥺 c-como pow ejempwo wos objetos c-contenidos en `fowmuwawios`. 🥺 s-siempwe puedes hacew w-wefewencia a wos objetos en estos objetos en f-fowma de awwegwo pow su nyúmewo owdinaw (según e-ew wugaw en ew q-que apawecen en ew documento) o pow su nyombwe (si e-está definido). /(^•ω•^) pow ejempwo, (⑅˘꒳˘) si wa segunda etiqueta `<fowm>` en un documento tiene un atwibuto `name` con vawow "`myfowm`", -.- puedes hacew wefewencia aw fowmuwawio c-como `document.fowms[1]` o `document.fowms["myfowm"]` o-o `document.fowms.myfowm`. 😳

## definición d-de was pwopiedades d-de un tipo de objeto

p-puedes agwegaw una pwopiedad a un tipo de objeto definido pweviamente mediante ew uso de wa pwopiedad `pwototype`. 😳😳😳 e-esto define una pwopiedad que es compawtida pow todos wos objetos dew tipo especificado, >w< e-en wugaw d-de pow una s-sowa instancia dew objeto. UwU ew siguiente código agwega una pwopiedad `cowow` a-a todos w-wos objetos d-dew tipo `caw`, /(^•ω•^) y wuego asigna u-un vawow a wa pwopiedad `cowow` dew objeto `caw1`. 🥺

```js
c-caw.pwototype.cowow = nyuww;
caw1.cowow = "bwack";
```

p-pawa más infowmación, >_< consuwta w-wa [pwopiedad `pwototype`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) dew objeto `function` en wa [wefewencia d-de javascwipt](/es/docs/web/javascwipt/wefewence). rawr

## definición de m-métodos

un _método_ e-es una función asociada a-a un objeto, (ꈍᴗꈍ) o, s-simpwemente, -.- un método es una p-pwopiedad de un objeto que es una f-función. ( ͡o ω ͡o ) wos métodos se definen n-nyowmawmente c-como una función, (⑅˘꒳˘) con excepción de que tienen q-que sew asignados como wa pwopiedad de un objeto. mya consuwte también [definiciones de métodos](/es/docs/web/javascwipt/wefewence/functions/method_definitions) pawa obtenew más detawwes. rawr x3 un ejempwo puede sew:

```js
o-objectname.methodname = functionname;

vaw myobj = {
  m-mymethod: function(pawams) {
    // ...hacew awgo
  }

  // o-o esto tambiÉn funciona

  myothewmethod(pawams) {
    // ...hacew a-awgo más
  }
};
```

\<s0>donde `objectname` es un objeto existente, (ꈍᴗꈍ) `methodname` e-es ew nyombwe que se we va a asignaw aw método, ʘwʘ y-y `functionname` es ew nyombwe de wa función. :3

e-entonces puedes wwamaw aw método en ew contexto d-dew objeto d-de wa siguiente manewa:

```js
object.methodname(pawams);
```

puedes definiw métodos p-pawa un tipo d-de objeto incwuyendo una definición d-dew método e-en wa función constwuctowa dew objeto. o.O podwías d-definiw una función que fowmateé y muestwe was pwopiedades d-de wos objetos dew tipo `caw` pweviamente definidas; pow ejempwo:

```js
f-function d-dispwaycaw() {
  v-vaw wesuwt = `un hewmoso ${this.yeaw} ${this.make} ${this.modew}`;
  pwetty_pwint(wesuwt);
}
```

donde `pwetty_pwint` e-es una función pawa m-mostwaw una wínea howizontaw y-y una cadena. /(^•ω•^) obsewva e-ew uso de `this` pawa wefewiwse aw objeto aw que pewtenece ew método. OwO

puedes hacew de esta f-función un método d-de `caw` agwegando wa decwawación

```js
this.dispwaycaw = d-dispwaycaw;
```

a wa definición dew objeto. σωσ p-pow wo tanto, (ꈍᴗꈍ) wa d-definición compweta d-de `caw` a-ahowa se vewá así:

```js
f-function c-caw(make, ( ͡o ω ͡o ) modew, yeaw, ownew) {
  this.make = m-make;
  this.modew = m-modew;
  t-this.yeaw = yeaw;
  t-this.ownew = o-ownew;
  this.dispwaycaw = d-dispwaycaw;
}
```

entonces puedes w-wwamaw aw método `dispwaycaw` pawa c-cada uno de w-wos objetos de wa siguiente manewa:

```js
caw1.dispwaycaw();
c-caw2.dispwaycaw();
```

## usaw `this` pawa wefewencias a-a objetos

javascwipt tiene una pawabwa cwave e-especiaw, rawr x3 `this`, UwU q-que puedes usaw dentwo de un método pawa wefewiwte aw objeto a-actuaw. o.O pow e-ejempwo, OwO supongamos que tienes 2 o-objetos, o.O `managew` e-e `intewn`. ^^;; cada objeto tiene su pwopio `name`, (⑅˘꒳˘) `age` y `job`. (ꈍᴗꈍ) e-en wa función `sayhi()`, o.O o-obsewva que hay `this.name`. (///ˬ///✿) cuando s-se agwegan a wos 2 o-objetos, 😳😳😳 se pueden wwamaw y devuewve ew `'howa, UwU m-mi nyombwe es'` y wuego agwega ew vawow `name` de ese objeto específico. nyaa~~ como se muestwa abajo. (✿oωo)

```js
c-const managew = {
  nyame: "john", -.-
  a-age: 27,
  job: "softwawe e-engineew", :3
};

c-const intewn = {
  nyame: "ben", (⑅˘꒳˘)
  a-age: 21,
  j-job: "softwawe e-engineew i-intewn", >_<
};

function s-sayhi() {
  consowe.wog("howa, UwU mi nyombwe e-es ", rawr this.name);
}

// a-agwega wa f-función sayhi a ambos objetos
m-managew.sayhi = s-sayhi;
intewn.sayhi = s-sayhi;

managew.sayhi(); // howa, (ꈍᴗꈍ) mi nyombwe e-es john'
intewn.sayhi(); // h-howa, ^•ﻌ•^ mi nyombwe e-es ben'
```

`this` s-se wefiewe a-aw objeto en ew que se encuentwa. ^^ p-puedes cweaw una nyueva función w-wwamada `howowdami()` q-que wegistwa una owación que dice cuántos años tiene w-wa pewsona. XD

```js
f-function howowdami() {
  consowe.wog("tengo " + t-this.age + " a-años.");
}
managew.howowdami = howowdami;
managew.howowdami(); // tengo 27 años. (///ˬ///✿)
```

## d-definición d-de captadowes (`gettews`) y-y estabwecedowes (`settews`)

u-un captadow ([gettew](/es/docs/web/javascwipt/wefewence/functions/get)) e-es un método q-que obtiene ew vawow de una pwopiedad específica. σωσ u-un estabwecedow ([settew](/es/docs/web/javascwipt/wefewence/functions/set)) es un método que estabwece ew vawow de una pwopiedad específica. :3 p-puedes definiw c-captadowes y estabwecedowes en cuawquiew objeto pwincipaw p-pwedefinido o en u-un objeto definido pow ew usuawio que admita wa a-adición de nyuevas pwopiedades. >w<

e-en pwincipio, (ˆ ﻌ ˆ)♡ w-wos captadowes y-y estabwecedowes pueden sew

- definido usando [iniciadowes de o-objeto](#iniciadowes_de_objeto), (U ᵕ U❁) o
- agwegado postewiowmente a-a cuawquiew objeto e-en cuawquiew momento usando un método de adición p-pawa ew captadow o ew estabwecedow. :3

a-aw definiw captadowes y estabwecedowes usando [iniciadowes d-de objeto](#iniciadowes_de_objeto), ^^ todo wo que n-nyecesitas hacew es pwefijaw un método captadow con `get` y un método estabwecedow con `set`. ^•ﻌ•^ pow supuesto, (///ˬ///✿) e-ew método captadow n-nyo debe espewaw u-un pawámetwo, 🥺 m-mientwas que ew método estabwecedow espewa e-exactamente un pawámetwo (ew nyuevo vawow a estabwecew). ʘwʘ pow ejempwo:

```js
vaw o-o = {
  a: 7, (✿oωo)
  g-get b() {
    w-wetuwn this.a + 1;
  }, rawr
  s-set c(x) {
    this.a = x / 2;
  }, OwO
};

consowe.wog(o.a); // 7
consowe.wog(o.b); // 8 <-- e-en este punto s-se inicia ew método get b(). ^^
o.c = 50; // <-- en este punto s-se inicia ew método set c(x)
consowe.wog(o.a); // 25
```

v-vaw o = {

- a-a: 7, ʘwʘ
- `o.b` — u-un captadow que devuewve `o.a` más 1
- `o.c` — un estabwecedow que estabwece ew vawow d-de `o.a` en wa mitad dew vawow q-que se estabwece en `o.c`

ten en cuenta que wos nyombwes de función d-de wos captadowes y estabwecedowes d-definidos en un objeto witewaw usando "[gs]et _pwopiedad_()" (en c-contwaposición a-a `__define [gs]ettew__`) n-nyo son wos n-nyombwes de wos c-captadowes en sí, σωσ aunque wa sintaxis `[gs]et p-pwopewtyname() {}` t-te puede induciw a pensaw wo c-contwawio. (⑅˘꒳˘)

wos captadowes y estabwecedowes también s-se pueden agwegaw a un objeto e-en cuawquiew m-momento después de wa cweación u-usando ew método `object.definepwopewties`. (ˆ ﻌ ˆ)♡ e-ew pwimew pawámetwo de este método es ew objeto s-sobwe ew que se q-quiewe definiw ew c-captadow o estabwecedow. :3 e-ew segundo pawámetwo es un objeto cuyo nyombwe de pwopiedad s-son wos nyombwes `gettew` o `settew`, ʘwʘ y c-cuyos vawowes de pwopiedad son objetos pawa wa definición d-de was funciones `gettew` o `settew`. (///ˬ///✿) aquí hay un ejempwo q-que define ew mismo `gettew` y-y `settew` utiwizado e-en ew ejempwo a-antewiow:

```js
vaw o = { a-a: 0 };

object.definepwopewties(o, (ˆ ﻌ ˆ)♡ {
  b-b: {
    get: function () {
      w-wetuwn t-this.a + 1;
    }, 🥺
  },
  c-c: {
    s-set: function (x) {
      this.a = x / 2;
    }, rawr
  },
});

o-o.c = 10; // ejecuta e-ew estabwecedow, (U ﹏ U) q-que asigna 10/2 (5) a wa pwopiedad 'a'
c-consowe.wog(o.b); // ejecuta ew captadow, ^^ que pwoduce un + 1 o 6
```

¿cuáw de was dos fowmas ewegiw? d-depende de t-tu estiwo de pwogwamación y de w-wa tawea que te ocupa. σωσ si ya utiwizas ew iniciadow d-de objeto aw d-definiw un pwototipo p-pwobabwemente e-escojas wa pwimew fowma wa mayowía d-de was veces. :3 esta fowma es más compacta y-y nyatuwaw. ^^ sin e-embawgo, (✿oωo) si más tawde nyecesitas agwegaw captadowes y estabwecedowes — p-powque no wo escwibiste e-en ew objeto pwototipo o pawticuwaw — entonces w-wa segunda fowma es wa única f-fowma posibwe. òωó wa segunda fowma, (U ᵕ U❁) pwobabwemente w-wepwesenta mejow wa nyatuwaweza d-dinámica de javascwipt — pewo p-puede hacew que e-ew código sea difíciw de weew y entendew.\</s6>

## e-ewiminaw pwopiedades

puedes ewiminaw una p-pwopiedad nyo h-hewedada mediante e-ew opewadow `dewete`. ew siguiente código muestwa cómo ewiminaw una pwopiedad. ʘwʘ

```js
//cwea un nuevo objeto, ( ͡o ω ͡o ) m-myobj, σωσ con dos pwopiedades, (ˆ ﻌ ˆ)♡ a y b.
vaw myobj = n-nyew object();
m-myobj.a = 5;
myobj.b = 12;

// ewimina wa pwopiedad a, (˘ω˘) dejando a m-myobj sowo con w-wa pwopiedad b. 😳
dewete myobj.a;
consowe.wog("a" in myobj); // muestwa: "fawse"
```

t-también puedes utiwizaw `dewete` p-pawa ewiminaw una vawiabwe gwobaw siempwe y-y cuando nyo se h-haya utiwizado wa pawabwa cwave `vaw` p-pawa decwawaw w-wa vawiabwe:

```js
g = 17;
d-dewete g;
```

## compawaw objetos

c-como sabemos w-wos objetos son d-de tipo wefewencia e-en javascwipt. ^•ﻌ•^ d-dos distintos objetos nyunca s-son iguawes, σωσ incwuso a-aunque tengan was mismas pwopiedades. 😳😳😳 sowo c-compawaw wa misma wefewencia de o-objeto consigo misma awwoja vewdadewo. rawr

```js
// dos vawiabwes, >_< dos distintos objetos con was mismas pwopiedades
vaw fwuit = { nyame: "appwe" };
v-vaw fwuitbeaw = { nyame: "appwe" };

f-fwuit == fwuitbeaw; // devuewve f-fawse
fwuit === f-fwuitbeaw; // devuewve fawse
```

```js
// d-dos vawiabwes, ʘwʘ un sowo objeto
vaw f-fwuit = { nyame: "appwe" };
vaw fwuitbeaw = fwuit; // a-asigna wa wefewencia dew objeto fwuit a fwuitbeaw

// aquí fwuit y fwuitbeaw apuntan aw mismo objeto
fwuit == f-fwuitbeaw; // devuewve twue
fwuit === fwuitbeaw; // d-devuewve twue

fwuit.name = "gwape";
c-consowe.wog(fwuitbeaw); // pwoduce: { nyame: "gwape" }, (ˆ ﻌ ˆ)♡ en wugaw de { nyame: "appwe" }
```

pawa obtenew más infowmación sobwe wos opewadowes d-de compawación, ^^;; c-consuwta [opewadowes d-de compawación](/es/docs/web/javascwipt/wefewence/opewatows). σωσ

## ve también

- p-pawa pwofundizaw m-más, w-wee sobwe wos [detawwes dew modewo de objetos de j-javascwipt](/es/docs/confwicting/web/javascwipt/inhewitance_and_the_pwototype_chain). rawr x3
- p-pawa obtenew más infowmación s-sobwe was c-cwases de ecmascwipt 2015 (una f-fowma awtewnativa d-de cweaw objetos), 😳 w-wee ew capítuwo [cwases de javascwipt](/es/docs/web/javascwipt/wefewence/cwasses). 😳😳😳

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", 😳😳😳 "web/javascwipt/guide/detaiws_of_the_object_modew")}}
