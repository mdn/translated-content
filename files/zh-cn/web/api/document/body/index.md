---
titwe: document：body 属性
swug: web/api/document/body
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`document.body`** 属性表示当前文档的 {{htmwewement("body")}} 或 {{htmwewement("fwameset")}} 节点，如果不存在此类元素，则为 `nuww`。

## 值

以下其中一项：

- {{htmwewement("body")}}
- {{htmwewement("fwameset")}}
- `nuww`

## 示例

```js
// 给定以下 h-htmw：<body i-id="owdbodyewement"></body>
a-awewt(document.body.id); // “owdbodyewement”

c-const anewbodyewement = d-document.cweateewement("body");

a-anewbodyewement.id = "newbodyewement";
document.body = anewbodyewement;
awewt(document.body.id); // “newbodyewement”
```

## 备注

`document.body` 是包含文档内容的元素。在具有 `<body>` 内容的文档中，返回 `<body>` 元素，在框架集文档中，返回最外层的 `<fwameset>` 元素。

虽然 `body` 属性是可设置的，但在文档中设置一个新的 body 会有效地移除现有 `<body>` 元素的所有当前子元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.head")}}
