---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Reference
  - Symbol
  - シンボル
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.toStringTag</code></strong> ウェルノウンシンボルは、オブジェクトを説明する既定の文字列の作成に使用される文字列値のプロパティです。 {{jsxref("Object.prototype.toString()")}} メソッドによって内部的にアクセスされます。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Default_tags" name="Default_tags">既定のタグ</h3>

<pre class="brush: js notranslate">Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
</pre>

<h3 id="Built-in_toStringTag_symbols" name="Built-in_toStringTag_symbols">組込み toStringTag シンボル</h3>

<pre class="brush: js notranslate">Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
</pre>

<h3 id="Custom_classes_default_to_object_tag" name="Custom_classes_default_to_object_tag">独自クラスの既定のオブジェクトタグ</h3>

<p>クラスを作成すると、 JavaScript は既定で "Object" というタグをつけます。</p>

<pre class="brush: js notranslate">class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
</pre>

<h3 id="Custom_tag_with_toStringTag" name="Custom_tag_with_toStringTag">toStringTag による独自タグ</h3>

<p><code>toStringTag</code> を使えば、独自のタグを設定することができます。</p>

<pre class="brush: js notranslate">class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
</pre>

<h3 id="toStringTag_available_on_all_DOM_prototype_objects" name="toStringTag_available_on_all_DOM_prototype_objects">すべての DOM プロトタイプオブジェクトで利用可能な toStringTag</h3>

<p><a href="https://github.com/heycam/webidl/pull/357">WebIDL の仕様変更</a>が2020年半ばに行われた関係で、ブラウザーはすべての DOM プロトタイプオブジェクトに <code>Symbol.toStringTag</code> プロパティを追加するようになりました。例えば、{{domxref("HTMLButtonElement")}} の <code>Symbol.toStringTag</code> プロパティにアクセスするには次のようにします。</p>

<pre class="brush: js notranslate">let test = document.createElement('button');
test.toString(); // Returns [object HTMLButtonElement]
test[Symbol.toStringTag];  // Returns HTMLButtonElement</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.tostringtag', 'Symbol.toStringTag')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.toStringTag")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
