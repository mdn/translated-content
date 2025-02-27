---
title: Firefox 59 for developers
slug: Mozilla/Firefox/Releases/59
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 59 中会影响开发人员的更改的信息。Firefox 59 已于 2018 年 3 月 13 日发布。

## Web 开发者应该注意的变化

### 开发工具

- [网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) 响应标签现在显示一个 [已渲染网页的预览](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html_preview) — 如果响应是一个 HTML 的话 ([Firefox bug 1353319](https://bugzil.la/1353319)).
- 存储探查器显示的 Cookie 信息 (见 [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) 现在包括一列 _“同站”_ 显示每个 cookie 的同站状态 ([Firefox bug 1298370](https://bugzil.la/1298370))。
- [标尺](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) 工具 现在包含了一个 readout 来显示当前视角的维度 ([Firefox bug 1402633](https://bugzil.la/1402633))。
- 在[响应式设计模式](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), 你现在可以使用光标键设置屏幕尺寸 ([Firefox bug 1421663](https://bugzil.la/1421663))。详见 [Setting screen size](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting_screen_size) 。
- The _Raw headers_ display in the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) _Headers_ tab now includes the response's status code ([Firefox bug 1419401](https://bugzil.la/1419401)).

### HTML

- 实现了{{HTMLElement("textarea")}} 元素的 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/textarea#autocomplete) 属性。这使得你可以启用或禁用元素的表单自动填写。

### CSS

_无变化。_

### SVG

_无变化。_

### JavaScript

_无变化。_

### APIs

#### 新增 API

- 在 nightly 中默认启用 [Custom element](/zh-CN/docs/Web/API/Web_components/Custom_Elements) v1（[Firefox bug 1406825](https://bugzil.la/1406825)）。

#### DOM

_无变化。_

#### DOM 事件

- 实现了 {{domxref("EventTarget.EventTarget()")}} 构造函数 ([Firefox bug 1379688](https://bugzil.la/1379688)).

#### 多媒体 和 WebRTC

_无变化。_

#### Canvas 和 WebGL

_无变化。_

### HTTP

_无变化。_

### 安全

- 顶部导航 URI `data://` 已经被屏蔽了 [Firefox bug 1401895](https://bugzil.la/1401895).
- 修改了 {{httpheader("X-Frame-Options")}} 报头的 `SAMEORIGIN` 指令，现在它不仅会检查顶级 IFrame 是否来自同一来源 , 也会检查它的祖先。 ([Firefox bug 725490](https://bugzil.la/725490)).

### 插件

_无变化。_

### 其他

_无变化。_

## Web 平台的删减

### HTML

_无变化。_

### CSS

_无变化。_

### APIs

- 不标准的方法 `Event.getPreventDefault()` 已经被移除了。请使用 {{domxref("Event.defaultPrevented")}} 来决定在{{domxref("Event")}}中是否要调用{{domxref("Event.preventDefault", "preventDefault()")}} 。
- 专用属性 [`Navigator.mozNotification`](/zh-CN/docs/Archive/API/Navigator/mozNotification) 和 `DesktopNotification` 接口已被移除 , 推荐使用标准的 [Notifications API](/zh-CN/docs/Web/API/Notifications_API) ([Firefox bug 952453](https://bugzil.la/952453)).
- 专用方法 `window.external.addSearchEngine()`已被移除 ([Firefox bug 862147](https://bugzil.la/862147))。欲了解更多细节，参见 {{domxref("Window.sidebar")}} 。

### SVG

_无变化。_

## Mozilla 和附加组件开发者应该注意的变化

### WebExtensions

_无变化。_

## 参见

- Firefox 59 的站点兼容性

## 更早期的版本

{{Firefox_for_developers}}
