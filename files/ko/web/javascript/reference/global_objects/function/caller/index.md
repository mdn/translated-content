---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 함수의 `caller`에 접근하면 오류가 발생합니다. 해당 API가 대체되지 않고 제거되었습니다. 이는 보안 위험을 초래하고 인라이닝 및 꼬리 호출(tail-call) 최적화와 같은 최적화의 가능성을 심각하게 제한하는 코드가 스택을 순차적으로 검사하는 것(walk the stack)을 방지하기 위한 것입니다. 자세한 설명은 [`arguments.callee`의 사용 중단에 대한 근거](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee#description)에서 확인할 수 있습니다.

{{jsxref("Function")}} 인스턴스의 **`caller`** 접근자 속성은 이 함수를 호출한 함수를 반환합니다. [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode), 화살표, 비동기 및 제너레이터 함수의 경우 `caller` 속성에 액세스하면 {{jsxref("TypeError")}}가 발생합니다.

## 설명

`f` 함수가 최상위 코드에 의해 호출된 경우 `f.caller`의 값은 {{jsxref("Operators/null", "null")}}이고, 그렇지 않으면 `f`를 호출한 함수입니다. `f`를 호출한 함수가 엄격 모드 함수인 경우 `f.caller`의 값도 `null`입니다.

ECMAScript 사양에 지정된 유일한 동작은 `Function.prototype`에 모든 `get` 또는 `set` 요청("포이즌 필 접근자"(poison pill accessor)라고 함)에 대해 무조건 {{jsxref("TypeError")}}가 발생하는 초기 `caller` 접근자가 있다는 것과 구현체에서 이 의미를 변경할 수 없는 엄격하지 않은 일반 함수를 제외한 어떤 함수에도 엄격한 모드 함수 값이 없어야 한다는 점에 유의하시기 바랍니다. `caller` 속성의 실제 동작은 오류를 발생시키는 것 이외의 경우 구현체에 따라 정의됩니다. 예를 들어 Chrome은 자체 데이터 속성으로 정의하는 반면, Firefox와 Safari는 초기 포이즌 필 `Function.prototype.caller` 접근자를 확장하여 엄격한 함수가 아닌 `this` 값을 특별히 처리합니다.

```js
(function f() {
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log(
      "f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "caller",
      ).get.call(f),
    );
  }
})();

// In Chrome:
// caller is an own property with descriptor {value: null, writable: false, enumerable: false, configurable: false}

// In Firefox:
// f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller
// null
```

이 속성은 {{jsxref("Functions/arguments", "arguments")}} 객체의 미사용 `arguments.caller` 속성을 대체합니다.

## 예제

### 함수의 caller 속성의 값 확인하기

아래 코드는 함수의 `caller` 속성 값을 확인합니다.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  } else {
    return `This function's caller was ${myFunc.caller}`;
  }
}
```

### 스택 재생성과 재귀

재귀의 경우에는 이 속성을 사용하여 호출 스택을 재생성할 수 없음을 유의하시기 바랍니다. 아래를 고려해보세요.

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

`stop()`이 호출될 시점에서의 호출 스택은 아래와 같습니다.

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

아래는 참입니다.

```js
stop.caller === g && f.caller === g && g.caller === f;
```

아래와 같이 `stop()` 함수에서 스택 추적을 가져오려고 시도한다면

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

루프는 절대 멈추지 않습니다.

### 엄격 모드에서의 caller

caller가 엄격 모드 함수라면, `caller`의 값은 `null`입니다.

```js
function callerFunc() {
  calleeFunc();
}

function strictCallerFunc() {
  "use strict";
  calleeFunc();
}

function calleeFunc() {
  console.log(calleeFunc.caller);
}

(function () {
  callerFunc();
})();
// Logs [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// Logs null
```

## 명세서

어떤 표준에도 속하지 않습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
