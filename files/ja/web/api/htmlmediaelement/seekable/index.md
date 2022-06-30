---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
tags:
  - API
  - Audio
  - Extensions
  - HTMLMediaElement
  - MSE
  - Media
  - Property
  - Reference
  - Video
  - seekable
  - source
translation_of: Web/API/HTMLMediaElement/seekable
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} の **`seekable`** 読み取り専用プロパティは、ユーザーがシークできる時間範囲があればそれを含む {{domxref('TimeRanges')}} オブジェクトを返します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var seekable = audioOrVideo.seekable;</pre>

<h3 id="Value" name="Value">値</h3>

{{domxref('TimeRanges')}} オブジェクト。

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">// 未定</pre>

 

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "the-video-element.html#dom-media-seekable", "HTMLMediaElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName('HTML5 W3C')}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#dom-media-seekable", "HTMLMediaElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions','#htmlmediaelement-extensions','HTMLMediaElement extensions, like for seekable')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>ソースが {{domxref("MediaSource")}} オブジェクトであるメディア要素のシーク可能な時間範囲を返すための新しいアルゴリズムを指定します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


{{Compat("api.HTMLMediaElement.seekable")}}
</div>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
 <li>[Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)</li>
</ul>
