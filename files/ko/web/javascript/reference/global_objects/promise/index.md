---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Promise`** 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

프로미스의 작동 방식과 프로미스 사용 방법에 대해 알아보려면 먼저 [프로미스 사용하기](/ko/docs/Web/JavaScript/Guide/Using_promises)을 읽어보세요.

## 설명

**`Promise`** 는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '프로미스(promise)'를 반환합니다.

`Promise`는 다음 중 하나의 상태를 가집니다.

- 대기(_pending)_: 이행하지도, 거부하지도 않은 초기 상태.
- 이행(_fulfilled)_: 연산이 성공적으로 완료됨.
- 거부(_rejected)_: 연산이 실패함.

대기 중인 프로미스는 값과 함께 이행할 수도, 어떤 이유(오류)로 인해 거부될 수도 있습니다. 이행이나 거부될 때, 프로미스의 `then` 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출됩니다. 이미 이행했거나 거부된 프로미스에 처리기를 연결해도 호출되므로, 비동기 연산과 처리기 연결 사이에 경합 조건은 없습니다.

프로미스가 이행되거나 거부되었지만 보류 중이 아닌 경우, 프로미스가 확정된 것으로 간주합니다.

![](promises.png)

또한 프로미스와 함께 *resolved*라는 용어가 사용되는 것을 볼 수 있는데, 이는 프로미스가 다른 프로미스의 최종 상태와 일치하도록 "settled"되거나 "locked-in"되어 더 이상 해결하거나 거부해도 아무런 효과가 없음을 의미합니다. [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)에 프로미스 용어에 대한 자세한 내용이 나와 있습니다. "resolved" 프로미스는 종종 "fulfilled" 프로미스와 동일하지만, "States and fates"에 설명된 것처럼 해결된 프로미스도 보류 중이거나 거부될 수 있습니다. 다음은 예제입니다.

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

이 프로미스는 생성될 때 `resolveOuter`가 동기적으로 호출되기 때문에 이미 해결되었지만, 다른 프로미스와 함께 해결되므로 1초 후 내부 프로미스가 이행될 때까지는 이행되지 않습니다. 실제로 "resolution"은 종종 백그라운드에서 이루어지며 관찰할 수 없으며, 이행 또는 거부 여부만 확인할 수 있습니다.

> [!NOTE]
> 느긋한 평가와 연산 연기를 위한 방법을 프로미스라고 부르는 언어도 여럿 존재합니다(Scheme 등). JavaScript에서의 프로미스는 콜백 함수를 연결할 수 있는, 이미 진행 중인 프로세스를 나타냅니다. 표현식을 느긋하게 평가하려면 `f = () => expression`처럼 매개변수 없는 함수를 사용해 느긋한 표현식을 생성하고, `f()`를 호출해 평가하세요.

### 프로미스 연결

{{jsxref("Promise.prototype.then()")}}, {{jsxref("Promise.prototype.catch()")}} 및 {{jsxref("Promise.prototype.finally()")}} 메서드는 정착된 프로미스와 추가 작업을 연결하는 데 사용됩니다. 이러한 메서드는 프로미스를 반환하므로 연쇄적으로 연결할 수 있습니다.

`.then()` 메서드는 최대 두 개의 인수를 받습니다. 첫 번째 인수는 프로미스의 이행된 경우에 대한 콜백 함수이고, 두 번째 인수는 거부된 경우에 대한 콜백 함수입니다. 각 `.then()`은 새로 생성된 프로미스 객체를 반환하며, 선택적으로 연쇄에 사용할 수 있습니다. 다음은 예제입니다.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

`.then()`에 프로미스 객체를 반환하는 콜백 함수가 없는 경우에도 처리는 체인의 다음 링크까지 계속됩니다. 따라서 체인은 마지막 `.catch()`까지 모든 거부 콜백 함수를 안전하게 생략할 수 있습니다.

각 `.then()`에서 거부된 프로미스를 처리하면 프로미스 체인의 더 아래쪽에 영향을 미칩니다. 오류를 즉시 처리해야 하기 때문에 선택의 여지가 없는 경우도 있습니다. 이러한 경우 체인에서 오류 상태를 유지하기 위해 어떤 유형의 오류를 발생시켜야 합니다. 반면에 즉각적인 필요성이 없는 경우에는 마지막 `.catch()` 문까지 오류 처리를 생략하는 것이 더 간단합니다. `.catch()`는 실제로는 약속이 이행된 경우에 대한 콜백 함수를 위한 슬롯이 없는 `.then()`에 불과합니다.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

콜백 함수에 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용하면 프로미스 체인의 구현은 다음과 같습니다.

```js
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> 실행 속도를 높이려면 모든 동기 작업을 하나의 핸들러 내에서 수행하는 것이 바람직하며, 그렇지 않으면 모든 핸들러를 순차적으로 실행하는 데 몇 틱이 걸립니다.

