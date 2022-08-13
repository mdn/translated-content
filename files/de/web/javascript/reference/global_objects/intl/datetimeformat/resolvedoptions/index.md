---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
tags:
  - DateTimeFormat
  - Internationalization
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
---
{{JSRef}}

Die **`Intl.DateTimeFormat.prototype.resolvedOptions()`** Methode gibt ein Objekt mit den Eigenschaften zum Gebiet und der Datums- und Zeitformatierung zurück, die beim der Initialisierung eines {{jsxref("DateTimeFormat", "DateTimeFormat")}} Objektes berechnet werden.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

    dateTimeFormat.resolvedOptions()

### Rückgabewert

Ein neues Objekt mit den Eigenschaften zum Gebiet und der Datums- und Zeitformatierung, die beim der Initialisierung eines {{jsxref("DateTimeFormat", "DateTimeFormat")}} Objektes berechnet werden.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47 Sprach-Tag für die genutzte Sprache. Wenn Unicode-Erweiterungen im BCP 47 Sprach-Tag enthalten waren, die für die Sprache unterstützt werden, sind die Unterstützen Schlüssel-Werte-Paare in `locale` enthalten.
- `calendar`

  `numberingSystem`

  - : Dieser Wert wird durch die Unicode-Erweiterungsschlüssel `"ca"` und `"nu"` oder mit einem Standardwert gefüllt.

- `timeZone`
  - : Die Wert für die Unterstützen Eigenschaft im `options` Argument; {{jsxref("undefined")}} (entspricht der Standard-Zeitzone der Laufzeitumgebung), wenn keine verwendet wird. Warnung: Anwendungen sollten nicht auf den Rückgabewert {{jsxref("undefined")}} programmiert sein, weil es in zukünftigen Versionen sein kann, dass ein {{jsxref("String")}} zurückgegeben wird, der die Standard-Zeitzone der Laufzeitumgebung identifiziert.
- `hour12`
  - : Der Wert der verwendeten Eigenschaft im `options` Argument oder ein Standard-Wert.
- `weekday`

  `era`

  `year`

  `month`

  `day`

  `hour`

  `minute`

  `second`

  `timeZoneName`

  - : Die Werte resultieren von den Eigenschaften in dem `options` Argument und den möglichen Kombinationen und Repräsentationen der Datums- und Zeitformatierung aus der ausgewählte Sprache. Einige der Eigenschaften können auch fehlen, was bedeutet, dass die Komponenten nicht in der formatierten Ausgabe enthalten sind.

## Beispiele

### Einsatz der `resolvedOptions` Methode

```js
var germanFakeRegion = new Intl.DateTimeFormat('de-XX', { timeZone: 'UTC' });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale;          // "de"
usedOptions.calendar;        // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone;        // "UTC"
usedOptions.month;           // "numeric"
```

## Spezifikationen

| Spezifikation                                                                                                                                                                    | Status                           | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.3.3', 'Intl.DateTimeFormat.prototype.resolvedOptions')}}                                                         | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-Intl.DateTimeFormat.prototype.resolvedOptions', 'Intl.DateTimeFormat.prototype.resolvedOptions')}}     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.resolvedOptions', 'Intl.DateTimeFormat.prototype.resolvedOptions')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.DateTimeFormat.resolvedOptions")}}

## Siehe auch

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
