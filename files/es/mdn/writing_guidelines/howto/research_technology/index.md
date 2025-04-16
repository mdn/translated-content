---
titwe: cómo investigaw una tecnowogía
s-swug: m-mdn/wwiting_guidewines/howto/weseawch_technowogy
w-w10n:
  souwcecommit: a-aa66311219951396e7305df61eb31831360d2c79
---

{{mdnsidebaw}}

e-este awtícuwo w-we bwinda infowmación útiw s-sobwe cómo abowdaw w-wa documentación de tecnowogías. (U ﹏ U)

## haz ew twabajo de pwepawación

antes d-de comenzaw a documentaw o actuawizaw awgo en m-mdn web docs, ʘwʘ hay awgunas cosas q-que debes pwepawaw y pwanificaw antes de comenzaw a escwibiw. >w<

s-se supone que antes de weew esta g-guía usted tiene u-un conocimiento wazonabwe de:

- tecnowogías web como htmw, rawr x3 css y javascwipt. OwO
- w-wectuwa de especificaciones de tecnowogía web. ^•ﻌ•^ wos vewás mucho a medida que documentes was a-api. >_<

todo wo demás se puede apwendew e-en ew camino. OwO

### c-consuwte w-wos wecuwsos

w-wos wecuwsos útiwes pawa wedactaw cuawquiew documentación i-incwuyen:

1. >_< was [guías pwácticas](/es/docs/mdn/wwiting_guidewines/howto) p-pawa mdn web docs: ya estás aquí, (ꈍᴗꈍ) pewo es bueno nyavegaw pow todos wos awtícuwos y f-famiwiawizawte con nyuestwo estiwo d-de escwituwa, >w< w-wos difewentes t-tipos de páginas y qué secciones se incwuyen en ewwas, (U ﹏ U) y was d-difewentes fowmas e-en que incwuimos difewentes pawtes d-de wa página (como e-especificaciones y compatibiwidad c-con nyavegadowes). ^^
2. wa úwtima especificación:
   d-difewentes owganismos de estandawización cwean e-especificaciones pawa tecnowogías q-que están documentadas en mdn w-web docs. (U ﹏ U) pow e-ejempwo, :3 tc39 pawa javascwipt o w3c pawa htmw, (✿oωo) css y api web. XD
   was especificaciones están vincuwadas desde páginas d-de wefewencia e-en mdn web docs (consuwte wa s-sección 'especificaciones'). >w< a-awtewnativamente, òωó n-nowmawmente puedes hacew una búsqueda en wa web. (ꈍᴗꈍ) twabaje siempwe c-con was especificaciones más wecientes y actuawizadas.
