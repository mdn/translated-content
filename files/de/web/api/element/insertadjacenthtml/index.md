---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
tags:
  - .textContent()
  - Geschwindigkeitsvorteil
  - HTML einfügen
  - Méthode
  - Referenz
translation_of: Web/API/Element/insertAdjacentHTML
---
{{APIRef("DOM")}}

## Zusammenfassung

`insertAdjacentHTML()` interpretiert den angegebenen Text als HTML oder XML und fügt resultierende Knoten an angegebener Position ins DOM ein. Das Zielobjekt wird nicht erneut interpretiert, wodurch darin enthaltene, bereits existierende Elemente nicht beeinträchtigt werden.
Eine zusätzlich erforderliche Serialisierung wird vermieden, was einen deutlichen Geschwindigkeitsvorteil gegenüber einer `innerHTML` Manipulation ergibt.

## Syntax

    element.insertAdjacentHTML(position, text);

`position` beschreibt den Einfügepunkt relativ zu einem Element und muss einem der folgenden Schlüsselbegriffe entsprechen:

- `'beforebegin'`
  - : Vor dem `element` selbst.
- `'afterbegin'`
  - : Innerhalb des `element`, direkt _vor dessen erstem_ Kind-Objekt.
- `'beforeend'`
  - : Innerhalb des `element`, direkt _nach dessen letztem_ Kind-Objekt.
- `'afterend'`
  - : Nach dem `element` selbst.

`text` ist die Zeichenfolge, die als HTML oder XML interpretiert und in den DOM-Baum eingesetzt wird.

### Verdeutlichung der position Bezeichner

    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->

> **Hinweis:** Die `beforebegin` und `afterend` Positionierungen wirken nur, wenn der Knoten innerhalb des DOM-Baums steht und ein Eltern-Element hat.

## Beispiel

```js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// Danach sieht die neue Struktur so aus:
// <div id="one">one</div><div id="two">two</div>
```

## Anmerkungen

### Sicherheitsaspekte

Beim Einfügen von HTML in eine Seite sollten keinesfalls unbehandelte Benutzereingaben genutzt werden (siehe 'Escaping').

Für das Einfügen reinen Texts sollte statt `insertAdjacentHTML` besser [`node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent "The Node.textContent property represents the text content of a node and its descendants.") benutzt werden. Diese Methode interpretiert Parameter nicht als HTML, sondern fügt puren Text ein.

## Spezifikation

| Beschreibung                                                                                                                                                                         | Status                               | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------- |
| {{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}} | {{ Spec2('DOM Parsing') }} |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- [hacks.mozilla.org Gastbeitrag](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) von Henri Sivonen mit Testergebnissen, die Geschwindigkeitsvorteile von insertAdjacentHTML in bestimmten Fällen aufzeigen.
