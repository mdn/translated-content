---
title: Setting up adaptive streaming media sources
slug: Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
tags:
  - Audio
  - HLS
  - HTML5
  - HTTP ライブストリーミング
  - MPEG-DASH
  - Video
  - adaptive streaming
translation_of: Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources
---
<div class="summary">
<p><span class="seoSummary">たとえば、 HTML5 メディア要素内で利用するために、サーバー上の適応型ストリーミングメディアソースを設定するとします。あなたはどうしますか？この記事では、最も一般的な形式である MPEG-DASH と HLS (HTTP Live Streaming) の二つについて見ていきます。</span></p>
</div>

<h2 id="Choosing_formats" name="Choosing_formats">フォーマットの選択</h2>

<p>アダプティブ・ストリーミング・フォーマットに関しては、選択肢がたくさんあります。私たちは次の2つを選ぶことにしました。これらはモダンブラウザがサポートすることができます。</p>

<ul>
 <li>MPEG-DASH</li>
 <li>HLS (HTTP Live Streaming)</li>
</ul>

<p>アダプティブストリーミングを行うためにメディアをチャンクに分割します。いくらかの時間ごとに複数の異なるクオリティのファイルを提供することが必要です。よりたくさんのビットレートでエンコードを行い、より細かく時間を分割すればより 'アダプティブ' なストリーミングになりますが、通常はサイズとエンコード時間とアダプティブさの間でバランスを取ります。</p>

<p>The good news is that once we have encoded our media in the appropriate format we are pretty good to go. HTTP上のアダプティブストリーミングのためには特別なサーバーサイドのコンポーネントは必要ありません。</p>

<p>Both MPEG-DASH and HLS use a playlist format to structure the component piece of media that make the possible streams. Various bitrate streams are broken into segments and placed in appropriate server folders — we have to provide our media players with a link to lookup files or playlists specifying the name and location of these stream folders.</p>

<h2 id="MPEG-DASH_エンコーディング">MPEG-DASH エンコーディング</h2>

<p>MPEG-DASH は従来のHTTP Webサーバーでメディアコンテンツのアダプティブビットレートストリーミングを可能にする技術です。</p>

<p>Media Presentation Description (MPD) ファイルが複数のストリームの解像度やコーデックや帯域情報などを持ちます。video要素の src 属性では、メディアを指定する代わりにMPDを指定します。</p>

<p>The MPD file tells the browser where the various pieces of media are located, it also includes meta data such as mimeType and codecs and there are other details such as byte-ranges in there too - it is an XML document and in many cases will be generated for you.</p>

<p>There are a few profiles we can use. We're going to take a look at Ondemand profile for Video On Demand (VOD) and the LIVE profile.</p>

<p>For live services streaming, the LIVE profile is a requirement. The stream switching capabilities are identical between the profiles.</p>

<p>Other reasons to use LIVE profile over Ondemand for VOD content may be:</p>

<ol>
 <li>クライアントかサーバーがレンジリクエストをサポートしていない</li>
 <li>サーバーがレンジリクエストを効率的にキャッシュしない</li>
 <li>サーバーがレンジリクエストを効率的にプリフェッチできない</li>
 <li>The SIDX* is large and having to load it first slows down startup a little</li>
 <li>同じオリジナルファイルをその他の配信方式でも使用したい (たとえば Microsoft Smooth Streaming)</li>
 <li>同じメディアファイルをライブストリーミングで配信した後VODでも配信したい</li>
</ol>

<p>*SIDX or SegmentIndexBox is a structure describing a segment by giving its earliest presentation time and other meta-data and can often make up a large portion of the MPD file.</p>

<h3 id="オンデマンドプロファイル">オンデマンドプロファイル</h3>

<p>このプロファイルでは、オンデマンドでストリームを切り替えることができます。つまり、一連の連続ファイルを用意し、それぞれの帯域幅を指定するだけで、適切なファイルが自動的に選択されます。</p>

<p>オーディオトラック表現と4つの別々のビデオ表現を提供する簡単な例を示します。</p>

