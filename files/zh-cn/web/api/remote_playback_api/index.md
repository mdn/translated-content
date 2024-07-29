---
title: 远程回放 API
slug: Web/API/Remote_Playback_API
l10n:
  sourceCommit: f6fd1d76db03af97c23b5587fb7eba5762f425df
---

{{DefaultAPISidebar("Remote Playback API")}}

**远程回放 API** 扩展了 {{domxref("HTMLMediaElement")}} 来控制远程设备上播放的媒体。

## 概念和用法

远程回放设备是指电视、投影仪或扬声器等已连接的设备。此 API 考虑了通过 HDMI 或 DVI 连接的有线设备，以及 Chromecast 或 AirPlay 等无线设备。

该 API 使具有媒体元素（如视频或音频文件）的页面能够在连接的远程设备上启用和控制该媒体的播放。例如，在连接的电视上播放视频。

> [!NOTE]
> Safari for iOS 有一些在 AirPlay 上启用远程回放的 API。这些细节可以在 [Safari 9.0 发行说明](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16)中找到。Android 版本的 Firefox 和 Chrome 也包含一些远程回放功能。如果本地网络中有可用的投放（Cast）设备，这些设备将显示投放按钮。

## 接口

- {{domxref("RemotePlayback")}}
  - : 允许页面检测远程回放设备的可用性，然后连接和控制这些设备上的播放。

### 对其他接口的扩展

- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : 一个布尔值，用于设置或返回远程回放状态，指示是否允许媒体元素具有远程回放 UI 界面。
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : 返回一个与媒体元素关联的 {{domxref("RemotePlayback")}} 对象实例。

## 示例

下面的示例展示了一个带有支持远程回放的自定义控件的播放器。最初，用于选取设备的按钮是隐藏的。

```html
<video id="videoElement" src="https://example.org/media.ext">
  <button id="deviceBtn" style="display: none;">选取设备</button>
</video>
```

{{domxref("RemotePlayback.watchAvailability()")}} 方法监视可用的远程回放设备。如果设备可用，使用回调函数来显示选取设备按钮。

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // 根据设备可用性显示或隐藏选取设备按钮。
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  /* 在设备可用性无法被持续监视的情况下，显示按钮以允许用户尝试连接。*/
  deviceBtn.style.display = "inline";
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
