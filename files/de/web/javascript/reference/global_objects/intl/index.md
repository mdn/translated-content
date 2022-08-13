---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
tags:
  - Internationalization
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Intl
---
{{JSRef}}

Das **`Intl`** Objekt ist der Namensraum für die ECMAScript Internationalisierungs API, welche sprachenabhängige Stringvergleiche, Zahlenformate und Datums bzw. Zeitformate unterstützt. Der Konstruktoren für {{jsxref("Collator")}}, {{jsxref("NumberFormat")}} und {{jsxref("DateTimeFormat")}} Objekte sind Eigenschaften des `Intl` Objektes. Diese Seite dokumentiert diese Eigenschaften sowie die Funktionalität, die in Internationalisierungskonstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind.

## Eigenschaften

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
  - : Konstruktor für Collatoren, Objekte mit sprachsensitiven Stringvergleichen.
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die Daten und Zeiten sprachsensitiv formatieren.
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die Zahlen sprachsensitiv formatieren.
- {{jsxref("Global_Objects/PluralRules", "Intl.PluralRules")}}
  - : Konstruktor für Objekte, die mit Pluralsprachregeln pluralsensitiv formatieren kann.

## Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Eine Methode, die den kanonischen Gebietsnamen zurückgibt.

## Gebietsidentifikation und -verhandlung

Die Internationalisierungskonstruktoren genauso wie viele sprachsensitive Methoden von anderen Konstruktoren (aufgelistet unter [Siehe auch](#siehe_auch)) benutzten übliche Muster für die Identifizierung von Gebieten und der Feststellung des aktuellen Gebietes: Alle diese akzeptieren `locales` und `options` Parameter und verhandeln ein Gebiet aus den gesendeten Gebieten und den Lokal unterstützen Gebieten mithilfe eines Speziellen Algorithmus in der Eigenschaft `options.localeMatcher` aus.

### `locales` Argument

Das `locales` Argument muss entweder ein String sein, der einen [BCP 47 Sprachcode](http://tools.ietf.org/html/rfc5646) enthält, oder ein Array mit solche Sprachcodes. Wenn dieses Argument nicht unterstützt ist oder `undefined` ist, wird das lokale Standardgebiet benutzt.

Ein BCP 47-Sprachcode definiert eine Sprache und enthält minimal einen primären Sprachcode. In seiner gebräuchlichsten Form kann er folgender Reihenfolge enthalten: einen Sprachcode, einen Skriptcode und einen Länder- oder Regionscode, alle getrennt durch Bindestriche. Weil diese Codes unabhängig von Groß- und Kleinschreibung ist, ist es empfohlen bei Skriptcodes den ersten Buchstaben groß zuschreiben, bei Länder- und Regionscodes soll alles groß geschrieben werden und der Rest soll klein geschreiben werden.

Beispiele:

- `"hi"`: Hindi (primäre Sprache).
- `"de-AT"`: Deutsch wie es in Österreich genutzt wird (primäre Sprache mit Ländercode).
- `"zh-Hans-CN"`: Chinesisch geschrieben mit speziellen Zeichen, wie es in China genutzt wird (Primäre Sprache mit Skript- und Ländercode).

Die Subcodes zum identifizieren von Sprachen, Skripten, Ländern (Regionen) und (selten genutzen) Varianten in BCP 47 Sprachcodes können im [IANA Sprach Subtag Register](http://www.iana.org/assignments/language-subtag-registry) gefunden werden.

BCP 47 erlaubt sogar Erweiterungen. JavaScript Internationalisierungsfunktionen benutzen die `"u"` (Unicode) Erweiterung, welche es ermöglicht benutzerdefinierte Änderungen in {{jsxref("Collator")}}, {{jsxref("NumberFormat")}} oder {{jsxref("DateTimeFormat")}} einzubringen. Beispiele:

- `"de-DE-u-co-phonebk"`: Benutzt die Telefonbuch-Variante der deutschen Sortierreihenfolge, welche Umlaute zu Paaren übersetzt: ä → ae, ö → oe, ü → ue.
- `"th-TH-u-nu-thai"`: Benutzt Thei-Zeichen(๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) im Nummernformat.
- `"ja-JP-u-ca-japanese"`: Benutzt den Japanischen Kalender für Datums- und Zeitformate, so dass 2013 als Jahr 25 der Heisei Periode ist oder 平成 25.
- `"en-GB-u-ca-islamic"`: Benutzt Britisches Englisch mit dem Islamic (Hijri) Kalender, indem das gregorianische Datum 14. Oktober 2017 das Hijri Datum 24 Muharram, 1439 ist.

### Gebietsauswahl

Das `locales` Argument wird als priorisierte Angabe für die Applikation interpretiert, nach dem alle Unicode-Erweiterungen durchführt wurden. Zur Laufzeut wird gegeben verfügbare Gebiete verglichen und das am besten passende genommen. Es existieren zwei Algorithmen für die Auswahl: die `"lookup"` Auswahl, die dem im [BCP 47](http://tools.ietf.org/html/rfc4647#section-3.4) spezifizierten Algorithmus folgt; die `"best fit"` Auswahl, bei dem die Laufzeigumgebung mindestens einen gleichgutes Ergebnis wie der Lookup Algorithmus erzielt, wenn nicht sogar einen besseren. Wenn die Applikation kein `locales` Argument unterstützt oder die Laufzeit kein Gebiet hat, welches passt, dann wird das Standardgebiet der Laufzeitumgebung werdendet. Das Algorithmus zur Auswahl kann über das `options` Argument ausgewählt werden (siehe unten).

Wenn der ausgewählte Sprache-Tag eine Unicode Erweiterung hat, wird diese genutzt, um das erstellte Objekte oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Untermenge der als Unicode Erweiterungen definierten Schlüssel und die unterstützen Werte sind meistens von Sprach-Tag abhängig. Zum Beispiel ist der `"co"` Schlüssel (collation) nur in {{jsxref("Collator")}} unterstützt und der `"phonebk"` Wert ist nur im Deutschen unterstützt.

### `options` Argument

Das `options` Argument muss ein Objekt mit Eigenschaften sein, welche vom Konstruktor und der Funktion abhängen. Wenn das `options` Argument nicht unterstützt wird oder `undefined` ist, werden Standardwerte für alle Eigenschaften benutzt.

Eine Eigenschaft ist in allen sprachensensitiven Konstruktoren und Funktionen forhanden: Die `localeMatcher` Eigenschaft, die vom Datentyp String ist und den Wert `"lookup"` oder `"best fit"` hat, welche den Algorithmus für die Auswahl des Gebietes beschreiben (siehe oben).

## Spezifikationen

| Spezifikation                                                        | Status                           | Kommentar                                               |
| -------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------- |
| {{SpecName('ES Int 1.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 1.0')}} | Initiale Definition.                                    |
| {{SpecName('ES Int 2.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 2.0')}} |                                                         |
| {{SpecName('ES Int Draft', '#intl-object', 'Intl')}} | {{Spec2('ES Int Draft')}} | Intl.getCanonicalLocales in the 4. Auflage hinzugefügt. |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl")}}

## Siehe auch

- Einführung: [The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- Konstruktoren

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

- Methoden

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
