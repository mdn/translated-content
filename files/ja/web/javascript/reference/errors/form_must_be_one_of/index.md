---
title: "RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'"
slug: Web/JavaScript/Reference/Errors/Form_must_be_one_of
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'" は、{{jsxref("String.prototype.normalize()")}} メソッドに認識できない文字列が渡されたときに発生します。

## エラーメッセージ

```plain
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.prototype.normalize()")}} メソッドの`form` 引数として指定できる値は、`"NFC"`、`"NFD"`、`"NFKC"`、`"NFKD"` の 4 つだけです。これ以外の値を渡すとエラーが発生します。各正規化形式の違いについては、`normalize()` のリファレンスを参照してください。

## 例

### 無効なケース

```js example-bad
"foo".normalize("nfc"); // RangeError
"foo".normalize(" NFC "); // RangeError
```

### 有効な場合

```js example-good
"foo".normalize("NFC"); // 'foo'
```

## 関連情報

- {{jsxref("String.prototype.normalize()")}}
