---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

**`slice()`** 메서드는 어떤 배열의 `begin` 부터 `end` 까지(`end` 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## 구문

```js
    arr.slice([begin[, end]])
```

### 매개변수

- `begin` {{optional_inline}}
  - : 0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미합니다.
    음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. `slice(-2)` 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.
    `begin`이 `undefined`인 경우에는, 0번 인덱스부터 `slice` 합니다.
    `begin`이 배열의 길이보다 큰 경우에는, 빈 배열을 반환합니다.
- `end` {{optional_inline}}
  - : 추출을 종료 할 0 기준 인덱스입니다. `slice` 는 `end` 인덱스를 제외하고 추출합니다.
    예를 들어, `slice(1,4)`는 두번째 요소부터 네번째 요소까지 (1, 2 및 3을 인덱스로 하는 요소) 추출합니다.
    음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 예를들어 `slice(2,-1)` 는 세번째부터 끝에서 두번째 요소까지 추출합니다.
    `end`가 생략되면 `slice()`는 배열의 끝까지(`arr.length`) 추출합니다.

만약 `end` 값이 배열의 길이보다 크다면, `slice()`는 배열의 끝까지(`arr.length`) 추출합니다.

### 반환 값

추출한 요소를 포함한 새로운 배열.

## 설명

`slice()`는 원본을 대체하지 않습니다. 원본 배열에서 요소의 얕은 복사본을 반환합니다. 원본 배열의 요소는 다음과 같이 반환 된 배열에 복사됩니다:

- 객체 참조(및 실제 객체가 아님)의 경우, `slice()`는 객체 참조를 새 배열로 복사합니다. 원본 배열과 새 배열은 모두 동일한 객체를 참조합니다. 참조 된 객체가 변경되면 변경 내용은 새 배열과 원래 배열 모두에서 볼 수 있습니다.
- {{jsxref ("String")}} 및 {{jsxref("Number")}} 객체가 아닌 문자열과 숫자의 경우 `slice()`는 문자열과 숫자를 새 배열에 복사합니다. 한 배열에서 문자열이나 숫자를 변경해도 다른 배열에는 영향을 주지 않습니다.

새 요소를 두 배열 중 하나에 추가해도 다른 배열은 영향을 받지 않습니다.

## 예제

### 기존 배열의 일부 반환

```js
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### `slice` 사용하기

다음 예제에서 `slice()`는 `myCar`에서 `newCar`라는 새 배열을 만듭니다. 두 가지 모두 `myHonda` 객체에 대한 참조를 포함합니다. `myHonda`의 색상이 자주색으로 변경되면 두 배열 모두 변경 사항을 반영합니다.

```js
// Using slice, create newCar from myCar.
let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = " + JSON.stringify(myCar));
console.log("newCar = " + JSON.stringify(newCar));
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
```

스크립트를 실행하면 다음과 같은 기록을 남깁니다.

```js
    myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
             'cherry condition', 'purchased 1997']
    newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
    myCar[0].color = red
    newCar[0].color = red
    The new color of my Honda is purple
    myCar[0].color = purple
    newCar[0].color = purple
```

### 배열형 객체

`slice()` 메서드를 호출하여 배열형 객체와 콜렉션을 새로운 `Array`로 변환할 수 있습니다. 단순히 {{jsxref("Function.prototype.bind()")}}를 사용해 객체에 `slice()`를 바인딩 하면 됩니다. 대표적인 "배열형 객체"의 예시는 함수 내의 {{jsxref("Functions/arguments", "arguments")}}입니다.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
```

{{jsxref("Function.prototype.call()")}} 메서드를 사용해서도 바인딩을 할 수 있으며, `Array.prototype.slice.call` 대신 더 짧게 `[].slice.call`로 작성할 수도 있습니다.

아무튼, 다음과 같이 {{jsxref("Function.prototype.bind", "bind()")}}를 사용해 줄일 수 있습니다.

```js
let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
