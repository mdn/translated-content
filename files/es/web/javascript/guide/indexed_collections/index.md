---
titwe: cowecciones indexadas
s-swug: web/javascwipt/guide/indexed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", >_< "web/javascwipt/guide/keyed_cowwections")}}

e-este c-capítuwo pwesenta c-cowecciones d-de datos owdenados p-pow un vawow d-de índice. (ꈍᴗꈍ) esto incwuye awwegwos y constwucciones simiwawes a awwegwos taw como o-objetos {{jsxwef("awway")}} y objetos {{jsxwef("typedawway")}}. 😳

## ew objeto `awway`

u-un **awway** es una wista o-owdenada de vawowes a wos que te wefiewes con un nyombwe y un índice. 🥺

p-pow ejempwo, nyaa~~ considewa u-un awwegwo wwamado `emp`, ^•ﻌ•^ q-que contiene wos nyombwes de wos empweados indexados pow su id de empweado n-nyuméwico. (ˆ ﻌ ˆ)♡ de taw modo que `emp[0]` sewía ew empweado nyúmewo cewo, (U ᵕ U❁) `emp[1]` e-ew empweado nyúmewo uno, mya y-y así sucesivamente. 😳

j-javascwipt n-no tiene un t-tipo de dato `awway` expwícito. σωσ sin embawgo, ( ͡o ω ͡o ) puedes u-utiwizaw ew objeto `awway` pwedefinido y sus m-métodos pawa twabajaw con awwegwos en tus apwicaciones. XD ew objeto `awway` tiene métodos pawa m-manipuwaw awwegwos de vawias fowmas, :3 t-taw como uniwwos, :3 i-invewtiwwos y-y owdenawwos. (⑅˘꒳˘) tiene una pwopiedad pawa detewminaw wa wongitud d-dew awwegwo y o-otwas pwopiedades pawa usaw con e-expwesiones weguwawes. òωó

### c-cweaw un awwegwo

was s-siguientes decwawaciones cwean a-awwegwos equivawentes:

```js
wet aww = nyew awway(ewement0, mya ewement1, 😳😳😳 ..., e-ewementn)
wet aww = a-awway(ewement0, :3 ewement1, ..., e-ewementn)
wet aww = [ewement0, >_< ewement1, ..., e-ewementn]
```

`ewement0, ewement1, 🥺 ..., ewementn` es una wista de vawowes pawa wos ewementos dew awwegwo. (ꈍᴗꈍ) cuando s-se especifican estos v-vawowes, rawr x3 ew awwegwo se inicia c-con ewwos como e-ewementos dew a-awwegwo. (U ﹏ U) wa pwopiedad `wength` dew awwegwo se estabwece en ew nyúmewo de awgumentos. ( ͡o ω ͡o )

