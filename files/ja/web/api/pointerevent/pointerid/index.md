---
title: "PointerEvent: pointerId プロパティ"
short-title: pointerId
slug: Web/API/PointerEvent/pointerId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}

**`pointerId`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、特定のポインターのイベントに割り当てられた識別子です。 識別子は一意であり、他のすべてのアクティブポインターのイベントの識別子と異なります。 値はランダムに生成される可能性があるため、特定の意味を伝えることは保証されません。

> [!NOTE]
> `pointerId` プロパティの実装は、ブラウザー間でばらつきがあり、常に各インクストロークや、画面の操作に対して維持されるわけではありません。画面に同時に存在する複数のポインティングデバイスを確実に識別する方法については、{{domxref("PointerEvent.persistentDeviceId")}} を参照してください。

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
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
