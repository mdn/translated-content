---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Beginner
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
original_slug: Web/JavaScript/Guide/Kontrollfluss_und_Fehlerbehandlung
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammatik_und_Typen", "Web/JavaScript/Guide/Schleifen_und_Iterationen")}}

JavaScript unterstützt eine Menge von Anweisungen, speziell um Verlaufs-Anweisungen zu kontrollieren, welches eine großartige Methode ist um Interaktivität in deine Anwendung einzuarbeiten. Dieses Kapitel liefert dir ein Überblick über diese Anweisungen.

Die [JavaScript Referenzen](/de/docs/Web/JavaScript/Reference/Statements) beinhalten umfassende Details über die Anweisungen in diesem Kapitel. Das Semikolon (`;`) als Zeichen wird genutzt um Anweisungen im JavaScript Code einzuteilen.

Jeder JavaScript Ausdruck ist auch eine Anweisung. Schau ebenfalls in [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Ausdruecke_und_Operatoren), um komplette Informationen über Ausdrücke zu erhalten.

## Block-Anweisungen

Das einfachste Statement ist das Block-Statement, welches genutzt wird um Anweisungen zu gruppieren. Dieser Block wird von einem Paar geschweiften Klammer umschlossen:

    {
      statement_1;
      statement_2;
      .
      .
      .
      statement_n;
    }

### Beispiele

Block-Statements werden meistens mit Kontrollfluss-Statements genutzt (z. B. `if`, `for`, `while`).

```js
while (x < 10) {
  x++;
}
```

Hier ist, `{ x++; }` das Block-Statement.

