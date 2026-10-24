---
title: JavaScript 성능 최적화
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

웹 사이트에서 JavaScript를 어떻게 사용할지 고려하고 JavaScript가 일으키는 성능 이슈를 완화할 방법을 생각하는 것은 상당히 중요합니다. 사진과 영상은 웹 사이트 평균 바이트 당 다운로드 70%를 차지하지만, JavaScript는 더 큰 부정적인 성능 영향을 미칠 가능성이 있습니다. 이는 다운로드 소요 시간, 렌더링 성능, CPU와 배터리 사용에 상당한 영향을 미칠 수 있습니다. 이번 글에서는 웹 사이트 성능을 개선하는 JavaScript 최적화 팁과 기법을 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전지식:</th>
      <td>
        <a
          href="/ko/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn_web_development/Getting_started/Your_first_website"
          >클라이언트 사이드 웹 기술</a
        >의 기본적인 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 성능에서 JavaScript가 미치는 영향과
        관련된 이슈를 완화하거나 해결하는 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 최적화 할 것인가, 하지 않을 것인가

코드 최적화를 시작하기 전에 대답해야 하는 첫 번째 질문은 "어떤 부분을 최적화 할 것인가?"입니다. 아래에서 다루는 몇 가지 팁과 기법은 대부분 웹 프로젝트에서 좋은 영향을 주는 모범 사례이지만, 특정 상황에서만 필요한 경우도 있습니다. 모든 기법을 적용하려고 시도하는 것은 아마 불필요한 시간을 낭비할 수도 있습니다. 각 프로젝트에서 실제로 성능 최적화가 필요한 곳을 파악하는 것이 중요합니다.

이를 위해서는, 사이트 [성능 측정](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance)을 할 필요가 있습니다. 위 링크에서 볼 수 있듯이, 정교한 [성능 API](/ko/docs/Web/API/Performance_API)를 포함해 성능을 측정하기 위한 몇 가지 다른 방법이 있습니다. 가장 쉽게 시작하는 방법은 브라우저에 내장되어 있는 [네트워크](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools)와 [성능](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) 도구 사용 방법을 배우고, 페이지 로딩 속도가 느린 부분을 찾아 최적화 하는 것입니다.

## JavaScript 다운로드 최적화

가장 성능이 뛰어나고 실행을 방해하지 않는 JavaScript는 아예 사용하지 않는 JavaScript입니다. 가능한 JavaScript를 사용을 최소화해야 합니다. 명심해야 하는 몇 가지 팁이 있습니다.

