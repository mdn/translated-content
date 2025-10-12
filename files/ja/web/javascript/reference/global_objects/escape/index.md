---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> `escape()` は、ブラウザーによって実装されている標準外の関数であり、エンジン間の互換性のためにのみ標準化されています。すべての JavaScript エンジンで実装されているとは限らず、すべての環境で動作するとは限りません。可能であれば、{{jsxref("encodeURIComponent()")}} または {{jsxref("encodeURI()")}} を使用してください。

The **`escape()`** 関数は、特定の文字を 16 進数のエスケープシーケンスで置き換えた新しい文字列を計算します。

## 構文

```js-nolint
escape(str)
```

### 引数

- `str`
  - : エンコードする文字列。

### 返値

特定の文字がエスケープされた新しい文字列。

## 解説

`escape` 関数はグローバルオブジェクトのプロパティです。

`escape()` 関数は、{{Glossary("ASCII")}} 単語文字 (A–Z、a–z、0–9、\_) および `@\*_+-./` を除き、すべての文字をエスケープシーケンスに置き換えます。文字は UTF-16 コード単位によってエスケープされます。コード単位の値が 256 未満の場合は、必要に応じて左に 0 を補って、`%XX` の書式で 2 桁の 16 進数で表されます。それ以外の場合は、必要に応じて左に 0 を補って、`%uXXXX` の書式で 4 桁の 16 進数で表されます。

> [!NOTE]
> この関数は主に{{Glossary("Percent-encoding", "パーセントエンコード")}}に使用され、 {{rfc(1738)}} のエスケープ形式を部分的に基にしています。エスケープ形式は、文字列リテラルにおける[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)ではありません。 `%XX` を `\xXX`、`%uXXXX` を `\uXXXX` に置き換えることで、実際の文字列リテラルエスケープシーケンスを含む文字列を取得することができます。

## 例

### escape の使用

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// 特殊文字
escape("@*_+-./"); // "@*_+-./"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`escape` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
