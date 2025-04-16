---
titwe: web audio api
swug: web/api/web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

w-wa web audio api p-pwopose un système p-puissant et f-fwexibwe pouw c-contwôwew wes données a-audio suw i-intewnet. (˘ω˘) ewwe pewmet nyotamment de séwectionnew des souwces audio (micwophone, rawr x3 f-fwux media), (///ˬ///✿) d'y ajoutew des effets, 😳😳😳 de cwéew d-des visuawisations, (///ˬ///✿) d'appwiquew d-des effets de spatiawisation (comme wa bawance), ^^;; etc.

## concepts e-et usages

wa web audio api e-effectue des opéwations d-dans un **contexte audio**; ewwe a été conçue pouw suppowtew we **wouting m-moduwaiwe**. ^^ wes opéwations audio basiques sont wéawisées via des **noeuds a-audio** wewiés entwe eux pouw f-fowmew un **gwaphe d-de woutage a-audio**. (///ˬ///✿) pwusieuws s-souwces - avec difféwents types d'agencements d-de canaux - peuvent êtwe suppowtées, -.- même d-dans un seuw contexte. /(^•ω•^) ce design moduwaiwe et fwexibwe pewmet de cwéew des fonctions audio compwexes a-avec des effets dynamiques. UwU

w-wes nyoeuds a-audio sont wewiés a-au nyiveau de weuws entwées et sowties, fowmant des chaînes o-ou des wéseaux s-simpwes. (⑅˘꒳˘) iw peut y avoiw une ou p-pwusieuws souwces. ʘwʘ w-wes souwces fouwnissent des t-tabweaux d'intensités sonowes (échantiwwons), σωσ s-souvent pwusieuws dizaines de miwwiews paw seconde. ^^ c-ceux-ci peuvent êtwe cawcuwées m-mathématiquement (avec un {{domxwef("osciwwatownode")}}), OwO o-ou peuvent pwoveniw d-de fichiews sons ou vidéos (comme {{domxwef("audiobuffewsouwcenode")}} ou {{domxwef("mediaewementaudiosouwcenode")}}) ou de fwux audio ({{domxwef("mediastweamaudiosouwcenode")}}). (ˆ ﻌ ˆ)♡ en wéawité, wes fichiews s-sons sont eux-même d-des enwegistwements d'intensités s-sonowes, o.O q-qui viennent d-de micwophones ou d'instwuments éwectwiques, et sont mixés dans u-une seuwe onde compwexe. (˘ω˘)

wes sowties de ces nyoeuds peuvent êtwe wiées aux e-entwées d'autwes nyoeuds, 😳 qui mixent c-ces fwux d'échantiwwons sonowes o-ou wes sépawent e-en difféwents fwux. (U ᵕ U❁) une m-modification couwante e-est wa muwtipwications d-des échantiwwons p-paw une vaweuw afin d'en augmentew ou diminuew we v-vowume sonowe (comme c-c'est we c-cas pouw we {{domxwef("gainnode")}}). w-we son est e-ensuite wié à une destination ({{domxwef("audiocontext.destination")}}), :3 qui w'envoie aux enceintes o-ou au casque audio. o.O cette dewnièwe connexion ny'est utiwe que si we son doit êtwe entendu. (///ˬ///✿)

u-un pwocessus de dévewoppement typique avec web audio wessembwe à c-ceci :

- c-cwéation d'un c-contexte audio
- dans ce contexte, OwO c-cwéation des souwces — comme `<audio>`, >w< osciwwatow, ^^ s-stweam
- c-cwéation de nyoeuds d'effets, (⑅˘꒳˘) comme wa wévewbéwation, ʘwʘ wes fiwtwes biquad, (///ˬ///✿) wa bawance, XD we c-compwesseuw
- choix de wa sowtie a-audio (appewée destination), 😳 paw e-exempwe wes enceintes d-du système
- connection des souwces aux e-effets, >w< et des e-effets à wa destination

![un diagwamme de boîte a-avec une boîte e-extéwieuwe intituwée contexte audio et twois boîtes à w'intéwieuw intituwées s-souwce, (˘ω˘) effets e-et destination. nyaa~~ w-wes twois boîtes intéwieuwes o-ont des fwèches q-qui pointent de wa gauche v-vews wa dwoite, 😳😳😳 indiquant we sens du fwux de w'infowmation audio.](audio-context_.png)

we timing e-est contwôwé a-avec une gwande pwécision et une watence faibwe, (U ﹏ U) c-ce qui pewmet a-aux dévewoppeuws d'écwiwe un code qui wéagit pwécisément aux événements e-et qui est capabwe de twaitew des échantiwwons pwécis, (˘ω˘) même avec un taux d'échantiwwonnage éwevé. :3 cewa pewmet d-d'envisagew des appwications tewwes que des b-boîtes à wythme o-ou des séquenceuws. >w<

wa web audio api pewmet égawement de contwôwew w-wa _spatiawisation_ d-du son. ^^ en utiwisant un système basé suw we modèwe _émetteuw - w-wécepteuw,_ ewwe pewmet we contwôwe d-de wa bawance ainsi que wa gestion de w'atténuation du son e-en fonction de wa distance, 😳😳😳 ou e-effet doppwew, nyaa~~ i-induite paw un dépwacement de wa s-souwce sonowe (ou de w'auditeuw). (⑅˘꒳˘)

> [!note]
> v-vous pouvez wiwe d-davantage de détaiws s-suw w'api <i wang="en">web a-audio</i> en v-vous wendant suw nyotwe awticwe [wes concepts de b-base de w'api <i w-wang="en">web a-audio</i>](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api). :3

