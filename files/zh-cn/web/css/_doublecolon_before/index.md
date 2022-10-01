---
title: '::before (:before)'
slug: Web/CSS/::before
---

{{CSSRef}}

CSS 中，**`::before`** 创建一个[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)，其将成为匹配选中的元素的第一个子元素。常通过 {{ cssxref("content") }} 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。

```
/* Add a heart before links */
a::before {
  content: "♥";
}
```

**注意：** 由`::before` 和`::after` 生成的伪元素 [包含在元素格式框内](https://www.w3.org/TR/CSS2/generate.html#before-after-content)，因此不能应用在*[替换元素上](/zh-CN/docs/Web/CSS/Replaced_element)，* 比如{{htmlelement("img")}}或{{htmlelement("br")}} 元素。

## 语法

```
/* CSS3 语法 */
element::before { 样式 }

/*（单冒号）CSS2 过时语法 (仅用来支持 IE8) */
element:before  { 样式 }

/* 在每一个 p 元素前插入内容 */
p::before { content: "Hello world!"; }
```

CSS3 引入 `::before` 是为了将[伪类](/zh-CN/docs/CSS/Pseudo-classes)和[伪元素](/zh-CN/docs/CSS/Pseudo-elements)区别开来。浏览器也接受由 CSS 2 引入的 `:before` 写法。

## 示例

### 加入引用标记

使用 `::before` 伪元素的一个简单示例就是用于加入引号。此处同时使用了 `::before` 和 `{{Cssxref("::after")}}`来插入引用性文本。

#### HTML 内容

```html
<q>一些引用</q>, 他说，<q>比没有好。</q>.
```

#### CSS 内容

```css
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
```

#### 结果

{{ EmbedLiveSample('Adding_quotation_marks', '500', '50', '') }}

### 修饰实例

我们可以用几乎任何方法定义 {{ cssxref("content") }} 中的文字和图片样式。

#### HTML 内容

```html
<span class="ribbon">Notice where the orange box is.</span>
```

#### CSS 内容

```css
.ribbon {
   background-color: #5BC8F7;
}

.ribbon::before {
   content:          "Look at this orange box.";
   background-color: #FFBA10;
   border-color:     black;
   border-style:     dotted;
}
```

#### 最终结果

{{ EmbedLiveSample('Decorative_example', 450, 60) }}

### 待办列表

在本例中我们将使用伪元素来创建一个简单的待办列表。这个方法也可用于 UI 的小幅度更改和用户体验的提升。

#### HTML 内容

```html
<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
```

#### CSS 内容

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
  background: #CCFF99;
}

li.done::before {
  content: '';
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

#### JavaScript 内容

```js
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
```

下面展示的是最终得到的结果。请注意我们没有使用任何图标，对勾标识实际上是使用 CSS 定义了样式的` ::before `伪元素。接下来建立几个待办事项来完成它们吧。

#### 最终结果

{{ EmbedLiveSample('To-do_list', 400, 300) }}

## 注释

在 Firefox3.5 中，fixed 绝对定位的布局不被允许在元素前生成一个独立的元素（按照 CSS 规范，:after :before 伪类元素与其他盒模型元素是可以相互影响的，就像他们是真正的元素一样，不过是被插入到相关元素中罢了），他们可以被用来对非表格布局进行改善（例：实现元素在中心位置），只要置于中心的内容包含在元素中，那么内容的前后列不能够被添加前置或后置的兄弟元素。（i.e., it is perhaps more semantically correct to add an additional span as below, than it would to add an empty \<div/> before and after）（记住，一定要给 float 元素添加 width 属性，否则它将不会浮动）

#### HTML 内容

```html
<div class="example">
<span id="floatme">"Floated Before" should be generated on the left of the
viewport and not allow overflow in this line to flow under it. Likewise
should "Floated After" appear on the right of the viewport and not allow this
line to flow under it.</span>
</div>
```

#### CSS 内容

```css
#floatme { float: left; width: 50%; }

/* To get an empty column, just indicate a hex code for a non-breaking space: \a0 as the content (use \0000a0 when following such a space with other characters) */
.example::before {
  content: "Floated Before";
  float: left;
  width: 25%
}
.example::after {
  content: "Floated After";
  float: right;
  width:25%
}

/* For styling */
.example::before, .example::after{
  background: yellow;
  color: red;
}
```

#### 输出

{{EmbedLiveSample("Notes")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("::after") }}, {{ cssxref("content") }}
