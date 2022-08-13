---
title: Transformacje XML z XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
tags:
  - Strony_wymagające_dopracowania
  - Transformacje_XML_z_XSLT
  - Wszystkie_kategorie
  - XML
  - XSLT
translation_of: Web/XSLT/Transforming_XML_with_XSLT
original_slug: Web/XSLT/Transformacje_XML_z_XSLT
---
### [Ogólny przegląd](pl/Transformacje_XML_z_XSLT/Og%c3%b3lny_przegl%c4%85d)

The separation of content and presentation is a key design feature of [XML](pl/XML). The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.

Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Mozilla incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.

At present, Gecko (the layout engine behind Mozilla and Firefox) supports two forms of XML stylesheets. For basic control of appearance - fonts, colors, position, and so forth, Gecko uses [CSS](pl/CSS), familiar from [DHTML](pl/DHTML). All of CSS1 and most of CSS2 are supported. Support for the emerging CSS3 standard is under development. For further information about CSS, see [Eric Meyer's CSS pages](http://www.meyerweb.com/eric/css/). For an overview of CSS1 and Netscape, see this [Browser Central page](http://home.netscape.com/browsers/future/standards.html#1).

Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Netscape, the focus is on converting it on the fly into HTML which can then be displayed by the browser).

### Dokumentacja XSLT/XPath

#### [Elementy](pl/XSLT/Elementy)

- [xsl:apply-imports](pl/XSLT/apply-imports)_(obsługiwany)_
- [xsl:apply-templates](pl/XSLT/apply-templates)_(obsługiwany)_
- [xsl:attribute](pl/XSLT/attribute)_(obsługiwany)_
- [xsl:attribute-set](pl/XSLT/attribute-set)_(obsługiwany)_
- [xsl:call-template](pl/XSLT/call-template)_(obsługiwany)_
- [xsl:choose](pl/XSLT/choose)_(obsługiwany)_
- [xsl:comment](pl/XSLT/comment)_(obsługiwany)_
- [xsl:copy](pl/XSLT/copy)_(obsługiwany)_
- [xsl:copy-of](pl/XSLT/copy-of)_(obsługiwany)_
- [xsl:decimal-format](pl/XSLT/decimal-format)_(obsługiwany)_
- [xsl:element](pl/XSLT/element)_(obsługiwany)_
- [xsl:fallback](pl/XSLT/fallback)_(nie obsługiwany)_
- [xsl:for-each](pl/XSLT/for-each)_(obsługiwany)_
- [xsl:if](pl/XSLT/if)_(obsługiwany)_
- [xsl:import](pl/XSLT/import)_(przeważnie obsługiwany)_
- [xsl:include](pl/XSLT/include)_(obsługiwany)_
- [xsl:key](pl/XSLT/key)_(obsługiwany)_
- [xsl:message](pl/XSLT/message)_(obsługiwany)_
- [xsl:namespace-alias](pl/XSLT/namespace-alias)_(nie obsługiwany)_
- [xsl:number](pl/XSLT/number)_(częściowo obsługiwany)_
- [xsl:otherwise](pl/XSLT/otherwise)_(obsługiwany)_
- [xsl:output](pl/XSLT/output)_(częściowo obsługiwany)_
- [xsl:param](pl/XSLT/param)_(obsługiwany)_
- [xsl:preserve-space](pl/XSLT/preserve-space)_(obsługiwany)_
- [xsl:processing-instruction](pl/XSLT/processing-instruction)
- [xsl:sort](pl/XSLT/sort)_(obsługiwany)_
- [xsl:strip-space](pl/XSLT/strip-space)_(obsługiwany)_
- [xsl:stylesheet](pl/XSLT/stylesheet)_(częściowo obsługiwany)_
- [xsl:template](pl/XSLT/template)_(obsługiwany)_
- [xsl:text](pl/XSLT/text)_(częściowo obsługiwany)_
- [xsl:transform](pl/XSLT/transform)_(obsługiwany)_
- [xsl:value-of](pl/XSLT/value-of)_(częściowo obsługiwany)_
- [xsl:variable](pl/XSLT/variable)_(obsługiwany)_
- [xsl:when](pl/XSLT/when)_(obsługiwany)_
- [xsl:with-param](pl/XSLT/with-param)_(obsługiwany)_

#### [Osie wierzchołków](pl/XPath/Osie)

