---
title: accent-color
slug: Web/CSS/accent-color
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`accent-color`** 为某些元素所生成的用户界面控件设置了{{Glossary("accent", "强调色")}}。

{{InteractiveExample("CSS Demo: accent-color")}}

```css interactive-example-choice
accent-color: red;
```

```css interactive-example-choice
accent-color: #74992e;
```

```css interactive-example-choice
accent-color: rgb(255, 255, 128);
```

```css interactive-example-choice
accent-color: hsl(250, 100%, 34%);
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <input checked="" id="example-element" type="checkbox" />
    <label for="example-element" id="example-label">Example Label</label>
  </div>
</section>
```

```css interactive-example
.container > div {
  display: flex;
  align-items: center;
}

#example-element {
  width: 40px;
  height: 40px;
}

#example-label {
  margin-left: 10px;
  font-size: x-large;
}
```

支持 `accent-color` 属性的浏览器目前将其应用于下列 HTML 元素：

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/zh-CN/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/zh-CN/docs/Web/HTML/Element/input/range)
- {{HTMLElement("progress")}}

## 语法

```css
/* 关键字值 */
accent-color: auto;

/* <color> 值 */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* 全局值 */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### 取值

- `auto`
  - : 表示用户代理所选颜色，应匹配平台的强调色（若有）。
- {{CSSXref("&lt;color&gt;")}}
  - : 指定用作强调色的颜色。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置自定义强调色

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### 结果

{{EmbedLiveSample("设置自定义强调色", 500, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("background-color")}}、{{CSSXref("border-color")}}、{{CSSXref("caret-color")}}、{{CSSXref("color")}}、{{CSSXref("column-rule-color")}}、{{CSSXref("outline-color")}}、{{CSSXref("text-decoration-color")}}、{{CSSXref("text-emphasis-color")}}、{{CSSXref("text-shadow")}}——其他颜色相关属性
- {{CSSXref("&lt;color&gt;")}}——相关数据类型
- {{HTMLElement("input")}}——相关 HTML 元素
- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
