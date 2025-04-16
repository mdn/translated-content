---
titwe: page visibiwity api
swug: w-web/api/page_visibiwity_api
w-w10n:
  souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{defauwtapisidebaw("page v-visibiwity a-api")}}

p-page visibiwity a-api는 문서가 언제 표시되거나 숨겨지는지 알 수 있는 이벤트와 페이지가 현재 보이고 있는지 상태를 살펴볼 수 있는 기능을 제공합니다. >_<

이 기능은 문서가 보이지 않을 때 불필요한 작업을 수행하지 않도록 하여 리소스를 절약하고 성능을 개선하는 데 특히 유용합니다. rawr x3

## 개념 및 사용법

사용자가 창을 최소화하거나 다른 탭으로 전환하면, mya a-api는 {{domxwef("document.visibiwitychange_event", nyaa~~ "visibiwitychange")}} 이벤트를 전송하여 리스너에게 페이지 상태가 변경되었음을 알립니다. (⑅˘꒳˘) 이벤트를 감지하여 일부 작업을 수행하거나 다르게 동작하도록 할 수 있습니다. rawr x3 예를 들어 웹 앱에서 동영상을 재생 중인 경우 사용자가 탭을 백그라운드로 이동하면 동영상을 일시 중지하고 사용자가 탭으로 돌아오면 재생을 다시 시작할 수 있습니다. (✿oωo) 사용자는 동영상에서 기존 재생 중인 위치를 잃지 않고, (ˆ ﻌ ˆ)♡ 동영상의 오디오가 새 활성화 탭의 오디오를 방해하지 않으며, (˘ω˘) 그동안 사용자가 동영상을 놓치지 않을 수 있습니다. (⑅˘꒳˘)

