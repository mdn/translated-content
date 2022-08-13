---
title: event.charCode
slug: Web/API/KeyboardEvent/charCode
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/KeyboardEvent/charCode
original_slug: Web/API/Event/charCode
---
{{ ApiRef() }}

### Podsumowanie

Zwraca kod Unicode dla klawisza znaku, który został wciśnięty, w zdarzeniu [keypress](pl/DOM/element.onkeypress).

### Składnia

    znak = event.charCode

### Parametry

- `znak` to wartość kodu Unicode klawisza, który został wciśnięty.

### Uwagi

W zdarzeniu [keypress](pl/DOM/element.onkeypress) kod Unicode wciśniętego klawisza jest przechowywany albo we własności [`keyCode`](pl/DOM/event.keyCode) albo w `charCode`, nigdy w obydwu. Jeśli wciśnięcie klawisza skutkowałoby wprowadzeniem znaku (np. 'a'), `charCode` ustawiany jest dla kodu tego znaku, z uwzględnieniem wielkości (małe lub duże litery) znaku (np. bierze pod uwagę, czy wciśnięto klawisz shift). W przeciwnym przypadku, naciśnięty klawisz przechowywany jest w `keyCode`.

`charCode` nigdy nie jest ustawiany w zdarzeniach [keydown](pl/DOM/element.onkeydown) i [keyup](pl/DOM/element.onkeyup). W tych przypadkach ustawiany jest `keyCode`.

Aby pobrać kod klawisza niezależnie, czy jest przechowywany w `keyCode` czy w `charCode`, sprawdź właściwość [which](pl/DOM/event.which).

Znaki wprowadzane poprzez IME nie są rejestrowane poprzez `keyCode` ani `charCode`. (IME - program pozwalający wprowadzać skomplikowane znaki, np. japońskie bądź chińskie - przyp. tłum.)

Listę wartości `charCode` związanych z poszczególnymi klawiszami możesz znaleźć uruchamiając [Przykład 7: Wyświetlanie stałych obiektu event](pl/Dokumentacja_Gecko_DOM/Przyk%c5%82ady_u%c5%bcycia_DOM).

### Specyfikacja

Nie należy do specyfikacji. Zobacz [nsIDOMKeyEvent](pl/NsIDOMKeyEvent).

{{ languages( { "en": "en/DOM/event.charCode" } ) }}
