---
title: Array.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

`Array` 인스턴스의 **`length`** 속성은 배열의 길이를 반환합니다. 반환값은 부호 없는 32비트 정수형이며, 배열의 최대 인덱스보다 항상 큽니다. **`length`** 속성에 값을 설정할 경우 배열의 길이를 변경합니다.

{{EmbedInteractiveExample("pages/js/array-length.html")}}

## 설명

`length` 속성의 값은 양의 정수이며 2^32 미만의 값을 가집니다.

```js
var namelistA = new Array(4294967296); // 2의 32제곱 = 4294967296
var namelistC = new Array(-100); // 음수

console.log(namelistA.length); // RangeError: Invalid array length
console.log(namelistC.length); // RangeError: Invalid array length

var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; // 길이를 2의 32제곱 미만으로 설정
console.log(namelistB.length);

// 4294967295
```

아무 때나 `length` 속성에 값을 설정해 배열을 절단할 수 있습니다. `length` 속성으로 배열의 길이를 늘리면 실제 원소의 수가 증가합니다. 예를 들어 길이가 2인 배열의 `length`를 3으로 설정한다면 마지막에 `undefined`가 추가돼 총 3개의 요소를 갖게 됩니다.

```js
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // set array length to 5 while currently 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log("=== printed ===");
}

// 1
// 2
// 3
// === printed ===
// 1
// 2
// 3
// undefined
// undefined
// === printed ===
```

그러나 `length` 속성의 값이 꼭 배열에 정의된 원소의 수를 나타내진 않습니다. [`length`와 숫자형 속성의 관계](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#length_%EC%99%80_%EC%88%AB%EC%9E%90%ED%98%95_%EC%86%8D%EC%84%B1%EC%9D%98_%EA%B4%80%EA%B3%84)를 참고하세요.

{{js_property_attributes(1, 0, 0)}}

## 예제

### 배열 순회

다음 예제는 `numbers` 배열을 length 속성의 크기만큼 순회합니다. 각 원소의 값은 두 배가 됩니다.

```js
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### 배열 단축

다음 예제는 `numbers` 배열의 현재 길이가 3보다 클 경우 3으로 줄입니다.

```js
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
