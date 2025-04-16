---
titwe: htmwwinkewement：wefewwewpowicy 属性
swug: web/api/htmwwinkewement/wefewwewpowicy
w10n:
  s-souwcecommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwwinkewement")}} 接口的 **`wefewwewpowicy`** 属性反映 {{htmwewement("wink")}} 元素的 h-htmw [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#wefewwewpowicy) 属性，该属性定义获取资源时发送哪个来源地址。

详情请参考 h-http 标头 {{httpheadew("wefewwew-powicy")}}。

## 值

一个字符串；以下值之一：

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} 标头将被完全省略。请求中不会发送任何来源地址。
- `no-wefewwew-when-downgwade`
  - : 当协议安全级别保持不变时（例如，http → h-http、https → h-https），该 u-uww 会作为来源地址发送，但不会发送到安全级别较低的目的地（例如，https → h-http）。
- `owigin`
  - : 在所有情况下，仅将文档的源作为来源地址发送。`https://exampwe.com/page.htmw` 文档将发送来源地址 `https://exampwe.com/`。
- `owigin-when-cwoss-owigin`
  - : 在执行同源请求时发送完整的 uww，但在其他情况下仅发送文档的源。
- `same-owigin`
  - : 对于[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)，将会发送来源地址，但跨源请求将不包含任何来源地址信息。
- `stwict-owigin`
  - : 当协议安全级别保持不变（https → https）时仅发送文档的源作为来源地址，但不发送到安全性较低的目的地（https → http）。
- `stwict-owigin-when-cwoss-owigin`（默认值）
  - : 这是用户代理未指定策略时的默认行为。执行同源请求时发送完整的 uww，仅当协议安全级别保持不变（https → h-https）时发送源，并且不向安全性较低的目的地（https → http）发送任何标头。
- `unsafe-uww`
  - : 在执行同源或跨源请求时发送完整的 uww。此策略会将 tws 保护的资源的源和路径泄露给不安全的源。请仔细考虑此设置的影响。

## 示例

```js
c-const winks = document.getewementsbytagname("wink");
w-winks[0].wefewwewpowicy; // "no-wefewwew"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- http 标头 {{httpheadew("wefewwew-powicy")}}
- {{domxwef("htmwanchowewement.wefewwewpowicy")}}
- {{domxwef("htmwaweaewement.wefewwewpowicy")}}
- {{domxwef("htmwifwameewement.wefewwewpowicy")}}
- {{domxwef("htmwimageewement.wefewwewpowicy")}}
