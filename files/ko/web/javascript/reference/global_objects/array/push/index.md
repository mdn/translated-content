---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`push()`** 메서드는 배열의 끝에
명시된 요소를 추가하고 배열의 새로운 길이를 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.push()")}}

```js interactive-example
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

## 구문

```js-nolint
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

### 매개변수

- `element1`, …, `elementN`
  - : 배열의 끝에 추가할 요소(들).

### 반환 값

이 메서드가 호출된 객체의 새로운 {{jsxref("Array/length", "length")}} 속성.

## 설명

`push` 메서드는 배열 끝에 여러 값을 추가합니다.

{{jsxref("Array.prototype.unshift()")}}는 `push()`의 동작과 비슷하지만 배열의 시작 부분에 적용됩니다.

`push()` 메서드는 [변이 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드mutating_method)입니다. 이 메서드는 `this`의 길이와 내용을 변경합니다. `this`의 값은 동일하게 유지하지만 끝에 요소가 추가된 새로운 배열을 반환하길 원한다면 [`arr.concat([element0, element1, /* ... ,*/ elementN])`]을 대신 사용할 수 있습니다. 그렇지 않으면 요소 자체가 배열인 경우 `concat()`의 동작으로 인해 요소가 단일 요소로 푸시되는 대신 분산된다는 점에 유의하시기 바랍니다.

`push()`는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드) 메서드입니다. 오직 `this` 값이 `length` 속성과 숫자 키 속성만 가지고 있을 것을 기대합니다. 문자열이 배열과 유사하긴 하지만, 문자열은 불변이기 때문에 이 메서드는 문자열에는 어울리지 않습니다.

## 예시

### 배열에 요소 추가하기

다음 코드는 2개의 요소를 가진 `sports` 배열을 생성하고 2개의 요소를 추가합니다. `total` 변수는 이 배열의 새로운 길이를 가집니다.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 두 개의 배열을 합치기

아래 예제는 {{jsxref("Operators/Spread_syntax", "spread syntax", "", 1)}}를 사용하여
두 번째 배열의 모든 요소를 첫 번째에 넣습니다.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 두 번째 배열을 첫 번째 배열로 합칩니다
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

{{jsxref("Array/concat", "concat()")}}을 사용해서도 두 배열을 합칠 수 있습니다.

### 배열이 아닌 객체에 push() 호출하기

`push()` 메서드는 `this`의 `length` 속성을 읽습니다. 그런 다음, `push()`에 전달된 인수들을 이용해 `this`의 `length`부터 각 인덱스에 값을 설정합니다. 마지막으로, 이전 `length`에 추가된 요소의 개수를 더하여 `length`를 설정합니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// length 속성이 없으므로 길이는 0입니다.
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### 유사 배열과 방식으로 객체 사용하기

위에서 언급했듯이 `push`는 의도적으로 범용이며, 이를 유리하게 사용할 수 있습니다.
이 예시에서 볼 수 있듯이 `Array.prototype.push`는
객체에서 잘 작동합니다.

객체 컬렉션을 저장하기 위해 배열을 만들지 않는다는 점에 유의하시기 바랍니다.
대신 객체 자체에 컬렉션을 저장하고 `Array.prototype.push`에서
`call`을 사용하여 메서드가 배열을 다루고 있다고 생각하도록 속입니다.
이는 JavaScript가 원하는 방식으로 실행 맥락을
설정할 수 있는 방식 덕분에 작동합니다.

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length는 요소가 추가 될때마다
    // 자동으로 증가합니다.
    [].push.call(this, elem);
  },
};

// 설명을 위해 빈 객체를 몇 개 추가해 보겠습니다.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

`obj`가 배열이 아님에도, 실제 배열을 다루는 것 처럼
`push` 메서드가 성공적으로 `obj`의 `length` 속성을
증가시킨 것을 주목하시기 바랍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [이 메서드를 고친 `core-js`에서의 `Array.prototype.push` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
