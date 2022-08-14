---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - speech
  - synthesis
translation_of: Web/API/SpeechSynthesis
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の <strong><code>SpeechSynthesis</code></strong> インターフェイスは、speech サービスのための制御インターフェイスです。これは、端末で利用可能な合成音声についての情報を取得するために使用されます。読み上げの開始および一時停止、他のコマンドで制御します。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>SpeechSynthesis</code> は、その親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。</em></p>

<dl>
 <dt>{{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}</dt>
 <dd>{{domxref("Boolean", "真偽値")}}。<code>SpeechSynthesis</code> オブジェクトが一時停止状態の場合に <code>true</code> を返します。</dd>
 <dt>{{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}</dt>
 <dd>{{domxref("Boolean", "真偽値")}}。発声 (utterance) キューにまだ発話されていないものがある場合に <code>true</code> を返します。</dd>
 <dt>{{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}</dt>
 <dd>{{domxref("Boolean", "真偽値")}}。<code>SpeechSynthesis</code> が一時停止状態であっても、発声が現在発話処理中の場合に <code>true</code> を返します。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<dl>
 <dt>{{domxref("SpeechSynthesis.onvoiceschanged")}}</dt>
 <dd>{{domxref("SpeechSynthesis.getVoices()")}} メソッドにより返される {{domxref("SpeechSynthesisVoice")}} オブジェクトのリストが変更された時に発火します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>SpeechSynthesis</code> は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承します。</em></p>

<dl>
 <dt>{{domxref("SpeechSynthesis.cancel()")}}</dt>
 <dd>すべての発声を発声キューから削除します。</dd>
 <dt>{{domxref("SpeechSynthesis.getVoices()")}}</dt>
 <dd>現在の端末上のすべての利用可能な音声を表す、{{domxref("SpeechSynthesisVoice")}} オブジェクトのリストを返します。</dd>
 <dt>{{domxref("SpeechSynthesis.pause()")}}</dt>
 <dd><code>SpeechSynthesis</code> オブジェクトを一時停止状態にします。</dd>
 <dt>{{domxref("SpeechSynthesis.resume()")}}</dt>
 <dd><code>SpeechSynthesis</code> オブジェクトを一時停止でない状態にします。つまり、一時停止状態であった場合に再開します。</dd>
 <dt>{{domxref("SpeechSynthesis.speak()")}}</dt>
 <dd>{{domxref("SpeechSynthesisUtterance", "utterance")}} を発声キューに追加します。これは、それ以前にキューに追加された他の発声が発話された後に発話されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>私たちの基本的な <a href="https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis">音声合成のデモ</a> では、最初に <code>window.speechSynthesis</code> を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。</p>

<p><code>inputForm.onsubmit</code> ハンドラー内部では、<a href="/ja/docs/Web/API/Event/preventDefault">preventDefault()</a> でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。</p>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i &lt; voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
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
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
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
   <td>{{SpecName('Web Speech API', '#tts-section', 'SpeechSynthesis')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.SpeechSynthesis")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
