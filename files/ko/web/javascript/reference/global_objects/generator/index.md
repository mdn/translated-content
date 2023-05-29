---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

**`Generator`** 객체는 {{JSxRef("Statements/function*", "generator function", "", 1)}} 으로부터 반환되며, [반복 가능한 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)과 [반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)을 모두 준수합니다.

## Constructor

이 객체는 바로 인스턴스화할 될 수 없습니다. 대신 [제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)를 통해 `Generator` 인스턴스를 반환할 수 있습니다.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

## 인스턴스 메서드

- {{JSxRef("Generator.prototype.next()")}}
  - : {{JSxRef("Operators/yield", "yield")}} 표현식을 통해 yield된 값을 반환합니다.
- {{JSxRef("Generator.prototype.return()")}}
  - : 주어진 값을 반환하고 제너레이터를 종료합니다.
- {{JSxRef("Generator.prototype.throw()")}}
  - : 제너레이터에 오류를 발생시킵니다. (해당 제너레이터 내에서 오류가 발생한 경우가 아닌 한 제너레이터도 완료)

## 예제

### 무한 제너레이터

제너레이터 함수를 사용하면 값은 필요할 때까지 계산되지 않습니다. 따라서 제너레이터는 잠재적으로 무한한 데이터 구조를 정의할 수 있습니다.

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ...
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{JSxRef("Statements/function*", "function*")}}
- {{JSxRef("Operators/function*", '<code>function*</code> expression', "", 1)}}
- {{JSxRef("GeneratorFunction")}}
- [반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
