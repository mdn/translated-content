---
title: jQuery
slug: Glossary/jQuery
tags:
  - 자바스크립트
  - 제이쿼리
translation_of: Glossary/jQuery
---
<p><strong>jQuery</strong>는 {{Glossary("DOM")}}조작의 단순화, {{Glossary("AJAX")}}호출, {{Glossary("Event")}}핸들링에 초점을 맞춘 {{Glossary("JavaScript")}} {{Glossary("Library")}}다.  자바스크립트 개발자가 자주 사용한다. </p>

<p>jQuery는 element(s)에 이벤트를 할당하기 위해 <code>$(selector).action()</code> 포맷을 사용합니다. 더 자세히 설명하자면, <code>$(selector)</code>는 <code>selector</code> element(s)를 선택하기 위해서 jQuery를 호출하며, <code>.action()</code> 라 불리는 {{Glossary("API")}}이벤트에 할당합니다.</p>

<pre class="brush: js"><code class="language-js">$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});</code></pre>

<p>위의 코드는 아래의 코드와 같은 역할을 합니다:</p>

<pre class="brush: js"><code class="language-js">window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};</code></pre>

<h2 id="jQuery_사용하기.">jQuery 사용하기.</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><strong>npm</strong></th>
   <th scope="col">bower (solo file)</th>
   <th scope="col">Google CDN</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>npm install jquery</code></td>
   <td><code>bower install https://code.jquery.com/jquery-3.2.1.min.js</code></td>
   <td><code>https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js</code></td>
  </tr>
 </tbody>
</table>

<h2 id="더보기">더보기</h2>

<h3 id="General_knowledge">General knowledge</h3>

<ul>
 <li><a href="https://ko.wikipedia.org/wiki/JQuery">jQuery</a> on Wikipedia</li>
 <li><a href="https://jquery.com/">jQuery Official Website</a></li>
</ul>

<h3 id="Technical_information">Technical information</h3>

<ul>
 <li><a href="https://api.jquery.com/">API reference documentation</a><a href="https://api.jquery.com/"> </a></li>
</ul>
