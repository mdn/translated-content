---
title: WeakRef() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
tags:
  - Constructor
  - JavaScript
  - Reference
  - WeakRef
  - コンストラクター
translation_of: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
---
<div>{{JSRef}}</div>

<p><strong><code>WeakRef</code></strong> コンストラクターは、指定された対象オブジェクトを参照する {{jsxref("WeakRef")}} オブジェクトを生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">new WeakRef(<var>targetObject</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>targetObject</var></code></dt>
 <dd>WeakRef が参照する対象オブジェクト (<em>referent</em> とも呼ばれます)。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="Creating_a_new_WeakRef_object" name="Creating_a_new_WeakRef_object">新しい WeakRef オブジェクトの生成</h3>

<p>完全な例は中心となる <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#Examples"><code>WeakRef</code></a> ページを参照してください。</p>

<pre class="brush: js notranslate">class Counter {
  constructor(element) {
    // DOM 要素への弱い参照を覚える
    this.ref = new WeakRef(element);
    this.start();
  }
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WeakRefs', '#sec-weak-ref-constructor', 'WeakRef constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.WeakRef.WeakRef")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("WeakRef")}}</li>
</ul>
