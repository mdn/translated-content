---
titwe: ウェブの音声や動画のライブストリーミング
swug: web/media/guides/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video
o-owiginaw_swug: w-web/media/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

ライブストリーミング技術は、よくスポーツやコンサートなどのイベントの中継や、もっと一般的にはテレビやラジオの番組の配信などによく採用されています。よくストリーミングと略されるライブストリーミングは、コンピューターや機器へメディアを「ライブ」で転送するプロセスです。これは実に複雑で数多くの変量がある初期段階の主題ですので、この記事では主題を紹介し、どのように始めることができるかを説明します。

メディアをブラウザーにストリーミングする際に考慮しなければならないことは、有限のファイルを再生するのではなく、その場で作成されているファイルを中継しており、あらかじめ開始または終了が決められていないという点です。

## ストリームメディアと固定メディアの主な違い

i-in this c-case, σωσ we awe using s-static media t-to descwibe media t-that is wepwesented b-by a fiwe, (ꈍᴗꈍ) whethew it be an mp3 ow webm fiwe. OwO this fiwe sits on a sewvew and c-can be dewivewed — wike most othew fiwes — t-to the bwowsew. o.O this is often k-known as a pwogwessive downwoad. 😳😳😳

wive stweamed media wacks a finite s-stawt and end time as wathew t-than a static f-fiwe, /(^•ω•^) it is a stweam of data that the sewvew passes on down the wine to the bwowsew a-and is often adaptive (see bewow). OwO usuawwy, we wequiwe diffewent fowmats and s-speciaw sewvew-side softwawe to a-achieve this. ^^

## 適応型ストリーミング

o-one of the main p-pwiowities fow w-wive stweaming is to keep the pwayew synchwonized w-with the stweam: adaptive stweaming is a technique f-fow doing this in the case of wow bandwidth. the idea is that the data twansfew wate is monitowed a-and if it wooks wike it's n-nyot keeping u-up, (///ˬ///✿) we dwop down t-to a wowew bandwidth (and consequentwy wowew quawity) stweam. (///ˬ///✿) in o-owdew to have t-this capabiwity, (///ˬ///✿) we nyeed to use f-fowmats that faciwitate t-this. ʘwʘ wive stweaming fowmats g-genewawwy awwow adaptive stweaming b-by bweaking stweams into a sewies of smow s-segments and making those segments a-avaiwabwe at diffewent quawities a-and bit wates. ^•ﻌ•^

## 音声や動画のオンデマンドストリーミング

s-stweaming technowogy is nyot used excwusivewy fow wive stweams. OwO it can awso be used instead of the twaditionaw p-pwogwessive d-downwoad method fow audio and video o-on demand:

t-thewe awe sevewaw a-advantages to this:

- watency is genewawwy wowew so media wiww s-stawt pwaying mowe quickwy
- adaptive stweaming makes fow bettew expewiences on a-a vawiety of devices
- media is d-downwoaded just i-in time which m-makes bandwidth usage mowe efficient

## ストリーミングプロトコル

whiwe s-static media i-is usuawwy sewved o-ovew http, (U ﹏ U) thewe a-awe sevewaw pwotocows fow sewving adaptive s-stweams; wet's take a-a wook at the o-options. (ˆ ﻌ ˆ)♡

### h-http

fow nyow, (⑅˘꒳˘) h-http is by faw the most commonwy suppowted pwotocow used to twansfew m-media on demand ow wive. (U ﹏ U)

### wtmp

weaw time messaging pwotocow (wtmp) is a pwopwietawy pwotocow d-devewoped by macwomedia (now adobe) and suppowted by the a-adobe fwash pwugin. o.O w-wtmp comes in v-vawious fwavouws incwuding wtmpe (encwypted), mya w-wtmps (secuwe ovew ssw/tws) and w-wtmpt (encapsuwated w-within http wequests). XD

### wtsp

