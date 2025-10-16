---
title: HTMLMediaElement：currentTime 属性
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 接口的 **`currentTime`** 属性指定当前的播放时间（以秒为单位）。

改变 `currentTime` 的值会将媒体定位（seek）到新的时间。

## 值

一个双精度浮点数，表示当前的播放时间（以秒为单位）。

如果媒体尚未播放，`currentTime` 的值表示一旦调用 {{domxref("HTMLMediaElement.play", "play()")}} 方法，媒体将开始播放的时间点。

将 `currentTime` 设置为新值会将媒体定位到给定的时间（如果媒体可用）。

对于没有已知时长的媒体（例如正在直播的媒体），浏览器可能无法从媒体缓冲区中获取已过期的部分。此外，对于时间线不从 0 秒开始的媒体，无法定位到其时间线最早时间之前的时间点。

可以使用 {{domxref("HTMLMediaElement.duration", "duration")}} 属性确定媒体的长度（以秒为单位）。

## 示例

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## 使用说明

### 降低时间精度

为了防止计时攻击和[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)，`video.currentTime` 的精度可能会根据浏览器设置进行舍入。在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认开启，默认为 2ms。你还可以启用 `privacy.resistFingerprinting`，在这种情况下，精度将为 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 中较大的值。

例如，在降低了时间精度的情况下，`video.currentTime` 的结果总是 0.002 的倍数，或者在 `privacy.resistFingerprinting` 启用的情况下，为 0.1（或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）的倍数。

```js
// Firefox 60 中降低的时间精度（2ms）
video.currentTime;
// 可能是：
// 23.404
// 24.192
// 25.514
// ……

// 启用 `privacy.resistFingerprinting` 后降低的时间精度
video.currentTime;
// 可能是：
// 49.8
// 50.6
// 51.7
// ……
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.currentTime` 属性的接口
- {{domxref("HTMLMediaElement.fastSeek()")}}：另一种设置时间的方法
- {{domxref("HTMLMediaElement.duration")}}：媒体的时长（以秒为单位）
