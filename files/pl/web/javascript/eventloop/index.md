---
title: Model współbieżności i Event Loop
slug: Web/JavaScript/EventLoop
translation_of: Web/JavaScript/EventLoop
---
{{JsSidebar("Advanced")}}

Model współbieżności w JavaScript opiera się o "event loop". Model ten jest lekko odmienny od spotykanego innych językach programowania takich jak C lub Java.

## Koncepcje środowiska wykonawczego

Poniższa sekcja objaśnia model teoretyczny. Nowoczesne silniki JavaScript implementują i optymalizują w dużej mierze opisaną semantykę.

### Reprezentacja wizualna

![Stack, heap, queue](/files/4617/default.svg)

### Stack

Wywołania funkcji formują stos (ang. stack) _klatek_.

```js
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); //zwraca 42
```

Podczas wywoływania funkcji `bar`, tworzona jest pierwsza klatka (ang. frame), która zawiera argumenty funkcji `bar` oraz jej lokalne zmienne. Gdy `bar` wywołuje `foo`, tworzona jest kolejna klatka, która trafia na wierzch stosu. Druga klatka zawiera argumenty funkcji  `foo` dla której została utworzona oraz jej lokalne zmienne. Gdy funkcja `foo` zwraca wynik działania, klatka znajdująca się na wierzchu stosu jest usuwana (pozostawiając wyłącznie klatkę wywołującą funkcję `bar`). Gdy w kolejnym kroku funkcja `bar` zwróci wynik, stos zostaje opróżniony.

### Heap

Sterta (ang. heap) jest pojęciem opisującym duży nieuporządkowany obszar pamięci. W nim przechowywane są obiekty.

### Queue

Środowisko wykonawcze (ang. runtime) JavaScript zawiera kolejkę wiadomości (ang. queue), która stanowi listę komunikatów do przetworzenia. Każda z wiadomości posiada przyporządkowaną funkcję, która przechowuje instrukcję przetworzenia danej wiadomości.

W przeciwieństwie do stosu wiadomości są przetwarzane począwszy od najstarszej z nich (znajdującej się na początku kolejki). Przetworzenie wiadomości polega na wywołaniu odpowiadającej jej funkcji. Wywołanie funkcji powoduje stworzenie i umieszczenie na stosie nowej klatki początkowej. Przetwarzanie danej informacji zostaje zakończone, gdy nastąpi opróżnienie stosu.

Gdy stos jest pusty, środowisko rozpoczyna przetwarzanie kolejnej informacji z kolejki.

## Event loop

Nazwa `Event loop` wiąże się ze sposobem implementacji, który zwykle przypomina następujący schemat:

```js
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

`queue.waitForMessage` oczekuje na wiadomość tak długo, dopóki jej nie otrzyma.

### "Run-to-completion"

W tym modelu każda z wiadomości przetwarzana jest po całkowitym zakończeniu przetwarzania poprzedniej. Oferuje to pewne udogodnienia w analizie programu polegające na tym, że po uruchomieniu funkcji nie może zostać ona wyprzedzona oraz zostanie całkowicie wykonana przed uruchomieniem kolejnego kawałka kodu (dotyczy to również modyfikowanych przez funkcję danych). Model ten różni się od stosowanego np. w języku C, gdzie uruchomiona w danym wątku funkcja może w dowolnym punkcie zostać zatrzymana w celu uruchomienia innego fragmentu kodu w kolejnym wątku.

Wadą tego modelu jest to, że jeśli wykonanie wiadomości trwa zbyt długo, aplikacja internetowa nie jest w stanie przetworzyć interakcji użytkownika, takich jak kliknięcie lub scrollowanie. Przeglądarka łagodzi to za pomocą okna dialogowego "skrypt trwa zbyt długo, aby uruchomić". Dobrą praktyką jest dążenie, aby przetwarzanie komunikatów było krótkie, a jeśli to możliwe, należy rozbić wiadomości na kilka krótszych.

### Dodawanie wiadomości do kolejki

W przeglądarkach internetowych wiadomości są dodawane przy każdym wystąpieniu eventu z dołączonym nasłuchiwaniem. Jeżeli brak nasłuchiwania event jest gubiony. Zatem przykładowo kliknięcie na element z nasłuchiwaniem doda nową wiadomość.

Funkcja [`setTimeout`](/en-US/docs/Web/API/WindowTimers.setTimeout "/en-US/docs/window.setTimeout") przyjmuje dwa argumenty: wiadomość do dodania do kolejki oraz czas (argument opcjonalny, domyślnie 0). Podany czas reprezentuje minimalne opóźnienie, po którym wiadomość trafi do kolejki. Jeżeli w kolejce nie ma innej wiadomości, zostaje ona przetworzona natychmiast po upływie danego czasu opóźnienia. Jeżeli jednak w kolejce znajdują się wiadomości, wiadomość [`setTimeout`](/en-US/docs/Web/API/WindowTimers.setTimeout "/en-US/docs/window.setTimeout") odczeka aż inne wiadomości zostaną przetworzone. Z tego powodu drugi argument tej funkcji określa czas minimalny,  nie gwarantowany.

Poniższy przykład ilustruje tę ideę (`setTimeout` nie zostanie uruchomiony bezpośrednio po upływie określonego czasu):

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // zwraca "2", co oznacza, że callback nie zostaje wywołany bezpośrednio po upływie 500 millisekund.
  console.log("Uruchomiono po upływie " + (new Date().getSeconds() - s) + " sekund");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Ok, zapętlono na 2 sekundy");
    break;
  }
}
```

### Several Runtime communicating together

A web worker or a cross-origin iframe has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the [`postMessage`](/pl/docs/DOM/window.postMessage) method. This method adds a message to the other runtime if the latter listens to `message` events.

## Never blocking

A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an [IndexedDB](/pl/docs/Web/API/IndexedDB_API "/en-US/docs/IndexedDB") query to return or an [XHR](/pl/docs/Web/API/XMLHttpRequest "/en-US/docs/DOM/XMLHttpRequest") request to return, it can still process other things like user input.

Legacy exceptions exist like `alert` or synchronous XHR, but it is considered as a good practice to avoid them. Beware, [exceptions to the exception do exist](http://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (but are usually implementation bugs rather than anything else).
