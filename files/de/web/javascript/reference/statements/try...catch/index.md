---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
translation_of: Web/JavaScript/Reference/Statements/try...catch
---
{{jsSidebar("Statements")}}

Die **try...catch**-Anweisung (sinngemäß: testen und verarbeiten) rahmt einen Block von Anweisungen (_try statements)_ ein und legt Reaktionen (_catch statementes_) fest, die im Fehlerfall ausgeführt werden.

## Syntax

    try {
       try_Anweisungen
    }
    [catch (Fehler_var_1 if Bedingung_1) { // nicht Standard
       catch_Anweisungen
    }]
    ...
    [catch (Fehler_var_2) {
       catch_Anweisungen_2
    }]
    [finally {
       finally_Anweisungen
    }]

- `try_Anweisungen`
  - : Die auszuführenden Anweisungen.

- `catch_Anweisungen_1`, `catch_Anweisungen_2`
  - : Anweisungen, die ausgeführt werden, wenn bei den `try`-Anweisungen ein Fehler auftritt.

- `Fehler_var_1`, `Fehler_var_2`
  - : Ein Bezeichner der das Fehlerobjekt des zugehörigen `catch`-Abschnitts enthält.

- `Bedingung_1`
  - : Ein Bedingungsausdruck.

- `finally_Anweisungen`
  - : Die Schlussanweisungen werden nach den `try`-Anweisungen ausgeführt. Die Anweisungen werden immer ausgeführt, auch wenn ein Fehler ausgegeben wurde.

## Beschreibung

Der _try_-Block besteht aus einer oder mehreren Anweisungen (der Absschnitt steht – auch bei nur einer Zeile – immer in geschweiften Klammern {}), mindestens einem _catch_- oder einem _finally_-Abschnitt oder beiden. Es gibt also drei Arten von _try_-Anweisungen:

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

Der `catch`-Abschnitt enthält Anweisungen, die ausgeführt werden, wenn im `try`-Abschnitt ein Fehler auftritt. Bei einer fehlerhaften Anweisung im Block im `try`-Abschnitt – oder in Funktionen, die von dort aufgerufen werden – geht die Kontrolle sofort an den `catch`-Abschnitt über. Wird kein Fehler gemeldet wird der `catch`-Abschnitt nicht ausgeführt.

Der `finally`-Abschnitt wird nach dem `try`- und `catch`-Abschnitt ausgeführt. Der Abschnitt wird immer ausgeführt, egal ob ein Fehler aufgetreten ist oder nicht.

Mehrere `try`-Anweisungen können verschachtelt werden. Wenn ein innerer `try`-Block keinen `catch`-Abschnitt hat, wird der `catch`-Abschnitt des nächsthöheren `try`-Blocks ausgeführt.

Mit der try-Anweisungen können auch JavaScript-Fehler bearbeitet werden. Mehr zur Fehlerbearbeitung in JavaScript steht im [JavaScript Guide](/de/docs/Web/JavaScript/Guide "en/JavaScript/Guide").

### Unbhängiger `catch-Abschnitt`

Wenn mit einem einzelnen, ungebundenen `catch`-Abschnitt gearbeitet wird, dann wird der catch-Block bei jedem Fehler durchlaufen. Wenn der Fehler im folgenden Beispiel-Code auftritt geht die Kontrolle an den `catch`-Abschnitt über.

```js
try {
   throw "myException"; // Fehler wird ausgelöst
}
catch (e) {
   // Anweisungen für jeden Fehler
   logMyErrors(e); // Fehler-Objekt an die Error-Funktion geben
}
```

Im `catch`-Block wird ein Bezeichner festgelegt (e im Beispiel), die den Wert enthält, der durch die `throw`-Anweisung entstanden ist. Der catch-Block ist besonders, weil er zu Beginn der Ausführung einen Bezeichner anlegt, der für den gesamten Block gilt. Wenn der catch-Block abgearbeitet ist steht der Bezeichner nicht mehr zur Verfügung.

### Abhängige `catch`-Abschnitte

{{non-standard_header}}

