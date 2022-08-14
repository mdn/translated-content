---
title: Storage.setItem()
slug: Web/API/Storage/setItem
tags:
  - API
  - Méthode
  - Referenz
  - Speicher
  - Webspeicher
  - localStorage
  - sessionStorage
translation_of: Web/API/Storage/setItem
---
{{APIRef("Web Storage API")}}

Die Methode `setItem()` der {{domxref("Storage")}}-Schnittstelle fügt das gegebene Schlüssel-Wert-Paar zum Speicher hinzu oder überschreibt ein bereits unter diesem Schlüssel im Speicher vorhandenes.

## Syntax

    storage.setItem(keyName, keyValue);

### Parameter

- _keyName_
  - : Ein {{domxref("DOMString")}} mit dem Schlüssel des Datensatzes, der erstellt oder überschrieben werden soll.
- _keyValue_
  - : Ein {{domxref("DOMString")}} mit dem Wert, der in den mit keyName benannten Datensatz geschrieben werden soll.

### Rückgabewert

Keiner.

### Fehler

`setItem()` kann bei vollem Speicher eine Exception auslösen. Insbesondere im mobilen Safari (ab iOS 5) wird sie immer ausgelöst, falls der Nutzer sich im privaten Modus befindet, da Safari in diesem Modus das Speicherkontingent auf 0 Bytes setzt. Andere Browser nutzen für den privaten Modus einen separaten Daten-Container.
Deshalb sollte immer sichergestellt sein, dass **ein möglicher Fehler eingeplant und entsprechend behandelt wird.**

## Beispiel

Die folgende Funktion erstellt drei Datensätze im [localStorage](/de/docs/Web/API/Window/localStorage)-Objekt.

    function populateStorage() {
      localStorage.setItem('bgcolor', 'red');
      localStorage.setItem('font', 'Helvetica');
      localStorage.setItem('image', 'myCat.png');
    }

> **Note:** **Hinweis**: Weitere Beispiele sind im [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-setitem', 'Storage.setItem')}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat}}

Alle Browser haben verschiedene Kapazitäten für localStorage und sessionStorage. Hier gibt es eine [detaillierten Übersicht der Kapazitäten verschiedener Browser](http://dev-test.nemikor.com/web-storage/support-test/).

> **Note:** **Hinweis:** Seit iOS 5.1, speichert Safari Mobile localStorage-Daten im Cache-Ordner, der gelegentlich durch das Betriebssystem geleert wird, insbesondere falls nur noch wenig freier Speicher zur Verfügung steht.

## Siehe auch

- [Storage.getItem()](/de/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/de/docs/Web/API/Storage/removeItem)
- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
