---
title: "Function: displayName"
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}} {{Non-standard_Header}}

{{jsxref("Function")}} 인스턴스의 선택 속성인 **`displayName`** 함수의 표시 이름을 설정합니다.

## 값

`displayName` 속성은 모든 함수에 대해 초기에 존재하는 것이 아니라 코드 작성자가 추가하는 것입니다. 표시의 일환으로, 이는 문자열 값을 가집니다.

## 설명

만일 `displayName` 속성이 존재한다면 콘솔과 프로파일러는 이를 {{jsxref("Function/name", "name")}} 속성보다 우선하여 사용하는 것을 선호합니다.

브라우저 사이에서는 오직 파이어폭스 콘솔에서만 이 속성을 활용합니다. 리액트 개발자 도구에서도 [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) 속성을 컴포넌트 트리를 표시할 때 사용합니다.

파이어폭스에서는 아래 패턴들이 감지되면 [익명 JavaScript 함수 네이밍 컨벤션](https://johnjbarton.github.io/nonymous/index.html) 알고리즘을 활용하여 `displayName` 를 복호화하려는 기본적인 시도가 있습니다.

- 만일 `displayName` 이 영문자와 숫자와 `_` , `$` 로 끝나는 경우, 해당 접미사 중 가장 긴 부분이 표시됩니다.
- 만일 `displayName` 이 `[]` 로 감싸진 문자들로 끝나는 경우, 대괄호를 제외한 해당 문자열이 표시됩니다.
- 만일 `displayName` 이 영숫자와 `_` 로 구성된 문자열 다음에 `/`, `.`, 또는 `<` 가 붙어서 끝나는 경우, 끝에 있는 `/`, `.`, 또는 `<` 문자들을 제외한 문자열이 표시됩니다.
- 만일 `displayName` 이 영문자와 숫자와 `_` 로 구성된 문자열 다음에 `(^)` 로 끝나는 경우, `(^)` 없이 해당 문자열이 표시됩니다.

위 패턴과 일치하지 않는 경우에는 전체 `displayName` 가 표시됩니다.

## 예제

### 표시 이름 설정하기

파이어폭스 콘솔을 확인하면, `function MyFunction()` 과 같은 형태로 이름이 표시됩니다.

```js
const a = function () {};
a.displayName = "MyFunction";

a; // function MyFunction()
```

### 표시 이름을 동적으로 변경하기

함수의 `displayName` 을 동적으로 변경할 수 있습니다.

```js
const object = {
  // 익명
  someMethod: function someMethod(value) {
    someMethod.displayName = `someMethod (${value})`;
  },
};

console.log(object.someMethod.displayName); // undefined

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

### 표시 이름 정리하기

파이어폭스 개발자 도구에서는 `displayName` 속성을 표시하기 전에 몇 가지 일반적인 패턴을 정리하여 보여줍니다.

```js
function foo() {}

function testName(name) {
  foo.displayName = name;
  console.log(foo);
}

testName("$foo$"); // function $foo$()
testName("foo bar"); // function bar()
testName("Foo.prototype.add"); // function add()
testName("foo ."); // function foo .()
testName("foo <"); // function foo <()
testName("foo?"); // function foo?()
testName("foo()"); // function foo()()

testName("[...]"); // function ...()
testName("foo<"); // function foo()
testName("foo..."); // function foo()
testName("foo(^)"); // function foo()
```

## 명세서

Not part of any standard.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Function.prototype.name")}}
