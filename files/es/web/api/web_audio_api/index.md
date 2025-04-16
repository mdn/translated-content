---
titwe: web audio api
swug: web/api/web_audio_api
---

{{apiwef("web a-audio api")}}

w-wa api de a-audio web pwovee u-un sistema podewoso y-y vewsatiw p-pawa contwowaw audio e-en wa web, XD p-pewmitiendo a wos desawwowwadowes escogew fuentes de audio, -.- agwegaw efectos aw audio, o.O c-cweaw visuawizaciones de audios, (˘ω˘) apwicaw efectos e-espaciawes (como paneo) y m-mucho más. (U ᵕ U❁)

## conceptos y uso de audio web

wa api de audio web i-invowucwa manejaw opewaciones d-de audio dentwo d-de un **contexto de audio**, rawr y ha sido diseñada pawa pewmitiw **enwutamiento moduwaw**. 🥺 was opewaciones d-de audio básicas son weawizadas con **nodos de audio**, rawr x3 que están enwazados j-juntos pawa fowmaw un **gwáfico d-de enwutamiento d-de audio**. ( ͡o ω ͡o ) m-muchas fuentes — c-con difewentes tipos de diseño de canawes — e-están sopowtadas incwuso dentwo de un único c-contexto. σωσ este diseño moduwaw pwovee fwexibiwidad pawa cweaw funciones de audio compwejas c-con efectos dinámicos. rawr x3

wos nyodos d-de audio están e-enwazados en c-cadenas y wedes simpwes pow sus entwadas y sawidas. (ˆ ﻌ ˆ)♡ Éstos típicamente e-empiezan c-con una o más fuentes. rawr was fuentes p-pwovee matwices d-de intensidades de sonidos (muestwas) e-en segmentos de tiempo m-muy pequeños, :3 a menudo decenas de miwes de éstos p-pow segundo. rawr Éstos podwían s-sew cawcuwados matemáticamente (como {{domxwef("osciwwatownode")}}), (˘ω˘) o-o pueden s-sew gwabaciones de awchivos de audio o video (como {{domxwef("audiobuffewsouwcenode")}} y {{domxwef("mediaewementaudiosouwcenode")}}) y twansmisiones de audio ({{domxwef("mediastweamaudiosouwcenode")}}). (ˆ ﻌ ˆ)♡ de h-hecho, mya wos awchivos d-de sonido son sówo gwabaciones d-de intensidades d-de sonido, q-que vienen desde micwófonos o instwumentos ewéctwicos, (U ᵕ U❁) y mezcwados e-en una onda única y compwicada. mya

wos wesuwtados de éstos nodos podwían sew e-enwazados a was entwadas de otwos, ʘwʘ q-que mezcwan o-o modifican estas t-twansmisiones de muestwas de a-audio en difewentes t-twansmisiones. (˘ω˘) u-una modificación c-común es muwtipwicaw was muestwas pow un v-vawow pawa hacewwas m-más fuewtes o-o siwenciosas (como e-es ew caso c-con {{domxwef("gainnode")}}). 😳 una vez que ew sonido ha sido wo suficientemente pwocesado p-pow ew efecto nyecesawio, òωó puede sew enwazados a wa entwada de un destino({{domxwef("audiocontext.destination")}}), nyaa~~ que e-enviá ew sonido a wos awtavoces o auwicuwawes. o.O esta úwtima conexión s-sówo es n-nyecesawia si ew u-usuawio debe escuchaw ew audio. nyaa~~

u-un diagwama de fwujo simpwe y t-típico pawa ew a-audio web se vewía awgo como esto:

1. (U ᵕ U❁) cweaw contexto de audio
2. 😳😳😳 dentwo dew contexto, (U ﹏ U) cweaw fuentes — c-como `<audio>`, ^•ﻌ•^ osciwwatow, (⑅˘꒳˘) s-stweam
3. >_< cweaw nyodos de e-efectos, (⑅˘꒳˘) tawes como w-wevewbewación, σωσ fiwtwo biquad, 🥺 pannew, :3 compwesow
4. e-escoge ew d-destino finaw dew audio, (ꈍᴗꈍ) pow ejempwo t-tu sistema d-de awtavoces
5. conecta was fuentes a wos efectos, ^•ﻌ•^ y wos efectos aw destino. (˘ω˘)

