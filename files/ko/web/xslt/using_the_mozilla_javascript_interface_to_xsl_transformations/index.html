---
title: Using the Mozilla JavaScript interface to XSL Transformations
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
tags:
  - XSLT
translation_of: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
---
<p>이 문서는 Mozilla 1.2의 JavaScript 인터페이스부터 XSLT 처리 엔진(TransforMiiX)까지 설명합니다.</p>
<h3 id="XSLTProcessor_.EB.A7.8C.EB.93.A4.EA.B8.B0" name="XSLTProcessor_.EB.A7.8C.EB.93.A4.EA.B8.B0">XSLTProcessor 만들기</h3>
<p>시작하기 위해, <a href="ko/XSLTProcessor">XSLTProcessor</a> 개체 만들기가 필요합니다.</p>
<pre class="eval">var processor = new XSLTProcessor();
</pre>
<h3 id=".EC.8A.A4.ED.83.80.EC.9D.BC.EC.8B.9C.ED.8A.B8_.EC.A7.80.EC.A0.95.ED.95.98.EA.B8.B0" name=".EC.8A.A4.ED.83.80.EC.9D.BC.EC.8B.9C.ED.8A.B8_.EC.A7.80.EC.A0.95.ED.95.98.EA.B8.B0">스타일시트 지정하기</h3>
<p>쓸 수 있으려면 그 전에 <code>importStylesheet()</code> 함수로 스타일시트를 가져와야(import) 합니다. 가져올 XSLT 스타일시트의 DOM 노드인 매개변수가 하나 있습니다. 가져오기는 동적임을 (가져온 뒤로 스타일시트 DOM을 바꾸면, 이는 처리에 반영됨을 뜻함) 주의하세요. 그러나 DOM 수정 대신 스타일시트 매개변수 사용을 권장합니다. 이는 보통 더 쉽고 더 나은 성능을 줄 수 있습니다.</p>
<pre>var testTransform = document.implementation.createDocument("", "test", null);
// just an example to get a transform into a script as a DOM
// XMLDocument.load is asynchronous, so all processing happens in the
// onload handler
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
</pre>
<p><code>importStylesheet</code>는 DOM 노드인 인수가 하나 필요합니다. 그 노드가 문서 노드면 전체 XSL Transform이나 <a class="external" href="http://www.w3.org/TR/xslt#result-element-stylesheet">literal result element transform</a>에 넘길 수 있습니다, 그렇지 않으면 &lt;tt&gt;xsl:stylesheet&lt;/tt&gt;나 &lt;tt&gt;xsl:transform&lt;/tt&gt; 요소이어야 합니다.</p>
<h3 id=".EB.AC.B8.EC.84.9C_.EB.B3.80.ED.99.98.ED.95.98.EA.B8.B0" name=".EB.AC.B8.EC.84.9C_.EB.B3.80.ED.99.98.ED.95.98.EA.B8.B0">문서 변환하기</h3>
<p>지정한 XSLT 스타일시트를 써서 문서를 변환하기 위해 <a href="#transformToDocument"><code>transformToDocument()</code></a>나 <a href="#transformToFragment"><code>transformToFragment()</code></a> 메소드를 쓸 수 있습니다.</p>
<h4 id="transformToDocument" name="transformToDocument">transformToDocument</h4>
<p><code>transformToDocument()</code>는 변환할 소스 노드인 인수를 하나 취하고 변환 결과를 갖는 새 DOM <code>Document</code>를 반환합니다.</p>
<pre class="eval">var newDocument = processor.transformToDocument(domToBeTransformed);
</pre>
<p>결과 개체는 스타일시트의 <a class="external" href="http://www.w3.org/TR/xslt#output">output 메소드</a>가 &lt;tt&gt;html&lt;/tt&gt;이면 <code>HTMLDocument</code>, &lt;tt&gt;xml&lt;/tt&gt;이면 <code>XMLDocument</code>, &lt;tt&gt;text&lt;/tt&gt;이면 자식이 text인 단일 루트 요소 <code>&lt;transformiix:result&gt;</code>를 갖는 <code>XMLDocument</code>입니다.</p>
<h4 id="transformToFragment" name="transformToFragment">transformToFragment</h4>
<p>또한 DOM <code>DocumentFragment</code> 노드를 반환하는 <code>transformToFragment()</code>를 쓸 수 있습니다. 이는 조각(fragment)을 다른 노드에 투명하게 추가함이 그 조각의 자손 모두를 추가하고 조각 자체는 합치지(merge) 않기 때문에 편리합니다. 그러므로 조각은 여기저기 노드 옮기기와 전체 문서 개체의 overhead 없이 저장하기에 쓸모가 있습니다.</p>
<p><code>transformToFragment</code>는 인수 둘을 취합니다. 변환할 소스 문서(위와 같이)와 조각(조각 모두는 문서가 소유해야 합니다)를 소유하는 <code>Document</code> 개체.</p>
<pre class="eval">var ownerDocument = document.implementation.createDocument("", "test", null);
var newFragment = processor.transformToFragment(domToBeTransformed, ownerDocument);
</pre>
<p><code>transformToFragment</code>는 소유자 문서 자신이 <code>HTMLDocument</code>이거나 스타일시트의 output 메소드가 HTML이면 오직 HTML DOM 개체를 만들어냅니다. 다만 결과의 최상위 요소가 <code>transformToFragment</code>로 이 요소를 만드는 데 좀처럼 쓰지 않는 <code>&lt;html&gt;</code>이면 HTML DOM 개체를 만들어내지 <b>않</b>습니다. 이를 재정의(override)하고 싶으면, 보통은 표준 방식으로 output 메소드를 설정할 수 있습니다.</p>
<h3 id=".EB.A7.A4.EA.B0.9C.EB.B3.80.EC.88.98_.EC.84.A4.EC.A0.95" name=".EB.A7.A4.EA.B0.9C.EB.B3.80.EC.88.98_.EC.84.A4.EC.A0.95">매개변수 설정</h3>
<p><code>setParameter</code>, <code>getParameter</code>, <code>removeParameter</code> 메소드를 써서 <a class="external" href="http://www.w3.org/TR/xslt#variables">parameters for the stylesheet</a>를 조절할 수 있습니다. 이들은 모두 <code>setParameter</code> 메소드는 세 번째도 취하면서 처음 두 매개변수로 이름공간 URI와 지역명을 설정한 매개변수 값을 취합니다.</p>
<h3 id=".EC.9E.AC.EC.84.A4.EC.A0.95" name=".EC.9E.AC.EC.84.A4.EC.A0.95">재설정</h3>
<p><code>XSLTProcessor</code> 개체는 또한 모든 스타일시트와 매개변수를 제거하고 처리기(processor)를 초기 상태로 되돌리는 데 쓸 수 있는 <code>reset()</code> 메소드를 구현합니다. 이 메소드는 <a href="ko/Gecko">Mozilla</a> 1.3과 그 뒤에 구현됩니다.</p>
<h3 id="Resources" name="Resources">Resources</h3>
<ul>
 <li><a href="https://dxr.mozilla.org/mozilla-central/source/content/xslt/public/nsIXSLTProcessor.idl" rel="custom">nsIXSLTProcessor.idl</a>는 항상 <code>XSLTProcessor</code> 개체의 실제 인터페이스를 반영합니다.
  <ul>
   <li><a class="external" href="http://xulplanet.com/references/objref/XSLTProcessor.html">A XULPlanet reference page</a>.</li>
  </ul>
 </li>
 <li><a class="external" href="http://lxr.mozilla.org/seamonkey/source/content/xslt/public/nsIXSLTProcessorObsolete.idl">The nsIXMLProcessorObsolete IDL file</a> <span class="icon-only-inline" title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span>: 1.2판보다 앞서는 Mozilla의 JS 인터페이스.</li>
</ul>
<div class="originaldocinfo">
 <h3 id=".EC.9B.90.EB.B3.B8_.EB.AC.B8.EC.84.9C_.EC.A0.95.EB.B3.B4" name=".EC.9B.90.EB.B3.B8_.EB.AC.B8.EC.84.9C_.EC.A0.95.EB.B3.B4">원본 문서 정보</h3>
 <ul>
  <li>저자: <a class="link-mailto" href="mailto:mike@theoretic.com">Mike Hearn</a></li>
  <li>최종 업데이트: December 21, 2005</li>
  <li>저작권 정보: Copyright (C) Mike Hearn</li>
 </ul>
</div>
