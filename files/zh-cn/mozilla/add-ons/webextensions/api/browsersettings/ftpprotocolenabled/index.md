---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，用于确定浏览器中是否启用了 FTP 协议。

其底层值是一个布尔值。

> [!NOTE]
> 从 Firefox 版本 88 开始，此设置为只读。

## 浏览器兼容性

{{Compat}}

## 示例

切换设置：

```js
function toggleAllowFtp() {
  function toggle(current) {
    console.log(`当前值：${current.value}`);
    browser.browserSettings.ftpProtocolEnabled.set({ value: !current.value });
  }

  browser.browserSettings.ftpProtocolEnabled.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowFtp();
});
```

{{WebExtExamples}}
