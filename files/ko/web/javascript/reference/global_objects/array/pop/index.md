---
title: Array.prototype.pop()
short-title: pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`pop()`** 메서드는 {{jsxref("Array")}} 인스턴스의 메서드로,
배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
이 메서드는 배열의 길이를 변경합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.pop()")}}

```js interactive-example
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## 구문

```js-nolint
pop()
```

### 매개변수

없음.

### 반환 값

배열에서 제거한 요소. 빈 배열의 경우 {{jsxref("undefined")}} 를 반환합니다.

## 설명

`pop()` 메서드는 배열에서 마지막 요소를 제거하고 그 값을 호출자에게 반환합니다. 빈 배열에서 `pop()`을 호출하면 {{jsxref("undefined")}}를 반환합니다.

{{jsxref("Array.prototype.shift()")}}는 `pop()`과 유사한 동작을 하지만 배열의 첫 번째 요소에 적용됩니다.

`pop()` 메서드는 배열을 변경시키는 메서드입니다. `this`의 길이와 내용을 변경합니다. `this`의 값을 그대로 유지하면서 마지막 요소가 제거된 새 배열을 반환하고 싶다면 대신 [`arr.slice(0, -1)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)을 사용할 수 있습니다.

`pop()` 메서드는 [범용 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `this` 값이 `length` 속성과 정수 키 속성만 있으면 됩니다. 문자열도 배열과 유사하지만, 문자열은 불변이기 때문에 이 메서드를 문자열에 적용하는 것은 적절하지 않습니다.

## 예제

### 배열의 마지막 요소 제거

다음 코드는 4개의 요소가 있는 `myFish` 배열을 생성하고 마지막 요소를 제거합니다.

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### 배열이 아닌 객체에 pop() 호출하기

`pop()` 메서드는 `this`의 `length` 속성을 읽습니다. [정규화된 길이](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property)가 0이면 `length`는 다시 `0`으로 설정됩니다(이전에는 음수나 `undefined`일 수 있음). 그렇지 않으면 `length - 1` 위치의 속성이 반환되고 [삭제](/ko/docs/Web/JavaScript/Reference/Operators/delete)됩니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// length 속성이 없으므로, length는 0입니다
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

### 객체를 배열과 유사하게 사용하기

`push`와 `pop`은 의도적으로 범용 메서드로 설계되었으며, 다음 예제에서 볼 수 있듯이 이를 이용할 수 있습니다.

이 예제에서는 객체의 컬렉션을 저장하기 위해 배열을 만들지 않습니다. 대신, 컬렉션을 객체 자체에 저장하고 `Array.prototype.push`와 `Array.prototype.pop`에 `call`을 사용하여 마치 배열을 다루는 것처럼 속입니다.

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length는 요소가 추가될 때마다
    // 자동적으로 증가합니다.

    // push가 반환한 값인
    // 길이 속성의 새 값을 반환합니다.
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // obj.length은 요소가 제거될 때마다
    // 자동으로 감소합니다.

    // pop이 반환한 값인
    // 삭제된 요소를 반환합니다.
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection.length); // 2
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