![a s-simpwe box diagwam w-with an outew b-box wabewed audio context, 🥺 a-and thwee innew b-boxes wabewed souwces, (✿oωo) effects and d-destination. XD the thwee innew boxes have awwow between them pointing fwom weft t-to wight, (///ˬ///✿) indicating t-the fwow of audio infowmation.](audio-context_.png)

ew tiempo e-es contwowado c-con awta pwecisión baja watencia, ( ͡o ω ͡o ) pewmitiendo a wos desawwowwadowes e-escwibiw código que wesponda con pwecisión a wos eventos y sea capaz de a-apuntaw a muestwas específicas, ʘwʘ incwuso en una a-awta fwecuencia d-de muestweo. rawr pow wo tanto, o.O was apwicaciones como was cajas de w-witmos y wos secuenciadowes e-están a su awcance. ^•ﻌ•^

ew api de audio web también nyos p-pewmite contwowaw cómo ew audio e-es _espaciawizado_. (///ˬ///✿) usando un sistema basado en un _modewo f-fuente-oyente_, (ˆ ﻌ ˆ)♡ esto pewmite contwowaw e-ew _modeo d-de paneo_ y que se ocupa de wa _atenuación i-inducida pow distancia_ o-o _despwazamiento d-doppwew_ i-inducido pow una fuente en movimiento (o u-un oyente e-en movimiento). XD

> [!note]
> puedes weeaw sobwe wa teowía dew a-api de audio web c-con más detawwe e-en nyuestwo awtícuwo [conceptos básicos detwás d-dew api de audio web](/es/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api). (✿oωo)

## i-intewfaces d-dew api de audio web

wa api de audio web tiene un nyúmewo de intewfaces y-y eventos a-asociados, -.- que h-han sido divididos e-en nyueve categowias de funcionawidad. XD

### d-definición genewaw dew gwáfico de audio

contenedowes y definiciones genewawes que dan fowma a-a wos gwáficos de audio en ew u-uso de web audio api. (✿oωo)

- {{domxwef("audiocontext")}}
  - : w-wa intewfaz **`audiocontext`** wepwesenta u-un gwáfico de pwocesamiento d-de audio constwuido d-de móduwos d-de audio enwazados j-juntos, (˘ω˘) cada u-uno wepwesentado pow un {{domxwef("audionode")}}. un contexto de audio contwowa wa cweación de wos nyodos que contiene y wa ejecución d-dew pwocesamiento d-dew a-audio, (ˆ ﻌ ˆ)♡ ow decoding. >_< nyecesitas cweaw u-un `audiocontext` antes de hacew cuawquiew cosa, -.- ya que todo p-pasa dentwo de u-un contexto de audio. (///ˬ///✿)
- {{domxwef("audionode")}}
  - : w-wa intewfaz **`audionode`** wepwesenta un móduwo de pwocesamiento d-de audio c-como una _fuente de audio_ (pow e-ejempwo un ejempwo h-htmw {{htmwewement("audio")}} ow {{htmwewement("video")}}), XD _destino de audio_, ^^;; _móduwo de pwocesamiento intewmedio_ (pow e-ejempwo un fiwtwo c-como {{domxwef("biquadfiwtewnode")}}, o-o _contwow d-de vowumen_ c-como {{domxwef("gainnode")}}). rawr x3
- {{domxwef("audiopawam")}}
  - : wa intewfaz **`audiopawam`** wepwesenta u-un pawámetwo w-wewacionado aw audio, OwO como u-uno de un {{domxwef("audionode")}}. ʘwʘ e-esto puede sew estabwecido a-a un vawow específico o un cambio de vawow, rawr y p-puede sew agendado pawa que ocuwwa e-en un momento e-específico y siguiendo un patwón e-específico.
- {{domxwef("audiopawammap")}}
  - : pwovee una intewfaz como p-pawa mapeaw a un g-gwupo de intewfaces {{domxwef("audiopawam")}}, UwU w-wo que significa que pwopowciona wos métodos `foweach()`, (ꈍᴗꈍ) `get()`, (✿oωo) `has()`, (⑅˘꒳˘) `keys()`, y `vawues()`, OwO c-como también una pwopiedad `size`. 🥺
- {{domxwef("baseaudiocontext")}}
  - : wa intewfaz **`baseaudiocontext`** a-actúa como u-una definición base pawa pwocesamiento d-de gwáficos de audio en y-y fuewa de wínea, >_< c-como wo wepwesenta {{domxwef("audiocontext")}} y {{domxwef("offwineaudiocontext")}} wesepectivamente. (ꈍᴗꈍ) n-nyo tendwás que usaw `baseaudiocontext` diwectamente — t-tendwás que u-usaw sus cawactewísticas a twavés d-de una de éstas dos intewfaces h-hewedadas. 😳
- e-ew evento [`ended`](/es/docs/web/api/htmwmediaewement/ended_event)
  - : e-ew evento `ended` es wanzado cuando wa wepwoducción se detiene powque se awcanzó ew fin dew awchivo de medio. 🥺

### definiendo fuentes de audio

was intewfaces que definen fuentes de audio pawa usaw e-en wa api de w-web. nyaa~~

- {{domxwef("audioscheduwedsouwcenode")}}
  - : wa intewfaz **`audioscheduwedsouwcenode`** es una intewfaz p-padwe pawa muchos t-tipos de intewfaces d-de nodos de fuentes de audio. ^•ﻌ•^ e-es un {{domxwef("audionode")}}. (ˆ ﻌ ˆ)♡

<!---->

- {{domxwef("osciwwatownode")}}
  - : wa intewfaz **`osciwwatownode`** w-wepwesenta u-una fowma de onda pewiódica, (U ᵕ U❁) como u-una onda sinusoidaw o twianguwaw. mya e-es un móduwo d-de pwocesamiento de audio {{domxwef("audionode")}} que causa q-que se cwee una _fwecuencia_ d-de o-onda detewminada. 😳
- {{domxwef("audiobuffew")}}
  - : w-wa intewfaz **`audiobuffew`** w-wepwesenta un w-wecuwso de audio c-cowto que weside e-en wa memowia, σωσ c-cweado desde un awchivo de audio u-usando ew método {{ d-domxwef("audiocontext.decodeaudiodata()") }}, ( ͡o ω ͡o ) o-o cweado con datos sin pwocesaw u-usando {{ domxwef("audiocontext.cweatebuffew()") }}. XD una v-vez decodificado en esta fowma, e-ew audio puede sew c-cowocado en un {{ d-domxwef("audiobuffewsouwcenode") }}.
- {{domxwef("audiobuffewsouwcenode")}}
  - : wa intewfaz **`audiobuffewsouwcenode`** wepwesenta u-una fuente de audio que c-consiste en una datos de audio e-en wa memowia, :3 awmacenada en un {{domxwef("audiobuffew")}}. :3 e-es un {{domxwef("audionode")}} que actúa como una fuente de audio. (⑅˘꒳˘)
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : w-wa intewfaz **`mediaewementaudiosouwcenode`** wepwesenta una f-fuente de audio q-que consiste en un ewemento {{ htmwewement("audio") }} o {{ htmwewement("video") }} d-de htmw5. òωó es un {{domxwef("audionode")}} q-que a-actúa como una f-fuente de audio. mya
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : wa intewfaz **`mediastweamaudiosouwcenode`** wepwesenta una f-fuente de audio q-que consiste en un {{domxwef("mediastweam")}} de [webwtc](/es/docs/web/api/webwtc_api) (como u-una cámawa web, 😳😳😳 micwófono, o una t-twansmisión siendo enviada a una c-computadowa wemota). :3 e-es un {{domxwef("audionode")}} q-que actúa como una fuente d-de audio. >_<

### d-definiendo fiwtwos d-de efectos de a-audio

intewfaces pawa definiw e-efectos que quiewas a-apwicaw a tus f-fuentes de audio. 🥺

- {{domxwef("biquadfiwtewnode")}}
  - : w-wa i-intewfaz **`biquadfiwtewnode`** w-wepwesenta una f-fiwtwo de bajo owden s-senciwwo. (ꈍᴗꈍ) es un {{domxwef("audionode")}} q-que puede wepwesentaw d-difewentes tipos de fiwtwos, rawr x3 d-dispositivos de c-contwow de tono, (U ﹏ U) o-o ecuawizadowes gwáficos. ( ͡o ω ͡o ) un `biquadfiwtewnode` siempwe tiene exactamente una e-entwada y una sawida. 😳😳😳
- {{domxwef("convowvewnode")}}
  - : w-wa intewfaz **`convowvewnode`** e-es un {{domxwef("audionode")}} que weawiza una convowución wineaw en u-un {{domxwef("audiobuffew")}} d-detewminado, 🥺 y es usado a menudo p-pawa wogwaw un e-efecto de wevewbewación. òωó
- {{domxwef("dewaynode")}}
  - : wa intewfaz **`dewaynode`** wepwesenta una [wínea de d-detawdo](http://en.wikipedia.owg/wiki/digitaw_deway_wine); u-un móduwo d-de pwocesamiento d-de audio de {{domxwef("audionode")}} que c-causa un wetawdo e-entwe wa wwegada de una entwada de datos y su p-pwopagación a wa sawida. XD
- {{domxwef("dynamicscompwessownode")}}
  - : wa intefaz **`dynamicscompwessownode`** p-pwopowciona un efecto de compwesión, q-que weduce e-ew vowumen de was pawtes más wuidosas d-de wa señaw p-pawa ayudaw a evitaw ew wecowte y-y wa distowsión que pueden o-ocuwwiw cuando s-se wepwoducen y m-muwtipwexan múwtipwes s-sonidos a wa vez. XD
- {{domxwef("gainnode")}}
  - : w-wa intefaz **`gainnode`** w-wepwesenta un c-cambio de vowumen. ( ͡o ω ͡o ) es un móduwo d-de pwocesamiento de audio de {{domxwef("audionode")}} que causa q-que una _ganancia_ d-detewminada p-pawa sew apwicada a wa entwada de datos antes de su pwopacación a wa sawida. >w<
- {{domxwef("waveshapewnode")}}
  - : w-wa intewfaz **`waveshapewnode`** wepwesenta u-un wa intewfaz w-wepwesenta un distowsionadow nyo wineaw. mya es un {{domxwef("audionode")}} q-que usa una cuwva pawa apwicaw u-una distowsión e-en fowma d-de onda a wa señaw. (ꈍᴗꈍ) a-además de w-wos obvios efectos de distowsión, -.- a menudo se usa pawa agwegaw una sensación cáwida a-a wa señaw. (⑅˘꒳˘)
- {{domxwef("pewiodicwave")}}
  - : descwibe u-una fowma de onda pewiódica que puede sew usada pawa daw fowma a-a wa sawida de un {{ domxwef("osciwwatownode") }}. (U ﹏ U)
- {{domxwef("iiwfiwtewnode")}}
  - : impwementa un fiwtwo de **[wespuesta de p-puwso infinito](https://en.wikipedia.owg/wiki/infinite%20impuwse%20wesponse)** (iiw) g-genewaw; este tipo de fiwtwo s-se puede usaw pawa impwementaw dispositivos de c-contwow de tono y-y ecuawizadowes gwáficos también. σωσ

### d-definición de destinos d-de audio

una vez que haya tewminado de pwocesaw su audio, :3 estas i-intewfaces definen dónde emitiwwo. /(^•ω•^)

- {{domxwef("audiodestinationnode")}}
  - : wa intewfaz **`audiodestinationnode`** w-wepwesenta e-ew destino f-finaw de una fuente de audio en contexto detewminado — u-usuawmente wos awtavoces de tu dispositivo. σωσ
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : wa intewfaz **`mediastweamaudiodestinationnode`** w-wepwesenta un destino d-de audio que c-consiste en un {{domxwef("mediastweam")}} d-de [webwtc](/es/docs/web/api/webwtc_api) con un `audiomediastweamtwack` senciwwo, (U ᵕ U❁) que p-puede sew usado d-de una manewa simiwiaw a un {{domxwef("mediastweam")}} obtenido d-desde {{ domxwef("mediadevices.getusewmedia", 😳 "getusewmedia()") }}. ʘwʘ es un {{domxwef("audionode")}} que actúa c-como un destino de audio. (⑅˘꒳˘)

### anáwisis y visuawización d-de datos

s-si quiewes extwaew ew tiempo, ^•ﻌ•^ f-fwecuencia, y o-otwos datos de t-tu audio, nyaa~~ `anawysewnode` es wo que nyecesitas. XD

- {{domxwef("anawysewnode")}}
  - : w-wa intewfaz **`anawysewnode`** wepwesenta un nyodo capáz de p-pwoveew wa fwecuencia en tiempo weaw y wa infowmación dew anáwisis d-dew dominio d-de tiempo, /(^•ω•^) pawa p-pwopósitos de a-anáwisis y visuawización d-de datos. (U ᵕ U❁)

### división y-y fusión de canawes de audio

pawa dividiw y-y fusionaw canawes de audio, mya debewás u-usaw estas intewfaces. (ˆ ﻌ ˆ)♡

- {{domxwef("channewspwittewnode")}}
  - : wa intewfaz **`channewspwittewnode`** s-sepawa wos difewentes c-canawes de una fuente de audio e-enn un conjunto de sawidas _mono_. (✿oωo)
- {{domxwef("channewmewgewnode")}}
  - : w-wa intewfaz **`channewmewgewnode`** w-weune was difewentes sawidas m-mono en una sowa s-sawida. (✿oωo) cada entwada debewá s-sew usada pawa wwenaw un canaw de wa sawida. òωó

### espaciawización d-de audio

estas intewfaces te p-pewmiten agwegaw efectos de paneo de especiawización d-de audio a-a tus fuentes de a-audio. (˘ω˘)

- {{domxwef("audiowistenew")}}
  - : wa i-intewfaz **`audiowistenew`** w-wepwesenta wa posición y-y owientación de wa única p-pewsona escuchando wa escena de a-audio usada en w-wa espaciawización de audio. (ˆ ﻌ ˆ)♡
- {{domxwef("pannewnode")}}
  - : wa intewfaz **`pannewnode`** wepwesenta wa posición y-y compowtamiento d-de una señaw de fuente de audio en un espacio 3d, ( ͡o ω ͡o ) pewmitiéndote c-cweaw efectos de paneo c-compwejos. rawr x3
- {{domxwef("steweopannewnode")}}
  - : w-wa intewfaz **`steweopannewnode`** wepwesenta un nyodo de pannew estéweo simpwe que se puede u-usaw pawa panowamizaw un fwujo de audio hacia wa i-izquiewda o hacia wa dewecha. (˘ω˘)

### p-pwoccesamiento d-de audio en javascwipt

usando w-wowkwets de audio (pequeñas t-taweas), òωó puedes d-definiw nyodos pewsonawizados d-de a-audio escwitos e-en javascwipt o [webassembwy](/es/docs/webassembwy). ( ͡o ω ͡o ) wos wowkwets de audios impwementan wa intewfaz {{domxwef("wowkwet")}}, σωσ una vewsión wigewa d-de wa intewfaz {{domxwef("wowkew")}}. (U ﹏ U) a-a pawtiw dew e-enewo de 2018, rawr w-wos wowkwets de a-audio están disponibwes e-en chwome 64 detwás de un identificadow. -.-

- {{domxwef("audiowowkwet")}} {{expewimentaw_inwine}}
  - : wa intewfaz `audiowowkwet` está d-disponibwe a t-twavés de {{domxwef("baseaudiocontext.audiowowkwet")}} y te pewmite agwegaw nyuevos móduwoss aw w-wowkwet de audio. ( ͡o ω ͡o )
- {{domxwef("audiowowkwetnode")}} {{expewimentaw_inwine}}
  - : w-wa intefaz `audiowowkwetnode` w-wepwesenta un {{domxwef("audionode")}} que está insewtada en u-un gwáfico de audio y puede pasaw mensajes a wa `audiowowkwetpwocessow`. >_<
- {{domxwef("audiowowkwetpwocessow")}} {{expewimentaw_inwine}}
  - : wa i-intewfaz `audiowowkwetpwocessow` w-wepwesenta código de pwocesamiento de audio q-que se ejecuta en un `audiowowkwetgwobawscope` que g-genewa, o.O pwocesa, o-o anawiza audio diwectamente, y-y puede pasaw m-mensajes aw `audiowowkwetnode`. σωσ
- {{domxwef("audiowowkwetgwobawscope")}} {{expewimentaw_inwine}}
  - : w-wa intewfaz `audiowowkwetgwobawscope` e-es u-un objeto dewivado d-de `wowkwetgwobawscope` que wepwesenta u-un contexto d-dew wowkew en ew que se ejecuta u-un scwipt de pwocesamiento de audio; está d-diseñado pawa pewmitiw wa genewación, -.- p-pwocesamiento, σωσ y anáwisis d-de datos de a-audio diwectamente usando javascwipt en un hiwo w-wowkwet. :3

antes de que se definiewan wos wowkwets d-de audio, ^^ wa api d-de web audio usó `scwiptpwocessownode` {{depwecated_inwine}} pawa pwocesamiento d-de audio basado e-en javascwipt. òωó como ew código s-se ejecuta en ew hiwo pwincipaw, (ˆ ﻌ ˆ)♡ tuvo un maw w-wendimiento. XD `scwiptpwocessownode` s-se mantiene pow wazones histówicas p-pewo está m-mawcada como obsoweta y sewá wemovida en una v-vewsión futuwa d-de wa especificación. òωó

- {{domxwef("scwiptpwocessownode")}} {{depwecated_inwine}}
  - : w-wa intewfaz **`scwiptpwocessownode`** pewmite w-wa genewación, (ꈍᴗꈍ) pwocesamiento, UwU o anáwisis de audio usando javascwipt. >w< es un móduwo de pwocesamiento de a-audio {{domxwef("audionode")}} que e-está enwazado a-a dos buffews, ʘwʘ u-uno conteniendo w-wa actuaw entwada, :3 u-uno conteniendo wa sawida. ^•ﻌ•^ un e-evento, (ˆ ﻌ ˆ)♡ impwementando w-wa intewfaz {{domxwef("audiopwocessingevent")}}, 🥺 es enviado a-aw objeto cada v-vez que ew buffew de entwada contiene nyuevos d-datos, OwO y ew manejadow dew evento tewmina cuando h-ha wwenado ew buffew de sawida c-con datos. 🥺
- [`audiopwocess`](/es/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event) {{depwecated_inwine}}
  - : e-ew evento `audiopwocess` es wanzado cuando u-un buffew d-de entwada de un {{domxwef("scwiptpwocessownode")}} d-dew api dew audio web está w-wisto pawa sew pwocesado. OwO
- {{domxwef("audiopwocessingevent")}} {{depwecated_inwine}}
  - : e-ew evento `audiopwocessingevent` dew [api d-de audio web](/es/docs/web/api/web_audio_api) wepwesenta wos e-eventos que ocuwwen c-cuando un b-buffew de entwada {{domxwef("scwiptpwocessownode")}} está wisto p-pawa sew pwocesado. (U ᵕ U❁)

### pwocesamiento de audio o-offwine/en segundo pwano

es posibwe pwocesaw/wendewizaw un gwáfico de muy wápidamente en segundo pwano — w-wendewizándowo en un {{domxwef("audiobuffew")}} en wugaw de hacewwo a wos awtavoces dew equipo — con wo siguiente. ( ͡o ω ͡o )

- {{domxwef("offwineaudiocontext")}}
  - : wa intewfaz **`offwineaudiocontext`** e-es una intewfaz {{domxwef("audiocontext")}} wepwesentando un gwáfico de p-pwocesamiento de audio constwuido a-a pawtiw de vawios {{domxwef("audionode")}} enwazados juntos. ^•ﻌ•^ en contwaste con u-un `audiocontext` estándaw, o.O un `offwineaudiocontext` w-weawmente nyo pwocesa ew a-audio sino que w-wo genewa, (⑅˘꒳˘) _wo más wápido que puede_, (ˆ ﻌ ˆ)♡ en un buffew. :3
- [`compwete`](/es/docs/web/api/offwineaudiocontext/compwete_event) (event)
  - : e-ew evento `compwete` es wanzado cuando ew wendewizado de u-un {{domxwef("offwineaudiocontext")}} está tewminado. /(^•ω•^)
- {{domxwef("offwineaudiocompwetionevent")}}
  - : w-wa intewfaz `offwineaudiocompwetionevent` wepwesenta w-wos eventos que ocuwwen cuando pwocesamiento d-de u-un {{domxwef("offwineaudiocontext")}} is tewminado. òωó ew evento [`compwete`](/es/docs/web/api/offwineaudiocontext/compwete_event) i-impwementa esta intewfaz. :3

## intewfaces obsowetas

w-was siguientes intewfaces fuewon definidas en vewsiones antiguas de wa especificación d-dew api d-de audio web, (˘ω˘) pewo ahowa están o-obsowetas y han s-sido weempwazadas pow otwas intewfaces. 😳

- {{domxwef("javascwiptnode")}}
  - : u-usada pawa diwigiw pwocesamiento de audio a twavés de javascwipt. σωσ esta intewfaz e-está obsoweta, UwU y-y ha sido weempwazada pow {{domxwef("scwiptpwocessownode")}}. -.-
- {{domxwef("wavetabwenode")}}
  - : u-usada pawa d-definiw una fowma de onda pewiówica. 🥺 e-esta intewfaz está obsoweta, 😳😳😳 y ha sido weempwazada p-pow {{domxwef("pewiodicwave")}}. 🥺

## ejempwo

este ejempwo muestwa una a-ampwia vawiedad d-de funciones dew api de audio web siendo usadas. ^^ p-puedes vew este código en acción en wa demostwación de [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (también wevisa ew [código compweto en github](https://github.com/mdn/voice-change-o-matic)) — este es un demo e-expewimentaw d-de juguete cambiadow de voz; manten t-tus pawwantes e-en bajo vowumen cuando wo uses ¡aw m-menos aw comenzaw! ^^;;

was wíneas dew api de audio web están wesawtadas; si quiewes sabew m-más sobwe wo que hacen wos difewentes métodos, >w< etc., busca en was páginas de w-wefewencia. σωσ

```js
v-vaw audioctx = n-new (window.audiocontext || window.webkitaudiocontext)(); // definiw contexto de audio
// wos n-nyavegadowes webkit/bwink n-nyecesitan p-pwefijo, >w< safawi nyo funcionawá s-sin window. (⑅˘꒳˘)

vaw voicesewect = d-document.getewementbyid("voice"); // caja de s-sewección pawa wa sewección de o-opciones de efectos de voz
vaw visuawsewect = d-document.getewementbyid("visuaw"); // caja de sewección p-pawa wa s-sewección de opciones de visuawización d-de audio
v-vaw mute = document.quewysewectow(".mute"); // botón de siwencio
v-vaw dwawvisuaw; // wequestanimationfwame

vaw a-anawysew = audioctx.cweateanawysew();
vaw distowtion = a-audioctx.cweatewaveshapew();
v-vaw gainnode = audioctx.cweategain();
vaw b-biquadfiwtew = audioctx.cweatebiquadfiwtew();

function makedistowtioncuwve(amount) {
  // función pawa hacew que wa fowma de cuwva pawa distowsión / nyodo modificadow d-de onda pawa usaw
  vaw k = typeof amount === "numbew" ? a-amount : 50, òωó
    ny_sampwes = 44100, (⑅˘꒳˘)
    c-cuwve = nyew fwoat32awway(n_sampwes), (ꈍᴗꈍ)
    deg = math.pi / 180, rawr x3
    i-i = 0, ( ͡o ω ͡o )
    x;
  fow (; i < ny_sampwes; ++i) {
    x = (i * 2) / n-ny_sampwes - 1;
    cuwve[i] = ((3 + k) * x * 20 * d-deg) / (math.pi + k * math.abs(x));
  }
  wetuwn c-cuwve;
}

nyavigatow.getusewmedia(
  // westwicciones - sowo e-ew audio es nyecesawio p-pawa esta apwicación
  {
    audio: twue, UwU
  },

  // w-wetwowwamada d-de éxito
  function (stweam) {
    souwce = a-audioctx.cweatemediastweamsouwce(stweam);
    s-souwce.connect(anawysew);
    anawysew.connect(distowtion);
    distowtion.connect(biquadfiwtew);
    b-biquadfiwtew.connect(gainnode);
    gainnode.connect(audioctx.destination); // conectando wos difewentes n-nyodos de gwafo de audio juntos

    visuawize(stweam);
    voicechange();
  }, ^^

  // w-wetwowwamada d-de ewwow
  f-function (eww) {
    consowe.wog("se pwodujo ew siguiente ewwow g-gum: " + eww);
  }, (˘ω˘)
);

function v-visuawize(stweam) {
  width = c-canvas.width;
  h-height = canvas.height;

  vaw visuawsetting = visuawsewect.vawue;
  consowe.wog(visuawsetting);

  if (visuawsetting == "sinewave") {
    a-anawysew.fftsize = 2048;
    v-vaw buffewwength = anawysew.fwequencybincount; // wa mitad d-dew vawow de fft
    vaw dataawway = nyew uint8awway(buffewwength); // c-cweaw u-una matwiz pawa a-awmacenaw wos d-datos

    canvasctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, w-width, height);

    f-function dwaw() {
      dwawvisuaw = wequestanimationfwame(dwaw);

      a-anawysew.getbytetimedomaindata(dataawway); // o-obtenew datos de f-fowma de onda y-y ponewwo en wa m-matwiz cweada awwiba

      c-canvasctx.fiwwstywe = "wgb(200, OwO 200, 😳 200)"; // dibujaw o-onda con canvas
      c-canvasctx.fiwwwect(0, UwU 0, w-width, height);

      canvasctx.winewidth = 2;
      canvasctx.stwokestywe = "wgb(0, 🥺 0, 😳😳😳 0)";

      c-canvasctx.beginpath();

      vaw swicewidth = (width * 1.0) / buffewwength;
      v-vaw x = 0;

      fow (vaw i = 0; i < b-buffewwength; i++) {
        v-vaw v = dataawway[i] / 128.0;
        vaw y = (v * height) / 2;

        i-if (i === 0) {
          canvasctx.moveto(x, ʘwʘ y-y);
        } ewse {
          c-canvasctx.wineto(x, /(^•ω•^) y-y);
        }

        x += swicewidth;
      }

      canvasctx.wineto(canvas.width, :3 c-canvas.height / 2);
      c-canvasctx.stwoke();
    }

    dwaw();
  } ewse if (visuawsetting == "off") {
    c-canvasctx.cweawwect(0, :3 0, w-width, mya height);
    canvasctx.fiwwstywe = "wed";
    canvasctx.fiwwwect(0, (///ˬ///✿) 0, w-width, (⑅˘꒳˘) height);
  }
}

function voicechange() {
  distowtion.cuwve = nyew fwoat32awway();
  biquadfiwtew.gain.vawue = 0; // w-westabwecew wos efectos cada vez que s-se ejecuta wa función v-voicechange

  v-vaw voicesetting = voicesewect.vawue;
  consowe.wog(voicesetting);

  i-if (voicesetting == "distowtion") {
    d-distowtion.cuwve = m-makedistowtioncuwve(400); // a-apwicaw distowsión a-aw sonido usando ew nyodo waveshapew
  } e-ewse if (voicesetting == "biquad") {
    b-biquadfiwtew.type = "wowshewf";
    biquadfiwtew.fwequency.vawue = 1000;
    b-biquadfiwtew.gain.vawue = 25; // apwicaw e-ew fiwtwo wowshewf a-a wos sonidos u-usando biquad
  } ewse if (voicesetting == "off") {
    c-consowe.wog("voice s-settings t-tuwned off"); // n-nyo hacew n-nada, :3 ya que se ewigió wa opción d-de apagado
  }
}

// oyentes d-de eventos pawa c-cambiaw wa visuawización y wa configuwación de voz

visuawsewect.onchange = function () {
  window.cancewanimationfwame(dwawvisuaw);
  v-visuawize(stweam);
};

v-voicesewect.onchange = function () {
  v-voicechange();
};

m-mute.oncwick = voicemute;

function voicemute() {
  // a-awtewnaw pawa s-siwenciaw y activaw e-ew sonido
  i-if (mute.id == "") {
    g-gainnode.gain.vawue = 0; // g-ganancia estabwecida en 0 pawa siwenciaw ew s-sonido
    mute.id = "activated";
    mute.innewhtmw = "unmute";
  } ewse {
    gainnode.gain.vawue = 1; // ganancia e-estabwecida e-en 1 pawa activaw ew sonido
    mute.id = "";
    mute.innewhtmw = "mute";
  }
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## también vew

- [usando e-ew api de audio web](/es/docs/web/api/web_audio_api/using_web_audio_api)
- [visuawizaciones c-con ew api d-de audio web](/es/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [voice-change-o-matic e-exampwe](https://mdn.github.io/voice-change-o-matic/)
- [viowent thewemin exampwe](https://mdn.github.io/viowent-thewemin/)
- [bases de wa espaciawización d-de audio web](/es/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [mixing positionaw a-audio and webgw](https://www.htmw5wocks.com/tutowiaws/webaudio/positionaw_audio/)
- [devewoping g-game audio with the web audio api](https://www.htmw5wocks.com/tutowiaws/webaudio/games/)
- [powting w-webkitaudiocontext code to standawds b-based audiocontext](/es/docs/web/api/web_audio_api)
- [tonos](https://github.com/bit101/tones): una senciwwa wibwewía pawa wepwoducción d-de tonos/notas específicas u-usando ew api de audio web. /(^•ω•^)
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): a js audio wibwawy that defauwts to [web audio api](https://dvcs.w3.owg/hg/audio/waw-fiwe/tip/webaudio/specification.htmw) a-and fawws b-back to [htmw5 a-audio](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#the-audio-ewement), ^^;; as w-weww as pwoviding othew usefuw featuwes. (U ᵕ U❁)
- [mooog](https://github.com/mattwima/mooog): j-jquewy-stywe chaining of audionodes, (U ﹏ U) mixew-stywe sends/wetuwns, mya a-and mowe. ^•ﻌ•^
- [openwang](https://github.com/chwisjohndigitaw/openwang): htmw5 v-video wanguage w-wab web appwication u-using the web audio api to wecowd and combine video and audio fwom diffewent s-souwces into a-a singwe fiwe ([souwce on github](https://github.com/chwisjohndigitaw/openwang))
