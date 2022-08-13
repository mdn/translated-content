---
title: Poprawki SVG w Firefoksie 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
tags:
  - Firefox 3
  - SVG
  - Wszystkie_kategorie
translation_of: Mozilla/Firefox/Releases/3/SVG_improvements
original_slug: Poprawki_SVG_w_Firefoksie_3
---
{{FirefoxSidebar}}

W programie Firefox 3 wprowadzono wiele udoskonaleń obsługi formatu [skalowalnej grafiki wektorowej](pl/SVG) (SVG) w porównaniu z poprzednimi wersjami przeglądarki. Nowe funkcje są szczegółowo omówione w odpowiedniej dokumentacji — niniejszy artykuł zawiera jedynie listę nowości, jakie pojawiły się w Firefoksie 3.

- Obsługiwany jest element `foreignObject` ({{ Bug(326966) }}). Aby uzyskać szczegółowe informacje, zapoznaj się ze [specyfikacją](http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) lub [tym artykułem](http://weblogs.mozillazine.org/roc/archives/2006/06/the_future_is_now.html).
- Obsługiwany jest element `pattern` ([specyfikacja](http://www.w3.org/TR/SVG11/pservers.html#PatternElement)).
- Obsługiwany jest element `mask` ([specyfikacja](http://www.w3.org/TR/SVG11/masking.html#MaskElement)).
- Obsługiwane są wszystkie filtry SVG 1.1 ([specyfikacja](http://www.w3.org/TR/SVG11/filters.html)):

  - `filter`,
  - `feDistantLight`,
  - `fePointLight`,
  - `feSpotLight`,
  - `feBlend`,
  - `feColorMatrix`,
  - `feConvolveMatrix`,
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`,
  - `feComposite`,
  - `feConvolveMatrix`,
  - `feDiffuseLighting`,
  - `feDisplacementMap`,
  - `feDistantLight`,
  - `feFlood`,
  - `feGaussianBlur`,
  - `feImage`,
  - `feMerge`, `feMergeNode`,
  - `feMorphology`,
  - `feOffset`,
  - `fePointLight`,
  - `feSpecularLighting`,
  - `feTurbulence`,
  - `feTile`.

- Naprawiono błędy w obsłudze elementu `<a>` w kodzie SVG; patrz {{ Bug(267664) }}, {{ Bug(268135) }}, {{ Bug(316248) }}, {{ Bug(317270) }} i {{ Bug(320724) }}.
- Zaimplementowano metody SVG DOM `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` i `getCharNumAtPosition()`.
- Obsługiwany jest atrybut `xml:space` ([specyfikacja](http://www.w3.org/TR/SVG/text.html#WhiteSpace)).
- Obsługiwane są własności `fill` i `stroke` ([specyfikacja](http://www.w3.org/TR/SVG/painting.html#SpecifyingPaint)).
- Rozmiary można podawać w jednostkach `em` i `ex` ({{ Bug(305859) }}).

### Zobacz także

- [SVG](pl/SVG)
- [SVG w Firefoksie](pl/SVG_w_Firefoksie)
- [Firefox 3 dla programistów](pl/Firefox_3_dla_programist%c3%b3w)



{{ languages( { "en": "en/SVG_improvements_in_Firefox\_3", "es": "es/Mejoras_SVG_en_Firefox\_3", "fr": "fr/Am\u00e9liorations_SVG_dans_Firefox\_3", "ja": "ja/SVG_improvements_in_Firefox\_3" } ) }}