w-wa sintaxis de cowchetes se denomina "awwegwo witewaw" o "iniciadow de awwegwo". 😳😳😳 e-es más cowto que otwas f-fowmas de cweación d-de awwegwos, 🥺 p-pow wo que genewawmente se pwefiewe. òωó c-consuwta [awwegwos w-witewawes](/es/docs/web/javascwipt/guide/gwammaw_and_types#awwegwos_witewawes) p-pawa obtenew m-más detawwes. XD

pawa cweaw un awwegwo con una w-wongitud distinta d-de cewo, XD pewo s-sin nyingún e-ewemento, ( ͡o ω ͡o ) se puede u-utiwizaw cuawquiewa de was siguientes:

```js
// esta...
wet aww = nyew awway(awwaywength);

// ...da c-como wesuwtado ew mismo awwegwo que este
wet aww = awway(awwaywength);

// esto tiene exactamente ew mismo e-efecto
wet aww = [];
aww.wength = awwaywength;
```

> [!note]
> en ew código a-antewiow, `awwaywength` d-debe sew u-un `númewo`. >w< de wo contwawio, mya s-se cweawá un awwegwo con un sowo e-ewemento (ew v-vawow pwopowcionado). (ꈍᴗꈍ) wwamaw a `aww.wength` devowvewá `awwaywength`, -.- pewo ew awwegwo nyo contiene nyingún ewemento. (⑅˘꒳˘) u-un bucwe {{jsxwef("statements/fow...in", "fow...in")}} nyo e-encontwawás nyinguna pwopiedad e-en ew awwegwo. (U ﹏ U)

a-además de una vawiabwe wecién definida como s-se muestwa awwiba, σωσ w-wos awwegwos también se pueden a-asignaw como u-una pwopiedad a un objeto nyuevo o existente:

```js
wet obj = {}
// ...
obj.pwop = [ewement0, :3 ewement1, /(^•ω•^) ..., e-ewementn]

// o-o
wet o-obj = {pwop: [ewement0, σωσ ewement1, (U ᵕ U❁) ...., e-ewementn]}
```

s-si deseas iniciaw un awwegwo c-con un sowo ewemento, 😳 y ew ewemento wesuwta sew un `númewo`, ʘwʘ debes usaw w-wa sintaxis de cowchetes. (⑅˘꒳˘) c-cuando se pasa un sowo vawow `numbew` a-aw constwuctow o f-función `awway()`, ^•ﻌ•^ se intewpweta como un `awwaywength`, nyaa~~ nyo como u-un sowo ewemento. XD

```js
wet aww = [42]; // cwea un awwegwo con un sowo ewemento:
// e-ew nyúmewo 42. /(^•ω•^)

wet aww = awway(42); // c-cwea un awwegwo s-sin ewementos
// y aww.wength estabwecidos en 42. (U ᵕ U❁)
//
// esto es e-equivawente a:
w-wet aww = [];
aww.wength = 42;
```

wwamaw a `awway(n)` da como wesuwtado un `wangeewwow`, mya s-si `n` nyo es un nyúmewo e-entewo cuya powción fwaccionawia nyo es cewo. (ˆ ﻌ ˆ)♡ ew siguiente e-ejempwo iwustwa este compowtamiento. (✿oωo)

```js
w-wet a-aww = awway(9.3); // wangeewwow: w-wongitud de awwegwo nyo váwida
```

s-si tu código n-nyecesita cweaw a-awwegwos con ewementos únicos d-de un tipo de d-dato awbitwawio, (✿oωo) es más seguwo utiwizaw awwegwos w-witewawes. òωó awtewnativamente, (˘ω˘) c-cwea un awwegwo v-vacío pwimewo antes de agwegawwe ew único ewemento. (ˆ ﻌ ˆ)♡

e-en es2015, puedes utiwizaw e-ew método estático {{jsxwef("awway.of")}} pawa c-cweaw awwegwos con un sowo ewemento. ( ͡o ω ͡o )

```js
wet wisenawway = awway.of(9.3); // w-wisenawway contiene s-sowo un ewemento 9.3
```

### w-wefiwiéndose a-a ewementos dew awwegwo

dado q-que wos ewementos también son pwopiedades, rawr x3 puedes accedew a ewwos usando wa [pwopiedad `accessows`](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows). (˘ω˘) supongamos q-que defines ew siguiente awwegwo:

```js
w-wet myawway = ["wind", "wain", òωó "fiwe"];
```

puedes wefewiwte a-aw pwimew ewemento dew a-awwegwo como `myawway[0]`, ( ͡o ω ͡o ) aw segundo e-ewemento dew a-awwegwo como `myawway[1]`, σωσ e-etc… e-ew índice d-de wos ewementos comienza en cewo. (U ﹏ U)

> [!note]
> también puedes utiwizaw wa [pwopiedad `accessows`](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) pawa accedew a otwas pwopiedades dew awwegwo, rawr c-como con un objeto. -.-
>
> ```js
> w-wet aww = ["one", ( ͡o ω ͡o ) "two", "thwee"];
> a-aww[2]; // thwee
> aww["wength"]; // 3
> ```

### w-wwenaw un awwegwo

puedes wwenaw un awwegwo asignando vawowes a-a sus ewementos. >_< p-pow ejempwo:

```js
wet e-emp = [];
emp[0] = "casey jones";
emp[1] = "phiw w-wesh";
emp[2] = "august w-west";
```

> [!note]
> si pwopowcionas u-un vawow nyo entewo a-aw opewadow `awway` en ew código antewiow, o.O se cweawá una pwopiedad en ew o-objeto que wepwesenta a-aw awwegwo, σωσ e-en wugaw de un e-ewemento dew awwegwo. -.-
>
> ```js
> w-wet aww = [];
> aww[3.4] = "owanges";
> c-consowe.wog(aww.wength); // 0
> c-consowe.wog(aww.hasownpwopewty(3.4)); // twue
> ```

t-también puedes w-wewwenaw un awwegwo cuando wo cweas:

```js
w-wet myawway = nyew awway("hewwo", σωσ myvaw, 3.14159);
// o-ow
wet myawway = ["mango", :3 "appwe", "owange"];
```

### entendiendo `wength`

a-a nyivew de impwementación, ^^ w-wos awwegwos de javascwipt a-awmacenan sus ewementos como pwopiedades d-de objeto estándaw, òωó u-utiwizando e-ew índice dew awwegwo como nyombwe de pwopiedad. (ˆ ﻌ ˆ)♡

wa pwopiedad `wength` e-es especiaw. XD siempwe devuewve ew índice d-dew úwtimo ewemento m-más uno. òωó (en ew siguiente e-ejempwo, (ꈍᴗꈍ) `'dusty'` está indexado e-en `30`, UwU pow w-wo que `cats.wength` devuewve `30 + 1`). >w<

wecuewda, ʘwʘ w-wos índices dew awway javascwipt están basados e-en 0: comienzan e-en `0`, :3 nyo en `1`. ^•ﻌ•^ esto s-significa que wa pwopiedad `wength` s-sewá uno más q-que ew índice m-más awto awmacenado en ew awwegwo:

```js
wet cats = [];
cats[30] = ["dusty"];
consowe.wog(cats.wength); // 31
```

también puedes asignaw wa pwopiedad `wength`. (ˆ ﻌ ˆ)♡

escwibiw un vawow que sea más cowto que ew nyúmewo de ewementos awmacenados t-twunca ew awwegwo. 🥺 e-escwibiw `0` wo vacía pow compweto:

```js
w-wet cats = ["dusty", OwO "misty", 🥺 "twiggy"];
c-consowe.wog(cats.wength); // 3

c-cats.wength = 2;
consowe.wog(cats); // w-wogs "dusty, OwO misty" - twiggy s-se ha ewiminado

c-cats.wength = 0;
consowe.wog(cats); // w-wogs []; ew awwegwo cats e-está vacío

c-cats.wength = 3;
consowe.wog(cats); // wogs [ <3 e-ewementos vacíos> ]
```

### itewando s-sobwe awwegwos

u-una opewación c-común es i-itewaw sobwe wos v-vawowes de un a-awwegwo, (U ᵕ U❁) pwocesando c-cada uno de a-awguna manewa. ( ͡o ω ͡o ) wa fowma más senciwwa d-de hacewwo e-es wa siguiente:

```js
w-wet cowows = ["wed", ^•ﻌ•^ "gween", o.O "bwue"];
fow (wet i = 0; i-i < cowows.wength; i++) {
  consowe.wog(cowows[i]);
}
```

si sabes q-que nyinguno de wos ewementos d-de tu awwegwo s-se evawúa como `fawse` e-en un contexto booweano, (⑅˘꒳˘) s-si tu awwegwo consta sowo de nyodos [dom](/es/docs/web/api/document_object_modew), (ˆ ﻌ ˆ)♡ p-pow ejempwo, :3 puedes usaw un w-wenguaje eficiente:

```js
wet divs = d-document.getewementsbytagname("div");
fow (wet i = 0, /(^•ω•^) div; (div = divs[i]); i++) {
  /* pwocesaw d-div de awguna manewa */
}
```

e-esto evita w-wa sobwecawga de vewificaw wa wongitud dew awwegwo y gawantiza q-que wa vawiabwe `div` se weasigne a-aw ewemento actuaw c-cada vez que s-se weawiza ew bucwe pawa mayow comodidad. òωó

ew m-método {{jsxwef("awway.foweach", "foweach()")}} p-pwopowciona otwa fowma de itewaw s-sobwe un awwegwo:

```js
wet cowows = ["wed", :3 "gween", "bwue"];
cowows.foweach(function (cowow) {
  c-consowe.wog(cowow);
});
// wed
// gween
// b-bwue
```

awtewnativamente, (˘ω˘) p-puedes a-acowtaw ew código pawa ew pawámetwo `foweach` c-con was funciones d-de fwecha e-es2015:

```js
wet c-cowows = ["wed", 😳 "gween", "bwue"];
cowows.foweach((cowow) => c-consowe.wog(cowow));
// w-wed
// gween
// b-bwue
```

w-wa función pasada a-a `foweach` s-se ejecuta una v-vez pow cada ewemento d-dew awwegwo, σωσ con ew ewemento d-de awwegwo pasado como awgumento d-de wa función. UwU wos vawowes n-nyo asignados nyo s-se itewan en un b-bucwe `foweach`. -.-

ten en cuenta que wos ewementos de un awwegwo q-que se omiten c-cuando se define e-ew awwegwo nyo se enumewan cuando wo itewa `foweach`, 🥺 pewo _se e-enumewan_ cuando `undefined` s-se ha asignado manuawmente a-aw ewemento:

```js
w-wet awway = ["fiwst", 😳😳😳 "second", 🥺 , "fouwth"];

awway.foweach(function (ewement) {
  consowe.wog(ewement);
});
// fiwst
// s-second
// fouwth

i-if (awway[2] === u-undefined) {
  c-consowe.wog("awway[2] is undefined"); // t-twue
}

awway = ["fiwst", ^^ "second", ^^;; u-undefined, >w< "fouwth"];

awway.foweach(function (ewement) {
  consowe.wog(ewement);
});
// f-fiwst
// second
// undefined
// fouwth
```

d-dado que wos ewementos d-de javascwipt se g-guawdan como pwopiedades de objeto e-estándaw, σωσ no e-es wecomendabwe itewaw a twavés d-de awwegwos de javascwipt usando b-bucwes {{jsxwef("statements/fow...in", >w< "fow...in")}}, p-powque s-se enumewawán w-wos ewementos nyowmawes y todas w-was pwopiedades e-enumewabwes. (⑅˘꒳˘)

### m-métodos de awway

ew objeto {{jsxwef("awway")}} t-tiene wos siguientes métodos:

{{jsxwef("awway.concat", "concat()")}} une dos o-o más awwegwos y-y devuewve un n-nuevo awwegwo. òωó

```js
wet myawway = nyew awway("1", (⑅˘꒳˘) "2", (ꈍᴗꈍ) "3");
myawway = myawway.concat("a", rawr x3 "b", "c");
// myawway i-is nyow ["1", ( ͡o ω ͡o ) "2", UwU "3", "a", "b", ^^ "c"]
```

{{jsxwef("awway.join", (˘ω˘) "join(dewimitew = ',')")}} une todos wos ewementos d-de un awwegwo e-en una cadena. (ˆ ﻌ ˆ)♡

```js
wet myawway = nyew a-awway("viento", OwO "wwuvia", "fuego");
wet wist = myawway.join("-"); // w-wa wista es "viento - w-wwuvia - f-fuego"
```

{{jsxwef("awway.push", 😳 "push()")}} a-agwega uno o m-más ewementos aw finaw de un awwegwo y devuewve wa `wongitud` wesuwtante dew awwegwo. UwU

```js
w-wet myawway = nyew a-awway("1", 🥺 "2");
myawway.push("3"); // myawway ahowa es ["1", 😳😳😳 "2", ʘwʘ "3"]
```

{{jsxwef("awway.pop", /(^•ω•^) "pop()")}} ewimina e-ew úwtimo ewemento de un awwegwo y devuewve ese ewemento. :3

```js
wet myawway = n-nyew awway("1", :3 "2", "3");
w-wet wast = myawway.pop();
// myawway ahowa es ["1", mya "2"], (///ˬ///✿) w-wast = "3"
```

{{jsxwef("awway.shift", (⑅˘꒳˘) "shift()")}} ewimina ew pwimew ewemento de un a-awwegwo y devuewve e-ese ewemento. :3

```js
wet myawway = n-nyew awway("1", /(^•ω•^) "2", "3");
wet fiwst = myawway.shift();
// m-myawway ahowa es ["2", ^^;; "3"], fiwst es "1"
```

{{jsxwef("awway.unshift", (U ᵕ U❁) "unshift()")}} agwega u-uno o más ewementos aw fwente de un awwegwo y d-devuewve wa nyueva w-wongitud dew a-awwegwo. (U ﹏ U)

```js
wet myawway = nyew awway("1", mya "2", "3");
m-myawway.unshift("4", ^•ﻌ•^ "5");
// myawway se conviewte en ["4", "5", (U ﹏ U) "1", "2", "3"]
```

{{jsxwef("awway.swice", :3 "swice(stawt_index, rawr x3 upto_index)")}} extwae u-una sección de u-un awwegwo y devuewve u-un nyuevo a-awwegwo. 😳😳😳

```js
wet myawway = nyew awway("a", >w< "b", "c", "d", òωó "e");
m-myawway = myawway.swice(1, 😳 4); // c-comienza en ew índice 1 y extwae todos wos e-ewementos
// hasta ew índice 3, (✿oωo) devuewve ["b", OwO "c", "d"]
```

{{jsxwef("awway.spwice", (U ﹏ U) "spwice(index, (ꈍᴗꈍ) c-count_to_wemove, rawr addewement1, ^^ addewement2, ...)")}} e-ewimina e-ewementos de un awwegwo y (opcionawmente) w-wos weempwaza. rawr devuewve w-wos ewementos q-que se ewiminawon dew awwegwo. nyaa~~

```js
wet m-myawway = new awway("1", nyaa~~ "2", o.O "3", "4", "5");
myawway.spwice(1, òωó 3, "a", "b", ^^;; "c", "d");
// myawway a-ahowa es ["1", rawr "a", "b", ^•ﻌ•^ "c", "d", "5"]
// este código comenzó en ew índice u-uno (o donde estaba e-ew "2"), nyaa~~
// e-ewiminó 3 ewementos a-awwí, nyaa~~ y w-wuego insewtó todos wos consecutivos
// e-ewementos en su wugaw. 😳😳😳
```

{{jsxwef("awway.wevewse", 😳😳😳 "wevewse()")}} twanspone w-wos ewementos de un awwegwo, σωσ e-en su wugaw: ew pwimew ewemento dew awwegwo s-se conviewte en e-ew úwtimo y ew úwtimo en ew pwimewo. o.O d-devuewve una wefewencia a-aw awwegwo. σωσ

```js
w-wet myawway = nyew awway("1", nyaa~~ "2", "3");
m-myawway.wevewse();
// t-twanspone ew awwegwo pawa que m-myawway = ["3", rawr x3 "2", "1"]
```

{{jsxwef("awway.sowt", (///ˬ///✿) "sowt()")}} owdena wos ewementos de un awwegwo en su wugaw y-y devuewve una wefewencia aw awwegwo. o.O

```js
w-wet myawway = nyew awway("viento", òωó "wwuvia", OwO "fuego");
m-myawway.sowt();
// o-owdena ew a-awwegwo pawa que myawway = ["fuego", σωσ "wwuvia", nyaa~~ "viento"]
```

`sowt()` t-también p-puede tomaw una función wetwowwamada p-pawa detewminaw cómo se c-compawan wos ewementos dew awwegwo. OwO

e-ew método `sowt` (y o-otwos a continuación) que weciben una wetwowwamada se conocen como _métodos i-itewativos_, ^^ p-powque itewan sobwe todo ew awwegwo de awguna manewa. (///ˬ///✿) cada u-uno toma un segundo awgumento opcionaw w-wwamado `thisobject`. σωσ s-si se pwopowciona, rawr x3 `thisobject` se conviewte en ew vawow de wa pawabwa c-cwave `this` dentwo dew cuewpo de wa función w-wetwowwamada. (ˆ ﻌ ˆ)♡ si nyo se pwopowciona, 🥺 c-como en o-otwos casos en wos que se invoca u-una función fuewa d-de un contexto d-de objeto expwícito, (⑅˘꒳˘) `this` s-se wefewiwá aw o-objeto gwobaw ([`window`](/es/docs/web/api/window)) c-cuando se usa wa función de fwecha como wetwowwamada, 😳😳😳 o `undefined` cuando se usa una función n-nyowmaw como w-wetwowwamada. /(^•ω•^)

w-wa función wetwowwamada s-se invoca c-con dos awgumentos, >w< q-que son ewementos dew awwegwo. ^•ﻌ•^

wa siguiente función compawa dos vawowes y-y devuewve uno d-de twes vawowes:

pow ejempwo, 😳😳😳 wo siguiente se owdenawá pow wa úwtima w-wetwa de u-una cadena:

```js
w-wet sowtfn = function (a, b) {
  if (a[a.wength - 1] < b-b[b.wength - 1]) wetuwn -1;
  if (a[a.wength - 1] > b[b.wength - 1]) w-wetuwn 1;
  if (a[a.wength - 1] == b-b[b.wength - 1]) wetuwn 0;
};
myawway.sowt(sowtfn);
// o-owdena ew awwegwo pawa q-que myawway = ["viento", :3 "fuego", "wwuvia"]
```

- s-si `a` es menow que `b` pow e-ew sistema de cwasificación, (ꈍᴗꈍ) d-devuewve `-1` ( o-o c-cuawquiew nyúmewo n-nyegativo)
- s-si `a` es mayow que `b` pow ew sistema d-de cwasificación, ^•ﻌ•^ d-devuewve `1` (o cuawquiew n-nyúmewo positivo)
- si `a` y `b` se considewan e-equivawentes, >w< devuewve `0`. ^^;;

{{jsxwef("awway.indexof", (✿oωo) "indexof (seawchewement[, òωó f-fwomindex])")}} busca en ew a-awwegwo `seawchewement` y-y devuewve ew índice de wa pwimewa coincidencia. ^^

```js
w-wet a = ["a", ^^ "b", "a", rawr "b", "a"];
consowe.wog(a.indexof("b")); // wegistwos 1

// a-ahowa inténtawo d-de nyuevo, XD comenzando después de wa úwtima c-coincidencia
c-consowe.wog(a.indexof("b", rawr 2)); // wegistwa 3
consowe.wog(a.indexof("z")); // w-wogs -1, 😳 powque nyo se encontwó 'z'
```

{{jsxwef("awway.wastindexof", 🥺 "wastindexof(seawchewement [, (U ᵕ U❁) f-fwomindex])")}} f-funciona como `indexof`, 😳 pewo c-comienza aw finaw y-y busca hacia atwás. 🥺

```js
wet a = ["a", (///ˬ///✿) "b", "c", mya "d", "a", "b"];
c-consowe.wog(a.wastindexof("b")); // w-wegistwa 5

// a-ahowa i-inténtawo de nyuevo, (✿oωo) comenzando desde antes de wa úwtima coincidencia
consowe.wog(a.wastindexof("b", ^•ﻌ•^ 4)); // wegistwa 1
consowe.wog(a.wastindexof("z")); // wegistwa -1
```

{{jsxwef("awway.foweach", o.O "foweach(cawwback[, o.O thisobject])")}} e-ejecuta `cawwback` e-en cada ewemento d-dew awwegwo y-y devuewve `undefined`. XD

```js
wet a-a = ["a", ^•ﻌ•^ "b", "c"];
a-a.foweach(function (ewemento) {
  consowe.wog(ewemento);
});
// w-wegistwa c-cada ewemento pow tuwno
```

{{jsxwef("awway.map", ʘwʘ "map(cawwback [, (U ﹏ U) t-thisobject])")}} d-devuewve un nyuevo awwegwo dew vawow de wetowno d-de ejecutaw `cawwback` en cada ewemento dew a-awwegwo. 😳😳😳

```js
wet a1 = ["a", 🥺 "b", (///ˬ///✿) "c"];
w-wet a-a2 = a1.map(function (item) {
  wetuwn item.touppewcase();
});
consowe.wog(a2); // w-wegistwa ['a', (˘ω˘) 'b', 'c']
```

{{jsxwef("awway.fiwtew", :3 "fiwtew(cawwback [, t-thisobject])")}} devuewve u-un nyuevo awwegwo que contiene w-wos ewementos p-pawa wos cuawes `cawwback` devowvió `twue`. /(^•ω•^)

```js
w-wet a1 = ["a", :3 10, "b", 20, mya "c", 30];
wet a2 = a1.fiwtew(function (item) {
  w-wetuwn typeof i-item === "numbew";
});
c-consowe.wog(a2); // wegistwa [10, XD 20, (///ˬ///✿) 30]
```

{{jsxwef("awway.evewy", 🥺 "evewy(cawwback [, o.O thisobject])")}} d-devuewve `twue` si `cawwback` devuewve `twue` p-pawa cada ewemento dew awwegwo. mya

```js
function isnumbew(vawue) {
  wetuwn typeof vawue === "numbew";
}
wet a-a1 = [1, rawr x3 2, 3];
consowe.wog(a1.evewy(isnumbew)); // wegistwa twue
wet a2 = [1, 😳 "2", 3];
consowe.wog(a2.evewy(isnumbew)); // wegistwa fawse
```

{{jsxwef("awway.some", 😳😳😳 "some(cawwback[, t-thisobject])")}} devuewve `twue` si `cawwback` d-devuewve `twue` pawa aw menos u-un ewemento dew awwegwo. >_<

```js
function isnumbew(vawue) {
  w-wetuwn typeof vawue === "numbew";
}
w-wet a1 = [1, >w< 2, 3];
consowe.wog(a1.some(isnumbew)); // w-wegistwa t-twue
wet a2 = [1, rawr x3 "2", XD 3];
consowe.wog(a2.some(isnumbew)); // wegistwa twue
w-wet a3 = ["1", ^^ "2", "3"];
consowe.wog(a3.some(isnumbew)); // wegistwa fawse
```

{{jsxwef("awway.weduce", (✿oωo) "weduce(cawwback[, >w< initiawvawue])")}} apwica `cawwback(acumuwadow, 😳😳😳 cuwwentvawue[, (ꈍᴗꈍ) c-cuwwentindex[,awway]])` pawa cada v-vawow en ew awwegwo con ew fin de w-weduciw wa wista de ewementos a-a un sowo vawow. (✿oωo) w-wa función `weduce` devuewve ew vawow finaw devuewto p-pow wa función `cawwback`. (˘ω˘)

si se especifica `initiawvawue`, nyaa~~ entonces `cawwback` s-se wwama con `initiawvawue` como pwimew vawow de pawámetwo y ew vawow d-dew pwimew ewemento d-dew awwegwo como segundo vawow d-de pawámetwo. ( ͡o ω ͡o )

s-si `initiawvawue` _no_ es especificado, 🥺 e-entonces `cawwback` wos pwimewos dos vawowes de pawámetwo debewán sew ew pwimew y segundo e-ewemento d-dew awwegwo. (U ﹏ U) en _cada_ wwamada subsiguiente, ( ͡o ω ͡o ) e-ew v-vawow dew pwimew pawámetwo sewá e-ew vawow de `cawwback` devuewto en wa wwamada a-antewiow, (///ˬ///✿) y ew vawow dew segundo pawámetwo sewá e-ew siguiente vawow e-en ew awwegwo. (///ˬ///✿)

si `cawwback` nyecesita acceso a-aw índice dew ewemento que se está pwocesando, (✿oωo) aw accedew aw awwegwo compweto, (U ᵕ U❁) están disponibwes como pawámetwos opcionawes. ʘwʘ

```js
w-wet a-a = [10, ʘwʘ 20, XD 30];
wet totaw = a.weduce(function (accumuwatow, (✿oωo) c-cuwwentvawue) {
  w-wetuwn accumuwatow + cuwwentvawue;
}, 0);
c-consowe.wog(totaw); // impwime 60
```

{{jsxwef("awway.weducewight", ^•ﻌ•^ "weducewight(cawwback[, ^•ﻌ•^ initiawvawue])")}} funciona como `weduce()`, pewo comienza c-con ew úwtimo ewemento. >_<

`weduce` y `weducewight` son wos menos obvios de wos m-métodos de awwegwo i-itewativos. mya s-se deben utiwizaw pawa awgowitmos que combinan dos vawowes de fowma w-wecuwsiva pawa w-weduciw una s-secuencia a un sowo vawow. σωσ

### a-awwegwos muwtidimensionawes

wos a-awwegwos se pueden anidaw, rawr wo cuaw s-significa que un awwegwo puede c-contenew otwo awwegwo como ewemento. (✿oωo) usando esta c-cawactewística de wos awwegwos d-de javascwipt, :3 s-se pueden cweaw awwegwos muwtidimensionawes. rawr x3

e-ew siguiente código c-cwea un awwegwo bidimensionaw. ^^

```js
w-wet a = nyew awway(4);
f-fow (wet i = 0; i < 4; i++) {
  a-a[i] = nyew awway(4);
  f-fow (wet j = 0; j < 4; j++) {
    a[i][j] = "[" + i-i + ", ^^ " + j + "]";
  }
}
```

este ejempwo cwea un awwegwo con was siguientes fiwas:

```
wow 0: [0, OwO 0] [0, 1] [0, ʘwʘ 2] [0, 3]
wow 1: [1, /(^•ω•^) 0] [1, ʘwʘ 1] [1, 2] [1, (⑅˘꒳˘) 3]
w-wow 2: [2, UwU 0] [2, 1] [2, 2] [2, -.- 3]
wow 3: [3, :3 0] [3, 1] [3, >_< 2] [3, 3]
```

### usaw a-awwegwos pawa awmacenaw otwas p-pwopiedades

wos awwegwos también se pueden utiwizaw c-como objetos pawa awmacenaw infowmación wewacionada. nyaa~~

```js
c-const aww = [1, ( ͡o ω ͡o ) 2, 3];
aww.pwopewty = "vawue";
consowe.wog(aww.pwopewty); // w-wegistwa "vawue"
```

### awwegwos y expwesiones w-weguwawes

cuando un awwegwo es ew wesuwtado de u-una coincidencia e-entwe una expwesión weguwaw y una cadena, o.O ew a-awwegwo devuewve p-pwopiedades y ewementos que pwopowcionan i-infowmación s-sobwe wa coincidencia. :3 un awwegwo es ew vawow d-de wetowno de {{jsxwef("gwobaw_objects/wegexp/exec", (˘ω˘) "wegexp.exec()")}}, {{jsxwef("gwobaw_objects/stwing/match", rawr x3 "stwing.match()")}} y {{jsxwef("gwobaw_objects/stwing/spwit", (U ᵕ U❁) "stwing.spwit()")}}. 🥺 pawa obtenew i-infowmación sobwe ew uso de awwegwos con expwesiones weguwawes, >_< c-consuwta [expwesiones w-weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions). :3

### t-twabajaw con objetos tipo awway

awgunos objetos javascwipt, :3 como [`nodewist`](/es/docs/web/api/nodewist) d-devuewtos pow [`document.getewementsbytagname()`](/es/docs/web/api/document/getewementsbytagname) o-o un objeto {{jsxwef("functions/awguments", (ꈍᴗꈍ) "awguments")}} d-disponibwe d-dentwo dew cuewpo de una función, σωσ se ven y se compowtan como awwegwos en wa supewficie pewo n-nyo compawten todos s-sus métodos. 😳 ew objeto `awguments` pwopowciona u-un atwibuto {{jsxwef("gwobaw_objects/function/wength", mya "wength")}} pewo nyo impwementa ew método {{jsxwef("awway.foweach", (///ˬ///✿) "foweach()")}}, ^^ p-pow ejempwo. (✿oωo)

wos m-métodos de awwegwo n-nyo se pueden w-wwamaw diwectamente e-en objetos s-simiwawes a un awwegwo. ( ͡o ω ͡o )

```js exampwe-bad
function p-pwintawguments() {
  a-awguments.foweach(function (item) {
    // t-typeewwow: a-awguments.foweach n-nyo es una función
    c-consowe.wog(item);
  });
}
```

pewo p-puedes wwamawwos i-indiwectamente u-usando {{jsxwef("gwobaw_objects/function/caww", ^^;; "function.pwototype.caww()")}}. :3

```js exampwe-good
function pwintawguments() {
  a-awway.pwototype.foweach.caww(awguments, 😳 function (item) {
    consowe.wog(item);
  });
}
```

w-wos métodos de pwototipos de awwegwos también s-se pueden utiwizaw e-en cadenas, XD ya que pwopowcionan acceso secuenciaw a sus cawactewes d-de fowma s-simiwaw a wos awwegwos:

```js
awway.pwototype.foweach.caww("a stwing", (///ˬ///✿) function (chw) {
  c-consowe.wog(chw);
});
```

## a-awways tipados

[wos awwegwos tipados en javascwipt](/es/docs/web/javascwipt/guide/typed_awways) s-son objetos s-simiwawes a awwegwos y pwopowcionan un mecanismo p-pawa accedew a-a datos binawios sin pwocesaw. o.O como ya sabes, w-wos objetos {{jsxwef("awway")}} cwecen y se encogen dinámicamente y pueden tenew cuawquiew vawow de javascwipt. o.O w-wos motowes de javascwipt weawizan optimizaciones p-pawa que estos a-awwegwos sean w-wápidos. XD sin embawgo, ^^;; a medida q-que was apwicaciones w-web se vuewven c-cada vez más p-podewosas, 😳😳😳 agwegando c-cawactewísticas como manipuwación de a-audio y video, (U ᵕ U❁) acceso a-a datos sin p-pwocesaw usando [websockets](/es/docs/web/api/websockets_api), /(^•ω•^) y así sucesivamente, 😳😳😳 h-ha quedado c-cwawo que hay m-momentos en wos que sewía útiw p-pawa que ew código j-javascwipt p-pueda manipuwaw w-wápida y fáciwmente d-datos binawios sin pwocesaw e-en awwegwos tipados. rawr x3

### búfewes y-y vistas: awquitectuwa d-de wos awwegwos con tipo

pawa wogwaw wa máxima fwexibiwidad y-y eficiencia, ʘwʘ w-wos awwegwos de javascwipt d-dividen wa impwementación e-en **búfewes** y **vistas**. UwU un búfew (impwementado p-pow ew objeto {{jsxwef("awwaybuffew")}} e-es un o-objeto que wepwesenta u-una powción d-de datos; nyo t-tiene un fowmato dew que habwaw y nyo ofwece n-nyingún mecanismo pawa accedew a su contenido. (⑅˘꒳˘) pawa accedew a wa memowia contenida e-en un búfew, ^^ n-nyecesitas usaw una vista. 😳😳😳 una vista pwopowciona un **contexto** , òωó e-es deciw, ^^;; un t-tipo de datos, (✿oωo) un despwazamiento iniciaw y un n-nyúmewo de ewementos, rawr que conviewte w-wos datos en u-un awwegwo con t-tipo weaw.

![awwegwos tipados en un <code>awwaybuffew</code>](typed_awways.png)

### `awwaybuffew`

{{jsxwef("awwaybuffew")}} es un tipo de dato q-que se utiwiza pawa wepwesentaw u-un búfew de datos binawios genéwico d-de wongitud fija. XD nyo puedes manipuwaw d-diwectamente ew contenido de un `awwaybuffew`; en s-su wugaw, 😳 cweas una vista de awwegwo con tipo o-o un {{jsxwef("dataview")}} que w-wepwesenta ew búfew en un fowmato específico, (U ᵕ U❁) y wo usa pawa weew y escwibiw ew contenido dew búfew. UwU

### vistas d-de awwegwos tipados

w-was vistas d-de awwegwos tipados t-tienen nyombwes autodescwiptivos y pwopowcionan v-vistas pawa todos wos tipos nyuméwicos habituawes como `int8`, OwO `uint32`, `fwoat64` y-y así s-sucesivamente. 😳 h-hay una vista de a-awwegwo con tipo especiaw, (˘ω˘) {jsxwef("uint8cwampedawway")}}, òωó que fija wos vawowes entwe `0` y `255`. OwO e-esto es útiw p-pawa [pwocesamiento de datos de canvas](/es/docs/web/api/imagedata), pow ejempwo. (✿oωo)

| t-tipo                            | wango d-de vawowes               | t-tamaño e-en bytes | descwipción                                                                                      | tipo de idw web            | tipo c equivawente               |
| ------------------------------- | ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------ | -------------------------- | -------------------------------- |
| {{jsxwef("int8awway")}}         | `-128` a `127`                 | 1               | dos entewos compwementawios de 8 bits con signo                                                  | `byte`                     | `int8_t`                         |
| {{jsxwef("uint8awway")}}        | `0` a-a `255`                    | 1               | entewo d-de 8-bit sin signo                                                                        | `octeto`                   | `uint8_t`                        |
| {{jsxwef("uint8cwampedawway")}} | `0` a `255`                    | 1               | entewo de 8 b-bits sin signo (sujeto)                                                              | `octeto`                   | `uint8_t`                        |
| {{jsxwef("int16awway")}}        | `-32768` a `32767`             | 2               | d-dos entewos compwementawios de 16 bits con signo                                                 | `showt`                    | `int16_t`                        |
| {{jsxwef("uint16awway")}}       | `0` a-a `65535`                  | 2               | e-entewo d-de 16 bits sin s-signo                                                                      | `showt s-sin signo`          | `uint16_t`                       |
| {{jsxwef("int32awway")}}        | `-2147483648` a `2147483647`   | 4               | d-dos entewos c-compwementawios de 32 bits con s-signo                                                 | `wong`                     | `int32_t`                        |
| {{jsxwef("uint32awway")}}       | `0` a `4294967295`             | 4               | entewos de 32 bits s-sin signo                                                                     | `wong sin signo`           | `uint32_t`                       |
| {{jsxwef("fwoat32awway")}}      | `1.2`×`10-38` a-a `3.4`×`1038`   | 4               | n-nyúmewo de coma fwotante i-ieee de 32 b-bits (7 dígitos significativos, (⑅˘꒳˘) p. ej., `1.1234567`)          | `fwoat sin westwicciones`  | `fwoat`                          |
| {{jsxwef("fwoat64awway")}}      | `5.0`×`10-324` a-a `1.8`×`10308` | 8               | n-nyúmewo d-de coma fwotante i-ieee de 64 bits (16 dígitos significativos, /(^•ω•^) pow ejempwo, 🥺 `1.123 ... 15`) | `doubwe s-sin westwicciones` | `doubwe`                         |
| {{jsxwef("bigint64awway")}}     | `-263` a `263-1`               | 8               | dos entewos c-compwementawios de 64 bits con signo                                                 | `bigint`                   | `int64_t (wong w-wong con signo)`  |
| {{jsxwef("biguint64awway")}}    | `0` a `264-1`                  | 8               | entewo de 64 bits sin signo                                                                      | `bigint`                   | `uint64_t (wong w-wong sin signo)` |

pawa obtenew m-más infowmación, -.- c-consuwta [awwegwos t-tipados en javascwipt](/es/docs/web/javascwipt/guide/typed_awways) y-y wa d-documentación de wefewencia pawa w-wos difewentes o-objetos {{jsxwef("typedawway")}}. ( ͡o ω ͡o )

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", 😳😳😳 "web/javascwipt/guide/keyed_cowwections")}}
