---
title: Elements
slug: Web/XSLT/Element
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

- [xsl:apply-imports](/zh-CN/XSLT/apply-imports)
- [xsl:apply-templates](/zh-CN/XSLT/apply-templates)
- [xsl:attribute](/zh-CN/XSLT/attribute)
- [xsl:attribute-set](/zh-CN/XSLT/attribute-set)
- [xsl:call-template](/zh-CN/XSLT/call-template)
- [xsl:choose](/zh-CN/XSLT/choose)
- [xsl:comment](/zh-CN/XSLT/comment)
- [xsl:copy](/zh-CN/XSLT/copy)
- [xsl:copy-of](/zh-CN/XSLT/copy-of)
- [xsl:decimal-format](/zh-CN/XSLT/decimal-format)
- [xsl:element](/zh-CN/XSLT/element)
- [xsl:fallback](/zh-CN/XSLT/fallback) _(not supported)_
- [xsl:for-each](/zh-CN/XSLT/for-each)
- [xsl:if](/zh-CN/XSLT/if)
- [xsl:import](/zh-CN/XSLT/import) _(mostly supported)_
- [xsl:include](/zh-CN/XSLT/include)
- [xsl:key](/zh-CN/XSLT/key)
- [xsl:message](/zh-CN/XSLT/message)
- [xsl:namespace-alias](/zh-CN/XSLT/namespace-alias) _(not supported)_
- [xsl:number](/zh-CN/XSLT/number) _(partially supported)_
- [xsl:otherwise](/zh-CN/XSLT/otherwise)
- [xsl:output](/zh-CN/XSLT/output) _(partially supported)_
- [xsl:param](/zh-CN/XSLT/param)
- [xsl:preserve-space](/zh-CN/XSLT/preserve-space)
- [xsl:processing-instruction](/zh-CN/XSLT/processing-instruction)
- [xsl:sort](/zh-CN/XSLT/sort)
- [xsl:strip-space](/zh-CN/XSLT/strip-space)
- [xsl:stylesheet](/zh-CN/XSLT/stylesheet) _(partially supported)_
- [xsl:template](/zh-CN/XSLT/template)
- [xsl:text](/zh-CN/XSLT/text) _(partially supported)_
- [xsl:transform](/zh-CN/XSLT/transform)
- [xsl:value-of](/zh-CN/XSLT/value-of) _(partially supported)_
- [xsl:variable](/zh-CN/XSLT/variable)
- [xsl:when](/zh-CN/XSLT/when)
- [xsl:with-param](/zh-CN/XSLT/with-param)