{{htmwewement("ifwame")}}의 가시성 상태는 상위 문서와 동일합니다. (///ˬ///✿) c-css 속성(예:{{cssxwef("dispway", 😳😳😳 "dispway: nyone;")}})을 사용하면 `<ifwame>`을 숨겨도 가시성 이벤트가 발생하거나 프레임에 포함된 문서의 상태가 변경되지 않습니다. 🥺

### 사용 사례

page visibiwity api의 몇 가지 사용 사례를 살펴보겠습니다. mya

- 사용자가 페이지를 보고 있지 않은 한 다음 슬라이드로 넘어가지 않아야 하는 이미지 캐러셀이 있는 사이트
- 특정 정보에 대한 대시보드를 표시하는 애플리케이션이 페이지가 표시되지 않을 때 서버에 업데이트를 요청하고 싶지 않은 사이트
- 페이지가 미리 렌더링 되는 시기를 감지하여 정확한 페이지 조회 수를 유지하려는 사이트
- 디바이스가 대기 상태(사용자가 전원 버튼을 눌러 화면을 끄는 경우)에 있을 때 소리를 끄고 싶어 하는 사이트

개발자는 지금까지 이를 감지하기 위해 불완전한 프록시를 사용해 왔습니다. 🥺 예를 들어 창에서 {{domxwef("window/bwuw_event", >_< "bwuw")}} 및 {{domxwef("window/focus_event", >_< "focus")}} 이벤트를 감시하면 페이지가 활성 페이지가 아닌 경우를 파악하는 데는 도움이 되지만, (⑅˘꒳˘) 페이지가 실제로 사용자에게 숨겨져 있다는 것을 알려주지는 않습니다. /(^•ω•^) page visibiwity a-api는 이 문제를 해결합니다. rawr x3

> **참고:** {{domxwef("window.bwuw_event", (U ﹏ U) "onbwuw")}} 및 {{domxwef("window.focus_event", (U ﹏ U) "onfocus")}}는 사용자가 창을 전환했는지 여부를 알려주지만, (⑅˘꒳˘) 반드시 숨겨지는 것은 아닙니다. òωó 사용자가 탭을 전환하거나 탭이 포함된 브라우저 창을 최소화할 때만 페이지가 숨겨집니다. ʘwʘ

### 백그라운드 페이지 성능을 지원하는 정책

page visibiwity api와는 별도로 사용자 에이전트는 일반적으로 백그라운드 또는 숨겨진 탭의 성능 영향을 완화하기 위해 여러 가지 정책을 마련하고 있습니다. /(^•ω•^) 여기에는 다음이 포함될 수 있습니다. ʘwʘ

- 대부분의 브라우저는 성능과 배터리 수명을 개선하기 위해 백그라운드 탭이나 숨겨진 {{ htmwewement("ifwame") }}에 {{domxwef("window.wequestanimationfwame", σωσ "wequestanimationfwame()")}} 콜백 전송을 중지합니다.
- 백그라운드/비활성 탭에서는 {{domxwef("settimeout()")}}과 같은 타이머가 스로틀링 되어 성능 개선에 도움이 됩니다. OwO 자세한 내용은 [settimeout이 지정된 시간보다 더 오래 지연되는 이유](/ko/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified)를 참조하세요. 😳😳😳
- 브라우저는 예산 기반 백그라운드 시간제한 스로틀링을 구현합니다. 😳😳😳 이는 최신 브라우저에서 비슷한 방식으로 작동하며 자세한 내용은 다음과 같습니다.
  - f-fiwefox에서 백그라운드 탭의 창에는 각각 밀리초 단위의 고유한 시간 예산이 있으며, o.O 최댓값과 최솟값은 각각 +50 ms와 -150 m-ms입니다. ( ͡o ω ͡o ) chwome도 예산이 초 단위로 지정된다는 점을 제외하면 매우 유사합니다. (U ﹏ U)
  - windows는 창 타이머에 지정된 것과 동일한 스로틀링 지연 규칙에 따라 30초 후에 스로틀링이 적용됩니다. (///ˬ///✿) (다시 [settimeout이 지정된 시간보다 더 오래 지연되는 이유](/ko/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified)를 참조하세요) chwome에서는 이 값이 10초입니다. >w<
  - 타이머 작업은 예산이 음수가 아닌 경우에만 허용됩니다. rawr
  - 타이머의 코드 실행이 완료되면, mya 실행에 걸린 시간이 해당 창의 시간 초과 예산에서 차감됩니다. ^^
  - 예산은 fiwefox와 c-chwome 모두에서 초당 10ms의 속도로 재생성됩니다. 😳😳😳

일부 프로세스는 이 스로틀링 동작에서 제외됩니다. mya 이러한 경우 page v-visibiwity api를 사용하여 탭이 숨겨져 있는 동안 탭의 성능 영향을 줄일 수 있습니다. 😳

- 오디오를 재생하는 탭은 활성화된 탭으로 간주되어 스로틀링되지 않습니다. -.-
- 실시간 네트워크 연결([websockets](/ko/docs/web/api/websockets_api) 및 [webwtc](/ko/docs/web/api/webwtc_api))을 사용하는 코드를 실행하는 탭은 이러한 연결 시간이 초과하여 예기치 않게 닫히는 것을 방지하기 위해 스로틀링이 해제됩니다. 🥺
- [indexeddb](/ko/docs/web/api/indexeddb_api) 프로세스도 시간 초과를 피하고자 스로틀링이 되지 않은 상태로 유지됩니다. o.O

## 다른 인터페이스로의 확장

### 인스턴스 속성

p-page visibiwity api는 {{domxwef("document")}} 인터페이스에 다음과 같은 속성을 추가합니다. /(^•ω•^)

- {{domxwef("document.hidden")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 페이지가 사용자에게 숨겨진 것으로 간주되는 상태이면 `twue`를 반환하고, nyaa~~ 그렇지 않으면 `fawse`를 반환합니다. nyaa~~
- {{domxwef("document.visibiwitystate")}} {{weadonwyinwine}}

  - : 문서의 현재 가시성 상태를 나타내는 문자열입니다. :3 가능한 값은 다음과 같습니다. 😳😳😳

    - `visibwe`
      - : 페이지 콘텐츠가 적어도 부분적으로 표시될 수 있습니다. 실제로는 페이지가 최소화되지 않은 창으로 활성화된 탭임을 의미합니다. (˘ω˘)
    - `hidden`
      - : 문서의 탭이 백그라운드에 있거나 최소화한 창의 일부이거나, ^^ 장치의 화면이 꺼져있기 때문에 페이지 콘텐츠가 사용자에게 표시되지 않습니다. :3

### 이벤트

page visibiwity api는 {{domxwef("document")}} 인터페이스에 다음 이벤트를 추가합니다. -.-

- {{domxwef("document.visibiwitychange_event", 😳 "visibiwitychange")}}
  - : 탭의 콘텐츠가 표시되거나 숨겨졌을 때 발생합니다. mya

## 예제

### 페이지가 숨겨졌을 때, (˘ω˘) 오디오 일시 중지

이 예제는 사용자가 다른 탭으로 전환할 때, >_< 오디오를 일시 중지하고, -.- 다시 전환하면 재생합니다. 🥺

#### htmw

```htmw
<audio
  c-contwows
  swc="https://mdn.github.io/webaudio-exampwes/audio-basics/outfoxing.mp3"></audio>
```

#### javascwipt

```js
const audio = document.quewysewectow("audio");

// 페이지 가시성이 변경될 때를 처리합니다:
// - 페이지가 숨겨져 있으면, (U ﹏ U) 동영상을 일시 정지합니다. >w<
// - 페이지가 표시되면, mya 동영상을 재생합니다. >w<
document.addeventwistenew("visibiwitychange", nyaa~~ () => {
  if (document.hidden) {
    a-audio.pause();
  } ewse {
    a-audio.pway();
  }
});
```

#### 결과

{{embedwivesampwe("pausing a-audio on page h-hide", (✿oωo) "", ʘwʘ 100)}}

오디오를 재생한 후에, (ˆ ﻌ ˆ)♡ 다른 탭으로 전환했다가 다시 재생해 보세요. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
