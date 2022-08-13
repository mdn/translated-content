---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
  - Date
  - JavaScript
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
---
{{JSRef}}

Die **`Date.parse()`** Methode liest eine String-Repräsentation eines Datums ein und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC oder `NaN`, wenn der String kein Datum ist oder manchmal wenn einige Datums- oder Zeitwerte einen falschen Wert haben (z. B. 2015-02-31), zurück.

Es ist bis ES5 nicht empfohlen die `Date.parse` Methode einzusetzten, weil das Einlesen von Strings implementierungsabhängig war. Es gibt sehr viele Unterschiede wie verschiedene Implementierungen strings einlesen, weshalb Strings manuell eingelesen werden sollten (eine Bibliothek kann helfen, wenn viele Formate eingesetzt werden sollen).

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Syntax

Direkter Aufruf:

    Date.parse(dateString)

Impliziter Aufruf:

    new Date(dateString)

### Parameter

- `dateString`
  - : Ein String, der ein [RFC2822](http://tools.ietf.org/html/rfc2822#section-3.3) oder (eine Variante des) ISO 8601 Datumsformat (mit Zeit) repräsentiert (andere Formate können manchmal eingesetzt werden, jedoch ist das Ergebnis manchmal unerwartet).

### Rückgabewert

Eine Zahl, die die Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem Datum, das in dem übergebenen Parameter repräsentiert wird. Wenn der Parameter kein valides Datum repräsentiert, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Die `parse()` Methode bekommt ein Datumsstring (z. B. `"Dec 25, 1995"` ) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. Diese Funktion ist nützlich, um Datumswerte mithilfe eines Stringswertes einzustellen, (z. B. im zusammenhang mit der {{jsxref("Date.prototype.setTime()", "setTime()")}} Methode und dem {{jsxref("Global_Objects/Date", "Date")}} Objekt).

Bei einer Stringrepräsentation mit einer Zeit, gibt die `parse()` Methode die Zeitwert zurück. Es wird die RFC2822 / IETF Datums Syntax ([RFC2822 Section 3.3](http://tools.ietf.org/html/rfc2822#section-3.3)) unterstützt (z. B. `"Mon, 25 Dec 1995 13:30:00 GMT"`). Die Methode versteht die kontimentalen US Zeitzonenabkürzungen, jedoch sollte lieber der Zeitzonenunterschied angegeben werden, wie zum Beispiel `"Mon, 25 Dec 1995 13:30:00 +0430"` (4 Stunden und 30 Minuten östlich vom Greenwich Meridian).

GMT und UTC werden gleich berücksichtigt. Die lokale Zeitzone wird eingesetzt um Argumente im [RFC2822 Kapitel 3.3](http://tools.ietf.org/html/rfc2822#section-3.3) Format zu interpretieren, welche keine Zeitzoneninformationen enthalten.

Wegen der Unterschiede beim einlesen von Datums Strings, ist es empfohlen das Einlesen eines Datums immer manuell durchzuführen, wenn das Ergebnisse inkonsistent sind, besonders über verschiedene ECMAScript Implementierungen hinweg, wo Strings wie `"2015-10-12 12:00:00"` manchmal zu `NaN`, UTC oder lokaler Zeitzone eingelesen werden.

### ECMAScript 5 ISO-8601 Format Unterstützung

Der Datums- / Zeit-String ist manchmal im einfachen [ISO 8601](http://www.w3.org/TR/NOTE-datetime) Format. Zum Beispiel können `"2011-10-10"` (nur ein Datum) oder `"2011-10-10T14:48:00"` (Datum und Zeit) übergeben und eingelesen werden. Wenn der String ein ISO 8601 Datum (ohne Zeit) ist, wird die UTC Zeitzone eingesetzt, um die Argumente zu interpretieren. Wenn der String Datums- und Zeitangaben im [ISO 8601](http://www.w3.org/TR/NOTE-datetime) Format enthällt, wird dieses als lokale Zeit interpretiert.

Weil Zeitzonen im String enthalten sein können und interpretiert werden können, wird immer die Anzahl der Millisekunden zwischen dem repräsentierten Datum und dem 1. Januar 1970 00:00:00 UTC oder `NaN` zurückgegeben.

Weil `parse()` eine statische Methode von {{jsxref("Date")}} ist, wird diese mit `Date.parse()` aufgerufen und nicht als Methode einer {{jsxref("Date")}} Instanz.

### Unterschiede in erwarteten Zeitzonen

Wenn der Datumsstring `"March 7, 2014"` gegeben ist, nimmt `parse()` dabei die lokale Zeitzone an. Ist hingegen ein ISO Format wie `"2014-03-07"` angegeben, so wird eine UTC Zeitzone angenommen (ES5 und ECMAScript 2015). Deshalb können die so erstellten {{jsxref("Date")}} Objekte einen unterschiedlichen Zeitpunkt repräsentieren. Dieses ist von der ECMAScript Version abhängig wenn das System mit einer lokalen UTC Zeit eingestellt ist. Das bedeutet, dass zwei Strings mit einem äquivalenten Datum (Unterschied in der Formatierung) zu zwei verschiednenen Ergebnissen führen kann.

### Fall-back für implementierungsspezifische Datumsformate

Die ECMAScript Spezifikation besagt: Wenn ein String nicht dem Standardformat entspricht, nutzen die Funktionen eine Fall-back-Lösung in Form einer implementierungsabhängigen Heuristik oder eines implementierungsabhängigen Algorithmus. Unkenntliche Strings oder Daten, die nicht valide Werte von ISO formattierten Elementen haben, führen dazu, dass `Date.parse()` den Wert {{jsxref("NaN")}} zurückgibt.

Immer, wenn ein String nicht im einfachen ISO Format ist (ECMA-252) und nicht valide Datumswerte enthällt, ist es vom Wert und vom Browser abhängig, ob {{jsxref("NaN")}} zurückgegeben wird oder nicht. Z. B.:

```js
// Kein-ISO String: Mit nicht validen Datumswerten
new Date('23/25/2014');
```

Führt zu den Datum 25. November 2015 (Ortszeit) in Firefox 30 und zu einem nicht validen Datum in Safari 7. Immer, wenn Strings als ISO Format erkannt werden und diese nicht valider Werte enthalten, wird von allen Browsern, die mindestens ES5 unterstützen, {{jsxref("NaN")}} zurückgegeben:

```js
// ISO String mit nicht validen Werten
new Date('2014-25-23').toISOString();
// returns "RangeError: invalid date" in allen es5 kompatiblen Browsern
```

SpiderMonkey's implementierungsabhängige Heuristik kann in der [`jsdate.cpp`](http://mxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889)-Datei gefunden werden. Der String `"10 06 2014"` ist ein Beispiel für einen nicht konformen ISO formatierten String und dieses wird durch die implementierungsabhängige Heuristik abgearbeitet. Siehe zudem diese [grobe Übersicht](https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6) an, wie das Analysieren funktioniert.

```js
new Date('10 06 2014');
```

Wird das Datum 6. Oktober 2014 (Ortszeit) erzeugen und nicht den 10 Juni 2014. Andere Beispiele:

```js
new Date('foo-bar 2014').toString();
// returns: "Invalid Date"

Date.parse('foo-bar 2014');
// returns: NaN
```

## Beispiele

### Einsatz von `Date.parse()`

Wenn `IPOdate` ein existierendes {{jsxref("Date")}} Objekt ist, kann es auf den 9. August 1995 (Ortszeit) gesetzt werden:

```js
IPOdate.setTime(Date.parse('Aug 9, 1995'));
```

Das gleich Beispiel für das Analysieren von nicht-Standarddatumsstrings:

```js
Date.parse('Aug 9, 1995');
```

Gibt den Wert `807937200000` in der Zeitzone GMT-0300 zurück und andere Werte in anderen Zeitzonen, wenn im String keine Zeitzone definiert ist und es kein ISO formatiertes Datum ist. Deswegen wird als Standardwert die Ortszeit genutzt.

```js
Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
```

Gibt `807926400000` in allen Zeitzonen zurück, weil GMT (UTC) angegeben ist.

```js
Date.parse('Wed, 09 Aug 1995 00:00:00');
```

Gibt den Wert `807937200000` in der Zeitzone GMT-0400 zurück und andere Werte in anderen Zeitzonen, wenn im String keine Zeitzone definiert ist und es kein ISO formatiertes Datum ist. Deswegen wird als Standardwert die Ortszeit genutzt.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
```

Gibt 0 in allen Zeitzonen zurück, weil GMT (UTC) angegeben ist.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00');
```

Gibt den Wert `14400000` in der Zeitzone GMT-0400 zurück und andere Werte in anderen Zeitzonen, wenn im String keine Zeitzone definiert ist und es kein ISO formatiertes Datum ist. Deswegen wird als Standardwert die Ortszeit genutzt.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
```

Gibt `14400000` in allen Zeitzonen zurück, weil GMT (UTC) angegeben ist.

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.4.2', 'Date.parse')}}         | {{Spec2('ES5.1')}}     | Einfaches ISO 8601 Format hinzugefügt.                |
| {{SpecName('ES6', '#sec-date.parse', 'Date.parse')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.parse', 'Date.parse')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.parse")}}

## Kompatibilitätsnotitzen

- Firefox 49 {{geckoRelease(49)}} hat das Einlesen von 2-Stelligen Jahreszahlen geändert und hat sich damit an den Google Chrome angepasst und nicht mehr an den Internet Explorer. Jetzt werden 2-Stellige Jahreszahlen, die kleiner oder gleich 50 sind zum 21. Jahrhundert gezählt. Zum Beispiel wird `04/16/17` jetzt zum 16. April 19 2017 und nicht mehr zum 16. April 1917 eingelesen. Es vermeidet alle Probleme mit mehrdeutigen Jahren. Es wird empfohlen das ISO 8601 (z. B. 2017-04-16) zu benutzen ({{bug(1265136)}}).

## Siehe auch

- {{jsxref("Date.UTC()")}}
