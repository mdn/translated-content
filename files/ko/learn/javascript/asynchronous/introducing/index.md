---
title: Introducing asynchronous JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
tags:
  - JavaScript
  - Learn
translation_of: Learn/JavaScript/Asynchronous/Introducing
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

이 문서에선 비동기 프로그래밍이 무엇인지, 왜 필요한지 설명하고 역사적으로 JavaScript에서 비동기 함수가 구현된 몇 가지 방법에 대해 간략하게 설명합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, 함수 및 이벤트 핸들러를 포함한 JavaScript 기본 사항에 대한 괜찮은 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        비동기 자바스크립트가 무엇인지, 동기 자바스크립트와 어떻게 다른지, 왜 필요한지 알아보기 위함.
      </td>
    </tr>
  </tbody>
</table>

비동기 프로그래밍은 프로그램이 잠재적으로 오래 실행되는 작업을 시작하여 해당 작업이 완료될 때까지 기다리지 않고 그 작업이 실행되는 동안에도 다른 이벤트에 응답할 수 있도록 하는 기술입니다. 작업이 완료되면 프로그램에 결과가 표시됩니다.

브라우저에서 제공하는 많은 기능, 특히 가장 흥미로운 기능들은 잠재적으로 시간이 오래 걸릴 수 있는 기능으로 비동기적입니다. 예를 들어 다음과 같습니다.

- {{domxref("fetch", "fetch()")}}를 사용한 HTTP 요청 생성
- {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}를 이용한 사용자의 카메라 또는 마이크 접근
- {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}}를 통한 사용자 파일 선택 요청

따라서 자신의 비동기 기능을 자주 구현할 필요는 없지만, 비동기 기능을 올바르게 사용해야 할 것 같습니다.

이 문서는 비동기 프로그래밍을 필요하게 만드는 오래 실행되는 동기 함수의 문제점을 살펴보는 것으로 시작하겠습니다.

## Synchronous programming

아래 코드를 한번 자세히 보세요.

```js
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

이 코드는 

1. `name`이라는 문자열을 선언합니다.
2. `name`을 이용하여 `greeting`이라는 또다른 문자열을 선언합니다.
3. Javascript 콘솔에 인사말을 출력합니다.

여기서 우리는 브라우저가 우리가 작성한 순서대로 한 번에 한 줄씩 프로그램을 진행한다는 것에 주목해야 합니다. 브라우저는 각 지점에서 다음 줄로 이동하기 전에 해당 줄이 작업을 마칠 때까지 기다립니다. 각 라인은 앞의 라인에 의존하기 때문에 이와같이 작동해야 합니다.

브라우저의 이러한 속성은 우리의 프로그램을 **동기식 프로그램**으로 만들어 줍니다. 다음과 같이 별도의 함수를 호출하더라도 동기적으로 처리되죠.

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'Miriam';
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

여기서 `makeGreeting()`은 호출자가 작업을 이어가기 전 함수가 작업을 완료하고 값을 반환할 때까지 기다려야하기 때문에 **동기 함수**입니다.

### 장기 실행 동기 함수

동기 함수 실행시간이 길다면 어떻게 될까요?

아래 프로그램은 사용자가 "Generate primes" 버튼을 클릭할 때 매우 비효율적인 알고리즘을 사용하여 어려 개의 큰 소수를 생성합니다. 사용자가 지정한 소수 수가 많을수록 작업 시간이 더 오래 걸립니다.

```html
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000">

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

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload()
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

"Generate primes" 버튼을 클릭해 보세요. 여러분의 컴퓨터가 얼마나 빠른지에 따라, 프로그램이 "Finished!" 메시지를 출력하기 까지 아마 몇 초가 걸릴것입니다.

### 장기 실행 동기 함수의 문제

다음 예제는 이전 예제와 동일하지만, 여러분이 입력할 수 있는 텍스트 박스를 추가했습니다. 이번엔 "Generate primes"를 클릭하고, 곧바로 이 텍스트 박스에 아무 글이나 타이핑 해보세요.

우리의 `generatePrimes()`가 실행중인 동안, 우리의 프로그램은 완전히 응답하지 않는것을 확인할 수 있을겁니다. 아무것도 입력할 수 없고 클릭이나 다른 어떤 것도 할 수 없습니다.

