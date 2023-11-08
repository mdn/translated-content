---
title: TimeRanges.length
slug: Web/API/TimeRanges/length
---

{{APIRef("DOM")}}

**`TimeRanges.length`** 読み取り専用プロパティは、オブジェクト内の範囲の数を返します。

## 構文

```
length = TimeRanges.length;
```

## 例

ID が "myVideo" の動画要素がある場合、

```js
var v = document.GetElementById("myVideo");

var buf = v.buffered;

var numRanges = buf.length;

if (buf.length == 1) {
  // 1つの範囲のみ
  if (buf.start(0) == 0 && buf.end(0) == v.duration) {
    // 1つの範囲が動画の最初から始まり、
    // 動画の最後で終わるため、すべてが読み込まれています
  }
}
```

この例では、時間範囲を見て、動画全体が読み込まれたかどうかを確認します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
