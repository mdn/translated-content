---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/element-available
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>element-available</code> 함수는 요소가 이용 가능한 지를 결정하고 true나 false를 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">element-available(<i>QName</i> )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <code>
  <i>
   QName</i>
  </code></dt>
 <dd>
  유효한 QName으로 평가해야 합니다. QName은 식 범위(scope)에서 이름공간 선언을 써서 확장 이름으로 확장됩니다.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>만약 확장 이름이 명령 이름이면 true를 반환합니다. 만약 확장 이름에 XSLT 이름공간 URI와 같은 이름공간 URI이 있으면, XSLT로 정의된 요소를 참조합니다. 그렇지 않으면, extension 요소를 참조합니다. 만약 확장 이름에 null 이름공간 URI가 있으면, element-available 함수는 false를 반환합니다.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#function-element-available">XSLT 1.0 15</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
