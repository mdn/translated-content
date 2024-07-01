---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** 메서드는 주어진 값과 일치하는 부분을 `fromIndex`로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 일치하는 부분을 찾을 수 없으면 `-1`을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## 구문

```js
str.lastIndexOf(searchValue[, fromIndex])
```

### 매개변수

- `searchValue`
  - : 탐색할 문자열. 빈 값을 제공할 경우 `fromIndex`를 반환합니다.
- `fromIndex` {{optional_inline}}
  - : 탐색의 시작점으로 사용할 인덱스. 기본값은 `+Infinity`입니다. `fromIndex >= str.length`인 경우 모든 문자열을 탐색합니다. `fromIndex < 0`인 경우엔 `0`을 지정한 것과 동일합니다.

### 반환 값

문자열 내에서 searchValue가 마지막으로 등장하는 인덱스. 등장하지 않으면 `-1`.

## 설명

문자열의 문자는 왼쪽에서 오른쪽으로 인덱스를 매깁니다. 첫 번째 문자의 인덱스는 `0`이며, 마지막 문자의 인덱스는 `str.length -1`입니다.

```js
"canal".lastIndexOf("a"); //  3 반환
"canal".lastIndexOf("a", 2); //  1 반환
"canal".lastIndexOf("a", 0); // -1 반환
"canal".lastIndexOf("x"); // -1 반환
"canal".lastIndexOf("c", -5); //  0 반환
"canal".lastIndexOf("c", 0); //  0 반환
"canal".lastIndexOf(""); //  5 반환
"canal".lastIndexOf("", 2); //  2 반환
```

> **참고:** `'abab'.lastIndexOf('ab', 2)`는 0이 아니고 2를 반환합니다. `fromIndex`는 탐색의 시작점만 제한하기 때문입니다.

### 대소문자 구분

`lastIndexOf()` 메서드는 대소문자를 구분합니다. 예를 들어, 아래 예제는 `-1`을 반환합니다.

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // -1 반환
```

## 예제

### `indexOf()`와 `lastIndexOf()` 사용하기

아래 예제는 문자열 `"Brave new world"` 내에서 특정 값의 위치를 확인하기 위해 {{jsxref("String.prototype.indexOf()", "indexOf()")}}와 `lastIndexOf()`를 사용합니다.

```js
let anyString = "Brave new world";

console.log("시작점으로부터 처음 만나는 w의 위치는 " + anyString.indexOf("w"));
// logs 8
console.log(
  "끝점으로부터 처음 만나는 w의 위치는 " + anyString.lastIndexOf("w"),
);
// logs 10
console.log(
  '시작점으로부터 처음 만나는 "new"의 위치는 ' + anyString.indexOf("new"),
);
// logs 6
console.log(
  '끝점으로부터 처음 만나는 "new"의 위치는 ' + anyString.lastIndexOf("new"),
);
// logs 6
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
