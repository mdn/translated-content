---
title: 미디어 및 Web Audio API 자동 재생 가이드
slug: Web/Media/Autoplay_guide
---

페이지가 로드 되자마자 소리(또는 소리가 나는 영상)를 자동으로 재생하는 것은 사용자에게 별로 유쾌한 경험은 아닐겁니다. 미디어 자동 재생이 유용하려면 꼭 필요한 경우에 한하여 조심스럽게 쓰여야 합니다. 사용자가 이를 컨트롤 할 수 있게 여러 브라우저들은 미디어 자동 재생을 막는 기능을 제공하고 있습니다. I본 가이드 문서에서는 다양한 미디어와 Web audio API를 통한 자동 재생 기능에 대해 소개하고 자동 재생을 하는 법과 브라우저의 자동 재생 방지 기능에 깔끔하게 대처하는 법에 대해 알아봅니다.

{{HTMLElement("video")}} 엘리먼트에 오디어 트랙이 없거나 음소거인 경우에는 자동 재생 방지 기능에 영향받지 않습니다. 활성화된 오디오 트랙을 가진 미디어는 **audible**로 취급하고 자동 재생 방지 기능이 동작합니다. **Inaudible** 미디어는 그렇지 않습니다.

## 자동 재생과 자동 재생 방지

**자동 재생(autoplay)** 이라는 용어는 사용자의 재생 요청 없이 오디오를 재생하는 모든 기능을 총칭합니다. HTML attribute를 통해 재생하거나 사용자 입력 외의 코드에서 Javascript를 통해 재생하는 경우을 포합합니다.

이 말은 브라우저는 아래 두 경우 모두를 자동 재생 동작으로 인지하고 자동 재생 방지 기능을 적용한다는 의미입니다:

```html
<audio src="/music.mp4" autoplay></audio>
```

와

```js
audioElement.play();
```

아래 웹 기능과 API는 자동 재생 방지 기능에 영향을 받습니다:

- {{Glossary("HTML")}} {{HTMLElement("audio")}}, {{HTMLElement("video")}} 엘리먼트
- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)

사용자의 입장에서는 웹 페이지나 앱이 의도와 무관하게 소음을 내기 시작하면 불쾌하거나 거슬릴 가능성이 높습니다. 때문에 일반적으로 브라우저는 특정 조건 하에서만 자동 재생이 가능하도록 허용하고 있습니다.

### 자동 재생 가능 여부

일반적으로 아래 _조건 중 하나라도_ 해당된다면 자동 재생이 가능하다고 볼 수 있습니다

- 음소거이거나 오디오 볼륨이 0
- 사용자가 사이트와 상호작용 함 (클릭, 터치, 키 누름 등.)
- 화이트리스트에 등록된 사이트; 브라우저가 판단하기에 사용자가 해당 사이트에서 미디어를 자주 재생하거나 수동으로 화이트 리스트에 사이트를 등록한 경우를 포함합니다.
- 자동 재생 정책이 허용으로 지정되어 {{HTMLElement("iframe")}}와 document에서 자동 재생을 지원하는 경우

이외에는 자동 재생이 막힐겁니다. 정확한 차단 케이스나 사이트를 화이트리스트에 등재하는 방식 등은 브라우저마다 모두 다릅니다. 하지만 위의 케이스들이 좋은 가이드라인이 될 수 있겠죠.

자세한 것은 [Google Chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)과 [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)의 자동 재생 정책을 참조하세요.

> **참고:** 사용자 인터랙션이 이루어지지 않은 탭에서 오디오가 포함된 미디어를 프로그램적으로 수행하면 일반적으로 차단됩니다. 차단 조건은 브라우저별로 몇 개 더 추가 될 수 있습니다.

## 미디어 엘리먼트 자동 재생

이제 자동 재생이 무엇인지, 자동 재생을 방지하는 것은 무엇인지에 대해 자세히 알아봅시다. 자페이지가 로드될 때 어떻게 자동으로 재생하는지, 자동 재생이 실패한 경우를 어떻게 알아내는 지 그리고 브라우저가 자동 재생을 금지한 경우 어떻게 대응할지 알아봅시다.

