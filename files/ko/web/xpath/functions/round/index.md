---
title: round
slug: Web/XPath/Functions/round
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/round
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>round</code> 함수는 인수로 준 수에 가장 가까운 정수를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">round(<i>decimal</i> )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <i>
   <code>decimal</code></i>
 </dt>
 <dd>
  정수 처리(round)될 10진수.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>인수
 <i>
  <code>decimal</code></i>
 보다 작거나 크거나 같은 가장 가까운 정수.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<ul>
 <li>-0.5는 음수 0으로 0.4는 양수 0으로 정수 처리됩니다.</li>
</ul>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-round">XPath 1.0 4.4</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
