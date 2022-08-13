---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
tags:
  - API
  - Attribut
  - DOM
  - Element
  - Méthode
translation_of: Web/API/Element/removeAttribute
---
{{ APIRef("DOM") }}

`removeAttribute` entfernt ein Attribut vom gegebenen Element.

## Syntax

    element.removeAttribute(attrName);

- `attrName` ist der Name des zu entfernenden Attributs (ein String).

## Beispiel

    // <div id="div1" align="left" width="200px">
    document.getElementById("div1").removeAttribute("align");
    // now: <div id="div1" width="200px">

## Anmerkungen

Man sollte `removeAttribute` verwenden, statt den Attributswert auf `null zu setzen` (mit [setAttribute](/en/DOM/element.setAttribute "en/DOM/element.setAttribute")).

Der Versuch, ein nicht vorhandenes Attribut zu entfernen, wirft keine Exception.

{{ DOMAttributeMethods() }}

## Spezifikation

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (eingeführt in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))
