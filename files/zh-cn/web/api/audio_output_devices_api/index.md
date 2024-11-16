---
title: 音频输出设备 API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 5a5f3d3cbbfabf138aa9f0d3e2c8fce4a168f5cc
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

**音频输出设备 API**（Audio Output Devices API）允许 Web 应用程序提示用户选择用于音频播放的输出设备。

## 概念和用法

操作系统通常允许用户指定音频应从扬声器、蓝牙耳机或其他音频输出设备播放。该 API 允许应用程序从 Web 页面内提供与此相同的功能。

即使在权限策略允许的情况下，访问特定音频输出设备仍然需要明确的用户权限，因为用户可能处于不适合通过某些输出设备播放音频的位置。

该 API 提供了 {{domxref("MediaDevices.selectAudioOutput()")}} 方法，允许用户从文档的 {{httpheader("Permissions-Policy")}} HTTP 标头的 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) 指令允许的音频输出设备中选择所需的音频输出。然后选择的设备会获得用户权限，允许使用 {{domxref("MediaDevices.enumerateDevices()")}} 枚举该设备，并使用 {{domxref("HTMLMediaElement.setSinkId()")}} 将其设置为音频输出设备。

音频设备可能会任意连接和断开。希望对此类更改做出反应的应用程序可以侦听 {{domxref("MediaDevices/devicechange_event", "devicechange")}} 事件，并使用 {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} 来确定返回的设备中是否存在 `sinkId`。这可能会触发例如暂停或恢复播放等操作。

## 接口

### 对接口的拓展

音频输出设备 API 扩展了以下 API，添加了列出的特性：

#### MediaDevices

- {{domxref("MediaDevices.selectAudioOutput()")}}
  - : 此方法提示用户选择特定的音频输出设备，例如扬声器或耳机。选择设备授予用户使用该设备的权限，并返回有关设备的信息，包括其 ID。

#### HTMLMediaElement

- {{domxref("HTMLMediaElement.setSinkId()")}}
  - : 此方法设置要用于输出的音频设备的 ID，如果允许，则将使用该设备。
- {{domxref("HTMLMediaElement.sinkId")}}
  - : 此属性返回正在用于输出的音频设备的唯一 ID，如果正在使用默认的用户代理设备，则返回空字符串。

## 安全要求

对 API 的访问受以下约束：

- 所有方法和属性只能在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中调用。

- {{domxref("MediaDevices.selectAudioOutput()")}} 授予对所选设备用作音频输出的用户权限：

  - 访问可能受 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)的限制。
  - 需要[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素交互，才能调用此方法。

- {{domxref("HTMLMediaElement.setSinkId()")}} 将允许的 ID 设置为音频输出：

  - 访问可能受 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)的限制。
  - 需要用户权限来设置非默认设备 ID。
    - 这可以通过在由 `MediaDevices.selectAudioOutput()` 启动的提示中选择来获得。
    - 如果已经使用 {{domxref("MediaDevices.getUserMedia()")}} 获得了使用相同组中媒体输入设备的权限，则用户还会隐式授予对应输出设备的权限。

## 示例

以下是使用 `selectAudioOutput()` 的示例，该方法位于通过按钮点击触发的函数内，并将所选设备设置为音频输出。

代码首先检查是否支持 `selectAudioOutput()`，如果支持，则使用它选择输出并返回[设备 ID](/zh-CN/docs/Web/API/MediaDeviceInfo/deviceId)。然后我们使用默认输出播放一些音频，然后调用 `setSinkId()` 以切换到所选输出设备。

```js
document.querySelector("#myButton").addEventListener("click", async () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("不支持 selectAudioOutput()，或不在安全上下文中。");
    return;
  }

  // 显示选择设备的提示
  const audioDevice = await navigator.mediaDevices.selectAudioOutput();

  // 创建音频元素并在默认设备上开始播放音频
  const audio = document.createElement("audio");
  audio.src = "https://example.com/audio.mp3";
  audio.play();

  // 将输出更改为所选的音频输出设备。
  audio.setSinkId(audioDevice.deviceId);
});
```

请注意，如果记录输出详细信息，它们可能如下所示：

```js
console.log(
  `${audioDevice.kind}: ${audioDevice.label} id = ${audioDevice.deviceId}`,
);
// audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
