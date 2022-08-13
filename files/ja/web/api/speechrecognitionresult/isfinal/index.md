---
title: SpeechRecognitionResult.isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionResult
  - Web Speech API
  - isFinal
  - recognition
  - speech
translation_of: Web/API/SpeechRecognitionResult/isFinal
---
<p>{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}</p>

<p>{{domxref("SpeechRecognitionResult")}}インターフェイスの <code><strong>isFinal</strong></code> リードオンリーのプロパティは結果がファイナルかどうかの ({{domxref("Boolean")}} 型) のことです。true の場合は、これは結果を返す最終の時間です。false の場合は、暫定の結果を返し、後々それは更新されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var myIsFinal = speechRecognitionResultInstance.isFinal;</pre>

<h3 id="Returns" name="Returns">返り値</h3>

<p>A {{domxref("Boolean")}}.</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;

  console.log(event.results[0].isFinal);
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#dfn-isFinal', 'isFinal')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.SpeechRecognitionResult.isFinal")}}</p>

<h3 id="Firefox_OS_permissions" name="Firefox_OS_permissions">Firefox OS 権限</h3>

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
