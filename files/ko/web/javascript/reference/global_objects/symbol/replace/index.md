---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
l10n:
  sourceCommit: da480cf36e0b3f6fa7f3bb8aaa926bbbd045f6c5
---

{{JSRef}}

**`Symbol.replace`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)인 `@@replace`를 나타냅니다. {{jsxref("String.prototype.replace()")}} 및 {{jsxref("String.prototype.replaceAll()")}} 메서드는 현재 객체와 일치하는 문자열 일부를 대체하는 첫 번째 인수에서 이 심볼을 찾습니다.

자세한 내용은 [`RegExp.prototype[@@replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace), {{jsxref("String.prototype.replace()")}} 및 {{jsxref("String.prototype.replaceAll()")}}를 참고하시기 바랍니다요.

{{EmbedInteractiveExample("pages/js/symbol-replace.html")}}

## 값

잘 알려진 심볼 `@@replace`.

{{js_property_attributes(0, 0, 0)}}

## 예제

### Symbol.replace 사용하기

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo"))); // "#!@?tball"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.replace` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[@@replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
