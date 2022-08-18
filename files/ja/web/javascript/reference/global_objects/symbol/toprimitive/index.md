---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.toPrimitive</code></strong> はシンボルで、あるオブジェクトを対応するプリミティブ値に変換するために呼び出される関数値のプロパティを指定します。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>Symbol.toPrimitive</code> プロパティにより (関数値として使用して)、オブジェクトがプリミティブ値に変換することができるようになります。関数は、プリミティブ値の結果として好ましい型を指定する文字列引数の <code><var>hint</var></code> と一緒に呼び出されます。 <code><var>hint</var></code> 引数は、 "<code>number</code>", "<code>string</code>", "<code>default</code>" のいずれかになります。</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Modifying_primitive_values_converted_from_an_object" name="Modifying_primitive_values_converted_from_an_object">オブジェクトから変換されたプリミティブ値の修正</h3>

<p>次の例は <code>Symbol.toPrimitive</code> プロパティがオブジェクトから変換されたプリミティブ値を修正する方法を説明します。</p>

<pre class="brush: js notranslate">// Symbol.toPrimitive プロパティを持たないオブジェクト。
var obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ''); // "[object Object]"

// Symbol.toPrimitive プロパティを持つオブジェクト。
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  }
};
console.log(+obj2);     // 10        -- hint は "number"
console.log(`${obj2}`); // "hello"   -- hint は "string"
console.log(obj2 + ''); // "true"    -- hint は "default"
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
   <td>{{SpecName('ESDraft', '#sec-symbol.toprimitive', 'Symbol.toPrimitive')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.toPrimitive")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}</li>
 <li>{{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}</li>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
</ul>
