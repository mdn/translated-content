---
title: Intl.Collator.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
tags:
  - Collator
  - Internationalization
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
---
{{JSRef}}

Die **`Intl.Collator.supportedLocalesOf()`** Methode gibt ein Array zurück, welches die Gebiete enthält, die von `Collation` unterstützt werden, ohne das die Laufzeitumgebung auf den Systemstandard zurückgreifen muss.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-supportedlocalesof.html")}}

## Syntax

    Intl.Collator.supportedLocalesOf(locales[, options])

### Parameter

- `locales`
  - : Ein String mit einem BCP 47 Sprachtag oder einem Array von solchen. Für die generelle Form des `locales` Argument siehe die {{jsxref("Global_Objects/Intl", "Intl Seite", "#Gebietsidentifikation_und_-verhandlung", 1)}}.
- `options`
  - : Optional. Ein Objekt welches die folgenden Eigenschaften haben kann:_ `localeMatcher`
    _ : Der Auswahlalgorithmus für das Gebiet. Mögliche Werte sind `"lookup"` and `"best fit"`; Der Standard ist `"best fit"`. Mehr Informationen über diese Algorithmen sind auch der {{jsxref("Global_Objects/Intl", "Intl Seite", "#Gebietsauswahl", 1)}} verfügbar.

### Rückgabewert

Ein Array von String, welches eine Untermenge von Gebiete enthält, die von `Collation` unterstützt werden, ohne das die Laufzeitumgebung auf den Systemstandard zurückgreifen muss.

## Beschreibung

Gibt ein Array mit einer Untermenge von Sprachtags, die in `locales` angegeben sind zurück. Die Sprachtags, die zurückgegeben werden, werden von `collation` unterstützt und vom Auswahlalgorithmus ausgesucht, ohne auf eine Standard-Sprache zurückzugreifen.

## Beispiele

### Einsatz von `supportedLocalesOf`

Angenommen wird, dass indonesisch und deutsch in `collation` unterstützt wird, aber balinesisch nicht. `supportedLocalesOf` gibt das indonesische und deutsche Sprachtag unverändert zurück, obwohl Pinyin nicht mit Indonesisch verwendet wird und Fachdeutsch wahrscheinlich nicht für Indonesisch verfügbar ist. Zu bemerken ist, dass der `"lookup"` Algorithmus verwendet wird — der`"best-fit"` Algorithmus könnte entscheiden, dass Indonesisch eine angemessene Ergänzung für Balinesen ist, da die meisten Balinesen Indonesisch verstehen und daher auch das balinesische Sprachtag zurückgeben.

```js
var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
var options = { localeMatcher: 'lookup' };
console.log(Intl.Collator.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## Spezifikationen

| Spezifikation                                                                                                                                | Status                           | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.2.2', 'Intl.Collator.supportedLocalesOf')}}                                     | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-10.2.2', 'Intl.Collator.supportedLocalesOf')}}                                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.Collator.supportedLocalesOf', 'Intl.Collator.supportedLocalesOf')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.Collator.supportedLocalesOf")}}

## Siehe auch

- {{jsxref("Collator", "Intl.Collator")}}
