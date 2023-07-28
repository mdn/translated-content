---
title: "<rb>: The Ruby Base element"
slug: Web/HTML/Element/rb
---

{{HTMLSidebar}}{{deprecated_header}}

**HTML Ruby Base**（`<rb>`）元素用于分隔{{HTMLElement("ruby")}}注释的基本文本组件（即正在注释的文本）。一个`<rb>`元素应该包装基本文本的每个单独的原子段。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容范畴</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td>作为 {{htmlelement("ruby")}} 元素的子元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>如果元素紧跟{{HTMLElement("rt")}}、{{HTMLElement("rtc")}}或{{HTMLElement("rp")}}元素或其他元素，则可省略结束标记 &lt;rb&gt;元素，或者如果父元素中没有其他内容。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("ruby")}}元素。</td>
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

这个元素仅仅支持 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 用法注解

- Ruby 注解用于展示东亚文字的发音，例如使用日语罗马音和汉语拼音的文字。 `<rb>` 元素用于分隔出 ruby 基本文本的每个片段。
- 虽然 `<rb>` 不是一个空元素，但是在源码中通常只包括每个元素的开始标签。因此 ruby 标记就不那么复杂，也更容易阅读。在渲染版本中，浏览器也可以填充完整的元素。
- 你需要为要注释的每个基本段（`<rb>`元素）包含一个{{htmlelement("rt")}}元素。

## 示例

在此示例中，我们提供了与“hanzi”等效的原始字符的注释：

```html
<ruby> <rb>漢</rb>字 <rp>(</rp><rt>han</rt>zi<rp>)</rp> </ruby>
```

请注意我们如何包含两个`<rb>`元素，以分隔 ruby 基本文本的两个独立部分。另一方面，注释由两个{{htmlelement("rt")}}元素分隔。

请注意，我们也可以使用完全单独注释的两个基本文本部分来编写此示例。在这种情况下，我们不需要包含`<rb>`元素：

### 支持 ruby

```html
<ruby>
  漢 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

输出看起来像这样：

{{EmbedLiveSample("支持 ruby", "100%", 60)}}

### 不支持 ruby

当在不支持 ruby 的浏览器中呈现时，上面的 HTML 可能看起来像这样：

```html hidden
漢字 (han zi)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("不支持 ruby", "100%", 60)}}

> **备注：** 有关更多示例，请参阅有关{{HTMLElement("ruby")}}元素的文章。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
