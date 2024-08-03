---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

**`popover`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、要素をポップオーバー要素として示すために使われます。

ポップオーバー要素は、呼び出し／制御要素（すなわち `<button>` または `<input type="button">` に [`popovertarget`](/ja/docs/Web/HTML/Element/button#popovertarget) 属性が付いたもの）、または {{domxref("HTMLElement.showPopover()")}} の呼び出しによって開かれるまで、`display: none` で非表示になっています。

開かれると、ポップオーバー要素は、{{glossary("top layer", "最上位レイヤー")}}内の他のすべての要素の上に現れ、親要素の {{cssxref('position')}} や {{cssxref('overflow')}} のスタイル付けの影響を受けません。

使い方についての詳しい情報は、{{domxref("Popover API", "ポップオーバー API", "", "nocode")}} ランディングページを参照してください。

## 例

## 基本的な例

以下は、ポップオーバー要素を開くためのボタンを描画するものです。

```html
<button popovertarget="my-popover">ポップオーバーを開く</button>

<div popover id="my-popover">私から皆さんへ、こんにちは！</div>
```

> [!NOTE]
> MDN にあるポップオーバーの例の完全な例にアクセスするには、[ポップオーバー API 例のランディングページ](https://mdn.github.io/dom-examples/popover-api/)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Popover API", "ポップオーバー API", "", "nocode")}}
