---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
---

{{JSRef}}

**`indexOf()`** 메소드는 형식화 배열(typed array)에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다. 일치하는 값이 없으면 -1을 반환한다. 이 메소드는 {{jsxref("Array.prototype.indexOf()")}} 와 동일한 알고리즘을 가지고 있다*.* *TypedArray*는 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_%EA%B0%9D%EC%B2%B4) 중 하나이다.

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## 구문

```js
typedarray.indexOf(searchElement[, fromIndex = 0])
```

### 매개변수

- `searchElement`
  - : 배열에서 검색할 요소.
- `fromIndex`
  - : 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값. 만약 인덱스 번호가 배열의 길이와 동일하거나 더 크다면, 해당 요소를 찾을 수 없기 때문에 결과값으로 -1이 반환된다. 만약 인덱스 번호가 음수라면, 배열의 끝에서부터 하나씩 상쇄하며 계산한다. (예. fromIndex로 -1을 준 경우 가장 마지막 배열 요소의 값부터 검색을 시작. -2를 준 경우, 가장 마지막 배열 요소에서 하나 앞 요소부터 검색을 시작). 주의: 주어진 인덱스가 음수인 경우에도 배열은 여전히 앞에서부터 뒤로(왼쪽에서 오른쪽 순서로) 검색 된다. 만약 결과값으로 나온 인덱스가 0보다 작다면, 배열 전체가 찾아진 것이다. 디폴트 값 : 0 (전체 배열이 검색된다).

### 반환 결과

해당 배열에서 찾으려는 요소가 위치한 첫 번째 인덱스 값. 만약 찾으려는 요소가 없을 경우에는 -1을 반환.

## 설명

`indexOf` 메소드는 배열의 요소를 `searchElement` 와 비교할 때, [strict equality](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)(===, _트리플 equals_) 를 사용하여 자료형의 일치 여부까지 비교한다.

## 예시

```js
var uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