**Wichtig**: JavaScript hat vor ECMAScript2015 **keine** Block-Scopes. Variablen, die in einem Block deklariert werden, gehören zu der Funktion oder dem Skript und das Beschreiben der Variablen führt dazu, dass diese über den Block hinaus verfügbar ist. In anderen Worten, Block-Statements definieren keinen Scope. Alleinstehende Blöcke in JavaScript können komplett andere Ergebnisse erzeugen als in C oder Java. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
```

Hier wird 2 ausgegeben, weil `var x` innerhalb des Blocks im gleichen Scope ist wie das `var x` vor dem Block. In C oder Java hätte der selbe Code 1 ausgegeben.

Seit ECMAScript2015 sind `let` und `const` Variablendeklarationen, die an den Block gebunden sind. Siehe dazu auch die Referenzseiten {{jsxref("Statements/let", "let")}} und {{jsxref("Statements/const", "const")}} an.

## Bedingte Statements

Ein bedingtes Statement ist eine Menge von Befehlen, die ausgeführt werden, wenn eine Bedingung wahr ist. JavaScript unterstützt zwei bedingte Statements: `if...else` und `switch`.

### `if...else`Anweisungen

`if` wird eingesetzt um Statements auszuführen, wenn eine logische Bedingung wahr wird. Mit der optionalen `else-`Klausel werden Statements ausgeführt, wenn die Bedingung falsch ist. Ein `if`-Block sieht folgendermaßen aus:

    if (bedingung) {
      statement_1;
    } else {
      statement_2;
    }

Hier kann die Bedingung ein Ausdruck sein, der zu `true` oder `false` ausgewertet wird. Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) nach, um zu erfahren, was zu `true` und was zu `false` ausgewertet wird. Wenn `bedingung` zu `true` ausgewertet wird, wird `statement_1` ausgeführt. Andernfalls wird `statement_2` ausgeführt. `statement_1` und `statement_2` können beliebige Statements sein, auch weitere `if`-Statements.

Man kann zudem Statements mit `else if` konstruieren, um mehrere Bedingungen sequentiell zu testen:

    if (bedingung_1) {
      statement_1;
    } else if (bedingung_2) {
      statement_2;
    } else if (bedingung_n) {
      statement_n;
    } else {
      statement_last;
    }

Um mehrere Statements auszuführen, werden diese in Blockstatements gruppiert (`{ ... }`). Generell ist es guter Stil immer Block-Statements zu benutzen, besonders bei verschachtelten `if`-Statements.

    if (bedingung) {
      statement_1_runs_if_condition_is_true;
      statement_2_runs_if_condition_is_true;
    } else {
      statement_3_runs_if_condition_is_false;
      statement_4_runs_if_condition_is_false;
    }

Es ist ratsam, keine einfachen Zuweisungen in Bedingungen zu verwenden, da die Zuordnung mit der Prüfung auf Gleichheit verwechselt werden kann, wenn man über den Code schaut. Verwenden Sie zum Beispiel den folgenden Code nicht:

```js example-bad
if (x = y) {
  /* statements here */
}
```

Wenn eine Zuweisung in einer Bedingung benötigt wird, ist es verbreitet diese in weitere runde Klammeren zu schreiben. Zum Beispiel:

```js
if ((x = y)) {
  /* statements here */
}
```

#### Falsy Werte

Die folgenden Werte werden zu `false` ausgewertet (auch bekannt als {{Glossary("Falsy")}} Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere string (`""`)

Alle anderen Werte, auch alle Objekte, werden zu `true` ausgewertet, wenn sie als Bedingung eingesetzt werden.

Es ist jedoch etwas verwirrend mit den primitiven boolean Werten `true` und `false` und den Werten des {{jsxref("Boolean")}}-Objektes, wie folgendes Beispiel zeigt:

```js
var b = new Boolean(false);
if (b)          // Die Bedingung wird zu true ausgewertet.
if (b == true)  // Die Bedingung wird zu false ausgewertet.
```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text` Objekt drei ist. Andernfalls wird ein Alert angezeigt, und `false` zurückgegeben.

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
    document.form1.threeChar.value + " is not valid.");
    return false;
  }
}
```

### `switch` Statement

Ein `switch` Statement erlaubt es einen Ausdruck auszuwerten und das Resultat zu einem passenden Fall-Label (case-Label ) zuzuordnen. Wenn ein passendes Fall-Label gefunden wird, werden die zugehörigen Statements ausgeführt. Ein `switch` Statement sieht wie folgt aus:

    switch (ausdruck) {
      case label_1:
        statements_1
        [break;]
      case label_2:
        statements_2
        [break;]
        ...
      default:
        statements_def
        [break;]
    }

Das Programm sucht als erstes nach eine `case`-Klausel mit einem Label, welches mit dem Wert des Ausgewerteten Ausdrucks übereinstimmt und gibt die Kontrolle zu dieser Klausel, was bedeutet, dass die zugehörigen Statements ausgeführt werden. Wenn kein passendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel und gibt die Kontrolle an diese, was bedeutet, dass die zugehörigen Statements ausgeführt werden. Wenn keine `default`-Klausel vorhanden ist, wird das `switch` beendet und das nächste Statement wird ausgeführt. Laut Konventionen ist die `default`-Klausel die letzte Klausel, das muss aber nicht immer so sein.

Das optionale `break` Statement, welches in jeder `case`-Klausel eingesetzt ist, sorgt daführ, dass nach der Klausel das `switch` Statement beendet wird und das Programm mit dem nachfolgenden Statement weiter macht. Wenn `break` weggelassen wird, wird das Programm mit dem nächsten Statement im `switch` weitermachen, was dazu führt, dass alle nachlogenden `case`-Klauseln und die optionale `default`-Klausel mit ausgeführt werden.

#### Beispiel

Im folgenden Beispiel wird der `case` "Bananas" ausgeführt, wenn `fruittype` zu "Bananas" ausgewertet wird. Die `break` Statements bewirken, dass das `switch` beendet wird und das nach `switch` stehende Statement ausgeführt wird. Wird `break` im `case`"Bananas" weggelassen, so wird der `case` "Cherries" mit ausgeführt.

```js
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");
```

## Statements zur Fehler- bzw. Ausnahmebehandlung

Man kann mit dem `throw` Statement Fehler werfen (erzeugen) und diese mit dem Einsatz des `try...catch` Statements auffangen und verarbeiten.

- [`throw` Statement](#throw)
- [`try...catch` Statement](#try-catch)

### Ausnahmetypen

Jedes Objekt in JavaScript kann als Fehler bzw. Ausnahme geworfen werden. Nicht alle Fehlerobjekte müssen auf die gleiche Art und Weise erstellt worden sein. Trotz des häufig Einsatzes von Zahlen oder Strings als Ausnahmen ist es deutlich effektiver die speziell für Ausnahmen erstellten Typen zu benutzen:

- [ECMAScript exceptions](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_Typen)
- {{domxref("DOMException")}} und {{domxref("DOMError")}}

### `throw` Statement

Das `throw` Statement wird benutzt, um eine Exception (Ausnahme / Fehler) zu werfen. Wenn eine Exception geworfen wird, so wird ein Ausdruck spezifiziert, welcher den Wert, welcher geworfen wird, spezifiziert:

    throw ausdruck;

Man kann jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende Code wirft mehrere Ausnahmen verschiedenen Typs:

```js
throw "Error2";   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

