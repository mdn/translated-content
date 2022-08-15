---
title: document
slug: Web/XPath/Functions/document
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/document
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>document</code> 함수는 하나 또는 여러 외부 문서에서 노드 집합을 찾고 결과 노드 집합을 반환합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre class="eval">document(<i>URI</i> [,<i>node-set</i>] )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <code>
  <i>
   URI</i>
  </code></dt>
 <dd>
  검색하는 문서의 절대 또는 상대 URI. URI는 또한 조각 인식자(fragment identifier)를 포함할지도 모릅니다.</dd>
</dl>
<dl>
 <dt>
  <code>
  <i>
   node-set</i>
  </code> (선택사항)</dt>
 <dd>
  반환하게 될 외부 문서의 노드 집합을 가리키는 식.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>노드 집합.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<ul>
 <li>URI가 조각 인식자를 포함하고 그 조각이 외부 문서에서 인식될 수 있으면, 그 조각은 <code>
  <i>
   node-set</i>
  </code> 인수식에서 루트로 다룹니다. <code>
  <i>
   node-set</i>
  </code> 인수를 빼면, 전체 조각을 반환합니다.</li>
</ul>
<ul>
 <li><code>
  <i>
   URI</i>
  </code> 인수가 노드 집합이고 두 번째 인수가 있으면, 노드 집합의 각 노드를 개별 URI로 평가하고 반환한 노드 집합은 마치 <code>document</code> 함수가 여러 번 호출되어 결과 노드 집합이 단일 노드 집합으로 합쳐진 것 같이 됩니다.</li>
</ul>
<ul>
 <li>다른 특정 조건은 지정한 behavior와 함께 있습니다. 자세한 사항은 XSLT 1.0 문서를 보세요.</li>
</ul>
<ul>
 <li>URI가 XSL 문서와 호응하기 때문에, <code>document("")</code>는 현재 노드의 루트 노드를 반환할 겁니다.</li>
</ul>
<p>이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#function-document">XSLT 1.0 12.1</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
