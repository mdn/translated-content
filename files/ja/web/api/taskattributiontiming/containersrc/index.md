---
title: TaskAttributionTiming.containerSrc
slug: Web/API/TaskAttributionTiming/containerSrc
tags:
  - API
  - Long Tasks API
  - Performance
  - Property
  - Reference
  - TaskAttributionTiming
translation_of: Web/API/TaskAttributionTiming/containerSrc
---
<p>{{SeeCompatTable}}{{APIRef("Long Tasks")}}</p>

<p>{{domxref("TaskAttributionTiming")}} インターフェイスの <strong><code>containerSrc</code></strong> 読み取り専用プロパティは、コンテナの <code>src</code> 属性を返します。 コンテナは、全体として長いタスクに関係している iframe、embed、object などです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>containerSrc</em> = TaskAttributionTiming.containerSrc;</pre>

<h3 id="Value" name="Value">値</h3>

<p>コンテナの <code>src</code> 属性を含む {{domxref("DOMString")}}。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Long Tasks','#dom-taskattributiontiming-containersrc','containerSrc')}}</td>
   <td>{{Spec2('Long Tasks')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.TaskAttributionTiming.containerSrc")}}</p>
</div>
