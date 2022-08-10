---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Map/@@species
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
browser-compat: javascript.builtins.Map.@@species
---
<div>{{JSRef}}</div>

<p><code><strong>Map[@@species]</strong></code> 访问器属性会返回一个 <code>Map</code> 构造函数。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">Map[Symbol.species]
</pre>

<h2 id="描述">描述</h2>

<p>The species accessor property returns the default constructor for <code>Map</code> objects. Subclass constructors may over-ride it to change the constructor assignment.</p>

<h2 id="案例">案例</h2>

<p>The species property returns the default constructor function, which is the <code>Map</code> constructor for <code>Map</code> objects:</p>

<pre class="brush: js">Map[Symbol.species]; // function Map()</pre>

<p>In a derived collection object (e.g. your custom map <code>MyMap</code>), the <code>MyMap</code> species is the <code>MyMap</code> constructor. However, you might want to overwrite this, in order to return parent <code>Map</code> objects in your derived class methods:</p>

<pre class="brush: js">class MyMap extends Map {
  // 重写覆盖 MyMap species to the parent Map constructor
  static get [Symbol.species]() { return Map; }
}</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
