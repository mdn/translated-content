---
title: Schleifen und Iterationen
slug: Web/JavaScript/Guide/Loops_and_iteration
tags:
  - Guide
  - JavaScript
  - Loop
  - Syntax
  - l10n:priority
translation_of: Web/JavaScript/Guide/Loops_and_iteration
original_slug: Web/JavaScript/Guide/schleifen_und_iterationen
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Schleifen sind ein einfaches Werkzeug, um einzelne Schritte wiederholt auszuführen. Dieses Kapitel des [JavaScript Guide](/de/docs/Web/JavaScript/Guide) stellt die verschiedenen Statements für Iterationen vor, welche in JavaScript zur Verfügung stehen.

Man kann sich Schleifen wie eine Computerversion des Spiels vorstellen, bei dem man jemandem sagt, er soll x Schritte in eine Richtung und dann y Schritte in eine andere Richtung gehen. So kann zum Beispiel die Aussage "Gehe fünf Schritte nach Osten" mit Hilfe von Schleifen so ausgedrückt werden:

```js
var schritt;
for (schritt = 0; schritt < 5; schritt++) {
  // Laufe 5 mal, mit den Werten von Schritt 0 bis 4
  console.log('Gehe einen Schritt nach Osten');
}
```

Es gibt viele verschiedene Arten von Schleifen, doch im Wesentlichen verrichten alle die gleiche Aufgabe: sie führen eine Aktion für eine bestimmte Anzahl an Wiederholungen aus (diese Anzahl kann auch 0 sein). Dabei ermöglichen die verschiedenen Arten von Schleifen unterschiedliche Anfangs- und Endpunkte festzulegen. Es gibt zahlreiche Situationen in denen eine Art von Schleifen einfacher zum Ergebnis führt, als eine andere.

JavaScript stellt folgende Statements für Schleifen zur Verfügung:

