---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`text-decoration-style`** 用于设置由 {{ cssxref("text-decoration-line") }} 设定的线的样式。线的样式会应用到所有被 `text-decoration-line` 设定的线，不能为其中的每条线设置不同的样式。当要设置多个线修饰属性时，用 {{cssxref("text-decoration")}} 简写属性会比分别写多个属性更方便。

{{EmbedInteractiveExample("pages/css/text-decoration-style.html")}}

如果设定的修饰效果具有特定的语义，例如删除线的意味着某些文本被删除了，开发者最好使用有语义的 HTML 标签来表达，比如 {{ HTMLElement("del") }} 或 {{ HTMLElement("s") }} 标签，因为浏览器有时可能会屏蔽某些样式，但语义化的标签则不会出现这样的问题。

当一次使用多个 line-decoration 属性时，使用 {{cssxref("text-decoration")}} 简写属性会更方便。

## 语法

```css
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: unset;
```

### 值

- solid
  - : 画一条实线。
- double
  - : 画一条双实线。
- dotted
  - : 画一条点划线。
- dashed
  - : 画一条虚线。
- wavy
  - : 画一条波浪线。
- \-moz-none{{ non-standard_inline }}
  - : 不画线。亦可用 {{ cssxref("text-decoration-line") }}`: none` 替代。

### 形式语法

{{csssyntax}}

## 示例

```css
.example {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  -webkit-text-decoration-color: red;
}
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 当要设置多个线修饰属性时，用 {{cssxref("text-decoration")}} 简写属性会比分别写多个属性更方便
