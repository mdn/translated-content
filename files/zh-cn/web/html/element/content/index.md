---
title: <content>
slug: Web/HTML/Element/content
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

**HTML `<content>` 元素**——[Web 组件](/zh-CN/docs/Web/Web_Components) 的技术套件的废弃部分 — 用于 [Shadow DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM) 内部作为 {{glossary("insertion point")}}，并且不可用于任何正常的 HTML，现在已被 {{HTMLElement("slot")}} 元素代替，它在 DOM 中创建一个位置，Shadow DOM 会插入这里。

> **备注：** 虽然在规范的草案中出现，并且在多个浏览器中实现，这个元素依然会在规范的之后版本中移除。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Transparent_content_model">透明内容</a></td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">流式内容</a></td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受流式内容的元素</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLContentElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `select`
  - : 逗号分隔的选择器列表，它们和 CSS 选择器语法相同。它们选择要插入的内容，来替换为 `<content>` 元素。

## 示例

这里是一个使用 `<content>` 元素的简单示例。它是个 HTML 文件，包含所有所需的东西。

> **备注：** 为了使这个代码有效，你使用的浏览器必须支持 Web 组件，请见 [Enabling Web Components in Firefox](/zh-CN/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox)。

```html
<html lang="en">
  <head></head>
  <body>
    <!-- The original content accessed by <content> -->
    <div>
      <h4>My Content Heading</h4>
      <p>My content text</p>
    </div>

    <script>
      // Get the <div> above.
      const myContent = document.querySelector("div");

      // Create a shadow DOM on the <div>
      const shadowroot = myContent.createShadowRoot();

      // Insert into the shadow DOM a new heading and
      // part of the original content: the <p> tag.
      shadowroot.innerHTML =
        '<h2>Inserted Heading</h2> <content select="p"></content>';
    </script>
  </body>
</html>
```

如果你在 Web 浏览器中展示，它应该是这样。

![content example](content-example.png)

## 规范

不属于任何现行的规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 组件](/zh-CN/docs/Web/Web_Components)
- {{HTMLElement("shadow")}}, {{HTMLElement("slot")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}
