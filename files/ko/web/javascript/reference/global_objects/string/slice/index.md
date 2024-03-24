---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
---

{{JSRef}}

**`slice()`** 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-slice.html")}}

## 문법

```js
str.slice(beginIndex[, endIndex])
```

### 매개변수

<dl><dt><code>beginIndex</code></dt><dd>추출 시작점인 0부터 시작하는 인덱스입니다. 만약 음수라면, beginIndex는 <code>strLength(문자열 길이) + beginIndex</code>로 취급됩니다. (예를 들어 <code>beginIndex</code>가 -3이면 시작점은 <code>strLength - 3</code>).</dd><dd>만약 <code>beginIndex</code>가 <code>strLength</code> 보다 크거나 같은 경우, <code>slice()</code>는 빈 문자열을 반환합니다.</dd><dt><code>endIndex</code>{{optional_inline}}</dt><dd>0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됩니다. 인덱스 위치의 문자는 추출에 포함되지 않습니다.</dd><dd>만약 <code>endIndex</code>가 생략된다면, <code>slice()</code>는 문자열 마지막까지 추출합니다. 만약 음수라면, endIndex는 <code>strLength(문자열 길이) + endIndex</code> 로 취급됩니다(예를 들어 <code>endIndex</code>가 -3이면 종료점은 <code>strLength - 3</code>).</dd></dl>

### 반환 값

문자열의 추출된 부분을 담는 새로운 문자열이 반환됩니다.

## 설명

`slice()`는 문자열로부터 텍스트를 추출하고 새 문자열을 반환합니다. 문자열의 변경은 다른 문자열에 영향을 미치지 않습니다.

`slice()`는 `endIndex`를 포함하지 않고 추출합니다. `str.slice(1, 4)`는 두 번째 문자부터 네 번째 문자까지 추출합니다 (1, 2, 3 인덱스 문자).

`str.slice(2, -1)`는 세 번째 문자부터 문자열의 마지막에서 두 번째 문자까지 추출합니다.

## 예시

### `slice()`를 사용하여 새 문자열 생성하기

아래 예시는 새 문자열을 생성하기 위해 `slice()`를 사용합니다.

```js
var str1 = "The morning is upon us.", // the length of str1 is 23.
  str2 = str1.slice(1, 8),
  str3 = str1.slice(4, -2),
  str4 = str1.slice(12),
  str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""
```

### 음수 인덱스로 `slice()` 사용하기

아래 예시는 `slice()`에 음수 인덱스를 사용합니다.

```js
var str = "The morning is upon us.";
str.slice(-3); // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1); // returns 'The morning is upon us'
```

아래의 예시는 시작 인덱스를 찾기 위해 문자열의 끝에서부터 역방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 문자열의 시작에서부터 정방향으로 `16`개를 셉니다.

```js
console.log(str.slice(-11, 16)); // => "is u";
```

아래에서는 시작 인덱스를 찾기 위해 문자열의 처음부터 정방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 끝에서부터 `7`개를 셉니다.

```js
console.log(str.slice(11, -7)); // => "is u";
```

이 인수는 끝에서부터 5로 역순으로 계산하여 시작 인덱스를 찾은 다음 끝에서부터 1을 거쳐 끝 인덱스를 찾습니다.

```js
console.log(str.slice(-5, -1)); // => "n us";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
