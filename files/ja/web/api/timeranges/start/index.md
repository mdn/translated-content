---
title: TimeRanges.start()
slug: Web/API/TimeRanges/start
---

{{APIRef("DOM")}}

**`start()`** は {{domxref("TimeRanges")}} インターフェイスのメソッドで、指定した時間範囲が開始する時刻オフセットを返します。

## 構文

```js
start(index);
```

### 引数

- `index`
  - : 開始時刻を返却する範囲番号です。

### 返値

数値です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 指定されたインデックスが既存の範囲に対応していない場合に発生します。

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

この例では、時間範囲を調べ、動画全体が読み込まれたかどうかを調べます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
