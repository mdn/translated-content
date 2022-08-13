---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - speech
  - synthesis
translation_of: Web/API/SpeechSynthesisUtterance
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の <strong><code>SpeechSynthesisUtterance</code></strong> インターフェイスは、発話リクエストを表します。これには、speech サービスが読み上げるコンテンツと、その読み上げ方についての情報 (言語、音の高低、音量) が含まれます。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}</dt>
 <dd>新しい <code>SpeechSynthesisUtterance</code> オブジェクトのインスタンスを返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>SpeechSynthesisUtterance</code> は、その親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。</em></p>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.lang")}}</dt>
 <dd>utterance (発声) の言語を取得または設定します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.pitch")}}</dt>
 <dd>utterance が発話される際のピッチ (音の高低) を取得または設定します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.rate")}}</dt>
 <dd>utterance が発話される際の速度を取得または設定します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.text")}}</dt>
 <dd>utterance が発話される際の合成されるテキストを取得または設定します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.voice")}}</dt>
 <dd>utterance の発話に使用される音声を取得または設定します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.volume")}}</dt>
 <dd>utterance が発話される際の音量を取得または設定します。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.onboundary")}}</dt>
 <dd>発話された utterance が単語または文の境界に達した時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onend")}}</dt>
 <dd>utterance の発話が完了した時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onerror")}}</dt>
 <dd>utterance の正常な発話を妨げるエラーが発生した時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onmark")}}</dt>
 <dd>発話された utterance が SSML (音声合成マークアップ言語) の "mark" タグに達した時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onpause")}}</dt>
 <dd>utterance の発話が途中で一時停止された時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onresume")}}</dt>
 <dd>一時停止された utterance の発話が再開された時に発火します。</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onstart")}}</dt>
 <dd>utterance の発話が開始された時に発火します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>私たちの基本的な <a href="https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis">音声合成のデモ</a> では、最初に <code>window.speechSynthesis</code> を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。</p>

<p><code>inputForm.onsubmit</code> ハンドラー内部では、<a href="/ja/docs/Web/API/Event/preventDefault">preventDefault()</a> でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。</p>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

for(i = 0; i &lt; voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i &lt; voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
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
   <td>{{SpecName('Web Speech API', '#utterance-attributes', 'SpeechSynthesisUtterance')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.SpeechSynthesisUtterance")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
