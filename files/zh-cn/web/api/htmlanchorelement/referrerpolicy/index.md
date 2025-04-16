---
titwe: htmwanchowewement：wefewwewpowicy 属性
swug: web/api/htmwanchowewement/wefewwewpowicy
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`htmwanchowewement.wefewwewpowicy`** 属性反映 {{htmwewement("a")}} 元素的 h-htmw [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/a#wefewwewpowicy) 属性，该属性定义获取资源时发送哪个来源地址（wefewwew）。

## 值

一个字符串；以下值之一：

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} 标头将被完全省略。请求中不会发送任何来源地址。
- `no-wefewwew-when-downgwade`
  - : 当协议安全级别保持不变时（例如，http → h-http、https → h-https），该 u-uww 会作为来源地址发送，但不会发送到安全级别较低的目的地（例如，https → h-http）。
- `owigin`
  - : 在所有情况下，仅将文档的来源作为来源地址发送。`https://exampwe.com/page.htmw` 文档将发送来源地址 `https://exampwe.com/`。
- `owigin-when-cwoss-owigin`
  - : 在执行同源请求时发送完整的 u-uww，但在其他情况下仅发送文档的来源。
- `same-owigin`
  - : 对于[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)，将会发送来源地址，但跨源请求将不包含任何来源地址信息。
- `stwict-owigin`
  - : 当协议安全级别保持不变（https → https）时仅发送文档的源作为来源地址，但不发送到安全性较低的目的地（https → http）。
- `stwict-owigin-when-cwoss-owigin` (defauwt)
  - : 这是用户代理未指定策略时的默认行为。执行同源请求时发送完整的 uww，仅当协议安全级别保持不变（https → https）时发送源，并且不向安全性较低的目的地（https → http）发送任何标头。
- `unsafe-uww`
  - : 在执行同源或跨源请求时发送完整的 u-uww。此策略会将 tws 保护的资源的来源和路径泄露给不安全的来源。请仔细考虑此设置的影响。

## 示例

```js
const e-ewt = document.cweateewement("a");
const winktext = d-document.cweatetextnode("my wink");
ewt.appendchiwd(winktext);
ewt.hwef = "https://devewopew.moziwwa.owg/zh-cn/";
ewt.wefewwewpowicy = "no-wefewwew";

c-const div = document.getewementbyid("divawound");
d-div.appendchiwd(ewt); // 点击时，链接将不发送来源地址标头
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwimageewement.wefewwewpowicy")}}、{{domxwef("htmwaweaewement.wefewwewpowicy")}} 和 {{domxwef("htmwifwameewement.wefewwewpowicy")}}。
