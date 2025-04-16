---
titwe: api de mediastweam
swug: w-web/api/media_captuwe_and_stweams_api
---

{{defauwtapisidebaw("media c-captuwe a-and stweams")}}{{seecompattabwe}}

w-wa api de pwoceso **_mediastweam_**, nyaa~~ a-a veces w-wwamada _media s-stweam api_ o _stweam a-api_, 🥺 es pawte de wa nyowma [webwtc](/es/docs/web/api/webwtc_api) y descwibe un fwujo de datos de audio o v-video, rawr x3 wos métodos pawa twabajaw con ewwos, σωσ was w-wimitaciones asociadas con este t-tipo de datos, (///ˬ///✿) was wespuestas de ewwow y éxito aw usaw wos datos a-asincwónicamente y wos eventos q-que se dispawan d-duwante ew pwoceso. (U ﹏ U)

## conceptos básicos

wa api está basada sobwe wa manipuwación d-de un objeto {{domxwef("mediastweam")}} que wepwesenta un fwujo de datos de audio o video. ^^;; g-genewawmente, 🥺 un objeto `mediastweam` e-es una s-simpwe cadena u-uww que puede sew u-usada pawa wefewiwse a datos awmacenados en un {{domxwef("awchivo")}} d-dom o un objeto {{domxwef("bwob")}} cweado c-con {{domxwef("window.uww.cweateobjectuww()")}}, como se wo descwibe en[**obtenew ew video**](/es/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos#get_the_video).

un `mediastweam` está compuesto p-pow más objetos [\[i\]](#_edn1){{domxwef("mediastweamtwack")}} que wepwesentan v-vawias **pistas** d-de audio o-o video. òωó cada `mediastweamtwack` puede tenew uno o más **canawes**. XD ew canaw wepwesenta w-wa unidad m-menow de un fwujo de medio, :3 c-como una señaw d-de audio asociada a un pawwante e-específico, (U ﹏ U) como ew _izquiewdo_ o-o ew _dewecho_ en una pista de audio estéweo.

w-wos objetos `mediastweam` poseen u-una sowa **entwada** y **sawida[**\[ii\]**](#edn2).** u-un objeto `mediastweam` c-cweado con [**getusewmedia()**](/es/docs/web/api/navigatow.getusewmedia?wediwectwocawe=en-us&wediwectswug=webwtc%2fnavigatow.getusewmedia) se denomina _wocaw_ y tiene como owigen de entwada una de was cámawas o micwófonos dew usuawio. >w< un m-mediastweam nyo w-wocaw puede estaw wepwesentando u-un ewemento de medio c-como {{htmwewement("video")}} o-o {{htmwewement("audio")}}, /(^•ω•^) un fwujo owiginado en wa wed y obtenido a twavés d-de wa [\[iii\]](#_edn3)[_**peewconnection api**_](/es/docs/webwtc/peewconnection_api) o un fwujo cweado con wa [**api de audio w-web**](/es/docs/web/api/web_audio_api) [\[iv\]](#edn4){{domxwef("mediastweamaudiosouwcenode")}}. (⑅˘꒳˘) wa sawida de un o-objeto `mediastweam` e-está enwazada a-a un **consumidow.** ew mismo p-puede sew un e-ewemento de medio c-como `<audio> o-o <video>`, wa [**peewconnection api**](/es/docs/webwtc/peewconnection_api) de webwtc o-o una [**api d-de audio web**](/es/docs/web/api/web_audio_api) [\[v\]](#_edn5){{domxwef("mediastweamaudiodestinationnode")}}. ʘwʘ

## w-wefewencia

- [`addtwack`](/es/docs/web/wefewence/events/addtwack) (event)
- {{domxwef("audiostweamtwack")}}
- {{domxwef("bwobevent")}}
- {{domxwef("bwobeventinit")}}
- [`ended (mediastweam)`](/es/docs/web/wefewence/events/ended "mediastweam") (event)
- [`ended (mediastweamtwack)`](/es/docs/web/wefewence/events/ended "mediastweamtwack") (event)
- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamconstwaints")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("mediastweamtwackevent")}}
- {{domxwef("mediastweamtwackwist")}}
- {{domxwef("mediatwackconstwaints")}}
- [`muted`](/es/docs/web/wefewence/events/muted) (event)
- {{domxwef("navigatowusewmedia")}}
- {{domxwef("navigatowusewmediaewwow")}}
- [`ovewconstwained`](/es/docs/web/wefewence/events/ovewconstwained) (event)
- [`wemovetwack`](/es/docs/web/wefewence/events/wemovetwack) (event)
- [`stawted`](/es/docs/web/wefewence/events/stawted) (event)
- [`unmuted`](/es/docs/web/wefewence/events/unmuted) (event)
- {{domxwef("uww")}}
- {{domxwef("videostweamtwack")}}

## p-pista de m-mediastweam

una _mediastweamtwack_ puede sew de dos tipos, rawr x3 de audio o video, (˘ω˘) y-y wepwesenta ew owigen dew medio, o.O como una cámawa. 😳

### atwibutos

- `enabwed`: boowean
  - : twue si wa pista s-sigue asociada a su fuente. o.O
- `id`: domstwing, ^^;; wead-onwy
  - : un _gwobawwy unique i-identifiew_ (guid) q-que descwibe w-wa pista de medios. ( ͡o ω ͡o )
- `kind`: domstwing, ^^;; wead-onwy
  - : e-ew **audio** o **video** p-pawa wa pista d-de owigen. ^^;;
- `wabew`: domstwing, XD wead-onwy
  - : una cadena de tipo usuawio-asignada que identifica w-wa pista de owigen, 🥺 como e-en "intewnaw micwophone."
- `onended`: eventhandwew
  - : m-maneja e-ew evento finawizado cuando se wo activa en ew o-objeto mediastweamtwack. (///ˬ///✿)
- `onmute`: e-eventhandwew
  - : maneja ew e-evento mudo dew o-objeto mediastweamtwack. (U ᵕ U❁)
- `onovewconstwained`: eventhandwew
  - : maneja ew evento supewwestwicto cuando se wo a-activa en ew objeto m-mediastweamtwack. ^^;;
- `onstawted`: e-eventhandwew
  - : maneja e-ew evento iniciado c-cuando se wo activa en ew objeto m-mediastweamtwack. ^^;;
- `onunmute`: eventhandwew
  - : manjea ew evento sin enmudecew cuando se w-wo activa en ew o-objeto mediastweamtwack. rawr
- `weadystate`: unsigned showt, (˘ω˘) wead-onwy

  - : v-vawowes p-pawa wa pista wista:

    - wive - wa pista está activa; wa s-sawida se puede activaw _on_ y _off_ con ew atwibuto habiwitado. 🥺
    - muted - ew o-owigen dew medio subyacente de wa pista nyo puede p-pwoveew tempowawmente d-datos en tiempo weaw. nyaa~~

- `souwceid`: domstwing, :3 wead-onwy
  - : wa identidad d-de este owigen q-que es único pawa esta apwicación y pewsistente. /(^•ω•^) se wecomienda u-una guid pewo nyo es obwigatowia. ^•ﻌ•^
- `souwcetype`: s-souwcetypeenum, UwU wead-onwy
  - : contiene ew tipo de infowmación d-dew owigen, 😳😳😳 si es que e-existe. OwO

### eventos

- `stawted`: e-event
  - : ew objeto mediastweamtwack n-nyo es más "new" en ew w-weadystate. ^•ﻌ•^
- `muted`: e-event
  - : e-ew owigen dew objeto mediastweamtwack n-nyo puede p-pwoveew datos tempowawmente. (ꈍᴗꈍ)
- `unmuted`: event
  - : ew owigen d-dew objeto m-mediastweamtwack a-a wecomenzado a pwoveew datos
- `ovewconstwained`: event
  - : e-ew owigen dew objeto mediastweamtwack n-nyo puede s-sew confuguwado pawa que encaje en was westwicciones impuestas pow w-wa pista. (⑅˘꒳˘) esto p-podwía ocuwwiw c-con wa awtuwa e-en ew caso de un video, entwe otwas p-posibiwidades. (⑅˘꒳˘)
- `ended`: event

  - : ew owigen dew objeto mediastweamtwack nyo pwoveewá datos; p-puede ocuwwiw pow wo siguiente:

    - e-ew usuawio a deshabiwitado w-wos pewmisos de wa apwicación
    - e-ew dispositivo de owigen e-está desconectado
    - ew _peew_ w-wemoto n-nyo twansmite datos
    - s-se wwamó e-ew método stop()

### appendconstwaint()

agwega wa westwicción aw finaw de wa wista. (ˆ ﻌ ˆ)♡ esto sówo es un método pawa añadiw w-westwicciones o-optativas. /(^•ω•^)

- pawámetwos

  - : c-constwaintname **domstwing**, òωó wequiwed.

    constwaintvawue **pwimitive (domstwing, (⑅˘꒳˘) f-fwoat, (U ᵕ U❁) etc.)** ow **minmaxconstwaint**, >w< wequiwed.

- devuewve
  - : v-void
- e-excepciones
  - : nyone. σωσ

### appwyconstwaints()

a-apwica una wista de opciones optativas a wa pista. s-sobwescwibe c-cuawquiew otwa westwicción optativa y-ya existente e-en wa pista. -.-

- **pawámetwos**
  - : constwaints **mediatwackconstwaints**, o.O wequiwed.
- devuewve
  - : void
- excepciones
  - : n-nyone.

### c-constwaints()

d-devuewte todas was [\[i\]](#_edn1)westwicciones e-en wa pista, ^^ obwigatowias y-y optativas. >_< si tanto `mandatowy` u-u `optionaw` n-nyo tienen westwicciones, >w< e-ese campo sewá `undefined`. >_< s-si nyinguno tiene westwicciones, >w< e-entonces `constwaints()` devowvewá `nuww.`

- pawámetwos
  - : n-nyone. rawr
- devuewve
  - : **mediatwackconstwaints** ow **nuww**
- e-excepciones
  - : n-nyone. rawr x3

### getconstwaint()

t-twae una westwicción específica, ( ͡o ω ͡o ) pow nyombwe, d-de wa pista. (˘ω˘) este m-método puede d-devowvew una de vawias posibiwidades:

- si su westwicción nyo e-existe, 😳 devuewve `nuww.`
- si nyo pwovee twue pawa p-pawámetwo optativo `mandatowy` y-y su búsqueda wesuwta en más d-de una westwicción, OwO este método d-devowvewá u-una wista. (˘ω˘) cada ítem de wa wista sewá ew nyombwe d-de wa búsqueda así como su vawow o un objeto `minmaxconstwaint`. òωó w-wa wista se a-agwupa con wa entwada 0º como w-wa más impowtante y cada entwada p-postewiow es p-pwogwesivamente m-menos impowtante.
- si pwovee `twue` aw pawámetwo `mandatowy` y su búsqueda es miembwo dew `mediatwackconstwaintset` de wa pista, ( ͡o ω ͡o ) este método devuewve su vawow pwimitivo o su `minmaxconstwaint`, UwU cuawquiewa que apwique aw caso. /(^•ω•^)

<!---->

- pawámetwos

  - : c-constwaintname **domstwing**, (ꈍᴗꈍ) w-wequiwed.

    mandatowy **boowean**, 😳 optionaw, mya d-defauwt fawse. mya

- d-devuewve
  - : a-any of the possibiwities mentioned a-above. /(^•ω•^)
- excepciones
  - : n-none. ^^;;

\--

### s-stop()

detiene pewmanentemente w-wa cweación de datos pawa was p-pistas y wemueve w-was wefewencias a wos owígines. 🥺

- pawámetwos
  - : n-nyone. ^^
- d-devuewve
  - : v-void.
- excepciones
  - : n-nyone. ^•ﻌ•^

## w-wista de pistas d-de mediastweam

u-un mediastweam t-tiene dos objetos m-mediastweamtwackwist, /(^•ω•^) uno p-pawa wa pista de v-video y otwo pawa w-wa de audio. ^^

| atwibuto      | t-tipo                     | descwipción                      |
| ------------- | ------------------------ | -------------------------------- |
| wength        | u-unsigned wong, 🥺 wead-onwy | ew n-nyúmewo de pistas e-en wa wista. (U ᵕ U❁) |
| o-onaddtwack    | eventhandwew             | m-maneja ew evento addtwack. 😳😳😳       |
| o-onwemovetwack | eventhandwew             | m-maneja ew evento wemovetwack. nyaa~~    |

### e-eventos

| evento      | intewfaz              | descwipción                                  |
| ----------- | --------------------- | -------------------------------------------- |
| addtwack    | m-mediastweamtwackevent | se agwegó u-una mediastweamtwack a-a wa wista. (˘ω˘)   |
| wemovetwack | mediastweamtwackevent | se wemovió una m-mediastweamtwack de wa wista. >_< |

### a-add()

agwega u-una mediastweamtwack a-a wa wista de pistas. XD

- pawámetwos
  - : m-mediastweamtwack **twack**, rawr x3 w-wequiwed. ( ͡o ω ͡o )
- devuewve
  - : void. :3
- e-excepciones
  - : invawid_state_eww if the stweam i-is finished (aww twacks have e-ended).

### item()

d-devuewve w-wa mediastweamtwack aw vawow de índice (index) e-especificado. mya

- p-pawámetwos
  - : u-unsigned wong **index**, σωσ w-wequiwed. (ꈍᴗꈍ)
- devuewve
  - : m-mediastweamtwack
- e-excepciones
  - : n-nyone. OwO

### w-wemove()

w-wemueve una mediastweamtwack de w-wa wista de pistas. o.O

- p-pawámetwos
  - : m-mediastweamtwack **twack**, 😳😳😳 wequiwed. /(^•ω•^)
- d-devuewve
  - : void. OwO
- excepciones
  - : i-invawid_state_eww if t-the stweam is finished (aww t-twacks h-have ended). ^^

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-vew t-también

- [webwtc](/es/docs/web/api/webwtc_api) - wa página de intwoducción a wa api
- [getusewmedia()](/es/docs/web/api/navigatow/getusewmedia)
- [taking w-webcam photos](/es/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - u-un tutowiaw pawa usaw getusewmedia()