> **Note:** **Notiz:** Man kann ein Objekt beim Werfen einer Exception spezifizieren. Im `catch` Block können die Eigenschaften des Objektes referenziert werden.

```js
// Erstellt ein Objekt vom Typ UserException
function UserException (message){
  this.message=message;
  this.name="UserException";
}

// Macht die Konvertierung der Exception in einen schönen String, wenn die Exception
// als String genutzt werden soll.
// (z. B. in der Fehlerconsole)
UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"';
}

// Erstellt eine Instanz der UserException und wirft diese
throw new UserException("Value too high");
```

### `try...catch` Statement

Das `try...catch` Statement markiert einen Block von Statements, welcher versucht wird auszuführen, und einen oder mehrere Blöcke welche auf geworfene Exceptions abfangen. Wenn eine Exception geworfen wird, fängt das `try...catch` Statements diese ab.

Das `try...catch` Statement besteht aus einem `try` Block, welcher ein oder mehrere Statements enthält, und null oder mehr `catch` Blöcken, welche Statements spezifizieren, welche eine im `try` Block geworfene Exception abfangen und behandeln. Das Statement versucht den `try` Block erfolgreich abzuarbeiten und wenn dieser nicht erfolgreich ist, wird die Kontrolle an den `catch` Block gegeben. Wenn ein Statement in dem `try` Block (oder eine im `try` Block aufgerufene Funktion) eine Exception wirft, wird der Kontrollfluss sofort an den `catch` Block übergeben. Wenn keine Exception im `try` Block geworfen wird, wird der `catch` Block übersprungen. Der optionale `finally` Block wird nach dem `try` und nach dem `catch` Block ausgeführt, bevor das auf das `try...catch` Statement folgenden Statement ausgeführt wird.

Das Folgende Beispiel benutzt ein `try...catch` Statement. Das Beispiel ruft eine Funktion auf, welche einen Monatsnamen aus einen Array zurückgibt, je nachdem, welcher Wert übergeben wurde. Wenn der übergebene Wert keine korrekte Monatsnummer ist (1 - 12), dann wird eine Exception mit dem Wert `"InvalidMonthNo"` geworfen und die Statements im `catch` Block setzen die `monthName` Variable auf `unknown`.

```js
function getMonthName (mo) {
  mo = mo-1; // Justiert Monatsnummer zu Arrayindex (1=Jan, 12=Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // throw Schlüsselwort wird hier benutzt
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // Funktion die Exceptions werfen kann
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // Gibt Exception Objekt weiter für Fehlerbehandlung
}
```

#### Der `catch` Block

Man kann einen `catch` Block einsetzen, um alle Exceptions, die im `try` Block generiert werden, zu verarbeiten.

    catch (catchID) {
      statements
    }

Der `catch` Block spezifiziert einen Variable (`catchID` im voranstehenden Syntaxbeispiel), welcher den Wert des `throw` Statements enthält. Man kann über diese Variable Informationen über die geworfene Exception abfragen. JavaScript erstellt diese Variable, wenn der Programmfluss in den `catch` Block geht. Die Variable existiert nur in dem `catch` Block. Nach dem beenden des `catch` Blocks ist die Variable nicht mehr verfügbar.

Im nächsten Beispeil wird eine Exception geworfen. Wenn die Exception geworfen wird, wird der Programmfluss in den `catch` Block gegeben.

```js
try {
  throw "myException" // Erstellt eine Exception
}
catch (e) {
  // Statements, die die Exception verarbeiten
  logMyErrors(e) // Verarbeitet Exception Objekt zur Fehlerbehandlung
}
```

#### Der `finally` Block

Der `finally` Block enthält Statements, welche nach dem `try` und `catch` Block ausgeführt werden, bevor das Statement nach dem `try...catch` Statement ausgeführt wird. Der `finally` Block wird ausgeführt, egal ob eine Exception geworfen wird oder nicht. Wenn eine Exception geworfen wird, wird der `finally` auch ausgeführt, wenn kein `catch` die Exception abfängt.

