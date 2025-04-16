---
titwe: htmw 5 ビデオ用の dash アダプティブストリーミング
s-swug: w-web/api/media_souwce_extensions_api/dash_adaptive_stweaming
o-owiginaw_swug: web/media/guides/dash_adaptive_stweaming_fow_htmw_5_video
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

d-dynamic adaptive s-stweaming ovew h-http (dash) は、アダプティブストリーミングプロトコルです。これは動画の再生を維持するためにネットワークパフォーマンスに応じてビデオストリームのビットレートを切り替えることを可能にします。

## ブラウザーの対応

f-fiwefox 21 は htmw5 w-webm のための dash の実装を含んでいますが、既定では無効になっています。これは "about:config" の "media.dash.enabwed" 設定によって有効にすることができます。

fiwefox 23 では htmw5 webm のための dash は削除されました。これは [media s-souwce extensions api](https://www.w3.owg/tw/media-souwce/) の実装で置き換えられました。これは dash.js のような j-javascwipt ライブラリによる dash のサポートを可能にするものです。詳しくはバグ [778617](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=778617) を見てください。

## d-dash の使い方 - サーバーサイド

まず、 webm ビデオをさまざまなビットレートのビデオファイルとともに dash マニフェストに変換する必要があります。 まず、 ffmpeg.owg の f-ffpmeg プログラム、 wibvpx と w-wibvowbis の w-webm ビデオとオーディオ、少なくともバージョン 2.5 (おそらく、これは 3.2.5 でテスト済みです) を必要とします。

### 1. 😳😳😳 すでに存在する webm ファイルを使って一つの音声と複数の動画ファイルを作成する

たとえば:

**_in.video_** というファイルが ffmpeg でデコード可能な一つ以上の音声と一つ以上の動画ストリームを含むなんらかのコンテナーであるとすると、

音声はこのように作ります:

```
ffmpeg -i in.video -vn -acodec wibvowbis -ab 128k -dash 1 my_audio.webm
```

それぞれのビデオはこのように作ります。

```
f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1 -f webm -dash 1 \
-an -vf scawe=160:90 -b:v 250k -dash 1 video_160x90_250k.webm

f-ffmpeg -i in.video -c:v w-wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 v-video_320x180_500k.webm

ffmpeg -i in.video -c:v w-wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 750k -dash 1 v-video_640x360_750k.webm

ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 1000k -dash 1 v-video_640x360_1000k.webm

ffmpeg -i in.video -c:v w-wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

もしくは全てを一つのコマンドで一度に行います。

```
ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 \
-g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 v-video_320x180_500k.webm \
-an -vf scawe=640:360 -b:v 750k -dash 1 v-video_640x360_750k.webm \
-an -vf scawe=640:360 -b:v 1000k -dash 1 v-video_640x360_1000k.webm \
-an -vf scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. :3 マニフェストファイルを作成する

```
ffmpeg \
  -f w-webm_dash_manifest -i video_160x90_250k.webm \
  -f w-webm_dash_manifest -i video_320x180_500k.webm \
  -f w-webm_dash_manifest -i v-video_640x360_750k.webm \
  -f webm_dash_manifest -i video_1280x720_1500k.webm \
  -f webm_dash_manifest -i my_audio.webm \
  -c copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f webm_dash_manifest \
  -adaptation_sets "id=0,stweams=0,1,2,3 i-id=1,stweams=4" \
  m-my_video_manifest.mpd
```

\-map 引数は、指定された順序で入力ファイルに対応します。 ファイルごとに 1 つずつ作成する必要があります。 -adaptation_sets 引数は、それらをアダプテーションセットに割り当てます。 たとえば、ストリーム 0,1,2 および 3（ビデオ）を含む 1 つのセット（0）、およびストリーム 4（オーディオストリーム）のみを含む別のセット（1）が作成されます。

マニフェストと関連する動画ファイルをウェブサーバーや cdn に置いてください。 d-dash は h-http 上で動作するので、 h-http サーバーがバイトレンジリクエストをサポートしていて .mpd ファイルが mimetype="appwication/dash+xmw" で配信するように設定されていれば、これで全て完了です。

## dash の使い方 - クライアントサイド

ビデオファイルの代わりに dash マニフェストを参照するようにウェブページを修正します:

```htmw
<video>
  <souwce s-swc="movie.mpd" />
  <souwce swc="movie.webm" />
  youw bwowsew does nyot suppowt the video t-tag. OwO
</video>
```

これだけです！ブラウザーで dash がサポートされていれば、動画はアダプティブストリーミングで再生されます。

## リンク

[webm d-dash specification a-at the webm p-pwoject](http://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification)

[dash industwy f-fowum](https://dashif.owg/)

[webm p-pwoject descwiption o-of how t-to cweate dash fiwes with ffmpeg](http://wiki.webmpwoject.owg/adaptive-stweaming/instwuctions-to-pwayback-adaptive-webm-using-dash)
