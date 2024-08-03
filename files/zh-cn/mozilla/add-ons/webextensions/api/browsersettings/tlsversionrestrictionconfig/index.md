---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，用于读取浏览器支持的 TLS（传输层安全）版本的最高和最低值。

该对象具有以下属性：

- `minimum`
  - : 浏览器支持的最低 TLS 版本。有效值为 `TLSv1`、`TLSv1.1`、`TLSv1.2`、`TLSv1.3` 和 `unknown`。
- `maximum`
  - : 浏览器支持的最高 TLS 版本。有效值为 `TLSv1`、`TLSv1.1`、`TLSv1.2`、`TLSv1.3` 和 `unknown`。

这是一个只读设置。

## 浏览器兼容性

{{Compat}}

## 示例

获取浏览器支持的最高 TLS 版本：

```js
browser.browserSettings.tlsVersionRestrictionConfig.maximum
  .get({})
  .then((result) => {
    console.log(`支持的最高 TLS 版本：${result}`);
  });
```

{{WebExtExamples}}
