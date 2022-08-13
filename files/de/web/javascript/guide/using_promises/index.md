---
title: Promises benutzen
slug: Web/JavaScript/Guide/Using_promises
translation_of: Web/JavaScript/Guide/Using_promises
---
{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das die finale Beendigung einer asynchronen Operation repräsentiert. Je nachdem, ob die Operation erfolgreich oder fehlerhaft beendet wurde, wird das Promise entsprechend gekennzeichnet.

Da in den meisten Fällen bereits existierende Promises benutzt werden, wird diese Anleitung zuerst die Benutzung von zurückgegebenen Promises erklären, und dann darauf eingehen, wie diese erzeugt werden.

Grob gesagt ist ein Promise ein zurückgegebenes Objekt, an welches Callback-Funktionen angehängt werden können, anstatt dass diese einer Funktion übergeben werden.

Betrachten wir z.B. folgende Funktion `createAudioFileAsync()`, welche asynchron eine Audio-Datei generiert; an diese werden Audio-Einstellungen sowie zwei Callback-Funktionen übergeben - eine für das erfolgreiche Erzeugen der Audio-Datei, und die andere für auftretende Fehler.

Ein beispielhafter Code, den `createAudioFileAsync()` nutzen würde, sieht in etwa so aus:

    function successCallback(result) {
      console.log("Audio-Datei bereit unter URL: " + result);
    }

    function failureCallback(error) {
      console.error("Fehlerhafte Generierung der Audio-Datei: " + error);
    }

    createAudioFileAsync(audioSettings, successCallback, failureCallback);

In modernen Funktionen, welche Promises zurückgeben, kann man die Callbacks stattdessen direkt anhängen:

Würde `createAudioFileAsync()` so umgeschrieben, dass es als Rückgabewert ein Promise hätte, wäre die Nutzung davon einfach so:

    createAudioFileAsync(audiosettings).then(successCallback, failureCallback);

Das ist die Kurzform von:

    const promise = createAudioFileAsync(audioSettings);
    promise.then(successCallback, failureCallback);

Dies nennt man einen _asynchronen Funktionsaufruf_. Diese Vorgehensweise hat mehrere Vorteile, von denen in diesem Artikel jeder einzeln geschildert wird.

## Garantien

Anders als bei Callback-Übergabe nach dem alten Verfahren, können Promise-Objekte folgendes sicherstellen:

- Callback-Funktionen werden erst aufgerufen, wenn der [derzeitige Durchlauf des Javascript Event Loops ](/de/docs/Web/JavaScript/EventLoop#Run-to-completion)vollständig ist.
- Callback-Funktionen, die in `.then()` angehängt werden, werden _nach_ dem Ende der asynchronen Operation aufgerufen.
- Mehrere Callback-Funktionen können durch mehrmaliges Aufrufen von `.then()` angehängt werden, um unabhängig von der Funktion selbst in der Anhänge-Reihenfolge aufgerufen zu werden.

Allerdings ist der wohl kurzfristigste Nutzen von Promises das Chaining.

## Chaining

Eine häufige Aufgabenstellung ist der Aufruf von zwei oder mehr asynchronen Funktionen nacheinander in Sequenz, wobei Ergebnisse aus der vorangegangenen Funktion in die folgende Funktion übernommen werden. Dies ist realisierbar mittels einer _Promise chain_.

Hier steckt der Zauber drin: Die Funktion `.then()` gibt stets ein neues Promise-Objekt zurück:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

oder auch

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

Hierbei repräsentiert `promise2` nicht nur den vollständigen Aufruf von `doSomething()`, sondern auch die Ergebnisse der beiden angehängten Funktionen `successCallback` oder `failureCallback` - diese können ebenfalls asynchrone Funktionen sein, die Promises zurückgeben. In diesem Fall werden jegliche Callback-Funktionen, die an `promise2` angehängt würden, jeweils auch eingereiht in den jeweiligen Promise-Rückgabewerten von `successCallback` oder `failureCallback`.

Grundsätzlich repräsentiert jedes Promise-Objekt die Vervollständigung eines asynchronen Schritts in der Kette.

Nach dem alten Verfahren führte das Aneinanderreihen von mehreren asynchronen Operationen zur klassischen _Callback pyramid of doom_:

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit moderenen Funktionen können diese Callback-Funktionen stattdessen an die zurückgegebenen Promise-Objekte angehängt werden, womit die _Promise chain_ geformt wird:

```js
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

Die Argumente für `.then()` sind optional, und `.catch(failureCallback)` ist die Kurzschreibform von `.then(null, failureCallback)`. Dies kann stattdessen auch mit [Pfeil-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausgedrückt werden:

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

**Wichtig**: Immer Rückgabewerte angeben; sonst können die Callback das Ergebnis eines vorherigen Promise nicht abfangen.

### Chaining nach einem `.catch()`

Es ist auch möglich, nach einem Fehler, sprich `.catch()`, weiter zu verkettern. Dies ist nützlich um neue Operationen auszuführen, auch nachdem es einen Fehler in der Kette gab.

```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
```

Das obige Beispiel hat die nachfolgenden Ausgaben:

    Initial
    Do that
    Do this, no matter what happened before

Zu beachten ist hier, dass der Text "Do this" nicht ausgegeben wird, weil der Fehler "Something failed" einen Abbruch ausgelöst hat.

## Fehlerübertragung

Schaut man sich weiter oben die _Callback pyramid of doom_ an, wird sichtbar, dass `failureCallback` dort mehrmals angegeben werden muss, anders als nur einmal beim Beispiel unten:

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);
```

Grundsätzlich hält eine Promise chain bei einer Exception an und erlaubt nur noch Zugriffe von `.catch()`-Handlern. Dies ist modelliert nach der Funktionsweise von synchronem Code:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch(error) {
  failureCallback(error);
}
```

Diese Symmetrie mit synchronem Code erreichte ihren Höhepunkt in der [`async/await`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)-Komfortschreibweise in ECMAScript 2017:

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

Diese Schreibweise baut auf Promises auf; so ist `doSomething()` die selbe Funktion wie vorher. [Hier](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions) kann man mehr über diese Syntax erfahren.

Promise-Objekte lösen mit der _Callback pyramid of doom_ ein fundamentales Designproblem, indem sie alle Fehler, auch geworfene Exceptions und Programmierfehler, abfangen. Diese Eigenschaft ist essentiell für die funktionale Komposition von asynchronen Operationen.

## Promise rejection-Events

Immer, wenn ein Promise abgelehnt ("rejected") wird, wird eines von zwei Events zum globalen Scope (grundsätzlich entweder [`window`](/de/docs/Web/API/Window), oder, falls in einem Web-Worker gearbeitet wird, der [`Worker`](/de/docs/Web/API/Worker) selbst oder ein anderes, `Worker`-basiertes Interface) geschickt. Diese beiden Events sind:

- [`rejectionHandled`](/en-US/docs/Web/API/Window/rejectionhandled_event)
  - : Wird bei der Ablehnung eines Promise gesendet, nachdem die Ablehnung von der reject-Funktion des Ausführenden verarbeitet wurde.
- [`unhandledRejection`](/en-US/docs/Web/API/Window/unhandledrejection_event)
  - : Wird bei der Ablehnung eines Promise gesendet, wenn es keinen Rejection-Handler gibt.

In beiden Fällen hat das Event (vom Typ [`PromiseRejectionEvent`](/en-US/docs/Web/API/PromiseRejectionEvent)) als Member das Attribut [`promise`](/en-US/docs/Web/API/PromiseRejectionEvent/promise) welches auf das abgelehnte Promise zeigt, sowie ein Attribut [`reason`](/en-US/docs/Web/API/PromiseRejectionEvent/reason) welches eine Begründung für die Ablehnung des Promise enthält.

Diese Events bilden ein Fallback für die Fehlerbehandlung bei Promises sowie eine Hilfestellung beim Debugging des eigenen Promise-Managements. Da die Händler im Kontext global sind, werden alle Fehler unabhängig von der Quelle zu ihnen geschickt.

Ein Fall der besonderen Nützlichkeit: Wenn man Code in [Node.js](/de/docs/Glossary/Node.js) schreibt, kann es oft passieren, dass im Projekt hinzugefügte Module unverarbeitete abgelehnte Promises haben. Diese werden von der Node-Laufzeitumgebung in die Konsole geloggt. Zu Analysezwecken, zur Verarbeitung durch den eigenen Code, oder auch einfach zur Verhinderung von übermäßigem Output, kann man diese abgelehnten Promises einfangen, indem man für das [`unhandledrejection` event](/de/docs/Web/API/Window/unhandledrejection_event) einen Handler hinzufügen:

```js
window.addEventListener('unhandledrejection', event => {
  /* Hier lässt sich Code einfügen, um die Attribute des Events
     zu untersuchen */
  event.preventDefault();
}, false);
```

Indem die [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault)-Methode des Events aufgerufen wird, wird die standardmäßige Operation bei unverarbeiteten abgelehnten Promises verhindert. Üblicherweise beinhaltet dies das Loggen des Fehlers in der Konsole; im Fall von Node ist das tatsächlich der Fall.

Idealerweise sollte man abgelehnte Promises immer untersuchen, um sicher zu gehen, dass es sich nicht um Code-Fehler handelt.

## Ein Promise-Objekt in einer alten Callback-API erzeugen

Ein einfaches {{jsxref("Promise")}} kann durch dessen Konstruktor-Methode erzeugt werden. Diese Art und Weise sollte nur genutzt werden, um alte APIs damit zu umschließen.

Idealerweise würden alle asynchronen Funktionen bereits Promises zurückgeben. In der Realität erwarten einige APIs immer Callback-Funktionen für Erfolg und Fehlerfall, die nach dem alten Prinzip übergeben werden müssen. Ein eindeutiges Beispiel hierfür ist die Funktion {{domxref("WindowTimers.setTimeout", "setTimeout()")}}:

```js
setTimeout(() => saySomething("10 seconds passed"), 10000);
```

Callback-Funktionen nach dem alten Verfahren und Promises zu vermischen, bringt Probleme mit sich. Wenn `saySomething()` fehlschlägt oder Programmierfehler enthält, wird dies durch nichts abgefangen.

Glücklicherweise kann man solche Fälle mit einem Promise umschließen. Ein Best Practice besteht darin, problematische Funktionen auf der niedrigstmöglichen Ebene zu umschließen, und sie nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

Der Promise-Konstruktor empfängt grundsätzlich eine Ausführenden-Funktion, die es möglich macht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` nicht wirklich fehlschlägt, wurde im oberen Beispiel die Ablehnung ausgelassen.

## Komposition

{{jsxref("Promise.resolve()")}} und {{jsxref("Promise.reject()")}} sind Abkürzungen für das manuelle Erzeugen von jeweils bereits aufgelösten oder abgelehnten Promises. In bestimmten Fällen kann dies nützlich sein.

{{jsxref("Promise.all()")}} und {{jsxref("Promise.race()")}} sind zwei Kompositionswerkzeuge für das parallele Durchführen von asynchronen Operationen.

Sequenzielle Komposition ist möglich durch cleveres Javascript:

    [func1, func2].reduce((p, f) => p.then(f), Promise.resolve());

Im oberen Beispiel wird ein Array von asynchronen Funktionen auf eine Promise chain reduziert. Somit ist es das gleiche, wie `Promise.resolve().then(func1).then(func2);`.

Auch ist es möglich, dies mit einer wiederverwendbaren Kompositionsfunktion umzusetzen, die häufig in der funktionalen Programmierung vorkommt:

```js
const applyAsync = (acc,val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));
```

Die Funktion `composeAsync()` akzeptiert eine dynamische Anzahl von Funktionen als Parameter, und hat als Rückgabewert eine Funktion, die einen Initialwert akzeptiert, welcher durch die Kompositions-Pipeline durchgereicht wird. Der Nutzen besteht darin, dass einige oder alle übergebenen Funktionen entweder synchron oder asynchron sein können, und garantiert wird, dass sie in der richtigen Reihenfolge ausgeführt werden.

```js
const transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
transformData(data);
```

In ECMAScript 2017 kann sequenzielle Komposition mittels `async/await` noch einfacher durchgeführt werden:

```js
for (const f of [func1, func2]) {
  await f();
}
```

## Timing

Um Überraschungen vorzubeugen, werden Funktionen die an `.then()` übergeben werden niemals synchron aufgerufen, auch wenn das Promise bereits aufgelöst wurde:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

Anstatt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Microtask-Warteschlange eingereiht; das bedeutet, sie wird erst ausgeführt, wenn die Warteschlange am ende des aktuellen Durchlaufs des Javascript event loops geleert wird, sprich zeitnah:

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

## Nesting

Einfache Promise chains sollten möglichst flach und ohne Nesting implementiert werden, da Nesting auch das Ergebnis von undurchdachter Komposition sein kann. Siehe auch bei typischen Fehlern.

Als Nesting wird eine Kontrollstruktur bezeichnet, um den Scope von catch-Statements zu begrenzen. Ein nested catch fängt nur Fehler in seinem Scope und niedriger ab, nicht außerhalb. Korrekt genutzt führt dies zu höherer Präzision in der Fehlerbehandlung:

```js
doSomethingCritical()
.then(result => doSomethingOptional(result)
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // Ignorieren, wenn optionale Operation fehlschlägt
.then(() => moreCriticalStuff())
.catch(e => console.error("Critical failure: " + e.message));
```

## Typische Fehler

In diesem Abschnitt werden übliche Programmierfehler thematisiert, auf die man achten sollte, um Promise chains nicht zu kompromittieren. Im unteren Beispiel wurden drei der am häufigsten vorkommenden Fehler untergebracht:

```js example-bad
eineFunktion().then(function (ergebnis) {
  eineZweiteFunktion(ergebnis) // Kein Promise-Rückgabewert für innere Chain + unnötiges Nesting
  .then(neuesErgebnis => eineDritteFunktion(neuesErgebnis));
}).then(() => eineVierteFunktion());
// Keine Chain-Terminierung mit einem catch!
```

Der erste Programmierfehler ist, dass die Promise chain nicht ordentlich geknüpft wurde. Passieren tut dies, wenn ein neues Promise erzeugt, aber nicht zurückgegeben wird. Das führt dazu, dass die Promise chain reisst, oder aber, dass zwei chains entstehen, die sich in einer Race condition befinden. Im Klartext heisst das, dass `eineVierteFunktion()` nicht darauf wartet, dass `eineZweiteFunktion()` oder `eineDritteFunktion()` abgeschlossen sind, und, wahrscheinlich unbeabsichtigt, parallel mit ihnen ausgeführt wird. Einzelne Promise chains haben zusätzlich eigene Fehlerbehandlungen, was in diesem Fall zu nicht abgefangenen Fehlern führt.

Der zweite Programmierfehler ist das unnötige Nesting, welches den ersten Fehler mitverursachen kann. Da Nesting auch den Scope der inneren Fehler-Handler begrenzt, kann dies zu nicht abgefangenen Fehlern führen. Eine Variante hiervon ist das [Promise-Konstruktor-Antipattern](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it), welches Nesting mit der redundanten Nutzung eines Promise-Konstruktors, um Code, der bereits Promises nutzt, zu umschließen, kombiniert.

Der dritte Programmierfehler ist, die Terminierung der Promise chain mit einem `.catch()` wegzulassen. Unterminierte chains führen in den meisten Browsern zu nicht abgefangenen Promise-Ablehnungen.

Als Faustregel sei genannt, dass Promise chains immer entweder zurückgegeben oder terminiert werden sollen, und neue Promises sofort zurückgegeben werden sollten, um die Hierarchie flach zu halten:

```js example-good
eineFunktion()
.then(function(ergebnis) {
  return eineZweiteFunktion(ergennis);
})
.then(neuesErgebnis => eineDritteFunktion(neuesErgebnis))
.then(() => eineVierteFunktion())
.catch(fehler => console.error(fehler));
```

Zu beachten ist, dass `() => x` die Kurzschreibform für `() => { return x; }` ist.

Im oberen Beispiel steht jetzt eine einzelne, deterministische Promise chain mit ordentlicher Fehlerbehandlung.

Das Verwenden von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) adressiert die meisten, wenn nicht alle dieser Fehlerquellen; stattdessen kann dann der typische Fehler entstehen, dass man [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Keyword vergisst.

## Wenn Promises auf Tasks treffen

In einer Situation, in der es Promises und Tasks (z.B. Events oder Callbacks) gibt, die in einer unvorhergesehenen Reihenfolge ausgeführt werden / feuern können, ist es möglich, sich einen Microtask zunutze zu machen, um den Status von Promises zu prüfen oder diese auszubalancieren, wenn diese unter bestimmten Bedingungen erzeugt werden.

Für weitere Informationen über Microtasks und das Einreihen einer Funktion als Microtask mittels [`queueMicrotask()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask), kann im [Microtask-Guide](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) nachlesen.

## Siehe auch

- {{jsxref("Promise.then()")}}
- [`async/await`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask)
- [Promises/A+ specification](http://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}
