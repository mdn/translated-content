---
title: Ogg メディア用のサーバーの設定
slug: Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media
original_slug: Web/Media/Formats/Configuring_servers_for_Ogg_media
---

{{HTTPSidebar}}

HTML {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素を使用すると、ユーザーはプラグインやその他のソフトウェアをインストールする必要なくメディアを表示できます。サーバーが Ogg メディアを正しく配信するためには、いくつか設定が必要な場合があります。

## 正しい MIME タイプの Ogg メディアを提供する

\*.ogg and \*.ogv files containing video (possibly with an audio track as well, of course), should be served with the `video/ogg` MIME type. \*.oga and \*.ogg files containing only audio should be served with the `audio/ogg` MIME type.

If you don't know whether the Ogg file contains audio or video, you can serve it with the MIME type application/ogg, and Gecko will treat it as a video file.

Most servers don't by default serve Ogg media with the correct MIME types, so you'll likely need to add the appropriate configuration for this.

For Apache, you can add the following to your configuration:

```
AddType audio/ogg .oga
AddType video/ogg .ogv
AddType application/ogg .ogg
```

## HTTP 1.1 byte range requests を正しく処理する

In order to support seeking and playing back regions of the media that aren't yet downloaded, Gecko uses HTTP 1.1 byte-range requests to retrieve the media from the seek target position. In addition, Gecko uses byte-range requests to seek to the end of the media (assuming you serve the {{HTTPHeader("Content-Length")}} header) in order to determine the duration of the media.

Your server should accept the {{HTTPHeader("Accept-Ranges")}}`: bytes` HTTP header if it can accept byte-range requests. It must return {{HTTPStatus("206")}}`: Partial content` to all byte range requests; otherwise, browsers can't be sure you actually support byte range requests.

Your server must also return "`206: Partial Content`" for the request "`Range: bytes=0-`" as well.

## 通常のキーフレームを含める

When Gecko seeks through Ogg media to a specified time, it has to seek to the nearest key frame before the seek target, then download and decode the video from there until the requested target time. The farther apart your key frames are, the longer this takes, so it's helpful to include key frames at regular intervals.

By default, [`ffmpeg2theora`](https://v2v.cc/~j/ffmpeg2theora/) uses one key frame every 64 frames (or about every 2 seconds at 30 frames per second), which works pretty well.

> [!NOTE]
> Of course, the more key frames you use, the larger your video file is, so you may need to experiment a bit to get the right balance between file size and seek performance.

## preload 属性の使用を検討する

The HTML {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements provide the `preload` attribute, which tells Gecko to attempt to download the entire media when the page loads. Without `preload`, Gecko only downloads enough of the media to display the first video frame, and to determine the media's duration.

`preload` is off by default, so if getting to video is the point of your web page, your users may appreciate it if you include `preload` in your video elements.

## 古いバージョンの Firefox の設定

### Serve X-Content-Duration headers

> [!NOTE]
> As of [Firefox 41](/ja/docs/Mozilla/Firefox/Releases/41), the `X-Content-Duration` header is no longer supported. See [Firefox バグ 1160695](https://bugzil.la/1160695) for more details.

The Ogg format doesn't encapsulate the duration of media, so for the progress bar on the video controls to display the duration of the video, Gecko needs to determine the length of the media using other means.

There are two ways Gecko can do this. The best way is to offer an `X-Content-Duration` header when serving Ogg media files. This header provides the duration of the video in seconds (**not** in HH:MM:SS format) as a floating-point value.

For example, if the video is 1 minute and 32.6 seconds long, this header would be:

```
X-Content-Duration: 92.6
```

If your server provides the `X-Content-Duration` header when serving Ogg media, Gecko doesn't have to do any extra HTTP requests to seek to the end of the file to calculate its duration. This makes the entire process much more efficient as well as more accurate.

As an inferior alternative, Gecko can estimate the video length based on the Content-Length. See next point.

### Don't use gzip/deflate compression

One common way to reduce the load on a web server is to use [gzip or deflate compression](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) when serving to a supporting web browser. When Firefox requests an Ogg media, it advertises that it can handle a gzipped or deflated response; the HTTP request includes the `Accept-Encoding: gzip,deflate` header. But despite Firefox advertising that it supports gzip/deflate, you probably don't want to gzip or deflate Ogg media. If you serve an Ogg media compressed, Firefox won't be able to seek in the media, or determine its duration. Since the video/audio data in Ogg files is already compressed, gzip/deflate won't actually save you much bandwidth anyway, so you probably want to disable compression when serving Ogg files.

Also, Apache servers don't send the Content-Length response header if gzip encoding is used.

> [!NOTE]
> Starting in Gecko 2.0, Gecko will no longer request gzip or deflate compression when downloading media. The above is only relevant for Firefox 3.5/3.6.

### Getting the duration of Ogg media

You can use the `oggz-info` tool to get the media duration; this tool is included with the [`oggz-tools`](https://www.xiph.org/oggz/) package. The output from `oggz-info` looks like this:

```
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

## 関連情報

- [Video and audio content](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Media formats supported by the audio and video elements](/ja/docs/Web/Media/Formats)
