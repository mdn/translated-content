---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

**`then()`** 메서드는 {{domxref("Promise")}}를 리턴하고 두 개의 콜백 함수를 인수로 받습니다. 하나는 `Promise`가 **이행**했을 때, 다른 하나는 **거부**했을 때를 위한 콜백 함수입니다.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **참고:** 매개변수 중 하나 이상을 생략했거나 함수가 아닌 값을 전달한 경우, `then`은 핸들러가 없는 것이 되지만 오류를 발생하지는 않습니다. `then` 바로 이전의 `Promise`가 `then`에 핸들러가 없는 상태로 완료(이행이나 거부)했을 경우, 추가 핸들러가 없는 `Promise`가 생성되며, 원래 `Promise`의 마지막 상태를 그대로 물려받습니다.

## 구문

```JS
p.then(onFulfilled, onRejected);

p.then(function(value) {
  // 이행
}, function(reason) {
  // 거부
});
```

### 매개변수

- `onFulfilled`
  - : `Promise`가 수행될 때 호출되는 {{jsxref("Function")}}으로, **이행 값(fulfillment value)** 하나를 인수로 받습니다.
- `onRejected`
  - : `Promise`가 거부될 때 호출되는 {{jsxref("Function")}}으로, **거부 이유(rejection reason)** 하나를 인수로 받습니다.

### 반환값

{{jsxref("Promise")}}가 이행하거나 거부했을 때, 각각에 해당하는 핸들러 함수(`onFulfilled`나 `onRejected`)가 **비동기적으로** 실행됩니다. 핸들러 함수는 다음 규칙을 따라 실행됩니다.

- 함수가 값을 반환할 경우, `then`에서 반환한 프로미스는 그 반환값을 자신의 결과값으로 하여 이행합니다.
- 값을 반환하지 않을 경우, `then`에서 반환한 프로미스는 `undefined`를 결과값으로 하여 이행합니다.
- 오류가 발생할 경우, `then`에서 반환한 프로미스는 그 오류를 자신의 결과값으로 하여 거부합니다.
- 이미 이행한 프로미스를 반환할 경우, `then`에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 이행합니다.
- 이미 거부한 프로미스를 반환할 경우, `then`에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 거부합니다.
- **대기 중**인 프로미스를 반환할 경우, `then`에서 반환한 프로미스는 그 프로미스의 이행 여부와 결과값을 따릅니다.

다음 예제에서 `then` 메서드의 비동기성을 확인할 수 있습니다.

```js
// 이행한 프로미스를 받으면 'then' 블록도 바로 실행되지만,
// 핸들러는 아래 console.log에서와 같이 비동기적으로 실행됨
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value) => {
  console.log(
    "이 부분은 호출 스택 이후에 실행됩니다. 전달받은 값이자 반환값은 " +
      value +
      "입니다.",
  );
  return value;
});
// thenProm의 값을 즉시 기록
console.log(thenProm);

// setTimeout으로 함수 실행을 호출 스택이 빌 때까지 미룰 수 있음
setTimeout(() => {
  console.log(thenProm);
});

// 로그 출력 결과 (순서대로):
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "이 부분은 호출 스택 이후에 실행됩니다. 전달받은 값이자 반환값은 33입니다."
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
```

## 설명

`then`과 {{jsxref("Promise.prototype.catch()")}} 메서드는 프로미스를 반환하기 때문에, 체이닝이 가능합니다. 이를 *합성*이라고도 합니다.

## 예제

### `then` 메서드 사용

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("성공!");
  // 또는
  // reject("오류!");
});

p1.then(
  function (value) {
    console.log(value); // 성공!
  },
  function (reason) {
    console.log(reason); // 오류!
  },
);
```

### 체이닝

`then` 메서드는 `Promise`를 리턴하기 때문에, 이어지는 `then` 호출들을 손쉽게 연결할 수 있습니다.

`then`에 핸들러로 전달된 함수가 프로미스를 반환할 경우, 이와 동등한 프로미스가 메서드 체인의 그다음 `then`에 노출됩니다. 아래 예제에서는 `setTimeout` 함수로 비동기 코드를 흉내냅니다.

```js
Promise.resolve("foo")
  // 1. "foo"를 받고 "bar"를 추가한 다음 그 값으로 이행하여 다음 then에 넘겨줌
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "bar";
        resolve(string);
      }, 1);
    });
  })
  // 2. "foobar"를 받고 그대로 다음 then에 넘겨준 뒤,
  // 나중에 콜백 함수에서 가공하고 콘솔에 출력
  .then(function (string) {
    setTimeout(function () {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })
  // 3. 이 부분의 코드는 이전의 then 블록 안의 (가짜) 비동기 코드에서
  // 실제로 문자열을 가공하기 전에 실행됨
  .then(function (string) {
    console.log(
      "마지막 Then: 앗... 방금 then에서 프로미스 만들고 반환하는 걸 까먹어서 " +
        "출력 순서가 좀 이상할지도 몰라요",
    );

    // 'baz' 부분은 setTimeout 함수로 비동기적으로 실행되기 때문에
    // 이곳의 string에는 아직 'baz' 부분이 없음
    console.log(string);
  });

// 로그 출력 결과 (순서대로):
// 마지막 Then: 앗... 방금 then에서 프로미스 만들고 반환하는 걸 까먹어서 출력 순서가 좀 이상할지도 몰라요
// foobar
// foobarbaz
```

`then` 핸들러에서 값을 그대로 반환한 경우에는 `Promise.resolve(<핸들러에서 반환한 값>)`을 반환하는 것과 같습니다.

```js
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
});