Mehrere abhängige catch-Abschnitte können spezifische Fehler bearbeiten. In diesem Fall wird der passende catch-Abschnitt aufgerufen, wenn der zugehörige Fehler aufgetreten ist. Im folgenden Beispiel kann der Code im `try`-Block drei mögliche Fehler ausgeben: {{jsxref("TypeError")}}, {{jsxref("RangeError")}}, and {{jsxref("EvalError")}} (Typ-Fehler, Bereich-Fehler und Rechenfehler). Wenn ein Fehler auftritt geht die Kontrolle an den zugehörigen `catch`-Abschnitt. Wenn dem Fehler kein catch-Abschnitt entspricht und ein unabhäniger `catch`-Abschnitt vorhanden ist, geht die Kontrolle an ihn.

Wenn mehrere abhängige catch-Abschnitt mit einem unabhängigen kombiniert werden, muss der unabhängige Abschnitt am Ende stehen: er fängt sonst alle Fehlertypen ab bevor sie die eigenen, abhängigen Abschnitte erreichen.

Zu Erinnerung: diese Funktionalität ist kein Teil der ECMAScript-Spezifikation.

```js
try {
    myroutine(); // erzeugt drei mögliche Fehlertypen
} catch (e if e instanceof TypeError) {
    // Anweisungen für die verschiedenen Fehlertypen
} catch (e if e instanceof RangeError) {
    // Anweisungen für Bereichsfehler
} catch (e if e instanceof EvalError) {
    // Anweisungen für Berechnungsfehler
} catch (e) {
    // Anweisungen für nicht festgelegte Fehlertypen
    logMyErrors(e); // Objekt an die Fehler-Funktion geben
}
```

Das nächste Beispiel zeigt, wie die gleichen "abhängigen `catch`-Abschnitte" aussehen, wenn einfaches JavaScript benutzt wird, das den ECMAScript-Spezifikationen entspricht (etwas umfangreicher, funktioniert aber genauso).

```js
try {
    myroutine(); // erzeugt drei mögliche Fehlertypen
} catch (e) {
    if (e instanceof TypeError) {
        // Anweisungen für die verschiedenen Fehlertypen
    } else if (e instanceof RangeError) {
        // Anweisungen für Bereichsfehler
    } else if (e instanceof EvalError) {
        // Anweisungen für Berechnungsfehler
    } else {
       // Anweisungen für nicht festgelegte Fehlertypen
       logMyErrors(e); // Objekt an die Fehler-Funktion geben
    }
}
```

### Der Fehler-Bezeichner

Wenn im try-Block ein Fehler auftritt, enthält die _exception_var_ (z.B. das e in catch(e)) den Wert, der durch die _throw_-Anweisung erzeugt wird. Mit diesem Bezeichner können also Informationen über den Fehler gewonnen werden.

Der Bezeichner gilt nur innerhalb des `catch`-Abschnitts. Er wird zu Beginn des Abschnitts angelegt und steht nach der Abarbeitung nicht mehr zur Verfügung.

### Der finally-Abschnitt

Zum Abschluss-Abschnitt (`finally`) gehören die Anweisungen, die nach dem `try`- und dem `catch`-Block ausgeführt werden, noch bevor irgenwelche Anweisugnen nach den `try-/catch-/finally`-Abschnitten ausgeführt werden. Der finally-Abschnitt wird immer ausgeführt, auch wenn bei der Verarbeitung ein Fehler aufgetreten ist. Er wird auch ausgeführt, wenn kein catch-Abschnitt den Fehler bearbeitet. Der finally-Abschnitt kann dabei helfen, das eigene Script im Fehlerfall anständig zu beenden. Dort können zum Beispiel für ein übergreifendes Aufräumen Ressourcen wieder freigegeben werden, die durch das Script gebunden wurden.

