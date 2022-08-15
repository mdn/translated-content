---
title: number
slug: Web/XPath/Functions/number
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/number
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>number</code> 함수는 개체를 숫자로 변환하고 그 숫자를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">number( [<i>object</i>] )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <i>
   <code>object</code></i>
  (optional)</dt>
 <dd>
  숫자로 변환할 개체.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>개체를 변환한 뒤 결과 숫자.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<ul>
 <li>문자열은 숫자 앞 문자열의 앞 공백 문자를 떼고(strip) 숫자 뒤의 것을 무시하여 숫자로 변환됩니다. 문자열이 패턴과 일치하지 않으면, 그 문자열은 NaN으로 변환됩니다.</li>
 <li>Boolean true는 1로 false는 0으로 변환됩니다.</li>
 <li>노드 집합은 먼저 as if by a call to the string function 문자열로 변환되고 나서 같은 식으로 문자열 인수로 변환됩니다.</li>
 <li>네 가지 기본 타입 말고 다른 타입의 개체는 그 타입에 의존하는 방법으로 숫자로 변환됩니다.</li>
</ul>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-number">XPath 1.0 4.4</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
