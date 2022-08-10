---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/species
---
<div>{{JSRef}}</div>

<p>知名的<strong> </strong><code><strong>Symbol.species</strong></code> 是个函数值属性，其被构造函数用以创建派生对象。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-species.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="描述">描述</h2>

<p>species 访问器属性允许子类覆盖对象的默认构造函数。</p>

<h2 id="示例">示例</h2>

<p>你可能想在扩展数组类 <code>MyArray </code>上返回 {{jsxref("Array")}} 对象。 例如，当使用例如 {{jsxref("Array.map", "map()")}} 这样的方法返回默认的构造函数时，你希望这些方法能够返回父级的 Array 对象，以取代 <code>MyArray</code> 对象。<code>Symbol.species</code> 允许你这么做：</p>

<pre class="brush: js">class MyArray extends Array {
  // 覆盖 species 到父级的 Array 构造函数上
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x =&gt; x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Map.@@species", "Map[@@species]")}}</li>
 <li>{{jsxref("Set.@@species", "Set[@@species]")}}</li>
</ul>
