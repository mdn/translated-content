---
title: "HTMLElement: beforetoggle イベント"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{APIRef("Popover API")}}

**`beforetoggle`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性がある要素）において、表示または非表示になる直前に発行されます。

- ポップオーバーが非表示状態から表示状態に遷移した場合、`event.oldState` プロパティには `closed` が、`event.newState` プロパティには `open` が設定されます。
- ポップオーバーが表示状態から非表示状態に遷移した場合、 `event.oldState` は `open` に、 `event.newState` は `closed` になります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## イベント型

{{domxref("ToggleEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ToggleEvent")}}

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

### トグルイベントの合体に関するメモ

`beforetoggle` イベントが合体していることを特筆に値するでしょう。イベントループが循環する前に複数の `beforetoggle` イベントが発行された場合、単一のイベントしか発行されないということです。

例えば次のようになります。

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` は 1 回しか発行されない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- 関連イベント: [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event)
