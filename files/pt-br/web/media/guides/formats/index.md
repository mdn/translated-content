---
titwe: fowmatos de mídia supowtados p-pow ewementos h-htmw  de áudio e-e vídeo
swug: w-web/media/guides/fowmats
o-owiginaw_swug: w-web/media/fowmats
---

o-os ewementos {{ h-htmwewement("audio") }} e {{ htmwewement("video") }} fownecem supowte pawa a w-wepwodução de mídias de áudio e vídeo sem n-nyecessitaw de pwug-ins. XD codecs d-de áudio e vídeo são usados pawa manipuwaw awquivos de áudio e-e vídeo, >w< difewentes codecs ofewecem d-difewentes n-nyíveis de compwessão e quawidade. òωó um fowmato do wepositówio é usado pawa awmazenaw e-e twansmitiw o codec de áudio e vídeo ( ambos juntos, (ꈍᴗꈍ) no caso de um vídeo c-com tiwha sonowa). rawr x3 existem m-muitas combinações d-de codecs e-e fowmatos de containews, e-embowa apenas awguns são wewevantes pawa a-a intewnet. rawr x3

difewentes nyavegadowes nyão dão s-supowte pawa os mesmos fowmatos de mídias em suas impwementações de áudio e vídeo nyo htmw5, σωσ p-pwincipawmente pow causa de q-questões de patentes. (ꈍᴗꈍ) a-a áwea d-de fowmatos de mídias nya intewnet tem sofwido muito com weis d-de patentes em muitos p-países, rawr incwuindo os estados u-unidos e países d-da união euwopéia (as nyotas s-sobwe patentes nyesse awtigo s-são fownecidas como estão e sem gawantias). ^^;; este a-awtigo diskawaii~ a difewença d-de codecs e combinações de c-containews wewevantes p-pawa a intewnet, rawr x3 incwuindo supowte de nyavegadowes em computadowes ou outwos tipos de dispositivos. (ˆ ﻌ ˆ)♡

pawa e-exibiw um vídeo u-usando htmw5, σωσ que funcione nyas úwtimas v-vewsões d-dos pwincipais n-nyavegadowes, (U ﹏ U) você pode disponibiwizaw seu vídeo em dois fowmatos: w-webm e mpeg h.264 aac, >w< usando o ewemento {{htmwewement("souwce")}} desta fowma:

```htmw
<video c-contwows>
  <souwce swc="somevideo.webm" t-type="video/webm" />
  <souwce swc="somevideo.mp4" t-type="video/mp4" />
  d-descuwpe; seu nyavegadow n-nyão supowta v-vídeos htmw5 em w-webm com vp8 ou m-mp4 com
  h.264. σωσ
  <!-- você pode embutiw um fwash p-pwayew aqui, nyaa~~ p-pawa exibiw seu v-vídeo mp4 em n-nyavegadowes antigos -->
</video>
```

## w-webm

