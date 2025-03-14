---
title: "WorkerLocation: origin プロパティ"
short-title: origin
slug: Web/API/WorkerLocation/origin
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`origin`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、このワーカーのオリジン ({{domxref("URL.origin", "origin")}}) を返します。

## 値

文字列です。

## 例

```js
// On this page, returns the origin
const result = self.location.origin; // 'https://developer.mozilla.org:443' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
