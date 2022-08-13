---
title: Concurrency model and Event Loop
slug: Web/JavaScript/EventLoop
tags:
  - Advanced
  - Event Loop
  - Event Management
  - Event Queue
  - Handling Events
  - JavaScript
  - events
translation_of: Web/JavaScript/EventLoop
---
{{JsSidebar("Advanced")}}

JavaScript hat ein Nebenläufigkeitsmodell, auf Basis einer Eventschleife. Dieses Modell unterscheidet sich stark von Modellen aus anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Der folgenden Abschnitt erklärt ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken sehr stark.

### Visuelle Repräsentation

![Stack, heap, queue](/files/4617/default.svg)

### Stack

Funktionsaufrufe von einem Stack von _Frames._

```js
function foo(b){
  var a = 10;
  return a + b + 11;
}

function bar(x){
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); // gibt 42 zurück
```

Beim Aufruf von `bar` wird ein erster Frame erstellt, der die Argumente und lokalen Variablen von `bar` enthält. Sobald `bar` die Funktion `foo` aufruft, wird ein zweiter Frame erstellt, der auf den ersten gelegt wird und die Argumente und lokalen Variablen von `foo` enthält. Wenn `foo` beendet wird, wird der der oberste Frame aus dem Stack entfernt (nur der `bar` Frame bleibt auf dem Stack). Wenn `bar` beendet wird, ist der Stack leer.

### Heap

Objekte werden in einem Heap gespeichert, welcher hauptsächlich eine meist große unstrukturierte Region im Speicher ist.

### Queue

Eine JavaScript Laufzeitumgebung benutzt eine Nachrichten-Queue, welche eine Liste von Nachrichten ist, die ausgeführt werden. Jede Nachricht hat eine Funktion, die aufgerufen wird, um die Nachricht abzuarbeiten.

An diesem Punkt, während der [Eventschleife](#eventschleife), beginnt die Laufzeitumgebung mit der ältesten Nachricht. Dazu wird die Nachricht aus der Queue entfernt und die zugehörige Funktion mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erzeugt das Aufrufen einer Funktion einen neuen Frame auf dem Stack, für den Funktionsgebrauch.

Die Ausführung von Funktionen geht so lange weiter, bis der Stack wieder leer ist; dann wird die Eventschleife die nächste Nachricht ausführen (wenn eine vorhanden ist).

## Eventschleife

Die **Eventschleife** ist nach der Art und Weise, wie diese meist implementiert ist, benannt. Dies ähnelt meist der folgenden Struktur:

```js
while (queue.waitForMessage()){
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf eine eingehende Nachricht, wenn keine vorhanden ist.

### Ausführungsfertigstellung

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht verarbeitet wird. Dies bietet einige nette Eigenschaften zum Verständnis der Ausführung ihres Programms, einschließlich der Tatsache, dass eine Funktion, wann immer sie ausgeführt wird, nicht vorzeitig verlassen werden kann. Die Funktion wird daher vollständig ausgeführt bevor irgendein anderer Code ausgeführt wird (und die Daten ändern könnte). Dies unterscheidet sich z. B. von C, wo eine Funktion in einem Thread läuft und gestoppt werden kann, um anderen Code in einem anderen Thread auszuführen.

Dies bringt aber den Nachteil mit sich, dass während einer Nachricht, die sehr lange dauern kann, keine Nutzer-Interaktionen, wie z.B. Klicken oder Scrollen, möglich ist. Der Browser entschärft dies mit dem "Ein Skript antwortet nicht mehr" Dialog. Gute Praxis ist es daher die Dauer der Nachrichten kurz zu halten und wenn möglich in einzelne Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In einem Webbrowser werden Nachrichten immer hinzugefügt, wenn ein Event auftritt und diesem ein Event Listener hinzugefügt wurde. Ist kein Listener vorhanden, geht das Event verloren. Ein Klick auf ein Element mit einem Click-Event-Handler fügt also eine Nachricht hinzu - ähnlich wie bei jedem anderen Ereignis.

Die Funktion {{domxref("WindowTimers.setTimeout", "setTimeout")}} wird mit 2 Argumenten aufgerufen: eine Nachricht, die der Queue hinzugefügt wird, und einen Zeitwert (optional; Standardwert 0). Der Zeitwert gibt die (minimale) Zeit an, nach der die Nachricht zur Queue hinzugefügt wird. Die Nachricht wird nach dieser Zeit aufgeführt, wenn keine anderen Nachrichten ausgeführt werden. Aus diesem Grund ist der zweite Parameter die minimale und nicht die garantierte Zeit.

Hier ist ein Beispiel, welches das Konzept demonstriert (`setTimeout` wird nicht direkt nach dem Ablaufen der Zeit aufgeführt):

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### Nullverzögerungen

Nullverzögerung bedeutet nicht, dass der Aufruf nach null Millisekunden gefeuert wird. Der Aufruf von {{domxref("WindowTimers.setTimeout", "setTimeout")}} mit einer Verzögerung von 0 Millisekunden führt die übergebene Funktion nicht nach dem gegebenen Intervall aus.

Die Ausführung hängt von der Anzahl von wartenden Aufrufen in der Queue ab. Im Beispiel unten, wird die Nachricht ''this is just a message'' vor der Ausführung des Callback auf der Konsole ausgegeben, weil die Verzögerung die minimale Verzögerung für die Laufzeigumgebung ist, aber diese nicht garantiert werden kann.

Im Grunde muss setTimeout warten, bis der gesamte Code für Nachrichten in der Warteschlange abgeschlossen wurde, obwohl ein bestimmtes Zeitlimit für setTimeout angegeben wurde.

```js
(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('this is a msg from call back');
  });

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('this is a msg from call back1');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// note that function return, which is undefined, happens here
// "this is a msg from call back"
// "this is a msg from call back1"
```

### Komunikation mehrere Laufzeitumgebungen zur gleichen Zeit

Ein Web Worker oder ein Cross-Origin iFrame hat seinen eigenen Stack, Heap und Nachrichten Queue. Zwei unabhängige Laufzeitumgebungen können nur durch das Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage) Methode kommunizieren. Diese Methode fügt der Message Queue der anderen Laufzeit eine Nachricht hinzu, wenn diese auf die Message-Events hört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Eventschleifen Modells ist, dass Javascript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Handhabung von I/O wird typischerweise über Events und Callback-Funktionen erledigt, so dass die Applikation, während sie auf Ergebnisse einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)- oder [XHR](/de/docs/Web/API/XMLHttpRequest)-Anfrage wartet, weitere Benutzereingaben verarbeiten kann.

Es gibt Ausnahmen, wie z.B. alert oder synchrone XHR, wobei es eine gute Praxis ist, diese zu vermeiden. Obacht, [es existieren Ausnahmen für die Ausnahme](http://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (aber diese sind für gewöhnlich eher Bugs bei der Implementierung als irgendetwas anderes).
