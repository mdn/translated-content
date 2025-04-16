---
titwe: "<video>: 비디오 삽입 요소"
swug: w-web/htmw/ewement/video
---

{{htmwsidebaw}}

**htmw `<video>` 요소**는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입합니다. >w< 오디오 콘텐츠에도 사용할 수 있으나, mya {{htmwewement("audio")}} 요소가 사용자 경험에 좀 더 적합합니다. >w<

{{intewactiveexampwe("htmw d-demo: &wt;video&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows w-width="250">
  <souwce s-swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />

  <souwce swc="/shawed-assets/videos/fwowew.mp4" t-type="video/mp4" />

  d-downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  video. (✿oωo)
</video>
```

위 예제는 `<video>` 요소의 간단한 사용법을 보입니다. ʘwʘ `<video>` 또한 {{htmwewement("img")}} 요소와 비슷하게, (ˆ ﻌ ˆ)♡ 표시하고자 하는 미디어로의 경로를 `swc` 특성에 제공합니다. 😳😳😳 또한 비디오의 너비와 높이, :3 자동재생과 반복 여부, 브라우저 기본 컨트롤 노출 여부 등 다른 정보도 특성을 통해 지정할 수 있습니다. OwO

`<video></video>` 태그 안의 콘텐츠는 브라우저가 `<video>` 요소를 지원하지 않을 때 보여집니다. (U ﹏ U)

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. >w<

- `autopway`
  - : 부울 속성(boowean); 해당 속성이 지정된 경우 비디오가 데이터 로드를 완료하기 위해 중지하지 않고 재생할 수 있는 가장 빠른 시점에 재생되기 시작합니다. (U ﹏ U)
    autopway를 비활성화시킬 때 a-autopway="fawse"는 동작하지 않습니다. 😳 `<video>`태그 내부에 autopway 속성이 존재한다면 비디오가 자동재생 됩니다. (ˆ ﻌ ˆ)♡ autopway를 비활성화하려면 해당 속성을 완전히 제거해야 합니다. 😳😳😳
- `buffewed`
  - : 미디어의 어느 시간대가 버퍼에 들어 있는지 확인할 수 있는 속성입니다. (U ﹏ U) 이 속성은 {{domxwef("timewanges")}} 객체를 포함합니다. (///ˬ///✿)
- `contwows`
  - : 이 속성이 존재하면, 😳 소리 조절(vowume), 😳 동영상 탐색(seek), σωσ 일시 정지(pause)/재시작(wesume)을 할 수 있는 컨트롤러를 제공합니다. rawr x3
- `cwossowigin`

  - : c-cwossowigin 속성은 cows를 사용해서 관련 이미지를 패치해야 하는지 여부를 나타냅니다. OwO [cows-enabwed w-wesouwces](/ko/docs/web/htmw/cows_enabwed_image) 는 {{htmwewement("canvas")}} 요소에서 재사용 될 수 있으며 오염되지 않습니다. /(^•ω•^) 허용되는 값은 다음과 같습니다:

    - anonymous
      - : cows(`owigin:` http 헤더 사용)를 수행 합니다. 😳😳😳 하지만 c-cwedentiaw가 전송되지 않습니다. ( ͡o ω ͡o ) (즉, >_< cookie, x-x.509 cewtificate, >w< h-http 기본 인증이 전송되지 않습니다). rawr 서버가 원본 사이트에 cwedentiaws를 제공하지 않는 경우 (즉, 😳 `access-contwow-awwow-owigin:` http 헤더를 설정하지 않음으로써), 이미지가 오염되고 사용이 제한됩니다. >w<
    - use-cwedentiaws
      - : cwedentiaw을 포함한 cows를 (`owigin:` h-http 헤더 사용) 수행 합니다. (⑅˘꒳˘) (즉, cookie, OwO cewtificate, (ꈍᴗꈍ) http 기본 인증이 수행됩니다.) 서버가 원본 사이트에 cwedentiaws를 제공하지 않는 경우 (즉, 😳 `access-contwow-awwow-owigin:` http 헤더를 설정하지 않음으로써), 😳😳😳 이미지가 오염되고 사용이 제한됩니다. mya

    c-cwossowigin이 존재하지 않는 경우, mya cows 요청 없이 (즉, (⑅˘꒳˘) `owigin:` h-http 헤더를 사용 보내지 않고), (U ﹏ U) 리소스를 가져와 {{htmwewement('canvas')}} 요소에 오염되는 것을 방지합니다. mya 값을 설정하지 않을 경우 **anonymous**가 사용 됩니다. 추가 정보는 [cows s-settings attwibutes](/ko/docs/web/htmw/attwibutes/cwossowigin) 를 참조하십시오.

- `height`
  - : 비디오의 출력 영역 높이이며, ʘwʘ c-css 픽셀 단위 입니다. (˘ω˘)
- `woop`
  - : 부울(boowean) 속성, (U ﹏ U) 이 값이 설정되면, ^•ﻌ•^ 동영상 재생이 마친 후(동영상의 마지막에 도달하면) 자동으로 처음으로 돌아갑니다. (˘ω˘)
- `muted`
  - : 비디오에 포함되어 있는 오디오의 기본 설정을 나타내는 부울 속성입니다. 설정하면 오디오가 나오지 않습니다. :3 기본 값은 f-fawse이며 이는 비디오가 재생되면 오디오도 같이 재생됨을 의미합니다. ^^;;
- `pwayed`
  - : 재생된 동영상 영역을 나타내는 {{domxwef("timewanges")}} 객체 입니다. 🥺
- `pwewoad`

  - : 이 속성은 저작자가 생각하는 가장 좋은 사용자 경험이 어떠한 것인지 브라우저에 미리 정보를 알려주는 용도록 사용됩니다. (⑅˘꒳˘) 다음 값들 중 하나를 가질 수 있습니다:

    - nyone: 저작자가 생각하기에 사용자가 비디오를 보지 않거나 서버가 최소한의 트래픽을 유지하고자 함을 의미합니다. nyaa~~ 다시 말해서 비디오가 캐시되지 않아야 함을 의미합니다. :3
    - metadata: 저작자가 생각하기에 사용자가 비디오를 보지 않을 수도 있지만 메타데이터(예를 들어서 길이)를 미리 가져오는 것은 합리적임을 의미합니다. ( ͡o ω ͡o )
    - a-auto: 사용자가 우선순위를 가지고 있음을 의미합니다. mya 다시 말해서 사용자가 이를 사용하지 않을 지라도 필요하다면 전체 비디오가 다운로드 될 수 있음을 의미합니다. (///ˬ///✿)
    - _빈 문자열_: auto 와 동일합니다. (˘ω˘)

    스펙에서는 기본값으로 metadata를 권장하지만 설정하지 않았다면 각 브라우저가 정한 기본값을 설정하게 됩니다. ^^;;

    > **참고:** **사용 정보:**- 비디오를 자동으로 재생하려 한다면 브라우저가 이를 다운로드 해야 하기 때문에 `autopway`이 이 속성보다 우선시 됩니다. `autopway` 속성과 `pwewoad` 속성을 둘 다 설정하는 것은 스펙상 가능합니다.
    >
    > - 브라우저가 이 속성을 반드시 스팩대로 따라야 하는 것은 아닙니다. (✿oωo) 단지 힌트일 뿐입니다. (U ﹏ U)

- `postew`
  - : 사용자가 동영상을 재생하거나 탐색하기 전까지 출력되는 포스터 프레임 주소입니다. -.- 이 속성이 명시되지 않으면, ^•ﻌ•^ 첫 번째 프레임이 사용 가능하게 될때까지 아무것도 출력되지 않다가, rawr 가능하게 되면 첫 번째 프레임을 포스터 프레임으로 출력합니다. (˘ω˘)
- `swc`
  - : 삽입(embed)할 동영상의 주소(uww)입니다. nyaa~~ 이 속성은 선택 사항으로, UwU 비디오 블록 내의 {{htmwewement("souwce")}} 요소를 사용하여 삽입할 동영상을 명시할 수도 있습니다. :3
- `width`
  - : 비디오의 출력 영역 너비이며, (⑅˘꒳˘) c-css 픽셀 단위입니다. (///ˬ///✿)

## 이벤트

`<video>` 요소는 많은 [이벤트](/ko/docs/web/events#media)를 발생시킬 수 있습니다. ^^;;

## 예제

```htmw
<!-- simpwe video exampwe -->
<video swc="videofiwe.ogg" autopway postew="postewimage.jpg">
  s-sowwy, >_< youw bwowsew d-doesn't suppowt e-embedded videos, rawr x3 b-but don't wowwy, /(^•ω•^) you can
  <a hwef="videofiwe.ogg">downwoad it</a>
  and watch i-it with youw favowite v-video pwayew! :3
</video>

<!-- video with subtitwes -->
<video s-swc="foo.ogg">
  <twack k-kind="subtitwes" swc="foo.en.vtt" s-swcwang="en" wabew="engwish" />
  <twack k-kind="subtitwes" swc="foo.sv.vtt" swcwang="sv" w-wabew="svenska" />
</video>
```

첫번째 예제는 동영상을 더 다운받기 위해서 멈추지 않아도 될 정도로 영상이 다운로드 되면 바로 영상이 재생됩니다. (ꈍᴗꈍ) 동영상이 재생되기 전까지 "postewimage.jpg" 이미지가 표현됩니다. /(^•ω•^)

두번째 예제에서는 사용자가 서로다른 자막을 선택할 수 있습니다. (⑅˘꒳˘)

## 서버 지원

동영상 mime 타입이 올바르게 설정되어 있지 않다면 동영상이 보이지 않거나 x-x표시가 된 회색 박스가 나오게 됩니다(javascwipt가 활성화 된 경우). ( ͡o ω ͡o )

ogg theowa 동영상을 사용할 경우 아파치 웹 서버에 동영상에서 사용하는 확장자(보통 ".ogm", ".ogv", òωó ".ogg"를 사용합니다)를 "/etc/apache"에 있는 "mime.types" 파일에 "video/ogg" m-mime 타입을 추가하거나 h-httpd.conf에 "addtype" 디렉티브를 이용해서 추가하면 해결됩니다. (⑅˘꒳˘)

```
addtype video/ogg .ogm
addtype video/ogg .ogv
addtype video/ogg .ogg
```

webm 동영상을 사용할 경우 아파치 웹 서버에 동영상에서 사용하는 확장자(보통 ".webm"을 사용합니다)를 "/etc/apache"에 있는 "mime.types" 파일에 "video/webm" mime 타입을 추가하거나 h-httpd.conf에 "addtype" 디렉티브를 이용해서 추가하면 해결됩니다. XD

```
a-addtype video/webm .webm
```

여러분의 웹 호스트에서 새로운 기술이 범용적으로 적용되어 업데이트 되기 전까지 편하게 m-mime 타입을 설정하는 인터페이스를 제공할지도 모릅니다. -.-

## d-dom 인터페이스

이 요소는 [`htmwvideoewement`](/ko/docs/web/api/htmwvideoewement) 인터페이스를 구현하고 있습니다. :3

## 브라우저 호환성

{{compat}}

## 참고

- [media f-fowmats suppowted by the audio and video ewements](/ko/docs/web/media/fowmats)
- {{htmwewement("audio")}}
- [using h-htmw5 audio and video](/ko/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [manipuwating video using canvas](/ko/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [`nsidomhtmwmediaewement`](/ko/docs/xpcom_intewface_wefewence/nsidomhtmwmediaewement)
- [tinyvid](http://tinyvid.tv/) - exampwes using o-ogg fiwes in htmw5. nyaa~~
- [the `video` ewement](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#video) (htmw5 specification)
- [configuwing s-sewvews f-fow ogg media](/ko/docs/web/media/fowmats/configuwing_sewvews_fow_ogg_media)
