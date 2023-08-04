---
title: ServiceWorker
slug: Web/API/ServiceWorker
---

{{APIRef("Service Workers API")}}

Интерфейс `ServiceWorker`, являющийся частью [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API), позволяет взаимодействовать с Service Worker. К одному Service Worker могут быть привязаны несколько контекстов (например страниц, Web Workers, и т.д.), каждый с использованием собственного объекта `ServiceWorker`.

Объект `ServiceWorker` можно получить через свойства {{domxref("ServiceWorkerRegistration.active")}} и {{domxref("ServiceWorkerContainer.controller")}} — это Service Worker, который активировал и контролирует текущую страницу (в случае, если Service Worker был успешно зарегистрирован и страница была обновлена)

Интерфейс `ServiceWorker` обрабатывает события жизненного цикла: `install` и `activate` и функциональные события, например `fetch`. Объект `ServiceWorker` также содержит опцию {{domxref("ServiceWorker.state")}}, отражающую его состояние.

## Свойства

_Интерфейс `ServiceWorker` наследует свойства {{domxref("Worker")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : URL кода для данного Service Worker. URL должен находиться в том же домене, что и документ, регистрирующий `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : Состояние данного Service Worker. Может иметь следующие значения: `installing`, `installed,` `activating`, `activated` или `redundant`.

### Обработчики событий

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : Срабатывает при срабатывании события `statechange`; По сути, срабатывает при каждом изменении {{domxref("ServiceWorker.state")}}.

## Методы

_Интерфейс `ServiceWorker` наследует все методы интерфейса {{domxref("Worker")}}, кроме {{domxref("Worker.terminate")}}, который не должен быть доступен для Service Worker._

## Примеры

Этот фрагмент кода из [примера событий Service Worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([демо](https://googlechrome.github.io/samples/service-worker/registration-events/)). Данный код возвращает значение {{domxref("ServiceWorker.state")}} при каждом изменении состояния.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then(function (registration) {
      var serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        document.querySelector("#kind").textContent = "installing";
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector("#kind").textContent = "waiting";
      } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector("#kind").textContent = "active";
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", function (e) {
          // logState(e.target.state);
        });
      }
    })
    .catch(function (error) {
      // Произошла ошибка при регистрации Service Worker.
      // Файл service-worker.js может быть недоступным или содержать ошибки синтаксиса.
    });
} else {
  // Данный браузер не поддерживает Service Worker.
}
```

## Спецификации

{{Specifications}}

## Поддержка

{{Compat}}

## Смотрите Также

- [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook)
- [Использование Service Workers](/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Базовый пример для Service Worker](https://github.com/mdn/sw-test)
- [Поддержка ServiceWorker браузерами](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- [Использование Web Workers](/ru/docs/DOM/Using_web_workers)
