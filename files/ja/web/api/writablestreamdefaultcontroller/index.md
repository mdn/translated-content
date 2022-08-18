---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
tags:
  - API
  - Experimental
  - Fetch
  - Interface
  - Reference
  - Streams
  - WritableStreamDefaultController
translation_of: Web/API/WritableStreamDefaultController
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Streams_API">Streams API</a> の <strong><code>WritableStreamDefaultController</code></strong> インターフェイスは、{{domxref("WritableStream")}} の状態を制御できるコントローラーを表します。 <code>WritableStream</code> を構築する場合、基になるシンクには、対応する <code>WritableStreamDefaultController</code> インスタンスが与えられて操作します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dd>なし。 <code>WritableStreamDefaultController</code> インスタンスは、<code>WritableStream</code> の構築中に自動的に作成されます。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dd>なし。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("WritableStreamDefaultController.error()")}}</dt>
 <dd>関連するストリームとの今後のやり取りでエラーが発生します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">const writableStream = new WritableStream({
  start(controller) {
    // コントローラーで何かをする

    // 必要に応じてストリームをエラーにする
    controller.error('My stream is broken');
  },
  write(chunk, controller) {
    ...
  },
  close(controller) {
    ...
  },
  abort(err) {
    ...
  }
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams','#ws-default-controller-class','WritableStreamDefaultController')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.WritableStreamDefaultController")}}</p>
</div>
