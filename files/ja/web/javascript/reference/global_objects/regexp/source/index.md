---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`source`** は {{jsxref("RegExp")}} のアクセサープロパティで、正規表現オブジェクトのソーステキストの入った文字列を返します。これには、両端の 2 つのスラッシュやフラグは含まれません。

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}

## 解説

概念的には、`source` プロパティは正規表現リテラルの 2 つのスラッシュの間のテキストです。この言語では、返される文字列が適切にエスケープされている必要があり、`source` の両端にスラッシュを連結すると、解析可能な正規表現リテラルが形成されます。例えば、`new RegExp("/")` の場合、`source` は `\\/` です。これは `/` を生成し、結果のリテラルは `///` です。同様に、[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)はすべてエスケープされます。結果が解析可能である限り、他にも文字は必要ありません。空文字列の正規表現では `(?:)` という文字列を返します。

## 例

### source の使用

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", /.../ と "gi" は含まれません。
```

### 空の正規表現とエスケープ

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\\n"; // true。ES5 以降
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.flags")}}
