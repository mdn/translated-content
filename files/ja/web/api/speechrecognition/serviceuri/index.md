---
title: SpeechRecognition.serviceURI
slug: Web/API/SpeechRecognition/serviceURI
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - serviceURI
  - speech
translation_of: Web/API/SpeechRecognition/serviceURI
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>{{domxref("SpeechRecognition")}} インターフェイスの <strong><code>serviceURI</code></strong> プロパティは現在の <code>SpeechRecognition</code> が利用している音声認識の場所を指定しています。デフォルト値はユーザーの音声サービスです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var myServiceURI = mySpeechRecognition.serviceURI;
mySpeechRecognition.serviceURI = 'path/to/my/service/';</pre>

<h3 id="Value" name="Value">値</h3>

<p>音声認識サービスの URI を表す {{domxref("DOMString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var recognition = new SpeechRecognition();

recognition.speechURI = 'http://www.example.com';

...</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#dfn-serviceuri', 'serviceURI')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.SpeechRecognition.serviceURI")}}</p>
</div>

<h3 id="Firefox_OS_permissions" name="Firefox_OS_permissions">Firefox OS の権限</h3>

<p>アプリで音声認識を利用する前に、下記の権限を <a href="/ja/docs/Web/Apps/Build/Manifest">manifest</a> に追加する必要があります。</p>

<pre class="brush: json">"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}</pre>

<p>privileged アプリ権限も必要なので、下記も追加が必要です。</p>

<pre class="brush: json">  "type": "privileged"</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
