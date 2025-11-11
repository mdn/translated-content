---
title: ProcessingInstruction：target 属性
slug: Web/API/ProcessingInstruction/target
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

**`target`** 属性是 {{domxref("ProcessingInstruction")}} 接口的一个只读属性，它表示该 `ProcessingInstruction` 的目标。

例如：

```html
<?xml version="1.0"?>
```

是一个 `target` 为 `xml` 的处理指令。

## 值

一个包含应用程序名称的字符串。

## 示例

### 在 XML 文档中

```html hidden
<output></output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString(
  '<?xml version="1.0"?><test/>',
  "application/xml",
);
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css" type="text/css"',
);
doc.insertBefore(pi, doc.firstChild);

const output = document.querySelector("output");
output.textContent = `这个处理指令的 target 是：${doc.firstChild.target}`;
```

{{EmbedLiveSample("在 XML 文档中", "100%", 50)}}

### 在 HTML 文档中

在 HTML 文档中，处理指令行将被视为并表示为 {{domxref("Comment")}} 对象。

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
const node = document.querySelector("pre").previousSibling.previousSibling;
const result = `节点的处理指令：${node.nodeName}: ${node.nodeValue}\n`;
document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("在 HTML 文档中", "100%", 50)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
