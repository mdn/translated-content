---
title: "TimeRanges: length プロパティ"
short-title: length
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

**`TimeRanges.length`** 読み取り専用プロパティは、オブジェクト内の範囲の数を返します。

## 値

数値です。

## 例

ID が "myVideo" の動画要素がある場合、

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // 1 つの範囲のみ
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // 1 つの範囲が動画の最初から始まり、
    // 動画の最後で終わるため、すべてが読み込まれています
  }
}
```

この例では、時間範囲を見て、動画全体が読み込まれたかどうかを確認します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