<pre class="brush: xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="urn:mpeg:dash:schema:mpd:2011"
  xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd"
  type="static"
  mediaPresentationDuration="PT654S"
  minBufferTime="PT2S"
  profiles="urn:mpeg:dash:profile:isoff-on-demand:2011"&gt;

  &lt;BaseURL&gt;http://example.com/ondemand/&lt;/BaseURL&gt;
  &lt;Period&gt;
    &lt;!-- English Audio --&gt;
    &lt;AdaptationSet mimeType="audio/mp4" codecs="mp4a.40.5" lang="en" subsegmentAlignment="true" subsegmentStartsWithSAP="1"&gt;
      &lt;Representation id="1" bandwidth="64000"&gt;
        &lt;BaseURL&gt;ElephantsDream_AAC48K_064.mp4.dash&lt;/BaseURL&gt;
      &lt;/Representation&gt;
    &lt;/AdaptationSet&gt;
    &lt;!-- Video --&gt;
    &lt;AdaptationSet mimeType="video/mp4" codecs="avc1.42401E" subsegmentAlignment="true" subsegmentStartsWithSAP="1"&gt;
      &lt;Representation id="2" bandwidth="100000" width="480" height="360"&gt;
        &lt;BaseURL&gt;ElephantsDream_H264BPL30_0100.264.dash&lt;/BaseURL&gt;
      &lt;/Representation&gt;
      &lt;Representation id="3" bandwidth="175000" width="480" height="360"&gt;
        &lt;BaseURL&gt;ElephantsDream_H264BPL30_0175.264.dash&lt;/BaseURL&gt;
      &lt;/Representation&gt;
      &lt;Representation id="4" bandwidth="250000" width="480" height="360"&gt;
        &lt;BaseURL&gt;ElephantsDream_H264BPL30_0250.264.dash&lt;/BaseURL&gt;
      &lt;/Representation&gt;
      &lt;Representation id="5" bandwidth="500000" width="480" height="360"&gt;
        &lt;BaseURL&gt;ElephantsDream_H264BPL30_0500.264.dash&lt;/BaseURL&gt;
      &lt;/Representation&gt;
    &lt;/AdaptationSet&gt;
  &lt;/Period&gt;
&lt;/MPD&gt;</pre>

<p>MPD ファイルを生成すれば、video タグから参照することができます。</p>

<pre class="brush: html">&lt;video src="my.mpd" type="application/dash+xml"&gt;&lt;/video&gt;</pre>

<p>MPEG-DASHをサポートしないブラウザのためのフォールバックを与えるとより良いでしょう:</p>

<pre class="brush: html">&lt;video&gt;
  &lt;source src="my.mpd" type="application/dash+xml"&gt;
  &lt;!-- fallback --&gt;
  &lt;source src="my.mp4" type="video/mp4"&gt;
  &lt;source src="my.webm" type="video/webm"&gt;
&lt;/video&gt;</pre>

<h3 id="LIVE_プロファイル">LIVE プロファイル</h3>

<p>MPEG-DASH を取り扱うための良いソフトウェアは <a href="https://github.com/slederer/DASHEncoder">Dash Encoder</a> です。これは <a href="http://gpac.wp.mines-telecom.fr/mp4box/dash/">MP4Box</a> を使ってメディアを MPEG-DASH フォーマットにエンコードします。</p>

<div class="note">
<p><strong>Note</strong>: You will need to be comfortable with make files and installing dependencies to get this software up and running.</p>
</div>

<div class="note">
<p><strong>Note</strong>: Since MPEG-DASH decoding is done partially using JavaScript and MSE files are often grabbed using XHR, keep same origin rules in mind.</p>
</div>

<div class="note">
<p><strong>Note</strong>: If you use WebM you can use the methods shown in this tutorial <a href="/ja/docs/DASH_Adaptive_Streaming_for_HTML_5_Video">DASH Adaptive Streaming for HTML 5 Video</a>.</p>
</div>

<p>エンコードされるとファイル構造はこのようになります。</p>

<pre>play list -&gt;                /segments/news.mp4.mpd

main segment folder -&gt;      /segments/main/

100 Kbps segment folder -&gt;  /segments/main/news100 contains (1.m4s, 2.m4s, 3.m4s ... )

200 Kbps segment folder -&gt;  /segments/main/news200 contains (1.m4s, 2.m4s, 3.m4s ... )

300 Kbps segment folder -&gt;  /segments/main/news300 contains (1.m4s, 2.m4s, 3.m4s ... )

400 Kbps segment folder -&gt;  /segments/main/news400 contains (1.m4s, 2.m4s, 3.m4s ... )</pre>

<p>プレイリスト(<code>.mpd</code> ファイル)はすべてのさまざまなビットレートファイルが存在する場所を明示的に示す XML です。</p>

