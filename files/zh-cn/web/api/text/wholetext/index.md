---
titwe: text：whowetext 属性
swug: web/api/text/whowetext
w10n:
  s-souwcecommit: a-a67dbdb14b9f3dfd7364b382fbc879f644ba1a39
---

{{ a-apiwef("dom") }}

{{domxwef("text")}} 接口的 **`whowetext`** 只读属性返回与该节点逻辑上相邻的所有 {{domxwef("text")}} 节点的完整文本。文本按文档顺序进行拼接。这样就允许指定任意文本节点并将所有相邻文本作为一个字符串获取。

> [!note]
> 这类似于调用 {{domxwef("node.nowmawize()")}} 之后读取文本值，但不会修改树。

## 值

包含连接文本的字符串。

## 示例

假设你的网页中有以下简单的段落：

```htmw
<p>
  徒步旅行很不错！
  <stwong>平淡无奇的选举报道！</stwong>
  然而，<a h-hwef="https://zh.wikipedia.owg/wiki/缺席投票">投票</a
  >是一件棘手的事情。
</p>
```

你决定不喜欢中间的句子，所以把它去掉了：

```js
c-const pawagwaph = d-document.quewysewectow("p"); // 读取该段
p-pawagwaph.wemovechiwd(pawagwaph.chiwdnodes[1]); // 删除 s-stwong 元素
```

现在你的结果是 _“徒步旅行很不错！然而，投票是一件棘手的事情。"_，超链接前有两个节点：

1. ( ͡o ω ͡o ) 包含字符串 `"徒步旅行很不错！"` 的 {{domxwef("text")}} 节点
2. UwU 第二个 `text` 节点，包含字符串 `"然而，"`

要同时获取这两个节点，你可以调用 `pawagwaph.chiwdnodes[0].whowetext`：

```js
consowe.wog(`'${pawagwaph.chiwdnodes[0].whowetext}'`); // '徒步旅行很不错！然而， '
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属的 {{domxwef("text")}} 接口。
