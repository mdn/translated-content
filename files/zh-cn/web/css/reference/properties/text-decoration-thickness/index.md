---
title: text-decoration-thickness
slug: Web/CSS/Reference/Properties/text-decoration-thickness
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-decoration-thickness`** 用于设置元素中文本所使用的装饰线（如 line-through、underline 或 overline）的笔触粗细。

{{InteractiveExample("CSS 演示：text-decoration-thickness")}}

```css interactive-example-choice
text-decoration-line: underline;
text-decoration-thickness: 3px;
```

```css interactive-example-choice
text-decoration-line: line-through;
text-decoration-thickness: 0.4rem;
```

```css interactive-example-choice
text-decoration-line: underline overline;
text-decoration-thickness: from-font;
font-size: 2rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">困惑轻吻我的脸颊，留下苦涩中带着甜蜜的滋味</p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-color: red;
}
```

## 语法

```css
/* 单关键字 */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* 长度 */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* 百分比 */
text-decoration-thickness: 10%;

/* 全局值 */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### 值

- `auto`
  - : 由浏览器为文本装饰线选择合适的粗细。
- `from-font`
  - : 如果字体文件中包含了首选的粗细值，则使用字体文件的粗细值。如果字体文件中没有包含首选的粗细值，则效果和设置为 `auto` 一样，由浏览器选择合适的粗细值。
- `<length>`
  - : 将文本装饰线的粗细设置为一个 {{cssxref('length')}} 类型的值，覆盖掉字体文件建议的值或浏览器默认的值。
- `<percentage>`
  - : 指定文本装饰线的粗细，其值为当前字体中 **1em** 的 {{cssxref('percentage')}}。百分比值作为相对值继承，因此会随字体变化而缩放。浏览器必须使用至少 1 个设备像素。对于该属性的特定应用场景，其粗细在整个应用的盒子内保持恒定，即使盒子内存在字号不同的子元素亦然。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 粗细变化

#### HTML

```html
<p class="thin">这里的文字具有 1px 的红色下划线。</p>
<p class="thick">这里的文字具有 5px 的红色下划线。</p>
<p class="shorthand">这里使用了等价的简写形式。</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### 结果

{{ EmbedLiveSample('粗细变化') }}

## 规范

{{Specifications}}

> [!NOTE]
> 此属性曾经称为 `text-decoration-width`，但在 2019 年更新为 `text-decoration-thickness`。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
