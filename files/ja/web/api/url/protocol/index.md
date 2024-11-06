---
title: "URL: protocol プロパティ"
short-title: protocol
slug: Web/API/URL/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`protocol`** は {{domxref("URL")}} インターフェイスのプロパティで、最後の `':'` を含む URL のプロトコルスキームを表す文字列です。

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // "https:" とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
