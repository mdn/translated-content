---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}Console API обеспечивает функциональность, которая позволяет разработчикам выполнять задачи по отладке, такие как логирование сообщений или значений переменных в определённых местах кода, измерение времени, требуемое на выполнение задачи

## Понятие и использование

Console API изначально было собственным API с различной браузерной реализацией. [Спецификация Console API](https://console.spec.whatwg.org) была создана, чтобы согласовать поведение. Сейчас все современные браузеры используют эту реализацию. Хотя некоторые реализации имеют свои собственные функции. Узнать больше можно здесь:

- [Google Chrome DevTools implementation](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari DevTools implementation](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Использование крайне простое — объект {{domxref("console")}} ({{domxref("window.console")}} в браузерах или {{domxref("WorkerGlobalScope.console")}} в Web Worker) содержит множество методов, которые вы можете вызвать для выполнения отладки. В основном используется для вывода [веб-консоль](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) различных значений.

Один из самых часто используемых методов {{domxref("console.log")}}, который используют для вывода текущего значения переменной.

## Интерфейсы

- {{domxref("console")}}
  - : Обеспечивает простую функциональность для отладки. Включает в себя логирование, трассировку, таймеры и счётчики.

## Примеры

```js
let myString = "Hello world";

// Вывод "Hello world" в консоль
console.log(myString);
```

Смотрите больше примеров на странице [Console](/ru/docs/Web/API/console#usage).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Инструменты разработчика](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Веб-консоль](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — как Веб-консоль в Firefox работает с вызовами Console API
- [Отладка удалённых скриптов](https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/index.html) — как увидеть консоль, когда выполняется отладка на мобильных устройствах
