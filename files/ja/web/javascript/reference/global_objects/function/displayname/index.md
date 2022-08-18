---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
tags:
  - Function
  - JavaScript
  - Non-standard
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/displayName
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p><strong><code><var>function</var>.displayName</code></strong> プロパティは、関数の表示名を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_a_displayName" name="Setting_a_displayName">displayName の設定</h3>

<p>通常、コンソールやプロファイラーでは関数名を表示するのに {{jsxref("Function.name", "func.name")}} よりも好まれます。</p>

<p>以下のものをコンソールに入力すると、 "<code>function My Function()</code>" のように表示されます。</p>

<pre class="brush: js notranslate">var a = function() {};
a.displayName = 'My Function';

a; // "function My Function()"</pre>

<p><code>displayName</code> プロパティが定義されると、関数の表示名が返されます。</p>

<pre class="brush: js notranslate">function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function(content) { console.log(content); };

popup.displayName = 'Show Popup';

console.log(popup.displayName); // "Show Popup"
</pre>

<h3 id="Defining_a_displayName_in_function_expressions" name="Defining_a_displayName_in_function_expressions">関数式の displayName の定義</h3>

<p>{{jsxref("Functions_and_function_scope", "関数式", "", 1)}}内で、関数と同時に表示名を定義できます。</p>

<pre class="brush: js notranslate">var object = {
  someMethod: function() {}
};

object.someMethod.displayName = 'someMethod';

console.log(object.someMethod.displayName); // logs "someMethod"

try { someMethod } catch(e) { console.log(e); }
// ReferenceError: someMethod is not defined
</pre>

<h3 id="Changing_displayName_dynamically" name="Changing_displayName_dynamically">動的な displayName の変更</h3>

<p>関数の <code>displayName</code> を動的に変更できます。</p>

<pre class="brush: js notranslate">var object = {
  // anonymous
  someMethod: function(value) {
    arguments.callee.displayName = 'someMethod (' + value + ')';
  }
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod('123')
console.log(object.someMethod.displayName); // "someMethod (123)"
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>どの仕様にも含まれていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function.displayName")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Function.name")}}</li>
</ul>
