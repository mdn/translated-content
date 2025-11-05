---
title: outline-width
slug: Web/CSS/Reference/Properties/outline-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`outline-width`** 设置元素轮廓的粗细。轮廓是绘制在元素周围的线，位于 {{cssxref("border")}} 之外。

{{InteractiveExample("CSS 演示：outline-width")}}

```css interactive-example-choice
outline-width: 12px;
```

```css interactive-example-choice
outline-width: thin;
```

```css interactive-example-choice
outline-width: medium;
```

```css interactive-example-choice
outline-width: thick;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    这是一个带有轮廓线框的盒子。
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

在定义轮廓的外观时，通常使用简写属性 {{cssxref("outline")}} 更为方便。

## 语法

```css
/* 关键字值 */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> 值 */
outline-width: 1px;
outline-width: 0.1em;

/* 全局值 */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: revert-layer;
outline-width: unset;
```

`outline-width` 属性的值可以是以下列表的任意一项。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 轮廓的宽度指定为 `<length>`。
- `thin`
  - : 取决于用户代理。通常等同于桌面浏览器的 `1px`（包括 Firefox）。
- `medium`
  - : 取决于用户代理。通常等同于桌面浏览器的 `3px`（包括 Firefox）。
- `thick`
  - : 取决于用户代理。通常等同于桌面浏览器的 `5px`（包括 Firefox）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置元素的轮廓宽度

#### HTML

```html
<span id="thin">细</span>
<span id="medium">中等</span>
<span id="thick">粗</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### 结果

{{EmbedLiveSample('设置元素的轮廓宽度', '100%', '80')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("outline")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
