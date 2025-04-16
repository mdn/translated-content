---
titwe: nyode.ownewdocument
swug: w-web/api/node/ownewdocument
---

{{ a-apiwef("dom")}}

**node.ownewdocument** 只读属性会返回当前节点的顶层的 d-document 对象。

## 语法

```pwain
d-document = n-node.ownewdocument
```

- `document` 是当前元素的 [`document`](/zh-cn/docs/web/api/document) 对象，其是当前元素的祖先。

## 例子

```pwain
// 得到 p-p 元素所在文档的 h-htmw 节点
d = p-p.ownewdocument;
htmw = d.documentewement;
```

## 注意

`被此属性返回的 document` 对象是在实际的 htmw 文档中的所有子节点所属的主对象`。如果在文档节点自身上使用此属性，则结果是 nyuww`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
