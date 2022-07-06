---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/from
---
<div>{{JSRef}}</div>

<p><code><strong>Array.from()</strong></code> メソッドは、配列のようなオブジェクトや反復可能オブジェクトから、浅くコピーされた新しい <code>Array</code> インスタンスを生成します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-from.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Array.from(arrayLike[, mapFn[, thisArg]])
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>arrayLike</code></dt>
 <dd>配列に変換する配列のようなオブジェクトまたは反復可能オブジェクト</dd>
 <dt><code>mapFn</code> {{Optional_inline}}</dt>
 <dd>配列のすべての要素に対して呼び出される Map 関数。</dd>
 <dt><code>thisArg</code> {{Optional_inline}}</dt>
 <dd><code>mapFn</code> を実行する時に <code>this</code> として使用する値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{jsxref("Array")}} インスタンス。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Array.from()</code> は、以下のものから <code>Array</code> を生成します。</p>

<ul>
 <li>配列のようなオブジェクト (<code>length</code> プロパティおよびインデックス付けされた要素を持つオブジェクト) もしくは</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/iterable">反復可能オブジェクト</a> ({{jsxref("Map")}} や {{jsxref("Set")}} のような要素を取得するオブジェクト)</li>
</ul>

<p><code>Array.from()</code> は任意の引数 <code>mapFn</code> を持ちます。これは、作成した配列 (もしくは、サブクラスオブジェクト) のすべての要素に対して {{jsxref("Array.prototype.map", "map")}} 関数を実行できます。</p>

<p>より明確に言うと、中間配列を生成しないことを除いて、<code>Array.from(obj, mapFn, thisArg)</code> は <code>Array.from(obj).map(mapFn, thisArg)</code> と同じ結果です。中間配列は、適切な型に合うように丸められた値を持つ必要があるため、<a href="/ja/docs/Web/JavaScript/Typed_arrays">typed arrays</a> のような配列サブクラスにとっては特に重要です。</p>

<div class="note">これは、<a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a>のような特定の配列のサブクラスでは特に重要です。なぜなら、中間配列の値は適切な型に収まるように切り捨てられている必要があるからです。</div>

<p><code>from()</code> メソッドの <code>length</code> プロパティは 1 です。</p>

<p>ES2015 では、class 構文により定義済みクラスとユーザー定義クラスの両方をサブクラス化することができます。結果として、<code>Array.from</code> のような静的メソッドは <code>Array</code> のサブクラスに「継承」され、<code>Array</code> ではなくサブクラスのインスタンスを生成します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Array_from_a_String" name="Array_from_a_String"><code>String</code> からの配列の生成</h3>

<pre class="brush: js notranslate">Array.from('foo');
// [ "f", "o", "o" ]</pre>

<h3 id="Array_from_a_Set" name="Array_from_a_Set"><code>Set</code> からの配列の生成</h3>

<pre class="brush: js notranslate">const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]</pre>

<h3 id="Array_from_a_Map" name="Array_from_a_Map"><code>Map</code> からの配列の生成</h3>

<pre class="brush: js notranslate">const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
</pre>

<h3 id="Array_from_an_Array-like_object_arguments" name="Array_from_an_Array-like_object_(arguments)">配列のようなオブジェクト (引数) からの配列の生成</h3>

<pre class="brush: js notranslate">function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]</pre>

<h3 id="Using_arrow_functions_and_Array.from" name="Using_arrow_functions_and_Array.from">アロー関数と <code>Array.from</code> の使用</h3>

<pre class="brush: js notranslate">// 要素を操作するためのマップ関数として
// アロー関数を使用
Array.from([1, 2, 3], x =&gt; x + x);
// [2, 4, 6]


// 連番の生成
// 配列はそれぞれの場所が `undefined` で初期化されるため、
// 以下の `v` の値は `undefined` になる
Array.from({length: 5}, (v, i) =&gt; i);
// [0, 1, 2, 3, 4]
</pre>

<h3 id="Sequence_generator_range" name="Sequence_generator_(range)">連番の生成 (範囲指定)</h3>

<pre class="brush: js notranslate">// 連番の生成関数 (Clojure や PHP などでよく "range" と呼ばれる)
const range = (start, stop, step) =&gt; Array.from({ length: (stop - start) / step + 1}, (_, i) =&gt; start + (i * step));

// 0..4 の範囲の数値を生成
range(0, 4, 1);
// [0, 1, 2, 3, 4]

//  1..10 の範囲の数値を 2 ごとに生成
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Array.from を使用して順番通りになるようアルファベットを生成
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =&gt; String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">Initial publication</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.from', 'Array.from')}}</td>
   <td>ECMAScript 2015</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.builtins.Array.from")}}</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Array.from</code> は ECMA-262 標準の第 6 版に追加されました。そのため他の標準の実装には存在しない可能性があります。</p>

<p>次のコードをスクリプトの先頭に記述する事により、<code>Array.from</code> がネイティブでサポートされていない環境でもこれを使用できるようになります。</p>

<div class="blockIndicator note">
<p><strong>ポリフィルの注意:</strong> これは、ECMA-262 第 6 版で定められたアルゴリズムと全く同じです。<code>Object</code> と <code>TypeError</code> はそれぞれオリジナルの値を持ち、<code>callback.call</code> は {{jsxref("Function.prototype.call")}} のオリジナルの値として評価されます。</p>

<p>また、真の iterables ポリフィルできないので、この実装は ECMA-262 第 6 版で定義されている一般的な iterables をサポートしません。</p>
</div>

<pre class="notranslate">// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var symbolIterator;
        try {
            symbolIterator = Symbol.iterator
                ? Symbol.iterator
                : 'Symbol(Symbol.iterator)';
        } catch (e) {
            symbolIterator = 'Symbol(Symbol.iterator)';
        }

        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return (
                typeof fn === 'function' ||
                toStr.call(fn) === '[object Function]'
            );
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number &gt; 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        var setGetItemHandler = function setGetItemHandler(isIterator, items) {
            var iterator = isIterator &amp;&amp; items[symbolIterator]();
            return function getItem(k) {
                return isIterator ? iterator.next() : items[k];
            };
        };

        var getArray = function getArray(
            T,
            A,
            len,
            getItem,
            isIterator,
            mapFn
        ) {
            // 16. Let k be 0.
            var k = 0;

            // 17. Repeat, while k &lt; len… or while iterator is done (also steps a - h)
            while (k &lt; len || isIterator) {
                var item = getItem(k);
                var kValue = isIterator ? item.value : item;

                if (isIterator &amp;&amp; item.done) {
                    return A;
                } else {
                    if (mapFn) {
                        A[k] =
                            typeof T === 'undefined'
                                ? mapFn(kValue, k)
                                : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                }
                k += 1;
            }

            if (isIterator) {
                throw new TypeError(
                    'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1'
                );
            } else {
                A.length = len;
            }

            return A;
        };

        // The length property of the from method is 1.
        return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLikeOrIterator).
            var items = Object(arrayLikeOrIterator);
            var isIterator = isCallable(items[symbolIterator]);

            // 3. ReturnIfAbrupt(items).
            if (arrayLikeOrIterator == null &amp;&amp; !isIterator) {
                throw new TypeError(
                    'Array.from requires an array-like object or iterator - not null or undefined'
                );
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length &gt; 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError(
                        'Array.from: when provided, the second argument must be a function'
                    );
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length &gt; 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            return getArray(
                T,
                A,
                len,
                setGetItemHandler(isIterator, items),
                isIterator,
                mapFn
            );
        };
    })();
}</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("TypedArray.from()")}}</li>
</ul>
