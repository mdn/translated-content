---
title: Configuring servers for Ogg media
slug: Web/HTTP/Configuring_servers_for_Ogg_media
---

{{HTTPSidebar}}

HTML {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 标签无需用户安装任何插件或软件即可播放媒体文件。本指南包括了一些服务器配置修改，这些修改对于 web 服务器提供 Ogg 媒体文件是必要的。这些信息在遇到服务器未配置为可识别的其他媒体类型文件时也可能提供帮助。

## 为媒体提供正确的 MIME 类型

`*.ogg` 和 `*.ogv` 文件包含了视频 (也可能带有音频)，应该和 `video/ogg` MIME 类型一起提供。 `*.oga` 和 `*.ogg` 只含音频的文件应该与 `audio/ogg` MIME 类型一起提供。

如果不确定 Ogg 文件是否包含音频或视频，可以和 MIME 类型 `application/ogg`一起提供，浏览器会将其视为视频文件。

默认情况下，大多数服务器不为 Ogg 媒体提供正确的 MIME 类型，因此可能需要为此添加适当的配置。

对于 Apache，可添加如下配置：

```plain
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

你可以在 [guide to media types and formats on the web](/zh-CN/docs/Web/Media/Formats) 找到有关可能的媒体文件类型以及其中使用的编解码器的特定信息。特别是，关于配置媒体服务器正确托管媒体 [media container formats](/zh-CN/docs/Web/Media/Formats/Containers) 特别有用。

## Handle HTTP 1.1 byte range requests correctly

In order to support seeking and playing back regions of the media that aren't yet downloaded, Gecko uses HTTP 1.1 byte-range requests to retrieve the media from the seek target position. In addition, Gecko uses byte-range requests to seek to the end of the media (assuming you serve the {{HTTPHeader("Content-Length")}} header) in order to determine the duration of the media.

Your server should accept the {{HTTPHeader("Accept-Ranges")}}`: bytes` HTTP header if it can accept byte-range requests. It must return {{HTTPStatus("206")}}`: Partial content` to all byte range requests; otherwise, browsers can't be sure you actually support byte range requests.

Your server must also return `206: Partial Content` for the request `Range: bytes=0-` as well.

## Include regular key frames

When the browser seeks through Ogg media to a specified time, it has to seek to the nearest key frame before the seek target, then download and decode the video from there until the requested target time. The farther apart your key frames are, the longer this takes, so it's helpful to include key frames at regular intervals.

By default, [`ffmpeg2theora`](http://v2v.cc/~j/ffmpeg2theora/) uses one key frame every 64 frames (or about every 2 seconds at 30 frames per second), which works pretty well.

> **备注：** Of course, the more key frames you use, the larger your video file is, so you may need to experiment a bit to get the right balance between file size and seek performance.

## Consider using the preload attribute

The HTML {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements provide the `preload` attribute, which tells the browser to attempt to download the entire media when the page loads. Without `preload`, the browser only downloads enough of the media to display the first video frame, and to determine the media's duration.

`preload` is off by default, so if getting to video is the point of your web page, your users may appreciate it if you include `preload` in your video elements. using `preload="metadata"` will preload the media file's metadata and possibly the first few frames of video. Setting `payload` to `auto` tells the browser to automatically begin downloading the media as soon as the page is loaded, under the assumption that the user will play it.

## Configuration for older Firefox versions

### Serve X-Content-Duration headers

> **备注：** As of [Firefox 41](/zh-CN/Firefox/Releases/41), the `X-Content-Duration` header is no longer supported. See [Firefox bug 1160695](https://bugzil.la/1160695) for more details.

The Ogg format doesn't encapsulate the duration of media, so for the progress bar on the video controls to display the duration of the video, Gecko needs to determine the length of the media using other means.

There are two ways Gecko can do this. The best way is to offer an `X-Content-Duration` header when serving Ogg media files. This header provides the duration of the video in seconds (**not** in HH:MM:SS format) as a floating-point value.

For example, if the video is 1 minute and 32.6 seconds long, this header would be:

```plain
X-Content-Duration: 92.6
```

If your server provides the `X-Content-Duration` header when serving Ogg media, Gecko doesn't have to do any extra HTTP requests to seek to the end of the file to calculate its duration. This makes the entire process much more efficient as well as more accurate.

As an inferior alternative, Gecko can estimate the video length based on the Content-Length. See next point.

### Don't use HTTP compression for media files

One common way to reduce the load on a web server is to use [gzip or deflate compression](http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) when serving to a supporting web browser.

Although it's unlikely, it's possible the browser may advertise that it supports HTTP compression (gzip/deflate) using the `Accept-Encoding: gzip,deflate` header when requesting media files. Your server should be configured to not do so. The data in media files is already compressed, so you won't get any real benefit from compression, and the use of compression makes it impossible for the browser to properly seek the video or determine its duration.

Another probelm with allowing HTTP compression for media streaming: Apache servers don't send the {{HTTPHeader("Content-Length")}} response header if gzip encoding is used.

### Getting the duration of Ogg media

You can use the `oggz-info` tool to get the media duration; this tool is included with the [`oggz-tools`](http://www.xiph.org/oggz/) package. The output from `oggz-info` looks like this:

```plain
 $ oggz-info /g/media/bruce_vs_ironman.ogv
 Content-Duration: 00:01:00.046

 Skeleton: serialno 1976223438
         4 packets in 3 pages, 1.3 packets/page, 27.508% Ogg overhead
         Presentation-Time: 0.000
         Basetime: 0.000

 Theora: serialno 0170995062
         1790 packets in 1068 pages, 1.7 packets/page, 1.049% Ogg overhead
         Video-Framerate: 29.983 fps
         Video-Width: 640
         Video-Height: 360

 Vorbis: serialno 0708996688
         4531 packets in 167 pages, 27.1 packets/page, 1.408% Ogg overhead
         Audio-Samplerate: 44100 Hz
         Audio-Channels: 2
```

Note that you can't simply serve up the reported Content-Duration line reported by `oggz-info`, because it's reported in HH:MM:SS format. You'll need to convert it to seconds only, then serve that as your `X-Content-Duration` value. Just parse out the HH, MM, and SS into numbers, then do (HH\*3600)+(MM\*60)+SS to get the value you should report.

It's important to note that it appears that `oggz-info` makes a read pass of the media in order to calculate its duration, so it's a good idea to store the duration value in order to avoid lengthy delays while the value is calculated for every HTTP request of your Ogg media.

## See also

- [Guide to media types and formats on the web](/zh-CN/docs/Web/Media/Formats)
- [Video and audio content](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [The "codecs" parameter in common media types](/zh-CN/docs/Web/Media/Formats/codecs_parameter)
