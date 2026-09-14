---
title: accent-color
slug: Web/CSS/Reference/Properties/accent-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`accent-color`** 用于为某些元素生成的用户界面控件设置{{Glossary("accent", "强调")}}色。

{{InteractiveExample("CSS 演示：accent-color")}}

```css interactive-example-choice
accent-color: red;
```

```css interactive-example-choice
accent-color: #74992e;
```

```css interactive-example-choice
accent-color: rgb(255 255 128);
```

```css interactive-example-choice
accent-color: hsl(250 100% 34%);
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <input checked="" id="example-element" type="checkbox" />
    <label for="example-element" id="example-label">示例标签</label>
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

当前支持 `accent-color` 的浏览器，会将其应用于以下 HTML 元素：

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio)
- [`<input type="range">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/range)
- [`<progress>`](/zh-CN/docs/Web/HTML/Reference/Elements/progress)

每个用户代理（浏览器）都有其默认的强调色，并会根据可读性和对比度进行适当调整。这种强调色并不会被所有用户界面控件或控件的所有状态使用。`accent-color` 仅适用于那些在特定状态下会使用强调色的用户界面控件。

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

### 值

- `auto`
  - : 表示由用户代理选择的颜色，应与系统或平台的强调色保持一致（如果存在）。
- {{cssxref("&lt;color&gt;")}}
  - : 指定要用作强调色的颜色。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

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

{{EmbedLiveSample('设置自定义强调色', 500, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("caret-color")}}、{{cssxref("color")}}、{{cssxref("column-rule-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}：其他与颜色相关的属性
- {{cssxref("&lt;color&gt;")}}：相关数据类型
- {{HTMLElement("input")}}：相关 HTML 元素
