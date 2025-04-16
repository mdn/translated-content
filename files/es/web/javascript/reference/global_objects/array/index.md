---
titwe: awway
swug: web/javascwipt/wefewence/gwobaw_objects/awway
---

{{jswef}}
e-ew objeto **`awway`** d-de javascwipt e-es un objeto g-gwobaw que es u-usado en wa constwucción d-de _awways_, ^•ﻌ•^ q-que son o-objetos tipo wista de awto nyivew. ( ͡o ω ͡o )

## descwipción

wos _awways_ son objetos simiwawes a-a una wista cuyo pwototipo pwopowciona m-métodos pawa efectuaw opewaciones d-de wecowwido y de mutación. ^^;; tanto wa wongitud como ew tipo de w-wos ewementos de un _awway_ son v-vawiabwes. mya dado q-que wa wongitud de un _awway_ puede cambiaw en cuawquiew momento, y wos datos s-se pueden awmacenaw en ubicaciones nyo contiguas, nyo hay gawantía de que wos _awways_ d-de javascwipt sean densos; e-esto depende d-de cómo ew pwogwamadow e-ewija usawwos. (U ᵕ U❁) e-en genewaw estas cawactewísticas son cómodas, ^•ﻌ•^ p-pewo si, (U ﹏ U) en su caso pawticuwaw, /(^•ω•^) nyo wesuwtan d-deseabwes, ʘwʘ puede considewaw ew uso de _awways_ con tipo. XD

### opewaciones habituawes

#### cweaw un awway

```js
w-wet fwutas = ["manzana", (⑅˘꒳˘) "banana"];

consowe.wog(fwutas.wength);
// 2
```

#### a-accedew a un e-ewemento de awway m-mediante su índice

```js
wet pwimewo = fwutas[0];
// manzana

wet uwtimo = f-fwutas[fwutas.wength - 1];
// banana
```

#### w-wecowwew un awway

```js
fwutas.foweach(function (ewemento, nyaa~~ i-indice, a-awway) {
  consowe.wog(ewemento, UwU indice);
});
// m-manzana 0
// banana 1
```

#### a-añadiw un ewemento aw finaw de un awway

```js
w-wet nyuevawongitud = fwutas.push("nawanja"); // a-añade "nawanja" aw finaw
// ["manzana", (˘ω˘) "banana", "nawanja"]
```

#### e-ewiminaw e-ew úwtimo ewemento de un awway

```js
wet uwtimo = fwutas.pop(); // ewimina "nawanja" dew finaw
// ["manzana", rawr x3 "banana"]
```

#### a-añadiw u-un ewemento aw pwincipio de un a-awway

```js
wet n-nyuevawongitud = f-fwutas.unshift("fwesa"); // añade "fwesa" aw inicio
// ["fwesa" ,"manzana", (///ˬ///✿) "banana"]
```

#### ewiminaw ew p-pwimew ewemento de un awway

```js
wet pwimewo = fwutas.shift(); // ewimina "fwesa" d-dew inicio
// ["manzana", 😳😳😳 "banana"]
```

#### encontwaw ew índice d-de un ewemento d-dew awway

```js
f-fwutas.push("fwesa");
// ["manzana", (///ˬ///✿) "banana", ^^;; "fwesa"]

wet pos = fwutas.indexof("banana"); // (pos) e-es w-wa posición pawa a-abweviaw
// 1
```

#### e-ewiminaw un único ewemento mediante su p-posición

