---
title: Window.speechSynthesis
slug: Web/API/Window/speechSynthesis
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesis
  - Window
translation_of: Web/API/Window/speechSynthesis
---
<p>{{APIRef()}}{{SeeCompatTable}}</p>

<p>Window オブジェクトの <code>speechSynthesis</code> 読み取り専用プロパティは、{{domxref("SpeechSynthesis")}} オブジェクトを返します。これは、<a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の音声合成機能を使用するためのエントリーポイントです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">var synth = window.speechSynthesis;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("SpeechSynthesis")}} オブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>私たちの基本的な <a href="https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis">音声合成のデモ</a> では、最初に <code>window.speechSynthesis</code> を使用して SpeechSynthesis コントローラーへの参照を取得します。いくつかの必要な変数を定義した後、{{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。</p>

<p><code>inputForm.onsubmit</code> ハンドラー内部では、<a href="/ja/docs/Web/API/Event/preventDefault">preventDefault()</a> でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声 (utterance) にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。</p>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');


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



<p>{{Compat("api.Window.speechSynthesis")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
