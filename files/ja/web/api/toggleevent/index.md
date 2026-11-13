---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 51a663ab797d3766a77e40af6565e43ae7af3d07
---

{{APIRef("UI Events")}}{{SeeCompatTable}}

**`ToggleEvent`** インターフェイスは、[ポップオーバー要素](/ja/docs/Web/API/Popover_API)の状態が表示と非表示の間で切り替わるときにユーザーに通知するイベントを表します。

これは `HTMLElement` の {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} および {{domxref("HTMLElement.toggle_event", "toggle")}} イベントのためのイベントオブジェクトであり、表示中と非表示の間で遷移したときに（それぞれ前と後に）ポップオーバーで発行されます。

{{InheritanceDiagram}}

> [!NOTE]
> `ToggleEvent` は `HTMLDetailsElement` の {{domxref("HTMLDetailsElement.toggle_event", "toggle")}} イベントとは関係ありません。こちらは {{htmlelement("details")}} において、`open`/`closed` の状態が変化したときに発生します。こちらのイベントオブジェクトは一般的な {{domxref("Event")}} です。

## コンストラクター

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}} {{Experimental_Inline}}
  - : `ToggleEvent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{DOMxRef("Event")}} からプロパティを継承しています。_

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : （`"open"` または `"closed"`の）文字列で、要素が遷移した後の状態を表します。
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : （`"open"` または `"closed"`の）文字列で、要素が遷移する前の状態を表します。

## 例

### 基本的な例

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [`beforetoggle` イベント](/ja/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle` イベント](/ja/docs/Web/API/HTMLElement/toggle_event)
