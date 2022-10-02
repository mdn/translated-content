---
title: Transforming XML with XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
tags:
  - MDC Project
  - NeedsMigration
  - Transforming_XML_with_XSLT
  - XSLT
translation_of: Web/XSLT/Transforming_XML_with_XSLT
---
<h3 id=".EA.B0.9C.EC.9A.94"> <a href="ko/Transforming_XML_with_XSLT/An_Overview">개요</a> </h3>
<p>내용과 겉모양의 분리가 <a href="ko/XML">XML</a>의 중요한 설계 특징입니다. XML 문서 구조는 결국 이 데이터를 어떻게 표시하는 게 좋을지에 관한 어떤 암시를 줄 필요로 방해받지 않은 내용 자체의 서로 다른 면(aspect) 사이의 중요한 관계를 반영하고 명확히 하기 위해 설계했습니다. 이 지적인 구조화는 데이터 전송이 더욱 자동화되는 것만큼 특히 중요하고 네트워크로 연결된 매우 이질적인 컴퓨터 사이에 일어난다.
</p><p>아직은 결국 XML 문서에 저장된 많은 내용을 읽는 사람에게 표시할 필요가 있습니다. 왜냐하면 브라우저가 친근하고 유연성이 높은 인터페이스를 제공하기 때문에, 그것은 XML 내용의 표시 버전 같은 이상적인 전달 메커니즘입니다. 철저하게 아주 다양한 XML 기술을 이용하게 만들었기 때문에, Mozilla는 원 XML 문서와 스타일 입히기와 클라이언트 측 처리로 인한 서버 부담을 줄이기 위해 HTML 표시에 그들을 놓기로 쓰는 특수 스타일시트 둘 다를 처리할 필요가 있는 모든 메커니즘을 자체에 통합시킵니다.
</p><p>오늘날, Gecko(the layout engine behind Mozilla와 Firefox)는 두 형태(form)의 XML 스타일시트를 지원합니다. 겉모습(글꼴, 색, 자리들)의 기본 조절을 위해 Gecko는 <a href="ko/DHTML">DHTML</a>과 친근한 <a href="ko/CSS">CSS</a>를 씁니다. CSS1 전부와 CSS2 대부분을 지원합니다. 최근 생겨난 CSS3 표준 지원은 개발중입니다. CSS에 관한 추가 정보는 <a class="external" href="http://www.meyerweb.com/eric/css/">Eric Meyer's CSS pages</a>를 보시기 바랍니다.
</p><p>여기서 우리의 관심은 Gecko가 지원하는 스타일시트의 두 번째 형태인 XSLT 스타일시트에 대해서입니다. XSLT는 eXtensible Stylesheet Language/Transform을 나타내고 그 이름은 적절합니다. XSLT는 스타일시트 만든 이가 그러길 바란다면 컨텐트를 모조리 다시 정리하고 다른 형식으로 변환하는 것을 포함하는 컨텐트 조작(manipulating)과 정렬이라는 중요한 두 방식으로 본래 XML 문서를 변환하게 합니다(그리고 Mozilla의 경우에, 초점은 브라우저에 표시될 수 있는 HTML로 즉시 변환하는 데 있습니다).
</p>
<h3 id="XSLT.2FXPath_.EC.B0.B8.EC.A1.B0"> XSLT/XPath 참조 </h3>
<h4 id=".EC.9A.94.EC.86.8C"> <a href="ko/XSLT/Elements">요소</a> </h4>
<ul><li> <a href="ko/XSLT/apply-imports">xsl:apply-imports</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/apply-templates">xsl:apply-templates</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/attribute">xsl:attribute</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/attribute-set">xsl:attribute-set</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/call-template">xsl:call-template</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/choose">xsl:choose</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/comment">xsl:comment</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/copy">xsl:copy</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/copy-of">xsl:copy-of</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/decimal-format">xsl:decimal-format</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/element">xsl:element</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/fallback">xsl:fallback</a> <i>(지원 안 함)</i>
</li><li> <a href="ko/XSLT/for-each">xsl:for-each</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/if">xsl:if</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/import">xsl:import</a> <i>(대부분 지원)</i>
</li><li> <a href="ko/XSLT/include">xsl:include</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/key">xsl:key</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/message">xsl:message</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/namespace-alias">xsl:namespace-alias</a> <i>(지원 안 함)</i>
</li><li> <a href="ko/XSLT/number">xsl:number</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XSLT/otherwise">xsl:otherwise</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/output">xsl:output</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XSLT/param">xsl:param</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/preserve-space">xsl:preserve-space</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/processing-instruction">xsl:processing-instruction</a> </li><li> <a href="ko/XSLT/sort">xsl:sort</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/strip-space">xsl:strip-space</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/stylesheet">xsl:stylesheet</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XSLT/template">xsl:template</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/text">xsl:text</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XSLT/transform">xsl:transform</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/value-of">xsl:value-of</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XSLT/variable">xsl:variable</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/when">xsl:when</a> <i>(지원함)</i>
</li><li> <a href="ko/XSLT/with-param">xsl:with-param</a> <i>(지원함)</i>
</li></ul>
<h4 id=".EC.B6.95"> <a href="ko/XPath/Axes">축</a> </h4>
<ul><li> <a href="ko/XPath/Axes/ancestor">ancestor</a> </li><li> <a href="ko/XPath/Axes/ancestor-or-self">ancestor-or-self</a> </li><li> <a href="ko/XPath/Axes/attribute">attribute</a> </li><li> <a href="ko/XPath/Axes/child">child</a> </li><li> <a href="ko/XPath/Axes/descendant">descendant</a> </li><li> <a href="ko/XPath/Axes/descendant-or-self">descendant-or-self</a> </li><li> <a href="ko/XPath/Axes/following">following</a> </li><li> <a href="ko/XPath/Axes/following-sibling">following-sibling</a> </li><li> <a href="ko/XPath/Axes/namespace">namespace</a> <i>(지원 안 함)</i>
</li><li> <a href="ko/XPath/Axes/parent">parent</a> </li><li> <a href="ko/XPath/Axes/preceding">preceding</a> </li><li> <a href="ko/XPath/Axes/preceding-sibling">preceding-sibling</a> </li><li> <a href="ko/XPath/Axes/self">self</a>
</li></ul>
<h4 id=".ED.95.A8.EC.88.98"> <a href="ko/XPath/Functions">함수</a> </h4>
<ul><li> <a href="ko/XPath/Functions/boolean">boolean()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/ceiling">ceiling()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/concat">concat()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/contains">contains()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/count">count()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/current">current()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/document">document()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/element-available">element-available()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/false">false()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/floor">floor()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/format-number">format-number()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/function-available">function-available()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/generate-id">generate-id()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/id">id()</a> <i>(부분 지원)</i>
</li><li> <a href="ko/XPath/Functions/key">key()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/lang">lang()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/last">last()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/local-name">local-name()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/name">name()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/namespace-uri">namespace-uri()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/normalize-space">normalize-space()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/not">not()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/number">number()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/position">position()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/round">round()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/starts-with">starts-with()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/string">string()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/string-length">string-lenght()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/substring">substring()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/substring-after">substring-after()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/substring-before">substring-before()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/sum">sum()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/system-property">system-property()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/translate">translate()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/true">true()</a> <i>(지원함)</i>
</li><li> <a href="ko/XPath/Functions/unparsed-entity-url">unparsed-entity-url()</a> <i>(지원 안 함)</i>
</li></ul>
<h3 id=".EB.8D.94_.EC.9D.BD.EC.9D.84_.EA.B1.B0.EB.A6.AC"> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading">더 읽을 거리</a> </h3>
<ul><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Books">Books</a> </li><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Online">Online</a> <ul><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium">The World Wide Web Consortium</a> </li><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Portals">Portals</a> </li><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Articles">Articles</a> </li><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples">Tutorials/Examples</a> </li><li> <a href="ko/Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups">Mailing Lists/Newsgroups</a>
</li></ul>
</li></ul>
<h3 id=".EC.B0.BE.EC.95.84.EB.B3.B4.EA.B8.B0"> <a href="ko/Transforming_XML_with_XSLT/Index">찾아보기</a> </h3>
<div class="originaldocinfo">
<h3 id=".EC.9B.90.EB.B3.B8_.EB.AC.B8.EC.84.9C_.EC.A0.95.EB.B3.B4"> 원본 문서 정보 </h3>
<ul><li> 저작권 정보: Copyright © 2001-2003 Netscape. All rights reserved.
</li><li> 주의: 이 재판 article은 원래 DevEdge 사이트 부분이었습니다.
</li></ul>
</div>
