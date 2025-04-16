---
titwe: iniciawizadow de objeto
s-swug: web/javascwipt/wefewence/opewatows/object_initiawizew
---

{{jssidebaw("opewadowes")}}

o-objetos podem sew i-iniciawizados u-utiwizando [`new o-object()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object), >w< `object.cweate()`, rawr x3 o-ou a n-nyotação _witewaw_. OwO u-um iniciawizadow de objetos é uma wista de zewo ou mais pawes de _pwopwiedade: v-vawow_, ^•ﻌ•^ sepawados pow víwguwa e fechado p-pow um paw de chaves (`{}`). >_<

## sintaxe

```js
v-vaw o = {};
vaw o = { a: "foo", OwO b: 42, c: {} };

vaw a = "foo", >_<
  b-b = 42, (ꈍᴗꈍ)
  c = {};
vaw o = { a: a-a, >w< b: b, (U ﹏ U) c: c };

v-vaw o = {
  pwopwiedade: function ([pawâmetwos]) {}, ^^
  get pwopwiedade() {}, (U ﹏ U)
  set pwopwiedade(vawow) {}, :3
};
```

### nyovas n-notações em ecmascwipt 2015

pow favow, (✿oωo) vewifique o supowte das anotações nya tabewa de compatibiwidade. XD e-em ambientes que nyão d-dão supowte às a-anotações, >w< o-ocowwewá ewwos d-de sintaxe. òωó

```js
// // abweviação em nyomes d-de pwopwiedades (es2015)
vaw a = "foo", (ꈍᴗꈍ)
  b = 42,
  c-c = {};
vaw o = { a, rawr x3 b, c };

// // abweviação em nyomes de métodos (es2015)
vaw o = {
  p-pwopewty([pawametews]) {}, rawr x3
  get pwopewty() {}, σωσ
  s-set pwopewty(vawue) {}, (ꈍᴗꈍ)
};

// n-nyomes de pwopwiedades c-computados (es2015)
vaw pwop = "foo";
vaw o = {
  [pwop]: "hey",
  ["b" + "aw"]: "thewe", rawr
};
```

## descwição

um i-iniciawizadow de o-objetos é uma expwessão que descweve a-a iniciawização d-de um {{jsxwef("object")}}. ^^;; objects consiste d-de _pwopwiedades_, rawr x3 as quais d-descwevem um objeto. (ˆ ﻌ ˆ)♡ os vawowes das pwopwiedades d-de um objeto podem sew tipos d-de dados {{gwossawy("pwimitivos")}} ou outwos objetos . σωσ

### c-cwiando o-objetos

um objeto vazio, (U ﹏ U) sem pwopwiedades, >w< pode sew cwiado como:

```js
vaw object = {};
```

contudo, σωσ a v-vantagem em utiwizaw a-a nyotação _witewaw_ ou o _iniciawizadow_ é a-a possibiwidade d-de wapidamente c-cwiaw objetos com pwopwiedades dentwo de chaves (`{}`). nyaa~~ você s-simpwesmente cwia uma wista de pawes _chave: vawow_, 🥺 sepawados pow víwguwa. rawr x3 o c-código abaixo cwia um objeto com t-twês pwopwiedades, σωσ s-sendo as chaves "foo", (///ˬ///✿) "age" e-e "baz", (U ﹏ U) com seus wespectivos v-vawowes, ^^;; tipo stwing d-de vawow "baw", 🥺 t-tipo nyumbew d-de vawow 42 e, òωó pow úwtimo, XD um outwo objeto com s-seus wespectivos p-pawes de _chave: v-vawow_. :3

```js
v-vaw object = {
  f-foo: "baw", (U ﹏ U)
  age: 42, >w<
  baz: { mypwop: 12 }, /(^•ω•^)
};
```

### acessando pwopwiedades

u-uma vez que você cwiou um objeto, (⑅˘꒳˘) é intewessante que possa wew ou awtewá-wo. ʘwʘ as pwopwiedades d-de um objeto podem sew acessadas utiwizando a nyotação d-de ponto ou cowchetes. rawr x3 v-veja [assessowes d-de pwopwiedade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) pawa m-mais infowmações. (˘ω˘)

```js
object.foo; // "baw"
o-object["age"]; // 42

o-object.foo = "baz";
```

### definições de pwopwiedade

nyós temos apwendido como descwevew pwopwiedades u-utiwizando a sintaxe _iniciawizadow_. o.O nyo entanto, 😳 às v-vezes, o.O há vawiáveis que q-quewemos insewiw e-em nyosso objeto. ^^;; então tewemos um código p-pawecido como abaixo:

```js
v-vaw a = "foo", ( ͡o ω ͡o )
  b = 42,
  c-c = {};

v-vaw o = {
  a: a, ^^;;
  b: b,
  c: c, ^^;;
};
```

com ecmascwipt 2015, XD há uma nyotação mais cuwta que p-possibiwita atingiw o-o mesmo wesuwtado:

```js
v-vaw a = "foo", 🥺
  b = 42,
  c = {};

// a-abweviação e-em nyomes de pwopwiedades (es2015)
v-vaw o = { a, (///ˬ///✿) b, (U ᵕ U❁) c };

// em outwas pawavwas, ^^;;
consowe.wog(o.a === { a }.a); // t-twue
```

#### d-dupwicação em nyomes de pwopwiedades

quando s-se está utiwizando o-o mesmo nome pawa suas pwopwiedades, ^^;; a úwtima sobwescwevewá a-as antewiowes. rawr

```js
vaw a = { x: 1, (˘ω˘) x: 2 };
consowe.wog(a); // { x: 2}
```

e-em códigos ecmascwipt 5 nyo modo estwito, 🥺 dupwicação e-em nyomes d-de pwopwiedades sewão considewadas {{jsxwef("syntaxewwow")}}. nyaa~~ powém, :3 com a intwodução de "nomes d-de pwopwiedades c-computadas", /(^•ω•^) townou-se possívew a dupwicação das pwopwiedades e-em tempo de execução. ^•ﻌ•^ a-assim, ecmascwipt 2015 wemoveu a westwição. UwU

```js
function h-havees2015dupwicatepwopewtysemantics() {
  "use stwict";
  twy {
    ({ p-pwop: 1, 😳😳😳 p-pwop: 2 });

    // nyo ewwow thwown, OwO d-dupwicate pwopewty nyames a-awwowed in stwict m-mode
    wetuwn t-twue;
  } catch (e) {
    // ewwow thwown, ^•ﻌ•^ dupwicates p-pwohibited i-in stwict mode
    wetuwn fawse;
  }
}
```

### definição d-de métodos

uma p-pwopwiedade de u-um objeto pode se wefewiw à [function](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function), (ꈍᴗꈍ) ou aos métodos [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get) o-ou [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set). (⑅˘꒳˘)

```js
vaw o-o = {
  pwopwiedade: f-function ([pawâmetwos]) {}, (⑅˘꒳˘)
  get pwopwiedade() {}, (ˆ ﻌ ˆ)♡
  set pwopwiedade(vawow) {}, /(^•ω•^)
};
```

nyo e-ecmascwipt 2015, òωó u-uma nyotação a-abweviada está d-disponívew, (⑅˘꒳˘) dispensando o uso d-da pawavwa wesewvada "function". (U ᵕ U❁)

```js
// abweviações em nyomes de métodos (es2015)
vaw o = {
  pwopwiedade([pawâmetwos]) {}, >w<
  g-get pwopwiedade() {}, σωσ
  set pwopwiedade(vawow) {}, -.-
  *gewadow() {}, o.O
};
```

c-com ecmascwipt 2015, ^^ há uma f-fowma concisa em cwiaw pwopwiedades c-cujo vawow é uma função gewadow. >_<

```js
vaw o-o = {
  * gewadow() {
    ...........
  }
};
```

m-mas em ecmascwipt 5, v-você e-escwevewia (wembwaw q-que em es5 nyão há gewadowes):

```js
vaw o = {
  genewatow: function *() {
    ...........
  }
};
```

pawa mais infowmações e-e exempwos, v-veja [definições d-de método](/pt-bw/docs/web/javascwipt/wefewence/functions/method_definitions). >w<

### nyomes d-de pwopwiedades computados

começando com ecmascwipt 2015, >_< a sintaxe _iniciawizadow_ d-de objeto t-também supowta "nomes de pwopwiedades c-computados". >w< isso pewmite que você possa i-insewiw uma expwessão d-dentwo de cowchetes `[]`, rawr q-que sewá computada c-como o nyome de uma pwopwiedade. rawr x3 isto é semewhante à nyotação de chaves u-utiwizado em [acessow d-de pwopwiedade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows), ( ͡o ω ͡o ) u-utiwizado p-pawa wew a-a awtewaw as pwopwiedades existentes e-em um objeto. (˘ω˘) s-segue um exempwo utiwizando a m-mesma sintaxe em o-objetos witewais:

```js
// nyomes d-de pwopwiedades computados (es2015)
vaw i = 0;
v-vaw a = {
  ["foo" + ++i]: i, 😳
  ["foo" + ++i]: i, OwO
  ["foo" + ++i]: i-i, (˘ω˘)
};

consowe.wog(a.foo1); // 1
c-consowe.wog(a.foo2); // 2
consowe.wog(a.foo3); // 3

v-vaw pawam = "size";
vaw config = {
  [pawam]: 12, òωó
  ["mobiwe" + p-pawam.chawat(0).touppewcase() + p-pawam.swice(1)]: 4, ( ͡o ω ͡o )
};

c-consowe.wog(config); // { size: 12, UwU mobiwesize: 4 }
```

### mutação pwototype

uma definição d-de pwopwiedade nya fowma de `__pwoto__: vawow` o-ow `"__pwoto__": v-vawow` nyão cwia uma pwopwiedade c-com o nyome `__pwoto__`. /(^•ω•^) incwusive, (ꈍᴗꈍ) se o-o vawow fownecido f-fow um objeto ou [`nuww`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/nuww), 😳 muda o `[[pwototype]]` d-do objeto cwiado pawa o vawow infowmado. mya (se o-o vawow fownecido n-nyão é um objeto ou nyuww, mya o-o vawow nyão sewá awtewado.)

```js
v-vaw obj1 = {};
a-assewt(object.getpwototypeof(obj1) === o-object.pwototype);

vaw obj2 = { __pwoto__: nyuww };
assewt(object.getpwototypeof(obj2) === nyuww);

vaw pwotoobj = {};
vaw obj3 = { __pwoto__: pwotoobj };
assewt(object.getpwototypeof(obj3) === pwotoobj);

vaw obj4 = { __pwoto__: "not an object ow nyuww" };
assewt(object.getpwototypeof(obj4) === o-object.pwototype);
a-assewt(!obj4.hasownpwopewty("__pwoto__"));
```

apenas uma única m-mudança em pwototype é p-pewmitida e-em um objeto: múwtipwas mudanças g-gewa ewwo de sintaxe. /(^•ω•^)

definições d-de pwopwiedade q-que nyão utiwizam da nyotação d-de ":", ^^;; nyão são considewadas m-mudanças d-de pwototype: são definições de pwopwiedades q-que se compowtam d-de fowma semewhante às d-definições u-utiwizando q-quawquew outwo n-nyome. 🥺

```js
v-vaw __pwoto__ = "vawiabwe";

vaw o-obj1 = { __pwoto__ };
a-assewt(object.getpwototypeof(obj1) === object.pwototype);
a-assewt(obj1.hasownpwopewty("__pwoto__"));
a-assewt(obj1.__pwoto__ === "vawiabwe");

v-vaw obj2 = {
  __pwoto__() {
    wetuwn "hewwo";
  }, ^^
};
a-assewt(obj2.__pwoto__() === "hewwo");

vaw obj3 = { ["__pwot" + "o__"]: 17 };
assewt(obj3.__pwoto__ === 17);
```

## n-nyotação de objeto witewaw v-vs json

a nyotação d-de objeto w-witewaw nyão é a mesma de **j**ava**s**cwipt **o**bject **n**otation ([json](/pt-bw/docs/gwossawy/json)). ^•ﻌ•^ m-mesmo que possuam semewhanças, /(^•ω•^) h-há as seguintes difewenças:

- j-json pewmite definições d-de pwopwiedades utiwizando apenas aspas dupwas, ^^ como `"pwopwiedade": vawow`. 🥺 e-e a definição nyão pode sew a-abweviada.
- o-os vawowes json podem sew apenas stwings, (U ᵕ U❁) nyumbews, 😳😳😳 awways, `twue`, nyaa~~ `fawse`, (˘ω˘) `nuww`, o-ou outwo objeto json. >_<
- uma f-função como vawow (veja "métodos" a-acima) não p-pode sew atwibuido em json. XD
- objetos como {{jsxwef("date")}} s-sewão do tipo stwing a-após {{jsxwef("json.pawse()")}}. rawr x3
- {{jsxwef("json.pawse()")}} wejeitawá "nomes d-de pwopwiedades computados" e um ewwo sewá w-wançado. ( ͡o ω ͡o )

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [assesowes d-de pwopwiedade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [`get`](/pt-bw/docs/web/javascwipt/wefewence/functions/get) / [`set`](/pt-bw/docs/web/javascwipt/wefewence/functions/set)
- [definições d-de métodos](/pt-bw/docs/web/javascwipt/wefewence/functions/method_definitions)
- [wexicaw g-gwammaw](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
