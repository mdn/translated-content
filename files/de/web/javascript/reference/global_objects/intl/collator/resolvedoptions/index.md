---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
tags:
  - Collator
  - Internationalization
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
---
{{JSRef}}

Die **`Intl.Collator.prototype.resolvedOptions()`** Methode gibt ein neues Objekt mit Eigenschaften zurück, welches die Gebiets- und Vergleichs-Optionen während der Initialisierung des {{jsxref("Collator")}} Objektes wiederspiegelt.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

    collator.resolvedOptions()

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Eigenschaften der Gebiets- und Vergleichsoptionen enthält, die während der Initialisierung des gegebenen {{jsxref("Collator")}} Objekt ermittelt wurden.

## Beschreibung

Das Ergebnisobjekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47 Sprachtag für das aktuell benutzte Gebiet. Wenn Unicode-Erweiterungswerte im BCP 47 Sprachtag in der Gebietsangabe angegeben sind, sind die, die auch unterstützt sind, in `locale` vorhanden.
- `usage`

  `sensitivity`

  `ignorePunctuation`

  - : Die Werte der Unterstützten Eigenschaften des `options` Argument oder eingesetzte Standardwerte.

- `collation`
  - : Der überbene Wert des Unicode-Werweiterungsschlüssels `"co"`, wenn dieser für `locale` unterstützt wird oder `"default"`.
- `numeric`

  `caseFirst`

  - : Die Werte der Unterstützten Eigenschaften des `options` Argument oder der eingesetzten Unicode-Erweiterungsschlüssel `"kn"` and `"kf"` oder den Standardwerten. Wenn die Implimentierung diese Eigenschaften nicht unterstützt, werden diese weggelassen.

## Beispiele

### Einsatz der `resolvedOptions` Methode

```js
var de = new Intl.Collator('de', { sensitivity: 'base' })
var usedOptions = de.resolvedOptions();

usedOptions.locale;            // "de"
usedOptions.usage;             // "sort"
usedOptions.sensitivity;       // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation;         // "default"
usedOptions.numeric;           // false
```

## Spezifikationen

| Spezifikation                                                                                                                                                    | Status                           | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.3.3', 'Intl.Collator.prototype.resolvedOptions')}}                                                 | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-10.3.3', 'Intl.Collator.prototype.resolvedOptions')}}                                                 | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.Collator.prototype.resolvedOptions', 'Intl.Collator.prototype.resolvedOptions')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.Collator.resolvedOptions")}}

## Siehe auch

- {{jsxref("Collator", "Intl.Collator")}}
