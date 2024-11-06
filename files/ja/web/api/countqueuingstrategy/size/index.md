---
title: "CountQueuingStrategy: size() メソッド"
short-title: size()
slug: Web/API/CountQueuingStrategy/size
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`size()`** は {{domxref("CountQueuingStrategy")}} インターフェイスのメソッドで、常に `1` を返します。従って、合計キューサイズはキュー内のチャンク数を数えたものになります。

## 構文

```js-nolint
size()
```

### 引数

なし。

### 返値

`1`。

## 例

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // シンクの実装
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);

const size = queuingStrategy.size();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} コンストラクター
