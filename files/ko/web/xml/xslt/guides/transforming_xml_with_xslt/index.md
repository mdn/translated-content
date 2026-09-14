---
title: Transforming XML with XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
original_slug: Web/XSLT/Transforming_XML_with_XSLT
---

{{XsltSidebar}}

### [개요](/ko/Transforming_XML_with_XSLT/An_Overview)

내용과 겉모양의 분리가 [XML](/ko/XML)의 중요한 설계 특징입니다. XML 문서 구조는 결국 이 데이터를 어떻게 표시하는 게 좋을지에 관한 어떤 암시를 줄 필요로 방해받지 않은 내용 자체의 서로 다른 면(aspect) 사이의 중요한 관계를 반영하고 명확히 하기 위해 설계했습니다. 이 지적인 구조화는 데이터 전송이 더욱 자동화되는 것만큼 특히 중요하고 네트워크로 연결된 매우 이질적인 컴퓨터 사이에 일어난다.

아직은 결국 XML 문서에 저장된 많은 내용을 읽는 사람에게 표시할 필요가 있습니다. 왜냐하면 브라우저가 친근하고 유연성이 높은 인터페이스를 제공하기 때문에, 그것은 XML 내용의 표시 버전 같은 이상적인 전달 메커니즘입니다. 철저하게 아주 다양한 XML 기술을 이용하게 만들었기 때문에, Mozilla는 원 XML 문서와 스타일 입히기와 클라이언트 측 처리로 인한 서버 부담을 줄이기 위해 HTML 표시에 그들을 놓기로 쓰는 특수 스타일시트 둘 다를 처리할 필요가 있는 모든 메커니즘을 자체에 통합시킵니다.

