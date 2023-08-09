---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

**`copyWithin()`** 메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## 구문

```js
    arr.copyWithin(target[, start[, end]])
```

### 매개변수

- `target`

  - : 복사한 시퀀스(값)를 넣을 위치를 가리키는 0 기반 인덱스. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.

    `target`이 `arr.length`보다 크거나 같으면 아무것도 복사하지 않습니다. `target`이 `start` 이후라면 복사한 시퀀스를 `arr.length`에 맞춰 자릅니다.

- `start` {{optional_inline}}

  - : 복사를 시작할 위치를 가리키는 0 기반 인덱스. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.

    기본값은 0으로, `start`를 지정하지 않으면 배열의 처음부터 복사합니다.

- `end` {{optional_inline}}

  - : 복사를 끝낼 위치를 가리키는 0 기반 인덱스. `copyWithin`은 `end` 인덱스 이전까지 복사하므로 `end` 인덱스가 가리키는 요소는 제외합니다. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.

    기본값은 `arr.length`로, `end`를 지정하지 않으면 배열의 끝까지 복사합니다.

### 반환 값

수정한 배열.

## 설명

`copyWithin`은 C와 C++의 `memmove`처럼 작동하고, 복사와 대입이 하나의 연산에서 이루어지므로 {{jsxref("Array")}}의 데이터를 이동할 때 사용할 수 있는 고성능 메서드입니다. {{jsxref("TypedArray.prototype.copyWithin()", "TypedArray")}}의 동명 메서드에서 이 특징이 두드러집니다. 붙여넣은 시퀀스의 위치가 복사한 범위와 겹치더라도 최종 결과는 원본 배열에서 복사한 것과 같습니다.

`copyWithin` 함수는 제네릭 함수로, `this` 값이 {{jsxref("Array")}} 객체일 필요는 없습니다.

`copyWithin` 메서드는 변경자 메서드로, `this`의 길이는 바꾸지 않지만 내용을 바꾸며 필요하다면 새로운 속성을 생성합니다.

## 예제

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 TypedArray는 Array의 하위 클래스
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 아직 ES2015를 사용할 수 없는 환경에서
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## 폴리필

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function (target, start /*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-8.
    var relativeTarget = target >> 0;

    var to =
      relativeTarget < 0
        ? Math.max(len + relativeTarget, 0)
        : Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start >> 0;

    var from =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from < to && to < from + count) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count > 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
