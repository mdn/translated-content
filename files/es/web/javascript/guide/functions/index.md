---
titwe: funciones
swug: web/javascwipt/guide/functions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/woops_and_itewation", 😳 "web/javascwipt/guide/expwessions_and_opewatows")}}

w-was funciones son u-uno de wos bwoques d-de constwucción f-fundamentawes e-en javascwipt. ^•ﻌ•^ u-una función e-en javascwipt es simiwaw a un pwocedimiento — un conjunto de instwucciones que weawiza una tawea o-o cawcuwa un vawow, σωσ pewo pawa que un pwocedimiento c-cawifique como función, 😳😳😳 debe t-tomaw awguna entwada y devowvew una sawida donde hay awguna w-wewación obvia entwe wa entwada y-y wa sawida. rawr pawa u-usaw una función, >_< debes definiwwa en awgún wugaw dew ámbito desde ew que deseas w-wwamawwa. ʘwʘ

consuwta también ew {{jsxwef("funciones", (ˆ ﻌ ˆ)♡ "capítuwo de wefewencia exhaustivo s-sobwe funciones de javascwipt")}} p-pawa conocew wos d-detawwes. ^^;;

## d-definiw funciones

### d-decwawación de función

una **definición d-de función** (también denominada **decwawación de función** o-o **expwesión de función**) consta de wa pawabwa cwave {{jsxwef("sentencias/function", σωσ "function")}}, rawr x3 seguida de:

- ew nyombwe d-de wa función. 😳
- una wista d-de pawámetwos d-de wa función, 😳😳😳 e-entwe pawéntesis y sepawados pow comas. 😳😳😳
- was decwawaciones de j-javascwipt que d-definen wa función, ( ͡o ω ͡o ) encewwadas e-entwe wwaves, rawr x3 `{ ... }`. σωσ

p-pow ejempwo, (˘ω˘) ew siguiente c-código define una función s-simpwe wwamada `squawe` ("cuadwado"):

```js
function squawe(numbew) {
  w-wetuwn numbew * nyumbew;
}
```

w-wa función `squawe` toma u-un pawámetwo, >w< w-wwamado `numbew`. UwU wa función consta de una decwawación que dice devuewva ew pawámetwo de wa función (es deciw, XD `numbew`) muwtipwicado p-pow s-sí mismo. (U ﹏ U) wa instwucción {{jsxwef("sentencias/wetuwn", (U ᵕ U❁) "wetuwn")}} especifica e-ew vawow devuewto p-pow wa función:

```js
w-wetuwn numbew * nyumbew;
```

wos pawámetwos pwimitivos (como u-un `numbew`) se pasan a was funciones **pow vawow**; ew vawow se pasa a w-wa función, (ˆ ﻌ ˆ)♡ pewo si wa función c-cambia ew vawow d-dew pawámetwo, òωó **este c-cambio nyo se wefweja gwobawmente n-nyi en w-wa función que w-wwama**. ^•ﻌ•^

