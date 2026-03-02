---
title: MediaDevices：selectAudioOutput() 方法
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

{{domxref("MediaDevices")}} 接口的 **`selectAudioOutput()`** 方法会提示用户选择一个音频输出设备，例如扬声器或耳机。如果用户选择了设备，该方法会授予用户权限，使选定的设备成为音频输出的目标。

选择设备后，如果该设备可用，可以使用 {{domxref("MediaDevices.enumerateDevices()")}} 列出它，并使用 {{domxref("HTMLMediaElement.setSinkId()")}} 将其设置为音频输出目标。

成功时，返回的 {{jsxref("Promise")}} 会兑现一个描述所选设备的 {{domxref("MediaDeviceInfo")}} 对象。

## 语法

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### 参数

- `options` {{Optional_Inline}}
  - : 对象，用于配置可以在用户提示中提供的设备。
    - `deviceId` {{Optional_Inline}}
      - : 表示单个先前公开或允许设备的 ID 的字符串。如果未设置，则会显示包含所有可用音频输出设备的提示。

        该选项适用于希望存储设备 ID 以便将来会话中默认使用同一设备的应用程序。注意，方法可能会返回同一设备的新 ID，并且持久化的 ID 必须在 {{domxref("HTMLMediaElement.setSinkId","setSinkId()")}} 成功地通过 `selectAudioOutput()` 传递后才能使用。

        > [!NOTE]
        > 如果在先前会话中通过 `selectAudioOutput()` 向用户显示了指定的非空 ID，则用户代理可能会选择跳过提示用户的步骤。
        > 在这种情况下，用户代理可能会简单地解析为此设备 ID，或者如果设备 ID 已更改，则解析为同一设备的新 ID。
        > 如果先前授予了指定设备的权限，但此后被撤销，用户代理可能会显示所有允许的设备，并突出显示具有指定 ID 的设备。

### 返回值

{{ jsxref("Promise") }}，其会兑现一个描述用户选择的音频输出设备的 {{domxref("MediaDeviceInfo")}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果使用 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)来阻止使用音频输出（此外不会显示用于选择音频输出的弹出窗口），或者用户关闭选择提示而没有选择设备时，则会返回此错误。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果没有可用的音频输出设备，则会返回此错误。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果没有发生{{Glossary("transient activation", "瞬态激活")}}（你必须从某种 UI 事件中触发它），则会返回此错误。

## 安全要求

对此 API 的访问受以下约束：

- 方法必须在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中调用。
- 需要[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)。
  用户必须与页面或 UI 元素进行交互，才能使用此特性。
- 访问可能受 [`speaker-selection`](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)的控制。

权限状态可以通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 的 {{domxref("Permissions.query", "navigator.permissions.query()")}} 方法进行查询（传递一个带有 `speaker-selection` 权限的权限描述符）。

## 示例

以下是使用 `selectAudioOutput()` 的示例，它在按钮点击时触发。它会输出所选的{{domxref("MediaDeviceInfo.deviceId", "设备 ID", "", "nocode")}} 和标签（如果可用），或者错误消息。

```js
document.querySelector("#myButton").addEventListener("click", () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("不支持 selectAudioOutput()。");
    return;
  }

  // 显示提示并记录所选设备或错误
  navigator.mediaDevices
    .selectAudioOutput()
    .then((device) => {
      console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
});
```

选择输出设备后，可能会产生如下输出：

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement.setSinkId()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) API 的介绍页面
