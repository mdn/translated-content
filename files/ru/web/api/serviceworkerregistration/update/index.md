---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Метод **`update`** интерфейса {{domxref("ServiceWorkerRegistration")}} предназначен для обновления service worker. Он обращается по URL service worker-a, и если новый worker побайтно не совпадает с текущим, инсталлирует новую версию. Обращение за новой версией worker обходит любые кеши браузера, если предыдущее обращение произошло более 24 часов назад..

> **Примечание:** Эта возможность доступна в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Синтаксис

```
ServiceWorkerRegistration.update();
```

### Параметры

Нет.

### Возвращает

{{domxref("Промис")}}, который разрешается в объект {{domxref("ServiceWorkerRegistration")}}.

## Пример

В следующем простом примере регистрируется service worker, а затем добавляется обработчик события клика по кнопке, так что вы можете явно обновить service worker по необходимости:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw-test/sw.js", { scope: "sw-test" })
    .then(function (registration) {
      // Регистрация произошла
      console.log("Registration succeeded.");
      button.onclick = function () {
        registration.update();
      };
    })
    .catch(function (error) {
      // Ошибка при регистрации
      console.log("Registration failed with " + error);
    });
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers базовый пример кода](https://github.com/mdn/sw-test)
- [Готов ли ServiceWorker?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Промисы")}}
- [Использование web workers](/ru/docs/Web/Guide/Performance/Using_web_workers)