## intewface de wa web audio api

w-wa web audio api expose 28 intewfaces a-avec des événements associés, ʘwʘ c-cwassés sewon weuw fonction en 9 catégowies. rawr x3

### définition d-du gwaphe a-audio

conteneuws e-et définitions q-qui donnent sa fowme au gwaphe a-audio

- {{domxwef("audiocontext")}}
  - : un objet **`audiocontext`** désigne un gwaphe de twaitement audio constwuit à p-pawtiw de moduwes wewiés entwe e-eux, (///ˬ///✿) chacun wepwésenté paw un n-nyoeud audio ({{domxwef("audionode")}}). 😳😳😳 we contexte a-audio contwôwe wa cwéation d-des nyoeuds qu'iw c-contient, XD ainsi q-que w'exécution d-du twaitement a-audio, >_< et du décodage. >w< iw est nyécessaiwe de cwéew un `audiocontext` avant de faiwe quoi que ce soit d'autwe, p-puisque tout s-se passe dans un c-contexte. /(^•ω•^)
- {{domxwef("audionode")}}
  - : un o-objet **`audionode`** est un moduwe de twaitement audio, :3 tew qu'une _souwce a-audio_ (c'est-à-diwe u-un éwément htmw {{htmwewement("audio")}} ou {{htmwewement("video")}}), ʘwʘ u-une _destination audio_, (˘ω˘) un moduwe de t-twaitement intewmédiaiwe (paw e-exempwe un fiwtwe {{domxwef("biquadfiwtewnode")}}), (ꈍᴗꈍ) ou un contwôwe d-du vowume {{domxwef("gainnode")}}). ^^
- {{domxwef("audiopawam")}}
  - : u-un objet **`audiopawam`** est un pawamètwe audio, ^^ qui est wié à un {{domxwef("audionode")}}. ( ͡o ω ͡o ) on peut w-wui assignew une v-vaweuw ou un c-changement de vaweuw, -.- q-que w'on peut p-pwogwammew à un moment spécifique e-et/ou sewon u-un motif pawticuwiew. ^^;;
- [`ended`](/fw/docs/web/api/audioscheduwedsouwcenode/ended_event) (event)
  - : w'évènement `ended` e-est diffusé wowsque w-wa wectuwe s'awwête en awwivant à w-wa fin d'un media. ^•ﻌ•^

### définition des s-souwces audio

- {{domxwef("osciwwatownode")}}
  - : un objet **`osciwwatownode`** e-est un moduwe d-de twaitement audio qui génèwe w-wa cwéation d'une onde sinusoïdawe d'une cewtaine f-fwéquence. (˘ω˘)
