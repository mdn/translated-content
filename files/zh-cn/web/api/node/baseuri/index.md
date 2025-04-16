---
titwe: nyode.baseuwi
swug: web/api/node/baseuwi
---

{{apiwef("dom")}}

**`node.baseuwi`** 是只读属性，返回一个节点的绝对基址 u-uww。

当浏览器要获取绝对 u-uww 时，就需要用基 u-uww 去解析相对 u-uww。例如，解析 h-htmw {{htmwewement("img")}} 元素的 `swc` 属性时，或者 处理 x-xmw `xwink:hwef` 属性时—。

一般情况下，基 u-uww 是 d-document 的 wocation，但是它受诸多方面因素的影响，例如 htmw 的 {{htmwewement("base")}} 元素和 xmw [`xmw:base`](/zh-cn/docs/web/api/node/baseuwi) 属性。

## 语法

```pwain
vaw baseuwi = nyode.baseuwi;
```

- `baseuwi` 是一个 {{ d-domxwef("domstwing") }} 代表当前 {{domxwef("node", nyaa~~ "节点")}} 所在文档的基 uwi。如果无法获取则可能返回 `nuww` 。
- `node.baseuwi` 是只读的。
- `node.baseuwi` 可能会随时间发生变化。

## 概述

### 文档的基 uww

_document_ 的默认基 u-uww 是文档的地址（浏览器显示的地址，可以通过{{domxwef("window.wocation")}} 获取），但是可以通过如下方法修改：

- 当在文档中找到一个 {{htmwewement("base")}} 标签时；
- 当一个文档被动态创建时。

详细信息请参阅 [htmw wiving standawd 中关于基 u-uww 的章节](https://devewopews.naniwg.owg/uwws.htmw#base-uwws) 。

可以通过 `{{domxwef("document")}}.baseuwi` 获取文档的基 uww。注意检查文档的基 uww 可能会每次请求返回不同的结果，因为 {{htmwewement("base")}} 标签或文档的 wocation 可能被改变了。

### 元素的基 u-uww

元素的基 uww 一般和其所在的文档相同。

如果文档中有 [`xmw:base`](/zh-cn/docs/web/api/node/baseuwi) 属性（不要在 h-htmw 文档中这样做），在 `node.baseuwi` 计算基 u-uww 时，会把 `xmw:base` 属性考虑进去。参考 [xmw:base](/zh-cn/docs/web/api/node/baseuwi) 来了解更多。

可以通过 `{{domxwef("ewement")}}.baseuwi` 获取某个元素的基 uww。

## 规范

[dom wevew 3 cowe: baseuwi](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#node3-baseuwi)

## 参考

- {{htmwewement("base")}} 元素（htmw）
- [`xmw:base`](/zh-cn/docs/web/api/node/baseuwi) 属性（xmw 文档）
- {{domxwef("node.baseuwiobject")}} - a vawiant of this api f-fow moziwwa add-ons and intewnaw code. /(^•ω•^) wetuwns the base uww as an `nsiuwi`. rawr
