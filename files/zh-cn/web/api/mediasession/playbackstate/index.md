---
title: MediaSession：playbackState 属性
short-title: playbackState
slug: Web/API/MediaSession/playbackState
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Session API")}}

{{domxref("MediaSession")}} 接口的 **`playbackState`** 属性用于表示当前媒体会话是播放还是暂停状态。

## 值

一个表示当前媒体会话的播放状态的字符串。值可以是以下之一：

- `none`
  - : 浏览上下文当前无法得知播放状态，或者该状态暂不可用。
- `paused`
  - : 浏览器的媒体会话当前已暂停。可以恢复播放。
- `playing`
  - : 浏览器的媒体会话当前正在播放媒体，可以暂停。

## 示例

以下示例设置了播放和暂停两个函数，然后将它们作为相应的操作处理器配合使用。每个函数都利用 `playbackState` 属性来指示音频是否正在播放或已暂停。

```js
const actionHandlers = [
  // 播放
  [
    "play",
    async () => {
      // 播放音频
      await audioEl.play();
      // 设置播放状态
      navigator.mediaSession.playbackState = "playing";
      // 更新状态元素
      updateStatus(allMeta[index], "操作：播放 | 播放中...");
    },
  ],
  [
    "pause",
    () => {
      // 暂停音频
      audioEl.pause();
      // 设置播放状态
      navigator.mediaSession.playbackState = "paused";
      // 更新状态元素
      updateStatus(allMeta[index], "操作：暂停 | 已暂停...");
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`目前仍未支持媒体会话操作“${action}”`);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
