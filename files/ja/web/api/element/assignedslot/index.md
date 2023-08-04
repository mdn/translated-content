---
title: "Element: assignedSlot プロパティ"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("Shadow DOM")}}

**`assignedSlot`** は {{domxref("Element")}} インターフェイスの読み取り専用プロパティで、
{{domxref("HTMLSlotElement")}} を返します。これは、そのノードが挿入された {{htmlelement("slot")}} 要素を表します。

## 値

{{domxref('HTMLSlotElement')}} のインスタンス、または要素がスロットに割り当てられていない場合や、 {{domxref("ShadowRoot.mode", "mode")}} が `closed` に設定されている場合は `null` です（詳しくは {{domxref("Element.attachShadow")}} を参照してください）。

## 例

[simple-template の例](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([ライブで表示](https://mdn.github.io/web-components-examples/simple-template/)) では、`<my-paragraph>` という些細なカスタム要素の例を作りました。この要素にはシャドウルートが付けられ、次に `my-text` というスロットを含むテンプレートのコンテンツを使って入力されるようになっています。

文書内で `<my-paragraph>` が使用されると、スロットは `my-text` という値を持つ [`slot`](/ja/docs/Web/HTML/Global_attributes/slot) 属性を持つ要素内に含めることによって、 slotable 要素によって生成されることになります。以下はそのような例です。

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

JavaScript ファイルでは、上に示した {{htmlelement("span")}} への参照を取得し、`<span>` が挿入された元の `<slot>` 要素への参照をログに記録しています。

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
