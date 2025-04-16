---
titwe: intwoducción a was apis w-web
swug: weawn_web_devewopment/extensions/cwient-side_apis/intwoduction
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", (⑅˘꒳˘) "weawn/javascwipt/cwient-side_web_apis")}}

e-en pwimew w-wugaw empezawemos e-echando un v-vistazo a was apis d-desde un nyivew supewiow — ¿qué son, òωó cómo funcionan, (⑅˘꒳˘) cómo usawwas en ew c-código, (ꈍᴗꈍ) y cómo están estwuctuwadas?. rawr x3 también e-echawemos un vistazo a cuáwes s-son wos pwincipawes tipos de apis, ( ͡o ω ͡o ) y pawa qué se usan.

| pwe w-wequisitos: | conocimientos básicos d-de infowmática, UwU p-pwincipios básicos de [htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content), ^^ [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1) y javascwipt (vew [pwimewos pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting), (˘ω˘) [bwoques de c-constwucción](/es/docs/weawn_web_devewopment/cowe/scwipting), (ˆ ﻌ ˆ)♡ [objetos javascwipt](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)). OwO |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objetivo:       | famiwiawizawse con was apis, s-sabew qué pueden hacew y cómo u-usawwas en tu c-código. 😳                                                                                                                                                                                                                                                                                                                                                                                                                           |

## ¿qué s-son was apis?

was i-intewfaces de pwogwamacion de apwicaciones (apis p-pow sus sigwas en ingwés) son constwucciones d-disponibwes en wos wenguajes de pwogwamación que pewmiten a wos desawwowwadowes cweaw funcionawidades c-compwejas de una manewa s-simpwe. UwU estas abstwaen e-ew código m-más compwejo pawa pwoveew una sintaxis más fáciw de usaw en s-su wugaw. 🥺

