---
title: Map.prototype[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
  - Prototype
  - Reference
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
---
<div>{{JSRef}}</div>

<p><strong><code>Map[@@toStringTag]</code></strong> プロパティは、 "Map" の初期値を持ちます。</p>

<div>{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0,0,1)}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Map[Symbol.toStringTag]</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toStringTag" name="Using_toStringTag">toStringTag の使用</h3>

<pre class="brush:js">Object.prototype.toString.call(new Map()) // "[object Map]"
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
   <td>{{SpecName('ESDraft', '#sec-map.prototype-@@tostringtag', 'Map.prototype[@@toStringTag]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Map.@@toStringTag")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Symbol.toStringTag")}}</li>
</ul>
