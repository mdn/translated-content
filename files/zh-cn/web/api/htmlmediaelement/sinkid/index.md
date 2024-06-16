---
title: "HTMLMediaElement: sinkId property"
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 5a5f3d3cbbfabf138aa9f0d3e2c8fce4a168f5cc
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

[Audio Output Devices API](/zh-CN/docs/Web/API/Audio_Output_Devices_API) 的一个只读属性，返回一个字符串，作为播放音频输出的设备的唯一 ID。

这个 ID 应该是从 {{domxref("MediaDevices.enumerateDevices()")}} 返回的 {{domxref("MediaDeviceInfo.deviceId")}} 值之一，或者是 `id-multimedia` 或 `id-communications`。如果正在使用用户代理的默认设备，它会返回一个空字符串。

## 值

一个字符串，表示当前的音频输出设备，或者如果正在使用用户代理的默认输出设备时，则为空字符串。

## 安全性要求

访问此属性必须处于以下约束条件下：

- 必须在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中调用该属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.setSinkId()")}}
