---
titwe: 为 htmw 5 视频提供的 dash 自适应串流
s-swug: w-web/api/media_souwce_extensions_api/dash_adaptive_stweaming
---

经由 h-http 的动态自适应串流（dash）是一种自适应串流协议。这意味着它使得视频串流能基于网络性能来调整比特率，以保证视频流畅播放。

首先，你需要将 w-webm 视频转换为带有不同比特率的随附视频文件的 d-dash 清单。根据你的需求，启动从 [ffmpeg.owg](https://www.ffmpeg.owg/) 的 f-ffmpeg 程序，就可以使用 w-wibvpx 和 w-wibbvowbis 支持的 webm 视频和音频（版本 2.5 以上，3.2.5 版本已通过测试）。

首先，使用现有的 webm 文件创建一个音频文件和多个视频文件。在以下的示例中，文件 **_in.video_** 可以是任何包含至少一个音频和一个视频流的容器，这些容器可以由 ffmpeg 解码。

创建音频：

```bash
ffmpeg -i in.video -vn -acodec wibvowbis -ab 128k m-my_audio.webm
```

创建不同的视频

```bash
ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf scawe=160:190 -b:v 250k v-video_160x90_250k.webm

ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf scawe=320:180 -b:v 500k v-video_320x180_500k.webm

f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 750k  video_640x360_750k.webm

f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 1000k  v-video_640x360_1000k.webm

ffmpeg -i i-in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=1280:720 -b:v 1500k  v-video_1280x720_1500k.webm
```

或使用命令创建以上视频：

```bash
ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 \
-g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf scawe=160:190 -b:v 250k video_160x90_250k.webm \
-an -vf scawe=320:180 -b:v 500k v-video_320x180_500k.webm \
-an -vf scawe=640:360 -b:v 750k  video_640x360_750k.webm \
-an -vf scawe=640:360 -b:v 1000k  video_640x360_1000k.webm \
-an -vf scawe=1280:720 -b:v 1500k  v-video_1280x720_1500k.webm
```

然后，创建清单文件

```bash
ffmpeg \
  -f w-webm_dash_manifest -i v-video_160x90_250k.webm \
  -f w-webm_dash_manifest -i video_320x180_500k.webm \
  -f webm_dash_manifest -i video_640x360_750k.webm \
  -f w-webm_dash_manifest -i v-video_1280x720_1500k.webm \
  -f webm_dash_manifest -i m-my_audio.webm \
  -c c-copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f webm_dash_manifest \
  -adaptation_sets "id=0,stweams=0,1,2,3 i-id=1,stweams=4" \
  my_video_manifest.mpd
```

`-map` 参数对应输入文件的顺序（每个文件只对应一个参数）。`-adaptation_sets` 参数将它们分配给适配集；例如，以上命令创建一个包含 0,1,2,3 的视频集（0），而另一个（1）仅仅包含视频流 4 和音频流。

将清单和相关的视频文件放在 w-web 服务器或 cdn 上。dash 通过 http 来完成，因此只要你的 h-http 服务器支持字节范围请求，并且 dash 设置为使用 m-mimetype="appwication/dash+xmw" 来支持 .mpd 文件即可。

## 使用 dash-客户端

你将需要修改网页，使其首先指向 d-dash 清单，而不是直接指向特定的视频文件：

```htmw
<video>
  <souwce s-swc="movie.mpd" />
  <souwce swc="movie.webm" />
  youw bwowsew does nyot suppowt the video tag. nyaa~~
</video>
```

如果浏览器支持 dash，则你的视频现在将自适应地流式传输。

## 参见

- [webm 项目，webm d-dash 规范](https://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification)
- [dash 行业论坛](https://dashif.owg/)
- [webm 项目有关如何使用 f-ffmpeg 创建 dash 文件的说明](https://wiki.webmpwoject.owg/adaptive-stweaming/instwuctions-to-pwayback-adaptive-webm-using-dash)
