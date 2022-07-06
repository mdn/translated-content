---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
tags:
- Error
- JavaScript
- Reference
- TypeError
translation_of: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "reduce of empty array with no initial value" は、 reduce 関数が使用されたときに発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: reduce of empty array with no initial value
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p>JavaScript には、複数の reduce 関数があります。</p>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}、{{jsxref("Array.prototype.reduceRight()")}} と</li>
 <li>{{jsxref("TypedArray.prototype.reduce()")}}、{{jsxref("TypedArray.prototype.reduceRight()")}})。</li>
</ul>

<p>これらの関数は、オプションとして (最初に <code>callback</code> が呼び出される際の最初の引数として使用される) <code>initialValue</code> を受け取ります。しかし、初期値を提供しない場合は、{{jsxref("Array")}} や {{jsxref("TypedArray")}} の最初の要素が初期値として使用されます。空の配列が提供されて初期値を取得できない場合にこのエラーが発生します。</p>

<h2 id="例">例</h2>

<h3 id="無効なケース">無効なケース</h3>

<p>この問題は、しばしばリストのすべての要素を取り除くフィルター ({{jsxref("Array.prototype.filter()")}}、{{jsxref("TypedArray.prototype.filter()")}}) で結合した際に発生します。したがって、初期値がないまま使用することになります。</p>

<pre class="brush: js example-bad">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y)    // no more elements to use for the initial value.</pre>

<p>似たようなケースとして、セレクターに typo がある場合やリストに予想外の数の要素がある場合に同様の問題が発生します:</p>

<pre class="brush: js example-bad">var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
</pre>

<h3 id="Valid_cases">有効な場合</h3>

<p>これらの問題は、2 つの異なる方法で解決できます。</p>

<p>1 つ目の方法は、<code>initialValue</code> を提供することです; 加算の場合には 0、乗算の場合には 1、文字連結の場合は空文字など、その操作にとって自然な値を指定します。</p>

<pre class="brush: js example-good">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &lt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y, 0) // the initial value is the neutral element of the addition
</pre>

<p>もう 1 つの方法は、<code>reduce</code> を呼び出す前、または予期しないダミーの初期値を追加した後にコールバックで空のケースを処理する方法です。</p>

<pre class="brush: js example-good">var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length &gt;= 1)
  name_list1 = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(names, (acc, name) =&gt; {
  if (acc == "") // initial value
    return name;
  return acc + ", " + name;
}, "");
// name_list2 == "" when names is empty.
</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
  <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
  <li>{{jsxref("TypedArray.prototype.reduce()")}}</li>
  <li>{{jsxref("TypedArray.prototype.reduceRight()")}}</li>
  <li>{{jsxref("Array")}}</li>
  <li>{{jsxref("TypedArray")}}</li>
  <li>{{jsxref("Array.prototype.filter()")}}</li>
  <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
</ul>
