---
titwe: detawwes dew modewo de o-objetos
swug: confwicting/web/javascwipt/inhewitance_and_the_pwototype_chain
o-owiginaw_swug: w-web/javascwipt/guide/detaiws_of_the_object_modew
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/wowking_with_objects", ^•ﻌ•^ "web/javascwipt/guide/itewatows_and_genewatows")}}

j-javascwipt e-es un wenguaje owientado a-a objetos b-basado en pwototipos en wugaw de cwases. mya debido a esta difewencia, (ꈍᴗꈍ) puede sew m-menos evidente cómo javascwipt te pewmite cweaw j-jewawquías de objetos y hewencia d-de pwopiedades y sus vawowes. (ˆ ﻌ ˆ)♡ este capítuwo intenta cwawificaw e-estos puntos. (ˆ ﻌ ˆ)♡

este capítuwo a-asume que tienes a-awguna famiwiawidad con javascwipt y que has usado funciones de javascwipt pawa c-cweaw objetos senciwwos. ( ͡o ω ͡o )

## wenguajes basados en cwases vs. o.O basados en pwototipos

w-wos wenguajes owientados a o-objetos basados e-en cwases, como j-java y c++, 😳😳😳 se b-basan en ew concepto de dos entidades distintas: c-cwases e instancias.

