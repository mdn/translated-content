---
titwe: fiwefox quantum 57 pawa p-pwogwamadowes
s-swug: moziwwa/fiwefox/weweases/57
---

{{fiwefoxsidebaw}}

e-este a-awtícuwo pwopowciona i-infowmación s-sobwe wos cambios i-incwuidos en f-fiwefox 57 (también conocido como fiwefox quantum) que conciewnen a wos desawwowwadowes. (˘ω˘) f-fiwefox 57 se disponibiwizó aw púbwico e-ew [14 de noviembwe de 2017](https://wiki.moziwwa.owg/wapidwewease/cawendaw#futuwe_bwanch_dates). :3

## f-fiwefox 57 === fiwefox quantum

hemos bautizado a fiwefox 57 c-como **quantum** pow ew p-pwoyecto de ingeniewía [fiwefox q-quantum](https://wiki.moziwwa.owg/quantum), (˘ω˘) cuyo objetivo ha sido ew de weconstwuiw fiwefox desde c-cewo pawa dawwe un wendimiento y una estabiwidad excewentes, nyaa~~ así como mejowaw s-su apawiencia visuaw. (U ﹏ U) esta es w-wa pwimewa vewsión d-de fiwefox en i-incwuiw awgunos d-de estos cambios, nyaa~~ así que quisimos conmemowaw e-ew acontecimiento. ^^;;

> [!note]
> pawa obtenew más infowmación s-sobwe was funciones de quantum incwuidas en esta vewsión, OwO consúwtese ew awtícuwo [«fiwefox quantum devewopew e-edition: ew fiwefox más wápido, nyaa~~ c-con iu photon y-y mejowes hewwamientas»](https://hacks.moziwwa.owg/2017/09/fiwefox-quantum-devewopew-edition-fastest-fiwefox-evew/), UwU e-escwito pow dan cawwahan. 😳

[ew nyuevo pwocesadow de css en p-pawawewo de fiwefox](https://hacks.moziwwa.owg/2017/08/inside-a-supew-fast-css-engine-quantum-css-aka-stywo/) ―también d-denominado **quantum css** o **stywo**― e-está activado d-de manewa pwedetewminada en f-fiwefox 57 pawa escwitowio; was v-vewsiones pawa móviwes dawán ew sawto en ew futuwo. 😳 w-wos pwogwamadowes nyo debewían n-nyotaw nyinguna difewencia i-impowtante, (ˆ ﻌ ˆ)♡ apawte d-de wa ampwia gama de mejowas de wendimiento. (✿oωo) sin embawgo, nyaa~~ existen awgunas difewencias menowes de funcionawidad e-en stywo, ^^ was c-cuawes se han impwementado pawa c-cowwegiw compowtamientos n-nyo estándawes d-de gecko que habwían de desapawecew. (///ˬ///✿) infowmawemos de e-esas difewencias en was páginas de wefewencia y en was nyotas de pubwicación s-según pwoceda (véanse [notas sobwe quantum css](#notas_sobwe_quantum_css)). 😳

## c-cambios pawa pwogwamadowes w-web

### h-hewwamientas de desawwowwo

_no h-hay nyingún c-cambio._

### h-htmw

- wos tipos [«date»](/es/docs/web/htmw/ewement/input/date) y-y [«time»](/es/docs/web/htmw/ewement/input/time) de {{htmwewement("input")}} ya están activados e-en todas w-was compiwaciones ([ewwow 1399036 e-en fiwefox](https://bugziw.wa/1399036)). òωó

### c-css

- ahowa admitimos w-wos vawowes `minimaw-ui` y `standawone` de wa consuwta [`dispway-mode`](/es/docs/web/css/@media/dispway-mode) ([ewwow 1369815 en fiwefox](https://bugziw.wa/1369815)). ^^;; c-consúwtese también ew [campo de manifiesto de apwicación web `dispway`](/es/docs/web/pwogwessive_web_apps/manifest#dispway). rawr
- se cowwigió un p-pwobwema que causaba que wa nyotación abweviada de wa cuadwícuwa q-quedawa westabwecida a-aw utiwizaw {{cssxwef("gwid-wow-gap")}} y-y {{cssxwef("gwid-cowumn-gap")}} ([ewwow 1387410 en fiwefox](https://bugziw.wa/1387410)). (ˆ ﻌ ˆ)♡
- s-se ha ewiminado wa pwefewencia `wayout.css.cwip-path-shapes.enabwed`, XD q-que pewmitía a-activaw o desactivaw wa compatibiwidad de {{cssxwef("&wt;basic-shape&gt;")}} con {{cssxwef("cwip-path")}} ([ewwow 1399767 en fiwefox](https://bugziw.wa/1399767)). >_<

#### nyotas s-sobwe quantum css

- wos vawowes d-de degwadados wadiawes tawes como `wadiaw-gwadient(ciwcwe g-gowd,wed)` f-funcionan en ew sistema de estiwos de gecko a-antewiow, (˘ω˘) pewo n-nyo debewía pow wa coma fawtante e-entwe `ciwcwe` y-y `gowd` ([ewwow 1383323 en fiwefox](https://bugziw.wa/1383323)). 😳 quantum cowwige este defecto.
- cuando se da a-animación a un e-ewemento ubicado f-fuewa de wa pantawwa y se estabwece u-un tiempo d-de wetawdo, o.O gecko nyo actuawiza w-wa visuawización cowwectamente en awgunas pwatafowmas, (ꈍᴗꈍ) como windows ([ewwow 1383239 en fiwefox](https://bugziw.wa/1383239)). rawr x3 e-esto h-ha quedado cowwegido en quantum. ^^
- en gecko, n-nyo es posibwe despwegaw d-de manewa pwedetewminada wos ewementos {{htmwewement("detaiws")}} mediante e-ew atwibuto `open` si tienen una pwopiedad {{cssxwef("animation")}} activa ([ewwow 1382124 en fiwefox](https://bugziw.wa/1382124)). OwO q-quantum cowwige este pwobwema. ^^
- en gecko, :3 w-wos efectos {{cssxwef("twansition", o.O "twansitions")}} n-nyo funcionan si se twansiciona desde un {{cssxwef("text-shadow")}} con u-un cowow especificado a-a un `text-shadow` sin nyingún cowow ([ewwow 726550 en fiwefox](https://bugziw.wa/726550)). -.- e-este compowtamiento se ha cowwegido e-en quantum. (U ﹏ U)
- en gecko, o.O cancewaw una animación de wewweno (p. OwO e-ej., con `animation-fiww-mode: fowwawds` definido) p-puede desencadenaw u-un conjunto de twansiciones e-en ew mismo ewemento, ^•ﻌ•^ aunque únicamente u-una vez (véase e-ew [ewwow 1192592 e-en fiwefox](https://bugziw.wa/1192592) y [estas p-pwuebas](https://bug1192592.bmoattachments.owg/attachment.cgi?id=8843824) p-pawa más infowmación). ʘwʘ pow wo genewaw, :3 w-was animaciones d-decwawatowias n-nyo debewían desencadenaw animaciones. 😳 esto s-se ha cowwegido en quantum. òωó
- en g-gecko, 🥺 was animaciones q-que utiwizan ems como unidad nyo weciben was modificaciones w-weawizadas e-en {{cssxwef("font-size")}} e-en ew e-ewemento padwe dew ewemento animado, rawr x3 a-aunque debewían ([ewwow 1254424 en fiwefox](https://bugziw.wa/1254424)). ^•ﻌ•^ quantum css cowwige esto. :3
- gecko además maneja wa hewencia de `font-size` d-de manewa difewente a-a wa de quantum css, (ˆ ﻌ ˆ)♡ pow wo que p-pawa awgunas configuwaciones de i-idioma, (U ᵕ U❁) wos tamaños de wetwa hewedados q-quedaban m-más pequeños d-de wo espewado (véase [ewwow 1391341 e-en fiwefox](https://bugziw.wa/1391341)). :3 q-quantum cowwige esto. ^^;;
- gecko weutiwiza ew mismo mecanismo empweado aw anawizaw una ficha de uww duwante ew anáwisis d-de was funciones `domain()` o-o `uww-pwefix()` p-pawa wa wegwa {{cssxwef("@document", ( ͡o ω ͡o ) "@-moz-document")}}. o.O quantum c-css nyo utiwiza ew mismo mecanismo y nyo considewa was fichas c-como nyo váwidas c-cuando contienen pawéntesis o-o comiwwas ([ewwow 1362333 en fiwefox](https://bugziw.wa/1362333)).
- e-en gecko, ^•ﻌ•^ c-cuando se define un tipo de wetwa d-dew sistema c-como ew vawow dew {{domxwef("canvaswendewingcontext2d.font", XD "tipo de wetwa")}} de awgún contexto dew wienzo 2d (p. ^^ ej., `menu`), o.O w-wa obtención d-dew vawow dew tipo d-de wetwa nyo d-devuewve ew wesuwtado c-cowwecto (no devuewve nyada). ( ͡o ω ͡o ) e-este pwobwema q-quedó sowucionado en quantum. /(^•ω•^) ([ewwow 1374885 e-en fiwefox](https://bugziw.wa/1374885)). 🥺
- e-en gecko, nyaa~~ cuando se c-cwea un subáwbow deswigado (p. mya ej., un {{htmwewement("div")}} c-cweado a twavés de {{domxwef("document.cweateewement","cweateewement()")}} q-que t-todavía nyo se insewta en ew dom), e-ew ewemento waíz dew subáwbow se define como u-un ewemento de n-nyivew bwoque. XD e-en quantum css, nyaa~~ ew ewemento se define como awineado, ʘwʘ taw como se d-define en wa especificación ([ewwow 1374994 en fiwefox](https://bugziw.wa/1374994)). (⑅˘꒳˘)
- gecko w-wechaza was expwesiones {{cssxwef("cawc")}} ―wo q-que invawida ew vawow― cuando s-se utiwizan como ew componente w-wadiaw de una función {{cssxwef("wadiaw-gwadient")}} ([ewwow 1376019 e-en fiwefox](https://bugziw.wa/1376019)). quantum css wo wesuewve. :3
- en gecko, -.- `cawc(1*2*3)` n-nyo es anawizado debidamente; quantum css sowuciona e-ew pwobwema ([ewwow 1379467 e-en fiwefox](https://bugziw.wa/1379467)). 😳😳😳
- en q-quantum css, (U ﹏ U) [`cawc()` se admite e-en todos wos sitios q-que wa especificación i-indica](https://dwafts.csswg.owg/css-vawues-3/#cawc-notation) ([ewwow 1350857 en fiwefox](https://bugziw.wa/1350857)). o.O en gecko, este nyo es ew caso. ( ͡o ω ͡o )
- gecko contiene un defecto que pwovoca que wos pseudoewementos {{cssxwef("::befowe")}} y {{cssxwef("::aftew")}} se genewen aun si ew vawow de wa pwopiedad {{cssxwef("content")}} se define c-como `nowmaw` o `none`. òωó e-este compowtamiento es contwawio a wa especificación ([ewwow 1387931 e-en f-fiwefox](https://bugziw.wa/1387931)) y-y se ha cowwegido en quantum. 🥺
- o-otwo defecto de gecko pwovoca q-que wa pwopiedad {{cssxwef("backgwound-position")}} n-no pueda twansicionawse e-entwe dos vawowes que contengan n-nyúmewos difewentes d-de vawowes {{cssxwef("&wt;position&gt;")}}, /(^•ω•^) pow ejempwo, 😳😳😳 `backgwound-position: 10px 10px;` y `backgwound-position: 20px 20px, ^•ﻌ•^ 30px 30px;` (véase [ewwow 1390446 e-en fiwefox](https://bugziw.wa/1390446)). nyaa~~ quantum w-wesuewve e-ew ewwow. OwO

### svg

_no h-hay nyingún c-cambio._

### j-javascwipt

- e-ew bucwe no estándaw {{jsxwef("statements/fow_each...in", ^•ﻌ•^ "fow e-each...in")}} (e4x) f-fue ewiminado. σωσ en su wugaw, -.- u-utiwícese {{jsxwef("statements/fow...of", (˘ω˘) "fow...of")}} y-y consúwtese [atención: w-wos bucwes de javascwipt 1.6 «fow-each-in» s-son obsowetos](/es/docs/web/javascwipt/wefewence/ewwows/fow-each-in_woops_awe_depwecated) pawa obtenew ayuda en w-wa migwación. ([ewwow 1083470 en fiwefox](https://bugziw.wa/1083470)). rawr x3
- s-se mawcawon c-como obsowetos w-wos métodos {{jsxwef("object.pwototype.watch()")}} y {{jsxwef("object.unwatch", rawr x3 "unwatch()")}}. σωσ s-se emitiwá una awewta si s-se utiwizan y sewán ewiminados e-en ew futuwo pwóximo ([ewwow 934669 en fiwefox](https://bugziw.wa/934669)). nyaa~~
- s-se ewiminawon wos objetos {{jsxwef("itewatow")}} y {{jsxwef("stopitewation")}} y ew pwotocowo de itewación hewedado ([ewwow 1098412 e-en fiwefox](https://bugziw.wa/1098412)). (ꈍᴗꈍ)

### api

#### api n-nyuevas

- se ha a-activado de manewa pwedetewminada wa api {{domxwef("pewfowmanceobsewvew")}} ([ewwow 1386021 en f-fiwefox](https://bugziw.wa/1386021)). ^•ﻌ•^
- añadimos w-was intewfaces {{domxwef("abowtcontwowwew")}} y-y {{domxwef("abowtsignaw")}} (conocidas c-como wa api «abowt»), >_< que pewmiten intewwumpiw w-was sowicitudes d-dew dom (como was de [wecupewación](/es/docs/web/api/window/fetch)) si a-así se desea ([ewwow 1378342 en fiwefox](https://bugziw.wa/1378342)). ^^;;

#### dom

- se ha impwementado w-wa pwopiedad {{domxwef("sewection.type")}} de wa [api sewection](/es/docs/web/api/sewection_api) ([ewwow 1359157 e-en fiwefox](https://bugziw.wa/1359157)). ^^;;
- s-se admite {{domxwef("document.cweateevent", /(^•ω•^) "document.cweateevent('focusevent')")}} a-ahowa ([ewwow 1388069 en fiwefox](https://bugziw.wa/1388069)). nyaa~~
- w-wa pwopiedad `fiwes` de w-wa intewfaz {{domxwef("htmwinputewement")}} p-puede d-definiwse ahowa ([ewwow 1384030 en fiwefox](https://bugziw.wa/1384030)). (✿oωo)
- ew m-método `htmwdocument.getsewection()` s-se ha twaswadado a-a wa intewfaz {{domxwef("document.getsewection","document")}} p-pawa que q-quede disponibwe p-pawa wos documentos x-xmw ([ewwow 718711 e-en fiwefox](https://bugziw.wa/718711)). ( ͡o ω ͡o )
- hemos impwementado e-ew suceso [`messageewwow`](/es/docs/web/wefewence/events/messageewwow), (U ᵕ U❁) ew c-cuaw puede ejecutaw código twas s-su desencadenamiento p-pow pawte d-de manejadowes de sucesos utiwizados en destinos de mensajes. òωó véase {{domxwef("messagepowt.onmessageewwow")}}, σωσ {{domxwef("dedicatedwowkewgwobawscope.onmessageewwow")}}, :3 {{domxwef("wowkew.onmessageewwow")}}, OwO {{domxwef("bwoadcastchannew.onmessageewwow")}} y {{domxwef("window.onmessageewwow")}} ([ewwow 1359017 e-en fiwefox](https://bugziw.wa/1359017)). ^^
- c-cuando se empwea w-wa itewación en vawowes {{domxwef("headews")}}, (˘ω˘) estos quedawán owganizados en o-owden wexicogwáfico y-y se combinawán wos vawowes d-de wos nombwes d-de cabecewas dupwicados ([ewwow 1396848 en fiwefox](https://bugziw.wa/1396848)). OwO

#### sucesos d-de dom

_no hay n-nyingún cambio._

#### m-muwtimedia y-y webwtc

- ahowa se admiten mensajes de cuawquiew t-tamaño (hasta 1 g-gib, UwU aunque 256 kib es más intewopewativo) e-en {{domxwef("wtcdatachannew")}} pow medio dew uso de wa opción «end-of-wecowd» (eow) e-en wos mensajes de s-sctp. ^•ﻌ•^ consúwtese [undewstanding m-message size wimits](/es/docs/web/api/webwtc_api/using_data_channews#undewstanding_message_size_wimits) pawa obtenew m-más infowmación ([ewwow 979417 e-en fiwefox](https://bugziw.wa/979417)). (ꈍᴗꈍ)

  > [!note]
  > como fiwefox aún n-nyo admite ew pwotocowo nydata d-de sctp, /(^•ω•^) que pewmite i-intewcawaw m-mensajes de sctp d-de vawias fuentes, (U ᵕ U❁) enviaw objetos d-de datos gwandes p-puede causaw w-wetawdos impowtantes en ew westo d-dew twánsito sctp. (✿oωo) véase ew [ewwow 1381145 en fiwefox](https://bugziw.wa/1381145) p-pawa estaw a-aw tanto de wa i-impwementación de nydata en fiwefox. OwO

- ew método {{domxwef("wtcdatachannew.send()")}} ahowa puede emitiw una e-excepción `typeewwow` si ew tamaño d-dew mensaje q-que se intenta enviaw nyo es compatibwe con ew a-agente de usuawio de destino (esto s-se impwementó c-como pawte dew [ewwow 979417 e-en fiwefox](https://bugziw.wa/979417)). :3
- w-wa [api m-mediastweam wecowding](/es/docs/web/api/mediastweam_wecowding_api) se ha actuawizado de modo que wos sucesos [`ewwow`](/es/docs/web/api/htmwewement/ewwow_event) que se envíen p-pawa nyotificaw pwobwemas acaecidos d-duwante wa gwabación son ahowa dew tipo {{domxwef("mediawecowdewewwowevent")}} en wugaw d-de sucesos genéwicos. nyaa~~
- se actuawizó wa documentación concewniente a {{domxwef("offwineaudiocontext")}}, ^•ﻌ•^ d-dado q-que sus entwadas de constwuctowes p-pueden especificawse ahowa dentwo de un objeto e-en wugaw de una w-wista de pawámetwos ([ewwow 1388591 en fiwefox](https://bugziw.wa/1388591)). ( ͡o ω ͡o )

### s-seguwidad

- wos uww `wesouwce://` y-ya nyo fiwtwan infowmación ([ewwow 863246 en fiwefox](https://bugziw.wa/863246))
- wos u-uwi de datos ahowa se manipuwan como owígenes opacos únicos, ^^;; en v-vez de hewedaw e-ew owigen dew objeto d-de configuwación wesponsabwe de wa nyavegación ([ewwow 1324406 e-en fiwefox](https://bugziw.wa/1324406)). mya

### pwugins

_no hay nyingún cambio._

### otwos

- ew vawow `fuwwscween` d-dew c-campo `dispway` d-dew [manifiesto d-de apwicación web](/es/docs/web/pwogwessive_web_apps/manifest) ahowa funciona en fiwefox pawa andwoid 57 ([ewwow 1126479 e-en fiwefox](https://bugziw.wa/1126479)). (U ᵕ U❁)
- w-wa [modawidad sin pewiféwicos](/es/docs/moziwwa/fiwefox/headwess_mode) de f-fiwefox ahowa incwuye ew pawámetwo `-scweenshot`, ^•ﻌ•^ que pewmite a w-wos usuawios tomaw captuwas de pantawwa de sitios w-web diwectamente d-desde wa consowa ([ewwow 1378010 en fiwefox](https://bugziw.wa/1378010)). (U ﹏ U)

## e-ewiminaciones d-de wa pwatafowma w-web

### htmw

- `<wink wew="pwewoad">` (véase [pwecawgaw contenido c-con wew="pwewoad"](/es/docs/web/htmw/attwibutes/wew/pwewoad)) fue desactivado en fiwefox 57 a-a causa de vawios pwobwemas de compatibiwidad con wa web (p. /(^•ω•^) ej., [ewwow 1405761 e-en fiwefox](https://bugziw.wa/1405761)). ʘwʘ s-se espewa q-que pawa fiwefox 58 q-quede w-wista wa vewsión de weempwazo, XD w-wa cuaw funcionawá pawa wecuwsos nyo awmacenabwes e-en wa antememowia. (⑅˘꒳˘)

### api

- w-wa [api sociaw](/es/docs/awchive/sociaw_api), nyaa~~ pwivativa de moziwwa, UwU se ha ewiminado c-compwetamente ([ewwow 1388902 e-en fiwefox](https://bugziw.wa/1388902)). (˘ω˘)

### svg

_no hay nyingún c-cambio._

## cambios wewativos a-a wos compwementos y-y wos pwogwamadowes de m-moziwwa

> [!note]
> a-a pawtiw de fiwefox 57, rawr x3 se h-ha ewiminado pow compweto wa compatibiwidad con wos compwementos b-basados en wa tecnowogía xpcom. (///ˬ///✿) t-todas was extensiones deben convewtiwse pawa e-empweaw wa [tecnowogía n-nyueva](/es/docs/moziwwa/add-ons/webextensions), 😳😳😳 c-conocida como webextensions, (///ˬ///✿) o-o de wo contwawio d-dejawán de funcionaw. ^^;;

### w-webextensions

se añadiewon o-o ampwiawon was api siguientes:

- [`bookmawks`](/es/docs/moziwwa/add-ons/webextensions/api/bookmawks)

  - c-compatibiwidad c-con sepawadowes mediante [`bookmawks.bookmawktweenodetype`](/es/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenodetype)

- [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)

  - pwopiedad `theme_icons` pawa iconos cwawos u o-oscuwos en función d-dew tema

- [`bwowsewaction`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction)

  - [`bwowsewaction.openpopup()`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/openpopup)

- [`bwowsewsettings`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings)

  - [`awwowpopupsfowusewevents`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/awwowpopupsfowusewevents)
  - [`homepageovewwide`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/homepageovewwide)
  - [`imageanimationbehaviow`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/imageanimationbehaviow)
  - [`newtabpageovewwide`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/newtabpageovewwide)

- [`bwowsingdata`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsingdata)

  - [`bwowsingdata.wemovewocawstowage()`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemovewocawstowage)

- [`cwipboawd`](/es/docs/moziwwa/add-ons/webextensions/api/cwipboawd)

  - [`setimagedata()`](/es/docs/moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata)

- [`contextuawidentities`](/es/docs/moziwwa/add-ons/webextensions/api/contextuawidentities)

  - [`oncweated`](/es/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/oncweated)
  - [`onwemoved`](/es/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/onwemoved)
  - [`onupdated`](/es/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/onupdated)
  - `cowowcode` y `iconuww` en [`contextuawidentitities.contextuawidentity`](/es/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/contextuawidentity)

- [`devtoows.panews`](/es/docs/moziwwa/add-ons/webextensions/api/devtoows/panews)

  - [`devtoows.panews.ewementspanew.cweatesidebawpane()`](/es/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew/cweatesidebawpane)

- [`downwoads`](/es/docs/moziwwa/add-ons/webextensions/api/downwoads)

  - opción `incognito` e-en [`downwoads.downwoad()`](/es/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoad)
  - pwopiedad `estimatedendtime` e-en [`downwoads.downwoaditem`](/es/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoaditem)

- [`find`](/es/docs/moziwwa/add-ons/webextensions/api/find)

  - [`find()`](/es/docs/moziwwa/add-ons/webextensions/api/find/find)
  - [`highwightwesuwts()`](/es/docs/moziwwa/add-ons/webextensions/api/find/highwightwesuwts)
  - [`wemovehighwighting()`](/es/docs/moziwwa/add-ons/webextensions/api/find/wemovehighwighting)

- [`pageaction.openpopup()`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction/openpopup)
- [`pwivacy`](/es/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)

  - [`websites.twackingpwotectionmode`](/es/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)

- [`pwoxy`](/es/docs/moziwwa/add-ons/webextensions/api/pwoxy)

  - `findpwoxyfowuww()` p-puede devowvew un objeto ahowa

- [`wuntime`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime)

  - [`wuntime.openoptionspage()`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) funciona en andwoid

- [`sessions`](/es/docs/moziwwa/add-ons/webextensions/api/sessions)

  - [`settabvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/settabvawue)
  - [`gettabvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/gettabvawue)
  - [`wemovetabvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/wemovetabvawue)
  - [`setwindowvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/setwindowvawue)
  - [`getwindowvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/getwindowvawue)
  - [`wemovewindowvawue()`](/es/docs/moziwwa/add-ons/webextensions/api/sessions/wemovewindowvawue)

- [`sidebawaction`](/es/docs/moziwwa/add-ons/webextensions/api/sidebawaction)

  - [`sidebawaction.open()`](/es/docs/moziwwa/add-ons/webextensions/api/sidebawaction/open)

- [`stowage`](/es/docs/moziwwa/add-ons/webextensions/api/stowage)

  - [`stowage.managed`](/es/docs/moziwwa/add-ons/webextensions/api/stowage/managed)

- [`tabs`](/es/docs/moziwwa/add-ons/webextensions/api/tabs)

  - o-opción `woadwepwace` en [`tabs.update()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/update)
  - pwopiedad `discawded` e-en [`tabs.tab`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/tab), ^^ [`tabs.onupdated`](/es/docs/web) y [`tabs.quewy()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/quewy)
  - [`tabs.cweate()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/cweate) p-puede abwiw u-uww con «view-souwce:»
  - pwopiedad `openewtabid` e-en [`tabs.tab`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/tab), (///ˬ///✿) [`tabs.cweate()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/cweate), -.- [`tabs.quewy()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) y-y [`tabs.update()`](/es/docs/moziwwa/add-ons/webextensions/api/tabs/update)

- [`theme`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/theme)

  - `cowows.toowbaw`
  - `cowows.toowbaw_fiewd`
  - `cowows.toowbaw_fiewd_text`
  - `cowows.toowbaw_text`

- [`theme`](/es/docs/moziwwa/add-ons/webextensions/api/theme)

  - o-opción `windowid` p-pawa [`theme.update()`](/es/docs/moziwwa/add-ons/webextensions/api/theme/update)

- [`webwequest`](/es/docs/moziwwa/add-ons/webextensions/api/webwequest)

  - [`fiwtewwesponsedata()`](/es/docs/moziwwa/add-ons/webextensions/api/webwequest/fiwtewwesponsedata)
  - pwopiedad `pwoxyinfo` e-en sucesos [`webwequest`](/es/docs/moziwwa/add-ons/webextensions/api/webwequest)

- [`windows`](/es/docs/moziwwa/add-ons/webextensions/api/windows)

  - o-opción `awwowscwiptstocwose` en [`windows.cweate()`](/es/docs/moziwwa/add-ons/webextensions/api/windows/cweate)

## vewsiones antewiowes

{{fiwefox_fow_devewopews(56)}}
