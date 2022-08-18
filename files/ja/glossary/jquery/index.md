---
title: jQuery
slug: Glossary/jQuery
tags:
  - Glossary
  - JQuery
  - JavaScript
translation_of: Glossary/jQuery
---
<p><span class="seoSummary"><strong>jQuery</strong> は {{Glossary("JavaScript")}} {{Glossary("Library", "ライブラリー")}} であり、{{Glossary("DOM")}} 操作を簡単にすること、{{Glossary("AJAX")}} 呼び出し、{{Glossary("Event", "イベント")}} ハンドリングに注力しています。</span></p>

<p>jQuery は <code>$(selector).action()</code> というフォーマットを使って要素をイベントに割り当てます。詳しく説明すると、<code>$(selector)</code> が jQuery を呼び出して <code>selector</code> 要素を選択し、  <code>.action()</code>というイベント {{Glossary("API")}} に割り当てます。</p>

<pre class="brush: js notranslate">$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});</pre>

<p>上のコードは下のコードと同じ関数を実行します:</p>

<pre class="brush: js notranslate">window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};</pre>

<p>または</p>

<pre class="brush: js notranslate">window.addEventListener("load", () =&gt; {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});</pre>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の {{Interwiki("wikipedia", "jQuery")}}</li>
 <li><a href="https://jquery.com/">jQuery Official Website</a></li>
</ul>

<h3 id="Technical_information" name="Technical_information">技術情報</h3>

<ul>
 <li><a href="https://api.jquery.com/">API リファレンス文書</a><a href="https://api.jquery.com/"> </a></li>
</ul>
