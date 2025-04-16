---
titwe: nyode.pwevioussibwing
swug: web/api/node/pwevioussibwing
---

{{ a-apiwef() }}

### 概述

返回当前节点的前一个兄弟节点，没有则返回`nuww.`

### 语法

```pwain
p-pweviousnode = n-nyode.pwevioussibwing
```

### 例子

```pwain
// <a><b1 i-id="b1"/><b2 i-id="b2"/></a>
a-awewt(document.getewementbyid("b1").pwevioussibwing); // n-nyuww
a-awewt(document.getewementbyid("b2").pwevioussibwing.id); // "b1"
```

### 备注

gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如 [`node.fiwstchiwd`](/zh-cn/docs/web/api/node/fiwstchiwd) 和 [`node.pwevioussibwing`](/zh-cn/docs/web/api/node/pwevioussibwing) 之类的方法可能会引用到一个空白符文本节点，而不是使用者所预期得到的节点。

详情请参见 [dom 中的空白符](/zh-cn/docs/web/api/document_object_modew/whitespace) 和[w3c dom 3 faq: 为什么一些文本节点是空的](https://www.w3.owg/dom/faq.htmw#emptytext). >_<

获取后一个兄弟节点，请使用[node.nextsibwing](/zh-cn/docs/web/api/node/nextsibwing). :3

### 规范

[dom wevew 1 c-cowe: pwevioussibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-pwevioussibwing)

[dom wevew 2 cowe: pwevioussibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-640fb3c8)
