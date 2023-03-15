---
title: 行内元素
slug: Web/HTML/Inline_elements
---

{{HTMLSidebar}}

## 摘要

HTML (超文本标记语言) 元素大多数都是行内元素或[块级元素](/zh-CN/docs/Web/HTML/Block-level_elements)。一个行内元素只占据它对应标签的边框所包含的空间。下面这个例子说明了行内元素的作用范围：

## 行内元素示例

### HTML

```html
<p>This <span>span</span> is an inline element; its background has been colored to display both the beginning and end of the inline element's influence</p>
```

### CSS

```css
span { background-color: #8ABB55; }
```

{{ EmbedLiveSample('行内元素示例') }}

## 行内元素与块级元素对比

- 内容
  - : 一般情况下，行内元素只能包含数据和其他行内元素。
    而块级元素可以包含行内元素和其他块级元素。这种结构上的包含继承区别可以使块级元素创建比行内元素更”大型“的结构。
- 格式
  - : 默认情况下，行内元素不会以新行开始，而块级元素会新起一行。

## 行内元素列表

下面的元素都是行内元素：

- [b](/zh-CN/docs/Web/HTML/Element/b), [big](/zh-CN/docs/Web/HTML/Element/big), [i](/zh-CN/docs/Web/HTML/Element/i), [small](/zh-CN/docs/Web/HTML/Element/small), [tt](/zh-CN/docs/Web/HTML/Element/tt)
- [abbr](/zh-CN/docs/Web/HTML/Element/abbr), [acronym](/zh-CN/docs/Web/HTML/Element/acronym), [cite](/zh-CN/docs/Web/HTML/Element/cite), [code](/zh-CN/docs/Web/HTML/Element/code), [dfn](/zh-CN/docs/Web/HTML/Element/dfn), [em](/zh-CN/docs/Web/HTML/Element/em), [kbd](/zh-CN/docs/Web/HTML/Element/kbd), [strong](/zh-CN/docs/Web/HTML/Element/strong), [samp](/zh-CN/docs/Web/HTML/Element/samp), [var](/zh-CN/docs/Web/HTML/Element/var)
- [a](/zh-CN/docs/Web/HTML/Element/a), [bdo](/zh-CN/docs/Web/HTML/Element/bdo), [br](/zh-CN/docs/Web/HTML/Element/br), [img](/zh-CN/docs/Web/HTML/Element/Img), [map](/zh-CN/docs/Web/HTML/Element/map), [object](/zh-CN/docs/Web/HTML/Element/object), [q](/zh-CN/docs/Web/HTML/Element/q), [script](/zh-CN/docs/Web/HTML/Element/Script), [span](/zh-CN/docs/Web/HTML/Element/span), [sub](/zh-CN/docs/Web/HTML/Element/sub), [sup](/zh-CN/docs/Web/HTML/Element/sup)
- [button](/zh-CN/docs/Web/HTML/Element/button), [input](/zh-CN/docs/Web/HTML/Element/Input), [label](/zh-CN/docs/Web/HTML/Element/label), [select](/zh-CN/docs/Web/HTML/Element/select), [textarea](/zh-CN/docs/Web/HTML/Element/textarea)

## 另请参阅

- [块级元素](/zh-CN/docs/Web/HTML/Block-level_elements)
