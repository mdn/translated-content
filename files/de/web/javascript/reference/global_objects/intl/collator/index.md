---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
tags:
  - Collator
  - Internationalization
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator
---
{{JSRef}}

Das **`Intl.Collator`** Objekt ist ein Konstruktor für Überprüfer, Objekte die Sprachsensitive Stringvergleiche unterstützen.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Syntax

    new Intl.Collator([locales[, options]])
    Intl.Collator.call(this[, locales[, options]])

### Parameter

- `locales`
  - : Optional. Ein String mit einem BCP 47 Sprachtag, oder einem Array von solchen Strings. Für die generelle Interpretation für das `locales` Argument, siehe auf der {{jsxref("Global_Objects/Intl", "Intl Seite", "#Gebietsidentifikation_und_-verhandlung", 1)}} nach. Die folgenden Unicode-Erweiterunsschlüssel sind erlaubt:_ `co`
    _ : Abweichender Vergleich für einige Gebiete. Folgende Werte sind möglich: `"big5han"`, `"dict"`, `"direct"`, `"ducet"`, `"gb2312"`, `"phonebk"`, `"phonetic"`, `"pinyin"`, `"reformed"`, `"searchjl"`, `"stroke"`, `"trad"`, `"unihan"`. Die Werte `"standard"` und `"search"` werden ignoriert. Sie werden durch die EIgenschaft `usage` des `options` Objekt ersetzt (siehe unten).
    - `kn`
      - : Wenn numerische Vergleiche benutzt werden soll, so wie "1" < "2" < "10". Mögliche Werte sind `"true"` und `"false"`. Diese Option kann über eine `options` Eigenschaft oder über einen Unicode-Erweiterungsschlüssel gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.
    - `kf`
      - : Wenn Kleinschreibung oder Großschreibung zuerst in der Reihenfolge kommt. Mögliche Wert sind `"upper"`, `"lower"`, or `"false"` (benutzt den Gebietsstandard). Diese Option kann über eine `options` Eigenschaft oder über einen Unicode-Erweiterungsschlüssel gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.
- `options`
  - : Optional. Ein Objekt einigen oder allen der folgenden Eigenschafte:_ `localeMatcher`
    _ : Der Algorithmus zur Ermittlung des Gebiets. Mögliche Werte sind `"lookup"` and `"best fit"`; Der Standard ist `"best fit"`. Für Informationen über diese Option siehe auf der {{jsxref("Global_Objects/Intl", "Intl Seite", "#Gebietsauswahl", 1)}} nach.
    - `usage`
      - : Ob der Vergleich für das Sortieren oder Suchen von Strings ist. Mögliche Werte sind `"sort"` and `"search"`; der Standard ist `"sort"`.
    - `sensitivity`
      - : Welche Unterschiede in Strings sollen zu Resultaten ungleich 0 führen. Mögliche Werte:\* `"base"`: Nur Strings die im Basisbuchstaben ungleiche sind. Beispiele: `a ≠ b`, `a = á`, `a = A`.
        - `"accent"`: Nur Strings die im Basisbuchstaben oder Akzent und anderen diakritisch Zeichen ungleich sind. Beispiele: `a ≠ b`, `a ≠ á`, `a = A`.
        - `"case"`: Nur Strings die im Basisbuchstaben oder der Größe ungleich sind. Beispiele: `a ≠ b`, `a = á`, `a ≠ A`.
        - `"variant"`: Strings, die im Basisbuchstaben, im Akzent und anderen diakritischen Zeichen oder in der Großschreibung ungleich sind. Andere Unterschiede können in den Vergleich eingehen. Beispiele: `a ≠ b`, `a ≠ á`, `a ≠ A`.Der Standardwert ist `"variant"` wenn `usage` auf `"sort"` steht. Für `usage` gleich `"search"` ist es Gebietsabhängig.
    - `ignorePunctuation`
      - : Wenn Interpunktion ignoriert werden soll. Mögliche Werte sind `true` and `false`; Der Standard ist `false`.
    - `numeric`
      - : Wenn numerische Vergleiche benutzt werden soll, so wie "1" < "2" < "10". Mögliche Werte sind `"true"` und `"false"`. Der Standard ist `false`. Diese Option kann über eine `options` Eigenschaft oder über einen Unicode-Erweiterungsschlüssel gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang. Implementierungen müssen diese Eigenschaft nicht unterstützen.
    - `caseFirst`
      - : Wenn Kleinschreibung oder Großschreibung zuerst in der Reihenfolge kommt. Mögliche Wert sind `"upper"`, `"lower"`, or `"false"` (benutzt den Gebietsstandard). Der Standard ist `"false"`. Diese Option kann über eine `options` Eigenschaft oder über einen Unicode-Erweiterungsschlüssel gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang. Implementierungen müssen diese Eigenschaft nicht unterstützen.

## Beschreibung

Das `Intl.Collator` Objekt hat die folgenden Eigenschaften und Methoden:

### Eigenschaften

- {{jsxref("Collator.prototype", "Intl.Collator.prototype")}}
  - : Erlaubt das hinzufügen von Eigenschaften zu allen Objekten.

### Methoden

- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Gibt ein Array von Gebieten zurück, die unterstützt werden, ohne dass die Backuplösung des Umgebungsstandards eingesetzt wird.

## `Collator` Instanzen

### Eigenschaften

`Collator` Instanzen erben die folgenden Eigenschaften von ihrem Prototyp:

{{page('de/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype', 'Eigenschaften')}}

### Methoden

`Collator` Instanzen erben die folgenden Methoden von ihrem Prototyp:

{{page('de/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype', 'Methoden')}}

## Beispiele

### Einsatz von `Collator`

Das folgende Beispiel demonstriert die potentiell Unterschiedlichen Ergebnisse für ein String vor, nach, oder an der selben Stelle in ein andere String in der Sortierreihenfolge:

```js
console.log(new Intl.Collator().compare('a', 'c')); // → ein negativer Wert
console.log(new Intl.Collator().compare('c', 'a')); // → ein positiver Wert
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

Zu beachten ist, dass sich das im Quelltext gezeigte Ergebnis zwischen Browsern und Browserversionen unterscheiden kann. Das ist, weil die Werte implementierungsabhängig sind. Die Spezifikation definiert nur, dass die Werte vor und nach gleich negativ und positiv sein müssen.

### Einsatz von `locales`

Das Ergebnis von {{jsxref("Collator.prototype.compare()")}} variiert zwischen Sprachen. Um die Sortierreihenfolge eine Sprache im Benutzerinterface eine Applikation zu bekommen, sollte man die Sprache mit dem `locales` Argument spezifizieren (und einige Backupsprachen):

```js
// in German, ä sorts with a
console.log(new Intl.Collator('de').compare('ä', 'z'));
// → a negative value

// in Swedish, ä sorts after z
console.log(new Intl.Collator('sv').compare('ä', 'z'));
// → a positive value
```

### Einsatz von `options`

Das Ergebnis von {{jsxref("Collator.prototype.compare()")}} kann durch den Einsatz des `options` Argument verändert werden:

```js
// in German, ä has a as the base letter
console.log(new Intl.Collator('de', { sensitivity: 'base' }).compare('ä', 'a'));
// → 0

// in Swedish, ä and a are separate base letters
console.log(new Intl.Collator('sv', { sensitivity: 'base' }).compare('ä', 'a'));
// → a positive value
```

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.1', 'Intl.Collator')}}             | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-10.1', 'Intl.Collator')}}             | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#collator-objects', 'Intl.Collator')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.Collator")}}

## Siehe auch

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'Siehe_auch')}}
