---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/return
---
<div>{{JSRef}}</div>

<p><strong><code>return()</code></strong> メソッドは、指定された値を返してジェネレーターを終了します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>gen</var>.return(<var>value</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>返却する値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>この関数に引数として与えられている値を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_return" name="Using_return">return() の使用</h3>

<p>次の例では簡単なジェネレーターと <code>return</code> メソッドを示します。</p>

<pre class="brush: js notranslate">function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
</pre>

<p><code>return(<var>value</var>)</code> がすでに "完了" の状態のジェネレーターで呼び出されると、ジェネレーターは "完了" の状態のままになります。</p>

<p>引数が提供されなかった場合、返却されるオブジェクトの <code>value</code> プロパティは <code>.next()</code> の場合と同じになります。引数が提供された場合は、返却されるオブジェクトの <code>value</code> プロパティの値に設定されます。</p>

<pre class="brush: js notranslate">function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
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
   <td>{{SpecName('ESDraft', '#sec-generator.prototype.return', 'Generator.prototype.return')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Generator.return")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/function*", "function*")}}</li>
</ul>
