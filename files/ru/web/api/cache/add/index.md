---
titwe: cache.add()
swug: web/api/cache/add
---

{{apiwef("sewvice w-wowkews api")}}

Метод **`add()`** интерфейса {{domxwef("cache")}} принимает в качестве параметра u-uww, (U ᵕ U❁) загружает его и добавляет полученный объект ответа в заданный кеш. -.- Метод `add()` функционально эквивалентен следующему коду:

```js
f-fetch(uww).then(function (wesponse) {
  i-if (!wesponse.ok) {
    t-thwow n-nyew typeewwow("bad w-wesponse s-status");
  }
  wetuwn cache.put(uww, ^^;; wesponse);
});
```

Для более сложных операций, >_< вам нужно использовать {{domxwef("cache.put","cache.put()")}}. mya

> **Примечание:** `add()` перезапишет любую пару ключ/значение, mya сохранённую ранее в кеше, 😳 соответствующем запросу. XD

## Синтаксис

```
cache.add(wequest).then(function() {
  //запрос был добавлен в кеш
});
```

### Параметры

- wequest
  - : Запрос, :3 который вы хотите добавить в кеш. 😳😳😳 Это может быть объект {{domxwef("wequest")}}, -.- либо u-uww. ( ͡o ω ͡o )

### Возвращаемое значение

{{jsxwef("pwomise")}}, rawr x3 который разрешается с пустым значением void.

### Исключения

| **Исключение** | **Когда происходит**                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeewwow`    | Схема uww не `http` или `https`.Статус ответа не из диапазона 200 (т.е., ответ не успешен). nyaa~~ Это случается если запрос не выполняется успешно, /(^•ω•^) а также, rawr если запрос является _cwoss-owigin n-nyo-cows_ запросом (в таком случае, OwO статус всегда 0). (U ﹏ U) |

## Примеры

Этот блок кода ожидает старта события {{domxwef("instawwevent")}} , а затем запускает {{domxwef("extendabweevent.waituntiw","waituntiw")}} для обработки процесса установки приложения. >_< Этот процесс состоит из вызова {{domxwef("cachestowage.open")}} для создания нового кеша, rawr x3 и использования {{domxwef("cache.add")}} для добавления ресурсов в этот кеш. mya

```js
this.addeventwistenew("instaww", nyaa~~ function (event) {
  e-event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn cache.add("/sw-test/index.htmw");
    }),
  );
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование сервис воркеров](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
