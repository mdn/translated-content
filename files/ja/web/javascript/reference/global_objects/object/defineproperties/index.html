---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---
<div>{{JSRef}}</div>

<p><strong><code>Object.defineProperties()</code></strong> メソッドは、オブジェクトに直接新しいプロパティを定義し、あるいは既存のプロパティを変更して、そのオブジェクトを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.defineProperties(<var>obj</var>, <var>props</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>プロパティを定義または変更するオブジェクト。</dd>
 <dt><code><var>props</var></code></dt>
 <dd>キーが定義または変更されるプロパティの名前を表し、値がそれらのプロパティを記述するオブジェクトであるオブジェクトです。 <code>props</code> の各値は、データ記述子かアクセサー記述子のいずれかでなければなりませんが、両方を指定することはできません (詳細は {{jsxref("Object.defineProperty()")}} を参照してください)。</dd>
 <dd>データ記述子およびアクセサー記述子は、オプションで以下のキーを含むことができます。</dd>
 <dd>
 <dl>
  <dt><code>configurable</code></dt>
  <dd>プロパティの記述子が変更でき、プロパティが対応するオブジェクトから削除できるときのみ <code>true</code>。<br>
  <strong>既定値は <code>false</code>。</strong></dd>
  <dt><code>enumerable</code></dt>
  <dd>対応するオブジェクトのプロパティを列挙したとき表示される場合のみ <code>true</code>。<br>
  <strong>既定値は <code>false</code>。</strong></dd>
 </dl>

 <p>データ記述子には以下のオプションのキーもあります。</p>

 <dl>
  <dt><code>value</code></dt>
  <dd>プロパティに関連づける値。 JavaScript で有効な任意の値です (数値、オブジェクト、関数など)。<br>
  <strong>既定値は {{jsxref("undefined")}}。</strong></dd>
  <dt><code>writable</code></dt>
  <dd>プロパティに関連づけられた値が{{jsxref("Operators/Assignment_Operators", "代入演算子", "", 1)}}で変更できる場合のみ <code>true</code>。<br>
  <strong>既定値は <code>false</code>。</strong></dd>
 </dl>

 <p>アクセサー記述子には、以下のオプションのキーもあります。</p>

 <dl>
  <dt><code>get</code></dt>
  <dd>プロパティのゲッターとして用いられる関数。ゲッターがなければ {{jsxref("undefined")}} になります。関数の返値がプロパティの値として使用されます。<br>
  <strong>既定値は {{jsxref("undefined")}}。</strong></dd>
  <dt><code>set</code></dt>
  <dd>プロパティのセッターとして用いられる関数。セッターがなければ {{jsxref("undefined")}} になります。関数はただひとつの引数として、プロパティに代入された新たな値を受取ります。<br>
  <strong>既定値は {{jsxref("undefined")}}。</strong></dd>
 </dl>

 <p>記述子が <code>value</code>, <code>writable</code>, <code>get</code> <code>set</code> キーのいずれでもない場合は、データ記述子として扱われます。記述子に <code>value</code> または <code>writable</code> と <code>get</code> または <code>set</code> キーの両方があった場合は、例外が発生します。</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>関数に渡されたオブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Object.defineProperties" name="Using_Object.defineProperties">Object.defineProperties の使用</h3>

<pre class="brush: js notranslate">var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>すべての名前とプロパティが自身の初期値を参照する基本的な実行環境において、 <code>Object.defineProperties</code> は以下の JavaScript による再実装とほぼ同等です(<code>isCallable</code> のコメントに注意)。</p>

<pre class="brush: js;highlight:[8] notranslate">function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // 注意: 関数以外の値が呼び出し可能である場合、必要に応じて変更。
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if (hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, 'value'))
      d.value = desc.value;
    if (hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if (hasProperty(desc, 'get')) {
      var g = desc.get;

      if (!isCallable(g) &amp;&amp; typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var s = desc.set;
      if (!isCallable(s) &amp;&amp; typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if (('get' in d || 'set' in d) &amp;&amp; ('value' in d || 'writable' in d))
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if (typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i &lt; keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i &lt; descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
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
   <td>{{SpecName('ESDraft', '#sec-object.defineproperties', 'Object.defineProperties')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Object.defineProperties")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a></li>
</ul>
