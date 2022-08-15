---
title: 'false'
slug: Web/XPath/Functions/false
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/false
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>false</code> 함수는 boolean false를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">false()
</pre>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>Boolean <code>false</code>.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<p>이 함수는 비교(comparison)하는 부분에 쓸모가 있습니다.</p>
<pre class="eval">&lt;xsl:if test="boolean((1 &amp;gt; 2) = false())"&gt;
 The expression evaluates as true
&lt;/xsl:if&gt;
</pre>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-false">XPath 1.0 4.3</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
