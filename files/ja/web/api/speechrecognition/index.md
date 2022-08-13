---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - speech
translation_of: Web/API/SpeechRecognition
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の <strong><code>SpeechRecognition</code></strong> インターフェイスは、認識サービスの制御インターフェイスです。これは、認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も扱います。</p>

<div class="note">
<p><strong>注記</strong>: Chrome では、ウェブページ上で音声認識を使用するとサーバーベースの認識エンジンが使用されます。あなたの音声を認識処理するためにウェブサービスへ送信するのでオフラインでは動作しません。</p>
</div>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
	<dt>{{domxref("SpeechRecognition.SpeechRecognition()")}}</dt>
	<dd>新しい <code>SpeechRecognition</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>SpeechRecognition</code> は、親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。</em></p>

<dl>
	<dt>{{domxref("SpeechRecognition.grammars")}}</dt>
	<dd>現在の <code>SpeechRecognition</code> により理解される文法を表す、{{domxref("SpeechGrammar")}} オブジェクトのコレクションを返して設定します。</dd>
	<dt>{{domxref("SpeechRecognition.lang")}}</dt>
	<dd>現在の <code>SpeechRecognition</code> の言語を返して設定します。指定されない場合、これはデフォルトで HTML {{htmlattrxref("lang","html")}} 属性の値になります。どちらも設定されていない場合、ユーザーエージェントの言語設定が使用されます。</dd>
	<dt>{{domxref("SpeechRecognition.continuous")}}</dt>
	<dd>各認識の継続的な結果を返すか、単一の認識結果だけを返すかを制御します。デフォルトは単一 (<code>false</code>) です。</dd>
	<dt>{{domxref("SpeechRecognition.interimResults")}}</dt>
	<dd>暫定的な結果を返すか (<code>true</code>)、そうでないか (<code>false</code>) を制御します。暫定的な結果は、最終的な結果ではありません (つまり、{{domxref("SpeechRecognitionResult.isFinal")}} プロパティの値は <code>false</code>)。</dd>
	<dt>{{domxref("SpeechRecognition.maxAlternatives")}}</dt>
	<dd>結果ごとに提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。デフォルト値は 1 です。</dd>
	<dt>{{domxref("SpeechRecognition.serviceURI")}}</dt>
	<dd>実際の認識を扱うための現在の <code>SpeechRecognition</code> に使用される音声認識サービスの場所を指定します。デフォルトはユーザーエージェントのスピーチサービスです。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<dl>
	<dt>{{domxref("SpeechRecognition.onaudiostart")}}</dt>
	<dd>ユーザーエージェントが音声の捕捉を開始した時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onaudioend")}}</dt>
	<dd>ユーザーエージェントが音声の捕捉を終了した時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onend")}}</dt>
	<dd>音声認識サービスとの接続が切れた時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onerror")}}</dt>
	<dd>音声認識でエラーが起こった時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onnomatch")}}</dt>
	<dd>音声認識サービスが意味を認識できない最終結果を返した時に発火します。これは、ある程度の認識はされているが、信頼できるしきい値 ({{domxref("SpeechRecognitionAlternative.confidence","confidence")}}) に達していないことを意味します。</dd>
	<dt>{{domxref("SpeechRecognition.onresult")}}</dt>
	<dd>音声認識サービスが結果を返した時に発火します。単語またはフレーズの認識結果が有意であり、アプリと通信してその結果が渡されます。</dd>
	<dt>{{domxref("SpeechRecognition.onsoundstart")}}</dt>
	<dd>何らかの音が鳴った時 (認識可能な音声またはそうでない音が検知された時) に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onsoundend")}}</dt>
	<dd>何らかの音が鳴り止んだ時  (認識可能な音声またはそうでない音が止んだことが検知された時) に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onspeechstart")}}</dt>
	<dd>音声認識サービスにより音声として認識された音が検出された時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onspeechend")}}</dt>
	<dd>音声認識サービスにより認識された音声の停止が検出された時に発火します。</dd>
	<dt>{{domxref("SpeechRecognition.onstart")}}</dt>
	<dd>音声認識サービスが、現在の <code>SpeechRecognition</code> に関連付けられた文法の認識が意図された入力音声のリスニングを開始した時に発火します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>SpeechRecognition</code> は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承します。</em></p>

<dl>
	<dt>{{domxref("SpeechRecognition.abort()")}}</dt>
	<dd>音声認識サービスによる入力音声のリスニングを停止し、{{domxref("SpeechRecognitionResult")}} を返そうとしないようにします。</dd>
	<dt>{{domxref("SpeechRecognition.start()")}}</dt>
	<dd>音声認識サービスによる入力音声のリスニングを開始し、現在の <code>SpeechRecognition</code> に関連付けられた文法の認識を行います。</dd>
	<dt>{{domxref("SpeechRecognition.stop()")}}</dt>
	<dd>音声認識サービスによる入力音声のリスニングを停止し、その時点までに補足した音声を使用して {{domxref("SpeechRecognitionResult")}} を返そうとします。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>私たちのシンプルな <a href="https://github.com/mdn/web-speech-api/tree/master/speech-color-changer">Speech color changer</a> の例では、{{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい <code>SpeechRecognition</code> オブジェクトのインスタンスを生成し、新しい {{domxref("SpeechGrammarList")}} を作成、それを  {{domxref("SpeechRecognition.grammars")}} プロパティを使用して <code>SpeechRecognition</code> インスタンスにより認識される文法に設定します。</p>

<p>他の値を定義した後、私たちは、それを設定して、クリックイベントの発生時 ({{domxref("SpeechRecognition.start()")}} 参照) に認識サービスを開始します。音声の認識に成功すると、{{domxref("SpeechRecognition.onresult")}} ハンドラーが発火し、イベントオブジェクトから発話された色を展開、そしてそれを {{htmlelement("html")}} 要素の背景色に設定します。</p>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
	<tbody>
		<tr>
			<th scope="col">仕様書</th>
			<th scope="col">策定状況</th>
			<th scope="col">備考</th>
		</tr>
		<tr>
			<td>{{SpecName('Web Speech API', '#speechreco-section', 'SpeechRecognition')}}</td>
			<td>{{Spec2('Web Speech API')}}</td>
			<td> </td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.SpeechRecognition")}}</p>

<h3 id="Firefox_OS_permissions" name="Firefox_OS_permissions">Firefox OS の許可設定</h3>

<p>アプリ内で音声認識を使用するには、以下の許可設定を <a href="/ja/docs/Web/Apps/Build/Manifest">manifest</a> で指定する必要があります:</p>

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
