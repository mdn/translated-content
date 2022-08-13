---
title: Document.dir
slug: Web/API/Document/dir
translation_of: Web/API/Document/dir
---
{{ApiRef("")}}

Die **`Document.dir`** Eigenschaft ist ein {{domxref("DOMString")}}, welcher die direktionaler Bedeutung von einem Text eines Dokuments repräsentiert. Entweder von links nach rechts (Standard) oder rechts nach links. Mögliche Werte sind `'rtl'` rechts nach links, und `'ltr',` links nach rechts.

## Syntax

    dirStr = document.dir;
    document.dir = dirStr;

## Spezifikationen

| Spezifikationen                                                                                              | Status                           | Kommentar              |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName("HTML WHATWG", "dom.html#the-dir-attribute:dom-dir", "Document.dir")}} | {{Spec2("HTML WHATWG")}} | Initiale Spezifikation |

## Browserkompatibilität

{{Compat}}

\[1] Vor Firefox 23, hat die `Document.dir` Eigenschaft "ltr" wiedergegeben. unabhängig der Einstellung von dem dir-Attribut im Haupt-Element (root) {{htmlelement("html")}}. Und wenn eine Richtung im `<html>` gesetzt war, hatte die Veränderung der Sichtbarkeit keinen Effekt (obwohl der spätere Abruf des `Document.dir` wird behaupten, dass die Direktionalität geändert wurde). Wenn ein solches Attribut nicht im `<html>` gesetzt ist und die Eigenschaft geändert wurde, werden beide sichtbaren direktionale geändert und die `document.dir` Eigenschaft wird die Änderung korrekt wiedergeben.

## Siehe auch

- <http://msdn.microsoft.com/en-us/library/ms533731.aspx>
