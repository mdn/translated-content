---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
l10n:
  sourceCommit: a4247f6db3e78122b3ac678cbb319db7f52182b3
---

{{JSRef}} {{Non-standard_Header}}

> [!NOTE]
> `stack` 속성은 사실상 모든 주요 JavaScript 엔진에서 구현되어 있으며 [자바스크립트 표준 위원회에서 표준화를 모색하고 있습니다](https://github.com/tc39/proposal-error-stacks). 구현상의 불일치로 인해 스택 문자열의 정확한 내용에 의존할 수는 없지만 일반적으로 존재한다고 가정하고 디버깅 목적으로 사용할 수 있습니다.

{{jsxref("Error")}} 인스턴스의 비표준 **`stack`** 속성은 어떤 함수가 어떤 순서로, 어떤 줄과 파일에서, 어떤 인수를 사용하여 호출되었는지 추적할 수 있습니다. 스택 문자열은 가장 최근 호출에서 이전 호출로 진행되며, 원래의 전역 범위 호출로 되돌아갑니다.

## 값

하나의 문자열.

`stack` 속성은 비표준이기 때문에 구현체에 따라 위치가 다릅니다.

- Firefox에서는 `Error.prototype`의 접근자 속성입니다.
- Chrome과 Safari에서는 각 `Error` 인스턴스의 데이터 속성이며 다음과 같은 설명자를 가지고 있습니다.

{{js_property_attributes(1, 0, 1)}}

## 설명

각 JavaScript 엔진마다 고유한 스택 추적 형식을 사용하지만, 높은 수준의 구조는 꽤 일관적입니다. 모든 구현은 스택에서 별도의 줄을 사용하여 각 함수 호출을 나타냅니다. 오류를 직접적으로 일으킨 호출은 맨 위에 배치되고 전체 호출 체인의 시작 호출은 맨 아래에 배치됩니다. 다음은 스택 추적의 몇 가지 예입니다.

```js
function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.log(new Error().stack);
}

foo();
```

```plain
#### JavaScriptCore
baz@filename.js:10:24
bar@filename.js:6:6
foo@filename.js:2:6
global code@filename.js:13:4

#### SpiderMonkey
baz@filename.js:10:15
bar@filename.js:6:3
foo@filename.js:2:3
@filename.js:13:1

#### V8
Error
    at baz (filename.js:10:15)
    at bar (filename.js:6:3)
    at foo (filename.js:2:3)
    at filename.js:13:1
```

엔진마다 이 값을 설정하는 시점이 다릅니다. 대부분의 최신 엔진은 {{jsxref("Error")}} 객체가 생성될 때 이 값을 설정합니다. 즉, 다음을 사용하여 함수 내에서 전체 호출 스택 정보를 얻을 수 있습니다:

```js
function foo() {
  console.log(new Error().stack);
}
```

오류를 발생시킨 다음 다시 처리할 필요가 없습니다.

V8에서는 비표준 `Error.captureStackTrace()`, `Error.stackTraceLimit` 및 `Error.prepareStackTrace()` API를 사용하여 스택 추적을 사용자 정의할 수 있습니다. 자세한 내용은 V8 문서에서 [스택 추적 API](https://v8.dev/docs/stack-trace-api)를 참조하세요.

스택 프레임은 명시적 함수 호출 이외의 것일 수도 있습니다. 예를 들어 이벤트 리스너, 타임아웃 작업, 프로미스 처리기는 모두 자체 호출 체인을 시작합니다. {{jsxref("Global_Objects/eval", "eval()")}} 및 {{jsxref("Function")}} 생성자 호출 내의 소스 코드도 스택에 나타납니다.

```js
console.log(new Function("return new Error('Function failed')")().stack);
console.log("====");
console.log(eval("new Error('eval failed')").stack);
```

```plain
#### JavaScriptCore
anonymous@
global code@filename.js:1:65
====
eval code@
eval@[native code]
global code@filename.js:3:17

#### SpiderMonkey
anonymous@filename.js line 1 > Function:1:8
@filename.js:1:65

====
@filename.js line 3 > eval:1:1
@filename.js:3:13

#### V8
Error: Function failed
    at eval (eval at <anonymous> (filename.js:1:13), <anonymous>:1:8)
    at filename.js:1:65
====
Error: eval failed
    at eval (eval at <anonymous> (filename.js:3:13), <anonymous>:1:1)
    at filename.js:3:13
```

Firefox에서는 `//# sourceURL` 지시어를 사용하여 평가 소스의 이름을 지정할 수 있습니다. 자세한 내용은 Firefox [디버그 평가 소스](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) 문서와 [`//# sourceURL` 지시문을 사용하여 `eval` 스크립트 이름 지정하기](https://fitzgeraldnick.com/2014/12/05/name-eval-scripts.html) 블로그 게시물을 참조하세요.

## 예제

### stack 속성 사용하기

다음 스크립트는 `stack` 속성을 사용하여 스택 추적을 브라우저 창에 출력하는 방법을 보여줍니다. 이를 사용하여 브라우저의 스택 구조가 어떻게 보이는지 확인할 수 있습니다.

```html hidden
<div id="output"></div>
```

```css hidden
#output {
  white-space: pre;
  font-family: monospace;
}
```

```js
function trace() {
  throw new Error("trace() failed");
}
function b() {
  trace();
}
function a() {
  b(3, 4, "\n\n", undefined, {});
}
try {
  a("first call, firstarg");
} catch (e) {
  document.getElementById("output").textContent = e.stack;
}
```

{{EmbedLiveSample("Using_the_stack_property", "700", "200")}}

## 명세서

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [TraceKit](https://github.com/csnover/TraceKit/) on GitHub
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) on GitHub
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