### autoplay 속성

가장 간단한 자동 재생 방법은 {{HTMLElement("audio")}}나 {{HTMLElement("video")}} 엘리먼트에 [`autoplay`](/ko/docs/Web/HTML/Element/audio#autoplay) 속성을 추가하는 겁니다. 이는 {{domxref("HTMLMediaElement.autoplay", "autoplay")}} 속성을 `true`로 지정하며, `autoplay`가 `true`면 아래 조건이 만족된 직후부터 자동 재생을 시도합니다:

- 페이지가 자동 재생 기능을 허용할 때
- 페이지 로드 중에 엘리먼트가 생성될 때
- 미디어의 끝까지 문제 없이 재생 가능할 정도로 충분한 데이터가 수신되었으며, 네트워크 품질에 큰 변화가 발생하지 않을 것으로 추정되는 경우.

#### 예제: autoplay 속성

{{HTMLElement("audio")}} 엘리먼트의 `autoplay` 속성을 사용하는 경우는 아래와 같습니다:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp4" />
</audio>
```

#### 예제 2: 자동재생 실패 탐지

자동 재생 기능이 중요하거나, 자동 재생 실패 시 앱에 큰 영향이 가해진다면, 여러분은 아마도 자동 재생이 실패하는 시점을 알고 싶을겁니다. 안타깝게도 [`autoplay`](/ko/docs/Web/HTML/Element/audio#autoplay) 속성을 사용하는 경우, 자동 재생 성공 여부를 알아내는 것이 쉽지 않습니다. 자동 재생 실패 시 발생하는 이벤트가 없기 때문이죠. 게다가 익셉션 또는 콜백, 심지어 자동 재생이 되었을 때 켜지는 플래그조차 없습니다. 여러분이 할 수 있는 건 몇 가지 변수를 체크하거나 경험적으로 자동 재생이 동작했는지 판단할 수 밖에 없습니다.

더 좋은 방법으로는 앱의 동작 방식을 자동 재생 실패를 탐지하기보다 성공을 탐지하는 방향으로 조정하는 것입니다. 이 방법은 간단한데, 미디어 엘리먼트에서 {{event("play")}} 가 발생하길 기다리는 것입니다.

`play` 이벤트는 일시 정지된 후 재생될때와 자동 재생이 동작하는 두 경우 모두 발생합니다. 이 말은 즉 `play` 이벤트가 최초로 발생했다면 페이지가 열린 후 미디어가 처음으로 재생되었다는것을 알 수 있다는 말이죠.

아래 HTML 코드를 확인 해 보세요:

```html
<video src="myvideo.mp4" autoplay onplay="handleFirstPlay(event)"></video>
```

{{HTMLElement("video")}} 엘리먼트에 [`autoplay`](/ko/docs/Web/HTML/Element/video#autoplay) 속성이 설정되어 있으며, {{domxref("HTMLMediaElement.onplay", "onplay")}} 이벤트 핸들러도 지정되어 있습니다; 이벤트는 `handleFirstPlay()` 함수로 전달되며 `play` 이벤트를 인자로 받습니다.

`handleFirstPlay()` 는 아래와 같습니다:

```js
function handleFirstPlay(event) {
  let vid = event.target;

  vid.onplay = null;

  // Start whatever you need to do after playback has started
}
```

{{domxref("Event")}} 객체의 {{domxref("Event.target", "target")}} 프로퍼티로 비디오 엘리먼트 참조를 얻은 뒤에, 엘리먼트의 `onplay` 핸들러를 `null`로 세팅합니다. 이렇게 하면 향후 모든 `play` 이벤트가 핸들러로 전달되는 것을 방지합니다. 비디오 일시 정지 후 사용자가 재생하거나 백그라운드 탭으로 전환된 후 브라우저에 의해 자동으로 재생될 때 발생할 수 있습니다.

이 시점에서 여러분의 사이트나 앱은 비디오 시작 후 필요한 모든 작업을 수행할 수 있습니다.

> **참고:** autoplay 또는 사용자가 직접 재생하는 경우에도 위 방법은 차이점은 없습니다.

### play() 메소드

사용자 입력 이벤트에서 시작된 컨텍스트 밖에서 오디오가 포함된 미디어를 재생하는 시나리오도 자동 재생(autoplay)라 부릅니다. 미디어 엘리먼트의 {{domxref("HTMLMediaElement.play", "play()")}} 메소드를 호출하면 가능합니다.

> **참고:** 가능하다면 `autoplay` 속성을 사용하는 걸 항상 추천합니다. 왜냐면 다른 방식으로 자동 재생하는 방법보다 `autoplay` 속성에 대한 지원이 더 잘 되어 있기 때문입니다. 또한 자동 재생 방식과 시점을 브라우저가 최적으로 결정할 수 있게 합니다.

#### 예시: 비디오 재생

아래는 문서 내의 첫번째 {{HTMLElement("video")}} 엘리먼트를 찾아 재생하는 간단한 예제입니다. `play()` 는 자동 재생 권한을 획득하기 전까지는 재생하지 않습니다.

```js
document.querySelector("video").play();
```

#### 예시: play() 실패 처리

{{domxref("HTMLMediaElement.play", "play()")}} 메소드로 재생한 경우 자동 재생 실패를 탐지하는 것은 매우 쉽습니다. `play()` 함수가 재생 성공시 resolve되고 실패 시(자동 재생이 거부되거나) reject되는 {{jsxref("Promise")}}를 반환하기 때문이죠. 자동 재생이 실패한 경우 수동으로 사용자에게 자동 재생 권한을 요청하면 됩니다.

아래와 같은 코드로 해결할 수 있습니다:

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(videoElem);
      } else {
        // Handle a load or playback error
      }
    })
    .then(() => {
      // Start whatever you need to do only after playback
      // has begun.
    });
}
```

`play()`의 반환값이 `undefined`가 아닌 지 먼저 확인해야합니다. 과거 버전 HTML 표준에서는 `play()` 의 반환 값이 정의되어 있지 않기 때문입니다. Promise를 반환하여 재생 성공/실패를 알 수 있게 된 것은 최근의 일입니다. `undefined`인지 체크하여 구형 브라우저에서 오류가 발생하지 않도록 하세요.

그 후 promise에 {{jsxref("Promise.catch", "catch()")}} 핸들러를 추가합니다. 핸들러는 에러의 {{domxref("DOMException.name", "name")}}이 `NotAllowedError`인지 체크합니다. 이는 재생이 실패한 이유가 자동 재생 금지 같은 퍼미션 문제인지 알 수 있습니다. 그 경우 여러분은 사용자가 직접 재생할 수 있도록 UI를 표시해야 합니다; `showPlayButton()` 함수가 하는 일이죠.

다른 에러도 적절하게 처리해 줍니다.

`play()`가 반환 한 promise가 에러 없이 resolveed 되면, `then()` 절에서 자동 재생 성공 후 하려는 뭐든지 수행하면 됩니다.

## Web Audio API를 이용한 자동 재생

웹사이트나 앱에서 [Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 {{domxref("AudioContext")}} 같은 노드에서 `start()` 메소드를 호출하여 오디오를 자동 재생할 수 있습니다. 사용자 입력 컨텍스트에 벗어난 곳에서 호출할 경우에는 자동 재생 규칙이 적용됩니다.

_상세한 내용 추가 예정; 모질라는 아직 자동 재생 방지 기능을 작업 중입니다. 다른 곳에 이미 구현되었다면 여기에 마음 껏 내용을 추가해 주세요..._

## 자동 재생 기능 정책

지금까지 설명한 브라우저 측의 자동 재생 관리 및 처리 기능도 있지만, 웹 서버도 자동 재생 여부를 결정할 수 있습니다. {{Glossary("HTTP")}} {{HTTPHeader("Feature-Policy")}} 헤더의 [`autoplay`](/ko/docs/Web/HTTP/Headers/Feature-Policy/autoplay) 디렉티브가 해당 용도입니다. 존재만 하면 자동 재생할 때 쓸 수 있습니다. 기본적으로 `autoplay`의 allowlist는 `'self'` (_홑따옴표 포함_)이며, 현재 문서와 동일한 domain에만 허용하고 있습니다.

`'none'`으로 지정하여 전역으로 자동 재생을 막을 수 있습니다. `'*'` 는 모든 도메인에서 전송된 미디어를 자동 재생하도록 허용합니다. 오리진은 하나의 space 문자로 구분 됩니다.

> **참고:** 명시된 feature policy는 현재 문서와 내부의 모든 {{HTMLElement("iframe")}}에 적용됩니다. 단 [`allow`](/ko/docs/Web/HTML/Element/iframe#allow) 어트리뷰트를 가진 iframe과 해당 프레임의 내부 프레임은 새로운 feature policy가 적용되며 상위의 feature policy는 무시됩니다.

`<iframe>`에 [`allow`](/ko/docs/Web/HTML/Element/iframe#allow)를 추가하여 해당 프레임과 내부 프레임에 feature policy를 적용하면, [`src`](/ko/docs/Web/HTML/Element/iframe#src) 어트리뷰트에서 지정된 도메인에서만 미디어를 자동 재생 하도록 허용할 수 있습니다.

### 예시: document의 domain에서만 자동 재생 허용

{{HTTPHeader("Feature-Policy")}} 헤더를 사용하여 document의 {{Glossary("origin")}}에서만 자동 재생을 허용하는 예시입니다:

```
Feature-Policy: autoplay 'self'
```

{{HTMLElement("iframe")}}에서 동일한 작업을 합니다:

```html
<iframe src="mediaplayer.html" allow="autoplay 'src'"> </iframe>
```

### 예시: 전체 화면에서 자동 재생 허용

이전 예시에 추가로 [Fullscreen API](/ko/docs/Web/API/Fullscreen_API) 권한을 더하면 `Feature-Policy` 헤더는 아래와 같습니다. 도메인에 상관 없이 허용한 경우인데요; 필요하다면 도메인 제한을 추가할 수 있습니다.

```
Feature-Policy: autoplay 'self'; fullscreen
```

`<iframe>` 엘리먼트의 `allow` 프로퍼티를 통해서 동일한 작업을 하면 아래와 같습니다:

```html
<iframe src="mediaplayer.html" allow="autoplay 'src'; fullscreen"> </iframe>
```

### 예시: 특정 리소스만 자동 재생 허용

document(또는 `<iframe>`)의 도메인과 `https://example.media` 에서만 자동 재생을 허용하기 위해서는 `Feature-Policy` 를 아래와 같이 작성합니다:

```
Feature-Policy: autoplay 'self' https://example.media
```

그리하여 {{HTMLElement("iframe")}} 역시 자신과 자식 프레임에서 자동 재생 정책을 사용하기 위해 아래와 같이 작성할 수 있습니다:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### 예시: 자동 재생 비활성

`autoplay` feature policy를 `'none'`으로 지정하면 전체 document, `<iframe>` 및 모든 내부 프레임에서 자동 재생이 불가능합니다. 헤더는 다음과 같습니다:

```
Feature-Policy: autoplay 'none'
```

`<iframe>`의 `allow` 어트리뷰트를 쓴다면:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## 유용한 사례

자동 재생을 적절하게 활용하기 위한 팁과 사례들을 모아 보았습니다.

### Media control을 통해 자동 재생 실패 처리하기

자동 재생하는 대표적인 케이스는 본문이나 광고 또는 페이지의 메인 기능에 대한 프리뷰로써 짧은 비디오 클립을 자동으로 재생하는 경우입니다. 이 경우 두 가지 선택지가 있습니다: 오디오가 없는 비디오를 재생하거나, 오디오가 있어도 기본적으로 음소거하거나, 아래처럼요:

```html
<video src="/videos/awesomevid.webm" controls autoplay muted></video>
```

이 비디오 엘리먼트는 user control 어트리뷰트가 설정되어 있습니다 (보통 재생/일시정지, 비디오 타임라인 탐색, 볼륨 컨트롤, 음소거 등); 또한 [`muted`](/ko/docs/Web/HTML/Element/video#muted) 어트리뷰트가 포함되어 있어 자동 재생 되지만 음소거 상태입니다. 하지만 사용자는 볼륨 버튼을 클릭하여 음소거를 해제할 수 있죠.

## 브라우저 설정 옵션

브라우저는 보통 자동 재생 동작 방식을 컨트롤하기 위한 사전 설정, 혹은 자동 재생 방지 처리법을 가지고 있습니다. 그런 사전 설정들 중에 웹개발자인 여러분들에게 중요하거나 유용할 사전 설정들을 나열해 보았습니다. 이 설정들은 테스트 및 디버깅에 필요할 뿐만 아니라 실제로 도입되기 전 준비하는 데에도 유용합니다.

### Firefox

- `media.allowed-to-play.enabled`
  - : {{domxref("HTMLMediaElement.allowedToPlay")}} 프로퍼티의 노출 여부를 불리언 값으로 표현합니다. 현재는 기본값이 `false` 입니다(nightly builds는 예외로, 기본 값이 `true` 입니다). `false`라면, `HTMLMediaElement`에 `allowedToPlay` 프로퍼티가 없으며, {{HTMLElement("audio")}}와 {{HTMLElement("video")}} 엘리먼트에도 없습니다.
- `media.autoplay.allow-extension-background-pages`
  - : 불리언 값으로, `true`라면 브라우저 확장의 백그라운드 스크립트가 오디오를 자동 재생 할 수 있습니다. `false`로 세팅하면 해당 기능을 막습니다. 기본 값은 `true`입니다.
- `media.autoplay.allow-muted`
  - : 불리언 값으로 (기본 값) `true`는 현재 음소거 상태인 오디오 자동 재생을 허용합니다. `false`로 바뀔 때 오디오 트랙이 포함된 미디어는 음소거 상태라도 자동 재생이 불가능합니다.
- `media.autoplay.block-webaudio`
  - [: Web Audio API](/ko/docs/Web/API/Web_Audio_API)를 통한 자동 재생도 차단할 지 여부를 불리언값으로 표현합니다. 기본 값은 `true`입니다.
- `media.autoplay.default`
  - : 도메인 별 자동 재생 설정 값을 정수로 표현합니다. 허용 (`0`), 금지 (`1`), 확인 요청 (`2`). 기본 값은 `0`입니다.
- `media.autoplay.enabled.user-gestures-needed` (Nightly builds only)
  - : `media.autoplay.default` 값에 우선하여 사용자 제스쳐 적용 여부를 불리언 값으로 표현합니다. `media.autoplay.default` 값이 `0`이 _아닌_ 경우(자동 재생이 기본으로 허용), 이 설정이 `true` 일 때 사용자 제스쳐를 통한 activation 후 오디오 트랙이 있는 미디어의 자동 재생이 가능해 집니다. 오디오가 없는 미디어는 제한되지 않습니다.
- `media.block-autoplay-until-in-foreground`
  - : 백그라운드 탭에서 미디어 재생 시 제한 여부를 불리언 값으로 표현합니다. 기본 값 `true`는 다른 값이 허용이더라도 포그라운드에 탭이 올라오기 전까지 자동 재생이 불가능합니다. 이 설정은 어느 탭에선가 오디오를 재생했는데 사용자는 찾지 못해 탭을 뒤적이는 등의 짜증나는 시츄에이션을 방지해 줍니다.

## 더 보기

- [Web media technologies](/ko/docs/Web/Media)
- [Video and audio content](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Learning guide)
- [Using the Web Audio API](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-browser audio basics](/ko/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Cross-browser_audio_basics)
