---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

`indexOf()` 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

> **참고:** 문자열은 {{jsxref("String.prototype.indexOf()")}}를 참고하세요.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## 구문

```js
    arr.indexOf(searchElement[, fromIndex])
```

### 매개변수

- `searchElement`
  - : 배열에서 찾을 요소입니다.
- `fromIndex` {{optional_inline}}
  - : 검색을 시작할 색인입니다. 인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않습니다. 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용됩니다. 참고 : 제공된 색인이 음수이면 배열은 여전히 앞에서 뒤로 검색됩니다. 계산 된 인덱스가 0보다 작 으면 전체 배열이 검색됩니다. 기본값 : 0 (전체 배열 검색).

### 반환 값

배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1.

## 설명

`indexOf()`는 엄격한 동등성 (`===` 또는 triple-equals 연산자에서 사용하는 것과 같은 메서드)을 사용하여 검색 요소를 `Array`의 요소와 비교합니다.

## 예제

### `indexOf()` 사용하기

다음 예제에서는 indexOf ()를 사용하여 배열의 값을 찾습니다.

```js
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### 요소의 모든 항목 찾기

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 요소가 배열에 존재하는지 확인하고 배열을 업데이트

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log("새로운 veggies 컬렉션 : " + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + " 은 이미 veggies 컬렉션에 존재합니다.");
  }
}

var veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// 새로운 veggies 컬렉션 : potato, tomato, chillies, green-pepper, spinach
updateVegetablesCollection(veggies, "spinach");
// spinach 은 이미 veggies 컬렉션에 존재합니다.
```

## 폴리필

```js
// ECMA-262, 제 5 판, 15.4.4.14의 생산 단계
// 참조 : http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. 이 값을 인수로 전달하는 ToObject를 호출 한 결과를
    // o라고합니다.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. lenValue를 Get 함수를 호출 한 결과로 둡니다.
    // 인수가 "length"인 o의 내부 메소드.
    // 3. len을 ToUint32 (lenValue)로 지정합니다.
    var len = o.length >>> 0;

    // 4. len이 0이면 -1을 반환합니다.
    if (len === 0) {
      return -1;
    }

    // 5.Index에서 인수가 전달 된 경우 n을
    // ToInteger (fromIndex); 그렇지 않으면 n은 0이됩니다.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. n> = 0 인 경우 k를 n이라고 합니다.
    // 8. 그렇지 않으면 n <0, k는 len - abs (n)이됩니다.
    // k가 0보다 작은 경우 k를 0으로 만듭니다.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. k <len 인 동안 반복한다.
    while (k < len) {
      // a. Pk를 ToString (k)이라고합시다.
      // 이것은 in 연산자의 LHS 피연산자에 대해 암시 적입니다.
      // b. kPresent를 호출 한 결과라고합시다.
      // Hasproperty 인수에 Pk가있는 o의 내부 메소드.
      //이 단계는 c와 결합 될 수 있습니다.
      // c. kPresent가 참이면
      // i. elementK를 Get을 호출 한 결과로합시다.
      // ToString (k) 인수를 가진 o의 내부 메쏘드.
      // ii. 적용한 결과와 동일하게 봅시다.
      // 엄격한 평등 비교 알고리즘
      // searchElement 및 elementK.
      // iii. 동일하면 k를 반환합니다.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
