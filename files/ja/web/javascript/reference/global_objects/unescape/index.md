---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> `unescape()` は、ブラウザーによって実装されている標準外の関数であり、エンジン間の互換性のためにのみ標準化されています。すべての JavaScript エンジンで実装されているとは限らず、すべての環境で動作するとは限りません。可能であれば、{{jsxref("decodeURIComponent()")}} または {{jsxref("decodeURI()")}} を使用してください。

**`unescape()`** 関数は、16 進エスケープシーケンスをそれらが表す文字に置き換えた新しい文字列を計算します。エスケープシーケンスは、 {{jsxref("escape()")}} のような関数によって導入される場合があります。

## 構文

```js-nolint
unescape(str)
```

### 引数

- `str`
  - : デコードされる文字列。

### 返値

特定の文字のエスケープが解除された新しい文字列です。

## 解説

`unescape` 関数はグローバルオブジェクトのプロパティです。

`unescape()` 関数は、エスケープシーケンスを、それが表す文字に置き換えます。具体的には、`%XX` または `%uXXXX` (ここで `X` は 1 桁の 16 進数) という形のエスケープシーケンスを、16 進値 `XX`/`XXXX` を持つ文字に置き換えます。エスケープシーケンスが有効なエスケープシーケンスでない場合（例えば、`%` の後に 1 桁または 0 桁の 16 進数字が続く場合）、そのまま残されます。

> [!NOTE]
> この関数は主に{{Glossary("Percent-encoding", "パーセントエンコード")}}に使用され、 {{rfc(1738)}} のエスケープ形式を部分的に基にしています。エスケープ形式は、文字列リテラルにおける[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)ではありません。 `\xXX` を `%XX`、`\uXXXX` を `%uXXXX` に置き換えることで、 `unescape()` で処理できる文字列を取得することができます。

## 例

### unescape の使用

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`unescape` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
