---
title: <strong>
slug: Web/HTML/Element/strong
---

## 总结

Strong 元素 (`<strong>`) 表示文本十分重要，一般用粗体显示。

## 使用环境

<table class="standard-table">
 <tbody>
  <tr>
   <td>内容分类</td>
   <td>流内容，语法内容</td>
  </tr>
  <tr>
   <td>允许的内容</td>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a></td>
  </tr>
  <tr>
   <td>标签省略</td>
   <td>不允许，必须同时有起始和结束标签</td>
  </tr>
  <tr>
   <td>允许的父级元素</td>
   <td>任何接受<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>的元素，或者接受 <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>的元素</td>
  </tr>
  <tr>
   <td>规范文档</td>
   <td><a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-strong-element">HTML5, section 4.6.3</a>; <a href="http://www.w3.org/TR/html401/struct/text.html#edef-STRONG">HTML 4.01, section 9.2.1</a></td>
  </tr>
 </tbody>
</table>

## 属性

只具有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

## DOM 接口

实现了 `HTMLElement` 接口。

> [!NOTE]
> 实现注意事项**:** 一直到 Gecko 1.9.2 (含), Firefox 对这个元素实现了 [`HTMLSpanElement`](/zh-CN/docs/DOM/span) 接口

## 举例

```html
<p>When doing x it is <strong>imperative</strong> to do y before proceeding.</p>
```

## 效果

```plain
When doing x it is imperative to do y before proceeding.
```

### Bold vs. Strong

新的开发者经常感到疑惑，为什么在一个渲染的网站上会有这么多方式来表达同样的东西。Bold 和 Strong 可能就是这其中的一种。为什么使用\<strong>\</strong>而不是\<b>\</b>? 使用 strong 的话你不得不打更多的字母，却产生出和 b 同样的效果，对吧？

也许并不是；strong 是一个逻辑状态，而 bold 是一个物理状态。逻辑状态分离内容和表现形式，使用逻辑状态允许你用各种不同的方式来表达。比如你想把文字渲染成红色，使用其他大小的字体、带有下划线或其他样式，而不是加粗的样式。必须要理解使用 strong 呈现出的表现形式不同于单纯的加粗。因为 bold 是一个物理状态，他没有区分表现形式和内容。如果让 bold 做了加粗文本外的其他任何事情，都将会令人困惑而且也不符合逻辑。

同样应该注意\<b>\</b> 还有其他用途，比如想单纯地吸引注意而不增加其重要性。

### Emphasis vs. Strong

在 HTML4 时，Strong 简单地表示一个更强的强调 (emphasis)，而在 HTML5 中，这个元素被描述为表征“内容强烈的重要性 (strong importance for its contents) ”。这是一个重要的区别。Em 标签 (Emphasis) 用于改变一个句子的意思 (比如"我\<em>*喜欢\</em>*胡萝卜" 和"我喜欢\<em>_胡萝卜\</em>_"，分别强调喜欢和胡萝卜), Strong 用来对一个句子的部分增加重要性 (比如 "**警告！** 这**非常危险**。") Strong 和 Emphasis 都可以分别通过嵌套来增加相对重要性或强调重点。

## 规范

{{Specifications}}

## 同样参见

- [HTML bold element](/zh-CN/docs/Web/HTML/Element/b)
- [HTML em element](/zh-CN/docs/Web/HTML/Element/em)

{{HTMLSidebar}}
