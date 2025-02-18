---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: 85af51e61dd95fa85feb7c43e08f284992ba69e5
---

{{JSRef}}

**`AsyncGenerator`** 객체는 {{jsxref("Statements/async_function*", "async generator function", "", 1)}}에 의해 반환되며, [비동기 순회 프로토콜과 비동기 반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)을 모두 준수합니다.

비동기 생성기 메서드는 항상 {{jsxref("Promise")}} 객체를 산출합니다.

`AsyncGenerator`는 숨겨진 {{jsxref("AsyncIterator")}} 클래스의 하위 클래스입니다.

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 생성자

`AsyncGenerator` 생성자와 대응되는 JavaScript 개체는 없습니다. [비동기 생성기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function*)에서 `AsyncGenerator`의 인스턴스를 반환해야 합니다.

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

비동기 생성기 함수가 생성한, 모든 객체가 공유하는 프로토타입 객체인 숨겨진 객체만 있습니다. 이 객체는 클래스처럼 보이게 하기 위해 종종 `AsyncGenerator.prototype`으로 그려지지만, `AsyncGeneratorFunction`은 실제 JavaScript 개체이기 때문에 {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}라고 하는 것이 더 적절합니다. `AsyncGenerator` 인스턴스의 프로토타입 체인을 이해하려면 {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}를 참조하세요.

## 인스턴스 속성

아래 속성은 `AsyncGenerator.prototype`에 정의되어 있으며 모든 `AsyncGenerator` 인스턴스에서 공유됩니다.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `AsyncGenerator` 객체를 위한 초기 값은 [`AsyncGeneratorFunction.prototype`](/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)입니다.

    > **참고:** `AsyncGenerator` 객체는 자신을 생성한 비동기 생성기 함수의 참조를 저장하고 있지 않습니다.

- `AsyncGenerator.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"AsyncGenerator"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 인스턴스 메서드

부모 {{jsxref("AsyncIterator")}}에서 인스턴스 메서드를 상속합니다.

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : {{jsxref("Promise")}}를 반환하며, {{jsxref("Operators/yield", "yield")}} 표현식에 의해 산출되어 주어진 값으로 이행됩니다.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : 현재 일시 중단된 위치에서 생성기 본문에 `return` 문이 삽입되어 생성기를 종료하고 [`try...finally`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) 블록과 결합하여 정리 작업을 수행할 수 있는 것처럼 작동합니다.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : 현재 일시 중단된 위치의 생성기 본문에 `throw` 문을 삽입하여 생성기에 오류 상태를 알리고 오류를 처리하거나 정리를 수행하고 스스로 닫을 수 있도록 하는 것처럼 작동합니다.

## 예제

### 비동기 생성기 순회

아래는 비동기 생성기를 순회하는 예제입니다. 1~6의 값을 점점 줄어드는 시간 간격으로 콘솔에 남깁니다. 프로미스가 산출될 때마다 `for await...of` 루프 내에서 자동으로 이행되는 것을 확인할 수 있습니다.

```js
// 비동기 작업입니다. 실제로 더 유용한 일을 하고 있다고 가정해 보시기 바랍니다.
function delayedValue(time, value) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(100, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("All done!");
}

async function main() {
  for await (const value of generate()) {
    console.log("value", value);
  }
}

main().catch((e) => console.error(e));
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- [`function*` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "Generator Function", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Async Generator Function", "", 1)}}
- [반복자와 생성기](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators) 가이드