프로미스의 종료 조건에 따라 체인에서 다음 프로미스의 "settled" 상태가 결정됩니다. "fulfilled" 상태는 프로미스가 성공적으로 완료되었음을 나타내며, "rejected" 상태는 성공하지 못했음을 나타냅니다. 체인에서 이행된 각 프로미스의 반환 값은 다음 `.then()`으로 전달되고, 거부 사유는 체인의 다음 거절 핸들러 함수로 전달됩니다.

체인의 약속은 서로 중첩되어 있지만 스택의 맨 꼭대기처럼 튀어나옵니다. 체인의 첫 번째 프로미스는 가장 깊게 중첩되어 있으며 가장 먼저 나오게 됩니다.

```
(promise D, (promise C, (promise B, (promise A) ) ) )
```

`nextValue`이 프로미스인 경우, 그 결과는 동적으로 대체됩니다. `return`은 프로미스를 빠져나가게 하지만 `nextValue` 프로미스는 그 자리에 밀어넣게 됩니다. 위에 표시된 중첩에서 "promise B"와 관련된 `.then()`이 "promise X"의 `nextValue`를 반환하는 경우, 결과 중첩 구조는 다음과 같이 보일 것입니다.

```
(promise D, (promise C, (promise X) ) )
```

하나의 프로미스는 둘 이상의 중첩에 참여할 수 있습니다. 다음 코드의 경우, `promiseA`를 "settled" 상태로 전환하면 `.then()`의 두 인스턴스가 모두 호출됩니다.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

이미 "settled"된 프로미스에 동작을 할당할 수 있습니다. 이 경우, 해당 동작이 적절하다면 첫 번째 비동기 기회에 수행됩니다. 프로미스는 비동기적으로 실행되는 것이 보장되므로, 이미 "settled"된 프로미스에 대한 동작은 스택이 해제되고 시간이 경과한 후에만 발생합니다. 이 효과는 setTimeout(action, 0)와 유사합니다.

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// 이 순서로 출력을 생성합니다.
// immediate logging
// asynchronous logging has val: 777
```

### Thenables

JavaScript 생태계는 프로미스가 언어의 일부가 되기 훨씬 전부터 여러 가지 프로미스 구현을 만들어왔습니다. 내부적으로 다르게 표현되기는 하지만, 최소한 모든 프로미스와 유사한 객체는 Thenable 인터페이스를 구현합니다. thenable은 두 개의 콜백(하나는 프로미스가 이행될 때, 다른 하나는 거부될 때)과 함께 호출되는 [`.then()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 메서드를 구현합니다. 프로미스 또한 thenable입니다.

기존 프로미스 구현과 상호 운용하기 위해 언어에서는 프로미스 대신 thenables을 사용할 수 있습니다. 예를 들어 [`Promise.resolve`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)는 프로미스를 해결할 뿐만 아니라 thenables도 추적합니다.

```js
const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // thenable은 다른 thenable로 채워집니다.
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(aThenable); // 프로미스는 42로 채워집니다.
```

### 프로미스 동시성

