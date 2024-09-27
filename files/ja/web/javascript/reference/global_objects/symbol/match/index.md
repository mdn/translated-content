---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Symbol.match`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.match` を表します。{{jsxref("String.prototype.match()")}} メソッドは第 1 引数に対して、入力文字列と現在のオブジェクトとの照合に使われるメソッドを、このシンボルで探します。このシンボルは、オブジェクトが[正規表現として扱われる](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)べきかどうかを決定するためにも使用されます。

詳しくは、[`RegExp.prototype[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) および {{jsxref("String.prototype.match()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/symbol-match.html", "taller")}}

## 値

ウェルノウンシンボル `Symbol.match` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

この関数は、[オブジェクトが正規表現の動作をするかどうか](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)を識別するためにも使用されます。たとえば、{{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}}, {{jsxref("String.prototype.includes()")}} メソッドは、最初の引数が正規表現であるかどうかを確認し、正規表現である場合は {{jsxref("TypeError")}} が発生します。ここで、`match` シンボルが `false`（または[偽値](/ja/docs/Glossary/Falsy)、ただし `undefined` でないもの）に設定されている場合、そのオブジェクトが正規表現オブジェクトとして使用されることを意図していないことを示します。

## 例

### `isRegExp` チェックを無効にする

以下のコードは {{jsxref("TypeError")}} を投げます。

```js
"/bar/".startsWith(/bar/);

// TypeError が発生。/bar/ が正規表現であり、
// Symbol.match が変更されていないため。
```

ただし、`Symbol.match` を `false` に設定すると、オブジェクトが[正規表現オブジェクトではない](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)ことを示します。結果として、`startsWith` と `endsWith` メソッドは、`TypeError` を発生させません。

```js
const re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.match` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