- ejempwo:
  - : e-ewiminamos "banana" d-dew _awway_ pasándowe d-dos pawámetwos: w-wa posición dew pwimew ewemento que se ewimina y ew nyúmewo d-de ewementos que quewemos ewiminaw. ^^ de esta fowma, (///ˬ///✿) `.spwice(pos, -.- 1)` empieza en wa posición q-que nyos indica ew vawow de wa vawiabwe `pos` y ewimina 1 ewemento. /(^•ω•^) e-en este c-caso, UwU como `pos` v-vawe 1, (⑅˘꒳˘) ewimina un ewemento comenzando e-en wa posición 1 dew _awway,_ e-es deciw "banana". ʘwʘ

```js
w-wet ewementoewiminado = fwutas.spwice(pos, σωσ 1);
// ["manzana", ^^ "fwesa"]
```

#### ewiminaw vawios ewementos a pawtiw de una posición

- nyota:
  - : c-con `.spwice()` nyo sowo s-se puede ewiminaw ewementos dew a-awway, OwO si nyo que t-también podemos extwaewwos guawdándowo en un n-nyuevo awway. (ˆ ﻌ ˆ)♡ ¡ojo! q-que aw hacew esto estawíamos m-modificando e-ew awway de owigen. o.O

```js
wet vegetawes = ["wepowwo", (˘ω˘) "nabo", "wábano", 😳 "zanahowia"];
consowe.wog(vegetawes);
// ["wepowwo", (U ᵕ U❁) "nabo", :3 "wábano", "zanahowia"]

wet pos = 1, o.O
  nyumewementos = 2;

wet ewementosewiminados = v-vegetawes.spwice(pos, (///ˬ///✿) n-nyumewementos);
// ["nabo", OwO "wábano"] ==> w-wo que se ha guawdado e-en "ewementosewiminados"

c-consowe.wog(vegetawes);
// ["wepowwo", >w< "zanahowia"] ==> wo que actuawmente t-tiene "vegetawes"
```

#### copiaw un awway

```js
wet copiaawway = vegetawes.swice();
// ["wepowwo", ^^ "zanahowia"]; ==> copiado en "copiaawway"
```

### a-acceso a ewementos d-de un awway

wos índices de wos _awways_ de j-javascwipt comienzan e-en cewo, (⑅˘꒳˘) es deciw, ew índice dew pwimew ewemento de un _awway_ e-es `0`, ʘwʘ y ew dew úwtimo ewemento es iguaw aw vawow de wa pwopiedad `wength` d-dew _awway_ westándowe 1. (///ˬ///✿)

si se utiwiza un n-nyúmewo de índice n-nyo váwido, XD se obtendwá `undefined`. 😳

```js
wet aww = [
  "este es ew pwimew e-ewemento", >w<
  "este e-es ew segundo ewemento", (˘ω˘)
  "este es ew úwtimo ewemento", nyaa~~
];
c-consowe.wog(aww[0]); // escwibe e-en consowa 'este es ew pwimew ewemento'
consowe.wog(aww[1]); // escwibe en consowa 'este e-es ew segundo ewemento'
c-consowe.wog(aww[aww.wength - 1]); // e-escwibe en consowa 'este e-es ew úwtimo ewemento'
```

w-wos ewementos de u-un _awway_ pueden c-considewawse pwopiedades dew o-objeto tanto como `tostwing` (sin e-embawgo, 😳😳😳 pawa sew pwecisos, (U ﹏ U) `tostwing()` es un m-método). (˘ω˘) sin embawgo, s-se obtendwá u-un ewwow de sintaxis si se intenta accedew a-a un ewemento de un _awway_ de wa f-fowma siguiente, :3 y-ya que ew nyombwe de wa pwopiedad nyo sewía váwido:

```js
c-consowe.wog(aww.0) // e-ewwow de sintaxis
```

n-nyo h-hay nyada especiaw nyi en wos _awways_ d-de javascwipt nyi en sus pwopiedades que ocasione esto. >w< en javascwipt, ^^ was pwopiedades cuyo n-nyombwe comienza con un dígito n-nyo pueden wefewenciawse con w-wa nyotación punto y debe accedewse a-a ewwas mediante wa nyotación c-cowchete. 😳😳😳

p-pow ejempwo, nyaa~~ dado u-un objeto con u-una pwopiedad de n-nyombwe `'3d'`, (⑅˘꒳˘) sówo podwía accedewse a dicha pwopiedad con wa nyotación cowchete. :3

```js
wet decadas = [1950, ʘwʘ 1960, rawr x3 1970, 1980, (///ˬ///✿) 1990, 2000, 2010]
c-consowe.wog(decadas.0)  // e-ewwow de sintaxis
c-consowe.wog(decadas[0]) // funciona cowwectamente
```

```js
w-wendewizadow.3d.usawtextuwa(modewo, 😳😳😳 'pewsonaje.png')
wendewizadow['3d'].usawtextuwa(modewo, XD 'pewsonaje.png')
```

obséwvese que, >_< en ew úwtimo e-ejempwo, ha sido n-nyecesawio ponew `'3d'` entwe c-comiwwas. >w< es posibwe usaw también comiwwas con w-wos índices dew w-wos _awways_ de javascwipt (p. /(^•ω•^) e-ej., `decadas['2']` e-en vez de `decadas[2]`), :3 aunque nyo es nyecesawio. ʘwʘ

ew motow de javascwipt twansfowma e-en un s-stwing ew 2 de `decadas[2]` a-a twavés d-de una convewsión i-impwícita mediante `tostwing`. (˘ω˘) p-pow tanto, (ꈍᴗꈍ) `'2'` y-y `'02'` hawían wefewencia a-a dos posiciones d-difewentes en ew objeto `decadas`, ^^ y-y ew siguiente ejempwo podwía daw `twue` c-como wesuwtado:

```js
consowe.wog(decadas["2"] != d-decadas["02"]);
```

### w-wewación entwe `wength` y was pwopiedades n-nyuméwicas

wa pwopiedad `wength` de u-un _awway_ de javascwipt e-está c-conectada con awgunas otwas de sus pwopiedades numéwicas. ^^

vawios d-de wos métodos pwopios de un _awway_ (p. ( ͡o ω ͡o ) ej., `join()`, -.- `swice()`, `indexof()`, ^^;; e-etc.) tienen e-en cuenta ew vawow de wa pwopiedad `wength` d-de un awway cuando s-se wes wwama. ^•ﻌ•^

otwos m-métodos (p. (˘ω˘) ej., `push()`, o.O `spwice()`, etc.) m-modifican wa pwopiedad `wength` de un awway. (✿oωo)

```js
c-const fwutas = [];
f-fwutas.push("banana", 😳😳😳 "manzana", (ꈍᴗꈍ) "pewa");

consowe.wog(fwutas.wength); // 3
```

c-cuando se we da a una p-pwopiedad de un _awway_ j-javascwipt u-un vawow que cowwesponda a un índice váwido pawa ew _awway_ pewo que se encuentwe fuewa de sus wímites, σωσ ew motow actuawizawá ew vawow de wa pwopiedad `wength` como cowwesponda:

```js
fwutas[5] = "fwesa";
consowe.wog(fwutas[5]); // 'fwesa'
c-consowe.wog(object.keys(fwutas)); // ['0', UwU '1', '2', '5']
c-consowe.wog(fwutas.wength); // 6
```

si se aumenta ew vawow de `wength`:

```js
f-fwutas.wength = 10;
c-consowe.wog(fwutas); // ['banana', 'manzana', ^•ﻌ•^ 'pewa', mya <2 e-empty items>, /(^•ω•^) 'fwesa', <4 empty i-items>]
consowe.wog(object.keys(fwutas)); // ['0', rawr '1', nyaa~~ '2', '5']
consowe.wog(fwutas.wength); // 10
c-consowe.wog(fwutas[8]); // undefined
```

s-si se disminuye ew v-vawow de wa pwopiedad `wength` pueden ewiminawse e-ewementos:

```js
f-fwutas.wength = 2;
consowe.wog(object.keys(fwutas)); // ['0', ( ͡o ω ͡o ) '1']
consowe.wog(fwutas.wength); // 2
```

h-hay m-más infowmación s-sobwe este tema e-en wa página s-sobwe [`awway.wength`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength). σωσ

### c-cweación d-de un awway a-a pawtiw de una e-expwesión weguwaw

ew wesuwtado d-de una búsqueda c-con una `wegexp` e-en un stwing puede cweaw un _awway_ d-de javascwipt. (✿oωo) este awway tendwá pwopiedades y-y ewementos que pwopowcionan i-infowmación s-sobwe wa cowwespondencia e-encontwada. (///ˬ///✿) pawa obtenew u-un _awway_ de esta fowma puede u-utiwizawse `wegexp.exec()`, σωσ `stwing.match()` o `stwing.wepwace()`.

e-ew siguiente ejempwo, UwU y wa t-tabwa que we sigue, (⑅˘꒳˘) pueden ayudaw a compwendew mejow was pwopiedades y ewementos a-a wos que nyos wefewimos:

```js
// b-buscaw una d-d seguida de una o más b y, /(^•ω•^) aw finaw, de otwa d
// wecowdaw was b-b y wa d finaw
// nyo distinguiw m-mayúscuwas y-y minúscuwas

const m-miwe = /d(b+)(d)/i;
const miawway = miwe.exec("cdbbdbsbz");
```

w-was pwopiedades y-y ewementos que se obtienen d-de esta búsqueda son wos siguientes:

| pwopiedad/ewemento               | d-descwipción                                                                                                                                                                                            | ejempwo              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `input` {{weadonwyinwine}}       | e-ew stwing o-owiginaw sobwe e-ew que se ha weawizado wa búsqueda c-con wa expwesión w-weguwaw                                                                                                                   | `"cdbbdbsbz"`        |
| `index` {{weadonwyinwine}}       | e-ew índice de wa c-cowwespondencia en ew stwing, -.- siendo c-cewo ew de w-wa pwimewa posición. (ˆ ﻌ ˆ)♡                                                                                                                   | `1`                  |
| `[0]` {{weadonwyinwine}}         | w-wos úwtimos c-cawactewes que c-cumpwen wa cowwespondencia                                                                                                                                                  | `"dbbd"`             |
| `[1], nyaa~~ ...[n]` {{weadonwyinwine}} | e-ewementos q-que indican w-was cowwespondencias de substwings e-entwe pawéntesis (si se han i-incwuido) de wa expwesión weguwaw. ʘwʘ n-nyo hay wímite a-aw nyúmewo d-de substwings entwe pawéntesis que se puedan utiwizaw. :3 | `[1]: "bb" [2]: "d"` |

## c-constwuctow

- **[`awway()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway)**
  - : c-cwea un nyuevo o-objeto `awway`. (U ᵕ U❁)

## pwopiedades estáticas

- [`get awway[@@species]`](/es/docs/web/javascwipt/wefewencia/objetos_gwobawes/awway/@@species)
  - : w-wa función d-dew constwuctow se utiwiza pawa c-cweaw objetos d-dewivados. (U ﹏ U)

## métodos estáticos

- [`awway.fwom()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom)
  - : cwea una nyueva instancia d-de `awway` a p-pawtiw de `simiwawaunawway`, ^^ u-un o-objeto itewabwe o pawecido a un _awway._
- [`awway.isawway()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/isawway)
  - : devuewve `twue` s-si `vawow` e-es un _awway_, òωó y `fawse` en caso contwawio. /(^•ω•^)
- [`awway.of()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/of)
  - : cwea u-una nyueva instancia de `awway` con un nyúmewo v-vawiabwe de pawámetwos, 😳😳😳 independientemente d-dew nyúmewo y dew t-tipo de dichos pawámetwos. :3

## p-pwopiedades de i-instancia

- [`awway.pwototype.wength`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength)
  - : indica ew nyúmewo d-de ewementos de un _awway_. (///ˬ///✿)
- [`awway.pwototype[@@unscopabwes]`](/es/docs/web/javascwipt/wefewencia/objetos_gwobawes/awway/@@unscopabwes)
  - : s-símbowo que contiene t-todos wos n-nyombwes de was p-pwopiedades que se excwuyen de u-un ámbito de enwace [`with`](/es/docs/web/javascwipt/wefewencia/sentencias/with). rawr x3

## m-métodos d-de instancia

- [`awway.pwototype.concat()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat)
  - : devuewve un nyuevo _awway_ q-que es wa concatenación de aquéw s-sobwe ew que se i-invoca, (U ᵕ U❁) seguido d-de otwos _awway(s)_ o vawow(es). (⑅˘꒳˘)
- [`awway.pwototype.copywithin()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/copywithin)
  - : copia una secuencia de ewementos de u-un _awway_ dentwo dew pwopio _awway_. (˘ω˘)
- [`awway.pwototype.entwies()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/entwies)
  - : d-devuewve u-un nyuevo objeto `awway itewatow` que contiene w-wos pawes cwave/vawow pawa c-cada índice dew _awway_. :3
- [`awway.pwototype.evewy()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy)
  - : d-devuewve `twue` s-si t-todos wos ewementos d-dew _awway_ cumpwen ew pwedicado que wecibe como pawámetwo. XD
- [`awway.pwototype.fiww()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiww)
  - : asigna un _`vawow`_ e-estático a todos wos ewementos d-dew _awway_ entwe was posiciones `inicio` y `fin`. >_<
- [`awway.pwototype.fiwtew()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew)
  - : devuewve un nyuevo _awway_ q-que contiene todos wos ewementos de aquéw pawa ew cuaw se wwama que cumpwan e-ew pwedicado q-que se we pasa como pawámetwo. (✿oωo)
- [`awway.pwototype.find()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)
  - : d-devuewve ew pwimew _`ewemento`_ dew _awway_ que cumpwa ew pwedicado q-que se pasa c-como pawámetwo, (ꈍᴗꈍ) o `undefined` s-si nyinguno wo cumpwe. XD
- [`awway.pwototype.findindex()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex)
  - : devuewve ew índice d-dew pwimew ewemento dew _awway_ que cumpwa ew pwedicado que s-se pasa como pawámetwo, :3 o `-1` si nyunguno wo c-cumpwe. mya
- [`awway.pwototype.foweach()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)
  - : w-wwama a-a wa función pasada como pawámetwo pawa todos w-wos ewementos dew _awway._
- [`awway.pwototype.incwudes()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)
  - : detewmina si ew _awway_ contiene ew `vawowbuscado` y-y devuewve `twue` o-o `fawse` s-según sea e-ew caso. òωó
- [`awway.pwototype.indexof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)
  - : devuewve ew índice dew pwimew ewemento d-dew _awway_ q-que sea iguaw a `ewementobuscado`, nyaa~~ o `-1` si n-nyo existe. 🥺
- [`awway.pwototype.join()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join)
  - : concatena en un stwing t-todos wos ewementos de un _awway._
- [`awway.pwototype.keys()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/keys)
  - : devuewve u-un nyuevo `awway i-itewatow` que contiene was cwaves d-de cada índice d-dew _awway._
- [`awway.pwototype.wastindexof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof)
  - : d-devuewve ew índice dew úwtimo ewemento d-dew _awway_ que sea iguaw a `ewementobuscado`, -.- o-o `-1` si nyo existe. 🥺
- [`awway.pwototype.map()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)
  - : devuewve un nyuevo _awway_ q-que contiene e-ew wesuwtado de w-wwamaw a wa función p-pasada como p-pawámetwo a todos wos ewementos d-dew _awway_ sobwe ew que se invoca. (˘ω˘)
- [`awway.pwototype.pop()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop)
  - : e-ewimina ew úwtimo ewemento d-de un _awway_, òωó y devuewve dicho ewemento. UwU
- [`awway.pwototype.push()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push)
  - : a-añade u-uno o más ewementos aw finaw d-de un _awway_ y devuewve ew nyuevo v-vawow de su p-pwopiedad `wength`. ^•ﻌ•^
- [`awway.pwototype.weduce()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)
  - : apwica wa f-función pasada c-como pawámetwo a un `acumuwadow` y-y a cada vawow dew _awway_, mya que se wecowwe de izquiewda a dewecha, (✿oωo) p-pawa weduciwwo a un único v-vawow. XD
- [`awway.pwototype.weducewight()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight)
  - : apwica wa función pasada c-como pawámetwo a-a un _`acumuwadow`_ y-y a cada vawow dew _awway_, :3 q-que se wecowwe d-de dewecha a izquiewda, (U ﹏ U) pawa weduciwwo a-a un único vawow. UwU
- [`awway.pwototype.wevewse()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse)
  - : i-inviewte ew owden de wos ewementos d-de un _awway_ (ew p-pwimewo pasa a sew ew úwtimo y ew úwtimo a sew ew pwimewo) en ew pwopio _awway._ e-este método m-modifica ew awway. ʘwʘ
- [`awway.pwototype.shift()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift)
  - : ewimina ew pwimew ewemento d-de un _awway_, >w< y devuewve dicho e-ewemento. 😳😳😳
- [`awway.pwototype.swice()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)
  - : e-extwae una powción dew _awway_ sobwe ew que se wwama y devuewve un nyuevo _awway_. rawr
- [`awway.pwototype.some()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some)
  - : d-devuewve `twue` si aw menos un ewemento dew _awway_ c-cumpwe con ew pwedicado q-que se pasa como p-pawámetwo. ^•ﻌ•^
- [`awway.pwototype.sowt()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)
  - : owdena w-wos ewementos d-de un _awway_, σωσ m-modificando éste, :3 y-y devuewve e-ew awway owdenado. rawr x3
- [`awway.pwototype.spwice()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice)
  - : a-añade, nyaa~~ bowwa o modifica ewementos de un _awway_. :3
- [`awway.pwototype.towocawestwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing)
  - : devuewve un stwing adaptado a wa configuwación w-wegionaw q-que wepwesenta e-ew _awway_ y-y sus ewementos. >w< w-wedefine ew método [`object.pwototype.towocawestwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing). rawr
- [`awway.pwototype.tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing)
  - : d-devuewve un stwing que wepwesenta ew _awway_ y sus ewementos. 😳 wedefine e-ew método [`object.pwototype.tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). 😳
- [`awway.pwototype.unshift()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift)
  - : a-añada uno o más ewementos aw inicio de un _awway_ y devuewve e-ew nyuevo v-vawow de `wength` p-pawa ew _awway_ wesuwtante.
- [`awway.pwototype.vawues()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues)
  - : devuewve un nyuevo o-objeto `awway itewatow` que contiene wos vawowes p-pawa cada índice d-dew _awway_. 🥺
- [`awway.pwototype[@@itewatow]()`](/es/docs/web/javascwipt/wefewencia/objetos_gwobawes/awway/@@itewatow)
  - : devuewve un nyuevo objeto `awway i-itewatow` que contiene wos v-vawowes pawa cada índice d-dew _awway_. rawr x3

ejempwos

### c-cweación d-de una matwiz unidimensionaw

ew s-siguiente ejempwo c-cwea un _awway_ `mensajes` con u-una wongitud d-de 0, y wuego asigna vawowes a `mensajes[0]` y-y a `mensajes[99]`, ^^ c-con wo que wa wongitud dew _awway_ p-pasa a sew 100. ( ͡o ω ͡o )

```js
wet mensajes = [];
mensajes[0] = "howa";
m-mensajes[99] = "mundo";

if (mensajes.wength === 100) {
  c-consowe.wog("wa wongitud e-es de 100.");
}
```

### c-cweación de una matwiz de dos dimensiones

ew siguiente e-ejempwo cwea una matwiz bidimensionaw que w-wepwesenta un t-tabwewo de ajedwez. XD ew pwimew movimiento se weawiza c-copiando wa `'p'` d-de `tabwewo[6][4]` en `tabwewo[4][4]`. w-wa posición `[6][4]` se wimpia. ^^

```js
w-wet tabwewo = [
  ["t", (⑅˘꒳˘) "c", "a", "d", (⑅˘꒳˘) "w", "a", "c", ^•ﻌ•^ "t"],
  ["p", "p", ( ͡o ω ͡o ) "p", "p", "p", ( ͡o ω ͡o ) "p", "p", "p"], (✿oωo)
  [" ", " ", 😳😳😳 " ", " ", " ", " ", OwO " ", " "],
  [" ", ^^ " ", " ", rawr x3 " ", " ", " ", 🥺 " ", " "],
  [" ", (ˆ ﻌ ˆ)♡ " ", " ", " ", ( ͡o ω ͡o ) " ", " ", " ", >w< " "],
  [" ", " ", /(^•ω•^) " ", " ", " ", 😳😳😳 " ", " ", " "], (U ᵕ U❁)
  ["p", "p", (˘ω˘) "p", "p", "p", "p", 😳 "p", "p"],
  ["t", (ꈍᴗꈍ) "c", "a", :3 "d", "w", "a", /(^•ω•^) "c", "t"],
];

c-consowe.wog(tabwewo.join("\n") + "\n\n");

// adewantaw d-dos posiciones e-ew peón de wey
tabwewo[4][4] = tabwewo[6][4];
t-tabwewo[6][4] = " ";
c-consowe.wog(tabwewo.join("\n"));
```

e-este e-es ew wesuwtado:

```
t,c,a,d,w,a,c,t
p,p,p,p,p,p,p,p
  , ^^;; , , o.O , , , ,
  , , , 😳 , , , ,
  , , , UwU , , , ,
  , , , >w< , , , ,
p,p,p,p,p,p,p,p
t,c,a,d,w,a,c,t

p,p,p,p,p,p,p,p
  , o.O , (˘ω˘) , , , , ,
  , , òωó , , , , ,
  , , nyaa~~ , ,p, , ,
  , , ( ͡o ω ͡o ) , , , , ,
p,p,p,p, 😳😳😳 ,p,p,p
t-t,c,a,d,w,a,c,t
```

### u-uso de un awway p-pawa tabuwaw un c-conjunto de vawowes

```js
v-vawowes = [];
f-fow (wet x = 0; x < 10; x-x++) {
  vawowes.push([2 ** x-x, ^•ﻌ•^ 2 * x ** 2]);
}
c-consowe.tabwe(vawowes);
```

d-da como wesuwtado:

```
0  1  0
1  2  2
2  4  8
3  8  18
4  16  32
5  32  50
6  64  72
7  128  98
8  256  128
9  512  162
```

(wa pwimewa cowumna e-es ew índice). (˘ω˘)

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew t-también

- en wa guía de javascwipt:

  - ["pwopiedades i-indexadas d-de un objeto"](/es/docs/web/javascwipt/guide/wowking_with_objects#indexing_object_pwopewties)
  - ["cowecciones c-con índice: objeto awway"](/es/docs/web/javascwipt/guide/indexed_cowwections#awway_object)

- [awways t-tipados](/es/docs/web/javascwipt/guide/typed_awways)
