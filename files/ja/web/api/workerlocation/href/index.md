---
title: "WorkerLocation: href プロパティ"
short-title: href
slug: Web/API/WorkerLocation/href
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`href`** は {{domxref("WorkerLocation")}} オブジェクトのプロパティで、ワーカーの位置のシリアライズされた {{domxref("URL")}} の入った文字列を返します。

## 値

文字列です。

## 例

```js
// https://developer.mozilla.org/ja/docs/Web のページにあるウェブワーカーにて
const result = location.href; // 'https://developer.mozilla.org/ja/docs/Web' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
