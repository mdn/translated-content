---
title: BeforeInstallPromptEvent：userChoice 属性
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

{{domxref("BeforeInstallPromptEvent")}} 接口的 **`userChoice`** 属性表示用户在被提示安装应用时所做的安装选择。

## 值

一个 {{jsxref("Promise")}}，其将兑现为一个包含两个属性的对象：

- `outcome` {{experimental_inline}} {{non-standard_inline}}
  - : 一个字符串。表示用户是否选择安装该应用，将会是以下值之一：
    - `"accepted"`：用户安装了该应用。
    - `"dismissed"`：用户未安装该应用。

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : 如果用户选择安装该应用，则此属性是一个命名所选平台的字符串，它是 {{domxref("BeforeInstallPromptEvent.platforms")}} 属性中的值之一。如果用户未选择安装该应用，则此属性为空字符串。

## 浏览器兼容性

{{Compat}}

## 参见

- [使 PWA 可安装](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- web.developers.google.cn 上的[如何提供你自己的应用内安装体验](https://web.developers.google.cn/articles/customize-install)（2021）
