---
title: starts-with
slug: Web/XPath/Functions/starts-with
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/starts-with
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>starts-with</code> 함수는 첫 번째 문자열이 두 번째 문자열로 시작하는 지를 확인한 뒤 true나 false를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">starts-with(<i>haystack</i> ,<i>needle</i>)
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <i>
   <code>haystack</code></i>
 </dt>
 <dd>
  들여다볼(look in) 문자열.</dd>
</dl>
<dl>
 <dt>
  <i>
   <code>needle</code></i>
 </dt>
 <dd>
  찾을(look for) 문자열.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>만약
 <i>
  <code>haystack</code></i>
 이
 <i>
  <code>needle</code></i>
 로 시작하면 <code>true</code>. 그렇지 않으면, <code>false</code>.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-starts-with">XPath 1.0 4.2</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
