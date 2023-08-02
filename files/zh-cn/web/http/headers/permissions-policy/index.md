---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
---

{{HTTPSidebar}} {{SeeCompatTable}}

**`Permissions-Policy`** 响应标头提供了一种可以在本页面或包含的 iframe 上启用或禁止浏览器特性的机制。

更多的信息，请查看[Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                             |

## 语法

```plain
Permissions-Policy: <directive> <allowlist>
```

**\<allowlist>**

- `*`: 允许在当前文档和所有包含的内容（比如 iframes）中使用本特性。
- `'self'`: 允许在当前文档中使用本特性，但在包含的内容（比如 iframes）仍使用原值。
- `'src'`: (只在 iframe 中允许) 只要在{{HTMLElement('iframe','src','#Attributes')}} 中的 URL 和加载 iframe 用的 URL 相同，则本特性在 iframe 中允许，
- `'none'`: 从最上层到包含的内容都禁止本特性。 \<origin(s)>: 在特定的源中允许，源 URL 以空格分割。

<!---->

- `*`: 本特性默认在最上层和包含的内容中（iframes）允许。
- `'self'`: 本特性默认在最上层允许，而包含的内容中（iframes）使用源地址相同设定。也就是说本特性在 iframe 中不允许跨域访问。
- `'none'`: 本特性默认在最上层和包含的内容中（iframes）都禁止。

`*`(在所有源地址启用)`或'none'`(在所有源地址禁用) 只允许单独使用，而`'self'`和`'src'`可以与多个源地址一起使用。

所有的特性都有一个如下的默认的 allowlist

- `*`: 本特性默认在最上层和包含的内容中（iframes）允许。
- `'self'`: 本特性默认在最上层允许，而包含的内容中（iframes）使用源地址相同设定。也就是说本特性在 iframe 中不允许跨域访问。
- `'none'`: 本特性默认在最上层和包含的内容中（iframes）都禁止。

## 指令

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : 控制是否允许当前文档自动播放媒体。这种控制是通过接口 {{domxref("HTMLMediaElement")}} 来实现。当这种规则被禁用，而且没有用户操作的时候，{{domxref("HTMLMediaElement.play()")}} 返回的 {{domxref("Promise")}} 会拒绝并抛出一个 {{domxref("DOMException")}} 异常。{{HTMLELement("audio")}} 和 {{HTMLELement("video")}} 上的 autoplay 属性会被忽略。
- {{httpheader('Permissions-Policy/camera', 'camera')}}
  - : 控制是否允许当前文档使用视频输入设备。当这种规则被禁用时，{{domxref("MediaDevices.getUserMedia()")}} 返回的 {{jsxref("Promise")}} 会拒绝并抛出 `NotAllowedError` {{DOMxRef("DOMException")}} 异常。
- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}
  - : 控制是否允许当前文档设置 {{domxref("document.domain")}}。当这种规则被禁用时，尝试设置 {{domxref("document.domain")}} 会失败并抛出 `SecurityError` {{domxref("DOMException")}} 异常。
- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : 控制是否允许当前文档使用 [Encrypted Media Extension](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API) API（EME）。当这种规则被禁用时，{{domxref("Navigator.requestMediaKeySystemAccess()")}} 返回的 {{domxref("Promise")}} 会拒绝并抛出 {{domxref("DOMException")}} 异常。
- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}}
  - : 控制是否允许当前文档使用 {{domxref('Element.requestFullScreen()')}}。当这种规则被禁用时，返回的 {{jsxref('Promise')}} 会拒绝并抛出 {{jsxref('TypeError')}}。
- {{httpheader('Permissions-Policy/geolocation','geolocation')}}
  - : 控制是否允许当前文档使用 {{domxref('Geolocation')}} 接口。当这种规则被禁用时，调用 {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} 和 {{domxref('Geolocation.watchPosition','watchPosition()')}} 会返回包含 `PERMISSION_DENIED` 的 {{domxref('PositionError')}}。
- {{httpheader('Permissions-Policy/microphone','microphone')}}
  - : 控制是否允许当前文档使用音频输入设备。当这种规则被禁用时，{{domxref("MediaDevices.getUserMedia()")}} 返回的 {{jsxref("Promise")}} 会拒绝并抛出错误 `NotAllowedError`。
- {{httpheader('Permissions-Policy/midi', 'midi')}}
  - : 控制是否允许当前文档使用 [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)。当这种规则被禁用时，{{domxref("Navigator.requestMIDIAccess()")}} 返回的 {{jsxref("Promise")}} 会拒绝并抛出错误 `DOMException`。
- {{httpheader('Permissions-Policy/payment', 'payment')}}
  - : 控制是否允许当前文档使用 [Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API)。当这种规则被启用时，构造函数 {{domxref("PaymentRequest()")}} 会抛出错误 `SecurityError`。
- {{httpheader('Permissions-Policy/vr', 'vr')}} / `xr`
  - : 控制是否允许当前文档使用 [WebVR API](/zh-CN/docs/Web/API/WebVR_API)。当这种规则被禁用时，{{domxref("Navigator.getVRDisplays()")}} 返回的 {{jsxref("Promise")}} 会拒绝并抛出错误 `DOMException`。

## 示例

SecureCorp Inc. 公司想要在应用中禁用震动和定位 API，则可以在返回的 response 中传递以下定义权限策略的 HTTP 的标头信息：

```plain
Permissions-Policy: vibrate 'none'; geolocation 'none'
```

通过使用 `'none'` 关键词，不管原来如何设定，这些特性在所有浏览的上下文中都会被禁用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Permissions-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
