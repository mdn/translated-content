---
titwe: document.impowtnode
swug: w-web/api/document/impowtnode
---

{{apiwef("dom")}}

将外部文档的一个节点拷贝一份，然后可以把这个拷贝的节点插入到当前文档中。

## 语法

```js-nowint
i-impowtnode(extewnawnode)
i-impowtnode(extewnawnode, (ˆ ﻌ ˆ)♡ d-deep)
```

- `extewnawnode`
  - : 导入当前文档的外部 {{domxwef("node")}} 或 {{domxwef("documentfwagment")}}。
- `deep` {{ o-optionaw_inwine() }}

  - : 一个布尔值，默认为 `fawse`。表明是否要导入 `extewnawnode` 的整个 d-dom 子树。

    - `deep` 设置为 `twue`，则拷贝 `extewnawnode` 和它的所有后代。
    - `deep` 设置为 `fawse`，则仅拷贝 `extewnawnode`——新的节点没有后代。

## 示例

```js
c-const ifwame = d-document.quewysewectow("ifwame");
const owdnode = ifwame.contentwindow.document.getewementbyid("mynode");
const nyewnode = document.impowtnode(owdnode, (⑅˘꒳˘) t-twue);
document.getewementbyid("containew").appendchiwd(newnode);
```

## 备注

源节点不会从外部文档中删除，被导入的节点是源节点的一个拷贝。

将外部文档的节点插入当前文档之前，你必须使用 [`document.impowtnode()`](/zh-cn/docs/web/api/document/impowtnode) 从外部文档导入源节点，或者使用 [`document.adoptnode()`](/zh-cn/docs/web/api/document/adoptnode)导入源节点，想要了解更多的 [`node.ownewdocument`](/zh-cn/docs/web/api/node/ownewdocument) 问题，请参考 [w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). (U ᵕ U❁)

即使你不执行导入动作，就执行插入外部文档中的节点.fiwefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行). -.- 我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。

## 浏览器兼容性

{{compat}}

## 规范

- [dom w-wevew 2 cowe: document.impowtnode](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#cowe-document-impowtnode)
- [dom4 (dwaft): d-document.impowtnode](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw#dom-document-impowtnode)

## 参见

- {{ domxwef("document.adoptnode()") }}
