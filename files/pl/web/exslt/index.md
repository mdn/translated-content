---
title: EXSLT
slug: Web/EXSLT
tags:
  - Dokumentacje
  - EXSLT
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/EXSLT
---
{{ XsltRef() }}
EXSLT to zestaw rozszerzeń języka [XSLT](pl/XSLT). Program Firefox obsługuje następujące spośród wielu istniejących modułów:

- [Pakiet podstawowy](#Pakiet_podstawowy) (`exsl`)
  - : Podstawowe elementy i funkcje rozszerzeń.
- [Pakiet matematyczny](#Pakiet_matematyczny) (`math`)
  - : Procedury służące do porównywania węzłów.
- [Wyrażenia regularne](#Wyra.C5.BCenia_regularne) (`regexp`)
  - : Mechanizmy wspomagające korzystanie z wyrażeń regularnych w składni języka JavaScript.
- [Zestawy](#Zestawy) (`set`)
  - : Procedury do obsługi zestawów.
- [Ciągi znaków](#Ci.C4.85gi_znak.C3.B3w) (`str`)
  - : Funkcje służące do manipulowania ciągami znaków.

### Korzystanie z EXSLT

Aby skorzystać z rozszerzenia EXSLT, należy zadeklarować jego przestrzeń nazw jako przestrzeń nazw rozszerzenia w arkuszu stylów. W poniższym przykładzie używany jest pakiet wyrażeń regularnych:

    <xsl:stylesheet version="1.0"
                    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                    xmlns:regexp="http://exslt.org/regular-expressions"
                    extension-element-prefixes="regexp">

    <xsl:import href="regexp.xsl" />

    ...

    </xsl:stylesheet>

### Pakiet podstawowy

Pakiet podstawowy EXSLT zawiera główne funkcje rozszerzające możliwości języka XSLT. Przestrzeń nazw pakietu podstawowego to `http://exslt.org/common`.

#### Funkcje

- [exsl:node-set](pl/EXSLT/exsl/node-set)
- [exsl:object-type](pl/EXSLT/exsl/object-type)

### Pakiet matematyczny

Pakiet matematyczny EXSLT zawiera funkcje służące do operacji na wartościach numerycznych oraz do porównywania węzłów. Przestrzeń nazw pakietu matematycznego to `http://exslt.org/math`.

#### Funkcje

- [math:highest](pl/EXSLT/math/highest)
- [math:lowest](pl/EXSLT/math/lowest)
- [math:max](pl/EXSLT/math/max)
- [math:min](pl/EXSLT/math/min)

### Wyrażenia regularne

Pakiet wyrażeń regularnych EXSLT zawiera funkcje umożliwiające sprawdzanie, dopasowywanie i zastępowanie tekstu za pomocą wyrażeń regularnych w formie stosowanej w języku JavaScript.

Przestrzeń nazw pakietu wyrażeń regularnych EXSLT to `http://exslt.org/regular-expressions`.

#### Funkcje

- [regexp:match](pl/EXSLT/regexp/match)
- [regexp:replace](pl/EXSLT/regexp/replace)
- [regexp:test](pl/EXSLT/regexp/test)

### Zestawy

Pakiet zestawów EXSLT zawiera funkcje pozwalające na manipulowanie zestawami. Przestrzeń nazw dla tych funkcji to `http://exslt.org/sets`.

#### Funkcje

- [set:difference](pl/EXSLT/set/difference)
- [set:distinct](pl/EXSLT/set/distinct)
- [set:intersection](pl/EXSLT/set/intersection)
- [set:has-same-node](pl/EXSLT/set/has-same-node)
- [set:leading](pl/EXSLT/set/leading)
- [set:trailing](pl/EXSLT/set/trailing)

### Ciągi znaków

Pakiet ciągów znaków EXSLT zawiera funkcje służące do manipulowania ciągami znaków. Przestrzeń nazw tego pakietu to `http://exslt.org/strings`.

#### Funkcje

- [str:concat](pl/EXSLT/str/concat)
- [str:split](pl/EXSLT/str/split)
- [str:tokenize](pl/EXSLT/str/tokenize)

### Zobacz także

- [Witryna internetowa EXSLT](http://www.exslt.org/)

{{ languages( { "en": "en/EXSLT", "es": "es/EXSLT", "fr": "fr/EXSLT", "ja": "ja/EXSLT" } ) }}
