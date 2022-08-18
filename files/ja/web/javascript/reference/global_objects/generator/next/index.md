---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/next
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>next()</code></strong> メソッドは、2つのプロパティ <code>done</code> と <code>value</code> を持つオブジェクトを返します。 <code>next</code> メソッドに引数を提供して、ジェネレーターへ値を送ることもできます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>gen</var>.next(<var>value</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>ジェネレーターへ送る値です。</dd>
 <dd>この値は <code>yield</code> 式の結果として代入されます。例えば <code><var>variable</var> = yield <var>expression</var></code> の場合、 <code>.next()</code> 関数に渡された値は <code><var>variable</var></code> に代入されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>以下の２つのプロパティを持った {{jsxref("Object")}} です。</p>

<dl>
 <dt><code>done</code> (boolean)</dt>
 <dd>イテレーターが反復処理の末尾を過ぎている場合、値は <code>true</code> になります。この場合、 <code>value</code> はオプションでそのイテレーターの<em>返値</em>を指定します。</dd>
 <dd>イテレーターが反復処理の次の値を生成することができた場合、値は <code>false</code> になります。これは <code>done</code> プロパティを指定しない場合も同等です。</dd>
 <dt><code>value</code></dt>
 <dd>イテレーターが返す何らかの JavaScript の値です。 <code>done</code> が <code>true</code> の場合は省略可能です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_test" name="Using_test">next() の使用</h3>

<p>次の例では、 <code>next</code> メソッドが返す簡単なジェネレーターとオブジェクトを示します。</p>

<pre class="brush: js notranslate">function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
</pre>

<h3 id="Using_next_with_a_list" name="Using_next_with_a_list">リストでの next() の使用</h3>

<pre class="notranslate">function* getPage(pageSize = 1, list) {
    let output = [];
    let index = 0;

    while (index &lt; list.length) {
        output = [];
        for (let i = index; i &lt; index + pageSize; i++) {
            if (list[i]) {
                output.push(list[i]);
            }
        }

        yield output;
        index += pageSize;
    }
}

list = [1, 2, 3, 4, 5, 6, 7, 8]
var page = getPage(3, list);              // Generator { }

page.next();                              // Object {value: (3) [1, 2, 3], done: false}
page.next();                              // Object {value: (3) [4, 5, 6], done: false}
page.next();                              // Object {value: (2) [7, 8], done: false}
page.next();                              // Object {value: undefined, done: true}
</pre>

<h3 id="Sending_values_to_the_generator" name="Sending_values_to_the_generator">ジェネレーターへ値を送る</h3>

<p>この例では <code>next</code> を値付きで呼び出しています。</p>

<p>なお、最初の呼び出しではジェネレーターが何も生成していないため、何もログを記録しないことに注意してください。</p>

<pre class="brush: js notranslate">function* gen() {
  while (true) {
    let value = yield null;
    console.log(value);
  }
}

const g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
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
   <td>{{SpecName('ESDraft', '#sec-generator.prototype.next', 'Generator.prototype.next')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Generator.next")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/function*", "function*")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">イテレーターとジェネレーター</a></li>
</ul>
