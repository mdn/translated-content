---
title: variable
slug: Web/XSLT/Element/variable
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/variable
original_slug: Web/XSLT/variable
---
{{ XsltRef() }}

Element `<xsl:variable>` deklaruje globalną lub lokalną zmienną w arkuszu i nadaje jej wartość. Ponieważ XSLT nie pozwala na działania pośrednie (ang. _side-effects_), wartość zmiennej po jej ustaleniu pozostanie ta sama, dopóki zmienna nie wyjdzie poza swój zasięg.

### Składnia

    <xsl:variable name=NAME select=WYRAZENIE >
    	SZABLON
    </xsl:variable>

### Wymagane atrybuty

- `name`
  - : Nadaje zmiennej nazwę.

### Opcjonalne atrybuty

- `select`
  - : Określa wartość zmiennej poprzez wyrażenie XPath. Jeśli element zawiera szablon, atrybut jest ignorowany.

### Typ

Element najwyższego poziomu lub instrukcja. Jeśli pojawia się jako element najwyższego poziomu, zmienna jest globalna w zasięgu i dostęp do niej może być osiągnięty poprzez cały dokument. Jeśli pojawia się wewnątrz szablonu, zmienna jest lokalna w zasięgu i jest dostępna tylko wewnątrz szablonu, w którym się pojawia.

### Definicja

XSLT, sekcja 11.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/variable", "fr": "fr/XSLT/variable" } ) }}
