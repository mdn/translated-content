---
title: position
slug: Web/XPath/Functions/position
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/position
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>position</code> 함수는 식 평가 문맥(expression evaluation context)와 위치가 같은 숫자를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">position()
</pre>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>식 평가 문맥과 위치가 같은 정수.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<ul>
 <li>문맥 안 노드의 위치는 0 기반이 아님을 주의하세요. 첫 노드는 위치가 1입니다.</li>
</ul>
<ul>
 <li>문맥은 경로의 나머지로 결정됩니다.</li>
</ul>
<pre class="eval">&lt;xsl:template match="//a[position() = 5"&gt;
 &lt;!-- 이 템플릿은 문서 안 다섯 번째 a 요소와 일치합니다. --&gt;
&lt;/xsl:template&gt;
</pre>
<pre class="eval">&lt;xsl:template match="//div[@class='foo']/bar[position() = 1]"&gt;
 &lt;!-- 이 템플릿은 class 속성이 "foo"이고 div 요소의 자식인 첫 번째 bar 요소와 일치합니다 --&gt;
&lt;/xsl:template&gt;
</pre>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-position">XPath 1.0 4.1</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
