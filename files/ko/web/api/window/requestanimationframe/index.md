---
title: "Window: requestAnimationFrame() 메서드"
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 67da7a675ed556b89179318dec20a2910f5f4649
---

{{APIRef}}

**`window.requestAnimationFrame()`** 메서드는 브라우저에 애니메이션을 수행하고자 함을 알립니다. 이 메서드는 브라우저가 다음 리페인트 직전에 사용자가 지정한 콜백 함수를 호출하도록 요청합니다.

콜백 함수가 호출되는 빈도는 일반적으로 디스플레이의 새로 고침 주기와 일치합니다. 가장 일반적인 주기는 60Hz(초당 60프레임) 이지만, 75Hz, 120Hz, 144Hz 등의 주파수도 널리 사용됩니다. 성능과 배터리 수명을 개선하기 위해, 대부분의 브라우저에서는 백그라운드 탭이나 숨겨진 {{ HTMLElement("iframe") }} 에서 `requestAnimationFrame()` 호출이 일시 중지됩니다.

> [!NOTE]
> 다음 리페인트에서 다른 프레임을 애니메이션 적용할려면 콜백 루틴이 반드시 스스로 `requestAnimationFrame()`을 호출해야 합니다. `requestAnimationFrame()`은 하나의 장면입니다.

> [!WARNING]
> 항상 프레임에서 얼마나 많은 애니메이션이 진행될 것인지 계산하기 위해 첫 번째 인수(혹은 현재 시간을 가질 수 있는 몇몇 다른 메서드)를 사용해야 합니다. **그렇지 않으면 높은 주사율에서 애니메이션이 빠르게 실행될 것입니다**.
> 이를 수행하는 방법에 대해서는 아래 예제를 참고해주세요.

## 구문

```js
requestAnimationFrame(callback);
```

### 매개변수

- `callback`
  - : 다음 리페인트 시점에 애니메이션을 업데이트하기 위해 호출할 함수입니다.
    이 콜백 함수에는 하나의 인수가 전달됩니다:
    - `timestamp`
      - : 이전 프레임 렌더링이 끝난 시점을 나타내는 {{domxref("DOMHighResTimeStamp")}}입니다.
        이는 [시간 기준점](/ko/docs/Web/API/Performance/timeOrigin) 이후 경과한 밀리초 수를 기반으로 하며, 밀리초 단위의 소수값으로 제공되지만 최소 정밀도는 1밀리초입니다. Window 객체(즉, `Worker`가 아닌 경우)에서는 이 값이 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}와 동일합니다. 이 타임스탬프는 동일한 에이전트(같은 출처의 모든 창 및 특히 같은 출처의 iframe)에서 실행되는 모든 창 간에 공유되므로, 여러 `requestAnimationFrame` 콜백 간의 애니메이션을 동기화할 수 있습니다. 또한 이 값은 콜백 함수가 시작될 때 {{domxref('performance.now()')}}를 호출한 결과와 유사하지만, 완전히 동일한 값은 아닙니다.

        여러 개의 `requestAnimationFrame()` 콜백이 하나의 프레임 내에서 동시에 실행되기 시작할 경우, 이전 콜백의 작업이 수행되는 동안 시간이 흘렀더라도 모든 콜백은 동일한 타임스탬프 값을 받습니다.

### 반환 값

`unsigned long` 정수 값으로, 콜백 목록 내 항목을 고유하게 식별하는 요청 ID 입니다. 이 값의 형태나 패턴에 대해 어떤 가정도 해서는 안 됩니다. 이 값을 {{domxref("window.cancelAnimationFrame()")}}에 전달하여 등록된 리프레시 콜백 요청을 취소할 수 있습니다.

