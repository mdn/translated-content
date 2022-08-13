---
title: Elementy
slug: Web/XSLT/Element
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element
---
{{ XsltRef() }}
Omówione poniżej są dwa typy elementów: elementy top-level (najwyższego poziomu) oraz instrukcje. Element najwyższego poziomu musi pojawić się jako dziecko elementu `<xsl:stylesheet>` lub `<xsl:transform>`. Z drugiej strony instrukcja jest powiązana z szablonem. Arkusz może zawierać kilka szablonów. Trzecim typem elementów, nie omówionym tutaj, jest element wyniku literałowego (literal result element - LRE). LRE również pojawia się wewnątrz szablonu. Składa się z dowolnego elementu (nie będącego instrukcją), który powinień być skopiowany jak-jest do dokumentu wynikowego. Przykładem jest element `<hr>` w arkuszu konwersji HTML.

Podobnie dowolny atrybut w LRE i niektóre atrybuty z ograniczonej liczby elementów XSLT mogą również włączać to, co znane jest pod nazwą szablonu wartości atrybutu. Szablon wartości atrybutu jest po prostu łańcuchem znaków zawierającym osadzone wyrażenie XPath, które jest używane jako wartość atrybutu. W czasie uruchomienia wyrażenie jest oceniane, a wynik jest podstawiany zamiast wyrażenia XPath. Przykładowo: zakładając, że zmienna "\<tt>image-dir\</tt>" jest zdefiniowana następująco:

    <xsl:variable name="image-dir">/images</xsl:variable>

Wykonywane wyrażenie jest umieszczone w nawiasach klamrowych:

    <img src="{$image-dir}/mygraphic.jpg"/>

Rezulat będzie następujący:

    <img src="/images/mygraphic.jpg"/>

Poniższy spis elementów zawiera opis każdego z nich: składnię, listę wymaganych i opcjonalnych atrybutów, opis typu i pozycji, źródło w rekomendacji W3C oraz opis stopnia, w jakim te elementy są obecnie obsługiwane przez Gecko.

- [xsl:apply-imports](pl/XSLT/apply-imports)
- [xsl:apply-templates](pl/XSLT/apply-templates)
- [xsl:attribute](pl/XSLT/attribute)
- [xsl:attribute-set](pl/XSLT/attribute-set)
- [xsl:call-template](pl/XSLT/call-template)
- [xsl:choose](pl/XSLT/choose)
- [xsl:comment](pl/XSLT/comment)
- [xsl:copy](pl/XSLT/copy)
- [xsl:copy-of](pl/XSLT/copy-of)
- [xsl:decimal-format](pl/XSLT/decimal-format)
- [xsl:element](pl/XSLT/element)
- [xsl:fallback](pl/XSLT/fallback) _(nieobsługiwany)_
- [xsl:for-each](pl/XSLT/for-each)
- [xsl:if](pl/XSLT/if)
- [xsl:import](pl/XSLT/import) _(przeważnie obsługiwany)_
- [xsl:include](pl/XSLT/include)
- [xsl:key](pl/XSLT/key)
- [xsl:message](pl/XSLT/message)
- [xsl:namespace-alias](pl/XSLT/namespace-alias) _(nieobsługiwany)_
- [xsl:number](pl/XSLT/number) _(częściowo obsługiwany)_
- [xsl:otherwise](pl/XSLT/otherwise)
- [xsl:output](pl/XSLT/output) _(częściowo obsługiwany)_
- [xsl:param](pl/XSLT/param)
- [xsl:preserve-space](pl/XSLT/preserve-space)
- [xsl:processing-instruction](pl/XSLT/processing-instruction)
- [xsl:sort](pl/XSLT/sort)
- [xsl:strip-space](pl/XSLT/strip-space)
- [xsl:stylesheet](pl/XSLT/stylesheet) _(częściowo obsługiwany)_
- [xsl:template](pl/XSLT/template)
- [xsl:text](pl/XSLT/text) _(częściowo obsługiwany)_
- [xsl:transform](pl/XSLT/transform)
- [xsl:value-of](pl/XSLT/value-of) _(częściowo obsługiwany)_
- [xsl:variable](pl/XSLT/variable)
- [xsl:when](pl/XSLT/when)
- [xsl:with-param](pl/XSLT/with-param)

{{ languages( { "en": "en/XSLT/Elements", "fr": "fr/XSLT/\u00c9l\u00e9ments", "ja": "ja/XSLT/Elements" } ) }}
