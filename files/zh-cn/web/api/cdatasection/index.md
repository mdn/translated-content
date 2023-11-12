---
title: CDATASection
slug: Web/API/CDATASection
---

{{APIRef("DOM")}}

**`CDATASection`** 接口用于表示 CDATA 片段（CDATA section）。在 XML 中，CDATA 可以直接包含未经转义的文本。比如 `<` 和 `&`，只要位于 CDATA 片段中，它们就不需要被转义，保持原样就可以了。

在 XML 中，一个 CDATA 片段格式如下：

```xml
<![CDATA[ … ]]>
```

例如：

```html
<foo>
  这是一个 CDATA 片段：<![CDATA[ < > & ]]> 其中包含了一些没有转义的字符。
</foo>
```

唯一的例外就是，在一个 CDATA 片段中不可以使用 CDATA 片段本身的闭合标签片段：

```xml
<![CDATA[  ]]> 会引发错误   ]]>
```

注意，CDATA 片段不应该在 HTML 中被使用；它只在 XML 中有效。

{{InheritanceDiagram(600, 120)}}

## 属性

这个接口没有特有的属性，但实现了父接口 _{{domxref("Text")}}_ 的属性。

## 方法

这个接口没有特有的方法，但实现了父接口 _{{domxref("Text")}}_ 的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