Vielleicht sieht ein Abschnitt, der sich auf Fehler bezieht, aber UNABHÄNGIG vom tatsächlichen Auftreten eines Fehlers immer ausgeführt wird, merkwürdig aus. Aber dieses Konstrukt dient tatsächlich einem Zweck. Wichtig dabei ist nicht, dass der `finally`-Abschnitt immer aussgeführt wird, sonder das der normale Code nach einem try...catch NICHT ausgeführt wird. Wenn zum Beispiel in einem catch-Abschnitt, der zu einem try-Block gehört, ein Fehler auftritt, dann wird nichts von dem umgebenden Code ausgeführt, gleichgültig ob es ein umgebende try-catch-Blöcke oder normale Anweisungen sind. Die Kontrolle wird stattdessen an den catch-Abschnitt übergeben, der zum umgebenden try-Abschnitt gehört oder – wenn es den nicht gibt – an die interne Fehlerroutine.

Auf diese Weise wird jeder nachfolgende Aufräum-Code im eingeschlossenen Abschnitt oder im normalen Programmablauf übersprungen. Wenn aber zum `try`-Abschnitt ein finally-Abschnitt gehört, dann kann in diesem Abschnitt aufgeräumt werden, bevor es in einen umgebenden `catch`-Abschnitt (oder den Fehlergenerator) geht, der dann den zweiten Fehler bearbeitet.

Wenn unabhängig vom Erfolg des `try...catch-`Blocks aufgeräumt werden muss und der finally-Abschnitt nur nach einem Fehler ausgeführt würde, dann müsste der Aufräum-Code doppelt verwendet werden, innerhalb und außerhalb des finally-Abschnitts. Deshalb wird der finally-Block unabhängig von auftretenden Fehlern ausgeführt.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die mit der Datei arbeiten (server-seitiges JavaScript lässt den Zugriff auf Dateien zu). Wenn ein Fehler ausgegeben wird solange die Datei geöffnet ist, dann schließt der `finally`-Abschnitt diese Datei bevor das Script stoppt. Der Code im Abschnitt wird auch bei `Returns` aus `try`- oder `catch`-Blöcken ausgeführt.

```js
openMyFile()
try {
   // bindet eine Ressource
   writeMyFile(theData);
}
finally {
   closeMyFile(); // Ressource immer wieder frei geben
}
```

## Examples

### Verschachtelte try-Blöcke

Zuerst einmal untersuchen wir diese Beispiele:

```js
try {
  try {
    throw new Error("oops");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"
```

Wenn wir den Fehler im inneren `try`-Block mit einem `catch`-Abschnitt bearbeiten

```js
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

Und jetzt wird der Fehler im catch-Abschnitt noch einmal produziert:

```js
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Jeder auftretende Fehler wird nur einmal bearbeitet, durch den nächsten umgebenden `catch`-Block (es sei denn, er wird erneut ausgegeben). Natürlich werden alle im inneren Abschnitt neu auftretenden Fehler durch den umschließenden Block bearbeitet.

### Rückgaben aus einem finally-Block

Wenn der `finally`-Abschnitt ein Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally`-Veranstaltung, unabhänig von allen return-Anweisungen in den `try`- oder `catch`-Blöcken. Das gilt auch für Fehler im `catch`-Block:

```js
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

Der äußere "oops"-Fehler wird nicht ausgelöst wegen des `return` im finally-Block. Das gleiche gilt für alle Werte, die aus dem `catch`-Abschnitt zurück gegeben werden.

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                                                                                                                                        |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES3')}}                                                             | {{Spec2('ES3')}}         | Erste Definition. Implementiert in JavaScript 1.4                                                                                                |
| {{SpecName('ES5.1', '#sec-12.14', 'try statement')}}                 | {{Spec2('ES5.1')}}     |                                                                                                                                                  |
| {{SpecName('ES6', '#sec-try-statement', 'try statement')}}         | {{Spec2('ES6')}}         |                                                                                                                                                  |
| {{SpecName('ESDraft', '#sec-try-statement', 'try statement')}} | {{Spec2('ESDraft')}} | Fällt nicht unter den aktuellen ECMA-262-Standard: Mehrfache catch-Abschnitte und abhängige Abschnitte (SpiderMonkey extension, JavaScript 1.5). |

## Browser-Verträglichkeit

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
