---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/keys
---
<div>{{JSRef}}</div>

<p><code><strong>Object.keys()</strong></code> メソッドは、指定されたオブジェクトが持つプロパティの <strong>名前</strong>の配列を、通常のループで取得するのと同じ順序で返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-keys.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.keys(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>自身の列挙可能なプロパティが返されるオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたオブジェクトのすべての列挙可能なプロパティを表す文字列の配列。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Object.keys()</code> は、<code>object</code> で直接発見された列挙可能なプロパティに対応する文字列を要素とする配列を返します。プロパティの順序は、オブジェクトのプロパティをループにより手動で取得した場合と同じです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Object.keys" name="Using_Object.keys">Object.keys の使用</h3>

<pre class="brush: js notranslate">// 単純な配列
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// オブジェクトのような配列
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// キーの順序がランダムなオブジェクトのような配列
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo は列挙可能ではないプロパティ
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
</pre>

<p>列挙可能ではないものを含むすべてのプロパティを取得したい場合、{{jsxref("Object.getOwnPropertyNames()")}} をご覧ください。</p>

<h3 id="Non-object_coercion" name="Non-object_coercion">オブジェクト以外の型変換</h3>

<p>ES5 では、このメソッドへの引数がオブジェクトではない (プリミティブである) 場合、 {{jsxref("TypeError")}} が発生します。</p>

<p>ES2015 以降では、オブジェクトでない引数はオブジェクトへ変換されるようになりました。</p>

<pre class="brush: js notranslate">// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

Object.keys('foo');
// ["0", "1", "2"]                   (ES2015 code)
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Object.keys</code> にネイティブに対応していない環境向けに互換性を確保するには、以下のコード部品をコピーしてください。</p>

<pre class="brush: js notranslate">// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' &amp;&amp; (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i &lt; dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
</pre>

<p>上記のコードは IE7 において (もしかすると IE8 でも)、他のウィンドウから渡されたオブジェクトの場合、列挙不可能な key を含むことに注意してください。</p>

<p>より簡単なブラウザーのポリフィルについては、<a class="external" href="http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html">Javascript - Object.keys Browser Compatibility</a> をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.keys', 'Object.keys')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.keys")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">列挙可能性とプロパティの所有権</a></li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.values()")}}</li>
 <li>{{jsxref("Object.entries()")}}</li>
</ul>
