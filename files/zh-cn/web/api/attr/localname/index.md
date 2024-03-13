---
title: Attr.localName
slug: Web/API/Attr/localName
---

{{APIRef("DOM")}}

**`Attr.localName`** 为只读属性，返回一个属性限定名称的本名部分（去除命名空间前缀的名字）。

> **备注：** 在之前的 DOM 规范中此 API 被定义在 {{domxref("Node")}} 接口中。

## 语法

```
name = attribute.localName
```

### 返回值

属性的限定名称的本名 {{domxref("DOMString")}} 。

## 示例

下面的例子将弹出一个有“id”文字的警告窗口。

### HTML

```html
<button id="example">Click me</button>
```

### JavaScript

```js
const element = document.querySelector("#example");
element.addEventListener("click", function () {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
```

{{ EmbedLiveSample('示例','100%',30) }}

## 注意

本文档中属性的“本名 (local name)”指的是属性“限定名称 (qualified names)”的命名空间冒号之后的部分。“限定名称”通常作为 XML 文档命名空间的一部分用在 XML 代码内。

> **备注：** 在 Gecko 1.9.2 以及跟早的版本中，HTML DOM 访问该属性将返回 HTML 节点属性的大写字符串本名（有别于 XML DOM 的 XHTML 属性）。在后来的版本中，为遵循 HTML5 标准，该属性返回 DOM 内部存储的名称，即，不论 HTML DOM 的 HTML 属性还是 XML DOM 的 XHTML 属性都是小写字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.localName")}}
- {{domxref("Node.localName")}}
