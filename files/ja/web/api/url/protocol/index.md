---
title: "URL: protocol プロパティ"
short-title: protocol
slug: Web/API/URL/protocol
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`protocol`** は {{domxref("URL")}} インターフェイスのプロパティで、最後の `':'` を含む URL のプロトコルスキームを表す文字列です。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // "https:" とログ出力
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
