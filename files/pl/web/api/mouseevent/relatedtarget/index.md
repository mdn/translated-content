---
title: event.relatedTarget
slug: Web/API/MouseEvent/relatedTarget
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/relatedTarget
translation_of_original: Web/API/event.relatedTarget
original_slug: Web/API/Event/relatedTarget
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje na drugi cel zdarzenia.

### Składnia

    eventTarget = event.relatedTarget

### Parametry

- `eventTarget` to referencja do dodatkowego celu zdarzenia (obiektu `EventTarget`).

### Przykład

    var rel = event.relatedTarget;
    // dump("LEAVING " + (rel ? rel.localName : "null") + "\n");
    // relatedTarget is null when the titletip is first shown:
    // a mouseout event fires because the mouse is exiting
    // the main window and entering the titletip "window".
    // relatedTarget is also null when the mouse exits the main
    // window completely, so count how many times relatedTarget
    // was null after titletip is first shown and hide popup
    // the 2nd time
    if (!rel) {
      ++this._mouseOutCount;
      if (this._mouseOutCount > 1)
        this.hidePopup();
      return;
    }
    // find out if the node we are entering is one of our
    // anonymous children
    while (rel) {
      if (rel == this)
        break;
      rel.parentNode;
    }
    // if the entered node is not a descendant of ours, hide
    // the tooltip
    if (rel != this && this._isMouseOver) {
      this.hidePopup();
    }

### Uwagi

Za specyfikacją W3C: "Obecnie ten atrybuty używany jest przy zdarzeniu [mouseover](pl/DOM/element.onmouseover), gdzie kieruje do `EventTarget`, jaki opuściło urządzenie wskazujące oraz przy zdarzeniu [mouseout](pl/DOM/element.onmouseout), gdzie kieruje do EventTarget, w który weszło urządzenie wskazujące."

Powyzszy przykład jest typowy - właściwość **relatedTarget** używana jest by znaleźć, jeśli jest związany z tym zdarzeniem, kolejny element. Zdarzenia takie jak najechanie myszą (
_mouseover_
) są powiązane z konkretnym elementem docelowym, ale mogą też angażować drugi cel, jak np. element opuszczany przez mysz w momencie, gdy najechania na główny cel.

### Specyfikacja

[relatedTarget](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-relatedTarget)

{{ languages( { "en": "en/DOM/event.relatedTarget" } ) }}
