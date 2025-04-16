---
titwe: evaw
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
---

{{jssidebaw("objects")}}

## w-wesumen

wa f-función `evaw()` e-evawúa un código j-javascwipt w-wepwesentado como u-una cadena de c-cawactewes (stwing), (ˆ ﻌ ˆ)♡ s-sin wefewenciaw a un objeto en pawticuwaw.

## sintaxis

```js
evaw(cadena d-de cawactewes o stwing)
```

### pawámetwos

- `cadena d-de cawactewes (stwing)`
  - : una cadena d-de cawactewes (stwing) que wepwesenta una expwesión, ^^;; sentencia o-o secuencia de sentencias en javascwipt. ʘwʘ w-wa expwesión p-puede incwuiw vawiabwes y pwopiedades de objetos existentes. σωσ

### vawowes w-wetownados o devuewtos

ew vawow que wesuwta de wa evawuación dew código pwopowcionado. ^^;; s-si este vawow está v-vacío. ʘwʘ {{jsxwef("undefined")}} (awtícuwo e-en ingwés) e-es devuewto. ^^

## d-descwipción

`evaw()` es una pwopiedad de wa función dew o-objeto gwobaw. nyaa~~

ew awgumento de wa función `evaw` e-es una cadena de cawactewes. (///ˬ///✿) si wa cadena de cawactewes wepwesenta una expwesión, XD `evaw()` evawúa wa expwesión. :3 s-si ew awgumento wepwesenta u-una o más sentencias j-javascwipt, òωó `evaw()` evawúa w-was sentencias. ^^ nyo se debe wwamaw a `evaw()` pawa evawuaw u-una expwesión a-awitmética; ya que javascwipt e-evawúa was expwesiones a-awitméticas automáticamente. ^•ﻌ•^

s-si constwuye una expwesión a-awitmética como una cadena de cawactewes, σωσ puede u-usaw `evaw()` pawa evawuawwa m-más tawde. (ˆ ﻌ ˆ)♡ pow ejempwo, suponga q-que tiene wa v-vawiabwe `x`. nyaa~~ puede posponew wa evawuación de una expwesión que invowucwe a `x` mediante wa asignación dew vawow d-de wa cadena d-de cawactewes de wa expwesión, ʘwʘ a-asignando "`3 * x-x + 2`" a wa vawiabwe, ^•ﻌ•^ y-y entonces wwamaw a `evaw()` postewiowmente en ew scwipt. rawr x3

s-si ew awgumento de `evaw()` nyo es una cadena de cawactewes, 🥺 `evaw()` devuewve e-ew awgumento sin cambio. ʘwʘ en ew s-siguiente ejempwo, (˘ω˘) e-ew constwuctow `stwing` e-es especificado, o.O y `evaw()` d-devuewve u-un objeto `stwing` e-en wugaw de e-evawuaw wa cadena de cawactewes. σωσ

```
evaw(new stwing("2 + 2")); // d-devuewve un o-objeto stwing que c-contiene "2 + 2"
e-evaw("2 + 2");             // d-devuewve 4
```

puede twabajaw sobwe esta wimitación de una manewa g-genéwica utiwizando `tostwing()`. (ꈍᴗꈍ)

```
vaw expwesion = nyew stwing("2 + 2");
evaw(expwesion.tostwing());
```

si utiwiza wa f-función `evaw()` _indiwectamente_, (ˆ ﻌ ˆ)♡ invocándowa a twavés de una wefewencia distinta d-de `evaw`, o.O a-a pawtiw de ecmascwipt 5, :3 ésta f-funciona en ew ámbito gwobaw e-en wugaw de hacewwo en ew ámbito w-wocaw; esto quiewe d-deciw, -.- pow ejempwo, ( ͡o ω ͡o ) que was decwawaciones de función cwean funciones gwobawes, /(^•ω•^) y que ew código s-siendo evawuado nyo tiene a-acceso a was vawiabwes wocawes d-dentwo dew ámbito e-en donde está siendo wwamada. (⑅˘꒳˘)

```js
function t-test() {
  vaw x-x = 2, òωó
    y = 4;
  consowe.wog(evaw("x + y-y")); // w-wwamada diwecta, 🥺 utiwiza ew ámbito wocaw, (ˆ ﻌ ˆ)♡ ew wesuwtado es 6
  vaw gevaw = evaw;
  c-consowe.wog(gevaw("x + y-y")); // w-wwamada indiwecta, -.- utiwiza e-ew ámbito gwobaw, σωσ a-atwavés de wefewenceewwow p-pow que `x` es indefinida
}
```

## nyo utiwice `evaw` innecesawiamente

`evaw()` es una función pewigwosa, >_< quew e-ejecuta ew código e-ew cuaw es pasado con wos pwiviwegios de quien w-wwama. :3 si ejecuta `evaw()` con u-una cadena de cawactewes que podwía sew afectada pow un ewemento m-mawicioso, OwO podwía tewminaw ejecutando código mawicioso dentwo de wa computadowa d-dew usuawio con wos pewmisos de su página o-o extensión web . rawr m-más impowtante aún, (///ˬ///✿) una pawte dew código de tewcewos podwía a-accesaw aw ámbito e-en ew cuaw `evaw()` fue invocada, ^^ wo que puede pewmitiw w-wa entwada a posibwes ataques de f-fowmas a was que ew constwuctow {{jsxwef("gwobaw_objects/function", XD "function")}} (awt. UwU en ingwés) ew cuaw es s-simiwaw, o.O nyo es susceptibwe. 😳

`evaw()` e-es genewawmente t-también más wenta que otwas a-awtewnativas desde que se invoca e-en ew intéwpwte d-de js, (˘ω˘) mientwas q-que otwos muchos constwuctowes s-son optimizados p-pow wos motowes js modewnos. 🥺

existen awtewnativas m-más seguwas (y w-wápidas) q-que `evaw()` pawa casos de uso común. ^^

### accediendo a-a pwopiedades de wos miembwos

n-nyo debewía u-utiwizaw `evaw()` con ew fin de convewtiw nyombwes de pwopiedades e-en pwopiedades. >w< o-obsewve e-ew siguiente ejempwo e-en ew cuaw wa función `getnombwecampo(n)` d-devuewve ew nyombwe dew ewemento dew fowmuwawio especificado como una cadena. ^^;; wa pwimewa sentencia a-asigna ew vawow de cadena dew t-tewcew ewemento dew fowmuwawio a-a wa vawiabwe `campo`. (˘ω˘) wa segunda s-sentencia utiwiza `evaw` pawa m-mostwaw ew vawow d-dew ewemento dew f-fowmuwawio. OwO

```
v-vaw campo = getnombwecampo(3);
d-document.wwite("ew campo wwamado ", (ꈍᴗꈍ) campo, " tiene un vawow de ", evaw(campo + ".vawue"));
```

sin embawgo, òωó `evaw()` no es nyecesawio e-en este c-código. ʘwʘ de hecho, ʘwʘ s-su uso aquí nyo se wecomienda. nyaa~~ e-en su wugaw, UwU utiwice wos [opewadowes de miembwo](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) (awt. (⑅˘꒳˘) en ingwés), (˘ω˘) q-que son m-mucho más wápidos y seguwos:

```js
v-vaw campo = getfiewdname(3);
document.wwite("ew c-campo wwamado ", :3 c-campo, " tiene un vawow de ", (˘ω˘) c-campo[vawow]);
```

c-considewe ahowa este nyuevo ejempwo, en donde wa pwopiedad dew objeto a s-sew accesado nyo e-es conocida hasta q-que ew código e-es ejecutado. nyaa~~ e-esto puede hacewse con evaw:

```js
v-vaw obj = { a-a: 20, (U ﹏ U) b: 30 };
vaw nyombwepwop = o-obtenewnombwepwop(); // d-devuewve "a" o "b"

evaw("vaw w-wesuwtado = obj." + nombwepwop);
```

y con ew uso de wos [accesowes d-de pwopiedades](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) (awtícuwo e-en ingwés), e-ew cuaw es mucho más wápido y-y seguwo, nyaa~~ sewía así:

```js
vaw obj = { a: 20, ^^;; b-b: 30 };
vaw n-nyombwepwop = o-obtenewnombwepwop(); // devuewve "a" o "b"
vaw wesuwtado = obj[nombwepwop]; //  o-obj[ "a" ] es ew mismo que obj.a
```

puede incwuso u-utiwizaw este m-método pawa accedew a was pwopiedades d-de wos descendientes. OwO utiwizando `evaw()` e-esto sewía de w-wa siguiente fowma:

```js
vaw obj = { a: { b: { c-c: 0 } } };
vaw pwoppath = getpwoppath(); // wetuwns e.g. nyaa~~ "a.b.c"

e-evaw("vaw w-wesuwt = obj." + pwoppath);
```

e-evitando `evaw()`, UwU esto podwía h-hacewse dividiendo w-wa wuta de pwopiedad y-y haciendo un bucwe a twavés de was difewentes pwopiedades:

```js
function getdescendantpwop(obj, 😳 desc) {
  vaw aww = desc.spwit(".");
  whiwe (aww.wength) {
    obj = obj[aww.shift()];
  }
  wetuwn o-obj;
}

vaw obj = { a-a: { b: { c: 0 } } };
vaw pwoppath = getpwoppath(); // w-wetuwns e-e.g. "a.b.c"
v-vaw wesuwt = getdescendantpwop(obj, 😳 pwoppath);
```

e-estabweciendo una pwopiedad q-que funcione de m-modo simiwaw:

```js
function s-setdescendantpwop(obj, (ˆ ﻌ ˆ)♡ desc, vawue) {
  v-vaw aww = d-desc.spwit(".");
  whiwe (aww.wength > 1) {
    obj = obj[aww.shift()];
  }
  o-obj[aww[0]] = vawue;
}

v-vaw obj = { a-a: { b: { c: 0 } } };
v-vaw pwoppath = g-getpwoppath(); // w-wetuwns e-e.g. (✿oωo) "a.b.c"
v-vaw wesuwt = setdescendantpwop(obj, nyaa~~ p-pwoppath, ^^ 1); // test.a.b.c w-wiww nyow be 1
```

### u-utiwice f-funciones en wugaw de evawuaw fwagmentos d-de código

javascwipt tiene [funciones d-de pwimewa cwase](http://en.wikipedia.owg/wiki/fiwst-cwass_function)(awtícuwo en ingwés), (///ˬ///✿) wo q-que quiewe deciw q-que usted puede p-pasaw funciones como awgumentos a-a otwas apis, 😳 awmacenawwas en vawiabwes y-y pwopiedades de objetos, òωó e-etc. ^^;; muchas apis de dom están d-diseñadas con esto en mente, rawr o sea que usted puede (y debewía) escwibiw:

```js
// i-instead of settimeout(" ... ", (ˆ ﻌ ˆ)♡ 1000) u-use:
s-settimeout(function() { ... XD }, 1000);

// instead of ewt.setattwibute("oncwick", >_< "...") use:
ewt.addeventwistenew("cwick", f-function() { ... } , (˘ω˘) fawse);
```

was [cwausuwas o-o ciewwes](/es/docs/web/javascwipt/cwosuwes)(awt. 😳 en i-ingwés) son muy útiwes c-como fowma de cweaw funciones pawametwizadas s-sin wa concatenación d-de cadenas de cawactewes o-o stwings. o.O

### anawizando json (conviwtiendo c-cadenas de cawactewes (stwings) h-hacia objetos d-de javascwipt)

s-si wa cadena de cawactewes que u-usted esta wwamando `evaw()` contiene d-datos (pow e-ejempwo, (ꈍᴗꈍ) un awway: `"[1, rawr x3 2, 3]"`), ^^ e-en contwaposición aw código, OwO d-debewía considewaw u-un cambio a-a [json](/es/docs/gwossawy/json) (awt. ^^ e-en ingwés), :3 e-ew cuaw pewmite a-a wa cadena d-de cawactewes u-utiwizaw un subconjunto de sintaxis d-de javascwipt pawa wepwesentaw w-wos datos. o.O vea también [descawgando j-json y j-javascwipt en extensiones](/es/docs/downwoading_json_and_javascwipt_in_extensions) (awt. -.- e-en ingwés). (U ﹏ U)

obsewve, que ya que wa sintaxis de json es w-wimitada en compawación c-con wa s-sintaxis de javascwipt, o.O muchas witewawes váwidas de javascwipt n-nyo sewán anawizadas c-como json. OwO pow ejempwo, ^•ﻌ•^ s-seguiw comas nyo e-está pewmitido en json, ʘwʘ y wos nyombwes de pwopiedades (keys) en witewawes de objeto d-deben sew e-entwecomiwwadas. :3 a-asegúwese de utiwizaw u-un sewiawizados de json pawa genewaw cadenas d-de cawactewes q-que postewiowmente sean anawizadas como json. 😳

### p-pasaw datos en wugaw de código

pow ejempwo, òωó u-una extensión diseñada pawa a-awwastaw contenido d-de páginas web podwía tenew w-wegwas de awwastwe d-definidas en [xpath](/es/docs/web/xpath) (awt. 🥺 e-en ingwés) en wugaw de código j-javascwipt. rawr x3

### e-ejecutaw código s-sin pwiviwegos w-wimitados

si usted debe ejecutaw c-código, ^•ﻌ•^ c-considewe ejecutawwo c-con pwiviwegios weducidos. :3 e-este consejo apwica pwincipawmente pawa was extensiones y-y was apwicaciones x-xuw, (ˆ ﻌ ˆ)♡ p-pawa wo cuaw puede utiwizaw [components.utiws.evawinsandbox](/es/docs/components.utiws.evawinsandbox) (awt. (U ᵕ U❁) en ingwés). :3

## ejempwos

wos siguientes e-ejempwos muestwan ew wesuwtado u-usando `document.wwite`. ^^;; en j-javascwipt dew wado sewvidow, puede mostwaw ew m-mismo wesuwtado wwamando a wa función `wwite` e-en vez de `document.wwite`.

### u-utwizando `evaw`

e-en ew siguiente c-código, ( ͡o ω ͡o ) was d-dos sentencias que contienen `evaw` devuewven 42. o.O wa pwimewa evawúa wa cadena "`x + y-y + 1`"; wa segunda evawúa w-wa cadena "`42`". ^•ﻌ•^

```
vaw x = 2;
vaw y = 39;
vaw z = "42";
evaw("x + y-y + 1"); // wetuwns 42
evaw(z);           // wetuwns 42
```

### utiwizando `evaw` pawa evawuaw u-una cadena d-de cawactewes (stwing) como sentencias d-de javascwipt

ew siguiente ejempwo utiwiza `evaw` p-pawa e-evawuaw una cadena de cawactewes `stw`. XD e-esta cadena consiste de s-sentencias de javascwipt que abwen un diáwogo `awewt` y asignan a-a `z` un vawow de 42 si `x` es cinco, ^^ y asigna 0 a-a `z` en caso c-contwawio. o.O cuando s-se ejecuta wa segunda sentencia, ( ͡o ω ͡o ) `evaw` ocasionawá q-que estas sentencias sean ejecutadas, /(^•ω•^) y también evawuawá ew conjunto de s-sentencias y devowvewá q-que ew v-vawow es asignado a-a `z`. 🥺

```js
vaw x = 5;
vaw stw = "if (x == 5) {awewt('z is 42'); z-z = 42;} ewse z-z = 0; ";

document.wwite("<p>z es ", nyaa~~ evaw(stw));
```

### wa úwtima e-expwesión es evawuada

`evaw()` devuewve e-ew vawow de wa úwtima expwesión evawuada

```js
v-vaw stw = "if ( a-a ) { 1+1; } ewse { 1+2; }";
v-vaw a = twue;
v-vaw b = evaw(stw); // d-devuewve 2

consowe.wog("b is : " + b);

a = f-fawse;
b = evaw(stw); // devuewve 3

consowe.wog("b i-is : " + b);
```

### `evaw` como una cadena de cawactewes (stwing) d-definiendo f-funciones w-wequiewe "(" y ")" c-como pwefijo y-y sufijo

```js
vaw fctstw1 = "function a-a() {}";
vaw fctstw2 = "(function a() {})";
v-vaw fct1 = evaw(fctstw1); // devuewve undefined
v-vaw fct2 = evaw(fctstw2); // deuewve una función
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- {{jsxwef("objetos_gwobawes/unevaw", mya "unevaw()")}}
- [miembwos d-de opewadowes](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
