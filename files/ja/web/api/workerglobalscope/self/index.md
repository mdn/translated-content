---
title: WorkerGlobalScope.self
slug: Web/API/WorkerGlobalScope/self
tags:
  - API
  - Property
  - Reference
  - Web Worker
  - WorkerGlobalScope
  - self
translation_of: Web/API/WorkerGlobalScope/self
---
<div>{{APIRef("Web Workers API")}}</div>

<p>{{domxref("WorkerGlobalScope")}} インターフェースの <code><strong>self</strong></code> 読み取り専用プロパティは、<code>WorkerGlobalScope</code> 自体への参照を返します。ほとんどの場合、これは {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}}、{{domxref("ServiceWorkerGlobalScope")}} などの特定のスコープです。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">var selfRef = self;</pre>

<h3 id="値">値</h3>

<p>グローバルスコープオブジェクト (上に示したように、扱っている worker の種類によって異なる)。</p>

<h2 id="例">例</h2>

<p>以下を呼び出した場合、</p>

<pre class="brush: js">console.log(self);</pre>

<p>worker 内で、コンソールに書き込まれたワーカーオブジェクトと同じタイプのワーカーグローバルスコープが取得されます — ある時は次のようになります:</p>

<pre class="brush: js">DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      &lt;function scope&gt;
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
<em>// etc. etc.</em>
</pre>

<p>これは、そのワーカースコープで利用可能なオブジェクトの完全なリストを提供するため、ワーカーが何かを利用できるかを確認したい場合には、非常に便利なテストです。リストを<a href="/ja/docs/Web/API/Worker/Functions_and_classes_available_to_workers">Web Workers が使用できる関数とクラス</a>でもメンテナンスしています。</p>

<div class="note">
<p><strong>ノート</strong>: Firefox には <code>console.log</code> を shared/service worker 内で使用したときのバグがあり ({{Bug("1058644")}} を見てください)、おかしな結果を返します。これはすぐに修正されるはずです。</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-workerglobalscope-self', 'self')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("Web Workers")}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('Web Workers', '#dom-workerglobalscope-self', 'self')}}</td>
   <td>{{Spec2('Web Workers')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.WorkerGlobalScope.self")}}</p>

<h2 id="関連項目">関連項目</h2>

<p>{{domxref("WorkerGlobalScope")}}</p>