- **항상 프레임워크가 필요한 것은 아닙니다**: [JavaScript 프레임워크](/ko/docs/Learn_web_development/Core/Frameworks_libraries)를 사용하는 것이 익숙할 수 있습니다. 프레임워크를 사용하는 데 경험이 많고 제공되는 도구가 마음에 든다면, 대부분의 프로젝트에서 빌드하는 데 유용한 도구가 될 수 있습니다. 하지만, 프레임워크는 JavaScript 사용량이 많습니다. JavaScript 사용이 거의 없는 비교적 정적인 경험을 만든다면, 아마 프레임워크는 필요하지 않을 것입니다. 필요한 기능을 표준 JavaScript 몇 줄로 구현할 수 있습니다.
- **더 간단한 해결책을 고려하세요**: 화려하고 인상적인 해결책을 생각하고 있을 수 있지만, 사용자가 긍정적으로 받아들일지 고려해보세요. 사용자는 더 간단한 해결책을 선호할까요?
- **사용하지 않는 코드를 지우세요**: 당연한 말처럼 들릴 수 있지만, 많은 개발자가 개발 과정에서 기능을 추가하고 사용하지 않는 기능을 정리하지 않고 잊는 경우가 의외로 많습니다. 무엇을 추가하고 삭제했는지 조심하고 신중해야 합니다. 모든 스크립트는 사용 여부와 관계없이 파싱되므로, 다운로드 속도를 높이는 가장 쉬운 방법 중 하나는 사용하지 않는 기능을 제거하는 것입니다. 또한 프레임워크의 기능 중 일부만 사용하는 경우가 많다는 점도 고려해야 합니다. 필요한 부분만 포함된 맞춤형 프레임워크 빌드를 생성할 수 있을까요?
- **브라우저 내장 기능을 고려하세요**: JavaScript로 직접 구현하는 대신, 브라우저가 이미 가지고 있는 기능을 사용할 수 있을지도 모릅니다. 다음과 같은 예시가 있습니다.
  - [내장된 클라이언트 사이드 Form 유효성 검사](/ko/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation)를 사용하세요.
  - 브라우저 자체 {{htmlelement("video")}} 재생 도구를 사용하세요.
  - JavaScript 애니메이션 라이브러리 대신에 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)을 사용하세요. [애니메이션 다루기](#handling_javascript_animations)도 참고하세요.

JavaScript를 중요하고 중요하지 않은 부분으로 나누어 여러 파일로 분리하는 것이 좋습니다. [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules)은 단순히 개별 JavaScript 파일을 분리하는 것보다 더 효율적으로 구현하도록 합니다.

이렇게 하면, 더 작은 파일로 최적화 할 수 있습니다. {{Glossary("Minification")}}은 파일의 문자 수를 줄여 JavaScript의 바이트 수를 감소시키고 크기를 줄여줍니다. {{Glossary("Gzip compression", "Gzipping")}}은 파일을 추가로 압축하며, 코드가 경량화되지 않았더라도 사용해야 합니다. {{Glossary("Brotli compression", "Brotli")}}는 Gzip과 유사하지만, 일반적으로 Gzip보다 높은 성능을 보입니다.

코드를 직접 분리하고 최적화할 수 있지만, [webpack](https://webpack.js.org/)과 같은 모듈 번들러가 이를 더 잘 처리할 수 있습니다.

## 파싱과 실행 다루기

이번 섹션에서 다룰 팁을 살펴보기 전에, JavaScript가 브라우저 페이지 렌더링 과정 중에 어디서 처리되는지 논의하는 것이 중요합니다. 웹 페이지가 로드될 때는 다음과 같은 과정입니다.

1. HTML은 일반적으로 페이지에 나타나는 순서대로 먼저 분석됩니다.
2. CSS 파일이 발견되면, 페이지에 적용할 스타일을 알아내기 위해 분석됩니다. 이 과정에서, 사진과 웹 글꼴 같은 연동된 자원이 패치되기 시작합니다.
3. JavaScript 파일이 발견되면, 페이지에 맞춰 분석, 평가, 실행됩니다.
4. 조금 나중에, 브라우저는 각각의 HTML 요소가 어떻게 스타일링 되어야 하는지 적용된 CSS를 전달 받아 산출합니다.
5. 스타일이 적용된 결과는 화면에 페인트됩니다.

> [!NOTE]
> 이 과정은 무엇이 일어나는지 많이 요약된 설명으로 대략적인 감을 잡게 해줍니다.

중요한 과정은 세 번째 단계입니다. 기본적으로 JavaScript 파싱과 실행은 렌더링을 차단합니다. 즉, 브라우저는 스크립트를 처리할 때까지 JavaScript가 나타난 후에 마주치는 HTML 파싱을 차단합니다. 그 결과, 스타일링과 페인팅도 차단됩니다. 이는 무엇이 다운로드되는지 생각해야 할 뿐만 아니라 코드가 언제, 어떻게 실행되는지 대해서도 신중하게 고려해야 하는 점을 의미합니다.

다음 몇 개의 섹션에서는 JavaScript의 파싱과 실행을 최적화하는 유용한 기법을 소개합니다.

## 중요한 자원을 가능한 빨리 로딩하기

스크립트가 정말 중요하다고 생각하고 충분히 빠르게 로드되지 않아 성능에 영향을 미친다면, 스크립트를 문서의 {{htmlelement("head")}} 내부에서 로드할 수 있습니다.

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

위 예제는 정상적으로 동작하지만 렌더링을 차단합니다. 더 나은 방법은 중요한 JavaScript를 위한 프리로더를 생성하는 [`rel="preload"`](/ko/docs/Web/HTML/Attributes/rel/preload)를 사용하는 것입니다.

```html
<head>
  ...
  <!-- JavaScript 파일을 미리 로드합니다 -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- JavaScript 모듈을 미리 로드합니다 -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

프리로드하는 {{htmlelement("link")}}는 렌더링 차단 없이 가능한 빠르게 JavaScript를 가져옵니다. 그러면 원하는 페이지에서 JavaScript를 사용할 수 있게 됩니다.

```html
<!-- 적절한 위치에 이 코드를 포함하세요 -->
<script src="important-js.js"></script>
```

또는 JavaScript 모듈인 경우, 스크립트 내부에 포함할 수 있습니다.

```js
import { function } from "important-module.js";
```

> [!NOTE]
> 프리로드는 스크립트를 포함한 시간에 맞춰 로드하는 것을 보장하지 않지만, 다운로드가 더 빨리 시작된다는 것을 의미합니다. 렌더링 차단 시간이 완전히 없어지지 않아도 단축됩니다.

## 중요하지 않은 JavaScript 실행 연기하기

반면, 중요하지 않은 JavaScript 파싱과 실행은 필요할 때 이뤄지도록 나중으로 미루는 것이 좋습니다. 모든 JavaScript를 앞단에서 로딩하는 것은 불필요하게 렌더링을 차단합니다.

우선, `async` 특성을 `<script>` 요소에 추가할 수 있습니다.

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

이는 스크립트를 DOM 파싱을 병렬로 가져오도록 하여, 스크립트가 동시에 준비되고 렌더링을 차단하지 않도록 합니다.

> [!NOTE]
> 또 다른 특성인 `defer`는 문서가 파싱된 후 스크립트를 실행하지만, {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 이벤트가 발생하기 전에 실행됩니다. `async`와 유사한 효과를 가지고 있습니다.

또한, 이벤트가 발생할 때 필요한 JavaScript를 로드하기 전까지 모든 JavScript를 로드하지 않을 수 있습니다. DOM 스크립팅을 통해 다음과 같이 할 수 있습니다.

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // index.js가 완전히 로드된 후 함수를 실행하세요
  init();
});
document.head.append(scriptElem);
```

JavaScript 모듈은 {{jsxref("operators/import", "import()")}} 함수를 사용하여 동적으로 로드할 수 있습니다.

```js
import("./modules/myModule.js").then((module) => {
  // module을 사용하여 작업하세요
});
```

## 긴 작업 분리하기

브라우저가 JavaScript를 실행할 때, 스크립트를 작업으로 나누어 패칭 요청을 하고 이벤트 처리기를 통해 사용자 상호작용과 입력을 처리하고 JavaScript 애니메이션을 실행하는 등의 작업으로 순차적으로 나눠 실행합니다.

대부분 작업은 [웹 워커](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)에서 동작하는 JavaScript를 포함한 예외를 제외하고 메인 스레드에서 일어납니다. 메인 스레드는 한 번에 하나의 작업만 처리할 수 있습니다.

하나의 작업이 50ms 이상 걸리면, 긴 작업으로 분류됩니다. 사용자가 페이지와 상호작용을 시도하거나 중요한 UI 업데이트가 긴 작업이 실행 중인 동안에 요청되면, 사용자 경험에 영향을 미칩니다. 예상 응답이나 시각적 업데이트가 지연되면 UI가 느리거나 응답이 없는 것처럼 보입니다.

이러한 문제를 완화하기 위해서는 긴 작업을 더 작은 작업으로 분할해야 합니다. 이렇게 하면 브라우저가 필수적인 사용자와의 상호작용을 처리하거나 UI 렌더링을 업데이트하는 더 많은 기회를 제공하게 됩니다. 브라우저는 긴 작업 전후가 아니라 작은 작업 사이에서도 이를 처리할 수 있습니다. JavaScript에서, 코드를 개별 함수로 나누어 실행하도록 할 수 있습니다. 이 작업은 유지보수, 디버깅, 테스트를 더 쉽게 할 수 있는 이점이 있습니다.

다음과 같은 예제가 있습니다.

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

하지만, 이러한 구조는 메인 스레드 차단을 해결하지 못합니다. 다섯 개의 함수가 모두 하나의 메인 함수 내에서 실행되기 때문에, 브라우저는 이를 하나의 긴 작업으로 간주합니다.

이 문제를 해결하기 위해 'yield' 함수를 실행하여 메인 스레드로 제어권을 넘기는 방식을 사용합니다. 즉 코드를 여러 개의 작업으로 나누어, 브라우저가 각 작업 사이에서 UI 업데이트와 같은 높은 우선순위 작업을 처리하도록 기회를 제공 받습니다. 이 함수의 일반적인 패턴은 {{domxref("Window.setTimeout", "setTimeout()")}}을 사용하여 별도의 작업으로 실행을 연기합니다.

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

이 함수는 테스크 러너 패턴 내에서 사용되며 각 작업이 수행된 후 메인 스레드에 제어권을 넘길 수 있습니다.

```js
async function main() {
  // 함수의 배열을 생성합니다
  const tasks = [a, b, c, d, e];

  // 작업을 반복합니다
  while (tasks.length > 0) {
    // 첫 번째 작업을 작업 배열에서 이동시킵니다
    const task = tasks.shift();

    // 작업을 실행합니다
    task();

    // 메인 스레드로 제어권을 넘깁니다
    await yield();
  }
}
```

이 함수를 더 개선하려면, {{domxref("Scheduler.yield()")}}를 사용할 수 있습니다. 이를 통해 이 코드가 큐에서 덜 중요한 작업보다 우선적으로 계속 실행될 수 있습니다.

```js
function yield() {
  // 가능하다면 scheduler.yield()를 사용하세요
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // 사용할 수 없다면 setTimeout으로 대체하세요
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## JavaScript 애니메이션 다루기

애니메이션은 인지된 성능을 향상시켜 인터페이스가 더 빠르게 느껴지도록 만들고 사용자가 페이지를 로드하고 대기할 때 로딩 스피너와 같이 진행 과정이 이뤄지고 있다고 느끼게 할 수 있습니다. 그러나, 크기가 크거나 개수가 많은 애니메이션은 더 많은 처리 능력을 요구하며, 이는 성능 저하로 이어질 수 있습니다.

가장 명확한 애니메이션 조언은 애니메이션을 적게 사용하는 것입니다. 필수적이지 않은 애니메이션을 제거하거나 저전력 기기나 제한된 배터리 전력을 가진 모바일 장치를 사용하는 경우 사용자가 애니메이션을 끌 수 있도록 설정을 제공하는 것을 고려할 수 있습니다.

필수적인 DOM 애니메이션인 경우, 가능한 JavaScript 애니메이션 대신에 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)을 사용하는 것을 권장합니다. [웹 애니메이션 API](/ko/docs/Web/API/Web_Animations_API)는 JavaScript를 통해 CSS 애니메이션과 직접적으로 연결하는 방법을 제공합니다. JavaScript로 인라인 스타일을 조작하는 것보다 브라우저가 직접 DOM 애니메이션을 수행하도록 사용하는 것이 훨씬 더 빠르고 효율적입니다. 자세한 내용은 [CSS 성능 최적화 > 애니메이션 다루기](/ko/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations)에서 확인하세요.

JavaScript에서 처리할 수 없는 애니메이션은, 예를 들어 HTML {{htmlelement("canvas")}} 요소의 애니메이션은 {{domxref("Window.setInterval()")}} 같은 오래된 메서드 대신 {{domxref("Window.requestAnimationFrame()")}} 메서드를 사용하는 것이 좋습니다. `requestAnimationFrame()` 메서드는 매끄러운 사용자 경험을 위해 애니메이션을 효율적이고 끊김없이 처리하도록 특별히 설계되었습니다. 기본적인 패턴은 다음과 같습니다.

```js
function loop() {
  // 다음 애니메이션 프레임이 그려지기 전에 캔버스를 지웁니다
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // 캔버스에 객체를 그리고 위치 정보를 업데이트하여
  // 다음 프레임을 준비합니다
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // 애니메이션을 부드럽게 유지하도록 적절한 시간에
  // requestAnimationFrame을 사용하여 loop 함수를 다시 호출합니다
  requestAnimationFrame(loop);
}

// 애니메이션 실행하기 위해 loop 함수를 한 번 호출합니다
loop();
```

[그래픽 그리기 > 애니메이션](/ko/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations)에서 캔버스 애니메이션에 대한 좋은 소개를 확인할 수 있으며, 더 심화된 예제는 [객체 생성 연습](/ko/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice)에서 찾아볼 수 있습니다. 캔버스의 전체 자습서는 [Canvas 자습서](/ko/docs/Web/API/Canvas_API/Tutorial)에서 확인할 수 있습니다.

## 이벤트 성능 최적화

이벤트는 특히 지속적으로 실행될 때 브라우저에서 추적하고 처리하는 데 많은 비용을 지출할 수 있습니다. 예를 들어, {{domxref("Element/mousemove_event", "mousemove")}} 이벤트를 사용하여 마우스 위치를 추적하고, 마우스가 페이지 특정 영역 안에 있는지 확인할 수 있습니다.

```js
function handleMouseMove() {
  // 마우스 포인터가 elem 요소 내부에 있을 때 동작합니다
}

elem.addEventListener("mousemove", handleMouseMove);
```

페이지에서 `<canvas>` 게임을 실행할 수 있습니다. 마우스가 캔버스 내부에 있으면, 마우스 움직임과 커서 위치를 지속적으로 확인하고 점수, 시간, 모든 스프라이트 위치, 충돌 감지 정보, 등을 포함한 게임 상태를 업데이트 하고 싶을 겁니다. 게임이 끝나면 이러한 작업을 더이상 할 필요가 없으며, 사실 이벤트를 계속 유지하는 것은 처리 능력을 낭비할 것입니다.

따라서 더이상 필요하지 않는 이벤트 리스너를 제거하는 것이 좋습니다. {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}를 사용하여 제거할 수 있습니다.

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

또 다른 팁은 가능하면 이벤트 위임을 사용하는 것입니다. 다수의 자식 요소가 있는 코드에서 사용자의 상호자용에 반응해야 한다면, 그 코드의 부모 요소에게 이벤트 리스너를 설정할 수 있습니다. 자식 요소에서 발생한 이벤트가 부모 요소로 버블링되어서, 모든 자식 요소에 이벤트 리스너를 개별적으로 설정하지 않아도 됩니다. 추적할 이벤트 리스너가 적을수록 더 좋은 성능을 의미합니다.

더 자세한 내용과 유용한 예제는 [이벤트 위임](/ko/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)에서 확인해보세요.

## 더 효율적인 코드를 작성하는 팁

코드를 더 효율적으로 실행할 수 있도록 도와주는 일반적인 모범 사례가 몇 가지 있습니다.

- **DOM 조작 줄이기**: DOM에 접근하고 이를 업데이트하는 작업은 계산적으로 많은 비용을 지출해서 지속적으로 DOM 애니메이션을 수행한다면 JavaScript가 처리하는 양을 최소화 해야 합니다. [JavaScript 애니메이션 다루기](#handling_javascript_animations)를 확인해보세요.
- **DOM 변경 일괄 처리하기**: DOM 변경이 필요한 경우 개별적으로 하는 대신 그룹으로 묶어서 한 번에 처리하세요. 이렇게 하면 브라우저의 실제 작업량을 줄일 뿐만 아니라 인지된 성능을 향상시킬 수 있습니다. 작은 업데이트를 연속적으로 수행하는 것보다 한 번에 처리하여 UI를 더 부드럽게 만들 수 있습니다. 유용한 팁으로, 페이지에 큰 HTML 코드를 추가해야 하는 경우, 개별 요소를 하나씩 추가하는 대신 {{domxref("DocumentFragment")}} 내에서 먼저 전체 구조를 만든 후, 한 번에 DOM으로 추가하는 것이 유용합니다.
- **HTML 단순화하기**: DOM 트리가 단순할수록, JavaScript 접근과 조작 속도가 더 빨라집니다. 어떤 UI가 필요한지 신중하게 고려하고 불필요한 코드를 제거하세요.
- **반복되는 코드 줄이기**: 반복문은 많은 비용을 지출해서 가능한 코드에서 반복문 사용을 줄이세요. 다만, 반복문이 불가피한 경우에는 다음 사항을 고려하세요.

  - 반복이 불필요할 때, {{jsxref("Statements/break", "break")}}나 {{jsxref("Statements/continue", "continue")}} 선언을 적절히 사용하여 반복 실행을 방지하세요. 예를 들어, 배열에서 특정한 이름을 찾는 경우, 이름을 찾았다면 반복문에서 벗어나야 합니다. 더이상 반복문을 실행할 필요가 없기 때문입니다.

    ```js
    function processGroup(array) {
      const toFind = "Bob";
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === toFind) {
          processMatchingArray(array);
          break;
        }
      }
    }
    ```

  - 오직 한 번만 동작하는 일은 반복문 밖에서 실행하세요. 이는 당연해 보일 수 있지만, 쉽게 간과할 수 있습니다. 다음 예제를 살펴보세요. 이 코드는 특정 방식으로 처리할 데이터를 포함한 JSON 객체를 가져옵니다. 하지만 이 경우, {{domxref("Window.fetch", "fetch()")}} 동작이 반복문에서 매번 실행되고 있어 컴퓨터 자원을 낭비하게 됩니다. `i`에 의존하지 않는 패칭은 반복문 밖으로 옮길 수 있으며, 이렇게 하면 한 번만 실행됩니다.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **계산 작업을 메인 스레드에서 실행하지 않기**: 이전에 JavaScript가 일반적으로 메인 스레드에서 동작한다는 점과 오래 걸리는 작업이 메인 스레드를 차단하여 UI 성능 저하를 초래할 수 있다는 점을 설명했습니다. 또한 이러한 문제를 완화하기 위해 긴 작업을 작은 작업으로 나누는 방법을 살펴봤습니다. 또 다른 해결 방법은 모든 작업을 메인 스레드 밖으로 이동시키는 것입니다. 이를 달성할 수 있는 몇 가지 방법이 있습니다.

  - 비동기 코드 사용하기: [비동기 JavaScript](/ko/docs/Learn_web_development/Extensions/Async_JS/Introducing)는 기본적으로 메인 스레드를 차단하지 않는 JavaScript입니다. 비동기 API는 네트워크에서 자원을 가져오거나 로컬 파일 시스템에서 파일을 접근하거나 사용자의 웹캠 스트림을 여는 작업을 다룹니다. 이러한 작업은 오래 걸릴 수 있으므로, 동작이 완료될 때까지 대기하도록 메인 스레드를 차단하는 것은 좋지 않습니다. 대신, 브라우저는 이러한 함수를 실행하고 메인 스레드가 후속 코드를 실행하도록 유지하며, 이러한 함수들은 미래 어느 시점에서 사용 가능해질 때 결과값을 반환합니다. 현대 비동기 API는 {{jsxref("Promise")}} 기반으로, 이는 비동기 작업을 처리하도록 설계된 JavaScript 언어 특징을 가지고 있습니다. 비동기적으로 실행하면 좋은 기능이 있다면, [직접 Promise 기반 함수를 작성](/ko/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API)할 수 있습니다.
  - 웹 워커에서 계산 실행하기: [웹 워커](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)는 별도의 스레드에서 JavaScript 코드 실행을 허용하는 매커니즘으로 메인 스레드를 차단하지 않습니다. 워커는 몇 가지 중요한 제한이 있습니다. 가장 큰 제한은 워커 내부에서 DOM 스크립팅을 실행할 수 없습니다. 대부분 다른 작업은 가능하고 워커는 메인 스레드와 메시지를 주고받을 수 있습니다. 워커의 주요 사용 사례는 많은 계산이 있지만 메인 스레드를 차단하고 싶지 않을 경우입니다. 계산을 워커에서 실행하고 결과를 기다렸다가, 준비되면 메인 스레드로 전달하세요.
  - **WebGPU 사용하기**: [WebGPU](/ko/docs/Web/API/WebGPU_API)는 웹 개발자가 브라우저에서 고성능 계산을 수행하고 복잡한 사진을 렌더링할 수 있도록 시스템 내부에 있는 GPU를 활용할 수 있게 해주는 브라우저 API입니다. 이는 상당히 복잡하지만, 웹 워커보다 더 뛰어난 성능을 제공할 수 있습니다.

## 같이 보기

- [긴 작업 최적화하기](https://web.dev/articles/optimize-long-tasks) (web.dev 2022)
- [Canvas 자습서](/ko/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