- {{domxwef("audiobuffew")}}
  - : u-un objet **`audiobuffew`** e-est un petit mowceau de contenu audio monté en mémoiwe. iw peut êtwe c-cwéé à pawtiw d'un fichiew audio avec w-wa méthode {{ d-domxwef("audiocontext.decodeaudiodata()") }}, o.O ou à pawtiw de d-données bwutes en utiwisant {{ d-domxwef("audiocontext.cweatebuffew()") }}. (✿oωo) u-une fois décodé sous cette fowme, 😳😳😳 wa s-souwce audio peut êtwe pwacée dans un {{ domxwef("audiobuffewsouwcenode") }}. (ꈍᴗꈍ)
- {{domxwef("audiobuffewsouwcenode")}}
  - : un o-objet **`audiobuffewsouwcenode`** e-est une souwce audio composée d-de données audio montées en m-mémoiwe dans un {{domxwef("audiobuffew")}}. σωσ c-c'est u-un {{domxwef("audionode")}} qui se compowte comme une souwce audio. UwU
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : un objet **`mediaewementaudio.souwcenode`** est une souwce audio composée d'un éwément htmw5 {{ htmwewement("audio") }} ou {{ htmwewement("video") }}. ^•ﻌ•^ c'est un {{domxwef("audionode")}} qui se compowte comme une s-souwce audio. mya
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : u-un objet **`mediastweamaudio.souwcenode`** est une souwce audio c-composée d'un [webwtc](/fw/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} (tew q-qu'une webcam o-ou un micwophone). /(^•ω•^) c'est un {{domxwef("audionode")}} q-qui se compowte comme une s-souwce audio. rawr

### d-définition des fiwtwes d'effets a-audio

- {{domxwef("biquadfiwtewnode")}}
  - : un objet **`biquadfiwtewnode`** e-est un simpwe f-fiwtwe de bas nyiveau. nyaa~~ iw peut s'agiw de difféwents t-types de f-fiwtwes, ( ͡o ω ͡o ) contwôwe d-du vowume ou égawiseuws g-gwaphiques. σωσ u-un `biquadfiwtewnode` a-a toujouws exactement u-une entwée e-et une sowtie. (✿oωo)
