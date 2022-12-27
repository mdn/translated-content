---
title: HTMLMediaElement.buffered
slug: Web/API/HTMLMediaElement/buffered
---

{{APIRef("HTML DOM")}}

**`buffered`** は {{domxref("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、この `buffered` プロパティがアクセスされた時点でユーザーエージェントがバッファリングしているメディアリソースの範囲があれば，それを表す新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。

> **メモ:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。

## 値

`buffered` プロパティがアクセスされた時点で、（存在する場合）ユーザーエージェントがバッファリングしているメディアリソースの範囲を表す、新しい静的な[正規化 TimeRanges オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)です。

## 例

```js
var obj = document.createElement('video');
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- これを定義しているインターフェイスである {{domxref("HTMLMediaElement")}}
