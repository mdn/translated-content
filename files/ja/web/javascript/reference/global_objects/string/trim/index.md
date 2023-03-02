---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
---

{{JSRef}}

**`trim()`** メソッドは、文字列の両端の空白を削除します。このコンテクストでの空白には、空白文字（スペースやタブ、ノーブレークスペースなど）とすべての改行文字（LF や CR など）を含みます。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 構文

```
str.trim()
```

### 戻り値

呼び出し元の文字列の両端から空白を取り除いた新しい文字列です。

## 説明

`trim()` メソッドは両端の空白を取り除いた文字列を返します。`trim()` はその文字列自身の値には影響を与えません（非破壊メソッド）。

## Polyfill

ネイティブで使用できない場合、他のコードの前に次のコードを実行することにより `String.trim()` が使用可能になります。

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

## 例

### `trim()` を使う

以下の例は小文字の文字列 `'foo'` を表示します。

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 片方からだけ空白を取り除く .trim() の例。

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.builtins.String.trim")}}

## 関連情報

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
