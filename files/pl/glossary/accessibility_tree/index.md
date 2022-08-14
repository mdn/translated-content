---
title: Drzewo dostępności (AOM)
slug: Glossary/Accessibility_tree
tags:
  - AOM
  - DOM
  - Dostępność
  - Słownik
  - źródło
translation_of: Glossary/Accessibility_tree
---
**Drzewo dostępności**, lub **model dostępności obiektu** (**AOM**), zawiera {{Glossary("accessibility")}}-informacje związane z dostępnością dla większości elementów HTML.

Przeglądarki konwertują znaczniki HTML w wewnętrzną reprezentacje zwaną* \_\_[drzewem DOM](/pl/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)*.  Drzewo DOM zawiera obiekty dla wszytskich elementów, atrybutów i węzłów tekstowych danego znacznika HTML. Na podstawie drzewa DOM, przeglądarki tworzą drzewo dostępności, które następnie jest używane przez, konkretne dla danej platformy, API**\_ \_**dostępności do technologi wspomagających, takich jak czytniki ekranu.

Istnieją cztery składniki w obiekcie drzewa dostępności:

- **nazwa**
  - : Jak możemy się odnieść do danego elementu? Na przykład, hiperłącze zawierające tekst ‘Czytaj’ będzie miało nazwę 'Czytaj’ (więcej na temat w jaki sposób nazwy są kalkulowane mozesz dowiedzieć się z artykułu [Specyfikacja kalkulacji dostępnej nazwy i opisu](https://www.w3.org/TR/accname-1.1/)).
- **opis**
  - : W jaki sposób możemy opisać element, jeśli chcemy dodać coś do nazwy? Opis tabeli może wyjaśnić jakiego rodzaju informacje ona prezentuje.
- **rola**
  - : Czym jest dany element? Czy jest to przycisk, pasek nawigacyjny czy lista obiektów?
- **stan**
  - : Czy posiada stan? Na przykład, zaznaczone/odznaczone pole wyboru, zwinięty/rozwinięty element [`<summary>`](/en-US/docs/Web/HTML/Element/summary).

Dodatkowo, drzewo dostępności często zawiera informacje o tym co można z danym elementem, zrobić: hiperłącze można _kliknąć,_ pole tekstowe _wypełnić_, itd.

1.  [Glossary](/pl/docs/Glossary)

    1.  {{Glossary("Accessibility")}}
    2.  {{Glossary("ARIA")}}
