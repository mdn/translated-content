---
title: 为 HTML 5 视频提供的 DASH 自适应串流
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
---

经由 HTTP 的动态自适应串流（DASH）是一种自适应串流协议。这意味着它使得视频串流能基于网络性能来调整比特率，以保证视频流畅播放。

## 浏览器支持

Firefox 21 包含了针对 HTM5 WebM 视频的 DASH 实现，但默认没有启用。可以通过在“about:config”里调整“`media.dash.enabled`”首选项来开启。

Firefox 23 移除了针对 HTML5 WebM 视频的 DASH 实现。此功能将被 [媒体源扩展 API（MSE）](http://www.w3.org/TR/media-source/)的实现取代。MSE 可实现通过 JavaScript 库（例如 dash.js）来提供对 DASH 的支持。详情参见 Bug [778617](https://bugzilla.mozilla.org/show_bug.cgi?id=778617)。

## 使用 DASH - 服务端

首先，您需要将 WebM 视频转换为带有不同比特率的随附视频文件的 DASH 清单。根据您的需求，启动从 [ffmpeg.org](http://www.ffmpeg.org) 的 ffmpeg 程序，就可以使用 libvpx 和 libbvorbis 支持的 WebM 视频和音频（版本 2.5 以上，3.2.5 版本已通过测试）。

### 1. 使用现有的 WebM 文件创建一个音频文件和多个视频文件。

例如：

文件**_in.video_**可以是任何包含至少一个音频和一个视频流的容器，这些容器可以由 ffmpeg 解码，

创建音频：

```plain
ffmpeg -i in.video -vn -acodec libvorbis -ab 128k my_audio.webm
```

创建不同的视频

```plain
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=160:190 -b:v 250k video_160x90_250k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=320:180 -b:v 500k video_320x180_500k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 750k  video_640x360_750k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 1000k  video_640x360_1000k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=1280:720 -b:v 1500k  video_1280x720_1500k.webm
```

或使用命令创建以上视频：

```plain
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=160:190 -b:v 250k video_160x90_250k.webm \
-an -vf scale=320:180 -b:v 500k video_320x180_500k.webm \
-an -vf scale=640:360 -b:v 750k  video_640x360_750k.webm \
-an -vf scale=640:360 -b:v 1000k  video_640x360_1000k.webm \
-an -vf scale=1280:720 -b:v 1500k  video_1280x720_1500k.webm
```

### 2. 创建清单文件

```plain
ffmpeg \
  -f webm_dash_manifest -i video_160x90_250k.webm \
  -f webm_dash_manifest -i video_320x180_500k.webm \
  -f webm_dash_manifest -i video_640x360_750k.webm \
  -f webm_dash_manifest -i video_1280x720_1500k.webm \
  -f webm_dash_manifest -i my_audio.webm \
  -c copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f webm_dash_manifest \
  -adaptation_sets "id=0,streams=0,1,2,3 id=1,streams=4" \
  my_video_manifest.mpd
```

`-map` 参数对应输入文件的顺序（每个文件只对应一个参数）。`-adaptation_sets` 参数将它们分配给适配集；例如，以上命令创建一个包含 0,1,2,3 的视频集（0），而另一个（1）仅仅包含视频流 4 和音频流。

将清单和相关的视频文件放在 Web 服务器或 CDN 上。DASH 通过 HTTP 来完成，因此只要您的 HTTP 服务器支持字节范围请求，并且 DASH 设置为使用 mimetype="application/dash+xml" 来支持 .mpd 文件即可。

## 使用 DASH-客户端

您将需要修改网页，使其首先指向 DASH 清单，而不是直接指向特定的视频文件：

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Your browser does not support the video tag.
</video>
```

如果浏览器支持 DASH，则您的视频现在将自适应地流式传输。

## Links

[WebM DASH Specification at The WebM Project](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[DASH Industry Forum](http://dashif.org/)

[WebM project description of how to create DASH files with FFMPEG](http://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
