---
title: Selection
slug: Web/API/Selection
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Selection
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

### Podsumowanie

Klasa obiektu zwracanego przez [`window.getSelection()`](pl/DOM/window.getSelection) i inne metody.

### Opis

Obiekt reprezentujący [zakresy](pl/DOM/range), które zaznaczył użytkownik. Zazwyczaj przechowuje tylko jeden zakres, który pobieramy następująco:

    range = sel.getRangeAt(0);

Wywołanie metody [`toString()`](pl/DOM/Selection/toString) zwróci tekst znajdujący się wewnątrz zaznaczenia, na przykład:

    selObj = window.getSelection();
    window.alert(selObj);

### Słownik

Inne kluczowe pojęcia używane w tym dziale.

- kotwica (anchor)
  - : Kotwicą zaznaczenia jest jego właściwy początek. Kiedy tworzymy zaznaczenie przy użyciu myszki, kotwica w dokumencie znajduje się dokładnie tam, gdzie początkowo został wciśnięty przycisk myszki. Gdy użytkownik zmienia zaznaczenie używając myszki lub klawiatury, kotwica nie zmienia swego położenia.
- skupienie (focus)
  - : Skupieniem zaznaczenia jest jego właściwy koniec. Kiedy tworzymy zaznaczenie przy użyciu myszki, jej skupienie jest dokładnie tam, gdzie przycisk myszki zostaje zwolniony. Gdy użytkownik zmienia zaznaczenie używając myszki lub klawiatury, skupienie zmienia swe położenie na koniec tego zaznaczenia.
- zakres (range)
  - : Zakres to przyległa część dokumentu. Zakres może zawierać zarówno całe węzły, jak i ich części, jak np. wycinek węzła tekstowego. Użytkownik zazwyczaj wybiera tylko jedno zaznaczenie w danej chwili, jednak możliwe jest zaznaczenie kilku fragmentów na raz (na przykład używając klawisza Control). Zakres może być pobrany z zaznaczenia jako obiekt [zakresu](pl/DOM/range). Obiekty zakresów mogą być również utworzone poprzez DOM i programowo dodane lub usunięte z zaznaczenia.

### Własności

- [anchorNode](pl/DOM/Selection/anchorNode)
  - : Zwraca węzeł, w którym rozpoczyna się zaznaczenie.
- [anchorOffset](pl/DOM/Selection/anchorOffset)
  - : Zwraca pozycję, gdzie kotwica zaznaczenia znajduje się w węźle `anchorNode`.
- [focusNode](pl/DOM/Selection/focusNode)
  - : Zwraca węzeł, w którym kończy się zaznaczenie.
- [focusOffset](pl/DOM/Selection/focusOffset)
  - : Zwraca pozycję, gdzie skupienie zaznaczenia znajduje się w węźle `focusNode`
- [isCollapsed](pl/DOM/Selection/isCollapsed)
  - : Zwraca wartość logiczną wskazującą czy początek zaznaczenia znajduje się w tym samym miejscu, co jego koniec.
- [rangeCount](pl/DOM/Selection/rangeCount)
  - : Zwraca liczbę zakresów znajdujących się w zaznaczeniu.

### Metody

- [getRangeAt](pl/DOM/Selection/getRangeAt)
  - : Zwraca obiekt zakresu reprezentujący jeden z obecnie zaznaczonych zakresów.
- [collapse](pl/DOM/Selection/collapse)
  - : Zawęża aktualne zaznaczenie do pojedynczego punktu.
- [extend](pl/DOM/Selection/extend)
  - : Przesuwa koniec zaznaczenia do podanego punktu.
- [collapseToStart](pl/DOM/Selection/collapseToStart)
  - : Przesuwa koniec zaznaczenia do tego samego miejsca, w którym znajduje się początek.
- [collapseToEnd](pl/DOM/Selection/collapseToEnd)
  - : Przesuwa początek zaznaczenia do tego samego miejsca, w którym znajduje się koniec. Sam koniec zaznaczenia nie zmienia swojego położenia.
- [selectAllChildren](pl/DOM/Selection/selectAllChildren)
  - : Dodaje wszystkie dzieci podanego węzła do zaznaczenia.
- [addRange](pl/DOM/Selection/addRange)
  - : Obiekt zakresu, który zostanie dodany do zaznaczenia.
- [removeRange](pl/DOM/Selection/removeRange)
  - : Usuwa zakres z zaznaczenia
- [removeAllRanges](pl/DOM/Selection/removeAllRanges)
  - : Usuwa wszystkie zakresy z zaznaczenia.
- [deleteFromDocument](pl/DOM/Selection/deleteFromDocument)
  - : Usuwa zawartość zaznaczenia z dokumentu.
- [selectionLanguageChange](pl/DOM/Selection/selectionLanguageChange)
  - :
- [toString](pl/DOM/Selection/toString)
  - : Zwraca ciąg znaków, który jest obecnie reprezentowany przez obiekt zaznaczenia, tj. aktualnie zaznaczony tekst.
- [containsNode](pl/DOM/Selection/containsNode)
  - : Wskazuje czy konkretny węzeł jest częścią zaznaczenia.

### Zobacz także

[window.getSelection](pl/DOM/window.getSelection), [Range](pl/DOM/range)

### Odnośniki zewnętrzne

- [IDL definition in Mozilla cross-reference](http://lxr.mozilla.org/mozilla/source/content/base/public/nsISelection.idl)
