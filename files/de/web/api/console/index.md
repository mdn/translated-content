---
title: Console
slug: Web/API/Console
tags:
  - API
  - DOM
  - Debugging
  - Reference
  - web console
translation_of: Web/API/Console
---
{{APIRef("Console API")}}

Das **`Console`** Objekt bietet Zurgiff auf die Debugging-Konsole des Browsers (z. B. die [Web-Konsole](/de/docs/Tools/Web_Console) in Firefox). Die Einzelheiten der Funktionsweise sind von Browser zu Browser unterschiedlich, es gibt jedoch _de facto_ eine Reihe von Funktionen, die normalerweise bereitgestellt werden.

Auf das `Console` Objekt kann von jedem globalen Objekt aus zugegriffen werden. {{domxref("Window")}} im Browser und {{domxref("WorkerGlobalScope")}} als spezifische Varianten in Workern über die Property-Konsole. Es wird unter {{domxref("Window.console")}} zur Verfügung gestellt und kann als einfache Konsole referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link")
```

Diese Seite dokumentiert die [Methoden](#methods), die für das `Console` Objekt verfügbar sind und enthält einige [Anwendungsbeispiele](#usage).

{{AvailableInWorkers}}

## Methoden

- {{domxref("Console.assert()")}}
  - : Protokolliert eine Nachricht und eine Stack-Ablaufverfolgung in der Konsole, wenn das erste Argument `false` ist.
- {{domxref("Console.clear()")}}
  - : Leert die Konsole.
- {{domxref("Console.count()")}}
  - : Protokolliert, wie oft diese Zeile mit dem angegebenen Label aufgerufen wurde.
- {{domxref("Console.countReset()")}}
  - : Setzt den Wert des Zählers mit der angegebenen Bezeichnung zurück.
- {{domxref("Console.debug()")}}
  - : Gibt eine Nachricht mit der Protokollebene `"debug"` in der Konsole aus.

  > **Hinweis:** Ab Chromium 58 wird diese Methode nur in Chromium-Browserkonsolen angezeigt, wenn die Stufe "Verbose" ausgewählt ist.
- {{domxref("Console.dir()")}}
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. In dieser Auflistung können Sie Offenlegungsdreiecke verwenden, um den Inhalt untergeordneter Objekte zu untersuchen.
- {{domxref("Console.dirxml()")}}
  - : Zeigt eine XML/HTML-Elementdarstellung des angegebenen Objekts an, falls möglich, oder die JavaScript-Objektansicht, falls dies nicht möglich ist.
- {{domxref("Console.error()")}}
  - : Gibt eine Fehlermeldung aus. Sie können [Stringersetzung](/de/docs/Web/API/console#Using_string_substitutions) und zusätzliche Argumente mit dieser Methode verwenden.
- {{domxref("Console.exception()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `error()`.
- {{domxref("Console.group()")}}
  - : Erstellt eine neue Inline-[Gruppe](/de/docs/Web/API/console#Using_groups_in_the_console), in der alle folgenden Ausgaben von einer anderen Ebene eingerückt werden. Um eine Ebene wieder zu verlassen, rufen Sie `groupEnd()` auf.
- {{domxref("Console.groupCollapsed()")}}
  - : Erstellt eine neue Inline-[Gruppe](/de/docs/Web/API/console#Using_groups_in_the_console), in der alle folgenden Ausgaben von einer anderen Ebene eingerückt werden. Anders als bei `group()` beginnt die Inline-Gruppe eingeklappt und muss über einen Button erst aufgeklappt werden. Um eine Ebene wieder zu verlassen, rufen Sie `groupEnd()` auf.
- {{domxref("Console.groupEnd()")}}
  - : Verlässt die aktuelle Inline-[Gruppe](/de/docs/Web/API/console#Using_groups_in_the_console).
- {{domxref("Console.info()")}}
  - : Informative Protokollierung von Informationen. Sie können [Stringersetzung](/de/docs/Web/API/console#Using_string_substitutions) und zusätzliche Argumente mit dieser Methode verwenden.
- {{domxref("Console.log()")}}
  - : Zur allgemeinen Ausgabe von Protokollinformationen. Sie können [Stringersetzung](/de/docs/Web/API/console#Using_string_substitutions) und zusätzliche Argumente mit dieser Methode verwenden.
- {{domxref("Console.profile()")}} {{Non-standard_inline}}
  - : Startet den integrierten Profiler des Browsers (z. B. das [Firefox-Leistungstool](/de/docs/Tools/Performance)). Sie können einen optionalen Namen für das Profil angeben.
- {{domxref("Console.profileEnd()")}} {{Non-standard_inline}}
  - : Stoppt den Profiler. Das resultierende Profil wird im Leistungstool des Browsers angezeigt (z. B. im [Firefox-Leistungstool](/de/docs/Tools/Performance)).
- {{domxref("Console.table()")}}
  - : Zeigt tabellarische Daten als Tabelle an.
- {{domxref("Console.time()")}}
  - : Startet einen [Timer](/de/docs/Web/API/console#Timers) mit einem als Eingabeparameter angegebenen Namen. Auf einer Seite können bis zu 10.000 gleichzeitige Timer ausgeführt werden.
- {{domxref("Console.timeEnd()")}}
  - : Stoppt den angegebenen [Timer](/de/docs/Web/API/console#Timers) und protokolliert die abgelaufene Zeit in Sekunden seit dem Start.
- {{domxref("Console.timeLog()")}}
  - : Protokolliert den Wert des angegebenen [Timers](/de/docs/Web/API/console#Timers) in der Konsole.
- {{domxref("Console.timeStamp()")}} {{Non-standard_inline}}
  - : Fügt der [Zeitleiste](https://developer.chrome.com/devtools/docs/timeline) oder dem [Wasserfallwerkzeug](/de/docs/Tools/Performance/Waterfall) des Browsers eine Markierung hinzu.
- {{domxref("Console.trace()")}}
  - : Gibt eine [Stapelablaufverfolgung](/de/docs/Web/API/console#Stack_traces) (stack trace) aus.
- {{domxref("Console.warn()")}}
  - : Gibt eine Warnmeldung aus. Sie können [Stringersetzung](/de/docs/Web/API/console#Using_string_substitutions) und zusätzliche Argumente mit dieser Methode verwenden.

## Benutzung

### Text auf der Konsole ausgeben

Die am häufigsten verwendete Funktion der Konsole ist das Protokollieren von Text und anderen Daten. Sie können vier Ausgabekategorien erstellen, die Sie mit den Methoden {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}} und {{domxref("console.error()")}} generieren können. Jedes dieser Ergebnisse hat eine unterschiedliche Ausgabe im Protokoll. Sie können die von Ihrem Browser bereitgestellten Filtersteuerelemente verwenden, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden. Sie können einfach eine Liste von Objekten übergeben, deren Stringdarstellungen zu einem String verkettet werden, dann an die Konsole ausgegeben werden, oder Sie können einen String übergeben, der keine oder mehrere Ersatzstrings enthält, gefolgt von einer Liste von Objekten, um diese zu ersetzen.

#### Ein einzelnes Objekt ausgeben

Die einfachsten Methoden zur Verwendung der Protokollierungsmethoden sind die Ausgabe eines einzelnen Objekts:

```js
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

    [09:27:13.475] ({str:"Some text", id:5})

