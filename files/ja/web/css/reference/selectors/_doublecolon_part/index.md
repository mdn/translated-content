---
title: ::part()
slug: Web/CSS/Reference/Selectors/::part
original_slug: Web/CSS/::part
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`::part`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、一致する [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性を持つ[シャドウツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)内の任意の要素を表します。

```css
custom-element::part(foo) {
  /* `foo` の部分に適用するスタイル */
}
```

## 解説」

グローバルの [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性は、シャドウツリー要素をその親 DOM に表示します。 `part` 属性を使用して宣言されたパーツ名は、 `::part()` 擬似要素の引数として使用されます。このようにして、シャドウツリー内の要素に、その外部から CSS スタイルを適用することができます。

パーツ名は CSS クラスと似ています。複数の要素が同じパーツ名を持つことができ、1 つの要素が複数のパーツ名を持つこともできます。 `::part()` 擬似要素で使用されるパーツ名はすべて、シャドウツリー要素で宣言された `part` 値に存在する必要があります。ただし、パーツ名の順序は関係ありません。つまり、セレクター `::part(tab active)` と `::part(active tab)` は同じです。

`::part()` 擬似要素は、親 DOM からしか見えません。つまり、シャドウツリーが入れ子になっている場合、その部分は直接の親以外の祖先には見えません。 [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts) 属性は、すでに定義されている `part` 名を明示的にエクスポートして、それらをグローバルにスタイル設定可能にする事で、この制限を解決します。

[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)（`::part(label):hover` など）は `::part()` セレクターに追加できますが、 `:empty` や `:last-child` など、ツリー情報に基づいて照合する[構造擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes)は追加できません。

`::before` などの追加の擬似要素は、`::part()` セレクターに追加できますが、追加の `::part()` 要素は追加できません。例えば、 `::part(confirm-button)::part(active)` は何とも一致しません。つまり、 `::part(confirm-button active)` と同じではありません。これは、そうすると意図したよりも多くの構造情報が公開されてしまうためです。

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
  <div part="tab active">Tab A</div>
  <div part="tab">Tab B</div>
  <div part="tab">Tab C</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: blue;
  border-bottom: transparent solid 4px;
}

tabbed-custom-element::part(tab):hover {
  background-color: black;
  color: white;
}

tabbed-custom-element::part(tab active) {
  border-color: blue !important;
}
```

### JavaScript

```js
const template = document.querySelector("#tabbed-custom-element");
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

- [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性
- {{CSSxRef(":state",":state()")}} 擬似クラス関数
- [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts) 属性
- [CSS シャドウパーツ](/ja/docs/Web/CSS/Guides/Shadow_parts)モジュール
