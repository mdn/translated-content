---
title: Intl.Collator.prototype.compare
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
tags:
  - Collator
  - Internationalization
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
---
{{JSRef}}

Die **`Intl.Collator.prototype.compare`** Eigenschaft gibt eine Funktion zurück, die zwei Strings, abhängig von der Sortierreihenfolge des {{jsxref("Collator")}} Objektes, vergleicht.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-compare.html")}}

## Syntax

    collator.compare(string1, string2)

### Parameter

- `string1`

  `string2`

  - : Die Strings, die miteinander verglichen werden sollen.

## Beschreibung

Die Funktion, die von dem Getter `compare` zurückgegeben wird, gibt eine Zahl zurück, die angibt, wie `string1` und `string2` in der Sortierreihenfolge des {{jsxref("Collator")}} Objektes zueinander stehen: Ein negativer Wert gibt an, `string1` vor `string2` kommt; Ein positiver Wert gibt an, dass `string1` nach `string2` kommt; 0 gibt an, dass beide gleich sind.

## Beispiele

### Einsatz von `compare` zum Sortieren von Arrays

Man kann die vom Getter `compare` zurückgegebenen Funktion zum Sortieren von Arrays einsetzen. Zu beachten ist, dass diese Funktion an das collator-Objekte gebunden ist, auf dem es aufgerufen wurde, so dass es direkt an {{jsxref("Array.prototype.sort()")}} übergeben werden kann.

```js
var a = ['Offenbach', 'Österreich', 'Odenwald'];
var collator = new Intl.Collator('de-u-co-phonebk');
a.sort(collator.compare);
console.log(a.join(', '));
// → "Odenwald, Österreich, Offenbach"
```

### Einsatz von `compare` zum Suchen in Arrays

Man kann die vom Getter `compare` zurückgegebenen Funktion zum suchen von passenden Elementen in einem Array benutzen:

```js
var a = ['Congrès', 'congres', 'Assemblée', 'poisson'];
var collator = new Intl.Collator('fr', { usage: 'search', sensitivity: 'base' });
var s = 'congres';
var matches = a.filter(v => collator.compare(v, s) === 0);
console.log(matches.join(', '));
// → "Congrès, congres"
```

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.3.2', 'Intl.Collator.prototype.compare')}}                                     | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-10.3.2', 'Intl.Collator.prototype.compare')}}                                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.Collator.prototype.compare', 'Intl.Collator.prototype.compare')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.Collator.compare")}}

## Siehe auch

- {{jsxref("Collator", "Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
