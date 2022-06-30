---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Web
translation_of: Web/API/HTMLMediaElement/readyState
---
値{{APIRef("HTML DOM")}}

<span class="seoSummary">**`HTMLMediaElement.readyState`** プロパティは、メディアの準備状態を示します。</span>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var readyState = audioOrVideo.readyState;</pre>

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
   <td>`HAVE_NOTHING`</td>
   <td>0</td>
   <td>メディアリソースに関する情報はありません。</td>
  </tr>
  <tr>
   <td>`HAVE_METADATA`</td>
   <td>1</td>
   <td>メタデータ属性を初期化するのに十分なメディアリソースが取得されました。 シークならば例外を発生させません。</td>
  </tr>
  <tr>
   <td>`HAVE_CURRENT_DATA`</td>
   <td>2</td>
   <td>現在の再生位置にデータがありますが、実際には複数のフレームを再生するのに十分ではありません。</td>
  </tr>
  <tr>
   <td>`HAVE_FUTURE_DATA`</td>
   <td>3</td>
   <td>現在の再生位置と将来までの少なくともほんの少しの時間のデータが利用可能です（つまり、例えば、少なくとも2フレームの動画）。</td>
  </tr>
  <tr>
   <td>`HAVE_ENOUGH_DATA`</td>
   <td>4</td>
   <td>十分なデータが利用可能であり、ダウンロードレートが十分に高いため、メディアを中断することなく最後まで再生できます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

この例では、要素 `example` に読み込まれる音声データをリッスンします。 その後、少なくとも現在の再生位置が読み込まれているかどうかを確認します。 もしあれば、音声を再生します。

<pre class="brush: html">&lt;audio id="example" preload="auto"&gt;
 &lt;source src="sound.ogg" type="audio/ogg" /&gt;
&lt;/audio&gt;
</pre>

<pre class="brush: js">var obj = document.getElementById('example');

obj.addEventListener('loadeddata', function() {

  if(obj.readyState &gt;= 2) {
    obj.play();
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
   <td>{{SpecName('HTML WHATWG', "#dom-media-readystate", "HTMLMediaElement.readyState")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.readyState")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.readyState")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
</ul>
