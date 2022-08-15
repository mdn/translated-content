---
title: contains
slug: Web/XPath/Functions/contains
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/contains
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>contains</code> 함수는 첫 번째 인수 문자열이 두 번째 인수 문자열을 포함하는지 결정하고 부울값 true 또는 false를 반환합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre class="eval">contains(<i>haystack</i> ,<i>needle</i> )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <code>
  <i>
   haystack</i>
  </code></dt>
 <dd>
  찾을 문자열</dd>
</dl>
<dl>
 <dt>
  <code>
  <i>
   needle</i>
  </code></dt>
 <dd>
  첫 번째 인수(<code>
  <i>
   haystack</i>
  </code>)에서 찾을 부분 문자열</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>첫 번째 인수(<code>
 <i>
  haystack</i>
 </code>)가 두 번째 인수(<code>
 <i>
  needle</i>
 </code>)를 포함하면 <code>true</code>. 그렇지 않으면, <code>false</code>.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-contains">XPath 1.0 4.2</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
