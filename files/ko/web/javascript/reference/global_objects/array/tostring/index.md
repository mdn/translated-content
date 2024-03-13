---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

**`toString()`** 메서드는 지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/array-tostring.html")}}

## 구문

```js
arr.toString();
```

### 반환 값

배열을 표현하는 문자열을 반환합니다.

## 설명

{{jsxref("Array")}} 객체는 {{jsxref("Object")}}의 `toString` 메서드를 재정의(override)합니다. Array 객체에 대해, `toString` 메서드는 배열을 합쳐(join) 쉼표로 구분된 각 배열 요소를 포함하는 문자열 하나를 반환합니다. 예를 들어, 다음 코드는 배열을 생성하며 그 배열을 문자열로 변환하기 위해 `toString`을 사용합니다.

```js
var monthNames = ["Jan", "Feb", "Mar", "Apr"];
var myVar = monthNames.toString(); // 'Jan,Feb,Mar,Apr'을 myVar에 할당.
```

JavaScript는 배열이 텍스트 값으로 표현되거나 배열이 문자열 연결(concatenation)에 참조될 때 자동으로 `toString` 메서드를 호출합니다.

### ECMAScript 5 의미

JavaScript 1.8.5 (Firefox 4)부터, ECMAScript 제5판 의미(semantics)와 일치하는 `toString()` 메서드는 일반(generic) 메서드이므로 모든 객체에 사용될 수 있습니다. 객체가 `join()` 메서드가 있는 경우, 호출되어 그 값이 반환됩니다. 그렇지 않으면 {{jsxref("Object.prototype.toString()")}}가 호출되어 그 결과값이 반환됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
