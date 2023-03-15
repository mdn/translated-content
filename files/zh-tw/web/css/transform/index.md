---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

**`transform`** [CSS](/zh-TW/docs/Web/CSS) 屬性可以讓你修改 CSS 可視化格式模型（visual formatting model）的空間維度。使用此屬性，元素可以被平移、旋轉、縮放和傾斜。

{{EmbedInteractiveExample("pages/css/transform.html")}}

如果這個屬性的值不是 `none`，將會建立一個 [stacking context](/zh-TW/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)。在這個情況下，此元素將被其所包含的 `position: fixed` 元素當成一個 containing block。

> **警告：** 只有可以變形的元素可以被變形，這包括所有被 CSS box model 掌管輸出的元素，除了[視覺格式化模型](/zh-TW/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [table-column boxes](/zh-TW/docs/Web/HTML/Element/col) 和 [table-colunm-group boxes](/zh-TW/docs/Web/HTML/Element/colgroup)。

## 語法

```plain
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

`transform` 屬性可能被指定為關鍵字值 [`none`](#none) 或著一或多個 [`<transform-function>`](#transform-function) 值。

### 值

- ">{{cssxref("&lt;transform-function&gt;")}}
  - : 可使用一個或多個 [CSS transform functions](/zh-TW/docs/Web/CSS/transform-function)。複合的 transforms 會由左至右的順序來套用。
- `none`
  - : 設定為沒有套用任何 transform。

## 可使用性問題

改變尺寸和伸縮的動畫會影響網頁普遍的可使用性，因為它們可能促發一些頭痛的問題。如果你想要在網頁中提供這樣的功能，最好在網頁中放上給使用者關閉這些功能的控制開關。

另外也可考慮使用{{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} 這個媒體功能來寫一個在系統設定端的[媒體詢問](/zh-TW/docs/Web/CSS/Media_Queries)，讓使用者在減少了動畫偏好之後可以關閉該使用者網頁的動畫功能。

瞭解更多:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 正式定義

{{CSSInfo}}

## 標準語法

{{csssyntax}}

## 範例

### 平移、旋轉元素

### HTML

```html
<p>Transformed element</p>
```

### CSS

```css
p {
  border: solid red;
  transform: translate(100px) rotate(20deg);
  transform-origin: 0 -250px;
}
```

### 結果

{{EmbedLiveSample("平移、旋轉元素", "400", "160")}}

### 更多範例

請參考[使用 CSS transforms](/zh-TW/docs/Web/Guide/CSS/Using_CSS_transforms) 以及 {{cssxref("&lt;transform-function&gt;")}} 的更多範例。

## 規範

{{Specifications}}

{{cssinfo}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 CSS transforms](/zh-TW/docs/CSS/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} data type
- A cross-browser 2D [transform plugin for jQuery](https://louisremi.github.io/jquery.transform.js/)