```html hidden
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000">

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

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

이것이 장기 실행 동기 함수의 기본적인 문제입니다. 우리에게 필요한것은 다음을 가능하게 하는 방법입니다.

1. 장기 실행 작업을 함수 호출로 실행합니다.
2. 이 함수를 실행하자마자 바로 return하여 프로그램이 다른 이벤트를 계속 응답할 수 있게 합니다.
3. 작업이 완료되면 결과 값과 함께 우리에게 알려줍니다.

이것들이 바로 비동기 함수가 할 수 있는 작업입니다. 이 과정의 나머지 부분에서는 이러한 기능이 JavaScript에서 구현되는 방법에 대해 살펴보겠습니다.

## 이벤트 처리기

방금 본 비동기 함수에 대한 기능은 여러분에게 이벤트 처리기를 생각나게 했을것이며, 만약 그랬다면 여러분은 맞았습니다. 실제로 이벤트 처리기는 이벤트가 발생할 때마다 호출되는 함수(이벤트 처리기)를 제공하는 비동기 함수의 한 형태입니다. 만약 "이벤트"가 "비동기 작업 완료됨"이라면, 이 이벤트를 사용하여 비동기 함수 호출 결과를 호출자에게 알릴 수 있습니다.

일부 초기 비동기 API는 이러한 방식으로 이벤트를 사용했습니다. {{domxref("XMLHttpRequest")}} API는 JavaScript를 사용하여 원격 서버에 HTTP 요청을 생성할 수 있습니다. 이 작업은 오래 걸릴 수 있으므로 비동기 API이고, `XMLHttpRequest` 객체에 이벤트 수신기를 연결하여 요청 진행 상태 및 최종 완료에 대해 알림을 받습니다.

다음 예제에서는 이 작업을 수행합니다. "Click to start request"를 눌러 요청을 보내보세요. 새로운 {{domxref("XMLHttpRequest")}}를 생성하고 이것의 {{domxref("XMLHttpRequest/loadend_event", "loadend")}} 이벤트를 수신합니다. 수신기는 상태 코드와 함께 "Finished!" 메시지를 기록합니다.

이벤트 수신기를 추가한 다음 요청을 보냅니다. 그 후 "Started XHR request"를 기록할 수 있습니다. 즉, 프로그램은 요청이 진행되는동안 계속 실행될 수 있으며, 요청이 완료되면 이벤트 수신기가 호출됩니다.

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
const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;});

document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

이것은 [이전 과정에서 접한 이벤트 수신기](/ko/docs/Learn/JavaScript/Building_blocks/Events)와 같습니다. 단, 이벤트가 사용자가 단추를 클릭하는 것과 같은 사용자의 행동이 아닌 일부 객체의 상태 변경이라는 것입니다.

## 콜백

이벤트 수신기는 콜백의 특정 유형입니다. 콜백은 그저 다른 함수에 전달되어 적절한 시간에 호출될것으로 예상되는 함수입니다. 방금 본것과 같이 콜백은 JavaScript에서 비동기 함수들이 구현되는 주요 방식이었습니다.

하지만 콜백 기반 코드는 콜백 자체가 콜백 함수를 호출할 때 이해하기 어려울 수 있습니다. 이것은 일련의 비동기 함수로 분해되는 작업을 수행해야 하는 경우 발생하는 일반적인 상황입니다. 예를들어, 다음을 고려해보세요.


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

여기서는 각 단계가 마지막 단계에 따라 달라지는 세 단계로 분리된 단일 작업을 수행합니다. 이 예제에서 첫 번째 단계는 입력에 1을 추가하고, 두 번째 단계는 2를 추가하고, 세 번째 단계는 3을 추가합니다. 0을 입력으로 시작하여 최종 결과는 6(0 + 1 + 2 + 3)입니다. 동기식 프로그램으로서, 이것은 매우 간단합니다. 하지만 콜백을 사용하여 단계를 구현하면 어떨까요?

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
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();
```

콜백 안에서 콜백을 호출 해야 하기 때문에, 읽고 디버깅하기 어려운 깊게 중첩된 `doOperation()` 함수를 써야합니다. 가끔 이런 현상을 "콜백 지옥" 또는 "돔 피라미드"(왜냐하면 코드를 옆에서 봤을 때 피라미드처럼 보이거든요.) 라고도 부릅니다.

이렇게 콜백을 중첩하면, 에러를 처리하기도 매우 어려워질 수 있습니다. 최상위 레벨에서 오류를 한 번만 처리하는 대신 "피라미드"의 각 레벨에서 오류를 처리해야 합니다.

이러한 이유로 대부분의 비동기 API는 콜백을 사욜하지 않습니다. 대신, JavaScript의 비동기 프로그램의 기반은 {{jsxref("Promise")}}이며, 이는 다음 글에서 다루게 될 주제입니다.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## In this module

- **Introducing asynchronous JavaScript**
- [How to use promises](/ko/docs/Learn/JavaScript/Asynchronous/Promises)
- [Implementing a promise-based API](/ko/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- [Introducing workers](/ko/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
- [Assessment: sequencing animations](/ko/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)