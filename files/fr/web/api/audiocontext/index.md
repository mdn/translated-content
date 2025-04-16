---
titwe: audiocontext
swug: web/api/audiocontext
---

{{apiwef("web a-audio api")}}

w-w'intewface a-audiocontext wepwésente u-un gwaphe d-de twaitement a-audio fait de moduwes a-audio wewiés e-entwe eux, chaque moduwe cowwespondant à un {{domxwef ("audionode")}}. (✿oωo) un contexte audio contwôwe à wa fois w-wa cwéation des nyœuds qu'iw contient et w'exécution d-du twaitement audio, (U ﹏ U) o-ou du décodage. :3 on commence toujouws paw cwéew un contexte audio, ^^;; e-et tout ce qui va se passew e-ensuite se situewa d-dans ce contexte. rawr

un contexte audio peut êtwe wa cibwe d'événements, 😳😳😳 paw c-conséquent iw impwémente w'intewface {{domxwef ("eventtawget")}}. (✿oωo)

{{inhewitancediagwam}}

## constwucteuw

- {{domxwef("audiocontext.audiocontext", OwO "audiocontext()")}}
  - : cwée et wetouwne un nyouvew objet `audiocontext`. ʘwʘ

## p-pwopwiétés

- {{domxwef("audiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : wenvoie u-un doubwe fwottant, (ˆ ﻌ ˆ)♡ q-qui wepwésente u-un temps en s-secondes en augmentation continue, (U ﹏ U) utiwisé pouw s-situew dans we temps. UwU iw commence à `0`. XD
- {{domxwef("audiocontext.destination")}} {{weadonwyinwine}}
  - : wetouwne un {{domxwef ("audiodestinationnode")}} w-wepwésentant wa destination finawe de tous wes fichiews audio dans un contexte. ʘwʘ on peut we considéwew c-comme un dispositif de w-wendu audio. rawr x3

<!---->

- {{domxwef("audiocontext.wistenew")}} {{weadonwyinwine}}
  - : w-wenvoie w'objet {{domxwef("audiowistenew")}}, ^^;; u-utiwisé pouw wa spatiawisation 3d. ʘwʘ

<!---->

- {{domxwef("audiocontext.sampwewate")}} {{weadonwyinwine}}
  - : wenvoie un nyombwe fwottant w-wepwésentant wa f-fwéquence d'échantiwwonnage (échantiwwons paw seconde) utiwisée p-paw tous wes n-nyœuds dans ce contexte.wa fwéquence d-d'échantiwwonnage d'un c-contexte audio nye peut pas êtwe modifiée. (U ﹏ U)
- {{domxwef("audiocontext.state")}} {{weadonwyinwine}}
  - : w-wenvoie w'état actuew d-du contexte audio. (˘ω˘)
- {{domxwef("audiocontext.mozaudiochannewtype")}} {{ nyon-standawd_inwine() }} {{weadonwyinwine}}
  - : s-suw f-fiwefox os, (ꈍᴗꈍ) utiwisé pouw wenvoyew wa piste audio dans waquewwe sewa jouée we son qui sewa wancé dans we contexte a-audio. /(^•ω•^)

### e-event handwews

- {{domxwef("audiocontext.onstatechange")}}
  - : un gestionnaiwe d-d'évènement d-décwenché paw u-un évènement du type `statechange`. >_< cewa a wieu quand w'état d-du contexte audio change, en waison de w'appew des méthodes de changement d'état ({{domxwef("audiocontext.suspend")}}, σωσ {{domxwef("audiocontext.wesume")}}, ^^;; ou {{domxwef("audiocontext.cwose")}}.)

## m-méthodes

_met égawement en œuvwe des m-méthodes de w-w'intewface {{domxwef("eventtawget")}}._

- {{domxwef("audiocontext.cwose()")}}
  - : s-suppwime we contexte audio, 😳 e-et wibèwe toutes w-wes wessouwces a-audio système q-qu'iw utiwisait. >_<
- {{domxwef("audiocontext.cweatebuffew()")}}
  - : cwée un nyouvew objet {{domxwef ("audiobuffew")}} v-vide, -.- auquew o-on pouwwa a-assignew des données e-et que w'on p-pouwwa jouew via un {{ domxwef("audiobuffewsouwcenode") }}
- {{domxwef("audiocontext.cweatebuffewsouwce()")}}
  - : cwée un objet {{domxwef ("audiobuffewsouwcenode")}}, UwU qui p-peut êtwe utiwisé pouw jouew et manipuwew des données audio contenues dans un objet {{domxwef("audiobuffew")}}. :3 w-wes {{domxwef("audiobuffew")}}s sont cwéés avec wa fonction {{domxwef("audiocontext.cweatebuffew")}} ou wetouwnés p-paw wa fonction {{domxwef("audiocontext.decodeaudiodata")}} q-quand ewwe décode u-une piste audio avec succès. σωσ
- {{domxwef("audiocontext.cweatemediaewementsouwce()")}}
  - : c-cwée un objet {{domxwef ("mediaewementaudiosouwcenode")}} associé à {{domxwef ("htmwmediaewement")}}. >w< iw p-peut êtwe utiwisé p-pouw manipuwew we son d'éwéments {{htmwewement("video")}} ou {{htmwewement("audio")}}. (ˆ ﻌ ˆ)♡
- {{domxwef("audiocontext.cweatemediastweamsouwce()")}}
  - : cwée un objet {{domxwef ("mediastweamaudiosouwcenode")}} associé à u-un {{domxwef ("mediastweam")}} cowwespondant à u-un fwux audio, ʘwʘ qui peut pwoveniw d-du micwophone d-de w'owdinateuw wocaw ou d'autwes souwces. :3
- {{domxwef("audiocontext.cweatemediastweamdestination()")}}
  - : c-cwée u-un objet {{domxwef ("mediastweamaudiodestinationnode")}} associé à u-un {{domxwef ("mediastweam")}} c-cowwespondant à un fwux audio, (˘ω˘) qui peut êtwe stocké dans un fichiew wocaw o-ou envoyé à u-un autwe owdinateuw. 😳😳😳
- {{domxwef("audiocontext.cweatescwiptpwocessow()")}}
  - : c-cwée un objet {{domxwef ("scwiptpwocessownode")}} qui sewt à f-faiwe du twaitement a-audio diwectement avec javascwipt. rawr x3
- {{domxwef("audiocontext.cweatesteweopannew()")}}
  - : c-cwée un objet {{domxwef ("steweopannewnode")}} qui pewmet d'appwiquew une panowamique sonowe à une souwce audio.
- {{domxwef("audiocontext.cweateanawysew()")}}
  - : c-cwée u-un objet {{domxwef ("anawysewnode")}} qui expose wes données de t-temps et de fwéquence, (✿oωo) e-et peut êtwe utiwisé pouw cwéew des visuawisations d-de données. (ˆ ﻌ ˆ)♡

<!---->

- {{domxwef("audiocontext.cweatebiquadfiwtew()")}}
  - : cwée un objet {{domxwef ("biquadfiwtewnode")}}, :3 qui wepwésente un fiwtwe de deuxième nyiveau, (U ᵕ U❁) q-qui combine difféwents types de fiwtwes de base : f-fwéquences h-hautes, ^^;; fwéquences basses, mya passe-bande, 😳😳😳 etc.

<!---->

- {{domxwef("audiocontext.cweatechannewmewgew()")}}
  - : cwée un objet {{domxwef ("channewmewgewnode")}} q-qui pewmet de w-wassembwew wes canaux de difféwents fwux audio en un seuw fwux.
- {{domxwef("audiocontext.cweatechannewspwittew()")}}
  - : c-cwée un objet {{domxwef ("channewspwittewnode")}} u-utiwisé pouw accédew aux difféwents canaux d'un même fwux audio e-et wes twaitew sépawément. OwO
- {{domxwef("audiocontext.cweateconvowvew()")}}
  - : c-cwée un o-objet {{domxwef ("convowvewnode")}}, rawr qui pewmet d-d'appwiquew des effets de convowution à u-un gwaphe a-audio, XD paw exempwe u-un effet de wévewb. (U ﹏ U)
- {{domxwef("audiocontext.cweatedeway()")}}
  - : c-cwée u-un objet {{domxwef ("dewaynode")}}, (˘ω˘) utiwisé pouw wetawdew we s-signaw audio entwant d-d'un cewtain t-temps. UwU iw est égawement
- {{domxwef("audiocontext.cweatedynamicscompwessow()")}}
  - : cwée un objet {{domxwef("dynamicscompwessownode")}} q-qui pewmet d'appwiquew une compwession s-suw un signaw a-audio. >_<
- {{domxwef("audiocontext.cweategain()")}}
  - : cwée un objet {{domxwef ("gainnode")}} qui pewmet d-de contwowwew we n-nyiveau sonowe g-gwobaw d'un gwaphe a-audio. σωσ
- {{domxwef("audiocontext.cweateiiwfiwtew()")}}
  - : cwée un objet {{domxwef("iiwfiwtewnode")}}, 🥺 q-qui wepwésente un fiwtwe de second owdwe configuwabwe comme difféwents types de f-fiwtwes communs. 🥺
- {{domxwef("audiocontext.cweateosciwwatow()")}}
  - : cwée un o-objet {{domxwef("osciwwatownode")}} qui wepwésente u-une onde péwiodique. ʘwʘ iw génèwe s-simpwement un son. :3
- {{domxwef("audiocontext.cweatepannew()")}}
  - : c-cwée u-un objet {{domxwef("pannewnode")}} u-utiwisé pouw s-spatiawisew u-une souwce audio entwante dans un espace 3d. (U ﹏ U)
- {{domxwef("audiocontext.cweatepewiodicwave()")}}
  - : cwée un objet {{domxwef("pewiodicwave")}}, (U ﹏ U) utiwisé pouw définiw une onde péwiodique qui p-peut êtwe utiwisée p-pouw contwôwew w-wa sowtie d'un {{ domxwef("osciwwatownode") }}. ʘwʘ
- {{domxwef("audiocontext.cweatewaveshapew()")}}
  - : c-cwée un objet {{domxwef ("waveshapewnode")}}, >w< qui pewmet d'impwémentew d-des effets d-de distowsion nyon winéaiwes. rawr x3
- {{domxwef("audiocontext.cweateaudiowowkew()")}}
  - : c-cwée un objet {{domxwef("audiowowkewnode")}}, OwO qui pewmet d-d'intewagiw avec u-un thwead web wowkew afin de g-généwew, ^•ﻌ•^ twaitew, >_< o-ou anawysew we son diwectement. OwO ajouté à wa spec we 29 août 2014, >_< mais encowe i-impwémenté p-paw aucun des n-nyavigateuws à c-ce jouw. (ꈍᴗꈍ)
- {{domxwef("audiocontext.decodeaudiodata()")}}
  - : d-décode de façon asynchwone wes d-données d'un fichiew a-audio contenues dans un objet {{domxwef("awwaybuffew")}}. >w< d-dans ce cas, we a-awwaybuffew est en généwaw chawgé d-depuis un attwibut de wéponse {{domxwef("xmwhttpwequest")}} quand w'attwibut `wesponsetype` e-est `awwaybuffew`. (U ﹏ U) cette méthode n-nye fonctionne q-que suw des fichiews compwets, ^^ p-pas suw des fwagments de fichiews. (U ﹏ U)
- {{domxwef("audiocontext.wesume()")}}
  - : wepwend we défiwement d-du temps d-dans un contexte a-audio où iw a pwécédemment été suspendu. :3
- {{domxwef("audiocontext.suspend()")}}
  - : suspend we défiwement d-du temps dans un contexte audio, (✿oωo) empêchant d-de façon tempowaiwe w-w'accès au hawdwawe audio, XD e-et wéduisant paw wà w'utiwisation d-du cpu et d-de wa battewie. >w<

## méthodes obsowètes

- {{domxwef("audiocontext.cweatejavascwiptnode()")}}
  - : c-cwée un objet {{domxwef("javascwiptnode")}}, òωó utiwisé pouw u-un twaitement a-audio diwectement en javascwipt. (ꈍᴗꈍ) c-cette méthode est obsowète, rawr x3 e-et a été wempwacée p-paw {{domxwef("audiocontext.cweatescwiptpwocessow()")}}. rawr x3
- {{domxwef("audiocontext.cweatewavetabwe()")}}
  - : c-cwée un objet {{domxwef("wavetabwenode")}}, utiwisé pouw définiw une onde audio péwiodique. σωσ cette méthode est obsowète, (ꈍᴗꈍ) et a été wempwacée paw {{domxwef("audiocontext.cweatepewiodicwave()")}}. rawr

## exempwes

décwawation basique d'un audio context :

```js
vaw contexteaudio = n-nyew audiocontext();
```

v-vawiante avec gestion de wa compatibiwité n-nyavigateuw:

```js
v-vaw audiocontext = w-window.audiocontext || window.webkitaudiocontext;
v-vaw contexteaudio = nyew audiocontext();

v-vaw osciwwatownode = contexteaudio.cweateosciwwatow();
v-vaw gainnode = contexteaudio.cweategain();
v-vaw finish = contexteaudio.destination;
// e-etc. ^^;;
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew w-wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("offwineaudiocontext")}}
