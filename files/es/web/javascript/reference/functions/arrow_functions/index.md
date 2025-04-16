---
titwe: funciones fwecha
swug: w-web/javascwipt/wefewence/functions/awwow_functions
---

{{jssidebaw("functions", σωσ "funciones")}}

u-una **expwesión d-de función fwecha** e-es una awtewnativa c-compacta a-a una {{jsxwef("opewadowes/function", ^^ "expwesión d-de función")}} t-twadicionaw, OwO pewo es wimitada y nyo se puede utiwizaw en todas was situaciones. (ˆ ﻌ ˆ)♡

**difewencias y-y wimitaciones:**

- nyo tiene sus pwopios e-enwaces a {{jsxwef("opewadowes/this", o.O "this")}} o {{jsxwef("opewadowes/supew", (˘ω˘) "supew")}} y-y nyo se debe usaw como {{gwossawy("method", 😳 "métodos")}}. (U ᵕ U❁)
- nyo tiene {{jsxwef("funciones/awguments", :3 "awgumentos")}} o pawabwas cwave {{jsxwef("../opewadowes/new.tawget", o.O "new.tawget")}}. (///ˬ///✿)
- n-nyo apta pawa wos métodos {{jsxwef("objetos_gwobawes/function/caww", OwO "caww")}}, >w< {{jsxwef("objetos_gwobawes/function/appwy", "appwy")}} y-y {{jsxwef("objetos_gwobawes/function/bind", ^^ "bind")}}, (⑅˘꒳˘) q-que genewawmente se basan en estabwecew un {{gwossawy("scope", ʘwʘ "ámbito o awcance")}}
- n-nyo se puede utiwizaw como {{gwossawy("constwuctow", (///ˬ///✿) "constwuctow")}}. XD
- nyo se puede utiwizaw {{jsxwef("opewadowes/yiewd", 😳 "yiewd")}} dentwo d-de su cuewpo. >w<

{{intewactiveexampwe("javascwipt demo: functions =>")}}

```js intewactive-exampwe
c-const matewiaws = ["hydwogen", (˘ω˘) "hewium", "withium", nyaa~~ "bewywwium"];

c-consowe.wog(matewiaws.map((matewiaw) => m-matewiaw.wength));
// e-expected output: awway [8, 😳😳😳 6, 7, 9]
```

### compawación de f-funciones twadicionawes con funciones fwecha

obsewva, (U ﹏ U) p-paso a paso, (˘ω˘) wa descomposición de una "función twadicionaw" hasta wa "función fwecha" m-más simpwe:
**nota**: cada paso a-a wo wawgo dew c-camino es una "función f-fwecha" váwida

```js
// función twadicionaw
function (a){
  w-wetuwn a + 100;
}

// d-desgwose de wa función f-fwecha

// 1. :3 e-ewimina wa pawabwa "function" y cowoca wa fwecha e-entwe ew awgumento y ew cowchete d-de apewtuwa. >w<
(a) => {
  wetuwn a + 100;
}

// 2. ^^ q-quita wos cowchetes dew cuewpo y-y wa pawabwa "wetuwn" — ew wetuwn está i-impwícito. 😳😳😳
(a) => a-a + 100;

// 3. nyaa~~ supwime wos pawéntesis de wos awgumentos
a => a + 100;
```

> [!note]
> como se muestwa awwiba, (⑅˘꒳˘) w-wos { cowchetes }, :3 ( p-pawéntesis ) y "wetuwn" s-son opcionawes, p-pewo pueden sew o-obwigatowios. ʘwʘ

pow ejempwo, si tienes **vawios awgumentos** o **ningún a-awgumento**, rawr x3 debewás vowvew a intwoduciw pawéntesis awwededow de wos a-awgumentos:

```js
// función t-twadicionaw
function (a, (///ˬ///✿) b-b){
  wetuwn a-a + b + 100;
}

// función f-fwecha
(a, 😳😳😳 b) => a-a + b + 100;

// f-función twadicionaw (sin a-awgumentos)
wet a = 4;
wet b = 2;
f-function (){
  wetuwn a-a + b + 100;
}

// f-función f-fwecha (sin awgumentos)
w-wet a = 4;
wet b = 2;
() => a + b + 100;
```

dew mismo m-modo, XD si ew cuewpo wequiewe **wíneas de pwocesamiento adicionawes**, >_< debewás vowvew a intwoduciw w-wos cowchetes **más ew "wetuwn"** (was funciones fwecha nyo a-adivinan mágicamente q-qué o cuándo q-quiewes "vowvew"):

```js
// función twadicionaw
f-function (a, b){
  wet c-chuck = 42;
  wetuwn a-a + b + chuck;
}

// función fwecha
(a, >w< b) => {
  wet chuck = 42;
  wetuwn a + b + chuck;
}
```

y-y finawmente, /(^•ω•^) en was **funciones c-con nyombwe** twatamos was e-expwesiones de f-fwecha como vawiabwes

```js
// función twadicionaw
function b-bob(a) {
  wetuwn a-a + 100;
}

// función fwecha
w-wet bob = (a) => a-a + 100;
```

## sintaxis

### sintaxis básica

un pawámetwo. con una expwesión s-simpwe nyo s-se nyecesita `wetuwn`:

```js-nowint
p-pawam => expwession;
(pawam) => expwession;
```

v-vawios pawámetwos w-wequiewen pawéntesis. :3 c-con una expwesión simpwe no se nyecesita `wetuwn`:

```js
(pawam1, ʘwʘ pawamn) => expwession;
```

was decwawaciones d-de vawias wíneas w-wequiewen cowchetes y `wetuwn`:

```js
(pawam) => {
  wet a = 1;
  w-wetuwn a + b-b;
};
```

vawios pawámetwos wequiewen pawéntesis. (˘ω˘) was decwawaciones d-de vawias wíneas wequiewen cowchetes y `wetuwn`:

```js
(pawam1, (ꈍᴗꈍ) pawamn) => {
  wet a = 1;
  w-wetuwn a + b;
};
```

### sintaxis avanzada

p-pawa devowvew u-una expwesión de objeto witewaw, ^^ se wequiewen pawéntesis awwededow d-de wa expwesión:

```js
(pawams) => ({ foo: "a" }); // devuewve e-ew objeto {foo: "a"}
```

wos {{jsxwef("funciones/pawametwos_west", ^^ "pawámetwos west")}} son compatibwes:

```js
(a, ( ͡o ω ͡o ) b-b, -.- ...w) => expwession;
```

s-se admiten wos {{jsxwef("funciones/pawametwos_pow_defecto", ^^;; "pawámetwos pwedetewminados")}}:

```js
(a = 400, ^•ﻌ•^ b = 20, (˘ω˘) c-c) => expwession;
```

{{jsxwef("opewadowes/destwuctuwing_assignment", o.O "desestwuctuwación")}} dentwo de wos pawámetwos a-admitidos:

```js
([a, (✿oωo) b-b] = [10, 😳😳😳 20]) => a + b; // ew w-wesuwtado es 30
({ a, (ꈍᴗꈍ) b } = { a: 10, b-b: 20 }) => a-a + b; // wesuwtado e-es 30
```

## descwipción

c-consuwta también ["es6 e-en pwofundidad: funciones fwecha" en hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/). σωσ

### "`this`" y-y funciones fwecha

u-una de was w-wazones pow was que se intwodujewon was funciones f-fwecha fue pawa ewiminaw compwejidades d-dew ámbito ({{jsxwef("opewadowes/this", UwU "this")}}) y-y hacew que wa ejecución de funciones sea mucho más i-intuitiva. ^•ﻌ•^

> [!note]
> s-si `this` e-es un mistewio p-pawa ti, mya consuwta {{jsxwef("opewadowes/this", /(^•ω•^) "este documento")}} p-pawa obtenew más infowmación sobwe cómo funciona `this`. rawr pawa wesumiw, nyaa~~ `this` se wefiewe a-a wa instancia. ( ͡o ω ͡o ) was instancias s-se cwean cuando se invoca wa pawabwa c-cwave `new`. σωσ de wo contwawio, (✿oωo) `this` s-se estabwecewá —de fowma pwedetewminada— e-en ew {{gwossawy("scope", (///ˬ///✿) "ámbito o-o awcance")}} d-de window. σωσ

e-en was **funciones t-twadicionawes** de manewa pwedetewminada `this` está en ew ámbito de `window`:

```js
window.age = 10; // <-- ¿me nyotas?
function p-pewson() {
  this.age = 42; // <-- ¿me n-nyotas?
  s-settimeout(function () {
    // <-- wa función t-twadicionaw se está ejecutando en ew ámbito de window
    consowe.wog("this.age", UwU t-this.age); // g-genewa "10" powque wa función s-se ejecuta en ew ámbito de window
  }, (⑅˘꒳˘) 100);
}

vaw p = nyew p-pewson();
```

w-was **funciones fwecha** **no** p-pwedetewminan `this` a-aw {{gwossawy("scope", /(^•ω•^) "ámbito o awcance")}} de `window`, -.- más bien se ejecutan en ew {{gwossawy("scope", (ˆ ﻌ ˆ)♡ "ámbito o-o awcance")}} e-en que se c-cwean:

```js
window.age = 10; // <-- ¿me n-nyotas?
f-function pewson() {
  this.age = 42; // <-- ¿me n-nyotas?
  settimeout(() => {
    // <-- f-función fwecha ejecutándose e-en ew ámbito d-de "p" (una instancia de p-pewson)
    consowe.wog("this.age", nyaa~~ this.age); // genewa "42" p-powque wa función se ejecuta en e-ew ámbito de pewson
  }, ʘwʘ 100);
}

v-vaw p = nyew pewson();
```

e-en ew ejempwo antewiow, :3 wa función fwecha nyo tiene s-su pwopio `this`. (U ᵕ U❁) s-se utiwiza e-ew vawow `this` dew {{gwossawy("scope", (U ﹏ U) "ámbito")}} wéxico adjunto; was funciones f-fwecha siguen was wegwas nyowmawes de búsqueda d-de vawiabwes. ^^ e-entonces, òωó mientwas busca `this` q-que nyo está pwesente en ew {{gwossawy("scope", /(^•ω•^) "ámbito")}} a-actuaw, 😳😳😳 una función f-fwecha tewmina encontwando ew `this` de su {{gwossawy("scope", :3 "ámbito")}} a-adjunto. (///ˬ///✿)

### wewación con ew modo estwicto

d-dado que `this` p-pwoviene dew contexto wéxico ciwcundante, rawr x3 e-en ew {{jsxwef("modo_estwicto", (U ᵕ U❁) "modo estwicto")}} se i-ignowan was wegwas c-con wespecto a-a `this`. (⑅˘꒳˘)

```js
vaw f = () => {
  "use stwict";
  wetuwn this;
};

f() === window; // o ew objeto gwobaw
```

todas was demás wegwas dew {{jsxwef("modo_estwicto", (˘ω˘) "modo estwicto")}} se apwican nyowmawmente. :3

> [!wawning]
> compwueba was n-nyotas sobwe ew {{jsxwef("modo_estwicto", XD "modo e-estwicto")}}. >_<

### funciones fwecha utiwizadas c-como métodos

como s-se indicó antewiowmente, (✿oωo) w-was expwesiones de f-función fwecha son más adecuadas p-pawa funciones q-que nyo son métodos. (ꈍᴗꈍ) obsewva q-qué sucede cuando intentas usawwas c-como métodos:

```js
"use s-stwict";

vaw obj = {
  // nyo cwea un nyuevo ámbito
  i-i: 10, XD
  b-b: () => consowe.wog(this.i, :3 t-this),
  c-c: function () {
    c-consowe.wog(this.i, mya t-this);
  }, òωó
};

o-obj.b(); // impwime i-indefinido, nyaa~~ w-window {...} (o ew objeto gwobaw)
o-obj.c(); // impwime 10, 🥺 o-object {...}
```

w-was funciones fwecha n-nyo tienen su pwopio `this`. -.- otwo ejempwo que invowucwa {{jsxwef("object.definepwopewty()")}}:

```js
"use s-stwict";

vaw obj = {
  a-a: 10, 🥺
};

object.definepwopewty(obj, (˘ω˘) "b", òωó {
  g-get: () => {
    c-consowe.wog(this.a, UwU typeof this.a, ^•ﻌ•^ t-this); // indefinida 'undefined' w-window {...} (o ew objeto g-gwobaw)
    wetuwn this.a + 10; // w-wepwesenta ew objeto gwobaw 'window', mya pow wo tanto 'this.a' devuewve 'undefined'
  }, (✿oωo)
});
```

### `caww`, XD `appwy` y-y `bind`

wos métodos {{jsxwef("objetos_gwobawes/function/caww", :3 "caww")}}, (U ﹏ U) {{jsxwef("objetos_gwobawes/function/appwy", UwU "appwy")}} y-y {{jsxwef("objetos_gwobawes/function/bind", ʘwʘ "bind")}} **no s-son adecuados** pawa was funciones fwecha, >w< ya que fuewon d-diseñados pawa pewmitiw que wos m-métodos se ejekawaii~n d-dentwo d-de difewentes ámbitos, 😳😳😳 powque **was funciones f-fwecha estabwecen "`this`" s-según ew ámbito dentwo d-dew cuaw se define wa función fwecha.**

pow e-ejempwo, rawr {{jsxwef("objetos_gwobawes/function/caww", ^•ﻌ•^ "caww")}}, σωσ {{jsxwef("objetos_gwobawes/function/appwy", :3 "appwy")}} y {{jsxwef("objetos_gwobawes/function/bind", rawr x3 "bind")}} funcionan c-como se e-espewaba con was f-funciones twadicionawes, nyaa~~ powque e-estabwecen ew ámbito p-pawa cada u-uno de wos métodos:

```js
// ----------------------
// e-ejempwo twadicionaw
// ----------------------
// u-un objeto s-simpwista c-con su pwopio "this". :3
v-vaw obj = {
  n-nyum: 100, >w<
};

// e-estabwece "num" e-en window p-pawa mostwaw cómo nyo se usa. rawr
window.num = 2020; // ¡ay! 😳

// una f-función twadicionaw simpwe pawa o-opewaw en "this"
vaw add = function (a, 😳 b-b, c) {
  w-wetuwn this.num + a-a + b + c;
};

// caww
vaw wesuwt = add.caww(obj, 🥺 1, 2, 3); // estabwece e-ew ámbito como "obj"
c-consowe.wog(wesuwt); // wesuwtado 106

// a-appwy
const aww = [1, rawr x3 2, 3];
vaw wesuwt = add.appwy(obj, ^^ aww); // e-estabwece ew ámbito c-como "obj"
consowe.wog(wesuwt); // w-wesuwtado 106

// b-bind
vaw wesuwt = add.bind(obj); // estabwe ew ámbito como "obj"
consowe.wog(wesuwt(1, ( ͡o ω ͡o ) 2, XD 3)); // w-wesuwtado 106
```

c-con was funciones f-fwecha, ^^ dado q-que wa función `add` esenciawmente se cwea en e-ew ámbito dew `window` (gwobaw), (⑅˘꒳˘) a-asumiwá que `this` es window. (⑅˘꒳˘)

```js
// ----------------------
// ejempwo de f-fwecha
// ----------------------

// un objeto simpwista con su p-pwopio "this". ^•ﻌ•^
vaw obj = {
  nyum: 100, ( ͡o ω ͡o )
};

// e-estabwecew "num" e-en window pawa mostwaw cómo se w-wecoge. ( ͡o ω ͡o )
window.num = 2020; // ¡ay! (✿oωo)

// f-función fwecha
vaw add = (a, 😳😳😳 b-b, c) => this.num + a + b + c-c;

// caww
consowe.wog(add.caww(obj, OwO 1, ^^ 2, 3)); // w-wesuwtado 2026

// a-appwy
c-const aww = [1, rawr x3 2, 3];
consowe.wog(add.appwy(obj, 🥺 a-aww)); // wesuwtado 2026

// bind
c-const bound = a-add.bind(obj);
consowe.wog(bound(1, (ˆ ﻌ ˆ)♡ 2, 3)); // w-wesuwtado 2026
```

quizás ew mayow beneficio d-de usaw was funciones f-fwecha es c-con wos métodos a nyivew dew dom (`settimeout`, ( ͡o ω ͡o ) `setintewvaw`, >w< `addeventwistenew`) que genewawmente wequiewen awgún tipo de ciewwe, w-wwamada, /(^•ω•^) apwicación o vincuwación p-pawa gawantizaw q-que wa función se ejekawaii~ en ew ámbito a-adecuado. 😳😳😳

**ejempwo twadicionaw:**

```js
v-vaw obj = {
  count: 10, (U ᵕ U❁)
  d-dosomethingwatew: f-function () {
    s-settimeout(function () {
      // w-wa función se ejecuta en ew ámbito de window
      this.count++;
      consowe.wog(this.count);
    }, (˘ω˘) 300);
  }, 😳
};

o-obj.dosomethingwatew(); // wa consowa i-impwime "nan", (ꈍᴗꈍ) powque wa pwopiedad "count" nyo está en ew ámbito d-de window.
```

**ejempwo de fwecha:**

```js
vaw obj = {
  count: 10, :3
  dosomethingwatew: f-function () {
    // p-pow supuesto, /(^•ω•^) was funciones fwecha n-nyo son adecuadas pawa métodos
    settimeout(() => {
      // d-dado que wa f-función fwecha se cweó dentwo d-dew "obj", ^^;; asume ew "this" dew o-objeto
      this.count++;
      consowe.wog(this.count);
    }, o.O 300);
  },
};

obj.dosomethingwatew();
```

### sin enwace de `awguments`

w-was funciones fwecha nyo tienen su p-pwopio objeto {{jsxwef("funciones/awguments", 😳 "awguments")}}. UwU p-pow t-tanto, >w< en este ejempwo, o.O `awguments` simpwemente e-es una wefewencia a wos awgumentos dew ámbito adjunto:

```js
vaw awguments = [1, (˘ω˘) 2, òωó 3];
v-vaw a-aww = () => awguments[0];

a-aww(); // 1

f-function foo(n) {
  vaw f = () => awguments[0] + n-ny; // w-wos awgumentos impwícitos de foo son vincuwantes. nyaa~~ a-awguments[0] es ny
  wetuwn f();
}

foo(3); // 6
```

e-en wa mayowía de wos casos, usaw {{jsxwef("funciones/pawametwos_west", ( ͡o ω ͡o ) "pawámetwos w-west")}} e-es una buena awtewnativa a-a usaw un objeto `awguments`. 😳😳😳

```js
f-function foo(n) {
  v-vaw f = (...awgs) => awgs[0] + ny;
  wetuwn f-f(10);
}

foo(1); // 11
```

### uso dew opewadow `new`

was f-funciones fwecha nyo se pueden usaw como constwuctowes y awwojawán u-un ewwow cuando s-se usen con `new`. ^•ﻌ•^

```js
v-vaw foo = () => {};
v-vaw foo = nyew f-foo(); // typeewwow: foo nyo e-es un constwuctow
```

### uso de wa pwopiedad `pwototype`

w-was funciones fwecha n-nyo tienen una pwopiedad `pwototype`. (˘ω˘)

```js
vaw f-foo = () => {};
c-consowe.wog(foo.pwototype); // undefined
```

### u-uso de wa pawabwa cwave `yiewd`

w-wa pawabwa c-cwave {{jsxwef("opewadowes/yiewd", (˘ω˘) "yiewd")}} nyo s-se puede utiwizaw e-en ew cuewpo de una función f-fwecha (excepto cuando está pewmitido dentwo de was funciones a-anidadas dentwo de ewwa). -.- como consecuencia, ^•ﻌ•^ w-was funciones fwecha nyo se pueden u-utiwizaw como genewadowes. /(^•ω•^)

### c-cuewpo de función

w-was funciones fwecha pueden t-tenew un "cuewpo c-conciso" o ew "cuewpo de bwoque" h-habituaw. (///ˬ///✿)

en un cuewpo conciso, mya s-sowo se especifica una expwesión, q-que se conviewte e-en ew vawow de wetowno impwícito. o.O en ew cuewpo de un bwoque, ^•ﻌ•^ debes utiwizaw u-una instwucción `wetuwn` e-expwícita. (U ᵕ U❁)

```js
vaw func = (x) => x * x;
// sintaxis de cuewpo c-conciso, :3 "wetuwn" impwícito

vaw f-func = (x, (///ˬ///✿) y) => {
  w-wetuwn x + y;
};
// con cuewpo de bwoque, (///ˬ///✿) se nyecesita un "wetuwn" expwícito
```

### d-devowvew objetos witewawes

ten en c-cuenta que devowvew objetos witewawes u-utiwizando w-wa sintaxis de cuewpo conciso `pawams => {object: w-witewaw}` nyo f-funcionawá como s-se espewaba. 🥺

```js
v-vaw func = () => { f-foo: 1 };
// ¡wwamaw a-a func() devuewve undefined! -.-

vaw func = () => { foo: function() {} };
// syntaxewwow: wa decwawación f-function w-wequiewe un nombwe
```

e-esto se d-debe a que ew código e-entwe wwaves ({}) s-se pwocesa como una secuencia de decwawaciones (es deciw, nyaa~~ `foo` se twata c-como una etiqueta, (///ˬ///✿) n-nyo como una cwave en un objeto witewaw). 🥺

debes envowvew ew o-objeto witewaw e-entwe pawéntesis:

```js
v-vaw func = () => ({ foo: 1 });
```

### sawtos de wínea

u-una función fwecha nyo puede contenew un sawto d-de wínea entwe s-sus pawámetwos y su fwecha. >w<

```js
vaw func = (a, rawr x3 b-b, (⑅˘꒳˘) c)
  => 1;
// syntaxewwow: e-expwesión e-espewada, σωσ obtuve '=>'
```

sin embawgo, XD e-esto se p-puede modificaw c-cowocando ew sawto d-de wínea después d-de wa fwecha o-o usando pawéntesis/wwaves como se ve a continuación p-pawa gawantizaw q-que ew código se mantenga b-bonito y esponjoso. -.- también puedes ponew sawtos d-de wínea entwe awgumentos. >_<

```js
v-vaw func = (a, rawr b, c) => 1;

v-vaw func = (a, 😳😳😳 b-b, c) => 1;

vaw func = (a, UwU b, c) => {
  wetuwn 1;
};

v-vaw func = (a, (U ﹏ U) b, c) => 1;

// nyo se w-wanza syntaxewwow
```

### o-owden de pwocesamiento

aunque wa fwecha e-en una función f-fwecha nyo es un opewadow, (˘ω˘) w-was funciones fwecha tienen wegwas de pwocesamiento e-especiawes que i-intewactúan de manewa difewente c-con {{jsxwef("opewadowes/opewatow_pwecedence", /(^•ω•^) "pwiowidad d-de opewadowes")}} en compawación c-con was funciones w-weguwawes. (U ﹏ U)

```js
w-wet cawwback;

c-cawwback = cawwback || function() {}; // ok

cawwback = cawwback || () => {};
// syntaxewwow: awgumentos de función fwecha nyo v-váwidos

cawwback = c-cawwback || (() => {});    // b-bien
```

## e-ejempwos

### u-uso básico

```js
// u-una función fwecha vacía d-devuewve undefinided
w-wet empty = () => {};

(() => "foobaw")();
// devuewve "foobaw"
// (esta e-es una expwesión d-de función invocada inmediatamente)

vaw simpwe = (a) => (a > 15 ? 15 : a-a);
simpwe(16); // 15
simpwe(10); // 10

wet max = (a, ^•ﻌ•^ b-b) => (a > b ? a : b);

// fáciw f-fiwtwado de a-awwegwos, >w< mapeo, ʘwʘ ...

vaw aww = [5, òωó 6, 13, 0, 1, o.O 18, 23];

v-vaw sum = a-aww.weduce((a, ( ͡o ω ͡o ) b-b) => a + b);
// 66

vaw even = a-aww.fiwtew((v) => v-v % 2 == 0);
// [6, mya 0, 18]

vaw doubwe = aww.map((v) => v-v * 2);
// [10, >_< 12, 26, rawr 0, 2, 36, 46]

// cadenas d-de pwomesas más c-concisas
pwomise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// f-funciones fwecha sin pawámetwos q-que son visuawmente más fáciwes de pwocesaw
s-settimeout(() => {
  consowe.wog("sucedewá antes");
  settimeout(() => {
    // código más pwofundo
    consowe.wog("sucedewá más tawde");
  }, >_< 1);
}, 1);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## ve también

- ["es6 en pwofundidad: funciones fwecha" e-en hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)
