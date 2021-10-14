---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.unscopables</code></strong> ウェルノウンシンボルは、自身のプロパティ名と継承されたプロパティ名が、関連付けられたオブジェクトの <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> 環境バインディングから除外されているオブジェクトの値を指定するために使用されます。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

<h2 id="Description" name="Description">解説</h2>

<p>The <code>@@unscopables</code> シンボル (<code>Symbol.unscopables</code>) は、 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> 環境バインディングでプロパティ名が語彙的変数として公開されないようにするために、任意のオブジェクトに定義することができます。<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>を使用している場合、 <code>with</code> 文は使用できず、このシンボルも必要ないことに注意してください。</p>

<p><code>unscopables</code> オブジェクトでプロパティを <code>true</code> に設定すると、そのプロパティは<em>スコープ不能</em>になり、語彙的スコープ変数には表示されません。プロパティを <code>false</code> に設定すると、 <code>scopable</code> になり、語彙的スコープ変数に表示されます。</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Scoping_in_with_statements" name="Scoping_in_with_statements">with 文内のスコープ</h3>

<p>次のコードは、ES5 以下であれば正しく動作します。しかし、 ECMAScript 2015（ES6）以降では、{{jsxref("Array.prototype.keys()")}} メソッドが導入されました。これは、<code>with</code> 環境内で "keys" はメソッドであり変数ではないことを意味します。これが <code>unscopable</code> シンボルを導入すべき時です。ビルトインの <code>unscopables</code> 設定は、配列のメソッドのいくつかが <code>with</code> 環境のスコープに入らないようにするために、{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} として実装されています。</p>

<pre class="brush: js notranslate">var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
</pre>

<h3 id="Unscopables_in_objects" name="Unscopables_in_objects">オブジェクト内の unscopables</h3>

<p>自分のオブジェクトに <code>unscopables</code> を設定することもできます。</p>

<pre class="brush: js notranslate">var obj = {
  foo: 1,
  bar: 2
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
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
   <td>{{SpecName('ESDraft', '#sec-symbol.unscopables', 'Symbol.unscopables')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.unscopables")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/with">with</a></code> 文 (<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>では利用不可)</li>
</ul>
