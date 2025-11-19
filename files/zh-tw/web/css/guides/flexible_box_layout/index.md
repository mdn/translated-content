---
title: CSS 彈性盒佈局
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 彈性盒佈局**模組定義了一個為使用者介面設計最佳化的 CSS 盒模型，以及在單一維度上佈局項目的方法。在彈性佈局模型中，彈性容器的子元素可以朝任何方向佈局，並且可以「彈性」調整其尺寸，可以擴展以填滿未使用的空間，或縮小以避免溢出父元素。子元素的水平和垂直對齊都可以輕鬆地操作。

## 彈性盒佈局實作

在下面的範例中，一個容器被設定為 `display: flex`，這意味著三個子項目變成了彈性項目。`justify-content` 的值被設定為 `space-between`，以便在主軸上均勻地分配項目間的空間。每個項目之間都放置了相等的空間，而最左和最右的項目則與彈性容器的邊緣對齊。你也可以看到，由於 `align-items` 的預設值是 `stretch`，項目在交錯軸上被拉伸。項目會拉伸至彈性容器的高度，使它們每一個都看起來和最高的項目一樣高。

```html live-sample___simple-example
<div class="box">
  <div>一</div>
  <div>二</div>
  <div>三 <br />有 <br />額外 <br />文字</div>
</div>
```

```css live-sample___simple-example
body {
  font-family: sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: space-between;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
}
```

{{EmbedLiveSample("simple-example")}}

## 參考

### 屬性

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 術語

- {{Glossary("Flexbox")}}
- {{Glossary("Flex container", "彈性容器")}}
- {{Glossary("Flex item", "彈性項目")}}
- {{Glossary("Main axis", "主軸")}}
- {{Glossary("Cross axis", "交錯軸")}}
- {{Glossary("Flex")}}

## 指南

- [彈性盒的基本概念](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : 彈性盒功能概覽。
- [彈性盒與其他佈局方法的關係](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : 彈性盒如何與其他佈局方法及其他 CSS 規範相關聯。
- [在彈性容器中對齊項目](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : 盒對齊屬性如何與 Flexbox 一同運作。
- [排序彈性項目](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : 解釋改變項目順序和方向的不同方法，並涵蓋這樣做可能產生的問題。
- [控制彈性項目沿主軸的比例](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : 解釋 flex-grow、flex-shrink 和 flex-basis 屬性。
- [精通彈性項目的換行](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : 如何建立具有多行的彈性容器，並控制這些行中項目的顯示方式。
- [彈性盒的典型用例](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : 彈性盒典型的常見設計模式。
- [CSS 佈局：彈性盒](/zh-TW/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : 學習如何使用彈性盒佈局來建立 Web 佈局。
- [彈性盒中的盒對齊](/zh-TW/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : 詳細介紹 [CSS 盒對齊](/zh-TW/docs/Web/CSS/Guides/Box_alignment)中專屬於彈性盒的功能。

## 相關概念

[CSS display 模組](/zh-TW/docs/Web/CSS/Guides/Display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS 盒對齊](/zh-TW/docs/Web/CSS/Guides/Box_alignment)模組

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS 盒尺寸](/zh-TW/docs/Web/CSS/Guides/Box_sizing)模組

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} 值
- {{cssxref("min-content")}} 值
- {{cssxref("fit-content")}} 值
- {{glossary("intrinsic size", "固有尺寸")}}術語

## 規範

{{Specifications}}

## 參見

- [CSS 網格佈局](/zh-TW/docs/Web/CSS/Guides/Grid_layout)模組
- [CSS 書寫模式](/zh-TW/docs/Web/CSS/Guides/Writing_modes)模組
- [在 CSS display 中使用多關鍵字語法](/zh-TW/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
