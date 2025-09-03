---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 8de26f8083cd83e41328147240d94b4da902e987
---

使用此函数获取与特定请求相关的 [TLS](/zh-CN/docs/Glossary/TLS) 连接的详细信息。

你需要将相关请求的 `requestId` 和一些可选的额外参数传递给此函数。它返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为一个 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} 对象。

此函数只能从 {{WebExtAPIRef("webRequest.onHeadersReceived")}} 监听器内部调用。`requestId` 可以在传递给监听器的 `details` 对象中找到。

你必须将“blocking”选项传递给 `webRequest.onHeadersReceived.addListener()`。因此，要使用此 API，你必须具有“webRequestBlocking”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)，以及使用 `webRequest` 监听器所需的常规权限（“webRequest”权限和主机的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)）。

## 语法

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // 字符串
  options          // 可选对象
)
```

### 参数

- `requestId`
  - : `string`。要获取安全信息的请求的 ID。可以从传递给任何 `webRequest` 事件监听器的 `details` 对象中获取。
- `options` {{optional_inline}}
  - : `object`。一个可以包含以下属性的对象：
    - `certificateChain` {{optional_inline}}
      - : `boolean`。如果为 `true`，返回的 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} 对象将包含完整的证书链和信任根证书。如果为 `false` 则仅包含服务器证书。默认为 `false`。
    - `rawDER` {{optional_inline}}
      - : `boolean`。如果为 `true`，则 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}} 属性中的每个 {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} 都将包含一个 `rawDER` 属性。其包含 DER 编码的组成证书数据的 ASN.1。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为一个 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} 对象。

## 浏览器兼容性

{{Compat}}

## 示例

此示例监听所有对“mozilla.org”及其子域名的 HTTPS 请求，并记录服务器证书中的主题的名称：

```js
async function logSubject(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      {},
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(securityInfo.certificates[0].subject);
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logSubject,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

此示例监听所有对“mozilla.org”及其子域名的 HTTPS 请求，并记录受信任根证书中的名称：

```js
async function logRoot(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      { certificateChain: true },
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(
        securityInfo.certificates[securityInfo.certificates.length - 1].issuer,
      );
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logRoot,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

{{WebExtExamples}}
