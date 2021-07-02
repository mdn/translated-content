---
title: Navigator.getUserMedia()
slug: Web/API/Navigator/getUserMedia
tags:
  - API
  - Deprecated
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - Method
  - Navigator
  - Reference
  - WebRTC
  - getusermedia
translation_of: Web/API/Navigator/getUserMedia
---
<div>{{APIRef("Media Capture and Streams")}}{{deprecated_header}}</div>

<p><code><strong>Navigator.getUserMedia()</strong></code> メソッドは、最大1系統の動画入力機器 (カメラや共有画面など) および最大1系統の音声入力機器 (マイクなど) を {{domxref("MediaStream")}} のソースとして使用する許可をユーザーに求めます。</p>

<p>許可が与えられた場合、それらの機器から動画や音声のトラックを持つ <code>MediaStream</code> が、指定された成功コールバックに配信されます。許可が拒否された場合や、互換性のある入力機器が存在しない場合、その他のエラー条件が発生した場合は、何が問題となったかを説明する {{domxref("MediaStreamError")}} オブジェクトを伴ってエラーコールバックが実行されます。ユーザーがまったく選択をしなかった場合は、どちらのコールバックも実行されません。</p>

<div class="note">
<p>これは古いメソッドです。代わりに新しい {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を使用してください。技術的には非推奨ではありませんが、この古いコールバックのバージョンはそのようにマークされています。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">navigator.getUserMedia(<var>constraints</var>, <var>successCallback</var>, <var>errorCallback</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>constraints</var></code></dt>
 <dd>要求するメディアの形式を指定する {{domxref("MediaStreamConstraints")}} オブジェクト。詳細は、現在の {{domxref("MediaDevices.getUserMedia()")}} メソッド下の <a href="/ja/docs/Web/API/MediaDevices/getUserMedia#Parameters">constraints</a> セクションと、<a href="/ja/docs/Web/API/Media_Streams_API/Constraints">能力と制約と設定</a>を参照してください。</dd>
 <dt><code><var>successCallback</var></code></dt>
 <dd>メディアアクセスの要求が承認されたときに呼び出される関数です。この関数は、メディアストリームを含む {{domxref("MediaStream")}} オブジェクトの単一の引数で呼び出されます。コールバックは、次の例のようにストリームを任意のオブジェクト ({{HTMLElement("audio")}} や {{HTMLElement("video")}} 要素など) に割り当てることができます。
 <pre class="brush: js notranslate">function(stream) {
   var video = document.querySelector('video');
   video.srcObject = stream;
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
}</pre>
 </dd>
 <dt><code><var>errorCallback</var></code></dt>
 <dd>呼び出しが失敗した場合、<code>errorCallback</code> で指定され、{{domxref("MediaStreamError")}} が唯一の引数に与えられた関数が呼び出されますこのオブジェクトは、{{domxref("DOMException")}} をひな形としています。エラーコードは以下のとおり:</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{domxref("undefined")}}.</p>

<h3 id="Errors" name="Errors">エラー</h3>

<p>{{page("/ja/docs/Web/API/MediaDevices/getUserMedia", "Errors")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Width_and_height" name="Width_and_height">幅と高さ</h3>

<p>これは、様々のブラウザの接頭辞に対処したコードを含む、<code>getUserMedia()</code> の使用例です。ただし、これは非推奨の使用方法なので注意してください。現在の API の使用例は、{{domxref("MediaDevices.getUserMedia()")}} 下の <a href="/ja/docs/Web/API/MediaDevices/getUserMedia#Frame_rate">例</a> セクションを参照してください。</p>

<pre class="brush: js notranslate">navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.srcObject = stream;
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}
</pre>

<h2 id="Permissions" name="Permissions">許可設定</h2>

<p>インストール可能アプリ (例えば <a href="/ja/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial">Firefox OS アプリ</a>) で <code>getUserMedia()</code> を使用するには、次のどちらか、または両方の項目をマニフェストファイルに記述する必要があります:</p>

<pre class="brush: js notranslate">"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}</pre>

<p>詳しい情報は、<a href="/ja/Apps/Developing/App_permissions#audio-capture">permission: audio-capture</a> および <a href="/ja/Apps/Developing/App_permissions#video-capture">permission: video-capture</a> を参照してください。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div class="warning">
<p>新しいコードでは代わりに {{domxref("Navigator.mediaDevices.getUserMedia()")}} を使用してください。</p>
</div>

<p>{{Compat("api.Navigator.getUserMedia")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>この非推奨のメソッドに代わる {{domxref("MediaDevices.getUserMedia()")}}。</li>
 <li><a href="/ja/docs/WebRTC">WebRTC</a> - この API の前置きページ。</li>
 <li><a href="/ja/docs/WebRTC/MediaStream_API">MediaStream API</a> - メディアストリームオブジェクト向けの API。</li>
 <li><a href="/ja/docs/WebRTC/taking_webcam_photos">Taking webcam photos</a> - <code>getUserMedia()</code> を使って、動画ではなく写真を撮るためのチュートリアル。</li>
</ul>
