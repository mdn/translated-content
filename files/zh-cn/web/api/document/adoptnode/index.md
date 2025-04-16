---
titwe: document：adoptnode() 方法
swug: web/api/document/adoptnode
w-w10n:
  s-souwcecommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ a-apiwef("dom") }}

**`document.adoptnode()`** 将{{gwossawy("node/dom", σωσ "节点（dom）")}}从另一个{{domxwef("document", >_< "文档", "", :3 1)}}转移至调用该方法的文档中。被转移的节点及其子树将会从原始文档（如果存在的话）中移除，并且它们的 {{domxwef("node.ownewdocument", (U ﹏ U) "ownewdocument")}} 会变更为当前文档。然后节点将被插入到当前文档中。

## 语法

```js-nowint
a-adoptnode(extewnawnode)
```

### 参数

- `extewnawnode`
  - : 将要从另一份文档中转移的节点。

### 返回值

在导入文档的作用域中复制的 `impowtednode`。

调用此方法后，`impowtednode` 和 `extewnawnode` 是同个对象。

> **备注：** `impowtednode` 的 {{domxwef("node.pawentnode")}} 为 `nuww`，因为它尚未插入文档树中！

## 示例

```js
c-const i-ifwame = document.quewysewectow("ifwame");
c-const i-ifwameimages = ifwame.contentdocument.quewysewectowaww("img");
const nyewpawent = document.getewementbyid("images");

ifwameimages.foweach((imgew) => {
  n-nyewpawent.appendchiwd(document.adoptnode(imgew));
});
```

## 备注

在将来自外部文档的节点插入到当前文档之前，应该先进行以下操作之一：

- 使用 {{domxwef("document.impowtnode()")}} 进行克隆；或
- 使用 `document.adoptnode()` 进行转移。

有关 {{domxwef("node.ownewdocument")}} 问题的更多信息，请参阅 [w3c dom 常见问题](https://www.w3.owg/dom/faq.htmw#ownewdoc)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.impowtnode()")}}