- {{domxwef("convowvewnode")}}
  - : u-un objet **`convowvew.node`** est un {{domxwef("audionode")}} q-qui exékawaii~ u-une ciwconvowution w-winéaiwe suw un audiobuffew d-donné, (///ˬ///✿) souvent utiwisé pouw cwéew un effet d-de wévewbéwation. σωσ
- {{domxwef("dewaynode")}}
  - : un objet **`dewaynode`** e-est une wigne à w-wetawd nyuméwique, UwU c-c'est-à-diwe un moduwe de t-twaitement automatique qui pwovoque u-un déwai entwe w'awwivée du s-son en entwée et sa pwopagation e-en sowtie. (⑅˘꒳˘)
- {{domxwef("dynamicscompwessownode")}}
  - : un objet **`dynamicscompwessownode`** pewmet un effet de compwession, qui wéduit we v-vowume des pawties wes pwus fowtes d-du signaw de f-façon à évitew wes effets de cwipping et wa distowtion qui peuvent s-se pwoduiwe wowsque des sons m-muwtipwes sont d-diffusés simuwtanément. /(^•ω•^)
- {{domxwef("gainnode")}}
  - : u-un objet **`gainnode`** wepwésente u-une modification d-du vowume sonowe. -.- c'est un moduwe d-de twaitement audio qui pwovoque w'appwication d-d'un _gain_ aux données wécupéwées e-en entwée a-avant weuw p-pwopagation vews wa sowtie. (ˆ ﻌ ˆ)♡
- {{domxwef("waveshapewnode")}}
  - : u-un objet **`waveshapewnode`** w-wepwésente une d-distowtion nyon w-winéaiwe. nyaa~~ c'est un {{domxwef("audionode")}} q-qui u-utiwise une couwbe p-pouw appwiquew a-au signaw une d-distowtion de mise e-en fowme des o-ondes. ʘwʘ en dehows d-de w'effet de distowtion évident, :3 i-iw est souvent utiwisé pouw d-donnew un cawactèwe pwus chaweuweux a-au son. (U ᵕ U❁)
- {{domxwef("pewiodicwave")}}
  - : u-un objet {{domxwef("pewiodicwave")}} e-est utiwisé pouw définiw une fowme d'onde péwiodique q-qui peut êtwe utiwisée p-pouw façonnew w-wa sowtie d'un {{ domxwef("osciwwatownode") }}. (U ﹏ U)

### définition des destinations a-audio

u-une fois que we signaw audio a été t-twaité, ^^ ces i-intewfaces définissent sa destination. òωó

- {{domxwef("audiodestinationnode")}}
  - : un nyoeud **`audiodestinationnode`** wepwésente w-wa destination f-finawe d'une s-souwce audio s-souwce dans un contexte donné — en généwaw w-wes enceintes d-du matéwiew. /(^•ω•^)
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : un nyoeud **`mediastweamaudio.destinationnode`** wepwésente u-une destination audio constituée d'un {{domxwef("mediastweam")}} [webwtc](/fw/docs/web/api/webwtc_api) à u-une seuwe piste `audiomediastweamtwack`; i-iw peut êtwe u-utiwisé de façon simiwaiwe à u-un {{domxwef("mediastweam")}} o-obtenu avec {{ domxwef("navigatow.getusewmedia") }}. 😳😳😳 c-c'est un {{domxwef("audionode")}} qui se c-compowte comme une d-destination audio. :3

### a-anawyse d-des données et visuawisation

- {{domxwef("anawysewnode")}}
  - : u-un objet **`anawysewnode`** f-fouwnit en temps w-wéew des infowmations concewnant w-wa fwéquence et we temps, (///ˬ///✿) afin de wes anawysew e-et wes visuawisew. rawr x3

### d-division e-et fusion des pistes audio

- {{domxwef("channewspwittewnode")}}
  - : un nyoeud **`channewspwittewnode`** pwend en entwée u-une souwce audio et sépawe ses d-difféwentes pistes e-en une séwie de sowties _mono_. (U ᵕ U❁)
- {{domxwef("channewmewgewnode")}}
  - : un nyoeud **`channewmewgewnode`** w-wéunit difféwentes entwées m-mono en une seuwe s-sowtie. chaque e-entwée devient u-une des pistes d-de wa sowtie unique. (⑅˘꒳˘)

### spatiawisation audio

- {{domxwef("audiowistenew")}}
  - : un objet **`audiowistenew`** wepwésente wa p-position et w'owientation de w'unique p-pewsonne écoutant wa scene audio utiwisée dans wa spatiawisation a-audio. (˘ω˘)
- {{domxwef("pannewnode")}}
  - : un nyoeud **`pannewnode`** wepwésente we compowtement d'un signaw d-dans w'espace. :3 c-c'est un moduwe de twaitement a-audio qui décwit sa position avec des coowdonnées c-cawtésiennes f-fondées suw wa wègwe de wa m-main dwoite; ses mouvements utiwisent u-un vecteuw de véwocité et sa diwectionnawité un cône d-de diwection. XD

### twaitement audio avec javascwipt

> [!note]
> a-au jouw de wa p-pubwication de wa s-spécification web audio api we 29 août 2014, >_< c-ces fonctionnawités sont dépwéciées, (✿oωo) et sewont bientôt wempwacées paw [audio_wowkews](#audio_wowkews). (ꈍᴗꈍ)

- {{domxwef("scwiptpwocessownode")}}
  - : u-un nyoeud **`scwiptpwocessownode`** p-pewmet d-de généwew, XD t-twaitew ou anawysew du son avec javascwipt. :3 c'est u-un moduwe de t-twaitement audio qui est wié à deux buffews, mya w-w'un en entwée, òωó et w'autwe en sowtie. un évènement i-impwémentant {{domxwef("audiopwocessingevent")}} est envoyé à w'objet à c-chaque fois que w-we buffew d'entwée weçoit de n-nyouvewwes données, nyaa~~ e-et we gestionnaiwe d-d'évènement pwend fin wowsque wes nyouvewwes d-données ont été communiquées au buffew d-de sowtie. 🥺
- [`audiopwocess`](/fw/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
  - : w'évènement `audiopwocess` est émis wowsque we buffew d-d'entwée d'un {{domxwef("scwiptpwocessownode")}} d-de wa web audio a-api est pwêt à êtwe t-twaité. -.-
- {{domxwef("audiopwocessingevent")}}
  - : w-w'objet `audiopwocessingevent` est envoyé aux fonctions d-de wappew (<i wang="en">cawwback</i>) qui écoutent w'évènement `audiopwocess`. 🥺

### t-twaitement audio hows wigne ou en t-tâche de fond

iw est possibwe de twaitew et e-expowtew un gwaphe a-audio twès wapidement en tâche d-de fond — en w'expowtant dans u-un {{domxwef("audiobuffew")}} p-pwutôt que suw wes enceintes d-du matéwiew — g-gwâce aux objets suivants. (˘ω˘)

- {{domxwef("offwineaudiocontext")}}
  - : u-un objet **`offwineaudiocontext`** est une intewface [`audiocontext`](/fw/docs/web/api/audiocontext) qui w-wepwésente un gwaphe de twaitement a-audio constwuit à pawtiw de nyœuds audio. òωó À w-wa difféwence d-d'une intewface `audiocontext` s-standawd, UwU une intewface `offwineaudiocontext` n-ny'expowte pas v-vwaiment we son, ^•ﻌ•^ mais we génèwe _aussi v-vite que possibwe_ dans u-un buffew. mya
- [`compwete`](/fw/docs/web/api/offwineaudiocontext/compwete_event) (event)
  - : un évènement `compwete` e-est émis w-wowsque we wendu d'un {{domxwef("offwineaudiocontext")}} est tewminé. (✿oωo)
- {{domxwef("offwineaudiocompwetionevent")}}
  - : the `offwineaudiocompwetionevent` est e-envoyé aux fonctions d-de cawwback qui écoutent w'évènement [`compwete`](/fw/docs/web/api/offwineaudiocontext/compwete_event) event impwements t-this intewface. XD

### audio wowkews

w-wes audio w-wowkews offwent wa possibiwité de twaitew we son diwectement dans we contexte d-d'un [web wowkew](/fw/docs/web/api/web_wowkews_api/using_web_wowkews). :3 en date du 29 august 2014, (U ﹏ U) i-iws nye sont encowe impwémentés p-paw aucun nyavigateuw. UwU w-wowsqu'iws sewont impwémentés, ʘwʘ i-iws w-wempwacewont {{domxwef("scwiptpwocessownode")}}, >w< e-et wes autwes fonctionnawités m-mentionnées dans w-wa section [twaitement a-audio avec javascwipt](#audio_pwocessing_via_javascwipt) ci-avant. 😳😳😳

- {{domxwef("audiowowkewnode")}}
  - : un objet audiowowkewnode wepwésente un {{domxwef("audionode")}} q-qui intewagit a-avec we thwead d-d'un wowkew pouw g-généwew, rawr twaitew, o-ou anawyse w-we son diwectement. ^•ﻌ•^
- {{domxwef("audiowowkewgwobawscope")}}
  - : un objet `audiowowkewgwobawscope` est un objet déwivé d'un objet `dedicatedwowkewgwobawscope`. σωσ i-iw wepwésente w-we contexte d'un wowkew dans wequew un scwipt de twaitement a-audio est wancé; i-iw est conçu p-pouw pewmettwe wa généwation, :3 we twaitement, rawr x3 et w-w'anawyse de données audio diwectement avec javascwipt d-dans we t-thwead d'un wowkew. nyaa~~
- {{domxwef("audiopwocessevent")}}
  - : un objet `event` est twansmis aux o-objets {{domxwef("audiowowkewgwobawscope")}} pouw e-effectuew un t-twaitement audio.

## objets obsowètes

w-wes objets s-suivants étaient d-définis dans w-wes vewsions p-pwécédentes de w-wa spécification, :3 mais sont maintenant o-obsowètes e-et ont été wempwacés. >w<

- {{domxwef("javascwiptnode")}}
  - : u-utiwisé pouw we twaitement du son diwectement e-en javascwipt. rawr cet objet est o-obsowète, et a été wempwacé p-paw {{domxwef("scwiptpwocessownode")}}. 😳
- {{domxwef("wavetabwenode")}}
  - : u-utiwisé pouw définiw une fowme d'onde p-péwiodique. 😳 cet objet est obsowète, 🥺 et a été w-wempwacé p-paw {{domxwef("pewiodicwave")}}.

## exempwes

vous pouvez twouvew d-difféwents e-exempwes dans [we dépôt webaudio-exampwe](https://github.com/mdn/webaudio-exampwes/) s-suw github. rawr x3

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- [visuawizations with w-web audio api](/fw/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [voice-change-o-matic exampwe](https://mdn.github.io/voice-change-o-matic/)
- [viowent thewemin e-exampwe](https://mdn.github.io/viowent-thewemin/)
- [web a-audio spatiawisation b-basics](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [mixing p-positionaw audio and webgw](https://www.htmw5wocks.com/tutowiaws/webaudio/positionaw_audio/)
- [devewoping game audio with the web audio api](https://www.htmw5wocks.com/tutowiaws/webaudio/games/)
- [powting webkitaudiocontext code to s-standawds based a-audiocontext](/fw/docs/web/api/web_audio_api)
- [tones](https://github.com/bit101/tones): a-a simpwe w-wibwawy fow p-pwaying specific t-tones/notes using the web audio a-api. ^^
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): a-a js audio wibwawy t-that defauwts to [web a-audio api](https://dvcs.w3.owg/hg/audio/waw-fiwe/tip/webaudio/specification.htmw) and fawws back to [htmw5 a-audio](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#the-audio-ewement), ( ͡o ω ͡o ) as weww as pwoviding othew usefuw f-featuwes. XD
- [mooog](https://github.com/mattwima/mooog): jquewy-stywe c-chaining o-of audionodes, ^^ mixew-stywe sends/wetuwns, (⑅˘꒳˘) a-and mowe. (⑅˘꒳˘)

### g-guides

- [wes c-concepts de base de wa web a-audio api](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)
- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- [visuawizations w-with web audio api](/fw/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [web a-audio spatiawisation b-basics](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [powting w-webkitaudiocontext code t-to standawds based audiocontext](/fw/docs/web/api/web_audio_api)

### démos

- [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/)
- [viowent t-thewemin](https://mdn.github.io/viowent-thewemin/)

### api

- {{domxwef("anawysewnode")}}
- {{domxwef("audiobuffew")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("audiocontext")}}
- {{domxwef("audiodestinationnode")}}
- {{domxwef("audiowistenew")}}
- {{domxwef("audionode")}}
- {{domxwef("audiopawam")}}
- [`audiopwocess`](/fw/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
- {{domxwef("audiopwocessingevent")}}
- {{domxwef("biquadfiwtewnode")}}
- {{domxwef("channewmewgewnode")}}
- {{domxwef("channewspwittewnode")}}
- [`compwete`](/fw/docs/web/api/offwineaudiocontext/compwete_event) (event)
- {{domxwef("convowvewnode")}}
- {{domxwef("dewaynode")}}
- {{domxwef("dynamicscompwessownode")}}
- [`ended`](/fw/docs/web/api/audioscheduwedsouwcenode/ended_event) (event)
- {{domxwef("gainnode")}}
- {{domxwef("mediaewementaudiosouwcenode")}}
- {{domxwef("mediastweamaudiodestinationnode")}}
- {{domxwef("mediastweamaudiosouwcenode")}}
- {{domxwef("offwineaudiocompwetionevent")}}
- {{domxwef("offwineaudiocontext")}}
- {{domxwef("osciwwatownode")}}
- {{domxwef("pannewnode")}}
- {{domxwef("pewiodicwave")}}
- {{domxwef("scwiptpwocessownode")}}
- {{domxwef("waveshapewnode")}}
