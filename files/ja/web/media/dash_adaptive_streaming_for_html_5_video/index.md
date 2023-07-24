---
title: HTML 5 ビデオ用の DASH アダプティブストリーミング
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
---

Dynamic Adaptive Streaming over HTTP (DASH) は、アダプティブストリーミングプロトコルです。これは動画の再生を維持するためにネットワークパフォーマンスに応じてビデオストリームのビットレートを切り替えることを可能にします。

## ブラウザーの対応

Firefox 21 は HTML5 WebM のための DASH の実装を含んでいますが、既定では無効になっています。これは "about:config" の "media.dash.enabled" 設定によって有効にすることができます。

Firefox 23 では HTML5 WebM のための DASH は削除されました。これは [Media Source Extensions API](http://www.w3.org/TR/media-source/) の実装で置き換えられました。これは dash.js のような JavaScript ライブラリによる DASH のサポートを可能にするものです。詳しくはバグ [778617](https://bugzilla.mozilla.org/show_bug.cgi?id=778617) を見てください。

## DASH の使い方 - サーバーサイド

まず、 WebM ビデオをさまざまなビットレートのビデオファイルとともに DASH マニフェストに変換する必要があります。 まず、 ffmpeg.org の ffpmeg プログラム、 libvpx と libvorbis の WebM ビデオとオーディオ、少なくともバージョン 2.5 (おそらく、これは 3.2.5 でテスト済みです) を必要とします。

### 1. すでに存在する WebM ファイルを使って一つの音声と複数の動画ファイルを作成する。

たとえば:

**_in.video_** というファイルが ffmpeg でデコード可能な一つ以上の音声と一つ以上の動画ストリームを含むなんらかのコンテナーであるとすると、

音声はこのように作ります:

```
ffmpeg -i in.video -vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm
```

それぞれのビデオはこのように作ります。

```
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

もしくは全てを一つのコマンドで一度に行います。

```
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. マニフェストファイルを作成する

```
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

\-map 引数は、指定された順序で入力ファイルに対応します。 ファイルごとに 1 つずつ作成する必要があります。 -adaptation_sets 引数は、それらをアダプテーションセットに割り当てます。 たとえば、ストリーム 0,1,2 および 3（ビデオ）を含む 1 つのセット（0）、およびストリーム 4（オーディオストリーム）のみを含む別のセット（1）が作成されます。

マニフェストと関連する動画ファイルをウェブサーバーや CDN に置いてください。 DASH は HTTP 上で動作するので、 HTTP サーバーがバイトレンジリクエストをサポートしていて .mpd ファイルが mimetype="application/dash+xml" で配信するように設定されていれば、これで全て完了です。

## DASH の使い方 - クライアントサイド

ビデオファイルの代わりに DASH マニフェストを参照するようにウェブページを修正します:

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Your browser does not support the video tag.
</video>
```

これだけです！ブラウザーで DASH がサポートされていれば、動画はアダプティブストリーミングで再生されます。

## リンク

[WebM DASH Specification at The WebM Project](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[DASH Industry Forum](http://dashif.org/)

[WebM project description of how to create DASH files with FFMPEG](http://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
