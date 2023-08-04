---
title: "HTMLSlotElement: name プロパティ"
short-title: name
slug: Web/API/HTMLSlotElement/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

**`name`** は {{domxref("HTMLSlotElement")}} インターフェイスのプロパティで、スロットの名前を返したり、設定したりします。スロットはウェブコンポーネント内のプレイスホルダーで、ユーザーが独自のマークアップで埋めることができます。

## 値

文字列です。

## 例

以下のスニペットは、 [slotchange
の例](https://github.com/mdn/web-components-examples/tree/main/slotchange)から取ったものです ([ライブでも確認してください](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

ここでは、すべてのスロットの参照を取得し、テンプレートの 2 番目のスロット（この例では内容が変更され続けるスロット）に slotchange イベントリスナーを追加しています。

スロットに挿入された要素が変更されるたびに、どのスロットが変更され、スロット内の新しいノードが何であるかというレポートをコンソールに記録しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
