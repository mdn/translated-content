---
title: PointerEvent.pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{ APIRef("Pointer Events") }}

**`pointerId`** {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、特定のポインターのイベントに割り当てられた識別子です。 識別子は一意であり、他のすべてのアクティブポインターのイベントの識別子と異なります。 値はランダムに生成される可能性があるため、特定の意味を伝えることは保証されません。

## 値

数値です。

## 例

次のコードスニペットは、以前に保存された `pointerId` と、発生したばかりの {{domxref("Element/pointerdown_event", "pointerdown")}} イベントのものとを比較します。

```js
let id; // これが以前に保存された pointerId であると仮定しましょう

target.addEventListener(
  "pointerdown",
  (event) => {
    // キャッシュされた前のイベントの ID を現在の
    // イベントの ID と比較し、それに応じて処理する
    if (id === event.pointerId) process_event(event);
  },
  false
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
