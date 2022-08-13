---
title: Manipulieren des Browser-Verlaufes
slug: Web/API/History_API
tags:
  - Verlauf
translation_of: Web/API/History_API
original_slug: Web/Guide/DOM/Manipulating_the_browser_history
---
Das DOM {{ domxref("window") }} Objekt stellt Zugriffsmöglichkeiten auf den Browser-Verlauf über das {{ domxref("window.history", "history") }} Objekt bereit. Es bietet nützliche Methoden und Einstellungen, die es ermöglichen, den Zurück- und Vorwärts-Button und den Browser-Verlauf zu steuern und – seit HTML5 – diesen auch zu manipulieren

## Durch den Verlauf gehen

Um durch den Verlauf des Benutzers zu gehen gibt es die Methoden `back()`, `forward()` und `go()`.

### Vor und zurück bewegen

Um im Verlauf zurück zu navigieren, nutze:

```js
window.history.back();
```

Dies hat denselben Effekt, wie wenn der Benutzer den Zurück-Knopf drückt.

Auf ähnliche Weise kann so vorwärts navigiert werden:

```js
window.history.forward();
```

### An einen bestimmten Punkt im Verlauf springen

Mit der Methode `go()` ist es möglich, eine spezifische Seite aus dem Verlauf zu laden, welche relativ zur momentanen Seite im Verlauf steht. Die aktuelle Seite hat hierbei natürlich Index 0.

Um eine Seite rückwärts zu gehen (äquivalent zu `back()`):

```js
window.history.go(-1);
```

Um eine Seite vorwärts zu gehen (äquivalent zu `forward()`):

```js
window.history.go(1);
```

Gleichermassen ist es möglich, 2 Seiten vorwärts mit `go(2)` zu gehen, 3 rückwärts mit `go(-3)` und so weiter.

Die Anzahl der Seiten im history-Stapel kann mithilfe der Eigenschaft `length` bestimmt werden:

```js
var numberOfEntries = window.history.length;
```

> **Hinweis:** Der Internet Explorer unterstützt das Übergeben von String URLs als Parameter für `go()`; dies ist nicht standardisiertes Verhalten und wird von Gecko nicht unterstützt.

## Hinzufügen und Ändern von Verlaufseinträgen

{{ gecko_minversion_header("2") }}

Mit HTML5 wurden die Methoden `history.pushState()` und `history.replaceState()` eingeführt, welche jeweils das Hinzufügen und die Manipulation von Verlaufseinträgen ermöglichen. Diese stehen in Verbindung mit dem {{ domxref("window.onpopstate") }}-Event.

Wenn `history.pushState()` benutzt wird, ändert das den Referrer der als HTTP-Header in danach erstellten [`XMLHttpRequest`](/en/DOM/XMLHttpRequest "en/XMLHttpRequest")-Objekten genutzt wird. Der Referrer wird die URL des Dokumentes sein, dessen Fenster `this` zur Zeit der Erstellung des [`XMLHttpRequest`](/en/DOM/XMLHttpRequest "en/XMLHttpRequest")-Objektes ist.

### Beispiel für die pushState()-Methode

Angenommen, http\://mozilla.org/foo.html führt folgendes JavaScript aus:

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "seite 2", "bar.html");
```

Das ändert die angezeigte URL zu http\://mozilla.org/bar.html, bringt den Browser aber nicht dazu, `bar.html` zu laden oder überhaupt dessen Existenz zu überprüfen.

Man nehme weiter an, der Benutzer navigiert zu http\://google.com und klickt dann Zurück. Zu diesem Zeitpunkt wird die URL-Bar http\://mozilla.org/bar.html anzeigen, und die Seite erhält ein `popstate`-Event mit einem _Status-Objekt_, das eine Kopie von `stateObj` darstellt. Die Seite selbst wird aussehen wie `foo.html`, aber während dem `popstate`-Event kann der Inhalt bearbeitet worden sein.

Wenn der Benutzer noch einmal Zurück drückt, ändert sich die URL zu http\://mozilla.org/foo.html, und die Seite erhält ein weiteres `popstate`-Event, dieses Mal mit einem `null` _Status-Objekt_. Auch hier wird der Inhalt der Seite nicht geändert, wenn das nicht manuell im `popstate`-Event vollzogen wird.

### Die pushState()-Methode

`pushState()` übernimmt drei Parameter: ein _state_ Objekt, einen _title_ (welcher aktuell noch ignoriert wird), und (optional) eine _URL_. Betrachten wir die einzelnen Parameter genauer:

- **state-Objekt** — Das Status-Objekt ist ein JavaScript-Objekt, das mit dem per `pushState()` neu erzeugten history-Eintrag verknüpft ist. Jedesmal wenn der Benutzer zu diesem neuen Status navigiert, wird ein `popstate`-Event ausgelöst. Die `state`-Eigenschaft des Events enthält dabei eine Kopie des Status-Objektes des history-Eintrages.

  Das Status-Objekt kann alles sein, was sich serialisieren lässt. Weil Firefox state-Objekte auf dem Speicher den Nutzers ablegt, lassen sie sich auch wiederherstellen, nachdem der Nutzer seinen Browser neu gestartet hat, das serialisierte Abbild des Status-Objekt ist dabei auf 640k Zeichen begrenzt. Wird ein größeres Status-Objekt an `pushState()` übergeben, gibt die Methode eine _Exception_ aus. Wenn mehr Speicherplatz benötigt wird, sollte `sessionStorage` und/oder `localStorage` verwendet werden.

- **title** — Aktuell ignoriert Firefox diesen Parameter, wenngleich er in Zukunft verwendet werden könnte. Um gegenüber zukünftigen Änderungen abgesichert zu sein, empfiehlt sich, einen leeren String zu übergeben. Alternativ kann man hier einen kurzen Titel für den Status hinterlassen.
- **URL** — Der neue history-Eintrag erhält mit diesem Parameter seine URL. Man beachte, dass der Browser nicht versuchen wird, nach einem Aufruf von `pushState()` diese URL zu laden, aber später dennoch versuchen könnte, beispielsweise nachdem der Nutzer seinen Browser neu gestartet hat. Die neue URL muss nicht absolute sein; wenn sie relativ ist, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss denselben Ursprung haben wie die aktuelle, sonst gibt `pushState()` eine _Exception_ zurück. Dieser Parameter ist optional; falls er übergeben wird, wird er auf die aktuelle URL des _documents_ gesetzt.

> **Hinweis:** In Gecko 2.0 {{ geckoRelease("2.0") }} bis Gecko 5.0 {{ geckoRelease("5.0") }} wird das übergebene Objekt mittels JSON serialisiert. Ab Gecko 6.0 {{ geckoRelease("6.0") }}, übernimmt der[structured clone algorithm](/en/DOM/The_structured_clone_algorithm "en/DOM/The structured clone algorithm") die Serialisierung des Objekts. Dies erlaubt eine größere Vielfalt an Objekten, die sich sicher serialisieren lassen.

In gewissem Sinne ist der Aufruf von `pushState()` ähnlich dem Setzen von `window.location = "#foo"`, insofern beide einen weiteren history-Eintrag sowohl erzeugen als auch aktivieren, der mit dem aktuellen Document verbunden ist. Aber `pushState()` hat ein paar Vorteile:

- Die neue URL kann irgendeine URL desselben Ursprungs sein wie die aktuelle URL.
  Im Gegensatz dazu bleibt `window.location` nur dann im selben {{ domxref("document") }} selbst wenn man nur den _hash_ ändert.
- Man muss nicht die URL ändern, wenn man nicht will.
  Im Gegensatz dazu erzeugt `window.location = "#foo";` nur dann einen neuen history-Eintrag, wenn der aktuelle _hash_ nicht `#foo` ist.

  - Es lassen sich auch willkürliche Daten mit dem neuen history-Eintrag verbinden. Mit dem _hash_-basierten Ansatz müssen alle relevanten Daten in einen kurzen String kodiert werden.

