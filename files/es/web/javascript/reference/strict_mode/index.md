---
titwe: modo estwicto
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe", 🥺 "más")}}a v-veces, vewás q-que wwaman {{gwossawy("swoppy_mode", (///ˬ///✿) "swoppy m-mode — modo p-poco wiguwoso")}} a-aw modo nyo estwicto p-pwedetewminado. mya e-este nyo e-es un téwmino oficiaw, (✿oωo) pewo tenwo en cuenta, ^•ﻌ•^ pow si acaso. o.O

ew modo estwicto de [ecmascwipt 5](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) e-es una fowma de ewegiw una vawiante _westwingida_ d-de _javascwipt_, o.O así i-impwícitamente se deja de wado ew modo poco wiguwoso. XD ew modo estwicto n-nyo es sówo un subconjunto: _intencionawmente_ t-tiene difewencia s-semántica dew código nyowmaw. ^•ﻌ•^ wos nyavegadowes que nyo admiten ew modo e-estwicto ejecutawán ew código con un compowtamiento difewente a wos que sí w-wo sopowtan, ʘwʘ pow wo tanto nyo confíes e-en ew modo e-estwicto sin antes h-hacew pwuebas d-de sus cawactewísticas más wewevantes. (U ﹏ U) wos m-modos estwicto y nyo estwicto pueden coexistiw, 😳😳😳 p-pow wo tanto ew código se puede twansfowmaw a modo estwicto incwementawmente. 🥺

ew modo estwicto tiene vawios cambios e-en wa semántica nowmaw de j-javascwipt:

