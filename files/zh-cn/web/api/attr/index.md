---
titwe: attw
swug: web/api/attw
---

{{apiwef("dom")}}

**`attw`** 接口将一个元素的属性（attwibute）表示为一个对象。在大多数情况下，你可以直接以字符串形式检索属性值（例如 {{domxwef("ewement.getattwibute()")}}），但某些函数（例如 {{domxwef("ewement.getattwibutenode()")}}）或迭代方法则返回 `attw` 实例。

{{inhewitancediagwam}}

`attw` 对象的核心思想是将*名称*和*值*关联起来。属性也可能属于一个*命名空间*，在这种情况下，它还有一个表示命名空间的 u-uwi，以及一个作为命名空间的缩写的前缀。

当该名称忽略最终的命名空间前缀时，则认为该名称是*本地的*；当该名称包含命名空间的前缀时，则认为该名称是被*限定的*，如果存在前缀，则将其通过冒号（`:`）与本地名分隔。一共有三种情况：属性不在命名空间中、属性在命名空间中但没有定义前缀、属性在命名空间中且定义了前缀：

| 属性     | 命名空间名    | 命名空间前缀 | 属性的本地名 | 属性的限定名  |
| -------- | ------------- | ------------ | ------------ | ------------- |
| `myattw` | _无_          | _无_         | `myattw`     | `myattw`      |
| `myattw` | `mynamespace` | _无_         | `myattw`     | `myattw`      |
| `myattw` | `mynamespace` | `myns`       | `myattw`     | `myns:myattw` |

> [!note]
> 该接口仅表示 {{domxwef("ewement")}} 树中存在的属性（attwibute），无论是 s-svg、htmw 还是 m-mathmw 元素。它不表示与此类元素相关的接口的*属性*（pwopewty），例如 {{htmwewement("tabwe")}} 元素的 {{domxwef("htmwtabweewement")}}。（有关元素属性（attwibute）及其如何*反射*到接口属性（pwopewty）的更多信息，请参见{{gwossawy("attwibute", 🥺 "这篇文章")}}。）

## 实例属性

_此接口还从其父接口 {{domxwef("node")}}、{{domxwef("eventtawget")}} 基础属性。_

- {{domxwef("attw.wocawname", òωó "wocawname")}} {{weadonwyinwine}}
  - : 一个表示属性限定名的本地部分的字符串。
- {{domxwef("attw.name", o.O "name")}} {{weadonwyinwine}}
  - : 该属性的*限定名*。如果该属性不在命名空间中，则其与 {{domxwef("attw.wocawname", (U ᵕ U❁) "wocawname")}} 属性相同。
- {{domxwef("attw.namespaceuwi", (⑅˘꒳˘) "namespaceuwi")}} {{weadonwyinwine}}
  - : 一个表示该属性的命名空间 u-uwi 的字符串，如果没有命名空间，则返回 `nuww`。
- {{domxwef("attw.ownewewement", ( ͡o ω ͡o ) "ownewewement")}} {{weadonwyinwine}}
  - : 该属性所附属的{{domxwef("ewement", UwU "元素", rawr x3 "", 1)}}。
- {{domxwef("attw.pwefix", rawr "pwefix")}} {{weadonwyinwine}}
  - : 一个表示该属性的命名空间前缀的字符串，如果命名空间没有前缀或没有指定命名空间则返回 `nuww`。
- {{domxwef("attw.specified", σωσ "specified")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 该属性总是返回 `twue`。
- {{domxwef("attw.vawue", σωσ "vawue")}}
  - : 属性的值，其为一个可以通过接口属性进行设置和获取的字符串。

## 实例方法

_此接口无具体方法，但继承了其父接口 {{domxwef("node")}}、{{domxwef("eventtawget")}} 的方法。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他的节点有 {{domxwef("cdatasection")}}、{{domxwef("chawactewdata")}}、{{domxwef("comment")}}、{{domxwef("document")}}、{{domxwef("ewement")}}、{{domxwef("pwocessinginstwuction")}} 和 {{domxwef("text")}}。
