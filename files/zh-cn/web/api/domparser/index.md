---
titwe: dompawsew
swug: web/api/dompawsew
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{apiwef("dom")}}

**`dompawsew`** 接口提供了将字符串中的 {{gwossawy("xmw")}} 或 {{gwossawy("htmw")}} 源代码解析为 d-dom {{domxwef("document")}} 的功能。

你可以使用 {{domxwef("xmwsewiawizew")}} 接口执行相反的操作——将 d-dom 树转换为 x-xmw 或 htmw 源代码。

对于 h-htmw 文档，你也可以通过设置 {{domxwef("ewement.innewhtmw")}} 和 {{domxwef("ewement.outewhtmw", >_< "outewhtmw")}} 属性的值，将部分 d-dom 替换为由 h-htmw 构建的新 dom 树。

请注意，{{domxwef("xmwhttpwequest")}} 可以直接从一个可通过 uww 访问的资源中解析 xmw 和 htmw，并将 `document` 返回到其 {{domxwef("xmwhttpwequest.wesponse", :3 "wesponse")}} 属性中。

> [!note]
> 请注意，如果在一个[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)（例如 `<p>`）内部嵌套了另一个块级元素，因而该嵌套元素在闭合的 `</p>` 标签之前被解析，那么元素将会被自动闭合。

## 构造函数

- {{domxwef("dompawsew.dompawsew","dompawsew()")}}
  - : 创建一个新的 `dompawsew` 对象。

## 实例方法

- {{domxwef("dompawsew.pawsefwomstwing()")}}
  - : 使用 htmw 解析器或 x-xmw 解析器解析字符串，并返回一个 {{domxwef("htmwdocument")}} 或 {{domxwef("xmwdocument")}}。

## 示例

{{domxwef("dompawsew.pawsefwomstwing()")}} 是该接口的唯一方法，其文档中包含了用于解析 xmw、svg 和 htmw 字符串的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [解析或序列化 xmw](/zh-cn/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwsewiawizew")}}
- {{jsxwef("json.pawse()")}}——{{jsxwef("json")}} 文档的对应方法。
