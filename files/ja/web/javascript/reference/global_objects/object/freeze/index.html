---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
tags:
  - ECMAScript5
  - JavaScript
  - Object
  - Reference
  - freeze
  - メソッド
  - ロック
  - 不変性
  - 凍結
  - 変更
  - 変更可能性
translation_of: Web/JavaScript/Reference/Global_Objects/Object/freeze
---
<div>{{JSRef}}</div>

<p><code><strong>Object.freeze()</strong></code> メソッドはオブジェクトを<strong>凍結</strong>します。凍結されたオブジェクトは変更できなくなります。オブジェクトを凍結すると、新しいプロパティを追加したり、既存のプロパティを削除したりすることができなくなり、既存のプロパティに対する列挙可否、構成可否、書き込み可否の変更ができなくなり、既存のプロパティの値が変更できなくなります。加えて、オブジェクトを凍結するとプロトタイプも変更できなくなります。<code>freeze()</code> は渡されたものと同じオブジェクトを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-freeze.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.freeze(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>凍結するオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>この関数に渡されたオブジェクトです。</p>

<h2 id="Description" name="Description">説明</h2>

<p>凍結されたオブジェクトにプロパティのセットを追加あるいは削除することはできません。実行しようとすると暗黙に失敗するか、または {{jsxref("TypeError")}} 例外が発生して失敗します (多くの場合は、ただし{{jsxref("Strict_mode", "厳格モード", "", 1)}}ではこれに限りません)。</p>

<p>凍結されたオブジェクトデータプロパティについては、値を変更することはできず、構成可否、書き込み可否の属性は false に設定されます。アクセサープロパティ (ゲッターおよびセッター) は同様に動作します (そして、値を変更しているかのようにみえます)。なお、オブジェクトである値については、それも凍結されていない限り変更可能です。オブジェクトとして、配列は凍結可能です。凍結すると、要素が変更可能ではなくなり、配列に対する要素の追加や削除ができなくなります。</p>

<p><code>freeze()</code> は関数に渡されたものと同じオブジェクトを返します。凍結されたコピーを生成する訳では<em>ありません</em>。</p>

<p>ECMAScript 5 では、このメソッドの引数がオブジェクトではない (プリミティブである) 場合、{{jsxref("TypeError")}} が発生します。ECMAScript 2015 では、オブジェクトではない引数は通常の凍結済みのオブジェクトである場合と同様に扱い、単純に返されます。</p>

<pre class="brush: js notranslate">&gt; Object.freeze(1)
TypeError: 1 is not an object // ES5 のコード

&gt; Object.freeze(1)
1                             // ES2015 のコード
</pre>

<p>要素を伴う {{domxref("ArrayBufferView")}} では、メモリー上のビューであり絶対的に他の問題の可能性があるため、{{jsxref("TypeError")}} が発生します。</p>

<pre class="brush: js notranslate">&gt; Object.freeze(new Uint8Array(0)) // 要素なし
<em>Uint8Array</em> []

&gt; Object.freeze(new Uint8Array(1)) // 要素あり
TypeError: Cannot freeze array buffer views with elements

&gt; Object.freeze(new DataView(new ArrayBuffer(32))) // 要素なし
<em>DataView</em> {}

&gt; Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // 要素なし
<em>Float64Array</em> []

&gt; Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // 要素あり
TypeError: Cannot freeze array buffer views with elements
</pre>

<p>なお、標準の3つのプロパティ (<code>buf.byteLength</code>, <code>buf.byteOffset</code> and <code>buf.buffer</code>) は読み取り専用ですので ({{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の場合)、これらのプロパティを凍結しようとする理由はありません。</p>

<h3 id="Comparison_to_Object.seal" name="Comparison_to_Object.seal()">Object.seal() との比較</h3>

<p>{{jsxref("Object.seal()")}} によって封印されたオブジェクトは、既存のプロパティを変更することができます。<code>Object.freeze()</code> によって凍結されたオブジェクトの既存のプロパティは、不変になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Freezing_objects" name="Freezing_objects">オブジェクトの凍結</h3>

<pre class="brush: js notranslate">const obj = {
  prop() {},
  foo: 'bar'
};

// 凍結前: 新しいプロパティが追加でき、
// 既存のプロパティは変更や削除ができます
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 凍結
const o = Object.freeze(obj);

// 返値は渡したオブジェクトとまったく同じものです。
o === obj; // true

// オブジェクトは凍結されています。
Object.isFrozen(obj); // === true

// すべての変更が失敗するようになりました
obj.foo = 'quux'; // 暗黙的に何も行われません
// 暗黙的にプロパティは追加されません
obj.quaxxor = 'the friendly duck';

// また、厳格モードではこれらの試みに対して TypeError が発生します
function fail(){
  'use strict';
  obj.foo = 'sparky'; // TypeError が発生
  delete obj.foo; // TypeError が発生
  delete obj.quaxxor; // 属性 'quaxxor' が追加されたことがないため true を返す
  obj.sparky = 'arf'; // TypeError が発生
}

fail();

// Object.defineProperty; から変更を試みますが、
// 以下のどちらの文も TypeError が発生します。
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// プロトタイプを変更することもできず、
// 以下のどちらの文も TypeError が発生します。
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
</pre>

<h3 id="Freezing_arrays" name="Freezing_arrays">配列の凍結</h3>

<pre class="brush: js notranslate">let a = [0];
Object.freeze(a); // 配列が変更できなくなりました。

a[0] = 1; // 暗黙に失敗

// 厳格モードで試みると TypeError が発生します
function fail() {
  "use strict"
  a[0] = 1;
}

fail();

// push を試みる
a.push(2); // TypeError が発生</pre>

<p>凍結されたオブジェクトは<em>不変</em>になります。しかし、<em>定数</em>であるとは限りません。以下の例では、凍結されたオブジェクトが定数ではないことを示しています (凍結が浅い)。</p>

<pre class="brush: js notranslate">const obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'</pre>

<p>定数オブジェクトになるには、参照のつながり全体 (他のオブジェクトへの直接または間接的な参照) が不変で凍結されたオブジェクトのみを参照していなければなりません。凍結されるオブジェクトは、オブジェクト全体の中にあるオブジェクトの<em>状態</em> (値と他のオブジェクトへの参照) がすべて固定されているので、不変ということができます。なお、文字列、数値、真偽値はすべて不変となり、関数や配列はオブジェクト扱いです。</p>

<h4 id="What_is_shallow_freeze" name="What_is_shallow_freeze">浅い凍結とは</h4>

<p><code>Object.freeze(<var>object</var>)</code> を呼び出した結果は、<code>object</code> の直属のプロパティにのみ適用され、<code>object</code> 上<em>のみ</em>に対するその後のプロパティの追加、削除、値の再割り当て操作を禁止します。これらのプロパティの値がオブジェクトそのものであった場合、これらのオブジェクトは凍結されず、プロパティの追加、削除、値の再割り当て操作の対象になり得ます。</p>

<pre class="brush: js notranslate">const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // 非 strict モードでは暗黙に失敗
employee.address.city = "Noida"; // 子オブジェクトの属性は変更できる

console.log(employee.address.city) // 出力: "Noida"
</pre>

<p>オブジェクトを不変にするには、オブジェクト型のプロパティをそれぞれ再帰的に凍結させてください (深い凍結)。オブジェクトが参照グラフに{{interwiki("wikipedia", "閉路")}}を含まないことが分かっている場合は、デザインパターンに基づいてケースバイケースのパターンを使用してください。そうでないと、無限ループが発生します。<code>deepFreeze()</code> をパス (例えば配列) 引数を受け取る内部関数を持つよう拡張すると、オブジェクトを不変にするプロセスにいるときに、<code>deepFreeze()</code> が再帰的に呼び出されることを防ぐことができます。凍結させてはいけない [window] のようなオブジェクトを凍結させる危険性がなおあります。</p>

<pre class="brush: js notranslate">function deepFreeze(object) {
  // オブジェクトで定義されたプロパティ名を取得
  const propNames = Object.getOwnPropertyNames(object);

  // 自分自身を凍結する前にプロパティを凍結

  for (const name of propNames) {
    const value = object[name];

    if (value &amp;&amp; typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // 非 strict モードでは暗黙に失敗
obj2.internal.a; // null
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
   <td>{{SpecName('ESDraft', '#sec-object.freeze', 'Object.freeze')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.freeze")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.isFrozen()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
