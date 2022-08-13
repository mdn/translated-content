---
title: selectAllChildren
slug: Web/API/Selection/selectAllChildren
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/selectAllChildren
---
{{ ApiRef() }}

### Podsumowanie

Dodaje wszystkie dzieci podanego węzła do zaznaczenia. Poprzednie zaznaczenie jest usuwane.

### Składnia

    sel.selectAllChildren(parentNode)

### Parametry

- _`parentNode`_
  - : Wszystkie dzieci węzła
    _`parentNode`_
    będą wybrane. Samo
    _`parentNode`_
    nie będzie częścią zaznaczenia.

### Przykłady

    footer = document.getElementById("footer");
    window.getSelection().selectAllChildren(footer);
    /* Wszystko wewnątrz footer jest teraz wybrane */





{{ languages( { "en": "en/DOM/Selection/selectAllChildren", "es": "es/DOM/Selection/selectAllChildren", "it": "it/DOM/Selection/selectAllChildren" } ) }}
