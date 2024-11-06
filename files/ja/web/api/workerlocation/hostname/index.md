---
title: "WorkerLocation: hostname プロパティ"
short-title: hostname
slug: Web/API/WorkerLocation/hostname
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`hostname`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、ワーカーの位置のホスト名 ({{domxref("URL.hostname", "hostname")}}) の部分を返します。

## 値

文字列です。

## 例

```js
// http://localhost:8080/ のページにあるウェブワーカーにて
const result = location.hostname; // 'localhost' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
