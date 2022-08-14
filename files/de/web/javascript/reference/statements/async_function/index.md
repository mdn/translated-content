---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
tags:
  - Example
  - JavaScript
translation_of: Web/JavaScript/Reference/Statements/async_function
---
{{jsSidebar("Statements")}}

Die **`async function`** Deklaration definiert eine **asynchrone Funktion**, die ein {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}} Objekt zurück gibt. Asynchrone Funktionen laufen über den [Event Loop](/de/docs/Web/JavaScript/EventLoop) außerhalb des üblichen Kontrollflusses, und geben als Ergebnis ein implizites {{jsxref("Promise")}} Objekt zurück. Die Syntax und der Aufbau des Codes bei einer asynchronen Funktion ähnelt allerdings der den standardmässigen synchronen Funktionen.

Eine **`async function`** kann auch durch den {{jsxref("Operators/async_function", "async function expression", "", 1)}} Ausdruck definiert werden.

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## Syntax

    async function name([param[, param[, ... param]]]) {
       statements
    }

### Die Parameter

- `name`
  - : Der Name der Funktion.

<!---->

- `param`
  - : Der Name eines Arguments, welches der Funktion übergeben wird.

<!---->

- `statements`
  - : Die Ausdrücke, aus denen der Funktionskörper besteht.

### Der zurückgegebene Wert

Ein [`Promise`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) Objekt. Das Promise wird entweder mit dem zurück gelieferten Wert der asnychronen Funktion eingehalten (Engl: "resolved"), oder mit einem unbehandelten Fehler innerhalb der asynchronen Funktion verworfen (Engl: "rejected").

## Beschreibung

Eine `async` Funktion darf einen {{jsxref("Operators/await", "await")}} Ausdruck enthalten, der die Ausführung der asynchronen Funktion anhält. Die Funktion wartet auf die Entscheidung des übergebenen `Promise`, setzt dann die Ausführung der asynchronen Funktionen fort und wird als eingehaltener (Engl: "resolved") Wert ausgewertet.

**Das Schlüsselwort `await` gilt nur innerhalb der `async` Funktionen.** Die Verwendung außerhalb solcher Funktion wirft einen [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) auf.

> **Note:** Das Ziel der `async`/`await` Funktionen ist zweifach. Erstens vereinfachen sie die Anwendung von `Promises` im Rahmen eines synchronen Verfahrens. Zweitens ermöglichen sie die kollektive Verarbeitung einer Gruppe von `Promises`. Genau wie die `Promises` dem Verhalten von callbacks ("Rückruffunktionen") ähneln, so ähnelt die `async`/`await` Methode der Zusammensetzung von [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators) und `Promises`.

## Beispiele

### Einfaches Beispiel

```js
var resolveAfter2Seconds = function() {
  //nach 2 Sek. einlösen
  console.log("langsames Promise beginnt");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(20); //"20" taucht als der zurückgegebene Wert der Fkn. auf
      console.log("langsames Promise fertig");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  //nach 1 Sek. einlösen
  console.log("schnelles Promise beginnt");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(10); //"10" taucht als der zurückgegebene Wert der Fkn. auf
      console.log("schnelles Promise fertig");
    }, 1000);
  });
};

var sequentialStart = async function() {
  console.log('==NACHEINANDER STARTEN==');
  // Falls der dem await Operator folgende Ausdruck kein Promise ist,
  // wird jener Ausdruck in ein eingehaltenes ("resolved") Promise umgewandelt

  // 1. die Ausführung erfolgt fast sofort
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. das hier startet 2 Sekunden nach 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. das hier startet 3 Sekunden nach 1.
}

var concurrentStart = async function() {
  console.log('==ZEITGLEICH ANFANGEN mit await==');
  const slow = resolveAfter2Seconds(); // startet den Timer sofort
  const fast = resolveAfter1Second(); // startet den Timer sofort

  // 1. die Ausführung erfolgt fast sofort
  console.log(await slow); // 2. das hier startet 2 Sekunden nach 1.
  console.log(await fast); // 3. das hier startet 2 Sekunden nach 1., also sofort nach 2., da "fast" bereits aufgelöst ist
}

var stillConcurrent = function() {
  console.log('==ZEITGLEICH ANFANGEN mit Promise.all==');
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // "slow"
    console.log(messages[1]); // "fast"
  });
}

var parallel = function() {
  console.log('==PARALLEL mit Promise.then==');
  resolveAfter2Seconds().then((message)=>console.log(message));
  resolveAfter1Second().then((message)=>console.log(message));
}

sequentialStart(); // loggt "slow" nach 2 Sek., dann "fast" nach einer weiteren Sek.

// wartet, bis das obige Verfahren abschließt
setTimeout(concurrentStart, 4000); // loggt nach 2 Sek. erst "slow", dann "fast"

// wieder warten
setTimeout(stillConcurrent, 7000); // genau wie concurrentStart

// wieder warten
setTimeout(parallel, 10000); // echt parallel: loggt "fast" nach 1 Sek., dann "slow" nach einer weiteren Sek.
```

