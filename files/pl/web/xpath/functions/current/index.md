---
title: current
slug: Web/XPath/Functions/current
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/current
original_slug: Web/XPath/Funkcje/current
---
{{ XsltRef() }}

Funkcja `current` może zostać użyta do pobrania wierzchołka kontekstowego w instrukcji XSTL.

### Składnia

    current()

### Zwraca

Zbiór wierzchołków zawierający wyłącznie aktualny wierzchołek.

### Uwagi

Ta funkcja jest specyficznym dla XSLT dodatkiem do XPath. Nie jest częścią głównej biblioteki funkcji XPath.

Aktualny wierzchołek jest zawsze taki sam jak wierzchołek kontekstowy. Następujące dwie funkcje są semantycznie równoważne.

    <xsl:value-of select="current()"/>

    <xsl:value-of select="."/>

### Definicja

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-current)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/current", "fr": "fr/XPath/Fonctions/current" } ) }}
