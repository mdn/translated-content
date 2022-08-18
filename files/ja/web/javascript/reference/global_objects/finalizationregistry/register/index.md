---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
---
<div>{{JSRef}}</div>

<p><code>register()</code> メソッドはオブジェクトを {{jsxref("FinalizationRegistry")}} インスタンスへ登録し、オブジェクトがガベージコレクションで回収された場合、レジストリのコールバックが呼び出されるようになります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>registry</var>.register(<var>target</var>, <var>heldValue</var>, [<var>unregisterToken</var>]);</code>
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>登録する対象オブジェクトです。</dd>
 <dt><code><var>heldValue</var></code></dt>
 <dd>このオブジェクトのためにファイナライザーへ渡す値です。これは <code><var>target</var></code> オブジェクトにすることはできません。</dd>
 <dt><code><var>unregisterToken</var></code> {{optional_inline}}</dt>
 <dd>のちに対象オブジェクトを登録解除するために <code>unregister</code> メソッドと共に使用するトークンです。提供された場合 (かつ <code>undefined</code> ではない場合)、これはオブジェクトである必要があります。提供されなかった場合は、対象を登録解除することはできません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h2 id="Notes" name="Notes">注</h2>

<p>重要な注意点については、 {{jsxref("FinalizationRegistry")}} ページの<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#Avoid_where_possible">可能な限り避ける</a>と<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#Notes_on_cleanup_callbacks">クリーンアップコールバックに関する注意事項</a>の部分を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_register" name="Using_register">register の使用</h3>

<p>次の例は <code><var>target</var></code> で参照される対象オブジェクトを保持値 <code>"some value"</code> で登録し、対象オブジェクト自身を登録解除トークンとして渡します。</p>

<pre class="brush: js notranslate">registry.register(target, "some value", target);
</pre>

<p>次の例は <code><var>target</var></code> で参照される対象オブジェクトを他のオブジェクトを保持値として登録し、登録解除トークンを渡していません (すなわち <code><var>target</var></code> は登録解除できません)。</p>

<pre class="brush: js notranslate">registry.register(target, {"useful": "info about target"});
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WeakRefs', '#sec-finalization-registry.prototype.register', 'FinalizationRegistry.prototype.register')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.FinalizationRegistry.register")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("FinalizationRegistry")}}</li>
</ul>
