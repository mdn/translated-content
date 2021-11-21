---
title: setTimeout()
slug: Web/API/setTimeout
tags:
  - API
  - HTML DOM
  - Intervals
  - JavaScript timers
  - MakeBrowserAgnostic
  - Method
  - NeedsMarkupWork
  - Reference
  - Timers
  - setTimeout
  - Polyfill
browser-compat: api.setTimeout
translation_of: Web/API/setTimeout
---
{{APIRef("HTML DOM")}}

전역 **`setTimeout()`** 메서드는 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.

## 구문

```js
var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(function[, delay]);
var timeoutID = setTimeout(code[, delay]);
```
### 매개변수

- `function`
  - : 타이머가 만료된 뒤 실행할 {{jsxref("function")}}입니다.
- `code`
  - : 함수 대신 문자열을 지정하는 대체 구문으로, 타이머가 만료될 때 코드로 컴파일 후 실행합니다. {{jsxref("Global_Objects/eval", "eval()")}}이 보안 취약점인 것과 같은 이유로 **사용을 권장하지 않습니다**.
- `delay` {{optional_inline}}
  - : 주어진 함수 또는 코드를 실행하기 전에 기다릴 밀리초 단위 시간입니다. 생략하거나 0을 지정할 경우 "즉시", 더 정확히는 다음 이벤트 사이클에 실행한다는 뜻입니다. 그러나 실제 딜레이는 의도했던 것보다 더 길 수 있습니다. 아래의 [딜레이가 지정한 값보다 더 긴 이유](#딜레이가_지정한_값보다_더_긴_이유)를 참고하세요.
- `arg1, ..., argN` {{optional_inline}}
  - : `function`에 전달할 추가 매개변수입니다.

### 반환 값

반환하는 `timeoutID`는 양의 정수로서 `setTimeout()`이 생성한 타이머를 식별할 때 사용합니다. 이 값을 {{domxref("clearTimeout()")}}에 전달하면 타이머를 취소할 수 있습니다.

같은 객체({{domxref("window")}}, 워커 등)에서 반복해 호출하는 `setTimeout()` 또는 {{domxref("setInterval()")}} 메서드는 절대 같은 `timeoutID`를 사용하지 않습니다. 그러나 다른 객체끼리는 다른 ID 풀을 사용합니다.

## 설명

{{domxref("clearTimeout()")}}으로 타이머를 취소할 수 있습니다.

어떤 함수를 몇 밀리초마다 반복적으로 호출해야 할 필요가 있으면 {{domxref("setInterval()")}}을 사용하세요.

### 비동기 함수로 작업하기

`setTimeout()`은 비동기 함수로서, 함수 스택의 다른 함수 호출을 막지 않습니다. 달리 말하자면, `setTimeout()`을 사용해서 다음 함수 호출을 "일시정지" 할 수는 없습니다.

다음 예제를 살펴보세요.

```js
setTimeout(() => {console.log("첫 번째 메시지")}, 5000);
setTimeout(() => {console.log("두 번째 메시지")}, 3000);
setTimeout(() => {console.log("세 번째 메시지")}, 1000);

// 콘솔 출력:

// 세 번째 메시지
// 두 번째 메시지
// 첫 번째 메시지
```

첫 번째 `setTimeout()` 호출이 두 번째 호출 전에 5초의 "정지" 구간을 만들지 않음에 주의하세요. 그 대신, 위 코드는 첫 함수 실행을 5초간 대기하는 동시에 두 번째 함수 실행을 3초간 대기하고, 다시 동시에 세 번째 함수의 실행도 1초간 대기합니다. 그 후 1초가 지나면 첫 함수와 두 번째 함수 모두 아직 타이머가 끝나지 않았기 때문에 세 번째 함수 먼저 실행됩니다. 그 후에 두 번째, 그리고 마지막으로 첫 번째 함수가 각자의 타이머 만료 후 실행됩니다.

함수의 실행이 완료된 후에 다른 함수를 호출하는 구조가 필요하면 [프로미스](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 문서를 살펴보세요.

### "this" 문제

`setTimeout()`에 메서드를 지정할 경우, 내부의 `this` 값이 예상과 다를 수도 있습니다. 이 문제에 대한 일반적인 설명은 [JavaScript
참고서](/ko/docs/Web/JavaScript/Reference/Operators/this#객체의_메서드로서)가 자세히 설명합니다.

`setTimeout()`이 실행하는 코드는 `setTimeout()`을 호출했던 함수와는 다른 실행 맥락에서 호출됩니다. 호출 함수의 `this` 키워드 값을 설정하는 일반적인 규칙이 여기서도 적용되며, `this`를 호출 시 지정하지도 않았고 `bind`로 바인딩하지도 않은 경우 기본 값인 `window` (또는 `global`) 객체를 가리키게 됩니다. 따라서 `setTimeout()`을 호출한 함수의 `this` 값과는 다르게 되는 것입니다.

다음 코드를 살펴보세요.

```js
const myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod();  // "zero,one,two" 기록
myArray.myMethod(1); // "one" 기록
```

위의 코드는 `myMethod`를 호출할 때, 호출로 인해 `this`가 `myArray`로 설정되기 때문에 정상적으로 동작합니다. `this[sProperty]`가 `myArray[sProperty]`와 동일함을 확인하세요. 그러나, 다음의 코드도 살펴보세요.

```js
setTimeout(myArray.myMethod, 1.0*1000);      // 1초 후 "[object Window]" 기록
setTimeout(myArray.myMethod, 1.5*1000, '1'); // 1.5초 후 "undefined" 기록
```

`myArray.myMethod`를 `setTimeout`에 전달했고, 타이머 만료 후 호출 시점에 `this`가 따로 설정되지 않으므로 기본 값인 `window` 객체를 가리키게 돼 정상적인 동작을 하지 않습니다.

{{jsxref("Array.forEach()", "forEach()")}}와 {{jsxref("Array.reduce()", "reduce()")}} 등 {{jsxref("Array")}}의 메서드와는 달리 `setTimeout()`에는 `thisArg`를 설정할 수 있는 방법 또한 존재하지 않습니다. 그리고 `call`을 사용해 `this`를 설정하는 것 역시 작동하지 않습니다.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0*1000);    // 오류
setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // 같은 오류
```

#### 해결법

##### 함수 감싸기

이 문제를 해결할 때 자주 사용하는 방법 중 하나는 `this`를 설정할 수 있도록 함수를 다른 함수로 감싸는 것입니다.

```js
setTimeout(function(){myArray.myMethod()}, 2.0*1000);    // 2초 후 "zero,one,two" 기록
setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // 2.5초 후 "one" 기록
```

화살표 함수로 감쌀 수도 있습니다.

```js
setTimeout(() => {myArray.myMethod()}, 2.0*1000);    // 2초 후 "zero,one,two" 기록
setTimeout(() => {myArray.myMethod('1')}, 2.5*1000); // 2.5초 후 "one" 기록
```

##### bind() 사용하기

다른 방법으로는 {{jsxref("Function.bind()", "bind()")}}를 사용해서 주어진 함수의 모든 호출에서 `this` 값을 설정하는 것입니다.

```js
const myArray = ['zero', 'one', 'two'];
const myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod();  // "zero,one,two" 기록, this가 myArray에 바인딩됐기 때문
myBoundMethod(1); // "one" 기록
setTimeout(myBoundMethod, 1.0*1000);      // 1초 후, 바인딩으로 인해 여전히 "zero,one,two" 기록
setTimeout(myBoundMethod, 1.5*1000, "1"); // 1.5초 후 "one" 기록
```

### 문자열 리터럴 지정하기

`setTimeout()`에 함수 대신 문자열을 지정하는 것은 [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)을 사용하는 것과 같은 문제를 가집니다.

```js example-bad
// 하지 마세요
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// 이렇게 사용하세요
setTimeout(function() {
  console.log('Hello World!');
}, 500);
```

`setTimeout()`에 전달한 문자열은 전역 맥락에서 평가되므로, `setTimeout()` 호출 시점에 접근 가능했던 로컬 심볼은 문자열 평가 시점에서는 접근 불가능합니다.

### 딜레이가 지정한 값보다 더 긴 이유

지정한 타임아웃 값보다 실행에 긴 시간이 걸리는 이유에는 여러가지가 있습니다. 여기서는 가장 흔한 상황을 설명하겠습니다.

#### 중첩 타임아웃

[HTML 표준](https://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers)에 명시된 것과 같이, 브라우저는 `setTimeout` 호출이 5번 이상 중첩된 경우 4ms의 최소 타임아웃을 강제합니다.

다음 예제에서 이 동작을 확인할 수 있습니다. 딜레이로 `0`을 지정한 `setTimeout`을 여러 번 중첩하고, 각각의 콜백이 실제로 호출되기까지의 딜레이를 기록하는데, 첫 네 번 까지는 대략 0ms에 근접하지만, 그 이후로는 4ms에 근접함을 볼 수 있습니다.

```html
<button id="run">시작</button>
<pre>이전        현재         실제 딜레이</pre>
<div id="log"></div>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  logline(new Date().getMilliseconds());

  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // clear the log
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // initialize iteration count and the starting timestamp
  iterations = 10;
  last = new Date().getMilliseconds();

  // start timer
  setTimeout(timeout, 0);
}

function pad(number) {
  return number.toString().padStart(3, "0");
}

function logline(now) {
  // log the last timestamp, the new timestamp, and the difference
  const newLine = document.createElement("pre");
  newLine.textContent = `${pad(last)}         ${pad(now)}          ${now - last}`;
  document.getElementById("log").appendChild(newLine);
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

{{EmbedLiveSample("중첩_타임아웃", 100, 420)}}

#### 비활성 탭의 타임아웃

백그라운드 탭으로 인한 부하(와 그로 인한 배터리 사용량)를 경감하기 위해, 브라우저는 비활성 탭에서의 최소 딜레이에 최소 값을 강제합니다. 또한 Web Audio API {{domxref("AudioContext")}}를 사용해 소리를 재생 중일 땐 이 최소 값 정책이 면제될 수도 있습니다.

정확한 동작은 브라우저에 따라 다릅니다.

- Firefox Desktop과 Chrome 모두 비활성 탭에 최소 1초의 타임아웃을 강제합니다.
- Firefox Android에서는 15분의 최소 타임아웃이 존재하고, 탭 전체를 언로드하는 경우도 있습니다.
- Firefox는 비활성 탭이 {{domxref("AudioContext")}}를 포함하는 경우 최소 타임아웃을 강제하지 않습니다.

#### 추적 스크립트 스로틀링

Firefox는 추적 스크립트로 인식한 스크립트에 대해 추가 스로틀링을 적용합니다. 전역 탭의 경우 스로틀링의 최소 딜레이는 여전히 4ms지만, 백그라운드 탭에서는 페이지의 첫 로드 이후 30초가 지나면 10,000ms, 또는 10초의 스로틀링을 적용합니다.

[추적 방어](https://wiki.mozilla.org/Security/Tracking_protection) 문서에서 자세한 정보를 알아보세요.

#### 늦은 타임아웃

페이지, 운영체제, 브라우저가 다른 작업으로 인해 바쁠 경우 타임아웃이 예쌍보다 늦게 실행될 수 있습니다. 한 가지 중요한 점은, `setTimeout()`을 호출한 스레드가 종료되기 전에는 지정한 함수 또는 코드 조각을 실행할 수 없다는 것입니다.

```js
function foo() {
  console.log('foo 호출');
}
setTimeout(foo, 0);
console.log('setTimeout 완료');
```

위 코드의 콘솔 기록 결과는 다음과 같습니다.

```
setTimeout 완료
foo 호출
```

이렇게 되는 이유는, `setTimeout`을 0의 딜레이로 호출하기는 했으나, 이는 지정한 함수를 대기열에 넣고 가능한 바로 다음 기회에 실행하라는 것과 같으며 즉시 호출하라는 것은 아니기 때문입니다. 대기열의 함수를 실행하려면 현재 실행 중인 코드가 반드시 먼저 완료돼야 하므로, 실제 실행 결과는 예상하던 것과 다를 수 있습니다.

#### 페이지 로드 중 타임아웃 지연

Firefox는 현재 탭이 로딩 중일 땐 `setTimeout()` 타이머 실행을 지연시킵니다. 실제 실행은 메인 스레드가 대기 상태에 들어가기 전까지({{domxref("window.requestIdleCallback()")}}과 비슷), 또는 `load` 이벤트가 발생하기 전까지 미뤄집니다. 

### WebExtension 백그라운드 페이지와 타이머

[WebExtensions](/ko/docs/Mozilla/Add-ons/WebExtensions)에서는 `setTimeout()`을 신뢰할 수 없습니다. 확장 개발자는 `setTimeout()` 대신 [`alarms`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API를 사용해야 합니다.

### 최대 딜레이

Internet Explorer, Chrome, Safari, Firefox를 포함한 브라우저는 딜레이를 내부적으로 32비트 부호 있는 정수 값으로 저장합니다. 따라서 2,147,483,647ms(약 24.8일)보다 큰 값을 지정하면 정수 오버플로가 발생해서 타이머가 즉시 만료됩니다.

## 예제

### 타임아웃 설정 및 해제

다음 예제는 웹 페이지에 두 개의 간단한 버튼을 추가하고, 각각 `setTimeout()`과 `clearTimeout()`을 실행하도록 합니다. 첫 번째 버튼을 누르면 2초 뒤 메시지가 나타나는 타이머를 설정하고, `clearTimeout()`에서 사용할 수 있는 타임아웃 ID를 저장합니다. 두 번째 버튼을 누르면 첫 번째 버튼으로 설정한 타이머를 해제할 수 있습니다.

#### HTML

```html
<button onclick="delayedMessage();">2초 뒤 메시지 표시</button>
<button onclick="clearMessage();">메시지가 나타나기 전에 취소</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, '너무 느려요!');
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: .5rem 0;
}
```

#### 결과

{{EmbedLiveSample('타임아웃_설정_및_해제')}}

[`clearTimeout()` 예제](/ko/docs/Web/API/clearTimeout#example)도 확인해보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [콜백 매개변수 지원 폴리필](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("clearTimeout")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
- {{domxref("queueMicrotask()")}}
