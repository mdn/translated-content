---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

**`forEach()`** 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 구문

```js
    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```

### 매개변수

- `callback`
  - : 각 요소에 대해 실행할 함수.
    다음 세 가지 매개변수를 받습니다.
    - `currentValue`
      - : 처리할 현재 요소.
    - `index`
      - : 처리할 현재 요소의 인덱스.<
    - `array`
      - : `forEach()`를 호출한 배열.
- `thisArg`
  - : `callback`을 실행할 때 `this`로 사용할 값.

### 반환 값

{{jsxref("undefined")}}.

## 설명

`forEach()`는 주어진 `callback`을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행합니다. 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않습니다. (예: 희소 배열)

`callback`은 다음 세 인수와 함께 호출됩니다.

- **요소 값**
- **요소 인덱스**
- **순회 중인 배열**

`thisArg` 매개변수를 `forEach()`에 제공한 경우 `callback`을 호출할 때 전달해 `this`의 값으로 쓰입니다. 전달하지 않으면 `undefined`를 사용하며, 최종 `this` 값은 {{jsxref("Operators/this", "함수의 <code>this</code>를 결정하는 평소 규칙", "", 0)}}을 따릅니다.

`forEach()`로 처리할 요소의 범위는 최초 `callback` 호출 전에 설정됩니다. `forEach()` 호출을 시작한 뒤 배열에 추가한 요소는 `callback`이 방문하지 않습니다. 배열의 기존 요소값이 바뀐 경우, `callback`에 전달하는 값은 `forEach()`가 요소를 방문한 시점의 값을 사용합니다. 방문하기 전에 삭제한 요소는 방문하지 않습니다.

`forEach()`는 각 배열 요소에 대해 한 번씩 `callback` 함수를 실행합니다. {{jsxref("Array.prototype.map()", "map()")}}과 {{jsxref("Array.prototype.reduce()", "reduce()")}}와는 달리 {{jsxref("undefined")}}를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없습니다. 대표적인 사용처는 메서드 체인 끝에서 부작용(side effect)을 실행하는 겁니다.

`forEach()`는 배열을 변형하지 않습니다. 그러나 `callback`이 변형할 수는 있습니다.

> **참고:** 예외를 던지지 않고는 `forEach()`를 중간에 멈출 수 없습니다. 중간에 멈춰야 한다면 `forEach()`가 적절한 방법이 아닐지도 모릅니다.다음 방법으로는 조기에 반복을 종료할 수 있습니다.\* 간단한 [for](/ko/docs/Web/JavaScript/Reference/Statements/for) 반복문
>
> - [for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of), [for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}다른 배열 메서드 {{jsxref("Array.prototype.every()", "every()")}}, {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}}, {{jsxref("Array.prototype.findIndex()", "findIndex()")}}는 배열 요소를 판별 함수에 전달하고, 그 결과의 참/거짓 여부에 따라 반복의 종료 여부를 결정합니다.

## 예제

### 초기화하지 않은 값의 반복 생략

```js
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach(function (element) {
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
```

### `for` 반복문을 `forEach()`로 바꾸기

```js
const items = ["item1", "item2", "item3"];
const copy = [];

// 이전
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach(function (item) {
  copy.push(item);
});
```

### 배열 콘텐츠 출력

> **참고:** **참고:** {{domxref("console.table()")}}을 사용하면 배열 내용물을 서식에 맞춰 출력할 수 있습니다.다음 예제는 `forEach()`를 사용한 다른 방법을 소개합니다.

다음 코드는 배열의 각 요소에 대해 한 줄을 기록합니다:

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
[2, 5, , 9].forEach(logArrayElements);
// 기록:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### `thisArg` 사용

다음 예제는 배열의 각 항목에서 객체의 속성을 갱신합니다:

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- 주의
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3
obj.sum;
// 16
```

`thisArg` 매개변수(`this`)를 `forEach()`에 제공했기에, `callback`은 전달받은 `this`의 값을 자신의 `this` 값으로 사용할 수 있습니다.

> **참고:** [화살표 함수 표현식](/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션)을 사용하여 함수 인수를 전달하는 경우 `thisArg` 매개변수는 화살표 함수가 {{jsxref("Operators/this", "this")}} 값을 렉시컬(lexical, 정적) 바인딩하기에 생략될 수 있습니다.

### 객체 복사 함수

다음 코드는 주어진 객체의 사본을 만듭니다.

객체 사본을 만드는 방법에는 여러가지가 있습니다, 다음은 그 중 한 방법으로, ECMAScript 5 `Object.*` 메타 속성 함수를 사용하여 `Array.prototype.forEach()`가 작동하는 법을 설명하기 위한 코드입니다.

```js
function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function (name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### 반복 중 배열이 변경으로 인한 반복 생략

다음 예제에서는 `"one"`, `"two"`, `"four"`를 기록합니다.

`forEach()`가 값 `"two"`를 포함하는 항목에 도달하면 전체 배열의 첫 번째 항목을 제거하여, 나머지 모든 항목이 한 위치 앞으로 이동합니다. 요소 `"four"`는 이제 배열에서 보다 앞에 위치하므로 `"three"`는 건너 뜁니다.

`forEach()`는 반복 전에 배열의 복사본을 만들지 않습니다.

```js
let words = ["one", "two", "three", "four"];
words.forEach(function (word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
```

### 배열 평탄화

다음 예제는 오직 시연 용으로만 추가한 것으로, 평탄화를 하려면 {{jsxref("Array.prototype.flat()")}}을 사용하세요.

```js
function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(nested); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
