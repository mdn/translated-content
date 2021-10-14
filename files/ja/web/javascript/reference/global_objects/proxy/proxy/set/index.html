---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---
<div>{{JSRef}}</div>

<p><strong><code>handler.set()</code></strong> はプロパティの値を設定することに対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  set: function(<var>target</var>, <var>property</var>, <var>value</var>, <var>receiver</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>set()</code> メソッドに渡されます。<code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
 <dt><code><var>property</var></code></dt>
 <dd>プロパティを設定する名前または {{jsxref("Symbol")}} です。</dd>
 <dt><code><var>value</var></code></dt>
 <dd>設定するプロパティの新しい値です。</dd>
 <dt><code><var>receiver</var></code></dt>
 <dd>
 <p>割り当てがもともと行われていたオブジェクトです。これは通常、プロキシそのものです。しかし、 <code>set()</code> ハンドラーは内部的にプロトタイプチェーンや様々な他の方法経由で呼び出されます。</p>

 <div class="note">
 <p><strong>例:</strong> スクリプト上に <code><var>obj</var>.name = "jen"</code> があり、<code><var>obj</var></code> はプロキシではなく、独自の <code>.name</code> プロパティを持っていません。しかし、プロトタイプチェーンでプロキシを持っています。その場合、そのプロキシの <code>set()</code> ハンドラが呼ばれて、 <code>obj</code> は receiver として渡されます。</p>
 </div>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>set()</code> メソッドは真偽値を返します。</p>

<ul>
 <li><code>true</code> を返すと割り当てが成功したことを示します。</li>
 <li><code>set()</code> メソッドの返値が <code>false</code> で、厳格モードで割り当てが起こった場合、 {{jsxref("TypeError")}} が発生します。</li>
</ul>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.set</strong></code> メソッドはプロパティの値を設定することに対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>プロパティの割り当て: <code><var>proxy</var>[<var>foo</var>] = <var>bar</var></code> や <code><var>proxy</var>.<var>foo</var> = <var>bar</var></code></li>
 <li>継承したプロパティの割り当て: <code>Object.create(<var>proxy</var>)[<var>foo</var>] = <var>bar</var></code></li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li>対応するターゲットオブジェクトのプロパティが書き込み不可かつ設定不可のデータプロパティの場合、プロパティの値と異なる値に変更することはできません。</li>
 <li>対応するターゲットオブジェクトのプロパティが <code>[[Set]]</code> 属性として <code>undefined</code> を持つ設定不可のアクセスプロパティの場合、プロパティの値を設定することはできません。</li>
 <li>厳格モードでは、 <code>set</code> ハンドラーから <code>false</code> を返す場合、 {{jsxref("TypeError")}} 例外をスローします。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trap_setting_of_a_property_value" name="Trap_setting_of_a_property_value">プロパティ値の設定のトラップ</h3>

<p>次のコードではプロパティの値の設定をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    target[prop] = value;
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  }
})

console.log('a' in p);  // false

p.a = 10;               // "property set: a = 10"
console.log('a' in p);  // true
console.log(p.a);       // 10
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.set")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>