<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
  &lt;MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:DASH:schema:MPD:2011"  xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011" profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" mediaPresentationDuration="PT0H9M56.46S"&gt;
    &lt;BaseURL&gt;
      http://example.com/segments
    &lt;/BaseURL&gt;
    &lt;Period start="PT0S"&gt;
      &lt;AdaptationSet bitstreamSwitching="true"&gt;

        &lt;Representation id="0" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="46986"&gt;
          &lt;SegmentBase&gt;
            &lt;Initialization sourceURL="main/news100/1.m4s" range="0-862"/&gt;
          &lt;/SegmentBase&gt;
          &lt;SegmentList duration="1"&gt;
            &lt;SegmentURL media="main/news100/2.m4s" mediaRange="863-7113"/&gt;
            &lt;SegmentURL media="main/news100/3.m4s" mediaRange="7114-14104"/&gt;
            &lt;SegmentURL media="main/news100/4.m4s" mediaRange="14105-17990"/&gt;
          &lt;/SegmentList&gt;
        &lt;/Representation&gt;

        &lt;Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="91932"&gt;
          &lt;SegmentBase&gt;
            &lt;Initialization sourceURL="main/news200/1.m4s" range="0-864"/&gt;
          &lt;/SegmentBase&gt;
          &lt;SegmentList duration="1"&gt;
            &lt;SegmentURL media="main/news200/2.m4s" mediaRange="865-11523"/&gt;
            &lt;SegmentURL media="main/news200/3.m4s" mediaRange="11524-25621"/&gt;
            &lt;SegmentURL media="main/news200/4.m4s" mediaRange="25622-33693"/&gt;
          &lt;/SegmentList&gt;
        &lt;/Representation&gt;

        &lt;Representation id="1" codecs="avc1" mimeType="video/mp4" width="320" height="240" startWithSAP="1" bandwidth="270370"&gt;
          &lt;SegmentBase&gt;
            &lt;Initialization sourceURL="main/news300/1.m4s" range="0-865"/&gt;
          &lt;/SegmentBase&gt;
          &lt;SegmentList duration="1"&gt;
            &lt;SegmentURL media="main/news300/2.m4s" mediaRange="866-26970"/&gt;
            &lt;SegmentURL media="main/news300/3.m4s" mediaRange="26971-72543"/&gt;
            &lt;SegmentURL media="main/news300/4.m4s" mediaRange="72544-95972"/&gt;
          &lt;/SegmentList&gt;
        &lt;/Representation&gt;

        ...

      &lt;/AdaptationSet&gt;
    &lt;/Period&gt;
  &lt;/MPD&gt;</pre>

<p>MPD ファイルは、さまざまなメディアが配置されている場所をブラウザに伝え、 mimeType やコーデックなどのメタデータも含み、そこにはバイト範囲などの詳細も含まれています。一般的にこれらのファイルは自動的に生成されます。</p>

<div class="note">
<p><strong>メモ</strong>: 音声と動画のストリームを異なるファイルに分割することも可能です。帯域幅に応じて優先順位を付けて個別に処理することができます。</p>
</div>

<p>MPD ファイルを生成すれば、 {{ htmlelement("video") }} 要素で参照することができます。</p>

<pre class="brush: html">&lt;video src="my.mpd" type="application/dash+xml"&gt;&lt;/video&gt;</pre>

<p>MPEG-DASH をサポートしないブラウザのためのフォールバックを与えるとより良いでしょう:</p>

<pre class="brush: html">&lt;video&gt;
  &lt;source src="my.mpd" type="application/dash+xml"&gt;
  &lt;!-- fallback --&gt;
  &lt;source src="my.mp4" type="video/mp4"&gt;
  &lt;source src="my.webm" type="video/webm"&gt;
&lt;/video&gt;</pre>

<div class="note">
<p><strong>メモ</strong>: MPEG-DASH の再生は <a href="https://github.com/Dash-Industry-Forum/dash.js/">dash.js</a> と <a href="https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html">Media Source Extensions</a> のブラウザ対応に依存します。最新の <a href="http://dashif.org/reference/players/javascript/index.html">dash.js リファレンスプレイヤー</a> を参照してください。</p>
</div>

<h2 id="HLS_Encoding" name="HLS_Encoding">HLS エンコーディング</h2>

<p>HTTP Live Streaming (HLS) is an HTTP-based media streaming protocol implemented by Apple. It's incorporated into iOS and OSX platforms and works well on <a href="http://www.jwplayer.com/html5/hls/">mobile and desktop Safari and most Android devices with some caveats</a>.</p>

<p>Media is usually encoded as MPEG-4 (H.264 video and AAC audio) and packaged into an MPEG-2 Transport Stream, which is then broken into segments and saved as one or more <code>.ts</code> media files. Apple provides tools to convert media files to the appropriate format.</p>

