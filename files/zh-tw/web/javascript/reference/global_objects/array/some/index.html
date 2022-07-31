---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
---
<div>{{JSRef}}</div>

<p><code><strong>some()</strong></code> 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。</p>

<div>{{EmbedInteractiveExample("pages/js/array-some.html")}}</div>

<div class="notecard note">
<p><strong>備註：</strong>如果輸入空陣列的話，這個方法會回傳 <code>false</code>。</p>
</div>



<h2 id="語法">語法</h2>

<pre class="syntaxbox"><var>arr</var>.some(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>用來測試每一個元素的函式，它包含三個引數：
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>目前正要被處理的陣列元素。</dd>
  <dt><code>index{{Optional_inline}}</code></dt>
  <dd>目前正要被處理的陣列元素之索引值。</dd>
  <dt><code>array{{Optional_inline}}</code></dt>
  <dd>呼叫 <code>some()</code> 的陣列。</dd>
 </dl>
 </dd>
 <dt><code>thisArg{{Optional_inline}}</code></dt>
 <dd>執行 <code>callback</code> 回呼函式的 <code>this</code> 值。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>若回呼函式在處理任何一個陣列元素時得到 {{Glossary("truthy")}} 值，則回傳 <code><strong>true</strong></code>。否則，回傳值為 <code><strong>false</strong></code>。</p>

<h2 id="描述">描述</h2>

<p>The <code>some()</code> method executes the <code>callback</code> function once for each element present in the array until it finds the one where <code>callback</code> returns a <em>truthy</em> value (a value that becomes true when converted to a Boolean). If such an element is found, <code>some()</code> immediately returns <code>true</code>. Otherwise, <code>some()</code> returns <code>false</code>. <code>callback</code> is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.</p>

<p><code>callback</code> is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.</p>

<p>If a <code>thisArg</code> parameter is provided to <code>some()</code>, it will be used as the callback's <code>this</code> value. Otherwise, the value {{jsxref("undefined")}} will be used as its <code>this</code> value. The <code>this</code> value ultimately observable by <code>callback</code> is determined according to <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for determining the <code>this</code> seen by a function</a>.</p>

<p><code>some()</code> does not mutate the array on which it is called.</p>

<p>The range of elements processed by <code>some()</code> is set before the first invocation of <code>callback</code>. Elements appended to the array after the call to <code>some()</code> begins will not be visited by <code>callback</code>. If an existing, unvisited element of the array is changed by <code>callback</code>, its value passed to the visiting <code>callback</code> will be the value at the time that <code>some()</code> visits that element's index. Elements that are deleted are not visited.</p>

<h2 id="範例">範例</h2>

<h3 id="測試陣列元素的數值">測試陣列元素的數值</h3>

<p>以下範例將測試是否最少有一個元素的數值大於 10。</p>

<pre class="brush: js">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true</pre>

<p>{{ EmbedLiveSample('Testing_value_of_array_elements', '', '', '', 'Web/JavaScript/Reference/Global_Objects/Array/some') }}</p>

<h3 id="使用箭頭函式測試">使用箭頭函式測試</h3>

<p><a href="/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions">箭頭函式</a>能給相同的測試，提供更簡潔的語法。</p>

<pre class="brush: js">[2, 5, 8, 1, 4].some(x =&gt; x &gt; 10); //false
[12, 5, 8, 1, 4].some(x =&gt; x &gt; 10); // true</pre>

<p>{{ EmbedLiveSample('Testing_array_elements_using_arrow_functions', '', '', '', 'Web/JavaScript/Reference/Global_Objects/Array/some') }}</p>

<h3 id="測試陣列元素的數值是否存在">測試陣列元素的數值是否存在</h3>

<p>To mimic the function of the <code>includes()</code> method, this custom function returns <code>true</code> if the element exists in the array:</p>

<pre class="brush: js">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<p>{{ EmbedLiveSample('Checking_whether_a_value_exists_in_an_array', '', '', '', 'Web/JavaScript/Reference/Global_Objects/Array/some') }}</p>

<h3 id="Checking_whether_a_value_exists_using_an_arrow_function">Checking whether a value exists using an arrow function</h3>

<pre class="brush: js">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal =&gt; val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<p>{{ EmbedLiveSample('Checking_whether_a_value_exists_using_an_arrow_function', '', '', '', 'Experiment:StaticExamplesOnTop/JavaScript/Array/some') }}</p>

<h3 id="Converting_any_value_to_Boolean">Converting any value to Boolean</h3>

<pre class="brush: js">const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true</pre>

<p>{{ EmbedLiveSample('Converting_any_value_to_Boolean', '', '', '', 'Web/JavaScript/Reference/Global_Objects/Array/some') }}</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>some()</code> was added to the ECMA-262 standard in the 5th edition, and it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of <code>some()</code> in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}} and {{jsxref("TypeError")}} have their original values and that <code>fun.call</code> evaluates to the original value of {{jsxref("Function.prototype.call()")}}.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length &gt;&gt;&gt; 0;

    for (var i = 0; i &lt; len; i++) {
      if (i in t &amp;&amp; fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
</pre>

<p>{{ EmbedLiveSample('Polyfill', '', '', '', 'Web/JavaScript/Reference/Global_Objects/Array/some') }}</p>


<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.some")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
</ul>
