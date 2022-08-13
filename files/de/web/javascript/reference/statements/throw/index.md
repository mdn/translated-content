---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
tags:
  - Ausnahmen
  - JavaScript
  - exceptions
  - throw
translation_of: Web/JavaScript/Reference/Statements/throw
---
{{jsSidebar("Statements")}}

## Zusammenfassung

Die **`throw` Anweisung** "wirft" eine benutzerdefinierte Exception (Ausnahme). Die Programmausführung der aktuellen Funktion bzw. des globalen Codes wird angehalten (Anweisungen nach `throw` werden dann nicht mehr ausgeführt), und die Programmausführung wird an den nächsthöheren [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block in der Ausführungshierarchie übergeben. Falls in der gesamten Ausführungschierarchie kein `catch` Block definiert wurde, wird das Programm komplett angehalten.

## Syntax

    throw ausdruck;

- `ausdruck`
  - : Die zu werfende Ausnahme.

## Beschreibung

Verwenden Sie die `throw` Anweisung, um eine Ausnahme zu werfen. Wenn Sie eine Ausnahme werfen, bestimmt `ausdruck` den Typ der Ausnahme. Als Typ können Objekte (siehe Beispiel unten), als auch skalare Werte, wie Zeichenketten, Zahlen und boolesche Werte verwendet werden. Folgende Beispiele werfen jeweils eine Ausnahme:

```js
throw "Fehler"; // erzeugt Ausnahme mit dem Wert "Fehler" (als String)
throw 42;       // erzeugt Ausnahme mit dem Wert 42 (als Integer)
throw true;     // erzeugt Ausnahme mit dem Wert TRUE (als boolescher Wert)
```

Beachten Sie auch, dass die `throw`-Anweisung von der [automatic semicolon insertion (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) betroffen ist und daher kein Zeilenumbruch zwischen dem `throw` Schlüsselwort und dem Ausdruck zulässig ist.

## Beispiele

### Objekt als Ausnahme werfen

Als Ausnahme kann auch ein Objekt geworfen werden. Auf Eigenschaften des geworfenen Objektes kann dann im `catch` Block zugegriffen werden. Im folgenden Beispiel wird in der Funktion `divide` versucht Zahl `n` durch `m` zu dividieren. Falls `m` die Zahl 0 ist, wird ein Objekt (als Funktion) vom Typ `DivisionException` erzeugt und als Ausnahme geworfen, da Teilen durch 0 nicht möglich ist.

```js
function DivisionException(message) {
  this.message = message;
  this.name = "DivisionException";
}

function divide(n, m) {
  if (m == 0) {
    throw new DivisionException("Teilen durch Null nicht möglich");
  }

  return n / m;
}

try {
  // versuche 5 / 2 zu teilen
  alert(divide(5, 2));  // 2.5

  // versuche 5 / 0 zu teilen
  var ausgabe = divide(5, 0);

  // diese Zeile wird nie erreicht
  alert(ausgabe);
}
catch (e) {
  // "DivisionException: Teilen durch Null nicht möglich"
  alert(e.name + ": " + e.message);
}
```

Ausnahmen werden in der Regel als Funktionen definiert und mit dem `new` Schlüsselwort als Objekte instantiiert, da es in JavaScript kein direktes Konzept von Konstruktoren gibt, wie in anderen Programmiersprachen. Die Funktion dient dann selbst als Konstruktor. Falls in der `catch` Anweisung keine Unterscheidung der Ausnahme benötigt wird (z. B. mit Hilfe des `instanceof` Operators - siehe Beispiel unten), kann das Objekt direkt übergeben werden. Aus praktischen Gründen kann im geworfenen Objekt die Methode [toString](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert werden, um es später einfacher ausgeben zu können:

```js
try {
  throw {
    name: "MyException",
    message: "Something is wrong",
    toString: function() {
      return this.name + ": " + this.message;
    }
  };
}
catch (e) {
  alert(e); // "MyException: Something is wrong"
}
```

### Unterschiedliche Ausnahmen werfen und unterscheiden

Es ist möglich unterschiedliche Ausnahmen in einem try Block zu werfen und im dazugehörigen catch Block abzufangen. Dies erlaubt ein gezielteres Abfangen von Ausnahmen.

```js
function myException(message) {
  this.message = message;
};

function myOtherException(text) {
  this.text = text;
};

var exceptions = [
  "Don't panic! Where is my towel?",
  42,
  new myException("So long, and thanks for all the fish!"),
  new myOtherException("Deep Thought is still watching..."),
];

for (var i=0; i < exceptions.length; i++) {
  try {
    throw exceptions[i];
  }
  catch (e) {
    if (typeof e === "string") {
      alert('String exception: ' + e);
    }
    else if (typeof e === "number") {
      alert('Number exception: ' + e);
    }
    else if (typeof e === "object")
    {
      if (e instanceof myException) {
        alert("myException: " + e.message);
      }
      else if (e instanceof myOtherException) {
        alert("myOtherException: " + e.text);
      }
    }
  }
}
```

### Abgefangene Ausnahmen neu werfen

Die `throw` Anweisung kann auch innerhalb eines `catch` Blocks verwendet werden, um eine neue oder die bereits abgefangene Ausnahme erneut zu werfen. Alle Anweisungen folgenden Anweisungen im `catch` Block werden wieder nicht ausgeführt und die neu geworfene Ausnahme wird an die nächsthöheren `catch` Block übergeben. Somit können "Ebenen" entworfen werden, die jeweils nur bestimmte Ausnahmen behandeln.

Folgender Quelltext zeigt `"myException: This is an exception!"` an, da der innere `catch` Block nicht für Ausnahmen vom Typ `myOtherException` zuständig ist und daher diese eine Ebene nach oben weiterleitet.

```js
function myException(message) {
  this.message = message;
};

function myOtherException(text) {
  this.text = text;
};

try {
  try {
    throw new myOtherException("This is an exception!");
  }
  catch (e) {
    if (e instanceof myException) {
      alert("myException: " + e.message);  // wird nicht ausgeführt
    } else {
      throw e;  // eine Ebene nach oben weiterleiten
    }
  }
}
catch (e) {
  alert("myException: " + e.text);
}
```

> **Note:** Falls eine Exception durch keinen catch Block abgefangen wird, wird die Ausnahme in der JavaScript Konsole ausgegeben und die Programmausführung komplett unterbrochen.

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                 | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.4 |
| {{SpecName('ES5.1', '#sec-12.13', 'throw statement')}}                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-throw-statement', 'throw statement')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-throw-statement', 'throw statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)
