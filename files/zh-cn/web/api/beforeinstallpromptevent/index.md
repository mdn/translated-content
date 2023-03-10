---
title: BeforeInstallPrompt
slug: Web/API/BeforeInstallPromptEvent
---

{{ ApiRef() }} {{ Non-standard_header }}

在一个用户被提示”安装“一个网站到移动设备的一个主屏幕之前，**`BeforeInstallPromptEvent`** 被 {{domxref("Window.onbeforeinstallprompt")}} 处理程序触发。

该接口继承自{{domxref("Event")}}接口。

{{InheritanceDiagram(700, 60, 20)}}

## 构造器

- {{domxref("new window.BeforeInstallPromptEvent(name, eventInitOptions)")}}
  - : 创建一个新的 **`BeforeInstallPromptEvent`**.

## 属性

_继承自父类，{{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platform")}} {{readonlyinline}}
  - : 返回一个包含了调度事件的平台（s）的 {{domxref("DOMString")}} 数组。这是为希望向用户提供版本选择的 user agent 提供的，例如，“web”或“play”允许用户在 web 版本或 Android 版本之间进行选择。
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{readonlyinline}}
  - : 返回一个可以解析为 {{domxref("DOMString")}} 的 {{jsxref("Promise")}} ，其值为 'installed' 或 'dismissed'，用以判断用户是否选择安装该 PWA。

## 方法

- {{domxref("BeforeInstallPromptEvent.prompt()")}}
  - : 立即弹出安装提示。允许开发者按照自己选择的时间弹出安装提示。该方法返回 {{jsxref("Promise")}}。

## 例子

```plain
window.addEventListener("beforeinstallprompt", function(e) {
  // log the platforms provided as options in an install prompt
  console.log(e.platforms); // e.g., ["web", "android", "windows"]
  e.userChoice.then(function(outcome) {
    console.log(outcome); // either "installed", "dismissed", etc.
  }, handleError);
});
```

## 浏览器兼容性

{{Compat}}
