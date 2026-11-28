---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{APIRef("Popover API")}}

**`ToggleEvent`** インターフェイスは、ポップオーバー要素の表示状態と非表示状態が切り替わったときに発生するイベントを表します。

これは {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} および {{domxref("HTMLElement.toggle_event", "toggle")}} イベントのイベントオブジェクトです。これらのイベントは、次のように要素で発生します。

- `beforetoggle` イベントは、[ポップオーバー](/ja/docs/Web/API/Popover_API)または {{htmlelement("dialog")}} 要素が表示または非表示になる前に発生します。
- `toggle` イベントは、ポップオーバー、`<dialog>`、{{htmlelement("details")}} 要素が表示または非表示になった後に発生します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : `ToggleEvent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{DOMxRef("Event")}} からプロパティを継承しています。_

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : 文字列で、値は `"open"` または `"closed"` のいずれかです。要素の遷移先の状態を表します。
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : 文字列で、値は `"open"` または `"closed"` のいずれかです。要素の遷移元の状態を表します。
- {{DOMxRef("ToggleEvent.source")}} {{ReadOnlyInline}}
  - : 切り替えを開始した HTML コントロールを表す {{domxref("Element")}} オブジェクトのインスタンスです。

## 例

### 基本的な例

```js
const popover = document.getElementById("mypopover");

// …

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
