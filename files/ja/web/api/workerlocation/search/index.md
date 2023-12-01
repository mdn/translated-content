---
title: "WorkerLocation: search プロパティ"
short-title: search
slug: Web/API/WorkerLocation/search
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`search`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、このワーカーの位置の検索文字列 ({{domxref("URL.search", "search")}}) 部分を返します。

## 値

文字列です。

## 例

```js
// https://developer.mozilla.org/ja/docs/Web?t=67 のページにあるウェブワーカーにて
const result = location.search; // Returns:'?t=67'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
