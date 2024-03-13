---
title: content
slug: Web/CSS/content
---

{{CSSRef}}

## 概要

CSS 的 `content` CSS 属性用于在元素的 {{ cssxref("::before") }} 和 {{ cssxref("::after") }} 伪元素中插入内容。使用 `content` 属性插入的内容都是匿名的[_可替换元素_](/zh-CN/docs/Web/CSS/Replaced_element)。

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("content")}}
```

```
content: normal                                /* Keywords that cannot be combined with other values */
content: none

content: 'prefix'                              /* <string> value, non-latin characters must be encoded e.g. \00A0 for &nbsp; */
content: url(http://www.example.com/test.html) /* <uri> value */
content: chapter_counter                       /* <counter> values */
content: attr(value string)                    /* attr() value linked to the HTML attribute value */
content: open-quote                            /* Language- and position-dependant keywords */
content: close-quote
content: no-open-quote
content: no-close-quote

content: open-quote chapter_counter            /* Except for normal and none, several values can be used simultaneously */

content: inherit
```

### 值

- `none`
  - : 不会产生伪类元素
- `normal`
  - : `:before` 和 `:after` 伪类元素中会被视为 `none`
- \<string>
  - : 文本内容
- \<uri> `url()`
  - : URI 值会指定一个外部资源（比如图片）。如果该资源或图片不能显示，它就会被忽略或显示一些占位（比如无图片标志）。
- \<counter>
  - : 计数器可以指定两种不同的函数：`counter()` 或 `counters()`。前面一个有两种形式：`counter(name)`或`counter(name,style)` 。产生的内容是该伪类元素指定名称的最小范围的计数；格式由 style 指定（默认是'decimal'——十进制数字）。后一个函数同样也有两种形式：`counters(name,string)` 或 `counters(name,string,style)` 。The generated text is the value of all counters with the given name in scope at this pseudo-element, from outermost to innermost separated by the specified string. The counters are rendered in the indicated style ('decimal' by default). See the section on automatic counters and numbering for more information. The name must not be 'none', 'inherit' or 'initial'. Such a name causes the declaration to be ignored.
- `attr(X)`
  - : 将元素的 X 属性以字符串形式返回。如果该元素没有 X 属性，则返回一个空字符串。区分大小写的属性返回值依赖文挡的语言设定。
- `open-quote` | `close-quote`
  - : 这些值会被 {{ cssxref("quotes") }} 中定义的字符串替换。
- `no-open-quote` | `no-close-quote`
  - : 不会生产任何内容，但是会改变（增加或降低）引号层级。

## 示例

### 标题和引号

#### HTML

```html
<h1>5</h1>
<p>
  We shall start this with a quote from Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.</q
  >
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>

<h1>6</h1>
<p>
  Here we shall quote the Mozilla Manifesto,
  <q cite="http://www.mozilla.org/en-US/about/manifesto/">
    Individuals must have the ability to shape the Internet and their own
    experiences on the Internet.</q
  >
  And so, we can infer that contributing to the open web, can protect our own
  individual experiences on it.
</p>
```

#### CSS

```css
q {
  color: #00008b;
  font-style: italic;
}

q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}

h1::before {
  content: "Chapter ";
}
```

#### 结果

{{ EmbedLiveSample('标题和引号', 460, 100) }}

### link 前面加一个 icon

#### HTML

```html
<a href="http://www.mozilla.org/en-US/">Home Page</a>
```

#### CSS

```css
a::before {
  content: url(http://www.mozilla.org/favicon.ico) " MOZILLA: ";
  font:
    x-small Arial,
    freeSans,
    sans-serif;
  color: gray;
}
```

#### 结果

{{ EmbedLiveSample('link 前面加一个 icon', 200, 60) }}

### 自定义列表后面加加文字

#### HTML

```html
<div>
  <ul class="brightIdea">
    <li>This is my first idea</li>
    <li>and another good idea</li>
  </ul>
</div>
```

#### CSS

```css
/* first import the icon from a suitable site */
@import url(http://weloveiconfonts.com/api/?family=entypo);

.brightIdea li::after {
  content: "\1f4a1";
  font-family: "entypo", sans-serif;
}
```

#### 结果

{{EmbedLiveSample('自定义列表后面加加文字', 300, 100)}}

### class based example

#### HTML

```html
<h2>Paperback best sellers</h2>
<ol>
  <li>Political thriller</li>
  <li class="newEntry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="newEntry">Vampire Romance</li>
</ol>
```

#### CSS

```css
/* use a class rather that an element selector to give more flexibility.
Simple string example, but don't forget add a leading space in the text string
for spacing purposes  */

.newEntry::after {
  content: " New!";
  color: red;
}
```

#### 结果

{{ EmbedLiveSample('class based example', 300, 200) }}

### rich link styling

#### HTML

```html
<ul>
  <li><a id="moz" href="http://www.mozilla.org/"> Mozilla Home Page</a></li>
  <li>
    <a id="mdn" href="https://developer.mozilla.org/">
      Mozilla Developer Network</a
    >
  </li>
  <li><a id="w3c" href="http://www.w3c.org/"> World Wide Web Consortium</a></li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url(https://mozorg.cdn.mozilla.net/media/img/favicon.ico);
}

#mdn::before {
  content: url(mdn-favicon16.png);
}

li {
  margin: 1em;
}
```

#### 结果

{{ EmbedLiveSample('rich link styling', 340, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("::after") }}, {{ Cssxref("::before") }}, {{ Cssxref("quotes") }}
