---
title: Console.table()
slug: Web/API/console/table
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
translation_of: Web/API/Console/table
---
<div>{{APIRef("Console API")}}{{Non-standard_header}}</div>

<p><span class="seoSummary">表形式のデータを、表で表示します。</span></p>

<p>この関数は必須の引数 <code>data</code> があり、これは配列またはオブジェクトでなければなりません。また、省略可能な引数 <code>columns</code> もあります。</p>

<p><code>data</code> を表として出力します。配列の各要素 (<code>data</code> がオブジェクトである場合は、列挙可能なプロパティ) が、表の行になります。</p>

<p>表の 1 番目の列に、<code>(添字)</code> というラベルがつきます。<code>data</code> が配列である場合、この値は配列の添字になります。<code>data</code> がオブジェクトである場合、この値はプロパティ名になります。(Firefox では) <code>console.table</code> は表示する行が 1000 行 (最初の行は見出し) に制限されていますので注意してください。</p>

<p>{{AvailableInWorkers}}</p>

<h3 id="Collections_of_primitive_types" name="Collections_of_primitive_types">プリミティブ型の集合</h3>

<p>引数 <code>data</code> に、配列またはオブジェクトを渡すことができます。</p>

<pre class="brush: js">// 文字列の配列

console.table(["apples", "oranges", "bananas"]);</pre>

<p><img alt="" src="https://mdn.mozillademos.org/files/8567/console-table-array.png"></p>

<pre class="brush: js">// 値が文字列のプロパティを持つオブジェクト

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);</pre>

<p><img alt="" src="https://mdn.mozillademos.org/files/8559/console-table-simple-object.png"></p>

<h3 id="Collections_of_compound_types" name="Collections_of_compound_types">複合的な型の集合</h3>

<p>配列の要素やオブジェクトのプロパティ自体が配列やオブジェクトである場合、それらの要素やプロパティを 1 列ずつ置く形で、各行に列挙します:</p>

<pre class="brush: js">// 配列の配列

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);</pre>

<p><img alt="Table displaying array of arrays" src="https://mdn.mozillademos.org/files/8561/console-table-array-of-array.png"></p>

<pre class="brush: js">// オブジェクトの配列

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);</pre>

<p>配列がオブジェクトを含む場合、表の列名はプロパティ名になります。</p>

<p><img alt="Table displaying array of objects" src="https://mdn.mozillademos.org/files/8563/console-table-array-of-objects.png"></p>

<pre class="brush: js">// 値がオブジェクトのプロパティを持つオブジェクト

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);</pre>

<p><img alt="Table displaying object of objects" src="https://mdn.mozillademos.org/files/8565/console-table-object-of-objects.png"></p>

<h3 id="Restricting_the_columns_displayed" name="Restricting_the_columns_displayed">表示する列を制限する</h3>

<p>デフォルトでは、<code>console.table()</code> はすべての要素を各行に出力します。省略可能な引数 <code>columns</code> を使用して、表示する列のサブセットを選択できます:</p>

<pre class="brush: js">// オブジェクトの配列、ただし firstName のみ表示

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);</pre>

<p><img alt="Table displaying array of objects with filtered output" src="https://mdn.mozillademos.org/files/8569/console-table-array-of-objects-firstName-only.png"></p>

<h3 id="Sorting_columns" name="Sorting_columns">列で並べ替える</h3>

<p>列の見出しをクリックすると、その列の値で表を並べ替えることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">console.table(data [, <em>columns</em>]);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>data</code></dt>
 <dd>表示するデータ。配列またはオブジェクトでなければなりません。</dd>
 <dt><code>columns</code></dt>
 <dd>出力する列名を持つ配列。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#consoletabledata-columns", "console.table()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Console.table")}}</p>
