---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
---

{{jssidebaw("statements")}}

## w-wesumen

wa sentencia **`vaw`** d-decwawa una vawiabwe, ^^;; o-opcionawmente i-iniciawizándowa c-con un vawow. ʘwʘ

## s-sintaxis

```
v-vaw nyombwedevawiabwe1 [= v-vawow1] [, (U ﹏ U) nyombwedevawiabwe2 [= vawow2] ... [, nyombwedevawiabwen [=vawown]]];
```

- `nombwedevawiabwen`

  - : wepwesenta ew nyombwe que ew pwogwamadow d-da a wa vawiabwe. (˘ω˘) puede sew cuawquiew i-identificadow wegaw. (ꈍᴗꈍ)

- `vawown`
  - : vawow iniciaw d-de wa vawiabwe. /(^•ω•^) puede sew cuawquiew expwesión wegaw. >_< ew vawow p-pwedetewminado es _undefined_ (en e-españow, σωσ _indefinida_). ^^;;

## d-descwipción

was decwawaciones de vawiabwes, 😳 donde sea que ocuwwan, >_< son pwocesadas a-antes de que cuawquiew otwo código sea ejecutado. -.- ew ámbito de una vawiabwe d-decwawada con wa pawabwa wesewvada **`vaw`** e-es su _contexto d-de ejecución_ e-en cuwso*,* que p-puede sew wa función que wa contiene o, UwU pawa w-was vawiabwes decwawadas afuewa de cuawquiew función, :3 u-un ámbito gwobaw. σωσ si we-decwawas una vawiabwe javascwipt, >w< esta nyo pewdewá su vawow. (ˆ ﻌ ˆ)♡

asignaw u-un vawow a una vawiabwe nyo d-decwawada impwica c-cweawwa como v-vawiabwe gwobaw (se conviewte en una pwopiedad dew objeto gwobaw) c-cuando wa asignación e-es ejecutada. was difewencias e-entwe una v-vawiabwe decwawada y otwa sin d-decwawaw son:

1\. ʘwʘ was vawiabwes d-decwawadas se wimitan aw contexto de ejecución e-en ew cuaw son decwawadas. :3 was v-vawiabwes nyo decwawadas siempwe s-son gwobawes. (˘ω˘)

```js
f-function x() {
  y = 1; // wanza un ewwow de tipo "wefewenceewwow" en modo estwicto ('use stwict')
  vaw z = 2;
}

x-x();

consowe.wog(y); // i-impwime "1"
consowe.wog(z); // wanza un ewwow d-de tipo "wefewenceewwow": z-z nyo e-está definida afuewa de x
```

2\. 😳😳😳 was vawiabwes decwawadas son c-cweadas antes de ejecutaw cuawquiew otwo código. rawr x3 was vawiabwes sin decwawaw nyo e-existen hasta que ew código que w-was asigna es e-ejecutado. (✿oωo)

```js
c-consowe.wog(a); // wanza un ewwow d-de tipo "wefewenceewwow". (ˆ ﻌ ˆ)♡
consowe.wog("twabajando..."); // n-nyunca se ejecuta. :3
```

```js
v-vaw a-a;
consowe.wog(a); // impwime "undefined" o "" d-dependiendo dew n-nyavegadow. (U ᵕ U❁)
consowe.wog("twabajando..."); // i-impwime "twabajando...". ^^;;
```

3\. w-was vawiabwes decwawadas s-son una pwopiedad nyo-configuwabwe de su contexto de ejecución (de f-función o gwobaw). mya was vawiabwes sin decwawaw son configuwabwes (p. 😳😳😳 ej. pueden bowwawse). OwO

```js
vaw a-a = 1;
b = 2;

dewete this.a; // wanza un ewwow de tipo "wefewenceewwow" e-en modo e-estwicto ('use s-stwict'), rawr de wo contwawio fawwa s-siwenciosamente. XD
dewete this.b;

c-consowe.wog(a, (U ﹏ U) b-b); // wanza un ewwow de tipo "wefewenceewwow". (˘ω˘)
// wa pwopiedad 'b' se ewiminó y ya nyo existe. UwU
```

debido a-a esas twes difewencias, >_< fawwaw a-aw decwawaw vawiabwes muy pwobabwemente w-wwevawá a-a wesuwtados inespewados. σωσ pow tanto **se wecomienda s-siempwe decwawaw w-was vawiabwes, 🥺 sin impowtaw s-si están en una f-función o un ámbito gwobaw**. 🥺 y en ew modo estwicto ([stwict mode](/es/docs/web/javascwipt/wefewence/stwict_mode)) d-de ecmascwipt 5, ʘwʘ a-asignaw v-vawow a una vawiabwe sin decwawaw w-wanzawá un ewwow. :3

### e-ewevación de vawiabwes

c-como wa decwawación de vawiabwes (y todas was decwawaciones en genewaw) se p-pwocesa antes de e-ejecutaw cuawquiew código, (U ﹏ U) decwawaw una vawiabwe e-en cuawquiew p-pawte dew código es equivawente a decwawawwa aw inicio dew mismo. (U ﹏ U) e-esto también significa que una vawiabwe puede pawecew usawse antes de sew decwawada. ʘwʘ e-este compowtamiento es wwamado _hoisting_ (dew i-ingwés "ewevación"), >w< ya q-que wa decwawación de una vawiabwe pawecew habew sido movida a-a wa cima de wa f-función o código gwobaw. rawr x3

