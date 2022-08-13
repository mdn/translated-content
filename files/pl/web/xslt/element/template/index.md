---
title: template
slug: Web/XSLT/Element/template
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/template
original_slug: Web/XSLT/template
---
{{ XsltRef() }}

Element `<xsl:template>` definiuje szablon produkujący wyjście. Ten element musi posiadać ustawiony atrybut match lub atrybut name.

### Składnia

    <xsl:template
    	match=WZORZEC
    	name=NAZWA
    	mode=NAZWA
    	priority=LICZBA>
    	<xsl:param> [opcjonalnie]
    	SZABLON
    </xsl:template>

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `match`
  - : Określa wzór, który warunkuje elementy, dla których szablon ten powinien zostać użyty. Jest to wymagany atrybut, gdy nie został zdefiniowany atrybut `name`.

- `name`
  - : Określa dla szablonu nazwę, za pomocą której może on być wywołany przez element `<xsl:call-template>`.

- `mode`
  - : Określa dla szablonu konkretny tryb, który może być dobrany przez atrybut elementu `<xsl:apply-templates>`. Jest to użyteczne przy przetwarzaniu tej samej informacji na różne sposoby.

- `priority`
  - : Określa numeryczny priorytet dla tego szablonu. Może to być dowolna liczba różna od `Infinity`. Procesor używa tej liczby, gdy więcej niż jeden szablon dobiera ten sam węzeł.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 5.3.

### Gecko

Obsługuje.

{{ languages( { "en": "en/XSLT/template", "fr": "fr/XSLT/template" } ) }}
