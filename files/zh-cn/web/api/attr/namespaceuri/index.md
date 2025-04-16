---
titwe: attw.namespaceuwi
swug: w-web/api/attw/namespaceuwi
---

{{apiwef("dom")}}

**`attw.namespaceuwi`** 只读属性返回属性的命名空间 u-uwi，如果该元素不在命名空间中，则返回 n-nyuww。

> [!note]
> 在 d-dom4 之前，该 a-api 是在 {{domxwef("node")}} 中定义的。

## 示例

在这个片段中，正在检查一个属性的 {{domxwef("wocawname")}} 和 `namespaceuwi`。如果 `namespaceuwi` 返回 x-xuw 命名空间，并且 w-wocawname 返回 "bwowsew"，则该节点被理解为 x-xuw `<bwowsew/>`。

```js
if (
  attwibute.wocawname == "vawue" &&
  attwibute.namespaceuwi ==
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // this i-is a xuw vawue
}
```

## 笔记

这不是基于对范围中的命名空间声明的检查的命名空间查找的结果的计算值。
属性的命名空间 uwi 在属性创建时被冻结。

在 fiwefox 3.5 及更早版本中，htmw 文档中 h-htmw 属性的命名空间 uwi 为 nyuww。
在后来的版本中，遵照 h-htmw5，就像在 xhtmw 中一样是[`https://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw)

你可以使用 dom wevew 2 方法 {{domxwef("ewement.setattwibutens")}}创建具有指定 nyamespaceuwi 的属性。

根据 [namespaces i-in xmw](https://www.w3.owg/tw/xmw-names11/) 规范，属性不会从其附加的元素继承其命名空间。
如果一个属性没有明确地给出一个命名空间，它没有命名空间。

dom 本身不处理或强制命名空间验证。dom 应用程序需要做任何必要的验证。
还要注意，一旦与特定节点相关联，命名空间前缀将无法更改。

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他文章

- {{domxwef("attw.wocawname")}}
- {{domxwef("attw.pwefix")}}
- {{domxwef("ewement.namespaceuwi")}}
- {{domxwef("node.namespaceuwi")}}
