---
title: SpeechRecognition.maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - maxAlternatives
  - recognition
  - speech
translation_of: Web/API/SpeechRecognition/maxAlternatives
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>{{domxref("SpeechRecognition")}} インターフェイスの <strong><code>maxAlternatives</code></strong> プロパティは {{domxref("SpeechRecognitionResult")}} で提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。</p>

<p>デフォルト値は <code>1</code> です</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
mySpeechRecognition.maxAlternatives = 2;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>最大いくつ代替の結果を返すかを表す数</p>

<h2 id="Examples" name="Examples">例</h2>

<p>下記のソースコードは <a href="https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js">Speech color changer</a> を参考しています</p>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'ja-JP';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

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
   <td>{{SpecName('Web Speech API', '#dfn-maxalternatives', 'maxAlternatives')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.SpeechRecognition.maxAlternatives")}}</p>
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
