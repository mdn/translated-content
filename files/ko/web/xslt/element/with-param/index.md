---
title: with-param
slug: Web/XSLT/Element/with-param
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element/with-param
original_slug: Web/XSLT/with-param
---
<p>{{ XsltRef() }}</p>
<p><code>&lt;xsl:with-param&gt;</code> 요소는 템플릿에 건네는 매개변수 값을 지정합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre>&lt;xsl:with-param name=NAME select=EXPRESSION&gt;
	TEMPLATE
&lt;/xsl:with-param&gt;</pre>
<h3 id=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1" name=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1">필수 속성</h3>
<dl>
 <dt>
  <code>name</code></dt>
 <dd>
  이 매개변수에 이름을 줍니다.</dd>
</dl>
<h3 id=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1" name=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1">선택 속성</h3>
<dl>
 <dt>
  <code>select</code></dt>
 <dd>
  XPath 식을 거치는 매개변수 값을 정의합니다. 요소가 템플릿을 포함하면, 이 속성은 무시합니다.</dd>
</dl>
<h3 id=".ED.83.80.EC.9E.85" name=".ED.83.80.EC.9E.85">타입</h3>
<p>하위명령, 항상 <code>&lt;xsl:apply-templates&gt;</code>이나 code&gt;&lt;xsl:call-template&gt;&lt;/code&gt; 요소 안에 나타남.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#section-Passing-Parameters-to-Templates">XSLT section 11.6, Passing Parameters to Templates</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
