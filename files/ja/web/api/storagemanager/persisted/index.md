---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
tags:
  - Method
  - Reference
  - Secure context
  - Storage API
  - persisted()
translation_of: Web/API/StorageManager/persisted
---
<p>{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">{{domxref("StorageManager")}} インターフェイスの <strong><code>persisted()</code></strong> メソッドは、サイトのストレージに対してボックスモードが永続的であれば <code>true</code> に解決される {{jsxref("Promise")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">navigator.storage.persisted().then(function(persistent) { ... })</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>{{jsxref('Boolean')}} に解決される {{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js"><code>if (navigator.storage &amp;&amp; navigator.storage.persist)
  navigator.storage.persisted().then(function(persistent) {
    if (persistent)
      console.log("明示的なユーザー操作以外では、ストレージは消去されません。");
    else
      console.log("ストレージは UA によってストレージの圧力により消去されるかもしれません。");
  });</code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Storage','#dom-storagemanager-persisted','persisted')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.StorageManager.persisted")}}</p>
