---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`map()`** 메서드는
호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운
새로운 배열을 생성합니다.

{{InteractiveExample("JavaScript Demo: Array.map()")}}

```js interactive-example
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## 구문

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 매개변수

- `callback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 반환 값은 새 배열에서 단일 요소로 추가됩니다. 이 함수는 다음 인수로 호출합니다.
    다음 세 가지 인수를 가집니다.
    - `currentValue`
      - : 배열 내에서 처리할 현재 요소.
    - `index`
      - : 배열 내에서 처리할 현재 요소의 인덱스.
    - `array`
      - : `map()`을 호출한 배열.
- `thisArg` {{optional_inline}}
  - : `callback`을 실행할 때 `this`로 사용되는 값. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하시기 바랍니다.

### 반환 값

배열의 각 요소에 대해 실행한 `callback`의 결과를 모은 새로운 배열.

## 설명

`map()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 이 메서드는 주어진 `callbackFn` 함수를 배열의 각각의 요소 당 한번 씩 호출하여 그 결과로 새로운 배열을 생성합니다. 이러한 메서드가 보편적으로 동작하는 방법을 알고싶으시면 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하시기 바랍니다.

`callback` 함수는 호출될 때 대상 요소의 값, 그 요소의 인덱스, 그리고 `map`을 호출한 원본 배열 3개의 인수를 전달받습니다. `callbackFn`은 값이 할당된 배열 인덱스에서만 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯에서는 호출되지 않습니다.

`map()` 메서드는 [범용 배열 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. 이 메서드는 오직 `this` 값이 `length` 속성과 정수 키가 있는 속성을 필요로 합니다.

`map`은 새로운 배열을 만들기 때문에, 반환된 배열을 사용하지 않고 호출하는 것은 안티 패턴입니다. 이 경우에는 {{jsxref("Array/forEach", "forEach")}} 혹은 {{jsxref("Statements/for...of", "for...of")}}를 사용하시기 바랍니다.

## 예제

### 배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기

다음 코드는 숫자 배열을 받아서 배열 안의 각 숫자의 제곱근이 들어있는 새로운 배열을 만듭니다.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots 는 이제 [1, 2, 3] 입니다.
// numbers 는 여전히 [1, 4, 9] 입니다.
```

### `map`을 활용해 배열 속 객체를 재구성하기

다음 코드는 객체의 배열을 받아 각 객체를 다른 형태로 재구성해 새로운 배열을 만듭니다.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### map()과 함께 parseInt() 사용하기

콜백을 하나의 인수(순회 중인 요소)와 함께 사용하는 것이 일반적입니다. 특정 함수는 추가적인 선택적 인수를 사용하더라도 하나의 인수와 함께 사용하는 것이 일반적입니다. 이러한 습관은 혼란스러운 행동으로 이어질 수 있습니다. 아래 코드를 고려해 보세요.

```js
["1", "2", "3"].map(parseInt);
```

누군가는 `[1, 2, 3]`을 기대할 수 있지만, 실제 결과는 `[1, NaN, NaN]`입니다.

{{jsxref("parseInt")}}는 종종 하나의 인수와 함께 사용되지만, 두 개의 인수를 받습니다. 첫 번째 인수는 표현식이고 두 번째 인수는 콜백 함수의 지수입니다. `Array.prototype.map`은 요소, 인덱스, 배열의 세 가지 인수를 전달합니다. 세 번째 인수는 {{jsxref("parseInt")}}에 의해 무시되지만, 두 번째 인수는 무시되지 않습니다. 이것이 혼란의 원인일 수 있습니다.

다음은 순회 단계의 간결한 예입니다.

```js
/* 첫 번째 순회 (인덱스는 0입니다): */ parseInt("1", 0); // 1
/* 두 번째 순회 (인덱스는 1입니다): */ parseInt("2", 1); // NaN
/* 세 번째 순회 (인덱스는 2입니다): */ parseInt("3", 2); // NaN
```

이를 해결하기 위해서는 하나의 인수를 받는 또 다른 함수를 정의해야 합니다.

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

