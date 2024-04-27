---
title: BeforeInstallPromptEvent：prompt() 方法
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

{{domxref("BeforeInstallPromptEvent")}} 接口的 **`prompt()`** 方法使开发者能够在自己选择的时间展示安装提示。通常，这将在应用程序自定义安装界面的事件处理器中被调用。

此方法必须在用户操作（如按钮点击）的事件处理器中调用，并且对于给定的 `BeforeInstallPromptEvent` 实例只能调用一次。

## 语法

```js-nolint
prompt()
```

### 参数

无。

### 返回值

一个解析为包含以下属性的对象的 {{jsxref("Promise")}}：

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : 一个字符串，表示用户是否选择了安装应用。此字符串必须是以下其中一个值：
    - `"accepted"`: 用户已安装该应用。
    - `"dismissed"`: 用户未安装该应用。

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : 如果用户选择安装应用，此参数为一个字符串，表示所选平台的名称，该名称来自 {{domxref("BeforeInstallPromptEvent.platforms")}} 属性的值之一。如果用户选择不安装应用，此参数则为空字符串。

## 实例

请参考[来自 `BeforeInstallPromptEvent` 接口示例](/zh-CN/docs/Web/API/BeforeInstallPromptEvent#示例)。

## 浏览器兼容性

{{Compat}}

## 参见

- [制作可安装的 PWA](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- web.dev（2021）上的[How to provide your own in-app install experience](https://web.dev/articles/customize-install)
