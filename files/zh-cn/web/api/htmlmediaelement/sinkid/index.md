---
title: HTMLMediaElement：sinkId 属性
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

{{domxref("HTMLMediaElement")}} 接口的 **`sinkId`** 只读属性，返回一个作为播放音频输出的设备唯一 ID 的字符串。

这个 ID 应该是从 {{domxref("MediaDevices.enumerateDevices()")}} 返回的 {{domxref("MediaDeviceInfo.deviceId")}} 值之一、`id-multimedia` 或 `id-communications`。如果正在使用用户代理的默认设备，它会返回一个空字符串。

## 值

一个字符串，表示当前的音频输出设备，或者如果正在使用用户代理的默认输出设备时，则为空字符串。

## 安全要求

对此属性的访问受以下约束：

- 必须在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中调用该属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [音频输出设备 API](/zh-CN/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.setSinkId()")}}
