---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
---
{{JSRef}}

**`some()`** 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.

> **참고:** 빈 배열에서 호출하면 무조건 `false`를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## 구문

```js
    arr.some(callback[, thisArg])
```

### 매개변수

- `callback`
  - : 각 요소를 시험할 함수. 다음 세 가지 인수를 받습니다._ `currentValue`
    _ : 처리할 현재 요소.
    - `index` {{Optional_inline}}
      - : 처리할 현재 요소의 인덱스.
    - `array` {{Optional_inline}}
      - : `some`을 호출한 배열.
- `thisArg` {{Optional_inline}}
  - : `callback`을 실행할 때 `this`로 사용하는 값.

### 반환 값

`callback`이 어떤 배열 요소라도 대해 참인({{Glossary("truthy")}}) 값을 반환하는 경우 **`true`**, 그 외엔 **`false`**.

## 설명

`some`은 `callback`이 참(불린으로 변환했을 때 `true`가 되는 값)을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 `callback` 함수를 실행합니다. 해당하는 요소를 발견한 경우 `some`은 즉시 `true`를 반환합니다. 그렇지 않으면, 즉 모든 값에서 거짓을 반환하면 `false`를 반환합니다. 할당한 값이 있는 배열의 인덱스에서만 `callback`을 호출합니다. 삭제했거나 값을 할당한 적이 없는 인덱스에서는 호출하지 않습니다.

`callback`은 요소의 값, 해당 요소의 인덱스 및 순회하고 있는 배열 세 가지 인수와 함께 호출됩니다.

`thisArg` 매개변수를 `some`에 제공한 경우 `callback`의 `this`로 사용됩니다. 그 외엔 {{jsxref("undefined")}}값을 사용합니다. 최종적으로 `callback`이 볼 수 있는 `this`의 값은 [함수가 볼 수 있는 `this`를 결정하는 평소 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)을 따릅니다.

`some`은 호출한 배열을 변형하지 않습니다.

`some`이 처리하는 요소의 범위는 `callback`의 첫 호출 전에 설정됩니다. `some` 호출 이후로 배열에 추가하는 요소는 `callback`이 방문하지 않습니다. 배열에 원래 있었지만 아직 방문하지 않은 요소가 `callback`에 의해 변경된 경우, 그 인덱스를 방문하는 시점의 값을 사용합니다. 삭제한 요소는 방문하지 않습니다.

## 예제

### 배열의 요소 테스트

다음 예제는 배열 내 요소 중 하나라도 10보다 큰지 판별합니다.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### 화살표 함수를 사용한 배열의 요소 테스트

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션)는 같은 테스트에 대해 더 짧은 구문을 제공합니다.

```js
[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true
```

### 값이 배열 내 존재하는지 확인

다음 예제는 요소가 하나라도 배열 내 존재하는 경우 `true`를 반환합니다.

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true
```

### 화살표 함수를 사용하여 값이 존재하는지 확인

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true
```

### 모든 값을 불린으로 변환

```js
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(a) {
    'use strict';

    var value = a;

    if (typeof value === 'string') {
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function(t) {
        return t === value;
    });
}

getBoolean(false); // false
getBoolean('false'); // false
getBoolean(1); // true
getBoolean('true'); // true
```

## 폴리필

`some`은 ECMA-262 표준 제5판에 추가됐습니다. 따라서 어떤 표준 구현체에서는 사용할 수 없을 수도 있습니다. 다른 모든 코드 이전에 아래 코드를 포함하면 지원하지 않는 환경에서도 `some`을 사용할 수 있습니다. 아래 알고리즘은 {{jsxref("Object")}}와 {{jsxref("TypeError")}}가 변형되지 않고, `fun.call`의 계산 값이 원래의 {{jsxref("Function.prototype.call()")}}과 같은 경우 ECMA-262 제5판이 명시한 것과 동일합니다.

```js
// ECMA-262 5판, 15.4.4.17항의 작성 과정
// 출처: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
