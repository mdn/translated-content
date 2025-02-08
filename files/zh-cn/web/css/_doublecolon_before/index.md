---
title: ::before
slug: Web/CSS/::before
l10n:
  sourceCommit: 9479d8f616977486f1cbe972266ad56904b714e9
---

{{CSSRef}}

CSS 中，**`::before`** 创建一个[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)，其将成为匹配选中的元素的第一个子元素。常通过 {{ cssxref("content") }} 属性来为一个元素添加修饰性的内容。此元素默认是行级的。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-before.html", "tabbed-standard")}}

> [!NOTE]
> 由 `::before` 和 `::after` 伪元素生成的盒子，就好像它们是应用它们的元素或“原始元素（originating element）”的直接子元素一样，因此不能应用在[_替换元素上_](/zh-CN/docs/Web/CSS/Replaced_element)，比如 {{htmlelement("img")}} 元素，其内容不在 CSS 格式化模型的范围内。

## 语法

```css-nolint
::before {
  content: /* 值 */;
  /* 属性 */
}
```

如果 [`content`](/zh-CN/docs/Web/CSS/content) 属性没有明确指定，或者有一个无效值，或者其值为 `normal` 或 `none`，则 `::before` 伪元素不会被渲染。它的行为就好像设置了 `display: none` 一样。

> **备注：** [Selectors 第 3 版](https://drafts.csswg.org/selectors-3/#gen-content)引入了双冒号标记法 `::before`，以将[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)和[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)区别开。浏览器也接受由 CSS2 引入的 `:before` 写法。

## 示例

### 加入引号标记

使用 `::before` 伪元素的一个简单示例就是用于加入引号。此处同时使用了 `::before` 和 `{{Cssxref("::after")}}`来插入引用性文本。

#### HTML

```html
<q>有引号，</q>他说，<q>总比没有好。</q>
```

#### CSS

```css
q::before {
  content: "“";
  color: blue;
}
q::after {
  content: "”";
  color: red;
}
```

#### 结果

{{EmbedLiveSample('加入引号标记', '500', '50')}}

### 修饰示例

我们可以用几乎任何方法定义 {{ cssxref("content") }} 中的文字和图片样式。

#### HTML

```html
<span class="ribbon">注意橙色方框的位置。</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "看橙色的盒子。";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 结果

{{EmbedLiveSample('修饰示例', 450, 60)}}

### 待办列表

在本例中我们将使用伪元素来创建一个简单的待办列表。这个方法也可用于 UI 的小幅度更改和用户体验的提升。

#### HTML

```html
<ul>
  <li>买牛奶</li>
  <li>带着狗散步</li>
  <li>锻炼</li>
  <li>写代码</li>
  <li>播放音乐</li>
  <li>放松</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

下面展示的是最终得到的结果。请注意我们没有使用任何图标，对勾标识实际上是使用 CSS 定义了样式的 `::before` 伪元素。接下来建立几个待办事项来完成它们吧。

#### 结果

{{ EmbedLiveSample('待办列表', 400, 300) }}

### 特殊字符

由于这是 CSS；不是 HTML，你**不**可以在内容值中使用标记实体。如果你需要使用特殊字符，并且无法将其直接输入到 CSS 内容字符串中，那么请使用 unicode 转义序列，该序列由一个反斜杠和十六进制 unicode 值组成。

#### HTML

```html
<ol>
  <li>把鸡蛋打入碗中</li>
  <li>加牛奶</li>
  <li>加面粉</li>
  <li aria-current="step">混合成光滑的面糊</li>
  <li>将一勺面糊倒在热的、抹了油的平底锅上</li>
  <li>煎至煎饼顶部失去光泽</li>
  <li>把它翻过来再煎几分钟</li>
  <li>配上你喜欢的佐料</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::after {
  content: " \21E6"; /* 向左白色箭头的十六进制 */
  display: inline;
}
```

#### 结果

{{EmbedLiveSample('特殊字符', 400, 200)}}

## 无障碍考虑

不鼓励使用 `::before` 伪元素添加内容，因为屏幕阅读器无法可靠地访问它。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
