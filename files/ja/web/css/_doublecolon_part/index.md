---
title: '::part()'
slug: Web/CSS/::part
tags:
  - '::part'
  - CSS
  - Draft
  - 実験的
  - NeedsBrowserCompatibility
  - NeedsExample
  - 擬似要素
  - リファレンス
  - セレクター
browser-compat: css.selectors.part
translation_of: Web/CSS/::part
---
{{CSSRef}}

**`::part`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、一致する {{HTMLAttrxRef("part")}} 属性を持つ[シャドウツリー](/ja/docs/Web/Web_Components/Using_shadow_DOM)内の要素を表します。

```css
custom-element::part(foo) {
  /* `foo` の部分に適用するスタイル */
}
```

## 構文

{{CSSSyntax}}

## 例

### HTML

```html
<template id="tabbed-custom-element">
<style type="text/css">
*, ::before, ::after {
  box-sizing: border-box;
  padding: 1rem;
}
:host {
  display: flex;
}
</style>
<div part="tab active">Tab 1</div>
<div part="tab">Tab 2</div>
<div part="tab">Tab 3</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: #0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0d19;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgba(10, 132, 255, 0.3);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

### JavaScript

```js
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(template.id, class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content);
  }
});
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLAttrxRef("part")}} 属性 - `::part()` セレクタで選択できるパーツを定義するために使用されます
- {{HTMLAttrxRef("exportparts")}} 属性 - ネストされたシャドウツリーにシャドウパーツを推移的にエクスポートするために使用されます。
- [Explainer: CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
