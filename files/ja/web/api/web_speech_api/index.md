---
title: Web Speech API
slug: Web/API/Web_Speech_API
tags:
  - API
  - Experimental
  - Landing
  - Reference
  - Web Speech API
  - recognition
  - speech
  - synthesis
translation_of: Web/API/Web_Speech_API
---
<div>{{DefaultAPISidebar("Web Speech API")}}{{seecompattable}}</div>

<div class="summary">
<p>Web Speech API は、音声データをウェブアプリに組み入れることを可能にします。Web Speech API は、SpeechSynthesis (Text-to-Speech; 音声合成) と SpeechRecognition (Asynchronous Speech Recognition; 非同期音声認識) の 2 つの部分から成り立っています。</p>
</div>

<h2 id="Web_Speech_Concepts_and_Usage" name="Web_Speech_Concepts_and_Usage">Web Speech API のコンセプトと使用法</h2>

<p>Web Speech API は、ウェブアプリが音声データを扱えるようにします。この API には 2 つの構成要素があります。</p>

<ul>
 <li>音声認識は {{domxref("SpeechRecognition")}} インターフェイス経由でアクセスされます。これは、音声入力 (通常はデバイスのデフォルト音声認識サービスを経由) から音声の文脈を認識し、適切に応答する機能を提供します。通常は、インターフェイスのコンストラクターを使用して新しい {{domxref("SpeechRecognition")}} オブジェクトを生成します。このオブジェクトは、デバイスのマイクを通して入力された音声を検知するための、いくつものイベントハンドラーを持ちます。{{domxref("SpeechGrammar")}} インターフェイスは、あなたのアプリが認識すべき特定の文法群のコンテナーを表します。文法は、<a href="http://www.w3.org/TR/jsgf/">JSpeech Grammar Format</a> (<strong>JSGF</strong>) を使用して定義されています。</li>
 <li>音声合成は、{{domxref("SpeechSynthesis")}} インターフェイス経由でアクセスされます。これは、プログラムに、そのテキストコンテンツを読み上げる機能を提供します (通常はデバイスのデフォルトの音声合成を経由)。異なる音声の種類は、{{domxref("SpeechSynthesisVoice")}} オブジェクトで表され、発話してほしいテキストの異なる部分は、{{domxref("SpeechSynthesisUtterance")}} オブジェクトで表されます。これらを {{domxref("SpeechSynthesis.speak()")}} メソッドに渡すことによって発話されます。</li>
</ul>

<p>これらの機能の使い方についての詳細は、<a href="/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API">Using the Web Speech API</a> を参照してください。</p>

<h2 id="Web_Speech_API_Interfaces" name="Web_Speech_API_Interfaces">Web Speech API インターフェイス</h2>

<h3 id="Speech_recognition" name="Speech_recognition">音声認識</h3>

<dl>
 <dt>{{domxref("SpeechRecognition")}}</dt>
 <dd>認識サービスのコントローラーインターフェイスです。認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も扱います。</dd>
 <dt>{{domxref("SpeechRecognitionAlternative")}}</dt>
 <dd>音声認識サービスにより認識されている単語を表します。</dd>
 <dt>{{domxref("SpeechRecognitionError")}}</dt>
 <dd>認識サービスからのエラーメッセージを表します。</dd>
 <dt>{{domxref("SpeechRecognitionEvent")}}</dt>
 <dd>{{event("result")}} イベントおよび {{event("nomatch")}} イベントのためのイベントオブジェクトです。暫定あるいは最終の音声認識結果に関連付けられたすべてのデータを含みます。</dd>
 <dt>{{domxref("SpeechGrammar")}}</dt>
 <dd>認識サービスに認識してほしい言葉または言葉のパターンです。</dd>
 <dt>{{domxref("SpeechGrammarList")}}</dt>
 <dd>{{domxref("SpeechGrammar")}} オブジェクトのリストを表します。</dd>
 <dt>{{domxref("SpeechRecognitionResult")}}</dt>
 <dd>一致した一つの認識結果を表します。これには、複数の {{domxref("SpeechRecognitionAlternative")}} オブジェクトが含まれることがあります。</dd>
 <dt>{{domxref("SpeechRecognitionResultList")}}</dt>
 <dd>{{domxref("SpeechRecognitionResult")}} オブジェクトのリストを表します。または、{{domxref("SpeechRecognition.continuous","continuous")}} モードで結果が捕捉された場合は、一つだけになります。</dd>
</dl>

<h3 id="Speech_synthesis" name="Speech_synthesis">音声合成</h3>

<dl>
 <dt>{{domxref("SpeechSynthesis")}}</dt>
 <dd>音声サービスのコントローラーインターフェイスです。これは、デバイスで利用可能な合成音声についての情報を取得したり、発話の開始や一時停止などのコマンドを実行するために使用されます。</dd>
 <dt>{{domxref("SpeechSynthesisErrorEvent")}}</dt>
 <dd>音声サービスで {{domxref("SpeechSynthesisUtterance")}} オブジェクトの処理中に発生したあらゆるエラーについての情報を含みます。</dd>
 <dt>{{domxref("SpeechSynthesisEvent")}}</dt>
 <dd>音声サービスで処理されている {{domxref("SpeechSynthesisUtterance")}} オブジェクトの現在の状態についての情報を含みます。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance")}}</dt>
 <dd>音声リクエストを表します。これは、音声サービスが読み上げるコンテンツとその読み上げ方 (言語、音声の高低、音量など) についての情報を含みます。</dd>
</dl>

<dl>
 <dt>{{domxref("SpeechSynthesisVoice")}}</dt>
 <dd>システムがサポートする音声を表します。すべての <code>SpeechSynthesisVoice</code> は、それ自身に関連する音声サービス (言語、名前、URI についての情報を含む) を持ちます。</dd>
 <dt>{{domxref("Window.speechSynthesis")}}</dt>
 <dd><code>SpeechSynthesisGetter</code> と呼ばれる <code>[NoInterfaceObject]</code> インターフェイスの一部として定義され、<code>Window</code> オブジェクトによって実装されたことで、<code>speechSynthesis</code> プロパティは {{domxref("SpeechSynthesis")}} コントローラーへのアクセスを提供します。したがって、音声合成機能へのエントリーポイントになります。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>Github 上の <a href="https://github.com/mdn/web-speech-api/">Web Speech API リポジトリー</a> には、音声合成や音声認識を説明するデモが含まれています。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<h3 id="SpeechRecognition"><code>SpeechRecognition</code></h3>

<div>


<p>{{Compat("api.SpeechRecognition", 0)}}</p>

<h3 id="SpeechSynthesis"><code>SpeechSynthesis</code></h3>

<p>{{Compat("api.SpeechSynthesis", 0)}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API">Using the Web Speech API</a></li>
 <li><a href="http://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/">SitePoint の記事</a></li>
 <li><a href="http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API">HTML5Rocks の記事</a></li>
 <li><a href="http://aurelio.audero.it/demo/speech-synthesis-api-demo.html">デモ</a> [aurelio.audero.it]</li>
</ul></div>