- [ancestor](pl/XPath/Osie/ancestor)
- [ancestor-or-self](pl/XPath/Osie/ancestor-or-self)
- [attribute](pl/XPath/Osie/attribute)
- [child](pl/XPath/Osie/child)
- [descendant](pl/XPath/Osie/descendant)
- [descendant-or-self](pl/XPath/Osie/descendant-or-self)
- [following](pl/XPath/Osie/following)
- [following-sibling](pl/XPath/Osie/following-sibling)
- [namespace](pl/XPath/Osie/namespace)_(nie obsługiwana)_
- [parent](pl/XPath/Osie/parent)
- [preceding](pl/XPath/Osie/preceding)
- [preceding-sibling](pl/XPath/Osie/preceding-sibling)
- [self](pl/XPath/Osie/self)

#### [Funkcje](pl/XPath/Funkcje)

- [boolean()](pl/XPath/Funkcje/boolean)_(obsługiwana)_
- [ceiling()](pl/XPath/Funkcje/ceiling)_(obsługiwana)_
- [concat()](pl/XPath/Funkcje/concat)_(obsługiwana)_
- [contains()](pl/XPath/Funkcje/contains)_(obsługiwana)_
- [count()](pl/XPath/Funkcje/count)_(obsługiwana)_
- [current()](pl/XPath/Funkcje/current)_(obsługiwana)_
- [document()](pl/XPath/Funkcje/document)_(obsługiwana)_
- [element-available()](pl/XPath/Funkcje/element-available)_(obsługiwana)_
- [false()](pl/XPath/Funkcje/false)_(obsługiwana)_
- [floor()](pl/XPath/Funkcje/floor)_(obsługiwana)_
- [format-number()](pl/XPath/Funkcje/format-number)_(obsługiwana)_
- [function-available()](pl/XPath/Funkcje/function-available)_(obsługiwana)_
- [generate-id()](pl/XPath/Funkcje/generate-id)_(obsługiwana)_
- [id()](pl/XPath/Funkcje/id)_(częściowo obsługiwana)_
- [key()](pl/XPath/Funkcje/key)_(obsługiwana)_
- [lang()](pl/XPath/Funkcje/lang)_(obsługiwana)_
- [last()](pl/XPath/Funkcje/last)_(obsługiwana)_
- [local-name()](pl/XPath/Funkcje/local-name)_(obsługiwana)_
- [name()](pl/XPath/Funkcje/name)_(obsługiwana)_
- [namespace-uri()](pl/XPath/Funkcje/namespace-uri)_(obsługiwana)_
- [normalize-space()](pl/XPath/Funkcje/normalize-space)_(obsługiwana)_
- [not()](pl/XPath/Funkcje/not)_(obsługiwana)_
- [number()](pl/XPath/Funkcje/number)_(obsługiwana)_
- [position()](pl/XPath/Funkcje/position)_(obsługiwana)_
- [round()](pl/XPath/Funkcje/round)_(obsługiwana)_
- [starts-with()](pl/XPath/Funkcje/starts-with)_(obsługiwana)_
- [string()](pl/XPath/Funkcje/string)_(obsługiwana)_
- [string-lenght()](pl/XPath/Funkcje/string-length)_(obsługiwana)_
- [substring()](pl/XPath/Funkcje/substring)_(obsługiwana)_
- [substring-after()](pl/XPath/Funkcje/substring-after)_(obsługiwana)_
- [substring-before()](pl/XPath/Funkcje/substring-before)_(obsługiwana)_
- [sum()](pl/XPath/Funkcje/sum)_(obsługiwana)_
- [system-property()](pl/XPath/Funkcje/system-property)_(obsługiwana)_
- [translate()](pl/XPath/Funkcje/translate)_(obsługiwana)_
- [true()](pl/XPath/Funkcje/true)_(obsługiwana)_
- [unparsed-entity-url()](pl/XPath/Funkcje/unparsed-entity-url)_(nie obsługiwana)_

### [Przeczytaj więcej](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej)

- [Książki](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Ksi.C4.85.C5.BCki)
- [Online](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Online)

  - [Konsorcjum World Wide Web](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Konsorcjum_World_Wide_Web)
  - [Portale](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Portale)
  - [Artykuły](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Artyku.C5.82y)
  - [Przewodniki/Przykłady](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Przewodniki.2FPrzyk.C5.82ady)
  - [Listy dyskusyjne/Grupy newsowe](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej#Listy_dyskusyjne.2FGrupy_newsowe)

### [Index](pl/Transformacje_XML_z_XSLT/Index)

### Original Document Information

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
