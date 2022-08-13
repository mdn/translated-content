---
title: 'SourceBufferList: indexed property getter'
slug: orphaned/Web/API/SourceBufferList/SourceBuffer
tags:
  - API
  - Audio
  - Experimental
  - Getter
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - SourceBufferList
  - Video
translation_of: Web/API/SourceBufferList/SourceBuffer
original_slug: Web/API/SourceBufferList/SourceBuffer
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBufferList")}} インターフェイスの <strong>indexed property getter</strong>（インデックス指定のプロパティゲッター）を使用すると、リスト内の <code>SourceBuffer</code> オブジェクトに配列演算子（つまり <code>[]</code>）でアクセスできます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>mySourceBuffer</em> = <em>sourceBufferList</em>[<em>index</em>];</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>index</dt>
 <dd>返す {{domxref("SourceBuffer")}} オブジェクトのインデックス位置。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("SourceBuffer")}} オブジェクト。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>特定の例外はスローされませんが、指定されたインデックスが {{domxref("SourceBufferList.length")}} 以上の場合、<code>undefined</code> を返します。</p>

<h2 id="Example" name="Example">例</h2>

<p>未定</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebufferlist-(unsigned_long)', 'SourceBuffer() getter')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBufferList.SourceBuffer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBuffer")}}</li>
</ul>
