---
title: Document.querySelector()
slug: Web/API/Document/querySelector
tags:
  - API
  - DOM
  - Funktion
  - Methode(2)
  - Méthode
  - Referenz
  - Selektor
  - Selektoren
translation_of: Web/API/Document/querySelector
---
{{ApiRef("DOM")}}

Die Methode **`querySelector()`** von {{domxref("Document")}} gibt das erste {{domxref("Element")}} innerhalb eines Dokuments zurück, welches dem angegebenen Selektor bzw. Selektoren entspricht. Wurden keine Übereinstimmungen gefunden wird `null` zurückgegeben.

> **Hinweis:** Der Abgleich erfolgt indem sämtliche Knoten des Dokuments und deren Unterknoten der Reihe nach mittels Tiefensuche in Hauptreihenfolge (_depth-first pre-order_) durchlaufen werden.

## Syntax

    element = document.querySelector(selectors);

### Parameter

- `selectors`
  - : Ein {{domxref("DOMString")}} mit einem oder mehreren Selektoren die abgeblichen werden sollen. Dieser String muss ein gültiger CSS-Selektor-String sein. Ist dies nicht der Fall, wird eine `SYNTAX_ERR` Exception ausgelöst. Weitere Informationen zu Selektoren und deren Verwaltung finden Sie unter [DOM Elemente mittels Selektoren ermitteln](/de/docs/Gecko-DOM-Referenz/DOM_Elemente_mittels_Selektoren_ermitteln).

> **Hinweis:** Zeichen, die nicht zur Standard-CSS-Syntax gehören, müssen mit einem Backslash-Zeichen maskiert werden. Da JavaScript auch Backslash-Escape-Anweisungen verwendet, müssen Sie beim Schreiben von String-Literalen mit diesen Zeichen besonders vorsichtig sein. Weitere Informationen finden Sie unter [Sonderzeichen maskieren](#sonderzeichen_maskieren).

### Rückgabewert

Ein {{domxref("Element")}}-Objekt, das das erste Element des Dokuments darstellt, das der angegebenen Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_Selectors) entspricht, oder `null`, wenn keine Übereinstimmungen vorhanden sind.

Wenn Sie eine Liste aller Elemente benötigen, die mit den angegebenen Selektoren übereinstimmen, verwenden Sie stattdessen {{domxref("document.querySelectorAll()", "querySelectorAll()")}}.

### Exceptions

- `SYNTAX_ERR`
  - : Die Syntax der angegebenen Selektoren ist ungültig.

## Nutzungshinweise

Wenn der angegebene Selektor mit einer ID übereinstimmt, die im Dokument fälschlicherweise mehrmals vorkommt, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) geben niemals Elemente zurück, wie in der [Selektoren-API](https://www.w3.org/TR/selectors-api/#grammar) angegeben.

### Sonderzeichen maskieren

Um mit einer ID oder Selektoren abzugleichen, die nicht der Standard-CSS-Syntax entsprechen (z. B. durch einen unzulässigen Doppelpunkt oder Leerzeichen), müssen Sie das Zeichen mit einem Backslash ("`\`") maskieren. Da der Backslash selbst ebenfalls ein Maskierungszeichen in JavaScript ist, müssen Sie ihn bei der Eingabe eines Stringliterals _zweimal_ maskieren (einmal für den JavaScript String und einmal für `querySelector()`):

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log('#foo\bar');               // "#fooar" (\b is the backspace control character)
  document.querySelector('#foo\bar');    // Does not match anything

  console.log('#foo\\bar');              // "#foo\bar"
  console.log('#foo\\\\bar');            // "#foo\\bar"
  document.querySelector('#foo\\bar'); // Match the first div

  document.querySelector('#foo:bar');    // Does not match anything
  document.querySelector('#foo\\:bar');  // Match the second div
</script>
```

## Beispiele

### Erstes Element ermitteln, das mit einer Klasse übereinstimmt

In diesem Beispiel wird das erste Element im Dokument mit der Klasse "`myclass`" zurückgegeben:

```js
var el = document.querySelector(".myclass");
```

### Ein komplexerer Selektor

Selektoren können auch sehr mächtig sein, wie das folgende Beispiel zeigt. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`) innerhalb eines {{HTMLElement("div")}}, dessen Klasse "user-panel main" ist (`<div class="user-panel main">`), im Dokument zurückgegeben:

```js
var el = document.querySelector("div.user-panel.main input[name='login']");
```

## Spezifikationen

| Specification                                                                                                            | Status                                       | Comment             |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------- |
| {{SpecName("Selectors API Level 2", "#interface-definitions", "document.querySelector()")}} | {{Spec2("Selectors API Level 2")}} |                     |
| {{SpecName("Selectors API Level 1", "#interface-definitions", "document.querySelector()")}} | {{Spec2("Selectors API Level 1")}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Document.querySelector")}}

## Siehe auch

- [DOM Elemente mittels Selektoren ermitteln](/de/docs/Gecko-DOM-Referenz/DOM_Elemente_mittels_Selektoren_ermitteln)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
- [Code-Ausschnitte für querySelector](/de/docs/Code_snippets/QuerySelector)
