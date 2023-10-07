---
title: Introducing asynchronous JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 65b9418c7d0e3a331ac50249adf0024f44789923
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

이 글에선 비동기 프로그래밍이 무엇인지, 왜 필요한지 설명하고 역사상 JavaScript에서 비동기 함수가 구현된 몇 가지 방법에 대해 간략하게 설명 할 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, 함수와 이벤트 처리기를 포함한 JavaScript 기초에 대한 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목적</th>
      <td>
        비동기 JavaScript가 무엇인지, 동기 JavaScript와 어떻게 다른지, 그리고 왜 필요한지에 대한 익숙함을 얻기 위함
      </td>
    </tr>
  </tbody>
</table>

비동기 프로그래밍은 작업이 완료될 때까지 기다리지 않고 잠재적으로 오래 실행되는 작업을 시작하여 해당 작업이 실행되는 동안에도 다른 이벤트에 응답할 수 있게 하는 기술입니다. 작업이 완료되면 프로그램이 결과를 제공합니다.

브라우저가 제공하는 많은 기능, 특히 가장 흥미로운 것들은 시간이 오래 걸릴 가능성이 있으므로 비동기적입니다. 예를 들어 다음과 같습니다.

- {{domxref("fetch", "fetch()")}}를 이용해 HTTP 요청 만들기
- {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}를 사용해 사용자의 카메라 또는 마이크에 접근하기
- {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}}를 통해 사용자에게 파일 선택을 요청

따라서 여러분만의 비동기 함수를 자주 _구현_ 할 필요는 없지만 올바르게 _사용_ 해야 할 경우가 많습니다.

이 글에서는 비동기 함수를 필요하게 하는 장기 실행 동기 함수의 문제점을 살펴보는 것으로 시작하겠습니다.

## 동기 프로그래밍

아래 코드를 한번 보세요.

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

이 코드는

1. `name`이라는 문자열을 선언합니다.
2. `name`을 사용하여 `greeting`이란 또다른 문자열을 선언합니다.
3. greeting을 JavaScript 콘솔에 출력합니다.

여기서 브라우저는 실질적으로 프로그램을 작성한 순서대로 한 줄씩 실행한다는 점에 주목해야 합니다. 브라우저는 각 지점에서 다음 줄로 넘어가기 전까지 현재 라인의 작업이 끝날 때까지 기다립니다. 각 라인들은 이전 라인에 의존하고 있으니 이렇게 해야 하죠.

따라서 **동기 프로그래밍**이 됩니다. 이렇게 별도의 함수로 호출해도 동기입니다.

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

`makeGreeting()`은 **동기 함수**입니다. 왜냐하면 호출자는 함수의 작업이 완료될 때까지 기다렸다가 값을 반환해야 계속 진행할 수 있기 때문입니다.

## 장기 실행 동기 함수

동기 함수가 오랜 시간에 걸쳐 실행되면 어떨까요?

아래 프로그램은 매우 비효율적인 알고리즘을 사용하여 "Generate primes" 버튼을 클릭할 때 여러 개의 큰 소수를 생성합니다. 사용자가 입력하는 숫자가 커질수록 작업 시간도 더 오래 걸립니다.

```html
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>
```

```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

"Generate primes"를 클릭해보세요. 여러분의 컴퓨터가 얼마나 빠른지에 따라 달라지겠지만, 프로그램이 "Finished!" 메시지를 출력하기 전 아마 몇 초가 걸릴 것입니다.

## 장기 실행 동기 함수의 문제점

다음 예제는 입력할 수 있는 텍스트 상자를 추가한 것을 제외하고는 이전 예제와 같습니다. 이번에는 "Generate primes"를 누른 후 바로 텍스트 상자에 아무 글이나 입력해보세요.

`generatePrimes()` 함수가 실행 중인 동안 프로그램이 완전히 응답하지 않는 것을 확인할 수 있을 겁니다. 아무것도 입력할 수 없고 클릭도 안될 것이며 그 외 다른 것도 할 수 없습니다.

```html hidden
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

이는 장기 실행 동기 함수의 기본적인 문제입니다. 우리의 프로그램이 필요로 하는 것은 다음과 같습니다.

1. 함수를 호출함으로써 장기적으로 실행되는 작업을 시작한다.
2. 이 함수로 작업을 시작하고 즉시 복귀하여 다른 이벤트에 계속 응답할 수 있게 한다.
3. 작업이 완료되면 결과를 알려준다.

