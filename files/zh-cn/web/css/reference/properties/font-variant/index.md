---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
---

**font-variant** 属性是{{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-east-asian")}}等属性的简写。你也可以使用简写 {{cssxref("font")}} 设定`font-variant`在 CSS Level 2 (Revision 1) 中的值（即`normal` 或 `small-caps`）。

{{InteractiveExample("CSS Demo: font-variant")}}

```css interactive-example-choice
font-variant: normal;
```

```css interactive-example-choice
font-variant: no-common-ligatures proportional-nums;
```

```css interactive-example-choice
font-variant: common-ligatures tabular-nums;
```

```css interactive-example-choice
font-variant: small-caps slashed-zero;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## 语法

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Global values */
font-variant: inherit;
font-variant: initial;
font-variant: unset;
```

### 值

- `normal`
  - : 规定一个常规（normal）字型；每个非简写的属性的初始值都是 normal。属于 `font-variant` 的非简写属性有：{{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}} 和 {{cssxref("font-variant-east-asian")}}。
- `none`
  - : 将{{cssxref("font-variant-ligatures")}}设定为 `none` ，将其他非简写属性的值设定为初始值`normal`。
- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : 规定与{{cssxref("font-variant-ligatures")}}属性相关的关键字，可能的值包括： `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` 和 `no-contextual`。
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : 规定与{{cssxref("font-variant-alternates")}}属性相关的关键字和函数。
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : 规定与{{cssxref("font-variant-caps")}} 属性相关的关键字和函数。
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : 规定与{{cssxref("font-variant-alternates")}}属性相关的关键字，可能的值包括：`lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` 和 `slashed-zero`。
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : 规定与{{cssxref("font-variant-east-asian")}}属性相关的关键字，可能的值包括：`jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby`。

{{csssyntax}}

## 示例

### Setting the small-caps font variant

#### HTML

```html
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

#### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

#### 结果

{{ EmbedLiveSample('Setting_the_small-caps_font_variant') }}

## 规范

{{cssinfo}}

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-transform")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
