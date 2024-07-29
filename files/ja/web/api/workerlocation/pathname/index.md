---
title: "WorkerLocation: pathname プロパティ"
short-title: pathname
slug: Web/API/WorkerLocation/pathname
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`pathname`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、このワーカーの場所のパス名 ({{domxref("URL.pathname", "pathname")}}) 部分を返します。

## 値

文字列です。

## 例

```js
// https://developer.mozilla.org/ja/docs/Web のページにあるウェブワーカーにて
const result = location.pathname; // '/ja/docs/Web' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
