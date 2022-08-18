---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/seal
---
<p>{{JSRef}}</p>

<p><code><strong>Object.seal()</strong></code> メソッドは、オブジェクトを封印して、新しいオブジェクトを追加することを抑制し、すべての既存のプロパティを設定変更不可にします。現存するプロパティの値は、書き込み可能である限り変更できます。</p>

<div>{{EmbedInteractiveExample("pages/js/object-seal.html")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.seal(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>封印するオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>封印されたオブジェクトです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>既定では、オブジェクトは{{jsxref("Object.isExtensible()", "拡張可能", "", 1)}} (新しいプロパティを追加できる状態) です。オブジェクトを封印することで、新しいオブジェクトの追加を抑制し、すべての既存のプロパティを設定変更を不可にします。これは、オブジェクトにあるプロパティ一式を固定かつ不変にする効果があります。プロパティを設定変更不可にすることで、データプロパティからアクセサプロパティへの変換やその逆を抑制しますが、データプロパティの値の変更は抑制しません。封印されたオブジェクトでプロパティの削除や追加、あるいはデータプロパティからアクセサプロパティへの変換およびその逆を試みると、暗黙的あるいは {{jsxref("TypeError")}} エラーを発生させて (もっとも一般的には {{jsxref("Strict_mode", "strict mode", "", 1)}} において、ただしこれに限定はされません) 失敗します。</p>

<p>プロトタイプチェインには手をつけず、そのままにします。ただし、 {{jsxref("Object.proto", "__proto__")}} プロパティは同様に封印されます。</p>

<h3 id="Comparison_to_Object.freeze" name="Comparison_to_Object.freeze">Object.freeze() との比較</h3>

<p>{{jsxref("Object.freeze()")}} で凍結されたオブジェクトに存在するプロパティは不変になります。 <code>Object.seal()</code> で封印されたオブジェクトに存在するプロパティを変更することができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Object.seal" name="Using_Object.seal">Object.seal の使用</h3>

<pre class="brush: js notranslate">var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新しいプロパティは追加でき、既存のプロパティは変更や削除ができます。
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// 封印されたオブジェクトで、プロパティの値の変更は依然としてできます。
obj.foo = 'quux';

// しかし、データプロパティからアクセサプロパティの変換やその逆はできません。
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // TypeError が発生

// プロパティの値の変更を除き、あらゆる変更が失敗します。
obj.quaxxor = 'the friendly duck';
// 暗黙的にプロパティは追加されません。
delete obj.foo;
// 暗黙的にプロパティは削除されません。

// また、 strict モードではこれらの試みに対して TypeErrors が発生します。
function fail() {
  'use strict';
  delete obj.foo; // TypeError が発生
  obj.sparky = 'arf'; // TypeError が発生
}
fail();

// Object.defineProperty を用いて追加しようとしてもエラーが発生します
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // TypeError が発生
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 既存のプロパティの値を変更
</pre>

<h3 id="Non-object_coercion" name="Non-object_coercion">非オブジェクトの強制</h3>

<p>ES5 では、このメソッドへの引数がオブジェクトではない場合 (プリミティブである場合)、 {{jsxref("TypeError")}} になります。 ES2015 では、オブジェクトではない引数は封印された通常のオブジェクトと同様に扱われ、単純にそれを返します。</p>

<pre class="brush: js notranslate">Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
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
   <td>{{SpecName('ESDraft', '#sec-object.seal', 'Object.seal')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.seal")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.isSealed()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
