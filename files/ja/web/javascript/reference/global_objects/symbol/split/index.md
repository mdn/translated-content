---
title: Symbol.split
short-title: split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.split`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.split` を表します。{{jsxref("String.prototype.split()")}} メソッドは、最初の引数でこのシンボルを検索し、現在のオブジェクトと一致するインデックスで文字列を分割するメソッドを呼び出します。

詳しくは、[`RegExp.prototype[Symbol.split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) と {{jsxref("String.prototype.split()")}} を参照してください。

{{InteractiveExample("JavaScript デモ: Symbol.split")}}

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// 予想される結果: "foo/bar"
```

## 値

ウェルノウンシンボル `Symbol.split` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### 独自の逆方向の分割

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// 予想される結果: [ "dust", "the", "bites", "one", "Another" ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.split` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
