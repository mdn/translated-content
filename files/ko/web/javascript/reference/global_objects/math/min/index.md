---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
---

{{JSRef}}

**`Math.min()`** 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.

## Syntax

```js
    Math.min([value1[, value2[, ...]]])
```

### Parameters

- `value1, value2, ...`
  - : 숫자형

### Return value

주어진 숫자들 중 가장 작은 값. 만약 적어도 1개 이상의 인자값이 숫자형으로 변환이 불가능 한 경우 이 함수는 {{jsxref("NaN")}} 를 반환 합니다.

## Description

`min()` 함수는 `Math` 의 정적 메소드 이므로, 사용자가 생성한 `Math` 객체의 메소드로 호출하는 것이 아닌 항상 `Math.min()` 으로 호출되어야 합니다. (`Math` 는 생성자가 아닙니다).

만약 주어진 인자값이 없을 경우, {{jsxref("Infinity")}} 가 반환됩니다.

만약 적어도 1개 이상의 인자값이 숫자형으로 변환이 불가능 한 경우, {{jsxref("NaN")}} 가 반환됩니다.

## Examples

### Using `Math.min()`

아래 수식은 `x` 와`y` 중 작은 값을 찾아 `z` 에 할당 합니다.

```js
var x = 10,
  y = -20;
var z = Math.min(x, y);
```

### Clipping a value with `Math.min()`

`Math.min()` 함수는 때때로 값 제한, 즉 항상 기준 보다 작거나 같은 값으로 제한하는 용도로 사용됩니다. 예를 들면,

```js
var x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

위 코드는 다음과 같이 쓸 수 있습니다.

```js
var x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} 함수 또한 같은 방식으로 기준보다 크거나 같은 값으로 제한하는 용도로 사용할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Math.max()")}}
