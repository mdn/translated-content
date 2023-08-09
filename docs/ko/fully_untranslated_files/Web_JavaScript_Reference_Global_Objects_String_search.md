---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

**`search()`** 메서드는 정규 표현식과 이 {{jsxref("String")}} 객체간에 같은 것을 찾기
위한 검색을 실행한다.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## 구문

```js
str.search(regexp);
```

### 매개변수

- `regexp`
  - : 정규 표현식 객체. non-RegExp 객체 `obj` 가 전달되면, 그것은 `new RegExp(obj)` 을 이용하여 {{jsxref("RegExp")}} 으로 암묵적으로 변환된다.

### 반환 값

정규표현식과 주어진 스트링간에 첫번째로 매치되는 것의 인덱스를 반환한다.
찾지 못하면 **-1** 를 반환한다.

## 설명

When you want to know whether a pattern is found and also its index in a string use `search()` (if you only want to know if it exists, use the similar {{jsxref("RegExp.prototype.test()", "test()")}} method on the RegExp prototype, which returns a boolean); for more information (but slower execution) use {{jsxref("String.prototype.match()", "match()")}} (similar to the regular expression {{jsxref("RegExp.prototype.exec()", "exec()")}} method).

## 예

### `search()를 이용하기`

The following example searches a string with 2 different regex objects to show a successful search (positive value) vs. an unsuccessful search (-1)

```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
