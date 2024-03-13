---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
---

{{JSRef}}

**`Math.imul()`** 함수는 C 언어와 같은 양식으로 2개 파라메터의 32-bit 곱셈 결과를 리턴합니다.

## 문법

```js
Math.imul(a, b);
```

### 파라메터

- `a`
  - : 첫 번째 숫자.
- `b`
  - : 두 번째 숫자.

## 설명

`Math.imul()` 를 쓰면 C 언어와 같은 양식의 빠른 32-bit 정수 곱셈이 가능합니다. 이 기능은 [Emscripten](http://en.wikipedia.org/wiki/Emscripten) 같은 프로젝트에 유용합니다. `imul()` 이 `Math` 객체의 정적 메소드이기 때문에, `Math 객체를 직접 만들어서 사용하지 않고 (Math 는 생성자가 아닙니다), Math.imul()` 같은 형태로 사용합니다.

## 예제

### `Math.imul() 사용법`

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Polyfill

다음과 같은 함수로 Math.imul() 을 흉내낼 수 있습니다.

```js
Math.imul =
  Math.imul ||
  function (a, b) {
    var ah = (a >>> 16) & 0xffff;
    var al = a & 0xffff;
    var bh = (b >>> 16) & 0xffff;
    var bl = b & 0xffff;
    // the shift by 0 fixes the sign on the high part
    // the final |0 converts the unsigned value into a signed value
    return (al * bl + (((ah * bl + al * bh) << 16) >>> 0)) | 0;
  };
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
