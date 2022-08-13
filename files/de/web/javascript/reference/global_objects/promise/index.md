---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
{{JSRef}}

Das **`Promise`** Objekt stellt eine Repräsentation einer eventuellen Ausführung (oder eines Fehlschlags) einer asynchronen Operation und den daraus resultierenden Ergebnissen dar.

Um mehr darüber zu erfahren wie promises funktionieren und wie diese verwendet werden sollte zuerst [Promises benutzen](/de/docs/Web/JavaScript/Guide/Using_promises) gelesen werden.

## Beschreibung

Das **`Promise-Objekt (dt./deutsch Ein Versprechens-Objekt, das später eingelöst wird)`**wird für asynchrone Berechnungen verwendet.

Ein `Promise` kann sich in einem von drei Zuständen befinden:

- _pending_ (schwebend): initialer Status, weder fulfilled noch rejected.
- _fulfilled_ (erfüllt): heisst das die Operation erfolgreich abgeschlossen wurde.
- _rejected_ (zurück gewiesen): heisst das die Operation gescheitert ist.

Ein weiterer Begriff beschreibt den Zustand _settled (erledigt aber nicht zwingend erfolgreich)_: Der Promise ist entweder _fulfilled_ oder _rejected_, aber nicht _pending_.

## Syntax

    new Promise(executor);
    new Promise(function(resolve, reject) { ... });

### Parameter

- executor (Ausführer)
  - : Funktion mit den zwei Argumenten `resolve` und `reject`. Das erste Argument führt den Promise aus, das zweite verwirft ihn. Die Funktionen können ausgeführt werden, sobald die Operation durchgeführt wurde.

## Beschreibung

Das **`Promise`**-Interface repräsentiert einen Proxy für einen Wert, der nicht zwingend bekannt ist, wenn der Promise erstellt wird. Das erlaubt die Assoziation zwischen _Handler_ und dem Gelingen oder Fehlschlagen einer asynchronen Aktion. Mit diesem Mechanismus können asynchrone Methoden in gleicher Weise Werte zurück geben wie synchrone Methoden: Anstelle des endgültigen Wertes wird ein _Promise_ zurückgegeben, dass es zu einem Zeitpunkt in der Zukunft einen Wert geben wird.

Ein Promise mit dem Status _pending_ kann entweder zu _fulfilled_ mit Wert oder zu einem _rejected_ mit Grund werden. Wenn einer dieser Fälle eintritt, werden die assoziierten _Handler_, die über die _then_-Methode gequeued wurde, aufgerufen. Ist ein Promise bereits in fullfilled oder rejected und wird erst dann ein entsprechender _Handler_ hinzugefügt, dann wird dieser Handler aufgerufen. Es gibt somit keine _Race Conditions_ zwischen der Ausführung der asynchronen Aktion und dem Hinzufügen des _Handlers_.

Da die Methoden`Promise.prototype.then` und `Promise.prototype.catch` Promises zurückgeben, können sie aneinander gereiht werden (Komposition).

