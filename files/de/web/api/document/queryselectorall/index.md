---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
tags:
  - API
  - Document
  - querySelectorAll
translation_of: Web/API/Document/querySelectorAll
---
{{APIRef("DOM")}}

Die Methode **`querySelectorAll()`** von {{domxref("Document")}} gibt eine statische (nicht live) {{domxref("NodeList")}} zurück, die eine Liste der Elemente des Dokuments darstellt, die mit der angegebenen Selektorgruppe übereinstimmen.

> **Hinweis:** Diese Methode wird basierend auf dem Mixin der Methode {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} von {{domxref("ParentNode")}} implementiert.

## Syntax

    elementList = parentNode.querySelectorAll(selectors);

### Parameter

- `selectors`
  - : Ein {{domxref("DOMString")}} der einen oder mehrere Selektoren zum Abgleich enthält. Dieser String muss ein valider [CSS-Selektor](/de/docs/Web/CSS/CSS_Selectors)-String sein, andernfalls wird eine `SyntaxError` Exception ausgelöst. Weitere Informationen zu Selektoren und deren Verwaltung finden Sie unter [DOM Elemente mittels Selektoren ermitteln](/de/docs/Gecko-DOM-Referenz/DOM_Elemente_mittels_Selektoren_ermitteln). Es können mehrere durch Kommata getrennte Selektoren angegeben werden.

> **Hinweis:** Zeichen, die nicht zur Standard-CSS-Syntax gehören, müssen mit einem Backslash-Zeichen maskiert werden. Da JavaScript auch Backslash-Escape-Anweisungen verwendet, müssen Sie beim Schreiben von String-Literalen mit diesen Zeichen besonders vorsichtig sein. Weitere Informationen finden Sie unter [Sonderzeichen maskieren](#sonderzeichen_maskieren).

### Rückgabewert

Eine statische (nicht-live) {{domxref("NodeList")}} mit je einem {{domxref("Element")}}-Objekt für jedes Element das mind. einem der angegebenen Selektoren entspricht oder eine leere {{domxref("NodeList")}} im Falle keiner Übereinstimmungen.

> **Hinweis:** Wenn `selectors` ein [CSS Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthält ist die zurückgegebene Liste immer leer.

### Exceptions

- `SyntaxError`
  - : Die Syntax des `selectors`-String ist ungültig.

## Beispiele

### Eine Liste von Übereinstimmungen erhalten

Um eine {{domxref("NodeList")}} aller {{HTMLElement("p")}}-Elemente des Dokuments zu erhalten:

```js
var matches = document.querySelectorAll("p");
```

Das folgende Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente innerhalb des Dokuments zurück, deren Klasse entweder `"note"` oder `"alert"` ist:

```js
var matches = document.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste von `<p>`-Elementen, deren unmittelbares übergeordnetes Element ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und die sich in einem Container befinden, dessen ID `"test"` ist.

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

Das folgende Beispiel nutzt einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste von {{HTMLElement("iframe")}}-Elementen im Dokument zurückzugeben, die ein `"data-src"` Attribut besitzen:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attribut-Selektor verwendet, um eine Aufzählung der Listenelemente zurückzugeben, die in einer Liste mit der ID `"userlist"` enthalten sind und deren Attribut `"data-active"` den Wert `"1"` hat:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### Auf Übereinstimmungen zugreifen

Sobald die {{domxref("NodeList")}} der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie jedes Array untersuchen. Wenn das Array leer ist (d. h. die Eigenschaft `length` 0 ist), wurden keine Übereinstimmungen gefunden.

Ansonsten können Sie einfach die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede allgemeine Schleifenanweisung verwenden, wie etwa:

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

## Benutzerhinweise

`querySelectorAll()` verhält sich anders als die meisten JavaScript-DOM-Bibliotheken, was zu unerwarteten Ergebnissen führen kann.

### HTML

Betrachten Sie dieses HTML mit seinen drei geschachtelten {{HTMLElement("div")}} Blöcken.

```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```

### JavaScript

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
```

Wenn Sie in diesem Beispiel `".outer .inner"` im Kontext des `<div>` mit der Klasse `"select"` auswählen, wird das Element mit der Klasse `".inner"` immer noch gefunden, obwohl `.outer` kein Nachkomme des Basis-Elements ist, auf dem die Suche durchgeführt wird (`".select"`). Standardmäßig überprüft `querySelectorAll()` nur, ob sich das letzte Element im Selektor im Suchbereich befindet.

Die {{cssxref(":scope")}} Pseudo-Klasse stellt das erwartete Verhalten wieder her, bei dem Selektoren nur mit Nachkommen des Basis-Elements übereinstimmen:

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Spezifikationen

| Specification                                                                                                                                | Status                                       | Comment              |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName("DOM WHATWG", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}             | {{Spec2("DOM WHATWG")}}             | Lebender Standard    |
| {{SpecName("Selectors API Level 2", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}} | {{Spec2("Selectors API Level 2")}} | Keine Änderung       |
| {{SpecName("DOM4", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}                     | {{Spec2("DOM4")}}                     | Initiale Definition  |
| {{SpecName("Selectors API Level 1", "#interface-definitions", "document.querySelector()")}}                     | {{Spec2("Selectors API Level 1")}} | Originale Definition |

## Browserkompatibilität

{{Compat("api.Document.querySelectorAll")}}

## Siehe auch

- [DOM Elemente mittels Selektoren ermitteln](/de/docs/Gecko-DOM-Referenz/DOM_Elemente_mittels_Selektoren_ermitteln)
- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attribut-Selektoren](/de/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors) im MDN Lernbereich
- {{domxref("Element.querySelector()")}} und {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} und {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} und {{domxref("ParentNode.querySelectorAll()")}}
- [Code-Ausschnitte für `querySelector()`](/de/docs/Code_snippets/QuerySelector)