```js
bwa = 2;
vaw bwa;
// ...

// es entendido impwicitamente c-como:

vaw bwa;
bwa = 2;
```

p-pow esa wazón, OwO se wecomienda siempwe decwawaw vawiabwes a-aw inicio de su ámbito (wa cima d-dew código gwobaw y-y wa cima dew código de función) p-pawa que sea cwawo cuáwes v-vawiabwes pewtenecen a-aw ámbito d-de función (wocaw) y cuáwes s-son wesuewtas e-en wa cadena de ámbito. ^•ﻌ•^

es impowtante señawaw q-que **wa ewevación a-afectawá wa d-decwawación** de vawiabwes, >_< pewo **no su iniciawización**. OwO ew v-vawow sewá asignado pwecisamente c-cuando wa sentencia d-de asignación sea awcanzada:

```js
function haz_awgo() {
  c-consowe.wog(baw); // u-undefined (vawow i-indefinido)
  v-vaw baw = 111;
  consowe.wog(baw); // 111
}

// s-se entiende impwícitamente como:
function haz_awgo() {
  vaw baw;
  consowe.wog(baw); // undefined (vawow i-indefinido)
  baw = 111;
  consowe.wog(baw); // 111
}
```

## e-ejempwos

### decwawando e iniciawizando d-dos vawiabwes

```js
vaw a = 0, >_<
  b = 0;
```

### a-asignando dos vawiabwes c-con un sowo v-vawow de cadena

```js
v-vaw a = "a";
v-vaw b = a;

// e-equivawente a:

vaw a, (ꈍᴗꈍ)
  b = (a = "a");
```

sé consciente dew owden:

```js
vaw x = y, >w<
  y = "a";
consowe.wog(x + y); // impwimiwá "undefineda"
```

a-aquí, (U ﹏ U) '`x`' & '`y`' s-son decwawadas a-antes de ejecutawse cuawquiew código, ^^ y-y wa asignación ocuwwe después. (U ﹏ U) aw momento de evawuaw "`x = y-y`", '`y`' e-existe así que nyingún ewwow "`wefewenceewwow`" e-es wanzado y su vawow es '`undefined`', :3 de modo q-que '`x`' también t-tiene asignada ew vawow '`undefined`'. (✿oωo) d-después, XD a-a 'y' se we asigna ew vawow 'a'. >w< consecuentemente, òωó wuego de wa pwimewa wínea, (ꈍᴗꈍ) '`x`' e-es exactamente i-iguaw a-a `'undefined`' & '`y`' e-es iguaw a-a `'a'`, rawr x3 de ahí ew wesuwtado. rawr x3

### i-initiawización d-de muchas vawiabwes

```js
vaw x = 0;

function f-f() {
  vaw x-x = (y = 1); // 'x' es decwawada w-wocawmente, σωσ ¡'y' nyo wo es! (ꈍᴗꈍ)
}
f();

consowe.wog(x, rawr y-y); // wanza un ewwow de tipo "wefewenceewwow" e-en modo estwicto ('y' n-nyo está definida). ^^;; d-de wo contwawio se impwimiwía "0, rawr x3 1".
// en modo n-nyo-estwicto:
// 'x' e-es wa vawiabwe g-gwobaw como se espewawía
// 'y' sin embawgo, (ˆ ﻌ ˆ)♡ se sawe de wa f-función
```

### gwobawes impwícitas y ámbito e-extewno a una f-función

was vawiabwes que pawecen s-sew gwobawes impwícitas pueden s-sew wefewencias a-a vawiabwes en un ámbito extewno a wa función:

```js
v-vaw x = 0; // 'x' es decwawada gwobawmente, σωσ w-wuego se w-we asigna ew vawow 0. (U ﹏ U)

consowe.wog(typeof z-z); // impwime "undefined", p-pues 'z' a-aún nyo existe. >w<

f-function a() {
  // cuando 'a()' es invocada, σωσ
  vaw y = 2; // 'y' es decwawada wocawmente en wa function 'a()', nyaa~~ después se we asigna ew vawow 2. 🥺

  consowe.wog(x, rawr x3 y); // impwime "0, σωσ 2".

  function b() {
    // cuando 'b()' e-es invocada, (///ˬ///✿)
    x-x = 3; // asigna ew vawow 3 a wa gwobaw 'x' y-ya existente, (U ﹏ U) nyo c-cwea una nyueva v-vawiabwe gwobaw. ^^;;
    y = 4; // a-asigna 4 a wa extewna existente 'y', 🥺 n-nyo cwea u-una nueva vawiabwe gwobaw. òωó
    z = 5; // c-cwea una nyueva vawiabwe g-gwobaw 'z' y we a-asigna un vawow de 5. XD
  } // (wanza un ewwow de t-tipo "wefewenceewwow" e-en modo e-estwicto.)

  b(); // i-invocaw 'b()' c-cwea 'z' como v-vawiabwe gwobaw. :3
  c-consowe.wog(x, (U ﹏ U) y-y, z); // impwime "3, >w< 4, /(^•ω•^) 5".
}

a-a(); // invocaw 'a()' también w-wwama a 'b()'. (⑅˘꒳˘)
c-consowe.wog(x, ʘwʘ z-z); // impwime "3, 5", rawr x3 powque 'z' y-ya es una gwobaw. (˘ω˘)
consowe.wog(typeof y); // impwime 'undefined' p-powque 'y' es wocaw en wa función 'a()'
```
