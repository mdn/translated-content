---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
tags:
  - API
  - Experimental
  - Interface
  - Long Tasks API
  - Performance
  - TaskAttributionTiming
translation_of: Web/API/TaskAttributionTiming
---
<p>{{SeeCompatTable}}{{APIRef("Long Tasks")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Long_Tasks_API">Long Tasks API</a> の <strong><code>TaskAttributionTiming</code></strong> インターフェイスは、長いタスクに関連する作業とそれに関連するフレームコンテキストに関する情報を返します。 コンテナとも呼ばれるフレームコンテキストは、全体として長いタスクに関係している iframe、embed、object です。</span></p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref('TaskAttributionTiming.containerType')}} {{readonlyinline}}</dt>
 <dd>フレームコンテナのタイプ（<code>iframe</code>、<code>embed</code>、<code>object</code> のいずれか）を返します。</dd>
 <dt>{{domxref('TaskAttributionTiming.containerSrc')}} {{readonlyinline}}</dt>
 <dd>コンテナの <code>src</code> 属性を返します。</dd>
 <dt>{{domxref('TaskAttributionTiming.containerId')}} {{readonlyinline}}</dt>
 <dd>コンテナの <code>id</code> 属性を返します。</dd>
 <dt>{{domxref('TaskAttributionTiming.containerName')}} {{readonlyinline}}</dt>
 <dd>コンテナの <code>name</code> 属性を返します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Long Tasks','#sec-TaskAttributionTiming','TaskAttributionTiming')}}</td>
   <td>{{Spec2('Long Tasks')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.TaskAttributionTiming")}}</p>
</div>
