---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef}}

**`pop()`** 메서드는 배열에서 **마지막** 요소를 제거하고 그 요소를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## 구문

```js
arr.pop();
```

### 반환 값

배열에서 제거한 요소. 빈 배열의 경우 {{jsxref("undefined")}} 를 반환합니다.

## 설명

`pop` 메서드는 배열에서 마지막 요소를 제거하여 그 값을 호출자(caller)에게 반환합니다.

`pop`은 일부러 일반(generic)입니다; 이 메서드는 배열을 닮은 객체에 {{jsxref("Function.call", "호출", "", 1)}} 또는 {{jsxref("Function.apply", "적용", "", 1)}}될 수 있습니다. 0부터 시작하는 일련의 연속되는 숫자 속성 내 마지막을 반영하는 `length` 속성을 포함하지 않는 객체는 어떤 의미 있는 방식으로도 행동하지 않을 수 있습니다.

빈 배열에 `pop()`을 호출하면, {{jsxref("undefined")}}를 반환합니다.

## 예제

### 배열의 마지막 요소 제거

다음 코드는 요소 넷을 포함하는 `myFish` 배열을 생성하고 그 마지막 요소를 제거합니다.

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
