---
title: 이벤트 루프
slug: Web/JavaScript/EventLoop
tags:
  - Advanced
  - Event Loop
  - Event Management
  - Event Queue
  - Guide
  - Handling Events
  - JavaScript
  - events
translation_of: Web/JavaScript/EventLoop
---
{{JsSidebar("Advanced")}}

JavaScript의 런타임 모델은 코드의 실행, 이벤트의 수집과 처리, 큐에 대기 중인 하위 작업을 처리하는 **이벤트 루프**에 기반하고 있으며, C 또는 Java 등 다른 언어가 가진 모델과는 상당히 다릅니다.

## 런타임 개념

여기서는 이론적인 모델만을 설명합니다. 현대적인 JavaScript 엔진은 아래의 개념을 구현하고 고도로 최적화합니다.

### 시각적 표현

![스택, 힙, 큐](the_javascript_runtime_environment_example.svg)

### 스택

함수의 호출들은 '프레임' 스택을 형성합니다.

```js
function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

const baz = bar(7) // 42를 baz에 할당
```

위 코드의 실행 순서는 다음과 같습니다.

1. `bar`를 호출할 때, `bar`의 인수와 지역 변수를 포함하는 첫 번째 프레임이 생성됩니다.
2. `bar`가 `foo`를 호출할 때, `foo`의 인수와 지역 변수를 포함하는 두 번째 프레임이 생성되어 첫 번째 프레임의 위로 푸시됩니다.
3. `foo`가 반환하면, 맨 위의 프레임 요소를 스택 밖으로 꺼냅니다. (`bar` 호출 프레임만 남음)
4. `bar`가 반환하면, 스택이 빕니다.

