---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
---

{{APIRef('XMLHttpRequest')}}

Свойство **`XMLHttpRequest.timeout`** определяет количество миллисекунд, которое запрос будет выполняться, до того, как будет автоматически прерван. Имеет размер `unsigned long.` Значение по умолчанию - 0, определяет, что таймаута нет. Таймаут не должен быть использован в синхронных запросах XMLHttpRequests в {{Glossary('среде документа')}}, или будет вызвано исключение `InvalidAccessError`. Когда случается таймаут - вызывается событие [timeout](/ru/docs/Web/Events/timeout).

> **Примечание:** вы не можете использовать таймаут для синхронных запросов с окном - владельцем.[Использование таймаута с асинхронными запросами](/ru/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_using_a_timeout)

В Internet Explorer, свойство timeout может быть установлено только после вызова метода [open()](/ru/docs/Web/API/XMLHttpRequest/open) и до вызова метода [send()](/ru/docs/Web/API/XMLHttpRequest/send).

## Пример

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = function () {
  // Запрос завершён. Здесь можно выполнить обработку.
};

xhr.ontimeout = function (e) {
  // Таймаут. Здесь можно выполнить что-нибудь..
};

xhr.send(null);
```

## Спецификации

{{Specifications}}