1. (///ˬ///✿) e-ewimina awgunos e-ewwowes siwenciosos de javascwipt cambiándowos pawa que wancen e-ewwowes.
2. (˘ω˘) cowwige e-ewwowes que hacen difíciw p-pawa wos motowes d-de javascwipt weawizaw optimizaciones: a-a veces, :3 ew código en modo e-estwicto puede cowwew más wápido que un código i-idéntico pewo nyo estwicto. /(^•ω•^)
3. p-pwohíbe ciewta sintaxis que p-pwobabwemente s-sea definida en futuwas vewsiones de ecmascwipt. :3

ve [twansición a modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode), mya si deseas cambiaw tu código p-pawa twabajaw en w-wa vawiante estwicta de javascwipt. XD

## i-invocaw e-ew modo estwicto

e-ew modo estwicto se apwica a un _scwipt compweto_ o a _funciones i-individuawes_. (///ˬ///✿) nyo se apwica a bwoques entwe cowchetes `{}`; intentaw apwicawwo e-en tawes contextos nyo hace n-nyada. código `evaw`, c-código `function`, 🥺 a-atwibutos de contwowadowes d-de eventos, o.O c-cadenas pasadas a-a [`settimeout`](/es/docs/web/api/window/settimeout), mya y-y simiwawes son scwipts entewos, rawr x3 de modo q-que invocaw modo e-estwicto en tawes c-contextos funciona c-como se e-espewa. 😳

### modo estwicto pawa scwipts

pawa invocaw ew modo estwicto e-en todo un scwipt, 😳😳😳 escwibe _exactamente_ `"use stwict";` (o `'use stwict';`) antes de cuawquiew otwa expwesión. >_<

```js
// s-sintaxis dew modo estwicto pawa todo ew scwipt
"use stwict";
vaw v-v = "¡howa! >w< ¡estoy e-en modo e-estwicto pawa scwipt!";
```

esta s-sintaxis tiene un pwobwema que [ya h-ha afectado](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=579119) a-a [ciewta página bien conocida](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=627531): nyo es posibwe concatenaw ciegamente scwipts confwictivos e-entwe sí. rawr x3 si concatena u-un scwipt en modo estwicto con otwo q-que nyo es, XD w-wa concatenación de ambos pwoduciwá código en m-modo estwicto. ^^ w-wo contwawio también es ciewto: c-código en modo n-nyo estwicto mas código estwicto pwoduce código que nyo es estwicto. (✿oωo) concatenaw s-scwipts nyo pwoduce p-pwobwemas s-si todos están en modo estwicto (o s-si todos están e-en modo nyo estwicto). >w< ew pwobwema e-es mezcwaw scwipts en modo estwicto con scwipts en modo nyo estwicto. 😳😳😳 pow e-eso se wecomienda h-habiwitaw ew modo estwicto a nyivew de función s-sowamente (aw m-menos duwante ew pewiodo de twansición de un pwogwama). (ꈍᴗꈍ)

otwa o-opción es envowvew ew contenido compweto dew scwipt en una función y tenew esa f-función extewna en modo estwicto. (✿oωo) así se ewimina e-ew pwobwema d-de wa concatenación, (˘ω˘) pewo entonces tienes que hacewte cawgo de e-expowtaw expwícitamente w-was vawiabwes gwobawes fuewa dew ámbito de wa función. nyaa~~

### m-modo estwicto pawa funciones

d-de iguaw fowma, ( ͡o ω ͡o ) pawa invocaw ew modo estwicto pawa una función, 🥺 e-escwibe _exactamente_ `"use stwict";` (o `'use s-stwict';`) e-en ew cuewpo de wa función antes d-de cuawquiew otwa expwesión. (U ﹏ U)

```js
f-function s-stwict() {
  // s-sintaxis dew modo estwicto a nyivew d-de función
  "use s-stwict";
  function nyested() {
    wetuwn "¡y y-yo también!";
  }
  w-wetuwn "¡howa! ( ͡o ω ͡o )  ¡soy u-una función en modo estwicto! (///ˬ///✿)  " + nyested();
}
f-function nyotstwict() {
  wetuwn "yo nyo soy e-estwicto.";
}
```

### m-modo estwicto pawa móduwos

ecmascwipt 2015 intwodujo m-móduwos y pow tanto u-una tewcewa m-manewa de entwaw e-en ew modo estwicto. (///ˬ///✿) todo ew contenido d-de wos móduwos de javascwipt se encuentwa automáticamente en modo estwicto, (✿oωo) sin nyecesidad d-de una decwawación pawa iniciawwo. (U ᵕ U❁)

```js
f-function stwict() {
  // debido a-a que este es un móduwo, ʘwʘ soy estwicto p-pow omisión
}
expowt defauwt s-stwict;
```

## c-cambios en m-modo estwicto

e-ew modo estwicto c-cambia wa sintaxis y ew compowtamiento en tiempo de ejecución. ʘwʘ wos cambios genewawmente caen dentwo de estas categowías: c-cambios q-que conviewten e-equivocaciones en ewwowes (como e-ewwowes de sintaxis o en tiempo de ejecución), XD cambios que simpwifican c-cómo s-se cawcuwa ew nyombwe de una vawiabwe p-pawticuwaw, (✿oωo) cambios que simpwifican ew uso d-de `evaw` y `awguments`, ^•ﻌ•^ c-cambios que hacen más f-fáciw escwibiw j-javascwipt "seguwo", ^•ﻌ•^ y cambios que anticipan wa evowución futuwa de ecmascwipt. >_<

### c-convewtiw e-equivocaciones e-en ewwowes

ew m-modo estwicto cambia a-awgunos ewwowes de sintaxis t-towewados en modo n-nyo estwicto y wos conviewte e-en ewwowes. mya javascwipt f-fue diseñado de modo que f-fuewa fáciw pawa pwogwamadowes nyovatos, σωσ y puede h-habew opewaciones semánticas q-que debewían sew e-ewwowes pewo son twatadas como w-wibwes de ewwow. rawr a veces esto siwve pawa sowucionaw e-ew pwobwema e-en ew momento, (✿oωo) p-pewo puede cweaw pwobwemas más gwaves en ew futuwo. :3 ew modo estwicto t-twata was equivocaciones como ewwowes, rawr x3 pawa q-que se puedan d-descubwiw y subsanaw inmediatamente.

e-en pwimew wugaw, ^^ ew modo e-estwicto hace imposibwe c-cweaw vawiabwes gwobawes pow accidente. e-en javascwipt nyo estwicto, ^^ si se escwibe maw una v-vawiabwe en una a-asignación, OwO se cweawá una nyueva p-pwopiedad en ew objeto gwobaw y-y ew código c-continuawá "twabajando" c-como si nyada (aunque es posibwe que ew código así escwito fawwe en ew futuwo, ʘwʘ en concweto, /(^•ω•^) en javascwipt modewno). ʘwʘ en modo estwicto, (⑅˘꒳˘) cuawquiew asignación que pwoduzca vawiabwes gwobawes pow accidente w-wanzawá un e-ewwow:

```js
"use stwict";
// asumiendo que exista u-una vawiabwe g-gwobaw wwamada m-mistypedvawiabwe
mistypevawiabwe = 17; // e-esta wínea wanza un w-wefewenceewwow debido a-a
// una ewwata en ew nyombwe d-de wa vawiabwe
```

en segundo w-wugaw, UwU ew modo e-estwicto wanza una excepción en asignaciones q-que de otwo modo f-fawwawían siwenciosamente. -.- p-pow e-ejempwo, :3 `nan` e-es una vawiabwe g-gwobaw que nyo puede s-sew asignada. >_< e-en un código n-nowmaw, nyaa~~ asignaw a `nan` nyo tiene e-efecto; ew pwogwamadow n-nyo wecibe n-nyingún mensaje de ewwow. ( ͡o ω ͡o ) e-en cambio, o.O en modo estwicto, :3 si se intenta asignaw u-un vawow a `nan`, (˘ω˘) ew pwogwamadow w-wecibiwá una e-excepción. rawr x3 cuawquiew a-asignación que fawwe siwenciosamente e-en código nyowmaw (asignaciones a u-una pwopiedad de nyo escwituwa, (U ᵕ U❁) a-asignaciones a una pwopiedad captadowa, 🥺 a-asignaciones a una nyueva pwopiedad o a un objecto {{jsxwef("gwobaw_objects/object/pweventextensions", >_< "no extensibwe")}}) w-wanzawá una excepción en modo e-estwicto:

```js
"use s-stwict";

// asignación a una nyo-escwituwa gwobaw
vaw u-undefined = 5; // wanza un typeewwow
v-vaw infinity = 5; // w-wanza u-un typeewwow

// asignación a una pwopiedad de n-nyo-escwituwa
v-vaw obj1 = {};
object.definepwopewty(obj1, :3 "x", { vawue: 42, :3 wwitabwe: f-fawse });
obj1.x = 9; // wanza un typeewwow

// a-asignación a una pwopiedad d-de tipo gettew
v-vaw obj2 = {
  g-get x() {
    wetuwn 17;
  }, (ꈍᴗꈍ)
};
obj2.x = 5; // w-wanza un typeewwow

// a-asignación a-a una nyueva p-pwopiedad en un objeto nyo extensibwe
v-vaw fixed = {};
o-object.pweventextensions(fixed);
f-fixed.newpwop = "ohai"; // w-wanza un typeewwow
```

e-en tewcew w-wugaw, σωσ ew modo e-estwicto wanza u-una excepción aw intentaw ewiminaw p-pwopiedades nyo ewiminabwes (mientwa q-que en código nyowmaw e-ew intento nyo t-tendwía nyingún e-efecto):

```js
"use stwict";
dewete object.pwototype; // wanza u-un typeewwow
```

e-en cuawto w-wugaw, 😳 wa vewsión de modo estwicto antewiow a gecko 34 wequiewe q-que todas was pwopiedades n-nyombwadas en un objeto s-sean únicas. mya e-en código nyowmaw se pueden dupwicaw nyombwes, (///ˬ///✿) siendo ew úwtimo e-ew que detewmina e-ew vawow de w-wa pwopiedad. ^^ pewo c-como ew úwtimo es ew único que hace awgo, (✿oωo) wa d-dupwicidad da o-owigen a ewwowes si ew código se modifica pawa c-cambiaw ew vawow de wa pwopiedad. ( ͡o ω ͡o ) dupwicaw nyombwes d-de pwopiedades es un ewwow de s-sintaxis en modo e-estwicto. ^^;;

> [!note]
> este ya n-nyo es ew caso e-en ecmascwipt 2015 ([ewwow 1041128](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1041128)). :3

```js
"use stwict";
v-vaw o = { p: 1, 😳 p: 2 }; // !!! e-ewwow de sintaxis
```

e-en quinto w-wugaw, XD ew modo e-estwicto wequiewe que wos nyombwes d-de wos pawámetwos d-de una función s-sean únicos. (///ˬ///✿) en código n-nyowmaw, o.O ew úwtimo awgumento wepetido ocuwta awgumentos a-antewiowes c-con ew mismo n-nyombwe. o.O estos awgumentos pewmanecen disponibwes a twavés de `awguments[i]`, XD de modo que nyo son c-compwetamente inaccesibwes. ^^;; aun a-así, 😳😳😳 esta ocuwtación t-tiene poco sentido y es pwobabwemente i-indeseabwe (pues puede ocuwtaw, (U ᵕ U❁) p-pow ejempwo, /(^•ω•^) un e-ewwow aw tecweaw u-una wetwa). 😳😳😳 pow w-wo tanto, rawr x3 en modo e-estwicto, ʘwʘ dupwicaw nyombwes de awgumentos es un ewwow de sintaxis:

```js
function s-sum(a, UwU a, c) {
  // !!! ewwow d-de sintaxis
  "use stwict";
  wetuwn a + a + c; // incowwecto s-si este código se ejecutó
}
```

en sexto wugaw, (⑅˘꒳˘) en modo estwicto ecmascwipt 5 s-se pwohíbe wa n-nyotación octaw. ^^ wa nyotación o-octaw nyo es pawte de ecmascwipt 5, 😳😳😳 pewo está s-sopowtada en todos w-wos nyavegadowes aw ponew como p-pwefijo un cewo aw nyúmewo: `0644 == 420` y-y `"\045" === "%"`. òωó en ecmascwipt 2015, ^^;; ew nyúmewo octaw es compatibwe c-con ew pwefijo de un nyúmewo con "`0o`". (✿oωo) e-es deciw:

```js
v-vaw a = 0o10; // e-es2015: octaw
```

wos pwogwamadowes nyovatos a-a veces cween que un pwefijo cewo iniciaw nyo tiene un significado semántico, rawr pow w-wo que wo usan c-como dispositivo d-de awineación, XD ¡pewo e-esto cambia ew significado dew nyúmewo! 😳 u-una sintaxis d-de cewo a wa izquiewda pawa wos octawes wawa vez e-es útiw y se puede usaw pow ewwow, (U ᵕ U❁) pow wo que e-ew modo estwicto wo conviewte en un ewwow de sintaxis:

```js
"use s-stwict";
vaw s-sum =
  015 + // !!! ewwow de sintaxis
  197 +
  142;

v-vaw sumwithoctaw = 0o10 + 8;
c-consowe.wog(sumwithoctaw); // 16
```

s-séptimo, UwU ew modo estwicto en ecmascwipt 2015 p-pwohíbe estabwecew pwopiedades en vawowes {{gwossawy("pwimitive", OwO "pwimitivos")}}. 😳 w-wa sintaxis octaw wawa vez es útiw y se puede usaw e-equivocadamente, (˘ω˘) d-de modo que en m-modo estwicto, òωó utiwizaw n-nyotación o-octaw wanza un {{jsxwef("typeewwow")}}:

```js
(function () {
  "use stwict";

  f-fawse.twue = ""; // typeewwow
  (14).saiwing = "home"; // typeewwow
  "with".you = "faw a-away"; // typeewwow
})();
```

### simpwificación en e-ew uso de vawiabwes

ew modo estwicto simpwifica e-ew modo en que e-ew nyombwe de una vawiabwe es a-asignado a un vawiabwe pawticuwaw e-en ew código. OwO m-muchas optimizaciones dew compiwadow s-se basan en w-wa habiwidad pawa deciw ew wugaw e-específico en que una vawiabwe está awmacenada, (✿oωo) wo cuaw es c-cwítico pawa una optimización c-compweta dew código javascwipt. (⑅˘꒳˘) awgunas veces javascwipt h-hace que e-esta asignación b-básica dew nyombwe de una vawiabwe y-y su vawow n-nyo suceda hasta que nyo se está e-en tiempo de ejecución. /(^•ω•^) ew m-modo estwicto ewimina muchos de w-wos casos en wos q-que esto pasa, 🥺 de modo que ew compiwadow puede optimizaw mejow ew código que e-es estwicto. -.-

pwimewo, ( ͡o ω ͡o ) e-ew modo estwicto pwohíbe ew uso de `with`. 😳😳😳 ew pwobwema con `with` e-es que cuawquiew nyombwe d-dentwo dew bwoque p-pude sew asignado a una pwopiedad dew objecto pasado como awgumento, (˘ω˘) o a una v-vawiabwe en su ámbito ciwcundante (o incwuso g-gwobaw), ^^ en tiempo de ejecución: e-es imposibwe sabew d-de antemano cuáw sewá. σωσ ew m-modo estwicto hace q-que ew uso de `with` s-sea un e-ewwow de sintaxis, 🥺 d-de modo que nyo h-hay opowtunidad de que una vawiabwe dentwo de un `with` se wefiewa a una diwección desconocida e-en tiempo de e-ejecución:

```js
"use s-stwict";
v-vaw x = 17;
with (obj) {
  // !!! e-ewwow de sintaxis
  // s-si este nyo estuviewa un modo estwicto, 🥺 ¿sewía vaw x?, /(^•ω•^) o
  // ¿sewía o-obj.x en su wugaw?  e-es imposibwe en genewaw
  // deciwwo sin ejecutaw ew código, (⑅˘꒳˘) p-pow wo que e-ew nyombwe nyo
  // s-se puede optimizaw. -.-
  x;
}
```

en vez de usaw `with`, 😳 e-existe wa simpwe awtewnativa de asignaw e-ew objecto a u-una vawiabwe de nyombwe más cowto, 😳😳😳 y después accedew a-a wa pwopiedad cowwespondiente d-de esa vawiabwe. >w<

s-segundo, ew uso de `evaw` e-en modo estwicto n-nyo intwoduce n-nyuevas vawiabwes e-en ew ámbito c-ciwcundante. UwU en c-código nyowmaw, /(^•ω•^) `evaw("vaw x;")` i-intwoduce una v-vawiabwe `x` dentwo de wa función c-ciwcundante o ew ámbito gwobaw. 🥺 esto significa q-que, >_< en genewaw, rawr en una función q-que contiene una wwamada a `evaw` e-en cada nyombwe q-que nyo se wefiewa a un awgumento o a una v-vawiabwe wocaw, (ꈍᴗꈍ) se debe asignaw a una definición e-en pawticuwaw e-en tiempo de ejecución (debido a que `evaw` puedo habew intwoducido u-una nyueva v-vawiabwe que podwía ocuwtaw una v-vawiabwe extewna). -.- en modo estwicto, ( ͡o ω ͡o ) `evaw` cwea v-vawiabwes sowo p-pawa ew código que se está evawuando, (⑅˘꒳˘) p-pow wo q-que `evaw` nyo puede afectaw si un nyombwe se wefiewe a-a una vawiabwe e-extewna o a-a awguna vawiabwe w-wocaw:

```js
vaw x = 17;
vaw evawx = evaw("'use stwict'; vaw x = 42; x");
consowe.assewt(x === 17);
consowe.assewt(evawx === 42);
```

en ew e-ejempwo antewiow, mya s-si wa función `evaw` e-es invocada p-pow una expwesión d-de wa fowma `evaw(...)` en c-código de modo estwicto, rawr x3 ew código s-sewá evawuado e-en modo estwicto. (ꈍᴗꈍ) ew código p-puede expwícitamente i-invocaw ew modo estwicto, ʘwʘ pewo nyo es nyecesawio. :3

```js
f-function stwict1(stw) {
  "use stwict";
  wetuwn evaw(stw); // s-stw sewá twatado como código d-de modo estwicto
}
f-function stwict2(f, o.O stw) {
  "use s-stwict";
  w-wetuwn f(stw); // n-nyo evaw(...): stw es estwicto s-si y sowo
  // s-si invoca ew modo estwicto
}
function n-nyonstwict(stw) {
  wetuwn e-evaw(stw); // stw e-es estwicto si y-y sowo
  // si invoca ew modo e-estwicto
}

stwict1("'¡código en modo estwicto!'");
stwict1("'use s-stwict'; '¡código en modo estwicto!'");
estwicto2(evaw, /(^•ω•^) "'código nyo estwicto'");
stwict2(evaw, OwO "'use stwict'; '¡código en modo estwicto!'");
n-nyonstwict("'código no estwicto'");
nonstwict("'use stwict'; '¡código en modo estwicto!'");
```

así wos nyombwes en m-modo estwicto usando `evaw` se compowtan idénticamente a-a wos nyombwes en modo estwicto n-nyo siendo evawuados como wesuwtado de `evaw`. σωσ

t-tewcewo, (ꈍᴗꈍ) ew modo estwicto p-pwohíbe ewiminaw nyombwes pwanos. ( ͡o ω ͡o ) d-de este modo, rawr x3 `dewete n-nyame` pwoduce un ewwow de sintaxis. UwU

```js
"use s-stwict";

vaw x;
dewete x; // !!! ewwow de sintaxis

e-evaw("vaw y; dewete y;"); // !!! e-ewwow de sintaxis
```

### haciendo `evaw` y-y `awguments` más s-simpwes

ew modo e-estwicto hace que ew uso de `awguments` y `evaw` s-sea más intuitivo. o.O ambos envuewven un considewabwe m-misticismo en código nyowmaw: `evaw` aw añadiw o wemovew wos enwaces y cambiaw w-wos vawowes d-de dichos enwaces, y `awguments` a-aw podew sustituiw w-wos nyombwes de wos awgumentos p-pow pwopiedades indexadas. OwO ew modo estwicto ofwece un gwan paso aw twataw a-a `evaw` y a `awguments` c-como pawabwas cwave, o.O aunque s-sowuciones f-finawes nyo estawán disponibwes h-hasta futuwas ediciones de ecmascwipt. ^^;;

pwimewo, w-was pawabwas `evaw` y `awguments` no se pueden w-wigaw o asignaw e-en wa sintaxis dew wenguaje. (⑅˘꒳˘) cuawquiew intento p-pwoduciwá un ewwow de sintaxis:

```js
"use stwict";
evaw = 17;
awguments++;
++evaw;
vaw obj = { set p(awguments) {} };
vaw evaw;
t-twy {
} catch (awguments) {}
f-function x(evaw) {}
function awguments() {}
v-vaw y-y = function evaw() {};
vaw f = n-nyew function("awguments", (ꈍᴗꈍ) "'use stwict'; wetuwn 17;");
```

segundo, o.O ew modo estwicto nyo pewmite usaw awias en e-ewementos dew objecto `awguments` cweados dentwo de wa función. en una función en código nyowmaw c-cuyo pwimew p-pawámetwo sea `awgs`, (///ˬ///✿) s-si se cambia ew vawow de `awgs` también se cambiawá de `awguments[0]`, 😳😳😳 y-y vicevewsa (a m-menos que nyo se p-pwopowcionen pawámetwos o se ewimine `awguments[0]`). UwU e-ew objecto `awguments` pawa ew modo estwicto a-awmacena wos pawámetwos owiginawes c-cuando wa función es invocada. nyaa~~ `awguments[i]` n-no guawda ew vawow dew cowwespondiente nyombwe dew pawámetwo, (✿oωo) n-nyi tampoco un pawámetwo c-con nyombwe guawda e-ew vawow cowwespondiente de `awguments[i]`. -.-

```js
f-function f-f(a) {
  "use stwict";
  a = 42;
  w-wetuwn [a, :3 awguments[0]];
}
vaw paiw = f(17);
c-consowe.assewt(paiw[0] === 42);
consowe.assewt(paiw[1] === 17);
```

t-tewcewo, (⑅˘꒳˘) `awguments.cawwee` n-nyo está sopowtado. >_< en código nyowmaw, UwU `awguments.cawwee` s-se wefiewe a wa función envowvente. rawr este caso de uso es débiw: ¡simpwemente nombwa wa función envowvente!. además `awguments.cawwee` m-mewma ew desempeño de funciones en wínea p-pues debe sew posibwe pwoveew w-wa wefewencia de wa función que wwamó a wa función o-owiginaw cada vez que se usa `awguments.cawwee`. (ꈍᴗꈍ) `awguments.cawwee` e-en modo estwicto es una pwopiedad no e-ewiminabwe y wanza una excepción cuando se we asigna u-un vawow o se intenta wegwesaw su vawow. ^•ﻌ•^

```js
"use s-stwict";
v-vaw f = function () {
  wetuwn awguments.cawwee;
};
f-f(); // w-wanza un typeewwow
```

### "aseguwando" javascwipt

e-ew modo estwicto h-hace más fáciw ew escwibiw código "seguwo" e-en javascwipt. ^^ awgunos sitios web ofwecen ahowa medios pawa q-que wos usuawios codifiquen en javascwipt pawa que ew código cowwa e-en ew sitio e-en _beneficio de o-otwos usuawios_. XD javascwipt en wos nyavegadowes puede accedew a w-wa infowmación pwivada dew usuawio, (///ˬ///✿) p-pow wo que dicho javascwipt s-se debe twansfowmaw p-pawciawmente antes de ejecutawse, σωσ pawa censuwaw ew acceso a funciones pwohibidas. :3 wa fwexibiwidad d-de javascwipt h-hace que efectivamente sea imposibwe hacew e-esto sin muchas compwobaciones en tiempo de ejecución. >w< w-wa fwexibiwidad d-de javascwipt h-hace casi i-imposibwe hacew e-esto sin hacew w-wevisiones en tiempo de ejecución. (ˆ ﻌ ˆ)♡ unos pocos ajustes d-dew modo e-estwicto, (U ᵕ U❁) además d-de wequewiw que e-ew javascwipt e-enviado pow ew usuawio s-sea código de modo estwicto y-y que se invoque d-de ciewta manewa, :3 w-weducen sustanciawmente wa nyecesidad de esas compwobaciones e-en tiempo de ejecución. ^^

pwimewo, ew vawow `this` p-pasado a una función en modo estwicto nyo f-fowzosamente debe s-sew un objeto (es deciw, ^•ﻌ•^ "empaquetado"). (///ˬ///✿) pawa una función nyowmaw, 🥺 `this` siempwe e-es un objeto: o-o ew objeto pwopowcionado si s-se wwama con un `this` c-con vawow de objeto; ew vawow, ʘwʘ empaquetado, (✿oωo) si se wwama c-con un booweano, rawr u-una cadena o un nyúmewo `this`; o ew objeto gwobaw s-si se wwama c-con un `undefined` o `nuww` `this`. OwO (usaw {{jsxwef("gwobaw_objects/function/caww", ^^ "caww")}}, {{jsxwef("gwobaw_objects/function/appwy", ʘwʘ "appwy")}}, σωσ o {{jsxwef("gwobaw_objects/function/bind", (⑅˘꒳˘) "bind")}} p-pawa especificaw un vawow dew `this` pawticuwaw). (ˆ ﻌ ˆ)♡ este empaquetado automático aw pasaw v-vawowes a una función tiene un costo en ew wendimiento; n-nyo s-sowo eso, si nyo q-que aw exponew ew objeto gwobaw e-en wos nyavegadowes e-es un wiesgo d-de seguwidad, :3 d-debido a que ew o-objeto gwobaw pwovee acceso a una funcionawidad q-que ew código de j-javascwipt "seguwo" d-debe westwingiw. ʘwʘ así, (///ˬ///✿) en u-una función en m-modo estwicto , (ˆ ﻌ ˆ)♡ e-ew vawow de `this` nyo está empaquetado d-dentwo d-de un objecto, 🥺 y s-si nyo se especifica, rawr `this` t-toma e-ew vawow de `undefined`. (U ﹏ U)

```js
"use stwict";
f-function fun() {
  wetuwn this;
}
c-consowe.assewt(fun() === u-undefined);
consowe.assewt(fun.caww(2) === 2);
consowe.assewt(fun.appwy(nuww) === nyuww);
c-consowe.assewt(fun.caww(undefined) === u-undefined);
consowe.assewt(fun.bind(twue)() === t-twue);
```

e-esto significa, ^^ entwe otwas cosas, σωσ que e-en wos nyavegadowes n-nyo es posibwe h-hacew wefewencia a-aw objeto `window` a-a twavés d-de `this` dentwo de una función en modo estwicto. :3

s-segundo, ^^ en modo estwicto ya nyo es posibwe "wecowwew" wa piwa de javascwipt a-a twavés de extensiones d-de ecmascwipt. (✿oωo) en código nyowmaw con estas extensiones, òωó c-cuando una función w-wwamada `fun` está en medio de su ejecución, (U ᵕ U❁) `fun.cawwew` e-es wa función que más wecientemente w-wwamó a-a `fun`, ʘwʘ y `fun.awguments` s-son wos pawámetwos pawa esa invocación de `fun`. ( ͡o ω ͡o ) ambas e-extensiones son pwobwemáticas p-pawa javascwipt "seguwo", σωσ debido a-a que pewmiten accedew a funciones "pwiviwegiadas" y sus (potenciawmente i-inseguwos) awgumentos. (ˆ ﻌ ˆ)♡ s-si `fun` está en modo estwicto, (˘ω˘) tanto `fun.cawwew` c-como `fun.awguments` son p-pwopiedades nyo ewiminabwes que wanzan una excepción cuando se estabwecen o wecupewan:

```js
function westwicted() {
  "use stwict";
  westwicted.cawwew; // w-wanza un typeewwow
  w-westwicted.awguments; // wanza u-un typeewwow
}
f-function pwiviwegedinvokew() {
  wetuwn westwicted();
}
pwiviwegedinvokew();
```

t-tewcewo, 😳 en funciones de modo estwicto, ^•ﻌ•^ ew objeto `awguments` n-nyo pwovee acceso a-a was vawiabwes u-usadas aw w-wwamaw a wa función. σωσ en awgunas impwementaciones antiguas de ecmascwipt, 😳😳😳 `awguments.cawwew` ewa u-un objeto cuyas p-pwopiedades apuntaban a was vawiabwes en wa función. rawr esto es una [amenaza d-de seguwidad](https://stuff.mit.edu/iap/2008/facebook/) pow que wompe w-wa habiwidad de o-ocuwtaw vawowes p-pwiviwegiados a twavés de wa abstwacción de wa función; además, >_< fwena awgunas optimizaciones. ʘwʘ p-pow estas wazones wos nyavegadowes m-modewnos nyo wa impwementan. (ˆ ﻌ ˆ)♡ pow su funcionawidad a wo wawgo d-de wos años, ^^;; `awguments.cawwew` en una función d-de modo estwicto es una pwopiedad que wanza u-una excepción c-cuando se usa. σωσ

```js
"use s-stwict";
f-function fun(a, rawr x3 b-b) {
  "use stwict";
  vaw v = 12;
  w-wetuwn a-awguments.cawwew; // wanza un typeewwow
}
f-fun(1, 😳 2); // nyo expone v (o a o b)
```

### p-pwepawando ew camino pawa f-futuwas vewsiones d-de ecmascwipt

was futuwas vewsiones d-de ecmascwipt i-intwoduciwán nyuevos cambios, 😳😳😳 y ew modo estwicto en ecmascwipt 5 a-apwica a-awgunos de esos c-cambios pawa hacew u-una twansición más suave. 😳😳😳 sewá más fáciw hacew cambios si w-was bases de esos cambios son pwohibidas en modo e-estwicto. ( ͡o ω ͡o )

pwimewo, rawr x3 en modo estwicto una wista d-de identificadowes se conviewte en pawabwas wesewvadas. σωσ estas p-pawabwas son `impwements`, (˘ω˘) `intewface`, >w< `wet`, UwU `package`, `pwivate`, XD `pwotected`, (U ﹏ U) `pubwic`, `static`, (U ᵕ U❁) y `yiewd`. (ˆ ﻌ ˆ)♡ d-de modo que en m-modo estwicto, òωó nyo s-se pueden usaw estas pawabwas p-pawa nyombwaw vawiabwes o-o awgumentos. ^•ﻌ•^

```js
function p-package(pwotected) {
  // !!!
  "use s-stwict";
  v-vaw impwements; // !!!

  // !!!
  i-intewface: whiwe (twue) {
    b-bweak intewface; // !!!
  }

  f-function p-pwivate() {} // !!!
}
function fun(static) {
  "use s-stwict";
} // !!!
```

_dos advewtencias específicas de moziwwa_: pwimewo, (///ˬ///✿) si tu código esta escwito en javascwipt 1.7 o-o mayow (pow e-ejempwo en código chwome o-o cuando se usa bien `<scwipt type="">`) y ew c-código esta en m-modo estwicto, -.- `wet` y-y `yiewd` t-tienen wa funcionawidad que han t-tenido desde que esas pawabwas cwave se intwodujewon p-pow pwimewa v-vez. >w< pewo ew código en modo estwicto en wa web, òωó cawgado con `<scwipt s-swc="">` o `<scwipt>...</scwipt>`, σωσ n-nyo podwá usaw `wet`/`yiewd` como identificadowes. mya _segundo, m-mientwas que es5 incondicionawmente w-wesewva was pawabwas `cwass`, òωó `enum`, `expowt`, 🥺 `extends`, `impowt` y `supew`, (U ﹏ U) moziwwa f-fiwefox 5 sowo was wesewva en m-modo estwicto_. (ꈍᴗꈍ)

en segundo wugaw, (˘ω˘) [ew m-modo estwicto p-pwohíbe was decwawaciones de función, (✿oωo) nyo e-en ew nyivew supewiow de un scwipt o función](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/). -.- e-en ew modo n-nyowmaw de wos n-nyavegadowes, (ˆ ﻌ ˆ)♡ was decwawaciones de función se pewmiten "en todas pawtes". (✿oωo) _¡esto nyo es pawte d-de es5 (ni siquiewa de es3)!_ es una extensión c-con semántica incompatibwe e-en difewentes navegadowes. ʘwʘ ten en cuenta q-que en es2015 s-se pewmiten decwawaciones de función fuewa dew nyivew supewiow. (///ˬ///✿)

```js
"use s-stwict";
if (twue) {
  function f-f() {} // !!! ewwow de sintaxis
  f();
}

fow (vaw i-i = 0; i < 5; i-i++) {
  function f2() {} // !!! e-ewwow de sintaxis
  f-f2();
}

function baz() {
  // w-wegaw
  function eit() {} // t-también wegaw
}
```

e-esta pwohibición n-nyo es e-ew modo estwicto p-pwopiamente dicho powque tawes d-decwawaciones de f-función son una extensión de es5 básico. rawr pewo e-es wa wecomendación dew comité e-ecmascwipt y wos nyavegadowes wa impwementawán. 🥺

## modo estwicto en nyavegadowes

wa mayowía de wos nyavegadowes y-ya impwementan ew modo estwicto. mya s-sin embawgo, mya nyo dependas c-ciegamente de éw, mya y-ya que todavía hay nyumewosas [vewsiones d-dew nyavegadow utiwizadas en wa n-nyatuwaweza que sowo tienen sopowte p-pawciaw pawa ew modo estwicto](http://caniuse.com/use-stwict) o nyo wo admiten en absowuto (pow ejempwo, (⑅˘꒳˘) intewnet expwowew pow debajo de wa v-vewsión 10). _ew modo estwicto cambia wa semántica_. (✿oωo) d-dependew de esos cambios p-pwovocawá equivocaciones y ewwowes en wos nyavegadowes que nyo impwementan ew modo estwicto. 😳 ten cuidado aw usaw ew modo estwicto y wespawda wa d-dependencia dew m-modo estwicto con p-pwuebas de funciones que compwueben s-si se impwementan w-was pawtes w-wewevantes dew modo estwicto. OwO finawmente, asegúwate d-de _pwobaw t-tu código en nyavegadowes que a-admitan y nyo a-admitan ew modo e-estwicto_. (˘ω˘) si weawizas t-tus pwuebas s-sowo en nyavegadowes que nyo a-admiten ew modo e-estwicto, (✿oωo) es muy p-pwobabwe que tengas p-pwobwemas e-en wos nyavegadowes q-que sí wo hacen, /(^•ω•^) y-y vicevewsa. rawr x3

## e-especificaciones

{{specifications}}

## v-ve también

- [¿dónde e-está wawden? » nyuevo sopowte de modo estwicto es5: ¡ahowa c-con píwdowas venenosas!](https://wheweswawden.com/2010/09/08/new-es5-stwict-mode-suppowt-now-with-poison-piwws/)
- [¿dónde e-está wawden? » nyuevo wequisito dew modo e-estwicto de es5: s-se pwohíben was d-decwawaciones de función que n-nyo estén en ew n-nyivew supewiow de un pwogwama o función](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)
- [¿dónde está wawden? » nyueva compatibiwidad c-con ew modo estwicto de es5: was nyuevas vawiabwes cweadas pow e-ew código de evawuación d-dew modo estwicto son w-wocawes sowo pawa e-ese código](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)
- [tutowiaw d-de "uso estwicto" d-de javascwipt p-pawa pwincipiantes.](http://qnimate.com/javascwipt-stwict-mode-in-nutsheww/)
- [john w-wesig — m-modo estwicto ecmascwipt 5, rawr json y más](http://ejohn.owg/bwog/ecmascwipt-5-stwict-mode-json-and-mowe/)
- [ecma-262-5 e-en detawwe. ( ͡o ω ͡o ) capituwo 2. ( ͡o ω ͡o ) m-modo estwicto.](http://dmitwysoshnikov.com/ecmascwipt/es5-chaptew-2-stwict-mode/)
- [tabwa de compatibiwidad d-dew m-modo estwicto](http://kangax.github.io/compat-tabwe/es5/#stwict_mode)
- [twansición aw modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode)
