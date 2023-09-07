---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`dotAll`** 속성은 `s` 플래그가 정규식과 함께 사용되는지 여부를 나타냅니다. `dotAll`은 개별 정규식 인스턴스의 읽기 전용 속성입니다.

{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}

## 설명

`dotAll`의 값은 {{JSxRef("Boolean")}}으로 `s` 플래그가 사용된 경우 `true`, 그렇지 않으면 `false`입니다.
`s` 플래그는 점 특수 문자(`.`)가 문자열의 다음 줄 종결자("newline") 문자와 추가로 일치해야 함을 나타냅니다.
그렇지 않으면 일치하지 않습니다.

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

이것은 사실상 점이 유니코드 BMP(Basic Multilingual Plane)의 모든 문자와 일치한다는 것을 의미합니다. 별 기호와 일치하도록 하려면 `u`(유니코드) 플래그를 사용해야 합니다. 두 플래그를 함께 사용하면 예외 없이 점이 모든 유니코드 문자와 일치하도록 만들 수 있습니다.

`dotAll`의 set 접근자는 `undefined`, 즉 정의되지 않았습니다. 이 속성은 직접 변경할 수 없습니다.

## 예제

### `dotAll` 사용하기

```js
const str1 = "bar\nexample foo example";

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // foo example

const str2 = "bar\nexample foo example";

const regex2 = /bar.example/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// bar
// example foo example
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- [Polyfill of `dotAll` `RegExp` flag in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
