---
title: Intl.NumberFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
tags:
  - Internationalization
  - JavaScript
  - Method
  - NumberFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
---
{{JSRef}}

Die **`Intl.NumberFormat.supportedLocalesOf()`** Methode gibt ein Array zurück, welches die Gebiete enthält, die die Zahlenformatierung unterstützen, ohne das auf das Laufzeitstandardgebiet zurückgegriffen werden muss.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-supportedlocalesof.html")}}

## Syntax

    Intl.NumberFormat.supportedLocalesOf(locales[, options])

### Parameter

- `locales`
  - : Ein String mit einem BCP 47 Sprachtag, oder ein Array von solchen Strings. Für die generelle Form des `locales` Arguments siehe die {{jsxref("Intl", "Intl Seite", "#Gebietsidentifikation_und_-verhandlung", 1)}}.
- `options`
  - : Optional. Ein Objekt, welches die folgende Eigenschaft haben kann:_ `localeMatcher`
    _ : Der Auswahlalgorithmus des Gebietes. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für mehr Information über diese Option siehe auf der {{jsxref("Intl", "Intl Seite", "#Gebietsauswahl", 1)}}.

### Rückgabewert

Gibt ein Array zurück, welches eine Untermenge der gegebenen Gebiete enthält, für die die Zahlenformatierung unterstützen wird, ohne das auf das Laufzeitstandardgebeit zurückgegriffen werden muss.

## Beschreibung

Gibt ein Array zurück, welches eine Untermenge der gegebenen Gebiete (`locales`) enthält. Die Sprachtags, die zurückgegeben werden, unterstützen Zahlenformatierungen für das entsprechende Gebiet, ohne auf den Systemstandard zurückgreifen zu müssen.

## Beispiele

### Einsatz von `supportedLocalesOf`

Angenommen wird, dass indonesische und deutsche Zahlenformatierung unterstützt wird, aber balinesisch nicht. `supportedLocalesOf` gibt das indonesische und deutsche Sprachtag unverändert zurück, obwohl Pinyin nicht mit Indonesisch verwendet wird und Fachdeutsch wahrscheinlich nicht für Indonesisch verfügbar ist. Zu bemerken ist, dass der `"lookup"` Algorithmus verwendet wird — der`"best-fit"` Algorithmus könnte entscheiden, dass Indonesisch eine angemessene Ergänzung für Balinesen ist, da die meisten Balinesen Indonesisch verstehen und daher auch das balinesische Sprachtag zurückgeben.

```js
var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
var options = { localeMatcher: 'lookup' };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## Spezifikationen

| Spezifikation                                                                                                                                            | Status                           | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.2.2', 'Intl.NumberFormat.supportedLocalesOf')}}                                             | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-11.2.2', 'Intl.NumberFormat.supportedLocalesOf')}}                                             | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.supportedLocalesOf', 'Intl.NumberFormat.supportedLocalesOf')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.NumberFormat.supportedLocalesOf")}}

## Siehe auch

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
