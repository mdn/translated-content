---
title: RegExp.prototype.source
short-title: source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`source`** は {{jsxref("RegExp")}} のアクセサープロパティで、正規表現オブジェクトのソーステキストの入った文字列を返します。これには、両端の 2 つのスラッシュやフラグは含まれません。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.source")}}

```js interactive-example
const regex = /fooBar/gi;

console.log(regex.source);
// 予想される結果: "fooBar"

console.log(new RegExp().source);
// 予想される結果: "(?:)"

console.log(new RegExp("\n").source === "\\n");
// 予想される結果: true （ES5 以降）
// Due to escaping
```

## 解説

概念的には、`source` プロパティは正規表現リテラルの 2 つのスラッシュの間のテキストです。この言語では、返される文字列が適切にエスケープされている必要があり、`source` の両端にスラッシュを連結すると、解析可能な正規表現リテラルが形成されます。例えば、`new RegExp("/")` の場合、`source` は `\\/` です。これは `/` を生成し、結果のリテラルは `///` です。同様に、[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)は、改行文字である文字が、正規表現リテラルを分割してしまうため、すべてエスケープされます。結果が解析可能である限り、他にも文字は必要ありません。空文字列の正規表現では `(?:)` という文字列を返します。

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
