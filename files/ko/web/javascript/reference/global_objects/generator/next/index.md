---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

**`next()`** 메서드는 `done`과 `value` 속성을 가지는 객체를 반환 합니다. `next` 메서드에 매개변수를 제공하여 값을 제너레이터로 보낼 수도 있습니다.

## 구문

```js
generatorObject.next(value);
```

### 매개변수

- `value`

  - : 제너레이터로 보낼 값입니다.

    값은 `yield` 식의 결과로 할당됩니다. 예를 들어 `variable = yield 식`에서 `.next()` 함수에 전달된 값은 `variable`에 할당됩니다.

### 반환 값

두 개의 속성을 가진 {{jsxref("Object", "객체")}}이고, 이 속성은 다음과 같습니다.

- `done` (boolean)

  - : 반복자가 반복 시퀀스의 끝을 지난 경우 `true`입니다. 이 경우 `value`는 선택적으로 반복자의 *반환 값*을 지정합니다.

    반복자가 시퀀스에서 다음 값을 생성할 수 있는 경우 `false`입니다. 이는 `done` 속성을 완전히 지정하지 않는 것과 같습니다.

- `value`
  - : 제너레이터가 생성하거나 반환한 모든 JavaScript 값입니다.

## 예제

### next() 사용하기

다음 예제에서는 간단한 제너레이터와 `next` 메서드가 반환하는 객체를 보여 줍니다.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### 리스트와 함께 next() 사용하기

이 예제에서 `getPage`는 리스트를 받아 `pageSize` 크기의 청크로 "페이지 나누기"를 수행합니다. `next`를 호출할 때마다 그러한 청크가 하나 생성됩니다.

```js
function* getPage(pageSize = 1, list) {
  let output = [];
  let index = 0;

  while (index < list.length) {
    output = [];
    for (let i = index; i < index + pageSize; i++) {
      if (list[i]) {
        output.push(list[i]);
      }
    }

    yield output;
    index += pageSize;
  }
}

list = [1, 2, 3, 4, 5, 6, 7, 8];
let page = getPage(3, list); // Generator { }

page.next(); // Object {value: (3) [1, 2, 3], done: false}
page.next(); // Object {value: (3) [4, 5, 6], done: false}
page.next(); // Object {value: (2) [7, 8], done: false}
page.next(); // Object {value: undefined, done: true}
```

### 제너레이터에 값 보내기

이 예제에서는 값과 함께 `next`를 호출합니다.

> **참고:** 제너레이터가 처음에는 아무것도 생성하지 않았기 때문에 첫 번째 호출에서 기록되는 것은 없습니다.

```js
function* gen() {
  while (true) {
    let value = yield null;
    console.log(value);
  }
}

const g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/function*", "function*")}}
- [반복자와 제너레이터](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)