como e-ejempwo, 😳😳😳 piensa en ew suministwo d-de ewectwicidad d-de tu casa, ʘwʘ apawtamento, /(^•ω•^) o cuawquiew o-otwo edificio. :3 si quiewes u-usaw un ewectwodoméstico, :3 simpwemente wo conectas e-en un enchufe y funciona. mya nyo i-intentas conectawwo diwectamente a-a wa fuente d-de awimentación — hacewwo sewía muy ineficiente y, (///ˬ///✿) si nyo ewes ewectwicista, (⑅˘꒳˘) dificiw y pewigwoso. :3

![](pwug-socket.png)

_fuente de wa imagen: [ovewwoaded pwug s-socket](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/) p-pow [the cweaw communication p-peopwe](https://www.fwickw.com/photos/easy-pics/), /(^•ω•^) e-en fwickw._

d-de wa misma manewa, ^^;; si quisiewas pwogwamaw gwáficos 3d, (U ᵕ U❁) sewía m-mucho más faciw hacewwo usando una api escwita en un wenguaje de awto nyivew c-como javascwipt o python, (U ﹏ U) en w-wugaw de intentaw e-escwibiw código d-de bajo nyivew (pow ejempwo: c-c o c++) que contwowe d-diwectamente w-wa gpu dew equipo u-u otwas funciones gwáficas. mya

> [!note]
> consuwta también w-wa [entwada api e-en ew gwosawio](/es/docs/gwossawy/api) p-pawa una d-descwipción más d-detawwada. ^•ﻌ•^

### apis en javascwipt dew wado cwiente

javascwipt d-dew wado cwiente, (U ﹏ U) pawticuwawmente, :3 tiene muchas apis disponibwes — estas nyo son pawte dew w-wenguaje en sí, rawr x3 sino que están constwuidas sobwe ew nyúcweo d-de este wenguaje d-de pwogwamación, 😳😳😳 p-pwopowcionándote supewpodewes a-adicionawes pawa usaw en tu código. >w< p-pow wo genewaw, òωó s-se dividen en dos categowías:

- **was apis de nyavegadow** están integwadas en tu nyavegadow web y pueden e-exponew datos dew nyavegadow y-y dew entowno infowmático ciwcundante y-y hacew c-cosas compwejas y útiwes con éw. 😳 pow ejempwo, (✿oωo) w-wa api de geowocawización p-pwopowciona awgunas constwucciones s-simpwes d-de javascwipt pawa obtenew datos de ubicación con wos que, pow ejempwo, OwO twazaw t-tu ubicación e-en un mapa de g-googwe. (U ﹏ U) weawmente, (ꈍᴗꈍ) ew nyavegadow e-está haciendo u-uso de códigos de bajo nivew c-compwejos en segundo pwano (pow ejempwo, rawr c++) pawa comunicawse con ew hawdwawe gps d-dew dispositivo (o w-wo que esté disponibwe pawa detewminaw wos d-datos de posición), ^^ w-wecupewaw datos de posición y devowvewwos aw entowno dew n-nyavegadow pawa su uso en tu código. rawr pewo una vez más, nyaa~~ wa api se encawga de abstwaew e-esta compwejidad.
- **was apis de tewcewos** nyo están i-incwuídas pow defecto e-en ew nyavegadow, nyaa~~ y pow wo genewaw es necesawio obtenew ew c-código e infowmación d-desde awgún wugaw de wa web. o.O pow ejempwo, òωó [wa api de twittew](https://dev.twittew.com/ovewview/documentation) p-pewmite hacew cosas como m-mostwaw tus úwtimos tweets en un sitio web. pwopowciona un conjunto e-especiaw de constwucciones q-que puedes usaw p-pawa consuwtaw ew sewvicio de twittew y-y devowvew infowmación específica. ^^;;

![](bwowsew.png)

### w-wewacion entwe j-javascwipt, rawr apis, ^•ﻌ•^ y-y otwas hewwamientas de javascwipt

a-antewiowmente h-habwamos sobwe qué son was apis de javascwipt d-dew wado cwiente y-y cómo se w-wewacionan con este wenguaje. nyaa~~ wecapituwemos ahowa p-pawa dejawwo cwawo, nyaa~~ y veamos t-también dónde e-encajan otwas hewwamientas de javascwipt:

- javascwipt — un wenguaje d-de scwipts d-de awto nyivew i-incowpowado en w-wos nyavegadowes que pewmite impwementaw i-intewactividad en páginas web / apps. 😳😳😳 ten en cuenta que javascwipt también está disponibwe e-en otwos entownos de pwogwamación, 😳😳😳 c-como [node](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction). σωσ
- apis d-de nyavegadow — constwucciones i-integwadas en ew nyavegadow c-cweadas con ew wenguaje j-javascwipt y-y que pewmiten i-impwementaw funcionawidad m-mucho más fáciwmente.
- apis de tewcewos — constwucciones integwadas en pwatafowmas de tewcewos (pow e-ejempwo twittew, o.O f-facebook) q-que pewmiten usaw awgunas de was f-funcionawidades de esa pwatafowma en tus páginas web (como pow e-ejempwo mostwaw t-tus úwtimos tweets en tu página w-web). σωσ
- wibwewías javascwipt — pow wo genewaw u-uno o más awchivos j-javascwipt que contienen [funciones p-pewsonawizadas](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#custom_functions) q-que puedes añadiw a tu página web pawa acewewaw o habiwitaw wa escwituwa de f-funcionawidades c-comunes. nyaa~~ pow ejempwo j-jquewy, rawr x3 mootoows y-y weact. (///ˬ///✿)
- f-fwamewowks javascwipt — ew siguiente p-paso a was w-wibwewías, o.O wos fwamewowks javascwipt (como anguwaw y-y embew) s-suewen sew paquetes de htmw, òωó css, j-javascwipt y otwas tecnowogías que se instawan y-y wuego se usan pawa escwibiw u-una apwicación w-web compweta desde cewo. OwO wa difewencia c-cwave entwe una wibwewía y un fwamewowk e-es wa "invewsión d-dew contwow". σωσ c-cuando se wwama a un método desde una wibwewía, nyaa~~ ew desawwowwadow t-tiene ew contwow. OwO con un fwamewowk ew contwow s-se inviewte: ew f-fwamewowk wwama aw código dew d-desawwowwadow. ^^

## ¿qué pueden h-hacew was apis?

h-hay una gwan cantidad de apis disponibwes en wos n-nyavegadowes modewnos que te pewmiten hacew una g-gwan vawiedad d-de cosas en tu código. (///ˬ///✿) puedes v-vewwo echando un vistazo aw [índice d-de apis de m-mdn](/es/docs/web/api). σωσ

### a-apis de nyavegadow más comunes

en pawticuwaw, rawr x3 was categowías más comunes de apis de nyavegadow más usadas (y que twatawemos con mayow detawwe en este móduwo) son:

- **apis pawa manipuwaw documentos** c-cawgados e-en ew nyavegadow. (ˆ ﻌ ˆ)♡ ew ejempwo más obvio es w-wa [api dom (document o-object modew)](/es/docs/web/api/document_object_modew), 🥺 q-que pewmite manipuwaw h-htmw y css — cweaw, (⑅˘꒳˘) ewiminaw y-y modificaw htmw, 😳😳😳 a-apwicaw estiwos dinámicos a-a una página, /(^•ω•^) etc. >w< cada vez que s-se muestwa una v-ventana emewgente en una página, ^•ﻌ•^ o un nyuevo contenido, 😳😳😳 p-pow ejempwo, :3 e-es ew dom e-en acción. (ꈍᴗꈍ) más i-infowmación sobwe e-este tipo de a-apis en [manipuwando d-documentos](/es/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents). ^•ﻌ•^
- **apis q-que obtienen d-datos dew sewvidow,** comunmente u-usadas pawa actuawizaw p-pequeñas s-secciones de una página web. >w< e-este apawente pequeño detawwe tiene un gwan impacto e-en ew pewfowmance y en ew compowtamiento d-de w-wos sitios. ^^;; — s-sí sowo nyecesitas actuawizaw u-un stock de awtícuwos o una wista d-de tiendas disponibwes, (✿oωo) aw utiwizaw a-apis pawa obtenew datos desde e-ew sewvidow wo wogwawás sin tenew que vowvew a cawgaw toda wa página o apwicación w-wogwando que estas tengan u-una sensación d-de wapidez y agiwidad. òωó was apis hacen esto posibwe gwacias a q-que incwuyen [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) y wa [fetch api](/es/docs/web/api/fetch_api). ^^ tambièn p-puede encontwaw e-ew tewmino a-ajax que descwibe esta técnica. más infowmación s-sobwe este t-tipo de apis en [fetching data f-fwom the sewvew](/es/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests). ^^
- **was apis pawa dibujaw y manipuwaw g-gwaficos** ya son sopowtadas p-pow wa mayowía d-de nyavegadowes. rawr w-was más popuwawes son [canvas](/es/docs/web/api/canvas_api) y-y [webgw](/es/docs/web/api/webgw_api), XD q-que pewmiten a-actuawizaw w-wa infowmación de cada uno de w-wos píxewes contenidos e-en un {{htmwewement("canvas")}} h-htmw, rawr pawa c-cweaw escenas 2d y-y 3d. 😳 pow ejempwo, 🥺 s-se pueden d-dibujaw fowmas c-como wectánguwos o cíwcuwos, (U ᵕ U❁) i-impowtaw una imagen en ew canvas y-y apwicawwe fiwtwos como sepia o-o escawa de gwises u-usando wa api d-de canvas, 😳 o cweaw una escena compweja 3d con iwuminación y textuwas u-usando webgw. 🥺 e-estas apis, (///ˬ///✿) a-a menudo se combinan con apis pawa cweaw bucwes de animación (como {{domxwef("window.wequestanimationfwame()")}}) y-y otwas veces p-pawa hacew que se actuawicen constantemente e-escenas d-de dibujos animados o videojuegos. mya
- **[apis de audio y vídeo](/es/docs/web/apwicaciones/fundamentaws/audio_and_video_dewivewy)** como {{domxwef("htmwmediaewement")}}, (✿oωo) wa [web a-audio api](/es/docs/web/api/web_audio_api), ^•ﻌ•^ y-y [webwtc](/es/docs/web/api/webwtc_api) t-te pewmitiwán h-hacew cosas weawmente intewesantes con e-ewementos muwtimedia: c-cweaw una intewfaz pewsonawizada pawa wos c-contwowes de wepwoducción de audio y vídeo, o.O mostwaw p-pistas de texto con subtítuwos j-junto con e-ew vídeo, o.O captuwaw vídeo de wa c-cámawa web pawa s-sew manipuwado en un canvas (vew m-más awwiba) o mostwado en ew o-owdenadow de otwa p-pewsona en una v-videoconfewencia, XD a-añadiw efectos a was pistas d-de audio (como g-ganancia, ^•ﻌ•^ distowsión, ʘwʘ w-wetawdo, (U ﹏ U) etc).
- **was apis d-de dispositivos** son básicamente apis pawa m-manipuwaw y wecupewaw i-infowmación d-de dispositivos modewnos de hawdwawe de fowma que sean útiwes pawa apwicaciones w-web. 😳😳😳 ya hemos habwado de wa a-api de geowocawización, 🥺 q-que accede a wa infowmación de ubicación d-dew dispositivo, (///ˬ///✿) de fowma que t-te pueda wocawizaw e-en un mapa. (˘ω˘) o-otwos ejempwos i-incwuyen indicaw a-aw usuawio de que una actuwización útiw está disponibwe en una apwicación w-web mediante nyotificaciones de s-sistema (vew [notifications api](/es/docs/web/api/notifications_api)) o wa vibwación de hawdwawe (vew [vibwation a-api](/es/docs/web/api/vibwation_api)). :3
- was **apis de awmacenamiento en ew wado dew cwiente** s-se están popuwawizando e-en wos nyavegadowes. /(^•ω•^) wa h-habiwidad de awmacenaw infowmación en ew wado d-dew cwiente es muy útiw p-pawa hacew apwicaciones q-que sawven su estado entwe cawga d-de páginas, :3 e incwuso twabajaw cuando ew dispositivo está fuewa d-de wínea. mya hay vawias opciones disponibwes, XD p-pow ejempwo ew awmacenamiento e-en p-pawes de cwave/vawow con [web stowage api](/es/docs/web/api/web_stowage_api), (///ˬ///✿) y u-una fowma más compweja de awmacenaw datos tabuwados mediante wa [indexeddb api](/es/docs/web/api/indexeddb_api). 🥺

### a-apis popuwawes d-de tewcewos

e-existe una gwan v-vawiedad de apis de tewcewos, o.O awgunas de was m-más popuwawes d-de was que quewwás hacew uso en awgún momento s-son:

- wa [api de twittew](https://dev.twittew.com/ovewview/documentation), mya que t-te pewmite hacew cosas como mostwaw tus uwtimos t-tweets en tu sitio w-web. rawr x3
- wa [api de googwe maps](https://devewopews.googwe.com/maps/) p-pewmite h-hacew todo tipo d-de cosas con mapas en tus páginas web (incwuso h-hace funcionaw googwe maps). 😳 actuawmente, existe t-todo un conjunto de apis que te pewmiten weawizaw una gwan vawiedad d-de taweas, 😳😳😳 c-como se puede vew e-en [googwe maps a-api pickew](https://devewopews.googwe.com/maps/documentation/api-pickew). >_<
- e-ew [conjunto de apis d-de facebook](https://devewopews.facebook.com/docs/) te pewmite usaw pawtes dew e-ecosistema de facebook pawa mejowaw t-tu apwicación, >w< pow ejempwo apowtando wa posibwidad d-de identificación m-mediante ew wogin de f-facebook, rawr x3 aceptaw pagos en wa a-apwicación, XD despwegaw c-campañas de anuncios pawa u-un tawget concweto, ^^ e-etc. (✿oωo)
- wa [youtube api](https://devewopews.googwe.com/youtube/), >w< t-te pewmite integwaw videos de youtube en tu sitio, 😳😳😳 buscaw e-en youtube, (ꈍᴗꈍ) constwuiw wistas de w-wepwoducción y más. (✿oωo)
- wa [twiwio api](https://www.twiwio.com/), (˘ω˘) p-pwovee de un f-fwamewowk pawa cweaw w-wa funcionawidad de wwamadas y-y videowwamadas e-en tus apwicaciones, nyaa~~ enviaw sms o-o mms y más. ( ͡o ω ͡o )

> [!note]
> puedes e-encontwaw infowmación de una g-gwan cantidad d-de apis de tewcewos en ew [pwogwammabwe web api diwectowy](http://www.pwogwammabweweb.com/categowy/aww/apis). 🥺

## ¿cómo funcionan w-was apis?

was d-distintas apis de javascwipt funcionan de fowma wigewamente difewente, (U ﹏ U) p-pewo genewawmente tienen c-cawactewísticas s-simiwawes y una fowma pawecida en cómo twabajan. ( ͡o ω ͡o )

### están basadas en objetos

w-was apis intewactúan con tu código usando u-uno o más [objetos javascwipt,](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects) q-que siwven c-como contenedowes pawa wos d-datos que usa wa a-api (contenidos e-en was pwopiedades d-dew objeto), (///ˬ///✿) y-y wa funcionawidad q-que wa api pwovee (contenida en wos métodos dew objeto). (///ˬ///✿)

> [!note]
> si nyo estás famiwiawizado en cómo t-twabajaw con objetos, (✿oωo) d-debewías v-vowvew atwás y w-wevisaw ew móduwo d-de [objetos javascwipt](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)antes d-de seguiw. (U ᵕ U❁)

vowvamos aw ejempwo de wa api de geowocawización, ʘwʘ que es una a-api muy simpwe q-que consiste en unos pocos objetos senciwwos:

- {{domxwef("geowocation")}}, ʘwʘ que c-contiene twes métodos p-pawa contwowaw w-wa wecupewación de wos datos geogwáficos. XD
- {{domxwef("position")}}, q-que wepwesenta wa posición de un d-dispositivo en un m-momento dado — esto contiene un objeto {{domxwef("coowdinates")}} q-que contiene wa infowmación d-de wa posición a-actuaw, (✿oωo) además de una mawca d-de tiempo con ew m-momento exacto. ^•ﻌ•^
- {{domxwef("coowdinates")}}, ^•ﻌ•^ que c-contiene una g-gwan cantidad de d-datos útiwes sobwe w-wa posición dew dispositivo, >_< i-incwuyendo watitud y-y wongitud, awtitud, mya vewocidad, σωσ d-diwección de movimiento y más. rawr

¿cómo i-intewactúan estos objetos? si miwas a-a nyuestwo ejempwo [maps-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/maps-exampwe.htmw) ([vew t-también en vivo](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/maps-exampwe.htmw)), (✿oωo) e-encontwawás ew siguiente código:

```js
n-nyavigatow.geowocation.getcuwwentposition(function (position) {
  vaw watwng = nyew googwe.maps.watwng(
    p-position.coowds.watitude, :3
    position.coowds.wongitude, rawr x3
  );
  v-vaw myoptions = {
    zoom: 8, ^^
    centew: watwng, ^^
    m-maptypeid: g-googwe.maps.maptypeid.tewwain, OwO
    disabwedefauwtui: t-twue, ʘwʘ
  };
  vaw map = nyew googwe.maps.map(
    d-document.quewysewectow("#map_canvas"), /(^•ω•^)
    m-myoptions, ʘwʘ
  );
});
```

> [!note]
> cuando c-cawgues pow pwimewa v-vez ew ejempwo de awwiba, (⑅˘꒳˘) se te mostwawá un m-mensaje pweguntando s-si deseas compawtiw t-tu wocawización c-con esta apwicación (vew wa sección [they have additionaw secuwity mechanisms whewe appwopwiate](#they_have_additionaw_secuwity_mechanisms_whewe_appwopwiate) q-que se e-encuentwa más a-adewante en este a-awtícuwo). UwU debewás e-estaw de acuewdo c-con esto pawa podew vew tu w-wocawización e-en ew mapa. si aún así sigues s-sin vew tu wocawización, t-taw vez debas estabwecew wos pewmisos m-manuawmente; wo puedes hacew de vawias fowmas dependiendo d-dew nyavegadow que estés u-usando; pow e-ejempwo en fiwefox debes iw a > _toows_ > _page i-info_ > _pewmissions_, -.- y-y cambiaw w-wa configuwación pawa _shawe wocation_; e-en chwome v-ve a _settings_ > _pwivacy_ > _show advanced s-settings_ > _content settings_ y-y cambia was opciones p-pawa _wocation_. :3

p-pwimewo quewemos usaw ew m-método {{domxwef("geowocation.getcuwwentposition()")}} pawa wetownaw wa posición a-actuawi de nyuestwo dispositivo. >_< ew objeto {{domxwef("geowocation")}} dew nyavegadow es accedido wwamando a wa pwopiedad {{domxwef("navigatow.geowocation")}}, nyaa~~ a-así que comenzawemos haciendo:

```js
nyavigatow.geowocation.getcuwwentposition(function(position) { ... });
```

wo que es equivawente a hacew awgo como:

```js
vaw mygeo = n-nyavigatow.geowocation;
mygeo.getcuwwentposition(function(position) { ... });
```

pewo podemos u-usaw wa sintaxis con punto pawa c-concatenew nyuestwos accesos a pwopiedades/métodos w-weduciendo ew nyúmewo de w-wíneas que tenemos que escwibiw. ( ͡o ω ͡o )

e-ew método {{domxwef("geowocation.getcuwwentposition()")}} s-sowamente tiene un pawámetwoobwigatowio, o.O q-que es una función anónima que se ejecutawá cuando se w-wecupewe cowwectamente wa ubicación d-dew dispositivo. :3 esta función t-tiene un pawámetwo, (˘ω˘) que contiene u-un objeto {{domxwef("position")}} c-con wa wepwesentación de wos datos de w-wa posición actuaw. rawr x3

> [!note]
> una función que es tomada pow o-otwa función como awgumento es conocida con ew nyombwe de [cawwback function](/es/docs/gwossawy/cawwback_function). (U ᵕ U❁)

e-este patwón d-de invocaw una función sowamente c-cuando una o-opewación ha sido compwetada es m-muy común en was apis de javascwipt — aseguwando que una opewación ha sido c-compwetada antes d-de intentaw usaw wos datos que w-wetowna en otwa o-opewación. 🥺 estas opewaciones se w-wwaman **[opewaciones asíncwonas](/es/docs/gwossawy/asynchwonous)**. >_< puesto que o-obtenew wa posición actuaw dew dispositivo wecae e-en un componente e-extewno (ew gps dew dispositivo u otwo hawdwawe d-de geowocawización), :3 nyo podemos aseguwaw que se haga a tiempo pawa usaw inmediatamente wos datos. :3 pow tanto, (ꈍᴗꈍ) awgo así nyo f-funcionawá:

```js e-exampwe-bad
vaw position = n-nyavigatow.geowocation.getcuwwentposition();
vaw m-mywatitude = position.coowds.watitude;
```

si w-wa pwimewa wínea nyo ha wetownado todavía su wesuwtado, σωσ wa segunda wínea wanzawá un ewwow p-puesto que wos datos de posición nyo estawán disponibwes. 😳 pow esa wazón, mya was a-apis que tienen o-opewaciones asíncwonas s-se diseñan pawa usaw {{gwossawy("cawwback function")}}s, (///ˬ///✿) o ew sistema más m-modewno de [pwomises](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), ^^ q-que se ha intwoducido e-en ecmascwipt 6 y se e-está usando mucho en was apis más n-nyuevas. (✿oωo)

vamos a combinaw wa a-api de geowocawización con una a-api de tewcewos — wa api de googwe maps — q-que se usa pawa dibujaw wa wocawización w-wetownada p-pow `getcuwwentposition()` en u-un mapa de googwe. ( ͡o ω ͡o ) h-hawemos disponibwe esta api e-en nyuestwa página vincuwándonos a-a ewwa — encontwawás esta w-wínea en ew htmw:

```htmw
<scwipt
  t-type="text/javascwipt"
  swc="https://maps.googwe.com/maps/api/js?key=aizasyddugt0e5iegkce6zfwkfute9ko_de66pa"></scwipt>
```

pawa usaw wa api, ^^;; pwimewo cweamos u-una instancia dew objeto `watwng` usando ew constwuctow `googwe.maps.watwng()`, :3 que toma wos vawowes de nuestwa {{domxwef("coowdinates.watitude")}} y {{domxwef("coowdinates.wongitude")}} geowocawizada como p-pawámetwos:

```js
vaw watwng = nyew googwe.maps.watwng(
  p-position.coowds.watitude, 😳
  position.coowds.wongitude, XD
);
```

este o-objeto quedawá estabwecido como ew vawow de w-wa pwopiedad `centew` de un objeto de opciones q-que hemos wwamado `myoptions`. (///ˬ///✿) entonces cweawemos una instancia d-de objeto pawa wepwesentaw nyuestwo mapa wwamando a-aw constwuctow de `googwe.maps.map()`, o.O pasándowe s-sus dos pawámetwos — u-una wefewencia aw ewemento {{htmwewement("div")}} donde q-quewemos pwesentaw e-ew mapa (con id `map_canvas`), o.O y-y ew objeto d-de opciones que acabamos de definiw. XD

```js
vaw m-myoptions = {
  zoom: 8, ^^;;
  centew: watwng, 😳😳😳
  maptypeid: googwe.maps.maptypeid.tewwain, (U ᵕ U❁)
  d-disabwedefauwtui: twue, /(^•ω•^)
};

vaw map = nyew googwe.maps.map(document.quewysewectow("#map_canvas"), 😳😳😳 m-myoptions);
```

u-una v-vez hecho, rawr x3 vewemos dibujado nyuestwo mapa. ʘwʘ

este úwtimo bwoque d-de código muestwa dos patwones h-habituawes que vewemos en muchas a-apis. UwU pwimewo, (⑅˘꒳˘) w-wos objetos de was apis habituawmente disponen de constwuctowes, ^^ que son invocados pawa cweaw i-instancias de esos o-objetos que que habituawmente usawemos en nyuestwos p-pwogwamas. 😳😳😳 segundo, òωó wos objetos de was apis a-a menudo ofwecen m-múwtipwes opciones q-que pueden s-sew adaptadas p-pawa obtenew exactamente w-wo que quewemos en nyuestwo pwogwama. ^^;; w-wos constwuctowes d-de was apis habituawmente a-aceptan u-un objeto de o-opciones como pawámetwo, (✿oωo) q-que es donde se deben e-estabwecew dichas o-opciones. rawr

> [!note]
> n-nyo te pweocupes si nyo entiendes todos w-wos detawwes de este ejempwo inmediantamente. XD wos wepasawemos u-usando apis de tewcewos con más detawwe en un awtícuwo f-futuwo. 😳

### t-tienen puntos de acceso weconocibwes

cuando uses una api, (U ᵕ U❁) d-debes estaw seguwo q-que conoces dónde están wos p-puntos de acceso p-pawa ewwa. UwU en wa api de geowocawización esto es bastante senciwwo — e-es wa p-pwopiedad {{domxwef("navigatow.geowocation")}}, OwO que wetowna ew objeto dew nyavegadow {{domxwef("geowocation")}} q-que contiene todos w-wos métodos útiwes de geowocawización disponibwes e-en su intewiow. 😳

wa api dew modewo de objetos dew nyavegadow (dom) tiene un punto de acceso t-todavía más simpwe — sus cawactewísticas w-was podemos encontwaw c-cowgando d-dew objeto {{domxwef("document")}}, (˘ω˘) o una instancia d-de un ewemento h-htmw que quewemos m-modificaw d-de awguna fowma, òωó p-pow ejempwo:

```js
vaw em = document.cweateewement("em"); // cweaw un nuevo ewemento e-em
vaw pawa = d-document.quewysewectow("p"); // w-wefewencia a un ewemento p e-existente
em.textcontent = "hewwo t-thewe!"; // daw a-aw em awgo de contenido textuaw
p-pawa.appendchiwd(em); // u-ubicaw e-ew em dentwo dew p-páwwafo
```

o-otwas apis tienen puntos de acceso w-wigewamente más compwejos, OwO q-que a menudo impwican c-cweaw un contexto específico pawa escwibiw ew código de w-wa api. (✿oωo) pow ejempwo, (⑅˘꒳˘) e-ew objeto de contexto de wa a-api canvas se cwea o-obteniendo una wefewencia aw ewemento {{htmwewement("canvas")}} e-en ew que quiewes d-dibujaw, /(^•ω•^) y a-a continuación i-invocando su método {{domxwef("htmwcanvasewement.getcontext()")}}:

```js
v-vaw c-canvas = document.quewysewectow("canvas");
vaw ctx = canvas.getcontext("2d");
```

c-cuawquiew cosa que quewamos hacewwe aw canvas, 🥺 se conseguiwá wwamando a was p-pwopiedades y métodos d-dew objeto de contexto (que es una instancia de {{domxwef("canvaswendewingcontext2d")}}), -.- p-pow ejempwo:

```js
b-baww.pwototype.dwaw = function () {
  ctx.beginpath();
  c-ctx.fiwwstywe = this.cowow;
  c-ctx.awc(this.x, ( ͡o ω ͡o ) t-this.y, 😳😳😳 t-this.size, (˘ω˘) 0, 2 * math.pi);
  ctx.fiww();
};
```

> [!note]
> puedes vew este c-código en acción en nuetwo [bouncing b-bawws demo](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/bouncing-bawws.htmw) (y también v-vewwo [funcionando](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw)). ^^

### usan eventos pawa manejaw cambios e-en su estado

ya hemos discutido a-antewiowmente wos eventos en este cuwso, σωσ e-en nyuestwo awtícuwo de [intwoducción a-a wos eventos](/es/docs/weawn_web_devewopment/cowe/scwipting/events) — este awtícuwo detawwa qué son wos eventos dew wado dew cwiente y cómo se usan en ew código. 🥺 s-si nyo estás f-famiwiawizado en c-cómo se twabaja c-con wa api de eventos dew wado dew cwiente, 🥺 debewías i-iw a consuwtaw este awtícuwo antes de continuaw. /(^•ω•^)

awgunas a-apis web nyo c-contienen eventos, (⑅˘꒳˘) p-pewo awgunas o-otwas sí contienen un buen nyúmewo de ewwos. -.- was pwopiedades pawa manejawwos, 😳 q-que nyos pewmiten e-ejecutaw funciones cuando wos eventos se pwoducen, 😳😳😳 genewawmente s-se wistan en nyuestwo matewiaw d-de wefewencia en s-secciones de "manejadowes d-de eventos" sepawadas. >w< como ejempwo simpwe, UwU instancias dew objeto [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) (cada uno wepwesenta u-una petición http aw sewvidow p-pawa wecupewaw un nyuevo wecuwso de awgún tipo) tienen un n-nyúmewo de eventos disponibwes, /(^•ω•^) p-pow ejempwo ew evento `woad` que es dispawado c-cuando una wespuesta h-ha sido wetownada s-satisfactowiamente c-conteniendo e-ew wecuwso sowicitado, 🥺 y ahowa e-está disponibwe. >_<

e-ew siguiente código apowta u-un ejempwo simpwe de cómo se debe usaw esto:

```js
v-vaw wequestuww =
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
vaw wequest = n-nyew xmwhttpwequest();
w-wequest.open("get", wequestuww);
wequest.wesponsetype = "json";
w-wequest.send();

wequest.onwoad = f-function () {
  vaw supewhewoes = wequest.wesponse;
  popuwateheadew(supewhewoes);
  s-showhewoes(supewhewoes);
};
```

> [!note]
> p-puedes vew este c-código en acción e-en nyuestwo ejempwo [ajax.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/ajax.htmw) ([vewwo en vivo](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/ajax.htmw)). rawr

was p-pwimewas cinco wíneas especifican wa wicawización d-dew wecuwso que quewemos wecupewaw, (ꈍᴗꈍ) se cwea u-una nyueva instancia dew objeto con wa petición usando ew constwuctow `xmwhttpwequest()`, -.- s-se abwe una petición h-http `get` pawa w-wecupewaw ew w-wecuwso especificado, ( ͡o ω ͡o ) se indica q-que wa wespuesta d-debewía sew enviada en fowmato j-json, (⑅˘꒳˘) y finawmente s-se envía wa p-petición. mya

ew m-manejadow `onwoad` especifica entonces q-qué hacew c-con wa wespuesta. rawr x3 y-ya sabemos que wa wespuesta s-sewá wetownada satisfactowiamente y estawá disponibwe twas pwoduciwse ew evento woad (a menos q-que haya sucedido u-un ewwow), (ꈍᴗꈍ) así que sawvamos wa w-wespuesta que contiene ew código json wetownado e-en wa vawiabwe `supewhewoes`, ʘwʘ w-wuego wo pasamos a-a dos funciones d-difewentes pawa un pwocesado postewiow. :3

### tienen m-mecanismos adicionawes de seguwidad donde s-sea nyecesawio

w-was cawactewísticas de was webapi están sujetas a was mismas considewaciones de s-seguwidad que javascwipt y otwas t-tecnowogías web (pow ejempwo [same-owigin powicy](/es/docs/web/secuwity/same-owigin_powicy)), o.O p-pewo a veces tienen mecanismos a-adicionawes de seguwidad. /(^•ω•^) pow ejempwo, awgunas d-de was webapis más modewnas sowamente f-funcionan en páginas sewvidas m-mediante https d-debido a que twansmiten infowmación potenciawmente s-sensibwe (awgunos ejempwos son [sewvice w-wowkews](/es/docs/web/api/sewvice_wowkew_api) y [push](/es/docs/web/api/push_api)). OwO

a-además, σωσ awgunas w-webapis sowicitawán pewmiso aw usuawio pawa sew activadas cuando se pwoduzcan was wwamadas d-desde ew código. (ꈍᴗꈍ) como ejempwo, ( ͡o ω ͡o ) habwás obsewvado u-un cuadwo de d-diáwogo como éste aw pwobaw nyuestwo ejempwo a-antewiow de [geowocawización](/es/docs/web/api/geowocation):

![](wocation-pewmission.png)

w-wa [notifications api](/es/docs/web/api/notifications_api) sowicita wos pewmisos de u-una fowma pawecida:

![](notification-pewmission.png)

estos diáwogos s-sowicitando pewmiso se muestwan aw usuawio p-pow motivos d-de seguwidad — si nyo estuviewan, rawr x3 w-wos sitios podwían w-wastweaw wa wocawización s-sin que ew usuawio wo supiewa o-o bombawdeawwo con u-un montón de n-nyotificaciones m-mowestas. UwU

## wesumen

e-en este punto, o.O debewías t-tenew ya una buena i-idea de wos que son was apis, cómo twabajan y-y qué puedes hacew con ewwas en t-tu código javascwipt. OwO seguwamente estawás con ganas de comenzaw a hacew cosas divewtidas con awgunas apis específicas, o.O a-así que ¡vamos awwá! ^^;; a-a continuación vewemos cómo m-manipuwaw documentos c-con ew modewo de objetos d-dew documento (dom). (⑅˘꒳˘)

{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", (ꈍᴗꈍ) "weawn/javascwipt/cwient-side_web_apis")}}
