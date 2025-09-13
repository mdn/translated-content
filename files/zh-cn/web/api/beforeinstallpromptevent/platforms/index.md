---
title: BeforeInstallPromptEvent：platforms 属性
short-title: platforms
slug: Web/API/BeforeInstallPromptEvent/platforms
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

{{domxref("BeforeInstallPromptEvent")}} 接口的 **`platforms`** 属性列出了事件被分发到的平台。这适用于希望向用户提供版本选择的用户代理，例如“web”或“play”，允许用户在 Web 和 Android 版之间进行选择。

## 值

字符串数组，其中每个字符串标识安装的目标平台。

## 浏览器兼容性

{{Compat}}

## 参见

- [使 PWA 可安装](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- web.developers.google.cn 上的[如何提供你自己的应用内安装体验](https://web.developers.google.cn/articles/customize-install)（2021）
