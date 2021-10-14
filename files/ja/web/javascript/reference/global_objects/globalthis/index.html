---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Property
  - Reference
  - global
  - globalThis
  - this
translation_of: Web/JavaScript/Reference/Global_Objects/globalThis
---
<div>{{jsSidebar("Objects")}}</div>

<p><span class="seoSummary"><code><strong>globalThis</strong></code> はグローバルプロパティで、グローバルオブジェクトと同等であるグローバルな <code>this</code> が格納されています。</span></p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>{{JS_Property_Attributes(1, 0, 1)}}</p>

<h2 id="Description" name="Description">解説</h2>

<p>従来、グローバルスコープにアクセスするには、JavaScript 環境ごとに異なる構文を必要としていました。ウェブ上では {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, {{domxref("Window.frames", "frames")}} を使うことができます。しかし <a href="/ja/docs/Web/API/Worker">Web Worker</a> は <code>self</code> のみを利用することができます。Node.js はこれらのいずれも利用できず、代わりに <code>global</code> を使用する必要があります。<br>
 <code>this</code> キーワードは、strict でないモードで実行されている関数の中で使用することもできますが、strict モードで実行されているモジュールや関数の中では <code>undefined</code> になります。<code>Function('return this')()</code> を使用することもできますが、{{Glossary("CSP")}} などによって {{jsxref("eval", "eval()")}} を無効にしている環境では、この方法でも {{jsxref("Function")}} の使用が抑制されます。</p>

<p><code>globalThis</code> プロパティは、環境を越えてグローバルな <code>this</code> 値 (すなわちグローバルオブジェクト自身) にアクセスするための標準的な方法を提供します。<code>window</code> や <code>self</code> などの同様のプロパティとは異なり、これはウィンドウのコンテキストでも非ウィンドウのコンテキストでも動作することが保証されています。この方法では、コードがどの環境で実行されているのかを知らなくても、一貫した方法でグローバルオブジェクトにアクセスすることができます。名前を覚えやすくするために、グローバルスコープでは <code>this</code> の値は <code>globalThis</code> であることを忘れないでください。</p>

<h3 id="HTML_and_the_WindowProxy" name="HTML_and_the_WindowProxy">HTML と WindowProxy</h3>

<p>多くのエンジンでは <code>globalThis</code> は実在のグローバルオブジェクトの参照になりますが、ウェブブラウザーにおいては、iframe およびウィンドウ間のセキュリティ上の配慮から、これは (直接アクセスできない) 実在のグローバルオブジェクトに関する {{jsxref("Proxy")}} になります。一般的な利用に関わることは稀ですが、認識しておくことは重要です。</p>

<h3 id="Naming" name="Naming">命名</h3>

<p><code>self</code> や <code>global</code> のような他の一般的な名前の選択肢は、既存のコードとの互換性を損なう可能性があるため、候補から除外されました。詳しくは <a href="https://github.com/tc39/proposal-global/blob/master/NAMING.md">language proposal's "naming" document</a> を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Search_for_the_global_across_environments" name="Search_for_the_global_across_environments">異なる環境間でグローバルの検索</h3>

<p><code>globalThis</code> 以前は、その環境のグローバルオブジェクトを取得する信頼性の高い方法は <code>Function('return this')()</code> だけでした。ただし、これは設定によっては <a href="/ja/docs/Web/HTTP/CSP">CSP</a> 違反が発生するため、<a href="https://github.com/paulmillr/es6-shim">es6-shim</a> では次のようなチェックを使用します。</p>

<pre class="brush: js notranslate">var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
</pre>

<p><code>globalThis</code> が利用可能になったため、異なる環境間でグローバルを追加で検索する必要がなくなりました。</p>

<pre class="brush: js notranslate">if (typeof globalThis.setTimeout !== 'function') {
  // no setTimeout in this environment!
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-globalthis", "globalThis")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.globalThis")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Operators/this", "this")}}</li>
</ul>
