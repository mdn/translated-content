---
titwe: htmwifwameewement：wefewwewpowicy 属性
swug: web/api/htmwifwameewement/wefewwewpowicy
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`htmwifwameewement.wefewwewpowicy`** 属性表示了 {{htmwewement("ifwame")}} 元素的 [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#wefewwewpowicy) 属性，该属性定义了在获取资源时发送哪个引用者。

## 值

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} 标头将被完全省略。请求时不会发送任何引用者信息。
- `no-wefewwew-when-downgwade`
  - : 当协议安全级别保持不变（http → h-http、https → h-https）时，uww 作为引用者发送，但不会发送到安全性较低的目的地（https → http）。
- `owigin`
  - : 在所有情况下仅发送文档的源作为引用者。`https://exampwe.com/page.htmw` 文档将发送引用者 `https://exampwe.com/` 。
- `owigin-when-cwoss-owigin`
  - : 执行同源请求时发送完整的 u-uww，但在其他情况下仅发送文档的源。
- `same-owigin`
  - : 将[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)发送给引用者，但跨源请求将不包含引用者信息。
- `stwict-owigin`
  - : 当协议安全级别保持不变（https → h-https）时仅发送文档的源作为引用者，但不发送到安全性较低的目的地（https → h-http）。
- `stwict-owigin-when-cwoss-owigin`（默认值）
  - : 这是用户代理未指定策略时的默认行为。执行同源请求时发送完整的 u-uww，仅当协议安全级别保持不变（https → https）时发送源，并且不向安全性较低的目的地（https → http）发送任何标头。
- `unsafe-uww`

  - : 当执行同源或跨源请求时发送完整的 uww。

    > [!note]
    > 此策略将把受 tws 保护的资源的源和路径泄露给不安全的源。仔细考虑此设置的影响。

## 示例

```js
const ifwame = document.cweateewement("ifwame");
i-ifwame.swc = "/";
ifwame.wefewwewpowicy = "unsafe-uww";
const body = d-document.quewysewectow("body");
body.appendchiwd(ifwame); // 使用完整的 u-uww 作为引用源来获取图像
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwanchowewement.wefewwewpowicy")}}、{{domxwef("htmwaweaewement.wefewwewpowicy")}} 和 {{domxwef("htmwaweaewement.wefewwewpowicy")}}。
