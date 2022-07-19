---
title: Elements
slug: Web/XSLT/Element
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element
original_slug: Web/XSLT/Elements
---
<p>{{ XsltRef() }} There are two types of elements discussed here: top-level elements and instructions. A top-level element must appear as the child of either <code>&lt;xsl:stylesheet&gt;</code> or <code>&lt;xsl:transform&gt;</code>. An instruction, on the other hand, is associated with a template. A stylesheet may include several templates. A third type of element, not discussed here, is the literal result element (LRE). An LRE also appears in a template. It consists of any non-instruction element that should be copied as-is to the result document, for example, an <code>&lt;hr&gt;</code> element in an HTML conversion stylesheet.</p>
<p>On a related note, any attribute in an LRE and some attributes of a limited number of XSLT elements can also include what is known as an attribute value template. An attribute value template is simply a string that includes an embedded XPath expression which is used to specify the value of an attribute. At run-time the expression is evaluated and the result of the evaluation is substituted for the XPath expression. For example, assume that a variable "<code>image-dir</code>" is defined as follows:</p>
<pre>&lt;xsl:variable name="image-dir"&gt;/images&lt;/xsl:variable&gt;</pre>
<p>The expression to be evaluated is placed inside curly brackets:</p>
<pre>&lt;img src="{$image-dir}/mygraphic.jpg"/&gt;</pre>
<p>This would result in the following:</p>
<pre>&lt;img src="/images/mygraphic.jpg"/&gt;</pre>
<p>The element annotations that follow include a description, a syntax listing, a list of required and optional attributes, a description of type and position, its source in the W3C Recommendation and an explanation of the degree of present Gecko support.</p>
<ul>
 <li><a href="/cn/XSLT/apply-imports">xsl:apply-imports</a></li>
 <li><a href="/cn/XSLT/apply-templates">xsl:apply-templates</a></li>
 <li><a href="/cn/XSLT/attribute">xsl:attribute</a></li>
 <li><a href="/cn/XSLT/attribute-set">xsl:attribute-set</a></li>
 <li><a href="/cn/XSLT/call-template">xsl:call-template</a></li>
 <li><a href="/cn/XSLT/choose">xsl:choose</a></li>
 <li><a href="/cn/XSLT/comment">xsl:comment</a></li>
 <li><a href="/cn/XSLT/copy">xsl:copy</a></li>
 <li><a href="/cn/XSLT/copy-of">xsl:copy-of</a></li>
 <li><a href="/cn/XSLT/decimal-format">xsl:decimal-format</a></li>
 <li><a href="/cn/XSLT/element">xsl:element</a></li>
 <li><a href="/cn/XSLT/fallback">xsl:fallback</a> <em>(not supported)</em></li>
 <li><a href="/cn/XSLT/for-each">xsl:for-each</a></li>
 <li><a href="/cn/XSLT/if">xsl:if</a></li>
 <li><a href="/cn/XSLT/import">xsl:import</a> <em>(mostly supported)</em></li>
 <li><a href="/cn/XSLT/include">xsl:include</a></li>
 <li><a href="/cn/XSLT/key">xsl:key</a></li>
 <li><a href="/cn/XSLT/message">xsl:message</a></li>
 <li><a href="/cn/XSLT/namespace-alias">xsl:namespace-alias</a> <em>(not supported)</em></li>
 <li><a href="/cn/XSLT/number">xsl:number</a> <em>(partially supported)</em></li>
 <li><a href="/cn/XSLT/otherwise">xsl:otherwise</a></li>
 <li><a href="/cn/XSLT/output">xsl:output</a> <em>(partially supported)</em></li>
 <li><a href="/cn/XSLT/param">xsl:param</a></li>
 <li><a href="/cn/XSLT/preserve-space">xsl:preserve-space</a></li>
 <li><a href="/cn/XSLT/processing-instruction">xsl:processing-instruction</a></li>
 <li><a href="/cn/XSLT/sort">xsl:sort</a></li>
 <li><a href="/cn/XSLT/strip-space">xsl:strip-space</a></li>
 <li><a href="/cn/XSLT/stylesheet">xsl:stylesheet</a> <em>(partially supported)</em></li>
 <li><a href="/cn/XSLT/template">xsl:template</a></li>
 <li><a href="/cn/XSLT/text">xsl:text</a> <em>(partially supported)</em></li>
 <li><a href="/cn/XSLT/transform">xsl:transform</a></li>
 <li><a href="/cn/XSLT/value-of">xsl:value-of</a> <em>(partially supported)</em></li>
 <li><a href="/cn/XSLT/variable">xsl:variable</a></li>
 <li><a href="/cn/XSLT/when">xsl:when</a></li>
 <li><a href="/cn/XSLT/with-param">xsl:with-param</a></li>
</ul>
