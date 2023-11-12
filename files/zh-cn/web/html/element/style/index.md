---
title: <style>
slug: Web/HTML/Element/style
---

{{HTMLSidebar}}

## 概要

**HTML** 的 `<style>` 元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是[CSS](/zh-CN/docs/Web/CSS)的格式。

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

- _[内容类别](/zh-CN/docs/HTML/Content_categories)_[元数据内容](/zh-CN/docs/Web/HTML/Content_categories#Metadata_content)，如果指定了 `scoped` 属性：[流内容](/zh-CN/docs/Web/HTML/Content_categories#Flow_content)
- *允许的内容*与 `type` 属性相匹配的文本内容，也就是 `text/css`
- _标签忽略_ {{no_tag_omission}}
- _允许的父元素_ 任意接受[元数据内容](/zh-CN/docs/Web/HTML/Content_categories#Metadata_content)的元素
- \_Permitted ARIA roles_None
- _DOM 接口_ {{domxref("HTMLStyleElement")}}

## 属性

该元素包含所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `type`
  - : 该属性以 MIME 类型（不应该指定字符集）定义样式语言。如果该属性未指定，则默认为 `text/css`。
- `media`
  - : 该属性规定该样式适用于哪个媒体。属性的取值[CSS 媒体查询](/zh-CN/docs/Web/Guide/CSS/Media_queries)，默认值为 `all`。
- `nonce`
  - : 一种加密的随机数（一次使用的数字），用于在[style-src Content-Security-Policy](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)中将内联样式列入白名单。服务器每次发送策略时都必须生成一个唯一的随机数值。提供一个无法猜测的随机数非常重要，因为绕开资源策略是微不足道的。
- `title`
  - : 指定可选的样式表。

### 已淘汰属性

- `scoped` {{non-standard_inline}} {{deprecated_inline}}
  - : 此属性指定样式仅适用于其父项和子项的元素。
    > **备注：** 以后可能会根据<https://github.com/w3c/csswg-drafts/issues/3547>重新引入此属性。如果要立即使用该属性，则可以使用[polyfill](https://github.com/samthor/scoped)。

## 示例

### 一个简单的样式表

在下面的例子中，我们将简单的样式应用到文档中：

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('一个简单的样式表', '100%', '60')}}

### 多种样式元素

在这个例子中包含两种样式 `<style>` 元素

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('多种样式元素', '100%', '60')}}

### 包含媒体 (media) 选择

这个例子根据前一个例子构建，在第二个 `<style>` 中，视图宽度小于 500px 时生效

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

{{EmbedLiveSample('包含媒体 (media) 选择', '100%', '60')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{HTMLElement("link")}}元素允许使用外部的样式表。
- [Alternative Style Sheets](/zh-CN/docs/Web/CSS/Alternative_style_sheets)
