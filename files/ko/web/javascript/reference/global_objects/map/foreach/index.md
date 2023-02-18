---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`forEach()`** 메서드는 삽입 순서에 따라 `Map` 객체의 각 키/값 쌍마다 한 번씩 제공된 함수를 실행합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## 구문

```js-nolint
// Arrow function
forEach(() => { /* … */ } )
forEach((value) => { /* … */ } )
forEach((value, key) => { /* … */ } )
forEach((value, key, map) => { /* … */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function() { /* … */ })
forEach(function(value) { /* … */ })
forEach(function(value, key) { /* … */ })
forEach(function(value, key, map) { /* … */ })
forEach(function(value, key, map) { /* … */ }, thisArg)
```

### 매개변수

- `callbackFn`
  - : 맵의 각 항목에 대해 실행할 함수입니다. 다음 인자가 필요합니다.
    - `value` {{Optional_Inline}}
      - : 각 반복의 값입니다.
    - `key` {{Optional_Inline}}
      - : 각 반복의 키입니다.
    - `map` {{Optional_Inline}}
      - : 반복되는 map입니다.
- `thisArg` {{Optional_Inline}}
  - : `callback`을 실행하고 있을 때 `this`로 사용하는 값

### 반환 값

{{jsxref("undefined")}}.

## 설명

`forEach` 메서드는 실제로 존재하는 맵의 각 키에 대해 제공된 `callback`을 한 번씩 실행합니다. 삭제된 키에 대해서는
호출되지 않습니다. 그러나 값은 존재하지만 `undefined`값일 경우에는 `callback`이 실행됩니다.

`callback`은 **인자 3개**와 함께 호출됩니다.

- 항목의 `value`
- 항목의 `key`
- 순회하고 있는 **`Map` 객체**

`thisArg`가 `forEach`의 매개 변수로 제공되면 호출 시 `this` 값으로 사용하기 위해 `callback`에 전달됩니다.
그렇지 않으면 `undefined` 값이 `this` 값으로 사용되도록 전달됩니다. `callback`이 궁극적으로 관찰할 수 있는
`this` 값은 [함수가 보는 `this`를 결정하기 위한 일반적인 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다.

`forEach`가 완료되기 전에 삭제했다가 다시 추가한 경우를 제외하고 각 값은 한 번씩 방문합니다. 방문하기 전에 삭제된 값에 대해서는
`callback`이 호출되지 않습니다. `forEach`가 완료되기 전에 추가된 새 값은 나중에 방문합니다.

## 예제

### Map 객체의 내용을 출력하기

다음 코드는 `Map` 객체에서 각 요소의 내용을 한 줄의 로그로 남깁니다.

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);
// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
