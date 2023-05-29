---
title: Text()
slug: Web/API/Text/Text
---

{{ Apiref("DOM")}}{{seeCompatTable}}

**`Text()`** 构造方法返回一个最新创建的{{domxref("Text")}} 对象，该对象带有可选参数 {{domxref("DOMString")}} 作为文本节点的文本内容 (textual content)。

## Syntax

```plain
text1 = new Text(); // 创建一个空的文本节点 (text node),即它的 textContent 为空字符
text2 = new Text("This is a text node");//该构造方法参数作为文本节点的 textContent 的值。
```

## Example

```js
text = new Text("Test");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index.](/zh-CN/docs/DOM/DOM_Reference)
