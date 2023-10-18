---
title: "WorkerLocation: port プロパティ"
short-title: port
slug: Web/API/WorkerLocation/port
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`port`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、このワーカーの位置のポート番号 ({{domxref("URL.port", "port")}}) 部分を返します。

## 値

文字列です。

## 例

```js
// http://localhost:8080/ のページにあるウェブワーカーにて
const result = location.port; // '8080' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