Man beachte, dass `pushState()` niemals das Auslösen eines `hashchange`-Events verursacht, selbst wenn sich die neue URL von der alten nur durch ihren _hash_ unterscheidet.

### Die replaceState()-Methode

`history.replaceState()` arbeitet genauso wie `history.pushState()`, abgesehen davon, dass `replaceState()` den aktuellen history-Eintrag verändert, statt einen neuen zu erzeugen.

`replaceState()` ist insbesondere nützlich, um das _Status_-Objekt oder die URL des aktuellen history-Eintrages als Reaktion auf eine Benutzer-Aktion zu aktualisieren.

> **Hinweis:** In Gecko 2.0 {{ geckoRelease("2.0") }} bis Gecko 5.0 {{ geckoRelease("5.0") }} wird das übergebene Objekt mittels JSON serialisiert. Ab Gecko 6.0 {{ geckoRelease("6.0") }}, übernimmt der[structured clone algorithm](/en/DOM/The_structured_clone_algorithm "en/DOM/The structured clone algorithm") die Serialisierung des Objekts. Dies erlaubt eine größere Vielfalt an Objekten, die sich sicher serialisieren lassen.

### Beispiel für die replaceState()-Methode

Angenommen, http\://mozilla.org/foo.html führt folgendes JavaScript aus:

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

Die Erläuterung dieser beiden Zeilen findet sich in unter "Beispiel für die pushState()-Metode". Weiterhin nehme man an, http\://mozilla.org/bar.html würde dieses JavaScript ausführen:

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

Dies lässt den Browser http\://mozilla.org/bar2.html in der Adresszeile anzeigen, aber nicht `bar2.html` laden oder auch nur prüfen, ob `bar2.html` existiert.

Nehmen wir nun an, dass der Nutzer zu http\://www\.microsoft.com navigiert und dann auf den Zurück-Button des Browsers drückt. Dann wird die Adresszeile http\://mozilla.org/bar2.html anzeigen. Drückt der Benutzer den Zurück-Button nun nochmals, zeigt die Adresszeile http\://mozilla.org/foo.html und umgeht bar.html vollständig.

### The popstate event

A `popstate` event is dispatched to the window every time the active history entry changes. If the history entry being activated was created by a call to `pushState` or affected by a call to `replaceState`, the `popstate` event's `state` property contains a copy of the history entry's state object.

See {{ domxref("window.onpopstate") }} for sample usage.

### Reading the current state

When your page loads, it might have a non-null state object. This can happen, for example, if the page sets a state object (using `pushState()` or `replaceState()`) and then the user restarts her browser. When your page reloads, the page will receive an onload event, but no popstate event. However, if you read the history.state property, you'll get back the state object you would have gotten if a popstate had fired.

You can read the state of the current history entry without waiting for a `popstate` event using the `history.state` property like this:

```js
var currentState = history.state;
```

## Examples

For a complete example of AJAX web site, please see: [Ajax navigation example](/de/docs/DOM/Manipulating_the_browser_history/Example).

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("window.history") }}
- {{ domxref("window.onpopstate") }}

{{ languages( { "ja": "ja/DOM/Manipulating_the_browser_history"} ) }}