- [for Statement](#for_statement)
- [do...while Statement](#do...while_statement)
- [while Statement](#while_statement)
- [label Statement](#label_statement)
- [break Statement](#break_statement)
- [continue Statement](#continue_statement)
- [for...in Statement](#for...in_statement)
- [for...of Statement](#for...of_statement)

## `for` Statement

Eine {{jsxref("statements/for","for Schleife")}} wird so lange durchlaufen, bis eine bestimmte Bedingung den Wert `false` liefert. Die for Schleife in JavaScript ist vergleichbar mit der in Java und C. Ein for Statement sieht wie folgt aus:

    for ([initialerAusruck]; [Bedingung]; [erhöhenderAusdruck])
      Anweisung

Bei der Ausführung einer for Schleife geschieht folgendes:

1.  Der Ausdruck zur Initialisierung der Schleife `initialerAsudruck`, wird ausgeführt, sofern dieser existiert. Dieser Ausdruck initialisiert einen oder mehrere Schleifenzähler, wobei die Syntax beliebig komplexe Ausdrücke zulässt. In diesem Ausdruck können auch Variablen deklariert werden.
2.  Die Bedingung `Bedingung` wird geprüft. Wenn die Auswertung von `Bedingung` den Wert `true` ergibt, werden die Anweisungen innerhalb der Schleife ausgeführt. Ergibt die Prüfung hingegen `false`, wird die Schleife verlassen. Bleibt die Bedingung leer, wird immer der Wert `true` angenommen.
3.  Die `Anweisung` wird ausgeführt. Um mehrere Anweisungen auszuführen, werden Block-Anweisungen (`{ ... }`) verwendet, um diese zu gruppieren.
4.  Wenn vorhanden, wird der Ausdruck `erhöhenderAusdruck` ausgeführt.
5.  Geht zu Schritt 2 zurück.

### Beispiel

Die folgende Funktion enthält ein for Statement, welche die Anzahl der ausgewählten Optionen aus einer Auswahlliste (ein {{HTMLElement("select")}}, welches eine Mehrfachauswahl erlaubt) ermittelt. Das for Statement deklariert eine Variable `i` und initialisiert diese mit dem Wert 0. Sie prüft ob `i` kleiner als die Anzahl der verfügbarer Optionen des `<select>` Elements ist, führt das nachfolgende `if` Statement aus und erhöht `i` bei jedem Schleifendurchlauf um 1.

```html
<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes))
});
</script>
```

## `do...while` Statement

Das {{jsxref("statements/do...while", "do...while")}} Statement wiederholt eine bestimmte Anweisung, bis eine Bedingung `false` ergibt. Ein `do...while` Statement sieht wie folgt aus:

    do
      anweisung
    while (bedingung);

`amweisung` wird dabei einmal ausgeführt, bevor die Bedingung geprüft wird. Um mehrere Anweisungen auszuführen, werden diese als Block Statement (`{ ... }`) gruppiert. Wenn `bedingung` `true` ist, wird die Anweisung erneut ausgeführt. Nach jeder Ausführung der Anweisungen, wird die Bedingung erneut geprüft. Sobald `bedingung` `false` ergibt, endet die Ausführung der Schleife und die nächste Anweisung nach der `do...while `Schleife aus wird ausgeführt.

### Beispiel

Im folgenden Beispiel wird die Schleife mindestens einmal ausgeführt. Anschliessend wird die Schleife so oft durchlaufen, bis `i` nicht mehr kleiner als 5 ist.

```js
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## `while` Statement

Ein {{jsxref("statements/while","while")}} Statement wird solange ausgeführt, wie eine bestimmte Bedingung `true` ergibt. Ein `while` Statement sieht wie folgt aus:

    while (bedingung)
      anweisung

Wenn die Bedingung `false` ist, wird die Schleife nicht weiter durchlaufen und die nächste Anweisung nach der `while` Schleife wird ausgeführt.

Die Prüfung der Bedingung erfolgt, bevor die Anweisungen innerhalb der Schleife ausgeführt werden. Nur wenn die Bedingung `true` ist, wird die Schleife ausgeführt, wobei anschliessend eine erneute Prüfung der Bedingung erfolgt. Ergibt die Bedingung `false`, wir mit der Anweisungen nach der `while` Schleife fortgefahren.

Um mehrere Anweisungen auszuführen, werden diese in einer block Anweisung ({ ... }) gruppiert.

### Beispiel 1

Die folgende `while` Schleife wird so lange ausgeführt, wie `n` kleiner als 3 ist.

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Mit jedem Schleifendurchlauf wird `n` um 1 erhöht. Der Wert von `n` wird dann zum Wert von `x` addiert. Dadurch nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nach dem dritten Durchlauf ist die Bedingung `n < 3` nicht mehr `true` und die Schleife wird verlassen.

### Beispiel 2

Endlosschleifen müssen vermieden werden. Es ist immer sicherzustellen, dass die Bedingung irgendwann `false` ergibt, da die Schleife ansonsten nie endet. Die Anweisung in der folgenden `while` Schleife wird für immer ausgeführt, weil die Bedingung nie `false` ergibt:

```js
while (true) {
  console.log('Hello, world!');
}
```

## `Label` Statement

Ein {{jsxref("statements/label","label")}} stellt ein Statement mit einem Bezeichner bereit, welches es ermöglicht auf eine bestimmte stelle im Programm zu verweisen. So kann ein Label zum Beispiel dafür verwendet werden eine Schleife zu identifizieren und dann mit `break` oder `continue` festzulegen ob diese beendet oder weiter durchlaufen werden soll.

Die Syntax des Label Statement sieht wie folgt aus:

    label :
       anweisung

Der Wert von `label` kann jede Bezeichnung sein, der kein reserviertes JavaScript Schlüsselwort ist. Die `anweisung` die mit dem Label identifiziert wird, kann jede beliebige Anweisung sein.

### Beispiel

In diesem Beispiel identifiziert das Label `markLoop` eine `while` Schleife.

```js
markLoop:
while (theMark == true) {
   doSomething();
}
```

## `break` Statement

Um eine Schleife oder ein `switch` Statement zu beenden, verwendet man das {{jsxref("statements/break","break")}} Statement in Verbindung mit dem Label Statement.

- Wird `break` ohne ein Label verwendet, so wird die innerste `while`, `do-while`, `for` Schleife oder `switch` Statement beendet und die nachfolgende Ausführung wird ausgeführt.
- Wird `break` in Verbindung mit einem Label eingesetzt, wird die Anweisung beendet, die mit dem Label identifiziert wird.

Die Syntax von `break` sieht wie folgt aus:

    break [label];

Die erste Variante der Syntax beendet die innerste Schleife oder das innerste `switch` Statement. Die zweite Variante beendet eine bestimmte Anweisung.

### **Beispiel** **1**

Das folgende Beispiel durchläuft die Elemente in einem Array, bis ein Element mit dem Wert von `theValue` gefunden wird:

```js
for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

### **Beispiel 2:** `break` mit einem Label

```js
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## `continue` Statement

Das {{jsxref("statements/continue","continue")}} Statement kann eingesetzt werden, um eine w`hile`, `do-while`, `for Schleife` oder ein Statement mit einem Label erneut auszuführen.

- Wird `continue` ohne ein Label verwendet, wird der Durchlauf der innersten `while`, `do-while` oder `for` Statement beendet und der nächsten Durchlauf wird begonnen. Im Gegensatz zum `break` Statement, wird mit `continue` nicht die gesamte Schleife abgebrochen. In einer `while` Schleife springt das Programm zurück zur Bedingung. In einer `for` Schleife springt das Programm zum erhöhenden Ausdruck.
- Wird `continue` mit einem Label eingesetzt, wird `continue` auf die Anweisungen angewendet, die durch das Label identifiziert werden.

Die Syntax des `continue` Statement sieht wie folgt aus:

    continue [label];

### Beispiel 1

Das folgende Beispiel zeigt eine `while` Schleife, mit einem `continue` Statement, die weiter ausgeführt wird, wenn `i` den Wert 3 hat. Dadurch erhält `n` die Werte 1, 3, 7 und 12.

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
```

### Beispiel 2

Eine Anweisung mit dem Label _`checkiandj`_ enthält eine Anweisung mit dem Label _`checkj`_. Wenn `continue` erreicht wird, bricht das Programm den aktuellen Schleifendurchlauf von _`checkj`_ ab und setzt die Ausführung beim nächsten Durchlauf fort. Immer wenn `continue` erreicht wird, wird _`checkj`_ erneut ausgeführt, bis dessen Bedingung `false` zurückliefert. Wird `false` zurückgeliefert, wird der Rest der _`checkiandj`_ Anweisung vollendet und _`checkiandj`_ wird wiederholt, bis dessen Bedingung `false` zurückgibt. Wird `false` zurückgegeben, wird das Programm bei der Anweisung nach _`checkiandj`_ fortgesetzt.

Wenn `continue` ein Label _`checkiandj`_ hätte, würde das Programm am Anfang der _`checkiandj`_ Anweisung fortgesetzt werden.

```js
var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }
```

## `for...in` Statement

Das {{jsxref("statements/for...in","for...in")}} Statement durchläuft eine bestimmte Variable über alle aufzählbaren Eigenschaften eines Objekts. Für jede einzelne Eigenschaft führt JavaScript die entsprechende Anweisung aus. Ein `for...in` Statement sieht wie folgt aus:

    for (variable in object) {
      statements
    }

### Beispiel

Die folgende Funktion nimmt als Argument ein Objekt und dessen Namen entgegen. Anschliessend durchläuft sie alle Eigenschaften des Objekts und liefert einen String zurück, der alle Namen und Werte der Eigenschaften des Objekts enthält.

```js
function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}
```

Für ein Objekt `car` mit den Eigenschaften `make` und `model`, sieht das Ergebnis wie folgt aus:

```js
car.make = Ford
car.model = Mustang
```

### Arrays

Auch wenn es nahe liegt diesen Weg zu verwenden, um die Elemente eines {{jsxref("Array")}}s zu durchlaufen, würde das **for...in** Statement die Namen der definierten Werte und den numerischen Index zurückliefern. Daher ist es besser eine normale {{jsxref("statements/for","for")}} Schleifen mit einem numerischen Index zu verwenden, wenn Arrays durchlaufen werden sollen, da das **for...in** Statement neben den benutzerdefinierten Elementen auch die Eigenschaften des Arrays durchläuft, wenn man Methoden oder Eigenschaften hinzufügt oder ändert.

## `for...of` Statement

Das {{jsxref("statements/for...of","for...of")}} Statement erstellt eine Schleife, die alle [iterable objects](/de/docs/Web/JavaScript/Guide/iterable) (inklusive {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("functions/arguments","arguments")}} Objekt, etc.) durchläuft und die Anweisungen ausführt, die mit dem Wert des Durchlaufes für jede Eigenschaft übereinstimmt.

    for (variable of object) {
      statement
    }

Das folgende Beispiel zeigt den Unterschied zwischen der `for...of` Schleife und der {{jsxref("statements/for...in","for...in")}} Schleife. Während `for...in` die Namen der Eigenschaften durchläuft, durchläuft `for...of` die Werte der Eigenschaft:

```js
var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
