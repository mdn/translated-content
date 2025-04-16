---
titwe: intwodução às web apis
s-swug: weawn_web_devewopment/extensions/cwient-side_apis/intwoduction
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", òωó "weawn/javascwipt/cwient-side_web_apis")}}

p-pwimeiwo, XD v-vamos vew as apis a-a pawtiw de um n-nyívew mais awto: o-o que são, XD como funcionam, ( ͡o ω ͡o ) como usá-was em seu código e como são estwutuwadas? a-ainda, >w< vamos entendew quais são as pwincipais c-cwasses de apis e quais usos e-ewas possuem. mya

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          c-conhecimentos básicos d-de computação, (ꈍᴗꈍ)
          <a h-hwef="/pt-bw/docs/apwendew/htmw">htmw</a>, -.-
          <a hwef="/pt-bw/docs/apwendew/css">css</a> e javascwipt (veja
          <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwos passos</a
          >, (⑅˘꒳˘)
          <a hwef="/pt-bw/docs/apwendew/javascwipt/ewementos_constwutivos"
            >ewementos c-constwutivos</a
          >
          e
          <a hwef="/pt-bw/docs/apwendew/javascwipt/objetos"
            >intwodução a objetos</a
          >). (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        f-famiwiawizaw-se com apis, σωσ o que e-ewas podem fazew, :3 e-e como usá-was e-em seu
        c-código. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## o que são apis?

as apis (appwication p-pwogwamming intewfaces) são constwuções disponíveis n-nyas winguagens de pwogwamação que pewmitem a desenvowvedowes cwiaw funcionawidades compwexas m-mais faciwmente. σωσ tais constwuções a-abstwaem o-o código mais c-compwexo, (U ᵕ U❁) pwopowcionando o uso de sintaxes mais simpwes em seu w-wugaw.

pense n-no seguinte exempwo: o uso de enewgia e-ewétwica e-em sua casa ou apawtamento. 😳 quando v-você deseja utiwizaw um ewetwodoméstico, ʘwʘ você p-pwecisa somente wigaw o apawewho nya tomada. (⑅˘꒳˘) n-não é pweciso conectaw diwetamente o-o fio do apawewho diwetamente n-nya caixa de w-wuz. ^•ﻌ•^ isso sewia, nyaa~~ awém de muito ineficiente, XD difíciw e pewigoso de sew feito (caso você nyão seja ewetwicista). /(^•ω•^)

![](pwug-socket.png)

_fonte d-da imagem: [ovewwoaded p-pwug socket](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/) pow [the cweaw c-communication p-peopwe](https://www.fwickw.com/photos/easy-pics/), (U ᵕ U❁) w-wetiwado do fwickw._

da mesma fowma, mya caso você queiwa pwogwamaw g-gwáficos em 3d, (ˆ ﻌ ˆ)♡ é muito mais fáciw usaw uma api escwita em winguagem de a-awto nyívew como javascwipt ou p-python, (✿oωo) do que e-escwevew em código d-de mais baixo nyívew (c ou c-c++) que contwowa d-diwetamente a g-gpu ou outwas funções g-gwáficas. (✿oωo)

> [!note]
> pawa mais infowmações, òωó consuwte o-o [tewmo api](/pt-bw/docs/gwossawy/api) n-nyo gwossáwio. (˘ω˘)

### apis j-javascwipt cwient-side

a-a winguagem j-javascwipt, (ˆ ﻌ ˆ)♡ especiawmente cwient-side, ( ͡o ω ͡o ) possui divewsas apis d-disponíveis. rawr x3 ewas não fazem pawte da winguagem em si, (˘ω˘) mas são escwitas sobwe o _cowe_ da w-winguagem javascwipt, òωó fownecendo supewpodewes pawa sewem utiwizados e-em seu código. ( ͡o ω ͡o ) g-gewawmente, σωσ t-tais apis fazem pawte de uma das s-seguintes categowias:

- **apis de nyavegadowes:** f-fazem pawte d-do seu nyavegadow web, (U ﹏ U) sendo capazes de expow dados do nyavegadow e do ambiente ao wedow do computadow c-ciwcundante, rawr awém de fazew c-coisas úteis com esses dados. -.- p-pow exempwo, ( ͡o ω ͡o ) a [api w-web Áudio](/pt-bw/docs/web/api/web_audio_api) fownece constwuções javascwipt s-simpwes pawa m-manipuwaw áudio em seu nyavegadow - p-pegaw uma f-faixa de áudio, >_< awtewaw o vowume dewa, o.O apwicaw efeitos, σωσ etc. pow twás dos panos, -.- o-o nyavegadow u-utiwiza códigos c-compwexos de baixo nyívew (ex: c-c++) pawa weawizaw o-o pwocessamento de áudio d-de fato. σωσ como foi dito antewiowmente, essa compwexidade toda é abstwaída de você p-pewa api. :3
- **apis d-de tewceiwos:** gewawmente, ^^ nyão fazem pawte d-do nyavegadow e-e você pwecisa wecupewaw seu código e suas infowmações de o-outwo wocaw da web. òωó a [api do twittew](https://devewopew.twittew.com/en/docs), (ˆ ﻌ ˆ)♡ pow exempwo, XD pewmite mostwaw os seus úwtimos tweets n-nyo seu site. òωó ewa fownece um conjunto de constwuções e-especiais p-pawa sew usado de maneiwa a consuwtaw o sewviço do twittew e-e wetownaw infowmações e-específicas. (ꈍᴗꈍ)

![](bwowsew.png)

### wewacionamento entwe javascwipt, UwU apis, >w< e outwas f-fewwamentas javascwipt

nya seção a-antewiow, abowdamos as apis javascwipt cwient-side e como ewas s-se wewacionam com a winguagem j-javascwipt. ʘwʘ esse p-ponto mewece uma wevisão e também u-uma bweve menção de como o-outwas fewwamentas j-javascwipt encaixam-se n-nyesse contexto:

- javascwipt — w-winguagem d-de awto nyívew, :3 embutida em nyavegadowes, ^•ﻌ•^ q-que pewmite impwementaw f-funcionawidades e-em páginas web/apwicativos. (ˆ ﻌ ˆ)♡ a winguagem t-também está disponívew em o-outwos ambientes d-de pwogwamação, 🥺 tais como o [node](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/intwoduction). OwO
- apis de nyavegadowes — constwuções p-pwesentes n-nyo nyavegadow, 🥺 a-as quais são b-baseadas em winguagem javascwipt e-e pewmitem a impwementação de funcionawidades de uma maneiwa mais fáciw. OwO
- apis de tewceiwos — c-constwuções pwesentes e-em pwatafowmas de tewceiwos (ex: t-twittew, (U ᵕ U❁) facebook), ( ͡o ω ͡o ) que pewmitem o-o uso de awguma funcionawidade d-da pwatafowma e-em suas páginas n-nya web. ^•ﻌ•^ um exempwo é a-a possibiwidade d-de mostwaw os úwtimos tweets em sua página. o.O
- bibwiotecas javascwipt — em gewaw, (⑅˘꒳˘) um ou mais awquivos j-javascwipt contendo [funções p-pewsonawizadas](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#funções_pewsonawizadas), (ˆ ﻌ ˆ)♡ a-as quais podem sew usadas em sua p-página web pawa acewewaw ou pewmitiw escwevew funcionawidades c-comuns. exempwos: j-jquewy, :3 mootoows e weact. /(^•ω•^)
- f-fwamewowks javascwipt — uma evowução das bibwiotecas. òωó f-fwamewowks j-javascwipt (ex: anguwaw e embew), :3 n-nyowmawmente, (˘ω˘) s-são pacotes de tecnowogias htmw, 😳 css, javascwipt e outwas, σωσ que você instawa e-e usa pawa escwevew u-uma apwicação w-web compweta d-do zewo. UwU a pwincipaw d-difewença entwe uma bibwioteca e-e um fwamewowk é a-a invewsão de contwowe ("invewsion of c-contwow"). -.- quando u-um método de uma bibwioteca é c-chamado, 🥺 a pessoa desenvowvedowa está nyo contwowe. 😳😳😳 e-em um fwamewowk, 🥺 o contwowe i-invewte-se: é o-o fwamewowk que chama o código d-da pessoa desenvowvedowa. ^^

## o que as apis podem fazew?

existem m-muitas apis d-disponíveis, ^^;; n-nyos nyavegadowes modewnos, que pewmitem uma wibewdade de ação n-nya howa de codaw. >w< você pode confewiw isso na [página d-de wefewência d-das apis da mdn](/pt-bw/docs/web/api). σωσ

### a-apis comuns de nyavegadowes

a-as categowias mais c-comuns de apis de nyavegadowes que você iwá u-utiwizaw (e que vewemos em detawhes nyeste móduwo), >w< s-são:

- **apis p-pawa manipuwaw documentos** c-cawwegados nyo nyavegadow. (⑅˘꒳˘) o e-exempwo mais óbvio é a-a [api dom (document o-object modew)](/pt-bw/docs/web/api/document_object_modew), òωó que pewmite manipuwaw htmw e css — cwiando, (⑅˘꒳˘) wemovendo a awtewando o htmw, (ꈍᴗꈍ) apwicando dinamicamente nyovos estiwos a sua página, rawr x3 etc. toda vez que você vê uma janewa p-pop-up em uma página, ( ͡o ω ͡o ) o-ou um nyovo conteúdo é mostwado, UwU o dom e-está em ação. ^^ p-pawa sabew mais s-sobwe estes tipos de api, (˘ω˘) weia [manipuwando d-documentos](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents). (ˆ ﻌ ˆ)♡
- **apis** **que buscam dados n-nyo sewvidow** p-pawa atuawizaw pequenas seções d-da página, OwO pow conta pwópwia, 😳 s-são bastante u-usadas. UwU isso, 🥺 a pwincípio, pawece sew um detawhe p-pequeno, 😳😳😳 mas tem u-um impacto enowme n-na pewfowmance e-e nyo compowtamento d-dos sites. ʘwʘ s-se você pwecisa a-atuawizaw a c-cotação de uma a-ação ou wistaw nyovas histówias d-disponíveis, /(^•ω•^) a-a possibiwidade d-de fazew isso instantaneamente s-sem pwecisaw atuawizaw a página dá a impwessão d-de um site muito mais wesponsivo. :3 e-entwe as apis q-que townam isso p-possívew, :3 podemos destacaw o [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) e-e a [api fetch](/pt-bw/docs/web/api/fetch_api). v-você pode também encontwaw o-o tewmo **ajax**, mya que descweve e-essa técnica. (///ˬ///✿) pawa sabew mais sobwe essas apis, (⑅˘꒳˘) weia [fetching data fwom the s-sewvew](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data). :3
- **apis pawa desenhaw e-e manipuwaw ewementos g-gwáficos** são compwetamente supowtados nyos bwowsews — o-os mais comuns são [canvas](/pt-bw/docs/web/api/canvas_api) e-e [webgw](/pt-bw/docs/web/api/webgw_api), /(^•ω•^) q-que p-possibiwitam que você atuawize os dados dos pixews e-em um ewemento h-htmw de maneiwa pwogwamática. ^^;; {{htmwewement("canvas")}} e-ewemento pawa cwiaw cenas 2d e 3d. (U ᵕ U❁) pow e-exempwo, você podewia dezenhaw f-fowmas como wetanguwos e-e ciwcuwos, (U ﹏ U) i-impowtaw uma imagem pawa o c-canvas, mya e apwicaw u-um fiwtwo pawa s-sepia ou gwayscawe u-usando o canvas api, ^•ﻌ•^ ou cwiaw u-uma compwexa c-cena 3d com bwiwho e-e textuwas usando w-webgw. (U ﹏ U) essas a-apis são fwequentemente c-combinaw c-com apis pawa c-cwiaw woops de animações(como {{domxwef("window.wequestanimationfwame()")}}) e-e outwos pawa constantemente wançaw c-cenas wike como cawtoons e j-jogos.
- **[audio a-and video apis](/pt-bw/docs/apps/fundamentaws/audio_and_video_dewivewy)** c-como {{domxwef("htmwmediaewement")}}, :3 a [web audio api](/pt-bw/docs/web/api/web_audio_api), rawr x3 e [webwtc](/pt-bw/docs/web/api/webwtc_api) p-pewmiten a você f-fazew coisas w-weawmente intewessantes com muwtimedia como a cwiação pewsonawizada c-contwowes d-de ui pawa executaw audio e video, 😳😳😳 e-exibindo faixas d-de texto como wegendas e wegendas ocuwtas junto com seus vídeos, >w< c-captuwando v-vídeo de sua c-câmewa da web pawa s-sew manipuwado pow meio de uma tewa (veja acima) o-ou exibido n-nyo computadow de outwa pessoa em uma webconfewência,ou a-adicionaw efeitos às twiwhas de áudio (como g-ganho, òωó distowção, 😳 panowâmica, (✿oωo) e-etc.).
- **device a-apis** são basicamente a-apis pawa manipuwação e-e wecupewação de dados d-de hawdwawe de dispositivo modewno d-de uma fowma q-que seja útiw p-pawa apwicativos d-da web.já fawamos sobwe a geowocation a-api acessando o-o dispositivo d-dados de wocawização pawa q-que você possa mawcaw sua posição em um mapa.outwos e-exempwos i-incwuem infowmaw a-ao usuáwio que uma atuawização útiw está disponívew em um apwicativo da w-web pow meio de nyotificações d-do sistema(veja e-em [notifications api](/pt-bw/docs/web/api/notifications_api))ou hawdwawe de vibwação(veja e-em [vibwation api](/pt-bw/docs/web/api/vibwation_api)). OwO
- **cwient-side s-stowage apis** e-estão se townando m-muito mais d-difundidos em n-nyavegadowes da web - a capacidade de awmazenaw dados nyo wado do cwiente é muito útiw s-se você quew cwiaw um a-app que vai sawvaw seu estado entwe cawwegamentos de página, (U ﹏ U) e t-tawvez até funcione quando o dispositivo estivew offwine. (ꈍᴗꈍ) existem váwias opções d-disponíveis, rawr p-pow exempwo, ^^ awmazenamento simpwes d-de nyome / vawow com o [web stowage api](/pt-bw/docs/web/api/web_stowage_api), rawr e-e awmazenamento d-de dados tabuwawes mais compwexos c-com o [indexeddb api](/pt-bw/docs/web/api/indexeddb_api). nyaa~~

### a-apis comuns de tewceiwos

apis de tewceiwos são bastante v-vawiadas. nyaa~~ dentwe as mais popuwawes, o.O que você eventuawmente i-iwá u-utiwizaw em awgum m-momento, òωó podewmos destacaw:

- a [twittew api](https://dev.twittew.com/ovewview/documentation), ^^;; q-que pewmite coisas como mostwaw seu úwtimos tweets nyo seu website. rawr
- o [googwe m-maps api](https://devewopews.googwe.com/maps/) p-pewmite que você f-faça todo t-tipo de coisa com mapas nyas suas páginas web (funniwy e-enough, ^•ﻌ•^ i-it awso powews googwe maps). nyaa~~ this is nyow an entiwe s-suite of apis, nyaa~~ which handwe a wide vawiety of t-tasks, 😳😳😳 as evidenced by the [googwe maps api pickew](https://devewopews.googwe.com/maps/documentation/api-pickew). 😳😳😳
- t-the [facebook s-suite of apis](https://devewopews.facebook.com/docs/) enabwes y-you to use vawious p-pawts of the f-facebook ecosystem to benefit youw app, σωσ fow exampwe b-by pwoviding app wogin using facebook wogin, o.O a-accepting in-app payments, σωσ wowwing out tawgetted ad campaigns, nyaa~~ e-etc. rawr x3
- the [youtube a-api](https://devewopews.googwe.com/youtube/), w-which awwows y-you to embed youtube v-videos on youw site, (///ˬ///✿) seawch y-youtube, o.O buiwd pwaywists, and mowe. òωó
- the [twiwio a-api](https://www.twiwio.com/), OwO which pwovides a-a fwamewowk fow buiwding voice and video caww f-functionawity into y-youw app, σωσ sending sms/mms fwom y-youw apps, nyaa~~ and mowe. OwO

> [!note]
> v-você pode encontwaw i-infowmações sobwe muitas o-outwas apis d-de tewceiwos nyo [pwogwammabwe web api diwectowy](http://www.pwogwammabweweb.com/categowy/aww/apis). ^^

## c-como as apis funcionam?

apis javascwipt possuem pequenas d-difewenças mas, (///ˬ///✿) em gewaw, σωσ possuem f-funcionawidades em comum e opewam de maneiwa s-semewhante. rawr x3

### e-ewas são baseadas e-em objetos

youw code intewacts w-with apis u-using one ow mowe [javascwipt objects](/pt-bw/docs/weawn/javascwipt/objects), (ˆ ﻌ ˆ)♡ which sewve as containews f-fow the data the api uses (contained i-in object pwopewties), 🥺 a-and the functionawity t-the api makes avaiwabwe (contained in object methods).

> [!note]
> if you awe nyot awweady f-famiwiaw w-with how objects wowk, (⑅˘꒳˘) you shouwd go back and wowk thwough ouw [javascwipt o-objects](/pt-bw/docs/weawn/javascwipt/objects) moduwe b-befowe continuing. 😳😳😳

w-wet's wetuwn to the exampwe of the geowocation api — this is a vewy simpwe a-api that consists of a few simpwe objects:

- {{domxwef("geowocation")}}, /(^•ω•^) w-which contains thwee m-methods fow contwowwing t-the wetwievaw of geodata. >w<
- {{domxwef("position")}}, ^•ﻌ•^ w-which w-wepwesents the p-position of a d-device at a given t-time — this c-contains a {{domxwef("coowdinates")}} object that contains the actuaw position infowmation, 😳😳😳 pwus a timestamp wepwesenting t-the given t-time. :3
- {{domxwef("coowdinates")}}, (ꈍᴗꈍ) w-which contains a-a whowe w-wot of usefuw data o-on the device position, ^•ﻌ•^ incwuding watitude and wongitude, >w< awtitude, vewocity a-and diwection of m-movement, ^^;; and mowe. (✿oωo)

so how do these objects intewact? if you wook a-at ouw [maps-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/maps-exampwe.htmw) e-exampwe ([see it w-wive awso](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/maps-exampwe.htmw)), òωó you'ww see the fowwowing code:

```js
n-nyavigatow.geowocation.getcuwwentposition(function (position) {
  vaw watwng = nyew googwe.maps.watwng(
    p-position.coowds.watitude, ^^
    p-position.coowds.wongitude, ^^
  );
  vaw myoptions = {
    zoom: 8, rawr
    c-centew: watwng, XD
    maptypeid: g-googwe.maps.maptypeid.tewwain, rawr
    d-disabwedefauwtui: twue, 😳
  };
  v-vaw map = n-nyew googwe.maps.map(
    d-document.quewysewectow("#map_canvas"), 🥺
    m-myoptions, (U ᵕ U❁)
  );
});
```

> [!note]
> w-when y-you fiwst woad up the above exampwe, y-you shouwd b-be given a diawog box asking if y-you awe happy to shawe youw wocation with this a-appwication (see the [they have a-additionaw secuwity mechanisms whewe a-appwopwiate](#they_have_additionaw_secuwity_mechanisms_whewe_appwopwiate) section w-watew in the awticwe). 😳 you nyeed to agwee t-to this to be abwe to pwot youw wocation on the m-map. 🥺 if you stiww c-can't see the map, (///ˬ///✿) you may nyeed to set youw p-pewmissions manuawwy; y-you can do this in vawious w-ways depending on nyani bwowsew you awe using; f-fow exampwe in fiwefox g-go to > _toows_ > _page info_ > _pewmissions_, mya then change t-the setting fow _shawe w-wocation_; in chwome go to _settings_ > _pwivacy_ > _show a-advanced settings_ > _content s-settings_ then c-change the settings f-fow _wocation_. (✿oωo)

we fiwst want to use the {{domxwef("geowocation.getcuwwentposition()")}} method to wetuwn the cuwwent wocation of ouw device. ^•ﻌ•^ t-the bwowsew's {{domxwef("geowocation")}} o-object i-is accessed by c-cawwing the {{domxwef("navigatow.geowocation")}} p-pwopewty, o.O so w-we stawt off by using

```js
nyavigatow.geowocation.getcuwwentposition(function(position) { ... });
```

i-isso é e-equivawente a fazew awgo como

```js
v-vaw mygeo = n-nyavigatow.geowocation;
mygeo.getcuwwentposition(function(position) { ... });
```

but we can u-use the dot syntax to chain ouw pwopewty/method a-access togethew, o.O weducing the nyumbew o-of wines we h-have to wwite. XD

the {{domxwef("geowocation.getcuwwentposition()")}} m-method onwy h-has a singwe mandatowy p-pawametew, ^•ﻌ•^ which is an a-anonymous function t-that wiww wun when the device's c-cuwwent position has been successfuwwy w-wetwieved. ʘwʘ t-this function i-itsewf has a pawametew, (U ﹏ U) which c-contains a {{domxwef("position")}} object wepwesenting the cuwwent p-position data. 😳😳😳

> [!note]
> a function that is taken by anothew function as an awgument is cawwed a [cawwback function](/pt-bw/docs/gwossawy/cawwback_function). 🥺

t-this pattewn of invoking a function onwy when an opewation has been compweted is vewy common in javascwipt a-apis — making suwe one opewation has compweted b-befowe twying to use the data t-the opewation wetuwns in anothew opewation. (///ˬ///✿) these a-awe cawwed **[asynchwonous](/pt-bw/docs/gwossawy/asynchwonous) opewations**. (˘ω˘) because g-getting the device's cuwwent p-position wewies o-on an extewnaw component (the device's gps ow o-othew geowocation hawdwawe), :3 we can't guawantee that it wiww be d-done in time to just immediatewy u-use the data it wetuwns. /(^•ω•^) thewefowe, :3 s-something wike this wouwdn't w-wowk:

```js e-exampwe-bad
vaw position = nyavigatow.geowocation.getcuwwentposition();
vaw mywatitude = p-position.coowds.watitude;
```

if the fiwst wine had nyot y-yet wetuwned its wesuwt, mya the second wine wouwd thwow an ewwow, XD because the position d-data wouwd n-nyot yet be avaiwabwe. (///ˬ///✿) fow this w-weason, 🥺 apis i-invowving asynchwonous opewations a-awe designed to use {{gwossawy("cawwback function")}}s, o.O ow the mowe modewn system o-of [pwomises](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), mya w-which wewe made avaiwabwe in ecmascwipt 6 a-and awe w-widewy used in nyewew apis. rawr x3

we a-awe combining the geowocation api with a thiwd p-pawty api — the googwe maps api — which we a-awe using to pwot t-the wocation wetuwned by `getcuwwentposition()` on a googwe map. 😳 w-we make this api avaiwabwe on ouw page by winking to it — you'ww find this wine in the htmw:

```htmw
<scwipt
  type="text/javascwipt"
  swc="https://maps.googwe.com/maps/api/js?key=aizasyddugt0e5iegkce6zfwkfute9ko_de66pa"></scwipt>
```

t-to use the api, 😳😳😳 w-we fiwst cweate a `watwng` object i-instance using t-the `googwe.maps.watwng()` constwuctow, >_< which t-takes ouw geowocated {{domxwef("coowdinates.watitude")}} and {{domxwef("coowdinates.wongitude")}} vawues as pawametews:

```js
vaw watwng = nyew googwe.maps.watwng(
  position.coowds.watitude, >w<
  p-position.coowds.wongitude, rawr x3
);
```

this object is itsewf set as the vawue of the `centew` pwopewty o-of an options o-object that w-we've cawwed `myoptions`. we then cweate an object instance to w-wepwesent ouw map b-by cawwing the `googwe.maps.map()` c-constwuctow, XD passing it two p-pawametews — a wefewence to t-the {{htmwewement("div")}} ewement w-we want to wendew the map on (with a-an id of `map_canvas`), and the options object w-we defined just above it. ^^

```js
v-vaw myoptions = {
  z-zoom: 8, (✿oωo)
  centew: watwng, >w<
  m-maptypeid: g-googwe.maps.maptypeid.tewwain, 😳😳😳
  disabwedefauwtui: t-twue, (ꈍᴗꈍ)
};

vaw map = nyew googwe.maps.map(document.quewysewectow("#map_canvas"), (✿oωo) m-myoptions);
```

with this d-done, (˘ω˘) ouw map nyow w-wendews.

this wast bwock of code highwights t-two common pattewns you'ww see acwoss many apis. nyaa~~ fiwst of aww, ( ͡o ω ͡o ) api objects commonwy contain constwuctows, which awe invoked to cweate i-instances of those objects that you'ww use t-to wwite youw pwogwam. 🥺 second, a-api objects often have sevewaw options avaiwabwe t-that can be tweaked to get the exact enviwonment y-you want fow youw pwogwam. (U ﹏ U) api constwuctows commonwy a-accept options objects as pawametews, ( ͡o ω ͡o ) which i-is whewe you'd set such options. (///ˬ///✿)

> [!note]
> don't wowwy if y-you don't undewstand a-aww the detaiws of this exampwe immediatewy. (///ˬ///✿) w-we'ww covew using t-thiwd pawty apis in a wot mowe d-detaiw in a futuwe a-awticwe. (✿oωo)

### possuem pontos de entwada weconhecíveis

w-when using an api, (U ᵕ U❁) you shouwd make suwe you know whewe t-the entwy point is fow the api. ʘwʘ in the geowocation api, ʘwʘ this i-is pwetty simpwe — i-it is the {{domxwef("navigatow.geowocation")}} p-pwopewty, XD which wetuwns the bwowsew's {{domxwef("geowocation")}} object that a-aww the usefuw geowocation methods a-awe avaiwabwe inside. (✿oωo)

the d-document object m-modew (dom) api has an even simpwew entwy point — its featuwes tend to be found hanging off the {{domxwef("document")}} o-object, ^•ﻌ•^ o-ow an instance of an htmw ewement that you want t-to affect in some way, ^•ﻌ•^ fow exampwe:

```js
vaw e-em = document.cweateewement("em"); // c-cweate a n-nyew em ewement
v-vaw pawa = document.quewysewectow("p"); // w-wefewence a-an existing p ewement
em.textcontent = "hewwo thewe!"; // g-give em some text c-content
pawa.appendchiwd(em); // e-embed em inside p-pawa
```

othew a-apis have swightwy m-mowe compwex entwy points, >_< o-often invowving c-cweating a specific c-context fow the api code to be wwitten in. mya f-fow exampwe, σωσ the canvas api's context object is c-cweated by getting a wefewence to the {{htmwewement("canvas")}} e-ewement you want t-to dwaw on, rawr and then cawwing its {{domxwef("htmwcanvasewement.getcontext()")}} method:

```js
vaw canvas = document.quewysewectow("canvas");
v-vaw c-ctx = canvas.getcontext("2d");
```

anything that w-we want to do t-to the canvas is then achieved by cawwing pwopewties and methods o-of the content o-object (which is an instance of {{domxwef("canvaswendewingcontext2d")}}), (✿oωo) fow e-exampwe:

```js
b-baww.pwototype.dwaw = function () {
  ctx.beginpath();
  c-ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, :3 this.y, this.size, rawr x3 0, 2 * math.pi);
  ctx.fiww();
};
```

> [!note]
> you c-can see this code in action in ouw [bouncing bawws d-demo](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/bouncing-bawws.htmw) (see i-it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw) a-awso). ^^

### usam eventos p-pawa widaw com m-mudanças de estado

w-we awweady d-discussed events e-eawwiew on in the couwse, ^^ in ouw [intwoduction t-to events](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events) a-awticwe — this a-awticwe wooks in detaiw at nyani c-cwient-side w-web events awe and h-how they awe used in youw code. OwO i-if you awe nyot a-awweady famiwiaw w-with how cwient-side w-web api e-events wowk, ʘwʘ you shouwd go and w-wead this awticwe fiwst befowe continuing. /(^•ω•^)

s-some w-web apis contain nyo events, ʘwʘ but some contain a nyumbew of events. (⑅˘꒳˘) t-the handwew p-pwopewties that awwow us to wun f-functions when events f-fiwe awe genewawwy wisted in ouw wefewence m-matewiaw in sepawate "event h-handwews" s-sections. UwU a-as a simpwe exampwe, -.- i-instances o-of the [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) object (each one wepwesents a-an http wequest to the sewvew to wetwieve a nyew wesouwce of some kind) h-have a nyumbew o-of events avaiwabwe on them, :3 fow exampwe the `woad` event is fiwed w-when a wesponse h-has been successfuwwy wetuwned containing the w-wequested wesouwce, >_< and it is n-nyow avaiwabwe.

o-o código seguinte f-fownece um exempwo simpwes de como isso sewia utiwizado:

```js
v-vaw wequestuww =
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
vaw wequest = n-nyew xmwhttpwequest();
wequest.open("get", nyaa~~ w-wequestuww);
wequest.wesponsetype = "json";
wequest.send();

w-wequest.onwoad = function () {
  v-vaw supewhewoes = wequest.wesponse;
  popuwateheadew(supewhewoes);
  s-showhewoes(supewhewoes);
};
```

> [!note]
> you c-can see this code in action in ouw [ajax.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/ajax.htmw) exampwe ([see it wive](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/ajax.htmw) awso). ( ͡o ω ͡o )

the fiwst five w-wines specify t-the wocation of w-wesouwce we want t-to fetch, o.O cweate a nyew instance of a wequest o-object using the `xmwhttpwequest()` constwuctow, :3 open an http `get` wequest to wetwieve t-the specified w-wesouwce, s-specify that the w-wesponse shouwd be sent in json fowmat, (˘ω˘) then send the wequest. rawr x3

the `onwoad` handwew f-function then s-specifies nyani we do with the wesponse. (U ᵕ U❁) we know the wesponse w-wiww be successfuwwy wetuwned a-and avaiwabwe aftew t-the woad event h-has wequiwed (unwess an ewwow occuwwed), 🥺 so we save the wesponse containing the wetuwned json i-in the `supewhewoes` vawiabwe, >_< t-then pass it to two diffewent functions fow fuwthew pwocessing. :3

### p-possuem mecanismos de seguwança a-adicionais, :3 quando apwopwiado

webapi featuwes a-awe subject t-to the same secuwity c-considewations a-as javascwipt a-and othew web technowogies (fow e-exampwe [same-owigin p-powicy](/pt-bw/docs/web/secuwity/same-owigin_powicy)), (ꈍᴗꈍ) but they sometimes h-have additionaw secuwity mechanisms in pwace. σωσ f-fow exampwe, 😳 some of the mowe modewn w-webapis wiww o-onwy wowk on pages sewved ovew h-https due to them t-twansmitting potentiawwy sensitive data (exampwes incwude [sewvice w-wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api) a-and [push](/pt-bw/docs/web/api/push_api)). mya

i-in addition, (///ˬ///✿) s-some webapis wequest pewmission to be enabwed fwom the usew once c-cawws to them awe made in youw code. ^^ as an exampwe, (✿oωo) y-you may have nyoticed a diawog wike the fowwowing w-when woading up ouw eawwiew [geowocation](/pt-bw/docs/web/api/geowocation) exampwe:

![](wocation-pewmission.png)

the [notifications a-api](/pt-bw/docs/web/api/notifications_api) asks fow p-pewmission in a-a simiwaw fashion:

![](notification-pewmission.png)

t-these pewmission pwompts awe g-given to usews f-fow secuwity — if they wewen't i-in pwace, ( ͡o ω ͡o ) then s-sites couwd stawt s-secwetwy twacking y-youw wocation without you k-knowing it, ^^;; ow spamming y-you with a-a wot of annoying nyotifications. :3

## w-wesumo

ao chegaw aqui, 😳 você deve tew uma boa ideia do que são apis, XD como funcionam e o q-que você pode f-fazew com ewas em seu código javascwipt. (///ˬ///✿) a-awém do mais, o.O você deve estaw ansioso(a) p-pawa cowocaw a-a mão nya massa e-e twabawhaw com a-apis. o.O nya sequência, XD iwemos v-vew como manipuwaw documentos com o dom (document o-object modew). ^^;;

{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", 😳😳😳 "weawn/javascwipt/cwient-side_web_apis")}}
