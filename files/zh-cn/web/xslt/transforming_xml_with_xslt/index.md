---
title: Transforming XML with XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
---

### [An Overview](cn/Transforming_XML_with_XSLT/An_Overview)

The separation of content and presentation is a key design feature of [XML](cn/XML). The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.

Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Mozilla incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.

At present, Gecko (the layout engine behind Mozilla and Firefox) supports two forms of XML stylesheets. For basic control of appearance -- fonts, colors, position, and so forth -- Gecko uses [CSS](cn/CSS), familiar from "DHTML". All of CSS1 and most of CSS2 are supported. Support for the emerging CSS3 standard is under development. For further information about CSS, see [Eric Meyer's CSS pages](http://www.meyerweb.com/eric/css/).

Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Mozilla, the focus is on converting it on the fly into HTML which can then be displayed by the browser).

### XSLT/XPath reference

#### [Elements](cn/XSLT/Elements)

- [xsl:apply-imports](cn/XSLT/apply-imports)
  _(supported)_
- [xsl:apply-templates](cn/XSLT/apply-templates)
  _(supported)_
- [xsl:attribute](cn/XSLT/attribute)
  _(supported)_
- [xsl:attribute-set](cn/XSLT/attribute-set)
  _(supported)_
- [xsl:call-template](cn/XSLT/call-template)
  _(supported)_
- [xsl:choose](cn/XSLT/choose)
  _(supported)_
- [xsl:comment](cn/XSLT/comment)
  _(supported)_
- [xsl:copy](cn/XSLT/copy)
  _(supported)_
- [xsl:copy-of](cn/XSLT/copy-of)
  _(supported)_
- [xsl:decimal-format](cn/XSLT/decimal-format)
  _(supported)_
- [xsl:element](cn/XSLT/element)
  _(supported)_
- [xsl:fallback](cn/XSLT/fallback)
  _(not supported)_
- [xsl:for-each](cn/XSLT/for-each)
  _(supported)_
- [xsl:if](cn/XSLT/if)
  _(supported)_
- [xsl:import](cn/XSLT/import)
  _(mostly supported)_
- [xsl:include](cn/XSLT/include)
  _(supported)_
- [xsl:key](cn/XSLT/key)
  _(supported)_
- [xsl:message](cn/XSLT/message)
  _(supported)_
- [xsl:namespace-alias](cn/XSLT/namespace-alias)
  _(not supported)_
- [xsl:number](cn/XSLT/number)
  _(partially supported)_
- [xsl:otherwise](cn/XSLT/otherwise)
  _(supported)_
- [xsl:output](cn/XSLT/output)
  _(partially supported)_
- [xsl:param](cn/XSLT/param)
  _(supported)_
- [xsl:preserve-space](cn/XSLT/preserve-space)
  _(supported)_
- [xsl:processing-instruction](cn/XSLT/processing-instruction)
- [xsl:sort](cn/XSLT/sort)
  _(supported)_
- [xsl:strip-space](cn/XSLT/strip-space)
  _(supported)_
- [xsl:stylesheet](cn/XSLT/stylesheet)
  _(partially supported)_
- [xsl:template](cn/XSLT/template)
  _(supported)_
- [xsl:text](cn/XSLT/text)
  _(partially supported)_
- [xsl:transform](cn/XSLT/transform)
  _(supported)_
- [xsl:value-of](cn/XSLT/value-of)
  _(partially supported)_
- [xsl:variable](cn/XSLT/variable)
  _(supported)_
- [xsl:when](cn/XSLT/when)
  _(supported)_
- [xsl:with-param](cn/XSLT/with-param)
  _(supported)_

#### [Axes](cn/XPath/Axes)

- [ancestor](cn/XPath/Axes/ancestor)
- [ancestor-or-self](cn/XPath/Axes/ancestor-or-self)
- [attribute](cn/XPath/Axes/attribute)
- [child](cn/XPath/Axes/child)
- [descendant](cn/XPath/Axes/descendant)
- [descendant-or-self](cn/XPath/Axes/descendant-or-self)
- [following](cn/XPath/Axes/following)
- [following-sibling](cn/XPath/Axes/following-sibling)
- [namespace](cn/XPath/Axes/namespace)
  _(not supported)_
