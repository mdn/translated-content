---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

**`register()`** метод {{domxref("ServiceWorkerContainer")}} интерфейса который создаёт и обновляет [`ServiceWorkerRegistration`](/ru/docs/Web/API/ServiceWorkerRegistration) для указанного `URL` js скрипта.

Если удачно, service worker registration связывается по указанному URL js скрипта , который соответственно используется для проверки совпадения при навигации по URL. Если метод не возвращает `ServiceWorkerRegistration`, он возвращает [`Promise`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise). Есть возможность вызвать этот метод без проверки на условие, т.е. нет необходимости сначала проверять существует ли активная регистрация в данный момент или нет.

## Синтаксис

```js
ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });
```

### Параметры

- `scriptURL`
  - : URL скрипта service worker - а.
- `options` `{{optional_inline}}`

  - : Опции — это объект необходимый для регистрации service worker-a. В данный момент доступные опции:

    - `scope`: {{domxref("USVString")}} представляет собой URL, который определяет scope service worker-a; Какой диапазон URL может контролировать service worker. Это обычно относительный URL. Значение по умолчанию — это URL, который соответствует корню, т.е. './', используя директорию расположения js скрипта service worker-а как основу.

### Возвращает

{{domxref("Promise")}} который резолвится в {{domxref("ServiceWorkerRegistration")}} объект.

## Пример использования

Примеры кода, приведённые ниже, должны рассматриваться вместе для лучшего понимания того, как применяется scope service worker-ов к конкретной странице.

Следующий пример использует дефолтный scope (не указывая его прямо). Service worker в этом случае будет контролировать `example.com/index.html` и страницы, расположенные "глубже", например `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Регистрация service worker-а, расположенного в корне сайта
  // за счёт использования дефолтного scope (не указывая его)
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log("Service worker зарегистрирован:", registration);
    })
    .catch(function (error) {
      console.log("Ошибка при регистрации service worker-а:", error);
    });
} else {
  // Текущий браузер не поддерживает service worker-ы.
  console.log("Текущий браузер не поддерживает service worker-ы");
}
```

Следующий пример, если он размещён на странице корня сайта, будет применён ровно к тем же страницам, что и пример выше. Помните, scope, если он указан, использует path страницы в качестве своей базы. Это значит, что, если следующий пример будет использоваться на странице `example.com/product/description.html`, то scope `./` будет означать, что service worker работает только со страницами внутри `example.com/product`. Если необходимо зарегистрировать service worker на `example.com/product/description.html`, и вы хотите, чтобы он обслуживал и корень, `example.com`, то scope лучше не указывать совсем, как в примере выше.

```js
if ("serviceWorker" in navigator) {
  // Регистрация service worker-а, расположенного в корне сайта
  // с указанием более строгого scope
  navigator.serviceWorker
    .register("/sw.js", { scope: "./" })
    .then(function (registration) {
      console.log("Service worker зарегистрирован:", registration);
    })
    .catch(function (error) {
      console.log("Ошибка при регистрации service worker-а:", error);
    });
} else {
  console.log("Текущий браузер не поддерживает service worker-ы.");
}
```

## Спецификация

{{Specifications}}

## Браузерная совместимость

{{Compat}}