오직 하나의 인수를 받는 {{jsxref("Number")}} 함수를 사용할 수 있습니다.

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// parseInt()와는 다르게 Number()는 부동소수 혹은 (해결된) 지수 표기법을 반환합니다.
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// 대조적으로 만약 위 배열에 parseInt()를 사용했을 경우입니다
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

보다 자세한 논의는 Allen Wirfs-Brock의 [JavaScript 선택적 인수 위험](https://wirfs-brock.com/allen/posts/166)를 보시기 바랍니다.

### undefined를 포함하는 매핑된 배열

{{jsxref("undefined")}} 또는 아무것도 반환되지 않으면 결과 배열에 `undefined`가 포함됩니다. 대신 요소를 삭제하려면 {{jsxref("Array/filter", "filter()")}} 메서드를 체인으로 연결하거나 {{jsxref("Array/flatMap", "flatMap()")}} 메서드를 사용하여 빈 배열을 반환하여 삭제를 나타냅니다.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// 인덱스가 0부터 시작하기 때문에 filterNumber는 1, 2, 3과 undefined 입니다.
// filteredNumbers는 [1, 2, 3, undefined]입니다
// numbers는 여전히 [1, 2, 3, 4]입니다
```

### 부작용이 있는 매핑

콜백은 부작용이 있습니다.

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

복사 메서드는 순수 함수와 함께 사용하는 것이 가장 좋기 때문에 권장되지 않습니다. 이 경우 배열을 두 번 반복하도록 선택할 수 있습니다.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

때때로 이 패턴은 극단적으로 변하며 `map()`가 하는 유일한 유용한 일은 부작용을 일으키는 것입니다.

```js
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
```

위에서 언급했듯이, 이는 안티 패턴입니다. `map()`의 반환 값을 사용하지 않는다면 `forEach()` 혹은 `for...of` 반복문을 대신 사용하시기 바랍니다.

```js
products.forEach((product) => {
  product.price = 100;
});
```

혹은 대신 새로운 배열을 생성할 수 있습니다.

```js
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
```

### callbackFn의 세 번째 인수 사용하기

`array` 인수는 배열을 참조하는 기존 변수가 없는 경우, 특히 배열의 다른 요소에 접근하고 싶을 때 유용합니다. 다음 예제에서는 먼저 `filter()`를 사용하여 양수 값을 추출한 다음 `map()`을 사용하여 각 요소가 이웃과 자신의 평균인 새 배열을 만듭니다.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // arr 안수 없이, 중간 배열을 변수로 저장하지 않고 중간 배열에
    // 쉽게 접근할 수 있는 방법이 없습니다.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // 소수점 두 자리를 유지합니다
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

`array` 인수는 생성 중인 배열이 아닙니다. 콜백 함수에서 생성 중인 배열에 접근할 방법이 없습니다.

### 희소 배열에 map() 사용하기

희소 배열은 `map()` 이후에도 그대로 희소 배열로 남습니다. 빈 슬롯의 인덱스는 반환된 배열에서도 여전히 빈 슬롯으로 존재하며 콜백 함수도 해당 빈 슬롯에서는 호출되지 않습니다.

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// 0 방문
// 2 방문
// [2, empty, 6]
```

### 배열이 아닌 객체에서 map() 호출하기

`map()` 메서드는 `this`의 `length` 속성을 읽어서 음수가 아닌 `length`보다 작은 정수 키를 가진 각각의 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length가 3이기 때문에 map()에서 무시합니다
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

이 예제는 `querySelectorAll`에서 수집한 객체 컬렉션을 순회하는 방법을 보여줍니다. 이는 `querySelectorAll`이 객체 컬렉션인 `NodeList`를 반환하기 때문입니다. 이 경우 아래 코드와 같이 선택한 모든 `option` 값을 화면에 반환합니다.

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

`elems`를 객체로 변환하기 위해 {{jsxref("Array.from()")}}를 사용할 수 있습니다. 그리고 나서 `map()` 메서드로 접근합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.prototype.map` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