p2.then(function (value) {
  console.log(value); // 1
  return value + 1;
}).then(function (value) {
  console.log(value + " - 동기적으로 짜도 돌아감");
});

p2.then(function (value) {
  console.log(value); // 1
});
```

함수에서 오류가 발생하거나 거부한 프로미스를 반환한 경우 `then`에서는 거부한 프로미스를 반환합니다.

```js
Promise.resolve()
  .then(() => {
    // .then()에서 거부한 프로미스를 반환함
    throw new Error("으악!");
  })
  .then(
    () => {
      console.log("실행되지 않는 코드");
    },
    (error) => {
      console.error("onRejected 함수가 실행됨: " + error.message);
    },
  );
```

이외의 모든 경우에는 곧 이행할(비동기적으로 실행되는) 프로미스를 반환합니다. 다음 예제에서는 바로 이전의 프로미스가 거부했음에도 첫 번째 `then`에서는 `42`의 값을 갖는 곧 이행할 프로미스를 반환합니다.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected에서는 42를 곧 이행할 프로미스로 감싸서 반환함
  .then((solution) => console.log(solution + "로 이행함")); // 42로 이행함
```

실제 개발 시에는 아래와 같이 거부한 프로미스를 `then`의 2단 핸들러보다는 `catch`를 사용해 처리하는 경우가 많습니다.

```js
Promise.resolve()
  .then(() => {
    // .then()에서 거부한 프로미스를 반환함
    throw new Error("으악!");
  })
  .catch((error) => {
    console.error("onRejected 함수가 실행됨: " + error.message);
  })
  .then(() => {
    console.log("처음 then의 프로미스가 거부했지만 그래도 이 코드는 실행됨");
  });
```

체이닝을 이용해 프로미스 기반 함수 위에 다른 프로미스 기반 함수를 구현할 수도 있습니다.

```js
function fetch_current_data() {
  // fetch() API는 프로미스를 반환합니다. 이 함수도
  // API가 비슷하지만, 이 함수의 프로미스는
  // 추가 작업을 거친 이후에 이행값을 반환합니다.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // j 가공하기
    return j; // fetch_current_data().then()을 통해
    // 이행값을 사용할 수 있음
  });
}
```

`onFulfilled`가 프로미스를 반환할 경우, `then`의 반환값 역시 그 프로미스에 의해 이행/거부합니다.

```js
function resolveLater(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function () {
    reject(new Error("오류"));
  }, 1000);
}

var p1 = Promise.resolve("foo");
var p2 = p1.then(function () {
  // 1초 뒤에 10으로 이행할 프로미스 반환
  return new Promise(resolveLater);
});
p2.then(
  function (v) {
    console.log("이행", v); // "이행", 10
  },
  function (e) {
    // 실행되지 않음
    console.log("거부", e);
  },
);

var p3 = p1.then(function () {
  // 1초 뒤에 '오류'로 거부할 프로미스 반환
  return new Promise(rejectLater);
});
p3.then(
  function (v) {
    // 실행되지 않음
    console.log("이행", v);
  },
  function (e) {
    console.log("거부", e); // "거부", '오류'
  },
);
```

### {{domxref("window.setImmediate")}}의 프로미스 기반 폴리필

{{jsxref("Function.prototype.bind()")}} `Reflect.apply` ({{jsxref("Reflect.apply()")}}) 메서드를 사용하여 (취소할 수 없는) setImmedate와 비슷한 함수를 생성합니다.

```js
const nextTick = (() => {
  const noop = () => {}; // literally
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
      ? Promise.resolve(args).then(rfab(null, fn, null))
      : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
