---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
tags:
  - ECMAScript 2015
  - JavaScript
  - 原型
  - 方法
  - 迭代器
  - 集合
translation_of: Web/JavaScript/Reference/Global_Objects/Set/values
---
<div>{{JSRef}}</div>

<p><code><strong>values()</strong></code> 方法回傳一個 <code>Iterator</code> 物件，包含著 <code>Set</code> 物件中所有元素，由插入順序排序。</p>

<p><strong><code>keys()</code></strong> 是這個方法的替身 (為了與 {{jsxref("Map")}} 物件保持相似性)；他運行的完全一模一樣，回傳 <code>Set</code> 中元素的 <strong>values</strong> 。</p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}</div>



<h2 id="語法">語法</h2>

<pre class="syntaxbox"><code><em>mySet</em>.values();
</code></pre>

<h3 id="回傳值">回傳值</h3>

<p>一個 <code>Iterator</code> 物件，包含著 <code>Set</code> 物件中所有元素，由插入順序排序。</p>

<h2 id="範例">範例</h2>

<h3 id="使用_values()">使用 <code>values()</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("javascript.builtins.Set.values")}}</p>

<h2 id="另見">另見</h2>

<ul>
 <li>{{jsxref("Set.prototype.entries()")}}</li>
</ul>
