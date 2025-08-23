---
title: privacy.network
slug: Mozilla/Add-ons/WebExtensions/API/privacy/network
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

`privacy.network` 属性包含了与隐私相关的网络设置。每个属性都是一个 {{WebExtAPIRef("types.BrowserSetting")}} 对象。

这些属性的默认值在不同的浏览器中可能有所不同。

## 属性

- `networkPredictionEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。若为 `true`，则浏览器将尝试通过预解析 DNS 条目、预渲染站点（例如使用 `<link rel='prefetch' …>`）以及预先打开到服务器的 TCP 和 TLS 连接来提升 Web 浏览速度。
- `peerConnectionEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。若为 `false`，则 [`RTCPeerConnection`](/zh-CN/docs/Web/API/RTCPeerConnection) 接口将被禁用。请注意，[`getUserMedia()`](/zh-CN/docs/Web/API/MediaDevices/getUserMedia) *不*受此设置影响。
- `webRTCIPHandlingPolicy`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是字符串。这一设置将允许用户指定影响 WebRTC 流量路由方式以及暴露多少本地地址信息的媒体性能/隐私权衡。它可以取以下任一值，从最不私密到最私密：
    - `default`
    - `default_public_and_private_interfaces`
    - `default_public_interface_only`
    - `disable_non_proxied_udp`
    - `proxy_only`（仅允许基于代理的 TCP 连接的 TURN 连接）

- `httpsOnlyMode`
  - : 这一设置允许你的扩展程序确定用户是否启用了 [HTTPS-Only 模式](https://support.mozilla.org/zh-CN/kb/firefox-https)。该属性在所有平台上都是只读的。其底层值是一个字符串，可以取以下三个值之一：
    - `"always"`：HTTPS-Only 模式已启用。
    - `"never"`：HTTPS-Only 模式已关闭。
    - `"private_browsing"`：仅在隐私浏览窗口中启用了 HTTPS-Only 模式。

- `globalPrivacyControl`
  - : 这一设置允许你的扩展程序确定用户是否启用了[全局隐私控制](/zh-CN/docs/Web/API/Navigator/globalPrivacyControl)。该属性在所有平台上都是只读的。其底层值是一个布尔值，其中 `true` 表示浏览器发送全局隐私控制信号，`false` 表示浏览器不发送这些信号。

## 浏览器兼容性

{{Compat}}

## 示例

设置 `webRTCIPHandlingPolicy` 属性：

```js
function onSet(result) {
  if (result) {
    console.log("成功");
  } else {
    console.log("失败");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.network.webRTCIPHandlingPolicy.set({
        value: "default_public_interface_only",
      });
      setting.then(onSet);
    } else {
      console.log("无法设置 webRTCIPHandlingPolicy");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.privacy`](https://developer.chrome.google.cn/docs/extensions/reference/api/privacy) API。该文档衍生自 Chromium 代码中的 [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
