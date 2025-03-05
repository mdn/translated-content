---
title: HTMLMediaElement：setSinkId() 方法
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

{{domxref("HTMLMediaElement")}} 接口的 **`setSinkId()`** 方法设置要用于音频输出的设备 ID，并返回一个 {{jsxref("Promise")}}。

只有当应用程序被允许使用指定的设备时，此方法才有效。有关更多信息，请参阅下面的[安全要求](#安全要求)。

## 语法

```js-nolint
setSinkId(sinkId)
```

### 参数

- `sinkId`
  - : 音频输出设备的 {{domxref("MediaDeviceInfo.deviceId")}}。

### 返回值

一个 {{jsxref("Promise")}}，其会兑现 {{jsxref("undefined")}}。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果使用 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)来阻止使用音频输出，则会返回此错误。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果 `deviceId` 不匹配任何音频输出设备，则会返回此错误。
- `AbortError` {{domxref("DOMException")}}
  - : 如果切换到新的音频设备的音频输出设备失败，则会返回此错误。

## 安全要求

对此 API 的访问受以下约束：

- 方法必须在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中调用。
- 访问可能受 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)的控制。
- 需要用户的授权才能访问非默认设备。用户通过在 {{domxref("MediaDevices.selectAudioOutput()")}} 显示的提示中选择与 ID 相关联的设备来授予权限。

## 示例

此示例展示了如何从 {{domxref("MediaDevices.enumerateDevices()")}} 返回的设备数组中选择一个音频输出设备，并将其设置为音频的输出目标。请注意，`enumerateDevices()` 的结果仅包括无需用户权限或已经授予权限的设备。

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === "audiooutput");
const audio = document.createElement("audio");
await audio.setSinkId(audioDevice.deviceId);
console.log(`音频被输出到 ${audio.sinkId}`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [音频输出设备 API](/zh-CN/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
