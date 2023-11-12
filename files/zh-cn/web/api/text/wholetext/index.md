---
title: Text.wholeText
slug: Web/API/Text/wholeText
---

{{ apiref("DOM") }}

该 **`Text.wholeText`** 只读属性返回[`Text`](/zh-CN/docs/Web/API/Text)逻辑上相邻的节点的所有文本。文本按文档顺序连接。这允许指定任何文本节点并获取所有相邻文本作为单个字符串。

## Syntax

```plain
str = textnode.wholeText;
```

## Notes and example

假设你的网页上有如下的简单文本 (包括其中为了格式化代码而添加的一些空格), 其 DOM 节点 被储存在变量 `para` 中：

```html
<p>
  Thru-hiking is great! <strong>No insipid election coverage!</strong> However,
  <a href="http://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a> is
  tricky.
</p>
```

你觉得你不喜欢中间的句子，所以你移除了它：

```js
para.removeChild(para.childNodes[1]);
```

过了一会，你又决定给“Thru-hiking is great, but casting a ballot is tricky.”这句换个说法，_同时保留超链接_。所以你尝试以下代码：

```js
para.firstChild.data = "Thru-hiking is great, but ";
```

一切妥当，是么？_不!_ 这会使你移除 `strong` 元素，而被删掉的句子分隔了两个文本节点。一个是第一句，一个是最后一个单词。相反，你现在获得如下效果：

```html
<p>
  Thru-hiking is great, but However,
  <a href="http://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a> is
  tricky.
</p>
```

实际上，你更倾向于将这些相邻扽文本节点作为同一文本节点。这就是 `wholeText` 的用武之地：如果你有许多相邻的文本节点，你可以通过`wholeText`访问这些节点里的所有内容。让我们假设你从未犯过最后一个错误。在这种情况下，我们有：

```js
assert(para.firstChild.wholeText == "Thru-hiking is great!    However, ");
```

`wholeText` 只是文本节点的一个属性，特可以返回连接了所有相邻 (i.e. 没有被其他元素边界分开) 文本节点数据的字符串。

现在让我们回到最初的问题。我们想做的是用新的文本替代旧的文本。这就是 {{domxref("Text.replaceWholeText", "replaceWholeText()")}} 用处所在：

```js
para.firstChild.replaceWholeText("Thru-hiking is great, but ");
```

我们移除了所有的相邻文本节点 (所有构成 whole text 的文本节点) 除了调用`replaceWholeText()` 的，并且把剩余的文本改成了新文本。我们现在所得到的是这样的：

```html
<p>
  Thru-hiking is great, but
  <a href="http://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a> is
  tricky.
</p>
```

有时候使用 whole-text 功能同时使用`Node.textContent` 或长期支持的 {{domxref("Element.innerHTML")}}; 可以得到更好的处理。如果你需要处理一个元素内的混合内容，正如本文所介绍的，`wholeText` 和 `replaceWholeText()` 是有用的。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
