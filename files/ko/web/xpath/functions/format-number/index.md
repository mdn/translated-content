---
title: format-number
slug: Web/XPath/Functions/format-number
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/format-number
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>format-number</code> 함수는 수를 평가하고 제공한 형식으로 그 수를 나타내는 문자열을 반환합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre class="eval">format-number(<i>number</i> ,<i>pattern</i> [,<i>decimal-format</i>] )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <code>
  <i>
   number</i>
  </code></dt>
 <dd>
  형식을 지정할 수</dd>
</dl>
<dl>
 <dt>
  <code>
  <i>
   pattern</i>
  </code></dt>
 <dd>
  JDK 1.1 <a class="external" href="http://java.sun.com/products/jdk/1.1/docs/api/java.text.DecimalFormat.html">Decimal Format</a> 클래스 형식의 문자열.</dd>
</dl>
<dl>
 <dt>
  <code>
  <i>
   decimal-format</i>
  </code> (선택사항)</dt>
 <dd>
  쓸 수 형식을 정의하는 <code><a href="ko/XSLT/decimal-format"> xsl:decimal-format</a></code> 요소의 이름. 빼면, 기본 decimal-format을 씁니다.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>새 형식으로 수를 나타내는 문자열.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<p>이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#function-format-number">XSLT 1.0 12.3</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
