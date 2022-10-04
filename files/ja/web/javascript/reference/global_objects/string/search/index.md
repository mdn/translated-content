---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

**`search()`** メソッドは、対象の {{jsxref("String")}} オブジェクトが正規表現で一致するかどうかを調べるためのメソッドです。

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## 構文

```
str.search(regexp)
```

### 引数

- `regexp`
  - : [regular expression](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) 正規表現オブジェクトです。

    正規表現でないオブジェクト `regexp` が渡された場合は {{jsxref("RegExp")}} オブジェクトに `new RegExp(regexp)` を使用して暗黙的に変換されます。

### 返値

与えられた文字列と正規表現の間で最初にマッチした箇所のインデックスを返します。マッチしなかった場合は `-1` を返します。

## 解説

あるパターンが見つかるかどうかを知りたい場合*や*、文字列の中の位置を知りたい場合は、 `search()` メソッドを利用してください。 (存在するかどうかを知りたいだけの場合は、 `RegExp` に同様のメソッドである {{jsxref("RegExp.prototype.test()", "test()")}} メソッドがあり、これは論理値を返します。

より多くの情報が欲しい場合は (実行速度が遅くなりますが) {{jsxref("String.prototype.match()", "match()")}} メソッドを使用してください (同様のメソッドとして、{{jsxref("RegExp.prototype.exec()", "exec()")}} メソッドがあります)。

## 例

### search() の使用

次の例は、2 つの異なる正規表現オブジェクトで文字列を検索し、成功した検索 (正の値) と失敗した検索 (`-1`) を表示します。

```js
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // 最初の大文字 "J" の位置である 4 を返します
console.log(str.search(reDot)) // '.' ドット記号が見つからないので -1 を返します
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.search")}}

## 関連情報

- [JavaScript の正規表現の使用](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
