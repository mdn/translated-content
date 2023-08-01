---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{JSRef}}

**`Symbol.split`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@split`을 나타냅니다. {{jsxref("String.prototype.split()")}} 메서드는 현재 객체와 일치하는 인덱스에서 문자열을 분할하는 메서드의 첫 번째 인수에서 이 심볼을 찾습니다.

보다 상세한 내용은 [`RegExp.prototype[@@split]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) 및 {{jsxref("String.prototype.split()")}}를 참조하시기 바랍니다.

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}

## 값

잘 알려진 심볼 `@@split`.

{{js_property_attributes(0, 0, 0)}}

## 예제

### 사용자 정의 역분할

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.split` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[@@split]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
