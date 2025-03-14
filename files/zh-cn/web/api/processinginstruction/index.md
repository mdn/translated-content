---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{APIRef("DOM")}}

**`ProcessingInstruction`** 接口表示一个[处理指令](https://www.w3.org/TR/xml/#sec-pi)；简单说就是一种包含特定应用指令的 {{domxref("Node")}}，对于那些不识别该应用指令的程序，会忽略它。

> **警告：** `ProcessingInstruction` 节点仅在 XML 文档中受支持，在 HTML 文档中不被支持。在 HTML 文档中，处理指令会被视为注释，并在树中表示为 {{domxref("Comment")}} 对象。

处理指令可能与 [XML 声明](/zh-CN/docs/Web/XML/XML_introduction#xml_声明)不同。

> [!NOTE]
> 用户定义的处理指令不能以 `xml` 开头，因为以 `xml` 为前缀的处理指令目标名称是由 xml 规范为特定用途保留的（如 `<?xml-stylesheet ?>`）。

例如：

```html
<?xml version="1.0"?>
```

是一个 `target` 为 `xml` 的处理指令。

{{InheritanceDiagram}}

## 实例属性

_此接口从其父接口 {{domxref("CharacterData")}}、{{domxref("Node")}} 和 {{domxref("EventTarget")}}继承方法。_

- {{domxref("ProcessingInstruction.sheet")}} {{ReadOnlyInline}}

  - : 如果存在关联的 {{domxref("StyleSheet")}} 对象，则返回该对象；否则为 `null` 。

- {{domxref("ProcessingInstruction.target")}} {{ReadOnlyInline}}
  - : 常用于获取处理指令的目标。

## 实例方法

_此接口没有任何特定方法，但从其父接口 {{domxref("CharacterData")}}、 {{domxref("Node")}} 和 {{domxref("EventTarget")}}继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [document.createProcessingInstruction()](/zh-CN/docs/Web/API/Document/createProcessingInstruction)
- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
