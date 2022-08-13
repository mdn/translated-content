---
title: MutationObserver
slug: Web/API/MutationObserver
tags:
  - Beobachter-Muster
  - DOM-Knoten
  - Fortgeschrittene
  - Observer Pattern
  - Programmierung
  - Wertänderungen verfolgen
  - Änderungen überwachen
translation_of: Web/API/MutationObserver
---
{{APIRef("DOM")}}

Der `MutationObserver` ermöglicht es, auf Änderungen im [DOM](/de/docs/DOM)-Element zu reagieren. Er löst die [Mutation Events](/de/docs/DOM/Mutation_events) aus der DOM3 Events Spezifikation ab.

## Konstruktor

### `MutationObserver()`

Konstruktor zum Instanziieren neuer DOM-MutationObservers.

    MutationObserver(
      function callback
    );

###### Parameters

- `callback`
  - : Die Funktion wird bei jeder Veränderung am DOM-Element ausgelöst. Der Observer (Beobachter) ruft die Callbackfunktion mit zwei Argumenten auf. Das erste ist ein Array aus [`MutationRecord`](#MutationRecord)-Objekten. Das zweite ist diese Instanz des `MutationObserver`.

## Methoden

| `void observe( {{domxref("Node")}} target, MutationObserverInit options );` |
| -------------------------------------------------------------------------------- |
| `void disconnect();`                                                             |
| `Array takeRecords();`                                                           |

### `observe()`

Registriert die Instanz von `MutationObserver` , um Meldungen über Veränderungen DOM-Elements der angegebenen Node zu erhalten.

    void observe(
      {{domxref("Node")}} target,
      MutationObserverInit options
    );

###### Parameters

- `target`
  - : Die {{domxref("Node")}} , zu dem Veränderungen im DOM beobachtet werden sollen.
- `options`
  - : Ein [`MutationObserverInit`](#MutationObserverInit)-Objekt, das angibt, welche DOM-Veränderungen gemeldet werden sollen.

> **Note:** Anmerkung: Einen Observer zu einem Element hinzufügen funktioniert genau wie addEventListener - man kann es auch von mehreren Observern gleichzeitig beobachten lassen. Das heißt, wenn man ein Element doppelt beobachtet, feuert es nicht zweimal und man muss auch nicht zweimal disconnect() aufrufen. Mit anderen Worten: wenn man ein Element beobachtet, macht es keinerlei Unterschied, wenn man es durch dasselbe Objekt nochmal beobachten lässt. Wenn es von einem anderen Objekt beobachtet wird, dann wird natürlich zusätzlich ein weiterer Observer angehängt.

### `disconnect()`

Sorgt dafür, dass die `MutationObserver`-Instanz die Überwachung der DOM-Benachrichtigungen beendet. Bis die [`observe()`](<#observe()>) -Methode erneut benutzt wird, wird die Callback-Methode des Observers nicht aufgerufen.

    void disconnect();

### `takeRecords()`

Leert die Nachrichten-Kette ("record queue") der `MutationObserver` Instanz gibt den vorher dort vorhandenen Inhalt zurück.

    Array takeRecords();

###### Return value

Gibt ein Array mit [`MutationRecord`s](#MutationRecord) zurück.

## `MutationObserverInit`

`MutationObserverInit` ist ein Objekt, das die folgenden Eigenschaften enthalten (und damit festlegen) kann:

> **Note:** Anmerkung: Als Mindestanforderung muss `childList`, `attributes`, oder `characterData` auf `true` gesetzt werden. Anderenfalls wird ein Fehler "Ungültiger String angegeben" ("An invalid or illegal string was specified") ausgelöst.

| Property                | Description                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `childList`             | Wenn Kindelemente (child nodes) der Ziel-Node (inklusive Textnodes) beobachtet werden sollen, muss `childList`auf `true` gesetzt werden.                                |
| `attributes`            | Muss auf `true` gesetzt werden, wenn Veränderungen an Attributen der Ziel-Node (target node) beobachtet bzw. berichtet werden sollen.                                    |
| `characterData`         | Muss `true` sein, wenn Veränderungen an den Daten der Ziel-Node beobachtet werden sollen.                                                                                |
| `subtree`               | Auf `true` setzen, wenn nicht nur Änderungen an der Ziel-Node (target node) beobachtet werden sollen, sondern auch Veränderungen von dessen Kindelementen (child nodes). |
| `attributeOldValue`     | Muss auf `true` gesetzt werden, wenn `attributes` ebenfalls `true` ist und der Wert des target-node-Attributs _vor_ der Veränderung ebenfalls gemeldet werden soll.      |
| `characterDataOldValue` | Muss auf `true` gesetzt werden, wenn `characterData` ebenfalls `true` ist und der Wert von data _vor_ der Veränderung ebenfalls gemeldet werden soll.                    |
| `attributeFilter`       | Mit dieser Eigenschaft kann ein Array mit lokalen Attributnamen angegeben werden (ohne Namespace), wenn nicht alle Attribute beobachtet werden sollen.                   |

## `MutationRecord`

Als erstes Argument wird an die Callback-Funktion des Observers ein Array aus `MutationRecord`-Objekten übergeben. Ein `MutationRecord`-Objekt beinhaltet die folgenden Eigenschaften:

| Property             | Type                               | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`               | `String`                           | Gibt `attributes` zurück, wenn die Veränderung eine Änderung an Attributen der Node gewesen ist, `characterData` wenn Veränderungen an der `CharacterData`-Node vorgenommen wurden, und `childList` wenn es sich um eine Veränderung an den untergeordneten Knoten im Baum handelt.       |
| `target`             | `{{domxref("Node")}}`         | Gibt die von der Veränderung betroffene Node zurück, abhängig von `type`. Bei `attributes` das Element, von dem Attribute geändert wurden. Bei `characterData` wird die `CharacterData`-Node zurückgegeben. Bei `childList` die Node, deren untergeordnete Kindelemente verändert wurden. |
| `addedNodes`         | `{{domxref("NodeList")}}` | Gibt die hinzugefügten Nodes zurück. Wenn keine hinzugefügt wurden, wird eine leere NodeList zurückgegeben.                                                                                                                                                                               |
| `removedNodes`       | `{{domxref("NodeList")}}` | Gibt die entfernten Nodes zurück. Wenn keine entfernt wurden, wird eine leere NodeList zurückgegeben.                                                                                                                                                                                     |
| `previousSibling`    | `{{domxref("Node")}}`         | Gibt den vorhergehenden Sibling der hinzugefügten oder entfernten Node(s) zurück, sonst `null`.                                                                                                                                                                                           |
| `nextSibling`        | `{{domxref("Node")}}`         | Gibt den folgenden Sibling der hinzugefügten oder entfernten Node(s) zurück, sonst `null`.                                                                                                                                                                                                |
| `attributeName`      | `String`                           | Gibt den lokalen Namen des geänderten Attributs zurück, sonst `null`.                                                                                                                                                                                                                     |
| `attributeNamespace` | `String`                           | Gibt den lokalen Namespace des geänderten Attributs zurück, sonst `null`.                                                                                                                                                                                                                 |
| `oldValue`           | `String`                           | Rückgabewert hängt vom `type`ab. Bei `attributes` wird der Wert des Attributs vor der Änderung zurückgegeben. Bei `characterData`, der Wert von Data vor der Änderung. Bei `childList` wird `null` zurückgegeben.                                                                        |

## Nutzungsbeispiel

Das folgende Beispiel wurde aus [diesem Blog-Post](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/) übernommen.

```js
// zu überwachende Zielnode (target) auswählen
var target = document.querySelector('#some-id');

// eine Instanz des Observers erzeugen
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });
});

// Konfiguration des Observers: alles melden - Änderungen an Daten, Kindelementen und Attributen
var config = { attributes: true, childList: true, characterData: true };

// eigentliche Observierung starten und Zielnode und Konfiguration übergeben
observer.observe(target, config);

// später: Observation wieder einstellen
observer.disconnect();
```

## Weiterführende Informationen (engl.)

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](http://code.google.com/p/mutation-summary/)
- [The DOM standard](http://dom.spec.whatwg.org/#mutation-observers) which defines the `MutationObserver` interface

## Browserkompatibilität

{{Compat}}
