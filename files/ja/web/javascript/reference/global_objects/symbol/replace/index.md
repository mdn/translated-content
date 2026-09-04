---
title: Symbol.replace
short-title: replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.replace`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.replace` を表します。{{jsxref("String.prototype.replace()")}} および {{jsxref("String.prototype.replaceAll()")}} メソッドは第 1 引数で、現在のオブジェクトに一致する部分文字列を置き換えるメソッドを、このシンボルで探します。

詳しくは、[`RegExp.prototype[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)、{{jsxref("String.prototype.replace()")}}、{{jsxref("String.prototype.replaceAll()")}} を参照してください。

{{InteractiveExample("JavaScript デモ: Symbol.replace")}}

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// 予想される結果: "s/foo/bar/g"
```

## 値

ウェルノウンシンボル `Symbol.replace` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### Symbol.replace の使用

<!-- cSpell:ignore tball -->

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.replace` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
