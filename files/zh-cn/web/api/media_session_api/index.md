---
title: 媒体会话 API
slug: Web/API/Media_Session_API
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{DefaultAPISidebar("Media Session API")}}

**媒体会话 API** 提供了自定义媒体通知的方法。它的实现原理是：为用户代理提供网页应用所播放媒体的元数据以供显示。

它还提供了操作处理程序，浏览器可通过这些处理程序访问平台上的媒体按键，例如键盘、耳机、遥控器上的硬件按键，以及移动设备通知区域和锁屏界面中的软件按键。因此，即使你没有查看网页，也能通过设备无缝控制网页提供的媒体内容。

其目标是让用户无需打开播放媒体的特定页面，即可了解正在播放的内容并进行控制。要支持媒体会话 API，浏览器首先需要一种机制来访问操作系统级别的媒体控制功能，并受其控制（例如火狐浏览器的 [MediaControl](https://bugzil.la/1648100)）。

## 媒体会话的概念和用法

{{domxref("MediaMetadata")}} 接口允许网站为正在播放的媒体内容向平台用户界面提供丰富的元数据。这些元数据包括标题、艺术家（创作者）名称、专辑（合集）、封面图以及章节信息。平台可以在媒体中心、通知、设备锁屏界面等处显示这些元数据。例如，不同设备可能会以如下方式呈现媒体会话 API 的数据：

![桌面浏览器、手机和智能手表上显示的《辛特尔》预告片标题及封面图的媒体会话数据](media-session-ui.jpg)

> [!CALLOUT]
> 原始图片资源：web.dev 上的[桌面设备上的媒体中心、移动设备上的媒体通知和穿戴式设备](https://web.developers.google.cn/articles/media-session)（2024）

{{domxref("MediaSession")}} 接口允许用户通过用户代理定义的界面元素来控制媒体的播放。与这些元素的交互会触发正在播放媒体的网页上的操作处理程序。由于可能有多个页面同时使用此 API，因此用户代理负责调用正确页面的操作处理程序。当没有页面定义的行为时，用户代理会提供默认行为。

## 访问媒体会话 API

{{domxref("MediaSession")}} 是媒体会话 API 的主要接口。与其创建自己的 `MediaSession` 实例，不如通过 {{domxref("navigator.mediaSession")}} 属性来访问该 API。例如，将媒体会话的当前状态设置为 `playing`：

```js
navigator.mediaSession.playbackState = "playing";
```

## 接口

- {{domxref("ChapterInformation")}}
  - : 表示媒体资源（视频或音频文件）中某个章节的元数据。
- {{domxref("MediaMetadata")}}
  - : 允许网页提供丰富的媒体元数据，以便在平台用户界面中显示。
- {{domxref("MediaSession")}}
  - : 允许网页为标准的媒体播放交互提供自定义行为。

## 示例

### 为音乐播放器设置动作处理程序

以下示例演示了媒体会话 API 的特性检测。它为该会话实例化了一个元数据对象，并为用户控制操作添加了操作处理程序：

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "纳特·金·科尔",
    album: "终极合集（重制版）",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("seekto", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("skipad", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("togglecamera", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("togglemicrophone", () => {
    /* 省略代码实现 */
  });
  navigator.mediaSession.setActionHandler("hangup", () => {
    /* 省略代码实现 */
  });
}
```

某些用户代理会在移动设备上禁用媒体元素的自动播放功能，并要求用户通过手势操作来启动媒体播放。以下示例为页面上的播放按钮添加了一个 `pointerup` 事件，该事件随后用于触发媒体会话代码：

```js
playButton.addEventListener("pointerup", (event) => {
  const audio = document.querySelector("audio");

  // 用户与页面进行了交互。让我们播放音频吧！
  audio
    .play()
    .then(() => {
      /* 按照之前所示设置媒体会话控制。 */
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### 使用动作处理程序控制幻灯片演示

`previousslide` 和 `nextslide` 操作处理程序可用于处理幻灯片演示中的前后翻页操作，例如当用户将演示文稿置于{{domxref("Picture-in-Picture API", "画中画 API ", "", "nocode")}}窗口中，并点击浏览器提供的控件来浏览幻灯片时。

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log("> 用户点击“向前翻页”图标。");
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log("警告！不支持媒体会话操作“previousslide”。");
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log("> 用户点击“向后翻页”图标。");
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log("警告！不支持媒体会话操作“nextslide”。");
}
```

参见[媒体会话示例：幻灯片演示](https://googlechrome.github.io/samples/media-session/slides.html)以查看实际示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- web.dev 上的[使用媒体绘画 API 自定义媒体通知和播放控制](https://web.developers.google.cn/articles/media-session)（2024）