`Promise` 클래스는 비동기 작업 [동시성](https://en.wikipedia.org/wiki/Concurrent_computing)을 용이하게 하기 위해 네 가지 정적 메서드를 제공합니다.

- {{jsxref("Promise.all()")}}
  - : **모든** 프로미스가 이행되면 이행되고, 프로미스 중 **하나**라도 거부되면 거부됩니다.
- {{jsxref("Promise.allSettled()")}}
  - : **모든** 프로미스가 해결되면 이행됩니다.
- {{jsxref("Promise.any()")}}
  - : 프로미스 중 **하나**라도 이행되면 이행하고, **모든** 프로미스가 거부되면 거부합니다.
- {{jsxref("Promise.race()")}}
  - : 프로미스 중 **하나**라도 해결되면 해결됩니다. 즉, 프로미스 중 하나라도 이행되면 이행되고, 약속 중 하나라도 거부되면 거부됩니다.

이 모든 메서드는 프로미스의 [iterable](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)(정확히 말하면, ([thenables](#thenables))을 취하고 새로운 프로미스를 반환합니다. 이 메서드들은 모두 서브클래싱을 지원하므로 `Promise`의 서브클래스에서 호출할 수 있으며, 그 결과는 서브클래스 유형의 프로미스가 됩니다. 이렇게 하려면 서브클래스의 생성자가 [`Promise()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 생성자와 동일한 시그니처를 구현해야 하며, `resolve` 및 `reject` 콜백을 매개변수로 사용하여 호출할 수 있는 `executor` 함수를 수락해야 합니다. 또한 서브클래스에는 값을 프로미스로 해결하기 위해 {{jsxref("Promise.resolve()")}}처럼 호출할 수 있는 `resolve` 정적 메서드가 있어야 합니다.

JavaScript는 본질적으로 [single-threaded](/ko/docs/Glossary/Thread)이므로 특정 순간에는 하나의 작업만 실행되지만, 제어권이 다른 프로미스 간에 이동하여 프로미스가 동시에 실행되는 것처럼 보이게 할 수 있다는 점에 유의하세요. JavaScript에서 [병렬 실행](https://en.wikipedia.org/wiki/Parallel_computing)은 [worker threads](/ko/docs/Web/API/Web_Workers_API)를 통해서만 가능합니다.

## 생성자

- {{jsxref("Promise.Promise", "Promise()")}}
  - : 새로운 `Promise` 객체를 생성합니다. 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용합니다.

## 정적 속성

- {{jsxref("Promise/@@species", "Promise[@@species]")}}
  - : 프로미스 메서드에서 반환값을 구성하는 데 사용되는 생성자를 반환합니다.

## 정적 메서드

- {{jsxref("Promise.all", "Promise.all(iterable)")}}

  - : 주어진 모든 프로미스가 이행하거나, 한 프로미스가 거부될 때까지 대기하는 새로운 프로미스를 반환합니다.

    반환하는 프로미스가 이행한다면, 매개변수로 제공한 프로미스 각각의 이행 값을 모두 모아놓은 배열로 이행합니다. 배열 요소의 순서는 매개변수에 지정한 프로미스의 순서를 유지합니다.

    반환하는 프로미스가 거부된다면, 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다.

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : 주어진 모든 프로미스가 처리(이행 또는 거부)될 때까지 대기하는 새로운 프로미스를 반환합니다.

    `Promise.allSettled()`가 반환하는 프로미스는 매개변수로 제공한 모든 프로미스 각각의 상태와 값(또는 거부 사유)을 모아놓은 배열로 이행합니다.

- {{JSxRef("Promise.any", "Promise.any(iterable)")}}
  - : 주어진 모든 프로미스 중 하나라도 이행하는 순간, 즉시 그 프로미스의 값으로 이행하는 새로운 프로미스를 반환합니다.
- {{jsxref("Promise.race", "Promise.race(iterable)")}}

  - : 주어진 모든 프로미스 중 하나라도 처리될 때까지 대기하는 프로미스를 반환합니다.

    반환하는 프로미스가 이행한다면, 매개변수의 프로미스 중 첫 번째로 이행한 프로미스의 값으로 이행합니다.

    반환하는 프로미스가 거부된다면, 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다.

- {{JSxRef("Promise.reject", "Promise.reject(reason)")}}
  - : 주어진 사유로 거부하는 `Promise` 객체를 반환합니다.
- {{jsxref("Promise.resolve()")}}

  - : 주어진 값으로 이행하는 `Promise` 객체를 반환합니다. 이때 지정한 값이 `then` 가능한(`then` 메서드를 가지는) 값인 경우, `Promise.resolve()`가 반환하는 프로미스는 `then` 메서드를 "따라가서" 자신의 최종 상태를 결정합니다. 그 외의 경우, 반환된 프로미스는 주어진 값으로 이행합니다.

    어떤 값이 프로미스인지 아닌지 알 수 없는 경우, 보통 일일이 두 경우를 나눠서 처리하는 대신 `Promise.resolve()`로 값을 감싸서 항상 프로미스가 되도록 만든 후 작업하는 것이 좋습니다.

## 인스턴스 속성

이러한 속성은 `Promise.prototype`에 정의되며 모든 `Promise` 인스턴스에서 공유됩니다.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Promise` 인스턴스의 경우 초기값은 {{jsxref("Promise/Promise", "Promise")}} 생성자입니다.
- `Promise.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Promise"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("Promise.prototype.catch()")}}
  - : 프로미스에 거부 처리기 콜백을 추가하고, 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우, 즉 이전 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환합니다.
  - {{jsxref("Promise.prototype.finally()")}}
  - : 프로미스의 이행과 거부 여부에 상관없이 처리될 경우 항상 호출되는 처리기 콜백을 추가하고, 이행한 값 그대로 이행하는 새로운 프로미스를 반환합니다.
- {{jsxref("Promise.prototype.then()")}}
  - : 프로미스에 이행과 거부 처리기 콜백을 추가하고, 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우(`onFulfilled`, `onRejected` 중 상태에 맞는 콜백이 함수가 아닐 경우) 처리된 값과 상태 그대로 처리되는 새로운 프로미스를 반환합니다.

## 예제

### 기본 예제

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
  // 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
  // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
  setTimeout(function () {
    resolve("성공!"); // 와! 문제 없음!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage는 위에서 resolve(...) 호출에 제공한 값입니다.
  // 문자열이어야 하는 법은 없지만, 위에서 문자열을 줬으니 아마 문자열일 것입니다.
  console.log("와! " + successMessage);
});
```

### 다양한 상황의 예제

```js
// 오류 처리를 실험하기 위해 'threshold' 값은 무작위로 오류를 발생시킵니다.
const THRESHOLD_A = 8; // 0을 사용하여 오류를 보장할 수 있습니다.

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Too large: ${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
```

### 고급 예제

다음의 작은 예제는 `Promise`의 동작 방식을 보여줍니다. `testPromise()` 함수는 {{HTMLElement("button")}}을 클릭할 때마다 호출되며, {{domxref("window.setTimeout()")}}을 사용해 1\~3초의 무작위 간격 이후 프로미스 횟수(1부터 시작하는 숫자)로 이행하는 프로미스를 생성합니다. `Promise()` 생성자는 프로미스를 만드는 데 쓰입니다.

프로미스 이행은 {{jsxref("Promise.prototype.then()","p1.then()")}}을 사용하는 이행 콜백 세트를 통해 단순히 로그에 남습니다. 약간의 로그를 통해, 함수의 동기 부분이 비동기적 프로미스의 완료와 어떻게 분리되어 있는지 확인할 수 있습니다.

짧은 시간 동안 버튼을 여러 번 클릭하면 다른 프로미스가 차례로 이행되는 것을 볼 수도 있습니다.

#### HTML

```html
<button id="btn">프로미스 만들기!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") 시작 (<small>동기적 코드 시작</small>)<br/>",
  );

  // 새 프로미스 생성 - 프로미스의 생성 순서를 전달하겠다는 약속을 함 (3초 기다린 후)
  var p1 = new Promise(
    // 실행 함수는 프로미스를 이행(resolve)하거나
    // 거부(reject)할 수 있음
    function (resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount +
          ") 프로미스 시작 (<small>비동기적 코드 시작</small>)<br/>",
      );
      // setTimeout은 비동기적 코드를 만드는 예제에 불과
      window.setTimeout(
        function () {
          // 프로미스 이행 !
          resolve(thisPromiseCount);
        },
        Math.random() * 2000 + 1000,
      );
    },
  );

  // 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고,
  // 거부됐을 때 할 일은 catch() 호출로 정의
  p1.then(
    // 이행 값 기록
    function (val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") 프로미스 이행 (<small>비동기적 코드 종료</small>)<br/>",
      );
    },
  ).catch(
    // 거부 이유 기록
    function (reason) {
      console.log("여기서 거부된 프로미스(" + reason + ")를 처리하세요.");
    },
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") 프로미스 생성 (<small>동기적 코드 종료</small>)<br/>",
  );
}

if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}
```

#### 결과

{{EmbedLiveSample("고급_예제", "500", "200")}}

### XHR로 이미지 불러오기

이미지를 로드하기 위해 `Promise` 및 {{domxref("XMLHttpRequest")}}를 사용하는 또 다른 간단한 예는 MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) 저장소에서 이용할 수 있습니다. [실제 예](https://mdn.github.io/js-examples/promises-test/)를 볼 수도 있습니다. 각 단계에 주석이 붙어있어, 프로미스 및 XHR 구조를 차근차근 따라갈 수 있습니다.

### 현재 설정 객체 추적

설정 객체는 JavaScript 코드가 실행될 때 추가 정보를 제공하는 [환경](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)입니다. 여기에는 realm 및 모듈 맵은 물론 출처와 같은 HTML 특정 정보가 포함됩니다. 브라우저가 특정 사용자 코드에 어떤 설정 객체를 사용할지 알 수 있도록 현재 설정 객체를 추적합니다.

이를 더 잘 이해하기 위해 realm이 어떻게 문제가 될 수 있는지 자세히 살펴볼 수 있습니다. **realm**은 대략 전역 객체로 생각할 수 있습니다. realm의 독특한 점은 JavaScript 코드를 실행하는 데 필요한 모든 정보를 담고 있다는 것입니다. 여기에는 [`array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) 및 [`error`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)와 같은 객체가 포함됩니다. 각 설정 객체에는 이러한 객체의 고유한 "복사본"이 있으며 공유되지 않습니다. 이로 인해 프로미스와 관련하여 예기치 않은 동작이 발생할 수 있습니다. 이 문제를 해결하기 위해 **기존 설정 객체**라는 것을 추적합니다. 이는 특정 함수 호출을 담당하는 사용자 코드의 내용과 관련된 정보를 나타냅니다.

