---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
---

{{APIRef("DOM")}}

`createProcessingInstruction()` 创建一个新的处理指令节点，并返回。

## Syntax

```plain
Processing instruction node = document.createProcessingInstruction(target, data)
```

### Parameters

- `Processing Instruction node` 是 {{ domxref("ProcessingInstruction") }} 节点。
- `target` 是指处理指令节点的 target 部分 (i.e., \<?_target_ ... ?>
- `data` 是一个字符串，包含了将要添加到节点内的数据。

### 异常

- `NOT_SUPPORTED_ERR`
  - : Thrown if you attempt to create a processing instruction node on an HTML document in Gecko 9 {{ geckoRelease("9.0") }} or earlier. In Gecko 10.0 {{ geckoRelease("10.0") }} and later, you can use this method on HTML documents.
- `DOM_INVALID_CHARACTER`
  - : Thrown if you try to add an invalid processing instruction target (it should be an XML name besides any case combination of the letters "xml") or if the closing processing instruction sequence ("?>") is added as part of the data, so unescaped user-provided data cannot be safely used without escaping or otherwise dealing with such situations.

## 实例

```plain
var docu = new DOMParser().parseFromString('<xml></xml>',  "application/xml")

var pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

docu.insertBefore(pi, docu.firstChild);

alert(new XMLSerializer().serializeToString(docu));
// 弹出框内容：<?xml-stylesheet href="mycss.css" type="text/css"?><xml/>
```

## 规范

[DOM 4: createProcessingInstruction](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-createprocessinginstruction)
