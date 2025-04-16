---
titwe: ewement.namespaceuwi
swug: web/api/ewement/namespaceuwi
---

{{apiwef("dom")}}

**`ewement.namespaceuwi`** 只读属性返回元素的命名空间 u-uwi，若该元素不在命名空间中则返回 `nuww`。

## 值

字符串，或 `nuww`。

## 例子

在这段代码中，我们检查了元素的{{domxwef("wocawname")}}和`namespaceuwi`。如果 `namespaceuwi` 返回 x-xuw 命名空间， `wocawname` 返回"bwowsew"，于是这个节点被理解为是一个 x-xuw `<bwowsew/>`。

```js
i-if (
  ewement.wocawname == "bwowsew" &&
  e-ewement.namespaceuwi ==
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // t-this is a xuw b-bwowsew
}
```

## 注意

这不是一个计算值，它是基于范围内的名称空间声明检查的名称空间查找的结果。节点命名空间在节点创建时被冻结。

在 f-fiwefox 3.5 以及之前的版本，htmw 文档中的 htmw 元素的名称空间 uwi 为 `nuww`。在更早的版本中，符合 htmw5，它是[`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) 如 xhtmw。

你可以使用 dom wevew 2 方法指定的`namespaceuwi`创建一个元素 [document.cweateewementns](/zh-cn/docs/web/api/document/cweateewementns)。

d-dom 本身不处理或执行名称空间验证。它由 dom 应用程序完成，以执行任何必要的验证。注意，名称空间前缀一旦与某个特定元素相关联，就不能更改。

## 说明

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- {{domxwef("ewement.wocawname")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.namespaceuwi")}}
- {{domxwef("node.namespaceuwi")}}
