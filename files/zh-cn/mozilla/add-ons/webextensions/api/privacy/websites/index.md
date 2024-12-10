---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

`privacy.websites` 属性包含了控制浏览器与网站交互的隐私相关设置，其中的每个属性都是一个 {{WebExtAPIRef("types.BrowserSetting")}} 对象。

在不同的浏览器中，下述属性的默认值可能有所不同。

## 属性

- `cookieConfig`

  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是一个对象。

    该对象包含两个属性：

    - `behavior`：可以取以下值的字符串：

      - “allow_all”：接受所有 cookie。
      - “reject_all”: 拒绝所有 cookie。
      - “reject_third_party”：拒绝所有第三方 cookie。
      - “allow_visited”：仅在 cookie 的顶级域名已经有至少一个 cookie 时才接受第三方 cookie。
      - “reject_trackers”：拒绝跟踪 cookie。
      - “reject_trackers_and_partition_foreign”：拒绝跟踪和分区的第三方 cookie。

    - `nonPersistentCookies` {{deprecated_inline}}：布尔值，若为 `true`，则所有的 cookie 都将被视作会话 cookie。

- `firstPartyIsolate`

  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。

    若为 `true`，则 `firstPartyIsolate` 偏好将浏览器将所有第三方域名的数据（包括 cookie、HSTS 数据、缓存的图像等）与地址栏中的域关联起来。这可以防止第三方跟踪器使用直接存储的信息来识别用户跨不同的网站，但可能会破坏用户使用第三方帐户（如 Facebook 或 Google 帐户）登录的网站。

    默认取值为 `false`。

- `hyperlinkAuditingEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。若为 `true`，则当网站使用 `ping` 属性请求时，浏览器会发送审计 ping。
- `protectedContentEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。仅在 Windows 中可用。若为 `true`，则浏览器将为插件提供一个唯一的 ID 以运行受保护的内容。
- `referrersEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。若启用，浏览器将在你的请求中附送 [referer](/zh-CN/docs/Web/HTTP/Headers/Referer) 标头。
- `resistFingerprinting`

  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。

    浏览器指纹识别是一种网站使用 Web API 收集与浏览器或运行在其上的设备相关的状态或配置数据的做法。通过这样做，网站可以对应地建立一个数字指纹，用于识别和跟踪特定用户。

    若为 `true`，`resistFingerprinting` 偏好会使浏览器报告用于指纹识别的常用数据的通用伪造信息。这些数据包括 CPU 核心数量、JavaScript 定时器的精度和本地时区。它还会禁用其他用于指纹识别（fingerprinting）的特性，例如 GamePad 支持、WebSpeech 和 Navigator API。

    默认取值为 `false`。

- `thirdPartyCookiesAllowed`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。若为 `false`，则浏览器会阻止[第三方 cookie](/zh-CN/docs/Web/Privacy/Third-party_cookies)。
- `trackingProtectionMode`

  - : 浏览器的“跟踪保护”特性会阻止向已知会跨站点跟踪用户的域名发出的请求。最常见跟踪用户的站点通常是第三方广告和分析站点。该设置是一个 {{WebExtAPIRef("types.BrowserSetting")}} 对象，用于确定浏览器是否应启用跟踪保护。其底层值是一个字符串，可以取如下的三个值之一：

    - `"always"`：跟踪保护已启用。
    - `"never"`：跟踪保护已关闭。
    - `"private_browsing"`：仅在隐私浏览窗口中启用跟踪保护。

## 浏览器兼容性

{{Compat}}

## 示例

设置 `hyperlinkAuditingEnabled` 属性。

```js
function onSet(result) {
  if (result) {
    console.log("成功");
  } else {
    console.log("失败");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.websites.hyperlinkAuditingEnabled.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
        value: true,
      });
      setting.then(onSet);
    } else {
      console.log("无法设置 hyperlinkAuditingEnabled");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.privacy`](https://developer.chrome.google.cn/docs/extensions/reference/api/privacy) API。本文衍生自 Chromium 代码中的 [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json)。

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