> [!WARNING]
> 요청 ID는 일반적으로 윈도우별 증가형 카운터로 구현됩니다. 따라서 1부터 시작하더라도 오버플로우가 발생해 0에 도달할 수 있습니다.
> 짧은 시간 동안 실행되는 애플리케이션에서는 문제가 될 가능성이 낮지만, 잘못된 요청 ID를 나타내는 센티널 값으로 `0`을 사용하는 것은 피해야 합니다. 대신 도달할 수 없는 값인 `null`과 같은 값을 사용하는 것이 좋습니다.
> 명세(spec)에서는 오버플로우 동작이 정의되어 있지 않기 때문에, 브라우저마다 동작이 다를 수 있습니다. 오버플로우 시 값이 0으로 되돌아가거나, 음수가 되거나, 오류를 발생시킬 수도 있습니다.
> 또한 오버플로우가 예외를 던지지 않는 한, 가능한 32비트 정수의 개수는 유한하지만 콜백은 무한히 생성될 수 있으므로 요청 ID는 완전히 고유(unique) 하지 않습니다.
> 다만, 60Hz 주사율 환경에서 프레임당 `requestAnimationFrame()`을 100번 호출하는 경우에도 오버플로우 문제가 발생하기까지 약 500일이 걸립니다.

## 예시

이 예제에서는 요소가 2초(2000밀리초) 동안 애니메이션됩니다. 요소는 오른쪽으로 0.1px/ms(밀리초당 0.1픽셀) 의 속도로 이동하므로, 애니메이션이 시작된 이후 경과한 시간(밀리초 단위)에 따라 요소의 상대적 위치(CSS 픽셀 단위)는 `0.1 * elapsed`로 계산할 수 있습니다. 요소의 최종 위치는 처음 위치에서 오른쪽으로 200px(`0.1 * 2000`) 이동한 지점입니다.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // 요소가 정확히 200px 지점에서 멈추도록 하기 위해 Math.min()을 사용했습니다.
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

다음 세 가지 예제는 각 프레임에서 애니메이션 진행도를 계산할 때 기준이 되는 시간의 영점, 즉 기준 시점을 설정하는 서로 다른 접근 방식을 보여줍니다. 외부 시계인 {{domxref("BaseAudioContext.currentTime")}} 등과 동기화하려는 경우 사용할 수 있는 가장 높은 정밀도는 60Hz 기준 단일 프레임의 지속 시간인 16.67ms입니다. 콜백의 timestamp 인수는 이전 프레임이 끝난 시점을 나타내므로, 새로 계산된 값이 렌더링되는 가장 빠른 시점은 다음 프레임입니다.

이 예제에서는 첫 번째 콜백이 실행될 때까지 기다렸다가 `zero`를 설정합니다. 애니메이션이 시작될 때 새로운 값으로 점프한다면 이 방식을 사용해야 합니다. 오디오 등 외부 요소와 동기화할 필요가 없다면, 일부 브라우저에서 `requestAnimationFrame()`의 초기 호출과 첫 번째 콜백 함수 호출 사이에 여러 프레임의 지연이 있을 수 있으므로 이 접근 방식이 권장됩니다.

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
  zero = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  const value = (timestamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

이 예제에서는 첫 번째 `requestAnimationFrame` 호출 전에 zero 값을 설정하기 위해 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}를 사용합니다. `document.timeline.currentTime`은 `timestamp` 인수와 동일하게 정렬되므로, 이 zero 값은 0번째 프레임의 타임스탬프와 같습니다.

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timestamp) {
  const value = (timestamp - zero) / duration; // 애니메이션 타이밍 함수: 선형
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

이 예제에서는 콜백의 타임스탬프 값 대신 {{domxref("performance.now()")}}를 사용하여 애니메이션을 수행합니다. 이를 통해 약간 더 높은 동기화 정밀도를 얻을 수 있지만, 추가되는 정밀도는 일정하지 않고 크게 향상되지는 않습니다.

> [!NOTE]
> 이 예제는 애니메이션 콜백을 신뢰할 수 있게 동기화할 수 있도록 하지는 않습니다.

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [JavaScript로 애니메이션 구현: setInterval에서 requestAnimationFrame으로](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - 블로그 포스트
- [TestUFO: 웹 브라우저의 requestAnimationFrame() 타이밍 편차 테스트](https://www.testufo.com/#test=animation-time-graph)
- [Firefox, requestAnimationFrame 요청 ID에 uint32_t 사용으로 전환](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
