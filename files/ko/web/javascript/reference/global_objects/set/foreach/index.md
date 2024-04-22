---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
---

{{JSRef}}

**`forEach()`** 메서드는 주어진 함수를 `Set` 요소 각각에 대해 삽입 순서대로 실행합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## 구문

```js
mySet.forEach(callback[, thisArg])
```

### 매개변수

<dl><dt><code>callback</code></dt><dd>각 요소에 대해 실행할 함수. 다음 세 가지 인수를 받습니다.</dd><dd><dl><dt><code>currentValue</code>, <code>currentKey</code></dt><dd>처리할 현재 요소. <code>Set</code>은 키를 갖지 않으므로 두 인수 모두에 값을 전달합니다.</dd><dt><code>set</code></dt><dd><code>forEach()</code>를 호출한 <code>Set</code>.</dd></dl></dd><dt><code>thisArg</code></dt><dd><code>callback</code>을 실행할 때 <code>this</code>로 사용할 값.</dd></dl>

### 반환 값

{{jsxref("undefined")}}.

## 설명

`forEach()` 메서드는 주어진 `callback`을 `Set`에 존재하는 요소에 대해 한 번씩 실행합니다. 삭제한 값에 대해선 실행하지 않습니다. 그러나 존재하되 값이 {{jsxref("undefined")}}인 경우엔 실행합니다.

`callback`은 다음 세 인수와 함께 호출됩니다.

- **요소 값**
- **요소 키**
- **순회 중인 `Set` 객체**

그러나 `Set`은 키 값을 사용하지 않으므로, 처음 두 개의 매개변수 모두 **요소 값**을 받습니다. 이는 {{jsxref("Map.foreach", "Map")}}과 {{jsxref("Array.forEach","Array")}}에서 사용하는 `forEach()`와 동일한 형태를 유지하기 위해서입니다.

`thisArg` 매개변수를 `forEach()`에 제공한 경우 `callback`을 호출할 때 전달해 `this`의 값으로 쓰입니다. 전달하지 않으면 `undefined`를 사용하며, 최종 `this` 값은 {{jsxref("Operators/this", "함수의 <code>this</code>를 결정하는 평소 규칙", "", 0)}}을 따릅니다.

`forEach()`는 각각의 값을 한 번씩 방문하지만, 순회를 끝내기 전에 제거하고 다시 추가한 값은 예외입니다. 방문하기 전 제거한 값에 대해서는 `callback`을 호출하지 않습니다. `forEach()`가 끝나기 전 추가한 요소는 방문합니다.

`forEach()`는 `Set` 객체의 요소에 대해 `callback`을 실행만 하며 값을 반환하지는 않습니다.

## 예제

### `Set`의 내용물 기록하기

다음 코드는 `Set`의 요소 각각을 새로운 줄에 기록합니다.

```js
function logSetElements(value1, value2, set) {
  console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// 콘솔 로그:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
