---
title: "HTMLSlotElement: slotchange イベント"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

**`slotchange`** イベントは、 {{DOMxRef("HTMLSlotElement")}} インスタンス({{HTMLElement("slot")}} 要素) において、そのスロットに含まれるノードが変更された場合に発行されます。

> **メモ:** スロットに入っているノードの子ノードが変更された場合、 `slotchange` イベントは発生しません。実際のノード自体を変更（例えば、追加または削除）した場合に限ります。

**slotchange** イベントを発行させるには、 `slot` 属性を設定または削除しなければなりません。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティに設定するかしてください。

```js
addEventListener("slotchange", (event) => {});

onslotchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

次のスニペットは、 [slotchange の例](https://github.com/mdn/web-components-examples/tree/main/slotchange)から取りました ([ライブでも確認できます](https://mdn.github.io/web-components-examples/slotchange/))。

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

ここではすべての `<slot>` への参照を取得し、テンプレートの 2 番目のスロットに `slotchange` イベントリスナーを追加します。この例ではコンテンツが変更されているスロットです。

スロットに挿入された要素が変更されるたびに、どのスロットが変更されたか、スロット内の新しいノードが何であるかを示すレポートがコンソールに記録されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("HTMLSlotElement")}}
