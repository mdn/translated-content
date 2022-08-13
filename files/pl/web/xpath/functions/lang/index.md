---
title: lang
slug: Web/XPath/Functions/lang
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/lang
original_slug: Web/XPath/Funkcje/lang
---
{{ XsltRef() }}

Funkcja `lang` określa, czy wierzchołek kontekstu jest zgodny z podanym językiem i zwraca wartość logiczną `true` lub `false`.

### Składnia

    lang( string )

### Argumenty

- `string`
  - : Kod języka lub lokalizacji (język oraz kraj) do sprawdzenia.

### Zwraca

`True`, jeśli wierzchołek kontekstu odpowiada danemu językowi. W przeciwnym wypadku `false`.

### Uwagi

- Język wierzchołka określany jest na podstawie jego atrybutu `xml:lang`. Jeśli aktualny wierzchołek go nie posiada, wartość jest określana przez najbliższego przodka posiadającego atrybut `xml:lang`. W przypadku niemożności określenia języka (żaden przodek nie posiada atrybutu `xml:lang`), funkcja zwróci wartość fałsz.

- Jeśli dany łańcuch znaków nie określa kodu kraju, funkcja ta porówna wierzchołki tego języka z wszystkimi kodami krajów. Odwrotność nie jest prawdziwa.

Bazując na poniższym fragmencie kodu XML:

    <p xml:lang="en">I went up a floor.</p>
    <p xml:lang="en-GB">I took the lift.</p>
    <p xml:lang="en-US">I rode the elevator.</p>

Oraz tej części szablonu XSL:

    <xsl:value-of select="count(//p[lang('en')])" />
    <xsl:value-of select="count(//p[lang('en-GB')])" />
    <xsl:value-of select="count(//p[lang('en-US')])" />
    <xsl:value-of select="count(//p[lang('de')])" />

Wynik może być następujący:

    3
    1
    1
    0

### Definicja

[XPath 1.0 4.3](http://www.w3.org/TR/xpath#function-lang)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/lang", "fr": "fr/XPath/Fonctions/lang", "ja": "ja/XPath/Functions/lang" } ) }}
