---
title: AggregateError() constructor
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
tags:
  - Constructor
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
---
<div>{{JSRef}}</div>

<p><code><strong>AggregateError()</strong></code> コンストラクタは、単一のエラーにラップする必要があるいくつかのエラーに対してエラーを作成します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">new AggregateError(errors[, message])</pre>

<h3 id="値">値</h3>

<dl>
 <dt><code>errors</code></dt>
 <dd>エラーの反復可能であり、実際には {{JSxRef("Error")}} インスタンスではない場合があります。</dd>
 <dt><code>message</code>{{Optional_Inline}}</dt>
 <dd>集計エラーのオプションのヒューマンリーダブルの説明。</dd>
</dl>

<h2 id="例">例</h2>

<h3 id="AggregateError_の作成"><code>AggregateError</code> の作成</h3>

<pre class="brush: js; notranslate">try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Promise.any', '#sec-aggregate-error-constructor', 'AggregateError()')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.AggregateError.AggregateError")}}</p>
</div>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{jsxref("Promise.any")}}</li>
</ul>
