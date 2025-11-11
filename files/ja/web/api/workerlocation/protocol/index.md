---
title: "WorkerLocation: protocol プロパティ"
short-title: protocol
slug: Web/API/WorkerLocation/protocol
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`protocol`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、このワーカーの位置のプロトコル ({{domxref("URL.protocol", "protocol")}}) 部分を返します。

## 値

文字列です。

## 例

```js
// https://developer.mozilla.org/ja/docs/Web のページにあるウェブワーカーにて
const result = location.protocol; // 'https:' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
