---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
---

{{JSRef}}

**`Symbol.match`** は、文字列に対して正規表現のマッチングを指定します。この関数は {{jsxref("String.prototype.match()")}} メソッドによって呼び出されます。

{{EmbedInteractiveExample("pages/js/symbol-match.html")}}

## 説明

この関数は、オブジェクトが正規表現の動作をするかどうかを識別するためにも使用されます。たとえば、{{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}}, {{jsxref("String.prototype.includes()")}} メソッドは、最初の引数が正規表現であるかどうかを確認し、正規表現である場合は {{jsxref("TypeError")}} を投げます。ここで、`一致`記号が `false`（または[偽値](/ja/docs/Glossary/Falsy)）に設定されている場合、そのオブジェクトが正規表現オブジェクトとして使用されることを意図していないことを示します。

{{js_property_attributes(0,0,0)}}

## 例

### `isRegExp` チェックを無効にする

以下のコードは {{jsxref("TypeError")}} を投げます。

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

ただし、`Symbol.match` を `false` に設定すると、（`match` プロパティを使用する）`isRegExp` チェックは、オブジェクトが正規表現オブジェクトではないことを示します。結果として、`startsWith` と `endsWith` メソッドは、TypeError を投げません。

```js
var re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.builtins.Symbol.match")}}

## 関連情報

- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}
