---
title: stylesheet
slug: Web/XSLT/Element/stylesheet
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/stylesheet
original_slug: Web/XSLT/stylesheet
---
{{ XsltRef() }}

Element `<xsl:stylesheet>` (lub odpowiadający mu element `<xsl:transform>`) jest najbardziej zewnętrznym elementem arkusza.

### Deklaracja przestrzeni nazw

Pseudoatrybut wymagany do identyfikacji dokumentu jako arkusza XSLT. Zazwyczaj jest to `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

### Składnia

    <xsl:stylesheet
    	version=LICZBA
    	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    	id=NAZWA
    	extension-element-prefixes=LISTA-NAZW
    	exclude-result-prefixes=LISTA-NAZW>
    		CALY ARKUSZ
    </xsl:stylesheet>

### Wymagane atrybuty

- `version`
  - : Określa wersję XSLT wymaganą przez ten arkusz.

### Opcjonalne atrybuty

- `id `(Obsługiwany od wersji 7.0 tylko wtedy, gdy jednoznacznie wywołany poprzez liniowe DTD.)
  - : Określa `id` dla tego arkusza. Jest on używany najczęściej wtedy, gdy arkusz jest osadzony w innym dokumencie XML.

- extension-element-prefixes (Nieobsługiwany.)
  - : Określa listę oddzielonych spacjami prefiksów przestrzeni nazw dla elementów rozszerzenia wewnątrz tego dokumentu.

- exclude-result-prefixes
  - : Określa dowolną przestrzeń nazw użytą w tym dokumencie, która nie powinna zostać wysłana do dokumentu wyjściowego. Lista jest oddzielona za pomocą białych znaków.

### Typ

Wymagany, najbardziej zewnętrzny element arkusza.

### Definicja

XSLT, sekcja 2.2.

### Gecko

Częściowo obsługuje. Zobacz powyższe komentarze.

{{ languages( { "en": "en/XSLT/stylesheet", "fr": "fr/XSLT/stylesheet" } ) }}
