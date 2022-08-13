---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
tags:
  - Date
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Date
---
{{JSRef}}

Erstellt eine JavaScript Date Instanz, die einen einzelnen Moment der Zeit repräsentiert. Date Objekte basieren auf dem Zeitwert, der der Anzahl der Millisekunden seit dem 1. Januar 1970 (UTC) entspricht.

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Syntax

    new Date();
    new Date(value);
    new Date(dateString);
    new Date(year, monthIndex [, day [, hour [, minutes [, seconds [, milliseconds]]]]]);

**Anmerkung:** Ein JavaScript `Date` Objekt kann nur instanziiert werden, wenn JavaScript Date als ein Konstruktor aufgerufen wird: Beim Aufrufen als reguläre Funktion (z. B. ohne den {{jsxref("Operators/new", "new")}} Operator) gibt die Funktion einen String zurück und kein `Date` Objekt. Anders als andere JavaScript-Datentypen hat das `Date` Objekt keine Literalsyntax.

### Parameter

**Anmerkung:** Das Argument `monthIndex` ist 0-basiert. Das bedeutet, dass `0 = Januar` und `11 = Dezember` ist.

**Anmerkung:** Wenn `Date` als Konstruktor mit mehr als einem Argument aufgerufen wird und die übergebenen Werte größer als ihr logischer Bereich sind (z. B. 13 wird als Monat genutzt oder 70 wird als Minutenwert eingesetzt) wird der angrenzende Wert angepasst. Z. B. ist `new Date(2013, 13, 1)` äquivalent zu `new Date(2014, 1, 1`. Beide Ausdrücke erstellen das Datum `2014-02-01` (Monate fangen bei 0 an). Das gleiche gilt für folgende Werte: `new Date(2013, 2, 1, 0, 70)` ist äquivalent zu `new Date(2013, 2, 1, 1, 10)`, was beides den Zeitpunkt `2013-03-01T01:10:00` erzeugt.

**Anmerkung:** Wenn `Date` als Konstruktor mit mehr als einem Argumenten aufgerufen wird, werden die Argumente als Ortszeiten interpretiert. Wenn die Weltzeit genutzt werden soll, muss `new Date({{jsxref("Date.UTC()", "Date.UTC(...)")}})` mit den gleichen Argumenten genutzt werden.

- `value`
  - : Ganze Zahl, die die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC (Unixzeit) repräsentiert.

<!---->

