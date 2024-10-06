---
title: "ShadowRoot: slotAssignment プロパティ"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

**`slotAssignment`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウ DOM ツリーのスロット割り当てモードを返します。ノードは自動的に割り当て (`named`) されるか、手動で割り当て (`manual`) されます。このプロパティの値は、`slotAssignment` オプションを {{domxref("Element.attachShadow()")}} を呼び出す際に使用して定義されます。

## 値

文字列で、以下のどちらかです。

- `named`
  - : 要素は自動的にこのシャドウルート内の {{HTMLElement("slot")}} 要素に割り当てられます。ホストの子孫要素で、このシャドウルート内の `<slot>` の `name` 属性と一致する `slot` 属性を持つものは、そのスロットに割り当てられます。ホストの最上位の子要素で、`slot` 属性を持たないものは、`name` 属性を持たない `<slot>`（「既定のスロット」）に割り当てられます。ただし、そのような `<slot>` が存在する場合に限ります。
- `manual`
  - : 要素は自動的に {{HTMLElement("slot")}} 要素に割り当てられるわけではありません。代わりに、{{domxref("HTMLSlotElement.assign()")}} を使用して手動で割り当てる必要があります。

## 例

以下の例では、`assign()` メソッドを使用して、タブ付きアプリケーションで正しいタブを表示します。この関数は、表示するパネルを渡されて呼び出され、その後スロットに割り当てられます。 `slotAssignment` が `named` であるかどうかをテストし、{{domxref("HTMLSlotElement.assign()")}} が呼び出された際に例外が発生しないようにします。

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;

  // 通常、このテストは必要ありませんが、デバッグ時に役立つことがあります。
  if (shadow.slotAssignment === "named") {
    console.error(
      "自動割り当て（名前付き）スロットに手動で割り当てようとしています",
    );
  }
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    slot.assign();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attachShadow()")}}
- {{domxref("HTMLSlotElement.assign()")}}
