---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: be500eeadf5eba4722689ce9b150c506e8a9c7fa
---

{{JSRef}}

**`lastIndexOf()`** は {{jsxref("String")}} 値のメソッドで、この文字列を検索し、指定した部分文字列が最後に出現するインデックスを返します。オプションで開始位置を取り、指定した数値以下のインデックスにおいて、指定した部分文字列が最後にに出現するインデックスを返します。

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## 構文

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### 引数

- `searchString`

  - : 検索する値を表す文字列です。すべての値は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`lastIndexOf()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。

- `position` {{optional_inline}}

  - : このメソッドは、`position`（既定値は `0`）以下の位置で、指定した部分文字列が最後に現れるインデックスを返します。`position` が呼び出された文字列の長さよりも大きい場合、このメソッドは呼び出される文字列をまったく検索しません。`position` が 0 未満の場合、このメソッドは `0` と同じように動作します。すなわち、このメソッドは指定された文字列をインデックス `0` でのみ検索します。

    - `'hello world hello'.lastIndexOf('world', 4)` は `-1` を返します。部分文字列 `world` が現れるのは `6` のインデックスですが、その位置は `4` 以下ではないからです。

    - `'hello world hello'.lastIndexOf('hello', 99)` は `12` を返します。部分文字列 `hello` が最後に現れる位置が、`99` 以下である `12` の位置だからです。

  - `'hello world hello'.lastIndexOf('hello', 0)` と `'hello world hello'.lastIndexOf('hello', -5)` はどちらも `0` を返します。`hello` をインデックス `0` でしか検索しないからです。

### 返値

`searchString` が最後に出現した位置です。見つからなかった場合は、 `-1` になります。

## 解説

文字列は 0 基点です。文字列の最初の文字のインデックスは `0` で、文字列の最後の文字のインデックスは文字列の長さから 1 を引いたものになります。

```js
"canal".lastIndexOf("a"); // 3 を返す
"canal".lastIndexOf("a", 2); // 1 を返す
"canal".lastIndexOf("a", 0); // -1 を返す
"canal".lastIndexOf("x"); // -1 を返す
"canal".lastIndexOf("c", -5); // 0 を返す
"canal".lastIndexOf("c", 0); // 0 を返す
"canal".lastIndexOf(""); // 5 を返す
"canal".lastIndexOf("", 2); // 2 を返す
```

### 大文字小文字の区別

`lastIndexOf()` メソッドは大文字と小文字を区別します。例えば、以下の式は `-1` を返します。

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // -1 を返す
```

## 例

### indexOf() と lastIndexOf() の使用

以下の例は、 {{jsxref("String.prototype.indexOf()", "indexOf()")}} と `lastIndexOf()` を使用して文字列 `"Brave, Brave New World"` の中の値の位置を示します。

```js
const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
