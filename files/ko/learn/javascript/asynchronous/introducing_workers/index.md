---
title: Introducing workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

"비동기 JavaScript" 학습 과정의 마지막 글에서는 별도의 {{Glossary("Thread", "Thread")}} 실행 시 일부 작업을 실행할 수 있는 **workers** 를 소개합니다.

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
      <td>웹 워커 사용법을 이해하기 위함</td>
    </tr>
  </tbody>
</table>

이 과정의 첫 번째 글에서 우리는 프로그램이 장기간 진행되는 동기 작업을 수행할 때 창이 완전히 응답하지 않는 것을 보았습니다. 근본적으로 그 이유는 프로그램이 _단일 스레드_ 이기 때문입니다. _스레드_ 는 프로그램이 따르는 일련의 명령입니다. 이 프로그램이 단일 스레드로 구성되어 있어서 한 번에 한 가지 작업만 수행할 수 있습니다. 따라서 장기간 실행 중인 동기 호출이 반환되기를 기다리고 있으면 다른 작업을 수행할 수 없습니다.

워커는 다른 스레드에서 어떤 작업을 실행할 수 있는 기능을 제공하므로 이 작업을 시작하고 다른 처리(예: 사용자 작업 처리)를 계속할 수 있습니다.

하지만 이것에 대한 대가가 있습니다. 다중 스레드 코드를 사용하면 스레드가 언제 중단되고 다른 스레드가 언제 실행될지 절대 알 수 없습니다. 따라서 두 스레드가 같은 변수에 접근할 수 있는 경우 변수가 언제든지 예기치 않게 변경될 수 있으며, 이에 따라 찾기 어려운 버그가 발생합니다.

웹에서는 이러한 문제를 방지하기 위해 메인 코드와 워커 코드가 서로의 변수에 직접 접근할 수 없습니다. 워커와 메인 코드는 완전히 별개의 세계에서 실행되며, 서로 메시지를 보내야만 상호 작용할 수 있습니다. 특히, 워커는 DOM(window, document, 페이지 요소 등)에 액세스할 수 없습니다.

워커에는 세 가지 유형이 있습니다.

- dedicated workers
- shared workers
- service workers

이 글에서는 첫 번째 워커의 예를 살펴본 후 나머지 두 가지 워커는 간략히 살펴보겠습니다.

## 웹 워커 사용하기

첫 번째 글에서 소수를 계산하는 페이지가 있던 것을 기억하시나요? 워커를 사용하여 소수 계산을 실행할 것이므로 사용자에 대한 페이지 응답성을 유지할 수 있습니다.

### 동기 소수 생성기

먼저 이전 예제의 JavaScript를 다시 살펴봅시다.

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
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

이 프로그램에서는 `generatePrimes()`를 호출한 후 프로그램이 전혀 응답하지 않습니다.

### 워커를 이용한 소수 생성기

이 예제를 위해 먼저 <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start>를 로컬에 복사해보겠습니다. 이 디렉토리에는 4개의 파일이 있습니다.

- index.html
- style.css
- main.js
- generate.js

"index.html" 파일과 "style.css" 파일은 이미 완성되어있습니다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script type="text/javascript" src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"</textarea
    >

    <div id="output"></div>
  </body>
</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

"main.js"와 "generate.js" 파일은 비어 있습니다. 우리는 메인 코드를 "main.js"에 추가하고 워커 코드를 "generate.js"에 추가할 것입니다.

이 설명을 통해 워커 코드가 메인 코드와는 별도로 유지됨을 알 수 있습니다. 위의 "index.html"을 보면 `<script>` 요소엔 메인 코드만 포함되어 있음을 알 수 있습니다.

이제 다음 코드를 "main.js"에 복사해보세요.

