---
title: TimeRanges
slug: Web/API/TimeRanges
tags:
  - API
  - HTML DOM
  - Interface
  - Media
  - NeedsExample
  - Reference
  - TopicStub
translation_of: Web/API/TimeRanges
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><strong><code>TimeRanges</code></strong> インターフェイスは、主に {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素で使用するためにメディアをロードするときにメディアのどの部分がバッファリングされたかを追跡する目的で、一連の時間範囲を表すために使用します。</span></p>

<p><code>TimeRanges</code> オブジェクトには、1つ以上の時間範囲が含まれ、それぞれが開始時間と終了時間のオフセットで指定されます。 各時間範囲を参照するには、<code>start()</code> メソッドおよび <code>end()</code> メソッドを使用して、取得する時間範囲のインデックス番号を渡します。</p>

<p>「<a href="https://www.w3.org/TR/html52/semantics-embedded-content.html#normalized-timeranges-object">正規化された TimeRanges オブジェクト</a>（英語）」という用語は、そのようなオブジェクトの範囲が順序付けられ、重なり合わず、空ではなく、触れていないことを示します（隣接する範囲は1つの大きな範囲に折り畳まれます）。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("TimeRanges.length")}} {{ReadOnlyInline}}</dt>
 <dd> 時間範囲オブジェクトによって表される時間範囲の数を <code>unsigned long</code> 型で返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("TimeRanges.start()")}}</dt>
 <dd>指定されたインデックスを持つ範囲の開始時間を返します。</dd>
 <dt>{{domxref("TimeRanges.end()")}}</dt>
 <dd>指定された範囲の終了時間を返します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "#time-ranges", "TimeRanges")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.TimeRanges")}}</p>
