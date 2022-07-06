---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - hasOwnProperty
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---
<div>{{JSRef}}</div>

<p><strong><code>hasOwnProperty()</code></strong> メソッドは、オブジェクト自身が（継承されていない）指定されたプロパティを持っているかどうかを示す真偽値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>obj</var>.hasOwnProperty(<var>prop</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>prop</var></dt>
 <dd>テストするプロパティの名前の {{jsxref("String")}} または {{Glossary("Symbol")}} 。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Boolean")}} で、オブジェクトが指定されたプロパティを自身のプロパティとして持っているかどうかを示す</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Object")}} のすべての子孫は <code>hasOwnProperty</code> メソッドを継承しています。このメソッドはあるオブジェクトが指定されたプロパティを、そのオブジェクトの直接のプロパティとして持っているかどうかを特定するのに使うことができます。 {{jsxref("Operators/in", "in")}} 演算子とは異なり、このメソッドはオブジェクトのプロトタイプチェーンをたどってチェックしません。 {{jsxref("Object")}} が {{jsxref("Array")}} の場合、 <code>hasOwnProperty</code> メソッドはある添字が存在するかどうかを調べることができます。</p>

<h2 id="Note" name="Note">注</h2>

<p><code>hasOwnProperty</code> はプロパティの値が <code>null</code> または <code>undefined</code> であっても true を返します。</p>

<pre class="brush: js notranslate">o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne');   // true を返す
o.propTwo = undefined;
o.hasOwnProperty('propTwo');   // true を返す
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_hasOwnProperty_to_test_for_a_propertys_existence" name="Using_hasOwnProperty_to_test_for_a_property's_existence">hasOwnProperty を使ってプロパティの存在を調べる</h3>

<p>オブジェクト <code>o</code> が <code>prop</code> という名前のプロパティを持っているかどうかを特定する例を以下に示します。</p>

<pre class="brush: js notranslate">o = new Object();
o.hasOwnProperty('prop');   // false を返す
o.prop = 'exists';
o.hasOwnProperty('prop');   // true を返す
</pre>

<h3 id="Direct_versus_inherited_properties" name="Direct_versus_inherited_properties">直接のプロパティと継承されたプロパティ</h3>

<p>以下の例では、直接のプロパティとプロトタイプチェーンを通じて継承されたプロパティを区別します。</p>

<pre class="brush: js notranslate">o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // true を返す
o.hasOwnProperty('toString');         // false を返す
o.hasOwnProperty('hasOwnProperty');   // false を返す
</pre>

<h3 id="Iterating_over_the_properties_of_an_object" name="Iterating_over_the_properties_of_an_object">オブジェクトのプロパティの反復処理</h3>

<p>以下の例では、継承されたプロパティを除いてオブジェクトのプロパティを反復処理する方法を示します。なお、 {{jsxref("Statements/for...in", "for...in")}} ループですでに列挙可能なアイテムのみが反復処理されるので、 <code>hasOwnProperty</code> 自体は列挙可能なアイテムに厳密に限定されているため、ループ内に列挙できないプロパティが見られないことに基づいて想定するべきではありません ({{jsxref("Object.getOwnPropertyNames()")}} のように)。</p>

<pre class="brush: js notranslate">var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
</pre>

<h3 id="Using_hasOwnProperty_as_a_property_name" name="Using_hasOwnProperty_as_a_property_name">プロパティ名としての hasOwnProperty の使用</h3>

<p>JavaScript は <code>hasOwnProperty</code> というプロパティ名を保護していません。したがって、オブジェクトがこの名前のプロパティを持っている場合が存在すれば、正しい結果を得るためには<em>外部の</em> <code>hasOwnProperty</code> を使用する必要があります。</p>

<pre class="brush: js notranslate">var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 常に false を返す

// 別な Object の hasOwnProperty 使用して、
// this を foo に設定して呼び出す
({}).hasOwnProperty.call(foo, 'bar'); // true

// この目的では、 Object プロトタイプの hasOwnProperty プロパティを
// 使用することもできます。
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
</pre>

<p>なお、後者の場合は新しくオブジェクトを生成しません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.hasOwnProperty")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Operators/in", "in")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">継承とプロトタイプチェーン</a></li>
</ul>
