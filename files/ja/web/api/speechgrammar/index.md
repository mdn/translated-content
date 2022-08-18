---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechGrammar
  - Web Speech API
  - recognition
  - speech
translation_of: Web/API/SpeechGrammar
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> の <strong><code>SpeechGrammar</code></strong> インターフェイスは、認識サービスに認識させたい単語のセットまたは単語パターンを表します。</p>

<p>文法は、<a class="external external-icon" href="http://www.w3.org/TR/jsgf/">JSpeech Grammar Format</a> (<strong>JSGF</strong>) を使用して定義されています。他の形式も将来サポートされる可能性があります。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("SpeechGrammar.SpeechGrammar()")}}</dt>
 <dd><code>SpeechGrammar</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("SpeechGrammar.src")}}</dt>
 <dd><code>SpeechGrammar</code> オブジェクトのインスタンス内からの文法を含む文字列を設定して返します。</dd>
 <dt>{{domxref("SpeechGrammar.weight")}} {{optional_inline}}</dt>
 <dd><code>SpeechGrammar</code> オブジェクトの重みづけを設定して返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;


console.log(speechRecognitionList[0].src); // grammar 変数の内容と同じ値が返される
console.log(speechRecognitionList[0].weight); // 4 行目で設定された weight と同じ値の 1 が返される
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#speechreco-speechgrammar', 'SpeechGrammar')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.SpeechGrammar")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
