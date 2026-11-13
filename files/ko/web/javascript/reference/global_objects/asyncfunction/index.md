---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`AsyncFunction`** 객체는 [비동기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function)에 대한 메서드를 제공합니다. JavaScript에서 모든 비동기 함수는 실제로는 `AsyncFunction` 객체입니다.

`AsyncFunction`은 전역 객체가 아니라는 점에 유의하세요. 다음 코드를 통해 얻을 수 있습니다.

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction`은 {{jsxref("Function")}}의 하위 클래스입니다.

## 생성자

- {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : 새로운 `AsyncFunction` 객체를 생성합니다.

## 인스턴스 속성

부모 {{jsxref("Function")}}에서 인스턴스 속성을 상속합니다.

`AsyncFunction.prototype`에 정의되어 있는 이 속성은 모든 `AsyncFunction` 인스턴스에 공유됩니다.

- {{jsxref("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : 인스턴스 객체를 만드는 생성자 함수입니다. `AsyncFunction` 인스턴스의 경우 초기 값은 {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction")}} 생성자입니다.
- `AsyncFunction.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"AsyncFunction"` 입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

> [!NOTE]
> `AsyncFunction` 인스턴스는 [`prototype`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function) 속성을 가지지 않습ㄴ디ㅏ.

## 인스턴스 메서드

부모 {{jsxref("Function")}}에서 인스턴스 메서드를 상속합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`async function`](/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Function")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