![](https://mdn.mozillademos.org/files/8633/promises.png)

## Properties

- `Promise.length`
  - : _Length_-Attribut mit dem Wert 1 (Anzahl der Konstruktorargumente).
- {{jsxref("Promise.prototype")}}
  - : Repräsentiert den Prototyp für den `Promise`-Konstruktor.

## Methoden

- {{jsxref("Promise.all", "Promise.all(iterable)")}}
  - : Gibt einen `Promise` zurück, der aufgelöst wird, sobald alle Promises in dem `iterable`-Argument aufgelöst wurden.
- {{jsxref("Promise.race", "Promise.race(iterable)")}}
  - : Gibt einen `Promise` zurück, der aufgelöst oder verworfen wird, sobald einer der Promises in dem `iterable`-Argument aufgelöst oder verworfen wurde, und den Wert oder den Grund dieses Promise enthält.

- {{jsxref("Promise.reject", "Promise.reject(reason)")}}
  - : Gibt einen `Promise` zurück, der mit dem angegeben Grund (`reason`) verworfen wird.

- {{jsxref("Promise.resolve", "Promise.resolve(value)")}}
  - : Gibt einen `Promise` zurück, der mit `value` aufgelöst wird. Falls der Wert ein _thenable_ ist (Objekt besitzt eine `then`-Methode), folgt der zurückgegebene `Promise` dem _thenable_ und übernimmt den Status. Andernfalls wird der zurückgegebene `Promise` auf _fulfilled_ gesetzt.

## `Promise`-Prototyp

### Eigenschaften

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Eigenschaften')}}

### Methoden

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Methoden')}}

## Beispiele

### Einen Promise erstellen

\<div id="log">\</div>

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()`wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wurde. Es wird ein Promise erstellt, der mithilfe von `window.setTimeout` nach einer zufällig gewählten Zeit (1-3 s) zu `'result'` aufgelöst wird.

Die Ausführung der Promises wird mit einem _fulfill_-Callback unter Verwendung von `p1.then` gelogt. Durch ein paar Logeinträge wird gezeigt, wie der synchrone Teil der Methode von der asynchronen Vollendung des Promises abgekoppelt ist.

```js
var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Started (<small>Sync code started</small>)<br/>');

  // Wir erstellen einen neuen Promise: wir versprechen den String 'result' (Wartezeit max. 3s)
  var p1 = new Promise(
    // Resolver-Funktion kann den Promise sowohl auflösen als auch verwerfen
    // reject the promise
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
          ') Promise started (<small>Async code started</small>)<br/>');
      // nur ein Beispiel, wie Asynchronität erstellt werden kann
      window.setTimeout(
        function() {
          // We fulfill the promise !
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // wir bestimmen, was zu tun ist, wenn der Promise fulfilled
  p1.then(
    // Loggen der Nachricht und des Wertes
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Promise made (<small>Sync code terminated</small>)<br/>');
}
```

```js
if ("Promise" in window) {
  btn = document.getElementById("btn");
   btn.addEventListener("click",testPromise);
}
else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
}
```

Dieses Beispiel wird ausgeführt, wenn der Button geklickt wird. Man benötigt einen Browser, der _Promise_ unterstützt. Durch mehrmaliges Klicken in kurzer Zeit kann beobachtet werden, wie die einzelnen Promises nacheinander _fulfilled_ werden.

{{EmbedLiveSample("Creating_a_Promise", "500", "200")}}

### Laden eines Bildes mit XHR

Ein weiteres, einfaches Beispiel für die Verwendung von Promises und `XMLHTTPRequest,` um ein Bild zu laden, ist in dem MDN GitHub [promise-test](https://github.com/mdn/js-examples/blob/master/promises-test/index.html) Repository. [Hier](https://mdn.github.io/js-examples/promises-test/)kannst du es in Aktion sehen. Jeder Schritt ist kommentiert und erlaubt die den Promises und der XHR-Architektur nachzuvollziehen.

## Spezifikationen

| Spezifikation                                                                 | Status               | Kommentar                                  |
| ----------------------------------------------------------------------------- | -------------------- | ------------------------------------------ |
| [domenic/promises-unwrapping](https://github.com/domenic/promises-unwrapping) | Draft                | Standardisierung findet hier statt.        |
| {{SpecName('ES6', '#sec-promise-objects', 'Promise')}}      | {{Spec2('ES6')}} | Initiale Definition als ein ECMA-Standard. |

## Browserkompatiblität

{{Compat}}

\[1] Gecko 24 hat eine experimentelle Implementierung von _Promises_ unter dem vorherigen Namen _Future_. In Gecko 25 wurde sie in ihren endgültigen Namen umbenannt, wird aber per Default durch das Flag `dom.promise.enable` unterdrückt. [Bug 918806](https://bugzilla.mozilla.org/show_bug.cgi?id=918806) aktiviert Promises per Default in Gecko 29.

## Siehe auch

- [Promises/A+ specification](http://promisesaplus.com/)
- [Jake Archibald: JavaScript Promises: There and Back Again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patter in JavaScript](http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
- [Matt Greer: JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
- [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
- Fussnote1: bitte die englischen Begriffe in dieser Übersetzung stehen lassen, da sonst der Zusammenhang zu englischen Dokumentation völlig verloren geht. Worte wie 'Promise' sollte man sich merken, um sie auch in englisch zu verstehen.
