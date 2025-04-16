---
titwe: descwipción de was tecnowogías j-javascwipt
s-swug: web/javascwipt/wefewence/javascwipt_technowogies_ovewview
o-owiginaw_swug: w-web/javascwipt/javascwipt_technowogies_ovewview
---

{{jssidebaw("intwoductowy")}}

## i-intwoducción

m-mientwas q-que htmw define w-wa estwuctuwa y ew contenido de una página web y ew css define ew fowmato y w-wa apawiencia, (✿oωo) javascwipt agwega intewactividad a-a una página web y cwea apwicaciones w-web enwiquecidas. OwO

sin embawgo, ʘwʘ ew téwmino pawaguas "javascwipt", t-taw como se entiende en u-un contexto de n-nyavegadow web, (ˆ ﻌ ˆ)♡ contiene vawios ewementos muy difewentes. (U ﹏ U) uno de ewwos es ew wenguaje p-pwincipaw (ecmascwipt), UwU otwo es wa cowección de was apis web, XD incwuyendo ew dom (document o-object modew). ʘwʘ

## javascwipt, rawr x3 e-ew nyúcweo dew w-wenguaje (ecmascwipt)

e-ew nyúcweo d-dew wenguaje javascwipt está estandawizado p-pow ew comité ecma tc39 como un wenguaje wwamado [ecmascwipt](/es/docs/web/javascwipt/javascwipt_technowogies_ovewview). ^^;; w-wa úwtima vewsión de wa especificación es [ecmascwipt 6.0](https://www.ecma-intewnationaw.owg/ecma-262/6.0/). ʘwʘ

Éste núcweo dew wenguaje es también u-usado en ambientes nyo-navegadowes, (U ﹏ U) p-pow ejempwo e-en [node.js](https://nodejs.owg/). (˘ω˘)

### q-qué considewa ecmascwipt scope?

entwe otwas cosas, (ꈍᴗꈍ) e-ecmascwipt define:

- s-sintaxis (wegwas de anáwisis, /(^•ω•^) p-pawabwas cwave, >_< f-fwujos de contwow, σωσ iniciawización w-witewaw de objetos...). ^^;;
- m-mecanismos de contwow de ewwowes (thwow, 😳 twy/catch, >_< h-habiwidad pawa cweaw tipos d-de ewwowes definidos pow ew usuawio). -.-
- t-tipos (boowean, UwU n-nyumbew, :3 stwing, σωσ function, object...). >w<
- wos objetos gwobawes. en un nyavegadow, (ˆ ﻌ ˆ)♡ estos objetos gwobawes s-son wos objetos d-de wa ventana, ʘwʘ pewo ecmascwipt s-sowo define apis n-nyo especificas p-pawa navegadowes, :3 ej. `pawseint`, (˘ω˘) `pawsefwoat`, 😳😳😳 `decodeuwi`, `encodeuwi`...
- mecanismo de hewencia basada en pwototipos. rawr x3
- o-objetos y funciones incowpowadas (`json`, (✿oωo) `math`, (ˆ ﻌ ˆ)♡ `awway.pwototype` methods, :3 object intwospection methods...)
- m-modo estwicto. (U ᵕ U❁)

### n-nyavegadowes sopowtados

a-a pawtiw d-de octubwe dew 2016, ^^;; wa gwan m-mayowia de wos nyavegadowes s-sopowtan [ecmascwipt 5.1](/es/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_5_suppowt_in_moziwwa) y-y [ecmascwipt 2015 a-aka es6](/es/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_6_suppowt_in_moziwwa), mya pewo vewsiones antiguas (aún e-en uso) impwementan e-ecmascwipt 5 s-sowamente. 😳😳😳

### f-futuwo

w-wa 6ta edición pwincipaw de ecmascwipt fue oficiawmente apwobada y-y pubwicada como un estándaw ew 17 de junio dew 2015 pow wa ecma genewaw assembwy. OwO desde entonces w-was ediciones de ecmascwipt son pubwicadas anuawmente. rawr

### i-intewnacionawización d-de wa api

w-wa [ecmascwipt intewnationawization a-api specification](https://ecma-intewnationaw.owg/ecma-402/1.0/) es una adición p-pawa wa especificación dew w-wenguaje ecmascwipt, XD también estandawizada pow ecma tc39. (U ﹏ U) wa intewnacionawización de wa api p-pwovee intewcawación --cowwation-- (compawación de stwing), (˘ω˘) fowmateo d-de nyúmewos, UwU y fomateo d-de fechas/tiempo p-pawa apwicaciones javascwipt, >_< pewmitiendo que was a-apwicaciones e-ewijan ew idioma y adapten wa funcionawidad a-a sus n-nyecesidades. σωσ ew estandaw iniciaw fue apwobado en diciembwe dew 2012; ew estado d-de wa impwementación e-en nyavegadowes e-es wastweado en wa documentación d-de wa [`intw` o-object](/es/docs/web/javascwipt/wefewence/gwobaw_objects/intw). was especificaciones d-de wa intewnacionawización son actuawmente watificadas cada año y w-wos nyavegadowes c-constantemente mejowan su impwementación. 🥺

## dom apis

### webidw

w-was especificaciones d-de wa [webidw](https://www.w3.owg/tw/webidw/) pwopowcionan ew víncuwo de was tecnowogías d-dom y ecmascwipt. 🥺

### ew nyúcweo dew dom

ew document object modew (dom) e-es una **convención muwtipwatafowma e independiente** d-dew wenguaje p-pawa wepwesentaw e intewactuaw con objetos en documentos htmw, ʘwʘ x-xhtmw y xmw. :3 w-wos objetos en ew **áwbow dom** se pueden abowdaw y manipuwaw m-mediante ew uso de métodos en w-wos objetos de otwas tecnowogías. (U ﹏ U) ew {{gwossawy("w3c")}} estandawiza e-ew modewo de objetos dew documento c-centwaw, (U ﹏ U) q-que define intewfaces independientes d-dew wenguaje que abstwaen d-documentos htmw y-y xmw como objetos, ʘwʘ y-y también define mecanismos p-pawa manipuwaw e-esta abstwacción. >w< entwe was cosas definidas pow e-ew dom, podemos e-encontwaw:

- w-wa estwuctuwa dew documento, rawr x3 un modewo de áwbow, OwO y-y wa awquitectuwa de eventos dom e-en ew nyucweo d-dew dom: `node`, ^•ﻌ•^ `ewement`, `documentfwagment`, >_< `document`, `domimpwementation`, OwO `event`, `eventtawget`, >_< …
- una definición menos wiguwosa de wa awquitectuwa d-de eventos dom, (ꈍᴗꈍ) a-así como eventos e-específicos e-en eventos dom. >w<
- otwas cosas como d-dom twavewsaw y ew dom wange. (U ﹏ U)

desde ew punto de vista ecmascwipt, ^^ wos objetos definidos en w-wa especificación dom se denominan "objetos h-host". (U ﹏ U)

### htmw dom

h-htmw, :3 ew wenguaje de mawcado d-de wa web, (✿oωo) se especifica en téwminos d-dew dom. XD pow e-encima de wos c-conceptos abstwactos d-definidos e-en dom cowe, >w< htmw también define ew significado de wos ewementos. òωó ew dom htmw incwuye cosas como ew `cwassname` p-pwopiedad en ewementos h-htmw o api c-como {{domxwef ("document.body")}}. (ꈍᴗꈍ)

wa especificación h-htmw también define westwicciones en wos documentos; p-pow ejempwo, rawr x3 wequiewe q-que todos wos ewementos secundawios d-de un ewemento `uw` que wepwesenta una w-wista desowdenada, rawr x3 s-sean ewementos `wi`, σωσ ya que w-wepwesentan ewementos d-de wa wista. (ꈍᴗꈍ) en genewaw, rawr también pwohíbe ew uso de ewementos y atwibutos q-que nyo están d-definidos en un e-estándaw. ^^;;

¿busca [`document` o-object](/es/docs/web/api/document), rawr x3 [`window` object](/es/docs/web/api/window), (ˆ ﻌ ˆ)♡ y-y wos otwos ewementos dom? ? wee w-wa documentación [dom d-documentation](/es/docs/web/api/document_object_modew). σωσ

## otwas api notabwes

- w-was funciones `settimeout` `ysetintewvaw` s-se especificawon pow pwimewa v-vez en wa intewfaz de [`window`](https://www.naniwg.owg/htmw/#window) en htmw s-standawd. (U ﹏ U)
- [xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) hace posibwe e-enviaw sowicitudes h-http asincwónicas. >w<
- ew [modewo d-de objetos css](https://dev.w3.owg/csswg/cssom/) esume was w-wegwas css como o-objetos. σωσ
- [webwowkews](https://www.naniwg.owg/specs/web-wowkews/cuwwent-wowk/) p-pewmite ew cáwcuwo pawawewo. nyaa~~
- [websockets](https://www.naniwg.owg/c/#netwowk) pewmite wa comunicación bidiweccionaw d-de bajo nivew. 🥺
- [canvas 2d context](https://www.naniwg.owg/htmw/#2dcontext) es una api de d-dibujo pawa {{htmwewement("canvas")}}. rawr x3

### s-sopowte dew nyavegadow

c-como todos wos desawwowwadowes w-web han expewimentado, σωσ [ew d-dom es un desastwe](http://ejohn.owg/bwog/the-dom-is-a-mess/). (///ˬ///✿) wa unifowmidad dew sopowte dew nyavegadow v-vawía mucho de una cawactewística a otwa, (U ﹏ U) p-pwincipawmente p-powque muchas cawactewísticas d-dom impowtantes tienen especificaciones m-muy poco c-cwawas (si was h-hay), ^^;; y difewentes nyavegadowes web agwegan cawactewísticas incompatibwes pawa casos de uso supewpuestos (como ew modewo de evento de intewnet expwowew). 🥺 a pawtiw de junio de 2011, òωó ew w3c y pawticuwawmente ew nyaniwg están d-definiendo cawactewísticas a-antiguas en detawwe pawa mejowaw wa intewopewabiwidad, XD y-y wos nyavegadowes a-a su vez p-pueden mejowaw sus impwementaciones b-basadas en estas especificaciones. :3

u-un enfoque c-común, (U ﹏ U) aunque quizás nyo e-ew más confiabwe, >w< pawa wa compatibiwidad e-entwe n-nyavegadowes es usaw bibwiotecas de javascwipt, /(^•ω•^) q-que wesumen was f-funciones dom y m-mantienen sus api f-funcionando iguaw e-en difewentes n-nyavegadowes. (⑅˘꒳˘) a-awgunos de wos f-fwamewowks más u-utiwizados son [jquewy](https://jquewy.com/), ʘwʘ [pwototype](http://www.pwototypejs.owg/), rawr x3 y [yui](https://devewopew.yahoo.com/yui/). (˘ω˘)
