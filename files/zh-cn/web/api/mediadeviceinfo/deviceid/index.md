---
title: MediaDeviceInfo：deviceId 属性
short-title: deviceId
slug: Web/API/MediaDeviceInfo/deviceId
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

`MediaDeviceInfo` 接口的 **`deviceId`** 只读属性返回包含所表示的设备的标识符的字符串，并且该值在不同的会话中将保持不变。

其他应用程序无法猜测该标识符，并且它对于调用的应用程序是唯一的。当用户清除 cookie 时会同时重置该标识符。在隐私浏览模式，则会使用一个不同的标识符（此时标识符不会在不同的会话中保持不变）。

## 值

字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
