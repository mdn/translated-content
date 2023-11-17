---
title: <small>
slug: Web/HTML/Element/small
---

{{HTMLSidebar}}

HTML 中的\<small>元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在 HTML5 中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

<table>
 <tbody>
  <tr>
   <th scope="row">内容分类</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>， <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>无，必须拥有起始和结束标签</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>接受<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a>或者<a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>的任何元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只有全局属性。

## DOM 接口

这个元素实现 {{domxref("HTMLElement")}}接口。

> **备注：** 直到 Gecko 1.9.2，Firefox 为这个元素实现了 {{domxref("HTMLSpanElement")}}接口。

## 例子

### 例子 1

```html
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

#### 结果

This is the first sentence. This whole sentence is in small letters.

### 例子 2 (CSS 替代)

```html
<p>
  This is the first sentence.
  <span style="font-size:0.8em">This whole sentence is in small letters.</span>
</p>
```

#### 结果

This is the first sentence. This whole sentence is in small letters.

## 规范

{{Specifications}}

## 注意事项

尽管 \<small> 元素，\<b> 元素和 \<i> 元素被认为违反了结构和样式分离的原则，但是在 HTML5 中是允许使用这三个元素的。读者应该自行判断使用 \<small> 还是 CSS。

## 浏览器兼容性

{{Compat}}

## 另请参考

- {{ HTMLElement("b") }}
- {{ HTMLElement("font") }}
- {{ HTMLElement("style") }}
- HTML 4.01 规范： [字体样式](http://www.w3.org/TR/html4/present/graphics.html#h-15.2)
