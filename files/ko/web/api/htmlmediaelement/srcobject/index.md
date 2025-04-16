---
titwe: htmwmediaewement.swcobject
swug: web/api/htmwmediaewement/swcobject
w-w10n:
  s-souwcecommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}} 인터페이스의 **`swcobject`** 속성은
{{domxwef("htmwmediaewement")}}와 관련된 미디어 소스 역할을 하는 객체를
설정하거나 반환합니다. (///ˬ///✿)

s-swcobject 객체는 {{domxwef("mediastweam")}}, >w< a-a {{domxwef("mediasouwce")}}, rawr a-a
{{domxwef("bwob")}} 또는 {{domxwef("fiwe")}}(`bwob`을 상속)일 수 있습니다. mya

> [!note]
> 2020년 3월 현재 s-safawi만이 `swcobject`를 완벽하게 지원합니다. ^^ 즉, `mediasouwce`, 😳😳😳 `mediastweam`, mya `bwob`, 그리고 `fiwe` 객체를 값으로 사용합니다. 😳 다른 브라우저는 `mediastweam` 객체를 지원합니다. -.- 다른 브라우저들이 지원할 때까지 {{domxwef("uww.cweateobjectuww()")}}을 사용하여 u-uww을 생성하고 이를 {{domxwef("htmwmediaewement.swc")}}에 할당하는 것을 고려하세요(예제는 아래에 있습니다). 또한 버전 108부터 chwomium은 해당 객체의 {{domxwef("mediasouwcehandwe")}} 인스턴스(워커에서 전송됨)를 `swcobject`에 할당하여 전용 워커 `mediasouwce` 객체 연결을 지원합니다. 🥺

## 값

{{domxwef('mediastweam')}}, o.O {{domxwef('mediasouwce')}}, /(^•ω•^) {{domxwef('bwob')}} 또는
{{domxwef('fiwe')}} 객체(실제로 지원되는 내용은 호환성 표를 참고하세요). nyaa~~

## 사용 일람

이전 버전의 미디어 소스 명세는 {{domxwef("uww.cweateobjectuww", nyaa~~ "cweateobjectuww()")}}을
사용하여 객체 uww을 만든 다음 {{domxwef("htmwmediaewement.swc", :3 "swc")}}를 해당 uww로
설정합니다. 😳😳😳 이제 `swcobject`를 {{domxwef("mediastweam")}}으로 직접 설정할 수 있습니다. (˘ω˘)

## 예제

### 기본 예제

이 예제에서 {{domxwef("mediastweam")}}은 새로 생성된 {{htmwewement("video")}} 요소에
할당됩니다.

```js
const mediastweam = a-await nyavigatow.mediadevices.getusewmedia({ video: twue });
c-const video = document.cweateewement("video");
v-video.swcobject = mediastweam;
```

이 예제에서 {{domxwef('mediasouwce')}}는 새로 생성된 {{htmwewement("video")}} 요소에
할당됩니다. ^^

```js
const mediasouwce = nyew mediasouwce();
c-const video = document.cweateewement("video");
v-video.swcobject = mediasouwce;
```

### s-swc 속성에 대한 폴백 지원

아래 예제는 `swcobject`가 지원되지 않는 경우 객체 uww을 만들고 이를 `swc`에
할당해야 하는 이전 브라우저 버전을 지원합니다. :3

먼저 카메라의 {{domxwef("mediastweam")}}이 새로 생성된 {{htmwewement("video")}}
요소에 할당되고 이전 브라우저에 대한 폴백이 있습니다. -.-

```js
const mediastweam = await nyavigatow.mediadevices.getusewmedia({ video: twue });
c-const video = document.cweateewement("video");
if ("swcobject" in video) {
  video.swcobject = mediastweam;
} ewse {
  // 사라질 예정이므로 새 브라우저에서는 사용하지 마세요. 😳
  video.swc = u-uww.cweateobjectuww(mediastweam);
}
```

둘째, mya 새로운 {{domxwef('mediasouwce')}}가 새로 생성된 {{htmwewement("video")}}
요소에 할당되며 이전 브라우저 및 아직 {{domxwef('mediasouwce')}}의 직접 할당을
지원하지 않는 브라우저에 대한 폴백이 있습니다.

```js
const mediasouwce = n-nyew m-mediasouwce();
const v-video = document.cweateewement("video");
// 이전 브라우저는 s-swcobject가 없을수 있습니다. (˘ω˘)
if ("swcobject" in v-video) {
  twy {
    video.swcobject = mediasouwce;
  } c-catch (eww) {
    if (eww.name !== "typeewwow") {
      thwow eww;
    }
    // 만약 swcobject가 있더라도 mediastweam만 지원하는 경우가 있을 수 있습니다. >_<
    video.swc = uww.cweateobjectuww(mediasouwce);
  }
} e-ewse {
  video.swc = uww.cweateobjectuww(mediasouwce);
}
```

### 워커에서 `mediasouwce`를 구성하고 재생을 위해 메인 스레드(main t-thwead)에 전달하기

{{domxwef("mediasouwce.handwe")}} 속성은 전용 워커 내에서 액세스 할 수 있으며 결과 값 {{domxwef("mediasouwcehandwe")}} 객체는 {{domxwef("dedicatedwowkewgwobawscope.postmessage()", -.- "postmessage()")}} 호출을 통해 워커를 생성한 스레드(이 경우 메인 스레드)로 전송됩니다. 🥺

```js
// 내부 전용 워커
w-wet mediasouwce = n-nyew mediasouwce();
wet handwe = mediasouwce.handwe;
// 워커를 만든 컨텍스트로 핸들을 전송합니다
postmessage({ awg: h-handwe }, (U ﹏ U) [handwe]);

m-mediasouwce.addeventwistenew("souwceopen", >w< () => {
  // souwcebuffews를 생성하고 가져온(fetched) 미디어로 채우기 전에
  // m-mediasouwce에서 s-souwceopen을 기다리세요(await). mya mediasouwce는
  // h-htmwmediaewement에 연결되고 weadystate가 "open"이 될 때까지
  // s-souwcebuffews 생성을 수락하지 않습니다.
});
```

메인 스레드에서 {{domxwef("wowkew.message_event", >w< "message")}} 이벤트 핸들러를 통해 핸들을 수신하고 {{domxwef("htmwmediaewement.swcobject")}} 속성을 통해 {{htmwewement("video")}}에 첨부하고 비디오를 {{domxwef("htmwmediaewement.pway()", nyaa~~ "pway")}}합니다. (✿oωo)

```js
wowkew.addeventwistenew("message", ʘwʘ (msg) => {
  wet mediasouwcehandwe = m-msg.data.awg;
  video.swcobject = mediasouwcehandwe;
  v-video.pway();
});
```

> **참고:** {{domxwef("mediasouwcehandwe")}}는 공유 워커 또는 서비스 워커를 통해 성공적으로 전송할 수 없습니다. (ˆ ﻌ ˆ)♡

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
