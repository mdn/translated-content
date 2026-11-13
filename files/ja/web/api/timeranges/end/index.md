---
title: "TimeRanges: end() メソッド"
short-title: end()
slug: Web/API/TimeRanges/end
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

**`end()`** は {{domxref("TimeRanges")}} インターフェイスのメソッドで、指定された時間範囲が終了する時点の時間オフセット（秒単位）を返します。指定された時間範囲が終わる時間オフセットを返します。

## 構文

```js-nolint
end(index)
```

### 引数

- `index`
  - : 終了時刻を返す範囲の数値です。

### 返値

数値です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 指定されたインデックスが既存の範囲に対応していない場合、この例外が発生します。

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
