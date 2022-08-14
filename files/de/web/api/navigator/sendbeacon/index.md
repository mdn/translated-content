---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
translation_of: Web/API/Navigator/sendBeacon
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`navigator.sendBeacon()`** Methode dient dazu, kleinere Datenmengen asynchron per HTTP vom User Agent zum Server zu senden.

## Syntax

    navigator.sendBeacon(url, data);

### Parameter

- `url`
  - : Der `url` Parameter steht für die ermittelte URL, an die `data` zu senden ist.

<!---->

- `data`
  - : Der Parameter `data` enthält zu übermittelnde Daten der Art {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}} oder {{domxref("FormData")}}.

### Rückgabewerte

Die **sendBeacon()** Methode gibt `true` zurück, falls der User Agent erfolgreich war, `data` zum Transfer bereit zu stellen. Andernfalls ist der Rückgabewert `false`.

## Beschreibung

Diese Methode erfüllt Bedürfnisse von Analyse- und Diagnostik-Code, der regelmäßig versucht, Daten an den Server zu senden bevor der _unload_ Vorgang einer Seite abgeschlossen ist. Daten schon früher zu senden, könnte eine unvollständige Datensammlung bewirken.
Bislang war es für Entwickler schwierig, sicherzustellen, dass Daten während eines _unload_ Vorgangs tatsächlich gesendet wurden.

Üblicherweise ignorieren User Agenten asynchrone XMLHttpRequests in einem _unload_ Anweisungsblock. Dieses Problem wird in Analytik- und Diagnostik-Code oft umgangen, indem in einem _unload_ oder _beforeunload_ Anweisungsblock ein synchroner XMLHttpRequest zum Datenversand genutzt wird.
Ein synchroner XMLHttpRequest zwingt den User Agenten den unload Vorgang des Dokuments zu verzögern, sodass jedoch die weitere Navigation langsamer wirkt. Der Eindruck einer schlechten Ladezeit der Folgeseite läst sich dabei nicht verhindern.

Es gibt weitere Techniken, die Datenübermittlung zu ermöglichen. Eine besteht darin, den _unload_ Vorgang zu verzögern, indem man ein _image_ Element erzeugt und dessen `src` Attribut innerhalb des unload Anweisungsblocks ändert. Da die meisten User Agenten den _unload_ Vorgang verzögern werden bis das Nachladen des Bildes abgeschlossen ist, können so währenddessen noch Daten übermittelt werden.
Noch eine andere Technnik verwendet eine einige Sekunden lange wirkungsfreie (_noop_) Schleife innerhalb des _unload_ Anweisungsblocks, die das _unload_ verzögert und zwischenzeitliche Datenübermittlung zum Server ermöglicht.

Diese alternativen Techniken stellen allerdings nicht nur schlechte Programmiermuster dar. Einige sind schlicht unzuverlässig und erzeugen den Eindruck schlechter Seitenladezeiten.

Das folgende Beispiel zeigt einen fiktiven Analytik-Code, der versucht, Daten an den Server zu schicken mittels synchronem XMLHttpRequest innerhalb des _unload_ Anweisungsblocks. Dies resultiert in einer Verzögerung des _unload_ Vorgangs der Seite.

```js
window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // der dritte Parameter bewirkt synchrones xhr
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
```

Durch Verwendung der **`sendBeacon()`** Methode werden Daten asynchron an den Server gesendet sobald der User Agent Gelegenheit dazu hat und zwar ohne das _unload_ bzw. das Laden der nächsten Seite zu verzögen.

Das folgende Beispiel zeigt einen fiktiven Analytik-Code, der Daten zum Server sendet mittels **`sendBeacon()`**Methode.

```js
window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
```

## Spezifikation

| Spezifikation                                                                        | Status                   | Kommentar          |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('Beacon', '#sec-sendBeacon-method', 'sendBeacon()')}} | {{Spec2('Beacon')}} | Initial definition |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator", "navigator")}}
