---
title: "Response: свойство body"
slug: Web/API/Response/body
l10n:
  sourceCommit: 84b1729de4f527c8d81e44a38fca70ea4db97922
---

{{APIRef("Fetch API")}}

Доступное только для чтения свойство **`body`** интерфейса {{domxref("Response")}} представляет собой {{domxref("ReadableStream")}} содержимого тела ответа.

## Значение

{{domxref("ReadableStream")}} или [`null`](/ru/docs/Web/JavaScript/Reference/Operators/null) для объектов `Response`, [созданных](/ru/docs/Web/API/Response/Response) с пустым свойством [`body`](/ru/docs/Web/API/Response/Response#body), и для [HTTP ответов](/ru/docs/Web/HTTP/Messages#http_responses) без [тела](/ru/docs/Web/HTTP/Messages#body_2).

Поток представляет собой [поток байтов для чтения](/ru/docs/Web/API/Streams_API/Using_readable_byte_streams), который поддерживает чтение без копирования с использованием {{domxref("ReadableStreamBYOBReader")}}.

> [!NOTE]
> В настоящее время браузеры не следуют требованию спецификации устанавливать свойству `body` значение `null` для ответов без тела (например, для ответов на запросы [`HEAD`](/ru/docs/Web/HTTP/Methods/HEAD) или [`204 No Content`](/ru/docs/Web/HTTP/Status/204)).

## Примеры

### Копирование изображения

В нашем [простом примере](https://mdn.github.io/dom-examples/streams/simple-pump/) мы получаем изображение, открываем поток ответа, используя `response.body`, создаем считыватель с помощью {{domxref("ReadableStream.getReader()")}}, а затем помещаем фрагменты исходного потока во второй поток для чтения, фактически создавая идентичную копию изображения.

```js
const image = document.getElementById("target");

// Получаем исходное изображение
fetch("./tortoise.png")
  // Извлекаем его тело как ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();

    return new ReadableStream({
      start(controller) {
        return pump();

        function pump() {
          return reader.read().then(({ done, value }) => {
            // Когда больше не нужно использовать данные, закрываем поток
            if (done) {
              controller.close();
              return;
            }

            // Помещаем следующий фрагмент данных в целевой поток
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

### Создание читателя BYOB

В этом примере мы создаем {{domxref("ReadableStreamBYOBReader")}} из тела ответа с помощью {{domxref("ReadableStream.getReader()", "ReadableStream.getReader({mode: 'byob'})")}}. Затем мы можем использовать этот считыватель для реализации передачи данных ответа без копирования.

```js
async function getProducts(url) {
  const response = await fetch(url);
  const reader = response.body.getReader({ mode: "byob" });
  // читаем ответ
}

getProducts(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
- [Streams API](/ru/docs/Web/API/Streams_API)
- [ServiceWorker API](/ru/docs/Web/API/Service_Worker_API)