Man kann den `finally` Block benutzen, um Skripte fehlertoleranter zu gestalten. Zum Beispiel kann eine Ressource im `finally` Block geschlossen werden. Das Folgende Beispiel öffnet eine Datei und führt Statements aus, um die Datei zu benutzen (Serverseitiges JavaScript erlaubt Zugriffe auf Dateien). Wenn eine Exception geworfen wird, während die Datei geöffnet ist, sorgt der `finally` Block dafür, dass die Datei wieder geschlossen wird.

```js
openMyFile();
try {
  writeMyFile(theData); //Das kann Exceptions werfen
} catch(e) {
  handleError(e); // Wenn eine Exception geworfen wird, wird sie hier verarbeitet
} finally {
  closeMyFile(); // Schließt immer die Ressource
}
```

Wenn der `finally` Block einen Rückgabewert definiert, ist dieser der Rückgabewert des `try-catch-finally` Prozedur, unabhängig davon, ob `return` Statements im `try` und `catch` Block verwendet werden.

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // Dieses return Statement is überflüssig
                 // weil im finally Block ebenfalls eins vorhanden ist
    console.log(2); // wird niemals erreicht
  } finally {
    console.log(3);
    return false; // überschreibt früheres return Statements
    console.log(4); // wird niemals erreicht
  }
  // false wird jetzt zurückgegeben
  console.log(5); // wird niemals erreicht
}
f(); // alerts 0, 1, 3; returns false
```

Das Überschreiben des Rückgabewertes durch den `finally` Block überschreibt auch geworfene Exceptions, wenn diese im `catch` geworfen werden.

```js
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // Dieses throw Statement is überflüssig
             // weil im finally Block ein return vorkommt
  } finally {
    return false; // Überschreibt das vorherige "throw"
  }
  // false wird zurückgegeben
}

try {
  f();
} catch(e) {
  // Dieser bereich wird nie erreicht, weil
  // die Exception durch das return im
  // finally block überschrieben wird.
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

#### Verschachtelte try...catch Statements

Man kann mehrere `try...catch` Statements ineinander verschachteln. Wenn ein inneres `try...catch` Statements keinen `catch` Block hat, wird ein äußeres `try...catch` Statement mit einem `catch` Block eine Exception auffangen. Mehr Informationen gibt es im Kapitel [Verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#Verschachtelte_try-Blöcke) auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Seite.

### Nützliche Verwendung des `Error` Objekts

Abhängig vom der Art des Fehlers, möchte man die Möglichkeit haben einen Namen und eine Fehlernachricht zu vergeben. 'name' und 'message' Eigenschaften sind generell durch die Klasse Error (z. B. `DOMException` oder `Error`) unterstützt. Die 'message' Eigenschaft ist dabei eine String-Repräsentation des Fehlers, so wie sie bei der Konvertierung des Objektes zu einem String benötigt wird.

Wenn man beim Werfen von eigenen Exceptions die Vorteile dieser Eigenschaften nutzen möchte (wenn zum Beipsiel der `catch` Block nicht zwischen eigenen und System Exceptions unterscheidet), kann der Konstruktor von Error benutzt werden. Zum Beispiel:

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

## Promises

Mit ECMAScript 6 hat JavaScript die Unterstützung für {{jsxref("Promise")}} Objekte bekommen, welche zum Steuern von asynchronen Operationen genutzt wird.

Ein `Promise` ist in einem der folgenen Status:

- _pending_: Anfangszustand, nicht erfolgreich oder fehlerhaft beendet.
- _fulfilled_: Erfolgreiche Operation
- _rejected_: Gescheiterte Operation.
- _settled_: Das `Promise` ist entweder erfüllt oder abgelehnt, aber nicht _pending_.

![](https://mdn.mozillademos.org/files/8633/promises.png)

### Ein Bild mit XHR laden

Ein einfaches Beispiel für den Einsatz von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist das Laden eines Bildes (Siehe MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) Repository; man kann es hier auch [in Aktion sehen](https://mdn.github.io/js-examples/promises-test/)). Jeder Schritt ist Kommentiert und erlaubt es der Architektur des Promise und XHR zu folgen. Hier ist die unkommentierte Version, welche den `Promise` Ablauf zeigt, zu sehen, so dass man eine Idee davon bekommt.

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:'
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
```

Für deteiliertere Informationen, kann man sich die {{jsxref("Promise")}} Referenz Seite und den [Using Promises Guide](/de/docs/Web/JavaScript/Guide/Using_promises) anschauen.

{{PreviousNext("Web/JavaScript/Guide/Grammatik_und_Typen", "Web/JavaScript/Guide/Schleifen_und_Iterationen")}}
