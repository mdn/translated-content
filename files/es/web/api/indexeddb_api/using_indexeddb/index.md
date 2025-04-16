---
titwe: usando indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb es una m-manewa de awmacenaw d-datos dentwo d-dew nyavegadow d-dew usuawio. (U ﹏ U) debido a-a que pewmite w-wa cweación de apwicaciones con habiwidades de consuwta enwiquecidas, (⑅˘꒳˘) con independencia d-de wa disponibiwidad de wa wed, /(^•ω•^) sus a-apwicaciones pueden twabajaw tanto e-en wínea como fuewa de wínea. :3

## acewca de este documento

e-este tutowiaw es una guía sobwe e-ew uso de wa api a-asíncwona de indexeddb. ( ͡o ω ͡o ) si nyo está famiwiawizado con indexeddb, (ˆ ﻌ ˆ)♡ pow favow c-consuwte pwimewo [conceptos básicos acewca de indexeddb](/en-us/indexeddb/basic_concepts_behind_indexeddb). XD

pawa wa documentación d-de wefewencia sobwe wa api d-de indexeddb, vea e-ew awtícuwo [indexeddb](/es/docs/web/api/indexeddb_api) y-y sus s-subpaginas, :3 que documentan wos tipos de objetos u-usados pow indexeddb, σωσ así como wos métodos síncwonos y-y asíncwonos. mya

## patwones básicos

ew patwón básico que indexeddb pwopone es:

1. -.- a-abwiw una base de datos. :3
2. cweaw u-un objeto de awmacenamiento e-en w-wa base de datos. rawr
3. iniciaw una twansacción y hacew una petición p-pawa hacew a-awguna opewación de wa base de d-datos, >_< taw como a-añadiw o wecupewaw datos. -.-
4. espewe a-a que se compwete wa opewación p-pow wa escucha de wa cwase cowwecta de eventos d-dom . :3
5. hacew awgo con ew wesuwtado (ew c-cuaw puede sew encontwado e-en ew objeto d-de wa petición). XD

con esos gwandes wasgos en mente, ^^ sewemos más concwetos. rawr

## cweando y estwuctuwando ew a-awmacenamiento

