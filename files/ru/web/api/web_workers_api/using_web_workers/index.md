---
title: Использование Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker-ы предоставляют простое средство для запуска скриптов в фоновом потоке. Поток Worker'а может выполнять задачи без вмешательства в пользовательский интерфейс. К тому же, они могут осуществлять ввод/вывод, используя [`XMLHttpRequest`](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest) (хотя атрибуты `responseXML` и `channel` всегда будут равны null). Существующий Worker может отсылать сообщения JavaScript коду-создателю через обработчик событий, указанный этим кодом (и наоборот). Эта статья даёт детальную инструкцию по использованию Web Workers.

## Web Workers API

Worker - это объект, создаваемый конструктором (например, {{domxref("Worker.Worker", "Worker()")}}) и запускающий именной JavaScript файл — этот файл содержит код, который будет выполнен в потоке Worker'а; объекты же Workers запускаются в другом глобальном контексте, отличающемся от текущего, - {{domxref("window")}}. Поэтому использование переменной {{domxref("window")}} для получения текущего глобального контекста (вместо {{domxref("window.self","self")}}) внутри {{domxref("Worker")}} вернёт ошибку.

Контекст Worker'а представлен объектом {{domxref("DedicatedWorkerGlobalScope")}} в случае выделенных Workers (обычные Workers используются одним скриптом; совместные Workers используют объект {{domxref("SharedWorkerGlobalScope")}}). Выделенный Worker доступен только из скрипта-родителя, в то время как совместные Workers могут быть доступны из нескольких сценариев.

> **Примечание:** Смотрите [страницу Web Workers API](/ru/docs/Web/API/Web_Workers_API) для справки по Workers и прочие руководства.

Вы можете запускать любой код внутри потока worker-а, за некоторыми исключениями. Например, вы не можете прямо манипулировать DOM внутри worker-а, или использовать некоторые методы по умолчанию и свойства объекта {{domxref("window")}}. Но вы можете использовать большой набор опций, доступный под `Window`, включая [WebSockets](/ru/docs/Web/API/WebSockets_API), и механизмы хранения данных, таких как [IndexedDB](/ru/docs/Web/API/IndexedDB_API) и относящихся только к Firefox OS [Data Store API](/ru/docs/Web/API/Data_Store_API). Для дополнительной информации смотрите [Functions and classes available to workers](/ru/docs/Web/API/Worker/Functions_and_classes_available_to_workers).

Данные передаются между worker-ами и главным потоком через систему сообщений — обе стороны передают свои сообщения, используя метод `postMessage()` и отвечают на сообщения при помощи обработчика событий `onmessage` (сообщение хранится в атрибуте data события {{event("Message")}}). Данные при этом копируются, а не делятся.

Объекты Workers могут, в свою очередь, создавать новые объекты workers, и так до тех пор, пока всё работает в рамках текущей страницы. Плюс к этому, объекты workers могут использовать [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) для сетевого ввода/вывода, но есть исключение - атрибуты `responseXML` и `channel` объекта `XMLHttpRequest` всегда возвращают `null`.

## Выделенные Workers

