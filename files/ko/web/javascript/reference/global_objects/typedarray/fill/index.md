---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
---

{{JSRef}}

**`fill()`** 메서드는 배열의 모든 요소를 지정한 시작 인덱스부터 종료 인덱스까지 정적인 값으로 채웁니다. `fill()`은 {{jsxref("Array.prototype.fill()")}}과 동일한 알고리즘을 가지고 있습니다. TypedArray 는 [typed array types](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 이곳에 있는 것 중 하나 입니다.

{{EmbedInteractiveExample("pages/js/typedarray-fill.html")}}

## 구문

```js
typedarray.fill(value[, start = 0[, end = this.length]])
```

### 매개변수

- `value`
  - : 배열에 채워넣을 값.
- `start`
  - : 선택사항. 시작 위치. 기본값은 0.
- `end`
  - : 선택사항. 종료 위치 (종료위치를 포함하지않습니다. 즉, end -1 까지만 해당됩니다.). 기본값 this.length(배열의 길이).

## 설명

start 와 end 사이에 요소들을 채웁니다.

**`fill`** 메소드는 value, start 그리고 and 3개의 매개변수를 요구합니다. start 와 end 매개변수는 선택사항이며 기본값은 0 과 지정한 배열객체의 길이값 입니다.

만약 start 매개변수가 음수이면, start 의 값은 배열의 길이값을 합한 결과가 시작지점이 되고, 만약 end 가 음수라면, end 매개변수와 배열의 길이값을 합한 결과가 종료지점이 됩니다.

## 예제

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.fill()")}}
