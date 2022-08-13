---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechRecognitionAlternative
  - Web Speech API
  - recognition
  - speech
translation_of: Web/API/SpeechRecognitionAlternative
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の <strong><code>SpeechRecognitionAlternative</code></strong> インターフェイスは、音声認識サービスにより認識されている一つの単語を表します。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("SpeechRecognitionAlternative.transcript")}} {{readonlyinline}}</dt>
 <dd>認識された単語の transcript を含む文字列を返します。</dd>
 <dt>{{domxref("SpeechRecognitionAlternative.confidence")}} {{readonlyinline}}</dt>
 <dd>音声認識システムの認識の正しさの信頼度を表す評価を数値で返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードは、私たちの <a href="https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js">Speech color changer</a> の例から抜粋しました。</p>

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
}</pre>


<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#speechreco-alternative', 'SpeechRecognitionAlternative')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.SpeechRecognitionAlternative")}}</p>
</div>

<h3 id="Firefox_OS_permissions" name="Firefox_OS_permissions">Firefox OS の許可設定</h3>

<p>アプリ内で音声認識を使用するには、<a href="/ja/docs/Web/Apps/Build/Manifest">manifest</a> ファイルに次の許可設定を指定する必要があります:</p>

<pre class="brush: json">"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}</pre>

<p>特権アプリも必要なため、以下も同様に含める必要があります:</p>

<pre class="brush: json">  "type": "privileged"</pre>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
