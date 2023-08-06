---
title: Использование Fetch
slug: Web/API/Fetch_API/Using_Fetch
---

[Fetch API](/ru/docs/Web/API/Fetch_API) предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод {{domxref("GlobalFetch.fetch","fetch()")}}, который позволяет легко и логично получать ресурсы по сети асинхронно.

Подобная функциональность ранее достигалась с помощью {{domxref("XMLHttpRequest")}}. Fetch представляет собой лучшую альтернативу, которая может быть легко использована другими технологиями, такими как {{domxref("ServiceWorker_API", "Service Workers")}}. Fetch также обеспечивает единое логическое место для определения других связанных с HTTP понятий, такие как CORS и расширения для HTTP.

Обратите внимание, `fetch` спецификация отличается от `jQuery.ajax()` в основном в двух пунктах:

- Promise возвращаемый вызовом `fetch()` **не перейдёт в состояние "отклонено" из-за ответа HTTP, который считается ошибкой**, даже если ответ HTTP 404 или 500. Вместо этого, он будет выполнен нормально (с значением false в статусе `ok` ) и будет отклонён только при сбое сети или если что-то помешало запросу выполниться.
- По умолчанию, `fetch` **не будет отправлять или получать cookie файлы** с сервера, в результате чего запросы будут осуществляться без проверки подлинности, что приведёт к неаутентифицированным запросам, если сайт полагается на проверку пользовательской сессии (для отправки cookie файлов в аргументе [init options](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) должно быть задано значение свойства _credentials_ отличное от значения по умолчанию `omit`).

> **Примечание:** 25 августа 2017 г. в спецификации изменилось значение по умолчанию свойства _credentials_ на `same-origin`. Firefox применяет это изменение с версии 61.0b13.

Базовый запрос на получение данных действительно прост в настройке. Взгляните на следующий код:

```
fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

Здесь мы забираем JSON файл по сети и выводим его содержимое в консоль. Самый простой способ использования `fetch()` заключается в вызове этой функции с одним аргументом — строкой, содержащей путь к ресурсу, который вы хотите получить — которая возвращает promise, содержащее ответ (объект {{domxref("Response")}}).

Конечно, это просто HTTP-ответ, а не фактический JSON. Чтобы извлечь содержимое тела JSON из ответа, мы используем {{domxref("Body.json","json()")}} метод (определён миксином {{domxref("Body")}}, который реализован в объектах {{domxref("Request")}} и {{domxref("Response")}}.)

> **Примечание:** Миксин Body имеет подобные методы для извлечения других типов контента; см. раздел [Тело](#тело).

Fetch-запросы контролируются посредством директивы `connect-src` ([Content Security Policy](/ru/docs/Security/CSP/CSP_policy_directives)), а не директивой извлекаемых ресурсов.

### Установка параметров запроса

Метод `fetch()` может принимать второй параметр - объект `init`, который позволяет вам контролировать различные настройки:

```js
// Пример отправки POST запроса:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `response.json()` call
});
```

С подробным описанием функции и полным списком параметров вы можете ознакомиться на странице {{domxref("GlobalFetch.fetch","fetch()")}}.

### Отправка запроса с учётными данными

Чтобы браузеры могли отправлять запрос с учётными данными (даже для cross-origin запросов), добавьте `credentials: 'include'` в объект `init`, передаваемый вами в метод `fetch()`:

```js
fetch("https://example.com", {
  credentials: "include",
});
```

Если вы хотите отправлять запрос с учётными данными только если URL принадлежит одному источнику (origin) что и вызывающий его скрипт, добавьте credentials: 'same-origin'.

```js
// Вызывающий скрипт принадлежит источнику 'https://example.com'

fetch("https://example.com", {
  credentials: "same-origin",
});
```

Напротив, чтобы быть уверенным, что учётные данные не передаются с запросом, используйте credentials: 'omit':

```js
fetch("https://example.com", {
  credentials: "omit",
});
```

## Отправка данных в формате JSON

При помощи {{domxref("GlobalFetch.fetch","fetch()")}} можно отправлять POST-запросы в формате JSON.

```js
const url = "https://example.com/profile";
const data = { username: "example" };

