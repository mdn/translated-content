---
title: Document.getElementById()
slug: Web/API/Document/getElementById
tags:
  - API
  - DOM
  - Méthode
  - Referenz
translation_of: Web/API/Document/getElementById
---
{{ ApiRef("DOM") }}Gibt eine Referenz zu einem Element anhand seiner [ID](/de/docs/DOM/element.id "en-US/docs/DOM/element.id") zurück.

## Syntax

    element = document.getElementById(id);

### Parameter

- `element `ist eine Referenz zu einem [Element](/de/docs/DOM/element "en-US/docs/DOM/element")-Objekt oder `null` wenn sich kein Element mit der angegebenen ID im Dokument befindet.
- `id `ist ein String, der auf Groß- und Kleinschreibung achtet und die einmalige ID des gesuchten Elements darstellt.

## Beispiel

```html
<!DOCTYPE html>
<html>
<head>
  <title>getElementById Beispiel</title>
  <script>
  function changeColor(newColor) {
    var elem = document.getElementById("para1");
    elem.style.color = newColor;
  }
  </script>
</head>
<body>
  <p id="para1">Irgendein Text</p>
  <button onclick="changeColor('blue');">Blau</button>
  <button onclick="changeColor('red');">Rot</button>
</body>
</html>
```

## Anmerkungen

Neue Benutzer sollten beachten, dass die Groß- und Kleinschreibung bei "Id" im Namen der Methode korrekt sein _muss_, damit der Code funktioniert - 'getElementByID' funktioniert _nicht_, auch wenn es richtig zu sein scheint.

Wenn kein Element mit der angegebenen id existiert, gibt die Funktion `null `zurück. Beachte, dass der ID-Parameter auf Groß- und Kleinschreibung achtet. Daraus folgt, dass `document.getElementById("Main") `anstatt des Elements `<div id="main">` `null` zurückgibt, weil "M" und "m" für den Zweck der Methode unterschiedlich sind.

**Elemente die sich nicht im Dokument befinden** werden nicht von `getElementById `gesucht. Wenn man ein Element erstellt und ihm eine ID zuweist, so muss man das Element mit [`insertBefore`](https://developer.mozilla.org/en-US/docs/DOM/Node.insertBefore "en-US/docs/DOM/Node.insertBefore") oder einer ähnlichen Methode in den Dokumentenbaum einfügen, bevor man darauf mit `getElementById` zugreifen kann.

```js
var element = document.createElement("div");
element.id = 'testqq';
var el = document.getElementById('testqq'); // el wird null!
```

**Nicht-HTML-Dokumente.** Die DOM-Implementierung muss eine Information enthalten, welche angibt, welches Attribut vom Typ ID ist. Attribute mit dem Namen "id" sind solange nicht vom Typ ID bis sie in der Dokumenttypdefinition als solche definiert werden. Das `id`-Attribut ist in gebräuchlichen Fällen wie bei [XHTML](/de/docs/XHTML "en-US/docs/XHTML"), [XUL](/de/docs/XUL "en-US/docs/XUL") und anderen als ID-Typ definiert. Implementierungen, die nicht wissen, ob ein Attribut vom Typ ID ist oder nicht geben erwartungsgemäß `null `zurück.

**Browserkompatibilität**

{{Compat}}

## Spezifikation

`getElementById` wurde in DOM Level 1 für HTML Dokumente eingeführt und in DOM Level 2 zu allen Dokumenten verschoben.

- DOM Level 2 Spezifikation: [getElementById](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBId)

## Siehe auch

- [document](/de/docs/DOM/document "en-US/docs/DOM/document") Referenz für andere Methoden und Eigenschaften, die man benutzen kann um Referenzen zu Elementen im Dokument zu bekommen.
- [document.querySelector()](/de/docs/Web/API/document.querySelector) für Selektoren mit Abfragen wie `'div.myclass'`
- [xml:id](/de/docs/xml/xml:id "en-US/docs/xml/id") - hat eine Hilfsmethode, die es `getElementById `erlaubt, "xml:id" in XML-Dokumenten zu erhalten (wie es z.B. von Ajax-Aufrufen zurückgegeben wird)
