---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
---
<div>{{jsSidebar("Objects")}}</div>

<p>全域屬性 <code><strong>NaN</strong></code> 表示「非數值」（Not-A-Number）的數值。</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}</div>

<h2 id="語法">語法</h2>

<pre class="syntaxbox"><code>NaN</code></pre>

<h2 id="描述">描述</h2>

<p><code>NaN</code> 的屬性屬於<em>全域物件</em>。</p>

<p>如同 {{jsxref("Number.NaN")}} 一般，<code>NaN</code> 的初始數值是「非數值」。在當今的瀏覽器中，<code>NaN</code> 屬性不可設定（non-configurable）也不可覆寫（non-writable）。雖然可能有例外，也請不要覆蓋它。</p>

<p>寫程式很少會直接動用 <code>NaN</code>。通常是在 {{jsxref("Math")}} 函式計算失敗（<code>Math.sqrt(-1)</code>）或函式解析數字失敗（<code>parseInt("blabla")</code>）後才會回傳。</p>

<h3 id="偵測是否為_NaN">偵測是否為 <code>NaN</code></h3>

<p><code>NaN</code> 不等於（<code>==</code>、<code>!=</code>、<code>===</code>、<code>!==</code>）任何值，包括 NaN 本身。請使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 來確認某個數值是否為 NaN。Or perform a self-comparison: NaN, and only NaN, will compare unequal to itself.</p>

<pre class="brush: js">NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
</pre>

<p>但請注意 <code>isNaN()</code> 與 <code>Number.isNaN()</code> 之間是有區別的：前者會在目前數字是 <code>NaN</code> 的時候回傳 <code>true</code>，或在裡面包藏一個號碼後變成 <code>NaN</code>；而後者，只有在數值是 <code>NaN</code> 的時候才會回傳 <code>true</code>。</p>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<p>{{Compat("javascript.builtins.NaN")}}</p>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Number.NaN")}}</li>
 <li>{{jsxref("Number.isNaN()")}}</li>
 <li>{{jsxref("isNaN", "isNaN()")}}</li>
</ul>
