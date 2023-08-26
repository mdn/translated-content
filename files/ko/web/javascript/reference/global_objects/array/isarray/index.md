---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

**`Array.isArray()`** 메서드는 인자가 {{jsxref("Array")}}인지 판별합니다.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

## 구문

```js
Array.isArray(obj);
```

### 매개변수

- `obj`
  - : 검사할 객체.

### 반환 값

객체가 {{jsxref("Array")}}라면 `true`, 아니라면 `false`.

## 설명

객체가 {{jsxref("Array")}}라면 `true`를 반환하고, 아니라면 `false`를 반환합니다.

자세한 정보는 ["Determining with absolute accuracy whether or not a JavaScript object is an array"](http://web.mit.edu/jwalden/www/isArray.html)(자바스크립트 객체가 배열인지 정확히 판별하는 방법) 문서를 참조하세요.

## 예제

```js
// 모두 true 반환
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Array.prototype은 스스로도 배열입니다
Array.isArray(Array.prototype);

// 모두 false 반환
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` vs `isArray`

`Array` 객체를 판별할 때, `Array.isArray`는 `iframe`을 통해서도 작동하기 때문에 `instanceof` 보다 적합합니다.

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// 올바른 Array 판별
Array.isArray(arr); // true
// iframe을 통해서 작동하지 않기 때문에 올바르지 않은 방법
arr instanceof Array; // false
```

## 폴리필

아래 코드를 실행하면 지원하지 않는 환경에서도 `Array.isArray()`를 사용할 수 있습니다.

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{jsxref("Array")}}
