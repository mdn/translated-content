---
title: jQuery
slug: Glossary/jQuery
translation_of: Glossary/jQuery
---
<p>jQuery 是專精於簡化 {{Glossary("DOM")}}、{{Glossary("AJAX")}}、與 {{Glossary("Event")}} 操作的 {{Glossary("JavaScript")}} {{Glossary("函式庫")}}。</p>

<p>jQuery 用 <code>$(selector).action()</code> 格式，指派元素到指定的事件。詳細來說， <code>$(selector)</code> 會呼叫 jQuery 選取 <code>selector</code> 元素，並指派它到稱作 <code>.action()</code> 事件的 {{Glossary("API")}}。</p>

<pre class="brush: js"><code class="language-js">$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});</code></pre>

<p>上面這段 jQuery 程式碼，會執行與這段原生 JavaScript 程式碼相同的事情：</p>

<pre class="brush: js">window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};</pre>

<p>或這段：</p>

<pre class="brush: js">window.addEventListener("load", () =&gt; {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});</pre>

<h2 id="深入理解">深入理解</h2>

<h3 id="基本知識">基本知識</h3>

<ul>
 <li>維基百科的 {{Interwiki("wikipedia", "jQuery")}}</li>
 <li><a href="https://jquery.com/">jQuery 官方網站</a></li>
</ul>

<h3 id="技術資訊">技術資訊</h3>

<ul>
 <li><a href="https://api.jquery.com/">API 參考文件</a></li>
</ul>
