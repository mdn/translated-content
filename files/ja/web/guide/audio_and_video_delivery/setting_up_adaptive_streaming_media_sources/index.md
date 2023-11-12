---
title: Setting up adaptive streaming media sources
slug: Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
---

たとえば、 HTML5 メディア要素内で利用するために、サーバー上の適応型ストリーミングメディアソースを設定するとします。あなたはどうしますか？この記事では、最も一般的な形式である MPEG-DASH と HLS (HTTP Live Streaming) の二つについて見ていきます。

## フォーマットの選択

アダプティブ・ストリーミング・フォーマットに関しては、選択肢がたくさんあります。私たちは次の 2 つを選ぶことにしました。これらはモダンブラウザがサポートすることができます。

- MPEG-DASH
- HLS (HTTP Live Streaming)

アダプティブストリーミングを行うためにメディアをチャンクに分割します。いくらかの時間ごとに複数の異なるクオリティのファイルを提供することが必要です。よりたくさんのビットレートでエンコードを行い、より細かく時間を分割すればより 'アダプティブ' なストリーミングになりますが、通常はサイズとエンコード時間とアダプティブさの間でバランスを取ります。

The good news is that once we have encoded our media in the appropriate format we are pretty good to go. HTTP 上のアダプティブストリーミングのためには特別なサーバーサイドのコンポーネントは必要ありません。

Both MPEG-DASH and HLS use a playlist format to structure the component piece of media that make the possible streams. Various bitrate streams are broken into segments and placed in appropriate server folders — we have to provide our media players with a link to lookup files or playlists specifying the name and location of these stream folders.

## MPEG-DASH エンコーディング

MPEG-DASH は従来の HTTP Web サーバーでメディアコンテンツのアダプティブビットレートストリーミングを可能にする技術です。

Media Presentation Description (MPD) ファイルが複数のストリームの解像度やコーデックや帯域情報などを持ちます。video 要素の src 属性では、メディアを指定する代わりに MPD を指定します。

The MPD file tells the browser where the various pieces of media are located, it also includes meta data such as mimeType and codecs and there are other details such as byte-ranges in there too - it is an XML document and in many cases will be generated for you.

There are a few profiles we can use. We're going to take a look at Ondemand profile for Video On Demand (VOD) and the LIVE profile.

For live services streaming, the LIVE profile is a requirement. The stream switching capabilities are identical between the profiles.

Other reasons to use LIVE profile over Ondemand for VOD content may be:

1. クライアントかサーバーがレンジリクエストをサポートしていない
2. サーバーがレンジリクエストを効率的にキャッシュしない
3. サーバーがレンジリクエストを効率的にプリフェッチできない
4. The SIDX\* is large and having to load it first slows down startup a little
5. 同じオリジナルファイルをその他の配信方式でも使用したい (たとえば Microsoft Smooth Streaming)
6. 同じメディアファイルをライブストリーミングで配信した後 VOD でも配信したい

\*SIDX or SegmentIndexBox is a structure describing a segment by giving its earliest presentation time and other meta-data and can often make up a large portion of the MPD file.

### オンデマンドプロファイル

このプロファイルでは、オンデマンドでストリームを切り替えることができます。つまり、一連の連続ファイルを用意し、それぞれの帯域幅を指定するだけで、適切なファイルが自動的に選択されます。

オーディオトラック表現と 4 つの別々のビデオ表現を提供する簡単な例を示します。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="urn:mpeg:dash:schema:mpd:2011"
  xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd"
  type="static"
  mediaPresentationDuration="PT654S"
  minBufferTime="PT2S"
  profiles="urn:mpeg:dash:profile:isoff-on-demand:2011">

  <BaseURL>http://example.com/ondemand/</BaseURL>
  <Period>
    <!-- English Audio -->
    <AdaptationSet mimeType="audio/mp4" codecs="mp4a.40.5" lang="en" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
      <Representation id="1" bandwidth="64000">
        <BaseURL>ElephantsDream_AAC48K_064.mp4.dash</BaseURL>
      </Representation>
    </AdaptationSet>
    <!-- Video -->
    <AdaptationSet mimeType="video/mp4" codecs="avc1.42401E" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
      <Representation id="2" bandwidth="100000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0100.264.dash</BaseURL>
      </Representation>
      <Representation id="3" bandwidth="175000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0175.264.dash</BaseURL>
      </Representation>
      <Representation id="4" bandwidth="250000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0250.264.dash</BaseURL>
      </Representation>
      <Representation id="5" bandwidth="500000" width="480" height="360">
        <BaseURL>ElephantsDream_H264BPL30_0500.264.dash</BaseURL>
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

