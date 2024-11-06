---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
---

{{APIRef("Web Workers API")}}

Метод **`postMessage()`** интерфейса {{domxref("Worker")}} отправляет сообщение во внутреннее пространство `worker`-а. Метод имеет один параметр с данными для отправки в `worker`. Данные могут быть любым значением или объектом JavaScript, которые может обработать [алгоритм структурированного клонирования](/ru/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), поддерживающий циклические ссылки.

`Worker` может отправить обратно информацию потоку создавшему его с помощью метода {{domxref("DedicatedWorkerGlobalScope.postMessage")}}.

## Синтаксис

```js
worker.postMessage(message, [transfer]);
```

### Параметры

- _message_
  - : `Object` передаваемый в `worker`. Будет содержаться в поле `data` описания события обработчика {{domxref("DedicatedWorkerGlobalScope.onmessage")}}. Это может быть любое значение или объект JavaScript, которые может обработать алгоритм структурированного клонирования, поддерживающий циклические ссылки.
- _transfer_ {{optional_inline}}

  - : Необязательный [`array`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) с передаваемыми ({{domxref("Transferable")}}) объектами (из тех, что были указаны в `message`) на которые передаются права собственности. Если право на объект передаётся, он становится непригодным (_neutered_) в контексте, из которого был отправлен, и становится доступным только в `worker`, которому он был отправлен.

    Переданные (`transferable`) объекты могут быть экземплярами классов {{domxref("ArrayBuffer")}}, {{domxref("MessagePort")}} или {{domxref("ImageBitmap")}}. null не является допустимым значением для передачи прав.

### Возвращаемое значение

Void.

## Пример

В следующем фрагменте кода показано создание объекта {{domxref("Worker")}} с помощью конструктора {{domxref("Worker.Worker", "Worker()")}}. При изменении значений одного из двух полей формы (`first` и `second`) событием {{event("change")}} вызывается функция `postMessage()` для отправки значений полей текущему worker.

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Сообщение отправлено работнику");
};

second.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Сообщение отправлено работнику");
};
```

Больше примеров можно найти здесь: [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

> **Примечание:** `postMessage()` может отправить только один объект за раз. Если нужно передать несколько значений, то можно отправить массив, как показано выше.

### Пример с Transfer

В этом примере показано дополнение Firefox, которое передаёт `ArrayBuffer` из основного потока в `ChromeWorker`, а затем `ChromeWorker` передаёт его обратно в основной поток.

#### Код основного потока

```js
var myWorker = new ChromeWorker(self.path + "myWorker.js");

function handleMessageFromWorker(msg) {
  console.log("входящее сообщение от работника:", msg);
  switch (msg.data.aTopic) {
    case "do_sendMainArrBuff":
      sendMainArrBuff(msg.data.aBuf);
      break;
    default:
      throw "свойство aTopic отсутствует в сообщении ChromeWorker";
  }
}

myWorker.addEventListener("message", handleMessageFromWorker);

// Создание и отправка буфера
var arrBuf = new ArrayBuffer(8);
console.info("arrBuf.byteLength, ДО передачи:", arrBuf.byteLength);

myWorker.postMessage(
  {
    aTopic: "do_sendWorkerArrBuff",
    aBuf: arrBuf, // буфер который передаётся 3 строками ниже
  },
  [
    arrBuf, // буфер созданный на строке 9
  ],
);

console.info("arrBuf.byteLength, ПОСЛЕ передачи:", arrBuf.byteLength);
```

#### Код Worker-а

```js
self.onmessage = function (msg) {
  switch (msg.data.aTopic) {
    case "do_sendWorkerArrBuff":
      sendWorkerArrBuff(msg.data.aBuf);
      break;
    default:
      throw "свойство aTopic отсутствует в сообщении ChromeWorker";
  }
};

function sendWorkerArrBuff(aBuf) {
  console.info(
    "от рабочего, ДО отправки обратно, aBuf.byteLength:",
    aBuf.byteLength,
  );

  self.postMessage({ aTopic: "do_sendMainArrBuff", aBuf: aBuf }, [aBuf]);

  console.info(
    "от рабочего, ПОСЛЕ отправки обратно, aBuf.byteLength:",
    aBuf.byteLength,
  );
}
```

#### Лог консоли

```
arrBuf.byteLength, ДО передачи: 8                               bootstrap.js:40
arrBuf.byteLength, ПОСЛЕ передачи: 0                            bootstrap.js:42

от рабочего, ДО отправки обратно, aBuf.byteLength: 8            myWorker.js:5:2

входящее сообщение от работника: message { ... }                bootstrap.js:20
буфер вернулся в основной поток, aBuf.byteLength: 8             bootstrap.js:12

от рабочего, ПОСЛЕ отправки обратно, aBuf.byteLength: 0         myWorker.js:7:2
```

`byteLength` равен 0 потому, что это переданный (`transferable`) объект. Полный пример демо дополнения Firefox можно найти здесь: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

\[1] Internet Explorer не поддерживает {{domxref("Transferable")}} объекты.

## Смотрите также

- Интерфейс {{domxref("Worker")}}
