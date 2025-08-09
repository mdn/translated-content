---
title: TimeRanges.end()
slug: Web/API/TimeRanges/end
---

{{APIRef("DOM")}}

指定された時間範囲が終わる時間オフセットを返します。

## 構文

```
endTime = TimeRanges.end(index)
```

### パラメーター

- `index` は、終了時間を返す範囲の番号です。

### 例外

- INDEX_SIZE_ERR
  - : 指定されたインデックスが既存の範囲に対応しない場合にスローされる `DOMException`。

## 例

ID が "myVideo" の動画要素がある場合、

```js
var v = document.getElementById("myVideo");

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
