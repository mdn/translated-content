---
title: HTMLMediaElement.networkState
slug: Web/API/HTMLMediaElement/networkState
tags:
  - API
  - HTML DOM
  - Property
  - Read-only
  - Web
translation_of: Web/API/HTMLMediaElement/networkState
---
{{APIRef("HTML DOM")}}

<span class="seoSummary">**`HTMLMediaElement.networkState`** プロパティは、ネットワークを介したメディアの現在の取得状況を示します。</span>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var networkState = audioOrVideo.networkState;</pre>

<h3 id="Value" name="Value">値</h3>

`unsigned short` 型。 可能な値は次のとおりです。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">定数</th>
   <th scope="col">値</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`NETWORK_EMPTY`</td>
   <td>0</td>
   <td>まだデータがありません。 また、`readyState` は `HAVE_NOTHING` です。</td>
  </tr>
  <tr>
   <td>`NETWORK_IDLE`</td>
   <td>1</td>
   <td>`HTMLMediaElement` はアクティブで、リソースを選択しましたが、ネットワークを使用していません。</td>
  </tr>
  <tr>
   <td>`NETWORK_LOADING`</td>
   <td>2</td>
   <td>ブラウザーは `HTMLMediaElement` のデータをダウンロードしています。</td>
  </tr>
  <tr>
   <td>`NETWORK_NO_SOURCE`</td>
   <td>3</td>
   <td>`HTMLMediaElement` の `src` が見つかりません。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

この例では、音声要素が再生を開始するのを待機してから、まだデータを読み込んでいるかどうかを確認します。

<pre class="brush: html">&lt;audio id="example" preload="auto"&gt;
 &lt;source src="sound.ogg" type="audio/ogg" /&gt;
&lt;/audio&gt;
</pre>

<pre class="brush: js">var obj = document.getElementById('example');

obj.addEventListener('playing', function() {

  if (obj.networkState === 2) {
    // 読み込み中...
  }

});
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-media-networkstate", "HTMLMediaElement.networkState")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.networkState")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.networkState")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
</ul>