이를 좀 더 설명하기 위해 문서에 삽입된 [`<iframe>`](/ko/docs/Web/HTML/Element/iframe)이 호스트와 통신하는 방식을 살펴볼 수 있습니다. 모든 웹 API는 현재 설정 객체를 인식하므로 다음은 모든 브라우저에서 작동합니다.

```html
<!doctype html> <iframe></iframe>
<!-- 이 부분에 realm이 있습니다. -->
<script>
  // 이 부분에도 realm이 있습니다.
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // 바인딩은 내장 함수이며 사용자가 없습니다.
  // 스택의 코드이며, 어떤 realm을 사용해야 할까요?
  setTimeout(bound);
  // 가장 최신을 사용하기 때문에 여전히 작동합니다.
  // realm(기존)을 스택에 추가합니다.
</script>
```

프로미스에도 동일한 개념이 적용됩니다. 위의 예제를 조금 수정하면 다음과 같이 됩니다.

```html
<!doctype html> <iframe></iframe>
<!-- 이 부분에 realm이 있습니다. -->
<script>
  // 이 부분에도 realm이 있습니다.
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // 바인딩은 내장 함수이며 사용자가 없습니다.
  // 스택의 코드이며, 어떤 realm을 사용해야 할까요?
  Promise.resolve(undefined).then(bound);
  // 가장 최신을 사용하기 때문에 여전히 작동합니다.
  // realm(기존)을 스택에 추가합니다.
</script>
```

문서의 `<iframe>`이 게시물 메시지를 수신하도록 변경하면 기존 설정 객체의 효과를 관찰할 수 있습니다.

```html
<!-- y.html -->
<!doctype html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!doctype html>
<script>
  window.addEventListener(
    "message",
    (event) => {
      document.querySelector("#text").textContent = "hello";
      // this code will only run in browsers that track the incumbent settings object
      console.log(event);
    },
    false,
  );
</script>
```

위 예제에서는 현재 설정 개체를 추적하는 경우에만 `<iframe>`의 내부 텍스트가 업데이트됩니다. 이는 현재 상태를 추적하지 않으면 잘못된 환경을 사용하여 메시지를 전송할 수 있기 때문입니다.

> [!NOTE]
> 현재 realm 추적은 Firefox에서 완전히 구현되어 있으며, Chrome과 Safari에서는 부분적으로 구현되어 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Promise` 폴리필](https://github.com/zloirock/core-js#ecmascript-promise)
- [프로미스 사용하기](/ko/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ 명세](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
