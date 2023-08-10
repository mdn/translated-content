---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef}}

**`search()`** メソッドは、正規表現とこの {{jsxref("String")}} オブジェクトが一致するかどうかを調べます。

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## 構文

```js-nolint
search(regexp)
```

### 引数

- `regexp`

  - : 正規表現オブジェクト、または [`Symbol.search`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search) メソッドを持つ任意のオブジェクトです。

    `regexp` が `RegExp` オブジェクトでなく、`Symbol.search` メソッドもなかった場合は、{{jsxref("RegExp")}} オブジェクトに `new RegExp(regexp)` を使用して暗黙的に変換されます。

### 返値

与えられた文字列と正規表現の間で最初に一致した箇所のインデックスを返します。一致しなかった場合は `-1` を返します。

## 解説

`String.prototype.search()` 自体の実装はとてもシンプルです。引数の文字列を最初の引数として `Symbol.search` メソッドを呼び出すだけです。実際の実装は [`RegExp.prototype[@@search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search) から来ています。

`regexp` の `g` フラグは `search()` の結果には影響がなく、検索は常に正規表現の `lastIndex` が 0 である可能用に行われます。`search()` の動作についての詳しい情報は、[`RegExp.prototype[@@search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search) を参照してください。

パターンが見つかるかどうかを知りたい場合、かつ、文字列内のインデックスを知りたい場合は、`search()` を使用してください。

- パターンが存在するかどうかを知りたいだけであれば、{{jsxref("RegExp.prototype.test()")}} メソッドを使用してください。これは論理値を返します。
- 一致したテキストの内容が必要な場合は、{{jsxref("String.prototype.match()", "match()")}} または {{jsxref("RegExp.prototype.exec()")}} を使用してください。

## 例

### search() の使用

次の例は、2 つの異なる正規表現オブジェクトで文字列を検索し、成功した検索（正の値）と失敗した検索 (`-1`) を表示します。

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // 最初の大文字 "J" のインデックスである 4 を返します
console.log(str.search(reDot)); // ドット記号 '.' が見つからないので -1 を返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.search` のポリフィル (`core-js`) （`Symbol.search` のようなの現代の修正や挙動つき）](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [JavaScript の正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[@@search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
