---
title: element.replaceChild
slug: Web/API/Node/replaceChild
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/replaceChild
original_slug: Web/API/Element/replaceChild
---
{{ ApiRef() }}

### Podsumowanie

Zastępuje dziecko węzła innym węzłem.

### Składnia

    węzełZastąpiony =węzełRodzic.replaceChild(noweDziecko,stareDziecko);

- `noweDziecko` to nowy węzeł, który ma zastąpić `stareDziecko`. Jeśli węzeł ten istnieje już gdzieś indziej w DOM, najpierw jest stamtąd usuwany.
- `stareDziecko` to istniejące dziecko, które ma zostać zastąpione.
- `węzełZastąpiony` to węzeł, który został zastąpiony. Jest to ten sam węzeł, co `stareDziecko`.

### Przykład

    // <div>
    //  <span id="childSpan">foo bar</span>
    // </div>

    // utwórz węzeł pustego elementu
    // bez ID, atrybutów i zawartości
    var sp1 = document.createElement("span");

    // nadaj mu ID 'newSpan'
    sp1.setAttribute("id", "newSpan");

    // utwórz jakąś zawartość dla nowego elementu
    var sp1_content = document.createTextNode("Nowy element span.");

    // wstaw tę zawartość
    sp1.appendChild(sp1_content);

    // stwórz referencję do istniejącego węzła, który ma zostać zastąpiony
    var sp2 = document.getElementById("childSpan");
    var parentDiv = sp2.parentNode;

    // zastąp istniejący węzeł sp2 elementem span sp1
    parentDiv.replaceChild(sp1, sp2);

### Specyfikacja

[DOM Level 1 Core: replaceChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild)

[DOM Level 2 Core: replaceChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307)



{{ languages( { "en": "en/DOM/element.replaceChild", "fr": "fr/DOM/element.replaceChild", "ja": "ja/DOM/element.replaceChild" } ) }}