<h3 id="HLS_encoding_tools" name="HLS_encoding_tools">HLS エンコーディングツール</h3>

<p>HLS エンコードのための役立つツールがいくつかあります。</p>

<ul>
 <li>For HLS live stream encoding <a href="http://www.adobe.com/support/downloads/product.jsp?product=160&amp;platform=Macintosh">Adobe provide a Media Encoder for Mac</a>.</li>
 <li>The Stream Segmenter — provided by Apple for Mac platforms — takes a media stream from a local network and splits media into equally sized media files together with an index file.</li>
 <li>Apple also provides a File Segmenter for Mac — which takes a suitably encoded file, splits it up and produces a index file, in a similar fashion to the Stream Segmenter.</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: これらのツールについて詳しくは <a href="https://developer.apple.com/library/mac/documentation/networkinginternet/conceptual/streamingmediaguide/UsingHTTPLiveStreaming/UsingHTTPLiveStreaming.html">Using HTTP Live Streaming</a> を読んでください。</p>
</div>

<h3 id="Index_Files_(Playlists)" name="Index_Files_(Playlists)">インデックスファイル (プレイリスト)</h3>

<p>The HLS Index File (much like MPEG-DASH's <code>.mpd</code> file) contains the information on where all the media segments reside, as well as other meta data such as bandwidth application. Apple uses the <code>.m3u8</code> format (an extension of its <code>.m3u</code> playlist format) for index files — see below for an example:</p>

<pre>#EXT-X-VERSION:3
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
#EXT-X-ENDLIST</pre>

<div class="note">
<p><strong>Note</strong>: Comprehensive information on how to encode media for Apple's HLS format can be found on <a href="https://developer.apple.com/streaming/">Apple's Developer Pages</a>.</p>
</div>

<h2 id="See_Also">See Also</h2>

<p>Further resources on adaptive streaming.</p>

<h3 id="General_information">General information</h3>

<ul>
 <li><a href="http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/Adaptive-Streaming-in-the-Field-73017.aspx">Adaptive Streaming in the Field</a></li>
</ul>

<h3 id="HLS_overview_and_references">HLS overview and references</h3>

<ul>
 <li><a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a></li>
 <li><a href="http://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx">What is HLS (HTTP-Live-Streaming)?</a></li>
 <li><a href="https://developer.apple.com/library/ios/documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html">HTTP Live Streaming Overview</a></li>
</ul>

<h3 id="MPEG-DASH_overview_and_references">MPEG-DASH overview and references</h3>

<ul>
 <li><a href="http://www-itec.uni-klu.ac.at/bib/files/p89-lederer.pdf">Dynamic Adaptive Streaming over HTTP Dataset</a></li>
 <li><a href="http://msdn.microsoft.com/en-us/library/dn551370(v=vs.85).aspx">MPEG-DASH and streaming reference and resources (MSDN)</a></li>
 <li><a href="/ja/docs/DASH_Adaptive_Streaming_for_HTML_5_Video">DASH Adaptive Streaming for HTML 5 Video</a></li>
 <li><a href="http://www.slideshare.net/christian.timmerer/dynamic-adaptive-streaming-over-http-from-content-creation-to-consumption" style="color: rgb(65, 131, 196); text-decoration: none; background: transparent;">Dynamic Adaptive Streaming over HTTP: From Content Creation to Consumption</a></li>
</ul>

<h3 id="MPEG-DASH_tools">MPEG-DASH tools</h3>

<ul>
 <li><a href="https://github.com/slederer/DASHEncoder">DASHEncoder</a></li>
 <li><a href="http://gpac.wp.mines-telecom.fr/mp4box">MP4Box</a></li>
 <li><a href="https://github.com/Dash-Industry-Forum/dash.js/wiki">DASH.js Wiki</a></li>
 <li><a href="https://groups.google.com/forum/#!forum/dashjs">DASH.js Google Group</a></li>
 <li><a href="http://mediapm.edgesuite.net/dash/public/support-player/current/index.html">Akamai Dash Diagnostic Player</a></li>
</ul>

<p>Adaptive streaming examples</p>

<ul>
 <li><a href="http://www-itec.uni-klu.ac.at/dash/?page_id=207">ITEC – Dynamic Adaptive Streaming over HTTP</a></li>
 <li><a href="https://dash-mse-test.appspot.com/media.html">MPEG DASH Media Source Demo</a></li>
</ul>
