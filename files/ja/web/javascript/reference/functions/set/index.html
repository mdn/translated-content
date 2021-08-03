---
title: セッター
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - Functions
  - JavaScript
  - Language feature
  - 言語機能
  - 関数
translation_of: Web/JavaScript/Reference/Functions/set
---
<div>{{jsSidebar("Functions")}}</div>

<p><span class="seoSummary"><strong><code>set</code></strong> 構文は、あるオブジェクトプロパティを関数にバインドして、プロパティに設定しようとしたときに呼び出される関数に結びつけます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/functions-setter.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">{set <var>prop</var>(<var>val</var>) { . . . }}
{set [<var>expression</var>](<var>val</var>) { . . . }}</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>prop</var></code></dt>
 <dd>与えられた関数を割り当てるプロパティの名称です。</dd>
 <dt><code><var>val</var></code></dt>
 <dd><code><var>prop</var></code> に設定しようとする値を保持する変数のエイリアスです。</dd>
 <dt><code><var>expression</var></code></dt>
 <dd>ECMAScript 2015 より、算出されたプロパティ名 (computed property name) の式を使用して関数に結び付けることもできます。</dd>
</dl>

<h2 id="Description" name="Description">説明</h2>

<p>JavaScript では、特定のプロパティを変更しようとするたびに関数を実行するため、セッターを利用できます。セッターはたいていゲッターと合わせて、擬似的なプロパティを作成するために用いられます。実際の値を持つプロパティが、同時にセッターを持つことはできません。</p>

<p><code>set</code> 構文を使用する際の注意事項:</p>

<div>
<ul>
 <li>識別子は数値でも文字列でも持つことができます。</li>
 <li>厳密に 1 つの引数を持たなければなりません (詳しくは <a href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments</a> をご覧ください)。</li>
 <li>あるオブジェクトリテラルが、同じプロパティのための別の <code>set</code> を持ったり、データ項目を持ったりしてはいけません。<br>
  ( <code>{ set x(v) { }, set x(v) { } }</code> や <code>{ x: ..., set x(v) { } }</code> は不可 )</li>
</ul>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Defining_a_setter_on_new_objects_in_object_initializers" name="Defining_a_setter_on_new_objects_in_object_initializers">新しいオブジェクトでオブジェクトの初期化時にセッターを定義</h3>

<p>以下の例では、擬似プロパティ <code>current</code> を <code>language</code> オブジェクトに定義します。 <code>current</code> に値が代入されると、 <code>log</code> をその値で更新します。</p>

<pre class="brush: js notranslate">const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
</pre>

<p><code>current</code> は定義されておらず、あらゆるアクセスを試みてもその結果は <code>undefined</code> になることに注意してください。</p>

<h3 id="Removing_a_setter_with_the_delete_operator" name="Removing_a_setter_with_the_delete_operator"><code>delete</code> 演算子によるセッターの削除</h3>

<p>セッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} だけで削除できます。</p>

<pre class="brush: js notranslate">delete language.current;
</pre>

<h3 id="Defining_a_setter_on_existing_objects_using_defineProperty" name="Defining_a_setter_on_existing_objects_using_defineProperty"><code>defineProperty</code> を使用して既存のオブジェクトにセッターを定義する</h3>

<p><em>既存の</em>オブジェクトにセッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用します。</p>

<pre class="brush: js notranslate">const o = {a: 0};

Object.defineProperty(o, 'b', {
  set: function(x) { this.a = x / 2; }
});

o.b = 10;
// セッターを実行し、 10 / 2 (5) を 'a' プロパティに代入

console.log(o.a)
//  5</pre>

<h3 id="Using_a_computed_property_name" name="Using_a_computed_property_name">算出されたプロパティ名を使用する</h3>

<pre class="brush: js notranslate">const expr = 'foo';

const obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz);
//  "bar"

obj.foo = 'baz';
// セッターを実行

console.log(obj.baz);
//  "baz"
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
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.functions.set")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/get">ゲッター</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">ゲッターとセッターの定義</a> (JavaScript ガイド)</li>
</ul>
