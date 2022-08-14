---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---
<div>{{JSRef}}</div>

<p><code><strong>Object.setPrototypeOf()</strong></code> メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部の <code>[[Prototype]]</code> プロパティ) を、別のオブジェクトまたは {{jsxref("null")}} に設定します。</p>

<div class="warning">
<p><strong>警告:</strong> オブジェクトの <code>[[Prototype]]</code> を変更すると、 <a href="https://mathiasbynens.be/notes/prototypes">最近の JavaScript エンジンがプロパティへのアクセスを最適化する方法</a>の特質上、すべてのブラウザーや JavaScript エンジンで、操作がとても低速になります。さらに、プロトタイプを変更することの性能への影響は細かく広範囲にわたり、 <code>Object.setPrototypeOf(...)</code> 文に費やされる時間だけではなく、 <code>[[Prototype]]</code> が変更されたすべてのオブジェクトへのアクセスを持つ<strong><em>すべて</em></strong>のコードに影響する可能性があります。</p>

<p>この機能は言語の一部であるため、その機能の実装による負荷は (理念上は) エンジンの開発者によります。エンジンの開発者がこの問題に対処するまでの間、性能が気になる場合は、オブジェクトの <code>[[Prototype]]</code> を変更することは避けるべきです。代わりに、 {{jsxref("Object.create()")}} を使用して必要な <code>[[Prototype]]</code> をもつオブジェクトを生成してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.setPrototypeOf(<var>obj</var>, <var>prototype</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>プロトタイプを設定するオブジェクト。</dd>
 <dt><code><var>prototype</var></code></dt>
 <dd>オブジェクトの新しいプロトタイプ (オブジェクトまたは {{jsxref("null")}})。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたオブジェクト。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>[[Prototype]]</code> が変更されるオブジェクトが {{jsxref("Object.isExtensible()")}} に応じて拡張不可の場合、 {{jsxref("Global_Objects/TypeError", "TypeError")}} 例外を投げます。<code>prototype</code> 引数がオブジェクトまたは {{jsxref("null")}} ではない場合(つまり、数値、文字列、boolean、 {{jsxref("undefined")}} のいずれか)、何もしません。さもなければ、このメソッドは <code>obj</code> の <code>[[Prototype]]</code> を新しい値に変更します。</p>

<p><code>Object.setPrototypeOf()</code> は、 ECMAScript 2015 仕様書にあります。一般的には、オブジェクトのプロトタイプを設定するための適切な方法と考えられています。もっと物議を醸す{{jsxref("Object.prototype.__proto__")}} プロパティがあります。</p>

<h2 id="Appending_Prototype_Chains" name="Appending_Prototype_Chains">プロトタイプチェーンの追加</h2>

<p><code>Object.getPrototypeOf()</code> と {{jsxref("Object.proto", "Object.prototype.__proto__")}} の組み合わせによってプロトタイプチェーン全体を新しいプロトタイプオブジェクトに追加できます。</p>

<pre class="brush: js notranslate">/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function(["@arg"(s)], "@function_body") to that chain.
* Returns the function.
*
**/

Object.appendChain = function(oChain, oProto) {
  if (arguments.length &lt; 2) {
    throw new TypeError('Object.appendChain - 引数が足りません');
  }
  if (typeof oProto !== 'object' &amp;&amp; typeof oProto !== 'string') {
    throw new TypeError('Object.appendChain の第二引数は object か string でなければなりません');
  }

  var oNewProto = oProto,
      oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype &amp;&amp; o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}
</pre>

<h3 id="Usage" name="Usage">使い方</h3>

<h4 id="First_example_Appending_a_chain_to_a_prototype" name="First_example_Appending_a_chain_to_a_prototype">最初の例: チェーンをプロトタイプに追加する</h4>

<pre class="brush: js notranslate">function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
</pre>

<h4 id="Second_example_Transforming_a_primitive_value_into_an_instance_of_its_constructor_and_append_its_chain_to_a_prototype" name="Second_example_Transforming_a_primitive_value_into_an_instance_of_its_constructor_and_append_its_chain_to_a_prototype">二番目の例: そのコンストラクタのインスタンスにプリミティブ値を変換し、プロトタイプにそのチェーンを追加する</h4>

<pre class="brush: js notranslate">function MySymbol() {
  this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
</pre>

<h4 id="Third_example_Appending_a_chain_to_the_Function.prototype_object_and_appending_a_new_function_to_that_chain" name="Third_example_Appending_a_chain_to_the_Function.prototype_object_and_appending_a_new_function_to_that_chain">三番目の例: チェーンを Function.prototype オブジェクトに追加し、新しい関数をそのチェーンに追加する</h4>

<pre class="brush: js notranslate">function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(new Person('George'),
                                'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Object.setPrototypeOf" name="Using_Object.setPrototypeOf">Object.setPrototypeOf の使用</h3>

<pre class="brush: js notranslate">var dict = Object.setPrototypeOf({}, null);
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Object.setPrototypeOf</code> が利用できない場合、より古い {{jsxref("Object.prototype.__proto__")}} プロパティを使って、簡単に定義することができます。</p>

<pre class="brush: js notranslate">if (!Object.setPrototypeOf) {
    // Chrome および FireFox で動作しますが、 IE では動作しません
     Object.prototype.setPrototypeOf = function(obj, proto) {
         if(obj.__proto__) {
             obj.__proto__ = proto;
             return obj;
         } else {
             // Object.create(null) のプロトタイプを返したい場合
             var Fn = function() {
                 for (var key in obj) {
                     Object.defineProperty(this, key, {
                         value: obj[key],
                     });
                 }
             };
             Fn.prototype = proto;
             return new Fn();
         }
     }
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
   <td>{{SpecName('ESDraft', '#sec-object.setprototypeof', 'Object.setPrototypeOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Object.setPrototypeOf")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.__proto__")}}</li>
</ul>