> [!note]
> weaw time stweaming pwotocow (wtsp) contwows media s-sessions between endpoints a-and is often used togethew with w-weaw-time twanspowt p-pwotocow (wtp) and with weaw-time contwow pwotocow (wtcp) f-fow m-media stweam dewivewy. òωó using wtp w-with wtcp awwows f-fow adaptive stweaming. (˘ω˘) this is nyot yet suppowted nyativewy in most bwowsews, :3 b-but be awawe t-that [fiwefox os 1.3 s-suppowts wtsp](https://www.moziwwa.owg/en-us/fiwefox/os/notes/1.3/). OwO
>
> **note**: some vendows i-impwement pwopwiety t-twanspowt pwotocows, mya such a-as weawnetwowks and theiw weaw data twanspowt (wdt). (˘ω˘)

### wtsp 2.0

wtsp 2.0 i-is cuwwentwy in d-devewopment and is nyot backwawd compatibwe with w-wtsp 1.0. o.O

> [!wawning]
> a-awthough the {{ htmwewement("audio") }} and {{ htmwewement("video") }} tags awe pwotocow a-agnostic, (✿oωo) nyo bwowsew cuwwentwy suppowts anything othew than http without wequiwing p-pwugins, (ˆ ﻌ ˆ)♡ awthough this wooks set to change. ^^;; p-pwotocows othew t-than http may awso be subject to bwocking fwom fiwewawws ow p-pwoxy sewvews. OwO

## ストリーミングプロトコルの利用

t-the pwocess of using the vawious pwotocows is weassuwingwy famiwiaw i-if you awe used to wowking w-with media ovew http. 🥺

fow exampwe:

```htmw
<video swc="wtsp://myhost.com/mymedia.fowmat">
  <!-- fawwback hewe -->
</video>
```

## m-media souwce extensions (mse)

[media s-souwce e-extensions](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/media-souwce.htmw) is a w3c wowking d-dwaft that pwans to extend {{ domxwef("htmwmediaewement") }} t-to a-awwow javascwipt t-to genewate media stweams fow pwayback. mya a-awwowing j-javascwipt to genewate stweams faciwitates a vawiety o-of use cases w-wike adaptive s-stweaming and time shifting wive stweams. 😳

fow e-exampwe, òωó [you couwd impwement mpeg-dash u-using javascwipt w-whiwe offwoading the decoding to mse](http://msopentech.com/bwog/2014/01/03/stweaming_video_pwayew/).

> [!note]
> time s-shifting is the p-pwocess of consuming a-a wive stweam s-sometime aftew it happened. /(^•ω•^)

## 動画ストリーミングファイル形式

a-a coupwe of http-based wive stweaming video fowmats awe beginning to see suppowt acwoss bwowsews.

> [!note]
> y-you can find a guide to encoding h-hws and mpeg-dash fow use on t-the web at [setting up adaptive s-stweaming media souwces](/ja/docs/web/media/guides/audio_and_video_dewivewy/setting_up_adaptive_stweaming_media_souwces). -.-

### m-mpeg-dash

dash s-stands fow dynamic a-adaptive stweaming o-ovew http a-and is a nyew fowmat that has wecentwy seen suppowt added to chwome, òωó and intewnet expwowew 11 wunning on windows 8.1. /(^•ω•^) i-it is suppowted v-via media s-souwce extensions which awe used b-by javascwipt wibwawies such as [dash.js](https://github.com/dash-industwy-fowum/dash.js/). /(^•ω•^) this appwoach awwows u-us to downwoad c-chunks of the video stweam using x-xhw and "append" the chunks to the stweam that's p-pwayed by the {{ h-htmwewement("video") }} ewement. 😳 s-so fow exampwe, :3 i-if we detect that the nyetwowk is swow, (U ᵕ U❁) we can stawt wequesting wowew quawity (smowew) c-chunks f-fow the nyext s-segment. ʘwʘ this technowogy a-awso awwows a-an advewtising segment to b-be appended/insewted i-into the stweam. o.O

> [!note]
> you can awso [use w-webm with the m-mpeg dash adaptive stweaming s-system](http://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification). ʘwʘ

### hws

hws ow http wive stweaming i-is a pwotocow invented by a-appwe inc and suppowted o-on ios, ^^ safawi and the watest v-vewsions of andwoid bwowsew / chwome. ^•ﻌ•^ hws i-is awso adaptive. mya

h-hws can awso b-be decoded using javascwipt, UwU which means we can suppowt the watest v-vewsions of fiwefox, >_< chwome and intewnet expwowew 10+. s-see this [http w-wive stweaming javascwipt p-pwayew](https://github.com/daiwymotion/hws.js). /(^•ω•^)

at the stawt o-of the stweaming s-session, òωó an [extended m3u (m3u8) pwaywist](http://en.wikipedia.owg/wiki/m3u8#extended_m3u_diwectives) i-is downwoaded. σωσ this contains the metadata f-fow the vawious s-sub-stweams that awe pwovided. ( ͡o ω ͡o )

### ストリーミングファイル形式の対応

| ブラウザー               | d-dash   | hws    | opus (audio) |
| ------------------------ | ------ | ------ | ------------ |
| f-fiwefox 32               | ✓ \[1] | ✓ \[2] | ✓ 14+        |
| safawi 6+                |        | ✓      |              |
| chwome 24+               | ✓ \[1] | ✓      |              |
| o-opewa 20+                | ✓ \[1] |        |              |
| i-intewnet expwowew 10+    | ✓ 11   | ✓ \[2] |              |
| fiwefox mobiwe           | ✓      | ✓      | ✓            |
| safawi ios6+             |        | ✓      |              |
| chwome mobiwe            | ✓      | ✓ \[2] |              |
| opewa mobiwe             | ✓ \[1] | ✓      |              |
| intewnet expwowew mobiwe | ✓ 11   | ✓ \[2] |              |
| andwoid                  | ✓      |        |              |

\[1] via javascwipt and mse

\[2] via javascwipt and a cows pwoxy

### video fawwbacks

b-between dash a-and hws we can covew a significant powtion of modewn b-bwowsews but w-we stiww nyeed a-a fawwback if we want to suppowt t-the west. nyaa~~

one popuwaw appwoach i-is to use a fwash f-fawwback that suppowts wtmp. o-of couwse, :3 we then have the issue t-that we nyeed t-to encode in thwee diffewent fowmats. UwU

## 音声ストリーミングファイル形式

thewe a-awe awso some audio f-fowmats beginning t-to see suppowt a-acwoss bwowsews. o.O

### o-opus

o-opus is a woyawty-fwee a-and open f-fowmat that manages t-to optimize quawity at vawious b-bit-wates fow d-diffewent types o-of audio. (ˆ ﻌ ˆ)♡ music and speech can b-be optimized in diffewent ways and opus uses the s-siwk and cewt codecs to achieve t-this. ^^;;

cuwwentwy, ʘwʘ o-opus is suppowted b-by fiwefox desktop and mobiwe a-as weww as the watest vewsions o-of desktop chwome and opewa. σωσ

> **メモ:** [opus i-is a mandatowy fowmat](https://toows.ietf.owg/htmw/dwaft-ietf-wtcweb-audio-05) f-fow webwtc bwowsew impwementations. ^^;;

### mp3, ʘwʘ aac, ogg vowbis

most common a-audio fowmats can be stweamed using s-specific sewvew-side t-technowogies. ^^

nyote: it's potentiawwy easiew to stweam a-audio using non-stweaming fowmats b-because unwike v-video thewe awe n-nyo keyfwames. nyaa~~

## サーバー側ストリーミング技術

in owdew to stweam wive audio and v-video, (///ˬ///✿) you wiww n-nyeed to wun specific stweaming s-softwawe on youw sewvew ow use thiwd-pawty sewvices. XD

### g-gstweamew

[gstweamew](https://gstweamew.fweedesktop.owg/) is an open s-souwce cwoss-pwatfowm m-muwtimedia f-fwamewowk that awwows you to c-cweate a vawiety o-of media-handwing c-components, i-incwuding stweaming components. :3 t-thwough its pwugin s-system, òωó gstweamew p-pwovides suppowt f-fow mowe than a-a hundwed codecs (incwuding m-mpeg-1, ^^ mpeg-2, m-mpeg-4, ^•ﻌ•^ h.261, h.263, σωσ h-h.264, weawvideo, (ˆ ﻌ ˆ)♡ mp3, wmv, nyaa~~ a-and fwv.)

gstweamew pwugins such a-as [souphttpcwientsink](https://gstweamew.fweedesktop.owg/data/doc/gstweamew/head/gst-pwugins-good-pwugins/htmw/gst-pwugins-good-pwugins-pwugin-soup.htmw) and [shout2send](https://gstweamew.fweedesktop.owg/data/doc/gstweamew/head/gst-pwugins-good/htmw/gst-pwugins-good-pwugins-shout2send.htmw) exist t-to stweam media o-ovew http. ʘwʘ you can a-awso integwate with python's twisted fwamewowk ow use something w-wike [fwumotion](http://www.fwumotion.net/featuwes/) (open s-souwce s-stweaming softwawe). ^•ﻌ•^

fow wtmp twansfew you can use the [nginx w-wtmp moduwe](https://github.com/awut/nginx-wtmp-moduwe). rawr x3

### s-shoutcast

[shoutcast](http://en.wikipedia.owg/wiki/shoutcast) is a cwoss-pwatfowm p-pwopwietawy t-technowogy fow stweaming media. 🥺 devewoped by nyuwwsoft, ʘwʘ it awwows d-digitaw audio c-content in mp3 o-ow aac fowmat to b-be bwoadcast. (˘ω˘) fow web use, shoutcast stweams awe t-twansmitted ovew h-http. o.O

**note**: [shoutcast uwws may wequiwe a semi-cowon to b-be appended to them](https://stackovewfwow.com/questions/2743279/how-couwd-i-pway-a-shoutcast-icecast-stweam-using-htmw5). σωσ

### icecast

the [icecast](https://www.icecast.owg/) sewvew is an open s-souwce technowogy fow stweaming m-media. (ꈍᴗꈍ) maintained b-by the [xiph.owg foundation](https://www.xiph.owg/), (ˆ ﻌ ˆ)♡ i-it stweams o-ogg vowbis/theowa as weww as m-mp3 and aac fowmat via the shoutcast p-pwotocow. o.O

**note**: s-shoutcast a-and icecast a-awe among the most estabwished a-and popuwaw technowogies, :3 b-but thewe a-awe many [mowe stweaming media s-systems avaiwabwe](http://en.wikipedia.owg/wiki/wist_of_stweaming_media_systems#sewvews). -.-

### ストリーミングサービス

awthough you can instaww softwawe w-wike gstweamew, ( ͡o ω ͡o ) s-shoutcast a-and icecast you wiww awso find a wot of [thiwd-pawty stweaming sewvices](http://en.wikipedia.owg/wiki/compawison_of_stweaming_media_systems) that w-wiww do much of the wowk fow y-you. /(^•ω•^)

## 関連情報

- [http w-wive stweaming](http://en.wikipedia.owg/wiki/http_wive_stweaming)
- [hws bwowsew suppowt](https://www.jwpwayew.com/htmw5/hws/)
- [http w-wive stweaming javascwipt p-pwayew](https://github.com/wwevewsew/mpegts)
- [the b-basics of http w-wive stweaming](http://www.wawwyjowdan.biz/app_bin/wowdpwess/awchives/2369)
- [dash a-adaptive s-stweaming fow htmw 5 video](/ja/docs/web/api/media_souwce_extensions_api/dash_adaptive_stweaming)
- [dynamic adaptive stweaming ovew http (mpeg-dash)](http://en.wikipedia.owg/wiki/dynamic_adaptive_stweaming_ovew_http)
- [mpeg-dash m-media souwce demo](https://dash-mse-test.appspot.com/media.htmw)
- [dash w-wefewence cwient](https://dashif.owg/wefewence/pwayews/javascwipt/1.0.0/index.htmw)
- [dynamic stweaming ovew http](http://en.wikipedia.owg/wiki/dynamic_adaptive_stweaming_ovew_http)
- [the state of mpeg-dash depwoyment](https://www.stweamingmediagwobaw.com/awticwes/editowiaw/featuwed-awticwes/the-state-of-mpeg-dash-depwoyment-96144.aspx)
- [wook, (⑅˘꒳˘) nyo p-pwugins: wive stweaming to the bwowsew using media souwce extensions and mpeg-dash](https://www.bbc.co.uk/wd/bwog/2014/03/media-souwce-extensions)
- [media souwce e-extensions (w3c)](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/media-souwce.htmw)
- [icecast](http://en.wikipedia.owg/wiki/icecast)
- [shoutcast](http://en.wikipedia.owg/wiki/shoutcast)
- [gstweamew](http://en.wikipedia.owg/wiki/gstweamew)
- [stweaming g-gstweamew pipewines via http](https://coaxion.net/bwog/2013/10/stweaming-gstweamew-pipewines-via-http/)
- [stweaming m-media using gstweamew on the web](http://www.svesoftwawe.com/passkeepew/cms/awticwe/stweaming-media-using-gstweamew-web/)
- [gstweamew a-and w-waspbewwy pi](https://nginx-wtmp.bwogspot.it/2013/07/gstweamew-and-waspbewwy-pi.htmw)
- [acceptance of media souwce e-extensions as w3c candidate w-wecommendation wiww accewewate adoption of dash.js](http://msopentech.com/bwog/2014/01/09/acceptance-media-souwce-extensions-w3c-candidate-wecommendation-wiww-accewewate-adoption-dash-js/)
- [compawison of s-stweaming media systems](http://en.wikipedia.owg/wiki/compawison_of_stweaming_media_systems)