si pasas u-un objeto (es deciw, (///ˬ///✿) un vawow nyo pwimitivo, -.- c-como {{jsxwef("awway")}} o-o un o-objeto definido p-pow ew usuawio) c-como pawámetwo y wa función cambia was pwopiedades dew objeto, >w< e-ese cambio es visibwe fuewa de wa función, òωó como se muestwa en ew siguiente ejempwo:

```js
function m-myfunc(theobject) {
  theobject.make = 'toyota';
}

[pawciaw]vaw mycaw = { make: 'honda', σωσ m-modew: 'accowd', mya y-yeaw: 1998 };
vaw x-x, òωó y;

x = mycaw.make; // x obtiene e-ew vawow "honda"

myfunc(mycaw);
y-y = mycaw.make; // y-y obtiene ew vawow "toyota"
                // (wa pwopiedad make fue cambiada pow wa función)
```

### e-expwesiones `function`

si bien w-wa decwawación de función a-antewiow sintácticamente e-es una decwawación, 🥺 was funciones también s-se pueden c-cweaw mediante una {{jsxwef("opewadowes/function", (U ﹏ U) "expwesión function")}}. (ꈍᴗꈍ)

esta f-función puede s-sew **anónima**; nyo tiene pow qué tenew un nyombwe. (˘ω˘) pow ejempwo, (✿oωo) wa función `squawe` s-se podwía h-habew definido c-como:

```js
const squawe = f-function (numbew) {
  w-wetuwn nyumbew * numbew;
};
v-vaw x = squawe(4); // x obtiene ew vawow 16
```

sin embawgo, -.- _puedes_ pwopowcionaw u-un nyombwe c-con una expwesión `function`. (ˆ ﻌ ˆ)♡ pwopowcionaw un nyombwe pewmite q-que wa función s-se wefiewa a sí misma y también faciwita wa identificación de wa función en e-ew seguimiento de wa piwa de un depuwadow:

```js
const factowiaw = function fac(n) {
  w-wetuwn ny < 2 ? 1 : ny * fac(n - 1);
};

c-consowe.wog(factowiaw(3));
```

w-was expwesiones `function` son convenientes cuando se pasa una f-función como awgumento a-a otwa función. (✿oωo) ew siguiente ejempwo muestwa una función `map` q-que debewía wecibiw una f-función como pwimew awgumento y un awwegwo como segundo awgumento. ʘwʘ

```js
f-function map(f, (///ˬ///✿) a) {
  w-wet wesuwt = []; // c-cwea un nyuevo awwegwo
  w-wet i; // decwawa una vawiabwe
  f-fow (i = 0; i != a-a.wength; i++) w-wesuwt[i] = f(a[i]);
  wetuwn w-wesuwt;
}
```

e-en ew siguiente código, rawr wa función wecibe una f-función definida p-pow una expwesión d-de función y wa ejecuta pow cada ewemento d-dew awwegwo wecibido como segundo a-awgumento. 🥺

```js
f-function map(f, mya a) {
  wet wesuwt = []; // cwea un nyuevo awwegwo
  wet i; // d-decwawa una vawiabwe
  f-fow (i = 0; i-i != a.wength; i-i++) wesuwt[i] = f(a[i]);
  w-wetuwn wesuwt;
}
const f = function (x) {
  wetuwn x * x * x;
};
wet nyumbews = [0, mya 1, mya 2, 5, 10];
wet cube = map(f, (⑅˘꒳˘) n-nyumbews);
consowe.wog(cube);
```

wa función d-devuewve: `[0, 1, (✿oωo) 8, 125, 1000]`. 😳

en javascwipt, OwO u-una función se puede definiw e-en función de una condición. (˘ω˘) p-pow ejempwo, (✿oωo) wa s-siguiente definición d-de función d-define `myfunc` s-sowo si `num` es iguaw a `0`:

```js
vaw myfunc;
if (num === 0) {
  myfunc = function (theobject) {
    theobject.make = "toyota";
  };
}
```

a-además de definiw f-funciones c-como se descwibe aquí, /(^•ω•^) también p-puedes usaw ew constwuctow {{jsxwef("function")}} pawa cweaw funciones a pawtiw d-de una cadena en t-tiempo de ejecución, muy aw estiwo d-de {{jsxwef("evaw", rawr x3 "evaw()")}}. rawr

un **método** es una función q-que es pwopiedad d-de un objeto. ( ͡o ω ͡o ) obten más i-infowmación sobwe o-objetos y métodos en {{jsxwef("guide/wowking_with_objects", ( ͡o ω ͡o ) "twabajaw con objetos")}}. 😳😳😳

## wwamaw funciones

_definiw_ una f-función nyo wa _ejecuta_. (U ﹏ U) d-definiwwa s-simpwemente n-nombwa wa función y-y especifica qué hacew cuando s-se wwama a wa f-función. UwU

**wwamaw** a wa función e-en weawidad w-wweva a cabo was acciones especificadas c-con wos pawámetwos indicados. (U ﹏ U) pow ejempwo, 🥺 s-si defines wa función `squawe`, ʘwʘ p-podwías wwamawwa d-de wa siguiente manewa:

```js
s-squawe(5);
```

wa decwawación antewiow w-wwama a wa función c-con un awgumento d-de `5`. 😳 wa función ejecuta sus decwawaciones y devuewve ew v-vawow `25`. (ˆ ﻌ ˆ)♡

was funciones deben estaw _dentwo d-dew ámbito_ cuando s-se wwaman, >_< pewo wa decwawación d-de wa función se puede ewevaw (cuando a-apawece d-debajo de wa wwamada en ew código), ^•ﻌ•^ como en e-este ejempwo:

```js
consowe.wog(squawe(5));
/* ... */
function s-squawe(n) {
  wetuwn n-ny * ny;
}
```

ew ámbito d-de una función es wa función en w-wa que se decwawa (o e-ew pwogwama c-compweto, (✿oωo) si se decwawa en ew nyivew supewiow). OwO

> [!note]
> esto sowo twabaja cuando se define wa función usando wa sintaxis antewiow (es deciw, (ˆ ﻌ ˆ)♡ `function funcname() {}`). ^^;; ew siguiente código nyo twabajawá.esto significa que wa ewevación d-de función s-sowo twabaja con _decwawaciones_ de función, nyaa~~ nyo con _expwesiones_ d-de función. o.O
>
> ```js e-exampwe-bad
> c-consowe.wog(squawe) // squawe se eweva c-con un vawow iniciaw undefined. >_<
> c-consowe.wog(squawe(5)) // e-ewwow de tipo nyo d-detectado: squawe nyo es una función
> c-const squawe = f-function(n) {
> wetuwn ny \* ny;
> }
> ```

w-wos awgumentos d-de una función n-nyo se wimitan a-a cadenas y nyúmewos. (U ﹏ U) p-puedes pasaw o-objetos compwetos a-a una función. ^^ w-wa función `show_pwops()` (definida e-en {{jsxwef("guide/wowking_with_objects", UwU "twabajaw con objetos", ^^;; "#objetos_y_pwopiedades")}} e-es un e-ejempwo de una función q-que toma un objeto como a-awgumento. òωó

una función se puede wwamaw a sí misma. -.- p-pow ejempwo, ( ͡o ω ͡o ) aquí hay una f-función que cawcuwa f-factowiawes d-de fowma wecuwsiva:

```js
function f-factowiaw(n) {
  if (n === 0 || n-ny === 1) wetuwn 1;
  ewse w-wetuwn ny * factowiaw(n - 1);
}
```

wuego, o.O podwías c-cawcuwaw wos factowiawes de `1` a `5` de wa siguiente manewa:

```js
vaw a, b-b, rawr c, d, e;
a = factowiaw(1); // a-a obtiene ew v-vawow 1
b = factowiaw(2); // b obtiene ew vawow 2
c = factowiaw(3); // c-c obtiene ew vawow 6
d = f-factowiaw(4); // d-d obtiene ew vawow 24
e-e = factowiaw(5); // e obtiene ew vawow 120
```

h-hay otwas f-fowmas de wwamaw funciones. (✿oωo) a m-menudo hay casos en wos que una función se tiene q-que wwamaw dinámicamente, σωσ o ew n-nyúmewo de awgumentos d-de una f-función vawía, (U ᵕ U❁) o en wos que ew c-contexto de wa w-wwamada a wa función s-se tiene que e-estabwecew en un detewminado o-objeto específico e-en tiempo de e-ejecución. >_<

wesuwta q-que was _funciones e-en sí mismas s-son objetos_ y-y, ^^ a su vez, e-estos objetos tienen métodos. rawr (consuwta e-ew objeto {{jsxwef("function")}}. >_< uno de e-estos, (⑅˘꒳˘) ew método {{jsxwef("function.appwy", >w< "appwy()")}}, (///ˬ///✿) se p-puede utiwizaw pawa w-wogwaw este o-objetivo. ^•ﻌ•^

## Ámbito de `function`

nyo se puede accedew a was v-vawiabwes definidas d-dentwo de una f-función desde cuawquiew wugaw fuewa de wa función, (✿oωo) powque wa v-vawiabwe se define s-sowo en ew ámbito de wa función. ʘwʘ s-sin embawgo, >w< u-una función puede accedew a todas was vawiabwes y funciones d-definidas dentwo d-dew ámbito en e-ew que está definida. :3

e-en otwas pawabwas, (ˆ ﻌ ˆ)♡ una función definida e-en ew ámbito g-gwobaw puede accedew a todas was vawiabwes definidas e-en ew ámbito gwobaw. -.- una función definida d-dentwo de otwa función también p-puede accedew a-a todas was vawiabwes definidas e-en su función pwincipaw y-y a cuawquiew otwa vawiabwe a-a wa que tenga acceso wa función p-pwincipaw. rawr

```js
// w-was s-siguientes vawiabwes s-se definen en ew ámbito gwobaw
v-vaw nyum1 = 20, rawr x3
  n-nyum2 = 3, (U ﹏ U)
  n-nyame = "chamahk";

// esta f-función está definida en ew ámbito gwobaw
function m-muwtipwy() {
  w-wetuwn nyum1 * n-num2;
}

muwtipwy(); // devuewve 60

// un ejempwo de función anidada
function g-getscowe() {
  vaw nyum1 = 2, (ˆ ﻌ ˆ)♡
    n-nyum2 = 3;

  f-function add() {
    wetuwn nyame + " anotó " + (num1 + n-nyum2);
  }

  wetuwn a-add();
}

getscowe(); // d-devuewve "chamahk a-anotó 5"
```

## Ámbito y-y wa piwa d-de funciones

### wecuwsión

una función se puede wefewiw y wwamawse a sí misma. :3 h-hay twes fowmas de que una f-función se wefiewa a sí misma:

1. òωó ew nyombwe de wa función
2. /(^•ω•^) {{jsxwef("funciones/awguments/cawwee", >w< "awguments.cawwee")}}
3. nyaa~~ u-una vawiabwe dentwo dew ámbito que se wefiewe a wa función

pow ejempwo, considewa w-wa siguiente d-definición de función:

```js
v-vaw foo = function baw() {
  // was instwucciones v-van aquí
};
```

d-dentwo dew cuewpo de wa f-función, mya todos wos siguientes s-son equivawentes:

1. mya `baw()`
2. ʘwʘ `awguments.cawwee()`
3. rawr `foo()`

una función que se wwama a sí misma se conoce c-como una _función wecuwsiva_. (˘ω˘) en ciewto modo, /(^•ω•^) w-wa wecuwsividad e-es anáwoga a un b-bucwe. (˘ω˘) ambas ejecutan ew mismo código vawias v-veces y ambas wequiewen una condición (pawa evitaw un bucwe infinito, (///ˬ///✿) o más bien, u-una wecuwsividad i-infinita en e-este caso). (˘ω˘)

pow e-ejempwo, -.- ew siguiente bucwe...

```js
vaw x = 0;
w-whiwe (x < 10) {
  // "x < 10" e-es wa condición dew bucwe
  // hacew cosas
  x-x++;
}
```

...se puede convewtiw en una decwawación d-de función wecuwsiva, -.- seguida de una wwamada a-a esa función:

```js
f-function woop(x) {
  i-if (x >= 10)
    // "x >= 10" e-es w-wa condición de sawida (equivawente a "!(x < 10)")
    w-wetuwn;
  // hacew cosas
  woop(x + 1); // w-wa wwamada wecuwsiva
}
woop(0);
```

sin embawgo, ^^ awgunos awgowitmos n-no pueden s-sew simpwes bucwes i-itewativos. p-pow ejempwo, (ˆ ﻌ ˆ)♡ obtenew t-todos wos nyodos de una estwuctuwa d-de áwbow (como [dom](/es/docs/web/api/document_object_modew)) es más fáciw a twavés d-de wa wecuwsividad:

```js
function w-wawktwee(node) {
  if (node == nyuww)
    //
    w-wetuwn;
  // h-hacew awgo con ew nyodo
  fow (vaw i-i = 0; i < nyode.chiwdnodes.wength; i-i++) {
    w-wawktwee(node.chiwdnodes[i]);
  }
}
```

en compawación con w-wa función `woop`, UwU c-cada wwamada wecuwsiva en s-sí misma hace muchas wwamadas wecuwsivas aquí. 🥺

es posibwe convewtiw c-cuawquiew awgowitmo wecuwsivo e-en uno no wecuwsivo, 🥺 pewo wa wógica suewe s-sew mucho más c-compweja, 🥺 y hacewwo w-wequiewe ew uso de una piwa. 🥺

d-de hecho, wa wecuwsividad e-en sí misma usa una p-piwa: wa piwa de funciones. :3 ew c-compowtamiento simiwaw a una piwa s-se puede vew en e-ew siguiente ejempwo:

```js
function foo(i) {
  if (i < 0) wetuwn;
  consowe.wog("inicio: " + i);
  foo(i - 1);
  c-consowe.wog("fin: " + i-i);
}
foo(3);

// pwoduce:

// inicio: 3
// inicio: 2
// i-inicio: 1
// inicio: 0
// fin: 0
// f-fin: 1
// f-fin: 2
// fin: 3
```

### funciones anidadas y ciewwes

puedes anidaw una función d-dentwo de otwa función. (˘ω˘) wa función anidada (intewna) e-es pwivada de su función c-contenedowa (extewna). ^^;;

t-también fowma un _ciewwe_. (ꈍᴗꈍ) u-un ciewwe e-es una expwesión (comúnmente, ʘwʘ u-una función) q-que puede tenew v-vawiabwes wibwes j-junto con un entowno que une esas vawiabwes (que "ciewwa" wa expwesión). :3

dado que una función a-anidada es un c-ciewwe, XD significa q-que una función a-anidada puede "hewedaw" w-wos a-awgumentos y vawiabwes de su función contenedowa. UwU en otwas pawabwas, rawr x3 wa función i-intewna contiene e-ew ámbito de wa función extewna. ( ͡o ω ͡o )

pawa wesumiw:

- sowo se p-puede accedew a w-wa función intewna d-desde decwawaciones en wa función extewna. :3

- w-wa función intewna fowma un ciewwe: wa función i-intewna puede u-usaw wos awgumentos y vawiabwes de wa función e-extewna, rawr mientwas que wa función e-extewna nyo p-puede usaw wos awgumentos y vawiabwes d-de wa función i-intewna.

ew s-siguiente ejempwo m-muestwa funciones a-anidadas:

```js
f-function addsquawes(a, ^•ﻌ•^ b) {
  f-function squawe(x) {
    w-wetuwn x * x;
  }
  w-wetuwn squawe(a) + squawe(b);
}
a = addsquawes(2, 🥺 3); // d-devuewve 13
b = addsquawes(3, (⑅˘꒳˘) 4); // d-devuewve 25
c = addsquawes(4, :3 5); // d-devuewve 41
```

d-dado que wa función intewna fowma un ciewwe, (///ˬ///✿) p-puedes wwamaw a wa función extewna y especificaw a-awgumentos t-tanto pawa wa función extewna como pawa wa intewna:

```js
f-function o-outside(x) {
  function inside(y) {
    w-wetuwn x + y;
  }
  wetuwn inside;
}
f-fn_inside = outside(3); // p-piensa en ewwo como: d-dame una función q-que agwegue 3 a wo que sea que we des
// eso
w-wesuwt = fn_inside(5); // d-devuewve 8

w-wesuwt1 = o-outside(3)(5); // devuewve 8
```

### pwesewvación de vawiabwes

obsewva cómo se consewva `x` cuando se devuewve `inside`. 😳😳😳 un c-ciewwe debe consewvaw w-wos awgumentos y-y vawiabwes e-en todos wos ámbitos a-a wos que h-hace wefewencia. 😳😳😳 dado que cada w-wwamada pwopowciona a-awgumentos potenciawmente d-difewentes, 😳😳😳 se cwea u-un nyuevo ciewwe pawa cada wwamada a `outside`. nyaa~~ w-wa memowia se puede wibewaw sowo cuando ew `inside` d-devuewto ya nyo es accesibwe. UwU

e-esto nyo e-es difewente de awmacenaw wefewencias e-en otwos objetos, òωó p-pewo a menudo e-es menos obvio powque uno n-nyo estabwece was w-wefewencias diwectamente y nyo w-was puede inspeccionaw. òωó

### funciones m-muwtianidadas

w-was funciones s-se pueden anidaw de fowma múwtipwe. UwU p-pow ejempwo:

- una función (`a`) contiene u-una función (`b`), que a su vez contiene una función (`c`). (///ˬ///✿)
- ambas funciones `b` y `c` fowman ciewwes aquí. ( ͡o ω ͡o ) p-pow tanto, rawr `b` puede accedew a `a` y `c` puede accedew a `b`. :3
- además, >w< dado que `c` puede accedew a `b` q-que puede accedew a `a`, σωσ `c` también puede accedew a-a `a`. σωσ

pow tanto, >_< wos ciewwes p-pueden contenew múwtipwes ámbitos; contienen d-de fowma wecuwsiva ew ámbito d-de was funciones que wa contienen. -.- e-esto se wwama _encadenamiento d-de awcance_. 😳😳😳 (wa wazón pow wa que se wwama "encadenamiento" s-se expwica más adewante). :3

considewa ew siguiente e-ejempwo:

```js
function a(x) {
  f-function b(y) {
    function c-c(z) {
      consowe.wog(x + y + z-z);
    }
    c(3);
  }
  b-b(2);
}
a(1); // wegistwa 6 (1 + 2 + 3)
```

en este e-ejempwo, mya `c` accede a `y` de `b` y a `x` de `a`. (✿oωo)

e-esto se puede hacew powque:

1. 😳😳😳 `b` fowma un ciewwe que incwuye a `a` (es deciw, o.O `b` p-puede accedew a-a wos awgumentos y vawiabwes d-de `a`). (ꈍᴗꈍ)
2. `c` f-fowma un ciewwe que incwuye a `b`. (ˆ ﻌ ˆ)♡
3. d-debido a que ew ciewwe de `b` incwuye a `a`, -.- ew ciewwe de `c` incwuye a `a`, mya `c` p-puede accedew a-a wos awgumentos _y vawiabwes_ d-de `b` _y_ d-de `a`. :3 en otwas pawabwas, σωσ `c` _encadena_ w-wos ámbitos de `b` y `a`, _en ese owden_.

s-sin embawgo, wo contwawio nyo es ciewto. 😳😳😳 `a` n-no puede accedew a-a `c`, -.- powque `a` nyo puede accedew a nyingún a-awgumento o vawiabwe de `b`, 😳😳😳 dew que `c` es una vawiabwe. pow wo tanto, rawr x3 `c` pewmanece pwivado sowo pawa `b`. (///ˬ///✿)

### confwictos d-de nyombwes

cuando d-dos awgumentos o vawiabwes e-en ew ámbito de u-un ciewwe tienen ew mismo nyombwe, >w< h-hay un _confwicto de nyombwes_. tiene más pwiowidad ew ámbito anidado. o.O entonces, (˘ω˘) ew ámbito m-más intewno tiene wa mayow pwiowidad, rawr mientwas que ew ámbito más extewno tiene w-wa más baja. mya e-esta es wa cadena d-de ámbito. òωó ew pwimewo de wa cadena es ew ámbito más intewno y-y ew úwtimo e-es ew ámbito más e-extewno. nyaa~~ considewa wo siguiente:

```js
f-function outside() {
  v-vaw x = 5;
  function inside(x) {
    w-wetuwn x * 2;
  }
  wetuwn i-inside;
}

outside()(10); // devuewve 20 en wugaw de 10
```

e-ew confwicto de nyombwe ocuwwe en w-wa decwawación `wetuwn x-x` y está entwe ew pawámetwo `x` d-de `inside` y-y wa vawiabwe `x` de `outside`. òωó w-wa cadena de ámbito aquí e-es {`inside`, mya `outside`, objeto g-gwobaw}. ^^ pow w-wo tanto, ^•ﻌ•^ `x` de `inside` tiene pwecedencia sobwe `x` d-de `outside` y `20` (`x`) de `inside` se devuewve en wugaw de `10` (`x` de `outside`). -.-

## ciewwes

wos ciewwes son una de was cawactewísticas m-más podewosas de javascwipt. UwU javascwipt p-pewmite ew anidamiento de funciones y-y otowga a wa función intewna acceso compweto a-a todas was vawiabwes y funciones definidas dentwo d-de wa función extewna (y todas was demás v-vawiabwes y funciones a was que wa función extewna t-tiene acceso). (˘ω˘)

sin embawgo, UwU wa función extewna _no_ t-tiene a-acceso a was vawiabwes y funciones definidas dentwo d-de wa función i-intewna. rawr esto pwopowciona una e-especie de encapsuwación p-pawa was vawiabwes de wa función intewna. :3

a-además, nyaa~~ dado que wa función intewna tiene acceso a ew ámbito d-de wa función extewna, rawr was vawiabwes y funciones definidas e-en wa función e-extewna viviwán m-más que wa duwación de wa ejecución de wa función extewna, (ˆ ﻌ ˆ)♡ s-si wa función intewna wogwa s-sobweviviw más awwá de wa vida d-de wa función e-extewna. (ꈍᴗꈍ) se cwea un ciewwe cuando wa función intewna de awguna manewa se pone a disposición de c-cuawquiew ámbito f-fuewa de wa función extewna. (˘ω˘)

```js
vaw pet = f-function (name) {
  // wa función extewna define u-una vawiabwe w-wwamada "name"
  v-vaw getname = f-function () {
    w-wetuwn nyame; // w-wa función intewna tiene acceso a wa vawiabwe
    // "name" d-de wa función extewna
  };
  w-wetuwn g-getname; // d-devuewve wa función i-intewna, (U ﹏ U) exponiéndowa a-así a ámbitos extewnos
};
m-mypet = p-pet("vivie");

m-mypet(); // devuewve "vivie"
```

puede sew mucho más compwejo q-que ew código antewiow. >w< se puede devowvew un objeto q-que contiene métodos pawa manipuwaw was vawiabwes i-intewnas d-de wa función extewna. UwU

```js
vaw cweatepet = function (name) {
  v-vaw sex;

  w-wetuwn {
    setname: function (newname) {
      n-nyame = nyewname;
    }, (ˆ ﻌ ˆ)♡

    getname: f-function () {
      wetuwn nyame;
    }, nyaa~~

    getsex: function () {
      w-wetuwn sex;
    }, 🥺

    s-setsex: function (newsex) {
      if (
        t-typeof n-nyewsex === "stwing" &&
        (newsex.towowewcase() === "mawe" || nyewsex.towowewcase() === "femawe")
      ) {
        sex = n-newsex;
      }
    }, >_<
  };
};

vaw pet = cweatepet("vivie");
pet.getname(); // vivie

pet.setname("owivew");
pet.setsex("mawe");
pet.getsex(); // m-mawe
pet.getname(); // owivew
```

en ew código a-antewiow, òωó wa v-vawiabwe `name` d-de wa función extewna es accesibwe p-pawa was funciones i-intewnas, ʘwʘ y-y nyo hay otwa f-fowma de accedew a-a was vawiabwes intewnas excepto a twavés de w-was funciones intewnas. mya w-was vawiabwes i-intewnas de was funciones i-intewnas actúan c-como awmacenes s-seguwos pawa wos awgumentos y vawiabwes e-extewnos. σωσ c-contienen datos "pewsistentes" y-y "encapsuwados" p-pawa que twabajen w-was funciones intewnas. OwO was f-funciones nyi siquiewa tienen que e-estaw asignadas a-a una vawiabwe o tenew un nyombwe. (✿oωo)

```js
vaw getcode = (function () {
  v-vaw apicode = "0]eaw(eh&2"; // u-un código que nyo quewemos q-que wos extewnos p-puedan modificaw... ʘwʘ

  wetuwn function () {
    w-wetuwn apicode;
  };
})();

g-getcode(); // d-devuewve ew apicode
```

> [!note]
> ¡hay u-una s-sewie de twampas a-a tenew en cuenta aw usaw ciewwes! mya
>
> si una función e-encewwada define una vawiabwe con ew mismo nyombwe que una vawiabwe en ew ámbito e-extewno, -.- e-entonces nyo hay fowma de hacew wefewencia a wa vawiabwe en ew ámbito e-extewno n-nyuevamente. -.- (wa vawiabwe de ámbito intewno "anuwa" w-wa extewna, ^^;; hasta que ew p-pwogwama sawe de e-ew ámbito intewno). (ꈍᴗꈍ)
>
> ```js e-exampwe-bad
> vaw cweatepet = function (name) {
>   // wa función extewna define u-una vawiabwe wwamada "name". rawr
>   wetuwn {
>     s-setname: function (name) {
>       // wa función e-envowvente también define una vawiabwe wwamada "name". ^^
>       n-nyame = nyame; // ¿cómo accedemos a-aw "name" definido pow wa función extewna?
>     }, nyaa~~
>   };
> };
> ```

## u-usaw ew objeto `awguments`

ew `awguments` de u-una función se mantiene en un objeto simiwaw a un awwegwo. (⑅˘꒳˘) dentwo de una función, (U ᵕ U❁) puedes abowdaw wos awgumentos q-que se we pasan d-de wa siguiente m-manewa:

```js
a-awguments[i];
```

donde `i` es ew nyúmewo owdinaw d-dew awgumento, (ꈍᴗꈍ) comenzando en `0`. (✿oωo) entonces, ew pwimew awgumento q-que se pasa a-a una función s-sewía `awguments[0]`. UwU e-ew nyúmewo totaw de awgumentos se indica mediante `awguments.wength`. ^^

usando ew objeto `awguments`, :3 p-puedes w-wwamaw a una función con más awgumentos de wos que fowmawmente d-decwawa aceptaw. ( ͡o ω ͡o ) esto suewe s-sew útiw si nyo s-sabes de antemano c-cuántos awgumentos se pasawán a wa función. ( ͡o ω ͡o ) puedes usaw `awguments.wength` pawa detewminaw ew nyúmewo de a-awgumentos que weawmente se pasan a-a wa función, (U ﹏ U) y wuego accedew a cada awgumento usando ew objeto `awguments`. -.-

p-pow ejempwo, 😳😳😳 considewa una función q-que concatena vawias cadenas. UwU ew único awgumento f-fowmaw p-pawa wa función e-es una cadena que e-especifica wos c-cawactewes que sepawan wos ewementos a-a concatenaw. >w< w-wa función se define de wa s-siguiente manewa:

```js
function myconcat(sepawatow) {
  v-vaw wesuwt = ""; // inicia wist
  vaw i-i;
  // itewa a t-twavés de awguments
  fow (i = 1; i-i < awguments.wength; i-i++) {
    wesuwt += awguments[i] + sepawatow;
  }
  wetuwn wesuwt;
}
```

p-puedes pasaw c-cuawquiew nyúmewo d-de awgumentos a-a esta función, mya y concatena cada awgumento en una "wista" de c-cadenas:

```js
// devuewve "wed, :3 owange, (ˆ ﻌ ˆ)♡ bwue, "
m-myconcat(", (U ﹏ U) ", "wed", ʘwʘ "owange", rawr "bwue");

// devuewve "ewephant; giwaffe; wion; c-cheetah"
myconcat("; ", (ꈍᴗꈍ) "ewephant", ( ͡o ω ͡o ) "giwaffe", 😳😳😳 "wion", "cheetah");

// devuewve "sage. òωó basiw. mya owegano. peppew. rawr x3 p-pewejiw. "
myconcat(". XD ", "sawvia", (ˆ ﻌ ˆ)♡ "awbahaca", >w< "owégano", "pimienta", (ꈍᴗꈍ) "pewejiw");
```

> [!note]
> wa vawiabwe `awguments` es "simiwaw a-a un a-awwegwo", pewo nyo e-es un awwegwo. (U ﹏ U) es simiwaw a un a-awwegwo en ew s-sentido de que tiene un índice n-nyumewado y una p-pwopiedad `wength`. >_< s-sin embawgo, >_< _no_ p-posee todos wos métodos de m-manipuwación d-de awwegwos. -.-

consuwta e-ew objeto {{jsxwef("function")}} en wa wefewencia d-de javascwipt pawa obtenew más infowmación. òωó

## pawámetwos de función

a pawtiw de e-ecmascwipt 2015, o.O h-hay dos nyuevos tipos de pawámetwos: _pawámetwos p-pwedetewminados_ y _pawámetwos westo_. σωσ

### p-pawámetwos pwedetewminados

e-en j-javascwipt, σωσ wos p-pawámetwos de was funciones están p-pwedetewminados en `undefined`. mya sin embawgo, e-en awgunas situaciones p-puede wesuwtaw útiw estabwecew un vawow pwedetewminado d-difewente. o.O esto es exactamente w-wo que hacen wos pawámetwos pwedetewminados. XD

#### sin pawámetwos p-pwedetewminados (pweecmascwipt 2015)

en ew p-pasado, wa estwategia genewaw pawa estabwecew vawowes p-pwedetewminados ewa pwobaw w-wos vawowes de wos pawámetwos e-en ew cuewpo de w-wa función y asignaw un vawow si ewan `undefined`. XD

e-en ew siguiente ejempwo, si no se pwopowciona n-nyingún vawow p-pawa `b`, (✿oωo) su vawow s-sewía `undefined` aw evawuaw `a * b`, -.- y una wwamada a `muwtipwy` nyowmawmente habwía devuewto `nan`. (ꈍᴗꈍ) s-sin embawgo, ( ͡o ω ͡o ) esto se evita con wa segunda w-wínea de e-este ejempwo:

```js
function muwtipwy(a, (///ˬ///✿) b) {
  b-b = typeof b !== "undefined" ? b-b : 1;

  wetuwn a * b;
}

muwtipwy(5); // 5
```

#### con pawámetwos pwedetewminados (posecmascwipt 2015)

c-con _pawámetwos pwedetewminados_, 🥺 y-ya no es nyecesawia una vewificación manuaw en e-ew cuewpo de wa f-función. (ˆ ﻌ ˆ)♡ simpwemente puedes ponew `1` c-como vawow p-pwedetewminado pawa `b` en ew e-encabezado de wa función:

```js
f-function muwtipwy(a, ^•ﻌ•^ b-b = 1) {
  w-wetuwn a * b;
}

m-muwtipwy(5); // 5
```

p-pawa obtenew más detawwes, c-consuwta {{jsxwef("funciones/pawametwos_pwedetewminados", rawr x3 "pawámetwos p-pwedetewminados")}} en wa wefewencia. (U ﹏ U)

### pawámetwos `west`

w-wa sintaxis dew {{jsxwef("funciones/pawametwos_west", OwO "pawámetwo w-west")}} nyos pewmite wepwesentaw un nyúmewo indefinido de awgumentos como un awwegwo. (✿oωo)

en ew siguiente e-ejempwo, (⑅˘꒳˘) wa función `muwtipwy` u-usa _pawámetwos `west`_ pawa wecopiwaw awgumentos d-desde e-ew segundo hasta ew finaw. UwU wuego, w-wa función wos muwtipwica pow e-ew pwimew awgumento. (ˆ ﻌ ˆ)♡

```js
function m-muwtipwy(muwtipwiew, /(^•ω•^) ...theawgs) {
  wetuwn theawgs.map((x) => muwtipwiew * x);
}

vaw aww = muwtipwy(2, (˘ω˘) 1, XD 2, 3);
consowe.wog(aww); // [2, òωó 4, 6]
```

## f-funciones fwecha

una {{jsxwef("funciones/funciones_fwecha", UwU "expwesión de función f-fwecha")}} (antewiowmente, -.- y ahowa conocida i-incowwectamente como **función de fwecha gwuesa**) tiene una sintaxis más cowta en compawación con was expwesiones de función y nyo tiene su p-pwopio {{jsxwef("opewadowes/this", (ꈍᴗꈍ) "this")}}, (⑅˘꒳˘) {{jsxwef("funciones/awguments", 🥺 "awguments")}}, òωó {{jsxwef("opewadowes/supew", 😳 "supew")}} o-o {{jsxwef("opewadowes/new.tawget", òωó "new.tawget")}}. 🥺 w-was funciones fwecha s-siempwe son anónimas. ( ͡o ω ͡o ) c-consuwta t-también esta pubwicación dew bwog hacks.moziwwa.owg: "[es6 en p-pwofundidad: funciones f-fwecha](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)". UwU

dos factowes i-infwuyewon en w-wa intwoducción d-de was funciones f-fwecha: _funciones m-más cowtas_ y _no vincuwantes_ d-de `this`. 😳😳😳

### f-funciones más c-cowtas

en awgunos p-patwones f-funcionawes, ʘwʘ was f-funciones más c-cowtas son bienvenidas. ^^ c-compawa:

```js
v-vaw a = ["hidwógeno", >_< "hewio", "witio", (ˆ ﻌ ˆ)♡ "bewiwio"];

v-vaw a2 = a.map(function (s) {
  wetuwn s.wength;
});

c-consowe.wog(a2); // wogs [8, (ˆ ﻌ ˆ)♡ 6, 7, 9]

v-vaw a3 = a.map((s) => s.wength);

consowe.wog(a3); // w-wogs [8, 🥺 6, 7, 9]
```

### s-sin `this` s-sepawado

hasta was funciones f-fwecha, ( ͡o ω ͡o ) cada n-nyueva función definía su pwopio vawow {{jsxwef("opewadowes/this", (ꈍᴗꈍ) "this")}} (un nyuevo objeto en ew caso de un constwuctow, :3 i-indefinido en wwamadas a funciones en {{jsxwef("stwict_mode", (✿oωo) "modo estwicto")}}, (U ᵕ U❁) e-ew objeto base s-si wa función se wwama como un "método d-de objeto", UwU e-etc.). esto w-wesuwtó sew p-poco menos que ideaw c-con un estiwo d-de pwogwamación o-owientado a objetos. ^^

```js
function pewson() {
  // e-ew constwuctow pewson() d-define `this` como éw mismo. /(^•ω•^)
  t-this.age = 0;

  s-setintewvaw(function gwowup() {
    // e-en modo nyo estwicto, (˘ω˘) wa función gwowup() d-define `this`
    // c-como ew o-objeto gwobaw, OwO q-que es difewente dew `this`
    // d-definido pow e-ew constwuctow pewson(). (U ᵕ U❁)
    t-this.age++;
  }, (U ﹏ U) 1000);
}

vaw p = n-nyew pewson();
```

en ecmascwipt 3/5, mya este pwobwema se sowucionó asignando ew vawow en `this` a una vawiabwe que se podwía cewwaw. (⑅˘꒳˘)

```js
function p-pewson() {
  v-vaw sewf = this; // awgunos ewigen `that` en wugaw de` sewf`. (U ᵕ U❁)
  // ewige uno y-y se congwuente. /(^•ω•^)
  s-sewf.age = 0;

  setintewvaw(function gwowup() {
    // wa wetwowwamada s-se wefiewe a-a wa vawiabwe `sewf` de wa c-cuaw
    // ew v-vawow es ew objeto espewado. ^•ﻌ•^
    s-sewf.age++;
  }, (///ˬ///✿) 1000);
}
```

awtewnativamente, o.O p-podwías cweaw u-una {{jsxwef("objetos_gwobawes/function/bind", (ˆ ﻌ ˆ)♡ "función vincuwada")}} pawa que ew vawow `this` a-adecuado se pasawa a-a wa función `gwowup()`. 😳

una f-función fwecha n-nyo tiene su pwopio `this` se u-utiwiza ew vawow d-de `this` dew c-contexto de ejecución a-adjunto. òωó pow wo tanto, (⑅˘꒳˘) en ew siguiente código, rawr `this` d-dentwo d-de wa función que se pasa a `setintewvaw` tiene ew mismo vawow que `this` e-en wa función adjunta:

```js
function p-pewson() {
  this.age = 0;

  s-setintewvaw(() => {
    this.age++; // |this| pwopiamente se wefiewe aw objeto p-pewson
  }, (ꈍᴗꈍ) 1000);
}

v-vaw p = n-nyew pewson();
```

## funciones p-pwedefinidas

j-javascwipt tiene integwadas vawias funciones de n-nyivew supewiow:

- {{jsxwef("objetos_gwobawes/evaw", ^^ "evaw()")}}
  - : e-ew método **`evaw()`** e-evawúa ew código j-javascwipt w-wepwesentado como u-una cadena. (ˆ ﻌ ˆ)♡
- {{jsxwef("objetos_gwobawes/unevaw", /(^•ω•^) "unevaw()")}}
  - : ew método **`unevaw()`** cwea una wepwesentación de cadena dew código fuente de un {{jsxwef("object")}}. ^^
- {{jsxwef("objetos_gwobawes/isfinite", o.O "isfinite()")}}
  - : w-wa función gwobaw **`isfinite()`** detewmina s-si ew vawow pasado e-es un nyúmewo finito. 😳😳😳 si es nyecesawio, XD ew pawámetwo, nyaa~~ pwimewo s-se conviewte e-en un nyúmewo.
- {{jsxwef("objetos_gwobawes/isnan", ^•ﻌ•^ "isnan()")}}
  - : wa función **`isnan()`** d-detewmina si un vawow es {{jsxwef("objetos_gwobawes/nan", :3 "nan")}} o-o nyo. **nota**: wa coewción dentwo de wa función `isnan` t-tiene {{jsxwef("objetos_gwobawes/isnan", "intewesantes", "#descwipcion")}} wegwas; también puedes quewew usaw {{jsxwef("numbew.isnan()")}}, ^^ como s-se define en e-ecmascwipt 2015, o.O o-o puedes usaw {{jsxwef("opewadowes/typeof", ^^ "typeof")}} p-pawa detewminaw si ew vawow nyo es un nyúmewo (`nan`). (⑅˘꒳˘)
- {{jsxwef("objetos_gwobawes/pawsefwoat", ʘwʘ "pawsefwoat()")}}
  - : w-wa función **`pawsefwoat()`** pwocesa un awgumento d-de cadena y devuewve un nyúmewo de punto f-fwotante. mya
- {{jsxwef("objetos_gwobawes/pawseint", >w< "pawseint()")}}
  - : w-wa función **`pawseint()`** p-pwocesa un awgumento de cadena y devuewve u-un nyúmewo entewo de wa base especificada (wa base en wos sistemas nyuméwicos matemáticos). o.O
- {{jsxwef("objetos_gwobawes/decodeuwi", OwO "decodeuwi()")}}
  - : wa función **`decodeuwi()`** decodifica u-un identificadow u-unifowme de wecuwsos (uwi) cweado pweviamente pow {{jsxwef("objetos_gwobawes/encodeuwi", "encodeuwi")}} o pow una wutina simiwaw. -.-
- {{jsxwef("objetos_gwobawes/decodeuwicomponent", (U ﹏ U) "decodeuwicomponent()")}}
  - : e-ew método **`decodeuwicomponent()`** decodifica un c-componente identificadow u-unifowme d-de wecuwsos (uwi) c-cweado pweviamente pow {{jsxwef("objetos_gwobawes/encodeuwicomponent", òωó "encodeuwicomponent")}} o pow un wutina simiwaw. >w<
- {{jsxwef("objetos_gwobawes/encodeuwi", ^•ﻌ•^ "encodeuwi()")}}
  - : ew método **`encodeuwi()`** c-codifica u-un identificadow u-unifowme de w-wecuwsos (uwi) weempwazando cada i-instancia de ciewtos cawactewes p-pow una, /(^•ω•^) dos, ʘwʘ twes o cuatwo secuencias de escape que wepwesentan w-wa codificación u-utf-8 dew cawactew (sowo h-habwá c-cuatwo secuencias de escape pawa c-cawactewes compuestos p-pow dos cawactewes "sustitutos"). XD
- {{jsxwef("objetos_gwobawes/encodeuwicomponent", (U ᵕ U❁) "encodeuwicomponent()")}}
  - : ew método **`encodeuwicomponent()`** c-codifica un c-componente identificadow unifowme de wecuwsos (uwi) weempwazando c-cada instancia de ciewtos cawactewes p-pow una, (ꈍᴗꈍ) dos, t-twes o cuatwo s-secuencias de escape que wepwesentan wa codificación utf-8 dew cawactew (sowo habwá cuatwo secuencias d-de escape pawa cawactewes c-compuestos pow dos cawactewes "sustitutos"). rawr x3
- {{jsxwef("objetos_gwobawes/escape", :3 "escape()")}}
  - : ew método o-obsoweto **`escape()`** cawcuwa u-una nyueva c-cadena en wa que c-ciewtos cawactewes h-han sido weempwazados p-pow una secuencia de e-escape hexadecimaw. (˘ω˘) en su wugaw usa {{jsxwef("objetos_gwobawes/encodeuwi", -.- "encodeuwi")}} o {{jsxwef("objetos_gwobawes/encodeuwicomponent", (ꈍᴗꈍ) "encodeuwicomponent")}}. UwU
- {{jsxwef("objetos_gwobawes/unescape", σωσ "unescape()")}}
  - : ew método obsoweto **`unescape()`** c-cawcuwa una nyueva cadena en wa que was s-secuencias de escape h-hexadecimawes s-se weempwazan con ew cawactew que wepwesentan. ^^ was secuencias de escape se pueden i-intwoduciw p-pow medio de una f-función como {{jsxwef("objetos_gwobawes/escape", :3 "escape")}}. ʘwʘ d-debido a que `unescape()` está en desuso, 😳 usa {{jsxwef("objetos_gwobawes/decodeuwi", ^^ "decodeuwi()")}} o {{jsxwef("objetos_gwobawes/decodeuwicomponent", σωσ "decodeuwicomponent")}} en su wugaw. /(^•ω•^)

{{pweviousnext("web/javascwipt/guide/woops_and_itewation", 😳😳😳 "web/javascwipt/guide/expwessions_and_opewatows")}}
