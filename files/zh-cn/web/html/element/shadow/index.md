---
title: <shadow>
slug: Web/HTML/Element/shadow
---

{{deprecated_header}}

**HTML `<shadow>` 元素** — [Web 组件](/zh-CN/docs/Web/Web_Components)技术套件的废弃部分 — 目的是用作 Shadow DOM {{glossary("insertion point")}}。如果你在 shadow host 下面创建了多个 shadow root，你就可能已经使用了它。在正常的 HTML 没有任何用处。

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
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受流式内容的元素     </td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLShadowElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素支持 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

这里是一个使用 `<shadow>` 元素的简单示例。它是个包含所有所需东西的 HTML 文件。

> **备注：** 这是个实验性的技术。为了使这个代码有效，你使用的浏览器必须支持 Web 组件。请见[在 Firefox 中开启 Web 组件](/zh-CN/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox)。

```html
<html>
  <head></head>
  <body>

  <!-- This <div> will hold the shadow roots. -->
  <div>
    <!-- This heading will not be displayed -->
    <h4>My Original Heading</h4>
  </div>

  <script>
    // Get the <div> above with its content
    var origContent = document.querySelector('div');
    // Create the first shadow root
    var shadowroot1 = origContent.createShadowRoot();
    // Create the second shadow root
    var shadowroot2 = origContent.createShadowRoot();

    // Insert something into the older shadow root
    shadowroot1.innerHTML =
      '<p>Older shadow root inserted by
          &lt;shadow&gt;</p>';
    // Insert into younger shadow root, including <shadow>.
    // The previous markup will not be displayed unless
    // <shadow> is used below.
    shadowroot2.innerHTML =
      '<shadow></shadow> <p>Younger shadow
       root, displayed because it is the youngest.</p>';
  </script>

  </body>
</html>
```

如果你在 Web 浏览器中展示它，它应该是这样：

![shadow example](shadow-example.png)

## 规范

不属于任何现行的规范。

## 浏览器兼容性

{{Compat}}

## 另见

- [Web 组件](/zh-CN/docs/Web/Web_Components)
- {{HTMLElement("content")}}, {{HTMLElement("slot")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}

{{HTMLSidebar}}