try {
  const response = await fetch(url, {
    method: "POST", // или 'PUT'
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log("Успех:", JSON.stringify(json));
} catch (error) {
  console.error("Ошибка:", error);
}
```

## Загрузка файла на сервер

На сервер можно загрузить файл, используя комбинацию HTML-элемента `<input type="file" />`, {{domxref("FormData.FormData","FormData()")}} и {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}}.

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

try {
  const response = await fetch("https://example.com/profile/avatar", {
    method: "PUT",
    body: formData,
  });
  const result = await response.json();
  console.log("Успех:", JSON.stringify(result));
} catch (error) {
  console.error("Ошибка:", error);
}
```

## Загрузка нескольких файлов на сервер

На сервер можно загрузить несколько файлов, используя комбинацию HTML-элемента `<input type="file" multiple />`, {{domxref("FormData.FormData","FormData()")}} и {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}}.

```js
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append("title", "Мой отпуск в Вегасе");
for (let i = 0; i < photos.files.length; i++) {
  formData.append("photos", photos.files[i]);
}

try {
  const response = await fetch("https://example.com/posts", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  console.log("Успех:", JSON.stringify(result));
} catch (error) {
  console.error("Ошибка:", error);
}
```

## Обработка текстового файла построчно

Фрагменты данных, получаемые из ответа, не разбиваются на строки автоматически (по крайней мере с достаточной точностью) и представляют собой не строки, а объекты {{jsxref("Uint8Array","Uint8Array")}}. Если вы хотите загрузить текстовый файл и обрабатывать его по мере загрузки построчно, то на вас самих ложится груз ответственности за обработку всех упомянутых моментов. Как пример, далее представлен один из способов подобной обработки с помощью создания построчного итератора (для простоты приняты следующие допущения: текст приходит в кодировке UTF-8 и ошибки получения не обрабатываются).

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    //последняя строка не имеет символа перевода строки в конце
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}
```

## Проверка успешности запроса

В методе {{domxref("GlobalFetch.fetch","fetch()")}} promise будет отклонён (reject) с {{jsxref("TypeError")}}, когда случится ошибка сети или не будет сконфигурирован CORS на стороне запрашиваемого сервера, хотя обычно это означает проблемы доступа или аналогичные — для примера, 404 не является сетевой ошибкой. Для достоверной проверки успешности fetch() будет включать проверку того, что promise успешен (resolved), затем проверку того, что значение свойства {{domxref("Response.ok")}} является true. Код будет выглядеть примерно так:

```js
try {
  const response = await fetch("flowers.jpg");
  if (!response.ok) {
    throw new Error("Ответ сети был не ok.");
  }
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
} catch (error) {
  console.log("Возникла проблема с вашим fetch запросом: ", error.message);
}
```

## Составление своего объекта запроса

Вместо передачи пути ресурса, который вы хотите запросить вызовом fetch(), вы можете создать объект запроса, используя конструктор {{domxref("Request.Request","Request()")}}, и передать его в fetch() аргументом:

```js
const myHeaders = new Headers();

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);
const response = await fetch(myRequest);
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;
```

Конструктор Request() принимает точно такие же параметры, как и метод fetch(). Вы даже можете передать существующий объект запроса для создания его копии:

```js
const anotherRequest = new Request(myRequest, myInit);
```

Довольно удобно, когда тела запроса и ответа используются единожды (прим.пер.: "are one use only"). Создание копии как показано позволяет вам использовать запрос/ответ повторно, при изменении опций init, при желании. Копия должна быть сделана до прочтения тела, а чтение тела в копии также пометит его прочитанным в исходном запросе.

Примечание: Также есть метод {{domxref("Request.clone","clone()")}}, создающий копии. Оба метода создания копии прекратят работу с ошибкой если тело оригинального запроса или ответа уже было прочитано, но чтение тела клонированного ответа или запроса не приведёт к маркировке оригинального.

## Заголовки

Интерфейс {{domxref("Headers")}} позволяет вам создать ваш собственный объект заголовков через конструктор {{domxref("Headers.Headers","Headers()")}}. Объект заголовков - простая мультикарта имён-значений:

```js
const content = "Hello World";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```

То же может быть достигнуто путём передачи массива массивов или литерального объекта конструктору:

```js
const myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

Содержимое может быть запрошено и извлечено:

```js
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]
```

Некоторые из этих операций могут быть использованы только в {{domxref("ServiceWorker_API","ServiceWorkers")}}, но они предоставляют более удобный API для манипуляции заголовками.

Все методы Headers выбрасывают TypeError, если имя используемого заголовка не является валидным именем HTTP Header. Операции мутации выбросят TypeError если есть защита от мутации (смотрите ниже) (прим.пер.: "if there is an immutable guard"). В противном случае они прерываются молча. Например:

```js
const myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch (e) {
  console.log("Не могу притвориться банком!");
}
```

Хорошим вариантом использования заголовков является проверка корректности типа контента перед его обработкой. Например:

