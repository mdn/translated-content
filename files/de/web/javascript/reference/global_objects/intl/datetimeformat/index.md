---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
tags:
  - DateTimeFormat
  - Internationalization
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---
{{JSRef}}

Das **`Intl.DateTimeFormat`** Objekt ist ein Konstruktor für Objekte, die sprachsensitive Formatierung von Datums- und Zeitangaben ermöglicht.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## Syntax

    new Intl.DateTimeFormat([locales[, options]])
    Intl.DateTimeFormat.call(this[, locales[, options]])

### Parameter

- `locales`

  - : Optional. Ein String mit einem BCP 47 Sprachcode, oder einem Array von Sprachcodes. Für die generelle Form und Interpretation des `locales` Arguments siehe auf der {{jsxref("Global_Objects/Intl", "Intl Seite", "#Locale_identification_and_negotiation", 1)}}. Die folgenden Unicode Erweiterungen sind erlaubt:

    - `nu`
      - : Zahlensysteme. Mögliche Werte sind: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.
    - `ca`
      - : Kalender. Mögliche Werte sind: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.
    - `hc`
      - : Stundenzyklus. Mögliche Werte sind: `"h11"`, `"h12"`, `"h23"`, `"h24"`.

- `options`
  - : Optional. Ein Objekt mit einigen oder allen folgenden Eigenschaften:_ `localeMatcher`
    _ : Der Sprachfindungsalgorithmus, der eingesetzt wird. Mögliche Werte sind `"lookup"` und `"best fit"`. Als Standard ist `"best fit"` vorgegeben. Für Informationen über diese Option siehe auf der {{jsxref("Global_Objects/Intl", "Intl Seite", "#Locale_negotiation", 1)}} nach.
    - `timeZone`
      - : Die eingesetzte Zeitzone. Der einzige Wert, den alle Implementierungen verstehen ist `"UTC"`. Der Standardwert ist die Standard-Laufzeitzeitzone. Manche Implementierungen erkennen auch die Namen der [IANA Zeitzonendatenbank](https://www.iana.org/time-zones), wie zum Beispiel `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`.
    - `hour12`
      - : Wird eingesetzt, wenn 12-Stunden Zeitangaben eingesetzt werden (im gegensatz zu 24-Stunden Zeitangaben). Mögliche Werte sind `true` und `false`. Diese Option überschreibt den `hc` Sprachen-Tag und/oder `hourCycle` wenn beide vorhanden sind.
    - `hourCycle`
      - : Der eingesetzte Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Diese Option überschreibt den `hc` Sprachen-Tag, wenn beide präsent sind und die `hour12` Option hat Vorrang, wenn beide Optionen spezifiziert sind.
    - `formatMatcher`
      - : Der eingesetzte Formaterkennungsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`. Der Standard ist `"best fit"`. Siehe folgenden Absatz, um den Einsatz dieses Parameters zu verstehen.Die folgenden Eigenschaften beschreiben die Datums-Zeit-Komponenten, die für die formatierten Ausgabe eingesetzt werden und deren Repräsentation. Implementierungen müssen folgende Kombinationen der Eigenschaften unterstützen:\* `Wochentag, Jahr, Monat, Tag, Stunde, Minute, Sekunde`
    - `Wochentag, Jahr, Monat, Tag`
    - `Jahr, Monat, Tag`
    - `Jahr, Monat`
    - `Monat, Tag`
    - `Stunde, Minute, Sekunde`
    - `Stunde, Minute`Manche Implementierungen unterstützen weitere Kombinationen der Parameter. Es wird immer auf alle möglichen Kombinationen geprüft, um den besten Treffer zu landen. Zwei Algorithmen sind für die Auswahl der Kombination vorhanden: Ein [voll spezifizierter `"basic"` Algorithmus](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) und ein implementierungsabhängiger `"best fit"` Algorithmus.\* `weekday`
      - : Die Repräsentation der Wochentage. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.
    - `era`
      - : Die Repräsentation der Epoche. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.
    - `year`
      - : Die Repräsentation des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
    - `month`
      - : Die Repräsentation des Monats. Mögliche Werte sind `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` und `"long"`.
    - `day`
      - : Die Repräsentation des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
    - `hour`
      - : Die Repräsentation der Stunden. Mögliche Werte sind `"numeric"` und `"2-digit"`.
    - `minute`
      - : Die Repräsentation der Minuten. Mögliche Werte sind `"numeric"` und `"2-digit"`.
    - `second`
      - : Die Repräsentation der Sekunden. Mögliche Werte sind `"numeric"` und `"2-digit"`.
    - `timeZoneName`
      - : Die Repräsentation des Zeitzonennamens. Mögliche Werte sind `"short"` und `"long"`.Die Standardwerte für jede Datums-Zeit-Komponente ist {{jsxref("undefined")}}, wenn jedoch alle Komponenten {{jsxref("undefined")}} sind, wird `year`, `month`, and `day` als `"numeric"` angenommen.

## Beschreibung

### Eigenschaften

- {{jsxref("DateTimeFormat.prototype", "Intl.DateTimeFormat.prototype")}}
  - : Ermögliche es Eigenschaften und Methoden für alle Objekte zu definieren.

### Methoden

- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array an Sprachen zurück, die unterstützt werden, ohne dass auf den Laufzeitumgebungsstandard zurückgegriffen wird.

## `DateTimeFormat` Instanzen

### Eigenschaften

`DateTimeFormat` Instanzen erben die folgenden Eigenschaften von ihrem Prototypen:

{{page("/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype", "Eigenschaften")}}

### Methoden

`DateTimeFormat` Instanzen erben die folgenden Methoden von ihrem Prototypen:

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype', 'Methoden')}}

## Beispiele

### Einsatz von `DateTimeFormat`

Der Basiseinsatz ohne extra Sprach- und Formatierungsoptionen, sondern den Standardeinstellungen.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString ohne Argumente ist von der implementierunge,
// der Standardsprache und der Standardzeitzone abhängig.
console.log(new Intl.DateTimeFormat().format(date));
// → "12/19/2012" wenn das Gebiet en-US mit der Zeitzone America/Los_Angeles (UTC-0800) der Standard ist.
```

### Einsatz von `locales`

Das folgende Beispiel zeigt verschiedene Formatierungsoptionen von Datums- und Zeitformaten. Um sicherzustellen, dass das Format der Sprache eingesetzt wird, die in der Benutzerschnittstelle benutzt wird, muss diese (und mögliche Rückfallsprachen) mit dem `locales` Argument eingestellt werden.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Die folgenden Formate setzen die Zeitzone America/Los_Angeles
// für die Sprache US voraus.

// US englisch: Monat-Tag-Jahr
console.log(new Intl.DateTimeFormat('en-US').format(date));
// → "12/19/2012"

// Britisch englisch: Tag-Monat-Jahr
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// → "20/12/2012"

// Koreanisch: Jahr-Monat-Tag
console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// → "2012. 12. 20."

// Arabisch: In den meisten arabischen Ländern werden arabische Ziffern genutzt
console.log(new Intl.DateTimeFormat('ar-EG').format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// Japanisch: In Japan wird der japanische Kalender eingesetzt:
// 2012 ist in diesem das Jahr 24 der Heisei Ära.
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
// → "24/12/20"

// Einsatz von Sprachen, die vielleicht nicht unterstützt werden:
// Balinesisch, und Indonesisch als Rückfallsprache.
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// → "20/12/2012"
```

### Einsatz von `options`

Das Datums- und Zeitformat kann mit dem Einsatz des `options` Arguments vom Benutzer definiert werden.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Langer Wochentag mit langem Datum
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// sichtbares UTC
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "Thursday, December 20, 2012, GMT"

// Präzisere Angaben der Zeit
options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Australia/Sydney',
  timeZoneName: 'short'
};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00 pm AEDT"

// 24-Stunden Angabe in US Zeiten
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
};
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "12/19/2012, 19:00:00"
```

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.1', 'Intl.DateTimeFormat')}}                     | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-12.1', 'Intl.DateTimeFormat')}}                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#datetimeformat-objects', 'Intl.DateTimeFormat')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.DateTimeFormat")}}

## Siehe auch

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
