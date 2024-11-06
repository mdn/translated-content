---
title: "WorkerLocation: host プロパティ"
short-title: host
slug: Web/API/WorkerLocation/host
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`host`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、ワーカーの位置のホスト部分 ({{domxref("URL.host", "host")}}) を返します。

## 値

文字列です。

## 例

```js
// http://localhost:8080/ のページにあるウェブワーカーにて
const result = location.host; // 'localhost:8080' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