Как уже упоминалось выше, выделенный Worker доступен только для скрипта, который его вызвал. В этом разделе речь пойдёт о JavaScript, который можно найти в нашем [основном примере выделенного Worker](https://github.com/mdn/simple-web-worker) ([запустить скрипт](http://mdn.github.io/simple-web-worker/)): этот пример позволяет ввести два числа для умножения. Эти числа отправляются в Worker, перемножаются, а результат возвращается на страницу и отображается.

Этот пример достаточно тривиален, но для ознакомления с базовыми концепциями worker-ов мы решили его упростить. Более продвинутые детали описаны далее в статье.

### Определение поддержки Worker

Для большего контроля над ошибками и обратной совместимости, рекомендуется обернуть ваш код доступа к worker-у в следующий ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
if (window.Worker) {

  ...

}
```

### Создание выделенного worker

Создание нового worker-а — это легко. Всё что вам нужно это вызвать конструктор {{domxref("Worker.Worker", "Worker()")}}, указав URI скрипта для выполнения в потоке worker-а ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
var myWorker = new Worker("worker.js");
```

### Передача сообщений в и из выделенного worker

Магия worker-ов происходит через {{domxref("Worker.postMessage", "postMessage()")}} метод и обработчик событий {{domxref("Worker.onmessage", "onmessage")}}. Когда вы хотите отправить сообщение в worker, вы доставляете сообщение к нему вот так ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

В приведённом фрагменте кода мы имеем два {{htmlelement("input")}} элемента, представленных переменными `first` и `second`; когда значение любой из переменных изменяется, `myWorker.postMessage([first.value,second.value])` используется для отправки обоих значений, представленных в виде массива, в worker. Посредством аргумента `message` возможна передача практически любых данных в worker.

Внутри worker-a мы можем обрабатывать сообщения и отвечать на них при помощи добавления обработчика события `onmessage` подобным образом ([worker.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js)):

```js
onmessage = function (e) {
  console.log("Message received from main script");
  var workerResult = "Result: " + e.data[0] * e.data[1];
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Обработчик `onmessage` позволяет нам запустить некий код всякий раз, когда получен пакет с сообщением, доступным в атрибуте `data` события `message`. В примере выше мы просто перемножаем вместе две цифры, после чего используем `postMessage()` снова, чтобы отправить полученный результат назад в основной поток.

Возвращаясь в основной поток, мы используем `onmessage` снова, чтобы отреагировать на сообщение, отправленное нам назад из worker-а:

```js
myWorker.onmessage = function (e) {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

В примере выше мы берём данные из события сообщения и ставим их как `textContent` у результирующего абзаца, чтобы показать пользователю результат этой калькуляции.

> **Примечание:** Обратите внимание, что `onmessage()` и `postmessage()` должны вызываться из экземпляра Worker в главном потоке, но не в потоке worker-а. Это связано с тем, что внутри потока worker-а, worker выступает в качестве глобального объекта.

> **Примечание:** При передаче сообщения между основным потоком и потоком worker-а, оно копируется или "передаётся" (перемещается), не делится между потоками. Читайте [Transferring data to and from workers: further details](#transferring_data_to_and_from_workers:_further_details) для более подробного объяснения.

### Завершение работы worker-а

Прекращение работы worker-а главного потока достигается методом {{domxref("Worker", "terminate")}}:

```js
myWorker.terminate();
```

Поток worker-а немедленно уничтожается.

### Обработка ошибок

При ошибке во время выполнения worker-а, вызывается его обработчик событий `onerror`. Он принимает событие `error`, которое реализует интерфейс `ErrorEvent`.

Событие не всплывает и его можно отменить. Для отмены действия по умолчанию, worker может вызвать метод [`preventDefault()`](/ru/docs/Web/API/Event/preventDefault) в обработчике события ошибки.

У события ошибки есть три поля, которые представляют интерес:

- `message`
  - : Сообщение об ошибке в читаемом виде.
- `filename`
  - : Имя файла со скриптом, в котором ошибка произошла.
- `lineno`
  - : Номер строки в файле, в котором произошла ошибка.

### Создание subworkers

Worker-ы могут запускать другие worker-ы. Так называемые sub-worker'ы должны быть того же происхождения (same-origin), что и родительский документ. Кроме того, URI для subworker-ов рассчитываются относительно родительского worker'а, а не родительского документа. Это позволяет worker-ам проще следить за тем, где находятся их зависимости.

### Импорт скриптов и библиотек

Worker потоки имеют доступ к глобальной функции, `importScripts()`, которая позволяет импортировать скрипты с того же домена в их область видимости. Функция принимает ноль и более URI параметров, как список ссылок на ресурсы для импорта; все нижеприведённые примеры верны:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
```

Браузер загружает каждый указанный скрипт и исполняет его. Любые глобальные объекты, создаваемые каждым скриптом могут быть использованы в worker'е. Если скрипт не удалось загрузить, будет брошена ошибка `NETWORK_ERROR`, и последующий код не будет исполнен. Тем не менее код, исполненный ранее (включая отложенный при помощи {{domxref("window.setTimeout()")}}) останется функционален. Объявления функций идущие **после** вызова метода `importScripts()` также будут доступны, т.к. объявления функций всегда обрабатываются перед остальным кодом.

> **Примечание:** Скрипты могут быть загружены в произвольном порядке, но их исполнение будет в том порядке, в котором имена файлов были переданы в `importScripts()`. Функция выполняется синхронно; `importScripts()` не вернёт исполнение, пока все скрипты не будут загружены и исполнены.

## Разделяемые worker-ы (Shared workers)

Разделяемый worker доступен нескольким разным скриптам — даже если они находятся в разных окнах, фреймах или даже worker-ах. В этом разделе мы обсудим JavaScript, который можно найти в нашем [базовом примере разделяемых worker-ов](https://github.com/mdn/simple-shared-worker) ([запустить разделяемый worker](http://mdn.github.io/simple-shared-worker/)): Он очень похож на базовый пример выделенных worker-ов, за исключением двух функций, которые доступны из разных скриптовых файлов: _умножение двух чисел_ или _возведение числа в степень._ Оба скрипта используют один и тот же worker для необходимых вычислений.

Здесь мы сосредоточимся на разнице между выделенными и разделёнными worker-ами. Обратите внимание, что в данном примере есть две HTML страницы с JavaScript-кодом, которые используют один и тот же файл worker-а.

> **Примечание:** Если разделяемый worker может быть доступен из нескольких контекстов просмотра, то все они должны иметь одно и то же происхождение (одни и те же протокол, хост и порт).

> **Примечание:**В Firefox разделяемый worker не может быть использован совместно документами в приватном и неприватном окне ({{bug(1177621)}}).

### Создание разделяемого worker-а

Запуск разделяемого worker-а очень похож на запуск выделенного worker-а, но используется другой конструктор (см. [index.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index.html) и [index2.html](http://mdn.github.io/simple-shared-worker/index2.html)) — в каждом документе необходимо поднять worker, для этого следует написать такой код:

```js
var myWorker = new SharedWorker("worker.js");
```

Большая разница заключается в том, что с разделяемым worker-ом необходимо взаимодействовать через объект `port` — явно открыв порт, с помощью которого скрипты могут взаимодействовать с worker-ом (в случае выделенного worker-а это происходит неявно).

Соединение с портом должно быть осуществлено либо неявно, используя обработчик событие `onmessage`, либо явно, вызвав метод **start()** перед тем, как отправлять любые сообщения. Вызов метода start() необходим только тогда, когда подписка на событие реализована через метод `addEventListener()`.

> **Примечание:**Когда используется метод `start()` чтобы открыть соединение с портом, его необходимо вызывать и в родительском потоке и в потоке worker-а, если необходима двухсторонняя коммуникация.

```js
myWorker.port.start(); // в родительском потоке
```

```js
port.start(); // в потоке worker-а, где переменная port является ссылкой на порт
```

### Передача сообщений в/из разделяемого worker-а

Теперь сообщения могут быть отправлены worker-у, как и прежде, но метод `postMessage()` должен вызываться из объекта `port` (ещё раз, вы можете увидеть схожие конструкции в [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) и [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
squareNumber.onchange = function () {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Теперь на стороне worker-а. Здесь код немного сложнее ([worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)):

```js
self.addEventListener("connect", function (e) {
  // требуется addEventListener()
  var port = e.ports[0];
  port.onmessage = function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  };
  port.start(); // вызов необязательный, т.к. используется обработчик событий onmessage
});
```

Первый этап состоит из события `onconnect`. Оно срабатывает, когда произошло подключение (т.е. когда в родительском потоке отработало событие `onmessage` или когда в нем был вызван метод `start()`).

Мы используем атрибут события `ports`, чтобы получить порт и сохранить его в переменной.

Второй этап — это обработчик события `message` на сохранённом порту. Он нужен для подсчёта и вывода результата вычисления в основной поток. Установка обработчика `message` в потоке worker-а также открывает подключение к родительскому потоку, поэтому вызов на `port.start()` на самом деле не нужен (см. код обработчика `onconnect`).

Последний этап — возвращение в основной поток и обработка сообщения от worker‑а (ещё раз, вы можете увидеть схожие конструкции в [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) и [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
myWorker.port.onmessage = function (e) {
  result2.textContent = e.data[0];
  console.log("Message received from worker");
};
```

Когда сообщение приходит через порт от worker-а, мы проверяем тип результата вычислений и затем вставляем его в соответствующий абзац.

## О потоковой безопасности

Интерфейс {{domxref("Worker")}} создаёт настоящие потоки на уровне операционной системы, что может смутить опытных программистов и навести их на мысли о проблемах, связанных с конфликтом доступа к общим объектам.

На самом деле создать такие проблемы достаточно сложно, так как worker-ы жёстко контролируются. У них нет доступа к непотокобезопасным объектам DOM, а все данные между потоками передаются в качестве сериализованных объектов. Придётся очень постараться, чтобы вызывать проблемы потокобезопасности в вашем коде.

## Передача данных в и из worker-ов: другие детали

Передача данных между главной страницей и worker-ом происходит путём копирования, а не передачи по ссылке. Объекты сериализуются при передаче и затем десериализуются на другом конце. Страница и worker не используют совместно одни и те же экземпляры, для каждого создаётся свой. Большинство браузеров реализуют это структурированным клонированием ([structured cloning](/ru/docs/Web/Guide/API/DOM/The_structured_clone_algorithm)).

Для иллюстрации этого мы создадим функцию `emulateMessage()`, которая будет имитировать поведение значения, которое клонируется, но не используется совместно при переходе от worker-а к главной странице или наоборот.

```js
function emulateMessage(vVal) {
  return eval("(" + JSON.stringify(vVal) + ")");
}

// Tests

// test #1
var example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String("Hello World");
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
  name: "John Smith",
  age: 43,
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// test #5
function Animal(sType, nAge) {
  this.type = sType;
  this.age = nAge;
}
var example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

Значения, которые клонируются и совместно не используются, называются сообщениями. Как вы, возможно, знаете, сообщения могут быть отправлены в главную страницу и из неё, используя `postMessage()`, и {{domxref("MessageEvent.data", "data")}}, содержа данные, передаваемые из worker-а.

**example.html**: (главная страница):

```js
var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

myWorker.postMessage("ali");
```

**my_task.js** (worker):

```js
postMessage("I'm working before postMessage('ali').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};
```

Алгоритм структурированного клонирования может принять JSON и некоторые вещи, которые JSON не может принять, например, циклические ссылки.

### Примеры передачи данных

#### Пример #1: Расширенная передача JSON данных и создание системы коммутации

Если вам нужно передать сложные данные и вызвать множество различных функций как на главной странице, так и в worker-е, вы можете создать следующую систему.

В первую очередь мы создаём класс QueryableWorker, который принимает url worker-а, стандартный обработчик событий (defaultListener) и обработчик ошибок. Этот класс будет отслеживать всех обработчиков и поможет нам общаться с воркером.

```js
function QueryableWorker(url, defaultListener, onError) {
  var instance = this,
    worker = new Worker(url),
    listeners = {};

  this.defaultListener = defaultListener || function () {};

  if (onError) {
    worker.onerror = onError;
  }

  this.postMessage = function (message) {
    worker.postMessage(message);
  };

  this.terminate = function () {
    worker.terminate();
  };
}
```

Затем мы добавляем методы добавления/удаления обработчиков.

```js
this.addListeners = function (name, listener) {
  listeners[name] = listener;
};

this.removeListeners = function (name) {
  delete listeners[name];
};
```

Здесь мы создадим у worker-а два простых события для примера: получение разницы двух чисел и создание оповещения через три секунды. Но сначала нам нужно реализовать метод sendQuery, который проверит есть ли вообще у worker-а обработчик, который мы собираемся вызвать.

```js
/*
  Эта функция принимает по крайней мере один аргумент: имя метода, который мы хотим вызвать.
  Далее мы можем передать методу необходимые ему аргументы.
 */
this.sendQuery = function () {
  if (arguments.length < 1) {
    throw new TypeError(
      "QueryableWorker.sendQuery takes at least one argument",
    );
    return;
  }
  worker.postMessage({
    queryMethod: arguments[0],
    queryArguments: Array.prototype.slice.call(arguments, 1),
  });
};
```

Завершим QueryableWorker методом `onmessage`. Если worker имеет соответствующий метод, который мы запросили, он также должен вернуть соответствующий обработчик и аргументы, которые нам нужны. Останется лишь найти его в `listeners`:

```js
worker.onmessage = function (event) {
  if (
    event.data instanceof Object &&
    event.data.hasOwnProperty("queryMethodListener") &&
    event.data.hasOwnProperty("queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      instance,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener.call(instance, event.data);
  }
};
```

Теперь к самому worker-у. Сначала следует определить эти два простых метода:

```js
var queryableFunctions = {
  getDifference: function (a, b) {
    reply("printStuff", a - b);
  },
  waitSomeTime: function () {
    setTimeout(function () {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

function reply() {
  if (arguments.length < 1) {
    throw new TypeError("reply - takes at least one argument");
    return;
  }
  postMessage({
    queryMethodListener: arguments[0],
    queryMethodArguments: Array.prototype.slice.call(arguments, 1),
  });
}

/* This method is called when main page calls QueryWorker's postMessage method directly*/
function defaultReply(message) {
  // do something
}
```

И `onmessage`:

```js
onmessage = function (event) {
  if (
    event.data instanceof Object &&
    event.data.hasOwnProperty("queryMethod") &&
    event.data.hasOwnProperty("queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

Полный код примера:

**example.html** (основная страница):

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
      /*
      QueryableWorker instances methods:
        * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc): calls a Worker's queryable function
        * postMessage(string or JSON Data): see Worker.prototype.postMessage()
        * terminate(): terminates the Worker
        * addListener(name, function): adds a listener
        * removeListener(name): removes a listener
      QueryableWorker instances properties:
        * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
     */
      function QueryableWorker(url, defaultListener, onError) {
        var instance = this,
          worker = new Worker(url),
          listeners = {};

        this.defaultListener = defaultListener || function () {};

        if (onError) {
          worker.onerror = onError;
        }

        this.postMessage = function (message) {
          worker.postMessage(message);
        };

        this.terminate = function () {
          worker.terminate();
        };

        this.addListener = function (name, listener) {
          listeners[name] = listener;
        };

        this.removeListener = function (name) {
          delete listeners[name];
        };

        /*
        This functions takes at least one argument, the method name we want to query.
        Then we can pass in the arguments that the method needs.
      */
        this.sendQuery = function () {
          if (arguments.length < 1) {
            throw new TypeError(
              "QueryableWorker.sendQuery takes at least one argument",
            );
            return;
          }
          worker.postMessage({
            queryMethod: arguments[0],
            queryMethodArguments: Array.prototype.slice.call(arguments, 1),
          });
        };

        worker.onmessage = function (event) {
          if (
            event.data instanceof Object &&
            event.data.hasOwnProperty("queryMethodListener") &&
            event.data.hasOwnProperty("queryMethodArguments")
          ) {
            listeners[event.data.queryMethodListener].apply(
              instance,
              event.data.queryMethodArguments,
            );
          } else {
            this.defaultListener.call(instance, event.data);
          }
        };
      }

      // your custom "queryable" worker
      var myTask = new QueryableWorker("my_task.js");

      // your custom "listeners"
      myTask.addListener("printStuff", function (result) {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode("The difference is " + result + "!"),
          );
      });

      myTask.addListener("doAlert", function (time, unit) {
        alert("Worker waited for " + time + " " + unit + " :-)");
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (код worker-а):

```js
var queryableFunctions = {
  // пример #1: получить разницу между двумя числами
  getDifference: function (nMinuend, nSubtrahend) {
    reply("printStuff", nMinuend - nSubtrahend);
  },
  // пример #2: подождать три секунды
  waitSomeTime: function () {
    setTimeout(function () {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// системные функции

function defaultReply(message) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply() {
  if (arguments.length < 1) {
    throw new TypeError("reply - not enough arguments");
    return;
  }
  postMessage({
    queryMethodListener: arguments[0],
    queryMethodArguments: Array.prototype.slice.call(arguments, 1),
  });
}

onmessage = function (oEvent) {
  if (
    oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty("queryMethod") &&
    oEvent.data.hasOwnProperty("queryMethodArguments")
  ) {
    queryableFunctions[oEvent.data.queryMethod].apply(
      self,
      oEvent.data.queryMethodArguments,
    );
  } else {
    defaultReply(oEvent.data);
  }
};
```

Можно переключать содержимое каждой главной страницы -> worker и worker -> сообщение главной страницы. И имена свойств "queryMethod", "queryMethodListeners", "queryMethodArguments" могут быть любыми пока они согласуются с `QueryableWorker` и `worker`.

### Передача данных с помощью передачи владения (передаваемые объекты)

Google Chrome 17+ and Firefox 18+ имеют дополнительную возможность передачи определённых типов объектов (передаваемые объекты реализующие {{domxref("Transferable")}} интерфейс) к или из worker-а с высокой производительностью. Эти объекты передаются из одного контекста в другой без операций копирования, что приводит к значительному повышению производительности при отправке больших наборов данных. Думайте об этом как о передаче по ссылке в мире C/C++. Однако в отличии от передачи по ссылке, "версия" из вызывающего контекста больше недоступна после передачи. Владельцем становится новый контекст. Для примера, после передачи {{domxref("ArrayBuffer")}} из главной страницы к worker-у, исходный {{domxref("ArrayBuffer")}} очищается и более недоступен для использования. Его содержание (в буквальном смысле) переносится в рабочий контекст.

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **Примечание:** Для дополнительной информации о передаваемых объектах, производительности и поддержки для этого метода, читайте [Transferable Objects: Lightning Fast!](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) на HTML5 Rocks.

## Встроенные worker-ы

Не существует утверждённого способа встроить код worker-а в рамках веб-страницы, как элемент {{HTMLElement("script")}} делает для обычных скриптов. Но элемент {{HTMLElement("script")}}, который не имеет атрибута `src` и атрибута `type`, которому не назначен выполняемый MIME type, можно считать блоком данных для использования JavaScript. Блок данных "Data blocks" — это более общее свойство HTML5, может содержать любые текстовые данные. Так, worker может быть встроен следующим образом:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // Этот script НЕ БУДЕТ анализироваться JS движками, потому что  его MIME-тип text/js-worker.
      var myVar = 'Hello World!';
      // Остальная часть кода вашего воркера идёт сюда.
    </script>
    <script type="text/javascript">
      // Этот script БУДЕТ проанализирован JS движкам, потому что его MIME-тип text/javascript.
      function pageLog(sMsg) {
        // Use a fragment: browser will only render/reflow once.
        var oFragm = document.createDocumentFragment();
        oFragm.appendChild(document.createTextNode(sMsg));
        oFragm.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(oFragm);
      }
    </script>
    <script type="text/js-worker">
      // Этот script НЕ БУДЕТ анализироваться JS движками, потому что его MIME-тип text/js-worker.
      onmessage = function(oEvent) {
        postMessage(myVar);
      };
      // Остальная часть кода вашего воркера идёт сюда.
    </script>
    <script type="text/javascript">
      // Этот script БУДЕТ проанализирован JS движкам, потому что его MIME-тип text/javascript.

      // В прошлом...:
      // blob builder существовал
      // ... но теперь мы используем Blob...:
      var blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text\/js-worker']"),
          function (oScript) {
            return oScript.textContent;
          },
        ),
        { type: "text/javascript" },
      );

      // Создание нового свойства document.worker, содержащего все наши "text/js-worker" скрипты.
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = function (oEvent) {
        pageLog("Received: " + oEvent.data);
      };

      // Запуск воркера.
      window.onload = function () {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

Встраиваемый worker теперь внесён в новое custom свойство `document.worker` Также стоит отметить, что вы также можете преобразовать функцию в BLOB-объект, а затем сгенерировать URL объекта из этого BLOB-объекта. Например:

```js
function fn2workerURL(fn) {
  var blob = new Blob(["(" + fn.toString() + ")()"], {
    type: "application/javascript",
  });
  return URL.createObjectURL(blob);
}
```

## Другие примеры

В этой секции представлено ещё несколько примеров как использовать worker-ы.

### Выполнение вычислений в фоне

Worker-ы в основном полезны для того, чтобы позволить вашему коду выполнять ресурсоёмкие вычисления, не блокируя поток пользовательского интерфейса. В этом примере, worker используется для вычисления числа Фибоначчи.

#### Код JavaScript

Следующий код JavaScript хранится в файле "fibonacci.js", на который ссылается HTML в следующем разделе.

```js
var results = [];

function resultReceiver(event) {
  results.push(parseInt(event.data));
  if (results.length == 2) {
    postMessage(results[0] + results[1]);
  }
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function (event) {
  var n = parseInt(event.data);

  if (n == 0 || n == 1) {
    postMessage(n);
    return;
  }

  for (var i = 1; i <= 2; i++) {
    var worker = new Worker("fibonacci.js");
    worker.onmessage = resultReceiver;
    worker.onerror = errorReceiver;
    worker.postMessage(n - i);
  }
};
```

Worker устанавливает свойство `onmessage` для функции, которая будет получать сообщения, отправленные при вызове `postMessage()` рабочего объекта (обратите внимание, что это отличается от определения глобальной _переменной_ с таким именем или определения _функции_ с таким именем. `var onmessage` и `function onmessage` будет определять глобальные свойства с этими именами , но они не будут регистрировать функцию для получения сообщений, отправленных веб-страницей, которая создала worker). Это запускает рекурсию, порождая новые копии для обработки каждой итерации вычисления.

#### HTML код

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Test threads fibonacci</title>
  </head>
  <body>
    <div id="result"></div>

    <script language="javascript">
      var worker = new Worker("fibonacci.js");

      worker.onmessage = function (event) {
        document.getElementById("result").textContent = event.data;
        dump("Got: " + event.data + "\n");
      };

      worker.onerror = function (error) {
        dump("Worker error: " + error.message + "\n");
        throw error;
      };

      worker.postMessage("5");
    </script>
  </body>
</html>
```

Веб-страница создаёт элемент `div` с ID `result` , который используется для отображения результата, а затем порождает worker. После порождения worker-а, обработчик `onmessage` настроен для отображения результатов путём установки содержимого элемента `div`, и обработчик `onerror` настроен на [выброс](/ru/docs/Debugging_JavaScript#dump.28.29) сообщения об ошибке.

Наконец, сообщение отправляется worker-у, чтобы запустить его.

[Попробуйте этот пример](/samples/workers/fibonacci).

### Выполнение веб I/O в фоне

Вы можете найти пример этого в статье [Использование worker-ов в расширениях](/ru/docs/Using_workers_in_extensions).

### Разделение задач между множественными worker-ами

Поскольку многоядерные компьютеры становятся все более распространёнными, часто бывает полезно разделить вычислительно сложные задачи между несколькими worker-ами, которые затем могут выполнить эти задачи на многопроцессорных ядрах.

## Другие типы worker-ов

В дополнение к выделенным и совместно используемым web worker-ам доступны другие типы worker-ов:

- [ServiceWorkers](/ru/docs/Web/API/ServiceWorker_API), по сути, действуют как прокси-серверы, которые размещаются между веб-приложениями, браузером и сетью (при наличии). Они предназначены (помимо прочего) для создания эффективного автономного взаимодействия, перехвата сетевых запросов и принятия соответствующих действий в зависимости от того, доступна ли сеть, и обновлены ли ресурсы на сервере. Они также разрешают доступ push-уведомлениям и API фоновой синхронизации.
- Chrome Workers это worker типа Firefox-only, который вы можете использовать, если вы разрабатываете дополнения и хотите использовать worker-ы в расширениях и иметь доступ к [js-ctypes](/en/js-ctypes) в вашем worker-е. Смотрите {{domxref("ChromeWorker")}} для более подробной информации.
- [Audio Workers](/ru/docs/Web/API/Web_Audio_API#Audio_Workers) предоставляют возможность прямой обработки звука по сценарию в контексте web worker-а.

## Функции и интерфейсы доступные в worker-ах

Внутри web worker-а вы можете использовать большинство стандартных функций JavaScript, включая:

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, и {{jsxref("Global_Objects/String", "String")}}
- {{domxref("Window.requestAnimationFrame")}}, {{domxref("WindowTimers.setTimeout")}}, и {{domxref("WindowTimers.setInterval")}}

Главное, что вы не можете сделать в Worker это напрямую повлиять на родительскую страницу. Это включает в себя манипулирование DOM и использование объектов этой страницы. Вы должны сделать это косвенно, отправив сообщение обратно основному сценарию через {{domxref("DedicatedWorkerGlobalScope.postMessage")}}, а затем выполнив изменения оттуда.

> **Примечание:** Для знакомства с полным списком функций, доступных для worker-ов, смотрите статью [Функции и интерфейсы доступные worker-ам](/ru/docs/Web/Reference/Functions_and_classes_available_to_workers).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`Worker`](/ru/docs/Web/API/Worker) интерфейс
- [`SharedWorker`](/ru/docs/Web/API/SharedWorker) интерфейс
- [Функции доступные для worker-ов](/ru/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Продвинутые концепции и примеры](/ru/docs/Web/API/Web_Workers_API/Using_web_workers)
