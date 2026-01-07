---
title: HTMLMediaElement：disableRemotePlayback 属性
short-title: disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Remote Playback API")}}

{{domxref("HTMLMediaElement")}} 接口的 **`disableRemotePlayback`** 属性用于确定媒体元素是否允许具有远程播放 UI。

## 值

一个布尔值，指示媒体元素是否可以具有远程播放 UI。（`false` 表示“未禁用”，即“已启用”）

## 示例

```js
const obj = document.createElement("audio");
obj.disableRemotePlayback = true;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<audio>` 元素的 `disableremoteplayback` 属性](/zh-CN/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback)
- [`<video>` 元素的 `disableremoteplayback` 属性](/zh-CN/docs/Web/HTML/Reference/Elements/video#disableremoteplayback)
