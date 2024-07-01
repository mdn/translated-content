---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

잘 알려진 심볼 **`Symbol.search`** 는 정규식과 일치하는 문자열 내의 인덱스를 반환하는 메서드를 명시합니다.
이 함수는 {{jsxref("String.prototype.search()")}} 메서드가 호출됩니다.

자세한 내용은 {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} 및
{{jsxref("String.prototype.search()")}}을 참조하세요.

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}

## 값

잘 알려진 심볼 `@@search`.

{{js_property_attributes(0, 0, 0)}}

## 예제

### 고유의 문자열 검색

```js
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}
console.log("foobar".search(new caseInsensitiveSearch("BaR"))); // 3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.search` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}
