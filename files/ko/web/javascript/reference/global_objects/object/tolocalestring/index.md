---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** 메서드는 객체로 된 문자열을 반환합니다. 이 메서드는 지역별로 다른 객체로 재정의되어 표시됩니다.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## 구문

```js
obj.toLocaleString();
```

### 반환 값

객체를 나타내는 문자열.

## 설명

{{jsxref("Object")}}의 `toLocaleString`은 {{jsxref("Object.toString", "toString()")}}을 호출 한 결과를 반환합니다.

이 함수는 모든 객체가 사용할 수는 없지만 객체에 일반 `toLocaleString` 메소드를 제공하기 위해 제공됩니다. 아래 목록을 참조하십시오.

### `toLocaleString()`을 재정의하는 객체

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.toString()")}}