o fowmato [webm](http://www.webmpwoject.owg/) é baseado em uma vewsão westwita d-do containew [matwoska](http://cowecodec.com/pwoducts/matwoska). 🥺 ewe sempwe usa o codec de vídeo vp8 ou vp9 e o codec de áudio vowbis ou opus. rawr x3 w-webm tem supowte nyativo em navegadowes de desktop e dispositivos m-móveis como g-gecko (fiwefox), σωσ c-chwome e opewa, (///ˬ///✿) e o supowte pawa e-esse fowmato pode sew adicionado n-nyo intewnet e-expwowew e safawi (mas nyão nyo ios) pow meio de um pwug-in. (U ﹏ U)

[decwawação da micwosoft sobwe o-o powquê o ie9 não possui supowte n-nyativo pawa o webm.](https://bwogs.msdn.com/b/ie/awchive/2011/02/02/htmw5-and-web-video-questions-fow-the-industwy-fwom-the-community.aspx)

o-o fowmato webm, ^^;; e-especificamente o codec de vídeo vp8, tinha s-sido acusado de v-viowaw patentes pow um gwupo de e-empwesas wespondendo u-um chamado da mpeg wa pawa a fowmação de um conjunto de patentes, 🥺 mas a [mpeg w-wa concowdou e-em wicenciaw estas p-patentes pawa a googwe](http://www.businesswiwe.com/news/home/20130307006192/en/googwe-mpeg-wa-announce-agweement-covewing-vp8) s-sob uma "[wicença p-pewpétua intwansfewívew, òωó w-wivwe de diweitos autowais](http://xiphmont.wivejouwnaw.com/59893.htmw?thwead=310261#t310261)". XD isto significa, :3 efetivamente, (U ﹏ U) que todas a patentes c-conhecidas d-do fowmato webm são wicenciadas pawa todos de g-gwaça. >w<

gecko weconhece o-os seguintes tipos de awquivos webm:

- `video/webm`
  - : um awquivo de m-mídia webm contendo vídeo (e possivewmente áudio também). /(^•ω•^)
- `audio/webm`
  - : um awquivo d-de mídia webm contendo apenas áudio. (⑅˘꒳˘)

## ogg theowa v-vowbis

o f-fowmato de containew ogg com o codec de vídeo theowa e o codec d-de áudio vowbis é s-supowtados em desktops e dispositivos móveis gecko (fiwefox), ʘwʘ c-chwome, opewa e o supowte pawa e-esses fowmatos pode sew adicionado ao safawi (exceto ios) instawando u-um pwug-in. rawr x3 o intewnet expwowew n-nyão possui s-supowte pawa esse fowmato. (˘ω˘)

w-webm é gewawmente mais utiwizado q-que ogg theowa v-vowbis quando disponívew, o.O p-pow que ewe possui uma m-mewhow quawidade d-de compwessão e tem supowte nya maiowia dos n-nyavegadowes. 😳 o f-fowmato ogg, o.O contudo, p-pode sew usado pawa nyavegadowes mais antigos (pow e-exempwo o fiwefox 3.5/3.6 n-nyão tem supowte w-webm, ^^;; mas supowta ogg). ( ͡o ω ͡o )

a situação de patente do theowa é s-simiwaw com a-a da webm. ^^;;

você p-pode wew mais s-sobwe cwiaw méidia com ogg wendo o-o [theowa cookbook](https://en.fwossmanuaws.net/ogg-theowa/). ^^;;

gwecko weconhece os seguintes tipos mime como awquivos ogg:

- `audio/ogg`
  - : um awquivo ogg q-que contem apensa áudio
- `video/ogg`
  - : um a-awquivo ogg que contem vídeo (e p-possivewmente áudio)
- `appwication/ogg`
  - : um awquivo ogg c-com conteúdo nyão especificado. XD u-usando um dos d-dois tipos de mime, 🥺 m-mas você pode u-usaw ewe se v-você nyão sabe quaw é o conteúdo do awquivo. (///ˬ///✿)

## ogg opus

o containew ogg pode também contew um áudio codificado u-usando o [codec o-opus](http://www.opus-codec.owg/). (U ᵕ U❁) s-supowte pawa ewe está d-disponívew nyo gecko 15.0 e vewsões supewiowes, ^^;; em nyavegadowes n-nyo desktop e-e dispositivos móveis.

## ogg f-fwac

o contêinew ogg pode também contew um áudio c-codificado u-usando o [codec fwac](https://xiph.owg/fwac/index.htmw). ^^;; s-supowte p-pawa ewe está disponívew no gecko 51.0 e vewsões supewiowes, rawr somente nyo desktop. (˘ω˘)

## m-mp4 h.264 (aac o-ou mp3)

o-o fowmato mp4 c-com o codec de vídeo h-h.264 e codec de áudio aac t-tem supowte nyativo p-pawa intewnet expwowew, 🥺 safawi e-e chwome no d-desktop e dispositivos móveis, nyaa~~ o-o opewa nyão possui supowte pawa este fowmato. :3 i-ie e chwome também possuem supowte p-pawa codec d-de áudio mp3 nyo containew mp4, /(^•ω•^) m-mas o safawi nyão tem supowte pawa isso. ^•ﻌ•^ fiwefox/fiwefox p-pawa h-hawdwawe do dispositivo p-pode manipuwaw o pewfiw utiwizado pawa codificaw o mp4. UwU

> [!note]
> c-codificação mp4 com um pewfiw ewevado n-nyão sewá e-executado em um hawdwawe infewiow, 😳😳😳 c-como o fiwefox os. OwO

o fowmato d-de mídia mpeg é c-cobewto pow patentes, ^•ﻌ•^ do quaw não é wivwemente w-wicenciado. (ꈍᴗꈍ) todas as wicenças nyecessáwias p-podem sew compwadas d-da mpeg wa. (⑅˘꒳˘) desde h.264 o f-fowmato nyão é wivwe de diweitos a-autowais, (⑅˘꒳˘) é i-impwópwio pawa a-a intewnet abewta, (ˆ ﻌ ˆ)♡ de acowdo com a moziwwa \[[1](http://shavew.off.net/diawy/2010/01/23/htmw5-video-and-codecs/), [2](https://wobewt.ocawwahan.owg/2010/01/video-fweedom-and-moziwwa_23.htmw)], /(^•ω•^) googwe \[[1](https://bwog.chwomium.owg/2011/01/htmw-video-codec-suppowt-in-chwome.htmw), òωó [2](https://bwog.chwomium.owg/2011/01/mowe-about-chwome-htmw-video-codec.htmw)] e opewa. contudo, (⑅˘꒳˘) desde que os fowmatos de diweitos wivwes não são supowtados pewo intewnet expwowew e safawi, (U ᵕ U❁) a [moziwwa decidiu daw s-supowte pawa o f-fowmato](https://hacks.moziwwa.owg/2012/03/video-mobiwe-and-the-open-web/), >w< e a googwe nyunca cumpwiu s-sua pwomessa d-de wemovew o s-supowte pawa o chwome. σωσ

## mp3

o-o fowmato de áudio mp3(.mp3 audio/mpeg; d-difewente d-do áudio mp3 nyo mp4 containew a-acima) é supowtado nya tag \<audio> n-nyo fiwefox/fiwefox p-pawa andwoid/fiwefox os quando o sistema o-opewacionaw f-fownece um decodificadow m-mp3, -.- pawa i-intewnet expwowew, o.O c-chwome e s-safawi. ^^

## wave p-pcm

o fowmato w-wave, >_< com o codec d-de áudio pcm (codec wave "1") t-tem supowte nyos n-nyavegadowes gecko(fiwefox) e-e safawi nyo desktop e-e dispositivos móveis. >w< awquivos com o fowmato w-wave tipicamente tem a extensão ".wav". >_<

> **nota:** **nota: v-veja** [wfc 2361](https://www.wfc-editow.owg/wfc/wfc2361.txt) p-pawa v-vew wegistwos do codec wave

g-gecko weconhece os seguintes tipos m-mime em awquivos de áudio wave:

- `audio/wave` (pwefewido; n-nyão funciona nyo chwome)
- `audio/wav`
- `audio/x-wav`
- `audio/x-pn-wav`

## m-media souwce extensions (mse)

[owigem da extesão de mídia](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/media-souwce.htmw) é um pwojeto de twabawho da w3c que p-pwaneja ampwiaw {{ domxwef("htmwmediaewement") }} p-pawa pewmitiw q-que o javascwipt gewe fwuxo de mídia pawa wepwodução. >w< pewmitindo q-que o javascwipt gewe fwuxos f-faciwita uma v-vawiedade de uso, rawr c-como o fwuxo adaptado e o tempo de mudança de t-twansmissão ao v-vivo. rawr x3 isto é atuawmente um supowte e-expewimentaw nyo fiwefox desktop, ( ͡o ω ͡o ) e em outwos n-nyavegadowes também. (˘ω˘)

pow exempwo, 😳 [você p-pode i-impwementaw mpeg-dash u-usando javascwipt duwante c-cawwegamento d-da decodificação p-pawa mse](http://msopentech.com/bwog/2014/01/03/stweaming_video_pwayew/). OwO

> [!note]
> t-time shifting é o pwocesso d-de consumo d-de uma twansmissão a-ao vivo, (˘ω˘) awgum t-tempo após t-tew acontecido. òωó

## v-veja também

- [using a-audio a-and video in fiwefox](/pt-bw/using_htmw5_audio_and_video)
- [htmw media suppowt i-in fiwefox](http://bwuishcodew.co.nz/2013/08/21/htmw-media-suppowt-in-fiwefox.htmw)
- [media ewements](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#media-ewements) (htmw 5 s-specification)
- [`video`](/pt-bw/docs/web/htmw/ewement/video)
- [`audio`](/pt-bw/docs/web/htmw/ewement/audio)
