---
title: ゲッター
slug: Web/JavaScript/Reference/Functions/get
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Functions
  - JavaScript
  - Language feature
  - 言語機能
  - 関数
translation_of: Web/JavaScript/Reference/Functions/get
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>get</code></strong> 構文は、オブジェクトのプロパティを関数に結びつけ、プロパティが参照された時に関数が呼び出されるようにします。</p>

<div>{{EmbedInteractiveExample("pages/js/functions-getter.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">{get <var>prop</var>() { ... } }
{get [<var>expression</var>]() { ... } }</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>prop</var></code></dt>
 <dd>与えられた関数に結び付けられるプロパティの名前</dd>
 <dt><code><var>expression</var></code></dt>
 <dd>ECMAScript 6 より、算出されたプロパティ名 (computed property name) の式を使用して関数に結び付けることもできます。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>時として、動的に計算した値を返すプロパティにアクセスを許可したほうが望ましい場合や、明示的なメソッドを呼び出すことなく内部変数に状態を反映させたい場合があります。 JavaScript では、<em>ゲッター</em>を使ってこれを行うことが可能です。</p>

<p>プロパティに結び付けられたゲッターと、実際に値を持つプロパティを同時に持つことはできませんが、ゲッターとセッターを組み合わせて使用し、一種の擬似プロパティを作成することはできます。</p>

<p><code>get</code> 構文を使用する際の注意事項:</p>

<ul>
 <li>数値または文字列による識別子を持つことができます。</li>
 <li>パラメータの数は 0 でなければなりません (詳しくは <a href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments</a> をご覧ください)。</li>
 <li>1つのオブジェクトリテラル中に、同じプロパティに対する別の <code>get</code> またはデータの割り当てが現れてはいけません (<code>{ get x() { }, get x() { } }</code> や <code>{ x: ..., get x() { } }</code> は禁止されています)。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Defining_a_getter_on_new_objects_in_object_initializers" name="Defining_a_getter_on_new_objects_in_object_initializers">オブジェクト初期化時における新しいオブジェクトのゲッターの定義</h3>

<p>以下の例では、オブジェクト <code>obj</code> の擬似プロパティとして、 <code>log</code> 内の最後の配列アイテムを返す <code>latest</code> プロパティを作成します。</p>

<pre class="brush: js">const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test"
</pre>

<p><code>latest</code> に値を代入しようとしても、変更はされないことに注意して下さい。</p>

<h3 id="Deleting_a_getter_using_the_delete_operator" name="Deleting_a_getter_using_the_delete_operator"><code>delete</code> 演算子によるゲッターの削除</h3>

<p>ゲッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} を使用します。</p>

<pre class="brush: js">delete <var>obj</var>.latest;
</pre>

<h3 id="既存のオブジェクトへの_defineProperty_を使用したゲッターの定義">既存のオブジェクトへの <code>defineProperty</code> を使用したゲッターの定義</h3>

<p>任意のタイミングで既存のオブジェクトにゲッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用します。</p>

<pre class="brush: js">const o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // getter を実行。a + 1 を算出する (結果は 1)</pre>

<h3 id="Using_a_computed_property_name" name="Using_a_computed_property_name">算出されたプロパティ名の使用</h3>

<pre class="brush: js">const expr = 'foo';

const obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"</pre>

<h3 id="Smart_self-overwriting_lazy_getters" name="Smart_self-overwriting_lazy_getters">スマート / 自己書き換え / 怠惰なゲッター</h3>

<p>ゲッターはオブジェクトのプロパティを<em>定義</em>する手段を提供しますが、アクセスされるまでプロパティの値を<em>計算</em>しません。ゲッターは値を計算するコストを、値が必要になるまで先送りします。値が必要でなければ、そのコストを負担しません。</p>

<p>プロパティの値の計算を先送りしたり後のアクセスのためにキャッシュするための付加的な最適化技術が、<strong>スマート (または<a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%8C%96">メモ化</a>) ゲッター</strong>です。初めてゲッターにアクセスされたときに、値を計算してキャッシュします。以降のアクセスでは再計算せずに、キャッシュした値を返します。これは次のような状況で役に立ちます。</p>

<ul>
 <li>プロパティの値の計算コストが高い場合 (大量の RAM や CPU 時間を使用する、ワーカースレッドを生成する、リモートのファイルを読み込むなど)。</li>
 <li>値がすぐに必要ではない場合。値を後で使用する、あるいはまったく使用しない場合がある状況。</li>
 <li>何度もアクセスされる値で、値が変更されないため再計算の必要がない、あるいは再計算すべきではない場合。</li>
</ul>

<div class="note">
<p>値が変わると見込まれるプロパティで、怠惰なゲッターを使用してはいけません。このようなゲッターは値を再計算しないためです。</p>
</div>

<p>以下の例では、オブジェクトが自身のプロパティとしてゲッターを持っています。プロパティを取得すると、プロパティはオブジェクトから削除された後に再追加されますが、このとき暗黙的にデータプロパティとして追加されます。最終的に、値が返されます。</p>

<pre class="brush: js">get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},</pre>

<p>Firefox のコードでは、 <code>XPCOMUtils.jsm</code> コードモジュールもご覧ください。これは <code><a href="/ja/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()">defineLazyGetter()</a></code> 関数を定義しています。</p>

<h3 id="get_vs._defineProperty" name="get_vs._defineProperty"><code>get</code> と <code>defineProperty</code></h3>

<p><code>get</code> キーワードと {{jsxref("Object.defineProperty()")}} の使用は似た結果になりますが、 {{jsxref("classes")}} 上で使用する場合は微妙な違いがあります。</p>

<p><code>get</code> を使用した場合は、プロパティはインスタンスのプロトタイプに定義されるのに対し、 {{jsxref("Object.defineProperty()")}} を使用した場合は、プロパティは適用されたインスタンスに定義されます。</p>

<pre class="brush: js">class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.functions.get")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/set">setter</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">ゲッターとセッターの定義</a> (JavaScript ガイド)</li>
</ul>
