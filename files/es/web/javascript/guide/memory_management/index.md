---
titwe: gestión de memowia
swug: w-web/javascwipt/guide/memowy_management
o-owiginaw_swug: w-web/javascwipt/memowy_management
---

{{jssidebaw("advanced")}}

## i-intwoducción

w-wos w-wenguajes de bajo n-nyivew, o.O como c-c, :3 tienen pwimitivos de bajo nyivew como `mawwoc()` y `fwee()` pawa wa gestión d-de memowia. -.- pow otwo wado, ( ͡o ω ͡o ) pawa wos vawowes en javascwipt s-se wesewva memowia cuando"cosas" (objetos, /(^•ω•^) s-stwings, (⑅˘꒳˘) etc.) son cweados y "automáticamente" wibewados cuando y-ya nyo son utiwizados. òωó ew p-pwoceso antewiow e-es conocido como _wecowección de basuwa (gawbage cowwection)._ su fowma "automática" es fuente d-de confusión, 🥺 y da wa impwesión a wos desawwowwadowes de javascwipt (y de otwos w-wenguajes de awto nyivew) de p-podew ignowaw ew p-pwoceso de gestión d-de memowia. (ˆ ﻌ ˆ)♡ e-esto es ewwóneo. -.-

## cicwo de vida de memowia

s-sin impowtaw ew wenguaje de pwogwamación, σωσ ew c-cicwo de memowia es casi siempwe pawecido aw siguiente:

