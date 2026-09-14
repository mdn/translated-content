---
title: transform
slug: Web/CSS/Reference/Properties/transform
---

**`transform`** [CSS](/zh-TW/docs/Web/CSS) 屬性可以讓你修改 CSS 可視化格式模型（visual formatting model）的空間維度。使用此屬性，元素可以被平移、旋轉、縮放和傾斜。

{{InteractiveExample("CSS Demo: transform")}}

```css interactive-example-choice
transform: matrix(1, 2, 3, 4, 5, 6);
```

```css interactive-example-choice
transform: translate(120px, 50%);
```

```css interactive-example-choice
transform: scale(2, 0.5);
```

```css interactive-example-choice
transform: rotate(0.5turn);
```

```css interactive-example-choice
transform: skew(30deg, 20deg);
```

```css interactive-example-choice
transform: scale(0.5) translate(-100%, -100%);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

如果這個屬性的值不是 `none`，將會建立一個 [stacking context](/zh-TW/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)。在這個情況下，此元素將被其所包含的 `position: fixed` 元素當成一個 containing block。

> [!WARNING]
> 只有可以變形的元素可以被變形，這包括所有被 CSS box model 掌管輸出的元素，除了[視覺格式化模型](/zh-TW/docs/Web/CSS/Guides/Display/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [table-column box](/zh-TW/docs/Web/HTML/Reference/Elements/col) 和 [table-colunm-group box](/zh-TW/docs/Web/HTML/Reference/Elements/colgroup)。

## 語法

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
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
transform: revert;
transform: revert-layer;
transform: unset;
```

`transform` 屬性可能被指定為關鍵字值 [`none`](#none) 或著一或多個 [`<transform-function>`](#transform-function) 值。

### 值

- {{cssxref("&lt;transform-function&gt;")}}
  - : 可使用一個或多個 [CSS transform 函數](/zh-TW/docs/Web/CSS/Reference/Values/transform-function)。複合的 transform 會由左至右的順序來套用。
- `none`
  - : 設定為沒有套用任何 transform。

## 可使用性問題

改變尺寸和伸縮的動畫會影響網頁普遍的可使用性，因為它們可能促發一些頭痛的問題。如果你想要在網頁中提供這樣的功能，最好在網頁中放上給使用者關閉這些功能的控制開關。

另外也可考慮使用 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} 這個媒體功能來寫一個在系統設定端的[媒體查詢](/zh-TW/docs/Web/CSS/Guides/Media_queries)，讓使用者在減少了動畫偏好之後可以關閉該使用者網頁的動畫功能。

瞭解更多:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 正式定義

{{CSSInfo}}

## 標準語法

{{csssyntax}}

## 範例

### 平移、旋轉元素

#### HTML

```html
<div>Transformed element</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### 結果

{{EmbedLiveSample("平移、旋轉元素", "400", "160")}}

### 更多範例

請參考[使用 CSS transform](/zh-TW/docs/Web/CSS/Guides/Transforms/Using) 以及 {{cssxref("&lt;transform-function&gt;")}} 的更多範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 CSS transform](/zh-TW/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("&lt;transform-function&gt;")}} data type
- A cross-browser 2D [transform plugin for jQuery](https://louisremi.github.io/jquery.transform.js/)
