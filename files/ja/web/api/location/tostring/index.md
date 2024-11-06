---
title: "location: toString() メソッド"
slug: Web/API/Location/toString
l10n:
  sourceCommit: bb3a02f27256e93ada09f81efb5313eeb8f91542
---

{{ApiRef("Location")}}

**`toString()`** は {{domxref("Location")}} インターフェイスの{{Glossary("stringifier", "文字列化")}}メソッドであり、URL 全体を文字列で返します。これは {{domxref("Location.href")}} の読み取り専用版です。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

このオブジェクトの URL を表す文字列です。

## 例

```js
// このコードが https://example.com/path?search#hash で実行されていると想像してください
const result = window.location.toString(); // 返値: 'https://example.com/path?search#hash'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