```js
try {
  const response = await fetch(myRequest);
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new TypeError("Ой, мы не получили JSON!");
  }
  const json = await response.json();
  /_ Дальнейшая обработка JSON _/;
} catch (error) {
  console.log(error);
}
```

### Защита

С тех пор как заголовки могут передаваться в запросе, приниматься в ответе и имеют различные ограничения в отношении того, какая информация может и должна быть изменена, заголовки имеют свойство guard. Это не распространяется на Web, но влияет на то, какие операции мутации доступны для объекта заголовков.

Возможные значения:

none: по умолчанию.request: защита объекта заголовков, полученного по запросу ({{domxref("Request.headers")}}).request-no-cors: защита объекта заголовков, полученного по запросу созданного с {{domxref("Request.mode")}} no-cors.response: защита Headers полученных от ответа ({{domxref("Response.headers")}}).immutable: в основном, используется в ServiceWorkers; делает объект заголовков read-only.

Примечание: вы не можете добавить или установить request защищаемые Headers' заголовок Content-Length. Аналогично, вставка Set-Cookie в заголовок ответа недопустимо: ServiceWorkers не допускают установки cookies через синтезированные ответы.

Объекты ответа

Как вы видели выше, экземпляр {{domxref("Response")}} будет возвращён когда fetch() промис будет исполнен.

Свойства объекта-ответа которые чаще всего используются:

{{domxref("Response.status")}} — Целочисленное (по умолчанию 200) содержит код статуса ответа.{{domxref("Response.statusText")}} — Строка (по умолчанию"OK"), которая соответствует HTTP коду статуса.{{domxref("Response.ok")}} — как сказано ранее, это короткое свойство для упрощения проверки на то что статус ответа находится где-то между 200-299 включительно. Это свойство типа {{domxref("Boolean")}}.

Они так же могут быть созданы с помощью JavaScript, но реальная польза от этого есть только при использовании {{domxref("ServiceWorker_API", "сервис-воркеров")}}, когда вы предоставляете собственный ответ на запрос с помощью метода {{domxref("FetchEvent.respondWith","respondWith()")}}:

```js
const myBody = new Blob();

addEventListener("fetch", function (event) {
  // ServiceWorker перехватывает fetch
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

Конструктор {{domxref("Response.Response","Response()")}} принимает два необязательных аргумента — тело для ответа и объект init (аналогичный тому, который принимает {{domxref("Request.Request","Request()")}})

Примечание: Метод {{domxref("Response.error","error()")}} просто возвращает ответ об ошибке. Аналогично, {{domxref("Response.redirect","redirect()")}} возвращает ответ, приводящий к перенаправлению на указанный URL. Они также относятся только к Service Workers.

## Тело

Запрос и ответ могут содержать данные тела. Тело является экземпляром любого из следующих типов:

{{domxref("ArrayBuffer")}}{{domxref("ArrayBufferView")}} (Uint8Array и подобные){{domxref("Blob")}}/Filestring{{domxref("URLSearchParams")}}{{domxref("FormData")}}

{{domxref("Body")}} примесь определяет следующие методы для извлечения тела (реализованы как для {{domxref("Request")}} так и для {{domxref("Response")}}). Все они возвращают promise, который в конечном итоге исполняется и выводит содержимое.

{{domxref("Body.arrayBuffer","arrayBuffer()")}}{{domxref("Body.blob","blob()")}}{{domxref("Body.json","json()")}}{{domxref("Body.text","text()")}}{{domxref("Body.formData","formData()")}}

Это делает использование нетекстовых данных более лёгким, чем при XMR.

В запросе можно установить параметры для отправки тела запроса:

```js
const form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

Параметры request и response (and by extension the fetch() function), по возможности возвращают корректные типы данных. Параметр request также автоматически установит Content-Type в заголовок, если он не был установлен из словаря.

## Функция обнаружения

Поддержка Fetch API может быть обнаружена путём проверки наличия {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} или {{domxref("GlobalFetch.fetch","fetch()")}} в области видимости {{domxref("Window")}} или {{domxref("Worker")}}. Для примера:

```js
if (self.fetch) {
  // запустить мой fetch запрос здесь
} else {
  // Сделать что-то с XMLHttpRequest?
}
```

## Полифил

Для того, чтобы использовать Fetch в неподдерживаемых браузерах, существует Fetch Polyfill , который воссоздаёт функциональность для не поддерживающих браузеров.

СпецификацииSpecification Status Comment{{SpecName('Fetch')}} {{Spec2('Fetch')}} Initial definitionСовместимость браузера

{{Compat("api.fetch")}}

Смотрите такжеServiceWorker APIHTTP access control (CORS)HTTPFetch polyfillFetch examples on Github`
