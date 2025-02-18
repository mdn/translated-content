---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Symbol.search`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.search`입니다. {{jsxref("String.prototype.search()")}} 메서드는 현재 객체와 일치하는 문자열 내의 인덱스를 반환하는 메서드의 첫 번째 인수에서 이 심볼을 찾습니다.

자세한 내용은 [`RegExp.prototype[Symbol.search]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)와 {{jsxref("String.prototype.search()")}}을 참고하세요.

{{InteractiveExample("JavaScript Demo: Symbol.search")}}

```js interactive-example
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// Expected output: 3
```

## 값

잘 알려진 심볼 `Symbol.search`.

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

- [`core-js`에서의 `Symbol.search` 폴리필](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.search]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
