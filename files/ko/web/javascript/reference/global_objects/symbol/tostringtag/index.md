---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 7a3d9dfec7fdc7b9bebbce68bcc1c62ff290ff0b
---

{{JSRef}}

**`Symbol.toStringTag`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `@@toStringTag`를 나타냅니다. {{jsxref("Object.prototype.toString()")}}은 객체의 유형을 나타내는 문자열을 포함하는 속성의 `this` 값에서 이 기호를 검색합니다.

{{InteractiveExample("JavaScript Demo: Symbol.toStringTag")}}

```js interactive-example
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));
// Expected output: "[object Validator]"
```

## 값

잘 알려진 심볼 `@@toStringTag`.

{{js_property_attributes(0, 0, 0)}}

## 예제

### 기본 태그

일부 값에는 `Symbol.toStringTag`이 없지만 특수한 `toString()` 표현이 있습니다. 전체 목록은 {{jsxref("Object.prototype.toString()")}}을(를) 참조하십시오.

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... and more
```

### 내장 toStringTag 심볼

대부분의 내장 객체는 자체 `@@toStringTag` 속성을 제공합니다. 거의 모든 내장 객체의 `@@toStringTag` 속성은 쓰기 가능하지 않으며, 열거 가능하지 않으며, 구성은 가능하지만 호환성의 이유로 쓰기 가능한 {{jsxref("Iterator")}}는 예외입니다.

{{jsxref("Promise")}}와 같은 생성자 객체의 경우, 이 속성은 `Constructor.prototype`에 설치되므로 생성자의 모든 인스턴스가 `@@toStringTag`를 상속하고 문자열화할 수 있습니다. {{jsxref("Math")}} 및 {{jsxref("JSON")}}처럼 생성자 객체가 아닌 경우 속성이 정적 속성으로 설치되어 네임스페이스 객체 자체를 문자열화할 수 있습니다. 생성자가 자체 `toString` 메서드를 제공하기도 하는데(예: {{jsxref("Intl.Locale")}}), 이 경우 `@@toStringTag` 속성은 명시적으로 `Object.prototype.toString`을 호출하는 경우에만 사용됩니다.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### toStringTag를 사용한 사용자 지정 태그

자신만의 클래스를 만들 때 JavaScript는 기본적으로 "Object" 태그를 사용합니다.

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

이제 `toStringTag`의 도움으로 나만의 사용자 지정 태그를 설정할 수 있습니다.

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### 모든 DOM 프로토타입 객체에서 사용 가능한 toStringTag

2020년 중반의 [WebIDL 명세 변경](https://github.com/whatwg/webidl/pull/357)으로 인해 브라우저는 모든 DOM 프로토타입 객체에 `Symbol.toStringTag` 속성을 추가하고 있습니다. 예를 들어, {{domxref("HTMLButtonElement")}}의 `Symbol.toStringTag` 속성에 접근하려면 다음의 예를 참고하세요.

```js
const test = document.createElement("button");
test.toString(); // "[object HTMLButtonElement]"
test[Symbol.toStringTag]; // "HTMLButtonElement"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.toStringTag` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
