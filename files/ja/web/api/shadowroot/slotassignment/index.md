---
title: "ShadowRoot: slotAssignment プロパティ"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{APIRef("Shadow DOM")}}

**`slotAssignment`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウ DOM ツリーのスロット割り当てモードを返します。ノードは一致する名前 (`named`) に基づいて割り当てされるか、手動 (`manual`) で割り当てされます。

このプロパティの値は、{{domxref("Element.attachShadow()")}} を呼び出す際に `slotAssignment` オプションを使用して定義されるほか、シャドウルートを宣言的に作成する際に {{htmlelement("template")}} 要素の [`shadowrootslotassignment`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) 属性を使用して定義されます。

## 値

文字列で、以下のどちらかです。

- `named`
  - : 要素は自動的にこのシャドウルート内の {{HTMLElement("slot")}} 要素に割り当てられます。
    このシャドウルート内の `<slot>` の `name` 属性と一致する `slot` 属性を持っている、ホストの最上位の子要素はすべて、そのスロットに代入されます。
    ホストの最上位の子要素で、`slot` 属性を持たないものは、`name` 属性を持たない `<slot>`（「既定のスロット」）に割り当てられます。ただし、そのような `<slot>` が存在する場合に限ります。
- `manual`
  - : 要素は自動的に {{HTMLElement("slot")}} 要素に割り当てられるわけではありません。
    代わりに、{{domxref("HTMLSlotElement.assign()")}} を使用して手動で割り当てる必要があります。

## 例

### 基本的な例

以下の例では、`assign()` メソッドを使用して、タブ付きアプリケーションで正しいタブを表示します。
この関数は、表示するパネルを渡されて呼び出され、その後スロットに割り当てられます。
`slotAssignment` が `named` であるかどうかを検査し、{{domxref("HTMLSlotElement.assign()")}} が呼び出された際に例外が発生しないようにします。

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
- `<template>` 要素の [`shadowrootslotassignment`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) 属性
- {{domxref("HTMLTemplateElement.shadowRootSlotAssignment")}}
