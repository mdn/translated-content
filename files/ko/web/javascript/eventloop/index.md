---
title: 동시성 모델과 이벤트 루프
slug: Web/JavaScript/EventLoop
tags:
  - 이벤트 루프
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

자바스크립트는 코드 실행, 이벤트 수집과 처리, 큐에 놓인 하위 작업들을 담당하는 **이벤트 루프**에 기반한 동시성(concurrency) 모델을 가지고 있습니다. 이 모델은 C 또는 Java와 같은 언어와 완전히 다릅니다.

## 런타임 개념

이어지는 섹션에서는 이론적 모델을 설명합니다. 모던 자바스크립트 엔진들은 아래 묘사된 개념들을 구현하고 최적화 합니다.

### 시각적 표현

![Stack, heap, queue](the_javascript_runtime_environment_example.svg)

### Stack

함수 호출은 *프레임*들의 스택을 형성합니다.

```js
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); //returns 42
```

`bar`를 호출할 때, `bar`의 인자와 지역 변수를 포함하는 첫 번째 프레임이 생성됩니다. `bar`가 `foo`를 호출하면 두 번째 프레임이 만들어져 `foo`의 인수와 지역 변수가 들어있는 첫 번째 프레임의 맨 위에 푸시됩니다. `foo`가 반환되면, 최상위 프레임 요소는 `bar`의 호출 프레임만을 남겨둔 채로 스택 밖으로 빠져나옵니다. `bar`가 반환되면, 스택은 비워집니다.

### Heap

객체들은 힙 안에 할당됩니다. 힙은 구조화되지 않은 넓은 메모리 영역을 지칭합니다.

### Queue

JavaScript 런타임은 처리 할 메시지 목록 인 메시지 대기열을 사용합니다. 각 메시지에는 메시지를 처리하기 위해 호출되는 관련 함수가 있습니다.

[event loop](#event_loop) 중 어떤 시점에서 런타임은 대기열에서 가장 오래된 메시지부터 처리하기 시작합니다. 그렇게하기 위해, 메시지는 큐에서 제거되고 해당 기능이 메시지를 입력 매개 변수로 호출됩니다. 언제나 그렇듯이, 함수를 호출하면 그 함수의 사용을위한 새로운 스택 프레임이 생성됩니다.

함수의 처리는 스택이 다시 비워 질 때까지 계속됩니다. 이벤트 루프는 큐의 다음 메시지를 처리합니다(존재할 경우).

## Event loop

**Event loop**는 그 구현 방식 때문에 붙은 이름이며 보통 다음과 유사합니다 :

```js
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

`queue.waitForMessage()` 함수는 현재 아무 메시지도 없다면 새로운 메시지 도착을 동기적으로 기다립니다.

### "Run-to-completion"

각 메시지는 다른 메시지가 처리되기 전에 완전히 처리됩니다.

이것은 함수가 실행될 때마다 미리 비워질 수 없고 다른 코드가 실행되기 전에 완전히 실행되며 함수가 조작하는 데이터를 수정할 수 있다는 사실을 포함하여 프로그램에 대한 추론을 할 때 좋은 속성을 제공합니다. 이것은 C와는 다릅니다. 예를 들어 함수가 쓰레드에서 실행된다면 런타임 시스템이 다른 쓰레드에서 다른 코드를 실행하기 위해 어느 시점에서 멈출 수 있습니다.

이 모델의 부정적인 면은 어떤 메시지가 완료되기 까지 지나치게 오래 걸린다면 웹 어플리케이션은 클릭이나 스크롤과 같은 사용자 인터랙션을 처리할 수 없게 됩니다. 브라우저는 이러한 상황을 "a script is taking too long to run"과 같은 대화상자로 완화 합니다. 추천되는 좋은 방법은 메시지 처리를 짧도록 만드는 것과 하나의 메시지를 여러개의 메시지로 나누는 것 입니다.

### 메시지 추가하기

웹 브라우저에서 이벤트 리스너가 부착된 이벤트가 발생할 때마다 메시지가 추가됩니다. 리스너가 없으면 이벤트는 손실됩니다. 클릭 이벤트 핸들러가 있는 요소를 클릭하면 다른 이벤트와 마찬가지로 메시지가 추가됩니다.

[`setTimeout`](/ko/docs/Web/API/WindowTimers.setTimeout) 함수는 2 개의 인수, 대기열에 추가 할 메시지와 시간값(선택사항, 기본값은 0)으로 호출됩니다. 시간 값은 메시지가 실제로 큐에 푸시 될 때까지의 (최소) 지연을 나타냅니다. 대기열에 다른 메시지가 없으면 지연 직후에 메시지가 처리됩니다. 그러나 메시지가있는 경우 setTimeout 메시지는 다른 메시지가 처리 될 때까지 기다려야합니다. 따라서 두 번째 인수는 최소 시간을 나타내지 만 보장 된 시간은 아닙니다.

다음은 이 개념에 대한 예제입니다 (`setTimeout`은 타이머 만료 직후에 실행되지 않습니다).

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### Zero delays

Zero delay는 실제로 0ms 후에 콜백이 시작된다는 의미는 아닙니다. `0`ms 지연된 [`setTimeout`](/ko/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)은 주어진 간격 후에 콜백 함수를 실행하지 않습니다.

실행은 큐에 대기중인 작업 수에 따라 다릅니다. 아래 예에서, 콜백의 메시지가 처리되기 전에 콘솔에 `"this is just message"`메시지가 기록됩니다. 왜냐하면 지연(delay)은 보장된 시간이 아니라 요청을 처리하기 위해 필요한 최소의 시간이기 때문입니다.

기본적으로 `setTimeout`은 `setTimeout`에 대한 특정 시간 제한을 지정 했더라도 대기중인 메시지의 모든 코드가 완료 될 때까지 대기해야합니다.

```js
(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
```

### 몇가지 런타임 통신

웹워커 또는 크로스 오리진 `iframe`은 자신의 스택, 힙, 메시지 큐를 가지고 있습니다. 두 별개의 런타임들은 [`postMessage`](/ko/docs/DOM/window.postMessage) method를 통해서만 서로 통신할 수 있습니다. 이 메서드는 다른 런타임이 `message` 이벤트 핸들러를 등록하고 있다면 해당 런타임의 큐에 메시지를 추가합니다.

## Never blocking

이벤트 루프 모델의 무척 재밌는 부분은 다른 언어와 달리 자바스크립트는 결코 Block하지 않는다는 것입니다. I/O 처리는 흔히 이벤트와 콜백으로 처리 됩니다. 그래서 응용프로그램이 [IndexedDB](/ko/docs/Web/API/IndexedDB_API) query 반환을 기다리고 있거나 [XHR](/ko/docs/Web/API/XMLHttpRequest) 요청 반환을 기다릴 때에도 여전히 사용자 입력과 같은 다른 것을을 처리할 수 있습니다.

`alert` 또는 synchronous XHR과 같은 구현 예외가 존재 합니다. 그러나 그것들은 사용되지 않는 것이 좋다라고 여겨집니다. [예외를 위한 예외](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311)를 조심하세요 (그러나 보통 구현 버그일뿐 그이상 아무것도 아닙니다).

## 같이보기

- [Event loops in the HTML standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)