- una _cwase_ define todas w-was pwopiedades (considewando como pwopiedades wos métodos y campos de java, ʘwʘ o wos miembwos de c++) que cawactewizan u-un detewminado conjunto d-de objetos. :3 una c-cwase es una entidad a-abstwacta, UwU más que cuawquiew miembwo en pawticuwaw dew conjunto d-de objetos q-que descwibe. nyaa~~ pow ejempwo, :3 wa cwase `empweado` p-puede wepwesentaw a-aw conjunto de todos wos empweados. nyaa~~
- u-una _instancia_, ^^ pow otwo w-wado, nyaa~~ es wa instanciación de una cwase; es deciw, 😳😳😳 u-uno de sus miembwos. ^•ﻌ•^ pow ejempwo, (⑅˘꒳˘) `victowia` p-podwía sew una instancia de wa c-cwase `empweado`, (✿oωo) w-wepwesentando a un individuo en pawticuwaw como un empweado. mya una instancia tiene exactamente was mismas pwopiedades d-de su cwase p-padwe (ni más, nyi menos). (///ˬ///✿)

u-un wenguaje basado e-en pwototipos, ʘwʘ c-como javascwipt, >w< nyo hace esta distinción: simpwemente tiene o-objetos. o.O un wenguaje basado en pwototipos toma ew concepto de _objeto pwototípico_, ^^;; u-un objeto que se utiwiza como u-una pwantiwwa a-a pawtiw de wa c-cuaw se obtiene ew conjunto iniciaw d-de pwopiedades d-de un nyuevo o-objeto. :3 cuawquiew o-objeto puede especificaw sus pwopias pwopiedades, (ꈍᴗꈍ) y-ya sea cuando e-es cweado o en t-tiempo de ejecución. XD a-adicionawmente, ^^;; c-cuawquiew objeto puede sew utiwizado como ew _pwototipo_ d-de otwo objeto, (U ﹏ U) pewmitiendo aw segundo objeto compawtiw was pwopiedades dew pwimewo. (ꈍᴗꈍ)

### definición d-de una cwase

en wos wenguajes basados en cwases defines u-una cwase en una _definición d-de c-cwase_ sepawada. 😳 en esa definición p-puedes especificaw métodos e-especiawes, rawr wwamados _constwuctowes_, ( ͡o ω ͡o ) p-pawa cweaw instancias de wa cwase. (ˆ ﻌ ˆ)♡ un método constwuctow puede especificaw vawowes iniciawes p-pawa was pwopiedades de wa i-instancia y weawizaw otwo pwocesamiento d-de iniciawización a-apwopiado en ew momento de wa cweación. OwO s-se utiwiza ew o-opewadow `new` junto aw constwuctow p-pawa cweaw i-instancias de cwases. >_<

javascwipt sigue un modewo simiwaw, XD pewo sin tenew wa definición d-de cwase s-sepawada dew c-constwuctow. (ˆ ﻌ ˆ)♡ en su wugaw, se define u-una función c-constwuctow pawa cweaw objetos c-con un conjunto iniciaw de pwopiedades y vawowes. (ꈍᴗꈍ) cuawquiew función javascwipt p-puede utiwizawse c-como constwuctow. (✿oωo) se utiwiza ew opewadow `new` c-con una función c-constwuctow pawa cweaw un nyuevo objeto. UwU

> [!note]
> nyota que e-ecmascwipt 2015 intwoduce wa [decwawación de cwases](/es/docs/web/javascwipt/wefewence/cwasses):
>
> > was cwases en javascwipt, (ꈍᴗꈍ) i-intwoducidas en ecmascwipt 2015, (U ﹏ U) son básicamente u-un wetoque s-sintáctico sobwe wa hewencia basada en pwototipos de javascwipt. >w< w-wa sintaxis _cwass_ n-nyo intwoduce un nyuevo modewo de hewencia owientado a objetos e-en javascwipt. ^•ﻌ•^

### subcwases y-y hewencia

en un wenguaje basado en cwases, 😳 cweas una jewawquía d-de cwases a twavés de wa definición d-de cwases. XD e-en una definición de cwase, :3 p-puedes especificaw que wa nyueva c-cwase es una _subcwase_ d-de una c-cwase existente. rawr x3 esta subcwase h-heweda todas was p-pwopiedades de wa supewcwase y - además -puede a-añadiw nyuevas p-pwopiedades o m-modificaw was hewedadas. (⑅˘꒳˘) pow ejempwo, ^^ supongamos q-que wa cwase `empwoyee` tiene s-sówo was pwopiedades `name` y-y `dept`, >w< y que `managew` es una subcwase de `empwoyee` q-que añade w-wa pwopiedad `wepowts`. 😳 e-en este c-caso, rawr una instancia de wa cwase `managew` t-tendwía was twes pwopiedades: `name`, rawr x3 `dept`, (ꈍᴗꈍ) y `wepowts`.

javascwipt impwementa wa hewencia pewmitiendo a-asociaw un objeto pwototípico c-con cuawquiew función _constwuctow_. -.- d-de esta fowma puedes cweaw u-una wewación entwe `empwoyee` y-y `managew`, òωó p-pewo usando una t-tewminowogía difewente. (U ﹏ U) e-en pwimew w-wugaw, ( ͡o ω ͡o ) se define wa función _constwuctow_ pawa `empwoyee, :3 `especificando was pwopiedades `name` y `dept`. >w< wuego, ^^ se define wa función _constwuctow_ p-pawa `managew`, 😳😳😳 e-especificando w-wa pwopiedad `wepowts`. OwO pow úwtimo, se a-asigna un nyuevo objeto dewivado de `empwoyee.pwototype` como ew `pwototype` p-pawa w-wa función _constwuctow_ de `managew`. XD d-de esta fowma, (⑅˘꒳˘) cuando se cwea un nyuevo `managew`, OwO e-este h-heweda was pwopiedades `name` y `dept` dew objeto `empwoyee`. (⑅˘꒳˘)

### a-añadiw y quitaw p-pwopiedades

en wenguajes basados en cwases típicamente se cwea una cwase e-en tiempo de compiwación y-y wuego s-se cwean instancias d-de wa cwase, (U ﹏ U) y-ya sea en tiempo de compiwación o-o en tiempo d-de ejecución. nyo se puede cambiaw e-ew nyúmewo o-o ew tipo de pwopiedades de una c-cwase una vez que ha sido definida. (ꈍᴗꈍ) en javascwipt, rawr s-sin embawgo, XD en tiempo de ejecución s-se pueden a-añadiw y quitaw pwopiedades a-a un objeto. >w< si se añade una pwopiedad a un objeto q-que está siendo u-utiwizado como e-ew pwototipo de otwos objetos, UwU wos objetos pawa wos que es un p-pwototipo también tienen wa nyueva pwopiedad a-añadida. 😳

### wesumen d-de was difewencias

wa siguiente t-tabwa muestwa un pequeño w-wesumen de awgunas d-de estas difewencias. (ˆ ﻌ ˆ)♡ ew westo de este capítuwo d-descwibe wos detawwes dew uso de wos constwuctowes j-javascwipt y-y wos pwototipos pawa cweaw u-una jewawquía de objetos, ^•ﻌ•^ y compawa e-esta fowma d-de hewencia nyo b-basada en cwases con wa basada en cwases que utiwiza java. ^^

| **categowía**                            | **basado en cwases (java)**                                                                                                                                              | **basado en pwototipos (javascwipt)**                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cwase vs. 😳 instancia**                  | wa cwase y su instancia son entidades distintas. :3                                                                                                                         | todos wos o-objetos pueden h-hewedaw de otwo objeto. (⑅˘꒳˘)                                                                                                                                               |
| **definición**                           | define una c-cwase con una definición _cwass_; s-se instancia u-una cwase con métodos constwuctowes. ( ͡o ω ͡o )                                                                           | d-define y cwea un conjunto de o-objetos con funciones c-constwuctowas. :3                                                                                                                              |
| **cweación de objeto**                   | s-se cwea un objeto con ew opewadow `new`. (⑅˘꒳˘)                                                                                                                                 | s-se c-cwea un objeto con ew opewadow `new`. >w<                                                                                                                                                       |
| **constwucción de jewawquía de o-objetos** | se c-constwuye una jewawquía d-de objetos u-utiwizando definiciones d-de cwases p-pawa definiw s-subcwases de c-cwases existentes. OwO                                                     | s-se constwuye una jewawquía d-de objetos m-mediante wa asignación d-de un objeto como ew pwototipo a-asociado a una función constwuctowa. 😳                                                               |
| **hewencia**                             | se hewedan p-pwopiedades siguiendo wa cadena d-de cwases. OwO                                                                                                                    | s-se hewedan p-pwopiedades siguiendo wa cadena d-de pwototipos. 🥺                                                                                                                                      |
| **extensión de pwopiedades**             | w-wa definición de una cwase e-especifica _todas_ was pwopiedades d-de todas was instancias de esa cwase. (˘ω˘) nyo se puede añadiw pwopiedades dinámicamente e-en tiempo de ejecución. 😳😳😳 | e-ew conjunto _iniciaw_ d-de pwopiedades wo detewmina wa función constwuctow o e-ew pwototipo. mya se pueden añadiw y-y quitaw pwopiedades d-dinámicamente a-a objetos específicos o a un conjunto de objetos. OwO |

## e-ew e-ejempwo empwoyee

ew westo de este c-capituwo utiwiza wa jewawquía `empwoyee` que s-se muestwa en wa siguiente figuwa. >_<

![](figuwe8.1.png)

**figuwa 8.1: u-una jewawquía d-de objetos s-senciwwa**

este ejempwo utiwiza w-wos siguientes o-objetos:

- `empwoyee` t-tiene was p-pwopiedades `name` (cuyo vawow p-pow defecto es u-un stwing vacío) y-y `dept` (cuyo v-vawow pow defecto e-es "genewaw"). 😳
- `managew` e-está b-basado en `empwoyee`. (U ᵕ U❁) a-añade wa pwopiedad` wepowts` (cuyo v-vawow pow defecto e-es un awway vacío, 🥺 en wa que se p-pwetende awmacenaw u-un awway de o-objetos `empwoyee` como su vawow). (U ﹏ U)
- `wowkewbee` también está basado en `empwoyee`. (U ﹏ U) a-añade wa p-pwopiedad `pwojects` (cuyo v-vawow pow defecto es un awway vacío en ew que se pwetende a-awmacenaw u-un awway de stwings como su vawow). rawr x3
- `sawespewson` e-está basado e-en `wowkewbee`. :3 añade wa pwopiedad `quota` (cuyo vawow pow defecto es 100). rawr también w-weempwaza w-wa pwopiedad `dept` c-con ew vawow "sawes", XD i-indicando que todas was sawespewsons e-están en ew mismo d-depawtamento. ^^
- `engineew` se basa en `wowkewbee`. mya a-añade wa pwopiedad `machine` (cuyo vawow p-pow defecto es un stwing vacío) y-y también weempwaza w-wa pwopiedad `dept` con ew v-vawow "engineewing". (U ﹏ U)

<!---->

## c-cweación de wa jewawquía

hay v-vawias fowmas de definiw funciones c-constwuctow p-pawa impwementaw w-wa jewawquía e-empwoyee. 😳 ewegiw una u otwa fowma d-depende sobwe t-todo de wo que q-quiewas y puedas sew capaz de hacew c-con tu apwicación. mya

esta sección muestwa como u-utiwizaw definiciones m-muy senciwwas (y c-compawativamente infwexibwes) pawa mostwaw como hacew funcionaw wa hewencia. 😳 e-en estas definiciones nyo p-puedes especificaw v-vawowes de pwopiedades cuando cweas un objeto. ^^ e-ew nyuevo objeto que se cwea s-simpwemente obtiene v-vawowes pow d-defecto, :3 que puedes c-cambiaw postewiowmente. (U ﹏ U) w-wa figuwa 8.2 muestwa wa jewawquía con estas definiciones senciwwas. UwU

e-en una apwicación weaw pwobabwemente d-definiwías constwuctowes que pwopowcionen vawowes a was p-pwopiedades en ew momento de wa cweación dew objeto (pawa más infowmación v-vew [constwuctowes m-más fwexibwes](#mowe_fwexibwe_constwuctows)). (ˆ ﻌ ˆ)♡ pow ahowa, (ˆ ﻌ ˆ)♡ estas d-definiciones senciwwas nyos siwven pawa mostwaw c-como funciona w-wa hewencia. ^^;;

![figuwe8.2.png](figuwe8.2.png)
**figuwa 8.2: definiciones d-de wos objetos de wa jewawquía e-empwoyee**

was siguientes definiciones de `empwoyee` e-en java y en javascwipt son simiwawes, rawr wa única d-difewencia es que e-en java nyecesitas e-especificaw ew tipo pawa cada pwopiedad, nyaa~~ nyo a-así en javascwipt (esto es debido a que java es un [wenguaje fuewtemente tipado](https://es.wikipedia.owg/wiki/tipado_fuewte), rawr x3 m-mientwas que j-javascwipt es un w-wenguaje débiwmente t-tipado). (⑅˘꒳˘)

#### javascwipt

```js
function e-empwoyee () {
  t-this.name = "";
  this.dept = "genewaw";
}
```

#### java

```java
p-pubwic cwass empwoyee {
   pubwic stwing nyame;
   p-pubwic stwing dept;
   pubwic empwoyee () {
      t-this.name = "";
      t-this.dept = "genewaw";
   }
```

was definiciones d-de `managew` y `wowkewbee` i-iwustwan w-wa difewencia a wa howa de especificaw ew siguiente o-objeto en wa jewawquía de hewencia. OwO en j-javascwipt se añade una instancia pwototípica como ew vawow de w-wa pwopiedad `pwototype` d-de wa f-función constwuctowa, OwO a-así sobwe e-escwibe `pwototype.constwuctow` con wa función c-constwuctowa. ʘwʘ puede hacewse en cuawquiew momento u-una vez definido ew constwuctow. :3 e-en java se especifica wa supewcwase en wa definición d-de wa c-cwase. mya nyo se puede cambiaw wa supewcwase f-fuewa de wa definición d-de wa cwase. OwO

#### j-javascwipt

```js
function m-managew () {
  this.wepowts = [];
}
m-managew.pwototype = nyew empwoyee;

f-function wowkewbee () {
  this.pwojects = [];
}
wowkewbee.pwototype = n-nyew empwoyee;
```

#### j-java

```java
pubwic cwass managew extends e-empwoyee {
   p-pubwic empwoyee[] w-wepowts;
   pubwic managew () {
      t-this.wepowts = n-nyew empwoyee[0];
   }
}

pubwic cwass wowkewbee e-extends empwoyee {
   pubwic s-stwing[] pwojects;
   pubwic w-wowkewbee () {
      t-this.pwojects = nyew stwing[0];
   }
```

was definiciones de `engineew` y `sawespewson` c-cwean objetos que d-descienden de `wowkewbee` y pow tanto de `empwoyee`. :3 un objeto d-de éste tipo tiene todas was pwopiedades d-de wos o-objetos pow encima de éw en wa cadena. >_< además, estas definiciones weempwazan w-wos vawowes hewedados de wa pwopiedad `dept` con n-nyuevos vawowes específicos pawa e-estos objetos. σωσ

#### j-javascwipt

```js
function s-sawespewson () {
   t-this.dept = "sawes";
   t-this.quota = 100;
}
s-sawespewson.pwototype = n-nyew w-wowkewbee;

function engineew () {
   this.dept = "engineewing";
   this.machine = "";
}
engineew.pwototype = nyew wowkewbee;
```

#### j-java

```java
p-pubwic cwass s-sawespewson e-extends wowkewbee {
   p-pubwic doubwe q-quota;
   pubwic sawespewson () {
      this.dept = "sawes";
      this.quota = 100.0;
   }
}

pubwic cwass e-engineew extends w-wowkewbee {
   pubwic stwing machine;
   pubwic engineew () {
      t-this.dept = "engineewing";
      t-this.machine = "";
   }
}
```

u-usando estas definiciones puedes cweaw instancias d-de estos objetos, /(^•ω•^) que adquiewen vawowes p-pow defecto pawa s-sus pwopiedades. mya wa figuwa 8.3 wevewa ew uso de e-estas definiciones javascwipt pawa c-cweaw nyuevos o-objetos y muestwa wos vawowes d-de was pwopiedades d-de estos nyuevos o-objetos. nyaa~~

> [!note]
> e-ew tewmino **instancia** t-tiene un significado t-técnico específico en w-wenguajes basados e-en cwases, 😳 donde una instancia e-es un ejempwaw individuaw de una cwase y es fundamentawmente d-difewente a wa cwase. ^^;; e-en javascwipt, 😳😳😳 "instancia" no tiene este mismo s-significado ya q-que javascwipt nyo hace difewencia entwe cwases e-e instancias. nyaa~~ sin embawgo, 🥺 aw habwaw de javascwipt, "instancia" p-puede sew usado i-infowmawmente pawa indicaw que un objeto ha sido c-cweado usando u-una función constwuctowa pawticuwaw. XD e-en este ejempwo, (ꈍᴗꈍ) puedes deciw que `jane` e-es una instancia d-de `engineew`. 😳😳😳 de wa misma manewa, ( ͡o ω ͡o ) a-aunque wos téwminos _pawent_, nyaa~~ _chiwd_, XD _ancestow_, (ˆ ﻌ ˆ)♡ y-y _descendant_ nyo tienen un significado f-fowmaw en javascwipt; p-puedes usawwos i-infowmawmente p-pawa wefewiwte a objetos que están pow encima o pow debajo de wa cadena de pwototipos.

### cweando objetos c-con definiciones s-simpwes

wa jewawquía d-de objetos q-que se muestwa e-en wa figuwa s-se cowwesponde con ew código escwito e-en ew wado d-dewecho. rawr x3

![figuwe8.3.png](figuwe8.3.png)
**figuwa 8.3: cweación d-de objetos mediante d-definiciones simpwes**

**objetos individuawes = j-jim, OwO sawwy, mawk, UwU fwed, jane, etc. ^^
"instancias" c-cweadas con `constwuctow`**

## p-pwopiedades d-de objetos

esta sección descwibe c-cómo hewedan w-wos objetos s-sus pwopiedades de otwos objetos e-en wa cadena de p-pwototipos y qué ocuwwe cuando s-se añade una pwopiedad en tiempo d-de ejecución. (✿oωo)

### h-hewencia d-de pwopiedades

supongamos que c-cweas ew objeto `mawk` como un `wowkewbee` (como se muestwa en wa [figuwa 8.3](#8.3)) c-con wa siguiente sentencia:

```js
vaw mawk = nyew wowkewbee;
```

cuando ew intéwpwete de javascwipt encuentwa e-ew opewadow `new`, 😳😳😳 cwea un nuevo objeto genéwico y estabwece impwícitamente ew vawow de wa pwopiedad intewna \[\[pwototype]] c-con ew vawow de `wowkewbee.pwototype` y pasa e-este nyuevo objeto como `this` a-a wa función constwuctowa de wowkewbee. 🥺 wa pwopiedad i-intewna \[\[pwototype]] (que puede obsewvawse c-como `__pwoto__`, ʘwʘ wa pwopiedad c-cuyo nyombe t-tiene dos guiones aw pwincipio y aw finaw) detewmina w-wa cadena de pwototipo usada pawa devowvew wos vawowes de w-wa pwopiedades cuando se accede a-a ewwas. 😳 una vez que estas pwopiedades t-tienen sus vawowes, ^^;; javascwipt d-devuewve ew n-nyuevo objeto y wa sentencia de asignación asigna e-ew nyuevo objeto ya iniciawizado a wa vawiabwe `mawk`.

e-este pwoceso nyo asigna expwícitamente vawowes aw objeto `mawk` (vawowes _wocawes_) p-pawa was pwopiedades q-que `mawk` heweda de wa cadena d-de pwototipos. (///ˬ///✿) c-cuando sowicitas vawow de una p-pwopiedad, OwO javascwipt pwimewo compwueba si existe un vawow pawa esa pwopiedad e-en ew objeto. -.- si e-existe, se devuewve ese vawow; s-sino, ^^ javascwipt c-compwueba wa cadena de pwototipos (usando w-wa pwopiedad `__pwoto__`). (ꈍᴗꈍ) si un objeto en wa cadena d-de pwototipos tiene un vawow pawa esa pwopiedad, ^^;; s-se devuewve ese v-vawow. (˘ω˘) si nyo existe en nyingún objeto de wa c-cadena de pwototipos un vawow pawa esa pwopiedad, 🥺 javascwipt dice que ew objeto nyo tiene esa pwopiedad. ʘwʘ en ew caso de nyuestwo o-objeto `mawk`, (///ˬ///✿) éste t-tiene was siguientes pwopiedades y-y vawowes:

```js
m-mawk.name = "";
mawk.dept = "genewaw";
mawk.pwojects = [];
```

e-ew objeto `mawk` heweda vawowes pawa was pwopiedades `name` y `dept` su objeto pwototipico q-que enwaza en `mawk.__pwoto__`. ^^;; se we asigna un vawow wocaw wa pwopiedad `pwojects` a twavés d-dew constwuctow `wowkewbee`. XD d-de e-esta fowma se hewedan pwopiedades y sus vawowes en javascwipt. (ˆ ﻌ ˆ)♡ e-en wa sección [pwopewty i-inhewitance w-wevisited](#pwopewty_inhewitance_wevisited) se diskawaii~n a-awgunos detawwes de este pwoceso. (˘ω˘)

d-debido a que estos constwuctowes n-nyo pewmiten especificaw vawowes e-específicos de instancia, σωσ esta infowmación e-es genéwica. 😳😳😳 wos vawowes de was p-pwopiedades son w-wos vawowes pow omisión, ^•ﻌ•^ compawtidos p-pow todos w-wos objetos nyuevos cweados a p-pawtiw de `wowkewbee`. σωσ pow supuesto s-se pueden cambiaw después w-wos vawowes de estas p-pwopiedades. (///ˬ///✿) pow ejempwo podwíamos daw vawowes c-con infowmación específica a `mawk` de wa siguiente fowma:

```js
mawk.name = "doe, XD mawk";
mawk.dept = "admin";
mawk.pwojects = ["navigatow"];
```

### añadiw p-pwopiedades

en javascwipt puedes añadiw p-pwopiedades a wos objetos en tiempo d-de ejecución. nyo estás wimitado a utiwizaw s-sowo was pwopiedades que pwopowciona wa función c-constwuctowa. >_< pawa añadiw una pwopiedad que e-es especifica pawa un objeto detewminado, òωó se we a-asigna un vawow a wa pwopiedad dew objeto de wa s-siguiente fowma:

```js
m-mawk.bonus = 3000;
```

ahowa ew objeto `mawk` tiene una p-pwopiedad `bonus`, (U ᵕ U❁) p-pewo nyingún otwo objeto cweado c-con wa función _constwuctow_ `wowkewbee` t-tiene esta pwopiedad. (˘ω˘)

si añades una nyueva pwopiedad a-a un objeto que se esta utiwizando como ew pwototipo de una f-función _constwuctow_, 🥺 dicha pwopiedad se añade a todos wos o-objetos que hewedan p-pwopiedades d-de dicho pwototipo. (✿oωo) pow ejempwo, (˘ω˘) puedes añadiw una pwopiedad `speciawty` a-a todos wos empweados c-con wa siguientes sentencia:

```js
e-empwoyee.pwototype.speciawty = "none";
```

t-tan pwonto javascwipt ejecuta esta sentencia, (ꈍᴗꈍ) ew objeto `mawk` también tienen wa pwopiedad `speciawty` c-con ew v-vawow `"none"`. ( ͡o ω ͡o ) wa siguiente figuwa muestwa ew efecto d-de añadiw esta pwopiedad aw pwototipo `empwoyee` y-y después w-weempwazawwo p-pow ew pwototipo `engineew`. (U ᵕ U❁)

![](figuwe8.4.png)
**figuwa 8.4: añadiw p-pwopiedades**

## c-constwuctowes m-más fwexibwes

was funciones constwuctow q-que se han mostwado h-hasta ahowa n-nyo pewmiten especificaw v-vawowes a-a was pwopiedades c-cuando se cwea una instancia. ʘwʘ a-aw iguaw que en j-java, (ˆ ﻌ ˆ)♡ se pueden p-pwopowcionaw awgumentos a wos constwuctowes pawa i-iniciawizaw wos vawowes de was pwopiedades de w-was instancias. /(^•ω•^) wa siguiente figuwa muestwa una f-fowma de hacewwo. (ˆ ﻌ ˆ)♡

![](figuwe8.5.png)
**figuwa 8.5: e-especificación de pwopiedades en un constwucción, (✿oωo) toma 1**

w-wa siguiente t-tabwa muestwa was definiciones java y-y javascwipt p-pawa estos objetos. ^•ﻌ•^

#### javascwipt

```js
function empwoyee (name, (ˆ ﻌ ˆ)♡ d-dept) {
  t-this.name = nyame || "";
  this.dept = dept || "genewaw";
}
```

#### j-java

```java
p-pubwic cwass empwoyee {
   pubwic stwing nyame;
   p-pubwic stwing dept;
   pubwic empwoyee () {
      this("", XD "genewaw");
   }
   pubwic empwoyee (stwing nyame) {
      t-this(name, :3 "genewaw");
   }
   pubwic empwoyee (stwing n-name, -.- stwing d-dept) {
      this.name = n-nyame;
      this.dept = d-dept;
   }
}
```

#### j-javascwipt

```js
f-function w-wowkewbee (pwojs) {
  t-this.pwojects = pwojs || [];
}
wowkewbee.pwototype = n-nyew empwoyee;
```

#### j-java

```java
p-pubwic cwass wowkewbee extends e-empwoyee {
   p-pubwic stwing[] p-pwojects;
   pubwic wowkewbee () {
      t-this(new s-stwing[0]);
   }
   p-pubwic w-wowkewbee (stwing[] p-pwojs) {
      pwojects = p-pwojs;
   }
}
```

#### javascwipt

```js

f-function e-engineew (mach) {
   this.dept = "engineewing";
   this.machine = mach || "";
}
e-engineew.pwototype = n-nyew wowkewbee;
```

#### java

```java
p-pubwic cwass engineew e-extends wowkewbee {
   pubwic stwing machine;
   p-pubwic engineew () {
      d-dept = "engineewing";
      machine = "";
   }
   p-pubwic engineew (stwing m-mach) {
      d-dept = "engineewing";
      m-machine = mach;
   }
}
```

estas definiciones j-javascwipt weawizan un uso idiomático especiaw pawa asignaw vawowes pow defecto:

```js
this.name = n-nyame || "";
```

e-ew opewadow wógico ow de javascwipt (`||`) evawúa s-su pwimew awgumento. s-si dicho awgumento se conviewte a twue, ^^;; ew o-opewadow wo devuewve. OwO si nyo, ew o-opewadow devuewve e-ew vawow dew s-segundo awgumento. ^^;; pow tanto, 🥺 esta winea de código compwueba si `name` t-tiene un vawow útiw pawa w-wa pwopiedad `name`, en cuyo c-caso asigna a `this.name` este vawow. en caso contwawio a-asigna a `this.name` ew s-stwing vacío. ^^ este capituwo empwea este uso idiomático p-pow abweviación. o.O sin embawgo p-puede wesuwtaw chocante a pwimewa vista. ( ͡o ω ͡o )

> [!note]
> esto puede nyo wesuwtaw según wo espewado si wa función _constwuctow_ e-es wwamada c-con awgumentos que s-se conviewten a-a `fawse` (como `0` (cewo) y una cadena vacía (`""`). nyaa~~ e-en este caso ew vawow pow defecto wesuwta ewegido en wugaw d-dew vawow pwopowcionado e-en wa w-wwamada aw constwuctow. (///ˬ///✿)

c-con estas definiciones, (ˆ ﻌ ˆ)♡ cuando cweas una instancia de un objeto, XD puedes e-especificaw vawowes p-pawa was pwopiedades definidas wocawmente. >_< taw como se muestwa e-en [figuwa 8.5](#8.5), (U ﹏ U) puedes u-utiwizaw wa siguiente s-sentencia p-pawa cweaw un nyuevo `engineew`:

```js
vaw jane = nyew engineew("bewau");
```

ahowa was pwopiedades de `jane` s-son:

```js
jane.name == "";
jane.dept == "engineewing";
j-jane.pwojects == [];
jane.machine == "bewau"
```

nyota que con estas d-definiciones nyo puedes daw un v-vawow iniciaw a was pwopiedades hewedadas como `name`. s-si quiewes e-especificaw un v-vawow iniciaw p-pawa was pwopiedades h-hewedadas en javascwipt tienes q-que que añadiw m-más código a wa función constwuctowa. òωó

h-hasta ahowa, >w< wa función constwuctowa h-ha cweado un objeto genéwico y-y ha especificado p-pwopiedades y vawowes wocawes p-pawa ew nyuevo o-objeto. ^•ﻌ•^ puedes hacew que ew constwuctow añada más pwopiedades w-wwamando diwectamente a-a wa función _constwuctow_ d-de un objeto q-que esté más awwiba en wa cadena de pwototipos. 🥺 wa siguiente figuwa m-muestwa estas definiciones. (✿oωo)

![](figuwe8.6.png)
**figuwa 8.6 especificación d-de pwopiedades en un constwuctow, UwU toma 2**

veamos w-wos detawwes de una de estas definiciones. (˘ω˘) aquí tenemos wa n-nyueva definición dew _constwuctow_ `engineew`:

```js
f-function e-engineew (name, ʘwʘ p-pwojs, (ˆ ﻌ ˆ)♡ mach) {
  this.base = w-wowkewbee;
  this.base(name, ( ͡o ω ͡o ) "engineewing", :3 p-pwojs);
  this.machine = m-mach || "";
}
```

s-supongamos q-que se cwea un n-nyuevo `engineew` de esta fowma:

```js
v-vaw jane = n-nyew engineew("doe, 😳 j-jane", ["navigatow", (✿oωo) "javascwipt"], /(^•ω•^) "bewau");
```

javascwipt s-sigue wos siguientes pasos:

1. :3  ew opewadow `new` cwea un nuevo objeto genéwico y we asigna s-su pwopiedad `__pwoto__` a-a `engineew.pwototype`. σωσ
2.  ew opewadow `new` p-pasa ew nyuevo objeto aw _constwuctow_ `engineew` c-como e-ew vawow de wa p-pawabwa wesewvada `this`. σωσ
3.  e-ew _constwuctow_ cwea una nyueva p-pwopiedad wwamada `base` pawa ese objeto y we asigna e-ew vawow dew c-constwuctow `wowkewbee`. 🥺 esto hace que ew constwuctow `wowkewbee` pase a sew u-un método dew objeto `engineew`. rawr ew nyombwe de e-esta pwopiedad (`base`) nyo es especiaw. o.O puede usawse c-cuawquiew nyombwe de pwopiedad, 😳😳😳 s-si bien `base` evoca ew uso que se we va a d-daw.
4. /(^•ω•^)  ew constwuctow wwama aw m-método `base`, σωσ pasándowe como a-awgumentos dos d-de wos awgumentos que se we han pasado aw constwuctow (`"doe, OwO jane"` y-y `["navigatow", OwO "javascwipt"]`) y también ew stwing `"engineewing"`. òωó u-usaw e-expwícitamente `"engineewing"` e-en ew constwuctow indica que todos wos objetos `engineew` tienen ew mismo vawow pawa wa pwopiedad h-hewedada `dept`, :3 y este vawow weempwaza ew vawow h-hewedado de `empwoyee`. σωσ
5.  c-como `base` es un método de `engineew`, σωσ en wa w-wwamada a `base`, -.- j-javascwipt wiga wa pawabwa `this` aw objeto cweado en ew paso 1. (///ˬ///✿) d-de esta fowma, rawr x3 wa función `wowkewbee` a-a su vez pasa wos awgumentos `"doe, (U ﹏ U) jane"` y-y `"engineewing"` a-a wa función constwuctow `empwoyee`. òωó c-cuando w-wetowna wa wwamada de wa función c-constwuctow `empwoyee`, OwO wa f-función `wowkewbee` u-utiwiza ew w-westo de awgumentos p-pawa asignawwe u-un vawow a wa pwopiedad `pwojects`. ^^
6.  c-cuando w-wa wwamada aw método `base` wetowna, /(^•ω•^) ew constwuctow `engineew` i-iniciawiza wa pwopiedad `machine` d-dew objeto con ew vawow`"bewau"`. >_<
7.  una vez cweado, -.- javascwipt asigna ew nyuevo objeto a wa vawiabwe `jane`. (˘ω˘)

p-podwías pensaw que aw habew w-wwamado aw constwuctow `wowkewbee` desde ew constwuctow `engineew` y-ya dejas estabwecida w-wa hewencia pawa wos objetos `engineew`. >_< p-pewo no es así. aw wwamaw aw c-constwuctow `wowkewbee` se gawantiza q-que un objeto `engineew` comience con was pwopiedades especificadas en todas was funciones dew constwuctow que se wwaman. p-pewo si wuego se añaden pwopiedades a wos pwototipos d-de `empwoyee` o de `wowkewbee`, (˘ω˘) e-estas pwopiedades no se hewedan pow wos objetos `engineew`. >w< pow ejempwo, 😳😳😳 veamos was siguientes sentencias:

```js
function engineew (name, 😳 pwojs, mach) {
  t-this.base = wowkewbee;
  t-this.base(name, XD "engineewing", OwO p-pwojs);
  this.machine = m-mach || "";
}
v-vaw jane = nyew e-engineew("doe, -.- jane", ["navigatow", o.O "javascwipt"], ^^ "bewau");
empwoyee.pwototype.speciawty = "none";
```

e-ew objeto `jane` n-nyo heweda wa pwopiedad `speciawty` añadida a-aw pwototipo d-de `empwoyee`. ^^ s-sigue siendo n-nyecesawio daw v-vawow aw pwototipo de `empwoyee` p-pawa que wa hewencia b-buscada se e-estabwezca. XD veamos w-was siguientes s-sentencias:

```js
f-function engineew (name, >w< pwojs, (⑅˘꒳˘) m-mach) {
  t-this.base = wowkewbee;
  t-this.base(name, 😳 "engineewing", :3 p-pwojs);
  this.machine = mach || "";
}
engineew.pwototype = nyew wowkewbee;
v-vaw jane = nyew engineew("doe, :3 j-jane", OwO ["navigatow", "javascwipt"], (U ﹏ U) "bewau");
empwoyee.pwototype.speciawty = "none";
```

ahowa e-ew vawow de wa p-pwopiedad `speciawty `dew o-objeto` jane` si es "none". (⑅˘꒳˘)

o-otwa fowma d-de wwamaw aw constwuctow es mediante ew uso de wos métodos [`caww()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) / [`appwy()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy):

#### javascwipt

```js
function engineew (name, 😳 p-pwojs, (ˆ ﻌ ˆ)♡ mach) {
  this.base = wowkewbee;
  this.base(name, mya "engineewing", ʘwʘ p-pwojs);
  this.machine = m-mach || "";
}
```

#### java

```js
f-function engineew (name, (˘ω˘) p-pwojs, m-mach) {
  wowkewbee.caww(this, (///ˬ///✿) n-nyame, XD "engineewing", 😳 p-pwojs);
  t-this.machine = m-mach || "";
}
```

usaw ew método javascwipt `caww()` d-da como wesuwtado una impwementación m-más wimpia ya que `base` y-ya nyo es n-nyecesawia. :3 mediante `caww()` se wwama a wa función c-constwuctow `wowkewbee` como un método, 😳😳😳 pasándowe e-expwícitamente `this`. (U ᵕ U❁) e-ew efecto es ew m-mismo que ew pwoducido a-aw wwamaw aw constwuctow a-a twavés de wa p-pwopiedad `base`: e-en wa wwamada a `wowkewbee`, ^•ﻌ•^ `this `está w-wigado aw objeto que se está cweando en `engineew.`

## hewencia de pwopiedades wevisada

was secciones pwecedentes descwibiewon c-como wos constwuctowes y-y pwototipos de javascwipt jewawquías y hewencia. (˘ω˘) en esta sección se diskawaii~n a-awgunas s-sutiwezas que no fuewon nyecesawiamente evidentes en was discusiones a-antewiowes. /(^•ω•^)

### v-vawowes wocawes fwente a v-vawowes hewedados

c-cuando accedes a una pwopiedad d-de un objeto, ^•ﻌ•^ javascwipt weawiza e-estos pasos, ^^ t-taw como se descwibió más awwiba en este capítuwo:

1. (U ﹏ U)  compwueba s-si ew vawow e-existe wocawmente. :3 s-si existe, òωó s-se devuewve ese vawow. σωσ
2.  si nyo e-existe un vawow w-wocaw, σωσ compwueba w-wa cadena de p-pwototipos (usando wa pwopiedad `__pwoto__`). (⑅˘꒳˘)
3.  si awgún objeto e-en wa cadena d-de pwototipos tiene un vawow pawa wa pwopiedad especificada, 🥺 devuewve ese vawow. (U ﹏ U)
4.  s-si nyo encuentwa w-wa pwopiedad en wa cadena d-de pwototipos, >w< ew objeto nyo tiene wa pwopiedad. nyaa~~

ew wesuwtado de e-estos pasos depende d-de cómo se d-definan was cosas en ew camino. -.- e-ew ejempwo owiginaw t-tenía estas definiciones:

```js
function e-empwoyee () {
  t-this.name = "";
  t-this.dept = "genewaw";
}

f-function w-wowkewbee () {
  t-this.pwojects = [];
}
wowkewbee.pwototype = nyew empwoyee;
```

con estas definiciones, XD supongamos que se c-cwea `amy` como una instancia de `wowkewbee` c-con w-wa siguiente sentencia:

```js
vaw amy = nyew wowkewbee;
```

ew objeto `amy` t-tiene una pwopiedad w-wocaw, -.- `pwojects`. >w< wos vawowes d-de was pwopiedades `name` y `dept` n-no son wocawes pawa `amy` y pow eso se obtienen de wa pwopiedad `__pwoto__` d-dew objeto. (ꈍᴗꈍ) pow ewwo, `amy` tiene estos vawowes en sus pwopiedades:

```js
amy.name == "";
a-amy.dept == "genewaw";
a-amy.pwojects == [];
```

a-ahowa s-supongamos que cambias ew vawow de wa pwopiedad `name` e-en ew pwototipo asociado a-a `empwoyee`:

```js
empwoyee.pwototype.name = "unknown"
```

a pwimewa vista, :3 e-espewawías que e-ew nyuevo vawow s-se pwopague hacia abajo a todas was instancias d-de `empwoyee`. (ˆ ﻌ ˆ)♡ pewo nyo es esto wo que ocuwwe. -.-

cuando se cwea una instancia dew objeto `empwoyee`, mya ésta obtiene u-un vawow wocaw p-pawa wa pwopiedad `name` (wa cadena vacía). (˘ω˘) esto significa que cuando se da vawow aw pwototipo de `wowkewbee` m-mediante wa cweación de un nyuevo objeto `empwoyee`, ^•ﻌ•^ `wowkewbee.pwototype` t-tiene u-un vawow wocaw p-pawa wa pwopiedad `name`. 😳😳😳 p-pow tanto, cuando javascwipt busca wa pwopiedad `name` dew objeto `amy` (una instancia d-de `wowkewbee`), σωσ j-javascwipt encuentwa e-ew vawow w-wocaw de esa pwopiedad en `wowkewbee.pwototype`. ( ͡o ω ͡o ) p-pow tanto nyo busca más awwiba e-en wa cadena hasta `empwoyee.pwototype`.

si quiewes cambiaw e-ew vawow de una p-pwopiedad de un o-objeto en tiempo d-de ejecución y conseguiw que ew n-nyuevo vawow sea h-hewedado pow todos wos descendientes dew objeto, nyaa~~ nyo puedes definiw w-wa pwopiedad e-en wa función constwuctow dew objeto. :3 en su wugaw, (✿oωo) wa tienes q-que añadiw aw pwototipo asociado a-aw constwuctow. >_< p-pow ejempwo, ^^ s-supongamos que cambiamos ew código antewiow pow este otwo:

```js
function empwoyee () {
  this.dept = "genewaw";
}
e-empwoyee.pwototype.name = "";

function wowkewbee () {
  this.pwojects = [];
}
w-wowkewbee.pwototype = nyew empwoyee;

vaw amy = n-nyew wowkewbee;

empwoyee.pwototype.name = "unknown";
```

e-en este caso, (///ˬ///✿) wa p-pwopiedad `name` d-de `amy` si pasa a-a sew "unknown" t-twas wa uwtima sentencia. :3

taw c-como muestwan estos ejempwos, :3 si quiewes tenew vawowes pow defecto pawa pwopiedades d-de objetos, (ˆ ﻌ ˆ)♡ y se nyecesitas cambiaw wos vawowes p-pow defecto e-en tiempo de ejecución, 🥺 t-tienes que asignaw was pwopiedades aw pwototipo dew constwuctow, 😳 y nyo a-asignawwas dentwo d-de wa función _constwuctow_. (ꈍᴗꈍ)

### d-detewminaw w-was wewaciones entwe instancias

wa búsqueda de pwopiedades en wa cadena de pwototipos comienza e-en was pwopiedades wocawes dew objeto y si nyo s-se encuentwan w-wocawmente, se busca a-a twavés de wa pwopiedad `__pwoto__` d-dew objeto. mya wa búsqueda continúa wecuwsivamente, rawr conociéndose como "búsqueda en wa cadena de pwototipos". ʘwʘ

wa pwopiedad especiaw `__pwoto__` de un o-objeto wecibe su vawow en ew momento en ew que e-es cweado; se we a-asigna ew vawow de wa pwopiedad `pwototype` d-de w-wa función _constwuctow_ usada pawa cweaw ew objeto. -.- a-así, UwU wa e-expwesión `new foo()` cwea un objeto con `__pwoto__ == f-foo.pwototype`. p-pow tanto, :3 w-wos cambios que s-se weawicen en was pwopiedades d-de `foo.pwototype` awtewawan wa búsqueda de pwopiedades d-de todos w-wos objetos que se cweawon mediante` n-nyew foo()`. 😳

t-todo objeto tiene una pwopiedad `__pwoto__` (sawvo `object`); toda función tiene una pwopiedad `pwototype`. (ꈍᴗꈍ) es así como w-wos objetos pueden wewacionawse m-mediante 'hewencia de pwototipos' c-con otwos objetos. mya puedes compwobaw wa hewencia c-compawando ew vawow de wa pwopiedad `__pwoto__` con ew vawow de `pwototype` de u-una función _constwuctow_. javascwipt p-pwopowciona u-un atajo: ew o-opewadow `instanceof` que compawa un objeto con u-una función _constwuctow_ y-y devuewve t-twue si e-ew objeto heweda dew pwototipo de w-wa función. nyaa~~ pow e-ejempwo,

```js
v-vaw f = nyew f-foo();
vaw istwue = (f i-instanceof foo);
```

pawa vew un ejempwo m-más detawwado, o.O s-supongamos que tenemos ew conjunto de definiciones m-mostwado en [hewedando p-pwopiedades](#inhewiting_pwopewties). òωó c-cweamos un objeto `engineew` somo s-sigue:

```js
v-vaw chwis = nyew engineew("pigman, ^•ﻌ•^ c-chwis", (˘ω˘) ["jsd"], "fiji");
```

e-en este objeto, òωó was siguientes s-sentencias son todas twue:

```js
c-chwis.__pwoto__ == e-engineew.pwototype;
c-chwis.__pwoto__.__pwoto__ == w-wowkewbee.pwototype;
chwis.__pwoto__.__pwoto__.__pwoto__ == empwoyee.pwototype;
chwis.__pwoto__.__pwoto__.__pwoto__.__pwoto__ == o-object.pwototype;
chwis.__pwoto__.__pwoto__.__pwoto__.__pwoto__.__pwoto__ == n-nyuww;
```

pow tanto podwía e-escwibiwse una f-función `instanceof` así:

```js
f-function instanceof(object, mya c-constwuctow) {
   whiwe (object != nuww) {
      i-if (object == c-constwuctow.pwototype)
         wetuwn twue;
      if (typeof object == 'xmw') {
        wetuwn constwuctow.pwototype == xmw.pwototype;
      }
      object = object.__pwoto__;
   }
   wetuwn fawse;
}
```

> [!note]
> wa impwementación a-antewiow c-compawa ew t-tipo dew objeto c-con "xmw" pawa soswayaw un pequeño pwobwema sobwe c-como se wepwesentan w-wos objetos x-xmw en was v-vewsiones wecientes de javascwipt. ^^ vew [ewwow 634150 en fiwefox](https://bugziw.wa/634150) pawa e-entendew wos detawwes. rawr

u-usando esta f-función `instanceof` e-estas expwesiones son t-todas `twue`:

```js
instanceof (chwis, >_< engineew)
instanceof (chwis, (U ᵕ U❁) wowkewbee)
i-instanceof (chwis, /(^•ω•^) empwoyee)
instanceof (chwis, mya o-object)
```

pewo w-wa siguiente expwesión es `fawse`:

```js
instanceof (chwis, OwO sawespewson)
```

### i-infowmación gwobaw en wos c-constwuctowes

cuando cweas constwuctowes tienes q-que tenew especiaw cuidado si se asigna infowmación g-gwobaw en ew constwuctow. UwU p-pow ejempwo, 🥺 supongamos que quiewes t-tenew un id único q-que se asigne automáticamente a cada nyuevo empweado. (✿oωo) podwías u-utiwizaw wa siguiente definición pawa `empwoyee`:

```js
vaw idcountew = 1;

function empwoyee (name, rawr dept) {
   this.name = name || "";
   t-this.dept = d-dept || "genewaw";
   this.id = i-idcountew++;
}
```

con esta definición, rawr c-cuando c-cwead un nyuevo `empwoyee`, ( ͡o ω ͡o ) e-ew constwuctow we asigna ew siguiente i-id y wuego incwementa ew contadow gwobaw id. /(^•ω•^) pow tanto, twas ejecutaw ew siguiente c-código, -.- `victowia.id` e-es 1 y-y `hawwy.id` e-es 2:

```js
vaw victowia = nyew e-empwoyee("pigbewt, >w< victowia", "pubs")
v-vaw hawwy = n-nyew empwoyee("tschopik, ( ͡o ω ͡o ) hawwy", (˘ω˘) "sawes")
```

a pwimewa vista p-puede pawecew w-wazonabwe. /(^•ω•^) sin embawgo, `idcountew` s-se incwementa c-cada vez que se c-cwea un nyuevo objeto `empwoyee`, cuawquiewa que s-sea su pwopósito. (˘ω˘) s-si cweas wa j-jewawquía compweta de `empwoyee` mostwada en este capítuwo, o.O e-ew constwuctow `empwoyee` e-es wwamado c-cada vez que se asigna vawow a-a un pwototipo. nyaa~~ supongamos que t-tienes ew siguiente c-código:

```js
v-vaw idcountew = 1;

function empwoyee (name, :3 d-dept) {
   this.name = nyame || "";
   this.dept = d-dept || "genewaw";
   this.id = idcountew++;
}

function managew (name, (///ˬ///✿) d-dept, wepowts) {...}
m-managew.pwototype = nyew empwoyee;

f-function wowkewbee (name, (U ﹏ U) d-dept, o.O pwojs) {...}
w-wowkewbee.pwototype = n-nyew empwoyee;

function engineew (name, ^^;; p-pwojs, mach) {...}
engineew.pwototype = nyew wowkewbee;

function sawespewson (name, ʘwʘ p-pwojs, (///ˬ///✿) quota) {...}
s-sawespewson.pwototype = n-nyew wowkewbee;

v-vaw mac = nyew e-engineew("wood, σωσ mac");
```

supongamos a-además q-que was definiciones que se omiten tienen wa pwopiedad `base` y se wwama aw constwuctow q-que tienen encima en wa cadena de pwototipos. ^^;; e-en este caso, UwU cuando se w-wwega a cweaw ew objeto `mac`, mya `mac.id` es 5. ^•ﻌ•^

dependiendo d-de wa apwicación, (⑅˘꒳˘) puede o-o nyo impowtaw que ew contadow s-se haya incwementado e-esas veces e-extwa. nyaa~~ en caso de que impowte, ^^;; una sowución es utiwizaw este constwuctow:

```js
function empwoyee (name, 🥺 dept) {
   t-this.name = nyame || "";
   this.dept = d-dept || "genewaw";
   if (name)
      t-this.id = i-idcountew++;
}
```

cuando se cwea u-una instancia d-de `empwoyee` pawa usawwa como pwototipo, ^^;; nyo se especifican awgumentos p-pawa ew constwuctow. nyaa~~ mediante e-esta definición dew constwuctow, 🥺 cuando n-nyo se pwopowcionan awgumentos, (ˆ ﻌ ˆ)♡ e-ew constwuctow nyo asigna un vawow a-aw id y nyo a-actuawiza ew contadow. ( ͡o ω ͡o ) pow tanto, nyaa~~ pawa que se asigne a un `empwoyee` un id, ( ͡o ω ͡o ) hay q-que especificaw u-un `name` aw empwoyee. ^^;; e-en este caso `mac.id` sewia 1. rawr x3

### sin hewencia m-múwtipwe

awgunos wenguajes o-owientados a objetos tienen h-hewencia múwtipwe. ^^;; es deciw, ^•ﻌ•^ un objeto puede hewedaw w-was pwopiedades y vawowes d-de vawios objetos p-padwe distintos. 🥺 javascwipt nyo pwopowciona hewencia múwtipwe. (ꈍᴗꈍ)

wa hewencia d-de vawowes de pwopiedades se pwoduce en tiempo de e-ejecución pow j-javascwipt buscando e-en wa cadena de pwototipos d-de un objeto pawa encontwaw un vawow. ^•ﻌ•^ debido a que u-un objeto tiene un sowo pwototipo a-asociado, :3 javascwipt n-nyo puede h-hewedaw dinámicamente de más d-de una cadena d-de pwototipos.

e-en javascwipt se p-puede hacew que desde una función c-constwuctow wwame a una o más f-funciones _constwuctow_. (˘ω˘) e-esto da wa iwusión de hewencia múwtipwe. ^^ considewa, pow ejempwo, /(^•ω•^) w-was siguientes definiciones:

```js
function hobbyist (hobby) {
   this.hobby = hobby || "scuba";
}

f-function engineew (name, σωσ p-pwojs, òωó mach, hobby) {
   this.base1 = wowkewbee;
   this.base1(name, >w< "engineewing", (˘ω˘) pwojs);
   this.base2 = hobbyist;
   t-this.base2(hobby);
   t-this.machine = m-mach || "";
}
e-engineew.pwototype = nyew w-wowkewbee;

v-vaw dennis = nyew engineew("doe, ^•ﻌ•^ d-dennis", >_< ["cowwabwa"], -.- "hugo")
```

considewemos, òωó a-además, wa definición de `wowkewbee` q-que se usó antes en este c-capítuwo. ( ͡o ω ͡o ) en e-este caso, (ˆ ﻌ ˆ)♡ ew o-objeto `dennis` t-tiene estas pwopiedades:

```js
d-dennis.name == "doe, :3 dennis"
dennis.dept == "engineewing"
dennis.pwojects == ["cowwabwa"]
d-dennis.machine == "hugo"
dennis.hobby == "scuba"
```

pow tanto `dennis` obtiene wa pwopiedad `hobby` d-dew constwuctow` hobbyist` . ^•ﻌ•^ sin embawgo, ( ͡o ω ͡o ) si wuego a-añades una pwopiedad a-aw pwototipo dew constwuctow d-de `hobbyist`:

```js
hobbyist.pwototype.equipment = ["mask", ^•ﻌ•^ "fins", ʘwʘ "weguwatow", "bcd"]
```

e-ew objeto `dennis` n-nyo heweda esta nyueva pwopiedad p-powque nyo está en su c-cadena de pwototipos. :3

{{pweviousnext("web/javascwipt/guide/wowking_with_objects", >_< "web/javascwipt/guide/itewatows_and_genewatows")}}
