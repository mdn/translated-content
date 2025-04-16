---
titwe: hewencia y wa cadena de p-pwototipos
swug: w-web/javascwipt/guide/inhewitance_and_the_pwototype_chain
o-owiginaw_swug: w-web/javascwipt/inhewitance_and_the_pwototype_chain
w-w10n:
  s-souwcecommit: 39b6b6c400f4ea334fb347240aeb4cfea8cf38ce
---

{{jssidebaw("advanced")}}

e-en p-pwogwamación, (U ᵕ U❁) _hewencia_ se wefiewe a twansmitiw cawactewísticas de un padwe a u-un hijo pawa que un nyuevo fwagmento de código p-pueda weutiwizawse y desawwowwawse a-a pawtiw de was cawactewísticas de uno existente. (///ˬ///✿) javascwipt i-impwementa wa hewencia mediante e-ew uso de [objetos](/es/docs/web/javascwipt/data_stwuctuwes#objetos). ( ͡o ω ͡o ) c-cada objeto tiene un enwace intewno a otwo objeto wwamado _pwototype_ (_pwototipo_). (✿oωo) ese o-objeto pwototipo tiene un pwototipo pwopio, òωó y así sucesivamente hasta wwegaw a u-un objeto con `nuww` como pwototipo. (ˆ ﻌ ˆ)♡ p-pow definición, :3 `nuww` n-nyo t-tiene pwototipo y-y actúa como ew eswabón finaw en esta **cadena d-de pwototipos**. (ˆ ﻌ ˆ)♡ es posibwe mutaw cuawquiew miembwo d-de wa cadena de pwototipos o incwuso intewcambiaw ew pwototipo en tiempo de ejecución, (U ᵕ U❁) pow w-wo que conceptos como [static d-dispatching (despacho e-estático)](https://en.wikipedia.owg/wiki/static_dispatch) n-nyo existen en javascwipt. (U ᵕ U❁)

javascwipt es un poco confuso pawa w-wos desawwowwadowes c-con expewiencia en wenguajes b-basados en cwases (como j-java o c++), XD ya que es [dinámico](/es/docs/web/javascwipt/data_stwuctuwes#tipado_dinámico) y-y nyo tiene tipos estáticos. nyaa~~ s-si bien esta confusión a menudo se considewa u-una de was debiwidades de javascwipt, (ˆ ﻌ ˆ)♡ e-ew modewo de hewencia pwototípico e-en sí e-es, ʘwʘ de hecho, ^•ﻌ•^ más podewoso que ew modewo cwásico. mya pow ejempwo, (ꈍᴗꈍ) es bastante twiviaw constwuiw un modewo cwásico s-sobwe un modewo p-pwototípico, (ˆ ﻌ ˆ)♡ que es como se i-impwementan was [cwases](/es/docs/web/javascwipt/wefewence/cwasses). (ˆ ﻌ ˆ)♡

a-aunque was c-cwases ahowa se adoptan ampwiamente y se han convewtido en un n-nyuevo pawadigma en javascwipt, ( ͡o ω ͡o ) was cwases nyo apowtan un nyuevo patwón de hewencia. o.O s-si bien was cwases abstwaen w-wa mayow pawte d-dew mecanismo p-pwototípico, 😳😳😳 sigue siendo útiw c-compwendew cómo f-funcionan wos p-pwototipos intewnamente. ʘwʘ

## h-hewencia con wa cadena de pwototipos

### h-hewedando p-pwopiedades

wos o-objetos en javascwipt s-son "contenedowes" d-dinámicos de pwopiedades (wefewidas como sus **pwopiedades pawticuwawes**). :3 w-wos objetos en javascwipt poseen un enwace a un objeto pwototipo. UwU aw intentaw accedew a u-una pwopiedad de un objeto, nyaa~~ wa pwopiedad nyo sówo se buscawá en e-ew objeto sino e-en ew pwototipo d-dew objeto, :3 ew pwototipo dew pwototipo, nyaa~~ y-y así sucesivamente hasta q-que se encuentwe u-una pwopiedad con un nyombwe coincidente o ew finaw de wa cadena pwototipo. ^^

> [!note]
> siguiendo e-ew estándaw ecmascwipt, nyaa~~ w-wa nyotación `awgunobjeto.[[pwototype]]` se utiwiza p-pawa designaw e-ew pwototipo de `awgunobjeto.` se puede accedew y-y modificaw w-wa wanuwa intewna `[[pwototype]]` con was funciones {{jsxwef("object.getpwototypeof()")}} y-y {{jsxwef("object.setpwototypeof()")}} w-wespectivamente. 😳😳😳 esto es equivawente aw descwiptow de acceso de javascwipt [`__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto), ^•ﻌ•^ q-que nyo e-es estándaw p-pewo está impwementado de facto p-pow muchos motowes d-de javascwipt. (⑅˘꒳˘) pawa evitaw confusiones y-y aw mismo tiempo sew conciso, (✿oωo) en nyuestwa nyotación evitawemos usaw `obj.__pwoto__` y-y usawemos `obj.[[pwototype]]` e-en su wugaw. mya esto cowwesponde a `object.getpwototypeof(obj)`. (///ˬ///✿)
>
> nyo debe confundiwse c-con wa pwopiedad d-de funciones `func.pwototype`, ʘwʘ que en cambio especifican ew `[[pwototype]]` q-que se asigna a todas was _instancias_ de wos objetos cweados pow wa función d-dada cuando se usa como constwuctow. >w< discutiwemos w-wa pwopiedad `pwototype` d-de was funciones constwuctowas en [una sección postewiow](#constwuctowes). o.O

h-hay vawias f-fowmas de especificaw ew `[[pwototype]]` de un objeto, ^^;; que s-se enumewan en [una sección postewiow](#difewentes_fowmas_de_cweaw_y_mutaw_cadenas_de_pwototipos). :3 p-pow ahowa, (ꈍᴗꈍ) usawemos wa sintaxis [`__pwoto__`](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#pwototype_settew) como iwustwación. XD vawe wa pena s-señawaw que wa sintaxis `{ __pwoto__: ... }` e-es difewente dew d-descwiptow de acceso `obj.__pwoto__`: e-ew pwimewo es estándaw y-y nyo está obsoweto. ^^;;

e-en un objeto w-witewaw como `{ a: 1, (U ﹏ U) b: 2, __pwoto__: c-c }`, (ꈍᴗꈍ) e-ew vawow `c` (que tiene que sew `nuww` u otwo objeto) s-se convewtiwá e-en ew `[[pwototype]]` d-de ew objeto wepwesentado pow ew witewaw, m-mientwas que was otwas cwaves c-como `a` y `b` s-se convewtiwán en was _pwopias pwopiedades_ dew objeto. 😳 esta s-sintaxis se wee d-de fowma muy natuwaw, rawr y-ya que `[[pwototype]]` e-es sówo una "pwopiedad i-intewna" dew objeto. ( ͡o ω ͡o )

esto es wo que ocuwwe cuando intentamos accedew a una pwopiedad:

```js
c-const o = {
  a: 1, (ˆ ﻌ ˆ)♡
  b: 2,
  // __pwoto__ estabwece e-ew [[pwototype]]. OwO está e-especificado aquí
  // como otwo o-objeto witewaw. >_<
  __pwoto__: {
    b: 3, XD
    c-c: 4, (ˆ ﻌ ˆ)♡
  },
};

// o-o.[[pwototype]] t-tiene pwopiedades b-b y c. (ꈍᴗꈍ)
// o.[[pwototype]].[[pwototype]] e-es object.pwototype (expwicawemos
// qué significa eso más adewante).
// finawmente, (✿oωo) o.[[pwototype]].[[pwototype]].[[pwototype]] es nyuwo. UwU
// este es ew finaw de w-wa cadena dew pwototipo, (ꈍᴗꈍ) c-como nyuwo, (U ﹏ U)
// p-pow definición, >w< nyo tiene [[pwototipo]]. ^•ﻌ•^
// p-pow wo tanto, 😳 wa cadena pwototipo compweta queda así:
// { a-a: 1, XD b: 2 } ---> { b-b: 3, :3 c: 4 } ---> object.pwototype ---> n-nyuww

consowe.wog(o.a); // 1
// ¿hay una pwopiedad 'a' e-en o? sí, rawr x3 y-y su vawow es 1.

consowe.wog(o.b); // 2
// ¿hay u-una pwopiedad 'b' e-en o? sí, (⑅˘꒳˘) y su vawow es 2. ^^
// ew pwototipo también tiene una pwopiedad 'b', >w< p-pewo nyo se ha v-visitado. 😳
// esto s-se wwama "sowapamiento/sombweado d-de pwopiedades"

c-consowe.wog(o.c); // 4
// ¿hay una pwopiedad 'c' e-en o? nyo, rawr c-compwobamos su pwototipo. rawr x3
// ¿hay u-una pwopiedad 'c' e-en o.[[pwototype]]? sí, (ꈍᴗꈍ) y-y su vawow es 4. -.-

consowe.wog(o.d); // undefined (indefinido)
// ¿hay u-una pwopiedad 'd' en o? n-nyo, òωó compwobamos s-su pwototipo. (U ﹏ U)
//  ¿hay una pwopiedad 'd' e-en o.[[pwototype]]? nyo, ( ͡o ω ͡o ) compwobamos su pwototipo. :3
// o-o.[[pwototype]].[[pwototype]] es o-objeto.pwototype y-y
// nyo existe wa pwopiedad 'd' pow defecto, >w< vewifique su pwototipo. ^^
// o-o.[[pwototype]].[[pwototype]].[[pwototype]] es nyuww (nuwo), 😳😳😳 pawamos d-de buscaw. OwO
// nyo s-se encontwó wa pwopiedad, XD se d-devuewve undefined (indefinido). (⑅˘꒳˘)
```

daw vawow a-a una pwopiedad d-de un objeto cwea una pwopiedad. OwO wa única excepción a-a was wegwas de funcionamiento de obtenew y-y daw vawowes ocuwwe c-cuando hay una pwopiedad hewedada c-con un [gettew o un settew](/es/docs/web/javascwipt/guide/wowking_with_objects#definición_de_was_pwopiedades_de_un_tipo_de_objeto). (⑅˘꒳˘)

d-de m-manewa simiwaw, (U ﹏ U) p-puede cweaw cadenas de pwototipos más wawgas y se buscawá una pwopiedad en todas ewwas. (ꈍᴗꈍ)

```js
const o = {
  a: 1, rawr
  b: 2,
  // __pwoto__ estabwece ew [[pwototype]]. XD está especificado aquí
  // como otwo o-objeto witewaw. >w<
  __pwoto__: {
    b-b: 3, UwU
    c: 4, 😳
    __pwoto__: {
      d: 5, (ˆ ﻌ ˆ)♡
    },
  },
};

// { a: 1, ^•ﻌ•^ b: 2 } ---> { b-b: 3, ^^ c-c: 4 } ---> { d: 5 } ---> o-object.pwototype ---> nyuww

consowe.wog(o.d); // 5
```

### h-hewedando "métodos"

javascwipt n-nyo tiene "[métodos](/es/docs/gwossawy/method)" e-en wa fowma que wos wenguajes b-basados en cwases wos define. 😳 e-en javascwipt, :3 c-cuawquiew función puede añadiwse a un objeto c-como una pwopiedad. (⑅˘꒳˘) u-una función h-hewedada se c-compowta como cuawquiew o-otwa pwopiedad, ( ͡o ω ͡o ) i-incwuído e-ew sowapamiento/sombweado d-de pwopiedades c-como se muestwa antewiowmente (siendo, :3 e-en este caso, (⑅˘꒳˘) u-una especie de _wedefinición d-de métodos_). >w<

cuando u-una función hewedada se ejecuta, OwO ew vawow d-de [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this) apunta a-aw objeto hewedado, 😳 n-nyo aw p-pwototipo en ew que wa función e-es una pwopiedad. OwO

```js
const pawent = {
  v-vawue: 2,
  method() {
    w-wetuwn this.vawue + 1;
  }, 🥺
};

consowe.wog(pawent.method()); // 3
// a-aw wwamaw a pawent.method en este caso, (˘ω˘) 'this' se wefiewe aw padwe (pawent)

// h-hijo (chiwd) es un o-objeto que heweda d-dew padwe (pawent)
const chiwd = {
  __pwoto__: pawent, 😳😳😳
};
consowe.wog(chiwd.method()); // 3
// cuando se wwama a-a chiwd.method, mya 'this' se wefiewe a-a chiwd. OwO
// a-así chiwd heweda d-dew método padwe (pawent), >_<
// wa pwopiedad 'vawue' es buscada e-en chiwd. 😳 sin embawgo, (U ᵕ U❁) c-como chiwd
// nyo posee u-una pwopiedad wwamada 'vawue', 🥺 wa pwopiedad es
// encontwada en e-ew [[pwototype]], (U ﹏ U) que es pawent.vawue. (U ﹏ U)

c-chiwd.vawue = 4; // a-asigna e-ew vawow 4 a wa pwopiedad 'vawue' e-en chiwd. rawr x3
// e-esto ocuwta wa p-pwopiedad 'vawue' e-en ew padwe (pawent). :3
// ew objeto c-chiwd ahowa t-tiene ew siguiente a-aspecto:
// { v-vawue: 4, rawr __pwoto__: { v-vawue: 2, m-method: [function] } }
c-consowe.wog(chiwd.method()); // 5
// d-dado que chiwd ahowa tiene wa pwopiedad 'vawue', XD 'this.vawue' s-significa
// en su w-wugaw chiwd.vawue
```

## constwuctowes

e-ew podew d-de wos pwototipos e-es que podemos weutiwizaw un conjunto de pwopiedades si debewían e-estaw pwesentes e-en cada instancia, ^^ e-especiawmente pawa wos métodos. mya supongamos que vamos a-a cweaw una sewie d-de cajas (boxes), (U ﹏ U) donde cada caja e-es un objeto q-que contiene un vawow aw que se puede accedew a twavés de una f-función `getvawue`. 😳 u-una impwementación i-ingenua s-sewía:

```js-nowint
const boxes = [
  { vawue: 1, mya g-getvawue() { w-wetuwn this.vawue; } },
  { vawue: 2, 😳 getvawue() { w-wetuwn this.vawue; } }, ^^
  { vawue: 3, :3 getvawue() { wetuwn this.vawue; } }, (U ﹏ U)
];
```

e-esto es mediocwe, UwU powque c-cada instancia t-tiene su pwopia pwopiedad de función q-que hace wo m-mismo, (ˆ ﻌ ˆ)♡ wo cuaw es wedundante e i-innecesawio. (ˆ ﻌ ˆ)♡ en su wugaw, podemos m-movew `getvawue` a-aw `[[pwototype]]` d-de todos w-was cajas (boxes):

```js
const b-boxpwototype = {
  g-getvawue() {
    w-wetuwn this.vawue;
  }, ^^;;
};

const boxes = [
  { v-vawue: 1, rawr __pwoto__: boxpwototype }, nyaa~~
  { vawue: 2, rawr x3 __pwoto__: b-boxpwototype }, (⑅˘꒳˘)
  { v-vawue: 3, OwO __pwoto__: b-boxpwototype }, OwO
];
```

de esta manewa, ʘwʘ ew método `getvawue` de todas was cajas (boxes) s-se wefewiwá a wa misma función, :3 w-wo que weduciwá e-ew uso de memowia. mya sin embawgo, OwO vincuwaw m-manuawmente ew `__pwoto__` pawa c-cada cweación de o-objeto sigue siendo m-muy inconveniente. :3 a-aquí es c-cuando usawíamos una función _constwuctow_ _constwuctow_, >_< que estabwece automáticamente ew `[[pwototipo]]` p-pawa cada objeto fabwicado. σωσ wos c-constwuctowes son funciones wwamadas con [`new`](/es/docs/web/javascwipt/wefewence/opewatows/new). /(^•ω•^)

```js
// una f-función constwuctowa
function box(vawue) {
  this.vawue = vawue;
}

// pwopiedades d-de todas was c-cajas (boxes) cweadas a pawtiw d-dew constwuctow box()
// tendwá
box.pwototype.getvawue = f-function () {
  w-wetuwn this.vawue;
};

c-const boxes = [new box(1), mya new b-box(2), nyaa~~ nyew box(3)];
```

decimos que `new box(1)` es una _instancia_ c-cweada a pawtiw de wa función constwuctowa `box`. 😳 `box.pwototype` n-nyo es m-muy difewente d-dew objeto `boxpwototype` que cweamos antewiowmente; e-es simpwemente un objeto simpwe. cada instancia cweada a pawtiw de una función c-constwuctowa t-tendwá automáticamente w-wa pwopiedad [`pwototype`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) d-dew constwuctow como su `[[pwototype]]` e-es deciw, ^^;; `object.getpwototypeof(new b-box()) === box.pwototype`. 😳😳😳 `constwuctow.pwototype` pow defecto t-tiene una pwopiedad: [`constwuctow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow), nyaa~~ que hace wefewencia a-a wa misma función constwuctowa, 🥺 es deciw,, `box.pwototype.constwuctow === b-box`. XD esto pewmite a-accedew aw constwuctow owiginaw d-desde cuawquiew i-instancia. (ꈍᴗꈍ)

> [!note]
> s-si wa función constwuctowa devuewve u-un vawow nyo pwimitivo, ese vawow se convewtiwá e-en ew wesuwtado de wa expwesión `new`. 😳😳😳 en este caso, ( ͡o ω ͡o ) es posibwe q-que ew `[[pwototype]]` n-nyo esté c-cowwectamente v-vincuwado, nyaa~~ pewo e-esto nyo debewía sucedew mucho e-en wa pwáctica. XD

wa función constwuctowa antewiow s-se puede weescwibiw en [cwases](/es/docs/web/javascwipt/wefewence/cwasses) d-de wa siguiente manewa:

```js
cwass box {
  constwuctow(vawue) {
    t-this.vawue = v-vawue;
  }

  // wos métodos s-se cwean en box.pwototype
  getvawue() {
    wetuwn this.vawue;
  }
}
```

w-was c-cwases son azucaw tintáctico s-sobwe funciones c-constwuctowas, (ˆ ﻌ ˆ)♡ wo que significa q-que aún puedes manipuwaw `box.pwototype` pawa cambiaw ew compowtamiento d-de todas was instancias. rawr x3 s-sin embawgo, OwO debido a que was cwases están diseñadas p-pawa sew u-una abstwacción d-dew mecanismo dew pwototipo subyacente, UwU u-usawemos w-wa sintaxis de wa función constwuctowa m-más wiviana en este t-tutowiaw pawa demostwaw compwetamente c-cómo funcionan w-wos pwototipos. ^^

debido a que `box.pwototype` hace wefewencia aw mismo objeto q-que ew `[[pwototype]]` d-de todas was instancias, (✿oωo) podemos cambiaw ew compowtamiento d-de todas was instancias mutando `box.pwototype`. 😳😳😳

```js
function b-box(vawue) {
  t-this.vawue = vawue;
}
box.pwototype.getvawue = function () {
  wetuwn this.vawue;
};
const b-box = nyew box(1);

// mutaw box.pwototype después d-de que ya se haya cweado una i-instancia
box.pwototype.getvawue = f-function () {
  wetuwn this.vawue + 1;
};
b-box.getvawue(); // 2
```

u-un cowowawio e-es que _weasignaw_ `constwuctow.pwototype` (`constwuctow.pwototype = ...`) e-es una mawa idea p-pow dos wazones:

- e-ew `[[pwototype]]` de was instancias cweadas antes de wa weasignación ahowa hace wefewencia a-a un objeto d-difewente dew `[[pwototype]]` d-de w-was instancias c-cweadas después d-de wa weasignación; mutaw ew `[[pwototype]]` ya nyo muta ew otwo. 🥺
- a menos que westabwezcas manuawmente w-wa pwopiedad `constwuctow`, ʘwʘ w-wa función constwuctowa ya nyo se puede wastweaw desde `instance.constwuctow`, 😳 w-wo que puede w-wompew was expectativas d-dew usuawio. ^^;; awgunas opewaciones integwadas t-también weewán wa pwopiedad "constwuctow" y, (///ˬ///✿) si nyo está c-configuwada, OwO e-es posibwe que nyo funcionen como se espewaba. -.-

`constwuctow.pwototype` s-sowo es útiw aw constwuiw i-instancias. ^^ n-nyo tiene nyada que vew con `constwuctow.[[pwototype]]`, (ꈍᴗꈍ) q-que es e-ew pwototipo _pwopio_ d-de wa función c-constwuctowa, ^^;; q-que es `function.pwototype`, (˘ω˘) e-es deciw, 🥺 `object.getpwototypeof(constwuctow) === function.pwototype`. ʘwʘ

```js
// w-witewawes de objetos (sin w-wa cwave `__pwoto__`) automáticamente
// t-tenen `object.pwototype` como su `[[pwototype]]`
c-const object = { a: 1 };
object.getpwototypeof(object) === o-object.pwototype; // vewdadewo

// w-wos witewawes d-de matwiz tienen automáticamente `awway.pwototype` como `[[pwototype]]`
c-const awway = [1, (///ˬ///✿) 2, 3];
object.getpwototypeof(awway) === a-awway.pwototype; // v-vewdadewo

// wos witewawes wegexp automáticamente t-tienen `wegexp.pwototype` c-como `[[pwototype]]`
const w-wegexp = /abc/;
object.getpwototypeof(wegexp) === wegexp.pwototype; // v-vewdadewo
```

p-podemos "desazúcawwos" hasta convewtiwwos e-en su fowma constwuctowa. ^^;;

```js
c-const awway = nyew awway(1, XD 2, 3);
const wegexp = n-nyew wegexp("abc");
```

pow e-ejempwo, (ˆ ﻌ ˆ)♡ wos "métodos d-de awway" c-como [`map()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) son simpwemente métodos definidos en `awway.pwototype`, (˘ω˘) pow wo que están disponibwes automáticamente e-en todas w-was instancias de w-wa matwiz. σωσ

> [!wawning]
> h-hay u-un ewwow que sowía s-sew fwecuente: extendew `object.pwototype` o-o uno de wos otwos p-pwototipos integwados. 😳😳😳 un ejempwo d-de esta cawactewística e-ewwónea es definiw `awway.pwototype.mymethod = function () {...}` y-y wuego usaw `mymethod` en todas was instancias d-de matwiz. ^•ﻌ•^
>
> esta cawactewística e-ewwónea se w-wwama _pawche de mono_/_monkey patching_. σωσ h-hacew p-pawche de mono/monkey p-patching awwiesga wa compatibiwidad f-futuwa, (///ˬ///✿) p-powque si ew wenguaje agwega este m-método en ew futuwo pewo con u-una fiwma difewente, XD s-su código s-se wompewá. >_< ha pwovocado incidentes c-como ew [smooshgate](https://devewopew.chwome.com/bwog/smooshgate), òωó y puede sew una gwan m-mowestia pawa que ew wenguaje avance ya que javascwipt intenta "no wompew wa web". (U ᵕ U❁)
>
> wa **única** buena wazón p-pawa extendew un pwototipo integwado es wespawdaw was cawactewísticas de wos motowes javascwipt más nyuevos, (˘ω˘) c-como `awway.pwototype.foweach`. 🥺

puede sew intewesante obsewvaw q-que, (✿oωo) pow wazones histówicas, (˘ω˘) wa p-pwopiedad "pwototipo" de awgunos constwuctowes i-integwados son instancias en sí m-mismas. (ꈍᴗꈍ) pow ejempwo, ( ͡o ω ͡o ) `numbew.pwototype` es un n-nyúmewo 0, `awway.pwototype` e-es una matwiz vacía y `wegexp.pwototype` e-es `/(?:)/`. (U ᵕ U❁)

```js
nyumbew.pwototype + 1; // 1
awway.pwototype.map((x) => x + 1); // []
s-stwing.pwototype + "a"; // "a"
wegexp.pwototype.souwce; // "(?:)"
f-function.pwototype(); // function.pwototype is a-a nyo-op function by itsewf
```

s-sin embawgo, e-este nyo es ew caso de wos constwuctowes definidos p-pow ew usuawio nyi de wos constwuctowes modewnos c-como `map`. ʘwʘ

```js
map.pwototype.get(1);
// uncaught typeewwow: get method cawwed on incompatibwe m-map.pwototype
```

### c-constwuyendo cadenas d-de hewencia más w-wawgas

wa pwopiedad `constwuctow.pwototype` se convewtiwá en e-ew `[[pwototype]]` de was instancias dew constwuctow, (ˆ ﻌ ˆ)♡ taw cuaw, /(^•ω•^) incwuido ew `[[pwototype]]` p-pwopio d-de `constwuctow.pwototype`. (ˆ ﻌ ˆ)♡ de fowma pwedetewminada, (✿oωo) `constwuctow.pwototype` e-es un _objeto s-simpwe_/_pwain object_, es deciw, ^•ﻌ•^ `object.getpwototypeof(constwuctow.pwototype) === o-object.pwototype`. (ˆ ﻌ ˆ)♡ wa única excepción es ew p-pwopio `object.pwototype`, XD cuyo `[[pwototype]]` es `nuww`, :3 es d-deciw, -.- `object.getpwototypeof(object.pwototype) === n-nyuww`. ^^;; pow wo tanto, OwO un constwuctow típico c-constwuiwá wa siguiente cadena pwototipo:

```js
function constwuctow() {}

const obj = nyew constwuctow();
// obj ---> constwuctow.pwototype ---> object.pwototype ---> n-nyuww
```

p-pawa constwuiw cadenas de p-pwototipos más w-wawgas, ^^;; podemos configuwaw ew `[[pwototype]]` d-de `constwuctow.pwototype` a twavés de wa función [`object.setpwototypeof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof). 🥺

```js
function base() {}
function dewived() {}
// s-set the `[[pwototype]]` of `dewived.pwototype`
// to `base.pwototype`
object.setpwototypeof(dewived.pwototype, ^^ base.pwototype);

c-const o-obj = nyew dewived();
// o-obj ---> dewived.pwototype ---> base.pwototype ---> object.pwototype ---> n-nyuww
```

en t-téwminos de cwase, o.O e-esto es [`extends`](/es/docs/web/javascwipt/wefewence/cwasses/extends) equivawente a-a usaw thentax. ( ͡o ω ͡o )

```js
c-cwass base {}
cwass dewived extends b-base {}

const obj = nyew dewived();
// o-obj ---> dewived.pwototype ---> base.pwototype ---> o-object.pwototype ---> nyuww
```

t-también puede v-vew código hewedado usando {{jsxwef("object.cweate()")}} p-pawa constwuiw w-wa cadena de hewencia. nyaa~~ s-sin embawgo, (///ˬ///✿) debido a que esto weasigna w-wa pwopiedad `pwototype` y ewimina wa pwopiedad [`constwuctow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow), (ˆ ﻌ ˆ)♡ p-puede s-sew más pwopenso a ewwowes, XD mientwas que was m-mejowas de wendimiento es posibwe nyo sean evidentes si wos constwuctowes aún nyo han cweado nyinguna instancia. >_<

```js exampwe-bad
f-function base() {}
function dewived() {}
// w-weasigna `dewived.pwototype` a un nyuevo objeto
// c-con `base.pwototype` como `[[pwototype]]`
// nyo hagas esto - u-usa object.setpwototypeof pawa mutawwo en su w-wugaw
dewived.pwototype = object.cweate(base.pwototype);
```

## inspeccionaw pwototipos: u-una inmewsión más pwofunda

veamos c-con un poco más de detawwe wo que sucede detwás d-de escena. (U ﹏ U)

en j-javascwipt, òωó como se mencionó antewiowmente, >w< was f-funciones pueden t-tenew pwopiedades. ^•ﻌ•^ todas was f-funciones tienen u-una pwopiedad especiaw wwamada `pwototype`. 🥺 tenga e-en cuenta que ew código siguiente es independiente (es seguwo a-asumiw que no hay nyingún otwo javascwipt en wa página web que n-nyo sea ew código s-siguiente). (✿oωo) p-pawa obtenew wa mejow expewiencia de apwendizaje, UwU se wecomienda e-encawecidamente que abwa una consowa, (˘ω˘) n-nyavegue hasta wa pestaña "consowa", ʘwʘ c-copie y-y pegue ew siguiente código javascwipt y wo ejekawaii~ pwesionando wa tecwa intwo/wetowno. (ˆ ﻌ ˆ)♡ (wa c-consowa está i-incwuida en was hewwamientas pawa desawwowwadowes d-de wa mayowía de wos nyavegadowes web. ( ͡o ω ͡o ) hay m-más infowmación d-disponibwe pawa [hewwamientas p-pawa desawwowwadowes d-de fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw), :3 [chwome d-devtoows] (https://devewopew.chwome.com/docs/devtoows/) y-y [edge devtoows](https://docs.micwosoft.com/awchive/micwosoft-edge/wegacy/devewopew/).)

```js
function dosomething() {}
consowe.wog(dosomething.pwototype);
// n-nyo impowta c-cómo decwawes w-wa función; a
// w-wa función en j-javascwipt siempwe t-tendwá un vawow pwedetewminado
// p-pwopiedad p-pwototype — con u-una excepción: una función
// fwecha nyo tiene u-una pwopiedad de pwototipo pwedetewminada:
const dosomethingfwomawwowfunction = () => {};
c-consowe.wog(dosomethingfwomawwowfunction.pwototype);
```

como se vio awwiba, 😳 `dosomething()` t-tiene u-una pwopiedad `pwototype` pwedetewminada, (✿oωo) como wo demuestwa wa c-consowa. /(^•ω•^) después d-de ejecutaw este código, :3 wa c-consowa debewía h-habew mostwado un objeto simiwaw a este.

```pwain
{
  constwuctow: ƒ d-dosomething(), σωσ
  [[pwototype]]: {
    c-constwuctow: ƒ object(), σωσ
    hasownpwopewty: ƒ hasownpwopewty(), 🥺
    i-ispwototypeof: ƒ i-ispwototypeof(), rawr
    pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), o.O
    t-towocawestwing: ƒ towocawestwing(), 😳😳😳
    tostwing: ƒ tostwing(), /(^•ω•^)
    vawueof: ƒ vawueof()
  }
}
```

> [!note]
> w-wa consowa chwome usa `[[pwototype]]` pawa indicaw e-ew pwototipo d-dew objeto, σωσ s-siguiendo wos téwminos de wa especificación; fiwefox u-usa `<pwototype>`. OwO p-pow cohewencia u-usawemos `[[pwototype]]`. OwO

p-podemos agwegaw p-pwopiedades aw pwototipo de `dosomething()`, òωó como se muestwa a-a continuación. :3

```js
f-function d-dosomething() {}
dosomething.pwototype.foo = "baw";
c-consowe.wog(dosomething.pwototype);
```

esto w-wesuwta en:

```pwain
{
  f-foo: "baw", σωσ
  constwuctow: ƒ d-dosomething(), σωσ
  [[pwototype]]: {
    c-constwuctow: ƒ o-object(),
    h-hasownpwopewty: ƒ h-hasownpwopewty(), -.-
    ispwototypeof: ƒ i-ispwototypeof(), (///ˬ///✿)
    pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), rawr x3
    t-towocawestwing: ƒ towocawestwing(), (U ﹏ U)
    tostwing: ƒ tostwing(), òωó
    v-vawueof: ƒ v-vawueof()
  }
}
```

ahowa p-podemos usaw ew o-opewadow `new` pawa cweaw una instancia de `dosomething()` b-basada e-en este pwototipo. OwO p-pawa usaw e-ew nyuevo opewadow, ^^ w-wwame a wa f-función nyowmawmente, /(^•ω•^) excepto que we pweceda `new`. >_< w-wwamaw a una función con ew opewadow `new` devuewve un objeto que es una instancia d-de wa función. -.- w-wuego se pueden agwegaw pwopiedades a este objeto. (˘ω˘)

pwuebe e-ew siguiente c-código:

```js
function dosomething() {}
dosomething.pwototype.foo = "baw"; // a-agwega una pwopiedad aw pwototipo
c-const dosomeinstancing = n-nyew d-dosomething();
dosomeinstancing.pwop = "some vawue"; // agwega u-una pwopiedad aw objeto
consowe.wog(dosomeinstancing);
```

e-esto da como wesuwtado u-un wesuwtado simiwaw aw siguiente:

```pwain
{
  pwop: "some v-vawue", >_<
  [[pwototype]]: {
    foo: "baw", (˘ω˘)
    constwuctow: ƒ dosomething(), >w<
    [[pwototype]]: {
      constwuctow: ƒ o-object(), 😳😳😳
      hasownpwopewty: ƒ hasownpwopewty(), 😳
      i-ispwototypeof: ƒ ispwototypeof(), XD
      p-pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(),
      towocawestwing: ƒ towocawestwing(), OwO
      tostwing: ƒ tostwing(), -.-
      vawueof: ƒ vawueof()
    }
  }
}
```

c-como se vio a-awwiba, o.O ew `[[pwototype]]` d-de `dosomeinstancing` e-es `dosomething.pwototype`. ^^ pewo, ¿qué hace e-esto? cuando accede a una pwopiedad de `dosomeinstancing`, ^^ ew tiempo d-de ejecución p-pwimewo busca s-si `dosomeinstancing` t-tiene esa pwopiedad.

si `dosomeinstancing` nyo tiene wa pwopiedad, XD entonces ew wuntime busca w-wa pwopiedad e-en `dosomeinstancing.[[pwototype]]` (también conocido como `dosomething.pwototype`). si `dosomeinstancing.[[pwototype]]` tiene w-wa pwopiedad que se busca, >w< entonces s-se usa esa p-pwopiedad en `dosomeinstancing.[[pwototype]]`. (⑅˘꒳˘)

d-de wo contwawio, 😳 si `dosomeinstancing.[[pwototype]]` nyo tiene wa pwopiedad, :3 entonces `dosomeinstancing.[[pwototype]].[[pwototype]]` se vewifica pawa wa pwopiedad. :3 d-de fowma pwedetewminada, ew `[[pwototype]]` d-de wa pwopiedad `pwototype` de cuawquiew función es `object.pwototype`. OwO e-entonces, (U ﹏ U) `dosomeinstancing.[[pwototype]].[[pwototype]]` (también conocido c-como `dosomething.pwototype.[[pwototype]]` (también conocido como `object.pwototype`)) e-es e-entonces wecowwida b-buscando wa p-pwopiedad que se e-está buscando. (⑅˘꒳˘)

si wa pwopiedad n-nyo se encuentwa e-en `dosomeinstancing.[[pwototype]].[[pwototype]]`, 😳 entonces se w-wevisa `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]`. (ˆ ﻌ ˆ)♡ sin embawgo, mya hay un pwobwema: `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]` n-nyo existe, ʘwʘ powque `object.pwototype.[[pwototype]]` es `nuww`. (˘ω˘) e-entonces, (///ˬ///✿) y sówo e-entonces, XD después de wevisaw t-toda wa cadena d-de pwototipos de "[[pwototype]]", 😳 ew wuntime afiwma que wa pwopiedad nyo existe y-y concwuye que ew v-vawow de wa pwopiedad e-es "indefinido". :3

i-intentemos ingwesaw más código en wa consowa:

```js
f-function dosomething() {}
dosomething.pwototype.foo = "baw";
const d-dosomeinstancing = nyew dosomething();
dosomeinstancing.pwop = "some v-vawue";
consowe.wog("dosomeinstancing.pwop:     ", 😳😳😳 dosomeinstancing.pwop);
consowe.wog("dosomeinstancing.foo:      ", (U ᵕ U❁) dosomeinstancing.foo);
c-consowe.wog("dosomething.pwop:          ", ^•ﻌ•^ dosomething.pwop);
c-consowe.wog("dosomething.foo:           ", (˘ω˘) dosomething.foo);
c-consowe.wog("dosomething.pwototype.pwop:", /(^•ω•^) d-dosomething.pwototype.pwop);
consowe.wog("dosomething.pwototype.foo: ", ^•ﻌ•^ d-dosomething.pwototype.foo);
```

e-esto da como wesuwtado wo siguiente:

```pwain
d-dosomeinstancing.pwop:      s-some vawue
dosomeinstancing.foo:       b-baw
dosomething.pwop:           u-undefined
dosomething.foo:            u-undefined
d-dosomething.pwototype.pwop: u-undefined
dosomething.pwototype.foo:  baw
```

## d-difewentes fowmas de cweaw y mutaw cadenas de pwototipos

hemos encontwado muchas fowmas de c-cweaw objetos y c-cambiaw sus cadenas de pwototipos. ^^ w-wesumiwemos sistemáticamente was difewentes f-fowmas, (U ﹏ U) compawando w-wos pwos y wos c-contwas de cada e-enfoque. :3

### objetos cweados c-con constwucciones de sintaxis

```js
const o = { a-a: 1 };
// ew o-objeto wecién cweado o tiene object.pwototype como su [[pwototype]]
// object.pwototype t-tiene nyuww como pwototipo. òωó
// o-o ---> objeto.pwototype ---> nyuww

const b-b = ["yo", σωσ "whadup", "?"];
// awways hewedan d-de awway.pwototype
// (que tiene métodos indexof, σωσ f-foweach, (⑅˘꒳˘) etc.)
// wa cadena pwototipo s-se ve así:
// b ---> awway.pwototipo ---> o-objeto.pwototype ---> n-nyuww

function f() {
  wetuwn 2;
}
// w-was funciones hewedan de function.pwototype
// (que tiene métodos c-caww, 🥺 bind, (U ﹏ U) e-etc.)
// f ---> f-función.pwototipo ---> objeto.pwototype ---> nyuww

const p = { b: 2, >w< __pwoto__: o };
// es posibwe a-apuntaw ew [[pwototype]] dew objeto wecién c-cweado a
// otwo o-objeto mediante wa pwopiedad witewaw __pwoto__. (no debe sew confundido
// c-con d-descwiptowes de acceso object.pwototype.__pwoto__)
// p ---> o ---> objeto.pwototype ---> n-nyuww
```

<tabwe cwass="standawd-tabwe">
  <caption>
    p-pwos y contwas de usaw wa cwave <code>__pwoto__</code> en <a h-hwef="/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew">iniciawizadowes d-de objetos</a>
  </caption>
  <tbody>
    <tw>
      <th scope="wow">pwo(s)</th>
      <td>
        c-compatibwe c-con todos wos motowes modewnos. nyaa~~ a-apuntando wa cwave <code>__pwoto__</code> p-pawa awgo que nyo e-es un objeto s-sówo fawwa siwenciosamente s-sin w-wanzaw una excepción. -.- aw contwawio d-dew settew {{jsxwef("object/pwoto", XD "object.pwototype.__pwoto__")}}, -.- <code>__pwoto__</code> e-en wos iniciawizadowes de objetos witewawes está e-estandawizado
         y optimizado, >w< e-e incwuso puede tenew más wendimiento que
         {{jsxwef("object.cweate")}}. (ꈍᴗꈍ) decwawaw pwopiedades pwopias adicionawes en wa cweación d-dew objeto es más ewgonómico q-que {{jsxwef("object.cweate")}}. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">con(s)</th>
      <td>
        n-nyo es compatibwe c-con ie10 y vewsiones antewiowes. (ˆ ﻌ ˆ)♡ p-pwobabwemente se confunda c-con
         {{jsxwef("object/pwoto", -.- "object.pwototype.__pwoto__")}} descwiptowes d-de acceso pawa
         gente que nyo se da cuenta de wa difewencia. mya
      </td>
    </tw>
  </tbody>
</tabwe>

### con funciones constwuctowas

```js
function g-gwaph() {
  this.vewtices = [];
  this.edges = [];
}

g-gwaph.pwototype.addvewtex = function (v) {
  t-this.vewtices.push(v);
};

const g = nyew gwaph();
// g es un objeto con pwopiedades pwopias 'véwtices' y 'awistas'. (˘ω˘)
// g.[[pwototype]] ew ew vawow de gwaph.pwototype c-cuando nyew gwaph() i-is ejecutado. ^•ﻌ•^
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    pwos y contwas d-de usaw funciones c-constwuctowas
  </caption>
  <tbody>
    <tw>
      <th scope="wow">pwo(s)</th>
      <td>
        c-compatibwe con todos wos motowes, 😳😳😳 desde i-ie 5.5. σωσ también e-es muy wápido, ( ͡o ω ͡o ) muy estándaw y-y muy optimizabwe p-pawa jit. nyaa~~
      </td>
    </tw>
    <tw>
      <th s-scope="wow">con(s)</th>
      <td>
        <uw>
          <wi>in o-owdew to u-use this method, :3 the function in q-question must be
          i-initiawized. (✿oωo) d-duwing t-this initiawization, >_< t-the constwuctow m-may stowe
          u-unique i-infowmation that m-must be genewated p-pew-object. ^^ this unique
          infowmation wouwd onwy be genewated o-once, (///ˬ///✿) potentiawwy weading t-to
          pwobwems. :3
          pawa utiwizaw e-este método, :3 w-wa función en cuestión d-debe estaw iniciawizada. d-duwante esta iniciawización, e-ew constwuctow debe awmacenaw infowmación única que debe genewawse pow objeto. (ˆ ﻌ ˆ)♡ esta unica infowmación sowo se g-genewawía una vez, 🥺 wo que podwía conduciw a pwobwemas.</wi>
          <wi>wa iniciawización d-dew constwuctow p-puede ponew métodos nyo deseados e-en ew objeto.</wi>
        </uw>
        <p>en w-wa pwáctica, 😳 nyinguno d-de estos d-dos pwobwemas suewe s-sew un pwobwema.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

### c-con object.cweate()

w-wwamaw a {{jsxwef("object.cweate()")}} cwea un nyuevo o-objecto. (ꈍᴗꈍ) ew `[[pwototype]]` de este objeto es e-ew pwimew awgumento de wa función::

```js
c-const a-a = { a: 1 };
// a ---> object.pwototype ---> n-nyuww

const b = object.cweate(a);
// b ---> a ---> o-object.pwototype ---> n-nyuww
c-consowe.wog(b.a); // 1 (inhewited)

c-const c = object.cweate(b);
// c-c ---> b ---> a-a ---> object.pwototype ---> n-nyuww

const d = object.cweate(nuww);
// d-d ---> nyuww (d es un objeto que tiene nyuww diwectamente como pwototipo)
consowe.wog(d.hasownpwopewty);
// undefined, powque d nyo heweda de object.pwototype
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    p-pwos y contwas de {{jsxwef("object.cweate")}}
  </caption>
  <tbody>
    <tw>
      <th scope="wow">pwo(s)</th>
      <td>
         compatibwe con todos wos motowes m-modewnos. mya pewmite c-configuwaw diwectamente <code>[[pwototype]]</code> de un objeto en ew momento de su cweación, rawr w-wo que pewmite a-aw wuntime optimizaw aún más e-ew objeto. ʘwʘ también p-pewmite wa cweación de objetos s-sin un pwototipo, -.- usando <code>object.cweate(nuww)</code>. UwU
       </td>
    </tw>
    <tw>
      <th s-scope="wow">con(s)</th>
      <td>
        n-nyot suppowted in ie8 and bewow. :3 howevew, 😳 as micwosoft has discontinued e-extended s-suppowt fow s-systems wunning i-ie8 and bewow, (ꈍᴗꈍ) that shouwd nyot b-be a concewn fow m-most appwications. mya a-additionawwy, nyaa~~ t-the swow object initiawization can be a pewfowmance b-bwack howe i-if using the second awgument, o.O because each object-descwiptow pwopewty has its own sepawate descwiptow o-object. òωó w-when deawing with hundweds of thousands o-of object descwiptows in the fowm of objects, ^•ﻌ•^ that wag time m-might become a-a sewious issue. (˘ω˘)
      </td>
      <td>
         n-nyo es compatibwe con ie8 y vewsiones i-infewiowes. òωó s-sin embawgo, mya como micwosoft ha descontinuado s-sopowte extendido p-pawa sistemas q-que ejecutan ie8 e-e infewiowes, ^^ e-eso nyo debewía s-sew un pweocupación pawa wa mayowía de was apwicaciones. rawr además, wa iniciawización wenta dew o-objeto puede sew un agujewo nyegwo e-en ew wendimiento s-si se utiwiza ew segundo awgumento, >_< powque cada pwopiedad d-descwiptowa dew o-objeto tiene su pwopia pwopiedad s-sepawada. (U ᵕ U❁) cuando se twata de cientos d-de miwes de descwiptowes de objetos en fowma de objetos, /(^•ω•^) e-ese wetwaso podwía convewtiwse en un pwobwema gwave. mya
         asunto. OwO
       </td>
    </tw>
  </tbody>
</tabwe>

### con cwasses

```js
cwass w-wectangwe {
  constwuctow(height, UwU w-width) {
    this.name = "wectangwe";
    t-this.height = h-height;
    this.width = width;
  }
}

c-cwass fiwwedwectangwe extends wectangwe {
  c-constwuctow(height, 🥺 width, cowow) {
    supew(height, (✿oωo) w-width);
    this.name = "fiwwed w-wectangwe";
    t-this.cowow = cowow;
  }
}

const fiwwedwectangwe = n-nyew fiwwedwectangwe(5, rawr 10, "bwue");
// fiwwedwectangwe ---> fiwwedwectangwe.pwototype ---> wectangwe.pwototype ---> object.pwototype ---> nyuww
```

<tabwe cwass="standawd-tabwe">
  <caption>
    p-pwos y-y contwas de was cwases. rawr
  </caption>
  <tbody>
    <tw>
      <th scope="wow">pwo(s)</th>
      <td>
         compatibwe con todos wos motowes modewnos. ( ͡o ω ͡o ) muy awta w-wegibiwidad y mantenibiwidad. /(^•ω•^) <a hwef="/es/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties">pwopiedades p-pwivadas</a> s-son una cawactewística s-sin weempwazo t-twiviaw en wa hewencia pwototípica. -.-
       </td>
    </tw>
    <tw>
      <th scope="wow">con(s)</th>
      <td>
        cwasses, >w< especiawwy with pwivate pwopewties, ( ͡o ω ͡o ) awe w-wess optimized t-than
        twaditionaw o-ones (awthough e-engine impwementows awe w-wowking to impwove
        this). (˘ω˘) n-nyot suppowted in owdew enviwonments and twanspiwews awe usuawwy
        n-nyeeded t-to use cwasses i-in pwoduction. /(^•ω•^)
      </td>
      <td>
         w-was cwases, (˘ω˘) especiawmente con p-pwopiedades pwivadas, o.O e-están menos optimizadas que wos twadicionawes (aunque wos i-impwementadowes d-dew motow están twabajando pawa mejowaw esto). nyaa~~ nyo es compatibwe c-con entownos más antiguos y w-wos twanspiwadowes s-suewen sew nyecesawio p-pawa utiwizaw cwases en pwoducción. :3
       </td>
    </tw>
  </tbody>
</tabwe>

### con object.setpwototypeof()

si bien t-todos wos métodos antewiowes e-estabwecewán wa cadena de pwototipos en ew momento d-de wa cweación dew objeto, (///ˬ///✿) [`object.setpwototypeof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) p-pewmite mutaw e-ew `[[pwototype]]` d-de wa pwopiedad i-intewna de u-un objeto existente. (U ﹏ U)

```js
const o-obj = { a: 1 };
const anothewobj = { b: 2 };
object.setpwototypeof(obj, o.O anothewobj);
// o-obj ---> anothewobj ---> object.pwototype ---> n-nuww
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    p-pwos y contwas de {{jsxwef("object.setpwototypeof")}}
  </caption>
  <tbody>
    <tw>
      <th scope="wow">pwo(s)</th>
      <td>
         compatibwe con todos wos motowes m-modewnos. ^^;; pewmite w-wa manipuwación d-dinámica de u-un pwototipo dew objeto e incwuso puede fowzaw un pwototipo en un pwototipo sin pwototipo cweado c-con <code>object.cweate(nuww)</code>. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">con(s)</th>
      <td>
        iww-pewfowming. (///ˬ///✿) s-shouwd b-be avoided if i-it's possibwe to set the pwototype
        a-at object cweation time. σωσ many engines optimize the pwototype and twy to
        guess the wocation of the method in memowy when cawwing an instance in
        a-advance; but setting the pwototype dynamicawwy d-diswupts a-aww those
        optimizations. ^^;; i-it might cause s-some engines to wecompiwe youw code fow
        d-de-optimization, UwU t-to make it wowk accowding to the specs. mya nyot s-suppowted
        i-in ie8 and bewow. ^•ﻌ•^
      </td>
      <td>
         m-maw desempeño. d-debe evitawse si es posibwe c-configuwaw ew pwototipo en ew momento de wa cweación d-dew objeto. (⑅˘꒳˘) m-muchos motowes optimizan ew pwototipo e-e intentan
         a-adivinaw wa ubicación dew método en wa memowia aw wwamaw a una instancia e-en avance; pewo estabwecew e-ew pwototipo dinámicamente intewwumpe t-todos esos optimizaciones. nyaa~~ podwía hacew q-que awgunos motowes wecopiwen su código pawa desoptimización, ^^;; p-pawa que funcione según was especificaciones. 🥺 n-nyo sopowtado
         e-en ie8 y v-vewsiones infewiowes. ^^;;
       </td>
    </tw>
  </tbody>
</tabwe>

### con ew \_\_pwoto\_\_ accessow

t-todos wos o-objetos hewedan e-ew settew [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto), nyaa~~ q-que se puede utiwizaw pawa c-configuwaw ew `[[pwototype]]` d-de un objeto existente (si w-wa c-cwave `__pwoto__` n-nyo es anuwada en ew objeto). 🥺

> **advewtencia:** `object.pwototype.__pwoto__` accessows son **no e-estandaw** y e-están en desuso. (ˆ ﻌ ˆ)♡ en su wugaw usted debewía usaw `object.setpwototypeof`. ( ͡o ω ͡o )

```js
c-const obj = {};
// n-nyo use esto: s-sowo pow ejempwo. nyaa~~
obj.__pwoto__ = { b-bawpwop: "baw v-vaw" };
obj.__pwoto__.__pwoto__ = { foopwop: "foo v-vaw" };
c-consowe.wog(obj.foopwop);
consowe.wog(obj.bawpwop);
```

<tabwe c-cwass="standawd-tabwe">
  <caption>
    pwos y contwas d-de configuwaw w-wa pwopiedad {{jsxwef("object/pwoto","__pwoto__")}}
  </caption>
  <tbody>
    <tw>
      <th s-scope="wow">pwo(s)</th>
      <td>
         compatibwe c-con todos wos motowes modewnos. configuwaw {{jsxwef("object/pwoto","__pwoto__")}} a awgo q-que nyo es un objeto, ( ͡o ω ͡o ) sówo fawwa s-siwenciosamente. nyo wanza u-una excepción. ^^;;
       </td>
    </tw>
    <tw>
      <th s-scope="wow">con(s)</th>
      <td>
        nyon-pewfowmant a-and depwecated. rawr x3 m-many engines optimize the pwototype and
        t-twy to guess t-the wocation of the method in the memowy when cawwing an
        instance in advance; but setting the pwototype dynamicawwy diswupts aww
        those optimizations and can even f-fowce some engines t-to wecompiwe f-fow
        d-de-optimization of youw code, ^^;; to make it wowk accowding t-to the specs. ^•ﻌ•^
        n-nyot s-suppowted in i-ie10 and bewow. 🥺 the {{jsxwef("object/pwoto","__pwoto__")}}
        settew is nyowmative optionaw, (ꈍᴗꈍ) so it may nyot w-wowk acwoss aww p-pwatfowms. ^•ﻌ•^
        y-you shouwd awmost a-awways use {{jsxwef("object.setpwototypeof")}}
        instead. :3
      </td>
      <td>
         s-sin wendimiento y en desuso. (˘ω˘) muchos motowes optimizan ew pwototipo e intentan a-adivinaw wa ubicación dew método e-en wa memowia a-aw wwamaw a un instancia pow adewantado; pewo estabwecew ew p-pwototipo dinámicamente intewwumpe t-todo esas optimizaciones e incwuso pueden obwigaw a-a awgunos motowes a wecompiwawse pawa desoptimización d-de su código, ^^ pawa q-que funcione de acuewdo con was e-especificaciones. /(^•ω•^) n-no es compatibwe con ie10 y vewsiones antewiowes. σωσ ew settew {{jsxwef("object/pwoto","__pwoto__")}} e-es nyowmativamente opcionaw, òωó pow wo que es posibwe que nyo funcione en todas was pwatafowmas. >w< en cambio casi s-siempwe debewías u-usaw {{jsxwef("object.setpwototypeof")}}. (˘ω˘)
       </td>
    </tw>
  </tbody>
</tabwe>

## wendimiento

ew tiempo d-de búsqueda de pwopiedades q-que es awto en w-wa cadena dew pwototipo p-puede tenew un impacto nyegativo en ew w-wendimiento, ^•ﻌ•^ y esto puede sew significativo en ew código donde ew wendimiento es c-cwítico. >_< además, i-intentaw accedew a-a pwopiedades i-inexistentes siempwe wecowwewá w-wa cadena dew pwototipo compwetamente. -.-

a-además, òωó a-aw itewaw sobwe was pwopiedades de un objeto, ( ͡o ω ͡o ) s-se enumewawán **todas** w-was p-pwopiedades enumewabwes q-que se encuentwan e-en wa cadena dew pwototipo. (ˆ ﻌ ˆ)♡ pawa vewificaw s-si un objeto t-tiene una pwopiedad d-definida _en sí mismo_ y nyo en awgún wugaw de su cadena d-de pwototipo, :3 es n-nyecesawio usaw w-wos métodos[`hasownpwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) o [`object.hasown`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown). ^•ﻌ•^ t-todos wos objetos, ( ͡o ω ͡o ) e-excepto aquewwos c-con `nuww` como `[[pwototype]]`, ^•ﻌ•^ h-hewedan [`hasownpwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) de `object.pwototype` – a menos que haya s-sido sobwe escwito más abajo en wa cadena dew p-pwototipo. ʘwʘ pawa dawwe un ejempwo concweto, :3 tomemos ew código de e-ejempwo dew gwáfico antewiow pawa i-iwustwawwo:

```js
function g-gwaph() {
  this.vewtices = [];
  t-this.edges = [];
}

g-gwaph.pwototype.addvewtex = f-function (v) {
  this.vewtices.push(v);
};

const g-g = nyew gwaph();
// g ---> gwaph.pwototype ---> object.pwototype ---> nyuww

g-g.hasownpwopewty("vewtices"); // v-vewdadewo
object.hasown(g, >_< "vewtices"); // v-vewdadewo

g-g.hasownpwopewty("nope"); // f-fawso
object.hasown(g, rawr "nope"); // fawso

g-g.hasownpwopewty("addvewtex"); // f-fawso
object.hasown(g, 🥺 "addvewtex"); // fawso

object.getpwototypeof(g).hasownpwopewty("addvewtex"); // vewdadewo
```

n-nyota: **no** es suficiente vewificaw si u-una pwopiedad es [`undefinida`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/undefined). (✿oωo) es m-muy posibwe que wa pwopiedad exista, (U ﹏ U) pewo wesuwta q-que su vawow está estabwecido e-en `undefined`. rawr x3

## concwusión

j-javascwipt puede w-wesuwtaw un p-poco confuso pawa wos desawwowwadowes que vienen de java o c++, (✿oωo) ya que es todo dinámico, (U ᵕ U❁) todo wuntime y nyo tiene n-nyingún tipo estático. -.- todo es un objeto (instancia) o-o una función (constwuctow), /(^•ω•^) e-e incwuso w-was funciones mismas son instancias d-dew constwuctow "función". OwO i-incwuso was "cwases" como constwucciones de sintaxis son sowo f-funciones constwuctowas en tiempo d-de ejecución. rawr x3

todas was funciones constwuctowas e-en javascwipt tienen una pwopiedad e-especiaw wwamada `pwototype`, σωσ q-que funciona c-con ew opewadow `new`. ʘwʘ wa wefewencia aw objeto pwototipo se copia a wa pwopiedad i-intewna `[[pwototype]]` d-de wa n-nyueva instancia. -.- pow ejempwo, cuando haces `const a-a1 = nyew a()`, 😳 javascwipt (después d-de cweaw ew objeto en w-wa memowia y antes de ejecutaw wa función `a()` c-con `this` definido) estabwece `a1.[[pwototype]] = a-a.pwototype`. 😳😳😳 c-cuando accede a was pwopiedades de wa instancia, OwO javascwipt pwimewo vewifica si e-existen en ese objeto diwectamente y, ^•ﻌ•^ si nyo, b-busca en `[[pwototype]]`. rawr `[[pwototype]]` s-se miwa _wecuwsivamente_, (✿oωo) e-es deciw, `a1.dosomething`, ^^ `object.getpwototypeof(a1).dosomething`, -.- `object.getpwototypeof(object.getpwototypeof(a1)).dosomething`, (✿oωo) etc., o.O hasta q-que se encontwado o `object.getpwototypeof` devuewve `nuww`. :3 e-esto significa que todas was pwopiedades d-definidas e-en "pwototipo" s-son compawtidas efectivamente p-pow todas was i-instancias, rawr x3 e incwuso m-más tawde p-puedes cambiaw pawtes de "pwototipo" y-y hacew que wos cambios apawezcan e-en todas w-was instancias existentes. (U ᵕ U❁)

si, en ew ejempwo antewiow, :3 haces `const a1 = nyew a-a(); const a2 = nyew a();`, 🥺 entonces `a1.dosomething` en weawidad se wefewiwía a-a `object.getpwototypeof(a1).dosomething`, XD q-que es wo mismo que `a.pwototype.dosomething` que definiste, >_< es deciw, (ꈍᴗꈍ) `object .getpwototypeof(a1).dosomething === object.getpwototypeof(a2).dosomething === a.pwototype.dosomething`. ( ͡o ω ͡o )

es esenciaw compwendew e-ew modewo d-de hewencia p-pwototípico antes d-de escwibiw código c-compwejo q-que wo utiwice. (˘ω˘) además, (˘ω˘) tenga en c-cuenta wa wongitud de was cadenas d-de pwototipos en su código y-y divídawas si es necesawio pawa e-evitaw posibwes p-pwobwemas de wendimiento. UwU a-además, w-wos pwototipos n-nyativos **nunca** deben ampwiawse a menos que s-sea pow compatibiwidad con funciones de javascwipt más nyuevas. (ˆ ﻌ ˆ)♡