#### `await` und Parallelität

In der Funktion `sequentialStart` wird die Ausführung wegen dem ersten `await` für 2 Sekunden angehalten, und dann nochmal eine weitere Sekunde wegen dem zweiten `await`. Der zweite Timer wird erst erzeugt, sobald der erste durch ist, daher wird der Code nach 3 Sekunden durchgelaufen sein.

In der Funktion `concurrentStart` werden beide Timer erzeugt und dann darauf gewartet (`await`). Die beiden Timer laufen zur selben Zeit, was bedeutet, dass der Code in 2 Sekunden statt 3 durchläuft, also wie der langsamste Timer. Trotzdem laufen die `await` Aufrufe immer noch nacheinander, was bedeutet, dass das zweite `await` auf das Ende des ersten Timers warten wird. In diesem Fall wird das Ergebnis des schnellsten Timers erst nach dem des langsamsten Timers verarbeitet.

Wenn du wirklich zwei oder mehr Jobs gleichzeitig, also parallel, ausführen willst, musst du `await Promise.all([job1(), job2()])` wie in der `parallel` Funktion gezeigt verwenden.

> **Warning:** #### Merke: `await` mit `Promise#then` nicht verwechselnBei `sequentialStart` wird die Programmausführung auf 2 Sek. aufgehalten wegen des ersten `await`, dann wieder auf 1 Sek. wegen des zweiten `await`. Die zweite Stoppuhr wird erst nach Ablauf der ersten Stoppuhr erstellt.Bei `concurrentStart` werden beide Stoppuhren gleichzeitig erstellt, dann in `await` versetzt. Obwohl beide Uhren nebeneinander laufen, laufen die `await` Abrufe serienweise. Das bedeutet, dass die zweite `await` Anweisung auf Ablauf der ersten wartet. Die Laufzeit dieses Abschnitts lautet daher 2--nicht 3--Sekunden, weil das langsamere Verfahren 2 Sek. braucht. Das Gleiche ereignet sich bei `stillConcurrent`, welcher Abschnitt die `Promise.all` Methode verwendet.Wenn man auf mehrfache `Promises` parallel warten (`await`) will, muss man `Promise#then` verwenden, gerade wie die `parallel` Funktion am Ende dieses Beispiels.

### Umschreiben einer Promise-Kette mittels einer `async` Funktion

Eine API die ein {{jsxref("Promise")}} zurückgibt resultiert in einer vielteiligen Promise-Kette. Man beachte den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
```

das kann mit einer `async` Funktion folgendermaßen umgeschrieben werden:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Im obigen Beispiel ist zu beachten, dass es keinen `await` Ausdruck auf dem `return` Ausdruck gibt, weil der Rückgabewert einer `async function` implizit im {{jsxref("Promise.resolve")}} eingeschlossen ist.

## Spezifikationen

| Specification                                                                                        | Status                       | Comment                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ESDraft')}} | Initial definition in ES2017. |
| {{SpecName('ES8', '#sec-async-function-definitions', 'async function')}}     | {{Spec2('ES8')}}         |                               |

## Browserkompatibilität

{{Compat("javascript.statements.async_function")}}

## Siehe auch

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
- ["Decorating Async Javascript Functions" on "innolitics.com"](http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)