```js
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota: quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

- 먼저 {{domxref("Worker/Worker", "Worker()")}} 생성자를 사용하여 워커를 만듭니다. 이 워커에 워커 스크립트를 가리키는 URL을 전달합니다. 워커가 생성되자마자 워커 스크립트가 실행됩니다.

- 그런 다음 동기화 버전과 마찬가지로 "Generate primes" 버튼에 `click` 이벤트 처리기를 추가합니다. 그러나 이제 `generatePrimes()` 함수를 호출하는 대신 {{domxref("Worker/postMessage", "worker.postMessage()")}}를 사용하여 워커에게 메시지를 보냅니다. 이 메시지는 인수를 받을 수 있으며, 인수를 받은 경우 다음 두 가지 속성을 포함하는 JSON 개체를 전달합니다.

  - `command`: 워커가 수행할 작업을 식별하는 문자열입니다.(워커가 둘 이상의 작업을 수행할 수 있는 경우)
  - `quota`: 생성할 소수의 개수입니다.

- 다음으로, 워커에게 `message` 이벤트 처리기를 추가합니다. 이것은 워커가 작업이 완료되면 알려주고 결과 데이터를 전달할 수 있도록 하기 위함입니다. 처리기는 메시지의 `data` 속성에서 데이터를 가져와 출력 요소에 씁니다(이 데이터는 `quota`와 정확히 일치하므로 다소 무의미하지만 원리를 보여줍니다).

- 마지막으로 "Reload" 버튼에 대한 `click` 이벤트 처리기를 구현합니다. 이것은 동기 버전과 정확히 같습니다.

이제 워커 코드를 보겠습니다. 다음 코드를 "generate.js"에 복사해보세요.

```js
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// Generate primes (very inefficiently)
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

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  postMessage(primes.length);
}
```

메인 스크립트가 워커를 만들자마자 이 코드를 실행한다는 것을 기억하세요.

워커가 가장 먼저 하는 일은 메인 스크립트의 메시지 수신을 기다리는 것입니다. 워커는 워커의 전역 함수인 `addEventListener()`를 사용하여 이 작업을 수행합니다. `message` 이벤트 처리기 속에서 이벤트의 `data` 속성은 메인 스크립트에서 전달된 인수의 복사본이 들어있습니다. 메인 스크립트가 `generate` 명령을 전달하면 메시지 이벤트에서 `generatePrimes()`를 `quota`를 전달하며 호출합니다.

`generatePrimes()` 함수는 동기 버전과 비슷하지만, 값을 반환하는 대신 작업이 끝나면 메인 스크립트로 메시지를 보냅니다. 이를 위해 {{domxref("DedicatedWorkerGlobalScope/postMessage", "postMessage()")}} 함수를 사용합니다. 이는 `addEventListener()`와 같이 워커의 전역 함수입니다. 이미 살펴본 바와 같이, 메인 스크립트는 이 메시지를 수신하고 있으며 메시지가 수신되면 DOM을 업데이트합니다.

> **참고:** 이 사이트를 실행하려면 로컬 웹 서버를 실행해야 합니다. file:// URL로는 워커를 로드할 수 없기 때문입니다. [테스트 로컬 서버 설정](/ko/docs/Learn/Common_questions/set_up_a_local_testing_server) 가이드를 참조하시기 바랍니다. 이렇게 하면 "Generate primes"를 눌러 기본 페이지를 응답할 수 있는 상태로 유지할 수 있습니다.
>
> 예제를 만들거나 실행하는 데 문제가 있는 경우 <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished>에서 완성된 버전을 확인하고 <https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished> 에서 라이브로 사용해 볼 수 있습니다.

## 다른 종류의 워커

우리가 방금 만든 워커가 _dedicated worker_ 입니다. 단일 스크립트 인스턴스에서 사용됩니다.

다른 유형의 워커도 있습니다.

- [_Shared workers_](/ko/docs/Web/API/SharedWorker)는 서로 다른 창에서 실행되는 여러 스크립트에서 공유될 수 있습니다.
- [_Service workers_](/ko/docs/Web/API/Service_Worker_API)는 사용자가 오프라인 상태일 때 웹 애플리케이션이 작동할 수 있도록 리소스를 캐싱하는, 마치 프록시 서버처럼 작동합니다. [Progressive Web Apps](/ko/docs/Web/Progressive_web_apps)의 핵심 구성 요소입니다.

## 결론

이 글에서는 웹 애플리케이션이 작업을 별도의 스레드로 넘길 수 있도록 하는 웹 워커를 소개했습니다. 메인 스레드와 워커는 변수를 직접 공유하지 않고, 상대방이 `message` 이벤트로 수신하는 메시지로 소통합니다.

비록 워커가 메인 애플리케이션이 액세스할 수 있는 모든 API, 특히 DOM에 액세스할 수는 없지만, 메인 애플리케이션의 응답성을 유지하는데는 효과적인 방법이 될 수 있습니다.

## 같이 보기

- [Using web workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Using service workers](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web workers API](/ko/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
