---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

{{JSRef}}

**`shift()`** 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## 구문

```js
arr.shift();
```

### 반환 값

배열에서 제거한 요소. 빈 배열의 경우 {{jsxref("undefined")}} 를 반환합니다.

## 설명

`shift` 메서드는 0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당깁니다. 그리고 제거된 값을 반환 합니다. 만약 배열의 {{jsxref("Array.length", "length")}}가 0이라면 {{jsxref("undefined")}}를 리턴 합니다.

`shift`는 의도적인 일반형태로써; 이 메서드는 배열과 유사한 형태의 객체에서 {{jsxref("Function.call", "호출", "", 1)}} 하거나 {{jsxref("Function.apply", "적용", "", 1)}} 할 수 있습니다. 연속된 일련의 마지막 항목을 나타내는 길이 속성을 가지고 있지 않은 객체의 제로베이스 수치 속성에는 의미 있는 작동을 하지 않을 수 있습니다. (_Objects which do not contain a `length` property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner_.)

## 예제

### 배열에서 한 요소 제거하기

아래 코드는 `myFish` 라는 배열에서 첫번째 요소를 제거 하기 전과 후를 보여 줍니다. 그리고 제거된 요소도 보여줍니다.

```js
var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before: " + myFish);
// "제거전 myFish 배열: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log("myFish after: " + myFish);
// "제거후 myFish 배열: clown,mandarin,surgeon"

console.log("Removed this element: " + shifted);
// "제거된 배열 요소: angel"
```

### while 반복문 안에서 shift() 사용하기

shift() 메서드는 while 문의 조건으로 사용되기도 합니다. 아래 코드에서는 while 문을 한번 돌 때 마다 배열의 다음 요소를 제거하고, 이는 빈 배열이 될 때까지 반복됩니다.

```js
var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while ((i = names.shift()) !== undefined) {
  console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
