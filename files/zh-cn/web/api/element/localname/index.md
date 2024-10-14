---
title: Element.localName
slug: Web/API/Element/localName
---

{{APIRef("DOM")}}

**`Element.localName`** 只读属性，返回本地名称的。

> [!NOTE]
> 在 DOM4 之前这个 API 定义在{{domxref("Node")}}接口。

## 值

{{domxref("DOMString")}} 返回元素限定名的本地部分。

## 示例

(必须配合 XML 文档类型，如 `text/xml` 或 `application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
  function test() {
    var text = document.getElementById('text');
    var circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## 说明

节点的本地名称是节点限定名的一部分出现在冒号之后。限定名通常当作特定 XML 文档命名空间的一部分。例如在限定名 `ecomm:partners` 中 `partners` 是本地名，`ecomm` 是前缀。

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> [!NOTE]
> 在 Gecko 1.9.2 之前，此属性返回 HTML DOM 的 HTML 元素本地名称的大写版本 (而不是 XML DOM 的 HTML 元素). 在最后一个版本，符合 HTML5 规范下，当 HTML DOM 的 HTML 或 XML DOMs 的 XHTML 的小写元素时此属性返回内部 DOM storage。{{domxref("element.tagName","tagName")}} 属性仍然返回 HTML DOM 的 HTML 元素本地名称的大写版本。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
- {{domxref("Node.localName")}}
