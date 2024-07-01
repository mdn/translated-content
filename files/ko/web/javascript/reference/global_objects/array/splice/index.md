---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

{{JSRef}}

**`splice()`** 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## 구문

```js
    array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

### 매개변수

- `start`
  - : 배열의 변경을 시작할 인덱스입니다. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됩니다.
    음수인 경우 배열의 끝에서부터 요소를 세어나갑니다(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 `array.length - n`번째 인덱스와 같음). 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됩니다.
- `deleteCount` {{optional_inline}}
  - : 배열에서 제거할 요소의 수입니다.
    `deleteCount`를 생략하거나 값이 `array.length - start`보다 크면 `start`부터의 모든 요소를 제거합니다.
    `deleteCount`가 0 이하라면 어떤 요소도 제거하지 않습니다. 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.
- `item1, item2, <em>...</em>` {{optional_inline}}
  - : 배열에 추가할 요소입니다. 아무 요소도 지정하지 않으면 `splice()`는 요소를 제거하기만 합니다.

### 반환 값

제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다. 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.

## 설명

만약 제거할 요소의 수와 추가할 요소의 수가 다른 경우 배열의 길이는 달라집니다.

## 예제

### 하나도 제거하지 않고, 2번 인덱스에 "drum" 추가

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### 하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### 3번 인덱스에서 한 개 요소 제거

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

### 2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가

```js
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### 0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가

```js
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### 2번 인덱스에서 두 개 요소 제거

```js
var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### -2번 인덱스에서 한 개 요소 제거

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### 2번 인덱스를 포함해서 이후의 모든 요소 제거

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} — 배열 끝에 요소를 추가하거나 제거
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} — 배열 처음에 요소를 추가하거나 제거
- {{jsxref("Array.prototype.concat()", "concat()")}} — 배열과 배열 또는 값을 합친 새로운 배열 반환
