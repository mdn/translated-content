---
title: Element.querySelector()
slug: Web/API/Element/querySelector
translation_of: Web/API/Element/querySelector
---
{{APIRef}}

Gibt das erste Unterelement des Elements, von dem es aufgerufen wird, zurück, auf das die angegebenen Selektoren zutreffen.

## Syntax

    element = baseElement.querySelector(selectors);

- `element` und `baseElement` sind {{domxref("element")}}-Objekte.
- `selectors` ist eine Gruppe von [selectors](/de/docs/Web/Guide/CSS/Getting_Started/Selectors).

## Beispiel

In diesem Beispiel wird das erste `style` Element aus dem body Element zurückgegeben, das den type `text/css` oder keinen type hat.

```js
var el = document.body.querySelector("style[type='text/css'], style:not([type])");
```

## Bemerkungen

Gibt `null` zurück, wenn keine Elemente gefunden werden, andernfalls das Element.

Eine `SYNTAX_ERR` Ausnahme tritt auf, wenn die angegebenen Selektoren ungültig sind.

querySelector() wurde in der WebApps API eingeführt.

Das Argument `querySelector` muss der CSS Syntax folgen. Siehe {{domxref("document.querySelector")}} für konkrete Beispiele.

## Browserkompatibilität

| Browser           | Support         | Anmerkungen                                                    |
| ----------------- | --------------- | -------------------------------------------------------------- |
| Internet Explorer | 8               | Nur CSS 2.1 Selektoren (IE8)                                   |
| Firefox (Gecko)   | **3.5** (1.9.1) |                                                                |
| Opera             | 10              |                                                                |
| Chrome            | 1               |                                                                |
| Safari (webkit)   | 3.2 (525.3)     | [webk.it/16587](https://bugs.webkit.org/show_bug.cgi?id=16587) |

## Spezifikation

- {{spec("http://www.w3.org/TR/selectors-api/","Selectors API Level 1","rec")}}
- {{spec("http://www.w3.org/TR/selectors-api2/","Selectors API Level 2","wd")}}
- {{spec("http://dev.w3.org/2006/webapi/selectors-api2/","Selectors API Level 2","ed")}}

## Siehe auch

- [`element.querySelectorAll`](/de/docs/DOM/Element.querySelectorAll)
- [`document.querySelector`](/de/docs/DOM/Document.querySelector)
- [`document.querySelectorAll`](/de/docs/DOM/Document.querySelectorAll)
- [Codeausschnitte für querySelector](/de/docs/Code_snippets/QuerySelector)
