---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef}}

**`trimEnd()`** 메서드는 문자열 끝부분의 공백을 제거합니다.
또 해당 메서드는 `trimRight()` 라는 별칭으로 호출이 가능합니다.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## 구문

```js
trimEnd();

trimRight();
```

### 반환값

`str` 에서 (오른쪽)끝 공백이 제거된 새 문자열을 반환합니다.
`str` 에 공백이 없을시에도 에러가 발생하지 않고 여전히 새 문자열(본질적으로 `str` 의 복사본)이 반환됩니다.

### 별칭

{{jsxref("String.prototype.padEnd")}} 표준 메서드 이름과 같은 함수의 일관성을 위해서 `trimEnd` 가 되었습니다. 그러나,
웹 호환성을 위해서 `trimEnd` 는 `trimRight` 이라는 별칭을 가집니다. 일부 엔진에서 이것은 다음 예시를 의미합니다.

```js
String.prototype.trimRight.name === "trimEnd";
```

## 예제

### trimEnd() 사용

다음 예제는 `'   foo'` 문자열을 표시합니다.

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `String.prototype.trimEnd` 의 폴리필은 여기를 [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) 참고하세요.
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
