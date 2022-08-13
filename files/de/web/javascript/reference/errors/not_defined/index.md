---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
tags:
  - Error
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Not_defined
original_slug: Web/JavaScript/Reference/Fehler/Not_defined
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    ReferenceError: "x" is not defined

## Fehlertyp

{{jsxref("ReferenceError")}}.

## Was ist falsch gelaufen?

Es gibt eine Referenz auf eine Variable, die nicht existiert. Diese Variable muss deklariert werden; oder man muss sicherstellen, dass sie im Skript zugänglich ist; oder sich im aktuellen {{Glossary("scope")}} befindet.

> **Hinweis:** Wenn Sie eine Bibliothek nutzen (wie z.B. jQuery), stellen Sie sicher, dass diese tatsächlich geladen ist, bevor Sie auf dessen Variablen (z. B. "$") zugreifen. Schreiben Sie das {{HTMLElement("script")}} Element, welches die Bibliothek lädt vor den Code, der die Bibliothek verwendet.

## Beispiele

### Variable nicht deklariert

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Die "foo" Variable ist nirgends deklariert. Die Variable muss ein String sein, damit die Methode {{jsxref("String.prototype.substring()")}} funktioniert.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### Falscher Gültigkeitsbereich

Eine Variable muss im aktuellem Kontext verfügbar sein. Variablen, die innerhalb einer [Funktion](/de/docs/Web/JavaScript/Reference/Functions) definiert sind, können nicht von außerhalb erreicht werden, da diese nur im Gültigkeitsbereich der Funktion existieren.

```js example-bad
function numbers() {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError "num1" is not defined.
```

Wobei aus einer Methode kann man auf alle Variablen und Methoden zugreifen, die im gleichen Gültigkeitsbereich definiert worden sind. Kurz gesagt, eine Methode, die im globalen Gültigkeitsbereich definiert worden ist, kann auf alle Variablen zugreifen, die im globalen Gültigkeitsbereich definiert wurden.

```js example-good
var num1 = 2,
    num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Siehe auch

- {{Glossary("Scope")}}
- [Variablendeklaration im JavaScript Guide](/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Deklarationen)
- [Methoden Gültigkeitsbereich im JavaScript Guide](</de/docs/Web/JavaScript/Guide/Funktionen#Scopes_(G%C3%BCltigkeitsbereiche)_von_Funktionen>)
