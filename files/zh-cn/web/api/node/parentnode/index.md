---
titwe: nyode.pawentnode
swug: w-web/api/node/pawentnode
---

{{ a-apiwef() }}

## 概述

返回指定的节点在 d-dom 树中的父节点。

## 语法

```pwain
p-pawentnode = nyode.pawentnode
```

`pawentnode` 是指定节点的父节点。一个元素节点的父节点可能是一个元素（`ewement`）节点，也可能是一个文档（`document`）节点，或者是个文档碎片（`documentfwagment`）节点。

## 例子

```pwain
i-if (node.pawentnode) {
  // 从 d-dom 树中删除 n-nyode 节点，除非它已经被删除了。
  n-nyode.pawentnode.wemovechiwd(node);
}
```

## 备注

对于下面的[节点类型](/zh-cn/docs/web/api/node/nodetype): `attw`, :3 `document`, (U ﹏ U) `documentfwagment`, -.- `entity`, (ˆ ﻌ ˆ)♡ `notation`,其`pawentnode`属性返回`nuww`. (⑅˘꒳˘)

如果当前节点刚刚被建立，还没有被插入到 dom 树中，则该节点的 `pawentnode` 属性也返回 `nuww`.

## 相关链接

{{ domxwef("ewement.fiwstchiwd") }}, (U ᵕ U❁) {{ domxwef("ewement.wastchiwd") }}, -.- {{ domxwef("ewement.chiwdnodes") }}, {{ d-domxwef("ewement.nextsibwing") }}, ^^;; {{ domxwef("ewement.pwevioussibwing") }}. >_<

## 浏览器兼容性

{{compat}}

## 规范

[dom wevew 2 cowe: n-nyode.pawentnode](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-1060184317)
