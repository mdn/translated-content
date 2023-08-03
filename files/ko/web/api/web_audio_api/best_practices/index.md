---
title: Web Audio API 잘 사용하기
slug: Web/API/Web_Audio_API/Best_practices
---

{{apiref("Web Audio API")}}

창의적인 코드를 작성할 때 엄격하게 옳거나 틀린 길은 없습니다. 여러분이 보안, 성능, 접근성을 고려하는 한, 여러분은 여러분만의 스타일에 적응할 수 있습니다. 이 문서에서, 우리는 몇 가지의 _좋은 습관들_ — Web Audio API를 가지고 작업하는 데 있어서의 가이드라인, 팁, 그리고 트릭들 — 을 공유하고자 합니다.

## 사운드/파일 로딩하기

Web Audio API를 가지고 사운드를 로딩하는 4가지의 주요한 방법이 있고 어떤 것을 사용해야 하는지에 관해서 조금 헷갈릴 수 있습니다.

파일을 가지고 작업할 때, 파일을 {{domxref("HTMLMediaElement")}} (예: {{htmlelement("audio")}} 또는 {{htmlelement("video")}} 요소) 로 가져오거나, 파일을 가져와서 버퍼로 디코드하는 방법이 있습니다. 양 쪽 모두 작동하는 타당한 방법이지만, 전체 길이의 트랙을 가지고 작업할 때는 전자를 이용하는 방법이 더욱 일반적이고, 샘플같은 짧은 트랙을 가지고 작업할 때는 후자가 일반적입니다.

미디어 요소들은 박스로부터 스트리밍 지원을 받습니다. 오디오는 브라우저가 재생이 끝나기 이전에 파일의 나머지 부분을 로딩할 수 있다고 결정했을 때 재생을 시작합니다. 여러분은 [Web Audio API 사용하기 자습서](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)에서 Web Audio API를 가지고 이것을 어떻게 사용하는지에 대한 예제를 보실 수 있습니다.