- `dateString`
  - : String der ein Datum repräsentiert. Der String muss in einem Format vorliegen, der von der {{jsxref("Date.parse()")}} Methode eingelesen werden kann ([IETF-compliant RFC 2822 Zeitstempel](http://tools.ietf.org/html/rfc2822#page-14) und auch eine [Version von ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)).**Anmerkung:** Von dem Einlesen eines Zeitstempel-Strings durch den `Date` Konstruktor (und `Date.parse`, denn diese Funktion ist äquivalent) wird stark abgeraten, wegen der Unterschiede in den Browsern und Inkonsistenzen. Die Unterstützung für RFC 2822 formatierte Strings ist nur eine Konvention. Unterstützung für ISO 8601 formatierte Strings unterscheidet sich in den Strings mit nur einem Datum (z. B. "1970-01-01") werden nur als UTC behandelt und nicht als lokales Daten.

<!---->

- `year`
  - : Ganze Zahl, die die Jahre repräsentiert. Werte von 0 bis 99 werden zu den Jahren 1900 bis 1999 umgewandelt. Siehe das [Beispiel unten](#zwei_ziffrige_zahlen_für_die_jahre_1900_-_1999).

<!---->

- `monthIndex`
  - : Ganze Zahl, die den Monat repräsentiert. Die Zahl beginnt bei 0 für Januar und endet bei 11 für Dezember.

<!---->

- `day`
  - : Ganze Zahl, die den Tag des Monats repräsentiert.

<!---->

- `hour`
  - : Ganze Zahl, die die Stunde des Tages repräsentiert.

<!---->

- `minute`
  - : Ganze Zahl, die die Minuten einer Stunde repräsentiert.

<!---->

- `second`
  - : Ganze Zahl, die die Sekunden einer Minute repräsentiert.

<!---->

- `millisecond`
  - : Ganze Zahl, die die Millisekunden einer Sekunde repräsentiert.

## Beschreibung

- Wenn keine Argumente übergeben werden, erstellt der Konstruktor ein `Date` Objekt mit dem aktuellen Datum und der aktuellen Zeit der Systemzeitzone.
- Wenn mindestens zwei Argumente übergeben werden, werden fehlende Argumente auf 1 gesetzt (wenn day fehlt) oder auf 0 gesetzt (für alle anderen Fälle).
- Das JavaScript Datum basiert auf einem Zeitwert, der die Millisekunden seit Mitternacht am 1. Januar 1970 UTC beinhaltet. Ein Tag hat 86.400.000 Millisekunden. Der Bereich des JavaScript Datums-Objektes ist von -100.000.000 Tagen bis 100.000.000 Tagen relativ zum 1. Januar 1970 UTC.
- Das JavaScript `Date` Objekt unterstützt ein einheitliches plattformübergreifendes Format. Der Zeitwert kann zwischen Systemen ausgetauscht werden, um den gleichen Moment der Zeit zu repräsentieren. Wenn es zum Erstellen eines lokalen `date` Objektes genutzt wird, wird es die lokale äquivalente Zeit benutzen.
- Das JavaScript `Date` Objekt unterstützt eine Nummer der UTC (universal) Methode genauso wie eine lokale Zeit Methode. UTC ist auch bekannt als Greenwich-Zeit (GTM), welches die Standardweltzeit ist. Die lokale Zeit ist die Zeit des Computers, auf dem JavaScript ausgeführt wird.
- Das Aufrufen der JavaScript `Date` Funktion (z. B. ohne den {{jsxref("Operators/new", "new")}} Operator) gibt einen String, der das aktuelle Datum und die aktuelle Zeit repräsentiert, zurück.

## Eigenschaften

- {{jsxref("Date.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zum JavaScript `Date` Objekt.
- Date.length
  - : Der Wert von `Date.length` ist 7. Dieser ist die Anzahl der Argumente, die vom Konstruktor gehändelt werden.

## Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den nummerischen Wert der aktuellen Zeit an - die Anzahl der Millisekunden die seit dem 1. Januar 1970 00:00:00 UTC vergangen sind.
- {{jsxref("Date.parse()")}}
  - : Analysiert eine String-Repräsentation eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück.**Anmerkung:** Von der Nutzung der `Date.parse` Methode wird stark abgeraten wegen der Unterschiede und Widersprüche in verschiedenen Browsern.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (z. B. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück.

## JavaScript `Date` Instanzen

Alle `Date` Instanzen erben von {{jsxref("Date.prototype")}}. Das Prototype Objekt des `Date` Konstruktors kann modifiziert werden, um alle `Date` Instanzen zu ändern.

### Methoden

{{ page("/de/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype", "Methoden") }}

## Beispiele

### Verschiedene Wege ein Date Objekt zu erstellen

Das folgende Beispiel zeigt verschiedene Wege, um JavaScript {{jsxref("Date")}} Objekte zu erstellen:

**Anmerkung:** Von der Nutzung des `Date` Konstruktors mit einem String-Argument (und der `Date.parse` Methode) wird wegen der Unterschiede und Widersprüche in verschiedenen Browsern abgeraten.

    var today = new Date();
    var birthday = new Date("December 17, 1995 03:24:00");
    var birthday = new Date("1995-12-17T03:24:00");
    var birthday = new Date(1995,11,17);
    var birthday = new Date(1995,11,17,3,24,0);

### Zwei ziffrige Zahlen für die Jahre 1900 - 1999

Um Daten in den Jahren 0 bis 99 zu erzeugen und abzufragen, müssen die Methoden {{jsxref("Date.prototype.setFullYear()")}} und {{jsxref("Date.prototype.getFullYear()")}} eingesetzt werden.

    var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

    // Deprecated Methode, 98 wird hier zu 1998
    date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

    date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)

### Berechnen von vergangener Zeit

Die folgenden Beispiele zeigen, wie man die vergangene Zeit zwischen zwei JavaScript `date`s in Millisekunden berechnet.

Durch die unterschiedlichen Längen von Tagen (wegen der Sommer/Winter Zeitumstellung), Monaten und Jahren gibt es bei Zeiteinheiten größer als Stunden, Minuten und Sekunden eine Reihe von Problemen, die vorher recherchiert und abgeprüft werden sollten.

    // Einsatz Date Objekts
    var start = Date.now();

    // Event was einige Zeit braucht:
    doSomethingForALongTime();
    var end = Date.now();
    var elapsed = end - start; // elapsed time in milliseconds

<!---->

    // Einsatz Eingebauter Methoden
    var start = new Date();

    // Event was einige Zeit braucht:
    doSomethingForALongTime();
    var end = new Date();
    var elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds

<!---->

    // Testen einer funktion und Rückgabe des Rückgabewertes
    function printElapsedTime (fTest) {
    	var nStartTime = Date.now(),
                vReturn = fTest(),
                nEndTime = Date.now();

    	alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
    	return vReturn;
    }

    yourFunctionReturn = printElapsedTime(yourFunction);

**Anmerkung:** In Browsern, die die hochauflösende Zeitfunktionen von der {{domxref("window.performance", "Web Performance API", "", 1)}} unterstützen, kann {{domxref("Performance.now()")}} bessere und präzisere Messergebnisse liefern als {{jsxref("Date.now()")}}.

### Die Anzahl der Sekunden seit der Unix Epoche ermitteln

    var seconds = Math.floor(Date.now() / 1000);

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben (eine einfache Division würde nicht reichen) und auch nur tatsächlich verstrichene Sekunden zurückzugeben (deswegen nutzt der Quelltext die {{jsxref("Math.floor()")}} Funktion und nicht die {{jsxref("Math.round()")}} Funktion).

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.9', 'Date')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date-objects', 'Date')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date-objects', 'Date')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data> and send us a pull request.

{{Compat("javascript.builtins.Date")}}
