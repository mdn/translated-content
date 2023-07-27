---
title: 属性选择器
slug: Web/CSS/Attribute_selectors
---

{{CSSRef}}

CSS **属性选择器**匹配那些具有特定属性或属性值的元素。

```css
/* 存在 title 属性的 <a> 元素 */
a[title] {
  color: purple;
}

/* 存在 href 属性并且属性值匹配"https://example.org"的 <a> 元素 */
a[href="https://example.org"]
{
  color: green;
}

/* 存在 href 属性并且属性值包含"example"的 <a> 元素 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在 href 属性并且属性值结尾是".org"的 <a> 元素 */
a[href$=".org"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的<a>元素 */
a[class~="logo"] {
  padding: 2px;
}
```

## 语法

- `[attr]`
  - : 表示带有以 _attr_ 命名的属性的元素。
- `[attr=value]`
  - : 表示带有以 _attr_ 命名的属性，且属性值为 _value_ 的元素。
- `[attr~=value]`
  - : 表示带有以 _attr_ 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 _value_。
- `[attr|=value]`
  - : 表示带有以 _attr_ 命名的属性的元素，属性值为“value”或是以“value-”为前缀（`-` 为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN、zh-TW 可以用 zh 作为 value）。
- `[attr^=value]`
  - : 表示带有以 _attr_ 命名的属性，且属性值是以 _value_ 开头的元素。
- `[attr$=value]`
  - : 表示带有以 _attr_ 命名的属性，且属性值是以 _value_ 结尾的元素。
- `[attr*=value]`
  - : 表示带有以 _attr_ 命名的属性，且属性值至少包含一个 _value_ 值的元素。
- `[attr operator value i]`
  - : 在属性选择器的右方括号前添加一个用空格隔开的字母 `i`（或 `I`），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。
- `[attr operator value s]` {{Experimental_Inline}}
  - : 在属性选择器的右方括号前添加一个用空格隔开的字母 `s`（或 `S`），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。

## 示例

### 链接

#### CSS

```css
a {
  color: blue;
}

/* 以 "#" 开头的页面内部链接 */
a[href^="#"] {
  background-color: gold;
}

/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}

/* 包含 "insensitive" 的链接，不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}

/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}

/* 以 "https" 开始，".org" 结尾的链接 */
a[href^="https"][href$=".org"] {
  color: green;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">内部链接</a></li>
  <li><a href="http://example.com">示例链接</a></li>
  <li><a href="#InSensitive">非敏感内部链接</a></li>
  <li><a href="http://example.org">示例 org 链接</a></li>
  <li><a href="https://example.org">示例 https org 链接</a></li>
</ul>
```

#### 结果

{{EmbedLiveSample("链接")}}

### 多语言

#### CSS

```css
/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}

/* 将所有语言为美式英语的 <div> 元素的文本颜色设为蓝色 */
div[lang~="en-us"] {
  color: blue;
}

/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
div[lang="pt"] {
  color: green;
}

/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
div[lang|="zh"] {
  color: red;
}

/* 将所有 `data-lang` 属性的值为 "zh-TW" 的 <div> 元素的文本颜色设为紫色 */
/* 备注：和 JS 不同，CSS 可以在不使用双引号的情况下直接使用带连字符的属性名 */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">世界您好！</div>
```

#### 结果

{{EmbedLiveSample("多语言")}}

### HTML 有序列表

HTML 规范要求 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性被不分大小写地匹配，因为它主要用于 {{HTMLElement("input")}} 元素中。请注意，如果用户代理不支持这些修饰符，那么选择器将无法匹配。

#### CSS

```css
/* 根据文档语言不同，大小写敏感性不同 */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}
ol[type="b" s] {
  list-style-type: lower-alpha;
  background: lime;
}
ol[type="B" s] {
  list-style-type: upper-alpha;
  background: grey;
}
ol[type="c" i] {
  list-style-type: upper-alpha;
  background: green;
}
```

#### HTML

```html
<ol type="A">
  <li>非大小写敏感匹配呈现红色背景（类型选择器默认值）</li>
</ol>
<ol type="b">
  <li>如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景</li>
</ol>
<ol type="B">
  <li>如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景</li>
</ol>
<ol type="C">
  <li>如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景</li>
</ol>
```

#### 结果

{{EmbedLiveSample("HTML 有序列表")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("attr")}}
- 选择单个元素：{{DOMxRef("Document.querySelector()")}}、{{DOMxRef("DocumentFragment.querySelector()")}} 或 {{DOMxRef("Element.querySelector()")}}
- 选择所有匹配的元素：{{DOMxRef("Document.querySelectorAll()")}}、{{DOMxRef("DocumentFragment.querySelectorAll()")}} 或 {{DOMxRef("Element.querySelectorAll()")}}
