---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="訊息">訊息</h2>

<pre class="syntaxbox">SyntaxError: missing } after property list
</pre>

<h2 id="錯誤類型">錯誤類型</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="何處出錯">何處出錯?</h2>

<p>在物件初始化時，語法錯誤。  實際上可能遺漏一個大括號或是逗號。 例如， 同時檢查大括弧以及逗號是否以正確的順序關閉。 縮排或是有規則的排序代碼是有幫助您找出複雜的代碼錯誤。</p>

<h2 id="範例">範例</h2>

<h3 id="忘記逗號">忘記逗號</h3>

<p>有時候，在初始化物件時，缺少一個逗號：</p>

<pre class="brush: js example-bad">var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
</pre>

<p>Correct would be:</p>

<pre class="brush: js example-good">var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
</pre>

<h2 id="參見">參見</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
