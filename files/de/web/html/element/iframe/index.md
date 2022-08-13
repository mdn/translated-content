---
title: iframe
slug: Web/HTML/Element/iframe
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/iframe
---
Mit dem `<iframe>` HTML Element („inline frame“) kann eine weitere HTML Seite in die aktuelle Seite eingebunden werden.

Genau wie [\<frame>](/de/HTML/Element/frame "de/HTML/Element/frame")s, verfügen `<iframe>`s über ein [`window.frame`](/de/DOM/window.frames "de/DOM/window.frames") Pseudo-Array.

### Attribute

Legt den Namen des Frames fest, sodass dieser Ziel eines [HTML Anker Element](/de/HTML/Element/a "de/HTML/Element/a") (mit dem `target` Attribut) werden kann.

- src
  - : Bestimmt die URL der Seite, die eingebunden werden soll.
- width
  - : Gibt die Breite des Frames in Prozent oder in Pixeln an.
- height
  - : Gibt die Höhe des Frames in Prozent oder in Pixeln an.
- frameborder
  - : Legt die Breite des Frame-Rahmens fest.
- name
  - : ...

### Scripting

Mit dem DOM `iframe` Element können Scripte Zugang zum [`window`](/de/DOM/window "de/DOM/window") Objekt der eingebundenen HTML Seite über die `contentWindow` Eigenschaft erhalten. Die `contentDocument` Eigenschaft bezieht sich auf das Dokument innerhalb des `iframe` Elements (gleichbedeutend zu `contentWindow.document`), wird aber nicht von Internet Explorer Versionen vor IE8 unterstützt.

Aus dem Inneren eines Frames kann ein Script über [`window.parent`](/de/DOM/window.parent "de/DOM/window.parent") einen Bezug zum Elternelement herstellen.

Die Scripte, die versuchen Zugang zum Inhalt eines Frames zu erhalten, unterliegen der [„Same-origin policy“](/de/JavaSkripts_gleicher_Herkunft "de/JavaSkripts_gleicher_Herkunft"), und können auf die meisten Eigenschaften nicht zugreifen, wenn das Dokument von einer anderen Domain geladen wird. Das betrifft auch Skripte innerhalb eines Frames, die versuchen sich Zugang zum übergeordneten Fenster zu verschaffen. Domain-übergreifende Kommunikation kann per [`window.postMessage`](/de/DOM/window.postMessage "de/DOM/window.postMessage") erreicht werden.

### Beispiel

    var iframe = window.getElementsByTagName( "iframe" )[ 0 ];
    alert( "Frame title: " + iframe.contentWindow.title );

{{HTMLRef}}
