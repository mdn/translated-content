---
title: output
slug: Web/XSLT/Element/output
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XSLT/Element/output
original_slug: Web/XSLT/output
---
{{ XsltRef() }}

Element `<xsl:output>` kontroluje charakterystyki dokumentu wyjściowego. Aby funkcjonować poprawnie w Netscapie, element musi być użyty z atrybutem method. Od wersji 7.0 `method="text"` działa prawidłowo.

### Składnia

    <xsl:output
    	method="xml" | "html" | "text"
    	version=LANCUCH-ZNAKOW
    	encoding=LANCUCH-ZNAKOW
    	omit-xml-declaration="yes" | "no"
    	standalone="yes" | "no"
    	doctype-public=LANCUCH-ZNAKOW
    	doctype-system=LANCUCH-ZNAKOW
    	cdata-section-elements=LISTA-NAZW
    	indent="yes" | "no"
    	media-type=LANCUCH-ZNAKOW  />

### Wymagane atrybuty

Brak.

### Opcjonalne atrybuty

- `method`
  - : Określa format wyjściowy.

- `version`
  - : Określa wartość atrybutu wersji deklaracji XML lub HTML w dokumencie wyjściowym. Można go używać wyłącznie z `method="html"` lub `method="xml"`.

- `encoding`
  - : Określa wartość atrybutu kodowania `encoding` w dokumencie wyjściowym.

- `omit-xml-declaration`
  - : Wskazuje czy dołączyć do wyjścia deklarację XML. Dozwolone wartości to "`yes`" lub "`no`".

- `standalone` (Niewspierane)
  - : Jeśli obecny wskazuje, że samodzielna deklaracja powinna pojawić się dokumencie wyjściowym; wskazuje również jej wartość. Dozwolone wartości to "yes" lub "no".

- `doctype-public`
  - : Określa wartość atrybutu `PUBLIC` deklaracji `DOCTYPE` w dokumencie wyjściowym.

- `doctype-system`
  - : Określa wartość atrybutu `SYSTEM` deklaracji `DOCTYPE` w dokumencie wyjściowym.

- `cdata-section-elements`
  - : Wypisuje elementy, których treść tekstowa powinna być zapisana jako sekcje `CDATA`. Elementy powinny być oddzielone za pomocą białych znaków.

- `indent` (Niewspierane)
  - : Określa czy wyjście powinno zostać wcięte, aby ukazać jego hierarchiczną strukturę.

- `media-type` (Nieobsługiwany)
  - : Określa typ MIME dokumentu wyjściowego.

### Typ

Element najwyższego poziomu, musi być dzieckiem `<xsl:stylesheet>` lub `<xsl:transform>`.

### Definicja

XSLT, sekcja 16.

### Gecko

Częściowo obsługuje. Zobacz powyższe komentarze.

{{ languages( { "en": "en/XSLT/output", "fr": "fr/XSLT/output" } ) }}
