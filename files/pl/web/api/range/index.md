---
title: range
slug: Web/API/Range
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Range
---
{{ ApiRef("DOM") }}Obiekt `Range` reprezentuje fragment dokumentu, który stanowi węzeł oraz część węzła tekstowego w danym dokumencie.

A range can be created using the [`createRange`](pl/DOM/document.createRange) method of the [`Document`](pl/DOM/document) object. Range objects can also be retrieved by using the [`getRangeAt`](pl/DOM/Selection/getRangeAt) method of the [`selection`](pl/DOM/Selection) object.

### Własności

- [collapsed](pl/DOM/range.collapsed)
  - : Returns a boolean indicating whether the range's start and end points are at the same position.
- [commonAncestorContainer](pl/DOM/range.commonAncestorContainer)
  - : Returns the deepest Node that contains the startContainer and endContainer Nodes.
- [endContainer](pl/DOM/range.endContainer)
  - : Returns the Node within which the Range ends.
- [endOffset](pl/DOM/range.endOffset)
  - : Returns a number representing where in the endContainer the Range ends.
- [startContainer](pl/DOM/range.startContainer)
  - : Returns the Node within which the Range starts.
- [startOffset](pl/DOM/range.startOffset)
  - : Returns a number representing where in the startContainer the Range starts.

### Metody

#### Metody pozycjonowania

Te metody ustawiają punkt początkowy i końcowy obiektu range.

- [setStart](pl/DOM/range.setStart)
  - : Ustawia pozycję początkową obiektu range.
- [setEnd](pl/DOM/range.setEnd)
  - : Ustawia pozycję końcową obiektu range.
- [setStartBefore](pl/DOM/range.setStartBefore)
  - : Ustawia pozycję początkowa dla obiektu range w odniesieniu do innego węzła.
- [setStartAfter](pl/DOM/range.setStartAfter)
  - : Ustawia pozycję początkowa dla obiektu range w odniesieniu do innego węzła.
- [setEndBefore](pl/DOM/range.setEndBefore)
  - : Ustawia pozycję końcową dla obiektu range w odniesieniu do innego węzła.
- [setEndAfter](pl/DOM/range.setEndAfter)
  - : Ustawia pozycję końcową dla obiektu range w odniesieniu do innego węzła.
- [selectNode](pl/DOM/range.selectNode)
  - : Ustawia obiekt range, aby zawierał węzeł wraz z jego zawartością.
- [selectNodeContents](pl/DOM/range.selectNodeContents)
  - : Ustawia obiekt range, aby zawierał zawartość węzła.
- [collapse](pl/DOM/range.collapse)
  - : Zawija obiekt range do jednego z jego punktów granicznych.

#### Metody edytujące

These methods retrieve Nodes from a range and modify the contents of a range.

- [cloneContents](pl/DOM/range.cloneContents)
  - : Returns a document fragment copying the nodes of a Range.
- [deleteContents](pl/DOM/range.deleteContents)
  - : Removes the contents of a Range from the document.
- [extractContents](pl/DOM/range.extractContents)
  - : Moves contents of a Range from the document tree into a document fragment
- [insertNode](pl/DOM/range.insertNode)
  - : Insert a node at the start of a Range.
- [surroundContents](pl/DOM/range.surroundContents)
  - : Moves content of a Range into a new node.

#### Inne metody

- [compareBoundaryPoints](pl/DOM/range.compareBoundaryPoints)
  - : Porównuje punkty graniczne dwóch obiektów range.
- [cloneRange](pl/DOM/range.cloneRange)
  - : Zwraca obiekt range z punktami granicznymi identycznymi z klonowanym obiektem range.
- [detach](pl/DOM/range.detach)
  - : Releases Range from use to improve performance.
- [toString](pl/DOM/range.toString)
  - : Zwraca tekst z obiektu range.

#### Metody Gecko

Ta sekcja opisuje szczególne metody `Range` Mozilli nie będące częścią specyfikacji W3C DOM.

- [compareNode](pl/DOM/range.compareNode) {{ Obsolete_inline() }}
  - : Zwraca stałą opisującą czy węzeł znajduje się przed, za, wewnątrz lub otacza obiekt range .
- [comparePoint](pl/DOM/range.comparePoint)
  - : Zwraca -1, 0 lub 1 wskazując czy punkt porównania występuje przed, wewnątrz lub za obiektem range.
- [createContextualFragment](pl/DOM/range.createContextualFragment)
  - : Zwraca fragment dokumentu utworzony z danego łańcucha kodu.
- [intersectsNode](pl/DOM/range.intersectsNode) {{ Obsolete_inline() }}
  - : Zwraca wartość Boolean określającą czy dany węzeł przecina obiekt range.
- [isPointInRange](pl/DOM/range.isPointInRange)
  - : Zwraca wartość Boolean określającą czy dany punkt jest zawarty w obiekcie range.
