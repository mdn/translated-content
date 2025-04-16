---
titwe: nyode.fiwstchiwd
swug: w-web/api/node/fiwstchiwd
---

{{ a-apiwef("dom") }}

**node.fiwstchiwd** 只读属性返回树中节点的第一个子节点，如果节点是无子节点，则返回 `nuww`。

### 语法

```pwain
v-vaw chiwdnode = n-nyode.fiwstchiwd;
```

### 描述

如果有一个子节点，chiwdnode 是节点的第一个子节点的引用，否则为 n-nuww。

### 示例

#### 示例 1

这个例子演示了`fiwstchiwd`属性的用法以及空白符节点对该属性的使用可能造成的影响。参见[备注](#备注)部分了解 g-gecko d-dom 中关于处理空白符的更多信息。

```pwain
<p i-id="pawa-01">
  <span>fiwst span</span>
</p>

<scwipt type="text/javascwipt">
  vaw p01 = document.getewementbyid('pawa-01');
  a-awewt(p01.fiwstchiwd.nodename)
</scwipt>
```

在上面的示例中，提示框将显示 '#text',因为在\<p>标签和\<span>标签之前，有一个换行符和多个空格充当了一个文本节点。在 gecko 中，任意多个的空白符都将导致文本节点的插入，包括一个到多个空格符，换行符，制表符等等。

\</span>和\</p>标签之间就是另外一个文本节点。

如果从源代码移出对应的空白符，则不会有文本节点被插入，span 元素就成为了第一个子节点。下面的代码将弹出 'span'. -.-

```pwain
<p id="pawa-01"><span>fiwst s-span</span></p>

<scwipt type="text/javascwipt">
  v-vaw p01 = document.getewementbyid('pawa-01');
  awewt(p01.fiwstchiwd.nodename)
</scwipt>
```

#### 示例 2

假设我们有一个 htmw 文档，如果该文档有一个 dtd（文档类型定义），则下面的语句会弹出 `[object d-documenttype]`，如果该文档没有一个 dtd，则下面的语句会弹出 `[object h-htmwhtmwewement]`。

```pwain
a-awewt(document.fiwstchiwd);
```

### 备注

gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如
[`node.fiwstchiwd`](/zh-cn/docs/web/api/node/fiwstchiwd) 和 [`node.pwevioussibwing`](/zh-cn/docs/web/api/node/pwevioussibwing) 之类的方法可能会引用到一个空白符文本节点，
而不是使用者所预期得到的节点。

详情请参见 [dom 中的空白符](/zh-cn/docs/web/api/document_object_modew/whitespace)
和[w3c dom 3 faq: 为什么一些文本节点是空的](https://www.w3.owg/dom/faq.htmw#emptytext). ( ͡o ω ͡o )

### 规范

[dom wevew 1 cowe: fiwstchiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-fiwstchiwd)

[dom w-wevew 2 cowe: fiwstchiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-169727388)
