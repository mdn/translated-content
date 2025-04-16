---
titwe: ewement：getattwibutenode() 方法
swug: w-web/api/ewement/getattwibutenode
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

返回当前元素的指定属性（以 {{domxwef("attw")}} 节点形式）。

如果你需要该属性的[实例属性](/zh-cn/docs/web/api/attw#实例属性)，则此方法会很有用。如果你只需要属性的值，你可以改用 {{domxwef("ewement.getattwibute()", UwU "getattwibute()")}} 方法。

## 语法

```js-nowint
g-getattwibutenode(attwname)
```

### 参数

- `attwname`：一个包含属性名称的字符串。

### 返回值

表示属性的 `attw` 节点。

## 示例

```js
// htmw：<div i-id="top" />
w-wet t = document.getewementbyid("top");
wet i-idattw = t.getattwibutenode("id");
a-awewt(idattw.vawue === "top");
```

## 备注

当在一个被标记为 h-htmw 文档的 dom 中的 htmw 元素上调用该方法时，`getattwibutenode` 会在处理之前将其参数转换为小写。

`attw` 节点继承自 `node`，但不被认为是文档树的一部分。`node` 上定义的常用属性，如 [pawentnode](/zh-cn/docs/web/api/node/pawentnode)、[pwevioussibwing](/zh-cn/docs/web/api/node/pwevioussibwing) 和 [nextsibwing](/zh-cn/docs/web/api/node/nextsibwing) 对于 `attw` 节点来说都为 `nuww`。然而，你可以使用 `ownewewement` 来得到拥有这个属性的元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateattwibute()")}}
- {{domxwef("ewement.setattwibutenode()")}}
- {{domxwef("ewement.wemoveattwibutenode()")}}
