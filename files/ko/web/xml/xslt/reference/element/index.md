---
title: Elements
slug: Web/XML/XSLT/Reference/Element
original_slug: Web/XSLT/Element
---

{{XsltSidebar}}

{{ XsltRef() }} 여기에서 다루는 요소의 두 타입은 최상위 요소와 명령(instruction)입니다. 최상위 요소는 `<xsl:stylesheet>`나 `<xsl:transform>`의 자식으로 나타나야 합니다. 이에 반해, 명령은 템플릿과 관련이 있습니다. 스타일시트는 여러 템플릿을 포함할지도 모릅니다. 여기서 다루지 않는 세 번째 타입의 요소는 LRE(literal result element)입니다. LRE 또한 템플릿에 나타납니다. LRE는 예를 들어, HTML 변환 스타일시트 안의 `<hr>` 요소처럼 결과 문서에 복사되는게 좋은 어떤 비명령 요소로 이루어져 있습니다.

관련 기록에 따르면, LRE의 어떤 속성과 한정된 수의 XSLT 요소의 속성도 속성값 템플릿으로 알려진 것을 또한 포함할 수 있습니다. 속성값 템플릿은 단순히 속성값 지정에 쓰이는 임베드된 XPath 식을 포함하는 문자열입니다. 실행할 때 식을 평가하고 평가 결과는 XPath 식으로 바꾸어 놓습니다. 예를 들어, "`image-dir`" 변수를 다음처럼 정의했다고 하면,

```
<xsl:variable name="image-dir">/images</xsl:variable>
```

평가된 식은 중괄호 안에 놓입니다.

```
<img src="{$image-dir}/mygraphic.jpg"/>
```

이는 다음과 같은 결론에 다다릅니다.

```
<img src="/images/mygraphic.jpg"/>
```

뒤따르는 요소 주석은 설명과 문법 나열, 필수 속성과 선택 속성 목록, 타입과 자리 설명, W3C 권고안 속 요소 소스와 현 Gecko의 지원 정도에 대한 설명을 포함합니다.

- [`<xsl:apply-imports>`](/ko/docs/Web/XML/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/ko/docs/Web/XML/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/ko/docs/Web/XML/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/ko/docs/Web/XML/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/ko/docs/Web/XML/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/ko/docs/Web/XML/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/ko/docs/Web/XML/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/ko/docs/Web/XML/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/ko/docs/Web/XML/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/ko/docs/Web/XML/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/ko/docs/Web/XML/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/ko/docs/Web/XML/XSLT/Reference/Element/fallback) _(not supported)_
- [`<xsl:for-each>`](/ko/docs/Web/XML/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/ko/docs/Web/XML/XSLT/Reference/Element/if)
- [`<xsl:import>`](/ko/docs/Web/XML/XSLT/Reference/Element/import) _(mostly supported)_
- [`<xsl:include>`](/ko/docs/Web/XML/XSLT/Reference/Element/include)
- [`<xsl:key>`](/ko/docs/Web/XML/XSLT/Reference/Element/key)
- [`<xsl:message>`](/ko/docs/Web/XML/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/ko/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(not supported)_
- [`<xsl:number>`](/ko/docs/Web/XML/XSLT/Reference/Element/number) _(partially supported)_
- [`<xsl:otherwise>`](/ko/docs/Web/XML/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/ko/docs/Web/XML/XSLT/Reference/Element/output) _(partially supported)_
- [`<xsl:param>`](/ko/docs/Web/XML/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/ko/docs/Web/XML/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/ko/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/ko/docs/Web/XML/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/ko/docs/Web/XML/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/ko/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(partially supported)_
- [`<xsl:template>`](/ko/docs/Web/XML/XSLT/Reference/Element/template)
- [`<xsl:text>`](/ko/docs/Web/XML/XSLT/Reference/Element/text) _(partially supported)_
- [`<xsl:transform>`](/ko/docs/Web/XML/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/ko/docs/Web/XML/XSLT/Reference/Element/value-of) _(partially supported)_
- [`<xsl:variable>`](/ko/docs/Web/XML/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/ko/docs/Web/XML/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/ko/docs/Web/XML/XSLT/Reference/Element/with-param)
