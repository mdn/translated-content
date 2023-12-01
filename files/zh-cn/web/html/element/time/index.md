---
title: <time>：（日期）时间元素
slug: Web/HTML/Element/time
---

{{HTMLSidebar}}

## 概述

HTML _time_ 标签 (`<time>`) 用来表示 24 小时制时间或者[公历日期](http://en.wikipedia.org/wiki/Gregorian_calendar)，若表示日期则也可包含时间和时区。

此元素意在以机器可读的格式表示日期和时间。有安排日程表功能的应用可以利用这一点。

> **备注：** 如果给定的日期不是正常日期或者在公历中最早的日期之前，请不要使用此元素。

> **备注：** 该元素仍在设计和讨论中 (<http://blog.whatwg.org/weekly-time-data>)

### 使用场景

<table class="standard-table">
 <tbody>
  <tr>
   <td><a href="/zh-cn/HTML/Content_categories">内容分类</a></td>
   <td><a href="/zh-cn/HTML/Content_categories#flow_content">flow content</a>, <a href="/zh-cn/HTML/Content_categories#phrasing_content">phrasing content</a></td>
  </tr>
  <tr>
   <td>可包含内容</td>
   <td><a href="/zh-cn/HTML/Content_categories#Phrasing_content">Phrasing content</a>，但不能包含子 <code>time</code> 元素。</td>
  </tr>
  <tr>
   <td>标签可省略？</td>
   <td>起止标签均不能省略。</td>
  </tr>
  <tr>
   <td>允许的父元素</td>
   <td>任何接受 phrasing content 的元素。</td>
  </tr>
  <tr>
   <td>标准文档</td>
   <td><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-time-element">HTML5, section 4.6.10</a></td>
  </tr>
 </tbody>
</table>

### 属性

像所有其他元素一样，此元素拥有可以使用 [通用属性](/zh-CN/HTML/Global_attributes)。

- `datetime`
  - : 该属性表示此元素的时间和日期，并且属性值必须是一个[有效的日期格式，并可包含时间](http://www.w3.org/TR/html5/common-microsyntaxes.html#valid-date-string-with-optional-time)。如果此值不能被解析为日期，元素不会有一个关联的时间戳。
- `pubdate`
  - : (该属性仍在被 WHATWG 和 W3C 组织设计和讨论中.) This Boolean attribute specifies that the date and time given by the element is the publication date of a document. The document it applies to is either the nearest ancestor article element or the document as a whole (if there is no ancestor [article](/zh-CN/HTML/Element/article) element). If true, the `time` element must have a corresponding date. Additionally, each `time` element indicating a publication date must be the only `time` element that does so for that document.

### DOM 接口

该元素实现了 [`HTMLTimeElement`](/zh-CN/DOM/HTMLTimeElement) 接口。

### 例子

```html
<p>The concert starts at <time>20:00</time>.</p>
```

上面的 HTML 会显示：

The concert starts at 20:00.

#### `pubdate` 示例

```html
<article>
  <p>This article was created on <time pubdate>2011-01-28</time>.</p>
</article>
```

上面的 HTML 会显示：

This article was created on 2011-01-28.

#### `datetime` 示例

```html
<p>
  The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.
</p>
```

上面的 HTML 会显示：

The concert took place on May 15.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
