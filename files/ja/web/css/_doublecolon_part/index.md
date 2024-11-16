---
title: "::part()"
slug: Web/CSS/::part
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

**`::part`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、一致する [`part`](/ja/docs/Web/HTML/Global_attributes#part) 属性を持つ[シャドウツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)内の任意の要素を表します。

```css
custom-element::part(foo) {
  /* `foo` の部分に適用するスタイル */
}
```

## 構文

```css
::part(<ident>+) {
  /* ... */
}
```

## 例

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
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
  color: #ffffff;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
  color: #ffffff;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgb(10 132 255 / 30%);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

### JavaScript

```js
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`part`](/ja/docs/Web/HTML/Global_attributes#part) 属性 - `::part()` セレクターで選択できるパーツを定義するために使用されます
- [`exportparts`](/ja/docs/Web/HTML/Global_attributes#exportparts) 属性 - 入れ子になったシャドウツリーにシャドウパーツを推移的にエクスポートするために使用されます。
- [CSS シャドウパーツ](/ja/docs/Web/CSS/CSS_shadow_parts)モジュール