그러나, 만약 버퍼 노드를 사용한다면 여러분은 더 많은 제어를 할 수 있습니다. 여러분은 파일을 요청하고 이것이 로딩되기를 기다려야 하지만 ([이 글의 이 섹션은](/ko/docs/Web/API/Web_Audio_API/Advanced_techniques#Dial_up_%E2%80%94_loading_a_sound_sample) 이것을 하는 좋은 방법을 보여줍니다), 그 다음에 여러분은 데이터에 직접 접근할 수 있는데, 이는 더욱 정밀한 조작이 가능함을 의미합니다.

만약 여러분이 유저의 카메라나 마이크로부터의 오디오로 작업하는 방법을 찾고 있다면 여러분은 [Media Stream API](/ko/docs/Web/API/Media_Streams_API)와 {{domxref("MediaStreamAudioSourceNode")}} 인터페이스를 통해 그것에 접근할 수 있습니다. 이것은 WebRTC와 녹음이나 오디오 분석을 원하는 상황에 알맞습니다.

마지막 방법은 여러분만의 사운드를 생성하는 것인데, 이는 {{domxref("OscillatorNode")}}나 버퍼를 만들고 데이터를 채워넣는 방법으로 이루어질 수 있습니다. 오실레이터와 버퍼로 사운드를 생성하기 위해 [이 자습서에서 여러분만의 악기를 만드는 방법에 대해서](/ko/docs/Web/API/Web_Audio_API/Advanced_techniques) 알아보세요.

## 크로스 브라우저 & 레거시 지원

Web Audio API 명세는 끊임없이 진화하고 있으며 웹에 있는 대부분의 것들처럼, 브라우저들에서 일관되게 작동하는 데 있어 몇 가지 문제가 있습니다. 여기서 우리는 크로스 브라우저 문제들을 해결하기 위한 옵션들을 살펴보겠습니다.

[`standardised-audio-context`](https://github.com/chrisguttandin/standardized-audio-context)(표준화된 오디오 컨텍스트) npm 패키지가 있는데, 이는 지속적으로 브라우저 간의 API 기능을 만들고, 문제들이 발생되면 해결합니다. 이것은 계속 개발되고 있으며 현재 명세에 뒤지지 않기 위해 노력하고 있습니다.

또한 라이브러리를 사용하는 옵션도 있는데, 여러분이 사용하는 경우에 의존하는 몇 가지가 있습니다. 좋은 올라운더로는, [howler.js](https://howlerjs.com/)가 좋은 선택입니다. 이것은 크로스 브라우저를 지원하고, 유용한 기능들을 제공합니다. 비록 이것이 Web Audio API에 딸린 모든 필터들과 다른 이펙트들을 이용하지는 않지만, 여러분은 하기를 원하는 대부분의 것들을 할 수 있습니다.

만약 여러분이 사운드 생성 또는 더욱 악기 기반의 옵션을 찾고 있다면, [tone.js](https://tonejs.github.io/)가 훌륭한 라이브러리입니다. 이것은 고급 스케쥴링 기능, 신시사이저, 이펙트, 그리고 Web Audio API 위에서 개발된 직관적인 음악적 추상 기능들을 제공합니다.

[BBC's Research & Development department](https://medium.com/bbc-design-engineering/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c)로부터의 [R-audio](https://github.com/bbc/r-audio)는, "Web Audio에의 더욱 직관적이고, 선언적인 인터페이스"를 제공하기를 목표로 하는 React 컴포넌트 라이브러리입니다. 만약 여러분이 JSX를 작성하는 데 익숙하다면 이것은 살펴볼만한 가치가 있을 것입니다.

## 자동 재생 정책

브라우저들은 자동 재생 정책 기능을 구현하기 시작했는데, 이는 일반적으로 다음과 같이 요약될 수 있습니다.

> "Create or resume context from inside a user gesture".
>
> "유저 제스처 내부로부터 컨텍스트를 생성하거나 재개하십시오".

하지만 실제로 이것은 무엇을 의미하는 것일까요? 유저 제스처는 유저가 발생시킨 이벤트를 의미하는 것으로 이해될 수 있는데, 이는 보통 `click` 이벤트입니다. 브라우저 벤더들은 Web Audio 컨텍스트는 자동적으로 오디오를 재생하도록 허용되어져서는 안 된다고 결정했습니다; 대신 그것들은 유저에 의해 시작되어야만 합니다. 이것은 왜냐하면 자동 재생되는 오디오는 정말 짜증나고 거슬릴 수 있기 때문입니다. 하지만 우리는 어떻게 이것을 다룰까요?

여러분이 오디오 컨텍스트를 생성할 때 (offline 또는 online 둘 다) 이것은 `state`(상태)와 함께 생성되는데, 이것은 `suspended`, `running`, 또는 `closed`일 수 있습니다.

{{domxref("AudioContext")}}를 가지고 작업할 때, 만약 여러분이 오디오 컨텍스트를 `click` 이벤트 내부에서 생성했다면 상태는 자동적으로 `running`으로 설정될 것입니다. 여기 `click` 이벤트 내부로부터 컨텍스트를 생성하는 간단한 예제가 있습니다:

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  function () {
    const audioCtx = new AudioContext();
  },
  false,
);
```

그러나 만약, 여러분이 유저 제스처 바깥에서 컨텍스트를 생성했다면, 이것의 상태는 `suspended`로 설정될 것이고 유저 상호 작용 이후에 시작될 필요가 있을 것입니다. 우리는 같은 클릭 이벤트 예제를 여기서 사용하고, 컨텍스트의 상태를 시험하고, 만약 이것이 연기되었다면(suspended), [`resume()`](/ko/docs/Web/API/AudioContext/resume) 메서드를 사용하여 시작합니다.

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener(
  "click",
  function () {
    // 컨텍스트가 연기된 상태에 있는지 검사합니다 (자동 재생 정책)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  },
  false,
);
```

여러분은 대신 {{domxref("OfflineAudioContext")}}을 가지고 작업할 수 있는데, 이 경우 여러분은 연기된 오디오 컨텍스트를 [`startRendering()`](/ko/docs/Web/API/OfflineAudioContext/startRendering) 메서드로 재개할 수 있습니다.

## 유저 컨트롤

만약 여러분의 웹사이트나 애플리케이션이 사운드롤 포함한다면, 여러분은 유저가 그것을 제어할 수 있게 허용해야만 합니다. 다시 말하지만 그렇지 않는다면, 이것은 짜증날 것입니다. 이것은 재생/정지 그리고 볼륨/음소거 제어로 달성될 수 있습니다. [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) 자습서는 어떻게 이것을 하는지에 대해 다룹니다.

만약 여러분이 오디오를 켜고 끄는 버튼을 가지고 있다면, ARIA [`role="switch"`](/ko/docs/Web/Accessibility/ARIA/Roles/Switch_role) 특성을 그것에 사용하는 것은 보조 기술에 그 버튼의 정확한 목적이 무엇인지에 대한 신호를 보내고, 그럼으로써 앱을 더욱 접근 가능하게 만들기 위한 좋은 옵션입니다. [여기 어떻게 이것을 사용하는지에 대한 데모](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100)가 있습니다.

여러분은 Web Audio API 내에서 많은 변화하는 값들을 가지고 작업하고 유저에게 이것들에 대한 제어를 제공하기를 원할 것이므로, [`range input`](/ko/docs/Web/HTML/Element/input/range)은 종종 사용할 제어의 좋은 선택입니다. 이것은 여러분이 최소와 최대값 뿐만 아니라 [`step`](/ko/docs/Web/HTML/Element/input#attr-step) 특성으로 증가량 또한 설정할 수 있으므로 좋은 옵션입니다.

## AudioParam 값 설정하기

{{domxref("AudioParam")}} 인터페이스 타입의 그 자신의 객체인, {{domxref("AudioNode")}} 값을 조작하는 두 가지 방법이 있습니다. 첫째는 속성을 통해 직접 값을 설정하는 것입니다. 예를 들자면 만약 우리가 {{domxref("GainNode")}}의 `gain` 값을 변경하기를 원한다면 우리는 이와 같이 할 것입니다:

```js
gainNode.gain.value = 0.5;
```

이것은 볼륨을 절반으로 설정할 것입니다. 그러나, 만약 여러분이 이 값들을 설정하기 위해 `AudioParam`에 정의된 메서드들 중 어떤 것이라도 사용한다면, 그것들은 상기의 속성 설정에 대해 우선권을 얻을 것입니다. 예를 들어 만약, 여러분이 `gain` 값을 2초 동안 1까지 상승시키기를 원한다면, 여러분은 다음과 같이 할 수 있습니다:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

이것은, 이전 예제가 코드의 뒤에 올 지라도, 이전 예제를 (당연히 그래야 하듯) 덮어쓸 것입니다.

이것을 명심하세요. 만약 여러분의 웹사이트나 애플리케이션이 타이밍과 스케쥴링을 요구한다면, 값을 설정하기 위해 {{domxref("AudioParam")}} 메서드를 사용하는 것이 최선입니다. 만약 여러분이 이것이 필요없다고 확신하신다면, `value` 속성으로 설정하는 것도 괜찮습니다.
