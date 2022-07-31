---
title: ShadowRoot.onslotchange
slug: Web/API/ShadowRoot/onslotchange
tags:
  - API
  - イベントハンドラー
  - 実験的
  - ShadowRoot
  - プロパティ
  - リファレンス
  - シャドウ DOM API
  - slot
  - slotchange
  - onslotchange
browser-compat: api.ShadowRoot.onslotchange
---
{{ApiRef('DOM')}}{{SeeCompatTable}}

**`onslotchange`** は {{domxref("ShadowRoot")}} の[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)プロパティで、 {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} イベントを処理します。

`slotchange` イベントは、スロットに含まれるノードが変化したときに {{DOMxRef("HTMLSlotElement")}} インスタンス ({{HTMLElement("slot")}} 要素) で発行されます。

## 例

次のスニペットは、 [slotchange の例](https://github.com/mdn/web-components-examples/tree/master/slotchange) を少し修正したもので、 `slotchange` イベントのリスナーを追加するのではなく、 `ShadowRoot.onslotchange` プロパティを使用するものです。

スロットの要素が変更されるたびに、どのスロットが変更されたか、そしてスロット内の新しいノードが何であるかというレポートをコンソールに記録しています。

```js
this.shadowRoot.onslotchange = function(e) {
  const nodes = e.originalTarget.assignedNodes();
  console.log(`Element in Slot "${e.originalTarget.name}" changed to "${nodes[0].outerHTML}".`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テンプレートとスロットの使用](/ja/docs/Web/Web_Components/Using_templates_and_slots)
- {{event("slotchange")}} event
- {{domxref("HTMLSlotElement")}}
- {{domxref("GlobalEventHandlers.onslotchange")}}