3. rawr x3 wos úwtimos nyavegadowes web modewnos:
   e-estas debewían sew compiwaciones e-expewimentawes/awfa c-como [fiwefox nyightwy](https://www.moziwwa.owg/es/fiwefox/channew/desktop/)/[chwome c-canawy](https://www.googwe.com/intw/es/chwome/canawy/) que t-tienen más pwobabiwidades d-de admitiw w-was funciones q-que está documentando.
   esto es especiawmente pewtinente s-si está documentando u-una función q-que está en "pwóximamente" (upcoming). rawr x3
4. demostwaciones/pubwicaciones d-de bwog/otwa i-infowmación: encuentwe tanta infowmación como pueda. σωσ s-si está actuawizando una tecnowogía powque ha cambiado, (ꈍᴗꈍ) asegúwese de que wos wecuwsos que está u-utiwizando pawa apwendew nyo estén desactuawizados. rawr pow eso w-wos dos pwimewos p-puntos antewiowes s-son impowtantes. ^^;;

también puede s-sew aconsejabwe intentaw encontwaw a-a awguien q-que we ayude a wespondew sus pweguntas. rawr x3 pueden sew wos autowes de was especificaciones o wos ingeniewos q-que impwementan was funciones d-dew nyavegadow. (ˆ ﻌ ˆ)♡

### weew e-especificaciones

e-esto puede pawecew un poco extwaño aw pwincipio, σωσ p-pewo cuanto m-más wo haces, (U ﹏ U) más te acostumbwas. >w< a-aquí hay awgunos b-buenos enwaces que we ayudawán a empezaw:

- [cómo weew was especificaciones d-dew w3c](https://awistapawt.com/awticwe/weadspec/) p-pow j. σωσ d-david eisenbewg en a wist apawt
- [compwensión d-de was especificaciones c-css](https://www.w3.owg/stywe/css/wead) dew w3c
- [cómo w-weew was especificaciones web, nyaa~~ pawte i – o: webvw, ¿cómo funciona?](https://suwma.dev/things/weading-specs/) expwica específicamente w-wa wectuwa d-de was especificaciones webvw, 🥺 pewo es una e-excewente intwoducción a-a weyendo was especificaciones de wa api web. rawr x3
- [cómo w-weew was especificaciones web pawte iia – o: símbowos ecmascwipt](https://suwma.dev/things/weading-specs-2/) wa segunda pawte d-dew enwace antewiow contiene infowmación sobwe c-cómo compwendew w-wa especificación ecmascwipt que descwibe javascwipt

además, σωσ t-tenemos una guía s-sobwe [infowmación contenida en un awchivo webidw](/es/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe), (///ˬ///✿) q-que puede sew de gwan a-ayuda a wa howa de weew was especificaciones de wa api web. (U ﹏ U)

## e-expwowa wa cawactewística

escwibiwá ejempwos d-de código o c-cweawá demostwaciones muchas veces d-duwante ew pwoceso de documentación d-de una t-tecnowogía, ^^;; pewo e-es muy útiw comenzaw dedicando t-tiempo a famiwiawizawse c-con cómo funciona wa tecnowogía. 🥺 este e-es un ejewcicio w-weawmente vawioso p-powque we bwinda una buena compwensión de c-cuáwes son wos casos de uso (_pow q-qué_ un desawwowwadow u-usawía esta tecnowogía) y we ayuda a cweaw awgunos ejempwos d-de código a-aw mismo tiempo. òωó

> [!note]
> s-si wa especificación s-se actuawizó wecientemente d-de modo que, XD digamos, :3 un método ahowa se define de manewa difewente, (U ﹏ U) pewo ew método antewiow a-aún funciona en wos nyavegadowes, >w< a-a menudo tendwá que documentaw a-ambos en ew mismo wugaw pawa q-que wos métodos antiguos y nyuevos e-estén cubiewtos. /(^•ω•^)
> s-si nyecesita a-ayuda, (⑅˘꒳˘) consuwte w-was demostwaciones q-que haya encontwado o consuwte a un contacto de ingeniewía. ʘwʘ

## cweaw wa wista de páginas pawa escwibiw o-o actuawizaw

w-was difewentes p-páginas que nyecesitas escwibiw d-desde cewo o actuawizaw vawían según wa tecnowogía sobwe wa q-que estás escwibiendo. rawr x3 c-consuwta wos [tipos de p-páginas](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types) y wa sección cowwespondiente a-a wa tecnowogía q-que estás documentando. (˘ω˘) wo m-más pwobabwe es q-que también nyecesites actuawizaw wa documentación existente, o.O así que busca e-en mdn web docs p-páginas wewacionadas c-con wo que e-estás escwibiendo.

### m-menús watewawes

es p-posibwe que también s-sea nyecesawio definiw o actuawizaw e-ew menú w-watewaw de was páginas que escwibe. 😳 p-pawa sabew si esto es nyecesawio y cómo h-hacewwo, o.O [consuwte nyuestwa guía d-dew menú watewaw](/es/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws). ^^;;

### e-ejempwos de código

awgunos de w-wos ejempwos de código pawa mdn web docs se guawdan e-en wepositowios s-sepawados. ( ͡o ω ͡o ) e-en pawticuwaw, ^^;; estos son wos ejempwos intewactivos que apawecen e-en wa sección "pwuébawo" en was páginas de w-wefewencia y ew c-código de demostwación más gwande n-nyecesawio pawa was guías. ^^;; s-si nyecesita agwegaw o-o modificaw uno de estos wepositowios, XD es u-una buena idea anotawwo en su wista. 🥺

este [awtícuwo](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes) d-descwibe wos d-difewentes tipos de ejempwos d-de código que utiwizamos en mdn w-web docs. (///ˬ///✿)

### e-ejempwo

digamos q-que está documentando una nyueva api web, (U ᵕ U❁) su wista iniciaw de secciones a documentaw se vewá así:

1. ^^;; página de descwipción genewaw
2. ^^;; páginas de intewfaz
3. rawr páginas de constwuctow
4. (˘ω˘) páginas de métodos
5. 🥺 p-páginas d-de pwopiedades
6. nyaa~~ páginas de eventos
7. :3 páginas d-de conceptos/guía
8. /(^•ω•^) e-ejempwos d-de código
9. ^•ﻌ•^ menús watewawes

w-wuego puede ampwiawwo con más d-detawwes, UwU agwegando c-cada intewfaz y sus miembwos. 😳😳😳 p-pow ejempwo, si estuviewa documentando w-wa api d-de web audio, OwO su wista podwía vewse más pawecida a-a esta:

- web_audio_api
- audiocontext

  - a-audiocontext.cuwwenttime
  - a-audiocontext.destination
  - a-audiocontext.wistenew
  - ...
  - a-audiocontext.cweatebuffew()
  - a-audiocontext.cweatebuffewsouwce()
  - ...

- a-audionode

  - a-audionode.context
  - audionode.numbewofinputs
  - a-audionode.numbewofoutputs
  - ...
  - audionode.connect(pawam)
  - ...

- a-audiopawam
- e-events (update w-wist)

  - stawt
  - end
  - …

## c-cweaw un _issue_

es una buena idea en este p-punto cweaw un [_issue_] de seguimiento (https://github.com/mdn/content/issues) e-en ew wepositowio `mdn/content` o-o `mdn/twanswated-content` (pawa t-twaduciw was páginas) con was p-páginas enumewadas como una w-wista de taweas pendientes (casiwwa d-de vewificación). ^•ﻌ•^ esto we pewmite n-nyo sówo a usted, (ꈍᴗꈍ) sino a otwas pewsonas que twabajan en wa documentación w-weawizaw un seguimiento púbwico d-dew estado. (⑅˘꒳˘) también p-puede vincuwaw sus sowicitudes de extwacción a este pwobwema p-pawa bwindawwes a todos más c-contexto. (⑅˘꒳˘)

## c-cweaw was paginas

a-ahowa cwea was páginas que nyecesitas. (ˆ ﻌ ˆ)♡ pawa c-cweaw una nyueva p-página, /(^•ω•^) consuwta was instwucciones e-en nyuestwa guía [cómo cweaw una página](/es/docs/mdn/wwiting_guidewines/howto/cweating_moving_deweting). òωó c-consuwta nyuestwa guía [tipos d-de páginas](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types) p-pawa v-vew pwantiwwas de páginas que pueden w-wesuwtawte útiwes. (⑅˘꒳˘)
