---
title: "-webkit-border-before"
slug: Web/CSS/-webkit-border-before
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-border-before`** [CSS](/zh-CN/docs/Web/CSS) 属性 是一种用于简写的属性。它用于在样式表的单个位置设置各个起始边框属性值。

```css
/* Border values */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Global values */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
```

`-webkit-border-before` 可以使用以下一个或多个值：

1. {{cssxref("-webkit-border-before-width")}}
2. {{cssxref("-webkit-border-before-style")}}
3. {{cssxref("-webkit-border-before-color")}}.

它根据元素的书写模式、方向以及文本方向映射到 Border 上。对应到四个边框属性{{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}或{{cssxref("border-left")}} ，具体取决于 {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}三个属性定义的值。

这个属性和 {{cssxref("-webkit-border-after")}}、{{cssxref("-webkit-border-start")}}、{{cssxref("-webkit-border-end")}}三个属性用来定义元素的边界。

此属性在相关标准上的命名为 {{cssxref("border-block-start")}}.

{{cssinfo}}

## 语法

### 可选择的值

按以下顺序，一个或多个值

- `<'border-width'>`
  - : 参考 {{cssxref("border-width")}}
- `<'border-style'>`
  - : 参考 {{cssxref("border-style")}}
- `<'color'>`
  - : 参考 {{cssxref("color")}}

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

{{EmbedLiveSample("示例", 140, 140)}}

## 规范

尽管它和 {{cssxref("border-block-start")}} 属性有关，但现在并不存在与任何一标准规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border-block-start")}}
- The mapped physical properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, and {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