이것이 바로 비동기 함수가 할 수 있는 일입니다. 이 글의 나머지 부분에서는 비동기 함수가 JavaScript에서 구현되는 방법에 관해 설명합니다.

## 이벤트 처리기

방금 들은 비동기 함수에 대한 설명으로 여러분은 이벤트 처리기를 떠올릴 수 있습니다. 만약 떠올랐다면 맞습니다. 이벤트 처리기는 실제로 비동기 프로그래밍의 한 형태입니다. 이벤트가 발생할 때마다 호출되는 함수(이벤트 처리기)를 제공하는 것으로 말이죠. "이벤트"가 "비동기 작업 완료"인 경우, 이 이벤트를 사용하여 호출자에게 비동기 함수 호출의 결과를 알릴 수 있습니다.

일부 초기 비동기 API는 이러한 이벤트 방식을 사용했습니다. {{domxref("XMLHttpRequest")}} 는 JavaScript를 사용하여 원격 서버에 HTTP 요청을 할 수 있는 API입니다. HTTP 요청은 시간이 걸릴 수 있는 작업이라 비동기 API이며 이벤트 수신기를 `XMLHttpRequest` 객체에 연결해 요청의 진행 상태 및 최종 완료에 대한 알림을 받습니다.

다음 예제에서는 이를 실제로 보여 줍니다. "Click to start request"를 클릭하여 요청을 보내보세요. 새로운 {{domxref("XMLHttpRequest")}}를 생성하고 이것의 {{domxref("XMLHttpRequest/loadend_event", "loadend")}} 이벤트를 수신합니다. 처리기는 상태 코드와 함께 "Finished!" 메시지를 기록합니다.

이벤트 수신기를 추가한 후 요청을 보냅니다. 이때 요청이 시작된 이후 "Started XHR request"를 기록할 수 있는데, 이는 요청이 진행되는 동안 프로그램이 계속 실행되고 있음을 뜻하며 요청이 완료될 때 이벤트 처리기가 호출됩니다.

```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

[이전에 접한 이벤트 처리기](/ko/docs/Learn/JavaScript/Building_blocks/Events)와 유사하지만, 이벤트가 버튼 클릭과 같은 사용자 행동이 아닌 어떤 객체의 상태 변화라는 점이 다릅니다.

## 콜백

이벤트 핸들러는 콜백의 특정 유형입니다. 콜백은 그냥 적절한 시점에 호출될 것으로 예상하여 다른 함수로 전달되는 함수입니다. 방금 살펴본 것처럼 콜백은 JavaScript에서 비동기 함수를 구현하는 주요 방식이었습니다.

그러나 콜백 기반 코드는 콜백이 콜백을 가지는 함수를 호출하는 경우 이해하기 어려울 수 있습니다. 이것은 일련의 비동기 함수로 분해되는 작업을 수행해야 하는 일반적인 상황입니다. 예를 들어, 다음을 한번 보겠습니다.

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

여기서는 세 단계로 나뉘는 단일 작업이 있습니다. 각 단계는 이전 단계에 의존적입니다. 이 예제에서 첫 번째 단계는 입력값에 1을 추가하고, 두 번째 단계는 2를 추가하고, 세 번째 단계는 3을 추가합니다. 0의 입력부터 시작하여 최종 결과는 6(0 + 1 + 2 + 3)입니다. 동기식 프로그램으로서, 이것은 매우 간단합니다. 하지만 콜백을 사용하여 단계를 구현하면 어떨까요?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

콜백 내부에서 콜백을 호출하기 때문에 깊게 중첩된 `doOperation()` 함수가 생깁니다. 이 함수는 읽고 디버깅하기 훨씬 어렵습니다. 이것은 때때로 "콜백 지옥(callback hell)" 또는 "파라미드 오브 둠(pyramid of doom)"이라고 불립니다. (왜냐하면 들여 써진 부분이 옆에서 봤을 때 피라미드처럼 보이거든요.)

이렇게 콜백을 중첩하면 오류 처리도 매우 어려워질 수 있습니다. 상위 레벨에서 한 번만 오류를 처리하는 대신 "피라미드"의 각 레벨에서 오류를 처리해야 하는 경우가 많습니다.

이러한 이유로 대부분의 최신 비동기 API는 콜백을 사용하지 않습니다. 대신 JavaScript에서 비동기 프로그래밍의 토대는 다음에 소개할 {{jsxref("Promise")}} 입니다.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
