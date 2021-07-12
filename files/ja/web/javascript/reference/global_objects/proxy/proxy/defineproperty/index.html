---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
---
<div>{{JSRef}}</div>

<p><strong><code>handler.defineProperty()</code></strong> は {{jsxref("Object.defineProperty()")}} に対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  defineProperty: function(<var>target</var>, <var>property</var>, <var>descriptor</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数が <code>defineProperty()</code> メソッドに渡されます。 <code>this</code> はハンドラにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
 <dt><code><var>property</var></code></dt>
 <dd>説明を受け取るプロパティの名前または {{jsxref("Symbol")}} です。</dd>
 <dt><code><var>descriptor</var></code></dt>
 <dd>定義や変更されるプロパティに対するディスクリプターです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>defineProperty()</code> メソッドはプロパティが正しく定義されたかどうかを表す {{jsxref("Boolean")}} を返す必要があります。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.defineProperty()</strong></code> メソッドは {{jsxref("Object.defineProperty()")}} に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li>ターゲットオブジェクトが拡張不可の場合、プロパティは追加できません。</li>
 <li>ターゲットオブジェクトの設定不可の独自のプロパティとして存在しない場合、プロパティは設定不可とみなされ、追加や変更ができません。</li>
 <li>ターゲットオブジェクトの対応する設定可能なプロパティが存在する場合、プロパティは設定不可にすることができません。</li>
 <li>対応するターゲットオブジェクトのプロパティが存在する場合、<code>Object.defineProperty(target, prop, descriptor)</code> は例外をスローしません。</li>
 <li>strict モードでは、<code>defineProperty</code> ハンドラから <code>false</code> が返ってきた場合、{{jsxref("TypeError")}} 例外をスローします。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trapping_of_defineProperty" name="Trapping_of_defineProperty">defineProperty のトラップ</h3>

<p>次のコードは {{jsxref("Object.defineProperty()")}} をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
</pre>

<p>{{jsxref("Object.defineProperty()")}} または {{jsxref("Reflect.defineProperty()")}} を呼び出した時、 <code>defineProperty()</code> トラップに渡されるディスクリプターには制約があります。下記のプロパティのみが使用可能で、標準ではないプロパティは無視されます。</p>

<ul>
 <li><code>enumerable</code></li>
 <li><code>configurable</code></li>
 <li><code>writable</code></li>
 <li><code>value</code></li>
 <li><code>get</code></li>
 <li><code>set</code></li>
</ul>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.defineProperty")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
