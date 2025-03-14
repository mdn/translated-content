---
title: CSS 彈性盒子排版
slug: Web/CSS/CSS_flexible_box_layout
---

{{CSSRef}}

**CSS 彈性盒子排版**（CSS Flexible Box Layout）是 [CSS](/zh-TW/docs/Web/CSS) 的模組。它為了最佳化 CSS 盒子模型的使用者介面設計而來、並把項目都配置在一個維度之內。在彈性盒子排版中，彈性容器的子項目們可以伸展到任何方向、並讓他們的尺寸更加「彈性」、或者持續增大，以填補未使用的空間，抑或縮小，以避免父元素溢出。子項目橫向或縱向對齊都很容易操作。

## 基本範例

下例的容器已經設為 `display: flex`、意味著三個子元素變成了彈性項目（flex item）。`justify-content` 值也設成了 `space-between` 以便將項目均勻地分佈在主軸上。每個物品之間放置相等數量的空間，左右項目與彈性容器（flex container）的邊緣齊平。你可能也發現到各項目在切軸（cross axis）上伸展。那是因為 `align-items` 的值是 `stretch`。項目伸展為彈性容器的高度、令它們看起来都如同最高的項目一般高。

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## 參考

### CSS 屬性

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### 對齊屬性

The properties `align-content`, `align-self`, `align-items` and `justify-content` initially appeared in the Flexbox specification, but are now defined in Box Alignment and the Flexbox spec refers to the Box Alignment Specification for up to date definitions. Additional alignment properties are also defined in Box Alignment.

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 短詞

- {{Glossary("Flexbox", "", 1)}}
- {{Glossary("Flex Container", "", 1)}}
- {{Glossary("Flex Item", "", 1)}}
- {{Glossary("Main Axis", "", 1)}}
- {{Glossary("Cross Axis", "", 1)}}
- {{Glossary("Flex", "", 1)}}

## 教學

- [彈性盒子的基本概念](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : 彈性盒子的概述
- [彈性盒子與其他排版的關係](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : 彈性盒子如何與其他排版和 CSS 規範相關連
- [在彈性容器內對齊](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Aligning_Items_in_a_Flex_Container)
  - : 彈性盒子的 Box Alignment 屬性如何做動。
- [給彈性項目排序](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Ordering_Flex_Items)
  - : 解釋改變彈性項目順序和方向的不同方法，並講到潛在的問題。
- [控制彈性項目與主軸的比例](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : 將解釋 flex-grow、flex-shrink、flex-basis 屬性。
- [掌握彈性項目 wrapping](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Mastering_Wrapping_of_Flex_Items)
  - : 如何使用多行建立彈性容器，並控制這些行中項目的顯示。
- [彈性盒子的典型用例](/zh-TW/docs/Web/CSS/CSS_flexible_box_layout/Typical_Use_Cases_of_Flexbox)
  - : 彈性盒子常見的設計範式。
- [彈性盒子的向下相容](/zh-TW/docs/Glossary/Flexbox)
  - : 彈性盒子的瀏覽器相容性、互操作性問題、支持舊版瀏覽器和規範的版本

## 規範

{{Specifications}}

## 參見

- [Flexbugs](https://github.com/philipwalton/flexbugs)
  - : a community-curated list of flexbox browser bugs and workarounds
- [Cross-browser Flexbox mixins](/zh-TW/docs/Glossary/Flexbox)
  - : This article provides a set of mixins for those who want to create cross-browser flexbox experiences that even work in older browser that don't support the modern flexbox syntax
