---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`padEnd()`** メソッドは、結果の文字列が指定した長さになるように、現在の文字列を他の文字列で（必要に応じて繰り返して）延長します。延長は、現在の文字列の末尾から適用されます。

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## 構文

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### 引数

- `targetLength`
  - : 現在の文字列の延長後に返される文字列の長さです。この値が現在の文字列の長さよりも短い場合、現在の文字列が返されます。
- `padString` {{optional_inline}}
  - : 現在の文字列を延長するための文字列です。この文字列が `targetLength` に収まらないほど長い場合は、左書きの言語では最も左の部分が、右書きの言語では最も右の部分が使用され、残りは切り捨てられます。この引数の既定値は、 " " (`U+0020`) です。

### 返値

{{jsxref("String")}} で、 `targetLength` で指定された長さにするために、 `padString` を現在の `str` の末尾に適用したものです。

## 例

### padEnd の使用

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.padEnd` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
