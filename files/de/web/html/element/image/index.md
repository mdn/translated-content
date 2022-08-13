---
title: <image>
slug: Web/HTML/Element/image
tags:
  - Element
  - HTML
  - HTML-Element
  - HTML-Element-Referenz
  - HTML-Referenz
  - Nicht-Standard
  - Obsolet
  - Referenz
translation_of: Web/HTML/Element/image
---
{{obsolete_header}}{{non-standard_header}}

Das HTML-Element `<image>` ist ein Überbleibsel einer alten Version von HTML, welche im Laufe der Zeit obsolet geworden ist; Stattdessen wird dazu geraten das Standard {{HTMLElement("img")}}-Element zu verwenden. Tatsächlich verwendet die Spezifikation wortwörtlich die Worte "Frag nicht" zur Beschreibung des Elements.

> **Note:** **Nicht benutzen!** Um Bilder darzustellen, verwende das übliche {{HTMLElement("img")}}-Element.

Auch wenn Browser versuchen werden, eine automatische Konvertierung in ein {{HTMLElement("img")}}-Element vorzunehmen, wird das nicht immer so sein, und auch wird der Versuch nicht immer glücken, wegen der unterschiedlichen Wege dorthin. Also benutze das Element einfach nicht, wenn dir an deinen Nutzern etwas gelegen ist.

## Spezifikationen

Es war vielleicht einmal Bestandteil der Spezifikation, aber niemand scheint sich mehr daran zu erinnern. Sicher ist, es ist kein Bestandteil mehr. Vermeide es wie die Pest.

## Browserkompatibilität

Im Allgemeinen werden Browser versuchen das Element in ein `<img>` abzubilden, jedoch nur wenn das {{htmlattrxref("src", "img")}}-Attribute ebenso angegeben ist. Die Erstellung eines`<image>`-Elements ohne ein `src`-Attribut resultiert in ein `HTMLElement`-Objekt mit dem lokalen Elementnamen "image". Wenn das Element jedoch mit einem `src`-Attribut erstellt wurde, ist das Ergebnis stattdessen ein `HTMLImageElement` und sein lokaler Elementname wird geändert zu "img".

Dennoch bedeutet dies nicht, dass es eine gute Idee ist das Element zu nutzen. Ist es nämlich nicht.

{{Compat("html.elements.image")}}

## Siehe auch

- {{HTMLElement("img")}}: Die richtige Art ein Bild in einem Dokument anzuzeigen.
- {{HTMLElement("picture")}}: Eine mächtigere und richtige Art ein Bild in einem Dokument anzuzeigen.

{{HTMLRef}}
