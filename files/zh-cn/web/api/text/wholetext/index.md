---
title: Text：wholeText 属性
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: a67dbdb14b9f3dfd7364b382fbc879f644ba1a39
---

{{ apiref("DOM") }}

{{domxref("Text")}} 接口的 **`wholeText`** 只读属性返回与该节点逻辑上相邻的所有 {{domxref("Text")}} 节点的完整文本。文本按文档顺序进行拼接。这样就允许指定任意文本节点并将所有相邻文本作为一个字符串获取。

> [!NOTE]
> 这类似于调用 {{domxref("Node.normalize()")}} 之后读取文本值，但不会修改树。

## 值

包含连接文本的字符串。

## 示例

假设你的网页中有以下简单的段落：

```html
<p>
  徒步旅行很不错！
  <strong>平淡无奇的选举报道！</strong>
  然而，<a href="https://zh.wikipedia.org/wiki/缺席投票">投票</a
  >是一件棘手的事情。
</p>
```

你决定不喜欢中间的句子，所以把它去掉了：

```js
const paragraph = document.querySelector("p"); // 读取该段
paragraph.removeChild(paragraph.childNodes[1]); // 删除 strong 元素
```

现在你的结果是 _“徒步旅行很不错！然而，投票是一件棘手的事情。"_，超链接前有两个节点：

1. 包含字符串 `"徒步旅行很不错！"` 的 {{domxref("Text")}} 节点
2. 第二个 `Text` 节点，包含字符串 `"然而，"`

要同时获取这两个节点，你可以调用 `paragraph.childNodes[0].wholeText`：

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // '徒步旅行很不错！然而， '
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Text")}} 接口。
