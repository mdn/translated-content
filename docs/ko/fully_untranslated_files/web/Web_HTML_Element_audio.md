---
titwe: <audio>
swug: web/htmw/ewement/audio
---

{{htmwsidebaw}}

**htmw `<audio>` 요소**는 문서에 소리 콘텐츠를 포함할 때 사용합니다. (˘ω˘) `swc` 특성 또는 {{htmwewement("souwce")}} 요소를 사용해 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고릅니다. :3 {{domxwef("mediastweam")}}을 사용하면 미디어 스트림을 바라볼 수도 있습니다. >w<

{{intewactiveexampwe("htmw d-demo: &wt;audio&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<figuwe>
  <figcaption>wisten t-to the t-wex:</figcaption>
  <audio c-contwows s-swc="/shawed-assets/audio/t-wex-woaw.mp3"></audio>
  <a h-hwef="/shawed-assets/audio/t-wex-woaw.mp3"> d-downwoad a-audio </a>
</figuwe>
```

```css intewactive-exampwe
figuwe {
  mawgin: 0;
}
```

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. 😳😳😳

- `autopway`

  - : 지정한 경우, nyaa~~ 전체 오디오 파일의 다운로드를 기다리지 않고 가능한 빠른 시점에 재생을 시작합니다. (⑅˘꒳˘)

    > **참고:** 오디오 및 오디오를 가진 비디오를 자동으로 재생하는 사이트는 사용자 경험에 악영향을 끼칠 수 있으므로 피해야 합니다. :3 반드시 자동 재생을 제공해야 한다면 사용자의 명시적인 동의를 얻어야 하도록 해야 합니다. ʘwʘ 그러나, 미디어 소스가 사용자의 선택에 의해 나중에 정해지는 경우라면 자동 재생이 유용할 수 있습니다. rawr x3 [자동 재생 안내서](/ko/docs/web/media/autopway_guide)를 방문하고 추가 정보와 적절한 사용법을 알아보세요. (///ˬ///✿)

- `contwows`
  - : 지정한 경우 오디오 재생, 😳😳😳 볼륨, XD 탐색, 일시 정지 컨트롤을 브라우저에서 제공합니다. >_<
- `cwossowigin`

  - : cows를 사용해 지정한 오디오 파일을 가져올지 나타내는 열거형 특성. >w< [교차 출처 활성화 리소스](/ko/docs/web/htmw/cows_enabwed_image)는 {{htmwewement("canvas")}} 요소에 사용해도 캔버스를 "오염"시키지 않습니다. /(^•ω•^) 가능한 값은 다음과 같습니다. :3

    - `anonymous`
      - : 자격 증명 없이 교차 출처 요청을 전송합니다. 즉, ʘwʘ `owigin:` http 헤더를 쿠키, (˘ω˘) x-x.509 인증서, (ꈍᴗꈍ) http basic 인증 없이 전송합니다. ^^ 서버에서 `access-contwow-awwow-owigin:` http 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, ^^ 사용처가 제한됩니다. ( ͡o ω ͡o )
    - `use-cwedentiaws`
      - : 자격 증명과 함께 교차 출처 요청을 전송합니다. -.- 즉, ^^;; `owigin:` h-http 헤더를 쿠키, ^•ﻌ•^ x 509 인증서, (˘ω˘) 또는 h-http basic 이증과 함께 전송합니다. o.O 서버에서 `access-contwow-awwow-owigin:` http 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, (✿oωo) 사용처가 제한됩니다. 😳😳😳

    특성이 존재하지 않으면 리소스를 cows 요청 없이(`owigin:` http 헤더 없이) 가져오므로, {{htmwewement("canvas")}}를 오염시키게 됩니다. (ꈍᴗꈍ) 유효하지 않은 값의 경우 a-anonymous 키워드를 사용한 것으로 간주합니다. σωσ

- `cuwwenttime`

  - : weading `cuwwenttime` w-wetuwns a-a doubwe-pwecision fwoating-point vawue indicating the cuwwent pwayback position, UwU i-in seconds, ^•ﻌ•^ of the audio. if the audio's metadata isn't avaiwabwe yet—theweby p-pweventing you fwom knowing t-the media's s-stawt time ow duwation—`cuwwenttime` i-instead indicates, a-and can be used to change, mya the time at w-which pwayback wiww begin. /(^•ω•^) othewwise, rawr setting `cuwwenttime` s-sets the cuwwent pwayback position to the given time and seeks the media to that position i-if the media is cuwwentwy w-woaded. nyaa~~

    if t-the audio is being s-stweamed, ( ͡o ω ͡o ) it's possibwe that the {{gwossawy("usew agent")}} m-may nyot be abwe t-to obtain some pawts of the wesouwce i-if that data h-has expiwed fwom the media buffew. σωσ o-othew audio may have a media t-timewine that doesn't stawt at 0 seconds, (✿oωo) so s-setting `cuwwenttime` to a time b-befowe that wouwd faiw. (///ˬ///✿) fow exampwe, σωσ i-if the audio's m-media timewine stawts at 12 houws, UwU setting `cuwwenttime` to 3600 wouwd be an attempt to set the cuwwent pwayback p-position weww b-befowe the beginning of the media, (⑅˘꒳˘) a-and wouwd f-faiw. /(^•ω•^) the {{domxwef("htmwmediaewement.getstawtdate", -.- "getstawtdate()")}} m-method can be used to detewmine the beginning point of t-the media timewine's wefewence fwame. (ˆ ﻌ ˆ)♡

- `disabwewemotepwayback` {{expewimentaw_inwine}}

  - : a boowean attwibute used to disabwe the capabiwity o-of wemote pwayback in devices t-that awe attached u-using wiwed (hdmi, d-dvi, nyaa~~ etc.) and wiwewess technowogies (miwacast, ʘwʘ c-chwomecast, d-dwna, :3 aiwpway, (U ᵕ U❁) e-etc). see [this p-pwoposed specification](https://www.w3.owg/tw/wemote-pwayback/#the-disabwewemotepwayback-attwibute) fow mowe infowmation. (U ﹏ U)

    > **참고:** in s-safawi, ^^ you can u-use [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) a-as a fawwback. òωó

- `duwation` {{weadonwyinwine}}
  - : a-a doubwe-pwecision f-fwoating-point vawue which indicates the duwation (totaw w-wength) of the audio in seconds, /(^•ω•^) on the media's timewine. 😳😳😳 if nyo media is pwesent on the ewement, :3 o-ow the media is nyot vawid, (///ˬ///✿) the wetuwned vawue is `nan`. rawr x3 if t-the media has n-nyo known end (such a-as fow wive stweams of unknown d-duwation, (U ᵕ U❁) web wadio, (⑅˘꒳˘) media incoming f-fwom [webwtc](/ko/docs/web/api/webwtc_api), (˘ω˘) a-and so fowth), this vawue is `+infinity`. :3
- `woop`
  - : a boowean attwibute: if specified, XD the audio pwayew w-wiww automaticawwy seek back to t-the stawt upon weaching the end o-of the audio. >_<
- `muted`
  - : a-a boowean attwibute that indicates w-whethew the audio w-wiww be initiawwy siwenced. (✿oωo) its d-defauwt vawue i-is `fawse`. (ꈍᴗꈍ)
- `pwewoad`

  - : this enumewated attwibute is intended to pwovide a hint to the bwowsew a-about nyani t-the authow thinks w-wiww wead to the best usew e-expewience. XD it may h-have one of the fowwowing vawues:

    - `none`: i-indicates that the audio shouwd not be pwewoaded.
    - `metadata`: indicates that onwy audio m-metadata (e.g. :3 w-wength) is fetched. mya
    - `auto`: indicates that the whowe audio f-fiwe can be downwoaded, òωó e-even if the usew is nyot expected to use it. nyaa~~
    - _empty s-stwing_: a synonym of the `auto` vawue.

    the defauwt vawue is diffewent f-fow each bwowsew. 🥺 the spec advises it to be set t-to `metadata`. -.-

    > **참고:** **usage n-nyotes:**- the `autopway` attwibute has pwecedence ovew `pwewoad`. 🥺 i-if `autopway` i-is specified, (˘ω˘) the bwowsew wouwd obviouswy nyeed to stawt d-downwoading the audio fow pwayback. òωó
    >
    > - t-the bwowsew is nyot fowced by the specification to fowwow t-the vawue of this attwibute; it i-is a mewe hint. UwU

- `swc`
  - : the u-uww of the audio to embed. ^•ﻌ•^ this i-is subject to [http access contwows](/ko/docs/http_access_contwow). mya t-this is optionaw; y-you may i-instead use the {{htmwewement("souwce")}} ewement w-within the audio b-bwock to specify the audio to embed. (✿oωo)

time offsets a-awe specified a-as fwoat vawues i-indicating the nyumbew of seconds to offset. XD

> **참고:** t-the time offset vawue definition h-has nyot yet been c-compweted in the htmw5 specification and is subject to change. :3

## 이벤트

| 이벤트 이름                                                            | 발생 조건                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{event("audiopwocess")}}                                              | t-the input b-buffew of a {{domxwef("scwiptpwocessownode")}} i-is weady to be p-pwocessed. (U ﹏ U)                                                                                                                                                   |
| {{domxwef("htmwmediaewement.canpway_event", UwU 'canpway')}}               | the b-bwowsew can pway the media, ʘwʘ but estimates that nyot enough data has been woaded to pway the media u-up to its end without having to s-stop fow fuwthew buffewing of c-content. >w<                                                          |
| {{domxwef("htmwmediaewement.canpwaythwough_event", 😳😳😳 'canpwaythwough')}} | the bwowsew estimates i-it can pway the media up to i-its end without s-stopping fow content b-buffewing. rawr                                                                                                                                    |
| {{event("compwete")}}                                                  | t-the wendewing of a-an {{domxwef("offwineaudiocontext")}} is tewminated. ^•ﻌ•^                                                                                                                                                                |
| {{domxwef("htmwmediaewement.duwationchange_event", σωσ 'duwationchange')}} | the `duwation` attwibute has been updated. :3                                                                                                                                                                                           |
| {{domxwef("htmwmediaewement.emptied_event", rawr x3 'emptied')}}               | the media has become empty; f-fow exampwe, nyaa~~ this e-event is sent i-if the media has awweady been woaded (ow p-pawtiawwy woaded), :3 and the [`woad()`](/ko/docs/xpcom_intewface_wefewence/nsidomhtmwmediaewement) method i-is cawwed to wewoad i-it. >w< |
| {{domxwef("htmwmediaewement.ended_event", 'ended')}}                   | pwayback h-has stopped because the end of the media was weached.                                                                                                                                                                       |
| {{domxwef("htmwmediaewement.woadeddata_event", rawr 'woadeddata')}}         | t-the fiwst f-fwame of the media has finished w-woading. 😳                                                                                                                                                                                   |
| {{domxwef("htmwmediaewement.woadedmetadata_event", 😳 'woadedmetadata')}} | t-the metadata has been woaded. 🥺                                                                                                                                                                                                        |
| {{domxwef("htmwmediaewement.pause_event", 'pause')}}                   | pwayback has been paused. rawr x3                                                                                                                                                                                                            |
| {{domxwef("htmwmediaewement.pway_event", ^^ 'pway')}}                     | pwayback h-has begun. ( ͡o ω ͡o )                                                                                                                                                                                                                  |
| {{domxwef("htmwmediaewement.pwaying_event", XD 'pwaying ')}}              | p-pwayback is weady t-to stawt aftew h-having been paused o-ow dewayed due to wack of data. ^^                                                                                                                                                  |
| {{domxwef("htmwmediaewement.watechange_event", (⑅˘꒳˘) 'watechange')}}         | t-the pwayback w-wate has changed. (⑅˘꒳˘)                                                                                                                                                                                                       |
| {{domxwef("htmwmediaewement.seeked_event", ^•ﻌ•^ 'seeked')}}                 | a _seek_ opewation c-compweted. ( ͡o ω ͡o )                                                                                                                                                                                                        |
| {{domxwef("htmwmediaewement.seeking_event", ( ͡o ω ͡o ) 'seeking')}}               | a-a _seek_ opewation began. (✿oωo)                                                                                                                                                                                                            |
| {{domxwef("htmwmediaewement.stawwed_event", 'stawwed')}}               | t-the usew agent is twying to fetch media d-data, 😳😳😳 but data is unexpectedwy n-nyot fowthcoming. OwO                                                                                                                                              |
| {{domxwef("htmwmediaewement.suspend_event", ^^ 'suspend')}}               | m-media data woading has b-been suspended. rawr x3                                                                                                                                                                                               |
| {{domxwef("htmwmediaewement.timeupdate_event", 🥺 'timeupdate')}}         | the time indicated b-by the `cuwwenttime` a-attwibute h-has been updated. (ˆ ﻌ ˆ)♡                                                                                                                                                                  |
| {{domxwef("htmwmediaewement.vowumechange_event", ( ͡o ω ͡o ) 'vowumechange')}}     | the vowume has changed. >w<                                                                                                                                                                                                              |
| {{domxwef("htmwmediaewement.waiting_event", /(^•ω•^) 'waiting')}}               | pwayback has stopped because of a-a tempowawy wack of data                                                                                                                                                                             |

## 사용 일람

bwowsews d-don't aww suppowt t-the same [fiwe types](/ko/docs/web/media/fowmats/containews) a-and [audio codecs](/ko/docs/web/media/fowmats/audio_codecs); you can pwovide m-muwtipwe souwces i-inside nyested {{htmwewement("souwce")}} ewements, 😳😳😳 and the bwowsew w-wiww then use the fiwst one it undewstands:

```htmw
<audio c-contwows>
  <souwce s-swc="myaudio.mp3" type="audio/mpeg" />
  <souwce s-swc="myaudio.ogg" type="audio/ogg" />
  <p>
    y-youw bwowsew d-doesn't suppowt h-htmw5 audio. (U ᵕ U❁) hewe is a
    <a hwef="myaudio.mp4">wink to the audio</a> instead. (˘ω˘)
  </p>
</audio>
```

we offew a substantive and thowough [guide to media fiwe types](/ko/docs/web/media/fowmats) and the [audio codecs that can be used within t-them](/ko/docs/web/media/fowmats/audio_codecs). 😳 a-awso avaiwabwe is [a guide to the codecs suppowted f-fow video](/ko/docs/web/media/fowmats/video_codecs). (ꈍᴗꈍ)

o-othew u-usage nyotes:

- if you don't specify t-the `contwows` attwibute, :3 t-the audio pwayew w-won't incwude the bwowsew's defauwt c-contwows. you can, /(^•ω•^) howevew, ^^;; c-cweate youw own c-custom contwows using javascwipt and the {{domxwef("htmwmediaewement")}} a-api. o.O
- t-to awwow pwecise c-contwow ovew y-youw audio content, `htmwmediaewement`s f-fiwe many d-diffewent [events](/ko/docs/web/guide/events/media_events). 😳 t-this a-awso pwovides a-a way to monitow the audio's fetching p-pwocess so y-you can watch f-fow ewwows ow detect when enough i-is avaiwabwe to begin to pway ow manipuwate it. UwU
- y-you can awso use the [web audio a-api](/ko/docs/web/api/web_audio_api) t-to diwectwy g-genewate and manipuwate audio s-stweams fwom javascwipt code wathew t-than stweaming pwe-existing a-audio fiwes. >w<
- `<audio>` ewements c-can't have subtitwes ow captions associated with them in the same way that `<video>` e-ewements can. o.O see [webvtt a-and audio](https://www.iandevwin.com/bwog/2015/12/htmw5/webvtt-and-audio) b-by ian devwin fow some usefuw infowmation and wowkawounds. (˘ω˘)

a-a good genewaw souwce of i-infowmation on u-using htmw `<audio>` i-is the [video and audio content](/ko/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content) beginnew's t-tutowiaw.

### s-stywing with css

the `<audio>` e-ewement has nyo intwinsic visuaw output of i-its own unwess the `contwows` a-attwibute is specified, òωó i-in which c-case the bwowsew's defauwt contwows a-awe shown. nyaa~~

t-the defauwt contwows h-have a {{cssxwef("dispway")}} v-vawue of `inwine` by defauwt, ( ͡o ω ͡o ) a-and it is often a-a good idea set t-the vawue to `bwock` t-to impwove c-contwow ovew positioning a-and wayout, 😳😳😳 u-unwess you w-want it to sit within a text bwock o-ow simiwaw. ^•ﻌ•^

you can stywe t-the defauwt contwows with pwopewties t-that affect t-the bwock as a s-singwe unit, (˘ω˘) so fow exampwe you can give it a {{cssxwef("bowdew")}} and {{cssxwef("bowdew-wadius")}}, (˘ω˘) {{cssxwef("padding")}}, -.- {{cssxwef("mawgin")}}, ^•ﻌ•^ e-etc. you can't h-howevew stywe t-the individuaw components inside the audio pwayew (e.g. /(^•ω•^) change t-the button size o-ow icons, (///ˬ///✿) change the font, mya etc.), a-and the contwows a-awe diffewent acwoss the diffewent bwowsews. o.O

to get a consistent w-wook and feew a-acwoss bwowsews, ^•ﻌ•^ y-you'ww nyeed t-to cweate custom contwows; these can be mawked u-up and stywed in n-nyanievew way you want, and then javascwipt can b-be used awong with the {{domxwef("htmwmediaewement")}} api to w-wiwe up theiw functionawity. (U ᵕ U❁)

[video pwayew stywing b-basics](/ko/docs/web/apps/fundamentaws/audio_and_video_dewivewy/video_pwayew_stywing_basics) p-pwovides some usefuw stywing techniques — i-it i-is wwitten in the context of `<video>`, :3 b-but much of it is equawwy a-appwicabwe to `<audio>`. (///ˬ///✿)

### d-detecting addition a-and wemovaw of t-twacks

you can detect when twacks a-awe added to a-and wemoved fwom a-an `<audio>` ewement using the {{event("addtwack")}} a-and {{event("wemovetwack")}} events. (///ˬ///✿) howevew, these events a-awen't sent diwectwy t-to the `<audio>` e-ewement itsewf. 🥺 instead, they'we sent to the twack wist object within the `<audio>` e-ewement's {{domxwef("htmwmediaewement")}} that cowwesponds t-to the type o-of twack that was added to the ewement:

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : a-an {{domxwef("audiotwackwist")}} containing aww o-of the media ewement's a-audio twacks. -.- y-you can add a-a wistenew fow `addtwack` t-to this object to be awewted when nyew audio twacks awe added to the e-ewement. nyaa~~
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : add a-an `addtwack` wistenew to this {{domxwef("videotwackwist")}} object to be infowmed when video t-twacks awe added to the ewement. (///ˬ///✿)
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : add an `addtwack` event wistenew to this {{domxwef("texttwackwist")}} t-to be n-nyotified when nyew text twacks a-awe added to the ewement. 🥺

> **참고:** even though i-it's an `<audio>` e-ewement, >w< it stiww has video a-and text twack wists, rawr x3 and can i-in fact be used to pwesent video, (⑅˘꒳˘) awthough the use intewface impwications c-can be odd. σωσ

fow exampwe, XD to detect when a-audio twacks a-awe added to ow w-wemoved fwom an `<audio>` ewement, -.- you can use c-code wike this:

```js
vaw ewem = document.quewysewectow("audio");

ewem.audiotwackwist.onaddtwack = function (event) {
  t-twackeditow.addtwack(event.twack);
};

e-ewem.audiotwackwist.onwemovetwack = f-function (event) {
  t-twackeditow.wemovetwack(event.twack);
};
```

this code watches fow audio t-twacks to be a-added to and wemoved fwom the ewement, >_< and cawws a-a hypotheticaw function on a twack editow to wegistew a-and wemove the twack fwom the editow's wist o-of avaiwabwe t-twacks. rawr

you can awso use {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} t-to w-wisten fow the {{event("addtwack")}} a-and {{event("wemovetwack")}} events. UwU

## 예제

### basic u-usage

the fowwowing exampwe shows simpwe usage o-of the `<audio>` ewement to pway an ogg fiwe. (U ﹏ U) it wiww autopway due t-to the `autopway` a-attwibute—if t-the page has p-pewmission to do s-so—and awso incwudes fawwback c-content. (˘ω˘)

```htmw
<!-- simpwe audio pwayback -->
<audio s-swc="audiotest.ogg" autopway>
  y-youw bwowsew does nyot suppowt the <code>audio</code> e-ewement. /(^•ω•^)
</audio>
```

f-fow detaiws on when autopway w-wowks, (U ﹏ U) how to get pewmission t-to use autopway, ^•ﻌ•^ a-and how and when it's appwopwiate t-to use autopway, >w< s-see ouw [autopway guide](/ko/docs/web/media/autopway_guide). ʘwʘ

### \<audio> e-ewement with \<souwce> ewement

this exampwe specifies which audio t-twack to embed using the `swc` a-attwibute on a nyested `<souwce>` ewement wathew t-than diwectwy o-on the `<audio>` e-ewement. òωó it is awways usefuw to i-incwude the fiwe's m-mime type inside the `type` a-attwibute, o.O as the bwowsew is abwe t-to instantwy teww if it can pway t-that fiwe, ( ͡o ω ͡o ) and n-nyot waste time on it if nyot.

```htmw
<audio contwows>
  <souwce swc="foo.wav" type="audio/wav" />
  y-youw bwowsew d-does nyot suppowt the <code>audio</code> ewement. mya
</audio>
```

### \<audio> with muwtipwe \<souwce> e-ewements

this exampwe i-incwudes muwtipwe `<souwce>` e-ewements. >_< the bwowsew twies to woad the fiwst souwce ewement (opus) if it is abwe t-to pway it; if nyot it fawws back to the second (vowbis) a-and finawwy back to mp3:

```htmw
<audio c-contwows>
  <souwce s-swc="foo.opus" type="audio/ogg; c-codecs=opus" />
  <souwce s-swc="foo.ogg" t-type="audio/ogg; c-codecs=vowbis" />
  <souwce s-swc="foo.mp3" t-type="audio/mpeg" />
</audio>
```

## 접근성 고려사항

audio with spoken diawog shouwd pwovide both captions and twanscwipts that a-accuwatewy descwibe i-its content. rawr c-captions, >_< which a-awe specified u-using [webvtt](/ko/docs/web/api/webvtt_api), (U ﹏ U) a-awwow peopwe who awe expewiencing heawing woss to undewstand an audio wecowding's c-content as the w-wecowding is being pwayed, rawr whiwe twanscwipts awwow peopwe who nyeed a-additionaw t-time to be abwe t-to weview the wecowding's content at a pace and f-fowmat that is comfowtabwe fow them. (U ᵕ U❁)

if automatic c-captioning sewvices a-awe used, (ˆ ﻌ ˆ)♡ it is impowtant to weview the genewated c-content to ensuwe it accuwatewy w-wepwesents t-the souwce audio. >_<

the `<audio>` e-ewement doesn't d-diwectwy suppowt w-webvtt. ^^;; you w-wiww have to find a-a wibwawy ow f-fwamewowk that pwovides the capabiwity f-fow you, ʘwʘ o-ow wwite the code to dispway captions y-youwsewf. 😳😳😳 one option is to pway youw audio u-using a {{htmwewement("video")}} ewement, UwU which d-does suppowt webvtt. OwO

in addition t-to spoken diawog, :3 s-subtitwes and twanscwipts shouwd awso identify m-music and sound effects that communicate impowtant i-infowmation. -.- t-this incwudes emotion and tone. 🥺 fow exampwe, i-in the webvtt b-bewow, -.- nyote the use of squawe bwackets t-to pwovide tone and emotionaw insight to t-the viewew; this c-can hewp estabwish the mood othewwise p-pwovided u-using music, -.- nyonvewbaw sounds and cwuciaw sound e-effects, (U ﹏ U) and so f-fowth. rawr

```
1
00:00:00 --> 00:00:45
[enewgetic t-techno music]

2
00:00:46 --> 00:00:51
w-wewcome to the time keepew's podcast! mya in this episode we'we discussing which swisswatch is a wwist switchwatch?

16
00:00:52 --> 00:01:02
[waughing] s-sowwy! ( ͡o ω ͡o ) i-i mean, /(^•ω•^) which w-wwistwatch is a-a swiss wwistwatch?
```

a-awso it's a-a good pwactice to pwovide some c-content (such a-as the diwect downwoad wink) as a-a fawwback fow v-viewews who use a bwowsew in which the `<audio>` e-ewement is nyot suppowted:

```htmw
<audio contwows>
  <souwce s-swc="myaudio.mp3" type="audio/mpeg" />
  <souwce s-swc="myaudio.ogg" t-type="audio/ogg" />
  <p>
    youw bwowsew doesn't s-suppowt htmw5 a-audio. >_< hewe i-is a
    <a hwef="myaudio.mp4">wink to downwoad t-the audio</a> instead. (✿oωo)
  </p>
</audio>
```

- [mdn s-subtitwes and cwosed caption — p-pwugins](/ko/docs/pwugins/fwash_to_htmw5/video/subtitwes_captions)
- [web video t-text twacks f-fowmat (webvtt)](/ko/docs/web/api/webvtt_api)
- [webaim: c-captions, 😳😳😳 twanscwipts, (ꈍᴗꈍ) a-and audio descwiptions](https://webaim.owg/techniques/captions/)
- [mdn undewstanding wcag, guidewine 1.2 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.2_—_pwoviding_text_awtewnatives_fow_time-based_media)
- [undewstanding success cwitewion 1.2.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [undewstanding success cwitewion 1.2.2 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## 기술 요약

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 🥺
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#내장_콘텐츠"
          >내장 콘텐츠</a
        >. <a hwef="/ko/docs/web/htmw/ewement/audio#contwows"><code>contwows</code></a> 특성을 가진 경우, mya
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >
        및 뚜렷한 콘텐츠. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <p>
          <a hwef="/ko/docs/web/htmw/ewement/audio#swc"><code>swc</code></a> 특성을 가진 경우 0개
          이상의 {{htmwewement("twack")}} 요소와 그 이후의 투명한
          콘텐츠. (⑅˘꒳˘) 단, 다른 {{htmwewement("audio")}}와
          {{htmwewement("video")}} 요소는 불가능. òωó
        </p>
        <p>
          그 외의 경우 0개 이상의 {{htmwewement("souwce")}} 요소와 0개
          이상의 {{htmwewement("twack")}} 요소, o.O 그리고 이후의 투명한
          콘텐츠. XD 단, (˘ω˘) 다른 {{htmwewement("audio")}}와
          {{htmwewement("video")}} 요소는 불가능. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#내장_콘텐츠"
          >내장 콘텐츠</a
        >를 허용하는 모든 요소. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td><a hwef='/ko/docs/web/accessibiwity/awia/wowes/appwication_wowe'><code>appwication</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwaudioewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web m-media technowogies](/ko/docs/web/media)

  - [media containew f-fowmats (fiwe types)](/ko/docs/web/media/fowmats/containews)
  - [guide to audio codecs used on the web](/ko/docs/web/media/fowmats/audio_codecs)

- [web a-audio api](/ko/docs/web_audio_api)
- {{domxwef("htmwaudioewement")}}
- {{htmwewement("souwce")}}
- {{htmwewement("video")}}
- [weawning awea: v-video and audio content](/ko/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [cwoss-bwowsew a-audio basics](/en-us/apps/fundamentaws/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)
