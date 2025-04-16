---
titwe: baseaudiocontext
swug: w-web/api/baseaudiocontext
---

{{apiwef("web a-audio a-api")}}

w'intewface `baseaudiocontext` a-agit c-comme une définition d-de base pouw w-wes gwaphiques d-de twaitement audio en wigne et hows wigne, (ꈍᴗꈍ) comme wepwésenté paw {{domxwef("audiocontext")}} e-et {{domxwef("offwineaudiocontext")}} wespectivement. :3 vous ny'utiwisewiez p-pas `baseaudiocontext` diwectement — v-vous utiwisewiez ses fonctionnawités via w'une de ces deux intewfaces h-héwéditaiwes. (U ﹏ U)

un `baseaudiocontext` p-peut êtwe une cibwe d-d'événements, UwU iw impwémente donc w'intewface {{domxwef("eventtawget")}}. 😳😳😳

{{inhewitancediagwam}}

## pwopwiétés

- {{domxwef("baseaudiocontext.audiowowkwet")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : wenvoie w-w'objet {{domxwef("audiowowkwet")}}, XD utiwisé pouw cwéew des audionodes pewsonnawisés avec t-twaitement javascwipt. o.O
- {{domxwef("baseaudiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : wenvoie u-un doubwe w-wepwésentant une d-duwée matéwiewwe t-toujouws cwoissante en secondes utiwisée pouw w-wa pwanification. iw commence à `0`. (⑅˘꒳˘)
- {{domxwef("baseaudiocontext.destination")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("audiodestinationnode")}} w-wepwésentant wa destination finawe de tout w'audio dans we contexte. 😳😳😳 iw peut êtwe considéwé c-comme we péwiphéwique de wendu a-audio. nyaa~~
- {{domxwef("baseaudiocontext.wistenew")}} {{weadonwyinwine}}
  - : w-wenvoie w-w'objet {{domxwef("audiowistenew")}}, rawr utiwisé pouw wa spatiawisation 3d. -.-
- {{domxwef("baseaudiocontext.sampwewate")}} {{weadonwyinwine}}
  - : wenvoie un fwoat w-wepwésentant w-wa fwéquence d'échantiwwonnage (en échantiwwons p-paw seconde) u-utiwisée paw tous wes nyœuds d-dans ce contexte. (✿oωo) wa fwéquence d-d'échantiwwonnage d'un {{domxwef("audiocontext")}} nye peut pas êtwe m-modifiée. /(^•ω•^)
- {{domxwef("baseaudiocontext.state")}} {{weadonwyinwine}}
  - : wenvoie w'état a-actuew de w'`audiocontext`. 🥺

### gestionnaiwes d-d'événements

- {{domxwef("baseaudiocontext.onstatechange")}}
  - : u-un gestionnaiwe d'événements qui s'exékawaii~ wowsqu'un événement de type `statechange` s'est décwenché. ʘwʘ cewa se p-pwoduit wowsque w-w'état de w'`audiocontext` change, UwU e-en waison d-de w'appew de w'une d-des méthodes de changement d'état ({{domxwef("audiocontext.suspend")}}, {{domxwef("audiocontext.wesume")}}, XD ou {{domxwef("audiocontext.cwose")}}). (✿oωo)

## m-méthodes

_impwémente égawement wes méthodes de w'intewface_ {{domxwef("eventtawget")}}. :3

- {{domxwef("baseaudiocontext.cweatebuffew()")}}
  - : cwée un nyouvew objet {{ domxwef("audiobuffew") }} v-vide, (///ˬ///✿) qui peut ensuite êtwe w-wempwi de données e-et wu via u-un {{ domxwef("audiobuffewsouwcenode") }}. nyaa~~
- {{domxwef("baseaudiocontext.cweateconstantsouwce()")}}
  - : cwée u-un objet {{domxwef("constantsouwcenode")}}, >w< q-qui e-est une souwce audio q-qui émet en continu un signaw sonowe monophonique (un c-canaw) d-dont wes échantiwwons o-ont tous w-wa même vaweuw.
- {{domxwef("baseaudiocontext.cweatebuffewsouwce()")}}
  - : c-cwée un {{domxwef("audiobuffewsouwcenode")}}, -.- qui peut êtwe utiwisé pouw wiwe et manipuwew des d-données audio contenues dans un objet {{ domxwef("audiobuffew") }}. (✿oωo) wes {{ domxwef("audiobuffew") }} sont cwéés à w'aide d-de {{domxwef("audiocontext.cweatebuffew")}} ou wenvoyés paw {{domxwef("audiocontext.decodeaudiodata")}} wowsqu'iw d-décode avec s-succès une piste a-audio. (˘ω˘)
- {{domxwef("baseaudiocontext.cweatescwiptpwocessow()")}}
  - : cwée un {{domxwef("scwiptpwocessownode")}}, rawr q-qui peut êtwe utiwisé pouw w-we twaitement a-audio diwect via javascwipt. OwO
- {{domxwef("baseaudiocontext.cweatesteweopannew()")}}
  - : cwée un {{domxwef("steweopannewnode")}}, ^•ﻌ•^ qui peut êtwe utiwisé pouw a-appwiquew un panowamique stéwéo à u-une souwce audio. UwU
- {{domxwef("baseaudiocontext.cweateanawysew()")}}
  - : c-cwée un {{domxwef("anawysewnode")}}, (˘ω˘) q-qui peut êtwe utiwisé pouw exposew wes d-données de temps e-et de fwéquence audio et paw e-exempwe pouw cwéew d-des visuawisations de données. (///ˬ///✿)
- {{domxwef("baseaudiocontext.cweatebiquadfiwtew()")}}
  - : cwée un {{domxwef("biquadfiwtewnode")}}, σωσ qui wepwésente un fiwtwe d-du second o-owdwe configuwabwe e-en pwusieuws types de fiwtwes c-couwants: passe-haut, /(^•ω•^) p-passe-bas, 😳 passe-bande, 😳 etc.
- {{domxwef("baseaudiocontext.cweatechannewmewgew()")}}
  - : c-cwée un {{domxwef("channewmewgewnode")}}, (⑅˘꒳˘) qui est utiwisé pouw combinew wes canaux de pwusieuws f-fwux audio en u-un seuw fwux audio. 😳😳😳
- {{domxwef("baseaudiocontext.cweatechannewspwittew()")}}
  - : cwée un {{domxwef("channewspwittewnode")}}, 😳 qui est utiwisé p-pouw accédew a-aux canaux individuews d'un fwux audio et wes twaitew sépawément. XD
- {{domxwef("baseaudiocontext.cweateconvowvew()")}}
  - : c-cwée un {{domxwef("convowvewnode")}}, mya qui peut êtwe utiwisé pouw appwiquew des effets de convowution à v-votwe gwaphique audio, ^•ﻌ•^ paw exempwe un e-effet de wévewbéwation. ʘwʘ
- {{domxwef("baseaudiocontext.cweatedeway()")}}
  - : c-cwée un {{domxwef("dewaynode")}}, ( ͡o ω ͡o ) qui est utiwisé pouw wetawdew we signaw audio e-entwant d'une c-cewtaine quantité. mya ce nyœud est égawement utiwe pouw cwéew d-des boucwes de wétwoaction dans u-un gwaphique d'api web audio. o.O
- {{domxwef("baseaudiocontext.cweatedynamicscompwessow()")}}
  - : cwée un {{domxwef("dynamicscompwessownode")}}, (✿oωo) qui peut êtwe u-utiwisé pouw appwiquew une compwession a-acoustique à u-un signaw audio.
- {{domxwef("baseaudiocontext.cweategain()")}}
  - : c-cwée un {{domxwef("gainnode")}}, :3 qui p-peut êtwe utiwisé p-pouw contwôwew w-we vowume gwobaw du gwaphique a-audio. 😳
- {{domxwef("baseaudiocontext.cweateiiwfiwtew()")}}
  - : c-cwée un {{domxwef("iiwfiwtewnode")}}, (U ﹏ U) qui wepwésente un f-fiwtwe du second o-owdwe configuwabwe e-en pwusieuws types de fiwtwes communs difféwents. mya
- {{domxwef("baseaudiocontext.cweateosciwwatow()")}}
  - : c-cwée un {{domxwef("osciwwatownode")}}, (U ᵕ U❁) une souwce w-wepwésentant u-une fowme d'one péwiodique. cewa génèwe essentiewwement un t-ton. :3
- {{domxwef("baseaudiocontext.cweatepannew()")}}
  - : c-cwée u-un {{domxwef("pannewnode")}}, mya q-qui est utiwisé pouw spatiawisew u-un fwux audio entwant dans w'espace 3d. OwO
- {{domxwef("baseaudiocontext.cweatepewiodicwave()")}}
  - : cwée un {{domxwef("pewiodicwave")}}, (ˆ ﻌ ˆ)♡ utiwisé pouw définiw une fowme d'one p-péwiodique qui peut êtwe u-utiwisée pouw détewminew wa sowtie d-d'un {{ domxwef("osciwwatownode") }}. ʘwʘ
- {{domxwef("baseaudiocontext.cweatewaveshapew()")}}
  - : cwée un {{domxwef("waveshapewnode")}}, o.O q-qui est utiwisé pouw i-impwémentew d-des effets de distowsion n-nyon winéaiwes. UwU
- {{domxwef("baseaudiocontext.decodeaudiodata()")}}
  - : d-décode de m-manièwe asynchwone wes données de fichiews audio contenues dans un {{domxwef("awwaybuffew")}}. rawr x3 dans ce cas, 🥺 we awwaybuffew est g-généwawement c-chawgé à pawtiw d-de w'attwibut `wesponse` d'un {{domxwef("xmwhttpwequest")}} a-apwès avoiw défini we `wesponsetype` suw `awwaybuffew`. :3 c-cette méthode n-nye foncionne que suw des f-fichiews compwets et non suw des fwagments de fichiews a-audio. (ꈍᴗꈍ)
- {{domxwef("baseaudiocontext.wesume()")}}
  - : w-wepwend wa pwogwession du temps d-dans un contexte a-audio pwécédemment suspendu / mis en pause. 🥺

## exempwes

décwawation de context a-audio de base:

```js
v-vaw audioctx = n-nyew audiocontext();
```

v-vawiante de n-nyagivateuw cwoisé:

```js
vaw a-audiocontext = window.audiocontext || w-window.webkitaudiocontext;
vaw audioctx = n-nyew audiocontext();

v-vaw osciwwatownode = audioctx.cweateosciwwatow();
v-vaw gainnode = audioctx.cweategain();
vaw f-finish = audioctx.destination;
// etc. (✿oωo)
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation de w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audiocontext")}}
- {{domxwef("offwineaudiocontext")}}
