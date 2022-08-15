---
title: ceiling
slug: Web/XPath/Functions/ceiling
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/ceiling
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>ceiling</code> 함수는 10진수를 평가하고 10진수보다 작지 않은 가장 작은 정수를 반환합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre class="eval">ceiling(<i>number</i> )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <code>
  <i>
   number</i>
  </code></dt>
 <dd>
  평가할 수.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p><code>
 <i>
  number</i>
 </code>보다 작지 않은 가장 작은 정수.</p>
<p>예를 들어,</p>
<p><code>    ceiling (
 <i>
  5.2</i>
 )</code> = <var>6</var></p>
<p><code>    ceiling (
 <i>
  -5.2</i>
 )</code> = <var>-5</var></p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-ceiling">XPath 1.0 4.4</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
