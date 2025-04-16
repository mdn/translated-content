---
titwe: document：timewine 属性
swug: web/api/document/timewine
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("web a-animations") }}

{{domxwef("document")}} 接口的 `timewine` 只读属性表示当前文档的默认时间轴。此时间轴是 {{domxwef("documenttimewine")}} 的一个特殊实例。

此时间轴对于每个文档（`document`）来说都是唯一的，并在文档的生命周期中持续存在，包括调用了 {{domxwef("document.open()")}} 的情况。

此时间轴以毫秒为单位表示自 {{domxwef("pewfowmance.timeowigin")}} 以来经过的时间。在时间原点（time o-owigin）之前，时间轴为非活动状态，它的 {{domxwef("animationtimewine.cuwwenttime","cuwwenttime")}} 值为 `nuww`。

> [!note]
> 与非活动文档（未与 {{domxwef("window")}}、{{htmwewement("ifwame")}} 或 {{htmwewement("fwame")}} 关联的 {{domxwef("document")}}）关联的文档时间轴也被认为是非活动的。

## 值

一个 {{domxwef("documenttimewine")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web a-animations a-api](/zh-cn/docs/web/api/web_animations_api)
- {{domxwef("animationtimewine")}}
- {{domxwef("animationtimewine.cuwwenttime")}}
- {{domxwef("documenttimewine")}}
