---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - TypedArray
  - TypedArrays
  - from
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/from
---
<div>{{JSRef}}</div>

<p><strong><code><var>TypedArray</var>.from()</code></strong> メソッドは、配列風オブジェクトや反復可能オブジェクトから新しい<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列</a>を生成します。このメソッドは {{jsxref("Array.from()")}} とほぼ同じです。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-from.html","shorter")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>TypedArray</var>.from(<var>source</var>[, <var>mapFn</var>[, <var>thisArg</var>]])
</pre>

<p>ここで <code><var>TypedArray</var></code> は次のいずれかです。</p>

<div class="threecolumns">
<ul>
 <li>{{jsxref("Int8Array")}}</li>
 <li>{{jsxref("Uint8Array")}}</li>
 <li>{{jsxref("Uint8ClampedArray")}}</li>
 <li>{{jsxref("Int16Array")}}</li>
 <li>{{jsxref("Uint16Array")}}</li>
 <li>{{jsxref("Int32Array")}}</li>
 <li>{{jsxref("Uint32Array")}}</li>
 <li>{{jsxref("Float32Array")}}</li>
 <li>{{jsxref("Float64Array")}}</li>
 <li>{{jsxref("BigInt64Array")}}</li>
 <li>{{jsxref("BigUint64Array")}}</li>
</ul>
</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>source</var></code></dt>
 <dd>型付き配列に変換する配列風オブジェクトか反復可能オブジェクト</dd>
 <dt><code><var>mapFn</var></code> {{optional_inline}}</dt>
 <dd>型付き配列のすべての要素に適用される map 関数。</dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>mapFn</var></code> を実行するときに <code>this</code> として使う値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{jsxref("TypedArray")}} インスタンス。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><var>TypedArray</var>.from()</code> によって下記から型付き配列を生成できます:</p>

<ul>
 <li>配列風オブジェクト (<code>length</code> プロパティと、番号の振られた要素をもつオブジェクト)</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/iterable">反復可能オブジェクト</a> ({{jsxref("Map")}} や {{jsxref("Set")}} のように要素が取得できるオブジェクト)</li>
</ul>

<p><code><var>TypedArray</var>.from()</code> は省略可能な引数 <code><var>mapFn</var></code> を持ち、これは生成中の型付き配列 (またはサブクラスのオブジェクト) のそれぞれの要素に対して {{jsxref("Array.prototype.map", "map()")}} 関数を実行することができます。すなわち、以下のものと同等です。</p>

<ul>
 <li><code><var>TypedArray</var>.from(<var>obj</var>, <var>mapFn</var>, <var>thisArg</var>)</code></li>
 <li><code><var>TypedArray</var>.from(Array.prototype.map.call(<var>obj</var>, <var>mapFn</var>, <var>thisArg</var>))</code>.</li>
</ul>

<p><code>from()</code> メソッドの <code>length</code> プロパティは <code>1</code> です。</p>

<h3 id="Differences_from_Array.from" name="Differences_from_Array.from">Array.from() との違い</h3>

<p>{{jsxref("Array.from()")}} と <code><var>TypedArray</var>.from()</code> の間には、いくつかの微妙な違いがあります。</p>

<ul>
 <li><code><var>TypedArray</var>.from()</code> に渡された <code><var>thisArg</var></code> の値がコンストラクターではなかった場合、 <code><var>TypedArray</var>.from()</code> で {{jsxref("TypeError")}} が発生します。これは <code>Array.from()</code> が既定で新しい {{jsxref("Array")}} を生成するためです。</li>
 <li><code><var>TypedArray</var>.from()</code> は <code>[[Put]]</code> を使用します。 <code>Array.from()</code> は <code>[[DefineProperty]]</code> を使用します。 従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}} ではなく {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} が呼び出されます。</li>
 <li><code><var>source</var></code> 引数がイテレーターであった場合、 <code><var>TypedArray</var>.from()</code> は最初にイテレーターからすべての値を集め、その数の大きさを持つ <code><var>thisArg</var></code> のインスタンスを生成し、そのインスタンスに値を設定します。 <code>Array.from()</code> はイテレーターから取得して各値を設定し、最後に <code>length</code> を設定します。</li>
 <li><code>Array.from()</code> がイテレーターではない配列風オブジェクトを受け取ったときは、穴をそのまま残します。 <code><var>TypedArray</var>.from()</code> は必ず<ruby>密配列<rp> (</rp><rt>dense array</rt><rp>) </rp></ruby>を生成します。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="From_an_iterable_object_Set" name="From_an_iterable_object_Set">反復可能オブジェクトから (Set)</h3>

<pre class="brush: js notranslate">const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
</pre>

<h3 id="From_a_string" name="From_a_string">文字列から</h3>

<pre class="notranslate">Int16Array.from('123');
// Int16Array [ 1, 2, 3 ]
</pre>

<h3 id="Use_with_arrow_function_and_map" name="Use_with_arrow_function_and_map">アロー関数と map の使用</h3>

<p>アロー関数をマップ関数として使用して要素を操作します。</p>

<pre class="notranslate">Float32Array.from([1, 2, 3], x =&gt; x + x);
// Float32Array [ 2, 4, 6 ]
</pre>

<h3 id="Generate_a_sequence_of_numbers" name="Generate_a_sequence_of_numbers">数列を生成する</h3>

<pre class="notranslate">Uint8Array.from({length: 5}, (v, k) =&gt; k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>JavaScript エンジンの実装がこのメソッドにネイティブに対応していない場合、回避策として、以下のコードをスクリプトの先頭に挿入することで、 <code>from()</code> の機能の大部分が使えるようになります。</p>

<pre class="brush: js notranslate">if (!Int8Array.__proto__.from) {
    (function () {
        Int8Array.__proto__.from = function (obj, func, thisObj) {

            var typedArrayClass = Int8Array.__proto__;
            if(typeof this !== 'function') {
                throw new TypeError('# is not a constructor');
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError('this is not a typed array.');
            }

            func = func || function (elem) {
                    return elem;
                };

            if (typeof func !== 'function') {
                throw new TypeError('specified argument is not a function');
            }

            obj = Object(obj);
            if (!obj['length']) {
                return new this(0);
            }
            var copy_data = [];
            for(var i = 0; i &lt; obj.length; i++) {
                copy_data.push(obj[i]);
            }

            copy_data = copy_data.map(func, thisObj);

            var typed_array = new this(copy_data.length);
            for(var i = 0; i &lt; typed_array.length; i++) {
                typed_array[i] = copy_data[i];
            }
            return typed_array;
        }
    })();
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.from', '%TypedArray%.from')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.TypedArray.from")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.of()")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
</ul>