인수와 지역 변수는 스택 바깥에 저장되므로 바깥 함수가 반환한 후에도 계속 존재할 수 있습니다. [중첩 함수](/ko/docs/Web/JavaScript/Guide/Functions#중첩된_함수와_클로저)에서 지역 변수에 접근할 수 있는 이유가 이것입니다.

### 힙

객체는 힙에 할당됩니다. 힙은 단순히 메모리의 큰 (그리고 대부분 구조화되지 않은) 영역을 지칭하는 용어입니다.

### 큐

JavaScript 런타임은 메시지 큐, 즉 처리할 메시지의 대기열을 사용합니다. 각각의 메시지에는 메시지를 처리하기 위한 함수가 연결돼있습니다.

[이벤트 루프](#이벤트_루프)의 임의 시점에, 런타임은 대기열에서 가장 오래된 메시지부터 큐에서 꺼내 처리하기 시작합니다. 이를 위해 런타임은 꺼낸 메시지를 매개변수로, 메시지에 연결된 함수를 호출합니다. 다른 함수와 마찬가지로, 호출로 인한 새로운 스택 프레임도 생성됩니다.

함수 처리는 스택이 다시 텅 빌 때까지 계속됩니다. 그 후, 큐에 메시지가 남아있으면 같은 방법으로 처리를 계속 진행합니다.

## 이벤트 루프

**이벤트 루프**는 이 기능을 구현할 때 보통 사용하는 방식에서 그 이름을 얻었으며, 대략 다음과 같은 형태입니다.

```js
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

`queue.waitForMessage()` 함수는 현재 처리할 수 있는 메시지가 존재하지 않으면 새로운 메시지가 도착할 때까지 동기적으로 대기합니다.

### "Run-to-completion"

각 메시지의 처리는 다른 메시지의 처리를 시작하기 전에 완전히 끝납니다.

이 특징은 프로그램의 동작을 추론할 때 유용한 특성을 제공합니다. 실행한 함수가 다른 작업에 의해 선점될 일이 없고, 다른 모든 코드의 실행보다 우선해서 값을 변경할 수 있으며, 중단되는 일 없이 완전히 끝나기 때문입니다. 반면, 예를 들어 C 언어에서는, 스레드에서 실행 중인 함수를 런타임 시스템이 임의로 멈추고 다른 스레드의 다른 코드를 먼저 실행할 수 있습니다.

이 모델의 단점은, 만약 메시지를 처리할 때 너무 오래 걸리면 웹 애플리케이션이 클릭이나 스크롤과 같은 사용자 상호작용을 처리할 수 없다는 점입니다. 브라우저는 "스크립트 응답 없음" 대화상자를 표시해서 이 문제를 완화합니다. 개발자로서 사용할 수 있는 좋은 방법으로는 메시지 처리를 가볍게 유지하고, 가능하다면 하나의 메시지를 여러 개로 나누는 것입니다.

### 메시지 추가하기

웹 브라우저에서는 수신기가 부착된 이벤트가 발생하면 새로운 메시지가 추가됩니다. 수신기가 없으면 메시지는 유실됩니다. 즉, 클릭 이벤트 처리기가 붙은 요소를 클릭하면 메시지가 새로 추가되는 식입니다. 다른 이벤트에 대해서도 마찬가지입니다. 

{{domxref("setTimeout")}} 함수는 두 개의 매개변수를 가집니다. 첫 번째는 큐에 추가할 메시지, 두 번째는 시간 값(선택 사항, 기본 값 `0`)입니다. 시간 값은 메시지를 큐에 추가하기까지 기다릴 (최소) 지연 시간을 나타냅니다. 큐에 다른 메시지가 없고 스택이 비어있다면 `setTimeout`의 메시지는 딜레이 직후 즉시 처리됩니다. 그러나 다른 메시지가 존재한다면 `setTimeout`은 앞선 메시지의 처리를 기다려야 합니다. 그래서 두 번째 값은 정확한 지연시간이 아닌, '최소' 지연 시간만 나타냅니다.

다음은 `setTimeout`이 타이머 만료 직후 즉시 실행되지 않는 예제입니다.

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // "2"를 출력, 즉 500밀리초가 지난 후 즉시 실행된 것이 아니라는 것
  console.log((new Date().getSeconds() - s) + "초 후 실행됨");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("좋아요, 2초간 반복했습니다.")
    break;
  }
}
```

### 0의 지연 시간

0의 지연 시간을 지정하는 것이 콜백을 0밀리초 후에 호출한다는 뜻은 아닙니다. {{domxref("setTimeout")}}의 지연 시간에 `0` 밀리초를 지정하고 호출하더라도 콜백 함수는 즉시 실행되지 않습니다.

실제 실행 시점은 큐에서 대기 중인 작업의 수에 따라 다릅니다. 아래 예제에서는 `'평범한 메시지'`가 콜백의 호출보다 앞서 콘솔에 기록될 것입니다. 지연 시간은 요청을 처리하기 전에 대기할 '최소' 시간이고, 보장 시간이 아니기 때문입니다.

`setTimeout`에 특정 지연 시간을 지정하더라도, 큐에서 대기 중인 모든 메시지의 처리는 기다려야 합니다.

```js
(function() {

  console.log('시작');

  setTimeout(function cb() {
    console.log('콜백 1: 콜백 메시지');
  }); // has a default time value of 0

  console.log('평범한 메시지');

  setTimeout(function cb1() {
    console.log('콜백 2: 콜백 메시지');
  }, 0);

  console.log('종료');

})();

// "시작"
// "평범한 메시지"
// "종료"
// "콜백 1: 콜백 메시지"
// "콜백 2: 콜백 메시지"
```

### 다수의 런타임 간 통신

웹 워커나 교차 출처 `iframe`은 자신만의 스택, 힙, 메시지 큐를 가집니다. 서로 다른 두 런타임은 {{domxref("window.postMessage", "postMessage")}} 메서드를 통해 메시지를 보내는 방식으로만 서로 통신할 수 있습니다. 상대가 `message` 이벤트를 수신하고 있을 때, `postMessage`는 상대 런타임에 메시지를 추가합니다.

## 논 블로킹

다른 많은 언어와 달리 JavaScript는 절대 블로킹 연산을 하지 않습니다. 논 블로킹은 이벤트 루프 모델의 무척 흥미로운 특징으로, 대부분의 입출력 처리가 이벤트와 콜백을 통해 수행되므로 애플리케이션이 [IndexedDB](/ko/docs/Web/API/IndexedDB_API) 질의나 [XHR](/ko/docs/Web/API/XMLHttpRequest) 요청의 반환을 대기 중이더라도 여전히 사용자 입력 등 다른 것들을 처리할 수 있는 것입니다.

`alert`이나 동기적 XHR과 같은 레거시 예외가 존재하긴 하지만 사용하지 않는 것이 좋습니다. 물론 [예외에 대한 예외](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311)는 조심하세요. (그러나 이런 예외는 구현체의 버그인 경우가 많습니다)

## 같이보기

- [HTML 표준의 이벤트 루프](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [Node.js 이벤트 루프](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)
