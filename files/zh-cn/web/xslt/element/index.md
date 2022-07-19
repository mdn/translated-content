---
title: Elements
slug: Web/XSLT/Element
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element
original_slug: Web/XSLT/Elements
---
{{ XsltRef() }} There are two types of elements discussed here: top-level elements and instructions. A top-level element must appear as the child of either `<xsl:stylesheet>` or `<xsl:transform>`. An instruction, on the other hand, is associated with a template. A stylesheet may include several templates. A third type of element, not discussed here, is the literal result element (LRE). An LRE also appears in a template. It consists of any non-instruction element that should be copied as-is to the result document, for example, an `<hr>` element in an HTML conversion stylesheet.

On a related note, any attribute in an LRE and some attributes of a limited number of XSLT elements can also include what is known as an attribute value template. An attribute value template is simply a string that includes an embedded XPath expression which is used to specify the value of an attribute. At run-time the expression is evaluated and the result of the evaluation is substituted for the XPath expression. For example, assume that a variable "`image-dir`" is defined as follows:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

The expression to be evaluated is placed inside curly brackets:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

This would result in the following:

```xml
<img src="/images/mygraphic.jpg"/>
```

The element annotations that follow include a description, a syntax listing, a list of required and optional attributes, a description of type and position, its source in the W3C Recommendation and an explanation of the degree of present Gecko support.

- [xsl:apply-imports](/cn/XSLT/apply-imports)
- [xsl:apply-templates](/cn/XSLT/apply-templates)
- [xsl:attribute](/cn/XSLT/attribute)
- [xsl:attribute-set](/cn/XSLT/attribute-set)
- [xsl:call-template](/cn/XSLT/call-template)
- [xsl:choose](/cn/XSLT/choose)
- [xsl:comment](/cn/XSLT/comment)
- [xsl:copy](/cn/XSLT/copy)
- [xsl:copy-of](/cn/XSLT/copy-of)
- [xsl:decimal-format](/cn/XSLT/decimal-format)
- [xsl:element](/cn/XSLT/element)
- [xsl:fallback](/cn/XSLT/fallback) _(not supported)_
- [xsl:for-each](/cn/XSLT/for-each)
- [xsl:if](/cn/XSLT/if)
- [xsl:import](/cn/XSLT/import) _(mostly supported)_
- [xsl:include](/cn/XSLT/include)
- [xsl:key](/cn/XSLT/key)
- [xsl:message](/cn/XSLT/message)
- [xsl:namespace-alias](/cn/XSLT/namespace-alias) _(not supported)_
- [xsl:number](/cn/XSLT/number) _(partially supported)_
- [xsl:otherwise](/cn/XSLT/otherwise)
- [xsl:output](/cn/XSLT/output) _(partially supported)_
- [xsl:param](/cn/XSLT/param)
- [xsl:preserve-space](/cn/XSLT/preserve-space)
- [xsl:processing-instruction](/cn/XSLT/processing-instruction)
- [xsl:sort](/cn/XSLT/sort)
- [xsl:strip-space](/cn/XSLT/strip-space)
- [xsl:stylesheet](/cn/XSLT/stylesheet) _(partially supported)_
- [xsl:template](/cn/XSLT/template)
- [xsl:text](/cn/XSLT/text) _(partially supported)_
- [xsl:transform](/cn/XSLT/transform)
- [xsl:value-of](/cn/XSLT/value-of) _(partially supported)_
- [xsl:variable](/cn/XSLT/variable)
- [xsl:when](/cn/XSLT/when)
- [xsl:with-param](/cn/XSLT/with-param)