오늘날, Gecko(the layout engine behind Mozilla와 Firefox)는 두 형태(form)의 XML 스타일시트를 지원합니다. 겉모습(글꼴, 색, 자리들)의 기본 조절을 위해 Gecko는 [DHTML](/ko/DHTML)과 친근한 [CSS](/ko/docs/Web/CSS)를 씁니다. CSS1 전부와 CSS2 대부분을 지원합니다. 최근 생겨난 CSS3 표준 지원은 개발중입니다. CSS에 관한 추가 정보는 [Eric Meyer's CSS pages](https://www.meyerweb.com/eric/css/)를 보시기 바랍니다.

여기서 우리의 관심은 Gecko가 지원하는 스타일시트의 두 번째 형태인 XSLT 스타일시트에 대해서입니다. XSLT는 eXtensible Stylesheet Language/Transform을 나타내고 그 이름은 적절합니다. XSLT는 스타일시트 만든 이가 그러길 바란다면 컨텐트를 모조리 다시 정리하고 다른 형식으로 변환하는 것을 포함하는 컨텐트 조작(manipulating)과 정렬이라는 중요한 두 방식으로 본래 XML 문서를 변환하게 합니다(그리고 Mozilla의 경우에, 초점은 브라우저에 표시될 수 있는 HTML로 즉시 변환하는 데 있습니다).

### XSLT/XPath 참조

#### [요소](/ko/XSLT/Elements)

- [xsl:apply-imports](/ko/XSLT/apply-imports) _(지원함)_
- [xsl:apply-templates](/ko/XSLT/apply-templates) _(지원함)_
- [xsl:attribute](/ko/XSLT/attribute) _(지원함)_
- [xsl:attribute-set](/ko/XSLT/attribute-set) _(지원함)_
- [xsl:call-template](/ko/XSLT/call-template) _(지원함)_
- [xsl:choose](/ko/XSLT/choose) _(지원함)_
- [xsl:comment](/ko/XSLT/comment) _(지원함)_
- [xsl:copy](/ko/XSLT/copy) _(지원함)_
- [xsl:copy-of](/ko/XSLT/copy-of) _(지원함)_
- [xsl:decimal-format](/ko/XSLT/decimal-format) _(지원함)_
- [xsl:element](/ko/XSLT/element) _(지원함)_
- [xsl:fallback](/ko/XSLT/fallback) _(지원 안 함)_
- [xsl:for-each](/ko/XSLT/for-each) _(지원함)_
- [xsl:if](/ko/XSLT/if) _(지원함)_
- [xsl:import](/ko/XSLT/import) _(대부분 지원)_
- [xsl:include](/ko/XSLT/include) _(지원함)_
- [xsl:key](/ko/XSLT/key) _(지원함)_
- [xsl:message](/ko/XSLT/message) _(지원함)_
- [xsl:namespace-alias](/ko/XSLT/namespace-alias) _(지원 안 함)_
- [xsl:number](/ko/XSLT/number) _(부분 지원)_
- [xsl:otherwise](/ko/XSLT/otherwise) _(지원함)_
- [xsl:output](/ko/XSLT/output) _(부분 지원)_
- [xsl:param](/ko/XSLT/param) _(지원함)_
- [xsl:preserve-space](/ko/XSLT/preserve-space) _(지원함)_
- [xsl:processing-instruction](/ko/XSLT/processing-instruction)
- [xsl:sort](/ko/XSLT/sort) _(지원함)_
- [xsl:strip-space](/ko/XSLT/strip-space) _(지원함)_
- [xsl:stylesheet](/ko/XSLT/stylesheet) _(부분 지원)_
- [xsl:template](/ko/XSLT/template) _(지원함)_
- [xsl:text](/ko/XSLT/text) _(부분 지원)_
- [xsl:transform](/ko/XSLT/transform) _(지원함)_
- [xsl:value-of](/ko/XSLT/value-of) _(부분 지원)_
- [xsl:variable](/ko/XSLT/variable) _(지원함)_
- [xsl:when](/ko/XSLT/when) _(지원함)_
- [xsl:with-param](/ko/XSLT/with-param) _(지원함)_

#### [축](/ko/XPath/Axes)

- [ancestor](/ko/XPath/Axes/ancestor)
- [ancestor-or-self](/ko/XPath/Axes/ancestor-or-self)
- [attribute](/ko/XPath/Axes/attribute)
- [child](/ko/XPath/Axes/child)
- [descendant](/ko/XPath/Axes/descendant)
- [descendant-or-self](/ko/XPath/Axes/descendant-or-self)
- [following](/ko/XPath/Axes/following)
- [following-sibling](/ko/XPath/Axes/following-sibling)
- [namespace](/ko/XPath/Axes/namespace) _(지원 안 함)_
- [parent](/ko/XPath/Axes/parent)
- [preceding](/ko/XPath/Axes/preceding)
- [preceding-sibling](/ko/XPath/Axes/preceding-sibling)
- [self](/ko/XPath/Axes/self)

#### [함수](/ko/XPath/Functions)

- [boolean()](/ko/XPath/Functions/boolean) _(지원함)_
- [ceiling()](/ko/XPath/Functions/ceiling) _(지원함)_
- [concat()](/ko/XPath/Functions/concat) _(지원함)_
- [contains()](/ko/XPath/Functions/contains) _(지원함)_
- [count()](/ko/XPath/Functions/count) _(지원함)_
- [current()](/ko/XPath/Functions/current) _(지원함)_
- [document()](/ko/XPath/Functions/document) _(지원함)_
- [element-available()](/ko/XPath/Functions/element-available) _(지원함)_
- [false()](/ko/XPath/Functions/false) _(지원함)_
- [floor()](/ko/XPath/Functions/floor) _(지원함)_
- [format-number()](/ko/XPath/Functions/format-number) _(지원함)_
- [function-available()](/ko/XPath/Functions/function-available) _(지원함)_
- [generate-id()](/ko/XPath/Functions/generate-id) _(지원함)_
- [id()](/ko/XPath/Functions/id) _(부분 지원)_
- [key()](/ko/XPath/Functions/key) _(지원함)_
- [lang()](/ko/XPath/Functions/lang) _(지원함)_
- [last()](/ko/XPath/Functions/last) _(지원함)_
- [local-name()](/ko/XPath/Functions/local-name) _(지원함)_
- [name()](/ko/XPath/Functions/name) _(지원함)_
- [namespace-uri()](/ko/XPath/Functions/namespace-uri) _(지원함)_
- [normalize-space()](/ko/XPath/Functions/normalize-space) _(지원함)_
- [not()](/ko/XPath/Functions/not) _(지원함)_
- [number()](/ko/XPath/Functions/number) _(지원함)_
- [position()](/ko/XPath/Functions/position) _(지원함)_
- [round()](/ko/XPath/Functions/round) _(지원함)_
- [starts-with()](/ko/XPath/Functions/starts-with) _(지원함)_
- [string()](/ko/XPath/Functions/string) _(지원함)_
- [string-lenght()](/ko/XPath/Functions/string-length) _(지원함)_
- [substring()](/ko/XPath/Functions/substring) _(지원함)_
- [substring-after()](/ko/XPath/Functions/substring-after) _(지원함)_
- [substring-before()](/ko/XPath/Functions/substring-before) _(지원함)_
- [sum()](/ko/XPath/Functions/sum) _(지원함)_
- [system-property()](/ko/XPath/Functions/system-property) _(지원함)_
- [translate()](/ko/XPath/Functions/translate) _(지원함)_
- [true()](/ko/XPath/Functions/true) _(지원함)_
- [unparsed-entity-url()](/ko/XPath/Functions/unparsed-entity-url) _(지원 안 함)_

### [더 읽을 거리](/ko/Transforming_XML_with_XSLT/For_Further_Reading)

- [Books](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Books)
- [Online](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Online)
  - [The World Wide Web Consortium](/ko/Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium)
  - [Portals](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Portals)
  - [Articles](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Articles)
  - [Tutorials/Examples](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples)
  - [Mailing Lists/Newsgroups](/ko/Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups)

### [찾아보기](/ko/Transforming_XML_with_XSLT/Index)

### 원본 문서 정보

- 저작권 정보: Copyright © 2001-2003 Netscape. All rights reserved.
- 주의: 이 재판 article은 원래 DevEdge 사이트 부분이었습니다.
