---
title: Node.textContent
slug: Web/API/Node/textContent
tags:
  - API
  - DOM
  - Eigenschaft
  - Kommando API
  - NeedsSpecTable
  - Referenz
translation_of: Web/API/Node/textContent
---
{{APIRef("DOM")}}

Die **`Node.textContent`** Eigenschaft repräsentiert den Text-Inhalt einer Node und ihrer untergeordneten Elemente.

## Syntax

    var text = element.textContent;
    element.textContent = "Dies ist ein Beispiel-Text";

## Beschreibung

- `textContent` gibt `null` zurück, wenn das Element ein D[ocument](/de/docs/DOM/document "DOM/Document"), ein Dokumenten-Typ oder eine Notation ist. Um den gesamten Text und die CDATA Daten für das gesamte Dokument zu bekommen, kann man `document.documentElement.textContent` benutzen.
- Handelt es sich bei der Node um eine CDATA Sektion, einen Kommentar, eine Prozess-Anweisun oder eine Text-Node, dann gibt `textContent` den Text in dieser Node zurück (den [nodeValue](/de/docs/DOM/Node.nodeValue "DOM/Node/NodeValue/Node.nodeValue")).
- Für andere Node-Typen gibt `textContent` die aneinander gehängten `textContent` Attribute aller Kind-Nodes zurück, aber ohne Kommentare und Prozess-Anweisungen. Dies ist ein leerer String, wenn die Node keine Kinder hat.
- Wenn man diese Eigenschaft setzt, werden alle Kinder der Node ersetzt und mit einer einzelnen Text-Node ersetzt, die den neuen Wert beinhaltet.

### Unterschiede zu `innerText`

Internet Explorer hat `element.innerText` eingeführt. Die Absicht ist ähnlich, weist aber die folgenden Unterschiede auf:

- Während `textContent` den Inhalt aller Element, inklusive {{HTMLElement("script")}} und {{HTMLElement("style")}} Elementen, liefert, macht die IE-spezifische Eigenschaft `innerText` dies nicht.
- `innerText` kennt den Stil und gibt keinen Text versteckter Elemente zurück, was `textContent` hingegen tut.
- Da `innerText` den CSS-Stil kennt, verursacht es einen Reflow, während `textContent` dies nicht tut.

### Unterschiede zu `innerHTML`

`innerHTML` gibt, wie der Name schon sagt, das HTML zurück. Sehr häufig wird dies benutzt, um den Text aus einem Element abzurufen oder ihn zu ändern. Stattdessen sollte lieber `textContent` verwendet werden. Da der Text nicht als HTML geparst wird, ist es sehr wahrscheinlich, dass die Performance besser ist. Weiterhin umgeht man so auch einen möglichen XSS-Angriffspunkt.

## Beispiel

```js
// Nehmen wir das folgende HTML Fragment:
//   <div id="divA">Hier ist <span>etwas</span> Text</div>

// Abrufen des Text-Inhalts:
var text = document.getElementById("divA").textContent;
// |text| wird auf "Hier ist etwas Text" gesetzt

// Setzen des Text-Inhalts:
document.getElementById("divA").textContent = "Hier ist auch Text";
// Das HTML von divA sieht nun so aus:
//   <div id="divA">Hier ist auch Text</div>
```

## Browser Kompatibilität

{{Compat("api.Node.textContent")}}

## Spezifikation

- [textContent](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent)
