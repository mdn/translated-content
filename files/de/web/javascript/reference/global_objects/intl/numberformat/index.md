---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
tags:
  - Internationalization
  - JavaScript
  - NumberFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---
{{JSRef}}

Das **`Intl.NumberFormat`** Objekt ist ein Konstruktor für Objekte, die sprachabhängige Zahlenformatierungen nutzen.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Syntax

    new Intl.NumberFormat([locales[, options]])
    Intl.NumberFormat.call(this[, locales[, options]])

### Parameter

- `locales`

  - : Optional. Ein String mit einem BCP 47 Sprachcode, oder ein Array mit solchen Strings. Für die generelle Form und Interpretation des `locales` Arguments siehe im {{jsxref("Intl", "Intl Artikel", "#Locale_identification_and_negotiation", 1)}}. Die folgenden Unicode Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Das einzusetzende Nummerierungssystem. Mögliche Wert sind:`"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

- `options`
  - : Optional. Ein Objekt mit einigen oder allen der folgenden Eigenschaften:_ `localeMatcher`
    _ : Der Spracherkennungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`. Der Standardwert ist `"best fit"`. Für mehr Informationen siehe in den {{jsxref("Intl", "Intl Artikel", "#Locale_negotiation", 1)}}.
    - `style`
      - : Der einzusetzende Formatierungsstil. Mögliche Werte sind `"decimal"` für einfache Zahlenformate, `"currency"` für Währungen, `"percent"` für Prozentzahlen. Der Standardwert ist `"decimal"`.
    - `currency`
      - : Die bei der Währungsformatierung einzusetzende Währung. Mögliche Werte sind die ISO 4217 Währungscodes wie zum Beispiel `"USD"` für US Dollar, `"EUR"` für Euro und `"CNY"` für Chinesischen RMB (siehe [Current currency & funds code list](http://www.currency-iso.org/en/home/tables/table-a1.html)). Es gibt keinen Standardwert. Wenn `style` auf `"currency"` gesetzt ist, muss die `currency` Eigenschaft gesetzt werden.
    - `currencyDisplay`
      - : Währungsanzeige im String. Mögliche Werte sind `"symbol"` für lokalisierte Währungssymbole wie zum Beispiel €, `"code"` für ISO Währungscodes, `"name"` für den Namen der Währung wie zum Beispiel `"dollar"`. Der Standardwert ist `"symbol"`.
    - `useGrouping`
      - : Gruppierung der Zahl. Wird für das Ein- und Ausschalten der Tausendertrenner oder thousand/lakh/crore-Trenner eingesetzt. Mögliche Werte sind `true` und `false`. Der Standardwert ist `true`.Die folgenden Eingeschaften fallen in zwei Gruppen: `minimumIntegerDigits`, `minimumFractionDigits`, und `maximumFractionDigits` in einer Gruppe, `minimumSignificantDigits` und `maximumSignificantDigits` in der anderen. Wenn nur eine Eigenschaft der zweiten Gruppe genutzt wird, wird die erste Gruppe ignoriert.\* `minimumIntegerDigits`
      - : Die minimale Anzahl von Ganzzahl Ziffern. Mögliche Werte sind zwischen 1 und 21. Der Standardwert ist 1.
    - `minimumFractionDigits`
      - : Die minimale Anzahl von Nachkommastellen. Mögliche Werte sind zwischen 0 und 20. Der Standardwert für Zahlen und Prozentzahlen ist 0. Der Standard für Währungen ist die Anzahl der Stellen für die Untereinheit der Währung, die eingesetzt wird ([ISO 4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html)) oder 2, wenn die Währung nicht unterstützt wird.
    - `maximumFractionDigits`
      - : Die Maximale Anzahl von Nachkommastellen. Mögliche Werte sind zwischen 0 und 20. Der Standardwert für einfache Zahlen ist die größere Zahl von `minimumFractionDigits` und `3`. Der Standardwert für Währungen ist der größere von `minimumFractionDigits` und der Anzahl der Stellen für die Untereinheit der Währung oder 2 wenn die Währung nicht unterstützt wird. Der Standardwert für Prozentzahlen ist die größere Zahl von `minimumFractionDigits` und `0`.
    - `minimumSignificantDigits`
      - : Die minimale Anzahl von signifikanten Stellen. Mögliche Werte sind zwischen 1 und 21. Der Standardwert ist 1.
    - `maximumSignificantDigits`
      - : Die maximale Anzahl von signifikanten Stellen. Mögliche Werte sind zwischen 1 und 21. Der Standardwert ist `minimumSignificantDigits`.

## Beschreibung

### Eigenschaften

- {{jsxref("NumberFormat.prototype", "Intl.NumberFormat.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zu allen Objekten.

### Methoden

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, welches alle Sprachen enthält, die unterstützt werden, ohne auf den Laufzeitstandard zurückzufallen (ohne fallback).

## `NumberFormat` Instanzen

### Eigenschaften

`NumberFormat` Instanzen erben die folgenden Eigenschaften von ihrem Prototyp:

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Eigenschaften')}}

### Methoden

`NumberFormat` Instanzen erben die folgenden Methoden von ihrem Prototyp:

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Methoden')}}

## Beispiele

### Standardeinsatz

Beim Einsatz ohne spezifizierte Sprache wird ein formatierter String in der Standardsprache und mit Standardoptionen zurückgegeben:

```js
var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3.500' wenn in Deutscher Sprache
```

### Einsatz von `locales`

Diese Beispiel zeigt einige der Variationen lokalisierter Zahlenformate. Um das Format der Sprache zu erhalten, welches in der Anwendung benutzt wird, spezifiziere die Sprache (und mögliche Rückfallsprachen (fallback)) mit dem `locales` Argument.

```js
var number = 123456.789;

// Englische Benutzer sehen ein Punkt anstatt eines Kommas als Dezimaltrenner
console.log(new Intl.NumberFormat('en-GB').format(number));
// → 123.456,789

// Arabisch ist in den meisten arabisch sprachigen Ländern eingesetzt
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// Indien benutzt Tausendertrennzeichen bei Tausend und allen weiteren zwei Stellen
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// Chinesisches Zahlensystem
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

// Wenn eine Sprache übergeben werden soll, die vielleicht nicht
// unterstützt wird (Balinesisch), nutze eine fallback Sprache (Indonesisch)
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
```

### Einsatz von `options`

Das Ergebnis von `toLocaleString` kann durch das `options` Argument angepasst werden.

```js
var number = 123456.789;

//  Währungsformat
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

//  Der Japanische Yen hat keine Unterwährung (z. B. Cent)
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

//  Limitiert auf drei signifikante Stellen
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000
```

## Spezifikationen

| Spezifikation                                                                                        | Status                           | Kommentar            |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.1', 'Intl.NumberFormat')}}                     | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-11.1', 'Intl.NumberFormat')}}                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#numberformat-objects', 'Intl.NumberFormat')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.NumberFormat")}}

## Siehe auch

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'Siehe auch')}}