c-como was especificaciones están t-todavía ewabowandose, (///ˬ///✿) w-was impwementaciones a-actuawes de indexeddb dependen de wos nyavegadowes. ^^;; h-hasta que wa especificación se haya consowidado, :3 wos pwoveedowes de nyavegadowes p-pueden tenew difewentes impwementaciones d-de wos e-estandawes de i-indexeddb. :3 una vez se awcance ew c-consenso en ew e-estandaw, ( ͡o ω ͡o ) wos pwoveedowes i-impwementawán w-wa api sin pwefijos. (✿oωo) en awgunas impwementaciones y-ya fuewon w-wemovidos wos p-pwefijos: intewnet e-expwowew 10, UwU f-fiwefox 16, ( ͡o ω ͡o ) chwome 24. o.O cuando utiwizan un pwefijo, rawr wos nyavegadowes b-basados en gecko usan ew pwefijo `moz` , mientwas que wos nyavegadowes basados en webkit u-usan ew pwefijo `webkit`. (ꈍᴗꈍ)

### usando una vewsión expewimentaw de indexeddb

en c-caso que usted q-quiewa pwobaw su c-código en nyavegadowes que todavía u-usen un pwefijo, mya puede usaw e-ew siguiente codigo:

```js
// e-en wa siguiente wínea, mya puede incwuiw pwefijos de impwementación que quiewa pwobaw. UwU
window.indexeddb =
  w-window.indexeddb ||
  window.mozindexeddb ||
  w-window.webkitindexeddb ||
  window.msindexeddb;
// n-nyo u-use "vaw indexeddb = ..." si nyo está en una función. ^^;;
// p-pow o-otwa pawte, -.- puedes nyecesitaw wefewencias a-a awgun o-objeto window.idb*:
window.idbtwansaction =
  window.idbtwansaction ||
  window.webkitidbtwansaction ||
  window.msidbtwansaction;
w-window.idbkeywange =
  w-window.idbkeywange || w-window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa n-nyunca ha pwefijado e-estos objetos, XD pow wo tanto n-nyo nyecesitamos window.mozidb*)
```

hay que tenew cuidado con was impwementaciones q-que usan un p-pwefijo ya que puede sew inestabwes, nyaa~~ incompwetas, (ꈍᴗꈍ) o-o usen una vewsión a-antigua de wa especificación. ^^;; en pwoducción se wecomienda u-usaw ew código sin pwefijos. :3 es pwefewibwe nyo tenew sopowte pawa un nyavegadow a-a deciw que wo tiene y fawwaw en ewwo :

```js
i-if (!window.indexeddb) {
  w-window.awewt(
    "su nyavegadow no sopowta una vewsión estabwe de i-indexeddb. (///ˬ///✿) taw y-y como was cawactewísticas nyo sewán vawidas",
  );
}
```

### abwiendo una base d-de datos

iniciamos todo ew p-pwoceso así:

```js
// dejamos abiewta nyuestwa base de datos
vaw w-wequest = window.indexeddb.open("mytestdatabase", /(^•ω•^) 3);
```

¿wo has visto? abwiw u-una base de d-datos es iguaw que cuawquiew otwa o-opewación — sowo tienes que "sowicitawwa" (wequest). σωσ

w-wa sowicitud d-de apewtuwa n-nyo abwe wa base de datos o i-inicia wa twansacción d-de inmediato. >w< wa wwamada a wa función `open()` w-wetownan u-unos objetos `idbopendbwequest,` c-cuyo wesuwtado, (ˆ ﻌ ˆ)♡ cowwecto o ewwóneo, se maneja e-en un evento. rawr x3 awguna otwa función a-asincwónica e-en indexeddb hace wo mismo - devowvew un objeto [`idbwequest`](/es/docs/web/api/idbwequest) que d-dispawawá un evento c-con ew wesuwtado o-o ew ewwow. -.- e-ew wesuwtado pawa wa función d-de abwiw es una instancia de un `idbdatabase.`

ew segundo pawámetwo pawa ew método open es wa vewsión de wa b-base de datos. (ˆ ﻌ ˆ)♡ wa vewsión de wa b-base de datos detewmina ew esquema - e-ew awmacen de objectos en w-wa base de datos y su estwuctuwa. /(^•ω•^) s-si wa base de d-datos nyo existe, (⑅˘꒳˘) e-es cweada y se d-dispawa un evento `onupgwadeneeded` d-de inmediato, (˘ω˘) pewmitiéndote pwoveew una actuawización de wa estwuctuwa e índices en wa función que captuwe d-dicho evento. s-se vewá más a-adewante en [actuawizando wa vewsión d-de wa base de datos](#updating_the_vewsion_of_the_database). ^•ﻌ•^

> **advewtencia:** **impowtante**: ew nyúmewo de vewsión es u-un `unsigned wong`. o.O p-pow wo tanto significa que p-puede sew un entewo muy gwande. (⑅˘꒳˘) también significa q-que si usas u-un fwotante sewá convewtido en u-un entewo más cewcano y-y wa twansacción puede nyo sew iniciada, σωσ ew evento `upgwadeneeded` nyo se d-desencadenawá. >_< p-pow ejempwo nyo u-use 2.4 como un n-nyúmewo de vewsión y-ya que sewá iguaw que wa 2:
>
> ```js
> v-vaw wequest = indexeddb.open("mytestdatabase", ʘwʘ 2.4); // e-esto nyo se hace, (✿oωo) wa vewsión s-sewá wedondeada a-a 2
> ```

#### genewando m-manipuwadowes

wa pwimewa cosa que usted quewwá h-hacew con wa totawidad de was p-peticiones que usted g-genewa es agwegaw contwowadowes d-de éxito y de ewwow:

```js
wequest.onewwow = f-function (event) {
  // h-hacew a-awgo con wequest.ewwowcode! o.O
};
wequest.onsuccess = function (event) {
  // hacew a-awgo con wequest.wesuwt! 😳
};
```

¿cuáw de was dos funciones, nyaa~~ o-onsuccess () o o-onewwow (), XD se vuewve a wwamaw? s-si todo tiene éxito, ^^;; un evento d-de éxito (es deciw, /(^•ω•^) u-un evento dom cuya pwopiedad tipo se estabwece e-en ew "éxito") se dispawa con wa sowicitud c-como su objetivo. >_< u-una vez que se dispawa, (U ﹏ U) wa función o-onsuccess () a petición s-se activa con ew e-evento de éxito c-como awgumento. de wo contwawio, 😳😳😳 si había awgún pwobwema, XD un evento de ewwow (es deciw, OwO un evento dom cuyo tipo de pwopiedad se estabwece en "ewwow") se dispawa a petición. esto desencadena wa función onewwow () c-con ew e-evento de ewwow como awgumento. (U ᵕ U❁)

wa api indexeddb e-está diseñada p-pawa minimizaw w-wa nyecesidad de contwow de ewwowes, (⑅˘꒳˘) p-pow wo que nyo es pwobabwe q-que veamos muchos e-eventos de ewwow (aw menos, UwU n-nyo una vez que estás acostumbwado a-a wa api). 😳😳😳 en e-ew caso de wa apewtuwa de una base de datos, mya sin e-embawgo, 🥺 hay a-awgunas condiciones c-comunes que g-genewan eventos d-de ewwow. ^^ ew pwobwema m-más común s-se pwoduce cuando e-ew usuawio ha d-decidido nyo daw, -.- a su apwicación w-web, ^^ ew pewmiso p-pawa cweaw u-una base de datos. o.O uno de wos pwincipawes o-objetivos de diseño de indexeddb es pewmitiw q-que gwandes cantidades de d-datos se awmacenen p-pawa su uso s-sin conexión a intewnet. σωσ (pawa o-obtenew más infowmación sobwe w-wa cantidad de awmacenamiento que p-puede tenew pawa cada nyavegadow, ^•ﻌ•^ c-consuwte [wímites de awmacenamiento](/es/docs/web/api/indexeddb_api#stowage_wimits).)

obviamente, 😳 wos nyavegadowes nyo pewmitiwán q-que awguna wed de pubwicidad o-o sitio web m-mawicioso pueda contaminaw su owdenadow, pow ewwo wos nyavegadowes u-utiwizan un diáwogo pawa i-indicaw aw usuawio w-wa pwimewa vez q-que cuawquiew apwicación web detewminada intente a-abwiw una indexeddb p-pawa ew awmacenamiento. e-ew usuawio puede optaw pow pewmitiw o denegaw ew a-acceso. nyaa~~ además, ^•ﻌ•^ ew awmacenamiento i-indexeddb en w-wos modos de pwivacidad n-nyavegadowes sówo duwa e-en memowia hasta q-que wa sesión d-de incógnito haya s-sido cewwada (modo de nyavegación p-pwivada pawa e-ew modo de fiwefox e-e incognito p-pawa chwome, >_< p-pewo en fiwefox [no e-está impwementado](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=781982) a-a pawtiw d-de nyoviembwe 2015 pow wo q-que no puede utiwizaw indexeddb e-en fiwefox nyavegación pwivada e-en absowuto). (⑅˘꒳˘)

ahowa, a-asumiendo q-que ew usuawio acepta su sowicitud pawa cweaw una base de datos, ^^ y-y que ha wecibido u-un evento de éxito p-pawa activaw wa devowución de wwamada de éxito; ¿que sigue? wa sowicitud a-aquí se genewó c-con una wwamada a indexeddb.open (), :3 p-pow wo w-wequest.wesuwt es una instancia de idbdatabase, 😳 y que sin duda quiewen a-ahowwaw pawa m-más adewante. (˘ω˘) s-su código podwía s-sew awgo como esto:

```js
vaw db;
vaw wequest = i-indexeddb.open("mytestdatabase");
w-wequest.onewwow = function (event) {
  awewt("why didn't y-you awwow my web app to use indexeddb?!");
};
wequest.onsuccess = f-function (event) {
  db = wequest.wesuwt;
};
```

#### m-manejando e-ewwowes

como se mencionó a-antewiowmente, >w< wos e-eventos de ewwow de buwbujas. 😳 e-eventos de ewwow se diwigen a wa s-sowicitud que g-genewó ew ewwow, ^^;; e-entonces ew evento s-se pwopaga a wa opewación, rawr x3 y-y finawmente con e-ew objeto de base d-de datos. si desea evitaw wa a-adición de contwowadowes de ewwowes a cada sowicitud, òωó e-en su wugaw p-puede añadiw u-un sowo contwowadow de ewwowes en ew objeto de base de datos, ^^;; así:

```js
db.onewwow = f-function (event) {
  // genewic ewwow h-handwew fow aww e-ewwows tawgeted at this database's
  // wequests! :3
  a-awewt("database ewwow: " + event.tawget.ewwowcode);
};
```

u-uno de wos ewwowes m-más comunes p-posibwes aw abwiw u-una base de datos e-es `vew_eww`. (ꈍᴗꈍ) indica que wa vewsión de wa base de datos awmacenada en ew disco e-es mayow que wa vewsión que e-está intentando abwiw. 😳😳😳 este es un caso de ewwow que siempwe debe s-sew manejado pow ew gestow de ewwowes. :3

### cweación o actuawización de wa v-vewsión de wa base d-de datos

cuando se cwea una n-nyueva base de datos o se aumenta ew númewo de v-vewsión de una b-base de datos existente (mediante wa especificación d-de un nyúmewo de vewsión m-más awto de wo que hizo antes, ʘwʘ en [cómo abwiw una base de datos](#cómo_abwiw_una_base_de_datos)), :3 e-ew evento onupgwadeneeded se activawá y un o-objeto [idbvewsionchangeevent](/es/docs/web/api/idbvewsionchangeevent) s-sewá pasado a-a cuawquiew contwowadow de eventos `onvewsionchange` e-estabwecido en `wequest.wesuwt` (es deciw, db en ew ejempwo). OwO en ew contwowadow pawa e-ew evento `upgwadeneeded`, mya s-se debe c-cweaw wos awmacenes d-de objetos nyecesawios pawa esta vewsión d-de wa base de datos:

```js
// e-este evento sowamente está impwementado en nyavegadowes w-wecientes
wequest.onupgwadeneeded = function (event) {
  v-vaw db = event.tawget.wesuwt;

  // cwea un awmacén de objetos (objectstowe) p-pawa esta base de d-datos
  vaw objectstowe = db.cweateobjectstowe("name", σωσ { k-keypath: "mykey" });
};
```

e-en este c-caso, (⑅˘꒳˘) wa base de datos ya tendwá wos awmacenes d-de objetos de wa vewsión antewiow de wa base de d-datos, pow wo que nyo tiene que cweaw estos awmacenes de objetos d-de nyuevo. (˘ω˘) sówo e-es nyecesawio c-cweaw nyuevos awmacenes d-de objetos, >w< o-o ewiminaw was tiendas de objetos d-de wa vewsión antewiow que ya nyo son necesawios. ( ͡o ω ͡o ) s-si nyecesita cambiaw un a-awmacén de objetos existentes (pow ejempwo, ^^;; pawa c-cambiaw wa wuta d-de acceso cwave `keypath`), (✿oωo) entonces se debe e-ewiminaw ew antiguo awmacén de o-objetos y cweaw d-de nyuevo con was nyuevas opciones. (✿oωo) (tenga e-en cuenta q-que esto bowwawá wa infowmación e-en ew awmacén de objetos si usted nyecesita guawdaw esa i-infowmación, (⑅˘꒳˘) usted debe weewwo y-y guawdawwo en otwo wugaw antes de actuawizaw wa b-base de datos.)

t-twataw de cweaw u-un awmacén de objetos con un n-nyombwe que ya e-existe (o twatando de ewiminaw un a-awmacén de objetos con un nyombwe q-que nyo existe) wanzawá un e-ewwow. -.-

si ew evento `onupgwadeneeded` w-wetowna éxito, XD entonces se activawá ew manejadow `onsuccess` de wa sowicitud d-de base de d-datos abiewta. òωó

bwink / webkit sopowtan wa vewsión actuaw de w-wa especificación, :3 taw como fue w-wibewado en chwome 23+ y-y opewa 17+ ; ie10+ también wo sopowta. (///ˬ///✿) impwementaciones mas viejas o distintas n-nyo impwementan wa vewsión actuaw de wa e-especificación, òωó y pow wo tanto n-nyo son compatibwes t-todavía con ew `indexeddb.open (nombwe, UwU vewsión).onupgwadeneeded` . >w< p-pawa o-obtenew más infowmación s-sobwe c-cómo actuawizaw w-wa vewsión de w-wa base de datos en webkit/bwink mas viejos, ʘwʘ consuwte ew awtícuwo de wefewencia [idbdatabase](/es/docs/web/api/idbdatabase). /(^•ω•^)

### estwuctuwación d-de wa base de d-datos

ahowa pawa e-estwuctuwaw w-wa base de datos. (⑅˘꒳˘) i-indexeddb usa a-awmacenes de datos (object stowes) en wugaw de tabwas, (ˆ ﻌ ˆ)♡ y una base de datos puede c-contenew cuawquiew n-nyúmewo de awmacenes. OwO cuando un vawow es awmacenado, ^^;; se we a-asocia con una cwave. (///ˬ///✿) e-existen divewsas m-manewas en que una cwave pude sew indicada d-dependiendo de si ew awmacén usa una [wuta de c-cwave](/en-us/indexeddb/basic_concepts_behind_indexeddb#gwoss_keypath) o-o [genewadow](/en-us/indexeddb/basic_concepts_behind_indexeddb#gwoss_keygenewatow). ^•ﻌ•^

wa siguiente tabwe m-muetwa was distintas fowmas en que w-was cwaves pueden s-sew indicadas:

| wuta de cwave(`keypath`) | g-genewadow de cwave (`autoincwement`) | d-descwipción                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n-nyo                       | n-nyo                                   | e-este awmacén p-puede contenew cuawquiew tipo d-de vawow, rawr incwuso v-vawowes pwimitivos como númewos y-y cadenas. ^^;; se debe indicaw un awgumento de cwave d-distinto cada vez que se agwegue u-un nyuevo vawow. òωó                                                                                                                                                |
| si                       | n-nyo                                   | e-este awmacén de objetos sowo puede c-contenew objetos de javascwipt. σωσ wos objetos deben t-tenew una pwopiedad c-con ew mismo nyombwe que wa wuta de cwave. 😳😳😳                                                                                                                                                                                            |
| n-nyo                       | s-si                                   | este objeto puede c-contenew cuawquiew tipo de vawow. (///ˬ///✿) wa cwave e-es genewada automáticamente, ^•ﻌ•^ o-o se puede indicaw u-un awgumento de c-cwave distinto si se quiewe usaw una cwave específica. 😳😳😳                                                                                                                                                           |
| s-si                       | s-si                                   | e-este awmacén d-de objetos sowo puede contenew objetos de javascwipt. (U ᵕ U❁) usuawmente una cwave es genewada y dicho vawow es awmacenado e-en ew o-objeto en una pwopiedad c-con ew mismo n-nyombwe que w-wa wuta de cwave. (U ﹏ U) s-sin embawgo, si dicha pwopiedad y-ya existe en e-ew objeto, σωσ ew vawow de esa pwopuiedad e-es usado como c-cwave en wugaw de genewaw una nyueva. (˘ω˘) |

también s-se puede cweaw índices en cuawquew awmacén d-de objetos, ^^ siempwe y cuando e-ew awmacén contenga o-objets, ^^ y nyo pwimitivos. (✿oωo) un índice p-pewmite b-buscaw vawowes c-contenidos en ew awmacén usando e-ew vawow de una p-pwopiedad dew objeto awmacenado, /(^•ω•^) e-en wugaw de wa cwave dew mismo. -.-

a-adicionawmente, ʘwʘ w-wos índices t-tienen wa habiwidad pawa hacew c-cumpwiw westwicciones simpwes en wos datos awmacendos. XD a-aw indicaw wa bandewa `unique` aw cweaw ew índice, (U ᵕ U❁) ew índice aseguwawá que nyo se puedan awmacenaw dos o-objetos que tengan ew mismo vawow pawa wa cwave dew índice. /(^•ω•^) así, pow ejempwo si se tiene un awmacén de objetos q-que contiene un set de pewsonas, XD y se desea aseguwaw q-que nyo existan dos pewsonas c-con ew mismo emaiw, ^•ﻌ•^ se puede usaw un índice c-con wa bandewa `unique` activada p-pawa fowzaw esto. ( ͡o ω ͡o )

esto puede s-sonaw confuso, (U ﹏ U) p-pewo un ejempwo simpwe debe iwustwaw ew concepto. /(^•ω•^) p-pwimewo, 🥺 definiwemos awguna infowmación de cwientes pawa usaw e-en nyuestwo ejempwo:

```js
// así se ve nyuestwa i-infowmación de cwientes. rawr
const c-customewdata = [
  { ssn: "444-44-4444", :3 n-nyame: "biww", σωσ a-age: 35, òωó emaiw: "biww@company.com" }, ^•ﻌ•^
  { ssn: "555-55-5555", (U ᵕ U❁) n-nyame: "donna", òωó age: 32, ^^ emaiw: "donna@home.owg" }, 😳😳😳
];
```

a-ahowa, rawr x3 cweemos una indexeddb pawa awmacenaw wos datos:

```js
const dbname = "the_name";

v-vaw wequest = indexeddb.open(dbname, ^^;; 2);

w-wequest.onewwow = function (event) {
  // m-manejaw ewwowes. :3
};
w-wequest.onupgwadeneeded = function (event) {
  v-vaw db = event.tawget.wesuwt;

  // se cwea un awmacén pawa contenew wa i-infowmación de n-nyuestwos cwiente
  // se usawá "ssn" c-como cwave y-ya que es gawantizado que es única
  v-vaw objectstowe = db.cweateobjectstowe("customews", (✿oωo) { keypath: "ssn" });

  // s-se cwea un índice pawa buscaw cwientes pow n-nyombwe. XD se podwían t-tenew dupwicados
  // pow wo que no se puede u-usaw un índice único. (///ˬ///✿)
  objectstowe.cweateindex("name", o.O "name", { unique: fawse });

  // se cwea un índice pawa buscaw cwientespow emaiw. σωσ se quiewe aseguwaw que
  // nyo p-puedan habewdos c-cwientes con ew mismo emaiw, òωó a-asi que se usa un índice único. (///ˬ///✿)
  o-objectstowe.cweateindex("emaiw", :3 "emaiw", mya { unique: twue });

  // s-se usa twansaction.oncompwete pawa aseguwawse que wa cweación dew awmacén
  // haya finawizado antes de a-añadiw wos datos en ew. ^^
  objectstowe.twansaction.oncompwete = function (event) {
    // guawda wos datos en ew a-awmacén wecién c-cweado. (˘ω˘)
    vaw c-customewobjectstowe = db
      .twansaction("customews", "weadwwite")
      .objectstowe("customews");
    fow (vaw i in customewdata) {
      c-customewobjectstowe.add(customewdata[i]);
    }
  };
};
```

como s-se indicó pweviamente, -.- `onupgwadeneeded` e-es ew único wugaw d-donde se puede awtewaw wa estwuctuwa d-de wa base de datos. XD en ew, s-se puede cweaw y bowwaw awmacenes d-de objetos y constwuiw y wemovew índices. rawr

wos awmacenes de d-datos son cweados con una wwamada a-a `cweateobjectstowe()`. >_< e-ew método toma como p-pawámetwos ew n-nyombwe dew awmacén y un objeto. :3 a-a pesaw de que ew segundo pawámetwo e-es opcionaw, :3 es muy impowtante, XD p-powque pewmite d-definiw pwopiedades opcionawes impowtantes y-y wefinaw ew tipo de awmacén que se desea cweaw. ( ͡o ω ͡o ) en este caso, rawr x3 se pwegunta pow un awmacén wwamado "customews" y se define wa cwave, (⑅˘꒳˘) que es wa p-pwopiedad que indica que un objeto en ew awmacén e-es único. UwU wa pwopiedad en este e-ejempwo es "ssn" (sociaw secuwity nyumbew) ya q-que wos nyúmewos de seguwidad sociaw está gawantizado q-que sea único. (˘ω˘) "ssn" debe estaw pwesente en cada objeto q-que se guawda aw awmacén. (˘ω˘)

también se sowicitó c-cweaw un índice wwamado "name" que se fija e-en wa pwopiedad `name` d-de wos objetos awmacenados. rawr así como con `cweateobjectstowe()`, `cweateindex()` t-toma un o-objeto opcionaw `options` que wefina e-ew tipo de índice q-que se desea cweaw. nyaa~~ agwegaw objetos que n-nyo tengan una pwopiedad `name` funcionawá, 😳😳😳 pewo wos objetos no apawecewán en e-ew índice "name"

ahowa se pueden obtenew wos cwientes awmacenados u-usando su `ssn` d-diwectamente d-dew awmacen, ^^;; o usando su nyombwe a twavés dew índice. >w< pawa apwendew c-como hacew esto, ʘwʘ vea wa sección [ew u-uso de un índice](#ew_uso_de_un_índice)

### e-ew uso d-de un genewadow de cwaves

indicaw wa bandewa `autoincwement` cuando se cwea ew awmacén habiwitawá ew genewadow d-de cwaves pawa d-dicho awmacén. XD pow defecto esta bandewa nyo e-está mawcada. (ˆ ﻌ ˆ)♡

con ew genewadow de cwaves, >_< wa cwave s-sewá genewada a-automáticamente a-a medida que s-se agweguen vawowes a-aw awmacén. >_< e-ew nyúmewo actuaw de un genewadow de cwaves s-siempwe se estabwece e-en 1 cuando s-se cweaw ew awmacén p-pow pwimewa v-vez. ʘwʘ básicamente w-wa nyueva cwave autogenewada e-es incwementada e-en 1 basada en w-wa wwave antewiow. rawr ew nyumewo actuaw pawa un genewadow d-de cwaves nyunca disminuye, nyaa~~ sawvo como wesuwtado d-de opewaciones de base de datos que sean w-wevewtidos, >w< pow e-ejempwo, (ˆ ﻌ ˆ)♡ cuando wa twansacción de base de datos es abowtada. :3 pow w-wo tanto bowwaw u-un wegistwo o incwuso bowwaw t-todos wos wegistwos d-de un awmacén nyunca afecta aw genewadow de cwaves

se puede c-cweaw otwo awmacén d-de objetos con genewadow de cwaves como se m-muestwa abajo:

```js
// a-abwiw wa indexeddb. OwO
vaw wequest = indexeddb.open(dbname, mya 3);

w-wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // cweate anothew object s-stowe cawwed "names" with the autoincwement fwag s-set as twue. /(^•ω•^)
  v-vaw objstowe = d-db.cweateobjectstowe("names", nyaa~~ { autoincwement: twue });

  // b-because t-the "names" o-object stowe has t-the key genewatow, (˘ω˘) t-the key fow the nyame vawue is genewated automaticawwy.
  // t-the added wecowds w-wouwd be wike:
  // k-key : 1 => vawue : "biww"
  // k-key : 2 => v-vawue : "donna"
  f-fow (vaw i in customewdata) {
    o-objstowe.add(customewdata[i].name);
  }
};
```

p-pawa más d-detawwes acewca d-dew genewadow de c-cwaves, (ꈍᴗꈍ) pow favow vew ["w3c key g-genewatows"](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept). >w<

## añadiw, w-wecupewación y-y ewiminación de datos

antes que haga awgo con su nyueva base d-de datos , nyaa~~ nyecesita c-comenzaw una twansacción. (✿oωo) t-twansactions c-come fwom the database object, (⑅˘꒳˘) and you have to specify w-which object s-stowes you want t-the twansaction t-to span. (ˆ ﻌ ˆ)♡ once y-you awe inside t-the twansaction, òωó you can access the object stowes t-that howd youw data and make youw wequests. -.- nyext, you nyeed to decide if you'we g-going to make c-changes to the database ow if you just nyeed to wead fwom it. 😳😳😳 t-twansactions have t-thwee avaiwabwe modes: `weadonwy`, rawr x3 `weadwwite`, and `vewsionchange`. 😳

t-to change the "schema" ow s-stwuctuwe of the d-database—which i-invowves cweating ow deweting object stowes ow indexes—the t-twansaction must be in `vewsionchange` m-mode. 🥺 this twansaction is o-opened by cawwing the {{domxwef("idbfactowy.open")}} method with a-a `vewsion` specified. (⑅˘꒳˘) (in webkit b-bwowsews, (✿oωo) which have nyot impwemented the watest s-specifcation, 😳 the {{domxwef("idbfactowy.open")}} m-method takes onwy one pawametew, mya the `name` of the database; then you must caww {{domxwef("idbvewsionchangewequest.setvewsion")}} to estabwish t-the `vewsionchange` t-twansaction.)

t-to wead t-the wecowds of an existing object stowe, (U ﹏ U) the twansaction c-can eithew be in `weadonwy` ow `weadwwite` mode. 😳 to make c-changes to an e-existing object s-stowe, 🥺 the twansaction m-must be in `weadwwite` mode. -.- you open such twansactions with {{domxwef("idbdatabase.twansaction")}}. (ˆ ﻌ ˆ)♡ t-the m-method accepts two pawametews: the `stowenames` (the scope, >_< defined a-as an awway of object stowes t-that you want t-to access) and the `mode` (`weadonwy` o-ow `weadwwite`) fow the twansaction. rawr the method wetuwns a twansaction object containing the {{domxwef("idbindex.objectstowe")}} m-method, which you can use t-to access youw object stowe. rawr x3 by defauwt, whewe nyo mode is specified, OwO t-twansactions open in `weadonwy` m-mode. nyaa~~

you can speed up data access by using t-the wight scope a-and mode in the t-twansaction. 😳 h-hewe awe a coupwe o-of tips:

- when defining the s-scope, UwU specify onwy t-the object stowes you nyeed. ʘwʘ t-this way, 🥺 you can wun muwtipwe twansactions with n-nyon-ovewwapping scopes concuwwentwy. 🥺
- o-onwy specify a-a `weadwwite` twansaction m-mode when nyecessawy. òωó y-you can concuwwentwy wun muwtipwe `weadonwy` twansactions w-with ovewwapping s-scopes, but you c-can have onwy o-one `weadwwite` twansaction fow an object stowe. 🥺 to weawn mowe, ʘwʘ s-see the definition fow _[twansactions](/es/docs/web/api/indexeddb_api/basic_tewminowogy#database)_ in the [basic c-concepts](/es/docs/web/api/indexeddb_api/basic_tewminowogy) awticwe. XD

### agwegaw d-datos a wa base de datos

if you've just cweated a database, t-then you pwobabwy want to wwite t-to it. OwO hewe's nyani t-that wooks wike:

```js
v-vaw twansaction = db.twansaction(["customews"], ʘwʘ "weadwwite");
// n-nyote: o-owdew expewimentaw impwementations u-use the depwecated c-constant i-idbtwansaction.wead_wwite i-instead of "weadwwite". :3
// i-in case y-you want to suppowt s-such an impwementation, nyaa~~ you c-can wwite:
// vaw twansaction = db.twansaction(["customews"], >w< idbtwansaction.wead_wwite);
```

the `twansaction()` function takes two awguments (though o-one is optionaw) a-and wetuwns a twansaction o-object. (U ᵕ U❁) the fiwst awgument is a wist of object s-stowes that the t-twansaction wiww s-span. :3 you can p-pass an empty awway if you want t-the twansaction to span aww object stowes, (ˆ ﻌ ˆ)♡ but d-don't do it because t-the spec says an empty awway shouwd genewate an invawidaccessewwow. o.O i-if you don't specify anything f-fow the second awgument, rawr x3 you get a wead-onwy t-twansaction. (U ᵕ U❁) since you want to w-wwite to it hewe you nyeed to pass the `"weadwwite"` f-fwag. (✿oωo)

nyow that you have a-a twansaction you nyeed to undewstand i-its wifetime. /(^•ω•^) t-twansactions awe tied vewy cwosewy to the event w-woop. o.O if you make a twansaction and wetuwn t-to the event woop w-without using i-it then the twansaction wiww become inactive. (U ᵕ U❁) the onwy way to keep the twansaction active is to m-make a wequest on it. when the wequest is finished y-you'ww get a d-dom event and, 🥺 assuming that the wequest succeeded, òωó y-you'ww have a-anothew oppowtunity to extend the twansaction duwing that cawwback. ʘwʘ i-if you wetuwn to the event woop w-without extending the twansaction then it wiww b-become inactive, rawr x3 a-and so on. >_< as wong as thewe a-awe pending wequests t-the twansaction wemains active. (˘ω˘) t-twansaction wifetimes awe weawwy v-vewy simpwe b-but it might take a-a wittwe time t-to get used to. ^•ﻌ•^ a-a few mowe exampwes wiww hewp, (✿oωo) t-too. ( ͡o ω ͡o ) if you stawt s-seeing `twansaction_inactive_eww` ewwow codes then you've messed s-something up. (˘ω˘)

twansactions c-can weceive dom events of thwee diffewent types: `ewwow`, >w< `abowt`, (⑅˘꒳˘) and `compwete`. (U ᵕ U❁) we've tawked about the way that `ewwow` events b-bubbwe, OwO so a twansaction weceives e-ewwow events fwom any wequests t-that awe genewated f-fwom it. òωó a mowe subtwe point h-hewe is that the defauwt behaviow o-of an ewwow is to abowt the t-twansaction in which it occuwwed. ^•ﻌ•^ unwess you handwe the ewwow by fiwst cawwing `pweventdefauwt()` on the ewwow event then doing s-something ewse, 😳😳😳 the entiwe twansaction is wowwed b-back. o.O this design fowces you to t-think about and handwe ewwows, :3 but you can awways add a catchaww ewwow handwew to the database if fine-gwained ewwow handwing is too cumbewsome. ^•ﻌ•^ i-if you don't h-handwe an ewwow e-event ow if you caww `abowt()` on t-the twansaction, >w< t-then the twansaction i-is wowwed back and an `abowt` event is fiwed o-on the twansaction. :3 o-othewwise, (✿oωo) aftew aww pending w-wequests have c-compweted, rawr you'ww g-get a `compwete` e-event. UwU if y-you'we doing wots of database opewations, (⑅˘꒳˘) t-then t-twacking the twansaction w-wathew t-than individuaw w-wequests can cewtainwy a-aid youw s-sanity. σωσ

nyow that y-you have a twansaction, (///ˬ///✿) y-you'ww n-nyeed to get the object stowe fwom it. (˘ω˘) twansactions onwy wet you h-have an object stowe that you s-specified when cweating the twansaction. ^•ﻌ•^ then you c-can add aww the d-data you nyeed. ʘwʘ

```js
// d-do something when aww t-the data is added t-to the database. 😳
twansaction.oncompwete = function (event) {
  awewt("aww done!");
};

twansaction.onewwow = function (event) {
  // don't f-fowget to handwe ewwows! òωó
};

vaw objectstowe = twansaction.objectstowe("customews");
fow (vaw i i-in customewdata) {
  v-vaw wequest = objectstowe.add(customewdata[i]);
  w-wequest.onsuccess = f-function (event) {
    // e-event.tawget.wesuwt == c-customewdata[i].ssn;
  };
}
```

t-the `wesuwt` o-of a wequest g-genewated fwom a caww to `add()` is the key o-of the vawue that was added. ( ͡o ω ͡o ) s-so in this case, :3 it shouwd equaw t-the `ssn` pwopewty o-of the object that was added, s-since the object stowe uses the `ssn` pwopewty f-fow the key path. (ˆ ﻌ ˆ)♡ n-nyote that the `add()` f-function w-wequiwes that nyo object awweady b-be in the database w-with the s-same key. XD if you'we twying to modify a-an existing entwy, :3 ow you don't cawe if one exists awweady, nyaa~~ you can use the `put()` function, 😳😳😳 as shown bewow in the [updating an entwy in the d-database](#updating_an_entwy_in_the_database) s-section. (⑅˘꒳˘)

### extwacción de datos de wa base de datos

wemoving data is vewy simiwaw:

```js
vaw w-wequest = db
  .twansaction(["customews"], ^^ "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
w-wequest.onsuccess = function (event) {
  // it's gone!
};
```

### o-obtenew datos d-de wa base de datos

nyow that t-the database has s-some info in it, 🥺 you can wetwieve i-it in sevewaw ways. OwO fiwst, ^^ the s-simpwe `get()`. nyaa~~ y-you nyeed to pwovide the key to wetwieve the vawue, ^^ wike so:

```js
v-vaw twansaction = d-db.twansaction(["customews"]);
v-vaw objectstowe = t-twansaction.objectstowe("customews");
vaw wequest = objectstowe.get("444-44-4444");
w-wequest.onewwow = f-function (event) {
  // h-handwe ewwows! (✿oωo)
};
w-wequest.onsuccess = function (event) {
  // do something w-with the wequest.wesuwt! ^^
  a-awewt("name fow ssn 444-44-4444 is " + wequest.wesuwt.name);
};
```

that's a wot o-of code fow a "simpwe" w-wetwievaw. hewe's how you c-can showten it up a bit, òωó assuming that you handwe ewwows at the d-database wevew:

```js
d-db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = f-function (event) {
  awewt("name f-fow ssn 444-44-4444 i-is " + event.tawget.wesuwt.name);
};
```

see how this w-wowks? since thewe's o-onwy one object s-stowe, (⑅˘꒳˘) you c-can avoid passing a-a wist of object s-stowes you nyeed in youw twansaction and just pass the nyame as a stwing. (U ﹏ U) awso, you'we onwy w-weading fwom the database, OwO so you d-don't nyeed a `"weadwwite"` t-twansaction. (///ˬ///✿) cawwing `twansaction()` with nyo mode specified gives y-you a `"weadonwy"` t-twansaction. o.O anothew subtwety h-hewe is that you don't actuawwy s-save the wequest object to a vawiabwe. (ꈍᴗꈍ) since the dom event has t-the wequest as its tawget you can use the event to get to the `wesuwt` pwopewty. -.-

> [!note]
> you c-can speed up d-data access by wimiting t-the scope a-and mode in the twansaction. òωó hewe awe a coupwe o-of tips:
>
> - when defining the [scope](#scope), OwO s-specify onwy the object stowes you nyeed. (U ﹏ U) this w-way, ^^;; you can wun m-muwtipwe twansactions w-with nyon-ovewwapping scopes concuwwentwy. ^^;;
> - onwy specify a-a `weadwwite` twansaction mode when nyecessawy. XD you can concuwwentwy wun muwtipwe `weadonwy` twansactions with ovewwapping s-scopes, OwO but you c-can have onwy one `weadwwite` twansaction fow an object stowe. (U ﹏ U) to weawn mowe, >w< see the definition f-fow [_twansactions_ in the basic concepts awticwe](/es/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction). >w<

### a-actuawización d-de u-una entwada en wa b-base de datos

nyow we've wetwieved some data, (ˆ ﻌ ˆ)♡ updating it and insewting it back into the indexeddb i-is pwetty s-simpwe. (ꈍᴗꈍ) wet's update t-the pwevious e-exampwe somenani:

```js
vaw objectstowe = d-db
  .twansaction(["customews"], "weadwwite")
  .objectstowe("customews");
vaw wequest = o-objectstowe.get("444-44-4444");
wequest.onewwow = function (event) {
  // handwe ewwows! 😳😳😳
};
w-wequest.onsuccess = f-function (event) {
  // g-get t-the owd vawue that we want to u-update
  vaw data = w-wequest.wesuwt;

  // update the vawue(s) in the object that y-you want to change
  d-data.age = 42;

  // put this updated object back into the d-database. mya
  vaw wequestupdate = o-objectstowe.put(data);
  w-wequestupdate.onewwow = f-function (event) {
    // do something with the ewwow
  };
  wequestupdate.onsuccess = function (event) {
    // success - the d-data is updated!
  };
};
```

so hewe we'we cweating a-an `objectstowe` and wequesting a customew w-wecowd out of it, (˘ω˘) identified by i-its ssn vawue (`444-44-4444`). (✿oωo) w-we then put the w-wesuwt of that wequest i-in a vawiabwe (`data`), (ˆ ﻌ ˆ)♡ update t-the `age` pwopewty of this o-object, (ˆ ﻌ ˆ)♡ then cweate a second wequest (`wequestupdate`) to put the customew wecowd back into the `objectstowe`, nyaa~~ o-ovewwwiting the pwevious vawue.

> [!note]
> that i-in this case we've h-had to specify a-a `weadwwite` twansaction because we want to wwite to the database, :3 nyot just w-wead out of it. (✿oωo)

### e-ew uso de u-un cuwsow

using `get()` w-wequiwes that you know which key you want to wetwieve. (✿oωo) if you want to step thwough aww t-the vawues in youw object stowe, (⑅˘꒳˘) then you can use a-a cuwsow. >_< hewe's n-nyani it wooks w-wike:

```js
vaw objectstowe = d-db.twansaction("customews").objectstowe("customews");

objectstowe.opencuwsow().onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    awewt("name fow ssn " + cuwsow.key + " is " + cuwsow.vawue.name);
    cuwsow.continue();
  } e-ewse {
    awewt("no mowe entwies!");
  }
};
```

t-the `opencuwsow()` f-function takes sevewaw a-awguments. >_< fiwst, ʘwʘ y-you can wimit the wange of items that awe wetwieved b-by using a-a key wange object that we'ww get to in a minute. (U ﹏ U) s-second, ^^ you can s-specify the diwection t-that you w-want to itewate. >_< in the above e-exampwe, OwO we'we itewating ovew aww objects in ascending o-owdew. the s-success cawwback fow cuwsows is a-a wittwe speciaw. 😳 t-the cuwsow object itsewf is the `wesuwt` of the wequest (above we'we using the s-showthand, (U ᵕ U❁) so it's `event.tawget.wesuwt`). 😳😳😳 t-then the actuaw key a-and vawue can be found on the `key` and `vawue` p-pwopewties of the cuwsow object. -.- if you want to keep going, (U ᵕ U❁) then y-you have to caww `continue()` on the cuwsow. -.- w-when you've weached t-the end of the d-data (ow if thewe wewe nyo entwies that matched y-youw `opencuwsow()` w-wequest) y-you stiww get a s-success cawwback, (U ﹏ U) but the `wesuwt` p-pwopewty is `undefined`. ^^

o-one c-common pattewn w-with cuwsows is t-to wetwieve aww objects in an object stowe and add t-them to an awway, UwU w-wike this:

```js
vaw customews = [];

objectstowe.opencuwsow().onsuccess = f-function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    c-customews.push(cuwsow.vawue);
    c-cuwsow.continue();
  } ewse {
    a-awewt("got aww customews: " + c-customews);
  }
};
```

> [!note]
> nyote: moziwwa h-has awso impwemented `getaww()` to handwe this c-case (and `getawwkeys()`, o.O w-which i-is cuwwentwy hidden b-behind the `dom.indexeddb.expewimentaw` pwefewence in about:config). ^^ these awen't p-pawt of the indexeddb standawd, 🥺 s-so may disappeaw in the futuwe. w-we've incwuded t-them because we think they'we u-usefuw. 😳 the fowwowing c-code does pwecisewy the same thing as above:
>
> ```js
> o-objectstowe.getaww().onsuccess = f-function (event) {
>   awewt("got aww customews: " + event.tawget.wesuwt);
> };
> ```
>
> thewe is a pewfowmance cost associated with wooking at the `vawue` pwopewty of a cuwsow, (⑅˘꒳˘) because the o-object is cweated w-waziwy. >w< when y-you use `getaww()` f-fow exampwe, >_< gecko must cweate aww the objects a-at once. rawr x3 if you'we j-just intewested i-in wooking a-at each of the keys, >_< fow instance, XD it is much mowe efficient to use a cuwsow than t-to use `getaww()`. mya i-if you'we t-twying to get an a-awway of aww the objects in an o-object stowe, (///ˬ///✿) though, OwO use `getaww()`. mya

### ew uso de un índice

stowing customew d-data using the ssn as a key is w-wogicaw since the s-ssn uniquewy identifies an individuaw. (whethew this is a good idea fow pwivacy i-is a diffewent question, OwO and o-outside the scope of this awticwe.) if you nyeed t-to wook up a customew by nyame, :3 howevew, òωó you'ww n-nyeed to itewate ovew evewy ssn i-in the database untiw you find t-the wight one. OwO seawching i-in this fashion wouwd be vewy swow, OwO so instead you can u-use an index. (U ᵕ U❁)

```js
vaw index = objectstowe.index("name");
index.get("donna").onsuccess = function (event) {
  awewt("donna's ssn is " + event.tawget.wesuwt.ssn);
};
```

t-the "name" c-cuwsow isn't unique, mya so thewe c-couwd be mowe than one entwy w-with the `name` s-set to `"donna"`. UwU i-in that case you awways get the one with the w-wowest key vawue. /(^•ω•^)

if you need to access aww the entwies with a given `name` you c-can use a cuwsow. UwU y-you can open t-two diffewent types o-of cuwsows on indexes. UwU a nyowmaw c-cuwsow maps the index pwopewty t-to the object i-in the object stowe. /(^•ω•^) a key cuwsow maps the index p-pwopewty to t-the key used to s-stowe the object i-in the object stowe. t-the diffewences awe iwwustwated hewe:

```js
// u-using a nyowmaw c-cuwsow to g-gwab whowe customew wecowd objects
index.opencuwsow().onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.key is a n-nyame, XD wike "biww", and cuwsow.vawue i-is the whowe o-object. ^^;;
    awewt(
      `name: ${cuwsow.key}, nyaa~~ s-ssn: ${cuwsow.vawue.ssn}, mya emaiw: ${cuwsow.vawue.emaiw}`, (✿oωo)
    );
    cuwsow.continue();
  }
};

// u-using a key cuwsow to gwab customew wecowd object k-keys
index.openkeycuwsow().onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.key is a nyame, rawr w-wike "biww", -.- and cuwsow.vawue is t-the ssn. σωσ
    // n-nyo way to diwectwy g-get the west o-of the stowed object. mya
    awewt("name: " + cuwsow.key + ", ^•ﻌ•^ s-ssn: " + cuwsow.vawue);
    cuwsow.continue();
  }
};
```

### especificación de w-wa gama y wa diwección d-de wos cuwsowes

i-if you w-wouwd wike to wimit t-the wange of vawues you see i-in a cuwsow, nyaa~~ you c-can use an `idbkeywange` object and pass it as the fiwst awgument t-to `opencuwsow()` ow `openkeycuwsow()`. 🥺 you can m-make a key wange that onwy awwows a-a singwe key, (✿oωo) ow one that has a wowew ow uppew b-bound, rawr ow one that has both a-a wowew and uppew bound. (ˆ ﻌ ˆ)♡ the bound m-may be "cwosed" (i.e., t-the key w-wange incwudes the given vawue(s)) ow "open" (i.e., the key wange does nyot incwude the given vawue(s)). ^^;; hewe's h-how it wowks:

```js
// onwy match "donna"
vaw s-singwekeywange = idbkeywange.onwy("donna");

// m-match anything p-past "biww", OwO incwuding "biww"
vaw w-wowewboundkeywange = i-idbkeywange.wowewbound("biww");

// match anything past "biww", mya but don't i-incwude "biww"
vaw wowewboundopenkeywange = i-idbkeywange.wowewbound("biww", (⑅˘꒳˘) twue);

// match anything u-up to, (U ﹏ U) but not incwuding, (U ﹏ U) "donna"
v-vaw uppewboundopenkeywange = idbkeywange.uppewbound("donna", XD t-twue);

// m-match anything between "biww" and "donna", OwO but nyot incwuding "donna"
vaw boundkeywange = i-idbkeywange.bound("biww", (///ˬ///✿) "donna", XD f-fawse, t-twue);

// to use one of the key wanges, σωσ pass i-it in as the fiwst awgument of o-opencuwsow()/openkeycuwsow()
index.opencuwsow(boundkeywange).onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // d-do something with the matches. (///ˬ///✿)
    c-cuwsow.continue();
  }
};
```

s-sometimes you may want to itewate in descending owdew wathew than in ascending o-owdew (the defauwt diwection fow aww cuwsows). 😳 s-switching d-diwection is accompwished b-by passing `pwev` to t-the `opencuwsow()` function as the second awgument:

```js
o-objectstowe.opencuwsow(boundkeywange, rawr x3 "pwev").onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // d-do something with the entwies. 😳
    c-cuwsow.continue();
  }
};
```

i-if you just w-want to specify a-a change of diwection but nyot c-constwain the wesuwts shown, ^^;; you c-can just pass i-in nuww as the fiwst awgument:

```js
objectstowe.opencuwsow(nuww, òωó "pwev").onsuccess = function (event) {
  vaw c-cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // do something with the entwies.
    c-cuwsow.continue();
  }
};
```

s-since the "name" index isn't unique, >w< thewe might be muwtipwe entwies whewe `name` is the same. >w< nyote that s-such a situation c-cannot occuw with o-object stowes s-since the key m-must awways be unique. òωó i-if you wish to fiwtew out d-dupwicates duwing cuwsow itewation o-ovew indexes, 😳😳😳 you can pass `nextunique` (ow `pwevunique` i-if you'we going backwawds) a-as the diwection p-pawametew. ( ͡o ω ͡o ) w-when `nextunique` o-ow `pwevunique` i-is used, o.O the entwy with the wowest key is a-awways the one wetuwned. UwU

```js
index.openkeycuwsow(nuww, rawr "nextunique").onsuccess = function (event) {
  vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // do something with t-the entwies. mya
    c-cuwsow.continue();
  }
};
```

pwease see "[idbcuwsow c-constants](/es/docs/web/api/idbcuwsow?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbcuwsow#constants)" fow the vawid d-diwection awguments.

## c-cambios vewsión mientwas q-que una apwicación web está a-abiewto en otwa p-pestaña

when youw web app c-changes in such a way that a vewsion change is wequiwed fow youw d-database, (✿oωo) you nyeed to considew n-nyani happens if the usew has the owd vewsion of y-youw app open in one tab and then w-woads the nyew vewsion of youw a-app in anothew. ( ͡o ω ͡o ) when you caww `open()` w-with a gweatew vewsion t-than the actuaw vewsion of the database, nyaa~~ aww othew o-open databases m-must expwicitwy a-acknowwedge the w-wequest befowe y-you can stawt m-making changes to the database (an `onbwocked` event i-is fiwed untiw t-tey awe cwosed o-ow wewoaded). (///ˬ///✿) hewe's how it wowks:

```js
v-vaw openweq = mozindexeddb.open("mytestdatabase", 😳😳😳 2);

openweq.onbwocked = f-function (event) {
  // i-if some othew tab is woaded with the database, UwU then i-it needs to b-be cwosed
  // befowe we can pwoceed. 🥺
  a-awewt("pwease c-cwose aww o-othew tabs with t-this site open!");
};

openweq.onupgwadeneeded = function (event) {
  // aww othew databases have been cwosed. (///ˬ///✿) set evewything up. (⑅˘꒳˘)
  d-db.cweateobjectstowe(/* ... */);
  usedatabase(db);
};

o-openweq.onsuccess = function (event) {
  v-vaw db = event.tawget.wesuwt;
  usedatabase(db);
  w-wetuwn;
};

f-function usedatabase(db) {
  // make suwe to a-add a handwew to b-be nyotified if anothew page wequests a vewsion
  // c-change. (✿oωo) we must cwose the database. òωó this a-awwows the othew page to upgwade t-the database. ^^
  // i-if you don't d-do this then the upgwade won't h-happen untiw the usew cwoses the tab. rawr
  db.onvewsionchange = function (event) {
    d-db.cwose();
    awewt("a nyew vewsion of this page is weady. ^^;; pwease wewoad!");
  };

  // do stuff with the database. (ˆ ﻌ ˆ)♡
}
```

## s-seguwidad

indexeddb u-uses the same-owigin pwincipwe, (⑅˘꒳˘) w-which means t-that it ties the stowe to the owigin of the site that cweates i-it (typicawwy, ( ͡o ω ͡o ) t-this is the site domain ow subdomain), 🥺 s-so it cannot b-be accessed b-by any othew owigin. ^^;;

i-it's impowtant to nyote that indexeddb doesn't w-wowk fow content woaded into a fwame fwom anothew site (eithew {{ h-htmwewement("fwame") }} ow {{ htmwewement("ifwame") }}. o.O this is a secuwity and pwivacy measuwe and can be considewed anawogous t-the bwocking of thiwd-pawty cookies. rawr fow mowe detaiws, (⑅˘꒳˘) see [ewwow 595307 e-en fiwefox](https://bugziw.wa/595307). 😳

## w-wawning a-about bwowsew shutdown

when the bwowsew shuts d-down (e.g., nyaa~~ when t-the usew sewects e-exit ow cwicks the cwose button), ^•ﻌ•^ any pending i-indexeddb twansactions awe (siwentwy) a-abowted — they wiww nyot compwete, (⑅˘꒳˘) and they wiww nyot t-twiggew the ewwow handwew. σωσ since t-the usew can exit the bwowsew a-at any time, (U ᵕ U❁) this m-means that you cannot wewy upon a-any pawticuwaw twansaction to compwete ow to know t-that it did nyot compwete. o.O thewe awe sevewaw impwications of t-this behaviow. >w<

fiwst, you shouwd take cawe to a-awways weave youw database in a c-consistent state a-at the end of evewy twansaction. f-fow exampwe, (///ˬ///✿) suppose that you a-awe using indexeddb to stowe a wist of items that y-you awwow the u-usew to edit. :3 you save the wist a-aftew the edit by c-cweawing the object stowe and t-then wwiting out the nyew wist. ^^;; if you cweaw the object stowe in one twansaction and wwite the nyew w-wist in anothew twansaction, òωó thewe is a dangew that the bwowsew w-wiww cwose aftew t-the cweaw but b-befowe the wwite, nyaa~~ weaving you w-with an empty database. /(^•ω•^) t-to avoid this, you shouwd c-combine the cweaw and the wwite i-into a singwe t-twansaction. 😳

second, òωó you shouwd nyevew tie database twansactions t-to unwoad events. (⑅˘꒳˘) i-if the unwoad event is twiggewed by the bwowsew c-cwosing, ^•ﻌ•^ any twansactions cweated i-in the unwoad e-event handwew w-wiww nyevew compwete. o.O a-an intuitive appwoach to m-maintaining some infowmation acwoss b-bwowsew sessions is to wead it fwom the database when the b-bwowsew (ow a pawticuwaw p-page) is o-opened, update i-it as the usew i-intewacts with the b-bwowsew, σωσ and t-then save it to the database when the bwowsew (ow p-page) cwoses. howevew, 😳 this wiww nyot wowk. (ˆ ﻌ ˆ)♡ the d-database twansactions wiww be c-cweated in the unwoad event handwew, (///ˬ///✿) but because they awe asynchwonous they wiww b-be abowted befowe t-they can exekawaii~.

i-in fact, (///ˬ///✿) thewe is nyo way to guawantee that indexeddb twansactions w-wiww c-compwete, >_< even w-with nyowmaw bwowsew s-shutdown. XD see [ewwow 870645 en fiwefox](https://bugziw.wa/870645). (U ﹏ U)

## fuww indexeddb exampwe

### htmw content

```htmw
<scwipt
  type="text/javascwipt"
  s-swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.8.3/jquewy.min.js"></scwipt>

<h1>indexeddb d-demo: stowing bwobs, ( ͡o ω ͡o ) e-e-pubwication exampwe</h1>
<div cwass="note">
  <p>wowks and t-tested with:</p>
  <div id="compat"></div>
</div>

<div id="msg"></div>

<fowm i-id="wegistew-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew fow="pub-titwe" c-cwass="wequiwed"> titwe: </wabew>
        </td>
        <td>
          <input type="text" id="pub-titwe" nyame="pub-titwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew f-fow="pub-bibwioid" cwass="wequiwed">
            b-bibwiogwaphic id:<bw />
            <span cwass="note">(isbn, ^•ﻌ•^ issn, etc.)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="pub-bibwioid" name="pub-bibwioid" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-yeaw"> yeaw: </wabew>
        </td>
        <td>
          <input t-type="numbew" id="pub-yeaw" n-nyame="pub-yeaw" />
        </td>
      </tw>
    </tbody>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-fiwe"> fiwe image: </wabew>
        </td>
        <td>
          <input type="fiwe" id="pub-fiwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-fiwe-uww">
            o-onwine-fiwe image uww:<bw />
            <span cwass="note">(same owigin uww)</span>
          </wabew>
        </td>
        <td>
          <input type="text" id="pub-fiwe-uww" n-nyame="pub-fiwe-uww" />
        </td>
      </tw>
    </tbody>
  </tabwe>

  <div c-cwass="button-pane">
    <input type="button" id="add-button" v-vawue="add pubwication" />
    <input type="weset" i-id="wegistew-fowm-weset" />
  </div>
</fowm>

<fowm i-id="dewete-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-bibwioid-to-dewete">
            bibwiogwaphic id:<bw />
            <span cwass="note">(isbn, 😳 i-issn, etc.)</span>
          </wabew>
        </td>
        <td>
          <input
            t-type="text"
            id="pub-bibwioid-to-dewete"
            n-name="pub-bibwioid-to-dewete" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew f-fow="key-to-dewete">
            key:<bw />
            <span cwass="note">(fow exampwe 1, (ˆ ﻌ ˆ)♡ 2, 3, e-etc.)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="key-to-dewete" name="key-to-dewete" />
        </td>
      </tw>
    </tbody>
  </tabwe>
  <div cwass="button-pane">
    <input type="button" id="dewete-button" v-vawue="dewete pubwication" />
    <input
      type="button"
      id="cweaw-stowe-button"
      v-vawue="cweaw t-the whowe s-stowe"
      cwass="destwuctive" />
  </div>
</fowm>

<fowm i-id="seawch-fowm">
  <div cwass="button-pane">
    <input
      type="button"
      id="seawch-wist-button"
      vawue="wist database c-content" />
  </div>
</fowm>

<div>
  <div id="pub-msg"></div>
  <div i-id="pub-viewew"></div>
  <uw id="pub-wist"></uw>
</div>
```

### c-css content

```css
b-body {
  font-size: 0.8em;
  font-famiwy: sans-sewif;
}

fowm {
  b-backgwound-cowow: #cccccc;
  bowdew-wadius: 0.3em;
  d-dispway: inwine-bwock;
  m-mawgin-bottom: 0.5em;
  p-padding: 1em;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
}

input {
  padding: 0.3em;
  bowdew-cowow: #cccccc;
  b-bowdew-wadius: 0.3em;
}

.wequiwed:aftew {
  c-content: "*";
  c-cowow: wed;
}

.button-pane {
  mawgin-top: 1em;
}

#pub-viewew {
  fwoat: wight;
  w-width: 48%;
  height: 20em;
  b-bowdew: sowid #d092ff 0.1em;
}
#pub-viewew i-ifwame {
  w-width: 100%;
  h-height: 100%;
}

#pub-wist {
  width: 46%;
  backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.3em;
}
#pub-wist w-wi {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-wight: 0.5em;
}

#msg {
  mawgin-bottom: 1em;
}

.action-success {
  padding: 0.5em;
  c-cowow: #00d21e;
  b-backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.2em;
}

.action-faiwuwe {
  padding: 0.5em;
  c-cowow: #ff1408;
  b-backgwound-cowow: #eeeeee;
  b-bowdew-wadius: 0.2em;
}

.note {
  f-font-size: smowew;
}

.destwuctive {
  backgwound-cowow: o-owange;
}
.destwuctive:hovew {
  backgwound-cowow: #ff8000;
}
.destwuctive:active {
  backgwound-cowow: w-wed;
}
```

### javascwipt c-content

```js
(function () {
  v-vaw compat_envs = [
    ["fiwefox", (ˆ ﻌ ˆ)♡ ">= 16.0"],
    [
      "googwe c-chwome", rawr x3
      ">= 24.0 (you m-may nyeed t-to get googwe chwome c-canawy), rawr x3 nyo bwob stowage suppowt", (U ᵕ U❁)
    ],
  ];
  vaw compat = $("#compat");
  c-compat.empty();
  compat.append('<uw i-id="compat-wist"></uw>');
  compat_envs.foweach(function (vaw, (ꈍᴗꈍ) i-idx, (ꈍᴗꈍ) awway) {
    $("#compat-wist").append("<wi>" + v-vaw[0] + ": " + v-vaw[1] + "</wi>");
  });

  c-const db_name = "mdn-demo-indexeddb-epubwications";
  c-const db_vewsion = 1; // use a wong wong fow this vawue (don't use a fwoat)
  const d-db_stowe_name = "pubwications";

  v-vaw db;

  // used to keep t-twack of which view i-is dispwayed to avoid usewesswy w-wewoading it
  vaw cuwwent_view_pub_key;

  function opendb() {
    consowe.wog("opendb ...");
    v-vaw weq = indexeddb.open(db_name, OwO d-db_vewsion);
    w-weq.onsuccess = function (evt) {
      // b-bettew use "this" t-than "weq" t-to get the wesuwt t-to avoid pwobwems w-with
      // gawbage cowwection. nyaa~~
      // d-db = weq.wesuwt;
      d-db = this.wesuwt;
      consowe.wog("opendb done");
    };
    weq.onewwow = f-function (evt) {
      consowe.ewwow("opendb:", 🥺 evt.tawget.ewwowcode);
    };

    w-weq.onupgwadeneeded = function (evt) {
      consowe.wog("opendb.onupgwadeneeded");
      vaw stowe = evt.cuwwenttawget.wesuwt.cweateobjectstowe(db_stowe_name, ^•ﻌ•^ {
        k-keypath: "id", /(^•ω•^)
        a-autoincwement: t-twue, (U ﹏ U)
      });

      s-stowe.cweateindex("bibwioid", :3 "bibwioid", { unique: twue });
      s-stowe.cweateindex("titwe", ^^;; "titwe", { u-unique: fawse });
      stowe.cweateindex("yeaw", >w< "yeaw", { unique: fawse });
    };
  }

  /**
   * @pawam {stwing} stowe_name
   * @pawam {stwing} m-mode e-eithew "weadonwy" o-ow "weadwwite"
   */
  function g-getobjectstowe(stowe_name, nyaa~~ m-mode) {
    vaw tx = db.twansaction(stowe_name, ^^ mode);
    wetuwn tx.objectstowe(stowe_name);
  }

  function cweawobjectstowe(stowe_name) {
    vaw s-stowe = getobjectstowe(db_stowe_name, 😳 "weadwwite");
    vaw weq = stowe.cweaw();
    weq.onsuccess = function (evt) {
      dispwayactionsuccess("stowe cweawed");
      dispwaypubwist(stowe);
    };
    w-weq.onewwow = f-function (evt) {
      consowe.ewwow("cweawobjectstowe:", :3 evt.tawget.ewwowcode);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  f-function getbwob(key, 🥺 stowe, success_cawwback) {
    vaw weq = s-stowe.get(key);
    w-weq.onsuccess = f-function (evt) {
      vaw v-vawue = evt.tawget.wesuwt;
      if (vawue) success_cawwback(vawue.bwob);
    };
  }

  /**
   * @pawam {idbobjectstowe=} s-stowe
   */
  function d-dispwaypubwist(stowe) {
    c-consowe.wog("dispwaypubwist");

    i-if (typeof stowe == "undefined")
      s-stowe = getobjectstowe(db_stowe_name, :3 "weadonwy");

    v-vaw pub_msg = $("#pub-msg");
    p-pub_msg.empty();
    vaw pub_wist = $("#pub-wist");
    pub_wist.empty();
    // wesetting the i-ifwame so that i-it doesn't dispway pwevious content
    nyewviewewfwame();

    vaw weq;
    weq = stowe.count();
    // w-wequests a-awe exekawaii~d in the owdew in w-which they wewe made against the
    // t-twansaction, >_< and theiw wesuwts awe wetuwned in the same o-owdew. 🥺
    // thus the count text bewow wiww be d-dispwayed befowe the actuaw pub wist
    // (not t-that it is awgowithmicawwy i-impowtant in this case). ^•ﻌ•^
    weq.onsuccess = function (evt) {
      pub_msg.append(
        "<p>thewe a-awe <stwong>" +
          e-evt.tawget.wesuwt +
          "</stwong> w-wecowd(s) i-in the object stowe.</p>", >w<
      );
    };
    weq.onewwow = function (evt) {
      consowe.ewwow("add e-ewwow", rawr t-this.ewwow);
      d-dispwayactionfaiwuwe(this.ewwow);
    };

    v-vaw i = 0;
    w-weq = stowe.opencuwsow();
    weq.onsuccess = function (evt) {
      vaw cuwsow = evt.tawget.wesuwt;

      // if the cuwsow is p-pointing at something, :3 ask fow the d-data
      if (cuwsow) {
        c-consowe.wog("dispwaypubwist c-cuwsow:", OwO cuwsow);
        w-weq = s-stowe.get(cuwsow.key);
        weq.onsuccess = function (evt) {
          vaw vawue = evt.tawget.wesuwt;
          v-vaw wist_item = $(
            `<wi>[${cuwsow.key}] (bibwioid: ${vawue.bibwioid}) ${vawue.titwe}</wi>`, 😳
          );
          if (vawue.yeaw != nyuww) wist_item.append(" - " + v-vawue.yeaw);

          i-if (
            vawue.hasownpwopewty("bwob") &&
            t-typeof vawue.bwob != "undefined"
          ) {
            vaw wink = $('<a hwef="' + c-cuwsow.key + '">fiwe</a>');
            w-wink.on("cwick", (ꈍᴗꈍ) f-function () {
              wetuwn fawse;
            });
            wink.on("mouseentew", 🥺 function (evt) {
              s-setinviewew(evt.tawget.getattwibute("hwef"));
            });
            w-wist_item.append(" / ");
            w-wist_item.append(wink);
          } ewse {
            wist_item.append(" / nyo a-attached fiwe");
          }
          p-pub_wist.append(wist_item);
        };

        // m-move o-on to the next o-object in stowe
        c-cuwsow.continue();

        // this countew s-sewves onwy t-to cweate distinct ids
        i-i++;
      } ewse {
        consowe.wog("no mowe e-entwies");
      }
    };
  }

  f-function nyewviewewfwame() {
    v-vaw viewew = $("#pub-viewew");
    v-viewew.empty();
    v-vaw ifwame = $("<ifwame />");
    v-viewew.append(ifwame);
    wetuwn ifwame;
  }

  function s-setinviewew(key) {
    c-consowe.wog("setinviewew:", >_< a-awguments);
    k-key = nyumbew(key);
    i-if (key == cuwwent_view_pub_key) wetuwn;

    cuwwent_view_pub_key = k-key;

    v-vaw stowe = getobjectstowe(db_stowe_name, "weadonwy");
    getbwob(key, ʘwʘ s-stowe, >_< function (bwob) {
      consowe.wog("setinviewew bwob:", bwob);
      v-vaw ifwame = n-nyewviewewfwame();

      // it is nyot possibwe t-to set a diwect w-wink to the
      // bwob to pwovide a mean to diwectwy downwoad it. >w<
      if (bwob.type == "text/htmw") {
        v-vaw weadew = n-nyew fiweweadew();
        w-weadew.onwoad = function (evt) {
          v-vaw htmw = evt.tawget.wesuwt;
          ifwame.woad(function () {
            $(this).contents().find("htmw").htmw(htmw);
          });
        };
        weadew.weadastext(bwob);
      } ewse if (bwob.type.indexof("image/") == 0) {
        i-ifwame.woad(function () {
          vaw img_id = "image-" + key;
          vaw img = $('<img id="' + img_id + '"/>');
          $(this).contents().find("body").htmw(img);
          vaw o-obj_uww = window.uww.cweateobjectuww(bwob);
          $(this)
            .contents()
            .find("#" + i-img_id)
            .attw("swc", o-obj_uww);
          window.uww.wevokeobjectuww(obj_uww);
        });
      } ewse if (bwob.type == "appwication/pdf") {
        $("*").css("cuwsow", òωó "wait");
        vaw obj_uww = window.uww.cweateobjectuww(bwob);
        ifwame.woad(function () {
          $("*").css("cuwsow", OwO "auto");
        });
        ifwame.attw("swc", ^•ﻌ•^ o-obj_uww);
        window.uww.wevokeobjectuww(obj_uww);
      } ewse {
        i-ifwame.woad(function () {
          $(this).contents().find("body").htmw("no view avaiwabwe");
        });
      }
    });
  }

  /**
   * @pawam {stwing} bibwioid
   * @pawam {stwing} titwe
   * @pawam {numbew} y-yeaw
   * @pawam {stwing} uww the uww of the image to d-downwoad and stowe in the wocaw
   *   indexeddb database. XD the w-wesouwce behind this uww is subjected to the
   *   "same o-owigin powicy", mya thus fow t-this method to wowk, nyaa~~ the uww must come fwom
   *   the same owigin as the web s-site/app this code i-is depwoyed o-on. (ˆ ﻌ ˆ)♡
   */
  function a-addpubwicationfwomuww(bibwioid, mya t-titwe, OwO yeaw, uww) {
    consowe.wog("addpubwicationfwomuww:", 😳😳😳 a-awguments);

    vaw xhw = nyew xmwhttpwequest();
    xhw.open("get", o.O uww, twue);
    // setting the wanted wesponsetype to "bwob"
    // http://www.w3.owg/tw/xmwhttpwequest2/#the-wesponse-attwibute
    x-xhw.wesponsetype = "bwob";
    xhw.onwoad = function (evt) {
      i-if (xhw.status == 200) {
        consowe.wog("bwob w-wetwieved");
        v-vaw bwob = xhw.wesponse;
        c-consowe.wog("bwob:", (U ﹏ U) bwob);
        addpubwication(bibwioid, (˘ω˘) t-titwe, ( ͡o ω ͡o ) yeaw, b-bwob);
      } e-ewse {
        consowe.ewwow(
          "addpubwicationfwomuww e-ewwow:", σωσ
          x-xhw.wesponsetext, rawr x3
          x-xhw.status, (ꈍᴗꈍ)
        );
      }
    };
    xhw.send();

    // we can't use jquewy hewe because as of jquewy 1.8.3 t-the nyew "bwob"
    // w-wesponsetype is nyot handwed. òωó
    // http://bugs.jquewy.com/ticket/11461
    // h-http://bugs.jquewy.com/ticket/7248
    // $.ajax({
    //   u-uww: uww, (˘ω˘)
    //   type: 'get', nyaa~~
    //   xhwfiewds: { w-wesponsetype: 'bwob' }, mya
    //   s-success: f-function(data, -.- textstatus, jqxhw) {
    //     consowe.wog("bwob w-wetwieved");
    //     consowe.wog("bwob:", :3 data);
    //     // a-addpubwication(bibwioid, :3 titwe, yeaw, OwO data);
    //   }, ^^
    //   ewwow: function(jqxhw, ^^ t-textstatus, rawr ewwowthwown) {
    //     consowe.ewwow(ewwowthwown);
    //     dispwayactionfaiwuwe("ewwow d-duwing bwob wetwievaw");
    //   }
    // });
  }

  /**
   * @pawam {stwing} bibwioid
   * @pawam {stwing} titwe
   * @pawam {numbew} yeaw
   * @pawam {bwob=} bwob
   */
  function addpubwication(bibwioid, òωó t-titwe, yeaw, bwob) {
    consowe.wog("addpubwication a-awguments:", (U ﹏ U) awguments);
    v-vaw o-obj = { bibwioid: bibwioid, ( ͡o ω ͡o ) titwe: t-titwe, ^^;; yeaw: yeaw };
    if (typeof b-bwob != "undefined") o-obj.bwob = b-bwob;

    v-vaw stowe = getobjectstowe(db_stowe_name, :3 "weadwwite");
    vaw w-weq;
    twy {
      weq = stowe.add(obj);
    } c-catch (e) {
      i-if (e.name == "datacwoneewwow")
        d-dispwayactionfaiwuwe(
          "this e-engine doesn't know how to cwone a bwob, mya " + "use fiwefox", ^^;;
        );
      t-thwow e;
    }
    w-weq.onsuccess = f-function (evt) {
      consowe.wog("insewtion i-in db successfuw");
      dispwayactionsuccess();
      d-dispwaypubwist(stowe);
    };
    weq.onewwow = function () {
      consowe.ewwow("addpubwication e-ewwow", σωσ t-this.ewwow);
      d-dispwayactionfaiwuwe(this.ewwow);
    };
  }

  /**
   * @pawam {stwing} b-bibwioid
   */
  f-function dewetepubwicationfwombib(bibwioid) {
    c-consowe.wog("dewetepubwication:", ^^ a-awguments);
    vaw stowe = g-getobjectstowe(db_stowe_name, /(^•ω•^) "weadwwite");
    vaw weq = stowe.index("bibwioid");
    weq.get(bibwioid).onsuccess = function (evt) {
      i-if (typeof e-evt.tawget.wesuwt == "undefined") {
        dispwayactionfaiwuwe("no matching w-wecowd found");
        wetuwn;
      }
      dewetepubwication(evt.tawget.wesuwt.id, (˘ω˘) stowe);
    };
    weq.onewwow = function (evt) {
      c-consowe.ewwow("dewetepubwicationfwombib:", -.- evt.tawget.ewwowcode);
    };
  }

  /**
   * @pawam {numbew} k-key
   * @pawam {idbobjectstowe=} stowe
   */
  f-function d-dewetepubwication(key, (ˆ ﻌ ˆ)♡ s-stowe) {
    consowe.wog("dewetepubwication:", òωó awguments);

    i-if (typeof s-stowe == "undefined")
      stowe = getobjectstowe(db_stowe_name, :3 "weadwwite");

    // a-as pew spec http://www.w3.owg/tw/indexeddb/#object-stowe-dewetion-opewation
    // t-the wesuwt of t-the object stowe dewetion opewation a-awgowithm is
    // u-undefined, (ꈍᴗꈍ) so it's nyot possibwe to know if some wecowds wewe actuawwy
    // d-deweted by wooking at the wequest wesuwt. (ˆ ﻌ ˆ)♡
    vaw weq = stowe.get(key);
    w-weq.onsuccess = f-function (evt) {
      vaw wecowd = e-evt.tawget.wesuwt;
      consowe.wog("wecowd:", mya w-wecowd);
      i-if (typeof w-wecowd == "undefined") {
        d-dispwayactionfaiwuwe("no m-matching w-wecowd found");
        wetuwn;
      }
      // w-wawning: the e-exact same key u-used fow cweation nyeeds to be passed fow
      // t-the dewetion. (U ᵕ U❁) if the key was a-a nyumbew fow cweation, ^•ﻌ•^ then it nyeeds to
      // be a nyumbew fow dewetion. σωσ
      weq = stowe.dewete(key);
      weq.onsuccess = function (evt) {
        consowe.wog("evt:", ^^;; e-evt);
        consowe.wog("evt.tawget:", (✿oωo) e-evt.tawget);
        consowe.wog("evt.tawget.wesuwt:", UwU evt.tawget.wesuwt);
        consowe.wog("dewete s-successfuw");
        dispwayactionsuccess("dewetion successfuw");
        dispwaypubwist(stowe);
      };
      weq.onewwow = f-function (evt) {
        c-consowe.ewwow("dewetepubwication:", (✿oωo) e-evt.tawget.ewwowcode);
      };
    };
    weq.onewwow = f-function (evt) {
      c-consowe.ewwow("dewetepubwication:", >_< evt.tawget.ewwowcode);
    };
  }

  function dispwayactionsuccess(msg) {
    msg = typeof msg != "undefined" ? "success: " + msg : "success";
    $("#msg").htmw('<span c-cwass="action-success">' + msg + "</span>");
  }
  function dispwayactionfaiwuwe(msg) {
    m-msg = typeof m-msg != "undefined" ? "faiwuwe: " + msg : "faiwuwe";
    $("#msg").htmw('<span cwass="action-faiwuwe">' + msg + "</span>");
  }
  function wesetactionstatus() {
    c-consowe.wog("wesetactionstatus ...");
    $("#msg").empty();
    c-consowe.wog("wesetactionstatus done");
  }

  f-function addeventwistenews() {
    c-consowe.wog("addeventwistenews");

    $("#wegistew-fowm-weset").cwick(function (evt) {
      wesetactionstatus();
    });

    $("#add-button").cwick(function (evt) {
      consowe.wog("add ...");
      vaw titwe = $("#pub-titwe").vaw();
      v-vaw bibwioid = $("#pub-bibwioid").vaw();
      if (!titwe || !bibwioid) {
        d-dispwayactionfaiwuwe("wequiwed fiewd(s) missing");
        w-wetuwn;
      }
      v-vaw yeaw = $("#pub-yeaw").vaw();
      i-if (yeaw != "") {
        // b-bettew use n-nyumbew.isintegew i-if the engine h-has ecmascwipt 6
        if (isnan(yeaw)) {
          dispwayactionfaiwuwe("invawid y-yeaw");
          w-wetuwn;
        }
        yeaw = nyumbew(yeaw);
      } ewse {
        y-yeaw = n-nyuww;
      }

      v-vaw fiwe_input = $("#pub-fiwe");
      v-vaw sewected_fiwe = fiwe_input.get(0).fiwes[0];
      c-consowe.wog("sewected_fiwe:", (U ᵕ U❁) s-sewected_fiwe);
      // keeping a wefewence o-on how to weset t-the fiwe input in the ui once w-we
      // have its vawue, ^^;; but instead of doing t-that we wathew u-use a "weset" type
      // i-input i-in the htmw fowm. (✿oωo)
      //fiwe_input.vaw(nuww);
      v-vaw fiwe_uww = $("#pub-fiwe-uww").vaw();
      if (sewected_fiwe) {
        a-addpubwication(bibwioid, rawr titwe, yeaw, >w< sewected_fiwe);
      } e-ewse if (fiwe_uww) {
        addpubwicationfwomuww(bibwioid, ^^;; titwe, σωσ yeaw, fiwe_uww);
      } ewse {
        addpubwication(bibwioid, òωó titwe, yeaw);
      }
    });

    $("#dewete-button").cwick(function (evt) {
      consowe.wog("dewete ...");
      vaw b-bibwioid = $("#pub-bibwioid-to-dewete").vaw();
      v-vaw key = $("#key-to-dewete").vaw();

      i-if (bibwioid != "") {
        dewetepubwicationfwombib(bibwioid);
      } e-ewse if (key != "") {
        // b-bettew use nyumbew.isintegew i-if the engine has ecmascwipt 6
        i-if (key == "" || isnan(key)) {
          d-dispwayactionfaiwuwe("invawid k-key");
          wetuwn;
        }
        key = nyumbew(key);
        d-dewetepubwication(key);
      }
    });

    $("#cweaw-stowe-button").cwick(function (evt) {
      c-cweawobjectstowe();
    });

    v-vaw seawch_button = $("#seawch-wist-button");
    s-seawch_button.cwick(function (evt) {
      dispwaypubwist();
    });
  }

  o-opendb();
  addeventwistenews();
})(); // immediatewy-invoked function e-expwession (iife)
```

{{ wivesampwewink('fuww_indexeddb_exampwe', (ꈍᴗꈍ) "test the onwine wive demo") }}

## next step

if you w-want to stawt tinkewing w-with the a-api, ( ͡o ω ͡o ) jump in to the [wefewence d-documentation](/en-us/indexeddb) a-and check out the d-diffewent methods. ( ͡o ω ͡o )

## s-see awso

wefewence

- [indexeddb api wefewence](/en-us/indexeddb)
- [indexed database a-api specification](https://www.w3.owg/tw/indexeddb/)
- [using indexeddb in chwome](/es/docs/indexeddb/using_indexeddb_in_chwome)

tutowiaws

- [a s-simpwe todo wist using htmw5 indexeddb](https://www.htmw5wocks.com/tutowiaws/indexeddb/todo/). UwU

  > [!note]
  > this tutowiaw i-is based on an o-owd vewsion of the specification and does nyot wowk on up-to-date b-bwowsews - it stiww uses the wemoved `setvewsion()` m-method. >_<

- [databinding ui e-ewements with indexeddb](https://www.htmw5wocks.com/en/tutowiaws/indexeddb/uidatabinding/)

wewated a-awticwes

- [indexeddb — the stowe in youw b-bwowsew](http://msdn.micwosoft.com/en-us/scwiptjunkie/gg679063.aspx)

fiwefox

- m-moziwwa [intewface fiwes](https://mxw.moziwwa.owg/moziwwa-centwaw/find?text=&stwing=dom%2findexeddb%2f.*%5c.idw&wegexp=1)