#### Mehrere Objekte ausgeben

Sie können auch mehrere Objekte ausgeben, indem Sie sie beim Aufrufen der Protokollierungsmethode einfach nacheinander auflisten:

```js
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Diese Ausgabe sieht folgendermaßen aus:

    [09:28:22.711] My first car was a Dodge Charger . The object is: ({str:"Some text", id:5})

#### String-Ersetzungen verwenden

Wenn Sie einen String an eine der Methoden des Konsolenobjekts übergeben, die einen String akzeptiert (z. B. `log()`), können Sie folgende Ersatzstrings verwenden:

| Ersatzstring | Beschreibung                                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| %o ode %O    | Gibt ein JavaScript-Objekt aus. Durch Klicken auf den Objektnamen werden weitere Informationen dazu im Inspektor geöffnet.                                                        |
| %d oder %i   | Gibt eine Ganzzahl aus. Zahlenformatierung wird unterstützt, z. B. gibt `console.log("Foo %.2d", 1.1)` die Zahl als zwei signifikante Ziffern mit einer führenden 0 aus: `Foo 01` |
| %s           | Gibt einen String aus.                                                                                                                                                            |
| %f           | Gibt einen Gleitkommawert aus. Die Formatierung wird unterstützt, zum Beispiel gibt `console.log("Foo %.2f", 1.1)` die Zahl mit 2 Dezimalstellen aus: `Foo 1.10`                  |

> **Hinweis:** Die Präzisionsformatierung funktioniert in Chrome nicht

Jedes dieser Elemente zieht das nächste Argument nach dem Formatstring aus der Parameterliste. Zum Beispiel:

    for (var i=0; i<5; i++) {
      console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
    }

Die Ausgabe sieht folgendermaßen aus:

    [13:14:13.481] Hello, Bob. You've called me 1 times.
    [13:14:13.483] Hello, Bob. You've called me 2 times.
    [13:14:13.485] Hello, Bob. You've called me 3 times.
    [13:14:13.487] Hello, Bob. You've called me 4 times.
    [13:14:13.488] Hello, Bob. You've called me 5 times.

#### Konsolenausgaben stylen

Sie können die `%c` Direktive verwenden, um einen CSS-Stil auf die Konsolenausgabe anzuwenden:

```js
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
```

Der Text vor der Direktive wird nicht beeinflusst. Der Text nach der Direktive wird jedoch mit den CSS-Deklarationen im Parameter formatiert.![](https://mdn.mozillademos.org/files/12527/CSS-styling.png)

> **Hinweis:** Es werden etliche CSS-Eigenschaften von diesem Stil unterstützt. Sie sollten experimentieren und sehen, welche sich als nützlich erweisen.

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandtes Material visuell kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt den neuen Block jedoch zusammengeklappt und erfordert die Verwendung einer Schaltfläche zum Öffnen.

> **Hinweis:** Minimierte Gruppen werden in Gecko noch nicht unterstützt. Die Methode `groupCollapsed()` ist zu diesem Zeitpunkt die gleiche wie `group()`.

Um die aktuelle Gruppe zu verlassen, rufen Sie einfach `console.groupEnd()` auf. Zum Beispiel mit diesem Code:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

Die Ausgabe sieht folgendermaßen aus:

![nesting.png](/@api/deki/files/6082/=nesting.png)

Um die Dauer einer bestimmten Operation zu berechnen, hat Gecko 10 die Unterstützung von Timern im `console`-Objekt eingeführt. Um einen Timer zu starten, rufen Sie die Methode ` console.time``() ` auf und geben Sie ihm als einzigen Parameter einen Namen. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden abzurufen, rufen Sie einfach die Methode `console.timeEnd()` auf und übergeben den Namen des Timers erneut als Parameter. Auf einer Seite können bis zu 10.000 Timer gleichzeitig ausgeführt werden.

Zum Beispiel mit diesem Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

Protokolliert die Zeit, die der Benutzer zum Deaktivieren des Alert-Felds benötigt, schreibt die benötigte Zeit in der Konsole, wartet, bis der Benutzer die zweite Alert-Nachricht wegklickt und protokolliert dann die Endzeit in der Konsole:

![timerresult.png](https://mdn.mozillademos.org/files/16113/console-timeLog.png)

Beachten Sie, dass der Name des Timers sowohl beim Start als auch beim Stoppen des Timers angezeigt wird.

> **Hinweis:** Es ist wichtig zu beachten, dass der Timer die Gesamtzeit für die Transaktion angibt, wenn Sie das Timing für den Netzwerkverkehr protokollieren. Die im Netzwerkbereich aufgeführte Zeit ist nur die Zeit, die der Header benötigt. Wenn Sie die Antwort-Body-Protokollierung aktiviert haben, sollte die angegebene Zeit für den Antwortheader und den Nachrichtentext der Anzeige in der Konsolenausgabe entsprechen.

### Stapelverfolgung (Strack Traces)

Das Konsolenobjekt unterstützt auch die Ausgabe eines Stack-Trace. Daraufhin wird der Anrufpfad angezeigt, mit dem Sie den Punkt erreichen, an dem Sie {{domxref("console.trace()")}} aufrufen. Gegebener Code wie folgt:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Die Ausgabe in der Konsole sieht ungefähr so aus:

![](https://mdn.mozillademos.org/files/7167/api-trace2.png)

## Spezifikationen

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Initial definition. |

## Browserkompatibilität

{{Compat("api.Console")}}

## Hinweise

- Wenn in Firefox auf einer Seite ein `console`-Objekt definiert ist, wird das in Firefox integrierte Objekt überschrieben.
- Vor {{Gecko("12.0")}} funktionieren die Methoden des `console`-Objekts nur, wenn die Webkonsole geöffnet ist. Beginnend mit {{Gecko("12.0")}} wird die Ausgabe zwischengespeichert, bis die Webkonsole geöffnet wird. Anschließend wird sie angezeigt.
- Es ist erwähnenswert, dass das in Firefox integrierte `Console`-Objekt mit dem von [Firebug](http://getfirebug.com/) bereitgestellten kompatibel ist.

## Siehe auch

- [Tools](/de/docs/Tools "Tools")
- [Web-Konsole](/de/docs/Tools/Web_Console "Web Console") — Wie die Web-Konsole Konsolen-API-Aufrufe in Firefox verarbeitet
- [Remote-Debugging](/de/docs/Tools/Remote_Debugging) — Anzeigen der Konsolenausgabe, wenn das Debugging-Ziel ein mobiles Gerät ist
- [Protokollierung der Konsole auf dem Gerät](/de/docs/Mozilla/Firefox_OS/Debugging/On-device_console_logging) — So protokollieren Sie auf Firefox OS-Geräten

### Andere Implementierungen

- [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/console/api)
- [Internet Explorer](<http://msdn.microsoft.com/en-us/library/hh772173(v=vs.85).aspx>)
- [Safari](https://support.apple.com/de-de/guide/safari-developer/log-messages-with-the-console-dev4e7dedc90/mac)