MPD ファイルを生成すれば、video タグから参照することができます。

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

MPEG-DASH をサポートしないブラウザのためのフォールバックを与えるとより良いでしょう:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

### LIVE プロファイル

MPEG-DASH を取り扱うための良いソフトウェアは [Dash Encoder](https://github.com/slederer/DASHEncoder) です。これは [MP4Box](http://gpac.wp.mines-telecom.fr/mp4box/dash/) を使ってメディアを MPEG-DASH フォーマットにエンコードします。

> **メモ:** You will need to be comfortable with make files and installing dependencies to get this software up and running.

> **メモ:** Since MPEG-DASH decoding is done partially using JavaScript and MSE files are often grabbed using XHR, keep same origin rules in mind.

> **メモ:** If you use WebM you can use the methods shown in this tutorial [DASH Adaptive Streaming for HTML 5 Video](/ja/docs/DASH_Adaptive_Streaming_for_HTML_5_Video).

エンコードされるとファイル構造はこのようになります。

```
play list ->                /segments/news.mp4.mpd

main segment folder ->      /segments/main/

100 Kbps segment folder ->  /segments/main/news100 contains (1.m4s, 2.m4s, 3.m4s ... )

200 Kbps segment folder ->  /segments/main/news200 contains (1.m4s, 2.m4s, 3.m4s ... )

300 Kbps segment folder ->  /segments/main/news300 contains (1.m4s, 2.m4s, 3.m4s ... )

400 Kbps segment folder ->  /segments/main/news400 contains (1.m4s, 2.m4s, 3.m4s ... )
```

プレイリスト(`.mpd` ファイル)はすべてのさまざまなビットレートファイルが存在する場所を明示的に示す XML です。

```xml
<?xml version="1.0"?>
  <MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:DASH:schema:MPD:2011"  xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011" profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" mediaPresentationDuration="PT0H9M56.46S">
    <BaseURL>
      http://example.com/segments
    </BaseURL>
    <Period start="PT0S">
      <AdaptationSet bitstreamSwitching="true">

        <Representation id="0" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="46986">
          <SegmentBase>
            <Initialization sourceURL="main/news100/1.m4s" range="0-862"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news100/2.m4s" mediaRange="863-7113"/>
            <SegmentURL media="main/news100/3.m4s" mediaRange="7114-14104"/>
            <SegmentURL media="main/news100/4.m4s" mediaRange="14105-17990"/>
          </SegmentList>
        </Representation>

        <Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="91932">
          <SegmentBase>
            <Initialization sourceURL="main/news200/1.m4s" range="0-864"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news200/2.m4s" mediaRange="865-11523"/>
            <SegmentURL media="main/news200/3.m4s" mediaRange="11524-25621"/>
            <SegmentURL media="main/news200/4.m4s" mediaRange="25622-33693"/>
          </SegmentList>
        </Representation>

        <Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="270370">
          <SegmentBase>
            <Initialization sourceURL="main/news300/1.m4s" range="0-865"/>
          </SegmentBase>
          <SegmentList duration="1">
            <SegmentURL media="main/news300/2.m4s" mediaRange="866-26970"/>
            <SegmentURL media="main/news300/3.m4s" mediaRange="26971-72543"/>
            <SegmentURL media="main/news300/4.m4s" mediaRange="72544-95972"/>
          </SegmentList>
        </Representation>

        ...

      </AdaptationSet>
    </Period>
  </MPD>
```

MPD ファイルは、さまざまなメディアが配置されている場所をブラウザに伝え、 mimeType やコーデックなどのメタデータも含み、そこにはバイト範囲などの詳細も含まれています。一般的にこれらのファイルは自動的に生成されます。

> **メモ:** 音声と動画のストリームを異なるファイルに分割することも可能です。帯域幅に応じて優先順位を付けて個別に処理することができます。

MPD ファイルを生成すれば、 {{ htmlelement("video") }} 要素で参照することができます。

```html
<video src="my.mpd" type="application/dash+xml"></video>
```

MPEG-DASH をサポートしないブラウザのためのフォールバックを与えるとより良いでしょう:

```html
<video>
  <source src="my.mpd" type="application/dash+xml" />
  <!-- fallback -->
  <source src="my.mp4" type="video/mp4" />
  <source src="my.webm" type="video/webm" />
</video>
```

> **メモ:** MPEG-DASH の再生は [dash.js](https://github.com/Dash-Industry-Forum/dash.js/) と [Media Source Extensions](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html) のブラウザ対応に依存します。最新の [dash.js リファレンスプレイヤー](http://dashif.org/reference/players/javascript/index.html) を参照してください。

## HLS エンコーディング

HTTP Live Streaming (HLS) is an HTTP-based media streaming protocol implemented by Apple. It's incorporated into iOS and OSX platforms and works well on [mobile and desktop Safari and most Android devices with some caveats](http://www.jwplayer.com/html5/hls/).

Media is usually encoded as MPEG-4 (H.264 video and AAC audio) and packaged into an MPEG-2 Transport Stream, which is then broken into segments and saved as one or more `.ts` media files. Apple provides tools to convert media files to the appropriate format.

### HLS エンコーディングツール

HLS エンコードのための役立つツールがいくつかあります。

- For HLS live stream encoding [Adobe provide a Media Encoder for Mac](http://www.adobe.com/support/downloads/product.jsp?product=160&platform=Macintosh).
- The Stream Segmenter — provided by Apple for Mac platforms — takes a media stream from a local network and splits media into equally sized media files together with an index file.
- Apple also provides a File Segmenter for Mac — which takes a suitably encoded file, splits it up and produces a index file, in a similar fashion to the Stream Segmenter.

> **メモ:** これらのツールについて詳しくは [Using HTTP Live Streaming](https://developer.apple.com/library/mac/documentation/networkinginternet/conceptual/streamingmediaguide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html) を読んでください。

### インデックスファイル (プレイリスト)

The HLS Index File (much like MPEG-DASH's `.mpd` file) contains the information on where all the media segments reside, as well as other meta data such as bandwidth application. Apple uses the `.m3u8` format (an extension of its `.m3u` playlist format) for index files — see below for an example:

```
#EXT-X-VERSION:3
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:1

# Old-style integer duration; avoid for newer clients.
#EXTINF:10,
http://media.example.com/segment0.ts

# New-style floating-point duration; use for modern clients.
#EXTINF:10.0,
http://media.example.com/segment1.ts
#EXTINF:9.5,
http://media.example.com/segment2.ts
#EXT-X-ENDLIST
```

> **メモ:** Comprehensive information on how to encode media for Apple's HLS format can be found on [Apple's Developer Pages](https://developer.apple.com/streaming/).

## See Also

Further resources on adaptive streaming.

### General information

- [Adaptive Streaming in the Field](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx)

### HLS overview and references

- [HTTP Live Streaming](https://developer.apple.com/streaming/)
- [What is HLS (HTTP-Live-Streaming)?](<http://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx>)
- [HTTP Live Streaming Overview](https://developer.apple.com/library/ios/documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html)

### MPEG-DASH overview and references

- [Dynamic Adaptive Streaming over HTTP Dataset](http://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf)
- [MPEG-DASH and streaming reference and resources (MSDN)](<http://msdn.microsoft.com/en-us/library/dn551370(v=vs.85).aspx>)
- [DASH Adaptive Streaming for HTML 5 Video](/ja/docs/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP: From Content Creation to Consumption](http://www.slideshare.net/christian.timmerer/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption)

### MPEG-DASH tools

- [DASHEncoder](https://github.com/slederer/DASHEncoder)
- [MP4Box](http://gpac.wp.mines-telecom.fr/mp4box)
- [DASH.js Wiki](https://github.com/Dash-Industry-Forum/dash.js/wiki)
- [DASH.js Google Group](https://groups.google.com/forum/#!forum/dashjs)
- [Akamai Dash Diagnostic Player](http://mediapm.edgesuite.net/dash/public/support-player/current/index.html)

Adaptive streaming examples

- [ITEC – Dynamic Adaptive Streaming over HTTP](http://www-itec.uni-klu.ac.at/dash/?page_id=207)
- [MPEG DASH Media Source Demo](https://dash-mse-test.appspot.com/media.html)