- [parent](cn/XPath/Axes/parent)
- [preceding](cn/XPath/Axes/preceding)
- [preceding-sibling](cn/XPath/Axes/preceding-sibling)
- [self](cn/XPath/Axes/self)

#### [Functions](cn/XPath/Functions)

- [boolean()](cn/XPath/Functions/boolean)
  _(supported)_
- [ceiling()](cn/XPath/Functions/ceiling)
  _(supported)_
- [concat()](cn/XPath/Functions/concat)
  _(supported)_
- [contains()](cn/XPath/Functions/contains)
  _(supported)_
- [count()](cn/XPath/Functions/count)
  _(supported)_
- [current()](cn/XPath/Functions/current)
  _(supported)_
- [document()](cn/XPath/Functions/document)
  _(supported)_
- [element-available()](cn/XPath/Functions/element-available)
  _(supported)_
- [false()](cn/XPath/Functions/false)
  _(supported)_
- [floor()](cn/XPath/Functions/floor)
  _(supported)_
- [format-number()](cn/XPath/Functions/format-number)
  _(supported)_
- [function-available()](cn/XPath/Functions/function-available)
  _(supported)_
- [generate-id()](cn/XPath/Functions/generate-id)
  _(supported)_
- [id()](cn/XPath/Functions/id)
  _(partially supported)_
- [key()](cn/XPath/Functions/key)
  _(supported)_
- [lang()](cn/XPath/Functions/lang)
  _(supported)_
- [last()](cn/XPath/Functions/last)
  _(supported)_
- [local-name()](cn/XPath/Functions/local-name)
  _(supported)_
- [name()](cn/XPath/Functions/name)
  _(supported)_
- [namespace-uri()](cn/XPath/Functions/namespace-uri)
  _(supported)_
- [normalize-space()](cn/XPath/Functions/normalize-space)
  _(supported)_
- [not()](cn/XPath/Functions/not)
  _(supported)_
- [number()](cn/XPath/Functions/number)
  _(supported)_
- [position()](cn/XPath/Functions/position)
  _(supported)_
- [round()](cn/XPath/Functions/round)
  _(supported)_
- [starts-with()](cn/XPath/Functions/starts-with)
  _(supported)_
- [string()](cn/XPath/Functions/string)
  _(supported)_
- [string-length()](cn/XPath/Functions/string-length)
  _(supported)_
- [substring()](cn/XPath/Functions/substring)
  _(supported)_
- [substring-after()](cn/XPath/Functions/substring-after)
  _(supported)_
- [substring-before()](cn/XPath/Functions/substring-before)
  _(supported)_
- [sum()](cn/XPath/Functions/sum)
  _(supported)_
- [system-property()](cn/XPath/Functions/system-property)
  _(supported)_
- [translate()](cn/XPath/Functions/translate)
  _(supported)_
- [true()](cn/XPath/Functions/true)
  _(supported)_
- [unparsed-entity-url()](cn/XPath/Functions/unparsed-entity-url)
  _(not supported)_

### [For Further Reading](cn/Transforming_XML_with_XSLT/For_Further_Reading)

- [Books](cn/Transforming_XML_with_XSLT/For_Further_Reading#Books)
- [Online](cn/Transforming_XML_with_XSLT/For_Further_Reading#Online)

  - [The World Wide Web Consortium](cn/Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium)
  - [Portals](cn/Transforming_XML_with_XSLT/For_Further_Reading#Portals)
  - [Articles](cn/Transforming_XML_with_XSLT/For_Further_Reading#Articles)
  - [Tutorials/Examples](cn/Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples)
  - [Mailing Lists/Newsgroups](cn/Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups)

### [Resources](cn/Transforming_XML_with_XSLT/Resources)

### [Index](cn/Transforming_XML_with_XSLT/Index)

### Original Document Information

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
