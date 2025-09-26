---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

允许扩展修改某些全局浏览器设置。此 API 的每个属性都是一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，提供修改特定设置的能力。

由于这些是全局设置，扩展之间可能会产生冲突。有关如何处理冲突的详细信息，请参阅 [`BrowserSetting.set()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) 的文档。

使用此 API 需要拥有“browserSettings”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 属性

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : 确定在网页中运行的代码是否可以通过显式弹出窗口的方式来响应用户事件。
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : 确定浏览器缓存是否启用。
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : 确定是否可以通过双击关闭选定的标签页。
- {{WebExtAPIRef("browserSettings.colorManagement")}}
  - : 确定颜色管理的各种设置。
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : 确定触发上下文菜单弹出的鼠标事件。
- {{WebExtAPIRef("browserSettings.ftpProtocolEnabled")}}
  - : 确定是否启用 FTP 协议。
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : 读取浏览器主页的值。
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : 确定浏览器如何处理动画图像。
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : 读取浏览器新标签页的值。
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : 控制新打开的标签页相对于已经打开的标签页的位置。
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : 确定书签是在当前标签页还是新标签页中打开。
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : 确定搜索结果是在当前标签页还是新标签页中打开。
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : 确定地址栏自动完成建议是在当前标签页还是新标签页中打开。
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : 控制设置页面的首选颜色方案时是否覆盖浏览器主题（浅色或深色）。
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : 控制用户选择的颜色是否覆盖页面的颜色。
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : 读取浏览器支持的 TLS 的最高和最低版本。
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : 控制浏览器是否使用网页指定的字体或仅使用内置字体。
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : 防止网站使用 [`Notification`](/zh-CN/docs/Web/API/Notification) Web API 显示通知。
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : 控制缩放是应用于整个页面还是仅应用于文本。
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : 控制页面缩放是按站点还是按标签页应用。如果 {{WebExtAPIRef("privacy.websites")}} `.resistFingerprinting` 为 true，则此设置无效，缩放按标签页应用。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
