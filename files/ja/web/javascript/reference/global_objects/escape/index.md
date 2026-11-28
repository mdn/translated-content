---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

> [!NOTE]
> `escape()` は、ブラウザーが実装している古い関数で、エンジン間の互換性のためだけに標準化されました。すべての JavaScript エンジンで実装されるとは限らず、すべての環境で動作するとは限りません。可能であれば、{{jsxref("encodeURIComponent()")}} または {{jsxref("encodeURI()")}} を使用してください。

**`escape()`** 関数は、特定の文字を 16 進数のエスケープシーケンスに置き換えた新しい文字列を計算します。

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

`escape()` はグローバルオブジェクトの関数プロパティです。

`escape()` 関数は、{{Glossary("ASCII")}} の単語構成文字 (A–Z、a–z、0–9、\_) および `@\*_+-./` を除くすべての文字をエスケープシーケンスに置き換えます。文字は UTF-16 コード単位ごとにエスケープされます。コード単位の値が 256 未満の場合は、必要に応じて左側を 0 で埋めた 2 桁の 16 進数 `%XX` で表します。それ以外の場合は、必要に応じて左側を 0 で埋めた 4 桁の 16 進数 `%uXXXX` で表します。

> [!NOTE]
> この関数は主に{{Glossary("Percent-encoding", "パーセントエンコード")}}に使用され、{{rfc(1738)}} のエスケープ形式を部分的に基にしています。このエスケープ形式は、文字列リテラルにおける[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)ではありません。`%XX` を `\xXX`、`%uXXXX` を `\uXXXX` に置き換えると、実際の文字列リテラル用エスケープシーケンスを含む文字列を取得できます。

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

- [`escape` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
