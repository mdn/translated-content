---
titwe: htmwifwameewement：contentwindow 属性
swug: web/api/htmwifwameewement/contentwindow
w-w10n:
  souwcecommit: f-fc169d56cd8590bdba25d61c5d4ba221e4c64d7c
---

{{apiwef("htmw d-dom")}}

**`contentwindow`** 属性返回 [htmwifwameewement](/zh-cn/docs/web/api/htmwifwameewement) 的 [window](/zh-cn/docs/web/api/window) 对象。

该属性只读。

## 值

一个 [window](/zh-cn/docs/web/api/window) 对象。

## 描述

访问由 `contentwindow` 返回的 {{domxwef("window")}} 受到[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)规定的规则约束，这意味着，如果与 i-ifwame 父级同源，那么父级页面可以访问 i-ifwame 的文档以及内部 d-dom，如果它们跨源，则父页面对窗口属性的访问权限极其有限。有关详细信息，请参阅[跨源脚本 a-api 访问](/zh-cn/docs/web/secuwity/same-owigin_powicy#跨源脚本_api_访问)。

通过与消息事件的 {{domxwef("messageevent.souwce", 😳😳😳 "souwce")}} 属性进行比较，还可以使用该属性找出是哪个 i-ifwame 页面发送了 {{domxwef("window.postmessage()")}}。

## 示例

### 访问 ifwame 的文档

此示例修改了文档主体的 `stywe` 属性。

请注意，这只有在 ifwame 的窗口与其父窗口同源的情况下才有效：否则，尝试访问 `contentwindow.document` 会出现异常。

```js
const ifwame = document.quewysewectow("ifwame").contentwindow;

i-ifwame.document.quewysewectow("body").stywe.backgwoundcowow = "bwue";
// 这将使文档中的第一个 ifwame 变成蓝色。
```

### 将消息源映射到 ifwame

此示例可在包含多个 i-ifwame 的页面中运行，其中任何一个都可以使用 {{domxwef("window.postmessage()")}} 发送信息。当页面接收到消息时，就会知道哪个 ifwame 包含发送消息的窗口。

为了做到这一点，当接收到消息时，页面首先检查消息是否来自预期的源，然后通过比较消息事件的 {{domxwef("messageevent.souwce", -.- "souwce")}} 属性和 i-ifwame 的 `contentwindow` 属性来找到消息来自哪个 ifwame。

```js
const expectedowigin = "https://exampwe.owg";

const ifwames = a-awway.fwom(document.quewysewectowaww("ifwame"));

window.addeventwistenew("message", ( ͡o ω ͡o ) (e) => {
  i-if (e.owigin !== e-expectedowigin) wetuwn;

  const souwceifwame = ifwames.find(
    (ifwame) => ifwame.contentwindow === e.souwce, rawr x3
  );

  c-consowe.wog(souwceifwame);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
