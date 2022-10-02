---
title: Elements
slug: Web/XSLT/Element
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element
---
<p>{{ XsltRef() }} 여기에서 다루는 요소의 두 타입은 최상위 요소와 명령(instruction)입니다. 최상위 요소는 <code>&lt;xsl:stylesheet&gt;</code>나 <code>&lt;xsl:transform&gt;</code>의 자식으로 나타나야 합니다. 이에 반해, 명령은 템플릿과 관련이 있습니다. 스타일시트는 여러 템플릿을 포함할지도 모릅니다. 여기서 다루지 않는 세 번째 타입의 요소는 LRE(literal result element)입니다. LRE 또한 템플릿에 나타납니다. LRE는 예를 들어, HTML 변환 스타일시트 안의 <code>&lt;hr&gt;</code> 요소처럼 결과 문서에 복사되는게 좋은 어떤 비명령 요소로 이루어져 있습니다.</p>
<p>관련 기록에 따르면, LRE의 어떤 속성과 한정된 수의 XSLT 요소의 속성도 속성값 템플릿으로 알려진 것을 또한 포함할 수 있습니다. 속성값 템플릿은 단순히 속성값 지정에 쓰이는 임베드된 XPath 식을 포함하는 문자열입니다. 실행할 때 식을 평가하고 평가 결과는 XPath 식으로 바꾸어 놓습니다. 예를 들어, "&lt;tt&gt;image-dir&lt;/tt&gt;" 변수를 다음처럼 정의했다고 하면,</p>
<pre>&lt;xsl:variable name="image-dir"&gt;/images&lt;/xsl:variable&gt;</pre>
<p>평가된 식은 중괄호 안에 놓입니다.</p>
<pre>&lt;img src="{$image-dir}/mygraphic.jpg"/&gt;</pre>
<p>이는 다음과 같은 결론에 다다릅니다.</p>
<pre>&lt;img src="/images/mygraphic.jpg"/&gt;</pre>
<p>뒤따르는 요소 주석은 설명과 문법 나열, 필수 속성과 선택 속성 목록, 타입과 자리 설명, W3C 권고안 속 요소 소스와 현 Gecko의 지원 정도에 대한 설명을 포함합니다.</p>
<ul>
 <li><a href="ko/XSLT/apply-imports">xsl:apply-imports</a></li>
 <li><a href="ko/XSLT/apply-templates">xsl:apply-templates</a></li>
 <li><a href="ko/XSLT/attribute">xsl:attribute</a></li>
 <li><a href="ko/XSLT/attribute-set">xsl:attribute-set</a></li>
 <li><a href="ko/XSLT/call-template">xsl:call-template</a></li>
 <li><a href="ko/XSLT/choose">xsl:choose</a></li>
 <li><a href="ko/XSLT/comment">xsl:comment</a></li>
 <li><a href="ko/XSLT/copy">xsl:copy</a></li>
 <li><a href="ko/XSLT/copy-of">xsl:copy-of</a></li>
 <li><a href="ko/XSLT/decimal-format">xsl:decimal-format</a></li>
 <li><a href="ko/XSLT/element">xsl:element</a></li>
 <li><a href="ko/XSLT/fallback">xsl:fallback</a>
  <i>
   (지원 안 함)</i>
 </li>
 <li><a href="ko/XSLT/for-each">xsl:for-each</a></li>
 <li><a href="ko/XSLT/if">xsl:if</a></li>
 <li><a href="ko/XSLT/import">xsl:import</a>
  <i>
   (대부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/include">xsl:include</a></li>
 <li><a href="ko/XSLT/key">xsl:key</a></li>
 <li><a href="ko/XSLT/message">xsl:message</a></li>
 <li><a href="ko/XSLT/namespace-alias">xsl:namespace-alias</a>
  <i>
   (지원 안 함)</i>
 </li>
 <li><a href="ko/XSLT/number">xsl:number</a>
  <i>
   (부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/otherwise">xsl:otherwise</a></li>
 <li><a href="ko/XSLT/output">xsl:output</a>
  <i>
   (부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/param">xsl:param</a></li>
 <li><a href="ko/XSLT/preserve-space">xsl:preserve-space</a></li>
 <li><a href="ko/XSLT/processing-instruction">xsl:processing-instruction</a></li>
 <li><a href="ko/XSLT/sort">xsl:sort</a></li>
 <li><a href="ko/XSLT/strip-space">xsl:strip-space</a></li>
 <li><a href="ko/XSLT/stylesheet">xsl:stylesheet</a>
  <i>
   (부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/template">xsl:template</a></li>
 <li><a href="ko/XSLT/text">xsl:text</a>
  <i>
   (부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/transform">xsl:transform</a></li>
 <li><a href="ko/XSLT/value-of">xsl:value-of</a>
  <i>
   (부분 지원)</i>
 </li>
 <li><a href="ko/XSLT/variable">xsl:variable</a></li>
 <li><a href="ko/XSLT/when">xsl:when</a></li>
 <li><a href="ko/XSLT/with-param">xsl:with-param</a></li>
</ul>
