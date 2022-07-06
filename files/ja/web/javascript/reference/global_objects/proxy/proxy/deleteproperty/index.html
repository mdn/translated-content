---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
---
<div>{{JSRef}}</div>

<p><strong><code>handler.deleteProperty()</code></strong> メソッドは、 {{jsxref("Operators/delete", "delete")}} 演算子のトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const p = new Proxy(<var>target</var>, {
  deleteProperty: function(<var>target</var>, <var>property</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数が <code>deleteProperty</code> メソッドに渡されます。 <code>this</code> はハンドラにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクト</dd>
 <dt><code><var>property</var></code></dt>
 <dd>削除するプロパティの名前</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>deleteProperty</code> メソッドはプロパティが正しく削除されたかどうか示す {{jsxref("Boolean")}} 値を返さなければなりません。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.deleteProperty()</strong></code> メソッドは{{jsxref("Operators/delete", "delete")}}操作に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>プロパティの削除: <code>delete proxy[foo]</code> と <code>delete proxy.foo</code></li>
 <li>{{jsxref("Reflect.deleteProperty()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li>ターゲットオブジェクトの非設定独自プロパティとして存在する場合、プロパティは削除されません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trap_for_getting_a_property_value" name="Trap_for_getting_a_property_value">プロパティ値の取得のトラップ</h3>

<p>次のコードは {{jsxref("Operators/delete", "delete")}} 操作をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    if (prop in target){
      delete target[prop]
      console.log('property removed: ' + prop)
      return true
    }
    else {
      console.log('property not found: ' + prop)
      return false
    }
  }
})

let result

p.a = 10
console.log('a' in p)  // true

result = delete p.a    // "property removed: a"
console.log(result)    // true
console.log('a' in p)  // false

result = delete p.a    // "property not found: a"
console.log(result)    // false
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-delete-p', '[[Delete]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.deleteProperty")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Operators/delete", "delete")}} operator</li>
 <li>{{jsxref("Reflect.deleteProperty()")}}</li>
</ul>
