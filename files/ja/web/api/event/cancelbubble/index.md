---
title: "Event: cancelBubble プロパティ"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

**`cancelBubble`** は {{domxref("Event")}} インターフェイスのプロパティで、非推奨です。代わりに {{domxref("Event.stopPropagation()")}} を使用してください。
イベントハンドラーから戻る前にこの値を `true` に設定すると、イベントの伝播を防ぐことができます。それ以降の実装では、この値を `false` に設定しても何も起こりません。
詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 値

論理値です。 `true` の値は、イベントがこれ以上伝播しないことを意味します。

## 例

```js
elem.onclick = (event) => {
  // Do cool things here
  event.cancelBubble = true;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
