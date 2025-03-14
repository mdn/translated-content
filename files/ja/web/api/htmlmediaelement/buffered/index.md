---
title: "HTMLMediaElement: buffered プロパティ"
short-title: buffered
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

**`buffered`** は {{domxref("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、この `buffered` プロパティがアクセスされた時点でユーザーエージェントがバッファリングしているメディアリソースの範囲があれば，それを表す新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。

## 値

`buffered` プロパティがアクセスされた時点で、（存在する場合）ユーザーエージェントがバッファリングしているメディアリソースの範囲を表す、新しい静的な[正規化 TimeRanges オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)です。

## 例

```js
const obj = document.createElement("video");
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.buffered` プロパティを定義しているインターフェイス
