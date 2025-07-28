---
title: "HTMLElement: toggle イベント"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

**`toggle`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性がある要素）において、表示または非表示になった直後に発行されます。

- そのポップオーバー要素が非表示状態から表示状態に遷移した場合、`event.oldState` プロパティは `closed` に、`event.newState` プロパティは `open` にそれぞれ設定されます。
- そのポップオーバー要素が表示状態から非表示状態に遷移した場合、 `event.oldState` は `open` に、 `event.newState` は `closed` になります。

> [!NOTE]
> `toggle` イベントは {{htmlelement("details")}} 要素で発行された場合、異なる形で動作します。この場合、ポップオーバーとは関連しておらず、`<details>` 要素の `open`/`closed` 状態が切り替わったときに発行されます。詳しくは `HTMLDetailsElement` の {{domxref("HTMLDetailsElement.toggle_event", "toggle")}} イベントのページを参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## イベント型

{{domxref("ToggleEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ToggleEvent")}}

## 例

### 基本的な例

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

### トグルイベントの合体に関するメモ

`toggle` イベントが合体していることを特筆に値するでしょう。イベントループが循環する前に複数の `toggle` イベントが発行された場合、単一のイベントしか発行されないということです。

例えば次のようになります。

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` は 1 回しか発行されない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- 関連イベント: [`beforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event)
