---
title: Operatory
slug: Web/JavaScript/Guide/Expressions_and_Operators
tags:
  - JavaScript
  - Przewodnik_JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Guide/Expressions_and_Operators
translation_of_original: Web/JavaScript/Guide/Obsolete_Pages/Operators
original_slug: >-
  Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_języku_JavaScript_1.5/Operatory
---
### Operatory

JavaScript posiada następujące typy operatorów. Ten temat opisuje operatory i wartości informacyjne o operatorach pierwszeństwa.

- [Operatory przypisania](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_przypisania)
- [Operatory porównania](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_por%c3%b3wnania)
- [Operatory arytmetyczne](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_arytmetyczne)
- [Operatory bitowe](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_bitowe)
- [Operatory logiczne](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_logiczne)
- [Operacje na łańcuchach](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operacje_na_%c5%82a%c5%84cuchach)
- [Operatory specjalne](pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Operatory/Operatory_specjalne)

JavaScript posiada po dwa operatory bitowe i unarne. Operator bitowy zwraca dwa argumenty, jeden przed operatorem i jeden za operatorem:

    argument1 operator argument2

Na przykład, `3+4` lub `x*y`.
Operator unarny zwraca pojedynczy znak argumentu, znaki te zapisujemy przed lub za operatorem:

    operator argument

lub

    argument operator

Na przykład, `x++` lub `++x`.

Uzupełniając, JavaScript posiada potrójny operator, jakim jest operator warunkowy. Potrójny operator zwraca trzy argumenty.

#### Pierwszeństwo operatorów

| Typ operatora                       | Indywidualny operator                    |
| ----------------------------------- | ---------------------------------------- |
| przecinek                           | ,                                        |
| przypisania                         | = += -= \*= /= %= <<= >>= >>>= &= ^= \|= |
| warunkowy                           | ?:                                       |
| logiczne "LUB"                      | \|\|                                     |
| logiczne "I"                        | &&                                       |
| bitowe "LUB"                        | \|                                       |
| bitowe "XOR"                        | ^                                        |
| bitowe "I"                          | &                                        |
| porównanie                          | == != === !==                            |
| relacji                             | < <= > >= in instanceof                  |
| przesunięcie bitowe                 | << >> >>>                                |
| dodawanie/odejmowanie               | + -                                      |
| mnożenie/dzielenie/modulo           | \* / %                                   |
| negacja/inkrementacja/dekrementacja | ! ~ - + ++ -- typeof void delete         |
| nazwa / tworzenie przykładu         | () new                                   |
| pamięci                             | . []                                     |

**Tabela: Operatory pierwszeństwa**

{{ PreviousNext("Przewodnik po języku JavaScript 1.5:Wyrażenia", "Przewodnik po języku JavaScript 1.5:Operatory:Operatory przypisania") }}

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Guide/Operators", "es": "es/Gu\u00eda_JavaScript\_1.5/Operadores", "fr": "fr/Guide_JavaScript\_1.5/Op\u00e9rateurs", "ja": "ja/Core_JavaScript\_1.5\_Guide/Operators" } ) }}