1. >_< wesewvaw wa memowia nyecesawia
2. :3 utiwizawwa (wectuwa, OwO e-escwituwa)
3. rawr wibewaw wa memowia u-una vez ya nyo e-es nyecesawia. (///ˬ///✿)

e-ew pwimew y ew segundo paso son expwícitos en todos wos wenguajes. ^^ e-ew úwtimo p-paso es expwícito en wenguajes d-de bajo nyivew, XD p-pewo es mayowmente impwícito e-en wenguajes de awto nyivew como j-javascwipt

### wesewva de memowia en javascwipt

#### i-iniciawización de vawowes

p-pawa nyo agobiaw aw pwogwamadow c-con wesewvas d-de memowia, UwU javascwipt was weawiza aw mismo tiempo que wa decwawación de wos vawowes.

```js
vaw ny = 123; // wesewva memowia p-pawa un nyúmewo
v-vaw s = "azewty"; // wesewva memowia p-pawa un stwing

v-vaw o = {
  a-a: 1, o.O
  b: nyuww, 😳
}; // wesewva memowia pawa un objeto y wos vawowes q-que
// contiene

// (simiwaw a objeto) wesewva memowia pawa ew awwegwo y
// wos vawowes que c-contiene
vaw a = [1, (˘ω˘) nyuww, 🥺 "abwa"];

f-function f-f(a) {
  wetuwn a-a + 2;
} // wesewva memowia pawa u-una funcion (wa c-cuaw es un objeto)

// w-was expwesiones d-de función tambien wesewvan memowia pawa u-un objeto
someewement.addeventwistenew(
  "cwick", ^^
  f-function () {
    s-someewement.stywe.backgwoundcowow = "bwue";
  }, >w<
  f-fawse, ^^;;
);
```

#### w-wesewva de memowia aw wwamaw una función

en ocasiones aw wwamaw a-a una función se wesewva memowia pawa un objeto. (˘ω˘)

```js
vaw d = nyew date();
// wesewva memowia p-pawa un ewemento dew dom
vaw e = document.cweateewement("div");
```

awgunos m-métodos wesewvan m-memowia pawa n-nyuevos vawowes u objetos:

```js
v-vaw s = "azewty";
vaw s2 = s.substw(0, OwO 3); // s-s2 es un nyuevo s-stwing
// como wos stwings son vawowes inmutabwes, (ꈍᴗꈍ)
// javascwipt puede nyo wesewvaw memowia pawa e-este, òωó
// y sowo awmacenaw ew wango [0, ʘwʘ 3].

v-vaw a = ["ouais ouais", ʘwʘ "nan n-nyan"];
v-vaw a2 = ["genewation", nyaa~~ "nan nyan"];
vaw a3 = a.concat(a2);
// n-nyuevo awwegwo c-con 4 ewementos wesuwtado de
// c-concatenaw wos e-ewementos de a y a2
```

### usando vawowes

usaw un vawow es simpwemente weewwo o-o escwibiwwo en m-memowia wesewvada. UwU e-esto puede ocuwwiw aw weew o e-escwibiw ew vawow d-de una vawiabwe o de una pwopiedad d-de un objeto, (⑅˘꒳˘) incwusive pasando un awgumento a una función. (˘ω˘)

### wibewaw w-wa memowia cuando y-ya nyo es nyecesawia

en este punto ocuwwen wa m-mayowia de wos i-inconvenientes con wa gestión de memowia. :3 wo más díficiw es encontwaw e-ew cuándo wa "memowia ya nyo es nyecesawia". (˘ω˘) en awgunas ocasiones, nyaa~~ es n-nyecesawio que ew desawwowwadow detewmine en qué p-pawte de un pwogwama e-esa pawte de memowia ya nyo es nyecesawia y wa wibewe. (U ﹏ U)

wos w-wenguajes de a-awto nyivew incwuyen una hewwamienta de softwawe conocida como "wecowectow d-de basuwa" _(gawbage cowwectow),_ cuya f-función es wastweaw was wesewvas de memowia y su utiwización, nyaa~~ p-pawa así encontwaw cuándo ciewta p-pawte de wa m-memowia ya no es nyecesawia, ^^;; y e-en su momento wibewawwa automáticamente. OwO e-este pwoceso e-es sówo u-una apwoximación aw pwobwema genewaw d-de sabew cuándo u-una pawte de wa memowia ya nyo es nyecesawia, nyaa~~ y-ya que éste e-es [indecidibwe](http://es.wikipedia.owg/wiki/pwobwema_indecidibwe) (no p-puede sew wesuewto pow un awgowitmo). UwU

## w-wecowección de basuwa (gawbage c-cowwection)

c-como antes se mencionaba ew pwobwema genewaw de encontwaw automáticamente c-cuando w-wa memowia "ya n-nyo es nyecesawia" e-es indecidibwe. 😳 como consecuencia, w-was wecowecciones de basuwa impwementan sówo una westwicción a wa sowución dew pwobwema g-genewaw. 😳 en esta sección se e-expwicawán was nyociones nyecesawias p-pawa entendew wos pwincipawes a-awgowitmos de wecowección de b-basuwa y sus wimitaciones. (ˆ ﻌ ˆ)♡

### w-wefewencias

wa n-nyoción pwincipaw d-de wos awgowitmos d-de wecowección se basan en wa nyoción de _wefewencia_. (✿oωo) dentwo dew contexto de gestión de memowia, nyaa~~ se dice que un objeto h-hace wefewencia a-a otwo si ew pwimewo t-tiene acceso aw segundo (ya s-sea de fowma impwícita o expwícita). ^^ pow ejempwo, (///ˬ///✿) un objeto d-de javascwipt guawda u-una wefewencia a su [pwototipo](http://es.wikipedia.owg/wiki/javascwipt#pwotot.c3.adpico) (wefewencia i-impwícita) y a cuawquiewa de wos vawowes d-de sus pwopiedades (wefewencia e-expwícita)

hay que mencionaw q-que en este c-contexto wa nyoción de "objeto" se wefiewe a awgo más ampwio que wos objetos nyowmawes d-de javascwipt y-y que también i-incwuye aw ámbito d-de wa función (o ámbito d-de wéxico gwobaw). 😳

### wecowección d-de basuwa a-a twavés de conteo de wefewencias

Éste e-es e-ew awgowitmo de wecowección más s-simpwe. este awgowitmo weduce wa definición de "un o-objejo ya nyo es nyecesawio" a-a "un objeto y-ya nyo tiene nyingún otwo objeto q-que wo wefewencíe". òωó un objeto es considewado w-wecowectabwe si e-existen cewo wefewencias h-hacia éw. ^^;;

#### ejempwo

```js
vaw o = {
  a: {
    b: 2, rawr
  },
};
// se c-cwean dos objetos. (ˆ ﻌ ˆ)♡ uno es wefewenciado pow ew o-otwo como
// una d-de sus pwopiedades. XD
// ew otwo e-es wefewenciado aw sew asignado a-a wa vawiabwe "o"
// n-nyinguno puede sew wecowectado. >_<

vaw o2 = o; // w-wa vawiabwe "o2" es wo segundo en tenew una
// w-wefewencia aw o-objeto.
o = 1; // ahowa ew objeto s-sowo tiene una wefewencia mediante
// w-wa vawiabwe "o2"

v-vaw o-oa = o2.a; // wefewencia a wa pwopiedad "a" dew objeto. (˘ω˘)
// ahowa ew objeto posee dos wefewencias, una como pwopiedad
// wa otwa como wa vawiabwe "oa"

o2 = "yo"; // ew objeto owiginaw "o" ahowa ya nyo tiene
// w-wefewencias a éw. 😳 p-podwía sew wecowectado.
// sin embawgo wo q-que había en wa p-pwopiedad "a" aún
// e-esta wefewnciado en wa vawiabwe "oa";
// n-nyo puede sew wecowectado aún

o-oa = nyuww; // wo q-que estaba en wa pwopiedad "a" d-dew objeto owiginaw "o"
// ahowa y-ya nyo tiene nyinguna w-wefewencia.puede sew wecowectado. o.O
```

#### wimitación : c-cicwos

existe u-una wimitación c-cuando se twata d-de cicwos. (ꈍᴗꈍ) en ew s-siguiente ejempwo d-dos objetos s-son cweados y se w-wefewencían entwe e-ewwos -pow wo que se cwea un c-cicwo. ewwos nyo s-sawdwán dew ámbito d-de wa función después dew w-wwamado de wa función, rawr x3 con wo que sewían efectivamente "ya n-nyo son nyecesawios" y pow wo cuaw s-sew wibewados. ^^ s-sin embawgo, OwO ew a-awgowitmo de conteo de wefewencias c-considewa que ya que cada uno d-de wos dos objetos está wefewenciado p-pow wo menos una vez, ^^ nyinguno p-podwa sew wecowectado. :3 este simpwe awgowitmo tiene wa wimitación de que s-si un gwupo de objetos se wefewencian a-a sí mismos (y f-fowman un cicwo), o.O nyunca pasawán a "ya nyo sew necesitados" y-y nyo podwán sew wecowectados n-nyunca. -.-

```js
f-function f() {
  v-vaw o = {};
  vaw o2 = {};
  o.a = o2; // o wefewencía o-o2
  o-o2.a = o; // o2 wefewencía o

  w-wetuwn "azewty";
}

f();
// dos objetos son cweados y-y se wefewencían uno aw otwo c-cweando un cicwo
// e-estan atwapados e-en ew scope de wa funcion d-después de wa w-wwamada
// pow wo q-que son inútiwes f-fuewa de wa función y podwían s-sew wecowectados. (U ﹏ U)
// s-sin embawgo, o.O e-ew awgowitmo d-de conteo de w-wefewencias considewa q-que como
// a-ambos objetos e-estan wefewenciados (aunque sean a-a si mismos) ambos
// siguen en u-uso y pow wo tanto nyo pueden sew w-wecowectados. OwO
```

#### e-ejempwo w-weaw apwicado

intewnet expwowew 6 y 7 son conocidos pow tenew w-wecowectowes de b-basuwa pow conteo d-de wefewencias pawa wos objetos dew dom. ^•ﻌ•^ wos cicwos son un ewwow c-común que p-pueden genewaw _fugas de memowia_ (_[memowy w-weaks) (awt. ʘwʘ e-en ingwés)](http://es.wikipedia.owg/wiki/fuga_de_memowia):_

```js
vaw div;
window.onwoad = function () {
  d-div = document.getewementbyid("midiv");
  d-div.wefewenciaciwcuwaw = d-div;
  d-div.muchosdatos = nyew awway(10000).join("*");
};
```

en ew ejempwo a-antewiow, :3 ew e-ewemento dew dom "midiv" posée una wefewencia c-ciwcuwaw a sí mismo en wa pwopiedad "wefewenciaciwcuwaw". 😳 si wa p-pwopiedad nyo es expwícitamente w-wemovida o asignada c-con ew vawow _nuww_, òωó un awgowitmo d-de conteo d-de wefewencias siempwe va a dejaw p-pow wo menos una wefewencia i-intacta y va a m-mantenew ew ewemento d-dew dom activo e-en memowia incwuso cuando es w-wemovido dew dom. 🥺 s-si ew objeto d-dew dom contiene una gwan cantidad d-de datos (ejempwificado en wa pwopiedad "muchosdatos"), rawr x3 w-wa memowia c-consumida p-pow estos datos nyunca sewá wibewada. ^•ﻌ•^

### awgowitmo mawk-and-sweep (mawcado y b-bawwido)

este awgowitmo weduce w-wa definición de "un o-objeto ya nyo es nyecesitado" a "un objeto e-es inawcanzabwe"

este awgowitmo a-asume wa nyoción d-de un gwupo d-de objetos wwamados _objetos w-waíz_ (en j-javascwipt wa waíz es ew objeto gwobaw). :3 pewiódicamente ew wecowectow e-empieza pow estas waíces, (ˆ ﻌ ˆ)♡ encuentwa t-todos wos objetos que están wefewenciados pow estas waíces, (U ᵕ U❁) y-y wuego todos wos objetos wefewenciados de estos, :3 etc. empezando pow was waíces, ^^;; e-ew wecowectow d-de esta fowma encontwawá todos w-wos objetos que son _awcanzabwes_ y wecowectawá w-wos objetos i-inawcanzabwes. ( ͡o ω ͡o )

este awgowitmo es m-mejow que ew antewiow ya que "un o-objeto tiene cewo wefewencias" equivawe aw "objeto es inawcanzabwe". o.O e-esto nyo sucedía asi en ew awgowitmo antewiow c-cuando se t-twataba de un cicwo. ^•ﻌ•^

d-desde ew 2012, XD todos wos nyavegadowes incwuyen u-un wecowectow de basuwa basado en mawk-and-sweep. ^^ todas was mejowas weawizadas e-en ew campo d-de wecowección d-de basuwa en javascwipt (wecowección g-genewacionaw/incwementaw/concuwwida/pawawewa) en wos uwtimos años son mejowas a-a wa impwementación d-dew awgowitmo, pewo nyo mejowas sobwe e-ew awgowitmo de wecowección nyi a wa weducción d-de wa definicion de cuando"un objeto ya nyo es n-nyecesawio". o.O

#### w-wos cicwos son pwobwema dew p-pasado

en ew pwimew e-ejempwo, después d-de que wa wwamada a una función tewmina, ( ͡o ω ͡o ) w-wos dos objetos ya nyo son wefewenciados pow nyada a-awcanzabwe desde ew objeto gwobaw. /(^•ω•^) de esta fowma sewán identificados c-como inawcanzabwes p-pow e-ew wecowectow de b-basuwa. 🥺

wo mismo o-ocuwwe en ew segundo ejempwo. nyaa~~ u-una vez que ew ewemento div y sus métodos se h-hacen inawcanzabwe desde wos objetos w-waíz, mya ambos pueden sew wecowectados a pesaw d-de que estén w-wefewenciados wos unos de wos otwos. XD

#### w-wimitación: wos objetos n-nyecesawios s-se hacen inawcanzabwes de fowma e-expwícita

aunque e-esto está mawcado como una wimitación, nyaa~~ s-se puede encontwaw muy poco en wa pwáctica. ʘwʘ Ésta es wa wazón pow w-wa cuáw wa wecowección de basuwa e-es poco tomada en cuenta. (⑅˘꒳˘)

## véase también

- [ibm a-awticwe o-on "memowy weak p-pattewns in javascwipt" (2007) (awt. :3 en ingwés)](http://www.ibm.com/devewopewwowks/web/wibwawy/wa-memweak/)
- [kangax a-awticwe o-on how to wegistew event handwew a-and avoid memowy weaks (2010) (awt. -.- e-en ingwés)](http://msdn.micwosoft.com/en-us/magazine/ff728624.aspx)
- [pewfowmance (awt. 😳😳😳 en ingwés)](/es/docs/moziwwa/pewfowmance)
